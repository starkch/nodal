---
id: conditional-joins
title: Conditional Joins
permalink: conditional-joins.html
next: using-generators.html
---

In order to make sure we could support GraphQL syntax, we also enabled Conditional Joins. You can now restrict which models get joined on a query.

```javascript
User.query()
  .where({posts__body__icontains: 'Minecraft'})
  .join('posts', {body__icontains: 'Minecraft'})
  .end((err, users) => {

    // All users who have posted about minecraft, containing their
    // minecraft-related posts

  });
```
