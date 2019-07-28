# Sample Usage

You can find in this page sample queries and mutations that work for all endpoints in the app. You can enter these on the GraphQL playground loaded by running the app with `npm start` and navigating to `http://localhost:4000`.

## Post
```graphql
query testPostQueries {
  getPost: post(id: 1) {
    ...PostFields
  },
  getPosts: posts {
    title
  }
}

mutation testPostMutations {
  createPost: createPost(
    input: {
      title: "testTitle"
      body: "testBody"
    }
  ) {
    ...PostFields
  },
  editPost: editPost(
    id: 1,
    input: {
      title: "testTitle"
      body: "testBody"
    }
  ) {
    ...PostFields
  }
  deletePost: deletePost(id: 1)
}

fragment PostFields on Post {
  id
  title
  body
  user {
    id
    name
    username
    email
  }
  comments {
    id
    name
    email
    body
  }
}
```

## User
```graphql
query testUserQueries {
  getUser: user(id: 1) {
    ...UserFields
  }
  getUsers: users {
    name
  }
}

mutation testUserMutations {
  createUser: createUser(
    input: {
      name: "John Doe"
      username: "john.doe"
      email: "john.doe@gmail.com"
      street: "Random Street"
      suite: "123"
      city: "San Francisco"
      zipcode: "12345"
      lat: 123.45
      lng: -123.45
      phone: "123456789"
      website: "johndoe.com"
      companyName: "Koogle"
      companyCatchphrase: "Let's do this!"
      companyBs: "software delivery"
    }
  ) {
    ...UserFields
  },
  editUser: editUser(
    id: 1,
    input: {
      name: "Mary Smith"
      username: "mary.smith"
      email: "mary.smith@gmail.com"
      street: "Random Street"
      suite: "123"
      city: "San Francisco"
      zipcode: "12345"
      lat: 123.45
      lng: -123.45
      phone: "123456789"
      website: "marysmith.com"
      companyName: "Minisoft"
      companyCatchphrase: "Alright!"
      companyBs: "software delivery"
    }
  ) {
    ...UserFields
  },
  deletePost: deletePost(id: 5)
}

fragment UserFields on User {
	id
  name
  username
  email
  address {
    street
    suite
    city
    zipcode
    geo {
      lat
      lng
    }
  }
  phone
  website
  company {
    name
    catchPhrase
    bs
  }
  posts {
    id
    title
    body
  }
}
```

Comment
```graphql
query testCommentQueries {
  getComment: comment(id: 1) {
    ...CommentFields
  },
  getComments: comments {
    body
  }
}

mutation testCommentMutations {
  createComment: createComment(
    input: {
      name: "John Doe",
      email: "john.doe@gmail.com"
      body: "lorem ipsum sil amet"
    }
  ) {
    ...CommentFields
  }
  editComment: editComment(
    id: 1,
    input: {
      name: "Mary Smith",
      email: "mary.smith@gmail.com"
      body: "lorem ipsum sil amet"
    }
  ) {
    ...CommentFields
  },
  deleteComment(id: 10)
}

fragment CommentFields on Comment {
  id
  name
  email
  body
  post {
    id
    title
    body
  }
}
```