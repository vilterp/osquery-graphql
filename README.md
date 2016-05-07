# osquery-graphql

Explore what's going on in your system with the power of [GraphQL](http://graphql.org/), powered by [OSQuery](http://osquery.io/).

```
brew install osquery
npm install
npm run start
```

& navigate to [http://localhost:3100/qraphql](http://localhost:3100/) for the GraphiQL console.

Currently supports only a small subset of what OSQuery provides, and some queries crap out, probably due to shelling out to osquery a zillion times. This can probably be fixed by using [`facebook/dataloader`](https://github.com/facebook/dataloader) to coalesce osquery queries.
