---
id: graphql
title: GraphQL
permalink: graphql.html
next: using-generators.html
---

To begin with, we're proud to announce that Nodal has started supporting GraphQL as an interface layer between your PostgreSQL database and your endpoints, giving the client full control over the data they retrieve (if you'd like to enable it). We're a little bit unique in our implementation and still working out some details, but querying is a go!

If you're unfamiliar with the GraphQL specification, you're welcome to check out [a brief introduction to GraphQL](https://learngraphql.com/basics/introduction).

Using GraphQL to fetch model data or manipulate responses is easy. In any Controller, you can just use;

```javascript
const GraphQuery = Nodal.GraphQuery;

GraphQuery.query(str, 5, (err, models, format) => {

  this.respond(err || models, format);

});
```

Where models are the full models fetched, and format is the format (which fields to show) of your models.

If you wanted to query your users and get some data, you might do the following;

```javascript
GraphyQuery.query(
  'users { id, username, email }',
  0,
  (err, models, format) => this.respond(err || models, format)
);
```

If you wanted to choose a specific user and join in some posts...

```javascript
GraphyQuery.query(
  'users(id: 7) { id, username, posts { body } }',
  0,
  (err, models, format) => this.respond(err || models, format)
);
```

The number (0) in this case specifies the max depth to traverse. Setting 0 means queries can have unlimited depth.
