## Playing with Nest.js

### Install it
`yarn install`

### Dev It
`yarn start:dev`

It will run on localhost:4000 by default

### Routes you can hit

GET /

GET /items

GET /items/:id

POST /items

PUT /items/:id

DELETE /items/:id

## Dependencies
- Database: MongoDB

- Create some records with the POST /items endpoint to get some data in there to use

- Example request body:

```
{
    "name":"Item Three",
    "qty": 23,
    "description": "This is item Three"
}
```