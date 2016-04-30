---
id: database-api
title: Command Line Database API
permalink: database-api.html
prev: top-level-api.html
next: component-specs.html
---

```
db:bootstrap
	Runs db:prepare, db:migrate, db:seed

db:create
	Create a new PostgreSQL database for the current project

db:drop
	drops the currently active database

db:migrate
	--step               The number of steps to migrate (default: all)

	An example command

db:prepare
	Prepares your database for migrations (resets all data)

db:rollback
	--step               Number of steps to rollback (default: 1)

	Rollback completed migrations

db:seed
	Seeds the database with data in './config/seed.json'

db:version
	Gets the current schema version from the database
```
