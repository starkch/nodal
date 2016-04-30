---
id: sensitive-fields
title: Sensitive Fields
permalink: sensitive-fields.html
next: using-generators.html
---

To prevent accidentally showing your users secure fields (i.e. password) by mistyping, you can secure fields with Model.hides in your Model definition file.

```javascript
// Password will NEVER be shown as the output of an API response
User.hides('password');
```
