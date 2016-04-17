---
id: deployment-api
title: Polybit Deployment API
permalink: deployment-api.html
prev: generator-api.html
next: glossary.html
---

```
poly:create [project]
	Creates a new, empty project

poly:db:assign [database] [project]
	Assigns a database to a project

poly:db:create [name]
	Creates a new database

poly:db:drop [db]
	Destroys a database

poly:db:list
	Retrieves a list of all available Polybit databases for current user

poly:deploy [project]
	Deploys current directory as a Nodal project

poly:env [project]
	-r                   [key] Removes an environment variable
	-s                   [key] [value] Sets an environment variable
	--remove             [key] Removes an environment variable
	--set                [key] [value] Sets an environment variable

	Retrieves, sets or removes environment variables for a project

poly:list
	Retrieves a list of all available Polybit projects for current user

poly:login
	Logs in to Polybit API server

poly:logout
	Logs out of Polybit API server

poly:register
	Registers a new Polybit User Account

poly:remove [project]
	Removes a project

poly:run [project]
	Runs a Nodal command on your deployed project
```
