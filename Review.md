# Review Questions

## What is Node.js?

- Node.js is a JavaScript runtime environment. It's built onto of Google's V8 engine that runs chrome. It let's us run JavaScript on the backand and not just in the browser.

## What is Express?

- Express is a Node framework that uses and simplifies Node's http module.

## Mention two parts of Express that you learned about this week.

- Express has a router that helps us seperate our code into sub-moudules.
- It also uses middleware to make http requests.

## What is Middleware?

- Middleware are functions that take the req and res and does something to them (but doesn't have to) and then passes it on to the next middleware by calling next() or by sending some data out. Middleware can be part of node, third-party, or custom-made.

## What is a Resource?

- Everything.

## What can the API return to help clients know if a request was successful?

- A status code of 200 if it was successful, a status code of 201 if something is created or a status of 204 when there is a success with no content. (There are more success status codes but those are the common ones).

## How can we partition our application into sub-applications?

- Express has a router built in to it that we can use to split apart are apps into more readable pieces.

## What is express.json() and why do we need it?

- express.json() is a middleware that parses the data in a req.body we might want to send in a POST or PUT request.
