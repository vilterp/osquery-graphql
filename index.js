import express from 'express';
import { graphql } from 'graphql';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

let app  = express();
let PORT = 3100;

app.use(cookieParser());

app.use('/graphql', graphqlHTTP((request) =>
  ({
    rootValue: {
      cookies: request.cookies,
      headersForCore: request.headersForCore,
      currentDomain: request.currentDomain
    },
    schema: schema,
    graphiql: true
  })));

app.get('/health', function(req, res) {
  res.status(200).send({
    healthy: true
  });
});

let server = app.listen(PORT, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log('GraphQL listening at http://%s:%s', host, port);
});
