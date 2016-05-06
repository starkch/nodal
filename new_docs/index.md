---
layout: page
title: A node.js Framework For Building API Services
id: home
---

<section class="light home-section">
  <div class="marketing-row">
    <div class="marketing-col">
      <h3>Just the API</h3>
      <p>
        Nodal is the MC in MVC.
        Since Nodal focuses exclusively on getting your scalable data layer live,
        it&apos;s easy to try it out on a small API service in an existing project.
      </p>
    </div>
    <div class="marketing-col">
      <h3>Battle Tested Design</h3>
      <p>
        Nodal transparently implements battle-tested server-side design patterns and abstractions from Rails and Django and comes with out-of-the-box Postgres integration, making smart decisions from day one to avoid node.js decision fatigue.
      </p>
    </div>
    <div class="marketing-col">
      <h3>Scalable Foundation</h3>
      <p>
        Nodal implements stateless architecture, encouraging scalable distributed services by design, instead of afterthought.
      </p>
    </div>
  </div>
</section>
<hr class="home-divider" />
<section class="home-section">
  <div id="examples">
    <div class="example">
      <h3>A Simple User API</h3>
      <p>
        Nodal APIs are built with smart, transparent and modular generators generators. The `/users` API endpoint behind this React component was set up with 3 commands: `nodal g:model --user`, `nodal g:controller --for User` `nodal poly:deploy`. Every visitor to Nodal gets their very own user account!
      </p>
      <div id="helloExample"></div>
    </div>
    <div class="example">
      <h3>A Simple User Authentication Example</h3>
      <p>
        Insert user authentication example
      </p>
      <div id="timerExample"></div>
    </div>
    <div class="example">
      <h3>A Live Scalable API Example</h3>
      <p>
        Let's use React's examples, and build a scalable API backend for them and run it live on this page.
      </p>
      <div id="todoExample"></div>
    </div>
    <div class="example">
      <h3>A Component Using External Plugins</h3>
      <p>
        React is flexible and provides hooks that allow you to interface with
        other libraries and frameworks. This example uses **marked**, an external
        Markdown library, to convert the textarea's value in real-time.
      </p>
    <div id="markdownExample"></div>
    </div>

  </div>
  <script src="/nodal/js/marked.min.js"></script>
  <script src="/nodal/js/examples/nodal-hello.js"></script>
  <script src="/nodal/js/examples/nodal-timer.js"></script>
  <script src="/nodal/js/examples/nodal-todo.js"></script>
  <script src="/nodal/js/examples/markdown.js"></script>
</section>
<hr class="home-divider" />
<section class="home-bottom-section">
  <div class="buttons-unit">
    <a href="docs/getting-started.html" class="button">Get Started</a>
    <a href="downloads.html" class="button">Download Nodal v{{site.nodal_version}}</a>
  </div>
</section>
