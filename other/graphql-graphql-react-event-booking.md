# Build a Complete App with GraphQL, Node.js, MongoDB and React.js
> Github Repositories
- [graphql-react-event-booking](https://github.com/peelmicro/graphql-react-event-booking).

In the [Build a Complete App with GraphQL, Node.js, MongoDB and React.js](https://www.academind.com/learn/node-js/graphql-with-node-react-full-app/what-is-graphql) Academind course we can see how we can create a React app using GraphQL, Node.js and MongoDD.

> Table of contents
[[toc]]

## Description
What is GraphQL and why would you use it?

GraphQL is a query language invented by Facebook. It’s a query language that is NOT used to query data from a database though. Instead, it’s exposed via an API to frontend applications (SPAs, mobile apps).

It’s more flexible than REST APIs because it allows frontend clients to request exactly the data format the client needs. REST APIs on the other hand typically send back a fixed data format that often contains redundant data which is not required by the client.

Follow the course to learn more about the advantages of GraphQL APIs and how such an API is implemented in practice.

## 1 What is GraphQL 22:16
### What We'll  build

![](/images/other/graphql-graphql-react-event-booking/GraphQL.png)

### What is GraphQL?

![](/images/other/graphql-graphql-react-event-booking/GraphQL2.png)

![](/images/other/graphql-graphql-react-event-booking/GraphQL3.png)

### How does GraphQL Work?

![](/images/other/graphql-graphql-react-event-booking/GraphQL4.png)

- A GraphQL Query example
```json
{
  query {
    use {
      name
      age
    }
  }
}
```

![](/images/other/graphql-graphql-react-event-booking/GraphQL5.png)

![](/images/other/graphql-graphql-react-event-booking/GraphQL6.png)

![](/images/other/graphql-graphql-react-event-booking/GraphQL7.png)

### Example of Node.js GraphQL API endpoint

![](/images/other/graphql-graphql-react-event-booking/GraphQL8.png)

![](/images/other/graphql-graphql-react-event-booking/GraphQL9.png)

![](/images/other/graphql-graphql-react-event-booking/GraphQL10.png)

![](/images/other/graphql-graphql-react-event-booking/GraphQL11.png)

## 2 API Design & Project Setup 8:32

### Designing the GraphQL API

![](/images/other/graphql-graphql-react-event-booking/Setup.png)

### Create the folder for the solution

```bash
C:\Users\juan.pablo.perez\OneDrive\Training\GraphQL>mkdir graphql-react-event-booking

C:\Users\juan.pablo.perez\OneDrive\Training\GraphQL>cd graphql-react-event-booking

C:\Users\juan.pablo.perez\OneDrive\Training\GraphQL\graphql-react-event-booking>code .
```

![](/images/other/graphql-graphql-react-event-booking/Setup2.png)

### Initialize npm

```bash
C:\Users\juan.pablo.perez\OneDrive\Training\GraphQL\graphql-react-event-booking>npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (graphql-react-event-booking)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to C:\Users\juan.pablo.perez\OneDrive\Training\GraphQL\graphql-react-event-booking\package.json:

{
  "name": "graphql-react-event-booking",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
Is this OK? (yes)
```

### Install the initial dependencies
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/GraphQL/graphql-react-event-booking
$ npm install --save express body-parser
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN graphql-react-event-booking@1.0.0 No description
npm WARN graphql-react-event-booking@1.0.0 No repository field.

+ body-parser@1.18.3
+ express@4.16.4
added 51 packages from 36 contributors and audited 151 packages in 7.723s
found 0 vulnerabilities
```
- Install `nodemon` used to automatically restart the nodeJs server
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/GraphQL/graphql-react-event-booking
$ npm i --save-dev nodemon

> nodemon@1.18.9 postinstall C:\Users\juan.pablo.perez\OneDrive\Training\GraphQL\graphql-react-event-booking\node_modules\nodemon
> node bin/postinstall || exit 0

Love nodemon? You can now support the project via the open collective:
 > https://opencollective.com/nodemon/donate

npm WARN graphql-react-event-booking@1.0.0 No description
npm WARN graphql-react-event-booking@1.0.0 No repository field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ nodemon@1.18.9
added 217 packages from 130 contributors and audited 2389 packages in 28.582s
found 0 vulnerabilities
```

### Create the initial nodeJs `app.js` app 
> app.js
```js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.listen(3000);
```

- Test if it works.
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/GraphQL/graphql-react-event-booking
$ node app.js
```

### Modify the `package.json` to set up how to start the express server

> `package.json`
```json
{
  "name": "graphql-react-event-booking",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon app.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.18.3",
    "express": "^4.16.4"
  },
  "devDependencies": {
    "nodemon": "^1.18.9"
  }
}
```

- Test if it works.
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/GraphQL/graphql-react-event-booking
$ npm start

> graphql-react-event-booking@1.0.0 start C:\Users\juan.pablo.perez\OneDrive\Training\GraphQL\graphql-react-event-booking
> nodemon app.js

[nodemon] 1.18.9
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node app.js`
```

### Set up a get request as an example

> app.js
```js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req,res,next) => {
  res.send('Hello World!');
})

app.listen(3000);
```

- Open another terminal and check if it works
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/GraphQL/graphql-react-event-booking
$ curl localhost:3000
Hello World!
```

## 3 Schemas & Resolvers 24:57

### Install the [ChromeiQL extension](https://chrome.google.com/webstore/detail/chromeiq)

![](/images/other/graphql-graphql-react-event-booking/SchemasResolvers.png)

![](/images/other/graphql-graphql-react-event-booking/SchemasResolvers2.png)


### Install the `express-graphql` and `graphql` packages

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/graphql-react-event-booking$ npm i express-graphql graphql
npm WARN graphql-react-event-booking@1.0.0 No descriptionnpm WARN graphql-react-event-booking@1.0.0 No repository field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\fsevents):npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ express-graphql@0.7.1+ graphql@14.0.2
added 5 packages from 5 contributors and audited 2413 packages in 36.934sfound 0 vulnerabilities
```

### Modify `app.js` to set up the `GraphQL` environment

> app.js
```js
const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');
const app = express();

app.use(bodyParser.json());

app.use('/graphql', graphqlHttp({
  schema: buildSchema(`
    type RootQuery {
      events: [String!]!
    }

    type RootMutation {
      createEvent(name: String): String
    }

    schema {
      query: RootQuery
      mutation: RootMutation
    }
  `),
  rootValue: {
    events: () => {
      return ['Romantic Cooking', 'Sailing', 'All-night coding']
    },
    createEvent: (args) => {
      const eventName = args.name;
      return eventName;
    },
    graphiql: true
  }
}));
app.listen(3000);
```

![](/images/other/graphql-graphql-react-event-booking/SchemasResolvers3.png)

![](/images/other/graphql-graphql-react-event-booking/SchemasResolvers4.png)

![](/images/other/graphql-graphql-react-event-booking/SchemasResolvers5.png)

![](/images/other/graphql-graphql-react-event-booking/SchemaResolvers6.png)

- We can put the following query:

```json
query {
  events
}
```

- And we obtain the following result:

```json
{
  "data": {
    "events": [
      "Romantic Cooking",
      "Sailing",
      "All-night coding"
    ]
  }
}
```

![](/images/other/graphql-graphql-react-event-booking/SchemaResolvers6b.png)

### Query using Postman

- Browse to [Get Postman for Windows](https://www.getpostman.com/downloads/)

![](/images/other/graphql-graphql-react-event-booking/SchemaResolvers7.png)

![](/images/other/graphql-graphql-react-event-booking/SchemaResolvers8.png)

![](/images/other/graphql-graphql-react-event-booking/SchemaResolvers9.png)

- The query is a bit different:
```json
{"query": "{  events }"}
```

```bash
POST /graphql HTTP/1.1
Host: localhost:3000
Content-Type: application/json
cache-control: no-cache
Postman-Token: d1d80e9c-1397-4578-9568-d152ffd9a5f5
{"query": "{  events }"}------WebKitFormBoundary7MA4YWxkTrZu0gW--
```

- The response is the same:
```bash
{
    "data": {
        "events": [
            "Romantic Cooking",
            "Sailing",
            "All-night coding"
        ]
    }
}
```

![](/images/other/graphql-graphql-react-event-booking/SchemaResolvers10.png)

- To execute the mutation:

```json
mutation {
  createEvent(name: "Sports")
}
```

- Response:

```json
{
  "data": {
    "createEvent": "Sports"
  }
}
```

- Using Postman

```json
 {"query": "mutation {createEvent(name: \"Sports\")}" }
```
```bash
POST /graphql HTTP/1.1
Host: localhost:3000
Content-Type: application/json
cache-control: no-cache
Postman-Token: 3a3dff28-ff85-48ec-a38b-b7cbb3abeb8e
 {"query": "mutation {createEvent(name: \"Sports\")}" }------WebKitFormBoundary7MA4YWxkTrZu0gW--
```
- The response is the same:
```json
{
    "data": {
        "createEvent": "Sports"
    }
}
```
## 4 Types & Data 19:21

> app.js
```js
const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');
const app = express();

app.use(bodyParser.json());

const events = [];

app.use('/graphql', graphqlHttp({
  schema: buildSchema(`
    type Event {
      _id: ID!
      title: String!
      description: String!
      price: Float!
      date: String!
    }

    input EventInput {
      title: String!
      description: String!
      price: Float!
      date: String!      
    }

    type RootQuery {
      events: [Event!]!
    }

    type RootMutation {
      createEvent(eventInput: EventInput): Event
    }

    schema {
      query: RootQuery
      mutation: RootMutation
    }
  `),
  rootValue: {
    events: () => {
      return events;
    },
    createEvent: (args) => {
      const event = {
        _id: Math.random().toString(),
        title: args.eventInput.title,
        description: args.eventInput.description,
        price: +args.eventInput.price,
        date: args.eventInput.date
      }
      events.push(event);
      return event;
    },
    graphiql: true
  }
}));
app.listen(3000);
```

> query
```json
query {
  events {
   title
  	price
  }
}
```
```json
{
  "data": {
    "events": []
  }
}
```

>mutation createEvent
```json
mutation {
  createEvent(eventInput: {
    	title: "A Test", 
    	description: "Does this work?", 
    	price: 9.99, 
    	date: "2019-01-13T08:55:49.045Z"
  })
  {
    title
    description
  }
}
```
```json
{
  "data": {
    "createEvent": {
      "title": "A Test",
      "description": "Does this work?"
    }
  }
}
```

> query
```json
query {
  events {
   title
  	price
  }
}
```
```json
{
  "data": {
    "events": [
      {
        "title": "A Test",
        "price": 9.99
      }
    ]
  }
}
```

> query
```json
query {
  events {
  	_id
    date
  }
}
```
```json
{
  "data": {
    "events": [
      {
        "_id": "0.1299606023284463",
        "date": "2019-01-13T08:55:49.045Z"
      }
    ]
  }
}
```
## 5 GraphQL + MongoDB 32:22

### Setup [MongoDB Atlas](https://cloud.mongodb.com)

![](/images/other/graphql-graphql-react-event-booking/MongoDB.png)


![](/images/other/graphql-graphql-react-event-booking/MongoDB2.png)

![](/images/other/graphql-graphql-react-event-booking/MongoDB3.png)

### Install [mongoose](https://mongoosejs.com/), the **elegant** `mongodb` object modeling fir node.js

![](/images/other/graphql-graphql-react-event-booking/MongoDB4.png)

- [We can read here how to get started](https://mongoosejs.com/docs/index.html)

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/graphql-react-event-booking
$ npm i mongoose
npm WARN graphql-react-event-booking@1.0.0 No description
npm WARN graphql-react-event-booking@1.0.0 No repository field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ mongoose@5.4.3
added 19 packages from 16 contributors and audited 2451 packages in 15.669s
found 0 vulnerabilities
```

### Configure `nodemon` by using the `nodemon.json` configuration file

- Nodemon is going to inject the environment variables that with put in the configuration file.

> nodemon.json
```json
{
    "env": {
        "MONGO_USER": "juan",
        "MONGO_PASSWORD": "xxxxxx",
        "MONGO_DB": "events-react-dev"
    }
}
```
> app.js
```js
const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

const events = [];

app.use('/graphql', graphqlHttp({
  schema: buildSchema(`
    type Event {
      _id: ID!
      title: String!
      description: String!
      price: Float!
      date: String!
    }

    input EventInput {
      title: String!
      description: String!
      price: Float!
      date: String!      
    }

    type RootQuery {
      events: [Event!]!
    }

    type RootMutation {
      createEvent(eventInput: EventInput): Event
    }

    schema {
      query: RootQuery
      mutation: RootMutation
    }
  `),
  rootValue: {
    events: () => {
      return events;
    },
    createEvent: (args) => {
      const event = {
        _id: Math.random().toString(),
        title: args.eventInput.title,
        description: args.eventInput.description,
        price: +args.eventInput.price,
        date: args.eventInput.date
      }
      events.push(event);
      return event;
    },
    graphiql: true
  }
}));

mongoose
  .connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-ycwj8.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`)
  .then(() => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  })

```

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/graphql-react-event-booking
$ npm start

> graphql-react-event-booking@1.0.0 start C:\Work\Training\Pre\GraphQL\graphql-react-event-booking
> nodemon app.js

[nodemon] 1.18.9
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node app.js`
(node:23000) DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.
```

### Create the `models` folder and the `event.js` file.

> event.js
```js
const moongose = require('mongoose');

const Schema = moongose.Schema;

const eventSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
});

module.exports = moongose.model('Event', eventSchema);
```

### Modify the `app.js` file to use MongoDB to create an event

> app.js
```js
const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');

const Event = require('./models/event');

const app = express();

app.use(bodyParser.json());

app.use('/graphql', graphqlHttp({
  schema: buildSchema(`
    type Event {
      _id: ID!
      title: String!
      description: String!
      price: Float!
      date: String!
    }

    input EventInput {
      title: String!
      description: String!
      price: Float!
      date: String!      
    }

    type RootQuery {
      events: [Event!]!
    }

    type RootMutation {
      createEvent(eventInput: EventInput): Event
    }

    schema {
      query: RootQuery
      mutation: RootMutation
    }
  `),
  rootValue: {
    events: () => {
      return events;
    },
    createEvent: (args) => {
      const event = new Event({
        title: args.eventInput.title,
        description: args.eventInput.description,
        price: +args.eventInput.price,
        date: new Date(args.eventInput.date)
      });
      return event
        .save()
        .then(result => {
          console.log(result);
          return { ...result._doc};
        })
        .catch(err => {
          console.log(err);
          throw err;
        })
    },
    graphiql: true
  }
}));



mongoose
  .connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-ycwj8.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`)
  .then(() => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  })

```

- createEvent mutation request 
```json
mutation {
  createEvent(eventInput: {
    	title: "A Test", 
    	description: "Does this work?", 
    	price: 9.99, 
    	date: "2019-01-13T08:55:49.045Z"
  })
  {
    title
    description
  }
}
```
- createEvent mutation response
```json
{
  "data": {
    "createEvent": {
      "title": "A Test",
      "description": "Does this work?"
    }
  }
}
```

![](/images/other/graphql-graphql-react-event-booking/MongoDB5.png)

### Modify the `app.js` file to use MongoDB to get the events from the database

> app.js
```js
const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');

const Event = require('./models/event');

const app = express();

app.use(bodyParser.json());

app.use('/graphql', graphqlHttp({
  schema: buildSchema(`
    type Event {
      _id: ID!
      title: String!
      description: String!
      price: Float!
      date: String!
    }

    input EventInput {
      title: String!
      description: String!
      price: Float!
      date: String!      
    }

    type RootQuery {
      events: [Event!]!
    }

    type RootMutation {
      createEvent(eventInput: EventInput): Event
    }

    schema {
      query: RootQuery
      mutation: RootMutation
    }
  `),
  rootValue: {
    events: () => {
      return Event
        .find()
        .then(events => {
          return events.map(event => {
            return {...event._doc};
          })
        })
        .catch(err => {
          console.log(err);
          throw err;
        })       
    },
    createEvent: (args) => {
      const event = new Event({
        title: args.eventInput.title,
        description: args.eventInput.description,
        price: +args.eventInput.price,
        date: new Date(args.eventInput.date)
      });
      return event
        .save()
        .then(result => {
          console.log(result);
          return { ...result._doc};
        })
        .catch(err => {
          console.log(err);
          throw err;
        })
    },
    graphiql: true
  }
}));

mongoose
  .connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-ycwj8.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`)
  .then(() => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  })
```

- query request 
```json
query {
  events {
    date
    title
  }
}
```

- query response 
```json
{
  "data": {
    "events": [
      {
        "date": "1547369749045",
        "title": "A Test"
      }
    ]
  }
}
```

### Fix the error returning the _id object

- query request 
```json
query {
  events {
  	_id
    date
    title
  }
}
```
- query response 
```json
{
  "errors": [
    {
      "message": "ID cannot represent value: { _bsontype: \"ObjectID\", id: <Buffer 5c 3b 7f 39 54 53 b7 43 e8 a6 d0 9f> }",
      "locations": [
        {
          "line": 3,
          "column": 4
        }
      ],
      "path": [
        "events",
        0,
        "_id"
      ]
    }
  ],
  "data": null
}
```
> app.js
```js
const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');

const Event = require('./models/event');

const app = express();

app.use(bodyParser.json());

app.use('/graphql', graphqlHttp({
  schema: buildSchema(`
    type Event {
      _id: ID!
      title: String!
      description: String!
      price: Float!
      date: String!
    }

    input EventInput {
      title: String!
      description: String!
      price: Float!
      date: String!      
    }

    type RootQuery {
      events: [Event!]!
    }

    type RootMutation {
      createEvent(eventInput: EventInput): Event
    }

    schema {
      query: RootQuery
      mutation: RootMutation
    }
  `),
  rootValue: {
    events: () => {
      return Event
        .find()
        .then(events => {
          return events.map(event => {
            return {...event._doc, _id: event.id};
          })
        })
        .catch(err => {
          console.log(err);
          throw err;
        })       
    },
    createEvent: (args) => {
      const event = new Event({
        title: args.eventInput.title,
        description: args.eventInput.description,
        price: +args.eventInput.price,
        date: new Date(args.eventInput.date)
      });
      return event
        .save()
        .then(result => {
          console.log(result);
          return { ...result._doc, _id: result._doc._id.toString()};
        })
        .catch(err => {
          console.log(err);
          throw err;
        })
    },
    graphiql: true
  }
}));

mongoose
  .connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-ycwj8.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`)
  .then(() => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  })
```
- query request 
```json
query {
  events {
  	_id
    date
    title
  }
}
```
- query response 
```json
{
  "data": {
    "events": [
      {
        "_id": "5c3b7f395453b743e8a6d09f",
        "date": "1547369749045",
        "title": "A Test"
      }
    ]
  }
}
```

## 6 Adding Relations 26.46

### Create the Users model and modify the event model to include relatation to the user

> user.js
```js
const moongose = require('mongoose');

const Schema = moongose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdEvents: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Event'
    }
  ] 
});

module.exports = moongose.model('User', userSchema);
```

> event.js
```js
const moongose = require('mongoose');

const Schema = moongose.Schema;

const eventSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = moongose.model('Event', eventSchema);
```

### Install `bcryptjs` that will be used to hash the password before storing it.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/graphql-react-event-booking$ npm i bcryptjs
npm WARN graphql-react-event-booking@1.0.0 No description
npm WARN graphql-react-event-booking@1.0.0 No repository field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ bcryptjs@2.4.3
added 1 package from 6 contributors and audited 2452 packages in 13.672s
found 0 vulnerabilities
```

### Modify `app.js` to include the `User` model

> app.js
```js
const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Event = require('./models/event');
const User = require('./models/user');

const app = express();

app.use(bodyParser.json());

app.use('/graphql', graphqlHttp({
  schema: buildSchema(`
    type Event {
      _id: ID!
      title: String!
      description: String!
      price: Float!
      date: String!
    }

    type User {
      _id: ID!
      email: String!
      password: String
    }

    input EventInput {
      title: String!
      description: String!
      price: Float!
      date: String!      
    }

    input UserInput {
      email: String!
      password: String!
    }

    type RootQuery {
      events: [Event!]!
    }

    type RootMutation {
      createEvent(eventInput: EventInput): Event
      createUser(userInput: UserInput): User
    }

    schema {
      query: RootQuery
      mutation: RootMutation
    }
  `),
  rootValue: {
    events: () => {
      return Event
        .find()
        .then(events => {
          return events.map(event => {
            return {...event._doc, _id: event.id};
          })
        })
        .catch(err => {
          console.log(err);
          throw err;
        })       
    },
    createEvent: (args) => {
      const event = new Event({
        title: args.eventInput.title,
        description: args.eventInput.description,
        price: +args.eventInput.price,
        date: new Date(args.eventInput.date)
      });
      return event
        .save()
        .then(result => {
          console.log(result);
          return { ...result._doc, _id: result._doc._id.toString()};
        })
        .catch(err => {
          console.log(err);
          throw err;
        })
    },
    createUser: args => {
      return bcrypt
        .hash(args.userInput.password, 12)
        .then(hashPassword => {
          const user = new User({
            email: args.userInput.email,
            password: hashPassword
          });
          return user
            .save()
            .then(result => {
              console.log(result);
              return { ...result._doc, _id: result.id};
            })          
        })
        .catch(err => {
          console.log(err);
          throw err;
        })        
    },    
    graphiql: true
  }
}));

mongoose
  .connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-ycwj8.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`)
  .then(() => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  })
```

- `createUser` mutation request
```json
mutation {
  createUser(userInput: {
    	email: "test@test.email", 
    	password: "tester"
  })
  {
    email
    password
  }
}
```

- `createUser` mutation response
```json
{
  "data": {
    "createUser": {
      "email": "test@test.email",
      "password": "$2a$12$pkAsva5waO6OL/Og7zLH7OsUTBGBfwWo1hvfZiE/oTr7aLbsHYzG6"
    }
  }
}
```

![](/images/other/graphql-graphql-react-event-booking/Relations.png)

### Hide password when returning the data

> app.js
```js
const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Event = require('./models/event');
const User = require('./models/user');

const app = express();

app.use(bodyParser.json());

app.use('/graphql', graphqlHttp({
  schema: buildSchema(`
    type Event {
      _id: ID!
      title: String!
      description: String!
      price: Float!
      date: String!
    }

    type User {
      _id: ID!
      email: String!
      password: String
    }

    input EventInput {
      title: String!
      description: String!
      price: Float!
      date: String!      
    }

    input UserInput {
      email: String!
      password: String!
    }

    type RootQuery {
      events: [Event!]!
    }

    type RootMutation {
      createEvent(eventInput: EventInput): Event
      createUser(userInput: UserInput): User
    }

    schema {
      query: RootQuery
      mutation: RootMutation
    }
  `),
  rootValue: {
    events: () => {
      return Event
        .find()
        .then(events => {
          return events.map(event => {
            return {...event._doc, _id: event.id};
          })
        })
        .catch(err => {
          console.log(err);
          throw err;
        })       
    },
    createEvent: (args) => {
      const event = new Event({
        title: args.eventInput.title,
        description: args.eventInput.description,
        price: +args.eventInput.price,
        date: new Date(args.eventInput.date)
      });
      return event
        .save()
        .then(result => {
          console.log(result);
          return { ...result._doc, _id: result._doc._id.toString()};
        })
        .catch(err => {
          console.log(err);
          throw err;
        })
    },
    createUser: args => {
      return bcrypt
        .hash(args.userInput.password, 12)
        .then(hashPassword => {
          const user = new User({
            email: args.userInput.email,
            password: hashPassword
          });
          return user
            .save()
            .then(result => {
              console.log(result);
              return { ...result._doc, password: null, _id: result.id};
            })          
        })
        .catch(err => {
          console.log(err);
          throw err;
        })        
    },    
    graphiql: true
  }
}));

mongoose
  .connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-ycwj8.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`)
  .then(() => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  })


- `createUser` mutation request
```json
mutation {
  createUser(userInput: {
    	email: "test2@test.email", 
    	password: "tester"
  })
  {
    email
    password
  }
}
```

- `createUser` mutation response
```json
{
  "data": {
    "createUser": {
      "email": "test2@test.email",
      "password": null
    }
  }
}
```
![](/images/other/graphql-graphql-react-event-booking/Relations2.png)

