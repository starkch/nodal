---
id: cascading-joins
title: Cascading Joins
permalink: cascading-joins.html
next: using-generators.html
---

Related to deep joins, you can now do `Model#destroyCascade` and `ModelArray#destroyCascade` that will destroy all dependent (child) models given a parent.

```javascript
User.find(1, (err, user) => {

  user.destroyCascade(err => {
    // Destroy everything!
  });

});
```
