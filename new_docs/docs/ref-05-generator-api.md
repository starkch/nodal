---
id: generator-api
title: Command Line Generator API
permalink: generator-api.html
prev: top-level-api.html
next: component-specs.html
---

```
g:controller [controller name]
	--for                The model the controller is for

	Creates a new controller, and adds a default route

g:middleware [middleware name]
	Generate new Middleware (runs pre-controller)

g:migration [migration name]
	--add                [table] [field_1:type_1] [...] [field_n:type_n]

	Generate a new, empty migration. Optionally to add / remove columns.

g:model [ModelName] [field_1:type_1] [...] [field_n:type_n]
	--access_token       Use a prebuilt AccessToken model
	--user               Use a prebuilt User model

	Generate a new model and associated migration

g:renderware [renderware name]
	Generate new Renderware (runs post-controller)

g:task [task name]
	Generates a new task

g:test [test]
	Generates a new test
```