### Avoid duplication of users

> app.js
```js
const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Event = require('./models/event');
const User = require('./models/user');

const app = express();

app.use(bodyParser.json());

app.use('/graphql', graphqlHttp({
  schema: buildSchema(`
    type Event {
      _id: ID!
      title: String!
      description: String!
      price: Float!
      date: String!
    }

    type User {
      _id: ID!
      email: String!
      password: String
    }

    input EventInput {
      title: String!
      description: String!
      price: Float!
      date: String!      
    }

    input UserInput {
      email: String!
      password: String!
    }

    type RootQuery {
      events: [Event!]!
    }

    type RootMutation {
      createEvent(eventInput: EventInput): Event
      createUser(userInput: UserInput): User
    }

    schema {
      query: RootQuery
      mutation: RootMutation
    }
  `),
  rootValue: {
    events: () => {
      return Event
        .find()
        .then(events => {
          return events.map(event => {
            return {...event._doc, _id: event.id};
          })
        })
        .catch(err => {
          console.log(err);
          throw err;
        })       
    },
    createEvent: (args) => {
      const event = new Event({
        title: args.eventInput.title,
        description: args.eventInput.description,
        price: +args.eventInput.price,
        date: new Date(args.eventInput.date)
      });
      return event
        .save()
        .then(result => {
          console.log(result);
          return { ...result._doc, _id: result._doc._id.toString()};
        })
        .catch(err => {
          console.log(err);
          throw err;
        })
    },
    createUser: args => {
      return User
        .findOne({email: args.userInput.email})
        .then(user => {
          if (user) {
            throw new Error('User already exists.')
          }
          return bcrypt.hash(args.userInput.password, 12);
        })
        .then(hashPassword => {
          const user = new User({
            email: args.userInput.email,
            password: hashPassword
          });
          return user
            .save()
            .then(result => {
              console.log(result);
              return { ...result._doc, password: null, _id: result.id};
            })          
        })
        .catch(err => {
          console.log(err);
          throw err;
        })        
    },    
    graphiql: true
  }
}));

mongoose
  .connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-ycwj8.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`)
  .then(() => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  })

```
- `createUser` mutation request
```json
mutation {
  createUser(userInput: {
    	email: "test2@test.email", 
    	password: "tester"
  })
  {
    email
    password
  }
}
```

- `createUser` mutation response
```json
{
  "errors": [
    {
      "message": "User already exists.",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": [
        "createUser"
      ]
    }
  ],
  "data": {
    "createUser": null
  }
}
```
### Connect the `created events` with `users` (hard-coded at the moment)

- Update `createEvent`

> app.js
```js
.
.
.
    createEvent: (args) => {
      const event = new Event({
        title: args.eventInput.title,
        description: args.eventInput.description,
        price: +args.eventInput.price,
        date: new Date(args.eventInput.date),
        creator: "5c3cc489a1f3273f984495ad"
      });
      let createdEvent;
      return event
        .save()
        .then(result => {
          console.log(result);
          createdEvent = { ...result._doc, _id: result._doc._id.toString()};
          return User.findById(result._doc.creator.toString())
        })
        .then(user => {
          if (!user) {
            throw new Error('User does not exists.')
          }
          user.createdEvents.push(event);
          return user.save();
        })
        .then(result => {
          console.log(result);
          return createdEvent;
        })        
        .catch(err => {
          console.log(err);
          throw err;
        })
    },
.
```

- createEvent mutation request 
```json
mutation {
  createEvent(eventInput: {
    	title: "Testing", 
    	description: "This is a test event", 
    	price: 9.99, 
    	date: "2019-01-14T17:36:49.045Z"
  })
  {
    title
    description
  }
}

```
- createEvent mutation response
```json
{
  "data": {
    "createEvent": {
      "title": "Testing",
      "description": "This is a test event"
    }
  }
}
```

![](/images/other/graphql-graphql-react-event-booking/Relations3.png)

![](/images/other/graphql-graphql-react-event-booking/Relations4.png)

## 7 Dynamic Relations - 33:12

### Modify `app.js` to adjust the data returned by the `events` query using the `populate()` mongoose method.

> app.js
```js
const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Event = require('./models/event');
const User = require('./models/user');

const app = express();

app.use(bodyParser.json());

app.use('/graphql', graphqlHttp({
  schema: buildSchema(`
    type Event {
      _id: ID!
      title: String!
      description: String!
      price: Float!
      date: String!
      creator: User!
    }

    type User {
      _id: ID!
      email: String!
      password: String
      createdEvents: [Event!]
    }

    input EventInput {
      title: String!
      description: String!
      price: Float!
      date: String!      
    }

    input UserInput {
      email: String!
      password: String!
    }

    type RootQuery {
      events: [Event!]!
    }

    type RootMutation {
      createEvent(eventInput: EventInput): Event
      createUser(userInput: UserInput): User
    }

    schema {
      query: RootQuery
      mutation: RootMutation
    }
  `),
  rootValue: {
    events: () => {
      return Event
        .find()
        .populate('creator')
        .then(events => {
          return events.map(event => {
            return {
              ...event._doc, 
              _id: event.id,
              creator: {
                ...event._doc.creator._doc,
                _id: event._doc.creator.id
              }
            };
          })
        })
        .catch(err => {
          console.log(err);
          throw err;
        })       
    },
    createEvent: (args) => {
      const event = new Event({
        title: args.eventInput.title,
        description: args.eventInput.description,
        price: +args.eventInput.price,
        date: new Date(args.eventInput.date),
        creator: "5c3cc489a1f3273f984495ad"
      });
      let createdEvent;
      return event
        .save()
        .then(result => {
          console.log(result);
          createdEvent = { ...result._doc, _id: result._doc._id.toString()};
          return User.findById(result._doc.creator.toString())
        })
        .then(user => {
          if (!user) {
            throw new Error('User does not exists.')
          }
          user.createdEvents.push(event);
          return user.save();
        })
        .then(result => {
          console.log(result);
          return createdEvent;
        })        
        .catch(err => {
          console.log(err);
          throw err;
        })
    },
    createUser: args => {
      return User
        .findOne({email: args.userInput.email})
        .then(user => {
          if (user) {
            throw new Error('User already exists.')
          }
          return bcrypt.hash(args.userInput.password, 12);
        })
        .then(hashPassword => {
          const user = new User({
            email: args.userInput.email,
            password: hashPassword
          });
          return user
            .save()
            .then(result => {
              console.log(result);
              return { ...result._doc, password: null, _id: result.id};
            })          
        })
        .catch(err => {
          console.log(err);
          throw err;
        })        
    },    
    graphiql: true
  }
}));

mongoose
  .connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-ycwj8.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`)
  .then(() => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  })


```

- `events` query request
```json
query {
  events {
  	_id
    date
    title
    creator {
      _id
      email
    }
  }
}
```
- `events` query response
```json
{
  "data": {
    "events": [
      {
        "_id": "5c3cc8bd7fabad484caf94b9",
        "date": "1547487409045",
        "title": "Testing",
        "creator": {
          "_id": "5c3cc489a1f3273f984495ad",
          "email": "test@test.email"
        }
      }
    ]
  }
}
```

### Create the `user` function to simplify the way we obtain data from an user.

> app.js
```js
const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Event = require('./models/event');
const User = require('./models/user');

const app = express();

app.use(bodyParser.json());

const user = userId => {
  return User.findById(userId)
    .then(user => {
      return {...user._doc, _id: user.id};
    })
    .catch(err => {
      console.log(err);
      throw err;
    })
};

app.use('/graphql', graphqlHttp({
  schema: buildSchema(`
    type Event {
      _id: ID!
      title: String!
      description: String!
      price: Float!
      date: String!
      creator: User!
    }

    type User {
      _id: ID!
      email: String!
      password: String
      createdEvents: [Event!]
    }

    input EventInput {
      title: String!
      description: String!
      price: Float!
      date: String!      
    }

    input UserInput {
      email: String!
      password: String!
    }

    type RootQuery {
      events: [Event!]!
    }

    type RootMutation {
      createEvent(eventInput: EventInput): Event
      createUser(userInput: UserInput): User
    }

    schema {
      query: RootQuery
      mutation: RootMutation
    }
  `),
  rootValue: {
    events: () => {
      return Event
        .find()
        .then(events => {
          return events.map(event => {
            return {
              ...event._doc, 
              _id: event.id,
              creator: user.bind(this, event._doc.creator)
            };
          })
        })
        .catch(err => {
          console.log(err);
          throw err;
        })       
    },
    createEvent: (args) => {
      const event = new Event({
        title: args.eventInput.title,
        description: args.eventInput.description,
        price: +args.eventInput.price,
        date: new Date(args.eventInput.date),
        creator: "5c3cc489a1f3273f984495ad"
      });
      let createdEvent;
      return event
        .save()
        .then(result => {
          console.log(result);
          createdEvent = { ...result._doc, _id: result._doc._id.toString()};
          return User.findById(result._doc.creator.toString())
        })
        .then(user => {
          if (!user) {
            throw new Error('User does not exists.')
          }
          user.createdEvents.push(event);
          return user.save();
        })
        .then(result => {
          console.log(result);
          return createdEvent;
        })        
        .catch(err => {
          console.log(err);
          throw err;
        })
    },
    createUser: args => {
      return User
        .findOne({email: args.userInput.email})
        .then(user => {
          if (user) {
            throw new Error('User already exists.')
          }
          return bcrypt.hash(args.userInput.password, 12);
        })
        .then(hashPassword => {
          const user = new User({
            email: args.userInput.email,
            password: hashPassword
          });
          return user
            .save()
            .then(result => {
              console.log(result);
              return { ...result._doc, password: null, _id: result.id};
            })          
        })
        .catch(err => {
          console.log(err);
          throw err;
        })        
    },    
    graphiql: true
  }
}));

mongoose
  .connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-ycwj8.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`)
  .then(() => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  })

```

- `events` query request
```json
query {
  events {
  	_id
    date
    title
    creator {
      _id
      email
    }
  }
}
```
- `events` query response
```json
{
  "data": {
    "events": [
      {
        "_id": "5c3cc8bd7fabad484caf94b9",
        "date": "1547487409045",
        "title": "Testing",
        "creator": {
          "_id": "5c3cc489a1f3273f984495ad",
          "email": "test@test.email"
        }
      }
    ]
  }
}
```

### Create the `event` function to simplify the way we obtain data from an event.

> app.js
```js
const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Event = require('./models/event');
const User = require('./models/user');

const app = express();

app.use(bodyParser.json());

const events = eventIds => {
  return Event.find({_id: {$in: eventIds}})

    .then(events => {
      return events.map(event => {
        return {
          ...event._doc, 
          _id: event.id, 
          creator: user.bind(this, event._doc.creator)};
      }); 
    })
    .catch(err => {
      console.log(err);
      throw err;
    });  
}

const user = userId => {
  return User.findById(userId)
    .then(user => {
      return {...user._doc, _id: user.id, createdEvents: events.bind(this, user._doc.createdEvents)};
    })
    .catch(err => {
      console.log(err);
      throw err;
    })
};

app.use('/graphql', graphqlHttp({
  schema: buildSchema(`
    type Event {
      _id: ID!
      title: String!
      description: String!
      price: Float!
      date: String!
      creator: User!
    }

    type User {
      _id: ID!
      email: String!
      password: String
      createdEvents: [Event!]
    }

    input EventInput {
      title: String!
      description: String!
      price: Float!
      date: String!      
    }

    input UserInput {
      email: String!
      password: String!
    }

    type RootQuery {
      events: [Event!]!
    }

    type RootMutation {
      createEvent(eventInput: EventInput): Event
      createUser(userInput: UserInput): User
    }

    schema {
      query: RootQuery
      mutation: RootMutation
    }
  `),
  rootValue: {
    events: () => {
      return Event
        .find()
        .then(events => {
          return events.map(event => {
            return {
              ...event._doc, 
              _id: event.id,
              creator: user.bind(this, event._doc.creator)
            };
          })
        })
        .catch(err => {
          console.log(err);
          throw err;
        })       
    },
    createEvent: (args) => {
      const event = new Event({
        title: args.eventInput.title,
        description: args.eventInput.description,
        price: +args.eventInput.price,
        date: new Date(args.eventInput.date),
        creator: "5c3cc489a1f3273f984495ad"
      });
      let createdEvent;
      return event
        .save()
        .then(result => {
          console.log(result);
          createdEvent = { 
            ...result._doc, 
            _id: result._doc._id.toString(),
            creator: user.bind(this, result._doc.creator)
          };
          return User.findById(result._doc.creator.toString())
        })
        .then(user => {
          if (!user) {
            throw new Error('User does not exists.')
          }
          user.createdEvents.push(event);
          return user.save();
        })
        .then(result => {
          console.log(result);
          return createdEvent;
        })        
        .catch(err => {
          console.log(err);
          throw err;
        })
    },
    createUser: args => {
      return User
        .findOne({email: args.userInput.email})
        .then(user => {
          if (user) {
            throw new Error('User already exists.')
          }
          return bcrypt.hash(args.userInput.password, 12);
        })
        .then(hashPassword => {
          const user = new User({
            email: args.userInput.email,
            password: hashPassword
          });
          return user
            .save()
            .then(result => {
              console.log(result);
              return { ...result._doc, password: null, _id: result.id};
            })          
        })
        .catch(err => {
          console.log(err);
          throw err;
        })        
    },    
    graphiql: true
  }
}));

mongoose
  .connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-ycwj8.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`)
  .then(() => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  })

```

- `events` query request
```json
query {
  events {
  	_id
    date
    title
    creator {
      _id
      email
      createdEvents {
				_id
        title
        creator {
          email
        }
      }
    }
  }
}

```
- `events` query response
```json
{
  "data": {
    "events": [
      {
        "_id": "5c3cc8bd7fabad484caf94b9",
        "date": "1547487409045",
        "title": "Testing",
        "creator": {
          "_id": "5c3cc489a1f3273f984495ad",
          "email": "test@test.email",
          "createdEvents": [
            {
              "_id": "5c3cc8bd7fabad484caf94b9",
              "title": "Testing",
              "creator": {
                "email": "test@test.email"
              }
            }
          ]
        }
      }
    ]
  }
}
```
- createEvent mutation request 
```json
mutation {
  createEvent(eventInput: {
    	title: "Another Event", 
    	description: "This is another test event", 
    	price: 999.99, 
    	date: "2019-01-14T18:30:49.045Z"
  })
  {
    title
    description
  }
}

```
- createEvent mutation response
```json
{
  "data": {
    "createEvent": {
      "title": "Another Event",
      "description": "This is another test event"
    }
  }
}
```

- `events` query request
```json
query {
  events {
  	_id
    date
    title
    creator {
      _id
      email
      createdEvents {
				_id
        title
        creator {
          email
        }
      }
    }
  }
}

```
- `events` query response
```json
{
  "data": {
    "events": [
      {
        "_id": "5c3cc8bd7fabad484caf94b9",
        "date": "1547487409045",
        "title": "Testing",
        "creator": {
          "_id": "5c3cc489a1f3273f984495ad",
          "email": "test@test.email",
          "createdEvents": [
            {
              "_id": "5c3cc8bd7fabad484caf94b9",
              "title": "Testing",
              "creator": {
                "email": "test@test.email"
              }
            },
            {
              "_id": "5c3cd53f984bef4744ac6f9f",
              "title": "Another Event",
              "creator": {
                "email": "test@test.email"
              }
            }
          ]
        }
      },
      {
        "_id": "5c3cd53f984bef4744ac6f9f",
        "date": "1547490649045",
        "title": "Another Event",
        "creator": {
          "_id": "5c3cc489a1f3273f984495ad",
          "email": "test@test.email",
          "createdEvents": [
            {
              "_id": "5c3cc8bd7fabad484caf94b9",
              "title": "Testing",
              "creator": {
                "email": "test@test.email"
              }
            },
            {
              "_id": "5c3cd53f984bef4744ac6f9f",
              "title": "Another Event",
              "creator": {
                "email": "test@test.email"
              }
            }
          ]
        }
      }
    ]
  }
}
```

- createEvent mutation request 
```json
mutation {
  createEvent(eventInput: {
    	title: "Third Event", 
    	description: "This is the third test event", 
    	price: 129.99, 
    	date: "2019-01-14T18:36:49.045Z"
  })
  {
    title
    description
    creator {
      email
    }
  }
}
```
- createEvent mutation response
```json
{
  "data": {
    "createEvent": {
      "title": "Third Event",
      "description": "This is the third test event",
      "creator": {
        "email": "test@test.email"
      }
    }
  }
}
```

### Refactor the code putting each model in a different file

- The `graphql` folder must be created with the `schema` and `resolvers` subfolders.

- In the `schema` subfolder the following files must be created

> index.js
```js
const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Event {
    _id: ID!
    title: String!
    description: String!
    price: Float!
    date: String!
    creator: User!
  }

  type User {
    _id: ID!
    email: String!
    password: String
    createdEvents: [Event!]
  }

  input EventInput {
    title: String!
    description: String!
    price: Float!
    date: String!      
  }

  input UserInput {
    email: String!
    password: String!
  }

  type RootQuery {
    events: [Event!]!
  }

  type RootMutation {
    createEvent(eventInput: EventInput): Event
    createUser(userInput: UserInput): User
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);
```

- In the `resolvers` subfolder the following files must be created

> index.js
```js
const bcrypt = require('bcryptjs');

const Event = require('../../models/event');
const User = require('../../models/user');

const events = eventIds => {
  return Event.find({_id: {$in: eventIds}})
    .then(events => {
      return events.map(event => {
        return {
        ...event._doc, 
        _id: event.id, 
        creator: user.bind(this, event._doc.creator)};
      }); 
    })
    .catch(err => {
      console.log(err);
      throw err;
    });  
  }
  
const user = userId => {
  return User.findById(userId)
    .then(user => {
      return {...user._doc, _id: user.id, createdEvents: events.bind(this, user._doc.createdEvents)};
    })
    .catch(err => {
      console.log(err);
      throw err;
    })
  };
  
module.exports = {
  events: () => {
    return Event
      .find()
      .then(events => {
        return events.map(event => {
          return {
            ...event._doc, 
            _id: event.id,
            creator: user.bind(this, event._doc.creator)
          };
        })
      })
      .catch(err => {
        console.log(err);
        throw err;
      })       
  },
  createEvent: (args) => {
    const event = new Event({
      title: args.eventInput.title,
      description: args.eventInput.description,
      price: +args.eventInput.price,
      date: new Date(args.eventInput.date),
      creator: "5c3cc489a1f3273f984495ad"
    });
    let createdEvent;
    return event
      .save()
      .then(result => {
        console.log(result);
        createdEvent = { 
          ...result._doc, 
          _id: result._doc._id.toString(),
          creator: user.bind(this, result._doc.creator)
        };
        return User.findById(result._doc.creator.toString())
      })
      .then(user => {
        if (!user) {
          throw new Error('User does not exists.')
        }
        user.createdEvents.push(event);
        return user.save();
      })
      .then(result => {
        console.log(result);
        return createdEvent;
      })        
      .catch(err => {
        console.log(err);
        throw err;
      })
  },
  createUser: args => {
    return User
      .findOne({email: args.userInput.email})
      .then(user => {
        if (user) {
          throw new Error('User already exists.')
        }
        return bcrypt.hash(args.userInput.password, 12);
      })
      .then(hashPassword => {
        const user = new User({
          email: args.userInput.email,
          password: hashPassword
        });
        return user
          .save()
          .then(result => {
            console.log(result);
            return { ...result._doc, password: null, _id: result.id};
          })          
      })
      .catch(err => {
        console.log(err);
        throw err;
      })        
  }
}
```

- the `app.js` contains just 

> app.js
```js
const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');

const graphQlSchema = require('./graphql/schema/index')
const graphQlResolvers = require('./graphql/resolvers/index')

const app = express();

app.use(bodyParser.json());

app.use('/graphql', graphqlHttp({
  schema: graphQlSchema,
  rootValue: graphQlResolvers,    
  graphiql: true
}));

mongoose
  .connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-ycwj8.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`)
  .then(() => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  })

```

- createEvent mutation request 
```json
mutation {
  createEvent(eventInput: {
    	title: "Fourth Event", 
    	description: "This is the Fourth test event", 
    	price: 129.99, 
    	date: "2019-01-14T18:57:49.045Z"
  })
  {
    title
    description
    creator {
      email
    }
  }
}
```
- createEvent mutation response
```json
{
  "data": {
    "createEvent": {
      "title": "Fourth Event",
      "description": "This is the Fourth test event",
      "creator": {
        "email": "test@test.email"
      }
    }
  }
}
```


- `events` query request
```json
query {
  events {
  	_id
    date
    title
    creator {
      email
      createdEvents {
        title
        creator {
          email
        }
      }
    }
  }
}

```
- `events` query response
```json
{
  "data": {
    "events": [
      {
        "_id": "5c3cc8bd7fabad484caf94b9",
        "date": "1547487409045",
        "title": "Testing",
        "creator": {
          "email": "test@test.email",
          "createdEvents": [
            {
              "title": "Testing",
              "creator": {
                "email": "test@test.email"
              }
            },
            {
              "title": "Another Event",
              "creator": {
                "email": "test@test.email"
              }
            },
            {
              "title": "Third Event",
              "creator": {
                "email": "test@test.email"
              }
            },
            {
              "title": "Fourth Event",
              "creator": {
                "email": "test@test.email"
              }
            }
          ]
        }
      },
      {
        "_id": "5c3cd53f984bef4744ac6f9f",
        "date": "1547490649045",
        "title": "Another Event",
        "creator": {
          "email": "test@test.email",
          "createdEvents": [
            {
              "title": "Testing",
              "creator": {
                "email": "test@test.email"
              }
            },
            {
              "title": "Another Event",
              "creator": {
                "email": "test@test.email"
              }
            },
            {
              "title": "Third Event",
              "creator": {
                "email": "test@test.email"
              }
            },
            {
              "title": "Fourth Event",
              "creator": {
                "email": "test@test.email"
              }
            }
          ]
        }
      },
      {
        "_id": "5c3cd6e0764e1362c4483e85",
        "date": "1547491009045",
        "title": "Third Event",
        "creator": {
          "email": "test@test.email",
          "createdEvents": [
            {
              "title": "Testing",
              "creator": {
                "email": "test@test.email"
              }
            },
            {
              "title": "Another Event",
              "creator": {
                "email": "test@test.email"
              }
            },
            {
              "title": "Third Event",
              "creator": {
                "email": "test@test.email"
              }
            },
            {
              "title": "Fourth Event",
              "creator": {
                "email": "test@test.email"
              }
            }
          ]
        }
      },
      {
        "_id": "5c3cdb968e001e26a8bbe48e",
        "date": "1547492269045",
        "title": "Fourth Event",
        "creator": {
          "email": "test@test.email",
          "createdEvents": [
            {
              "title": "Testing",
              "creator": {
                "email": "test@test.email"
              }
            },
            {
              "title": "Another Event",
              "creator": {
                "email": "test@test.email"
              }
            },
            {
              "title": "Third Event",
              "creator": {
                "email": "test@test.email"
              }
            },
            {
              "title": "Fourth Event",
              "creator": {
                "email": "test@test.email"
              }
            }
          ]
        }
      }
    ]
  }
}
```

### Fix the way the date is returned

> resolvers - index.js
```js
const bcrypt = require('bcryptjs');

const Event = require('../../models/event');
const User = require('../../models/user');

const events = eventIds => {
  return Event.find({_id: {$in: eventIds}})
    .then(events => {
      return events.map(event => {
        return {
        ...event._doc, 
        _id: event.id, 
        date: new Date(event._doc.date).toISOString(),
        creator: user.bind(this, event._doc.creator)};
      }); 
    })
    .catch(err => {
      console.log(err);
      throw err;
    });  
  }
  
const user = userId => {
  return User.findById(userId)
    .then(user => {
      return {
        ...user._doc, 
        _id: user.id, 
        createdEvents: events.bind(this, user._doc.createdEvents)
      };
    })
    .catch(err => {
      console.log(err);
      throw err;
    })
  };
  
