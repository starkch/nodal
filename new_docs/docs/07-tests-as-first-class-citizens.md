---
id: tests-as-first-class-citizens
title: Tests As First Class Citizens
permalink: tests-as-first-class-citizens.html
next: using-generators.html
---

Testing is now front-and-center in new Nodal applications with Mocha integrated by default and Travis-CI ready to go. You'll notice your test/tests directory pre-populated. Run npm test after beginning a new Nodal project and you'll see a few passing tests.


## Example Test: Controller

All of your tests should fit in the test method of every Nodal.mocha.Test class. You use standard mocha syntax here, but no need to use describe, as it wraps around your class using the class name as the descriptor.

We see here the `Test#endpoint()` method, which mocks an HTTP request to a provided endpoint on your application (follows your route). This is for writing full integration tests that will make sure routing, controller, model and view logic are all working properly together.

You can also import any part of your project and test it individually, as you would normally using Mocha.

```javascript
class IndexControllerTest extends Nodal.mocha.Test {

    test(expect) {

      it('Should return an HTTP 200', done => {

        this.endpoint('/').get((status, headers, body, json) => {

          expect(status).to.equal(200);
          done();

        });

      });

    }

  }
```

Create new tests from the command line with nodal `g:test TestName`.
