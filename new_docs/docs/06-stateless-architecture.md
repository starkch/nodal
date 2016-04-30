---
id: stateless-architecture
title: Stateless Architecture
permalink: stateless-architecture.html
next: using-generators.html
---

Nodal has done away with the traditional monolithic, stateful app running in a single process. The Nodal Daemon now distributes load across cores and all Middleware / Renderware is handled by the router and individual controllers.

To specify middleware / renderware for the router (global, all controllers) use:

```javascript
router.middleware.use(myMiddleware); // goes first (before controller)
router.renderware.use(myRenderware); // goes last (after controller)
```

And for a specific controller, use the brand new `before()` method in your Controller definition file.

```javascript
class MyController extends Nodal.Controller {

  before() {

    this.middleware.use(RateLimitMiddleware);
    this.renderware.use(TransformDataRenderware);

  }

}
```
