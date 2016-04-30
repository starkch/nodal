---
id: glossary
title: Nodal Terminology
permalink: glossary.html
prev: webcomponents.html
---

At the core of Nodal are specific principles:

## Stateless:

Nodal is stateless by design. What we mean by that is that the server instance itself is designed to be able to spread request load across multiple processes without any additional configuration, and there is no shared memory between processes without communicating with an external service like your database. These processes have low spin-up time if any instances crash or are unavailable. This encourages thinking about development in the context of distributed services by design, instead of as an afterthought

## Services

A service, is a server that is really good at one thing, and only one thing. For your data capture and business logic, you have an API service running on a Nodal server. This module should only return API responses. It should never serve static assets; that's a different service. This means, but is not limited to, services should have separate code repositories and deployment strategies. 

Why?

If we follow this tenet, we’re creating a distributed, fault-tolerant architecture that isn’t reliant on any single module. If your client-facing web application (single page app) goes down (perhaps due to denial-of-service or buggy code) your API and mobile app can still function perfectly.

If marketing wants to outsource development of the branding application to a design firm, give them repository access to that project alone and give them a documented interface for your API.

Nodal exists so you can focus on how you can create different services that interface with each other instead of relying on “one web server to rule them all.”