module.exports = {
  events: () => {
    return Event
      .find()
      .then(events => {
        return events.map(event => {
          return {
            ...event._doc, 
            _id: event.id,
            date: new Date(event._doc.date).toISOString(),
            creator: user.bind(this, event._doc.creator)
          };
        })
      })
      .catch(err => {
        console.log(err);
        throw err;
      })       
  },
  createEvent: (args) => {
    const event = new Event({
      title: args.eventInput.title,
      description: args.eventInput.description,
      price: +args.eventInput.price,
      date: new Date(args.eventInput.date),
      creator: "5c3cc489a1f3273f984495ad"
    });
    let createdEvent;
    return event
      .save()
      .then(result => {
        console.log(result);
        createdEvent = { 
          ...result._doc, 
          _id: result._doc._id.toString(),
          date: new Date(event._doc.date).toISOString(),
          creator: user.bind(this, result._doc.creator)
        };
        return User.findById(result._doc.creator.toString())
      })
      .then(user => {
        if (!user) {
          throw new Error('User does not exists.')
        }
        user.createdEvents.push(event);
        return user.save();
      })
      .then(result => {
        console.log(result);
        return createdEvent;
      })        
      .catch(err => {
        console.log(err);
        throw err;
      })
  },
  createUser: args => {
    return User
      .findOne({email: args.userInput.email})
      .then(user => {
        if (user) {
          throw new Error('User already exists.')
        }
        return bcrypt.hash(args.userInput.password, 12);
      })
      .then(hashPassword => {
        const user = new User({
          email: args.userInput.email,
          password: hashPassword
        });
        return user
          .save()
          .then(result => {
            console.log(result);
            return { ...result._doc, password: null, _id: result.id};
          })          
      })
      .catch(err => {
        console.log(err);
        throw err;
      })        
  }
}
```

- `events` query request
```json
query {
  events {
  	_id
    date
    title
    creator {
      email
    }
  }
}

```
- `events` query response
```json
{
  "data": {
    "events": [
      {
        "_id": "5c3cc8bd7fabad484caf94b9",
        "date": "2019-01-14T17:36:49.045Z",
        "title": "Testing",
        "creator": {
          "email": "test@test.email"
        }
      },
      {
        "_id": "5c3cd53f984bef4744ac6f9f",
        "date": "2019-01-14T18:30:49.045Z",
        "title": "Another Event",
        "creator": {
          "email": "test@test.email"
        }
      },
      {
        "_id": "5c3cd6e0764e1362c4483e85",
        "date": "2019-01-14T18:36:49.045Z",
        "title": "Third Event",
        "creator": {
          "email": "test@test.email"
        }
      },
      {
        "_id": "5c3cdb968e001e26a8bbe48e",
        "date": "2019-01-14T18:57:49.045Z",
        "title": "Fourth Event",
        "creator": {
          "email": "test@test.email"
        }
      }
    ]
  }
}
```

### Change to use async / await

> resolvers - index.js
```js
const bcrypt = require('bcryptjs');

const Event = require('../../models/event');
const User = require('../../models/user');

const events = async eventIds => {
  try {
    const events = await Event.find({ _id: { $in: eventIds } });
    return events.map(event => {
      return {
        ...event._doc,
        _id: event.id,
        date: new Date(event._doc.date).toISOString(),
        creator: user.bind(this, event._doc.creator)
      };
    });
  }
  catch (err) {
    console.log(err);
    throw err;
  }  
}

const user = async userId => {
  try {
    const user = await User.findById(userId);
    return {
      ...user._doc,
      _id: user.id,
      createdEvents: events.bind(this, user._doc.createdEvents)
    };
  }
  catch (err) {
    console.log(err);
    throw err;
  }
};
  
module.exports = {
  events: async () => {
    try {
      const events = await Event.find();
      return events.map(event => {
        return {
          ...event._doc,
          _id: event.id,
          date: new Date(event._doc.date).toISOString(),
          creator: user.bind(this, event._doc.creator)
        };
      });
    }
    catch (err) {
      console.log(err);
      throw err;
    }       
  },
  createEvent: async args => {
    try {
      const event = new Event({
        title: args.eventInput.title,
        description: args.eventInput.description,
        price: +args.eventInput.price,
        date: new Date(args.eventInput.date),
        creator: "5c3cc489a1f3273f984495ad"
      });
      const result = await event.save();
      const creator = await User.findById(result._doc.creator.toString())
      if (!creator) {
        throw new Error('User does not exists.')
      }
      creator.createdEvents.push(event);
      await creator.save();
      return { 
        ...result._doc, 
        _id: result._doc._id.toString(),
        date: new Date(event._doc.date).toISOString(),
        creator: user.bind(this, result._doc.creator)
      };
    }
    catch (err) {
      console.log(err);
      throw err;
    }      
 },
  createUser: async args => {
    try {
      const user = await User.findOne({ email: args.userInput.email });
      if (user) {
        throw new Error('User already exists.');
      }
      const hashPassword = await bcrypt.hash(args.userInput.password, 12);
      const newUser = new User({
        email: args.userInput.email,
        password: hashPassword
      });
      const result = await newUser.save();
      return {
        ...result._doc,
        password: null,
        _id: result.id
      }
    }
    catch (err) {
      console.log(err);
      throw err;
    }        
  }
}
```

- createuser mutation request
```json
mutation {
  createUser(userInput: {
    	email: "test2@test.email", 
    	password: "tester"
  })
  {
    email
    password
  }
}
```

- createuser mutation response
```json
{
  "data": {
    "createUser": {
      "email": "test2@test.email",
      "password": null
    }
  }
}
```

- createEvent mutation request 
```json
mutation {
  createEvent(eventInput: {
    	title: "Fifth Event", 
    	description: "This is the fifth test event", 
    	price: 129.99, 
    	date: "2019-01-14T19:31:49.045Z"
  })
  {
    title
    description
    creator {
      email
    }
  }
}
```
- createEvent mutation response
```json
{
  "data": {
    "createEvent": {
      "title": "Fifth Event",
      "description": "This is the fifth test event",
      "creator": {
        "email": "test@test.email"
      }
    }
  }
}
```

- `events` query request
```json
query {
  events {
  	_id
    date
    title
    creator {
      email
    }
  }
}

```
- `events` query response
```json
{
  "data": {
    "events": [
      {
        "_id": "5c3cc8bd7fabad484caf94b9",
        "date": "2019-01-14T17:36:49.045Z",
        "title": "Testing",
        "creator": {
          "email": "test@test.email"
        }
      },
      {
        "_id": "5c3cd53f984bef4744ac6f9f",
        "date": "2019-01-14T18:30:49.045Z",
        "title": "Another Event",
        "creator": {
          "email": "test@test.email"
        }
      },
      {
        "_id": "5c3cd6e0764e1362c4483e85",
        "date": "2019-01-14T18:36:49.045Z",
        "title": "Third Event",
        "creator": {
          "email": "test@test.email"
        }
      },
      {
        "_id": "5c3cdb968e001e26a8bbe48e",
        "date": "2019-01-14T18:57:49.045Z",
        "title": "Fourth Event",
        "creator": {
          "email": "test@test.email"
        }
      },
      {
        "_id": "5c3ce3da28127360043d9cd0",
        "date": "2019-01-14T19:31:49.045Z",
        "title": "Fifth Event",
        "creator": {
          "email": "test@test.email"
        }
      },
      {
        "_id": "5c3ce4d7a0ae7c38c8d7218c",
        "date": "2019-01-14T19:31:49.045Z",
        "title": "Fifth Event",
        "creator": {
          "email": "test@test.email"
        }
      },
      {
        "_id": "5c3ce51ca7e8602c9c0d35fd",
        "date": "2019-01-14T19:31:49.045Z",
        "title": "Fifth Event",
        "creator": {
          "email": "test@test.email"
        }
      }
    ]
  }
}
```

## 8 Adding Bookings 20:57

### Create the new `booking` model

> models booking.js
```js
const moongose = require("mongoose");

const Schema = moongose.Schema;

