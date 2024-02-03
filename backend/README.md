# Backend Test

- what is cors
- how are cors errors solved

## Live Coding (no particular order)

- proxy router
  - create a proxy router that proxies requests to [cat facts](https://catfact.ninja)
  - there should be no change in input parameters, i.e a request to our backend server should be a 1-1 equivalent except for the change in hostname
- employee CRUD
  - refer the comments in routers for list of assignments.

## Application stack

- Typescript
- Express
- [mysql nodejs adapter](https://www.npmjs.com/package/mysql)

## Getting started

```sh
$ docker compose watch
$ docker compose logs server -f
```

after which the server is available at [port 3000](http://localhost:3000) with the response `authenticated`

[ER Diagram](dump/images/employees.jpg)
