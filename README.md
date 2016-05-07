# osquery-graphql

Explore what's going on in your system with the power of [GraphQL](http://graphql.org/), powered by [OSQuery](http://osquery.io/).

```
brew install osquery
npm install
npm run start
```

& navigate to [http://localhost:3100/qraphql](http://localhost:3100/) for the GraphiQL console, which lets you explore the schema and try out queries.

Currently supports only a small subset of what OSQuery provides, and some queries crap out, probably due to shelling out to osquery a zillion times. This can probably be fixed by using [`facebook/dataloader`](https://github.com/facebook/dataloader) to coalesce osquery queries.

Another idea for future work (once you can reliably query around to basic system objects): GraphQL subscriptions providing realtime updates, powered by DTrace or STrace. This could power an interface in which file objects pulse when they are being written to, socket objects pulse when they are sending or receiving, processes pulse when they are using CPU, etc.