const bookingSchema = new Schema(
  {
    event: {
      type: Schema.Types.ObjectId,
      ref: "Event"
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

module.exports = moongose.model("Booking", bookingSchema);
```

> schema index.js
```js
const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Booking {
    _id: ID!    
    event: Event!
    user: User!
    createdAt: String
    updatedAt: String
  }

  type Event {
    _id: ID!
    title: String!
    description: String!
    price: Float!
    date: String!
    creator: User!
  }

  type User {
    _id: ID!
    email: String!
    password: String
    createdEvents: [Event!]
  }

  input EventInput {
    title: String!
    description: String!
    price: Float!
    date: String!      
  }

  input UserInput {
    email: String!
    password: String!
  }

  type RootQuery {
    events: [Event!]!
    bookings: [Booking!]!
  }

  type RootMutation {
    createEvent(eventInput: EventInput): Event
    createUser(userInput: UserInput): User
    bookEvent(eventId: ID!): Booking!
    cancelBooking(bookingId: ID!): Event!
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);
```

> resolvers index.js
```js
const bcrypt = require("bcryptjs");

const Event = require("../../models/event");
const User = require("../../models/user");
const Booking = require("../../models/booking");

const events = async eventIds => {
  try {
    const events = await Event.find({ _id: { $in: eventIds } });
    return events.map(event => {
      return {
        ...event._doc,
        _id: event.id,
        date: new Date(event._doc.date).toISOString(),
        creator: user.bind(this, event._doc.creator)
      };
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const user = async userId => {
  try {
    const user = await User.findById(userId);
    return {
      ...user._doc,
      _id: user.id,
      createdEvents: events.bind(this, user._doc.createdEvents)
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  events: async () => {
    try {
      const events = await Event.find();
      return events.map(event => {
        return {
          ...event._doc,
          _id: event.id,
          date: new Date(event._doc.date).toISOString(),
          creator: user.bind(this, event._doc.creator)
        };
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  bookings: async () => {
    try {
      const bookings = await Booking.find();
      return bookings.map(booking => {
        return {
          ...booking._doc,
          _id: booking.id,
          createdAt: new Date(booking._doc.createdAt).toISOString(),
          updatedAt: new Date(booking._doc.updatedAt).toISOString()
        };
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  createEvent: async args => {
    try {
      const event = new Event({
        title: args.eventInput.title,
        description: args.eventInput.description,
        price: +args.eventInput.price,
        date: new Date(args.eventInput.date),
        creator: "5c3cc489a1f3273f984495ad"
      });
      const result = await event.save();
      const creator = await User.findById(result._doc.creator.toString());
      if (!creator) {
        throw new Error("User does not exists.");
      }
      creator.createdEvents.push(event);
      await creator.save();
      return {
        ...result._doc,
        _id: result._doc._id.toString(),
        date: new Date(event._doc.date).toISOString(),
        creator: user.bind(this, result._doc.creator)
      };
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  createUser: async args => {
    try {
      const user = await User.findOne({ email: args.userInput.email });
      if (user) {
        throw new Error("User already exists.");
      }
      const hashPassword = await bcrypt.hash(args.userInput.password, 12);
      const newUser = new User({
        email: args.userInput.email,
        password: hashPassword
      });
      const result = await newUser.save();
      return {
        ...result._doc,
        password: null,
        _id: result.id
      };
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  bookEvent: async args => {
    try {
      const fectchedEvent = await Event.findById(args.eventId);
      const booking = new Booking({
        user: "5c3cc489a1f3273f984495ad",
        event: fectchedEvent
      });
      const result = await booking.save();
      return {
        ...result._doc,
        _id: result.id,
        createdAt: new Date(result._doc.createdAt).toISOString(),
        updatedAt: new Date(result._doc.updatedAt).toISOString()
      };
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
```

- bookEvent mutation request 
```json
mutation {
  bookEvent(eventId: "5c3cc8bd7fabad484caf94b9")
  {
    _id
    createdAt
    updatedAt
  }
}

```
- bookEvent mutation response
```json
{
  "data": {
    "bookEvent": {
      "_id": "5c3e22506de3492b686879b5",
      "createdAt": "2019-01-15T18:11:28.966Z",
      "updatedAt": "2019-01-15T18:11:28.966Z"
    }
  }
}
```

### Create the `singleEvent` function

> resolvers index.js
```js
const bcrypt = require("bcryptjs");

const Event = require("../../models/event");
const User = require("../../models/user");
const Booking = require("../../models/booking");

const events = async eventIds => {
  try {
    const events = await Event.find({ _id: { $in: eventIds } });
    return events.map(event => {
      return {
        ...event._doc,
        _id: event.id,
        date: new Date(event._doc.date).toISOString(),
        creator: user.bind(this, event._doc.creator)
      };
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const singleEvent = async eventId => {
  try {
    const event = await Event.findById(eventId);
    return {
      ...event._doc,
      _id: event.id,
      date: new Date(event._doc.date).toISOString(),
      creator: user.bind(this, event._doc.creator)
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const user = async userId => {
  try {
    const user = await User.findById(userId);
    return {
      ...user._doc,
      _id: user.id,
      createdEvents: events.bind(this, user._doc.createdEvents)
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  events: async () => {
    try {
      const events = await Event.find();
      return events.map(event => {
        return {
          ...event._doc,
          _id: event.id,
          date: new Date(event._doc.date).toISOString(),
          creator: user.bind(this, event._doc.creator)
        };
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  bookings: async () => {
    try {
      const bookings = await Booking.find();
      return bookings.map(booking => {
        return {
          ...booking._doc,
          _id: booking.id,
          user: user.bind(this, booking._doc.user),
          event: singleEvent.bind(this, booking._doc.event),
          createdAt: new Date(booking._doc.createdAt).toISOString(),
          updatedAt: new Date(booking._doc.updatedAt).toISOString()
        };
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  createEvent: async args => {
    try {
      const event = new Event({
        title: args.eventInput.title,
        description: args.eventInput.description,
        price: +args.eventInput.price,
        date: new Date(args.eventInput.date),
        creator: "5c3cc489a1f3273f984495ad"
      });
      const result = await event.save();
      const creator = await User.findById(result._doc.creator.toString());
      if (!creator) {
        throw new Error("User does not exists.");
      }
      creator.createdEvents.push(event);
      await creator.save();
      return {
        ...result._doc,
        _id: result._doc._id.toString(),
        date: new Date(event._doc.date).toISOString(),
        creator: user.bind(this, result._doc.creator)
      };
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  createUser: async args => {
    try {
      const user = await User.findOne({ email: args.userInput.email });
      if (user) {
        throw new Error("User already exists.");
      }
      const hashPassword = await bcrypt.hash(args.userInput.password, 12);
      const newUser = new User({
        email: args.userInput.email,
        password: hashPassword
      });
      const result = await newUser.save();
      return {
        ...result._doc,
        password: null,
        _id: result.id
      };
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  bookEvent: async args => {
    try {
      const fectchedEvent = await Event.findById(args.eventId);
      const booking = new Booking({
        user: "5c3cc489a1f3273f984495ad",
        event: fectchedEvent
      });
      const result = await booking.save();
      return {
        ...result._doc,
        _id: result.id,
        user: user.bind(this, result._doc.user),
        event: singleEvent.bind(this, result._doc.event),
        createdAt: new Date(result._doc.createdAt).toISOString(),
        updatedAt: new Date(result._doc.updatedAt).toISOString()
      };
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};

```

- bookEvent mutation request 
```json
mutation {
  bookEvent(eventId: "5c3cc8bd7fabad484caf94b9")
  {
    _id
    event {
      _id
      description
    }
    user {
      _id
      email
    }
    createdAt
    updatedAt
  }
}
```
- bookEvent mutation response
```json
{
  "data": {
    "bookEvent": {
      "_id": "5c3e24b8905d223930e24b13",
      "event": {
        "_id": "5c3cc8bd7fabad484caf94b9",
        "description": "This is a test event"
      },
      "user": {
        "_id": "5c3cc489a1f3273f984495ad",
        "email": "test@test.email"
      },
      "createdAt": "2019-01-15T18:21:44.820Z",
      "updatedAt": "2019-01-15T18:21:44.820Z"
    }
  }
}
```

![](/images/other/graphql-graphql-react-event-booking/Booking.png)

- bookings query request
```json
query {
  bookings {
  	_id
    createdAt
    event {
      title
      creator {
        email
      }
    }
    user {
      email
    }
  }
}
```

- bookings query response
```json
{
  "data": {
    "bookings": [
      {
        "_id": "5c3e22506de3492b686879b5",
        "createdAt": "2019-01-15T18:11:28.966Z",
        "event": {
          "title": "Testing",
          "creator": {
            "email": "test@test.email"
          }
        },
        "user": {
          "email": "test@test.email"
        }
      },
      {
        "_id": "5c3e24b8905d223930e24b13",
        "createdAt": "2019-01-15T18:21:44.820Z",
        "event": {
          "title": "Testing",
          "creator": {
            "email": "test@test.email"
          }
        },
        "user": {
          "email": "test@test.email"
        }
      }
    ]
  }
}
```

### Create the `cancelBooking` mutation

> resolvers index.js
```js
const bcrypt = require("bcryptjs");

const Event = require("../../models/event");
const User = require("../../models/user");
const Booking = require("../../models/booking");

const events = async eventIds => {
  try {
    const events = await Event.find({ _id: { $in: eventIds } });
    return events.map(event => {
      return {
        ...event._doc,
        _id: event.id,
        date: new Date(event._doc.date).toISOString(),
        creator: user.bind(this, event._doc.creator)
      };
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const singleEvent = async eventId => {
  try {
    const event = await Event.findById(eventId);
    return {
      ...event._doc,
      _id: event.id,
      date: new Date(event._doc.date).toISOString(),
      creator: user.bind(this, event._doc.creator)
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const user = async userId => {
  try {
    const user = await User.findById(userId);
    return {
      ...user._doc,
      _id: user.id,
      createdEvents: events.bind(this, user._doc.createdEvents)
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  events: async () => {
    try {
      const events = await Event.find();
      return events.map(event => {
        return {
          ...event._doc,
          _id: event.id,
          date: new Date(event._doc.date).toISOString(),
          creator: user.bind(this, event._doc.creator)
        };
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  bookings: async () => {
    try {
      const bookings = await Booking.find();
      return bookings.map(booking => {
        return {
          ...booking._doc,
          _id: booking.id,
          user: user.bind(this, booking._doc.user),
          event: singleEvent.bind(this, booking._doc.event),
          createdAt: new Date(booking._doc.createdAt).toISOString(),
          updatedAt: new Date(booking._doc.updatedAt).toISOString()
        };
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  createEvent: async args => {
    try {
      const event = new Event({
        title: args.eventInput.title,
        description: args.eventInput.description,
        price: +args.eventInput.price,
        date: new Date(args.eventInput.date),
        creator: "5c3cc489a1f3273f984495ad"
      });
      const result = await event.save();
      const creator = await User.findById(result._doc.creator.toString());
      if (!creator) {
        throw new Error("User does not exists.");
      }
      creator.createdEvents.push(event);
      await creator.save();
      return {
        ...result._doc,
        _id: result._doc._id.toString(),
        date: new Date(event._doc.date).toISOString(),
        creator: user.bind(this, result._doc.creator)
      };
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  createUser: async args => {
    try {
      const user = await User.findOne({ email: args.userInput.email });
      if (user) {
        throw new Error("User already exists.");
      }
      const hashPassword = await bcrypt.hash(args.userInput.password, 12);
      const newUser = new User({
        email: args.userInput.email,
        password: hashPassword
      });
      const result = await newUser.save();
      return {
        ...result._doc,
        password: null,
        _id: result.id
      };
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  bookEvent: async args => {
    try {
      const fectchedEvent = await Event.findById(args.eventId);
      const booking = new Booking({
        user: "5c3cc489a1f3273f984495ad",
        event: fectchedEvent
      });
      const result = await booking.save();
      return {
        ...result._doc,
        _id: result.id,
        user: user.bind(this, result._doc.user),
        event: singleEvent.bind(this, result._doc.event),
        createdAt: new Date(result._doc.createdAt).toISOString(),
        updatedAt: new Date(result._doc.updatedAt).toISOString()
      };
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  cancelBooking: async args => {
    try {
      const booking = await Booking.findById(args.bookingId).populate("event");
      const event = {
        ...booking.event._doc,
        _id: booking.event.id,
        creator: user.bind(this, booking.event._doc.creator)
      };
      await Booking.deleteOne({ _id: args.bookingId });
      return event;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
```

- cancelBooking mutation request 
```json
mutation {
  cancelBooking(bookingId: "5c3e2d6d5a9cf134b4de0202")
  {
    _id
    title
    creator {
      email
    }
  }
}
```
- cancelBooking mutation response
```json
{
  "data": {
    "cancelBooking": {
      "_id": "5c3cc8bd7fabad484caf94b9",
      "title": "Testing",
      "creator": {
        "email": "test@test.email"
      }
    }
  }
}
```

## 9 Refactoring our code 27:32

### Change some code to make it cleaner

- Create the `helpers` folder and the `date.js` file
> helpers -> date.js
```js
exports.dateToString = date => new Date(date).toISOString();
``` 

- Create the `transformEvent` and `transformBooking` functions and use the new `dateToString` function.
> resolvers -> index.js
```js
const bcrypt = require("bcryptjs");

const Event = require("../../models/event");
const User = require("../../models/user");
const Booking = require("../../models/booking");

const { dateToString } = require('../../helpers/date');

const transformEvent = event => {
  if (event) {
    return {
      ...event._doc,
      _id: event.id,
      date: dateToString(event._doc.date),
      creator: user.bind(this, event._doc.creator)
    };
  }
  return null;
};

const transformBooking = booking => {
  if (booking) {
    return {
      ...booking._doc,
      _id: booking.id,
      user: user.bind(this, booking._doc.user),
      event: singleEvent.bind(this, booking._doc.event),
      createdAt: dateToString(booking._doc.createdAt),
      updatedAt: dateToString(booking._doc.updatedAt)
    };
  }
  return null;
}

const events = async eventIds => {
  try {
    const events = await Event.find({ _id: { $in: eventIds } });
    return events.map(event => {
      return transformEvent(event);
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const singleEvent = async eventId => {
  try {
    const event = await Event.findById(eventId);
    return transformEvent(event);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const user = async userId => {
  try {
    const user = await User.findById(userId);
    return {
      ...user._doc,
      _id: user.id,
      createdEvents: events.bind(this, user._doc.createdEvents)
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  events: async () => {
    try {
      const events = await Event.find();
      return events.map(event => {
        return transformEvent(event);
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  bookings: async () => {
    try {
      const bookings = await Booking.find();
      return bookings.map(booking => {
        return transformBooking(booking);
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  createEvent: async args => {
    try {
      const event = new Event({
        title: args.eventInput.title,
        description: args.eventInput.description,
        price: +args.eventInput.price,
        date: new Date(args.eventInput.date),
        creator: "5c3cc489a1f3273f984495ad"
      });
      const result = await event.save();
      const creator = await User.findById(result._doc.creator.toString());
      if (!creator) {
        throw new Error("User does not exists.");
      }
      creator.createdEvents.push(event);
      await creator.save();
      return transformEvent(result);
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  createUser: async args => {
    try {
      const user = await User.findOne({ email: args.userInput.email });
      if (user) {
        throw new Error("User already exists.");
      }
      const hashPassword = await bcrypt.hash(args.userInput.password, 12);
      const newUser = new User({
        email: args.userInput.email,
        password: hashPassword
      });
      const result = await newUser.save();
      return {
        ...result._doc,
        password: null,
        _id: result.id
      };
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  bookEvent: async args => {
    try {
      const fectchedEvent = await Event.findById(args.eventId);
      if (!fectchedEvent) {
        throw new Error("Event Id does not exist");
      };
      const booking = new Booking({
        user: "5c3cc489a1f3273f984495ad",
        event: fectchedEvent
      });
      const result = await booking.save();
      return transformBooking(result);
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  cancelBooking: async args => {
    try {
      const booking = await Booking.findById(args.bookingId).populate("event");
      if (!booking) {
        throw new Error("Booking Id does not exist");
      };
      await Booking.deleteOne({ _id: args.bookingId });
      return transformEvent(booking.event);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
```
 
 ### Split the resolvers

 > resolvers => events.js
 ```js
 const Event = require("../../models/event");
const { transformEvent } = require("./merge");

module.exports = {
  events: async () => {
    try {
      const events = await Event.find();
      return events.map(event => {
        return transformEvent(event);
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  createEvent: async args => {
    try {
      const event = new Event({
        title: args.eventInput.title,
        description: args.eventInput.description,
        price: +args.eventInput.price,
        date: new Date(args.eventInput.date),
        creator: "5c3cc489a1f3273f984495ad"
      });
      const result = await event.save();
      const creator = await User.findById(result._doc.creator.toString());
      if (!creator) {
        throw new Error("User does not exists.");
      }
      creator.createdEvents.push(event);
      await creator.save();
      return transformEvent(result);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
```

 > resolvers => auth.js
 ```js
 const bcrypt = require("bcryptjs");

const User = require("../../models/user");

module.exports = {
  createUser: async args => {
    try {
      const user = await User.findOne({ email: args.userInput.email });
      if (user) {
        throw new Error("User already exists.");
      }
      const hashPassword = await bcrypt.hash(args.userInput.password, 12);
      const newUser = new User({
        email: args.userInput.email,
        password: hashPassword
      });
      const result = await newUser.save();
      return {
        ...result._doc,
        password: null,
        _id: result.id
      };
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
```

 > resolvers => bookings.js
 ```js
 const Booking = require("../../models/booking");
const Event = require("../../models/event");
const { transformBooking, transformEvent } = require("./merge");

module.exports = {
  bookings: async () => {
    try {
      const bookings = await Booking.find();
      return bookings.map(booking => {
        return transformBooking(booking);
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  bookEvent: async args => {
    try {
      const fectchedEvent = await Event.findById(args.eventId);
      if (!fectchedEvent) {
        throw new Error("Event Id does not exist");
      }
      const booking = new Booking({
        user: "5c3cc489a1f3273f984495ad",
        event: fectchedEvent
      });
      const result = await booking.save();
      return transformBooking(result);
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  cancelBooking: async args => {
    try {
      const booking = await Booking.findById(args.bookingId).populate("event");
      if (!booking) {
        throw new Error("Booking Id does not exist");
      }
      await Booking.deleteOne({ _id: args.bookingId });
      return transformEvent(booking.event);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
```

 > resolvers => merge.js
 ```js
 const Event = require("../../models/event");
const User = require("../../models/user");
const { dateToString } = require("../../helpers/date");

const transformEvent = event => {
  if (event) {
    return {
      ...event._doc,
      _id: event.id,
      date: dateToString(event._doc.date),
      creator: user.bind(this, event._doc.creator)
    };
  }
  return null;
};

const transformBooking = booking => {
  if (booking) {
    return {
      ...booking._doc,
      _id: booking.id,
      user: user.bind(this, booking._doc.user),
      event: singleEvent.bind(this, booking._doc.event),
      createdAt: dateToString(booking._doc.createdAt),
      updatedAt: dateToString(booking._doc.updatedAt)
    };
  }
  return null;
};

const events = async eventIds => {
  try {
    const events = await Event.find({ _id: { $in: eventIds } });
    return events.map(event => {
      return transformEvent(event);
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const singleEvent = async eventId => {
  try {
    const event = await Event.findById(eventId);
    return transformEvent(event);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const user = async userId => {
  try {
    const user = await User.findById(userId);
    return {
      ...user._doc,
      _id: user.id,
      createdEvents: events.bind(this, user._doc.createdEvents)
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
};

exports.transformEvent = transformEvent;
exports.transformBooking = transformBooking;
```

 > resolvers => index.js
 ```js
const authResolver = require("./auth");
const eventsResolver = require("./events");
const bookingsResolver = require("./bookings");

const rootResolver = {
  ...authResolver,
  ...eventsResolver,
  ...bookingsResolver
};

module.exports = rootResolver;
```
 
 ## 10 Adding User Authentication 32:47
 


 ### Add an endpoint on the schema for the users to authenticate

 - It is not a mutation but a query because it is not changing any data
 
 > schema index.js
 ```js
 const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Booking {
    _id: ID!    
    event: Event!
    user: User!
    createdAt: String
    updatedAt: String
  }

  type Event {
    _id: ID!
    title: String!
    description: String!
    price: Float!
    date: String!
    creator: User!
  }

  type User {
    _id: ID!
    email: String!
    password: String
    createdEvents: [Event!]
  }

  type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }

  input EventInput {
    title: String!
    description: String!
    price: Float!
    date: String!      
  }

  input UserInput {
    email: String!
    password: String!
  }

  type RootQuery {
    events: [Event!]!
    bookings: [Booking!]!
    login(email: String, password: String): AuthData!
  }

  type RootMutation {
    createEvent(eventInput: EventInput): Event
    createUser(userInput: UserInput): User
    bookEvent(eventId: ID!): Booking!
    cancelBooking(bookingId: ID!): Event!
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);
 ```

### install `jsonwebtoken` library

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/graphql-react-event-booking
$ npm i jsonwebtoken
npm WARN graphql-react-event-booking@1.0.0 No description
npm WARN graphql-react-event-booking@1.0.0 No repository field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ jsonwebtoken@8.4.0
added 13 packages from 9 contributors and audited 2468 packages in 16.888s
found 0 vulnerabilities
```

### create the `login` function

> resolvers auth.js
```js
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../../models/user");

module.exports = {
  createUser: async args => {
    try {
      const user = await User.findOne({ email: args.userInput.email });
      if (user) {
        throw new Error("User already exists.");
      }
      const hashPassword = await bcrypt.hash(args.userInput.password, 12);
      const newUser = new User({
        email: args.userInput.email,
        password: hashPassword
      });
      const result = await newUser.save();
      return {
        ...result._doc,
        password: null,
        _id: result.id
      };
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  login: async ({ email, password }) => {
    try {
      const user = await User.findOne({ email: email });
      if (!user) {
        throw new Error("Invalid credentials.");
      }
      const isEqual = await bcrypt.compare(password, user.password);
      if (!isEqual) {
        throw new Error("Invalid credentials.");
      }
      const token = jwt.sign(
        { userId: user.id, email: user.email },
        "somesupersecretkey",
        { expiresIn: "1h" }
      );
      return {
        userId: user.id,
        token: token,
        tokenExpiration: 1
      };
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};

```

- login query request
```json
query {
  login(email: "test@test.com",	password: "aaa")
  {
    userId
    token
    tokenExpiration
  }
}
```

- login query response
```json
{
  "errors": [
    {
      "message": "Invalid credentials.",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": [
        "login"
      ]
    }
  ],
  "data": null
}
```

- login query request
```json
query {
  login(email: "test3@test.com",	password: "tester")
  {
    userId
    token
    tokenExpiration
  }
}
```

- login query response
```json
{
  "errors": [
    {
      "message": "Invalid credentials.",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": [
        "login"
      ]
    }
  ],
  "data": null
}
```

- login query request
```json
query {
  login(email: "test@test.com",	password: "tester")
  {
    userId
    token
    tokenExpiration
  }
}
```

- login query response
```json
{
  "data": {
    "login": {
      "userId": "5c3cc489a1f3273f984495ad",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1YzNjYzQ4OWExZjMyNzNmOTg0NDk1YWQiLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpYXQiOjE1NDc3MDYwOTMsImV4cCI6MTU0NzcwOTY5M30.cSQjd823q-Tb54ogAT2SadNUfNzrxP12ufyuGjFjcao",
      "tokenExpiration": 1
    }
  }
}
```

### Add a middleware to authenticate the calls

- The new `middleware` folder and the new `is-auth.js` file must be created.

> middleware is-auth.js
```js
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    req.isAuth = false;
    return next();
  }
  const tokens = authHeader.split(' '); // Authorization: Bearer tokendsdaadadad
  if (tokens.length !=2 || tokens[0]!=='Bearer' || !tokens[1] || tokens[1] === '') {
    req.isAuth = false;
    return next();
  }
  let decodedToken;
  try {
    decodedToken = jwt.verify(tokens[1], 'somesupersecretkey');
  } catch (error) {
    console.log(error);
    req.isAuth = false;
    return next();    
  }
  if (!decodedToken) {
    req.isAuth = false;
    return next();        
  }
  req.isAuth = true;
  req.userId = decodedToken.userId;
  next();
}
```
> app.js
```js
const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql");
const mongoose = require("mongoose");
const isAuth = require("./middleware/is-auth");
const graphQlSchema = require("./graphql/schema/index");
const graphQlResolvers = require("./graphql/resolvers/index");

const app = express();

app.use(bodyParser.json());

app.use(isAuth);

app.use(
  "/graphql",
  graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
  })
);

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${
      process.env.MONGO_PASSWORD
    }@cluster0-ycwj8.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`
  )
  .then(() => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
```

- Modify `events.js` to authenticae `createEvent` 
> resolvers events.js
```js
const Event = require("../../models/event");
const User = require('../../models/user');
const { transformEvent } = require("./merge");

module.exports = {
  events: async () => {
    try {
      const events = await Event.find();
      return events.map(event => {
        return transformEvent(event);
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  createEvent: async (args, req) => {
    try {
      if (!req.isAuth) {
        throw new Error("Unauthenticated.");
      }
      const event = new Event({
        title: args.eventInput.title,
        description: args.eventInput.description,
        price: +args.eventInput.price,
        date: new Date(args.eventInput.date),
        creator: req.userId
      });
      const result = await event.save();
      const creator = await User.findById(result._doc.creator.toString());
      if (!creator) {
        throw new Error("User does not exists.");
      }
      creator.createdEvents.push(event);
      await creator.save();
      return transformEvent(result);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
```

> resolvers bookings.js
```js
const Booking = require("../../models/booking");
const Event = require("../../models/event");
const { transformBooking, transformEvent } = require("./merge");

module.exports = {
  bookings: async (args, req) => {
    try {
      if (!req.isAuth) {
        throw new Error("Unauthenticated.");
      }
      const bookings = await Booking.find();
      return bookings.map(booking => {
        return transformBooking(booking);
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  bookEvent: async (args, req) => {
    try {
      if (!req.isAuth) {
        throw new Error("Unauthenticated.");
      }
      const fectchedEvent = await Event.findById(args.eventId);
      if (!fectchedEvent) {
        throw new Error("Event Id does not exist");
      }
      const booking = new Booking({
        user: req.userId,
        event: fectchedEvent
      });
      const result = await booking.save();
      return transformBooking(result);
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  cancelBooking: async (args, req) => {
    try {
      if (!req.isAuth) {
        throw new Error("Unauthenticated.");
      }
      const booking = await Booking.findById(args.bookingId).populate("event");
      if (!booking) {
        throw new Error("Booking Id does not exist");
      }
      await Booking.deleteOne({ _id: args.bookingId });
      return transformEvent(booking.event);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
```

- createEvent mutation rquest
```json
mutation {
  createEvent(eventInput: {title: "Should not work", description: "Not much", price: 120.99, date: "2019-01-17T06:44:34.575Z"})
  {
    _id
    description
  }
}
```

- createEvent mutation response
```json
{
  "errors": [
    {
      "message": "Unauthenticated.",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": [
        "createEvent"
      ]
    }
  ],
  "data": {
    "createEvent": null
  }
}
```

### use Postman to send the authentication token

- get the token we are going to use
```json
query {
  login(email: "test@test.com",	password: "tester")
  {
    userId
    token
    tokenExpiration
  }
}
```

- login query response
```json
{
  "data": {
    "login": {
      "userId": "5c3cc489a1f3273f984495ad",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1YzNjYzQ4OWExZjMyNzNmOTg0NDk1YWQiLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpYXQiOjE1NDc3MDgwMjcsImV4cCI6MTU0NzcxMTYyN30.weW2ckiLwci5341Ah1W3RoywIFgr4tT1e4Wo1g9Tnu0",
      "tokenExpiration": 1
    }
  }
}
```

- createEvent mutation request
```
POST /graphql HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1YzNjYzQ4OWExZjMyNzNmOTg0NDk1YWQiLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpYXQiOjE1NDc3MDgwMjcsImV4cCI6MTU0NzcxMTYyN30.weW2ckiLwci5341Ah1W3RoywIFgr4tT1e4Wo1g9Tnu0
Cache-Control: no-cache
Postman-Token: fbbeef86-ad9a-715b-851f-c94678b053ed

 {
 	"query": "mutation {createEvent(eventInput: {title: \"A new authenticated event\", description: \"It should work as well\", price: 120.99, date: \"2019-01-17T07:23:34.575Z\"}){ _id title description price date creator {_id email}}}" 
 	
 }
```

- createEvent mutation response
```json
{
    "data": {
        "createEvent": {
            "_id": "5c402d75208d592820acf109",
            "title": "A new authenticated event",
            "description": "It should work as well",
            "price": 120.99,
            "date": "2019-01-17T07:23:34.575Z",
            "creator": {
                "_id": "5c3cc489a1f3273f984495ad",
                "email": "test@test.com"
            }
        }
    }
}
```

## 11 The React Frontend 18:51

### Create the new `frontend` folder where the `React` application is going to be deployed

- [create-react-app](https://github.com/facebook/create-react-app) CLI will be used to create the app.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/graphql-react-event-booking$ cd frontend/

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/graphql-react-event-booking/frontend
$ npx create-react-app .
npx: installed 63 in 11.576s

Creating a new React app in C:\Work\Training\Pre\GraphQL\graphql-react-event-booking\frontend.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts...

yarn add v1.13.0
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@1.2.4: The platform "win32" is incompatible with this module.
info "fsevents@1.2.4" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 5 new dependencies.
info Direct dependencies
├─ react-dom@16.7.0
├─ react-scripts@2.1.3
└─ react@16.7.0
info All dependencies
├─ react-dev-utils@7.0.1
├─ react-dom@16.7.0
├─ react-error-overlay@5.1.2
├─ react-scripts@2.1.3
└─ react@16.7.0
Done in 134.37s.

Initialized a git repository.

Success! Created frontend at C:\Work\Training\Pre\GraphQL\graphql-react-event-booking\frontend
Inside that directory, you can run several commands:

  yarn start
    Starts the development server.

  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd C:\Work\Training\Pre\GraphQL\graphql-react-event-booking\frontend
  yarn start

Happy hacking!

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/graphql-react-event-booking/frontend (master)
```

![](/images/other/graphql-graphql-react-event-booking/create-react-app.png)#

### Get rid of the not needed files and modify some other ones

- Remove the following files
> App.test.js
> logo.svg
> serviceWorker.js

- Empty the following files
> App.css

- Modify the following files
> index.css
```css
body {
  margin: 0;
  padding: 0;
}
```

> index.js
```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

> App.js
```js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
```

### Start developing the content

> index.css
```css
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
```

> App.js
```js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>It works!</h1>
      </div>
    );
  }
}

export default App;
```

- Check if it works.
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/graphql-react-event-booking/frontend (master)
$ npm start

> frontend@0.1.0 start C:\Work\Training\Pre\GraphQL\graphql-react-event-booking\frontend
> react-scripts start
Starting the development server...
Compiled successfully!

You can now view frontend in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://10.0.75.1:3000/

Note that the development build is not optimized.
To create a production build, use yarn build.
```

![](/images/other/graphql-graphql-react-event-booking/create-react-app2.png)

### Install the `react-router-dom` library

> pacjage.json
```json
{
  "name": "frontend",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^16.7.0",
    "react-dom": "^16.7.0",
    "react-scripts": "2.1.3",
    "react-router-dom": "^4.3.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
  ]
}
```

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/graphql-react-event-booking/frontend (master)
$ npm i
npm WARN deprecated circular-json@0.3.3: CircularJSON is in maintenance only, flatted is its successor.
npm WARN deprecated kleur@2.0.2: Please upgrade to kleur@3 or migrate to 'ansi-colors' if you prefer the old syntax. Visit <https://github.com/lukeed/kleur/releases/tag/v3.0.0\> for migration path(s).
npm WARN rm not removing C:\Work\Training\Pre\GraphQL\graphql-react-event-booking\frontend\node_modules\.bin\jest.cmd as it wasn't installed by C:\Work\Training\Pre\GraphQL\graphql-react-event-booking\frontend\node_modules\jest
npm WARN rm not removing C:\Work\Training\Pre\GraphQL\graphql-react-event-booking\frontend\node_modules\.bin\jest as it wasn't installed by C:\Work\Training\Pre\GraphQL\graphql-react-event-booking\frontend\node_modules\jest
npm WARN rm not removing C:\Work\Training\Pre\GraphQL\graphql-react-event-booking\frontend\node_modules\.bin\regjsparser.cmd as it wasn't installed by C:\Work\Training\Pre\GraphQL\graphql-react-event-booking\frontend\node_modules\regjsparser
npm WARN rm not removing C:\Work\Training\Pre\GraphQL\graphql-react-event-booking\frontend\node_modules\.bin\regjsparser as it wasn't installed by C:\Work\Training\Pre\GraphQL\graphql-react-event-booking\frontend\node_modules\regjsparser
npm WARN rm not removing C:\Work\Training\Pre\GraphQL\graphql-react-event-booking\frontend\node_modules\.bin\json5.cmd as it wasn't installed by C:\Work\Training\Pre\GraphQL\graphql-react-event-booking\frontend\node_modules\json5
npm WARN rm not removing C:\Work\Training\Pre\GraphQL\graphql-react-event-booking\frontend\node_modules\.bin\json5 as it wasn't installed by C:\Work\Training\Pre\GraphQL\graphql-react-event-booking\frontend\node_modules\json5
npm WARN rm not removing C:\Work\Training\Pre\GraphQL\graphql-react-event-booking\frontend\node_modules\.bin\jsesc.cmd as it wasn't installed by C:\Work\Training\Pre\GraphQL\graphql-react-event-booking\frontend\node_modules\jsesc
npm WARN rm not removing C:\Work\Training\Pre\GraphQL\graphql-react-event-booking\frontend\node_modules\.bin\jsesc as it wasn't installed by C:\Work\Training\Pre\GraphQL\graphql-react-event-booking\frontend\node_modules\jsesc
npm WARN rm not removing C:\Work\Training\Pre\GraphQL\graphql-react-event-booking\frontend\node_modules\.bin\esparse.cmd as it wasn't installed by C:\Work\Training\Pre\GraphQL\graphql-react-event-booking\frontend\node_modules\esprima
npm WARN rm not removing C:\Work\Training\Pre\GraphQL\graphql-react-event-booking\frontend\node_modules\.bin\esvalidate.cmd as it wasn't installed by C:\Work\Training\Pre\GraphQL\graphql-react-event-booking\frontend\node_modules\esprima
npm WARN rm not removing C:\Work\Training\Pre\GraphQL\graphql-react-event-booking\frontend\node_modules\.bin\esparse as it wasn't installed by C:\Work\Training\Pre\GraphQL\graphql-react-event-booking\frontend\node_modules\esprima
npm WARN rm not removing C:\Work\Training\Pre\GraphQL\graphql-react-event-booking\frontend\node_modules\.bin\esvalidate as it wasn't installed by C:\Work\Training\Pre\GraphQL\graphql-react-event-booking\frontend\node_modules\esprima
npm WARN rm not removing C:\Work\Training\Pre\GraphQL\graphql-react-event-booking\frontend\node_modules\.bin\cssesc.cmd as it wasn't installed by C:\Work\Training\Pre\GraphQL\graphql-react-event-booking\frontend\node_modules\cssesc
npm WARN rm not removing C:\Work\Training\Pre\GraphQL\graphql-react-event-booking\frontend\node_modules\.bin\cssesc as it wasn't installed by C:\Work\Training\Pre\GraphQL\graphql-react-event-booking\frontend\node_modules\cssesc
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

added 701 packages from 176 contributors, removed 257 packages, updated 1232 packages and audited 35789 packages in 252.211s
found 0 vulnerabilities
```

### Create the route and one component to test it

> App.js
```js
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={null} />
        <Route path="/auth" component={null} />
        <Route path="/events" component={null} />
        <Route path="/bookings" component={null} />
      </BrowserRouter>
    );
  }
}

export default App;
```

- Create the `pages` folder from the `src` folder and the `Auth.js` file inside of it.

> pages > Auth.js
```js
import React, { Component } from "react";

class AuthPage extends Component {
  render() {
    return <h1>The Auth Page</h1>;
  }
}

export default AuthPage;
```

> App.js
```js
import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "./App.css";

import AuthPage from "./pages/Auth";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Redirect from="/" to="/auth" exact />
          <Route path="/auth" component={AuthPage} />
          <Route path="/events" component={null} />
          <Route path="/bookings" component={null} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
```

```bash
> frontend@0.1.0 start C:\Work\Training\Pre\GraphQL\graphql-react-event-booking\frontend
> react-scripts start
Starting the development server...
Compiled successfully!

You can now view frontend in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://10.0.75.1:3000/

Note that the development build is not optimized.
To create a production build, use yarn build.
```

![](/images/other/graphql-graphql-react-event-booking/create-react-app3.png)

### Add the `Bookings.js` and `Events.js` files to ensure the router is working

> pages -> Bookings.js
```js
import React, { Component } from "react";

class BookingsPage extends Component {
  render() {
    return <h1>The Bookings Page</h1>;
  }
}

export default BookingsPage;
```

> pages -> Events.js
```js
import React, { Component } from "react";

class EventsPage extends Component {
  render() {
    return <h1>The Events Page</h1>;
  }
}

export default EventsPage;
```

> App.js
```js
import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "./App.css";

import AuthPage from "./pages/Auth";
import BookingsPage from "./pages/Bookings";
import EventsPage from "./pages/Events";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Redirect from="/" to="/auth" exact />
          <Route path="/auth" component={AuthPage} />
          <Route path="/events" component={EventsPage} />
          <Route path="/bookings" component={BookingsPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
```
![](/images/other/graphql-graphql-react-event-booking/create-react-app4.png)

![](/images/other/graphql-graphql-react-event-booking/create-react-app5.png)

## 12 Adding a Navbar 21:48

### Create the `components` folder from the `src` folder and the `Navigation` folder inside it

> components -> Navigation -> MainNavigation.js
```js
import React from "react";
import { NavLink } from "react-router-dom";

const mainNavigation = props => (
  <header>
    <div className="main_navigation__logo">
      <h1>EasyEvent</h1>
    </div>
    <nav className="main_navigation__logo">
      <ul>
        <li>
          <NavLink to="/auth">Authenticate</NavLink>
        </li>
        <li>
          <NavLink to="/events">Events</NavLink>
        </li>
        <li>
          <NavLink to="/bookings">Bookings</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default mainNavigation;
```

> App.js
```js
import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "./App.css";

import AuthPage from "./pages/Auth";
import BookingsPage from "./pages/Bookings";
import EventsPage from "./pages/Events";
import MainNavigation from "./components/Navigation/MainNavigation";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <MainNavigation />
          <main>
            <Switch>
              <Redirect from="/" to="/auth" exact />
              <Route path="/auth" component={AuthPage} />
              <Route path="/events" component={EventsPage} />
              <Route path="/bookings" component={BookingsPage} />
            </Switch>
          </main>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
```

![](/images/other/graphql-graphql-react-event-booking/Navbar.png)

![](/images/other/graphql-graphql-react-event-booking/Navbar2.png)

![](/images/other/graphql-graphql-react-event-booking/Navbar3.png)

### Add some style to the Navigation Bar

> components -> Navigation -> MainNavigation.css
```css
.main_navigation {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 3.5rem;
  background: #01d1d1;
  padding: 0 1rem;
  display: flex;
  align-items: center;
}

.main_navigation__logo h1 {
  margin: 0;
  font-size: 1.5rem;
}

.main_navigation__items {
  margin-left: 1.5rem;
}

.main_navigation__items ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.main_navigation__items li {
  margin: 0 1rem;
}

.main_navigation__items a {
  text-decoration: none;
  color: #000;
}

.main_navigation__items a:hover,
.main_navigation__items a:active,
.main_navigation__items a.active {
  color: #f8e264;
}
```

> components -> Navigation -> MainNavigation.js
```js
import React from "react";
import { NavLink } from "react-router-dom";

import './MainNavigation.css'

const mainNavigation = props => (
  <header className="main_navigation">
    <div className="main_navigation__logo">
      <h1>EasyEvent</h1>
    </div>
    <nav className="main_navigation__items">
      <ul>
        <li>
          <NavLink to="/auth">Authenticate</NavLink>
        </li>
        <li>
          <NavLink to="/events">Events</NavLink>
        </li>
        <li>
          <NavLink to="/bookings">Bookings</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default mainNavigation;


export default mainNavigation;
```

> App.js
```js
import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "./App.css";

import AuthPage from "./pages/Auth";
import BookingsPage from "./pages/Bookings";
import EventsPage from "./pages/Events";
import MainNavigation from "./components/Navigation/MainNavigation";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <MainNavigation />
          <main className="main-content">
            <Switch>
              <Redirect from="/" to="/auth" exact />
              <Route path="/auth" component={AuthPage} />
              <Route path="/events" component={EventsPage} />
              <Route path="/bookings" component={BookingsPage} />
            </Switch>
          </main>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
```

> App.css
```css
.main-content {
  margin: 4rem 2.5rem;
}
```
![](/images/other/graphql-graphql-react-event-booking/Navbar4.png)

![](/images/other/graphql-graphql-react-event-booking/Navbar5.png)

![](/images/other/graphql-graphql-react-event-booking/Navbar6.png)

## 13 Hitting the API 32:11

### Develop the AuthPage to be able to authenticate

> pages - Auth.js
```js
import React, { Component } from "react";

import "./Auth.css";

class AuthPage extends Component {
  render() {
    return (
      <form className="auth-form">
        <div className="form-control">
          <label htmlFor="email">E-Mail</label>
          <input type="email" id="email" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="form-actions">
          <button type="submit">Submit</button>
          <button type="button">Sign to Signup</button>
        </div>
      </form>
    );
  }
}
export default AuthPage;

```

> pages - Auth.css
```css
.auth-form {
  width: 25rem;
  max-width: 80%;
  margin: 5rem auto;
}

.form-control label,
.form-control input {
  width: 100%;
  display: block;
}

.form-control label {
  margin-bottom: 0.5rem;
}

.form-control {
  margin-bottom: 1rem;
}

.form-actions button {
  background-color: #01d1d1;
  font: inherit;
  border: 1px solid  #01d1d1;
  border-radius: 3px;
  padding: 0.25rem 1rem;
  margin-right: 1rem;
  box-shadow: 1px 1px 5px rgba(0,0,0,0.26);
  color: white;
  cursor: pointer;
}

.form-actions button:hover,
.form-actions button:active {
  background: #01a7a7;
  border-color: #01a7a7;
}
```


> components -> Navigation -> MainNavigation.css
```css
.main_navigation {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 3.5rem;
  background: #01d1d1;
  padding: 0 1rem;
  display: flex;
  align-items: center;
}

.main_navigation__logo h1 {
  margin: 0;
  font-size: 1.5rem;
}

.main_navigation__items {
  margin-left: 1.5rem;
}

.main_navigation__items ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.main_navigation__items li {
  margin: 0 1rem;
}

.main_navigation__items a {
  text-decoration: none;
  color: #000;
}

.main_navigation__items a:hover,
.main_navigation__items a:active,
.main_navigation__items a.active {
  color: #fdefa0;
}
```

### Change the port to the server to `9000` and to avoid CORS errors

> app.js
```js
const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql");
const mongoose = require("mongoose");
const isAuth = require("./middleware/is-auth");
const graphQlSchema = require("./graphql/schema/index");
const graphQlResolvers = require("./graphql/resolvers/index");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(isAuth);

app.use(
  "/graphql",
  graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
  })
);

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${
      process.env.MONGO_PASSWORD
    }@cluster0-ycwj8.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`
  )
  .then(() => {
    app.listen(9000);
  })
  .catch(err => {
    console.log(err);
  });
```

- Start the server in another terminal window

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/graphql-react-event-booking
$ npm start

> graphql-react-event-booking@1.0.0 start C:\Work\Training\Pre\GraphQL\graphql-react-event-booking
> nodemon app.js

[nodemon] 1.18.9
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node app.js`
(node:16596) DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.
```

### Develop a call to the `createUser` endpoint ti sing up.

> pages - Auth.js
```js
import React, { Component } from "react";

import "./Auth.css";

class AuthPage extends Component {
  constructor(props) {
    super(props);
    this.emailEl = React.createRef();
    this.passwordEl = React.createRef();
  }

  submitHandler = event => {
    event.preventDefault();
    const email = this.emailEl.current.value;
    const password = this.passwordEl.current.value;
    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }

    const requestBody = {
      query: `
        mutation {
          createUser(userInput: {email: "${email}", password: "${password}"})
          {
            _id
            email
          }
        }
      `
    };

    fetch("http://localhost:9000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <form className="auth-form" onSubmit={this.submitHandler}>
        <div className="form-control">
          <label htmlFor="email">E-Mail</label>
          <input type="email" id="email" ref={this.emailEl} />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={this.passwordEl} />
        </div>
        <div className="form-actions">
          <button type="submit">Submit</button>
          <button type="button">Sign to Login</button>
        </div>
      </form>
    );
  }
}
export default AuthPage;
```

![](/images/other/graphql-graphql-react-event-booking/AuthPage.png)

![](/images/other/graphql-graphql-react-event-booking/AuthPage2.png)

### Modify the Auth.js program to allow to login

> pages - Auth.js
```js
import React, { Component } from "react";

import "./Auth.css";

class AuthPage extends Component {
  state = {
    isLogin: true
  };

  constructor(props) {
    super(props);
    this.emailEl = React.createRef();
    this.passwordEl = React.createRef();
  }

  switchModeHandler = () => {
    this.setState(prevSate => {
      return { isLogin: !prevSate.isLogin };
    });
  };
  submitHandler = event => {
    event.preventDefault();
    const email = this.emailEl.current.value;
    const password = this.passwordEl.current.value;
    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }

    let requestBody = {
      query: `
        query {
          login(email: "${email}", password: "${password}")
          {
            userId
            token
            tokenExpiration
          }
        }
      `      
    };
    if (!this.state.isLogin) {
      requestBody = {
        query: `
          mutation {
            createUser(userInput: {email: "${email}", password: "${password}"})
            {
              _id
              email
            }
          }
        `
      };
    }

    fetch("http://localhost:9000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <form className="auth-form" onSubmit={this.submitHandler}>
        <div className="form-control">
          <label htmlFor="email">E-Mail</label>
          <input type="email" id="email" ref={this.emailEl} />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={this.passwordEl} />
        </div>
        <div className="form-actions">
          <button type="submit">Submit</button>
          <button type="button" onClick={this.switchModeHandler}>
            Sign to {this.state.isLogin ? "Signup" : "Login"}
          </button>
        </div>
      </form>
    );
  }
}
export default AuthPage;
```

![](/images/other/graphql-graphql-react-event-booking/AuthPage3.png)

![](/images/other/graphql-graphql-react-event-booking/AuthPage4.png)

![](/images/other/graphql-graphql-react-event-booking/AuthPage5.png)

![](/images/other/graphql-graphql-react-event-booking/AuthPage6.png)

## 14. Using the token 16:07

### Using data from Auth.js in App.js using the context API

- Create the new `context` folder and the new `auth-context.js` file

> context -> auth-context.js
```js
import React from 'react';

export default React.createContext({
    token: null,
    userId: null,
    login: (token, userId, tokenExpiration) => {},
    logout: () => {}
})
```

- Modify the `App.js` program to import and use the `context`

> App.js
```js
import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "./App.css";

import AuthPage from "./pages/Auth";
import BookingsPage from "./pages/Bookings";
import EventsPage from "./pages/Events";
import MainNavigation from "./components/Navigation/MainNavigation";
import AuthContext from "./context/auth-context";

class App extends Component {

  state = {
    token: null,
    userId: null
  }
  
  login = (token, userId, tokenExpiration) => {
    this.setState({token: token, userId: userId});
  };

  logout = () => {
    this.setState({token: null, userId: null});
  };

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <AuthContext.Provider
            value={{
              token: this.state.token,
              userId: this.state.userId,
              login: this.login,
              logout: this.logout
            }}
          >
            <MainNavigation />
            <main className="main-content">
              <Switch>
                <Redirect from="/" to="/auth" exact />
                <Route path="/auth" component={AuthPage} />
                <Route path="/events" component={EventsPage} />
                <Route path="/bookings" component={BookingsPage} />
              </Switch>
            </main>
          </AuthContext.Provider>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
```

- Modify the `Auth.js` program to import and use the `context`

> pages - Auth.js
```js
import React, { Component } from "react";

import "./Auth.css";
import AuthContext from "../context/auth-context";

class AuthPage extends Component {
  state = {
    isLogin: true
  };

  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.emailEl = React.createRef();
    this.passwordEl = React.createRef();
  }

  switchModeHandler = () => {
    this.setState(prevSate => {
      return { isLogin: !prevSate.isLogin };
    });
  };
  submitHandler = event => {
    event.preventDefault();
    const email = this.emailEl.current.value;
    const password = this.passwordEl.current.value;
    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }

    let requestBody = {
      query: `
        query {
          login(email: "${email}", password: "${password}")
          {
            userId
            token
            tokenExpiration
          }
        }
      `
    };
    if (!this.state.isLogin) {
      requestBody = {
        query: `
          mutation {
            createUser(userInput: {email: "${email}", password: "${password}"})
            {
              _id
              email
            }
          }
        `
      };
    }

    fetch("http://localhost:9000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        if (resData.data.login.token) {
          this.context.login(
            resData.data.login.token,
            resData.data.login.userId,
            resData.data.login.tokenExpiration
          );
        }
        console.log(resData);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <form className="auth-form" onSubmit={this.submitHandler}>
        <div className="form-control">
          <label htmlFor="email">E-Mail</label>
          <input type="email" id="email" ref={this.emailEl} />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={this.passwordEl} />
        </div>
        <div className="form-actions">
          <button type="submit">Submit</button>
          <button type="button" onClick={this.switchModeHandler}>
            Sign to {this.state.isLogin ? "Signup" : "Login"}
          </button>
        </div>
      </form>
    );
  }
}
export default AuthPage;
```

- Modify the `MainNavigation.js` program to import and use the `context`

> components -> Navigation -> MainNavigation.js
```js
import React from "react";
import { NavLink } from "react-router-dom";

import AuthContext from "../../context/auth-context";
import "./MainNavigation.css";

const mainNavigation = props => (
  <AuthContext.Consumer>
    {context => {
      return (
        <header className="main_navigation">
          <div className="main_navigation__logo">
            <h1>EasyEvent</h1>
          </div>
          <nav className="main_navigation__items">
            <ul>
              {!context.token && (
                <li>
                  <NavLink to="/auth">Authenticate</NavLink>
                </li>
              )}
              <li>
                <NavLink to="/events">Events</NavLink>
              </li>
              {context.token && (
                <li>
                  <NavLink to="/bookings">Bookings</NavLink>
                </li>
              )}
            </ul>
          </nav>
        </header>
      );
    }}
  </AuthContext.Consumer>
);

export default mainNavigation;
```

- Before being authenticated

![](/images/other/graphql-graphql-react-event-booking/Token.png)

- After authenticating

![](/images/other/graphql-graphql-react-event-booking/Token2.png)

### Redirect when authenticated and protect routes when not authenticated

> pages - Auth.js
```js
import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "./App.css";

import AuthPage from "./pages/Auth";
import BookingsPage from "./pages/Bookings";
import EventsPage from "./pages/Events";
import MainNavigation from "./components/Navigation/MainNavigation";
import AuthContext from "./context/auth-context";

class App extends Component {

  state = {
    token: null,
    userId: null
  }
  
  login = (token, userId, tokenExpiration) => {
    this.setState({token: token, userId: userId});
  };

  logout = () => {
    this.setState({token: null, userId: null});
  };

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <AuthContext.Provider
            value={{
              token: this.state.token,
              userId: this.state.userId,
              login: this.login,
              logout: this.logout
            }}
          >
            <MainNavigation />
            <main className="main-content">
              <Switch>
                {!this.state.token && <Redirect from="/" to="/auth" exact />}
                {this.state.token && <Redirect from="/" to="/events" exact />}
                {this.state.token && <Redirect from="/auth" to="/events" exact />}
                {!this.state.token && <Route path="/auth" component={AuthPage} />}
                <Route path="/events" component={EventsPage} />
                {this.state.token && <Route path="/bookings" component={BookingsPage} />}
              </Switch>
            </main>
          </AuthContext.Provider>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
```

- Before being authenticated

![](/images/other/graphql-graphql-react-event-booking/Token3.png)

- After being authenticated

![](/images/other/graphql-graphql-react-event-booking/Token4.png)

## 15. Adding a Modal 24:11

### Changing the style

> pages -> Auth.css
```css
.auth-form {
  width: 25rem;
  max-width: 80%;
  margin: 5rem auto;
}

.form-control label,
.form-control input {
  width: 100%;
  display: block;
}

.form-control label {
  margin-bottom: 0.5rem;
}

.form-control {
  margin-bottom: 1rem;
}

.form-actions button {
  background-color: #5101d1;
  font: inherit;
  border: 1px solid  #5101d1;
  border-radius: 3px;
  padding: 0.25rem 1rem;
  margin-right: 1rem;
  box-shadow: 1px 1px 5px rgba(0,0,0,0.26);
  color: white;
  cursor: pointer;
}

.form-actions button:hover,
.form-actions button:active {
  background: #6219d6;
  border-color: #6219d6;
}
```

> components -> Navigation -> MainNavigation.css
```css
.main_navigation {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 3.5rem;
  background: #5101d1;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;  
}

.main_navigation__logo h1 {
  margin: 0;
  font-size: 1.5rem;
  color: #dfcefc;
}

.main_navigation__items {
  margin-left: 1.5rem;
  
}

.main_navigation__items ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.main_navigation__items li {
  margin: 0 1rem;
}

.main_navigation__items a {
  text-decoration: none;
  color: white;
  padding: 0.25rem 0.5rem;
}

.main_navigation__items a:hover,
.main_navigation__items a:active,
.main_navigation__items a.active {
  background: #ffffff;
  color: #5101d1;
  border-radius: 5px;
}
```

![](/images/other/graphql-graphql-react-event-booking/Modal.png)

![](/images/other/graphql-graphql-react-event-booking/Modal2.png)

### Include the logout button

> App.js
```js
import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "./App.css";

import AuthPage from "./pages/Auth";
import BookingsPage from "./pages/Bookings";
import EventsPage from "./pages/Events";
import MainNavigation from "./components/Navigation/MainNavigation";
import AuthContext from "./context/auth-context";

class App extends Component {

  state = {
    token: null,
    userId: null
  }
  
  login = (token, userId, tokenExpiration) => {
    this.setState({token: token, userId: userId});
  };

  logout = () => {
    this.setState({token: null, userId: null});
  };

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <AuthContext.Provider
            value={{
              token: this.state.token,
              userId: this.state.userId,
              login: this.login,
              logout: this.logout
            }}
          >
            <MainNavigation />
            <main className="main-content">
              <Switch>
                {this.state.token && <Redirect from="/" to="/events" exact />}
                {this.state.token && <Redirect from="/auth" to="/events" exact />}
                {!this.state.token && <Route path="/auth" component={AuthPage} />}
                <Route path="/events" component={EventsPage} />
                {this.state.token && <Route path="/bookings" component={BookingsPage} />}
                {!this.state.token && <Redirect to="/auth" exact />}
              </Switch>
            </main>
          </AuthContext.Provider>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;

```

> components -> Navigation -> MainNavigation.css
```css
.main_navigation {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 3.5rem;
  background: #5101d1;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;  
}

.main_navigation__logo h1 {
  margin: 0;
  font-size: 1.5rem;
  color: #dfcefc;
}

.main_navigation__items {
  margin-left: 1.5rem;
  
}

.main_navigation__items ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
}

.main_navigation__items li {
  margin: 0 1rem;
}

.main_navigation__items a,
.main_navigation__items button {
  text-decoration: none;
  color: white;
  padding: 0.25rem 0.5rem;
  border: none;
  font: inherit;
  background: transparent;
  cursor: pointer;
  margin: 0; 
}

.main_navigation__items a:hover,
.main_navigation__items a:active,
.main_navigation__items a.active,
.main_navigation__items button:hover,
.main_navigation__items button:active {
  background: #ffffff;
  color: #5101d1;
  border-radius: 5px;
}
```

> components -> Navigation -> MainNavigation.js
```js
import React from "react";
import { NavLink } from "react-router-dom";

import AuthContext from "../../context/auth-context";
import "./MainNavigation.css";

const mainNavigation = props => (
  <AuthContext.Consumer>
    {context => {
      return (
        <header className="main_navigation">
          <div className="main_navigation__logo">
            <h1>EasyEvent</h1>
          </div>
          <nav className="main_navigation__items">
            <ul>
              {!context.token && (
                <li>
                  <NavLink to="/auth">Authenticate</NavLink>
                </li>
              )}
              <li>
                <NavLink to="/events">Events</NavLink>
              </li>
              {context.token && (
                <React.Fragment>
                  <li>
                    <NavLink to="/bookings">Bookings</NavLink>
                  </li>
                  <li>
                    <button onClick={context.logout}>Logout</button>
                  </li>
                </React.Fragment>
              )}
            </ul>
          </nav>
        </header>
      );
    }}
  </AuthContext.Consumer>
);

export default mainNavigation;

```
> 

![](/images/other/graphql-graphql-react-event-booking/Modal3.png)

![](/images/other/graphql-graphql-react-event-booking/Modal4.png)

![](/images/other/graphql-graphql-react-event-booking/Modal5.png)



### Modify the `Events.js` programs to add a `Create Event` button

> pages -> Events.js
```js
import React, { Component } from "react";

class EventsPage extends Component {
  render() {
    return <div>
      <button className="btn">Create Event</button>
    </div>;
  }
}

export default EventsPage;
```

> pages -> Auth.css
```css
.auth-form {
  width: 25rem;
  max-width: 80%;
  margin: 5rem auto;
}
```

> index.css
```css
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

.form-control label,
.form-control input {
  width: 100%;
  display: block;
}

.form-control label {
  margin-bottom: 0.5rem;
}

.form-control {
  margin-bottom: 1rem;
}

.form-actions button,
.btn {
  background-color: #5101d1;
  font: inherit;
  border: 1px solid  #5101d1;
  border-radius: 3px;
  padding: 0.25rem 1rem;
  margin-right: 1rem;
  box-shadow: 1px 1px 5px rgba(0,0,0,0.26);
  color: white;
  cursor: pointer;
}

.form-actions button:hover,
.form-actions button:active,
.btn:hover,
.btn:active {
  background: #6219d6;
  border-color: #6219d6;
}
```

![](/images/other/graphql-graphql-react-event-booking/Modal6.png)

### Modify the `Events.js` document to allow to add a new Event

> pages -> Events.js
```js
import React from "react";

import "./Modal.css";

const modal = props => (
  <div className="modal">
    <header className="modal__header">
      <h1>{props.title}</h1>
    </header>
    <section className="modal__content">{props.children}</section>
    <section className="modal__actions">
      {props.canCancel && <button className="btn">Cancel</button>}
      {props.canConfirm && <button className="btn">Confirm</button>}
    </section>
  </div>
);

export default modal;
```

> pages -> Events.css
```css
.events-control {
    text-align: center;
    border: 1px solid #5101d1;
    padding: 1rem;
    margin: 2rem auto;
    width: 30rem;
    max-width: 80%;
}
```
- Create the new `components -> Modal` folder and the `Modal.js` and `Modal.css` documents inside it.

> components -> Modal -> Modal.js
```js
import React from "react";

import "./Modal.css";

const modal = props => (
  <div className="modal">
    <header className="modal__header">
      <h1>{props.title}</h1>
    </header>
    <section className="modal__content">{props.children}</section>
    <section className="modal__actions">
      {props.canCancel && <button className="btn">Cancel</button>}
      {props.canConfirm && <button className="btn">Confirm</button>}
    </section>
  </div>
);

export default modal;
```

> components -> Modal -> Modal.css
```css
.modal {
  width: 90%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  position: fixed;
  top: 20vh;
  left: 5%;
}

.modal__header {
  padding: 1rem;
  background: #5101d1;
  color: white;
}

.modal__header h1 {
  margin: 0;
  font-size: 1.25rem;
}

.modal__content {
  padding: 1rem;
}

.modal__actions {
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
}

@media (min-width: 768px) {
  .modal {
    width: 30rem;
    left: calc((100% - 30rem) / 2);
  }
}
```

![](/images/other/graphql-graphql-react-event-booking/Modal7.png)

### Create the Backdrop component

- Create the `components -> Backdrop` folder and the `Backdrop.js` and `Backdrop.css` documents inside it.

> components -> Backdrop -> Backdrop.js
```js
import React from "react";

import "./Backdrop.css";

const backdrop = props => <div className="backdrop" />;

export default backdrop;
```

> components -> Backdrop -> Backdrop.css
```css
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.75);
}
```

> pages -> Events.js
```js
import React, { Component } from "react";

import Modal from "../components/Modal/Modal";
import Backdrop from "../components/Backdrop/Backdrop";
import "./Events.css";

class EventsPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Backdrop />
        <Modal title="Add Event" canCancel canConfirm>
          <p>Modal Conntent</p>
        </Modal>
        <div className="events-control">
          <p>Share your own Events!</p>
          <button className="btn">Create Event</button>
        </div>
      </React.Fragment>
    );
  }
}

export default EventsPage;
```

![](/images/other/graphql-graphql-react-event-booking/Modal8.png)

### Modify the `Event.js` to use the Modal component when clicking the button.

> pages -> Events.js
```js
import React, { Component } from "react";

import Modal from "../components/Modal/Modal";
import Backdrop from "../components/Backdrop/Backdrop";
import "./Events.css";

class EventsPage extends Component {
  state = {
    creating: false
  };

  startCreateEventHandler = () => {
    this.setState({ creating: true });
  };

  modalConfirmHandler = () => {
    this.setState({ creating: false });
  };

  modalCancelHandler = () => {
    this.setState({ creating: false });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.creating && (
          <React.Fragment>
            <Backdrop />
            <Modal
              title="Add Event"
              canCancel
              canConfirm
              onCancel={this.modalCancelHandler}
              onConfirm={this.modalConfirmHandler}
            >
              <p>Modal Content</p>
            </Modal>
          </React.Fragment>
        )}
        <div className="events-control">
          <p>Share your own Events!</p>
          <button className="btn" onClick={this.startCreateEventHandler}>
            Create Event
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default EventsPage;
```

> components -> Modal -> Modal.js
```js
import React from "react";

import "./Modal.css";

const modal = props => (
  <div className="modal">
    <header className="modal__header">
      <h1>{props.title}</h1>
    </header>
    <section className="modal__content">{props.children}</section>
    <section className="modal__actions">
      {props.canCancel && (
        <button className="btn" onClick={props.onCancel}>
          Cancel
        </button>
      )}
      {props.canConfirm && (
        <button className="btn" onClick={props.onConfirm}>
          Confirm
        </button>
      )}
    </section>
  </div>
);

export default modal;
```

![](/images/other/graphql-graphql-react-event-booking/Modal9.png)

![](/images/other/graphql-graphql-react-event-booking/Modal10.png)

![](/images/other/graphql-graphql-react-event-booking/Modal11.png)

![](/images/other/graphql-graphql-react-event-booking/Modal12.png)

![](/images/other/graphql-graphql-react-event-booking/Modal13.png)

## 16. Adding Events 27:13

### Modify the Events page to allow to create new Events

- Modify the `index.css` document to include style for the `textarea`

index.css
```css
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

.form-control label,
.form-control input,
.form-control textarea {
  width: 100%;
  display: block;
}

.form-control label {
  margin-bottom: 0.5rem;
}

.form-control {
  margin-bottom: 1rem;
}

.form-actions button,
.btn {
  background-color: #5101d1;
  font: inherit;
  border: 1px solid #5101d1;
  border-radius: 3px;
  padding: 0.25rem 1rem;
  margin-right: 1rem;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.26);
  color: white;
  cursor: pointer;
}

.form-actions button:hover,
.form-actions button:active,
.btn:hover,
.btn:active {
  background: #6219d6;
  border-color: #6219d6;
}
```
- Modify the `Events.js` document to add a form to create an event using references to simplify the code.

> pages -> Event.js
```js
import React, { Component } from "react";

import Modal from "../components/Modal/Modal";
import Backdrop from "../components/Backdrop/Backdrop";
import "./Events.css";

class EventsPage extends Component {
  state = {
    creating: false
  };

  constructor(props) {
    super(props);
    this.titleElRef = React.createRef();
    this.priceElRef = React.createRef();
    this.dateElRef = React.createRef();
    this.descriptionElRef = React.createRef();
  }

  startCreateEventHandler = () => {
    this.setState({ creating: true });
  };

  modalConfirmHandler = () => {
    this.setState({ creating: false });
    const title = this.titleElRef.current.value;
    const price = +this.priceElRef.current.value;
    const date = this.dateElRef.current.value;
    const description = this.descriptionElRef.current.value;

    if (
      title.trim().length === 0 ||
      price <= 0 ||
      date.trim().length === 0 ||
      description.trim().length === 0
    ) {
      return;
    }

    const event = { title, price, date, description };
    console.log(event);
  };

  modalCancelHandler = () => {
    this.setState({ creating: false });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.creating && (
          <React.Fragment>
            <Backdrop />
            <Modal
              title="Add Event"
              canCancel
              canConfirm
              onCancel={this.modalCancelHandler}
              onConfirm={this.modalConfirmHandler}
            >
              <form>
                <div className="form-control">
                  <label htmlFor="title">Title</label>
                  <input type="text" id="title" ref={this.titleElRef} />
                </div>
                <div className="form-control">
                  <label htmlFor="price">Price</label>
                  <input type="number" id="price" ref={this.priceElRef} />
                </div>
                <div className="form-control">
                  <label htmlFor="date">Date</label>
                  <input type="datetime-local" id="date" ref={this.dateElRef} />
                </div>
                <div className="form-control">
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    rows="4"
                    ref={this.descriptionElRef}
                  />
                </div>
              </form>
            </Modal>
          </React.Fragment>
        )}
        <div className="events-control">
          <p>Share your own Events!</p>
          <button className="btn" onClick={this.startCreateEventHandler}>
            Create Event
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default EventsPage;
```

![](/images/other/graphql-graphql-react-event-booking/AddingEvents.png)

### Send the request with the Event to the Backend

> pages -> Event.js
```js
import React, { Component } from "react";

import Modal from "../components/Modal/Modal";
import Backdrop from "../components/Backdrop/Backdrop";
import AuthContext from "../context/auth-context";

import "./Events.css";

class EventsPage extends Component {
  state = {
    creating: false
  };

  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.titleElRef = React.createRef();
    this.priceElRef = React.createRef();
    this.dateElRef = React.createRef();
    this.descriptionElRef = React.createRef();
  }

  startCreateEventHandler = () => {
    this.setState({ creating: true });
  };

  modalConfirmHandler = () => {
    this.setState({ creating: false });
    const title = this.titleElRef.current.value;
    const price = +this.priceElRef.current.value;
    const date = this.dateElRef.current.value;
    const description = this.descriptionElRef.current.value;

    if (
      title.trim().length === 0 ||
      price <= 0 ||
      date.trim().length === 0 ||
      description.trim().length === 0
    ) {
      return;
    }

    const event = { title, price, date, description };
    console.log(event);

    const requestBody = {
      query: `
          mutation {
            createEvent(eventInput: {title: "${title}", description: "${description}", price: ${price}, date: "${date}"}) {
              _id
              title
              description
              date
              price
              creator {
                _id
                email
              }
            }
          }
        `
    };

    const token = this.context.token;

    fetch("http://localhost:9000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
        // this.fetchEvents();
      })
      .catch(err => {
        console.log(err);
      });
  };

  modalCancelHandler = () => {
    this.setState({ creating: false });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.creating && (
          <React.Fragment>
            <Backdrop />
            <Modal
              title="Add Event"
              canCancel
              canConfirm
              onCancel={this.modalCancelHandler}
              onConfirm={this.modalConfirmHandler}
            >
              <form>
                <div className="form-control">
                  <label htmlFor="title">Title</label>
                  <input type="text" id="title" ref={this.titleElRef} />
                </div>
                <div className="form-control">
                  <label htmlFor="price">Price</label>
                  <input type="number" id="price" ref={this.priceElRef} />
                </div>
                <div className="form-control">
                  <label htmlFor="date">Date</label>
                  <input type="datetime-local" id="date" ref={this.dateElRef} />
                </div>
                <div className="form-control">
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    rows="4"
                    ref={this.descriptionElRef}
                  />
                </div>
              </form>
            </Modal>
          </React.Fragment>
        )}
        <div className="events-control">
          <p>Share your own Events!</p>
          <button className="btn" onClick={this.startCreateEventHandler}>
            Create Event
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default EventsPage;
```

![](/images/other/graphql-graphql-react-event-booking/AddingEvents2.png)

### Fetch the events and show them

- Modify the `Event.css` document to include the style for the list and events. 

> pages > Event.css
```css
.events-control {
    text-align: center;
    border: 1px solid #5101d1;
    padding: 1rem;
    margin: 2rem auto;
    width: 30rem;
    max-width: 80%;
  }
  
  .events__list {
    width: 40rem;
    max-width: 90%;
    margin: 2rem auto;
    list-style: none;
    padding: 0;
  }
  
  .events__list-item {
    margin: 1rem 0;
    padding: 1rem;
    border: 1px solid #5101d1;
  }
  
```

> pages -> Event.js
```js
import React, { Component } from "react";

import Modal from "../components/Modal/Modal";
import Backdrop from "../components/Backdrop/Backdrop";
import AuthContext from "../context/auth-context";

import "./Events.css";

class EventsPage extends Component {
  state = {
    creating: false,
    events: []
  };

  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.titleElRef = React.createRef();
    this.priceElRef = React.createRef();
    this.dateElRef = React.createRef();
    this.descriptionElRef = React.createRef();
  }

  componentDidMount() {
    this.fetchEvents();
  }

  startCreateEventHandler = () => {
    this.setState({ creating: true });
  };

  modalConfirmHandler = () => {
    this.setState({ creating: false });
    const title = this.titleElRef.current.value;
    const price = +this.priceElRef.current.value;
    const date = this.dateElRef.current.value;
    const description = this.descriptionElRef.current.value;

    if (
      title.trim().length === 0 ||
      price <= 0 ||
      date.trim().length === 0 ||
      description.trim().length === 0
    ) {
      return;
    }

    const event = { title, price, date, description };
    console.log(event);

    const requestBody = {
      query: `
          mutation {
            createEvent(eventInput: {title: "${title}", description: "${description}", price: ${price}, date: "${date}"}) {
              _id
              title
              description
              date
              price
              creator {
                _id
                email
              }
            }
          }
        `
    };

    const token = this.context.token;

    fetch("http://localhost:9000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        this.fetchEvents();
      })
      .catch(err => {
        console.log(err);
      });
  };

  modalCancelHandler = () => {
    this.setState({ creating: false });
  };

  fetchEvents() {
    const requestBody = {
      query: `
          query {
            events {
              _id
              title
              description
              date
              price
              creator {
                _id
                email
              }
            }
          }
        `
    };

    fetch("http://localhost:9000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        const events = resData.data.events;
        this.setState({ events: events });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const eventList = this.state.events.map(event => {
      return (
        <li key={event._id} className="events__list-item">
          {event.title}
        </li>
      );
    });

    return (
      <React.Fragment>
        {this.state.creating && (
          <React.Fragment>
            <Backdrop />
            <Modal
              title="Add Event"
              canCancel
              canConfirm
              onCancel={this.modalCancelHandler}
              onConfirm={this.modalConfirmHandler}
            >
              <form>
                <div className="form-control">
                  <label htmlFor="title">Title</label>
                  <input type="text" id="title" ref={this.titleElRef} />
                </div>
                <div className="form-control">
                  <label htmlFor="price">Price</label>
                  <input type="number" id="price" ref={this.priceElRef} />
                </div>
                <div className="form-control">
                  <label htmlFor="date">Date</label>
                  <input type="datetime-local" id="date" ref={this.dateElRef} />
                </div>
                <div className="form-control">
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    rows="4"
                    ref={this.descriptionElRef}
                  />
                </div>
              </form>
            </Modal>
          </React.Fragment>
        )}
        {this.context.token && (
          <div className="events-control">
            <p>Share your own Events!</p>
            <button className="btn" onClick={this.startCreateEventHandler}>
              Create Event
            </button>
          </div>
        )}
        <ul className="events__list">{eventList}</ul>
      </React.Fragment>
    );
  }
}

export default EventsPage;
```

![](/images/other/graphql-graphql-react-event-booking/AddingEvents3.png)

![](/images/other/graphql-graphql-react-event-booking/AddingEvents4.png)

![](/images/other/graphql-graphql-react-event-booking/AddingEvents5.png)

![](/images/other/graphql-graphql-react-event-booking/AddingEvents6.png)

AddingEvents7

AddingEvents8


## 17. Adding Event Features 41:20

### Create the EventItem components 

- Create the new `Events` folder from the `components` folder and the `EventsList` and `EventItem` folders inside it and the following documents inside them.

> components -> Events -> EventList -> EventItem -> EventItem.js
```js
import React from "react";

import "./EventItem.css";

const eventItem = props => (
  <li key={props.eventId} className="events__list-item">
    <h1>{props.title}</h1>
  </li>
);

export default eventItem;
```

> components -> Events -> EventList -> EventItem -> EventItem.css
```css
.events__list-item {
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid #5101d1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

> components -> Events -> EventList -> EventList.js
```js
import React from "react";

import EventItem from "./EventItem/EventItem";
import "./EventList.css";

const eventList = props => {
  const events = props.events.map(event => {
    return (
      <EventItem
        key={event._id}
        eventId={event._id}
        title={event.title}
        price={event.price}
        date={event.date}
        userId={props.authUserId}
        creatorId={event.creator._id}
        onDetail={props.onViewDetail}
      />
    );
  });

  return <ul className="event__list">{events}</ul>;
};

export default eventList;

```

> components -> Events -> EventList -> EventList.css
```css
.event__list {
  width: 40rem;
  max-width: 90%;
  margin: 2rem auto;
  list-style: none;
  padding: 0;
}

```

- Modify the `Event.css` documment to remove the styles put in the other `css` documents

> pages > Event.css
```css
.events-control {
  text-align: center;
  border: 1px solid #5101d1;
  padding: 1rem;
  margin: 2rem auto;
  width: 30rem;
  max-width: 80%;
}
``` 
- Modify the `Event.js` documment to use the new Event components.

> pages -> Event.js
```js
import React, { Component } from "react";

import Modal from "../components/Modal/Modal";
import Backdrop from "../components/Backdrop/Backdrop";
import EventList from "../components/Events/EventList/EventList";
import AuthContext from "../context/auth-context";

import "./Events.css";

class EventsPage extends Component {
  state = {
    creating: false,
    events: []
  };

  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.titleElRef = React.createRef();
    this.priceElRef = React.createRef();
    this.dateElRef = React.createRef();
    this.descriptionElRef = React.createRef();
  }

  componentDidMount() {
    this.fetchEvents();
  }

  startCreateEventHandler = () => {
    this.setState({ creating: true });
  };

  modalConfirmHandler = () => {
    this.setState({ creating: false });
    const title = this.titleElRef.current.value;
    const price = +this.priceElRef.current.value;
    const date = this.dateElRef.current.value;
    const description = this.descriptionElRef.current.value;

    if (
      title.trim().length === 0 ||
      price <= 0 ||
      date.trim().length === 0 ||
      description.trim().length === 0
    ) {
      return;
    }

    const event = { title, price, date, description };
    console.log(event);

    const requestBody = {
      query: `
          mutation {
            createEvent(eventInput: {title: "${title}", description: "${description}", price: ${price}, date: "${date}"}) {
              _id
              title
              description
              date
              price
              creator {
                _id
                email
              }
            }
          }
        `
    };

    const token = this.context.token;

    fetch("http://localhost:9000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        this.fetchEvents();
      })
      .catch(err => {
        console.log(err);
      });
  };

  modalCancelHandler = () => {
    this.setState({ creating: false });
  };

  fetchEvents() {
    const requestBody = {
      query: `
          query {
            events {
              _id
              title
              description
              date
              price
              creator {
                _id
                email
              }
            }
          }
        `
    };

    fetch("http://localhost:9000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        const events = resData.data.events;
        this.setState({ events: events });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.creating && (
          <React.Fragment>
            <Backdrop />
            <Modal
              title="Add Event"
              canCancel
              canConfirm
              onCancel={this.modalCancelHandler}
              onConfirm={this.modalConfirmHandler}
            >
              <form>
                <div className="form-control">
                  <label htmlFor="title">Title</label>
                  <input type="text" id="title" ref={this.titleElRef} />
                </div>
                <div className="form-control">
                  <label htmlFor="price">Price</label>
                  <input type="number" id="price" ref={this.priceElRef} />
                </div>
                <div className="form-control">
                  <label htmlFor="date">Date</label>
                  <input type="datetime-local" id="date" ref={this.dateElRef} />
                </div>
                <div className="form-control">
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    rows="4"
                    ref={this.descriptionElRef}
                  />
                </div>
              </form>
            </Modal>
          </React.Fragment>
        )}
        {this.context.token && (
          <div className="events-control">
            <p>Share your own Events!</p>
            <button className="btn" onClick={this.startCreateEventHandler}>
              Create Event
            </button>
          </div>
        )}        
        <EventList
          events={this.state.events}
        />
      </React.Fragment>
    );
  }
}

export default EventsPage;
```

![](/images/other/graphql-graphql-react-event-booking/AddingEventFeatures.png)

- Improve the new Event components.

> components -> Events -> EventList -> EventItem -> EventItem.css
```css
.events__list-item {
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid #5101d1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.events__list-item h1 {
  margin: 0;
  font-size: 1.5rem;
  color: #5101d1;
}

.events__list-item h2 {
  margin: 0;
  font-size: 1rem;
  color: #7c7c7c;
}

.events__list-item p {
  margin: 0;
}

```

> components -> Events -> EventList -> EventItem -> EventItem.js
```js
import React from "react";

import "./EventItem.css";

const eventItem = props => (
  <li key={props.eventId} className="events__list-item">
    <div>
      <h1>{props.title}</h1>
      <h2>
        ${props.price} - {new Date(props.date).toLocaleDateString()}
      </h2>
    </div>
    <div>
      {props.userId === props.creatorId ? (
        <p>You are the owner of this event.</p>
      ) : (
        <button
          className="btn"
          // onClick={props.onDetail.bind(this, props.eventId)}
        >
          View Details
        </button>
      )}
    </div>
  </li>
);

export default eventItem;
```

> components -> Events -> EventList -> EventList.js
```js
import React from "react";

import EventItem from "./EventItem/EventItem";
import "./EventList.css";

const eventList = props => {
  const events = props.events.map(event => {
    return (
      <EventItem
        key={event._id}
        eventId={event._id}
        title={event.title}
        price={event.price}
        date={event.date}
        userId={props.authUserId}
        creatorId={event.creator._id}
        onDetail={props.onViewDetail}
      />
    );
  });

  return <ul className="event__list">{events}</ul>;
};

export default eventList;
```
> pages -> Event.js
```js
import React, { Component } from "react";

import Modal from "../components/Modal/Modal";
import Backdrop from "../components/Backdrop/Backdrop";
import EventList from "../components/Events/EventList/EventList";
import AuthContext from "../context/auth-context";

import "./Events.css";

class EventsPage extends Component {
  state = {
    creating: false,
    events: []
  };

  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.titleElRef = React.createRef();
    this.priceElRef = React.createRef();
    this.dateElRef = React.createRef();
    this.descriptionElRef = React.createRef();
  }

  componentDidMount() {
    this.fetchEvents();
  }

  startCreateEventHandler = () => {
    this.setState({ creating: true });
  };

  modalConfirmHandler = () => {
    this.setState({ creating: false });
    const title = this.titleElRef.current.value;
    const price = +this.priceElRef.current.value;
    const date = this.dateElRef.current.value;
    const description = this.descriptionElRef.current.value;

    if (
      title.trim().length === 0 ||
      price <= 0 ||
      date.trim().length === 0 ||
      description.trim().length === 0
    ) {
      return;
    }

    const event = { title, price, date, description };
    console.log(event);

    const requestBody = {
      query: `
          mutation {
            createEvent(eventInput: {title: "${title}", description: "${description}", price: ${price}, date: "${date}"}) {
              _id
              title
              description
              date
              price
              creator {
                _id
                email
              }
            }
          }
        `
    };

    const token = this.context.token;

    fetch("http://localhost:9000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        this.fetchEvents();
      })
      .catch(err => {
        console.log(err);
      });
  };

  modalCancelHandler = () => {
    this.setState({ creating: false });
  };

  fetchEvents() {
    const requestBody = {
      query: `
          query {
            events {
              _id
              title
              description
              date
              price
              creator {
                _id
                email
              }
            }
          }
        `
    };

    fetch("http://localhost:9000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        const events = resData.data.events;
        this.setState({ events: events });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.creating && (
          <React.Fragment>
            <Backdrop />
            <Modal
              title="Add Event"
              canCancel
              canConfirm
              onCancel={this.modalCancelHandler}
              onConfirm={this.modalConfirmHandler}
            >
              <form>
                <div className="form-control">
                  <label htmlFor="title">Title</label>
                  <input type="text" id="title" ref={this.titleElRef} />
                </div>
                <div className="form-control">
                  <label htmlFor="price">Price</label>
                  <input type="number" id="price" ref={this.priceElRef} />
                </div>
                <div className="form-control">
                  <label htmlFor="date">Date</label>
                  <input type="datetime-local" id="date" ref={this.dateElRef} />
                </div>
                <div className="form-control">
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    rows="4"
                    ref={this.descriptionElRef}
                  />
                </div>
              </form>
            </Modal>
          </React.Fragment>
        )}
        {this.context.token && (
          <div className="events-control">
            <p>Share your own Events!</p>
            <button className="btn" onClick={this.startCreateEventHandler}>
              Create Event
            </button>
          </div>
        )}
        <EventList
          events={this.state.events}
          authUserId={this.context.userId}
        />
      </React.Fragment>
    );
  }
}

export default EventsPage;

```

![](/images/other/graphql-graphql-react-event-booking/AddingEventFeatures2.png)

![](/images/other/graphql-graphql-react-event-booking/AddingEventFeatures3.png)

![](/images/other/graphql-graphql-react-event-booking/AddingEventFeatures4.png)

### Add a spinner to be shown when data is loading

- Search for more information about Spinners on [loading.io](https://loading.io/css)

![](/images/other/graphql-graphql-react-event-booking/AddingEventFeatures5.png)

![](/images/other/graphql-graphql-react-event-booking/AddingEventFeatures6.png)

- Create the `Spinner` component

> components -> Spinner -> Spinner.css
```css
.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
}

.lds-dual-ring {
  display: inline-block;
  width: 64px;
  height: 64px;
}
.lds-dual-ring:after {
  content: ' ';
  display: block;
  width: 46px;
  height: 46px;
  margin: 1px;
  border-radius: 50%;
  border: 5px solid #5101d1;
  border-color: #5101d1 transparent #5101d1 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

> components -> Spinner -> Spinner.js
```js
import React from 'react';

import './Spinner.css';

const spinner = () => (
  <div className="spinner">
    <div className="lds-dual-ring" />
  </div>
);

export default spinner;

```
> pages -> Event.js
```js
import React, { Component } from "react";

import Modal from "../components/Modal/Modal";
import Backdrop from "../components/Backdrop/Backdrop";
import EventList from "../components/Events/EventList/EventList";
import Spinner from "../components/Spinner/Spinner";
import AuthContext from "../context/auth-context";

import "./Events.css";

class EventsPage extends Component {
  state = {
    creating: false,
    events: [],
    isLoading: false
  };

  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.titleElRef = React.createRef();
    this.priceElRef = React.createRef();
    this.dateElRef = React.createRef();
    this.descriptionElRef = React.createRef();
  }

  componentDidMount() {
    this.fetchEvents();
  }

  startCreateEventHandler = () => {
    this.setState({ creating: true });
  };

  modalConfirmHandler = () => {
    this.setState({ creating: false });
    const title = this.titleElRef.current.value;
    const price = +this.priceElRef.current.value;
    const date = this.dateElRef.current.value;
    const description = this.descriptionElRef.current.value;

    if (
      title.trim().length === 0 ||
      price <= 0 ||
      date.trim().length === 0 ||
      description.trim().length === 0
    ) {
      return;
    }

    const event = { title, price, date, description };
    console.log(event);

    const requestBody = {
      query: `
          mutation {
            createEvent(eventInput: {title: "${title}", description: "${description}", price: ${price}, date: "${date}"}) {
              _id
              title
              description
              date
              price
            }
          }
        `
    };

    const token = this.context.token;

    fetch("http://localhost:9000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        this.setState(prevState => {
          const updatedEvents = [...prevState.events];
          updatedEvents.push({
            _id: resData.data.createEvent._id,
            title: resData.data.createEvent.title,
            description: resData.data.createEvent.description,
            date: resData.data.createEvent.date,
            price: resData.data.createEvent.price,
            creator: {
              _id: this.context.userId
            }
          });
          return { events: updatedEvents };
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  modalCancelHandler = () => {
    this.setState({ creating: false });
  };

  fetchEvents() {
    this.setState({ isLoading: true });
    const requestBody = {
      query: `
          query {
            events {
              _id
              title
              description
              date
              price
              creator {
                _id
                email
              }
            }
          }
        `
    };

    fetch("http://localhost:9000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        const events = resData.data.events;
        this.setState({ events: events, isLoading: false });
      })
      .catch(err => {
        console.log(err);
        this.setState({ isLoading: false });
      });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.creating && (
          <React.Fragment>
            <Backdrop />
            <Modal
              title="Add Event"
              canCancel
              canConfirm
              onCancel={this.modalCancelHandler}
              onConfirm={this.modalConfirmHandler}
            >
              <form>
                <div className="form-control">
                  <label htmlFor="title">Title</label>
                  <input type="text" id="title" ref={this.titleElRef} />
                </div>
                <div className="form-control">
                  <label htmlFor="price">Price</label>
                  <input type="number" id="price" ref={this.priceElRef} />
                </div>
                <div className="form-control">
                  <label htmlFor="date">Date</label>
                  <input type="datetime-local" id="date" ref={this.dateElRef} />
                </div>
                <div className="form-control">
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    rows="4"
                    ref={this.descriptionElRef}
                  />
                </div>
              </form>
            </Modal>
          </React.Fragment>
        )}
        {this.context.token && (
          <div className="events-control">
            <p>Share your own Events!</p>
            <button className="btn" onClick={this.startCreateEventHandler}>
              Create Event
            </button>
          </div>
        )}
        {this.state.isLoading ? (
          <Spinner />
        ) : (
          <EventList
            events={this.state.events}
            authUserId={this.context.userId}
          />
        )}
      </React.Fragment>
    );
  }
}

export default EventsPage;

```

![](/images/other/graphql-graphql-react-event-booking/AddingEventFeatures7.png)

### Improve the Event detail component

> components -> Events -> EventList -> EventList.js
```js
import React from "react";

import EventItem from "./EventItem/EventItem";
import "./EventList.css";

const eventList = props => {
  const events = props.events.map(event => {
    return (
      <EventItem
        key={event._id}
        eventId={event._id}
        title={event.title}
        price={event.price}
        date={event.date}
        userId={props.authUserId}
        creatorId={event.creator._id}
        onDetail={props.onViewDetail}
      />
    );
  });

  return <ul className="event__list">{events}</ul>;
};

export default eventList;
```

> components -> Events -> EventList -> EventItem -> EventItem.js
```js
import React from "react";

import "./EventItem.css";

const eventItem = props => (
  <li key={props.eventId} className="events__list-item">
    <div>
      <h1>{props.title}</h1>
      <h2>
        ${props.price} - {new Date(props.date).toLocaleDateString()}
      </h2>
    </div>
    <div>
      {props.userId === props.creatorId ? (
        <p>Your the owner of this event.</p>
      ) : (
        <button
          className="btn"
          onClick={props.onDetail.bind(this, props.eventId)}
        >
          View Details
        </button>
      )}
    </div>
  </li>
);

export default eventItem;
```

> components -> Events -> Modal -> Modal.js
```js
import React from "react";

import "./Modal.css";

const modal = props => (
  <div className="modal">
    <header className="modal__header">
      <h1>{props.title}</h1>
    </header>
    <section className="modal__content">{props.children}</section>
    <section className="modal__actions">
      {props.canCancel && (
        <button className="btn" onClick={props.onCancel}>
          Cancel
        </button>
      )}
      {props.canConfirm && (
        <button className="btn" onClick={props.onConfirm}>
          {props.confirmText}
        </button>
      )}
    </section>
  </div>
);

export default modal;
```

> pages -> Event.js
```js
import React, { Component } from "react";

import Modal from "../components/Modal/Modal";
import Backdrop from "../components/Backdrop/Backdrop";
import EventList from "../components/Events/EventList/EventList";
import Spinner from "../components/Spinner/Spinner";
import AuthContext from "../context/auth-context";

import "./Events.css";

class EventsPage extends Component {
  state = {
    creating: false,
    events: [],
    isLoading: false,
    selectedEvent: null
  };

  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.titleElRef = React.createRef();
    this.priceElRef = React.createRef();
    this.dateElRef = React.createRef();
    this.descriptionElRef = React.createRef();
  }

  componentDidMount() {
    this.fetchEvents();
  }

  startCreateEventHandler = () => {
    this.setState({ creating: true });
  };

  modalConfirmHandler = () => {
    this.setState({ creating: false });
    const title = this.titleElRef.current.value;
    const price = +this.priceElRef.current.value;
    const date = this.dateElRef.current.value;
    const description = this.descriptionElRef.current.value;

    if (
      title.trim().length === 0 ||
      price <= 0 ||
      date.trim().length === 0 ||
      description.trim().length === 0
    ) {
      return;
    }

    const event = { title, price, date, description };
    console.log(event);

    const requestBody = {
      query: `
          mutation {
            createEvent(eventInput: {title: "${title}", description: "${description}", price: ${price}, date: "${date}"}) {
              _id
              title
              description
              date
              price
            }
          }
        `
    };

    const token = this.context.token;

    fetch("http://localhost:9000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        this.setState(prevState => {
          const updatedEvents = [...prevState.events];
          updatedEvents.push({
            _id: resData.data.createEvent._id,
            title: resData.data.createEvent.title,
            description: resData.data.createEvent.description,
            date: resData.data.createEvent.date,
            price: resData.data.createEvent.price,
            creator: {
              _id: this.context.userId
            }
          });
          return { events: updatedEvents };
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  modalCancelHandler = () => {
    this.setState({ creating: false, selectedEvent: null });
  };

  fetchEvents() {
    this.setState({ isLoading: true });
    const requestBody = {
      query: `
          query {
            events {
              _id
              title
              description
              date
              price
              creator {
                _id
                email
              }
            }
          }
        `
    };

    fetch("http://localhost:9000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        const events = resData.data.events;
        this.setState({ events: events, isLoading: false });
      })
      .catch(err => {
        console.log(err);
        this.setState({ isLoading: false });
      });
  }

  showDetailHandler = eventId => {
    this.setState(prevState => {
      const selectedEvent = prevState.events.find(e => e._id === eventId);
      return { selectedEvent: selectedEvent };
    });
  };

  bookEventHandler = () => {};

  render() {
    return (
      <React.Fragment>
        {(this.state.creating || this.state.selectedEvent) && <Backdrop />}
        {this.state.creating && (
          <Modal
            title="Add Event"
            canCancel
            canConfirm
            onCancel={this.modalCancelHandler}
            onConfirm={this.modalConfirmHandler}
            confirmText="Confirm"
          >
            <form>
              <div className="form-control">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" ref={this.titleElRef} />
              </div>
              <div className="form-control">
                <label htmlFor="price">Price</label>
                <input type="number" id="price" ref={this.priceElRef} />
              </div>
              <div className="form-control">
                <label htmlFor="date">Date</label>
                <input type="datetime-local" id="date" ref={this.dateElRef} />
              </div>
              <div className="form-control">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  rows="4"
                  ref={this.descriptionElRef}
                />
              </div>
            </form>
          </Modal>
        )}
        {this.state.selectedEvent && (
          <Modal
            title={this.state.selectedEvent.title}
            canCancel
            canConfirm
            onCancel={this.modalCancelHandler}
            onConfirm={this.bookEventHandler}
            confirmText="Book"
          >
            <h1>{this.state.selectedEvent.title}</h1>
            <h2>
              ${this.state.selectedEvent.price} -{" "}
              {new Date(this.state.selectedEvent.date).toLocaleDateString()}
            </h2>
            <p>{this.state.selectedEvent.description}</p>
          </Modal>
        )}
        {this.context.token && (
          <div className="events-control">
            <p>Share your own Events!</p>
            <button className="btn" onClick={this.startCreateEventHandler}>
              Create Event
            </button>
          </div>
        )}
        {this.state.isLoading ? (
          <Spinner />
        ) : (
          <EventList
            events={this.state.events}
            authUserId={this.context.userId}
            onViewDetail={this.showDetailHandler}
          />
        )}
      </React.Fragment>
    );
  }
}

export default EventsPage;
```

![](/images/other/graphql-graphql-react-event-booking/AddingEventFeatures8.png)

## 18. Creating and Displaying Bookings 14:48

### Make a request to make a booking

- Develop the `bookEventHandler` function.

> pages -> Event.js
```js
import React, { Component } from "react";

import Modal from "../components/Modal/Modal";
import Backdrop from "../components/Backdrop/Backdrop";
import EventList from "../components/Events/EventList/EventList";
import Spinner from "../components/Spinner/Spinner";
import AuthContext from "../context/auth-context";

import "./Events.css";

class EventsPage extends Component {
  state = {
    creating: false,
    events: [],
    isLoading: false,
    selectedEvent: null
  };

  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.titleElRef = React.createRef();
    this.priceElRef = React.createRef();
    this.dateElRef = React.createRef();
    this.descriptionElRef = React.createRef();
  }

  componentDidMount() {
    this.fetchEvents();
  }

  startCreateEventHandler = () => {
    this.setState({ creating: true });
  };

  modalConfirmHandler = () => {
    this.setState({ creating: false });
    const title = this.titleElRef.current.value;
    const price = +this.priceElRef.current.value;
    const date = this.dateElRef.current.value;
    const description = this.descriptionElRef.current.value;

    if (
      title.trim().length === 0 ||
      price <= 0 ||
      date.trim().length === 0 ||
      description.trim().length === 0
    ) {
      return;
    }

    const event = { title, price, date, description };
    console.log(event);

    const requestBody = {
      query: `
          mutation {
            createEvent(eventInput: {title: "${title}", description: "${description}", price: ${price}, date: "${date}"}) {
              _id
              title
              description
              date
              price
            }
          }
        `
    };

    const token = this.context.token;

    fetch("http://localhost:9000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        this.setState(prevState => {
          const updatedEvents = [...prevState.events];
          updatedEvents.push({
            _id: resData.data.createEvent._id,
            title: resData.data.createEvent.title,
            description: resData.data.createEvent.description,
            date: resData.data.createEvent.date,
            price: resData.data.createEvent.price,
            creator: {
              _id: this.context.userId
            }
          });
          return { events: updatedEvents };
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  modalCancelHandler = () => {
    this.setState({ creating: false, selectedEvent: null });
  };

  fetchEvents() {
    this.setState({ isLoading: true });
    const requestBody = {
      query: `
          query {
            events {
              _id
              title
              description
              date
              price
              creator {
                _id
                email
              }
            }
          }
        `
    };

    fetch("http://localhost:9000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        const events = resData.data.events;
        this.setState({ events: events, isLoading: false });
      })
      .catch(err => {
        console.log(err);
        this.setState({ isLoading: false });
      });
  }

  showDetailHandler = eventId => {
    this.setState(prevState => {
      const selectedEvent = prevState.events.find(e => e._id === eventId);
      return { selectedEvent: selectedEvent };
    });
  };

  bookEventHandler = () => {
    if (!this.context.token) {
      this.setState({ selectedEvent: null });
      return;
    }
    const requestBody = {
      query: `
          mutation {
            bookEvent(eventId: "${this.state.selectedEvent._id}") {
              _id
              createdAt
              updatedAt
            }
          }
        `
    };

    fetch("http://localhost:9000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.context.token
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
        this.setState({ selectedEvent: null });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <React.Fragment>
        {(this.state.creating || this.state.selectedEvent) && <Backdrop />}
        {this.state.creating && (
          <Modal
            title="Add Event"
            canCancel
            canConfirm
            onCancel={this.modalCancelHandler}
            onConfirm={this.modalConfirmHandler}
            confirmText="Confirm"
          >
            <form>
              <div className="form-control">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" ref={this.titleElRef} />
              </div>
              <div className="form-control">
                <label htmlFor="price">Price</label>
                <input type="number" id="price" ref={this.priceElRef} />
              </div>
              <div className="form-control">
                <label htmlFor="date">Date</label>
                <input type="datetime-local" id="date" ref={this.dateElRef} />
              </div>
              <div className="form-control">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  rows="4"
                  ref={this.descriptionElRef}
                />
              </div>
            </form>
          </Modal>
        )}
        {this.state.selectedEvent && (
          <Modal
            title={this.state.selectedEvent.title}
            canCancel
            canConfirm
            onCancel={this.modalCancelHandler}
            onConfirm={this.bookEventHandler}
            confirmText={this.context.token ? "Book" : "Confirm"}
          >
            <h1>{this.state.selectedEvent.title}</h1>
            <h2>
              ${this.state.selectedEvent.price} -{" "}
              {new Date(this.state.selectedEvent.date).toLocaleDateString()}
            </h2>
            <p>{this.state.selectedEvent.description}</p>
          </Modal>
        )}
        {this.context.token && (
          <div className="events-control">
            <p>Share your own Events!</p>
            <button className="btn" onClick={this.startCreateEventHandler}>
              Create Event
            </button>
          </div>
        )}
        {this.state.isLoading ? (
          <Spinner />
        ) : (
          <EventList
            events={this.state.events}
            authUserId={this.context.userId}
            onViewDetail={this.showDetailHandler}
          />
        )}
      </React.Fragment>
    );
  }
}

export default EventsPage;
```

![](/images/other/graphql-graphql-react-event-booking/CreatingAndDisplayingBookings.png)

### Modify the `bookings.js`document to show the bookings for an user

> pages -> Bookings.js
```js
import React, { Component } from "react";

import Spinner from "../components/Spinner/Spinner";
import AuthContext from "../context/auth-context";

class BookingsPage extends Component {
  state = {
    isLoading: false,
    bookings: []
  };

  static contextType = AuthContext;

  componentDidMount() {
    this.fetchBookings();
  }

  fetchBookings = () => {
    this.setState({ isLoading: true });
    const requestBody = {
      query: `
          query {
            bookings {
              _id
             createdAt
             event {
               _id
               title
               date
             }
            }
          }
        `
    };

    fetch("http://localhost:9000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.context.token
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        const bookings = resData.data.bookings;
        this.setState({ bookings: bookings, isLoading: false });
      })
      .catch(err => {
        console.log(err);
        this.setState({ isLoading: false });
      });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.isLoading ? (
          <Spinner />
        ) : (
          <ul>
            {this.state.bookings.map(booking => (
              <li key={booking._id}>
                {booking.event.title} -{" "}
                {new Date(booking.createdAt).toLocaleDateString()}
              </li>
            ))}
          </ul>
        )}
      </React.Fragment>
    );
  }
}

export default BookingsPage;
```

![](/images/other/graphql-graphql-react-event-booking/CreatingAndDisplayingBookings2.png)

- Include the `isActive` variable on `Events.js`

> pages -> Events.js
```js
import React, { Component } from "react";

import Modal from "../components/Modal/Modal";
import Backdrop from "../components/Backdrop/Backdrop";
import EventList from "../components/Events/EventList/EventList";
import Spinner from "../components/Spinner/Spinner";
import AuthContext from "../context/auth-context";

import "./Events.css";

class EventsPage extends Component {
  state = {
    creating: false,
    events: [],
    isLoading: false,
    selectedEvent: null
  };
  isActive = true;
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.titleElRef = React.createRef();
    this.priceElRef = React.createRef();
    this.dateElRef = React.createRef();
    this.descriptionElRef = React.createRef();
  }

  componentDidMount() {
    this.fetchEvents();
  }

  startCreateEventHandler = () => {
    this.setState({ creating: true });
  };

  modalConfirmHandler = () => {
    this.setState({ creating: false });
    const title = this.titleElRef.current.value;
    const price = +this.priceElRef.current.value;
    const date = this.dateElRef.current.value;
    const description = this.descriptionElRef.current.value;

    if (
      title.trim().length === 0 ||
      price <= 0 ||
      date.trim().length === 0 ||
      description.trim().length === 0
    ) {
      return;
    }

    const event = { title, price, date, description };
    console.log(event);

    const requestBody = {
      query: `
          mutation {
            createEvent(eventInput: {title: "${title}", description: "${description}", price: ${price}, date: "${date}"}) {
              _id
              title
              description
              date
              price
            }
          }
        `
    };

    const token = this.context.token;

    fetch("http://localhost:9000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        this.setState(prevState => {
          const updatedEvents = [...prevState.events];
          updatedEvents.push({
            _id: resData.data.createEvent._id,
            title: resData.data.createEvent.title,
            description: resData.data.createEvent.description,
            date: resData.data.createEvent.date,
            price: resData.data.createEvent.price,
            creator: {
              _id: this.context.userId
            }
          });
          return { events: updatedEvents };
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  modalCancelHandler = () => {
    this.setState({ creating: false, selectedEvent: null });
  };

  fetchEvents() {
    this.setState({ isLoading: true });
    const requestBody = {
      query: `
          query {
            events {
              _id
              title
              description
              date
              price
              creator {
                _id
                email
              }
            }
          }
        `
    };

    fetch("http://localhost:9000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        const events = resData.data.events;
        if (this.isActive) {
          this.setState({ events: events, isLoading: false });
        }
      })
      .catch(err => {
        console.log(err);
        if (this.isActive) {
          this.setState({ isLoading: false });
        }
      });
  }

  showDetailHandler = eventId => {
    this.setState(prevState => {
      const selectedEvent = prevState.events.find(e => e._id === eventId);
      return { selectedEvent: selectedEvent };
    });
  };

  bookEventHandler = () => {
    if (!this.context.token) {
      this.setState({ selectedEvent: null });
      return;
    }
    const requestBody = {
      query: `
          mutation {
            bookEvent(eventId: "${this.state.selectedEvent._id}") {
              _id
              createdAt
              updatedAt
            }
          }
        `
    };

    fetch("http://localhost:9000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.context.token
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
        this.setState({ selectedEvent: null });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentWillUnmount() {
    this.isActive = false;
  }

  render() {
    return (
      <React.Fragment>
        {(this.state.creating || this.state.selectedEvent) && <Backdrop />}
        {this.state.creating && (
          <Modal
            title="Add Event"
            canCancel
            canConfirm
            onCancel={this.modalCancelHandler}
            onConfirm={this.modalConfirmHandler}
            confirmText="Confirm"
          >
            <form>
              <div className="form-control">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" ref={this.titleElRef} />
              </div>
              <div className="form-control">
                <label htmlFor="price">Price</label>
                <input type="number" id="price" ref={this.priceElRef} />
              </div>
              <div className="form-control">
                <label htmlFor="date">Date</label>
                <input type="datetime-local" id="date" ref={this.dateElRef} />
              </div>
              <div className="form-control">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  rows="4"
                  ref={this.descriptionElRef}
                />
              </div>
            </form>
          </Modal>
        )}
        {this.state.selectedEvent && (
          <Modal
            title={this.state.selectedEvent.title}
            canCancel
            canConfirm
            onCancel={this.modalCancelHandler}
            onConfirm={this.bookEventHandler}
            confirmText={this.context.token ? "Book" : "Confirm"}
          >
            <h1>{this.state.selectedEvent.title}</h1>
            <h2>
              ${this.state.selectedEvent.price} -{" "}
              {new Date(this.state.selectedEvent.date).toLocaleDateString()}
            </h2>
            <p>{this.state.selectedEvent.description}</p>
          </Modal>
        )}
        {this.context.token && (
          <div className="events-control">
            <p>Share your own Events!</p>
            <button className="btn" onClick={this.startCreateEventHandler}>
              Create Event
            </button>
          </div>
        )}
        {this.state.isLoading ? (
          <Spinner />
        ) : (
          <EventList
            events={this.state.events}
            authUserId={this.context.userId}
            onViewDetail={this.showDetailHandler}
          />
        )}
      </React.Fragment>
    );
  }
}

export default EventsPage;
```

## 19. Cancelling Bookings 20:24

### Make booking list look nicer.

- Ceate the `Bookings` folder inside the `components` folder and then the `BookingList` component

> components -> Bookings -> BookingList -> BookingList.js
```js
import React from "react";

import "./BookingList.css";

const bookingList = props => (
  <ul className="bookings__list">
    {props.bookings.map(booking => {
      return (
        <li key={booking._id} className="bookings__item">
          <div className="bookings__item-data">
            {booking.event.title} -{" "}
            {new Date(booking.createdAt).toLocaleDateString()}
          </div>
          <div className="bookings__item-actions">
            <button className="btn">Cancel</button>
          </div>
        </li>
      );
    })}
  </ul>
);

export default bookingList;

```

> components -> Bookings -> BookingList -> BookingList.css
```css
.bookings__list {
  list-style: none;
  margin: 0 auto;
  padding: 0;
  width: 40rem;
  max-width: 90%;
}

.bookings__item {
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid #5101d1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```
- Modify the `Booking.js` document to use the new `BookingList` component.

> pages -> Booking.js
```js
import React, { Component } from "react";

import Spinner from "../components/Spinner/Spinner";
import AuthContext from "../context/auth-context";
import BookingList from "../components/Bookings/BookingList/BookingList";

class BookingsPage extends Component {
  state = {
    isLoading: false,
    bookings: []
  };

  static contextType = AuthContext;

  componentDidMount() {
    this.fetchBookings();
  }

  fetchBookings = () => {
    this.setState({ isLoading: true });
    const requestBody = {
      query: `
          query {
            bookings {
              _id
             createdAt
             event {
               _id
               title
               date
             }
            }
          }
        `
    };

    fetch("http://localhost:9000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.context.token
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        const bookings = resData.data.bookings;
        this.setState({ bookings: bookings, isLoading: false });
      })
      .catch(err => {
        console.log(err);
        this.setState({ isLoading: false });
      });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.isLoading ? (
          <Spinner />
        ) : (
          <BookingList
            bookings={this.state.bookings}
          />
        )}
      </React.Fragment>
    );
  }
}

export default BookingsPage;
```

![](/images/other/graphql-graphql-react-event-booking/CancellingBookings.png)

- Develop the feature to cancel a booking

> components -> Bookings -> BookingList -> BookingList.js
```js
import React from "react";

import "./BookingList.css";

const bookingList = props => (
  <ul className="bookings__list">
    {props.bookings.map(booking => {
      return (
        <li key={booking._id} className="bookings__item">
          <div className="bookings__item-data">
            {booking.event.title} -{" "}
            {new Date(booking.createdAt).toLocaleDateString()}
          </div>
          <div className="bookings__item-actions">
            <button
              className="btn"
              onClick={props.onDelete.bind(this, booking._id)}
            >
              Cancel
            </button>
          </div>
        </li>
      );
    })}
  </ul>
);

export default bookingList;
```

> pages -> Booking.js
```js
import React, { Component } from "react";

import Spinner from "../components/Spinner/Spinner";
import AuthContext from "../context/auth-context";
import BookingList from "../components/Bookings/BookingList/BookingList";

class BookingsPage extends Component {
  state = {
    isLoading: false,
    bookings: []
  };

  static contextType = AuthContext;

  componentDidMount() {
    this.fetchBookings();
  }

  fetchBookings = () => {
    this.setState({ isLoading: true });
    const requestBody = {
      query: `
          query {
            bookings {
              _id
             createdAt
             event {
               _id
               title
               date
             }
            }
          }
        `
    };

    fetch("http://localhost:9000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.context.token
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        const bookings = resData.data.bookings;
        this.setState({ bookings: bookings, isLoading: false });
      })
      .catch(err => {
        console.log(err);
        this.setState({ isLoading: false });
      });
  };

  deleteBookingHandler = bookingId => {
    this.setState({ isLoading: true });
    const requestBody = {
      query: `
          mutation {
            cancelBooking(bookingId: "${bookingId}") {
            _id
             title
            }
          }
        `
    };

    fetch("http://localhost:9000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.context.token
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        this.setState(prevState => {
          const updatedBookings = prevState.bookings.filter(booking => {
            return booking._id !== bookingId;
          });
          return { bookings: updatedBookings, isLoading: false };
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({ isLoading: false });
      });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.isLoading ? (
          <Spinner />
        ) : (
          <BookingList
            bookings={this.state.bookings}
            onDelete={this.deleteBookingHandler}
          />
        )}
      </React.Fragment>
    );
  }
}

export default BookingsPage;
```

![](/images/other/graphql-graphql-react-event-booking/CancellingBookings2.png)

![](/images/other/graphql-graphql-react-event-booking/CancellingBookings3.png)

- Modify the backend to avoid a user removing bookings that does not belong to them

> graphql -> resolvers -> bookings.js
```js
const Booking = require("../../models/booking");
const Event = require("../../models/event");
const { transformBooking, transformEvent } = require("./merge");

module.exports = {
  bookings: async (args, req) => {
    try {
      if (!req.isAuth) {
        throw new Error("Unauthenticated.");
      }
      const bookings = await Booking.find({ user: req.userId });
      return bookings.map(booking => {
        return transformBooking(booking);
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  bookEvent: async (args, req) => {
    try {
      if (!req.isAuth) {
        throw new Error("Unauthenticated.");
      }
      const fectchedEvent = await Event.findById(args.eventId);
      if (!fectchedEvent) {
        throw new Error("Event Id does not exist");
      }
      const booking = new Booking({
        user: req.userId,
        event: fectchedEvent
      });
      const result = await booking.save();
      return transformBooking(result);
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  cancelBooking: async (args, req) => {
    try {
      if (!req.isAuth) {
        throw new Error("Unauthenticated.");
      }
      const booking = await Booking.findById(args.bookingId).populate("event");
      if (!booking) {
        throw new Error("Booking Id does not exist");
      }
      await Booking.deleteOne({ _id: args.bookingId });
      return transformEvent(booking.event);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
```

## 20. Using Dataloader 17:44

### Use the [Facebook dataloader](https://github.com/facebook/dataloader) to get the events data properly

![](/images/other/graphql-graphql-react-event-booking/UsingDataloader.png)

- Install dataloader

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/graphql-react-event-booking (master)$ npm i dataloader
npm WARN graphql-react-event-booking@1.0.0 No repository field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ dataloader@1.4.0
added 1 package from 3 contributors and audited 2469 packages in 9.178s
found 0 vulnerabilities
```
- Modify the `merge.js` document to implement `dataloader`

> graphql -> resolvers -> merge.js
```js
const DataLoader = require("dataloader");

const Event = require("../../models/event");
const User = require("../../models/user");
const { dateToString } = require("../../helpers/date");

const eventLoader = new DataLoader(eventIds => {
  return events(eventIds);
});

const userLoader = new DataLoader(userIds => {
  return User.find({ _id: { $in: userIds } });
});

const events = async eventIds => {
  try {
    const events = await Event.find({ _id: { $in: eventIds } });
    return events.map(event => {
      return transformEvent(event);
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const singleEvent = async eventId => {
  try {
    const event = await eventLoader.load(eventId.toString());
    return event;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const user = async userId => {
  try {
    const user = await userLoader.load(userId.toString());
    return {
      ...user._doc,
      _id: user.id,
      createdEvents: eventLoader.loadMany.bind(this, user._doc.createdEvents)
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const transformEvent = event => {
  if (event) {
    return {
      ...event._doc,
      _id: event.id,
      date: dateToString(event._doc.date),
      creator: user.bind(this, event._doc.creator)
    };
  }
  return null;
};

const transformBooking = booking => {
  if (booking) {
    return {
      ...booking._doc,
      _id: booking.id,
      user: user.bind(this, booking._doc.user),
      event: singleEvent.bind(this, booking._doc.event),
      createdAt: dateToString(booking._doc.createdAt),
      updatedAt: dateToString(booking._doc.updatedAt)
    };
  }
  return null;
};

exports.transformEvent = transformEvent;
exports.transformBooking = transformBooking;
```

![](/images/other/graphql-graphql-react-event-booking/UsingDataloader2.png)

![](/images/other/graphql-graphql-react-event-booking/UsingDataloader3.png)


## 21. Improving Queries and Bugfixing 16:13

- There is a bug that must be fixed in the `merge.js` document.

![](/images/other/graphql-graphql-react-event-booking/ImprovingQueriesAndBugfixing.png)

- The `user` function must be amended.

> graphql -> resolvers -> merge.js
```js
const DataLoader = require("dataloader");

const Event = require("../../models/event");
const User = require("../../models/user");
const { dateToString } = require("../../helpers/date");

const eventLoader = new DataLoader(eventIds => {
  return events(eventIds);
});

const userLoader = new DataLoader(userIds => {
  return User.find({ _id: { $in: userIds } });
});

const events = async eventIds => {
  try {
    const events = await Event.find({ _id: { $in: eventIds } });
    return events.map(event => {
      return transformEvent(event);
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const singleEvent = async eventId => {
  try {
    const event = await eventLoader.load(eventId.toString());
    return event;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const user = async userId => {
  try {
    const user = await userLoader.load(userId.toString());
    return {
      ...user._doc,
      _id: user.id,
      createdEvents: () => eventLoader.loadMany(user._doc.createdEvents)
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const transformEvent = event => {
  if (event) {
    return {
      ...event._doc,
      _id: event.id,
      date: dateToString(event._doc.date),
      creator: user.bind(this, event._doc.creator)
    };
  }
  return null;
};

const transformBooking = booking => {
  if (booking) {
    return {
      ...booking._doc,
      _id: booking.id,
      user: user.bind(this, booking._doc.user),
      event: singleEvent.bind(this, booking._doc.event),
      createdAt: dateToString(booking._doc.createdAt),
      updatedAt: dateToString(booking._doc.updatedAt)
    };
  }
  return null;
};

exports.transformEvent = transformEvent;
exports.transformBooking = transformBooking;
```

![](/images/other/graphql-graphql-react-event-booking/ImprovingQueriesAndBugfixing2.png)

- There is another improvement in the `Bookings.js` document with the way we inject the parameters to the queries.

- The `deleteBookingHandler` function is changed to add the `variables` object to the request.

> pages -> Bookings.js
```js
import React, { Component } from "react";

import Spinner from "../components/Spinner/Spinner";
import AuthContext from "../context/auth-context";
import BookingList from "../components/Bookings/BookingList/BookingList";

class BookingsPage extends Component {
  state = {
    isLoading: false,
    bookings: []
  };

  static contextType = AuthContext;

  componentDidMount() {
    this.fetchBookings();
  }

  fetchBookings = () => {
    this.setState({ isLoading: true });
    const requestBody = {
      query: `
          query {
            bookings {
              _id
             createdAt
             event {
               _id
               title
               date
             }
            }
          }
        `
    };

    fetch("http://localhost:9000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.context.token
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        const bookings = resData.data.bookings;
        this.setState({ bookings: bookings, isLoading: false });
      })
      .catch(err => {
        console.log(err);
        this.setState({ isLoading: false });
      });
  };

  deleteBookingHandler = bookingId => {
    this.setState({ isLoading: true });
    const requestBody = {
      query: `
          mutation CancelBooking($id: ID!) {
            cancelBooking(bookingId: $id) {
            _id
             title
            }
          }
        `,
      variables: {
        id: bookingId
      }
    };

    fetch("http://localhost:9000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.context.token
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        this.setState(prevState => {
          const updatedBookings = prevState.bookings.filter(booking => {
            return booking._id !== bookingId;
          });
          return { bookings: updatedBookings, isLoading: false };
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({ isLoading: false });
      });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.isLoading ? (
          <Spinner />
        ) : (
          <BookingList
            bookings={this.state.bookings}
            onDelete={this.deleteBookingHandler}
          />
        )}
      </React.Fragment>
    );
  }
}

export default BookingsPage;
```

![](/images/other/graphql-graphql-react-event-booking/ImprovingQueriesAndBugfixing3.png)

![](/images/other/graphql-graphql-react-event-booking/ImprovingQueriesAndBugfixing4.png)

- We can do the same for the `submitHandler` function on the `Auth.js` document

> pages -> Auth.js
```js
import React, { Component } from "react";

import "./Auth.css";
import AuthContext from "../context/auth-context";

class AuthPage extends Component {
  state = {
    isLogin: true
  };

  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.emailEl = React.createRef();
    this.passwordEl = React.createRef();
  }

  switchModeHandler = () => {
    this.setState(prevSate => {
      return { isLogin: !prevSate.isLogin };
    });
  };
  submitHandler = event => {
    event.preventDefault();
    const email = this.emailEl.current.value;
    const password = this.passwordEl.current.value;
    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }

    let requestBody = {
      query: `
        query Login($email: String!, $password: String!) {
          login(email: $email, password: $password) {
            userId
            token
            tokenExpiration
          }
        }
      `,
      variables: {
        email: email,
        password: password
      }
    };

    if (!this.state.isLogin) {
      requestBody = {
        query: `
          mutation CreateUser($email: String!, $password: String!) {
            createUser(userInput: {email: $email, password: $password}) {
              _id
              email
            }
          }
        `,
        variables: {
          email: email,
          password: password
        }
      };
    }

    fetch("http://localhost:9000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        if (resData.data.login && resData.data.login.token) {
          this.context.login(
            resData.data.login.token,
            resData.data.login.userId,
            resData.data.login.tokenExpiration
          );
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <form className="auth-form" onSubmit={this.submitHandler}>
        <div className="form-control">
          <label htmlFor="email">E-Mail</label>
          <input type="email" id="email" ref={this.emailEl} />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={this.passwordEl} />
        </div>
        <div className="form-actions">
          <button type="submit">Submit</button>
          <button type="button" onClick={this.switchModeHandler}>
            Sign to {this.state.isLogin ? "Signup" : "Login"}
          </button>
        </div>
      </form>
    );
  }
}
export default AuthPage;
```
![](/images/other/graphql-graphql-react-event-booking/ImprovingQueriesAndBugfixing5.png)

- We can do the same for the main `requestBody` constant and the `bookEventHandler` on the `Mutation.js` document

> pages -> Events.js
```js
import React, { Component } from "react";

import Modal from "../components/Modal/Modal";
import Backdrop from "../components/Backdrop/Backdrop";
import EventList from "../components/Events/EventList/EventList";
import Spinner from "../components/Spinner/Spinner";
import AuthContext from "../context/auth-context";

import "./Events.css";

class EventsPage extends Component {
  state = {
    creating: false,
    events: [],
    isLoading: false,
    selectedEvent: null
  };
  isActive = true;
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.titleElRef = React.createRef();
    this.priceElRef = React.createRef();
    this.dateElRef = React.createRef();
    this.descriptionElRef = React.createRef();
  }

  componentDidMount() {
    this.fetchEvents();
  }

  startCreateEventHandler = () => {
    this.setState({ creating: true });
  };

  modalConfirmHandler = () => {
    this.setState({ creating: false });
    const title = this.titleElRef.current.value;
    const price = +this.priceElRef.current.value;
    const date = this.dateElRef.current.value;
    const description = this.descriptionElRef.current.value;

    if (
      title.trim().length === 0 ||
      price <= 0 ||
      date.trim().length === 0 ||
      description.trim().length === 0
    ) {
      return;
    }

    const event = { title, price, date, description };
    console.log(event);

    const requestBody = {
      query: `
          mutation CreateEvent($title: String!, $desc: String!, $price: Float!, $date: String!) {
            createEvent(eventInput: {title: $title, description: $desc, price: $price, date: $date}) {
              _id
              title
              description
              date
              price
            }
          }
        `,
      variables: {
        title: title,
        desc: description,
        price: price,
        date: date
      }
    };

    const token = this.context.token;

    fetch("http://localhost:9000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        this.setState(prevState => {
          const updatedEvents = [...prevState.events];
          updatedEvents.push({
            _id: resData.data.createEvent._id,
            title: resData.data.createEvent.title,
            description: resData.data.createEvent.description,
            date: resData.data.createEvent.date,
            price: resData.data.createEvent.price,
            creator: {
              _id: this.context.userId
            }
          });
          return { events: updatedEvents };
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  modalCancelHandler = () => {
    this.setState({ creating: false, selectedEvent: null });
  };

  fetchEvents() {
    this.setState({ isLoading: true });
    const requestBody = {
      query: `
          query {
            events {
              _id
              title
              description
              date
              price
              creator {
                _id
                email
              }
            }
          }
        `
    };

    fetch("http://localhost:9000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        const events = resData.data.events;
        if (this.isActive) {
          this.setState({ events: events, isLoading: false });
        }
      })
      .catch(err => {
        console.log(err);
        if (this.isActive) {
          this.setState({ isLoading: false });
        }
      });
  }

  showDetailHandler = eventId => {
    this.setState(prevState => {
      const selectedEvent = prevState.events.find(e => e._id === eventId);
      return { selectedEvent: selectedEvent };
    });
  };

  bookEventHandler = () => {
    if (!this.context.token) {
      this.setState({ selectedEvent: null });
      return;
    }
    const requestBody = {
      query: `
          mutation BookEvent($id: ID!) {
            bookEvent(eventId: $id) {
              _id
             createdAt
             updatedAt
            }
          }
        `,
      variables: {
        id: this.state.selectedEvent._id
      }
    };

    fetch("http://localhost:9000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.context.token
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
        this.setState({ selectedEvent: null });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentWillUnmount() {
    this.isActive = false;
  }

  render() {
    return (
      <React.Fragment>
        {(this.state.creating || this.state.selectedEvent) && <Backdrop />}
        {this.state.creating && (
          <Modal
            title="Add Event"
            canCancel
            canConfirm
            onCancel={this.modalCancelHandler}
            onConfirm={this.modalConfirmHandler}
            confirmText="Confirm"
          >
            <form>
              <div className="form-control">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" ref={this.titleElRef} />
              </div>
              <div className="form-control">
                <label htmlFor="price">Price</label>
                <input type="number" id="price" ref={this.priceElRef} />
              </div>
              <div className="form-control">
                <label htmlFor="date">Date</label>
                <input type="datetime-local" id="date" ref={this.dateElRef} />
              </div>
              <div className="form-control">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  rows="4"
                  ref={this.descriptionElRef}
                />
              </div>
            </form>
          </Modal>
        )}
        {this.state.selectedEvent && (
          <Modal
            title={this.state.selectedEvent.title}
            canCancel
            canConfirm
            onCancel={this.modalCancelHandler}
            onConfirm={this.bookEventHandler}
            confirmText={this.context.token ? "Book" : "Confirm"}
          >
            <h1>{this.state.selectedEvent.title}</h1>
            <h2>
              ${this.state.selectedEvent.price} -{" "}
              {new Date(this.state.selectedEvent.date).toLocaleDateString()}
            </h2>
            <p>{this.state.selectedEvent.description}</p>
          </Modal>
        )}
        {this.context.token && (
          <div className="events-control">
            <p>Share your own Events!</p>
            <button className="btn" onClick={this.startCreateEventHandler}>
              Create Event
            </button>
          </div>
        )}
        {this.state.isLoading ? (
          <Spinner />
        ) : (
          <EventList
            events={this.state.events}
            authUserId={this.context.userId}
            onViewDetail={this.showDetailHandler}
          />
        )}
      </React.Fragment>
    );
  }
}

export default EventsPage;
```

![](/images/other/graphql-graphql-react-event-booking/ImprovingQueriesAndBugfixing6.png)

![](/images/other/graphql-graphql-react-event-booking/ImprovingQueriesAndBugfixing7.png)

![](/images/other/graphql-graphql-react-event-booking/ImprovingQueriesAndBugfixing8.png)

![](/images/other/graphql-graphql-react-event-booking/ImprovingQueriesAndBugfixing9.png)

## 22. Creating Charts 38:05

### Clear all the existing events and add 3 new ones

![](/images/other/graphql-graphql-react-event-booking/CreatingsCharts.png)

![](/images/other/graphql-graphql-react-event-booking/CreatingsCharts2.png)

![](/images/other/graphql-graphql-react-event-booking/CreatingsCharts3.png)

### Create the new component to see the chart

- Create the new `BookingsChart.js` component in the `components\Bookins\BookingsChart` folder.

> components\Bookins\BookingsChart\BookingsChart.js
```js
import React from "react";

const bookingsChart = props => {
  return <p>The Chart!</p>;
};

export default bookingsChart;
```

- Modify the `Bookings.js` page to put a message when there are no bookings.

> pages\Bookings.js
```js
import React, { Component } from "react";

import Spinner from "../components/Spinner/Spinner";
import AuthContext from "../context/auth-context";
import BookingList from "../components/Bookings/BookingList/BookingList";
import BookingsChart from "../components/Bookings/BookingsChart/BookingsChart";

class BookingsPage extends Component {
  state = {
    isLoading: false,
    bookings: [],
    outputType: "list"
  };

  static contextType = AuthContext;

  componentDidMount() {
    this.fetchBookings();
  }

  fetchBookings = () => {
    this.setState({ isLoading: true });
    const requestBody = {
      query: `
          query {
            bookings {
              _id
             createdAt
             event {
               _id
               title
               date
             }
            }
          }
        `
    };

    fetch("http://localhost:9000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.context.token
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        const bookings = resData.data.bookings;
        this.setState({ bookings: bookings, isLoading: false });
      })
      .catch(err => {
        console.log(err);
        this.setState({ isLoading: false });
      });
  };

  deleteBookingHandler = bookingId => {
    this.setState({ isLoading: true });
    const requestBody = {
      query: `
          mutation CancelBooking($id: ID!) {
            cancelBooking(bookingId: $id) {
            _id
             title
            }
          }
        `,
      variables: {
        id: bookingId
      }
    };

    fetch("http://localhost:9000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.context.token
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        this.setState(prevState => {
          const updatedBookings = prevState.bookings.filter(booking => {
            return booking._id !== bookingId;
          });
          return { bookings: updatedBookings, isLoading: false };
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({ isLoading: false });
      });
  };

  changeOutputTypeHandler = outputType => {
    if (outputType === "list") {
      this.setState({ outputType: "list" });
    } else {
      this.setState({ outputType: "chart" });
    }
  };

  render() {
    let content = <Spinner />;
    if (!this.state.isLoading) {
      content = (
        <React.Fragment>
          <div>
            <button onClick={this.changeOutputTypeHandler.bind(this, "list")}>
              List
            </button>
            <button onClick={this.changeOutputTypeHandler.bind(this, "chart")}>
              Chart
            </button>
          </div>
          <div>
            {this.state.outputType === "list" ? (
              <BookingList
                bookings={this.state.bookings}
                onDelete={this.deleteBookingHandler}
              />
            ) : (
              <BookingsChart bookings={this.state.bookings} />
            )}
          </div>
        </React.Fragment>
      );
    }
    return <React.Fragment>{content}</React.Fragment>;
  }
}

export default BookingsPage;
```

![](/images/other/graphql-graphql-react-event-booking/CreatingsCharts4.png)

![](/images/other/graphql-graphql-react-event-booking/CreatingsCharts5.png)

### Create the BookingControls component

- Create the `components\Bookings\BookingsControls` folder with the following documents

> components\Bookings\BookingsControls\BookingsControls.css
```css
.bookings-control {
  text-align: center;
  padding: 0.5rem;
}

.bookings-control button {
  font: inherit;
  border: none;
  background: transparent;
  color: black;
  padding: 0.25rem 3rem;
  border-bottom: 2px solid transparent;
  cursor: pointer;
}

.bookings-control button.active {
  border-bottom-color: #5101d1;
  color: #5101d1;
}

.bookings-control button:focus {
  outline: none;
}
```

> components\Bookings\BookingsControls\BookingsControls.js
```js
import React from 'react';

import './BookingsControls.css';

const bookingsControl = props => {
  return (
    <div className="bookings-control">
      <button
        className={props.activeOutputType === 'list' ? 'active' : ''}
        onClick={props.onChange.bind(this, 'list')}
      >
        List
      </button>
      <button
        className={props.activeOutputType === 'chart' ? 'active' : ''}
        onClick={props.onChange.bind(this, 'chart')}
      >
        Chart
      </button>
    </div>
  );
};

export default bookingsControl;
```

- Update the `Bookings.js` page to use the new component.

> pages\Bookings.js
```js
import React, { Component } from "react";

import Spinner from "../components/Spinner/Spinner";
import AuthContext from "../context/auth-context";
import BookingList from "../components/Bookings/BookingList/BookingList";
import BookingsChart from "../components/Bookings/BookingsChart/BookingsChart";
import BookingsControls from "../components/Bookings/BookingsControls/BookingsControls";

class BookingsPage extends Component {
  state = {
    isLoading: false,
    bookings: [],
    outputType: "list"
  };

  static contextType = AuthContext;

  componentDidMount() {
    this.fetchBookings();
  }

  fetchBookings = () => {
    this.setState({ isLoading: true });
    const requestBody = {
      query: `
          query {
            bookings {
              _id
             createdAt
             event {
               _id
               title
               date
             }
            }
          }
        `
    };

    fetch("http://localhost:9000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.context.token
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        const bookings = resData.data.bookings;
        this.setState({ bookings: bookings, isLoading: false });
      })
      .catch(err => {
        console.log(err);
        this.setState({ isLoading: false });
      });
  };

  deleteBookingHandler = bookingId => {
    this.setState({ isLoading: true });
    const requestBody = {
      query: `
          mutation CancelBooking($id: ID!) {
            cancelBooking(bookingId: $id) {
            _id
             title
            }
          }
        `,
      variables: {
        id: bookingId
      }
    };

    fetch("http://localhost:9000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.context.token
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        this.setState(prevState => {
          const updatedBookings = prevState.bookings.filter(booking => {
            return booking._id !== bookingId;
          });
          return { bookings: updatedBookings, isLoading: false };
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({ isLoading: false });
      });
  };

  changeOutputTypeHandler = outputType => {
    if (outputType === "list") {
      this.setState({ outputType: "list" });
    } else {
      this.setState({ outputType: "chart" });
    }
  };

  render() {
    let content = <Spinner />;
    if (!this.state.isLoading) {
      content = (
        <React.Fragment>
          <BookingsControls
            activeOutputType={this.state.outputType}
            onChange={this.changeOutputTypeHandler}
          />
          <div>
            {this.state.outputType === "list" ? (
              <BookingList
                bookings={this.state.bookings}
                onDelete={this.deleteBookingHandler}
              />
            ) : (
              <BookingsChart bookings={this.state.bookings} />
            )}
          </div>
        </React.Fragment>
      );
    }
    return <React.Fragment>{content}</React.Fragment>;
  }
}

export default BookingsPage;
```

![](/images/other/graphql-graphql-react-event-booking/CreatingsCharts6.png)

![](/images/other/graphql-graphql-react-event-booking/CreatingsCharts7.png)

### Develop the BookingsCharts component

- We need to install the [react-chartjs](https://github.com/reactjs/react-chartjs) component.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/graphql-react-event-booking/frontend (master)
$ npm install --save react-chartjs
npm WARN react-chartjs@1.2.0 requires a peer of chart.js@^1.1.1 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ react-chartjs@1.2.0
added 9 packages from 84 contributors and audited 35810 packages in 37.232s
found 0 vulnerabilities
```

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/graphql-react-event-booking/frontend (master)
$ npm install --save chart.js@^1.1.1
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ chart.js@1.1.1
added 1 package and audited 35811 packages in 40.69s
found 0 vulnerabilities
```

- Modify the `Bookings.js` page to include the price with the events.

> pages\Bookings.js
```js
const Booking = require("../../models/booking");
const Event = require("../../models/event");
const { transformBooking, transformEvent } = require("./merge");

module.exports = {
  bookings: async (args, req) => {
    try {
      if (!req.isAuth) {
        throw new Error("Unauthenticated.");
      }
      const bookings = await Booking.find({ user: req.userId });
      return bookings.map(booking => {
        return transformBooking(booking);
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  bookEvent: async (args, req) => {
    try {
      if (!req.isAuth) {
        throw new Error("Unauthenticated.");
      }
      const fectchedEvent = await Event.findById(args.eventId);
      if (!fectchedEvent) {
        throw new Error("Event Id does not exist");
      }
      const booking = new Booking({
        user: req.userId,
        event: fectchedEvent
      });
      const result = await booking.save();
      return transformBooking(result);
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  cancelBooking: async (args, req) => {
    try {
      if (!req.isAuth) {
        throw new Error("Unauthenticated.");
      }
      const booking = await Booking.findById(args.bookingId).populate("event");
      if (!booking) {
        throw new Error("Booking Id does not exist");
      }
      await Booking.deleteOne({ _id: args.bookingId });
      return transformEvent(booking.event);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};

```

> components\Bookins\BookingsChart\BookingsChart.js
```js
import React from 'react';
import { Bar as BarChart } from 'react-chartjs';

const BOOKINGS_BUCKETS = {
  Cheap: {
    min: 0,
    max: 100
  },
  Normal: {
    min: 100,
    max: 200
  },
  Expensive: {
    min: 200,
    max: 10000000
  }
};

const bookingsChart = props => {
  const chartData = { labels: [], datasets: [] };
  let values = [];
  for (const bucket in BOOKINGS_BUCKETS) {
    const filteredBookingsCount = props.bookings.reduce((prev, current) => {
      if (
        current.event.price > BOOKINGS_BUCKETS[bucket].min &&
        current.event.price < BOOKINGS_BUCKETS[bucket].max
      ) {
        return prev + 1;
      } else {
        return prev;
      }
    }, 0);
    values.push(filteredBookingsCount);
    chartData.labels.push(bucket);
    chartData.datasets.push({
      // label: "My First dataset",
      fillColor: 'rgba(220,220,220,0.5)',
      strokeColor: 'rgba(220,220,220,0.8)',
      highlightFill: 'rgba(220,220,220,0.75)',
      highlightStroke: 'rgba(220,220,220,1)',
      data: values
    });
    values = [...values];
    values[values.length - 1] = 0;
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <BarChart data={chartData} />
    </div>
  );
};

export default bookingsChart;

```

![](/images/other/graphql-graphql-react-event-booking/CreatingsCharts8.png)

![](/images/other/graphql-graphql-react-event-booking/CreatingsCharts9.png)

![](/images/other/graphql-graphql-react-event-booking/CreatingsCharts10.png)

![](/images/other/graphql-graphql-react-event-booking/CreatingsCharts11.png)

## 23. Finishing the App 7:53

### Updating the `merge.js` document to fix the `events` function.

> graphql\resolvers\merge.js
```js
const DataLoader = require("dataloader");

const Event = require("../../models/event");
const User = require("../../models/user");
const { dateToString } = require("../../helpers/date");

const eventLoader = new DataLoader(eventIds => {
  return events(eventIds);
});

const userLoader = new DataLoader(userIds => {
  return User.find({ _id: { $in: userIds } });
});

const events = async eventIds => {
  try {
    const events = await Event.find({ _id: { $in: eventIds } });
    events.sort((a, b) => {
      return (
        eventIds.indexOf(a._id.toString()) - eventIds.indexOf(b._id.toString())
      );
    });    
    return events.map(event => {
      return transformEvent(event);
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const singleEvent = async eventId => {
  try {
    const event = await eventLoader.load(eventId.toString());
    return event;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const user = async userId => {
  try {
    const user = await userLoader.load(userId.toString());
    return {
      ...user._doc,
      _id: user.id,
      createdEvents: () => eventLoader.loadMany(user._doc.createdEvents)
    };
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const transformEvent = event => {
  if (event) {
    return {
      ...event._doc,
      _id: event.id,
      date: dateToString(event._doc.date),
      creator: user.bind(this, event._doc.creator)
    };
  }
  return null;
};

const transformBooking = booking => {
  if (booking) {
    return {
      ...booking._doc,
      _id: booking.id,
      user: user.bind(this, booking._doc.user),
      event: singleEvent.bind(this, booking._doc.event),
      createdAt: dateToString(booking._doc.createdAt),
      updatedAt: dateToString(booking._doc.updatedAt)
    };
  }
  return null;
};

exports.transformEvent = transformEvent;
exports.transformBooking = transformBooking;
```

![](/images/other/graphql-graphql-react-event-booking/FinishingTheApp.png)
