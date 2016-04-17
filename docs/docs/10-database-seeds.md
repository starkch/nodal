---
id: database-seeds
title: Database Seeds
permalink: database-seeds.html
next: using-generators.html
---

You can now modify `config/seed.json` to set environment `(NODE_ENV)` specific seeds. Each environment configuration takes an Object of model names, which each expects an array of objects representing values to insert.

Any `beforeSave()` logic will be triggered for each Model.

Seeds can executed using nodal db:seed.

For example,

```json
{
  "test": {
    "User": [
      {
        "email": "test@test.com",
        "password": "password",
        "username": "test"
      }
    ],
    "Post": [
      {
        "body": "Hello, world."
      },
      {
        "body": "Post #2"
      }
    ]
  }
}
```
