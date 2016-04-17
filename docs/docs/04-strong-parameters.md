---
id: strong-parameters
title: Strong Parameters
permalink: strong-parameters.html
next: using-generators.html
---

In a Controller, this.params.query and this.params.body are now instances of StrongParameters meaning you can restrict which fields you'd like to have access to.

```javascript
// input {name: 'Gemma', age: 45} ->
this.params.query.except('name');
// -> output {age: 45}

// input {name: 'Gemma', age: 45} ->
this.params.query.permit('name');
// -> output {name: 'Gemma'}
```

You can still access the raw POST body with this.params.buffer.
