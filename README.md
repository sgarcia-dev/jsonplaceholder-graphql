# JSONPlaceholder GraphQL

[Live Server](https://jsonplaceholder-graphql.herokuapp.com/)

#### In Construction 🚧 75% complete, See *TODOs* section

> An intuitive, GraphQL wrapper for https://jsonplaceholder.typicode.com

This project was built as a proof of concept on how to build GraphQL projects from scratch using [Apollo Server](https://www.apollographql.com/docs/apollo-server/). It yields results directly from JSONPlaceholder, but using GraphQL instead of REST.

## Why?

While GraphQL's power over traditional REST API's is well documented, the main driving factor behind this is summarized pretty well in PayPal's [GraphQL: A success story for PayPal Checkout]() article on why they abandoned REST in favor of GraphQL;

> When we took a closer look, we found that UI developers were spending less than 1/3 of their time actually building UI. The rest of that time spent was figuring out where and how to fetch data, filtering/mapping over that data and orchestrating many API calls. Sprinkle in some build/deploy overhead. Now, building UI is a nice-to-have or an afterthought.

GraphQL's self documententing API = More productive, happy developers.

## How to Run
* `npm install`
* `npm start`.

## API Docs
For sample queries you can do, check the [sample usage page](/docs/usage.md). You can also consult the [schema.graphql file](/schema.graphql) for an overview of all queries you can do.

## TODOs
* Add GraphQL endpoints for `/albums`, `/photos` and `/todos`.
* Deploy to a live server.
* Add unit tests.
* Add more beginner friendly sample usage.
