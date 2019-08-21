# Full-Stack Vue with GraphQL - The Ultimate Guide

> Github Repositories
- [full-stack-vue-with-graphql-the-ultimate-guide](https://github.com/peelmicro/full-stack-vue-with-graphql-the-ultimate-guide).

The [Full-Stack Vue with GraphQL - The Ultimate Guide](https://www.udemy.com/full-stack-vue-with-graphql-the-ultimate-guide/) Udemy course explains how to Build a complete Pinterest-inspired full-stack app from scratch with Vue, GraphQL, Apollo 2, Vuex, and Vuetify.

> Table of contents
[[toc]]

> Related projects

| Project                                                                                                                                         | Dates               | Source Code                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | --------------------------------------------------------------------------------------------------- |
| [NestJs and Nuxt version of the 'Full-Stack Vue with GraphQL - The Ultimate Guide' course](/projects/full-stack-vue-with-graphql-the-ultimate-guide-nuxt)| 19/8/2019 | [full-stack-vue-with-graphql-the-ultimate-guide-nuxt](https://github.com/peelmicro/full-stack-vue-with-graphql-the-ultimate-guide-nuxt)|

## What I've learned

- Learn in-depth how to use Apollo Server 2 and Apollo Boost to create powerful full-stack apps
- Learn how to handle errors on the client and server with Apollo / GraphQL
- Be able to implement session-based JWT authentication to GraphQL applications
- Integrate Apollo with Vuex for more reliable and scalable state management
- Implement infinite scrolling functionality using Vue-Apollo
- Deploy full-stack JavaScript / GraphQL applications using Heroku and Netlify
- Learn how to write queries and mutations in the GraphQL language on both the client and server
- Make use of many useful MongoDB methods and features
- Be able to create attractive, sophisticated UIs using the Vuetify CSS framework
- Become more familiar with all the best ES6 / 7 features such as async / await, destructuring, spread operators, arrow functions, etc

## Section 1: Introduction 0 / 3|29min

### 1. Preview our Completed App 18min

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/PreviewOurCompletedApp.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/PreviewOurCompletedApp2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/PreviewOurCompletedApp3.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/PreviewOurCompletedApp4.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/PreviewOurCompletedApp5.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/PreviewOurCompletedApp6.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/PreviewOurCompletedApp7.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/PreviewOurCompletedApp8.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/PreviewOurCompletedApp9.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/PreviewOurCompletedApp10.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/PreviewOurCompletedApp11.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/PreviewOurCompletedApp12.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/PreviewOurCompletedApp13.png)

### 2. Tools Used/Required 4min

- We are going to use [NodeJs](https://nodejs.org/en/).

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ToolsUsedRequired.png)

- We are also going to use [Visual Studio Code](https://code.visualstudio.com/)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ToolsUsedRequired2.png)

- We'll be using [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ToolsUsedRequired3.png)

- We'll also be using [Now — Global Serverless Deployments](https://zeit.co/now)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ToolsUsedRequired4.png)

- We'll be using [Chrome Canary](https://www.google.com/chrome/canary/)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ToolsUsedRequired5.png)

- We need to install `Vue.js devtools`

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ToolsUsedRequired6.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ToolsUsedRequired7.png)

### 3. Formatting Vue Templates (And More) with VS Code 6min

- We need to install the following Visual Studio Extensions.

- [Vetur](https://vuejs.github.io/vetur/)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/FormattingVueTemplatesWithVsCode.png)

- Change `Vetur › Format › Default Formatter: HTML` to `js-beautify-html`

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/FormattingVueTemplatesWithVsCode2.png)

- Ensure `editor: format on save` is `true`

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/FormattingVueTemplatesWithVsCode3.png)

- We are going to install [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/FormattingVueTemplatesWithVsCode4.png)

- We are also going to install [Graphql For VSCode](https://github.com/kumarharsh/graphql-for-vscode)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/FormattingVueTemplatesWithVsCode5.png)

## Section 2: What is GraphQL / Apollo? (Optional) 0 / 2|23min

### 4. What is GraphQL? Using the SWAPI GraphQL API 20min

- We are going to use the [SWAPI The Star Wars AP][https://www.swapi.co/] web site

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/WhatIsGraphQLUsingTheSwapiGraphQL.png)

> request

```
https://swapi.co/api/people/1/`
```

> response

```json
{
  "name": "Luke Skywalker",
  "height": "172",
  "mass": "77",
  "hair_color": "blond",
  "skin_color": "fair",
  "eye_color": "blue",
  "birth_year": "19BBY",
  "gender": "male",
  "homeworld": "https://swapi.co/api/planets/1/",
  "films": [
    "https://swapi.co/api/films/2/",
    "https://swapi.co/api/films/6/",
    "https://swapi.co/api/films/3/",
    "https://swapi.co/api/films/1/",
    "https://swapi.co/api/films/7/"
  ],
  "species": ["https://swapi.co/api/species/1/"],
  "vehicles": [
    "https://swapi.co/api/vehicles/14/",
    "https://swapi.co/api/vehicles/30/"
  ],
  "starships": [
    "https://swapi.co/api/starships/12/",
    "https://swapi.co/api/starships/22/"
  ],
  "created": "2014-12-09T13:50:51.644000Z",
  "edited": "2014-12-20T21:17:56.891000Z",
  "url": "https://swapi.co/api/people/1/"
}
```

- We cannot filter by specific values or show only the data that we need.

- We can use [GraphiQL](https://graphql.github.io/swapi-graphql/) to make `GraphQL` requests.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/WhatIsGraphQLUsingTheSwapiGraphQL2.png)

- We only want the `name`, `height` and `mass`. We `graphQL` is very easy.

> request

```graphql
{
  person(personID: 1) {
    name
    height
    mass
  }
}
```

> response

```json
{
  "data": {
    "person": {
      "name": "Luke Skywalker",
      "height": 172,
      "mass": 77
    }
  }
}
```

- We also can have all the information about all the queries available.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/WhatIsGraphQLUsingTheSwapiGraphQL3.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/WhatIsGraphQLUsingTheSwapiGraphQL4.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/WhatIsGraphQLUsingTheSwapiGraphQL5.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/WhatIsGraphQLUsingTheSwapiGraphQL6.png)

### 5. What is Apollo? 3min

- [Apollo](https://www.apollographql.com/), is `the Data Graph Plataform`, it helps `do GraphQl Right`. It's a single versatile query system to replace a patchwork of legacy APIs, with all the devtools and cloud services you need to run GraphQL at scale.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/WhatIsApollo.png)

- We are going to work with [Apollo Server](https://www.apollographql.com/docs/apollo-server/) that is the best way to quickly build a production-ready, self-documenting API for GraphQL clients, using data from any source.

- We are also going to work with [Apollo Boost](https://www.apollographql.com/docs/react/essentials/get-started/#apollo-boost) that is a great way to get started with Apollo Client quickly, but there are some advanced features it doesn't support out of the box, so with [Apollo Boost migration](https://www.apollographql.com/docs/react/advanced/boost-migration/) we need to set Apollo Client up manually.

- We are also going to work with [Apollo and GraphQL for Vue.js](https://github.com/akryum/vue-apollo) that helps integrate GraphQL in your Vue.js apps!

## Section 3: Intro to Apollo Server 2, Queries, Mutations and GraphQL Playground 0 / 5|27min

### 6. Git Clone and Install Dependencies (Required) 2min

- We are going to need to clone the https://github.com/reedbarger/fullstack-vue-graphql-starter repository to start developing the server side of our application.

- Create the `full-stack-vue-with-graphql-the-ultimate-guide` folder and copy the 2 files from the repository there.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/GitCloneAndInstallDependencies.png)

- Install the dependecies by executing `npm install`

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide
$ npm install

> bcrypt@3.0.6 install C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide\node_modules\bcrypt
> node-pre-gyp install --fallback-to-build

node-pre-gyp WARN Using needle for node-pre-gyp https download
[bcrypt] Success: "C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide\node_modules\bcrypt\lib\binding\bcrypt_lib.node" is installed via remote

> core-js@3.1.3 postinstall C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide\node_modules\core-js
> node scripts/postinstall || echo "ignore"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js
> https://www.patreon.com/zloirock

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> protobufjs@6.8.8 postinstall C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide\node_modules\protobufjs
> node scripts/postinstall


> nodemon@1.19.1 postinstall C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide\node_modules\nodemon
> node bin/postinstall || exit 0

npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN apollo-graphql@0.3.2 requires a peer of graphql@^14.2.1 but none is installed. You must install peer dependencies yourself.
npm WARN fullstack-vue-graphql-starter@1.0.0 No repository field.
npm WARN fullstack-vue-graphql-starter@1.0.0 scripts['server'] should probably be scripts['start'].
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

added 477 packages from 357 contributors and audited 3188 packages in 39.25s
found 0 vulnerabilities
```

### 7. Initializing Apollo Server 2 (Optional) 7min

- We are going to create the `server.js` document to set up the `Apollo Server`

> server.js

```js
const { ApolloServer, gql } = require("apollo-server");

const server = new ApolloServer({});

server.listen();
```

- We are going to execute the server

```
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide (master)
$ npm run server

> fullstack-vue-graphql-starter@1.0.0 server C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide
> nodemon server.js

[nodemon] 1.19.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide\node_modules\apollo-server-core\dist\ApolloServer.js:139
                throw Error('Apollo Server requires either an existing schema, modules or typeDefs');
                ^

Error: Apollo Server requires either an existing schema, modules or typeDefs
    at new ApolloServerBase (C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide\node_modules\apollo-server-core\dist\ApolloServer.js:139:23)
    at new ApolloServer (C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide\node_modules\apollo-server-express\dist\ApolloServer.js:46:9)
    at new ApolloServer (C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide\node_modules\apollo-server\dist\index.js:23:9)
    at Object.<anonymous> (C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide\server.js:3:16)
    at Module._compile (internal/modules/cjs/loader.js:805:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:816:10)
    at Module.load (internal/modules/cjs/loader.js:672:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:612:12)
    at Function.Module._load (internal/modules/cjs/loader.js:604:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:868:12)
[nodemon] app crashed - waiting for file changes before starting...
```

- We need to modify the `server.js` to add the minimum information needed.

> server.js

```js
const { ApolloServer, gql } = require("apollo-server");

const todos = [
  { task: "Wash car", completed: false },
  { task: "Clean room", completed: true }
];

const typeDefs = gql`
  type Todo {
    task: String
    completed: Boolean
  }

  type Query {
    getTodos: [Todo]
  }
`;

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`Server listening on ${url}`);
});
```

```bash
[nodemon] app crashed - waiting for file changes before starting...
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Server listening on http://localhost:4000/
```

### 8. Adding Resolvers and Executing Queries in GraphQL Playground (Optional) 6min

- if we access http://localhost:4000/ we can see the `GraphQL Playground` is open.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddingResolversAndExecutingQueriesInGraphQLPlayground.png)

- We need to modify the `server.js` to create the resolvers.

> server.js

```js
const { ApolloServer, gql } = require("apollo-server");

const todos = [
  { task: "Wash car", completed: false },
  { task: "Clean room", completed: true }
];

const typeDefs = gql`
  type Todo {
    task: String
    completed: Boolean
  }

  type Query {
    getTodos: [Todo]
  }
`;
const resolvers = {
  Query: {
    getTodos: () => todos
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server listening on ${url}`);
});
```

- We can see now the `schema:`

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddingResolversAndExecutingQueriesInGraphQLPlayground2.png)

- We also can see `docs`

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddingResolversAndExecutingQueriesInGraphQLPlayground3.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddingResolversAndExecutingQueriesInGraphQLPlayground4.png)

- We can now create a `query`

> request

```graphql
query {
  getTodos {
    task
    completed
  }
}
```

> response

```json
{
  "data": {
    "getTodos": [
      {
        "task": "Wash car",
        "completed": false
      },
      {
        "task": "Clean room",
        "completed": true
      }
    ]
  }
}
```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddingResolversAndExecutingQueriesInGraphQLPlayground5.png)

### 9. Writing and Running First Mutation in GraphQL Playground (Optional) 8min

- We are going to modify the `server.js` to add the mutations.

> server.js

```js
const { ApolloServer, gql } = require("apollo-server");

const todos = [
  { task: "Wash car", completed: false },
  { task: "Clean room", completed: true }
];

const typeDefs = gql`
  type Todo {
    task: String
    completed: Boolean
  }

  type Query {
    getTodos: [Todo]
  }
`;
const resolvers = {
  Query: {
    getTodos: () => todos
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server listening on ${url}`);
});
```

- We can see now that we have the `mutations` as well.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/WritingAndRunningFirstMutationInGraphQLPlayground.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/WritingAndRunningFirstMutationInGraphQLPlayground2.png)

- We are going to test if it works.

> request

```graphql
mutation {
  addTodo(task: "Eat lunch", completed: true) {
    task
    completed
  }
}
```

> mutation

```json
{
  "data": {
    "addTodo": {
      "task": "Eat lunch",
      "completed": true
    }
  }
}
```

- We cah chekck if the new task has been added by using the `getTodos` Query again.

> request

```graphql
query {
  getTodos {
    task
    completed
  }
}
```

> response

```json
{
  "data": {
    "getTodos": [
      {
        "task": "Wash car",
        "completed": false
      },
      {
        "task": "Clean room",
        "completed": true
      },
      {
        "task": "Eat lunch",
        "completed": true
      }
    ]
  }
}
```

### 10. Exploring GraphQL Playground 4min

- We can get a `curl` command of our query or mutation by clicking `Copy Curl` button. It will copy it to the `clipboard`

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide (master)
$ curl 'http://localhost:4000/' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-al
ive' -H 'DNT: 1' -H 'Origin: http://localhost:4000' --data-binary '{"query":"query {\n  getTodos {\n    task\n    completed\n  }\n}\n"}' --compressed
```

```bash
{"data":{"getTodos":[{"task":"Wash car","completed":false},{"task":"Clean room","completed":true},{"task":"Eat lunch","completed":true}]}}

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide (master)
```

- We can manage `Query variables` by clicking `QUERY VARIABLES`

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ExploringGraphQLPlayground.png)

- We can manage the `Http Headers` by clicking `HTTTP HEADERS`

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ExploringGraphQLPlayground2.png)

- We can add multiple `Queries` and `Mutations` by clicking the `+` button

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ExploringGraphQLPlayground3.png)

- We can export the `Schema` by clicking `SCHEMA` and the `DOWNLOAD`

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ExploringGraphQLPlayground4.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ExploringGraphQLPlayground5.png)

> instrospectionSchema.json

```json
{
  "_queryType": "Query",
  "_mutationType": "Mutation",
  "_subscriptionType": null,
  "_directives": [
    {
      "name": "cacheControl",
      "description": "",
      "locations": ["FIELD_DEFINITION", "OBJECT", "INTERFACE"],
      "args": [
        {
          "name": "maxAge",
          "description": "",
          "type": "Int"
        },
        {
          "name": "scope",
          "description": "",
          "type": "CacheControlScope"
        }
      ]
    },
    {
      "name": "skip",
      "description": "Directs the executor to skip this field or fragment when the `if` argument is true.",
      "locations": ["FIELD", "FRAGMENT_SPREAD", "INLINE_FRAGMENT"],
      "args": [
        {
          "name": "if",
          "description": "Skipped when true.",
          "type": "Boolean!"
        }
      ]
    },
    {
      "name": "include",
      "description": "Directs the executor to include this field or fragment only when the `if` argument is true.",
      "locations": ["FIELD", "FRAGMENT_SPREAD", "INLINE_FRAGMENT"],
      "args": [
        {
          "name": "if",
          "description": "Included when true.",
          "type": "Boolean!"
        }
      ]
    },
    {
      "name": "deprecated",
      "description": "Marks an element of a GraphQL schema as no longer supported.",
      "locations": ["FIELD_DEFINITION", "ENUM_VALUE"],
      "args": [
        {
          "name": "reason",
          "description": "Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted in [Markdown](https://daringfireball.net/projects/markdown/).",
          "type": "String",
          "defaultValue": "No longer supported"
        }
      ]
    }
  ],
  "astNode": null,
  "_typeMap": {
    "Query": "Query",
    "Todo": "Todo",
    "String": "String",
    "Boolean": "Boolean",
    "Mutation": "Mutation",
    "__Schema": "__Schema",
    "__Type": "__Type",
    "__TypeKind": "__TypeKind",
    "__Field": "__Field",
    "__InputValue": "__InputValue",
    "__EnumValue": "__EnumValue",
    "__Directive": "__Directive",
    "__DirectiveLocation": "__DirectiveLocation",
    "CacheControlScope": "CacheControlScope",
    "Upload": "Upload",
    "Int": "Int"
  },
  "_implementations": {}
}
```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ExploringGraphQLPlayground6.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ExploringGraphQLPlayground7.png)

> schema.graphql

```graphql
directive @cacheControl(
  maxAge: Int
  scope: CacheControlScope
) on FIELD_DEFINITION | OBJECT | INTERFACE
enum CacheControlScope {
  PUBLIC
  PRIVATE
}

type Mutation {
  addTodo(task: String, completed: Boolean): Todo
}

type Query {
  getTodos: [Todo]
}

type Todo {
  task: String
  completed: Boolean
}

# The `Upload` scalar type
 represents a file upload.
scalar Upload
```

- We can modifiy the setting by clicking on the `gear` icon.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ExploringGraphQLPlayground8.png)

> settings

```json
{
  "editor.cursorShape": "line",
  "editor.fontFamily": "'Source Code Pro', 'Consolas', 'Inconsolata', 'Droid Sans Mono', 'Monaco', monospace",
  "editor.fontSize": 14,
  "editor.reuseHeaders": true,
  "editor.theme": "dark",
  "general.betaUpdates": false,
  "prettier.printWidth": 80,
  "prettier.tabWidth": 2,
  "prettier.useTabs": false,
  "request.credentials": "omit",
  "schema.disableComments": true,
  "schema.polling.enable": true,
  "schema.polling.endpointFilter": "*localhost*",
  "schema.polling.interval": 2000,
  "tracing.hideTracingResponse": true,
  "queryPlan.hideQueryPlanResponse": true
}
```

- We can see the lastest `Queries` and `mutations` by clicking `HISTORY`

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ExploringGraphQLPlayground9.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ExploringGraphQLPlayground10.png)

## Section 4: Connect to MLab Database, Create Mongoose Models and GraphQL TypeDefs 0 / 7|54min

### 11. Create MongoDB Atlas Database, Connect to GraphQL Server 7min

- We are going to connect `MongoDB Altas`

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateMongoDBAtlasDatabaseConnectToGraphQLServer.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateMongoDBAtlasDatabaseConnectToGraphQLServer2.png)

- Connect to `cluster0`

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateMongoDBAtlasDatabaseConnectToGraphQLServer3.png)

- Modify the `server.js` to remove

- Click on `Connect your Application`

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateMongoDBAtlasDatabaseConnectToGraphQLServer4.png)

- Copy the connection String

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateMongoDBAtlasDatabaseConnectToGraphQLServer5.png)

- We need to create a new `.env` document where we are going to put the `environment variables`

> .env

```
MONGO_URI=mongodb+srv://USERNAME:PASSWORD@CLUSTERID.mongodb.net/DATABASENAME?retryWrites=true&w=majority
```

- `Note:` - this document must be added to the .gitignore file.

- We need to modify the `server.js` to connect `Mongo Atlas`

> server.js

```js
const { ApolloServer, gql } = require("apollo-server");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("DB connected"))
  .catch(error => console.error(error));

const typeDefs = gql`
  type Todo {
    task: String
    completed: Boolean
  }

  type Query {
    getTodos: [Todo]
  }
`;

const server = new ApolloServer({
  typeDefs
});

server.listen().then(({ url }) => {
  console.log(`Server listening on ${url}`);
});
```

- We can try now to run the app

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide (master)
$ npm start dev

> fullstack-vue-graphql-starter@1.0.0 start C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide
> node server.js "dev"

Server listening on http://localhost:4000/
DB connected
```

### 12. Update! Connecting to MongoDB Atlas instead of MLab 4min

### 13. Creating Mongoose Schemas 11min

- We are going to create the models for the `MongoDb`, starting by creating the new `models` folder and the `Post.js` and `User.js` model documents.

> model\User.js

```js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  avatar: {
    type: String
  },
  joinDate: {
    type: Date,
    default: Date.now
  },
  favorites: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: "Post"
  }
});

module.exports = mongoose.model("User", UserSchema);
```

> model\Post.js

```js
const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  categories: {
    type: [String],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: Number,
    default: 0
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  messages: [
    {
      messageBody: {
        type: String,
        required: true
      },
      messageDate: {
        type: Date,
        default: Date.now
      },
      messageUser: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
      }
    }
  ]
});

module.exports = mongoose.model("Post", PostSchema);
```

- We are going to modify the `server.js` to import the `models`.

> server.js

```js
const { ApolloServer, gql } = require("apollo-server");
const mongoose = require("mongoose");
require("dotenv").config();
const User = require("./models/User");
const Post = require("./models/Post");

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("DB connected"))
  .catch(error => console.error(error));

const typeDefs = gql`
  type Todo {
    task: String
    completed: Boolean
  }

  type Query {
    getTodos: [Todo]
  }
`;

const server = new ApolloServer({
  typeDefs,
  context: {
    User,
    Post
  }
});

server.listen().then(({ url }) => {
  console.log(`Server listening on ${url}`);
});
```

### 14. Creating typeDefs for Project 8min

- We are going to create the `typeDefs.gql` document that will contain the all the `typeDefs` included in the solution.

> typeDefs.glp

```graphql
type User {
  _id: ID
  username: String! @unique
  email: String!
  password: String!
  avatar: String
  joinDate: String
  favorites: [Post]
}

type Post {
  title: String!
  imageUrl: String!
  categories: [String]!
  description: String!
  createdDate: String
  likes: Int
  createdBy: User!
  messages: [Message]
}

type Message {
  _id: ID
  messageBody: String!
  messageDate: String
  messageUser: User!
}

```

- We are going to modify the `server.js` to import the `typeDefs`.

> server.js

```js
const { ApolloServer, gql } = require("apollo-server");
const mongoose = require("mongoose");
require("dotenv").config();

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "typeDefs.gql");
const typeDefs = fs.readFileSync(filePath, "utf-8");

const User = require("./models/User");
const Post = require("./models/Post");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("DB connected"))
  .catch(error => console.error(error));

const server = new ApolloServer({
  typeDefs,
  context: {
    User,
    Post
  }
});

server.listen().then(({ url }) => {
  console.log(`Server listening on ${url}`);
});
```

### 15. Write and Run signupUser Mutation 9min

- We are going to modify the `typeDefs.gql` document to include the `getUser` query and the `signupUser` mutation.

> typeDefs.gql

```graphql
type User {
  _id: ID
  username: String! @unique
  email: String!
  password: String!
  avatar: String
  joinDate: String
  favorites: [Post]
}

type Post {
  title: String!
  imageUrl: String!
  categories: [String]!
  description: String!
  createdDate: String
  likes: Int
  createdBy: User!
  messages: [Message]
}

type Message {
  _id: ID
  messageBody: String!
  messageDate: String
  messageUser: User!
}

type Query {
  getUser: User
}

type Mutation {
  signupUser(username: String!, email: String!, password: String!): User!
}
```

- We are going to create the `resolvers.js` document that is going to be used to resolve the `query` and the `mutation`.

. resolvers.js

```js
module.exports = {
  Query: {
    getUser: () => null
  },
  Mutation: {
    signupUser: async (_, { username, email, password }, { User }) => {
      const user = await User.findOne({ username });
      if (user) {
        throw new Error("User already exists");
      }
      const newUser = await new User({
        username,
        email,
        password
      }).save();
      return newUser;
    }
  }
};
```

- We are going to modify the `server.js` document to import the `resolvers` document.

> server.js

```js
const { ApolloServer, gql } = require("apollo-server");
const mongoose = require("mongoose");
require("dotenv").config();

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "typeDefs.gql");
const typeDefs = fs.readFileSync(filePath, "utf-8");
const resolvers = require("./resolvers");

const User = require("./models/User");
const Post = require("./models/Post");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("DB connected"))
  .catch(error => console.error(error));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    User,
    Post
  }
});

server.listen().then(({ url }) => {
  console.log(`Server listening on ${url}`);
});
```

- We can test now if the new mutation is working.

> request

```
mutation {
  signupUser(username: "John", email: "john@gmail.com", password: "Password") {
    _id
    username
    email
    avatar
    password
    joinDate
  }
}

```

> response

```json
{
  "data": {
    "signupUser": {
      "_id": "5d04cf30deb8673e8c38fc2d",
      "username": "John",
      "email": "john@gmail.com",
      "avatar": null,
      "password": "Password",
      "joinDate": "Sat Jun 15 2019 11:57:52 GMT+0100 (Irish Standard Time)"
    }
  }
}
```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/WriteAndRunSignupUserMutation.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/WriteAndRunSignupUserMutation2.png)

### 16. Write and Run addPost Mutation 7min

- We are going to modify the `typeDefs.gql` document to add the `addPost` mutation.

> typeDefs.gql

```graphql
type User {
  _id: ID
  username: String! @unique
  email: String!
  password: String!
  avatar: String
  joinDate: String
  favorites: [Post]
}

type Post {
  title: String!
  imageUrl: String!
  categories: [String]!
  description: String!
  createdDate: String
  likes: Int
  createdBy: User!
  messages: [Message]
}

type Message {
  _id: ID
  messageBody: String!
  messageDate: String
  messageUser: User!
}

type Query {
  getUser: User
}

type Mutation {
  addPost(
    title: String!
    imageUrl: String!
    categories: [String]!
    description: String!
    creatorId: ID!
  ): Post!
  signupUser(username: String!, email: String!, password: String!): User!
}
```

- We are also going to modify the `resolvers.js` document to add the resolver for the `addPost` mutation.

> resolvers.js

```js
module.exports = {
  Query: {
    getUser: () => null
  },
  Mutation: {
    addPost: async (
      _,
      { title, imageUrl, categories, description, creatorId },
      { Post }
    ) => {
      const newPost = await new Post({
        title,
        imageUrl,
        categories,
        description,
        createdBy: creatorId
      }).save();
      return newPost;
    },
    signupUser: async (_, { username, email, password }, { User }) => {
      const user = await User.findOne({ username });
      if (user) {
        throw new Error("User already exists");
      }
      const newUser = await new User({
        username,
        email,
        password
      }).save();
      return newUser;
    }
  }
};
```

- We are going to try to create a new `Post` using the `addPost` mutation.

> request

```graphql
mutation {
  addPost(
    title: "Mona lisa"
    imageUrl: "google.com"
    categories: ["Art"]
    description: "A painting"
    creatorId: "5d04cf30deb8673e8c38fc2d"
  ) {
    title
    imageUrl
    categories
    description
    createdDate
    likes
  }
}

```

> response

```json
{
  "data": {
    "addPost": {
      "title": "Mona lisa",
      "imageUrl": "google.com",
      "categories": ["Art"],
      "description": "A painting",
      "createdDate": "Sat Jun 15 2019 12:16:07 GMT+0100 (Irish Standard Time)",
      "likes": 0
    }
  }
}
```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/WriteAndRunAddPostMutation.png)

### 17. Write and Run getPosts Query, Intro to populate 7min

- We are going to modify the `typeDefs.gql` document to add the `getPosts` query.

> typeDefs.gql

```graphql
type User {
  _id: ID
  username: String! @unique
  email: String!
  password: String!
  avatar: String
  joinDate: String
  favorites: [Post]
}

type Post {
  title: String!
  imageUrl: String!
  categories: [String]!
  description: String!
  createdDate: String
  likes: Int
  createdBy: User!
  messages: [Message]
}

type Message {
  _id: ID
  messageBody: String!
  messageDate: String
  messageUser: User!
}

type Query {
  getPosts: [Post]
}

type Mutation {
  addPost(
    title: String!
    imageUrl: String!
    categories: [String]!
    description: String!
    creatorId: ID!
  ): Post!
  signupUser(username: String!, email: String!, password: String!): User!
}

```

- We are also going to modify the `resolvers.js` document to add the resolver for the `getPosts` query.

> resolvers.js

```js
module.exports = {
  Query: {
    getPosts: async (_, args, { Post }) => {
      const posts = await Post.find({})
        .sort({ createdDate: "desc" })
        .populate({
          path: "createdBy",
          model: "User"
        });
      return posts;
    }
  },
  Mutation: {
    addPost: async (
      _,
      { title, imageUrl, categories, description, creatorId },
      { Post }
    ) => {
      const newPost = await new Post({
        title,
        imageUrl,
        categories,
        description,
        createdBy: creatorId
      }).save();
      return newPost;
    },
    signupUser: async (_, { username, email, password }, { User }) => {
      const user = await User.findOne({ username });
      if (user) {
        throw new Error("User already exists");
      }
      const newUser = await new User({
        username,
        email,
        password
      }).save();
      return newUser;
    }
  }
};
```

- We are going to try to check if the new `getPosts` query works properly.

> request

```graphql
query {
  getPosts {
    title
    imageUrl
    categories
    description
    createdDate
    likes
    createdBy {
      _id
      username
      email
      avatar
      password
      joinDate
    }
  }
}

```

> response

```json
{
  "data": {
    "getPosts": [
      {
        "title": "Mona lisa",
        "imageUrl": "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.readingpublicmuseum.org%2Fexhibit_secrets-of-mona-lisa-4.jpg&f=1",
        "categories": ["Art"],
        "description": "A painting",
        "createdDate": "Sat Jun 15 2019 12:16:07 GMT+0100 (Irish Standard Time)",
        "likes": 0,
        "createdBy": {
          "_id": "5d04cf30deb8673e8c38fc2d",
          "username": "John",
          "email": "john@gmail.com",
          "avatar": null,
          "password": "Password",
          "joinDate": "Sat Jun 15 2019 11:57:52 GMT+0100 (Irish Standard Time)"
        }
      }
    ]
  }
}
```

## Section 5: Create Vue Frontend with Vue CLI 3 0 / 8|57min

### 18. Create Vue Client with Vue-CLI 3 8min

- We are goinf to use [Vue CLI 3](https://cli.vuejs.org/) to create our Vuw Client

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateVueClientWithVueCli3.png)

- We need to ensure we have `Node.js` version 8.9 or above (8.11.0+ recommended).

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide (master)
$ node --versionv11.13.0
```

- We can install the tool globally by executing `npm install -g @vue/cli`:

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide (master)
$ npm install -g @vue/cli
C:\Users\juan.pablo.perez\AppData\Roaming\npm\vue -> C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\@vue\cli\bin\vue.js

> core-js@3.1.4 postinstall C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\@vue\cli\node_modules\core-js
> node scripts/postinstall || echo "ignore"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon: 
> https://opencollective.com/core-js 
> https://www.patreon.com/zloirock 

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> core-js-pure@3.1.4 postinstall C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\@vue\cli\node_modules\core-js-pure
> node scripts/postinstall || echo "ignore"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon: 
> https://opencollective.com/core-js 
> https://www.patreon.com/zloirock 

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> protobufjs@6.8.8 postinstall C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\@vue\cli\node_modules\protobufjs
> node scripts/postinstall


> nodemon@1.19.1 postinstall C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\@vue\cli\node_modules\nodemon
> node bin/postinstall || exit 0

Love nodemon? You can now support the project via the open collective:
 > https://opencollective.com/nodemon/donate

npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\@vue\cli\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ @vue/cli@3.8.4
added 807 packages from 541 contributors in 222.37s
```

- We can run the `Vue CLI User Interface` by executing `vue ui`

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide (master)
$ vue ui
�  Starting GUI...
�  Ready on http://localhost:8001
```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateVueClientWithVueCli32.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateVueClientWithVueCli33.png)

- Put `client` for `Project folder`, `npm` for `Package manager`, unselect `Initilize git repository (recommender)` for `Git repository` and click on `Next`

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateVueClientWithVueCli34.png)

- Select `Manual` for `Select a preset` and click on `Next`

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateVueClientWithVueCli35.png)

- Select `Router`, `Vuex`, unselect `Linter / Formatter` and click on `Next`

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateVueClientWithVueCli36.png)

- Select `Use history moder for Router` and click on `Create Project`

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateVueClientWithVueCli37.png)

- Click on `Continue without saving`

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateVueClientWithVueCli38.png)

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide (master)
$ vue ui
�  Starting GUI...
�  Ready on http://localhost:8001
✨  Creating project in C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide\client.
⚓  Running completion hooks...
�  Generating README.md...
```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateVueClientWithVueCli39.png)

```
INFO
Vue CLI v3.8.4
15/06/2019, 16:02:34
🌠  Ready on http://localhost:8001
15/06/2019, 16:02:36
INFO
⚙  Installing CLI plugins. This might take a while...
15/06/2019, 16:41:27
INFO
> yorkie@2.0.0 install C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide\client\node_modules\yorkie
> node bin/install.js
15/06/2019, 16:44:56
INFO
setting up Git hooks
15/06/2019, 16:44:56
INFO
can't find .git directory, skipping Git hooks installation
15/06/2019, 16:44:56
INFO
> core-js@2.6.9 postinstall C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide\client\node_modules\core-js
> node scripts/postinstall || echo "ignore"
15/06/2019, 16:44:57
INFO
added 1078 packages from 891 contributors and audited 18077 packages in 206.891s
15/06/2019, 16:45:02
INFO
found 0 vulnerabilities
15/06/2019, 16:45:02
INFO
🚀  Invoking generators...
15/06/2019, 16:45:02
INFO
📦  Installing additional dependencies...
15/06/2019, 16:45:04
INFO
added 4 packages from 1 contributor and audited 18083 packages in 30.472s
15/06/2019, 16:45:38
INFO
found 0 vulnerabilities
15/06/2019, 16:45:38
INFO
🎉  Successfully created project client.
15/06/2019, 16:45:39
```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateVueClientWithVueCli310.png)

### 19. Adding Plugins with Vue GUI and Concurrently Dev Script 4min

- If we click on `plugins` we can see the plugins already installed.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddingPluginsWithVueGuiAndConcurrentlyDevScript.png)

- If we click on `+Add plugin` we can see a list of available `plugins`

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddingPluginsWithVueGuiAndConcurrentlyDevScript2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddingPluginsWithVueGuiAndConcurrentlyDevScript3.png)

- We missed adding Vuex, so we can do it by clicking on `Add Vuex` button.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddingPluginsWithVueGuiAndConcurrentlyDevScript4.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddingPluginsWithVueGuiAndConcurrentlyDevScript5.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddingPluginsWithVueGuiAndConcurrentlyDevScript6.png)

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide/client (master)
$ vue ui
�  Starting GUI...
�  Ready on http://localhost:8001

�  Invoking generator for core:vuex...
�  Installing additional dependencies...

added 1 package from 1 contributor and audited 18084 packages in 26.979s
found 0 vulnerabilities

✔  Successfully invoked generator for plugin: core:vuex
   The following files have been updated / added:

     .gitignore
     README.md
     babel.config.js
     package-lock.json
     package.json
     public/favicon.ico
     public/index.html
     src/App.vue
     src/assets/logo.png
     src/components/HelloWorld.vue
     src/main.js
     src/router.js
     src/store.js
     src/views/About.vue
     src/views/Home.vue

   You should review these changes with git diff and commit them.
```

- We need to modify the `package.json` to the `client` script from `cd client && npm start` to `cd client && npm run serve` because it is how the script is called on the  `client package.json` document.

> package.json
```json
{
  "name": "fullstack-vue-graphql-starter",
  "version": "1.0.0",
  "description": "Starter for Full-Stack Vue-GraphQL-Apollo Projects",
  "main": "server.js",
  "scripts": {
    "server": "nodemon server.js",
    "client": "cd client && npm serve",
    "dev": "concurrently --names \"server,client\" \"npm run server --silent\" \"npm run client --silent\""
  },
  "keywords": [],
  "author": "Reed Barger",
  "license": "ISC",
  "dependencies": {
    "apollo-server": "^2.0.0-rc.7",
    "bcrypt": "^3.0.0",
    "dotenv": "^6.0.0",
    "graphql": "^0.13.2",
    "jsonwebtoken": "^8.3.0",
    "md5": "^2.2.1",
    "mongoose": "^5.2.6"
  },
  "devDependencies": {
    "concurrently": "^3.6.0",
    "nodemon": "^1.18.1"
  }
}

```

> client\package.json
```json
{
  "name": "client",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build"
  },
  "dependencies": {
    "core-js": "^2.6.5",
    "vue": "^2.6.10",
    "vue-router": "^3.0.3"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "^3.8.0",
    "@vue/cli-service": "^3.8.0",
    "vue-template-compiler": "^2.6.10"
  },
  "postcss": {
    "plugins": {
      "autoprefixer": {}
    }
  },
  "browserslist": [
    "> 1%",
    "last 2 versions"
  ]
}
```

- If we execute `npm run dev`, both `server` and `client` are going to be executed together.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide (master)
$ npm run dev

> fullstack-vue-graphql-starter@1.0.0 dev C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide
> concurrently --names "server,client" "npm run server --silent" "npm run client --silent"

[server] [nodemon] 1.19.1
[server] [nodemon] to restart at any time, enter `rs`
[server] [nodemon] watching: *.*
[server] [nodemon] starting `node server.js`
[client]  INFO  Starting development server...
[server] Server listening on http://localhost:4000/
[server] DB connected
[client]  98% after emitting CopyPlugin DONE  Compiled successfully in 7344ms5:17:19 PM

[client]
[client]   App running at:
[client]   - Local:   http://localhost:8080/
[client]   - Network: http://192.168.1.49:8080/
[client]
[client]   Note that the development build is not optimized.
[client]   To create a production build, run npm run build.
[client]
```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddingPluginsWithVueGuiAndConcurrentlyDevScript7.png)


### 20. Structuring our Vue App 4min

- We are going to modify the `client\src\App.vue`

> client\src\App.vue
```html
<template>
  <div>
    <h1>App</h1>
    <router-view />
  </div>
</template>
```

- We are going to move the `client\src\views\Home.vue` to `client\src\components\Home.vue` and then remove the `client\src\views` folder. We are also going to remove the `src\assets` folder and the `src\components\HelloWorld.vue` document.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/StructuringOurVueApp.png)

- We are going to modify the `client\src\components\Home.vue` document

> client\src\components\Home.vue
```html
<template>
  <div>
    <h1>Home</h1>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

```

- The `client\src\main.js` document is fine.

> client\src\main.js
```js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

```

- We are going to modify the `client\src\router.js` document.

> `client\src\router.js`
```js
import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    }
  ]
});
```

- The `client\src\store.js` document is fine.

> client\src\store.js
```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
```
- We can check if everything works correctly.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide (master)
$ npm run dev

> fullstack-vue-graphql-starter@1.0.0 dev C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide
> concurrently --names "server,client" "npm run server --silent" "npm run client --silent"

[server] [nodemon] 1.19.1
[server] [nodemon] to restart at any time, enter `rs`
[server] [nodemon] watching: *.*
[server] [nodemon] starting `node server.js`
[client]  INFO  Starting development server...
[server] Server listening on http://localhost:4000/
[server] DB connected
[client]  98% after emitting CopyPlugin DONE  Compiled successfully in 4890ms5:35:51 PM

[client]
[client]   App running at:
[client]   - Local:   http://localhost:8080/
[client]   - Network: http://192.168.1.49:8080/
[client]
[client]   Note that the development build is not optimized.
[client]   To create a production build, run npm run build.
```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/StructuringOurVueApp2.png)

### 21. Installing Vuetify Plugin and Generating a Theme 10min

- We are going to use the [Vuetify]() Material Design Component Framework.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/InstallingVuetifyPluginAndGeneratingATheme.png)

- We can go to [Vue UI](https://vuetifyjs.com/en/getting-started/quick-start#vue-ui) to see how we can install `Vuetify` by using `Vue CLI-3`

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/InstallingVuetifyPluginAndGeneratingATheme2.png)

- We are going to install it by using the `vue add vuetify` command.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide (master)
$ cd client

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide/client (master)
$ vue add vuetify

�  Installing vue-cli-plugin-vuetify...

+ vue-cli-plugin-vuetify@0.5.0
added 1 package from 1 contributor and audited 18085 packages in 25.338s
found 0 vulnerabilities

✔  Successfully installed plugin: vue-cli-plugin-vuetify
```

```bash
? Choose a preset: Default (recommended)

�  Invoking generator for vue-cli-plugin-vuetify...
�  Installing additional dependencies...

added 11 packages from 49 contributors and audited 18123 packages in 47.879s
found 0 vulnerabilities

⚓  Running completion hooks...

✔  Successfully invoked generator for plugin: vue-cli-plugin-vuetify
   The following files have been updated / added:

     .gitignore
     README.md
     babel.config.js
     package-lock.json
     package.json
     public/favicon.ico
     public/index.html
     src/App.vue
     src/assets/logo.svg
     src/components/HelloWorld.vue
     src/components/Home.vue
     src/main.js
     src/plugins/vuetify.js
     src/router.js
     src/store.js
     src/views/Home.vue

   You should review these changes with git diff and commit them.

```

- We can see the `client\src\plugins\vuetify.js` has been added.

> client\src\plugins\vuetify.js
```bash
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
})

```

- The `client\public\index.html` has been modified:

```bash
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <title>client</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons">
  </head>
  <body>
    <noscript>
      <strong>We're sorry but client doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>

```

- We can use the [VUETIFYTHEME GENERATOR](https://theme-generator.vuetifyjs.com/) tool to generate a `theme` for our application.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/InstallingVuetifyPluginAndGeneratingATheme3.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/InstallingVuetifyPluginAndGeneratingATheme4.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/InstallingVuetifyPluginAndGeneratingATheme5.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/InstallingVuetifyPluginAndGeneratingATheme6.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/InstallingVuetifyPluginAndGeneratingATheme7.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/InstallingVuetifyPluginAndGeneratingATheme8.png)


- We are going to modify the `client\src\plugins\vuetify.js` document to add the `theme` colours`.

> client\src\plugins\vuetify.js
```bash
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: "#3B125F",
    secondary: "#8B5FBF",
    accent: "#BF653F",
    error: "#722530",
    warning: "#A37513",
    info: "#396893",
    success: "#4caf50"
  }
})
```

- We are going to modify the `client\src\components\Home.vue` document to add a button to see if the new `theme` works.

> client\src\components\Home.vue
```html
<template>
  <div>
    <h1>Home</h1>
    <v-btn color="primary">Button</v-btn>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>
```

- We are going to modify the `client\src\App.vue` document to put the mandatory `<v-app>` html tag.

> client\src\components\Home.vue
```html
<template>
  <v-app>
    <h1>App</h1>
    <router-view />
  </v-app>
</template>
```

- We can test if it works.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/InstallingVuetifyPluginAndGeneratingATheme9.png)

### 22. Coolors.co for Creating Great Color Schemes (Optional) 4min

- We can also use [Coolors](https://coolors.co/), `The super fast color schemes generator!`

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CoolorsCoForCreatingGreatColorSchemes.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CoolorsCoForCreatingGreatColorSchemes2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CoolorsCoForCreatingGreatColorSchemes3.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CoolorsCoForCreatingGreatColorSchemes4.png)

> palette.scss
```css
/* HSL */
$color1: hsla(215%, 64%, 86%, 1);
$color2: hsla(129%, 15%, 45%, 1);
$color3: hsla(30%, 38%, 82%, 1);
$color4: hsla(161%, 40%, 70%, 1);
$color5: hsla(153%, 57%, 70%, 1);

/* RGB */
$color1: rgba(196, 215, 242, 1);
$color2: rgba(97, 130, 102, 1);
$color3: rgba(226, 208, 190, 1);
$color4: rgba(148, 209, 190, 1);
$color5: rgba(134, 222, 183, 1);
```

### 23. Horizontal Navbar and Mobile First Design 12min

- We are going to modify the `client\src\App.vue` document to create the layout for our app using `Vuetify`

> client\src\App.vue 
```html
<template>
  <v-app>
    <!-- Horizontal Navbar -->
    <v-toolbar
      fixed
      color="primary"
      dark
    >
      <!-- App Title -->
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-xs-only">
        <router-link
          to="/"
          tag="span"
          style="cursor: pointer"
        >
          VueShare
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Search Input -->
      <v-text-field
        flex
        prepend-icon="search"
        placeholder="Search posts"
        color="accent"
        single-line
        hide-details
      ></v-text-field>

      <v-spacer></v-spacer>

      <!-- Horizontal Navbar Links -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in horizontalNavItems"
          :key="item.title"
          :to="item.link"
        >
          <v-icon
            class="hidden-sm-only"
            left
          >{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <!-- App Content -->
    <main>
      <v-container class="mt-4">
        <router-view />
      </v-container>
    </main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  computed: {
    horizontalNavItems() {
      return [
        { icon: "chat", title: "Posts", link: "/posts" },
        { icon: "lock_open", title: "Sign In", link: "/signin" },
        { icon: "create", title: "Sign Up", link: "/signup" }
      ];
    }
  }
};
</script>
```

- We are also going to modify the `client\src\components\Home.vue` document to put the component inside a `<v-container>` Vuetify tag.

> client\src\components\Home.vue
```html
<template>
  <v-container>
    <h1>Home</h1>
  </v-container>
</template>

<script>
export default {
  name: "home"
};
</script>
```

- We are going to test if it works.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/HorizontalNavbarAndMobileFirstDesign.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/HorizontalNavbarAndMobileFirstDesign2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/HorizontalNavbarAndMobileFirstDesign3.png)

### 24. Add Side Navbar 7min

- We are going to modify the `client\src\App.vue` document to add a `Side Navbar`p using `Vuetify`

> client\src\App.vue 
```html
<template>
  <v-app style="background: #E3E3EE">
    <!-- Side Navbar -->
    <v-navigation-drawer app temporary fixed v-model="sideNav">
      <v-toolbar color="accent" dark flat>
        <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
        <router-link to="/" tag="span" style="cursor: pointer">
          <h1 class="title pl-3">VueShare</h1>
        </router-link>
      </v-toolbar>

      <v-divider></v-divider>

      <!-- Side Navbar Links -->
      <v-list>
        <v-list-tile ripple v-for="item in sideNavItems" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{item.title}}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- Horizontal Navbar -->
    <v-toolbar fixed color="primary" dark>
      <!-- App Title -->
      <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-xs-only">
        <router-link to="/" tag="span" style="cursor: pointer">
          VueShare
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Search Input -->
      <v-text-field flex prepend-icon="search" placeholder="Search posts" color="accent" single-line hide-details></v-text-field>

      <v-spacer></v-spacer>

      <!-- Horizontal Navbar Links -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in horizontalNavItems" :key="item.title" :to="item.link">
          <v-icon class="hidden-sm-only" left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <!-- App Content -->
    <main>
      <v-container class="mt-4">
        <router-view/>
      </v-container>
    </main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      sideNav: false
    };
  },
  computed: {
    horizontalNavItems() {
      return [
        { icon: "chat", title: "Posts", link: "/posts" },
        { icon: "lock_open", title: "Sign In", link: "/signin" },
        { icon: "create", title: "Sign Up", link: "/signup" }
      ];
    },
    sideNavItems() {
      return [
        { icon: "chat", title: "Posts", link: "/posts" },
        { icon: "lock_open", title: "Sign In", link: "/signin" },
        { icon: "create", title: "Sign Up", link: "/signup" }
      ];
    }
  },
  methods: {
    toggleSideNav() {
      this.sideNav = !this.sideNav;
    }
  }
};
</script>
```

- We are going to check if it works properly.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddSideNavbar.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddSideNavbar2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddSideNavbar3.png)

### 25. Add Routing and Page Transitions 9min

- We are going to create the `client\src\components\Auth` folder with the `Profile.vue`, `Signin.vue` and `Signup.vue` documents inside.

> client\src\components\Auth\Profile.vue
```html
<template>
  <v-container>
    <h1>Profile</h1>
  </v-container>
</template>

<script>
export default {
  name: "Profile"
};
</script>

```

> client\src\components\Auth\Signin.vue
```html
<template>
  <v-container>
    <h1>Signin</h1>
  </v-container>
</template>

<script>
export default {
  name: "Signin"
};
</script>

```

> client\src\components\Auth\Signup.vue
```html
<template>
  <v-container>
    <h1>Signup</h1>
  </v-container>
</template>

<script>
export default {
  name: "Signup"
};
</script>
```

- We are also going to create the `client\src\components\Posts` folder with the `AddPost.vue` and `Posts.vue` documents inside.


> client\src\components\Posts\AddPost.vue
```html
<template>
  <v-container>
    <h1>Add Post</h1>
  </v-container>
</template>

<script>
export default {
  name: "AddPost"
};
</script>

```

> client\src\components\Posts\Posts.vue
```html
<template>
  <v-container>
    <h1>Posts</h1>
  </v-container>
</template>

<script>
export default {
  name: "Posts"
};
</script>
```

- We need to modify the `client\router.js` to include the new `components`

> client\router.js

```js
import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";

import AddPost from './components/Posts/AddPost.vue'
import Posts from './components/Posts/Posts.vue'

import Profile from './components/Auth/Profile.vue'
import Signin from './components/Auth/Signin.vue'
import Signup from './components/Auth/Signup.vue'

Vue.use(Router);

export default new Router({
  mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/posts",
      name: "Posts",
      component: Posts
    },
    {
      path: "/post/add",
      name: "AddPost",
      component: AddPost
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile
    },
    {
      path: "/signin",
      name: "Signin",
      component: Signin
    },
    {
      path: "/Signup",
      name: "Signup",
      component: Signup
    }
  ]
});

```

- We are going to modify the `client\src\App.vue` document to add `Page Transitions`

> client\src\App.vue 
```html
<template>
  <v-app style="background: #E3E3EE">
    <!-- Side Navbar -->
    <v-navigation-drawer app temporary fixed v-model="sideNav">
      <v-toolbar color="accent" dark flat>
        <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
        <router-link to="/" tag="span" style="cursor: pointer">
          <h1 class="title pl-3">VueShare</h1>
        </router-link>
      </v-toolbar>

      <v-divider></v-divider>

      <!-- Side Navbar Links -->
      <v-list>
        <v-list-tile ripple v-for="item in sideNavItems" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{item.title}}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- Horizontal Navbar -->
    <v-toolbar fixed color="primary" dark>
      <!-- App Title -->
      <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-xs-only">
        <router-link to="/" tag="span" style="cursor: pointer">
          VueShare
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Search Input -->
      <v-text-field flex prepend-icon="search" placeholder="Search posts" color="accent" single-line hide-details></v-text-field>

      <v-spacer></v-spacer>

      <!-- Horizontal Navbar Links -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in horizontalNavItems" :key="item.title" :to="item.link">
          <v-icon class="hidden-sm-only" left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <!-- App Content -->
    <main>
      <v-container class="mt-4">
        <transition name="fade">
          <router-view/>
        </transition>
      </v-container>
    </main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      sideNav: false
    };
  },
  computed: {
    horizontalNavItems() {
      return [
        { icon: "chat", title: "Posts", link: "/posts" },
        { icon: "lock_open", title: "Sign In", link: "/signin" },
        { icon: "create", title: "Sign Up", link: "/signup" }
      ];
    },
    sideNavItems() {
      return [
        { icon: "chat", title: "Posts", link: "/posts" },
        { icon: "lock_open", title: "Sign In", link: "/signin" },
        { icon: "create", title: "Sign Up", link: "/signup" }
      ];
    }
  },
  methods: {
    toggleSideNav() {
      this.sideNav = !this.sideNav;
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
```

- We can now test if it works.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddRoutingAndPageTransitions.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddRoutingAndPageTransitions2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddRoutingAndPageTransitions3.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddRoutingAndPageTransitions4.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddRoutingAndPageTransitions5.png)

## Section 6: Using Vue Apollo 0 / 4|24min

### 26. Setting up Apollo Client / Vue Apollo, Firing getPosts Query from Client 8min

- We need to install the `apollo-boost` and the `vue-apollo` packages.

```bash
juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide/client (master)
$ npm i apollo-boost vue-apollo
npm WARN apollo-boost@0.4.3 requires a peer of graphql@^0.11.0 || ^0.12.0 || ^0.13.0 || ^14.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN apollo-link@1.2.12 requires a peer of graphql@^0.11.3 || ^0.12.3 || ^0.13.0 || ^14.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN graphql-tag@2.10.1 requires a peer of graphql@^0.9.0 || ^0.10.0 || ^0.11.0 || ^0.12.0 || ^0.13.0 || ^14.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN apollo-link-http@1.5.15 requires a peer of graphql@^0.11.0 || ^0.12.0 || ^0.13.0 || ^14.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN apollo-cache-inmemory@1.6.2 requires a peer of graphql@0.11.7 || ^0.12.0 || ^0.13.0 || ^14.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN apollo-client@2.6.3 requires a peer of graphql@^0.11.0 || ^0.12.0 || ^0.13.0 || ^14.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN apollo-utilities@1.3.2 requires a peer of graphql@^0.11.0 || ^0.12.0 || ^0.13.0 || ^14.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN apollo-link-http-common@0.2.14 requires a peer of graphql@^0.11.0 || ^0.12.0 || ^0.13.0 || ^14.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ apollo-boost@0.4.3
+ vue-apollo@3.0.0-rc.1
added 20 packages from 22 contributors and audited 18290 packages in 46.13s
found 0 vulnerabilities
```

- We need tp modify the `client/main.js` document to set up the use of Apollo.

> client/main.js
```js
import "@babel/polyfill";
import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";

Vue.use(VueApollo);

// Setup ApolloClient
const defaultClient = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const apolloProvider = new VueApollo({ defaultClient });

Vue.config.productionTip = false;

new Vue({
  apolloProvider,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
```

- We are going to modify the `client/components/Home.vue` document to include all the `posts`

> client/components/Home.vue
```html
<template>
  <v-container>
    <h1>Home</h1>
    <ul v-for="post in getPosts" :key="post._id">
      <li>
        {{post.title}} {{post.imageUrl}} {{post.description}}
      </li>
      <li>{{post.likes}}</li>
    </ul>
  </v-container>
</template>

<script>
import { gql } from "apollo-boost";

export default {
  name: "home",
  apollo: {
    getPosts: {
      query: gql`
        query {
          getPosts {
            _id
            title
            imageUrl
            description
            likes
          }
        }
      `
    }
  }
};
</script>
```

- We need to modify the `typeDefs.gpl` document to include the `Id` field for the `Post` type.

> typeDefs.gpl
```graphql
type User {
  _id: ID
  username: String! @unique
  email: String!
  password: String!
  avatar: String
  joinDate: String
  favorites: [Post]
}

type Post {
  _id: ID
  title: String!
  imageUrl: String!
  categories: [String]!
  description: String!
  createdDate: String
  likes: Int
  createdBy: User!
  messages: [Message]
}

type Message {
  _id: ID
  messageBody: String!
  messageDate: String
  messageUser: User!
}

type Query {
  getPosts: [Post]
}

type Mutation {
  addPost(
    title: String!
    imageUrl: String!
    categories: [String]!
    description: String!
    creatorId: ID!
  ): Post!
  signupUser(username: String!, email: String!, password: String!): User!
}
```

- We need to check if everything works properly

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SettingUpApolloClientVueApollo.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SettingUpApolloClientVueApollo2.png)

### 27. Dive into Smart Queries in Vue Components 7min

- We can change the `\client\src\components\Home.vue` document to make a `loading...` test show when `Apollo` is getting the information from the Server.

> \client\src\components\Home.vue
```html
<template>
  <v-container>
    <h1>Home</h1>
    <div v-if="$apollo.loading">loading...</div>
    <ul v-else v-for="post in getPosts" :key="post._id">
      <li>
        {{post.title}} {{post.imageUrl}} {{post.description}}
      </li>
      <li>{{post.likes}}</li>
    </ul>
  </v-container>
</template>

<script>
import { gql } from "apollo-boost";

export default {
  name: "home",
  apollo: {
    getPosts: {
      query: gql`
        query {
          getPosts {
            _id
            title
            imageUrl
            description
            likes
          }
        }
      `
    }
  }
};
</script>

```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/DiveIntoSmartQueries.png)

- We can use the `result` method of `Apollo` to get information from the response and store it in a `Vue.JS` property. There are some other methods like `networkStatus`.

> \client\src\components\Home.vue
```html
<template>
  <v-container>
    <h1>Home</h1>
    <div v-if="$apollo.loading">loading...</div>
    <ul v-else v-for="post in getPosts" :key="post._id">
      <li>
        {{post.title}} {{post.imageUrl}} {{post.description}}
      </li>
      <li>{{post.likes}}</li>
    </ul>
  </v-container>
</template>

<script>
import { gql } from "apollo-boost";

export default {
  name: "home",
  data() {
    return {
      posts: []
    }
  },
  apollo: {
    getPosts: {
      query: gql`
        query {
          getPosts {
            _id
            title
            imageUrl
            description
            likes
          }
        }
      `,
      result({ data, loading, networkStatus }) {
        if (!loading) {
          this.posts = data.getPosts;
          console.log('[networkStatus]', networkStatus)
        }
      }
    }
  }
};
</script>

```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/DiveIntoSmartQueries2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/DiveIntoSmartQueries3.png)

- We can see all the arguments of the `result` method by puting their object to the console.

> \client\src\components\Home.vue
```html
<template>
  <v-container>
    <h1>Home</h1>
    <div v-if="$apollo.loading">loading...</div>
    <ul v-else v-for="post in getPosts" :key="post._id">
      <li>
        {{post.title}} {{post.imageUrl}} {{post.description}}
      </li>
      <li>{{post.likes}}</li>
    </ul>
  </v-container>
</template>

<script>
import { gql } from "apollo-boost";

export default {
  name: "home",
  data() {
    return {
      posts: []
    }
  },
  apollo: {
    getPosts: {
      query: gql`
        query {
          getPosts {
            _id
            title
            imageUrl
            description
            likes
          }
        }
      `,
      result(args) {
        console.log(args)
      }
    }
  }
};
</script>

```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/DiveIntoSmartQueries4.png)

- We have another method called `error` where we can obtain all the errors that can happen when executing the `GraphQL` query.

> \client\src\components\Home.vue
```html
<template>
  <v-container>
    <h1>Home</h1>
    <div v-if="$apollo.loading">loading...</div>
    <ul v-else v-for="post in getPosts" :key="post._id">
      <li>
        {{post.title}} {{post.imageUrl}} {{post.description}}
      </li>
      <li>{{post.likes}}</li>
    </ul>
  </v-container>
</template>

<script>
import { gql } from "apollo-boost";

export default {
  name: "home",
  data() {
    return {
      posts: []
    }
  },
  apollo: {
    getPosts: {
      query: gql`
        query {
          getPosts {
            _id
            title
            imageUrl
            description
            likes
          }
        }
      `,
      result(args) {
        console.log(args)
      },
      error(err) {
        console.log('[ERROR!!]', err)
        console.dir(err)
      }
    }
  }
};
</script>

```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/DiveIntoSmartQueries5.png)

- We can get more information in [Apollo and GraphQL for Vue.js](https://github.com/Akryum/vue-apollo)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/DiveIntoSmartQueries6.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/DiveIntoSmartQueries7.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/DiveIntoSmartQueries8.png)


### 28. Executing Queries with the ApolloQuery Component 6min

- We have another way of executing Queries and it is by using the `ApolloQuer`y` Component.

> \client\src\components\Home.vue
```html
<template>
  <v-container>
    <h1>Home</h1>
    <ApolloQuery :query="getPostsQuery">
      <template slot-scope="{ result: { loading, data} }">
        <div v-if="loading">loading...</div>
        <ul
          v-else
          v-for="post in data.getPosts"
          :key="post._id"
        >
          <li>
            {{post.title}} {{post.imageUrl}} {{post.description}}
          </li>
          <li>{{post.likes}}</li>
        </ul>
      </template>
    </ApolloQuery>

  </v-container>
</template>

<script>
import { gql } from "apollo-boost";

export default {
  name: "home",
  data() {
    return {
      getPostsQuery: gql`
        query {
          getPosts {
            _id
            title
            imageUrl
            description
            likes
          }
        }
      `
    };
  }
};
</script>

```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ExecutingQueriesWithTheApolloQueryComponent.png)

- We can even manage the errors.

> \client\src\components\Home.vue
```html
<template>
  <v-container>
    <h1>Home</h1>
    <ApolloQuery :query="getPostsQuery">
      <template slot-scope="{ result: { loading, error, data } }">
        <div v-if="loading">loading...</div>
        <div v-else-if="error">Error! {{error.message}}</div>
        <ul
          v-else
          v-for="post in data.getPosts"
          :key="post._id"
        >
          <li>
            {{post.title}} {{post.imageUrl}} {{post.description}}
          </li>
          <li>{{post.likes}}</li>
        </ul>
      </template>
    </ApolloQuery>

  </v-container>
</template>

<script>
import { gql } from "apollo-boost";

export default {
  name: "home",
  data() {
    return {
      getPostsQuery: gql`
        query {
          getPost {
            _id
            title
            imageUrl
            description
            likes
          }
        }
      `
    };
  }
};
</script>

```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ExecutingQueriesWithTheApolloQueryComponent2.png)

- We can also obtain the `Network Status`

> \client\src\components\Home.vue
```html
<template>
  <v-container>
    <h1>Home</h1>
    <ApolloQuery :query="getPostsQuery">
      <template slot-scope="{ result: { loading, error, data, networkStatus } }">
        <div v-if="loading">loading...</div>
        <div v-else-if="error">Error! {{error.message}}</div>
        <div v-else-if="networkStatus">Network Status: {{networkStatus}}</div>
        <ul
          v-else
          v-for="post in data.getPosts"
          :key="post._id"
        >
          <li>
            {{post.title}} {{post.imageUrl}} {{post.description}}
          </li>
          <li>{{post.likes}}</li>
        </ul>
      </template>
    </ApolloQuery>

  </v-container>
</template>

<script>
import { gql } from "apollo-boost";

export default {
  name: "home",
  data() {
    return {
      getPostsQuery: gql`
        query {
          getPosts {
            _id
            title
            imageUrl
            description
            likes
          }
        }
      `
    };
  }
};
</script>

```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ExecutingQueriesWithTheApolloQueryComponent3.png)

### 29. Add Carousel Component to Home Page 3min

- We are going to use the `Corousel Vuetify` components.

> \client\src\components\Home.vue
```html
<template>
  <v-container text-xs-center v-if="getPosts">
    <v-flex xs12>
      <v-carousel v-bind="{ 'cycle': true }" interval="3000">
        <v-carousel-item v-for="post in getPosts" :key="post._id" :src="post.imageUrl">
          <h1 id="carousel__title">{{post.title}}</h1>
        </v-carousel-item>
      </v-carousel>
    </v-flex>
  </v-container>
</template>

<script>
import { gql } from "apollo-boost";

export default {
  name: "home",
  apollo: {
    getPosts: {
      query: gql`
        query {
          getPosts {
            _id
            title
            imageUrl
            description
            likes
          }
        }
      `
    }
  }
};
</script>

<style>
#carousel__title {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 5px 5px 0 0;
  padding: 0.5em;
  margin: 0 auto;
  bottom: 50px;
  left: 0;
  right: 0;
}
</style>

```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddCarouselComponentToHomePage.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddCarouselComponentToHomePage2.png)

## Section 7: Integrate Vuex with ApolloClient 0 / 4|23min

### 30. Firing getPosts Action with Vuex 7min

- We are going to modify the `Home.Vue` component, the `main.js` main document and the `store.js` store document to use the Vuex store to call the `GraphQL getPosts` query.

> client\src\main.js
```js
import "@babel/polyfill";
import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";

Vue.use(VueApollo);

// Setup ApolloClient
export const defaultClient = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const apolloProvider = new VueApollo({ defaultClient });

Vue.config.productionTip = false;

new Vue({
  apolloProvider,
  router,
  store,
  render: h => h(App)
}).$mount("#app");

```

> client\src\store.js
```js
import Vue from "vue";
import Vuex from "vuex";

import { gql } from "apollo-boost";
import { defaultClient as apolloClient } from "./main";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    getPosts: () => {
      // use ApolloClient to fire getPosts query
      apolloClient
        .query({
          query: gql`
            query {
              getPosts {
                _id
                title
                imageUrl
              }
            }
          `
        })
        .then(data => {
          console.log(data);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
});

```

> client\src\components\Home.vue
```html
<template>
  <v-container text-xs-center v-if="getPosts">
    <!-- <v-flex xs12>
      <v-carousel v-bind="{ 'cycle': true }" interval="3000">
        <v-carousel-item v-for="post in getPosts" :key="post._id" :src="post.imageUrl">
          <h1 id="carousel__title">{{post.title}}</h1>
        </v-carousel-item>
      </v-carousel>
    </v-flex> -->
  </v-container>
</template>

<script>
// import { gql } from "apollo-boost";

export default {
  name: "home",
  created() {
    this.handleGetCarouselPosts();
  },
  methods: {
    handleGetCarouselPosts() {
      // reach out to Vuex store, fire action that gets posts for carousel
      this.$store.dispatch("getPosts");
    }
  }
};
</script>

<style>
#carousel__title {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 5px 5px 0 0;
  padding: 0.5em;
  margin: 0 auto;
  bottom: 50px;
  left: 0;
  right: 0;
}
</style>

```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/FiringGetPostsActionWithVuex.png)

### 31. Using Mutations and Getters 8min

- We are going to modify the `Home.Vue` component and the `store.js` store document again to set up properly the reading of the posts using the store.

> client\src\store.js
```js
import Vue from "vue";
import Vuex from "vuex";

import { gql } from "apollo-boost";
import { defaultClient as apolloClient } from "./main";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    setPosts: (state, payload) => {
      state.posts = payload;
    }
  },
  actions: {
    getPosts: ({ commit }) => {
      // use ApolloClient to fire getPosts query
      apolloClient
        .query({
          query: gql`
            query {
              getPosts {
                _id
                title
                imageUrl
              }
            }
          `
        })
        .then(({ data }) => {
          // Get data from actions to state via mutations
          // commit passes data from actions along to mutation functions
          commit("setPosts", data.getPosts);
          console.log(data.getPosts);
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  getters: {
    posts: state => state.posts
  }
});

```

> client\src\components\Home.vue
```html
<template>
  <v-container text-xs-center>
    <v-flex xs12>
      <v-carousel v-if="posts.length > 0" v-bind="{ 'cycle': true }" interval="3000">
        <v-carousel-item v-for="post in posts" :key="post._id" :src="post.imageUrl">
          <h1 id="carousel__title">{{post.title}}</h1>
        </v-carousel-item>
      </v-carousel>
    </v-flex>
  </v-container>
</template>

<script>
import { gql } from "apollo-boost";

export default {
  name: "home",
  created() {
    this.handleGetCarouselPosts();
  },
  computed: {
    posts() {
      return this.$store.getters.posts;
    }
  },
  methods: {
    handleGetCarouselPosts() {
      // reach out to Vuex store, fire action that gets posts for carousel
      this.$store.dispatch("getPosts");
    }
  }
};
</script>

<style>
#carousel__title {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 5px 5px 0 0;
  padding: 0.5em;
  margin: 0 auto;
  bottom: 50px;
  left: 0;
  right: 0;
}
</style>

```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/UsingMutationsAndGetters.png)

### 32. Add Loading Property, Loading Spinner and mapGetters 6min

- We are going to modify the `Home.Vue` component and the `store.js` store document again to add a Loading property in the store, a loading Spinner and to use mapGetters.

> client\src\store.js
```js
import Vue from "vue";
import Vuex from "vuex";

import { gql } from "apollo-boost";
import { defaultClient as apolloClient } from "./main";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    loading: false
  },
  mutations: {
    setPosts: (state, payload) => {
      state.posts = payload;
    },
    setLoading: (state, payload) => {
      state.loading = payload;
    }
  },
  actions: {
    getPosts: ({ commit }) => {
      commit("setLoading", true);
      apolloClient
        .query({
          query: gql`
            query {
              getPosts {
                _id
                title
                imageUrl
              }
            }
          `
        })
        .then(({ data }) => {
          commit("setPosts", data.getPosts);
          commit("setLoading", false);
        })
        .catch(err => {
          commit("setLoading", false);
          console.error(err);
        });
    }
  },
  getters: {
    posts: state => state.posts,
    loading: state => state.loading
  }
});

```

> client\src\components\Home.vue
```html
<template>
  <v-container text-xs-center>
    <v-layout row>
      <v-dialog v-model="loading" persistent fullscreen>
        <v-container fill-height>
          <v-layout row justify-center align-center>
            <v-progress-circular indeterminate :size="70" :width="7" color="secondary"></v-progress-circular>
          </v-layout>
        </v-container>
      </v-dialog>
    </v-layout>

    <v-flex xs12>
      <v-carousel v-if="!loading && posts.length > 0" v-bind="{ 'cycle': true }" interval="3000">
        <v-carousel-item v-for="post in posts" :key="post._id" :src="post.imageUrl">
          <h1 id="carousel__title">{{post.title}}</h1>
        </v-carousel-item>
      </v-carousel>
    </v-flex>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "home",
  created() {
    this.handleGetCarouselPosts();
  },
  computed: {
    ...mapGetters(["loading", "posts"])
  },
  methods: {
    handleGetCarouselPosts() {
      // reach out to Vuex store, fire action that gets posts for carousel
      this.$store.dispatch("getPosts");
    }
  }
};
</script>

<style>
#carousel__title {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 5px 5px 0 0;
  padding: 0.5em;
  margin: 0 auto;
  bottom: 50px;
  left: 0;
  right: 0;
}
</style>

```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddLoadingPropertyLoadingSpinnerAndMapGetters.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddLoadingPropertyLoadingSpinnerAndMapGetters2.png)

### 33. Create queries.js for Clientside Query / Mutation Definitions 3min


- We are going to create the `queries.js` to put all GraphQL queries and mutations that we are going to use.

> client\src\queries.js
```js
import { gql } from "apollo-boost";

/* Posts Queries */
export const GET_POSTS = gql`
  query {
    getPosts {
      _id
      title
      imageUrl
    }
  }
`;

/* User Queries */

/* Posts Mutations */

/* User Mutations */

```

- We are going to modify the  `store.js` store document again to use the new `queries.js` document.

> client\src\store.js
```js
import Vue from "vue";
import Vuex from "vuex";

import { defaultClient as apolloClient } from "./main";

import { GET_POSTS } from "./queries";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    loading: false
  },
  mutations: {
    setPosts: (state, payload) => {
      state.posts = payload;
    },
    setLoading: (state, payload) => {
      state.loading = payload;
    }
  },
  actions: {
    getPosts: ({ commit }) => {
      commit("setLoading", true);
      apolloClient
        .query({
          query: GET_POSTS
        })
        .then(({ data }) => {
          commit("setPosts", data.getPosts);
          commit("setLoading", false);
        })
        .catch(err => {
          commit("setLoading", false);
          console.error(err);
        });
    }
  },
  getters: {
    posts: state => state.posts,
    loading: state => state.loading
  }
});

```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateQueriesJsForClient.png)


## Section 8: JWT Authentication for Signin / Signup 0 / 12|1hr 27min

### 34. Create Gravatar Avatar and Hash User Passwords on Signup 7min

- We are going to modify the `User.js` document to assign a ramndom avatar to the user and to store the password hashed.

> models\User.js
```js
const mongoose = require("mongoose");
const md5 = require("md5");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  avatar: {
    type: String
  },
  joinDate: {
    type: Date,
    default: Date.now
  },
  favorites: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: "Post"
  }
});

// Create and add avatar to user
UserSchema.pre("save", function(next) {
  this.avatar = `http://gravatar.com/avatar/${md5(this.username)}?d=identicon`;
  next();
});

// Hash password so it can't be seen w/ access to database
UserSchema.pre("save", function(next) {
  if (!this.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err);

      this.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model("User", UserSchema);

```

- We can test if it works

> request
```graphql
mutation {
  signupUser(username: "Fofo", email: "Fofo@gmail.com", password: "Fofo") {
    _id
    username
    email
    avatar
    password
    joinDate
  }
}

```

> response
```json
{
  "data": {
    "signupUser": {
      "_id": "5d35390f58729c10f875d41c",
      "username": "Fofo",
      "email": "Fofo@gmail.com",
      "avatar": "http://gravatar.com/avatar/d7ec7a6a7980721f40631794b6e691f8?d=identicon",
      "password": "$2b$10$qb.j.FtbHSfSgyH8ZYGGwOW.cIFj8voPEs1m/jcmdFrX/j/kP1zky",
      "joinDate": "Mon Jul 22 2019 05:18:23 GMT+0100 (Irish Standard Time)"
    }
  }
}
```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateGravatarAvatarAndHashUserPasswordsOnSignup.png)

- We can see the avatar assigned by accessing the http://gravatar.com/avatar/d7ec7a6a7980721f40631794b6e691f8?d=identicon url

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateGravatarAvatarAndHashUserPasswordsOnSignup2.png)

### 35. Write and Run signinUser Mutation 5min

- We are going to create a new `GraphQL mutation` to sign in a new user. Initially it's going to return the own user's data when the user and password are correct.

> typeDefs.gql --> Add the new signinUser mutation.
```graphql
type User {
  _id: ID
  username: String! @unique
  email: String!
  password: String!
  avatar: String
  joinDate: String
  favorites: [Post]
}

type Post {
  _id: ID
  title: String!
  imageUrl: String!
  categories: [String]!
  description: String!
  createdDate: String
  likes: Int
  createdBy: User!
  messages: [Message]
}

type Message {
  _id: ID
  messageBody: String!
  messageDate: String
  messageUser: User!
}

type Query {
  getPosts: [Post]
}

type Mutation {
  addPost(
    title: String!
    imageUrl: String!
    categories: [String]!
    description: String!
    creatorId: ID!
  ): Post!
  signinUser(username: String!, password: String!): User
  signupUser(username: String!, email: String!, password: String!): User!
}

```

> resolvers.js --> Add the new signinUser mutation.
```js
const bcrypt = require("bcrypt");

module.exports = {
  Query: {
    getPosts: async (_, _args, { Post }) => {
      const posts = await Post.find({})
        .sort({ createdDate: "desc" })
        .populate({
          path: "createdBy",
          model: "User"
        });
      return posts;
    }
  },
  Mutation: {
    addPost: async (
      _,
      { title, imageUrl, categories, description, creatorId },
      { Post }
    ) => {
      const newPost = await new Post({
        title,
        imageUrl,
        categories,
        description,
        createdBy: creatorId
      }).save();
      return newPost;
    },
    signinUser: async (_, { username, password }, { User }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new Error("User not found");
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        throw new Error("Invalid password");
      }
      return user;
    },
    signupUser: async (_, { username, email, password }, { User }) => {
      const user = await User.findOne({ username });
      if (user) {
        throw new Error("User already exists");
      }
      const newUser = await new User({
        username,
        email,
        password
      }).save();
      return newUser;
    }
  }
};

```

> Request
```graphql
mutation {
  signinUser(username: "Fofo", password: "Fofo") {
    _id
    username
    email
    avatar
    password
    joinDate
  }
}
```

> Response
```json
{
  "data": {
    "signinUser": {
      "_id": "5d35390f58729c10f875d41c",
      "username": "Fofo",
      "email": "Fofo@gmail.com",
      "avatar": "http://gravatar.com/avatar/d7ec7a6a7980721f40631794b6e691f8?d=identicon",
      "password": "$2b$10$qb.j.FtbHSfSgyH8ZYGGwOW.cIFj8voPEs1m/jcmdFrX/j/kP1zky",
      "joinDate": "Mon Jul 22 2019 05:18:23 GMT+0100 (Irish Standard Time)"
    }
  }
}
```

- The password is case sensitive.

> Request
```graphql
mutation {
  signinUser(username: "Fofo", password: "fofo") {
    _id
    username
    email
    avatar
    password
    joinDate
  }
}

```

> Response
```json
{
  "errors": [
    {
      "message": "Invalid password",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": [
        "signinUser"
      ],
      "extensions": {
        "code": "INTERNAL_SERVER_ERROR",
        "exception": {
          "stacktrace": [
            "Error: Invalid password",
            "    at signinUser (C:\\Work\\Training\\Pre\\VueJs\\full-stack-vue-with-graphql-the-ultimate-guide\\resolvers.js:37:15)"
          ]
        }
      }
    }
  ],
  "data": {
    "signinUser": null
  }
}
```

### 36. Sign Token and Return it Upon Signin/Signup 8min

- We are going to modify the `signinUser` and `signupUser` mutations to return a token with the information about the authenticated user instead of the information of the own user.

- We need to create the new `SECRET` environment variable:

> server\fake.env
```bash
MONGO_URI=mongodb+srv://USERNAME:PASSWORD@CLUSTERID.mongodb.net/DATABASENAME?retryWrites=true&w=majority
SECRET=mysupersecretencryptionkey
```

> typeDefs.gql 
```graphql
type User {
  _id: ID
  username: String! @unique
  email: String!
  password: String!
  avatar: String
  joinDate: String
  favorites: [Post]
}

type Post {
  _id: ID
  title: String!
  imageUrl: String!
  categories: [String]!
  description: String!
  createdDate: String
  likes: Int
  createdBy: User!
  messages: [Message]
}

type Message {
  _id: ID
  messageBody: String!
  messageDate: String
  messageUser: User!
}

type Token {
  token: String!
}

type Query {
  getPosts: [Post]
}

type Mutation {
  addPost(
    title: String!
    imageUrl: String!
    categories: [String]!
    description: String!
    creatorId: ID!
  ): Post!
  signinUser(username: String!, password: String!): Token
  signupUser(username: String!, email: String!, password: String!): Token
}

```

> resolvers.js 
```js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createToken = (user, secret, expiresIn) => {
  const { username, email } = user;
  return jwt.sign({ username, email }, secret, { expiresIn });
};

module.exports = {
  Query: {
    getPosts: async (_, args, { Post }) => {
      const posts = await Post.find({})
        .sort({ createdDate: "desc" })
        .populate({
          path: "createdBy",
          model: "User"
        });
      return posts;
    }
  },
  Mutation: {
    addPost: async (
      _,
      { title, imageUrl, categories, description, creatorId },
      { Post }
    ) => {
      const newPost = await new Post({
        title,
        imageUrl,
        categories,
        description,
        createdBy: creatorId
      }).save();
      return newPost;
    },
    signinUser: async (_, { username, password }, { User }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new Error("User not found");
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        throw new Error("Invalid password");
      }
      return { token: createToken(user, process.env.SECRET, "1hr") };
    },
    signupUser: async (_, { username, email, password }, { User }) => {
      const user = await User.findOne({ username });
      if (user) {
        throw new Error("User already exists");
      }
      const newUser = await new User({
        username,
        email,
        password
      }).save();
      return { token: createToken(newUser, process.env.SECRET, "1hr") };
    }
  }
};

```

- We can test if it works for the `signinUser` mutation.
> Request
```graphql
mutation {
  signinUser(username: "Fofo", password: "Fofo") {
    token
  }
}

```

> Response
```json
{
  "data": {
    "signinUser": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkZvZm8iLCJlbWFpbCI6IkZvZm9AZ21haWwuY29tIiwiaWF0IjoxNTYzOTg0NjIxLCJleHAiOjE1NjM5ODgyMjF9.8bqq_3lK-IyDbgxA5TnRkjobwU8o_x9XcEsEB8pz5FQ"
    }
  }
}
```

- We can test if it works for the `signupUser` mutation.
> Request
```graphql
mutation {
  signupUser(username: "Miliki", email: "miliki@gmail.com", password: "Miliki") {
		token
  }
}
```

> Response
```json
{
  "data": {
    "signupUser": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1pbGlraSIsImVtYWlsIjoibWlsaWtpQGdtYWlsLmNvbSIsImlhdCI6MTU2Mzk4NDc2MCwiZXhwIjoxNTYzOTg4MzYwfQ.0EoTKaXIBm3OIZDSPVVKE2iDLLaIJ4Vjtf1B3OltYgo"
    }
  }
}
```

### 37. Using Variables in GraphQL, Signin / Signup Mutation Defs 6min

With GraphQL is possible to use `Variables` with our `Queries` and `Mutations`

- We can test if it works for the `signupUser` mutation.
> Request
```graphql
mutation($username: String!, $password: String!) {
  signinUser(username: $username, password: $password) {
    token
  }
}

```

> Variables:
```json
{
  "username": "Fofo",
  "password": "Fofo"
}
```

> Response
```json
{
  "data": {
    "signinUser": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkZvZm8iLCJlbWFpbCI6IkZvZm9AZ21haWwuY29tIiwiaWF0IjoxNTYzOTg1NDY2LCJleHAiOjE1NjM5ODkwNjZ9.KD9J3c0vp-fxaS-fZR5CuZ1Wt3v_Lj3d1839IP720is"
    }
  }
}
```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/UsingVariablesInGraphQLSigninSignupMutationDefs.png)

- We are going to modify the `queries.js` document in the `client` project to add the new `signin` and `signup` mutations.

> client\src\queries.js
```js
import { gql } from "apollo-boost";

/* Posts Queries */
export const GET_POSTS = gql`
  query {
    getPosts {
      _id
      title
      imageUrl
    }
  }
`;

/* User Queries */

/* Posts Mutations */

/* User Mutations */
export const SIGNIN_USER = gql`
  mutation($username: String!, $password: String!) {
    signinUser(username: $username, password: $password) {
      token
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    signupUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`;
```

### 38. Add Signin Form, Write and Run signinUser Action, Return JWT 9min

- We are going to need to modify the store to add the `signinUser` action.

> client\src\store.js
```js
import Vue from "vue";
import Vuex from "vuex";

import { defaultClient as apolloClient } from "./main";

import { GET_POSTS, SIGNIN_USER } from "./queries";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    loading: false
  },
  mutations: {
    setPosts: (state, payload) => {
      state.posts = payload;
    },
    setLoading: (state, payload) => {
      state.loading = payload;
    }
  },
  actions: {
    getPosts: ({ commit }) => {
      commit("setLoading", true);
      apolloClient
        .query({
          query: GET_POSTS
        })
        .then(({ data }) => {
          commit("setPosts", data.getPosts);
          commit("setLoading", false);
        })
        .catch(err => {
          commit("setLoading", false);
          console.error(err);
        });
    },
    signinUser: (_, payload) => {
      apolloClient
        .mutate({
          mutation: SIGNIN_USER,
          variables: payload
        })
        .then(({ data }) => {
          console.log(data.signinUser);
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  getters: {
    posts: state => state.posts,
    loading: state => state.loading
  }
});
```

- We are also going to need to modify the `Signin.vue` component to make a proper `Signin` form.

> client\src\components\Auth\Signin.vue
```html
<template>
  <v-container text-xs-center mt-5 pt-5>

    <!-- Signin Title -->
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <h1>Welcome Back!</h1>
      </v-flex>
    </v-layout>

    <!-- Signin Form -->
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <v-card color="secondary" dark>
          <v-container>
            <v-form @submit.prevent="handleSigninUser">

              <v-layout row>
                <v-flex xs12>
                  <v-text-field v-model="username" prepend-icon="face" label="Username" type="text" required></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-text-field v-model="password" prepend-icon="extension" label="Password" type="password" required></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-btn color="accent" type="submit">Signin</v-btn>
                  <h3>Don't have an account?
                    <router-link to="/signup">Signup</router-link>
                  </h3>
                </v-flex>
              </v-layout>

            </v-form>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
export default {
  name: "Signin",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    handleSigninUser() {
      this.$store.dispatch("signinUser", {
        username: this.username,
        password: this.password
      });
    }
  }
};
</script>

```

- We are going to test if it works.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddSigninFormWriteAndRunSigninUserActionReturnJwt.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddSigninFormWriteAndRunSigninUserActionReturnJwt2.png)


### 39. Additional Config for ApolloClient, Send Token from LocalStorage 8min

- We are going to need to modify the store to add the store the token in the `localStore`.

> client\src\store.js
```js
.
.
.
    signinUser: (_, payload) => {
      apolloClient
        .mutate({
          mutation: SIGNIN_USER,
          variables: payload
        })
        .then(({ data }) => {
          localStorage.setItem("token", data.signinUser.token);
          // console.log(data.signinUser);
        })
        .catch(err => {
          console.error(err);
        });
    }
.
.
.
```
- We can check if the `localStorage` contains the token.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AdditionalConfigForApolloClientSendTokenFromLocalStorage.png)


- We are going to modify in the client project the `main.js` document to manage how to send the `token` automatically to our GraphQL `queries` and `mutations`.

> \client\src\main.js
```js
import "@babel/polyfill";
import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";

Vue.use(VueApollo);

// Setup ApolloClient
export const defaultClient = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  // include auth token with requests made to backend
  fetchOptions: {
    credentials: "include"
  },
  request: operation => {
    // if no token with key of 'token' in localStorage, add it
    if (!localStorage.token) {
      localStorage.setItem("token", "");
    }

    // operation adds the token to an authorization header, which is sent to backend
    operation.setContext({
      headers: {
        authorization: localStorage.getItem("token")
      }
    });
  },
  onError: ({ graphQLErrors, networkError }) => {
    if (networkError) {
      console.log("[networkError]", networkError);
    }

    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        console.dir(err);
      }
    }
  }
});

const apolloProvider = new VueApollo({ defaultClient });

Vue.config.productionTip = false;

new Vue({
  apolloProvider,
  router,
  store,
  render: h => h(App)
}).$mount("#app");

```

- We are going to check if it works properly.

- If we send invalid credentials we can see the errors.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AdditionalConfigForApolloClientSendTokenFromLocalStorage2.png)

- If we send the proper credentials.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AdditionalConfigForApolloClientSendTokenFromLocalStorage3.png)

### 40. Verify JWT Token in server.js, Pass Result to currentUser in Context 7min

- We are going to verify if the Token is valid from the `Apollo server` method in the `server.js` document.

> server.js
```js
const { ApolloServer, gql } = require("apollo-server");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

// Import Environment variables from .env
require("dotenv").config();

// Import typedefs and resolvers
const filePath = path.join(__dirname, "typeDefs.gql");
const typeDefs = fs.readFileSync(filePath, "utf-8");
const resolvers = require("./resolvers");

const User = require("./models/User");
const Post = require("./models/Post");

// Connect to MongoDb Atlas
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("DB connected"))
  .catch(error => console.error(error));

// Create Apollo GraphQL Server using typeDefs, resolvers, and context object
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    console.log(req.headers["authorization"]);
    User,
    Post
  }
});

server.listen().then(({ url }) => {
  console.log(`Server listening on ${url}`);
});

```

- Now, if we try to authenticate again we should see the token on the `server` console.

```bash
[client] Server listening on http://localhost:4000/
[server] DB connected
[server] [nodemon] restarting due to changes...
[server] [nodemon] starting `node server.js`
[server] Server listening on http://localhost:4000/
[server] DB connected
[server] eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkZvZm8iLCJlbWFpbCI6IkZvZm9AZ21haWwuY29tIiwiaWF0IjoxNTYzOTkwMDQwLCJleHAiOjE1NjM5OTM2NDB9.-0rHA0SpN-2otxZn92DyvD7l2ZpHTjDzdrlwMC49M
```

- We need now to validate it by modifying the `server.js` document again.

> server.js
```js
const { ApolloServer, gql } = require("apollo-server");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");

// Import Environment variables from .env
require("dotenv").config();

// Import typedefs and resolvers
const filePath = path.join(__dirname, "typeDefs.gql");
const typeDefs = fs.readFileSync(filePath, "utf-8");
const resolvers = require("./resolvers");

const User = require("./models/User");
const Post = require("./models/Post");

// Connect to MongoDb Atlas
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("DB connected"))
  .catch(error => console.error(error));

// Verify JWT Token passed from client
const getUser = async token => {
  if (token) {
    try {
      let user = await jwt.verify(token, process.env.SECRET);
      console.log(user)
    } catch (err) {
      throw new AuthenticationError(
        "Your session has ended. Please sign in again."
      );
    }
  }
};

// Create Apollo/GraphQL Server using typeDefs, resolvers, and context object
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const token = req.headers["authorization"];
    return { User, Post, currentUser: await getUser(token) };
  }
});

server.listen().then(({ url }) => {
  console.log(`Server listening on ${url}`);
});
```

- We can check it again.

```bash
[server] [nodemon] restarting due to changes...
[server] [nodemon] starting `node server.js`
[server] Server listening on http://localhost:4000/
[server] DB connected
[server] { username: 'Fofo',
[server]   email: 'Fofo@gmail.com',
[server]   iat: 1563993293,
[server]   exp: 1563996893 }
```

- The final code using the apollo `AuthenticationError` class will be like this.

> server.js
```js
const { ApolloServer, AuthenticationError } = require("apollo-server");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");

// Import Environment variables from .env
require("dotenv").config();

// Import typedefs and resolvers
const filePath = path.join(__dirname, "typeDefs.gql");
const typeDefs = fs.readFileSync(filePath, "utf-8");
const resolvers = require("./resolvers");

const User = require("./models/User");
const Post = require("./models/Post");

// Connect to MongoDb Atlas
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("DB connected"))
  .catch(error => console.error(error));

// Verify JWT Token passed from client
const getUser = async token => {
  if (token) {
    try {
      return await jwt.verify(token, process.env.SECRET);
    } catch (err) {
      throw new AuthenticationError(
        "Your session has ended. Please sign in again."
      );
    }
  }
};

// Create Apollo/GraphQL Server using typeDefs, resolvers, and context object
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const token = req.headers["authorization"];
    return { User, Post, currentUser: await getUser(token) };
  }
});

server.listen().then(({ url }) => {
  console.log(`Server listening on ${url}`);
});

```

### 41. Create getCurrentUser Query, Execute it from main.js 9min

- we are going to create the new `getCurrentUser Query` by modifying the `typeDefs.gql` and `resolvers.js` documents.

> typeDefs.gql
```graphql
type User {
  _id: ID
  username: String! @unique
  email: String!
  password: String!
  avatar: String
  joinDate: String
  favorites: [Post]
}

type Post {
  _id: ID
  title: String!
  imageUrl: String!
  categories: [String]!
  description: String!
  createdDate: String
  likes: Int
  createdBy: User!
  messages: [Message]
}

type Message {
  _id: ID
  messageBody: String!
  messageDate: String
  messageUser: User!
}

type Token {
  token: String!
}

type Query {
  getCurrentUser: User
  getPosts: [Post]
}

type Mutation {
  addPost(
    title: String!
    imageUrl: String!
    categories: [String]!
    description: String!
    creatorId: ID!
  ): Post!
  signinUser(username: String!, password: String!): Token
  signupUser(username: String!, email: String!, password: String!): Token
}

```

> resolvers.js
```js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createToken = (user, secret, expiresIn) => {
  const { username, email } = user;
  return jwt.sign({ username, email }, secret, { expiresIn });
};

module.exports = {
  Query: {
    getCurrentUser: async (_, args, { User, currentUser }) => {
      if (!currentUser) {
        return null;
      }
      const user = await User.findOne({
        username: currentUser.username
      }).populate({
        path: "favorites",
        model: "Post"
      });
      return user;
    },    
    getPosts: async (_, args, { Post }) => {
      const posts = await Post.find({})
        .sort({ createdDate: "desc" })
        .populate({
          path: "createdBy",
          model: "User"
        });
      return posts;
    }
  },
  Mutation: {
    addPost: async (
      _,
      { title, imageUrl, categories, description, creatorId },
      { Post }
    ) => {
      const newPost = await new Post({
        title,
        imageUrl,
        categories,
        description,
        createdBy: creatorId
      }).save();
      return newPost;
    },
    signinUser: async (_, { username, password }, { User }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new Error("User not found");
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        throw new Error("Invalid password");
      }
      return { token: createToken(user, process.env.SECRET, "1hr") };
    },
    signupUser: async (_, { username, email, password }, { User }) => {
      const user = await User.findOne({ username });
      if (user) {
        throw new Error("User already exists");
      }
      const newUser = await new User({
        username,
        email,
        password
      }).save();
      return { token: createToken(newUser, process.env.SECRET, "1hr") };
    }
  }
};

```
- We are going to modify the `Client store.js` document to create the `user` state, the `setUser` mutation, the `getCurrentUser` action and the `user` getter.

> client\src\store.js
```js
import Vue from "vue";
import Vuex from "vuex";
import router from "./router";

import { defaultClient as apolloClient } from "./main";

import { GET_CURRENT_USER, GET_POSTS, SIGNIN_USER } from "./queries";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    user: null,    
    loading: false
  },
  mutations: {
    setPosts: (state, payload) => {
      state.posts = payload;
    },
    setUser: (state, payload) => {
      state.user = payload;
    },    
    setLoading: (state, payload) => {
      state.loading = payload;
    }
  },
  actions: {
    getCurrentUser: ({ commit }) => {
      commit("setLoading", true);
      apolloClient
        .query({
          query: GET_CURRENT_USER
        })
        .then(({ data }) => {
          commit("setLoading", false);
          // Add user data to state
          commit("setUser", data.getCurrentUser);
          console.log(data.getCurrentUser);
        })
        .catch(err => {
          commit("setLoading", false);
          console.error(err);
        });
    },    
    getPosts: ({ commit }) => {
      commit("setLoading", true);
      apolloClient
        .query({
          query: GET_POSTS
        })
        .then(({ data }) => {
          commit("setPosts", data.getPosts);
          commit("setLoading", false);
        })
        .catch(err => {
          commit("setLoading", false);
          console.error(err);
        });
    },
    signinUser: (_, payload) => {
      apolloClient
        .mutate({
          mutation: SIGNIN_USER,
          variables: payload
        })
        .then(({ data }) => {
          localStorage.setItem("token", data.signinUser.token);
          // to make sure created method is run in main.js (we run getCurrentUser), reload the page
          router.go();
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  getters: {
    posts: state => state.posts,
    user: state => state.user,    
    loading: state => state.loading
  }
});

```

- We are going to modify the `Client queries.js` document to include the `GET_CURRENT_USER` user `QUERY`

> client\src\queries.js
```js
import { gql } from "apollo-boost";

/* Posts Queries */
export const GET_POSTS = gql`
  query {
    getPosts {
      _id
      title
      imageUrl
    }
  }
`;

/* User Queries */
export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      _id
      username
      email
      password
      avatar
      joinDate
      favorites {
        _id
        title
        imageUrl
      }
    }
  }
`;

/* Posts Mutations */

/* User Mutations */
export const SIGNIN_USER = gql`
  mutation($username: String!, $password: String!) {
    signinUser(username: $username, password: $password) {
      token
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    signupUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`;
```

- We are going to modify the `Client main.js` document to force to execute the `getCurrentUser` action when the app is loaded.

> client\src\main.js
```js
import "@babel/polyfill";
import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";

Vue.use(VueApollo);

// Setup ApolloClient
export const defaultClient = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  // include auth token with requests made to backend
  fetchOptions: {
    credentials: "include"
  },
  request: operation => {
    // if no token with key of 'token' in localStorage, add it
    if (!localStorage.token) {
      localStorage.setItem("token", "");
    }

    // operation adds the token to an authorization header, which is sent to backend
    operation.setContext({
      headers: {
        authorization: localStorage.getItem("token")
      }
    });
  },
  onError: ({ graphQLErrors, networkError }) => {
    if (networkError) {
      console.log("[networkError]", networkError);
    }

    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        console.dir(err);
      }
    }
  }
});

const apolloProvider = new VueApollo({ defaultClient });

Vue.config.productionTip = false;

new Vue({
  apolloProvider,
  router,
  store,
  render: h => h(App),
  created() {
    // execute getCurrentUser query
    this.$store.dispatch("getCurrentUser");
  }
}).$mount("#app");

```
- We can now test if it works.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateGetCurrentUserQueryExecuteItFromMainJs.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateGetCurrentUserQueryExecuteItFromMainJs2.png)

### 42. Redirect Home upon Signin with Watcher 8min

- We are going to modify the `Signin` component to redirect to home page if the data received from the `user` getter changes.

> client\src\components\Auth\Signin.vue
```html
<template>
  <v-container text-xs-center mt-5 pt-5>

    <!-- Signin Title -->
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <h1>Welcome Back!</h1>
      </v-flex>
    </v-layout>

    <!-- Signin Form -->
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <v-card color="secondary" dark>
          <v-container>
            <v-form @submit.prevent="handleSigninUser">

              <v-layout row>
                <v-flex xs12>
                  <v-text-field v-model="username" prepend-icon="face" label="Username" type="text" required></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-text-field v-model="password" prepend-icon="extension" label="Password" type="password" required></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-btn color="accent" type="submit">Signin</v-btn>
                  <h3>Don't have an account?
                    <router-link to="/signup">Signup</router-link>
                  </h3>
                </v-flex>
              </v-layout>

            </v-form>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Signin",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  computed: {
    ...mapGetters(["user"])
  },
  watch: {
    user(value) {
      // if user value changes, redirect to home page
      if (value) {
        this.$router.push("/");
      }
    }
  },  
  methods: {
    handleSigninUser() {
      this.$store.dispatch("signinUser", {
        username: this.username,
        password: this.password
      });
    }
  }
};
</script>

```

- We can now test if it works.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/RedirectHomeUponSigninWithWatcher.png)

- When the new user data is received it is redirected to the main page.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/RedirectHomeUponSigninWithWatcher2.png)

### 43. Change Navbar for Signed-in User 9min

- We are going to modify the `App.vue` document to put the `Navbar routes` based on the user authenticated or not.

> src\App.vue
```html
<template>
  <v-app style="background: #E3E3EE">
    <!-- Side Navbar -->
    <v-navigation-drawer app temporary fixed v-model="sideNav">
      <v-toolbar color="accent" dark flat>
        <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
        <router-link to="/" tag="span" style="cursor: pointer">
          <h1 class="title pl-3">VueShare</h1>
        </router-link>
      </v-toolbar>

      <v-divider></v-divider>

      <!-- Side Navbar Links -->
      <v-list>
        <v-list-tile ripple v-for="item in sideNavItems" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{item.title}}
          </v-list-tile-content>
        </v-list-tile>

        <!-- Signout Button -->
        <v-list-tile v-if="user">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Signout</v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>

    <!-- Horizontal Navbar -->
    <v-toolbar fixed color="primary" dark>
      <!-- App Title -->
      <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-xs-only">
        <router-link to="/" tag="span" style="cursor: pointer">
          VueShare
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Search Input -->
      <v-text-field flex prepend-icon="search" placeholder="Search posts" color="accent" single-line hide-details></v-text-field>

      <v-spacer></v-spacer>

      <!-- Horizontal Navbar Links -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in horizontalNavItems" :key="item.title" :to="item.link">
          <v-icon class="hidden-sm-only" left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>

        <!-- Profile Button -->
        <v-btn flat to="/profile" v-if="user">
          <v-icon class="hidden-sm-only" left>account_box</v-icon>
          <v-badge right color="blue darken-2">
            <!-- <span slot="badge"></span> -->
            Profile
          </v-badge>
        </v-btn>

        <!-- Signout Button -->
        <v-btn flat v-if="user">
          <v-icon class="hidden-sm-only" left>exit_to_app</v-icon>
          Signout
        </v-btn>

      </v-toolbar-items>
    </v-toolbar>

    <!-- App Content -->
    <main>
      <v-container class="mt-4">
        <transition name="fade">
          <router-view/>
        </transition>
      </v-container>
    </main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  data() {
    return {
      sideNav: false
    };
  },
  computed: {
    ...mapGetters(["user"]),
    horizontalNavItems() {
      let items = [
        { icon: "chat", title: "Posts", link: "/posts" },
        { icon: "lock_open", title: "Sign In", link: "/signin" },
        { icon: "create", title: "Sign Up", link: "/signup" }
      ];
      if (this.user) {
        items = [{ icon: "chat", title: "Posts", link: "/posts" }];
      }
      return items;
    },
    sideNavItems() {
      let items = [
        { icon: "chat", title: "Posts", link: "/posts" },
        { icon: "lock_open", title: "Sign In", link: "/signin" },
        { icon: "create", title: "Sign Up", link: "/signup" }
      ];
      if (this.user) {
        items = [
          { icon: "chat", title: "Posts", link: "/posts" },
          { icon: "stars", title: "Create Post", link: "/post/add" },
          { icon: "account_box", title: "Profile", link: "/profile" }
        ];
      }
      return items;
    }
  },
  methods: {
    toggleSideNav() {
      this.sideNav = !this.sideNav;
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>

```

- Before signing in:

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ChangeNavbarForSignedInUser.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ChangeNavbarForSignedInUser2.png)

- After signing in:

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ChangeNavbarForSignedInUser3.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ChangeNavbarForSignedInUser4.png)

### 44. Create Signout Action 6min

- we are going to modify the `store.js` document to create a `mutation` and an `action` to be able to `sign out` a user.

> client\src\store.js
```js
import Vue from "vue";
import Vuex from "vuex";
import router from "./router";

import { defaultClient as apolloClient } from "./main";

import { GET_CURRENT_USER, GET_POSTS, SIGNIN_USER } from "./queries";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    user: null,    
    loading: false
  },
  mutations: {
    setPosts: (state, payload) => {
      state.posts = payload;
    },
    setUser: (state, payload) => {
      state.user = payload;
    },    
    setLoading: (state, payload) => {
      state.loading = payload;
    },
    clearUser: state => (state.user = null)
  },
  actions: {
    getCurrentUser: ({ commit }) => {
      commit("setLoading", true);
      apolloClient
        .query({
          query: GET_CURRENT_USER
        })
        .then(({ data }) => {
          commit("setLoading", false);
          // Add user data to state
          commit("setUser", data.getCurrentUser);
          console.log(data.getCurrentUser);
        })
        .catch(err => {
          commit("setLoading", false);
          console.error(err);
        });
    },    
    getPosts: ({ commit }) => {
      commit("setLoading", true);
      apolloClient
        .query({
          query: GET_POSTS
        })
        .then(({ data }) => {
          commit("setPosts", data.getPosts);
          commit("setLoading", false);
        })
        .catch(err => {
          commit("setLoading", false);
          console.error(err);
        });
    },
    signinUser: (_, payload) => {
      apolloClient
        .mutate({
          mutation: SIGNIN_USER,
          variables: payload
        })
        .then(({ data }) => {
          localStorage.setItem("token", data.signinUser.token);
          // to make sure created method is run in main.js (we run getCurrentUser), reload the page
          router.go();
        })
        .catch(err => {
          console.error(err);
        });
    },
    signoutUser: async ({ commit }) => {
      // clear user in state
      commit("clearUser");
      // remove token in localStorage
      localStorage.setItem("token", "");
      // end session
      await apolloClient.resetStore();
      // redirect home - kick users out of private pages (i.e. profile)
      router.push("/");
    }
  },
  getters: {
    posts: state => state.posts,
    user: state => state.user,    
    loading: state => state.loading
  }
});
```

- We are also going to modify the `App.vue` page to include the functionaly to `sign out` a user.

> client\src\App.vue
```html
<template>
  <v-app style="background: #E3E3EE">
    <!-- Side Navbar -->
    <v-navigation-drawer app temporary fixed v-model="sideNav">
      <v-toolbar color="accent" dark flat>
        <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
        <router-link to="/" tag="span" style="cursor: pointer">
          <h1 class="title pl-3">VueShare</h1>
        </router-link>
      </v-toolbar>

      <v-divider></v-divider>

      <!-- Side Navbar Links -->
      <v-list>
        <v-list-tile ripple v-for="item in sideNavItems" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{item.title}}
          </v-list-tile-content>
        </v-list-tile>

        <!-- Signout Button -->
        <v-list-tile v-if="user" @click="handleSignoutUser">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Signout</v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>

    <!-- Horizontal Navbar -->
    <v-toolbar fixed color="primary" dark>
      <!-- App Title -->
      <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-xs-only">
        <router-link to="/" tag="span" style="cursor: pointer">
          VueShare
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Search Input -->
      <v-text-field flex prepend-icon="search" placeholder="Search posts" color="accent" single-line hide-details></v-text-field>

      <v-spacer></v-spacer>

      <!-- Horizontal Navbar Links -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in horizontalNavItems" :key="item.title" :to="item.link">
          <v-icon class="hidden-sm-only" left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>

        <!-- Profile Button -->
        <v-btn flat to="/profile" v-if="user">
          <v-icon class="hidden-sm-only" left>account_box</v-icon>
          <v-badge right color="blue darken-2">
            <!-- <span slot="badge"></span> -->
            Profile
          </v-badge>
        </v-btn>

        <!-- Signout Button -->
        <v-btn flat v-if="user" @click="handleSignoutUser">
          <v-icon class="hidden-sm-only" left>exit_to_app</v-icon>
          Signout
        </v-btn>

      </v-toolbar-items>
    </v-toolbar>

    <!-- App Content -->
    <main>
      <v-container class="mt-4">
        <transition name="fade">
          <router-view/>
        </transition>
      </v-container>
    </main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  data() {
    return {
      sideNav: false
    };
  },
  computed: {
    ...mapGetters(["user"]),
    horizontalNavItems() {
      let items = [
        { icon: "chat", title: "Posts", link: "/posts" },
        { icon: "lock_open", title: "Sign In", link: "/signin" },
        { icon: "create", title: "Sign Up", link: "/signup" }
      ];
      if (this.user) {
        items = [{ icon: "chat", title: "Posts", link: "/posts" }];
      }
      return items;
    },
    sideNavItems() {
      let items = [
        { icon: "chat", title: "Posts", link: "/posts" },
        { icon: "lock_open", title: "Sign In", link: "/signin" },
        { icon: "create", title: "Sign Up", link: "/signup" }
      ];
      if (this.user) {
        items = [
          { icon: "chat", title: "Posts", link: "/posts" },
          { icon: "stars", title: "Create Post", link: "/post/add" },
          { icon: "account_box", title: "Profile", link: "/profile" }
        ];
      }
      return items;
    }
  },
  methods: {
    handleSignoutUser() {
      this.$store.dispatch("signoutUser");
    },    
    toggleSideNav() {
      this.sideNav = !this.sideNav;
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>

```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateSignoutAction.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateSignoutAction2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateSignoutAction3.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateSignoutAction4.png)

### 45. Protected Routes and Clearing Malformed Tokens 5min

- We are going to create the `AuthGuard.js` document that will be used to protect the routes that cannot be accessed if the user is not authenticated.

> client\src\AuthGuard.js
```js
import store from "./store";

export default (to, from, next) => {
  if (!store.getters.user) {
    next({
      path: "/signin"
    });
  } else {
    next();
  }
};

```

- We are also going to modify the `router.js` document to use the new `AuthGuard.js` document.

> client\src\router.js
```js
import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";

import AddPost from "./components/Posts/AddPost.vue";
import Posts from "./components/Posts/Posts.vue";

import Profile from "./components/Auth/Profile.vue";
import Signin from "./components/Auth/Signin.vue";
import Signup from "./components/Auth/Signup.vue";

import AuthGuard from "./AuthGuard";

Vue.use(Router);

export default new Router({
  mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/posts",
      name: "Posts",
      component: Posts
    },
    {
      path: "/post/add",
      name: "AddPost",
      component: AddPost
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
      beforeEnter: AuthGuard
    },
    {
      path: "/signin",
      name: "Signin",
      component: Signin
    },
    {
      path: "/Signup",
      name: "Signup",
      component: Signup
    }
  ]
});
```

- We are going to modify the `store.js` document to remobe the token from localStorage before trying to sign in.

> client\src\store.js
```js
import Vue from "vue";
import Vuex from "vuex";
import router from "./router";

import { defaultClient as apolloClient } from "./main";

import { GET_CURRENT_USER, GET_POSTS, SIGNIN_USER } from "./queries";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    user: null,    
    loading: false
  },
  mutations: {
    setPosts: (state, payload) => {
      state.posts = payload;
    },
    setUser: (state, payload) => {
      state.user = payload;
    },    
    setLoading: (state, payload) => {
      state.loading = payload;
    },
    clearUser: state => (state.user = null)
  },
  actions: {
    getCurrentUser: ({ commit }) => {
      commit("setLoading", true);
      apolloClient
        .query({
          query: GET_CURRENT_USER
        })
        .then(({ data }) => {
          commit("setLoading", false);
          // Add user data to state
          commit("setUser", data.getCurrentUser);
          console.log(data.getCurrentUser);
        })
        .catch(err => {
          commit("setLoading", false);
          console.error(err);
        });
    },    
    getPosts: ({ commit }) => {
      commit("setLoading", true);
      apolloClient
        .query({
          query: GET_POSTS
        })
        .then(({ data }) => {
          commit("setPosts", data.getPosts);
          commit("setLoading", false);
        })
        .catch(err => {
          commit("setLoading", false);
          console.error(err);
        });
    },
    signinUser: (_, payload) => {
      // clear token to prevent errors (if malformed or token expired)
      localStorage.setItem("token", "");      
      apolloClient
        .mutate({
          mutation: SIGNIN_USER,
          variables: payload
        })
        .then(({ data }) => {
          localStorage.setItem("token", data.signinUser.token);
          // to make sure created method is run in main.js (we run getCurrentUser), reload the page
          router.go();
        })
        .catch(err => {
          console.error(err);
        });
    },
    signoutUser: async ({ commit }) => {
      // clear user in state
      commit("clearUser");
      // remove token in localStorage
      localStorage.setItem("token", "");
      // end session
      await apolloClient.resetStore();
      // redirect home - kick users out of private pages (i.e. profile)
      router.push("/");
    }
  },
  getters: {
    posts: state => state.posts,
    user: state => state.user,    
    loading: state => state.loading
  }
});

```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ProtectedRoutesAndClearingMalformedTokens.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ProtectedRoutesAndClearingMalformedTokens2.png)

## Section 9: Error Handling and Form Validation 0 / 6|43min

### 46. Adding Global Form Alert Component 9min

- We need to modify the `store.js` document to include the `error` state.

> client\src\store.js
```js
import Vue from "vue"
import Vuex from "vuex"
import router from "./router"

import { defaultClient as apolloClient } from "./main"

import { GET_CURRENT_USER, GET_POSTS, SIGNIN_USER } from "./queries"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    user: null,    
    loading: false,
    error: null
  },
  mutations: {
    setPosts: (state, payload) => {
      state.posts = payload
    },
    setUser: (state, payload) => {
      state.user = payload
    },    
    setLoading: (state, payload) => {
      state.loading = payload
    },
    clearUser: state => (state.user = null),
    clearError: state => (state.error = null),
    setError: (state, payload) => {
      state.error = payload
    }
  },
  actions: {
    getCurrentUser: ({ commit }) => {
      commit("setLoading", true)
      apolloClient
        .query({
          query: GET_CURRENT_USER
        })
        .then(({ data }) => {
          commit("setLoading", false)
          // Add user data to state
          commit("setUser", data.getCurrentUser)
          console.log(data.getCurrentUser)
        })
        .catch(err => {
          commit("setLoading", false)
          console.error(err)
        })
    },    
    getPosts: ({ commit }) => {
      commit("setLoading", true)
      apolloClient
        .query({
          query: GET_POSTS
        })
        .then(({ data }) => {
          commit("setPosts", data.getPosts)
          commit("setLoading", false)
        })
        .catch(err => {
          commit("setLoading", false)
          console.error(err)
        })
    },
    signinUser: ({commit}, payload) => {
      commit("clearError")
      commit("setLoading", true)
      // clear token to prevent errors (if malformed or token expired)
      localStorage.setItem("token", "")      
      apolloClient
        .mutate({
          mutation: SIGNIN_USER,
          variables: payload
        })
        .then(({ data }) => {
          commit("setLoading", false)
          localStorage.setItem("token", data.signinUser.token)
          // to make sure created method is run in main.js (we run getCurrentUser), reload the page
          router.go()
        })
        .catch(err => {
          commit("setLoading", false)
          commit("setError", err)          
          console.error(err)
        })
    },
    signoutUser: async ({ commit }) => {
      // clear user in state
      commit("clearUser")
      // remove token in localStorage
      localStorage.setItem("token", "")
      // end session
      await apolloClient.resetStore()
      // redirect home - kick users out of private pages (i.e. profile)
      router.push("/")
    }
  },
  getters: {
    posts: state => state.posts,
    user: state => state.user,    
    loading: state => state.loading,
    error: state => state.error
  }
})

```

- We are going to create the new `Shared` folder from the `client\src\components` and the `FormAlert.vue` component documnent.

> client\src\components\Shared\FormAlert.vue
```html
<template>
  <v-alert type="error" :value="true" transition="scale-transition" dismissible>
    <h3>{{message}}</h3>
  </v-alert>
</template>

<script>
export default {
  props: ["message"]
};
</script>
```

= We need to modify the `main.js` document to make the `FormAlert` component globally accesible.

> client\src\main.js
```js
import "@babel/polyfill"
import Vue from "vue"
import "./plugins/vuetify"
import App from "./App.vue"
import router from "./router"
import store from "./store"

import ApolloClient from "apollo-boost"
import VueApollo from "vue-apollo"

import FormAlert from "./components/Shared/FormAlert"

// Register Global Component
Vue.component("form-alert", FormAlert)

Vue.use(VueApollo)

// Setup ApolloClient
export const defaultClient = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  // include auth token with requests made to backend
  fetchOptions: {
    credentials: "include"
  },
  request: operation => {
    // if no token with key of 'token' in localStorage, add it
    if (!localStorage.token) {
      localStorage.setItem("token", "")
    }

    // operation adds the token to an authorization header, which is sent to backend
    operation.setContext({
      headers: {
        authorization: localStorage.getItem("token")
      }
    })
  },
  onError: ({ graphQLErrors, networkError }) => {
    if (networkError) {
      console.log("[networkError]", networkError)
    }

    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        console.dir(err)
      }
    }
  }
})

const apolloProvider = new VueApollo({ defaultClient })

Vue.config.productionTip = false

new Vue({
  apolloProvider,
  router,
  store,
  render: h => h(App),
  created() {
    // execute getCurrentUser query
    this.$store.dispatch("getCurrentUser")
  }
}).$mount("#app")

```

- We need to modify the `Signin.vue` document page to use the new `FormAlert` component and the new `Error` state.

> client\src\components\Auth\Signin.vue
```html
<template>
  <v-container text-xs-center mt-5 pt-5>

    <!-- Signin Title -->
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <h1>Welcome Back!</h1>
      </v-flex>
    </v-layout>

    <!-- Error Alert -->
    <v-layout v-if="error" row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <form-alert :message="error.message"></form-alert>
      </v-flex>
    </v-layout>

    <!-- Signin Form -->
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <v-card color="secondary" dark>
          <v-container>
            <v-form @submit.prevent="handleSigninUser">

              <v-layout row>
                <v-flex xs12>
                  <v-text-field v-model="username" prepend-icon="face" label="Username" type="text" required></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-text-field v-model="password" prepend-icon="extension" label="Password" type="password" required></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-btn color="accent" type="submit">Signin</v-btn>
                  <h3>Don't have an account?
                    <router-link to="/signup">Signup</router-link>
                  </h3>
                </v-flex>
              </v-layout>

            </v-form>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Signin",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  computed: {
    ...mapGetters(["error", "user"])
  },
  watch: {
    user(value) {
      // if user value changes, redirect to home page
      if (value) {
        this.$router.push("/");
      }
    }
  },  
  methods: {
    handleSigninUser() {
      this.$store.dispatch("signinUser", {
        username: this.username,
        password: this.password
      });
    }
  }
};
</script>

```

- We can test if the new `FormAlert` component works properly.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddingGlobalFormAlertComponent.png)

### 47. Add Loading Spinner to Signin Button 3min

- We need to modify the `Signin.vue` page document to include a `Vuetify` loading spinner.

> client\src\components\Auth\Signin.vue
```html
<template>
  <v-container
    text-xs-center
    mt-5
    pt-5
  >

    <!-- Signin Title -->
    <v-layout
      row
      wrap
    >
      <v-flex
        xs12
        sm6
        offset-sm3
      >
        <h1>Welcome Back!</h1>
      </v-flex>
    </v-layout>

    <!-- Error Alert -->
    <v-layout
      v-if="error"
      row
      wrap
    >
      <v-flex
        xs12
        sm6
        offset-sm3
      >
        <form-alert :message="error.message"></form-alert>
      </v-flex>
    </v-layout>

    <!-- Signin Form -->
    <v-layout
      row
      wrap
    >
      <v-flex
        xs12
        sm6
        offset-sm3
      >
        <v-card
          color="secondary"
          dark
        >
          <v-container>
            <v-form @submit.prevent="handleSigninUser">

              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    v-model="username"
                    prepend-icon="face"
                    label="Username"
                    type="text"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    v-model="password"
                    prepend-icon="extension"
                    label="Password"
                    type="password"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-btn
                    :loading="loading"
                    color="accent"
                    type="submit"
                  >
                    <span
                      slot="loader"
                      class="custom-loader"
                    >
                      <v-icon light>cached</v-icon>
                    </span>
                    Signin</v-btn>
                  <h3>Don't have an account?
                    <router-link to="/signup">Signup</router-link>
                  </h3>
                </v-flex>
              </v-layout>

            </v-form>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Signin",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  computed: {
    ...mapGetters(["loading", "error", "user"])
  },
  watch: {
    user(value) {
      // if user value changes, redirect to home page
      if (value) {
        this.$router.push("/");
      }
    }
  },
  methods: {
    handleSigninUser() {
      this.$store.dispatch("signinUser", {
        username: this.username,
        password: this.password
      });
    }
  }
};
</script>

<style>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

```

- We need to test if it is working.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddLoadingSpinnerToSigninButton.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddLoadingSpinnerToSigninButton2.png)


### 48. Form Validation with Vuetify in Signin Component 7min


- We need to modify the `Signin.vue` page document to include the `Vuetify` form validation.

> client\src\components\Auth\Signin.vue
```html
<template>
  <v-container
    text-xs-center
    mt-5
    pt-5
  >

    <!-- Signin Title -->
    <v-layout
      row
      wrap
    >
      <v-flex
        xs12
        sm6
        offset-sm3
      >
        <h1>Welcome Back!</h1>
      </v-flex>
    </v-layout>

    <!-- Error Alert -->
    <v-layout
      v-if="error"
      row
      wrap
    >
      <v-flex
        xs12
        sm6
        offset-sm3
      >
        <form-alert :message="error.message"></form-alert>
      </v-flex>
    </v-layout>

    <!-- Signin Form -->
    <v-layout
      row
      wrap
    >
      <v-flex
        xs12
        sm6
        offset-sm3
      >
        <v-card
          color="secondary"
          dark
        >
          <v-container>
            <v-form
              v-model="isFormValid"
              lazy-validation
              ref="form"
              @submit.prevent="handleSigninUser"
            >

              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    :rules="usernameRules"
                    v-model="username"
                    prepend-icon="face"
                    label="Username"
                    type="text"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    :rules="passwordRules"
                    v-model="password"
                    prepend-icon="extension"
                    label="Password"
                    type="password"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-btn
                    :loading="loading"
                    :disabled="!isFormValid"
                    color="accent"
                    type="submit"
                  >
                    <span
                      slot="loader"
                      class="custom-loader"
                    >
                      <v-icon light>cached</v-icon>
                    </span>
                    Signin</v-btn>
                  <h3>Don't have an account?
                    <router-link to="/signup">Signup</router-link>
                  </h3>
                </v-flex>
              </v-layout>

            </v-form>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Signin",
  data() {
    return {
      isFormValid: true,
      username: "",
      password: "",
      usernameRules: [
        // Check if username in input
        username => !!username || "Username is required",
        // Make sure username is less than 10 characters
        username =>
          username.length < 10 || "Username must be less than 10 characters"
      ],
      passwordRules: [
        password => !!password || "Password is required",
        // Make sure password is at least 4 characters
        password =>
          password.length >= 4 || "Password must be at least 4 characters"
      ]
    };
  },
  computed: {
    ...mapGetters(["loading", "error", "user"])
  },
  watch: {
    user(value) {
      // if user value changes, redirect to home page
      if (value) {
        this.$router.push("/");
      }
    }
  },
  methods: {
    handleSigninUser() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("signinUser", {
          username: this.username,
          password: this.password
        });
      }
    }
  }
};
</script>

<style>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

```

- We need to check if it works.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/FormValidationWithVuetifyInSigninComponent.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/FormValidationWithVuetifyInSigninComponent2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/FormValidationWithVuetifyInSigninComponent3.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/FormValidationWithVuetifyInSigninComponent4.png)

### 49. Show AuthSnackbar on Signin / Signup 5min

- We are going to modify the `App.vue` main page document to add a `AuthSnackbar` Vuetify component that will be shown when the user authenticates.

> client\src\App.vue
```html
<template>
  <v-app style="background: #E3E3EE">
    <!-- Side Navbar -->
    <v-navigation-drawer
      app
      temporary
      fixed
      v-model="sideNav"
    >
      <v-toolbar
        color="accent"
        dark
        flat
      >
        <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
        <router-link
          to="/"
          tag="span"
          style="cursor: pointer"
        >
          <h1 class="title pl-3">VueShare</h1>
        </router-link>
      </v-toolbar>

      <v-divider></v-divider>

      <!-- Side Navbar Links -->
      <v-list>
        <v-list-tile
          ripple
          v-for="item in sideNavItems"
          :key="item.title"
          :to="item.link"
        >
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{item.title}}
          </v-list-tile-content>
        </v-list-tile>

        <!-- Signout Button -->
        <v-list-tile
          v-if="user"
          @click="handleSignoutUser"
        >
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Signout</v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>

    <!-- Horizontal Navbar -->
    <v-toolbar
      fixed
      color="primary"
      dark
    >
      <!-- App Title -->
      <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-xs-only">
        <router-link
          to="/"
          tag="span"
          style="cursor: pointer"
        >
          VueShare
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Search Input -->
      <v-text-field
        flex
        prepend-icon="search"
        placeholder="Search posts"
        color="accent"
        single-line
        hide-details
      ></v-text-field>

      <v-spacer></v-spacer>

      <!-- Horizontal Navbar Links -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in horizontalNavItems"
          :key="item.title"
          :to="item.link"
        >
          <v-icon
            class="hidden-sm-only"
            left
          >{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>

        <!-- Profile Button -->
        <v-btn
          flat
          to="/profile"
          v-if="user"
        >
          <v-icon
            class="hidden-sm-only"
            left
          >account_box</v-icon>
          <v-badge
            right
            color="blue darken-2"
          >
            <!-- <span slot="badge"></span> -->
            Profile
          </v-badge>
        </v-btn>

        <!-- Signout Button -->
        <v-btn
          flat
          v-if="user"
          @click="handleSignoutUser"
        >
          <v-icon
            class="hidden-sm-only"
            left
          >exit_to_app</v-icon>
          Signout
        </v-btn>

      </v-toolbar-items>
    </v-toolbar>

    <!-- App Content -->
    <main>
      <v-container class="mt-4">
        <transition name="fade">
          <router-view />
        </transition>

        <!-- Auth Snackbar -->
        <v-snackbar
          v-model="authSnackbar"
          color="success"
          :timeout='5000'
          bottom
          left
        >
          <v-icon class="mr-3">check_circle</v-icon>
          <h3>You are now signed in!</h3>
          <v-btn
            dark
            flat
            @click="authSnackbar = false"
          >Close</v-btn>
        </v-snackbar>

      </v-container>
    </main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  data() {
    return {
      sideNav: false,
      authSnackbar: false
    };
  },
  watch: {
    user(newValue, oldValue) {
      // if we had no value for user before, show snackbar
      if (oldValue === null) {
        this.authSnackbar = true;
      }
    }
  },
  computed: {
    ...mapGetters(["user"]),
    horizontalNavItems() {
      let items = [
        { icon: "chat", title: "Posts", link: "/posts" },
        { icon: "lock_open", title: "Sign In", link: "/signin" },
        { icon: "create", title: "Sign Up", link: "/signup" }
      ];
      if (this.user) {
        items = [{ icon: "chat", title: "Posts", link: "/posts" }];
      }
      return items;
    },
    sideNavItems() {
      let items = [
        { icon: "chat", title: "Posts", link: "/posts" },
        { icon: "lock_open", title: "Sign In", link: "/signin" },
        { icon: "create", title: "Sign Up", link: "/signup" }
      ];
      if (this.user) {
        items = [
          { icon: "chat", title: "Posts", link: "/posts" },
          { icon: "stars", title: "Create Post", link: "/post/add" },
          { icon: "account_box", title: "Profile", link: "/profile" }
        ];
      }
      return items;
    }
  },
  methods: {
    handleSignoutUser() {
      this.$store.dispatch("signoutUser");
    },
    toggleSideNav() {
      this.sideNav = !this.sideNav;
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
```

- We are going to test if it works.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ShowAuthSnackbarOnSigninSignup.png)

### 50. Handle Authentication Errors, Show Auth Error Snackbar 9min

- We need to modify the `server.js` document to format the error that the Apollo Server sends.

> server.js
```js
const { ApolloServer, AuthenticationError } = require("apollo-server");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");

// Import Environment variables from .env
require("dotenv").config();

// Import typedefs and resolvers
const filePath = path.join(__dirname, "typeDefs.gql");
const typeDefs = fs.readFileSync(filePath, "utf-8");
const resolvers = require("./resolvers");

const User = require("./models/User");
const Post = require("./models/Post");

// Connect to MongoDb Atlas
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("DB connected"))
  .catch(error => console.error(error));

// Verify JWT Token passed from client
const getUser = async token => {
  if (token) {
    try {
      return await jwt.verify(token, process.env.SECRET);
    } catch (err) {
      throw new AuthenticationError(
        "Your session has ended. Please sign in again."
      );
    }
  }
};

// Create Apollo/GraphQL Server using typeDefs, resolvers, and context object
const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: error => ({
    name: error.name,
    message: error.message.replace("Context creation failed:", "")
  }),  
  context: async ({ req }) => {
    const token = req.headers["authorization"];
    return { User, Post, currentUser: await getUser(token) };
  }
});

server.listen().then(({ url }) => {
  console.log(`Server listening on ${url}`);
});

```

- We are going to modify the `store.js` document to include the new `AuthError` state.

> client\src\store.js
```js
import Vue from "vue"
import Vuex from "vuex"
import router from "./router"

import { defaultClient as apolloClient } from "./main"

import { GET_CURRENT_USER, GET_POSTS, SIGNIN_USER } from "./queries"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    user: null,    
    loading: false,
    error: null,
    authError: null
  },
  mutations: {
    setPosts: (state, payload) => {
      state.posts = payload
    },
    setUser: (state, payload) => {
      state.user = payload
    },    
    setLoading: (state, payload) => {
      state.loading = payload
    },
    clearUser: state => (state.user = null),
    clearError: state => (state.error = null),
    setError: (state, payload) => {
      state.error = payload
    },
    setAuthError: (state, payload) => {
      state.authError = payload;
    }
  },
  actions: {
    getCurrentUser: ({ commit }) => {
      commit("setLoading", true)
      apolloClient
        .query({
          query: GET_CURRENT_USER
        })
        .then(({ data }) => {
          commit("setLoading", false)
          // Add user data to state
          commit("setUser", data.getCurrentUser)
          console.log(data.getCurrentUser)
        })
        .catch(err => {
          commit("setLoading", false)
          console.error(err)
        })
    },    
    getPosts: ({ commit }) => {
      commit("setLoading", true)
      apolloClient
        .query({
          query: GET_POSTS
        })
        .then(({ data }) => {
          commit("setPosts", data.getPosts)
          commit("setLoading", false)
        })
        .catch(err => {
          commit("setLoading", false)
          console.error(err)
        })
    },
    signinUser: ({commit}, payload) => {
      commit("clearError")
      commit("setLoading", true)
      // clear token to prevent errors (if malformed or token expired)
      localStorage.setItem("token", "")      
      apolloClient
        .mutate({
          mutation: SIGNIN_USER,
          variables: payload
        })
        .then(({ data }) => {
          commit("setLoading", false)
          localStorage.setItem("token", data.signinUser.token)
          // to make sure created method is run in main.js (we run getCurrentUser), reload the page
          router.go()
        })
        .catch(err => {
          commit("setLoading", false)
          commit("setError", err)          
          console.error(err)
        })
    },
    signoutUser: async ({ commit }) => {
      // clear user in state
      commit("clearUser")
      // remove token in localStorage
      localStorage.setItem("token", "")
      // end session
      await apolloClient.resetStore()
      // redirect home - kick users out of private pages (i.e. profile)
      router.push("/")
    }
  },
  getters: {
    posts: state => state.posts,
    user: state => state.user,    
    loading: state => state.loading,
    error: state => state.error,
    authError: state => state.authError
  }
})

```

- We are going to modify the `main.js` document to update the `AuthError` state when there is an authentication error.

> client\src\main.js
```js
import "@babel/polyfill"
import Vue from "vue"
import "./plugins/vuetify"
import App from "./App.vue"
import router from "./router"
import store from "./store"

import ApolloClient from "apollo-boost"
import VueApollo from "vue-apollo"

import FormAlert from "./components/Shared/FormAlert"

// Register Global Component
Vue.component("form-alert", FormAlert)

Vue.use(VueApollo)

// Setup ApolloClient
export const defaultClient = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  // include auth token with requests made to backend
  fetchOptions: {
    credentials: "include"
  },
  request: operation => {
    // if no token with key of 'token' in localStorage, add it
    if (!localStorage.token) {
      localStorage.setItem("token", "")
    }

    // operation adds the token to an authorization header, which is sent to backend
    operation.setContext({
      headers: {
        authorization: localStorage.getItem("token")
      }
    })
  },
  onError: ({ graphQLErrors, networkError }) => {
    if (networkError) {
      console.log("[networkError]", networkError)
    }

    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        console.dir(err)
        if (err.name === "AuthenticationError") {
          // set auth error in state (to show in snackbar)
          store.commit("setAuthError", err);
          // signout user (to clear token)
          store.dispatch("signoutUser");
        }        
      }
    }
  }
})

const apolloProvider = new VueApollo({ defaultClient })

Vue.config.productionTip = false

new Vue({
  apolloProvider,
  router,
  store,
  render: h => h(App),
  created() {
    // execute getCurrentUser query
    this.$store.dispatch("getCurrentUser")
  }
}).$mount("#app")

```

- We are going to modify the `App.vue` main page document to add another `AuthSnackbar` Vuetify component that will be shown when there is any error while the user authenticates.

> client\src\App.vue
```html
<template>
  <v-app style="background: #E3E3EE">
    <!-- Side Navbar -->
    <v-navigation-drawer
      app
      temporary
      fixed
      v-model="sideNav"
    >
      <v-toolbar
        color="accent"
        dark
        flat
      >
        <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
        <router-link
          to="/"
          tag="span"
          style="cursor: pointer"
        >
          <h1 class="title pl-3">VueShare</h1>
        </router-link>
      </v-toolbar>

      <v-divider></v-divider>

      <!-- Side Navbar Links -->
      <v-list>
        <v-list-tile
          ripple
          v-for="item in sideNavItems"
          :key="item.title"
          :to="item.link"
        >
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{item.title}}
          </v-list-tile-content>
        </v-list-tile>

        <!-- Signout Button -->
        <v-list-tile
          v-if="user"
          @click="handleSignoutUser"
        >
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Signout</v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>

    <!-- Horizontal Navbar -->
    <v-toolbar
      fixed
      color="primary"
      dark
    >
      <!-- App Title -->
      <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-xs-only">
        <router-link
          to="/"
          tag="span"
          style="cursor: pointer"
        >
          VueShare
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Search Input -->
      <v-text-field
        flex
        prepend-icon="search"
        placeholder="Search posts"
        color="accent"
        single-line
        hide-details
      ></v-text-field>

      <v-spacer></v-spacer>

      <!-- Horizontal Navbar Links -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in horizontalNavItems"
          :key="item.title"
          :to="item.link"
        >
          <v-icon
            class="hidden-sm-only"
            left
          >{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>

        <!-- Profile Button -->
        <v-btn
          flat
          to="/profile"
          v-if="user"
        >
          <v-icon
            class="hidden-sm-only"
            left
          >account_box</v-icon>
          <v-badge
            right
            color="blue darken-2"
          >
            <!-- <span slot="badge"></span> -->
            Profile
          </v-badge>
        </v-btn>

        <!-- Signout Button -->
        <v-btn
          flat
          v-if="user"
          @click="handleSignoutUser"
        >
          <v-icon
            class="hidden-sm-only"
            left
          >exit_to_app</v-icon>
          Signout
        </v-btn>

      </v-toolbar-items>
    </v-toolbar>

    <!-- App Content -->
    <main>
      <v-container class="mt-4">
        <transition name="fade">
          <router-view />
        </transition>

        <!-- Auth Snackbar -->
        <v-snackbar
          v-model="authSnackbar"
          color="success"
          :timeout='5000'
          bottom
          left
        >
          <v-icon class="mr-3">check_circle</v-icon>
          <h3>You are now signed in!</h3>
          <v-btn
            dark
            flat
            @click="authSnackbar = false"
          >Close</v-btn>
        </v-snackbar>

        <!-- Auth Error Snackbar -->
        <v-snackbar
          v-if="authError"
          v-model="authErrorSnackbar"
          color="info"
          :timeout='5000'
          bottom
          left
        >
          <v-icon class="mr-3">cancel</v-icon>
          <h3>{{authError.message}}</h3>
          <v-btn
            dark
            flat
            to="/signin"
          >Sign in</v-btn>
        </v-snackbar>

      </v-container>
    </main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  data() {
    return {
      sideNav: false,
      authSnackbar: false,
      authErrorSnackbar: false
    };
  },
  watch: {
    user(newValue, oldValue) {
      // if we had no value for user before, show snackbar
      if (oldValue === null) {
        this.authSnackbar = true;
      }
    },
    authError(value) {
      // if auth error is not null, show auth error snackbar
      if (value !== null) {
        this.authErrorSnackbar = true;
      }
    }
  },
  computed: {
    ...mapGetters(["authError", "user"]),
    horizontalNavItems() {
      let items = [
        { icon: "chat", title: "Posts", link: "/posts" },
        { icon: "lock_open", title: "Sign In", link: "/signin" },
        { icon: "create", title: "Sign Up", link: "/signup" }
      ];
      if (this.user) {
        items = [{ icon: "chat", title: "Posts", link: "/posts" }];
      }
      return items;
    },
    sideNavItems() {
      let items = [
        { icon: "chat", title: "Posts", link: "/posts" },
        { icon: "lock_open", title: "Sign In", link: "/signin" },
        { icon: "create", title: "Sign Up", link: "/signup" }
      ];
      if (this.user) {
        items = [
          { icon: "chat", title: "Posts", link: "/posts" },
          { icon: "stars", title: "Create Post", link: "/post/add" },
          { icon: "account_box", title: "Profile", link: "/profile" }
        ];
      }
      return items;
    }
  },
  methods: {
    handleSignoutUser() {
      this.$store.dispatch("signoutUser");
    },
    toggleSideNav() {
      this.sideNav = !this.sideNav;
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>

```

- We need to check if it works properly.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/HandleAuthenticationErrors.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/HandleAuthenticationErrors2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/HandleAuthenticationErrors3.png)


### 51. Create Signup Form and Signup User Action 11min

- We need to modify the `store.js` to add the new `signupUser` action.

> client\src\store.js
```js
import Vue from "vue"
import Vuex from "vuex"
import router from "./router"

import { defaultClient as apolloClient } from "./main"

import { GET_CURRENT_USER, GET_POSTS, SIGNIN_USER, SIGNUP_USER } from "./queries"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    user: null,    
    loading: false,
    error: null,
    authError: null
  },
  mutations: {
    setPosts: (state, payload) => {
      state.posts = payload
    },
    setUser: (state, payload) => {
      state.user = payload
    },    
    setLoading: (state, payload) => {
      state.loading = payload
    },
    clearUser: state => (state.user = null),
    clearError: state => (state.error = null),
    setError: (state, payload) => {
      state.error = payload
    },
    setAuthError: (state, payload) => {
      state.authError = payload;
    }
  },
  actions: {
    getCurrentUser: ({ commit }) => {
      commit("setLoading", true)
      apolloClient
        .query({
          query: GET_CURRENT_USER
        })
        .then(({ data }) => {
          commit("setLoading", false)
          // Add user data to state
          commit("setUser", data.getCurrentUser)
          console.log(data.getCurrentUser)
        })
        .catch(err => {
          commit("setLoading", false)
          console.error(err)
        })
    },    
    getPosts: ({ commit }) => {
      commit("setLoading", true)
      apolloClient
        .query({
          query: GET_POSTS
        })
        .then(({ data }) => {
          commit("setPosts", data.getPosts)
          commit("setLoading", false)
        })
        .catch(err => {
          commit("setLoading", false)
          console.error(err)
        })
    },
    signinUser: ({commit}, payload) => {
      commit("clearError")
      commit("setLoading", true)
      apolloClient
        .mutate({
          mutation: SIGNIN_USER,
          variables: payload
        })
        .then(({ data }) => {
          commit("setLoading", false)
          localStorage.setItem("token", data.signinUser.token)
          // to make sure created method is run in main.js (we run getCurrentUser), reload the page
          router.go()
        })
        .catch(err => {
          commit("setLoading", false)
          commit("setError", err)          
          console.error(err)
        })
    },
    signupUser: ({ commit }, payload) => {
      commit("clearError");
      commit("setLoading", true);
      apolloClient
        .mutate({
          mutation: SIGNUP_USER,
          variables: payload
        })
        .then(({ data }) => {
          commit("setLoading", false);
          localStorage.setItem("token", data.signupUser.token);
          // to make sure created method is run in main.js (we run getCurrentUser), reload the page
          router.go();
        })
        .catch(err => {
          commit("setLoading", false);
          commit("setError", err);
          console.error(err);
        });
    },    
    signoutUser: async ({ commit }) => {
      // clear user in state
      commit("clearUser")
      // remove token in localStorage
      localStorage.setItem("token", "")
      // end session
      await apolloClient.resetStore()
      // redirect home - kick users out of private pages (i.e. profile)
      router.push("/")
    }
  },
  getters: {
    posts: state => state.posts,
    user: state => state.user,    
    loading: state => state.loading,
    error: state => state.error,
    authError: state => state.authError
  }
})

```

- We need to update the `Signup.vue` page document to include all the functionality to manage the `Signup`.

> client\src\components\Auth\Signup.vue
```html
<template>
  <v-container
    text-xs-center
    mt-5
    pt-5
  >

    <!-- Signup Title -->
    <v-layout
      row
      wrap
    >
      <v-flex
        xs12
        sm6
        offset-sm3
      >
        <h1>Get Started Here</h1>
      </v-flex>
    </v-layout>

    <!-- Error Alert -->
    <v-layout
      v-if="error"
      row
      wrap
    >
      <v-flex
        xs12
        sm6
        offset-sm3
      >
        <form-alert :message="error.message"></form-alert>
      </v-flex>
    </v-layout>

    <!-- Signup Form -->
    <v-layout
      row
      wrap
    >
      <v-flex
        xs12
        sm6
        offset-sm3
      >
        <v-card
          color="accent"
          dark
        >
          <v-container>
            <v-form
              v-model="isFormValid"
              lazy-validation
              ref="form"
              @submit.prevent="handleSignupUser"
            >

              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    :rules="usernameRules"
                    v-model="username"
                    prepend-icon="face"
                    label="Username"
                    type="text"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    :rules="emailRules"
                    v-model="email"
                    prepend-icon="email"
                    label="Email"
                    type="email"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    :rules="passwordRules"
                    v-model="password"
                    prepend-icon="extension"
                    label="Password"
                    type="password"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    :rules="passwordRules"
                    v-model="passwordConfirmation"
                    prepend-icon="gavel"
                    label="Confirm Password"
                    type="password"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-btn
                    :loading="loading"
                    :disabled="!isFormValid || loading"
                    color="info"
                    type="submit"
                  >
                    <span
                      slot="loader"
                      class="custom-loader"
                    >
                      <v-icon light>cached</v-icon>
                    </span>
                    Signup</v-btn>
                  <h3>Already have an account?
                    <router-link to="/signin">Signin</router-link>
                  </h3>
                </v-flex>
              </v-layout>

            </v-form>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Signup",
  data() {
    return {
      isFormValid: true,
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      usernameRules: [
        username => !!username || "Username is required",
        username =>
          username.length < 10 || "Username cannot be more than 10 characters"
      ],
      emailRules: [
        email => !!email || "Email is required",
        email => /.@+./.test(email) || "Email must be valid"
      ],
      passwordRules: [
        password => !!password || "Password is required",
        password =>
          password.length >= 4 || "Password must be at least 4 characters",
        confirmation => confirmation === this.password || "Passwords must match"
      ]
    };
  },
  watch: {
    user(value) {
      // if user value changes, redirect to home page
      if (value) {
        this.$router.push("/");
      }
    }
  },
  computed: {
    ...mapGetters(["loading", "error", "user"])
  },
  methods: {
    handleSignupUser() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("signupUser", {
          username: this.username,
          email: this.email,
          password: this.password
        });
      }
    }
  }
};
</script>

<style>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
```

- We need to ensure it works properly.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateSignupFormAndSignupUserAction.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateSignupFormAndSignupUserAction2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateSignupFormAndSignupUserAction3.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateSignupFormAndSignupUserAction4.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateSignupFormAndSignupUserAction5.png)

## Section 10: Add Post / Infinite Scroll Components 0 / 6|58min

### 52. Make Add Post Form 8min

- We are going to modify the `posts\add.vue` page document to include the form that it's going to allow us to create a new `post`.

> client\pages\posts\add.vue
```html
<template>
  <v-container text-xs-center mt-5 pt-5>

    <!-- Add Post Title -->
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="primary--text">Add Post</h1>
      </v-flex>
    </v-layout>

    <!-- Add Post Form -->
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>

        <v-form v-model="isFormValid" lazy-validation ref="form" @submit.prevent="handleAddPost">

          <!-- Title Input -->
          <v-layout row>
            <v-flex xs12>
              <v-text-field :rules="titleRules" v-model="title" label="Post Title" type="text" required></v-text-field>
            </v-flex>
          </v-layout>

          <!-- Image Url Input -->
          <v-layout row>
            <v-flex xs12>
              <v-text-field :rules="imageRules" v-model="imageUrl" label="Image URL" type="text" required></v-text-field>
            </v-flex>
          </v-layout>

          <!-- Image Preview -->
          <v-layout row>
            <v-flex xs12>
              <img :src="imageUrl" height="300px">
            </v-flex>
          </v-layout>

          <!-- Categories Select -->
          <v-layout row>
            <v-flex xs12>
              <v-select v-model="categories" :rules="categoriesRules" :items="['Art', 'Education', 'Travel', 'Photography', 'Technology']" multiple label="Categories"></v-select>
            </v-flex>
          </v-layout>

          <!-- Description Text Area -->
          <v-layout row>
            <v-flex xs12>
              <v-textarea :rules="descRules" v-model="description" label="Description" type="text" required></v-textarea>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12>
              <v-btn :loading="loading" :disabled="!isFormValid || loading" color="info" type="submit">
                <span slot="loader" class="custom-loader">
                  <v-icon light>cached</v-icon>
                </span>
                Submit</v-btn>
            </v-flex>
          </v-layout>

        </v-form>

      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AddPost",
  data() {
    return {
      isFormValid: true,
      title: "",
      imageUrl: "",
      categories: [],
      description: "",
      titleRules: [
        title => !!title || "Title is required",
        title => title.length < 20 || "Title must have less than 20 characters"
      ],
      imageRules: [image => !!image || "Image is required"],
      categoriesRules: [
        categories =>
          categories.length >= 1 || "At least one category is required"
      ],
      descRules: [
        desc => !!desc || "Description is required",
        desc =>
          desc.length < 200 || "Description must have less than 200 characters"
      ]
    };
  }
};
</script>

```

- We need to ensure it works correctly

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/MakeAddPostForm.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/MakeAddPostForm2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/MakeAddPostForm3.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/MakeAddPostForm4.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/MakeAddPostForm5.png)

### 53. Create and Execute addPost Action / Mutation 10min

- We need to modify the `queries.js` document to include the `addPost` mutation.

> client\src\queries.js
```js
import { gql } from "apollo-boost";

/* Posts Queries */
export const GET_POSTS = gql`
  query {
    getPosts {
      _id
      title
      imageUrl
    }
  }
`;

/* User Queries */
export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      _id
      username
      email
      password
      avatar
      joinDate
      favorites {
        _id
        title
        imageUrl
      }
    }
  }
`;

/* Posts Mutations */
export const ADD_POST = gql`
  mutation(
    $title: String!
    $imageUrl: String!
    $categories: [String]!
    $description: String!
    $creatorId: ID!
  ) {
    addPost(
      title: $title
      imageUrl: $imageUrl
      categories: $categories
      description: $description
      creatorId: $creatorId
    ) {
      _id
      title
      imageUrl
      categories
      description
    }
  }
`;

/* User Mutations */
export const SIGNIN_USER = gql`
  mutation($username: String!, $password: String!) {
    signinUser(username: $username, password: $password) {
      token
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    signupUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`;
```

- We need to modify the `store.js` store document to include the `addPost` action.

> client\src\store.js
```js
import Vue from "vue"
import Vuex from "vuex"
import router from "./router"

import { defaultClient as apolloClient } from "./main"

import { GET_CURRENT_USER, GET_POSTS, SIGNIN_USER, SIGNUP_USER, ADD_POST } from "./queries"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    user: null,    
    loading: false,
    error: null,
    authError: null
  },
  mutations: {
    setPosts: (state, payload) => {
      state.posts = payload
    },
    setUser: (state, payload) => {
      state.user = payload
    },    
    setLoading: (state, payload) => {
      state.loading = payload
    },
    clearUser: state => (state.user = null),
    clearError: state => (state.error = null),
    setError: (state, payload) => {
      state.error = payload
    },
    setAuthError: (state, payload) => {
      state.authError = payload
    }
  },
  actions: {
    getCurrentUser: ({ commit }) => {
      commit("setLoading", true)
      apolloClient
        .query({
          query: GET_CURRENT_USER
        })
        .then(({ data }) => {
          commit("setLoading", false)
          // Add user data to state
          commit("setUser", data.getCurrentUser)
          console.log(data.getCurrentUser)
        })
        .catch(err => {
          commit("setLoading", false)
          console.error(err)
        })
    },    
    getPosts: ({ commit }) => {
      commit("setLoading", true)
      apolloClient
        .query({
          query: GET_POSTS
        })
        .then(({ data }) => {
          commit("setPosts", data.getPosts)
          commit("setLoading", false)
        })
        .catch(err => {
          commit("setLoading", false)
          console.error(err)
        })
    },
    signinUser: ({commit}, payload) => {
      commit("clearError")
      commit("setLoading", true)
      apolloClient
        .mutate({
          mutation: SIGNIN_USER,
          variables: payload
        })
        .then(({ data }) => {
          commit("setLoading", false)
          localStorage.setItem("token", data.signinUser.token)
          // to make sure created method is run in main.js (we run getCurrentUser), reload the page
          router.go()
        })
        .catch(err => {
          commit("setLoading", false)
          commit("setError", err)          
          console.error(err)
        })
    },
    addPost: (_ , payload) => {
      apolloClient
        .mutate({
          mutation: ADD_POST,
          variables: payload,
        })
        .then(({ data }) => {
          console.log(data.addPost);
        })
        .catch(err => {
          console.error(err);
        });
    },    
    signupUser: ({ commit }, payload) => {
      commit("clearError");
      commit("setLoading", true);
      apolloClient
        .mutate({
          mutation: SIGNUP_USER,
          variables: payload
        })
        .then(({ data }) => {
          commit("setLoading", false);
          localStorage.setItem("token", data.signupUser.token);
          // to make sure created method is run in main.js (we run getCurrentUser), reload the page
          router.go();
        })
        .catch(err => {
          commit("setLoading", false);
          commit("setError", err);
          console.error(err);
        });
    },    
    signoutUser: async ({ commit }) => {
      // clear user in state
      commit("clearUser")
      // remove token in localStorage
      localStorage.setItem("token", "")
      // end session
      await apolloClient.resetStore()
      // redirect home - kick users out of private pages (i.e. profile)
      router.push("/")
    }
  },
  getters: {
    posts: state => state.posts,
    user: state => state.user,    
    loading: state => state.loading,
    error: state => state.error,
    authError: state => state.authError
  }
})

```

- We need to modify the `AddPost.vue` page document to include the call to the `addPost` action.

> client\src\components\Posts\AddPost.vue
```html
<template>
  <v-container text-xs-center mt-5 pt-5>

    <!-- Add Post Title -->
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="primary--text">Add Post</h1>
      </v-flex>
    </v-layout>

    <!-- Add Post Form -->
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>

        <v-form v-model="isFormValid" lazy-validation ref="form" @submit.prevent="handleAddPost">

          <!-- Title Input -->
          <v-layout row>
            <v-flex xs12>
              <v-text-field :rules="titleRules" v-model="title" label="Post Title" type="text" required></v-text-field>
            </v-flex>
          </v-layout>

          <!-- Image Url Input -->
          <v-layout row>
            <v-flex xs12>
              <v-text-field :rules="imageRules" v-model="imageUrl" label="Image URL" type="text" required></v-text-field>
            </v-flex>
          </v-layout>

          <!-- Image Preview -->
          <v-layout row>
            <v-flex xs12>
              <img :src="imageUrl" height="300px">
            </v-flex>
          </v-layout>

          <!-- Categories Select -->
          <v-layout row>
            <v-flex xs12>
              <v-select v-model="categories" :rules="categoriesRules" :items="['Art', 'Education', 'Food', 'Furniture', 'Travel', 'Photography', 'Technology']" multiple label="Categories"></v-select>
            </v-flex>
          </v-layout>

          <!-- Description Text Area -->
          <v-layout row>
            <v-flex xs12>
              <v-textarea :rules="descRules" v-model="description" label="Description" type="text" required></v-textarea>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12>
              <v-btn :loading="loading" :disabled="!isFormValid || loading" color="info" type="submit">
                <span slot="loader" class="custom-loader">
                  <v-icon light>cached</v-icon>
                </span>
                Submit</v-btn>
            </v-flex>
          </v-layout>

        </v-form>

      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AddPost",
  data() {
    return {
      isFormValid: true,
      title: "",
      imageUrl: "",
      categories: [],
      description: "",
      titleRules: [
        title => !!title || "Title is required",
        title => title.length < 20 || "Title must have less than 20 characters"
      ],
      imageRules: [image => !!image || "Image is required"],
      categoriesRules: [
        categories =>
          categories.length >= 1 || "At least one category is required"
      ],
      descRules: [
        desc => !!desc || "Description is required",
        desc =>
          desc.length < 200 || "Description must have less than 200 characters"
      ]
    };
  },
  computed: {
    ...mapGetters(["loading", "user"])
  },
  methods: {
    handleAddPost() {
      if (this.$refs.form.validate()) {
        // add post action
        this.$store.dispatch("addPost", {
          title: this.title,
          imageUrl: this.imageUrl,
          categories: this.categories,
          description: this.description,
          creatorId: this.user._id
        });
        this.$router.push("/");
      }
    }
  }
};
</script>

```

- We need to update the `router.js` document to forbid the access to the `postAdd` page if the user is not authenticated using the `AuthGuard` middleware.

> client\src\router.js
```js
import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";

import AddPost from "./components/Posts/AddPost.vue";
import Posts from "./components/Posts/Posts.vue";

import Profile from "./components/Auth/Profile.vue";
import Signin from "./components/Auth/Signin.vue";
import Signup from "./components/Auth/Signup.vue";

import AuthGuard from "./AuthGuard";

Vue.use(Router);

export default new Router({
  mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/posts",
      name: "Posts",
      component: Posts
    },
    {
      path: "/post/add",
      name: "AddPost",
      component: AddPost,
      beforeEnter: AuthGuard
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
      beforeEnter: AuthGuard
    },
    {
      path: "/signin",
      name: "Signin",
      component: Signin
    },
    {
      path: "/Signup",
      name: "Signup",
      component: Signup
    }
  ]
});

```

- We need to ensure it works.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateAndExecuteAddPostActionMutation.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateAndExecuteAddPostActionMutation2.png)

### 54. Update and Optimistic Response for addPost Mutation 11min

- We need to modify the `store.js` store document to update the cache with the new post so that it is included immediately.

> client\src\store.js
```js
import Vue from "vue"
import Vuex from "vuex"
import router from "./router"

import { defaultClient as apolloClient } from "./main"

import { GET_CURRENT_USER, GET_POSTS, SIGNIN_USER, SIGNUP_USER, ADD_POST } from "./queries"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    user: null,    
    loading: false,
    error: null,
    authError: null
  },
  mutations: {
    setPosts: (state, payload) => {
      state.posts = payload
    },
    setUser: (state, payload) => {
      state.user = payload
    },    
    setLoading: (state, payload) => {
      state.loading = payload
    },
    clearUser: state => (state.user = null),
    clearError: state => (state.error = null),
    setError: (state, payload) => {
      state.error = payload
    },
    setAuthError: (state, payload) => {
      state.authError = payload
    }
  },
  actions: {
    getCurrentUser: ({ commit }) => {
      commit("setLoading", true)
      apolloClient
        .query({
          query: GET_CURRENT_USER
        })
        .then(({ data }) => {
          commit("setLoading", false)
          // Add user data to state
          commit("setUser", data.getCurrentUser)
          console.log(data.getCurrentUser)
        })
        .catch(err => {
          commit("setLoading", false)
          console.error(err)
        })
    },    
    getPosts: ({ commit }) => {
      commit("setLoading", true)
      apolloClient
        .query({
          query: GET_POSTS
        })
        .then(({ data }) => {
          commit("setPosts", data.getPosts)
          commit("setLoading", false)
        })
        .catch(err => {
          commit("setLoading", false)
          console.error(err)
        })
    },
    signinUser: ({commit}, payload) => {
      commit("clearError")
      commit("setLoading", true)
      apolloClient
        .mutate({
          mutation: SIGNIN_USER,
          variables: payload
        })
        .then(({ data }) => {
          commit("setLoading", false)
          localStorage.setItem("token", data.signinUser.token)
          // to make sure created method is run in main.js (we run getCurrentUser), reload the page
          router.go()
        })
        .catch(err => {
          commit("setLoading", false)
          commit("setError", err)          
          console.error(err)
        })
    },
    addPost: (_ , payload) => {
      apolloClient
        .mutate({
          mutation: ADD_POST,
          variables: payload,
          update: (cache, { data: { addPost } }) => {
            // First read the query you want to update
            const data = cache.readQuery({ query: GET_POSTS });
            // Create updated data
            data.getPosts.unshift(addPost);
            // Write updated data back to query
            console.log(data);
            cache.writeQuery({
              query: GET_POSTS,
              data
            });
          },
          // optimistic response ensures data is added immediately as we specified for the update function
          optimisticResponse: {
            __typename: 'Mutation',
            addPost: {
              __typename: 'Post',
              _id: -1,
              ...payload
            }
          }
        })
        .then(({ data }) => {
          console.log(data.addPost);
        })
        .catch(err => {
          console.error(err);
        });
    },    
    signupUser: ({ commit }, payload) => {
      commit("clearError");
      commit("setLoading", true);
      apolloClient
        .mutate({
          mutation: SIGNUP_USER,
          variables: payload
        })
        .then(({ data }) => {
          commit("setLoading", false);
          localStorage.setItem("token", data.signupUser.token);
          // to make sure created method is run in main.js (we run getCurrentUser), reload the page
          router.go();
        })
        .catch(err => {
          commit("setLoading", false);
          commit("setError", err);
          console.error(err);
        });
    },    
    signoutUser: async ({ commit }) => {
      // clear user in state
      commit("clearUser")
      // remove token in localStorage
      localStorage.setItem("token", "")
      // end session
      await apolloClient.resetStore()
      // redirect home - kick users out of private pages (i.e. profile)
      router.push("/")
    }
  },
  getters: {
    posts: state => state.posts,
    user: state => state.user,    
    loading: state => state.loading,
    error: state => state.error,
    authError: state => state.authError
  }
})

```

- We need to ensure it works.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/UpdateAndOptimisticResponseForAddPostMutation.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/UpdateAndOptimisticResponseForAddPostMutation2.png)

### 55. Infinite Scroll on Posts Page; Add typeDef, Resolver, and Query 8min

- We need to modify the `typeDefs.gql` document to include the new `infiniteScrollPosts` query.

> typeDefs.gql
```graphql
type User {
  _id: ID
  username: String! @unique
  email: String!
  password: String!
  avatar: String
  joinDate: String
  favorites: [Post]
}

type Post {
  _id: ID
  title: String!
  imageUrl: String!
  categories: [String]!
  description: String!
  createdDate: String
  likes: Int
  createdBy: User!
  messages: [Message]
}

type Message {
  _id: ID
  messageBody: String!
  messageDate: String
  messageUser: User!
}

type Token {
  token: String!
}

type PostsPage {
  posts: [Post]
  hasMore: Boolean
}

type Query {
  getCurrentUser: User
  getPosts: [Post]
  infiniteScrollPosts(pageNum: Int!, pageSize: Int!): PostsPage
}

type Mutation {
  addPost(
    title: String!
    imageUrl: String!
    categories: [String]!
    description: String!
    creatorId: ID!
  ): Post!
  signinUser(username: String!, password: String!): Token
  signupUser(username: String!, email: String!, password: String!): Token
}

```

- We need to modify the `resolvers.js` document to include the new `infiniteScrollPosts` query.

> resolvers.js
```js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createToken = (user, secret, expiresIn) => {
  const { username, email } = user;
  return jwt.sign({ username, email }, secret, { expiresIn });
};

module.exports = {
  Query: {
    getCurrentUser: async (_, _args, { User, currentUser }) => {
      if (!currentUser) {
        return null;
      }
      const user = await User.findOne({
        username: currentUser.username
      }).populate({
        path: "favorites",
        model: "Post"
      });
      return user;
    },
    getPosts: async (_, _args, { Post }) => {
      const posts = await Post.find({})
        .sort({ createdDate: "desc" })
        .populate({
          path: "createdBy",
          model: "User"
        });
      return posts;
    },
    infiniteScrollPosts: async (_, { pageNum, pageSize }, { Post }) => {
      let posts;
      if (pageNum === 1) {
        posts = await Post.find({})
          .sort({ createdDate: "desc" })
          .populate({
            path: "createdBy",
            model: "User"
          })
          .limit(pageSize);
      } else {
        // If page number is greater than one, figure out how many documents to skip
        const skips = pageSize * (pageNum - 1);
        posts = await Post.find({})
          .sort({ createdDate: "desc" })
          .populate({
            path: "createdBy",
            model: "User"
          })
          .skip(skips)
          .limit(pageSize);
      }
      const totalDocs = await Post.countDocuments();
      const hasMore = totalDocs > pageSize * pageNum;
      return { posts, hasMore };
    }
  },
  Mutation: {
    addPost: async (
      _,
      { title, imageUrl, categories, description, creatorId },
      { Post }
    ) => {
      const newPost = await new Post({
        title,
        imageUrl,
        categories,
        description,
        createdBy: creatorId
      }).save();
      return newPost;
    },
    signinUser: async (_, { username, password }, { User }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new Error("User not found");
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        throw new Error("Invalid password");
      }
      return { token: createToken(user, process.env.SECRET, "1hr") };
    },
    signupUser: async (_, { username, email, password }, { User }) => {
      const user = await User.findOne({ username });
      if (user) {
        throw new Error("User already exists");
      }
      const newUser = await new User({
        username,
        email,
        password
      }).save();
      return { token: createToken(newUser, process.env.SECRET, "1hr") };
    }
  }
};

```

- We are going to modify the `queries.js` document to include the new `infiniteScrollPosts` query.

> client\src\queries.js
```js
import { gql } from "apollo-boost";

/* Posts Queries */
export const GET_POSTS = gql`
  query {
    getPosts {
      _id
      title
      imageUrl
    }
  }
`;

/* User Queries */
export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      _id
      username
      email
      password
      avatar
      joinDate
      favorites {
        _id
        title
        imageUrl
      }
    }
  }
`;

export const INFINITE_SCROLL_POSTS = gql`
  query($pageNum: Int!, $pageSize: Int!) {
    infiniteScrollPosts(pageNum: $pageNum, pageSize: $pageSize) {
      hasMore
      posts {
        _id
        title
        imageUrl
        categories
        description
        likes
        createdDate
        messages {
          _id
        }
        createdBy {
          _id
          username
          avatar
        }
      }
    }
  }
`;

/* Posts Mutations */
export const ADD_POST = gql`
  mutation(
    $title: String!
    $imageUrl: String!
    $categories: [String]!
    $description: String!
    $creatorId: ID!
  ) {
    addPost(
      title: $title
      imageUrl: $imageUrl
      categories: $categories
      description: $description
      creatorId: $creatorId
    ) {
      _id
      title
      imageUrl
      categories
      description
    }
  }
`;

/* User Mutations */
export const SIGNIN_USER = gql`
  mutation($username: String!, $password: String!) {
    signinUser(username: $username, password: $password) {
      token
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    signupUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`;

```

- We need to ensure the new `infiniteScrollPosts` works properly.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/InfiniteScrollOnPostsPage.png)

> query
```graphql
  query($pageNum: Int!, $pageSize: Int!) {
    infiniteScrollPosts(pageNum: $pageNum, pageSize: $pageSize) {
      hasMore
      posts {
        _id
        title
        imageUrl
        categories
        description
        likes
        createdDate
        messages {
          _id
        }
        createdBy {
          _id
          username
          avatar
        }
      }
    }
  }
```

> variables
```json
{
  "pageNum": 1,
  "pageSize": 3
}
```

> response
```json
{
  "data": {
    "infiniteScrollPosts": {
      "hasMore": true,
      "posts": [
        {
          "_id": "5d4fa77cfe7af92694bf3cae",
          "title": "Abstract Painting",
          "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Vassily_Kandinsky%2C_1939_-_Composition_10.jpg/1024px-Vassily_Kandinsky%2C_1939_-_Composition_10.jpg",
          "categories": [
            "Art"
          ],
          "description": "Nice painting",
          "likes": 0,
          "createdDate": "Sun Aug 11 2019 06:28:28 GMT+0100 (Irish Standard Time)",
          "messages": [],
          "createdBy": {
            "_id": "5d35390f58729c10f875d41c",
            "username": "Fofo",
            "avatar": "http://gravatar.com/avatar/d7ec7a6a7980721f40631794b6e691f8?d=identicon"
          }
        },
        {
          "_id": "5d4fa31dcb16795b68483e10",
          "title": "At the Beach",
          "imageUrl": "https://images.pexels.com/photos/1139541/pexels-photo-1139541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "categories": [
            "Photography",
            "Travel"
          ],
          "description": "A nice photo of the waves",
          "likes": 0,
          "createdDate": "Sun Aug 11 2019 06:09:49 GMT+0100 (Irish Standard Time)",
          "messages": [],
          "createdBy": {
            "_id": "5d35390f58729c10f875d41c",
            "username": "Fofo",
            "avatar": "http://gravatar.com/avatar/d7ec7a6a7980721f40631794b6e691f8?d=identicon"
          }
        },
        {
          "_id": "5d0e10be7dd57444d0607790",
          "title": "Tasty coffee",
          "imageUrl": "https://images.pexels.com/photos/374757/pexels-photo-374757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "categories": [
            "Art",
            "Food"
          ],
          "description": "Some nice coffee artwork",
          "likes": 0,
          "createdDate": "Sat Jun 22 2019 12:27:58 GMT+0100 (Irish Standard Time)",
          "messages": [],
          "createdBy": {
            "_id": "5d36a9e007bced421c3a2031",
            "username": "John",
            "avatar": "http://gravatar.com/avatar/61409aa1fd47d4a5332de23cbf59a36f?d=identicon"
          }
        }
      ]
    }
  }
}
```


![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/InfiniteScrollOnPostsPage2.png)

> query
```graphql
  query($pageNum: Int!, $pageSize: Int!) {
    infiniteScrollPosts(pageNum: $pageNum, pageSize: $pageSize) {
      hasMore
      posts {
        _id
        title
        imageUrl
        categories
        description
        likes
        createdDate
        messages {
          _id
        }
        createdBy {
          _id
          username
          avatar
        }
      }
    }
  }
```

> variables
```json
{
  "pageNum": 2,
  "pageSize": 3
}
```

> response
```json
{
  "data": {
    "infiniteScrollPosts": {
      "hasMore": false,
      "posts": [
        {
          "_id": "5d0e0fdc7dd57444d060778d",
          "title": "Credenza",
          "imageUrl": "https://images.crateandbarrel.com/is/image/Crate/ClybournIICredenza3QF16/?$web_zoom_furn_av$&180802085137&wid=1008&hei=567",
          "categories": [
            "Furniture"
          ],
          "description": "A piece of furniture I want to buy",
          "likes": 0,
          "createdDate": "Sat Jun 22 2019 12:24:12 GMT+0100 (Irish Standard Time)",
          "messages": [],
          "createdBy": {
            "_id": "5d36a9e007bced421c3a2031",
            "username": "John",
            "avatar": "http://gravatar.com/avatar/61409aa1fd47d4a5332de23cbf59a36f?d=identicon"
          }
        },
        {
          "_id": "5d04d377deb8673e8c38fc2f",
          "title": "Mona lisa",
          "imageUrl": "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.readingpublicmuseum.org%2Fexhibit_secrets-of-mona-lisa-4.jpg&f=1",
          "categories": [
            "Art"
          ],
          "description": "A painting",
          "likes": 0,
          "createdDate": "Sat Jun 15 2019 12:16:07 GMT+0100 (Irish Standard Time)",
          "messages": [],
          "createdBy": {
            "_id": "5d36a9e007bced421c3a2031",
            "username": "John",
            "avatar": "http://gravatar.com/avatar/61409aa1fd47d4a5332de23cbf59a36f?d=identicon"
          }
        }
      ]
    }
  }
}
```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/InfiniteScrollOnPostsPage3.png)

> query
```graphql
  query($pageNum: Int!, $pageSize: Int!) {
    infiniteScrollPosts(pageNum: $pageNum, pageSize: $pageSize) {
      hasMore
      posts {
        _id
        title
        imageUrl
        categories
        description
        likes
        createdDate
        messages {
          _id
        }
        createdBy {
          _id
          username
          avatar
        }
      }
    }
  }
```

> variables
```json
{
  "pageNum": 3,
  "pageSize": 3
}
```

> response
```json
{
  "data": {
    "infiniteScrollPosts": {
      "hasMore": false,
      "posts": []
    }
  }
}
```

### 56. Add Infinite Scroll Functionality on Client 10min

- We need to modify the `Posts.vue` page document to include all the posts based on the new `infiniteScrollPosts` query.

> client\src\components\Posts\Posts.vue
```html
<template>
  <v-container
    text-xs-center
    v-if="infiniteScrollPosts"
  >
    <div
      v-for="post in infiniteScrollPosts.posts"
      :key="post._id"
    >
      <img
        :src="post.imageUrl"
        height="100px"
        alt=""
      />
      <h3>{{post.title}}</h3>
    </div>
    <v-btn
      color="info"
      @click="showMorePosts"
      v-if="showMoreEnabled"
    >Fetch More</v-btn>
  </v-container>


</template>

<script>
import { INFINITE_SCROLL_POSTS } from "../../queries";

const pageSize = 2;

export default {
  name: "Posts",
  data() {
    return {
      pageNum: 1,
      showMoreEnabled: true
    };
  },
  apollo: {
    infiniteScrollPosts: {
      query: INFINITE_SCROLL_POSTS,
      variables: {
        pageNum: 1,
        pageSize
      }
    }
  },
  methods: {
    showMorePosts() {
      this.pageNum += 1;
      // fetch more data and transform original result
      this.$apollo.queries.infiniteScrollPosts.fetchMore({
        variables: {
          // pageNum incremented by 1
          pageNum: this.pageNum,
          pageSize
        },
        updateQuery: (prevResult, { fetchMoreResult }) => {
          console.log("previous result", prevResult.infiniteScrollPosts.posts);
          console.log("fetch more result", fetchMoreResult);

          const newPosts = fetchMoreResult.infiniteScrollPosts.posts;
          const hasMore = fetchMoreResult.infiniteScrollPosts.hasMore;
          this.showMoreEnabled = hasMore;

          return {
            infiniteScrollPosts: {
              __typename: prevResult.infiniteScrollPosts.__typename,
              // Merge previous posts with new posts
              posts: [...prevResult.infiniteScrollPosts.posts, ...newPosts],
              hasMore
            }
          };
        }
      });
    }
  }
};
</script>

```

- We need to test if it works.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddInfiniteScrollFunctionalityOnClient.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddInfiniteScrollFunctionalityOnClient2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddInfiniteScrollFunctionalityOnClient3.png)

### 57. Add Grid Layout / Cards for Each Post in Posts Component 10min

- We are going to improve the `Posts.vue` document using a `Grid Layout` and a `Card` Vuetify component for each post.

> client\src\components\Posts\Posts.vue
```html
<template>
  <v-container fluid grid-list-xl>

    <!-- Post Cards -->
    <v-layout row wrap v-if="infiniteScrollPosts">
      <v-flex xs12 sm6 v-for="post in infiniteScrollPosts.posts" :key="post._id">
        <v-card hover>
          <v-card-media :src="post.imageUrl" height="30vh" lazy></v-card-media>

          <v-card-actions>
            <v-card-title primary>
              <div>
                <div class="headline">{{post.title}}</div>
                <span class="grey--text">{{post.likes}} likes - {{post.messages.length}} comments</span>
              </div>
            </v-card-title>
            <v-spacer></v-spacer>
            <v-btn @click="showPostCreator = !showPostCreator" icon>
              <v-icon>{{`keyboard_arrow_${showPostCreator ? 'up' : 'down'}`}}</v-icon>
            </v-btn>
          </v-card-actions>

          <!-- Post Creator Tile -->
          <v-slide-y-transition>
            <v-card-text v-show="showPostCreator" class="grey lighten-4">
              <v-list-tile avatar>
                <v-list-tile-avatar>
                  <img :src="post.createdBy.avatar">
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title class="text--primary">{{post.createdBy.username}}</v-list-tile-title>
                  <v-list-tile-subtitle class="font-weight-thin">Added {{post.createdDate}}</v-list-tile-subtitle>
                </v-list-tile-content>

                <v-list-tile-action>
                  <v-btn icon ripple>
                    <v-icon color="grey lighten-1">info</v-icon>
                  </v-btn>
                </v-list-tile-action>
              </v-list-tile>
            </v-card-text>
          </v-slide-y-transition>

        </v-card>
      </v-flex>
    </v-layout>

    <!-- Fetch More Button -->
    <v-layout v-if="showMoreEnabled" column>
      <v-flex xs12>
        <v-layout justify-center row>
          <v-btn color="info" @click="showMorePosts">Fetch More</v-btn>
        </v-layout>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import { INFINITE_SCROLL_POSTS } from "../../queries";

const pageSize = 2;

export default {
  name: "Posts",
  data() {
    return {
      pageNum: 1,
      showMoreEnabled: true,
      showPostCreator: false
    };
  },
  apollo: {
    infiniteScrollPosts: {
      query: INFINITE_SCROLL_POSTS,
      variables: {
        pageNum: 1,
        pageSize
      }
    }
  },
  methods: {
    showMorePosts() {
      this.pageNum += 1;
      // fetch more data and transform original result
      this.$apollo.queries.infiniteScrollPosts.fetchMore({
        variables: {
          // pageNum incremented by 1
          pageNum: this.pageNum,
          pageSize
        },
        updateQuery: (prevResult, { fetchMoreResult }) => {
          console.log("previous result", prevResult.infiniteScrollPosts.posts);
          console.log("fetch more result", fetchMoreResult);

          const newPosts = fetchMoreResult.infiniteScrollPosts.posts;
          const hasMore = fetchMoreResult.infiniteScrollPosts.hasMore;
          this.showMoreEnabled = hasMore;

          return {
            infiniteScrollPosts: {
              __typename: prevResult.infiniteScrollPosts.__typename,
              // Merge previous posts with new posts
              posts: [...prevResult.infiniteScrollPosts.posts, ...newPosts],
              hasMore
            }
          };
        }
      });
    }
  }
};
</script>
```

- We need to test if it works.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddGridLayoutCardsforEachPostInPostsComponent.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddGridLayoutCardsforEachPostInPostsComponent2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddGridLayoutCardsforEachPostInPostsComponent3.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddGridLayoutCardsforEachPostInPostsComponent4.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddGridLayoutCardsforEachPostInPostsComponent5.png)

## Section 11: Post Component 0 / 7|44min

### 58. Create Post Component and Route 5min

- We need to modify the `router.js` document to include a new route for the new `Post` Component

> client\src\router.js
```js
import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";

import AddPost from "./components/Posts/AddPost.vue";
import Posts from "./components/Posts/Posts.vue";
import Post from "./components/Posts/Post.vue";

import Profile from "./components/Auth/Profile.vue";
import Signin from "./components/Auth/Signin.vue";
import Signup from "./components/Auth/Signup.vue";

import AuthGuard from "./AuthGuard";

Vue.use(Router);

export default new Router({
  mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/posts",
      name: "Posts",
      component: Posts
    },
    {
      path: "/posts/:postId",
      name: "Post",
      component: Post,
      props: true
    },    
    {
      path: "/post/add",
      name: "AddPost",
      component: AddPost,
      beforeEnter: AuthGuard
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
      beforeEnter: AuthGuard
    },
    {
      path: "/signin",
      name: "Signin",
      component: Signin
    },
    {
      path: "/Signup",
      name: "Signup",
      component: Signup
    }
  ]
});

```

- We are going to create the new `Posts\Post.vue` document with the `Post` Component.

> client\src\components\Posts\Post.vue
```html
<template>
  <v-container>
    <h1>Post {{postId}}</h1>
  </v-container>
</template>
<script>
export default {
  name: "Post",
  props: ['postId']
};
</script>


```

- We are going to modify the `Home.vue` component document to modify the carousel component to allow it to access the `Post` information, using the new `Post` component, when it is clicked.

> client\src\components\Home.vue
```html
<template>
  <v-container text-xs-center>
    <v-layout row>
      <v-dialog v-model="loading" persistent fullscreen>
        <v-container fill-height>
          <v-layout row justify-center align-center>
            <v-progress-circular indeterminate :size="70" :width="7" color="secondary"></v-progress-circular>
          </v-layout>
        </v-container>
      </v-dialog>
    </v-layout>

    <v-flex xs12>
      <v-carousel v-if="!loading && posts.length > 0" v-bind="{ 'cycle': true }" interval="3000">
        <v-carousel-item v-for="post in posts" :key="post._id" :src="post.imageUrl" @click.native="goToPost(post._id)">
          <h1 id="carousel__title">{{post.title}}</h1>
        </v-carousel-item>
      </v-carousel>
    </v-flex>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "home",
  created() {
    this.handleGetCarouselPosts();
  },
  computed: {
    ...mapGetters(["loading", "posts"])
  },
  methods: {
    handleGetCarouselPosts() {
      // reach out to Vuex store, fire action that gets posts for carousel
      this.$store.dispatch("getPosts");
    },
    goToPost(postId) {
      this.$router.push(`/posts/${postId}`);
    }
  }
};
</script>

<style>
#carousel__title {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 5px 5px 0 0;
  padding: 0.5em;
  margin: 0 auto;
  bottom: 50px;
  left: 0;
  right: 0;
}
</style>

```

- We are going to modify the `Posts.vue` component document to modify the image component to allow it to access the `Post` information, using the new `Post` component, when it is clicked.

> client\src\components\Posts\Posts.vue
```html
<template>
  <v-container fluid grid-list-xl>

    <!-- Post Cards -->
    <v-layout row wrap v-if="infiniteScrollPosts">
      <v-flex xs12 sm6 v-for="post in infiniteScrollPosts.posts" :key="post._id">
        <v-card hover>
          <v-img @click.native="goToPost(post._id)" :src="post.imageUrl" height="30vh" lazy></v-img>

          <v-card-actions>
            <v-card-title primary>
              <div>
                <div class="headline">{{post.title}}</div>
                <span class="grey--text">{{post.likes}} likes - {{post.messages.length}} comments</span>
              </div>
            </v-card-title>
            <v-spacer></v-spacer>
            <v-btn @click="showPostCreator = !showPostCreator" icon>
              <v-icon>{{`keyboard_arrow_${showPostCreator ? 'up' : 'down'}`}}</v-icon>
            </v-btn>
          </v-card-actions>

          <!-- Post Creator Tile -->
          <v-slide-y-transition>
            <v-card-text v-show="showPostCreator" class="grey lighten-4">
              <v-list-tile avatar>
                <v-list-tile-avatar>
                  <img :src="post.createdBy.avatar">
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title class="text--primary">{{post.createdBy.username}}</v-list-tile-title>
                  <v-list-tile-sub-title class="font-weight-thin">Added {{post.createdDate}}</v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action>
                  <v-btn icon ripple>
                    <v-icon color="grey lighten-1">info</v-icon>
                  </v-btn>
                </v-list-tile-action>
              </v-list-tile>
            </v-card-text>
          </v-slide-y-transition>

        </v-card>
      </v-flex>
    </v-layout>

    <!-- Fetch More Button -->
    <v-layout v-if="showMoreEnabled" column>
      <v-flex xs12>
        <v-layout justify-center row>
          <v-btn color="info" @click="showMorePosts">Fetch More</v-btn>
        </v-layout>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import { INFINITE_SCROLL_POSTS } from "../../queries";

const pageSize = 2;

export default {
  name: "Posts",
  data() {
    return {
      pageNum: 1,
      showMoreEnabled: true,
      showPostCreator: false
    };
  },
  apollo: {
    infiniteScrollPosts: {
      query: INFINITE_SCROLL_POSTS,
      variables: {
        pageNum: 1,
        pageSize
      }
    }
  },
  methods: {
    showMorePosts() {
      this.pageNum += 1;
      // fetch more data and transform original result
      this.$apollo.queries.infiniteScrollPosts.fetchMore({
        variables: {
          // pageNum incremented by 1
          pageNum: this.pageNum,
          pageSize
        },
        updateQuery: (prevResult, { fetchMoreResult }) => {
          console.log("previous result", prevResult.infiniteScrollPosts.posts);
          console.log("fetch more result", fetchMoreResult);

          const newPosts = fetchMoreResult.infiniteScrollPosts.posts;
          const hasMore = fetchMoreResult.infiniteScrollPosts.hasMore;
          this.showMoreEnabled = hasMore;

          return {
            infiniteScrollPosts: {
              __typename: prevResult.infiniteScrollPosts.__typename,
              // Merge previous posts with new posts
              posts: [...prevResult.infiniteScrollPosts.posts, ...newPosts],
              hasMore
            }
          };
        }
      });
    },
    goToPost(postId) {
      this.$router.push(`/posts/${postId}`);
    }
  }
};
</script>

```

- We are going to check if it works.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreatePostComponentAndRoute.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreatePostComponentAndRoute2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreatePostComponentAndRoute3.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreatePostComponentAndRoute4.png)


### 59. Create and Execute getPost Query 7min

- We need to modify the `typeDefs.gql` document to include the new `getPost` Query.

> typeDefs.gql
```graphql
type User {
  _id: ID
  username: String! @unique
  email: String!
  password: String!
  avatar: String
  joinDate: String
  favorites: [Post]
}

type Post {
  _id: ID
  title: String!
  imageUrl: String!
  categories: [String]!
  description: String!
  createdDate: String
  likes: Int
  createdBy: User!
  messages: [Message]
}

type Message {
  _id: ID
  messageBody: String!
  messageDate: String
  messageUser: User!
}

type Token {
  token: String!
}

type PostsPage {
  posts: [Post]
  hasMore: Boolean
}

type Query {
  getCurrentUser: User
  getPosts: [Post]
  getPost(postId: ID!): Post!
  infiniteScrollPosts(pageNum: Int!, pageSize: Int!): PostsPage
}

type Mutation {
  addPost(
    title: String!
    imageUrl: String!
    categories: [String]!
    description: String!
    creatorId: ID!
  ): Post!
  signinUser(username: String!, password: String!): Token
  signupUser(username: String!, email: String!, password: String!): Token
}

```

- We need to modify the `resolvers.js` document to include the new `getPost` Query.

> resolvers.js
```js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createToken = (user, secret, expiresIn) => {
  const { username, email } = user;
  return jwt.sign({ username, email }, secret, { expiresIn });
};

module.exports = {
  Query: {
    getCurrentUser: async (_, _args, { User, currentUser }) => {
      if (!currentUser) {
        return null;
      }
      const user = await User.findOne({
        username: currentUser.username
      }).populate({
        path: "favorites",
        model: "Post"
      });
      return user;
    },
    getPosts: async (_, _args, { Post }) => {
      const posts = await Post.find({})
        .sort({ createdDate: "desc" })
        .populate({
          path: "createdBy",
          model: "User"
        });
      return posts;
    },
    getPost: async (_, { postId }, { Post }) => {
      const post = await Post.findOne({ _id: postId }).populate({
        path: "messages.messageUser",
        model: "User"
      });
      return post;
    },    
    infiniteScrollPosts: async (_, { pageNum, pageSize }, { Post }) => {
      let posts;
      if (pageNum === 1) {
        posts = await Post.find({})
          .sort({ createdDate: "desc" })
          .populate({
            path: "createdBy",
            model: "User"
          })
          .limit(pageSize);
      } else {
        // If page number is greater than one, figure out how many documents to skip
        const skips = pageSize * (pageNum - 1);
        posts = await Post.find({})
          .sort({ createdDate: "desc" })
          .populate({
            path: "createdBy",
            model: "User"
          })
          .skip(skips)
          .limit(pageSize);
      }
      const totalDocs = await Post.countDocuments();
      const hasMore = totalDocs > pageSize * pageNum;
      return { posts, hasMore };
    }
  },
  Mutation: {
    addPost: async (
      _,
      { title, imageUrl, categories, description, creatorId },
      { Post }
    ) => {
      const newPost = await new Post({
        title,
        imageUrl,
        categories,
        description,
        createdBy: creatorId
      }).save();
      return newPost;
    },
    signinUser: async (_, { username, password }, { User }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new Error("User not found");
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        throw new Error("Invalid password");
      }
      return { token: createToken(user, process.env.SECRET, "1hr") };
    },
    signupUser: async (_, { username, email, password }, { User }) => {
      const user = await User.findOne({ username });
      if (user) {
        throw new Error("User already exists");
      }
      const newUser = await new User({
        username,
        email,
        password
      }).save();
      return { token: createToken(newUser, process.env.SECRET, "1hr") };
    }
  }
};

```

- We need to modify the `client\src\queries.js` to include the `GET_POST` Query.

> client\src\queries.js
```graphql
import { gql } from "apollo-boost";

/* Posts Queries */
export const GET_POSTS = gql`
  query {
    getPosts {
      _id
      title
      imageUrl
    }
  }
`;

export const GET_POST = gql`
  query($postId: ID!) {
    getPost(postId: $postId) {
      _id
      title
      imageUrl
      categories
      description
      likes
      createdDate
      messages {
        _id
        messageBody
        messageDate
        messageUser {
          _id
          username
          avatar
        }
      }
    }
  }
`;

/* User Queries */
export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      _id
      username
      email
      password
      avatar
      joinDate
      favorites {
        _id
        title
        imageUrl
      }
    }
  }
`;

export const INFINITE_SCROLL_POSTS = gql`
  query($pageNum: Int!, $pageSize: Int!) {
    infiniteScrollPosts(pageNum: $pageNum, pageSize: $pageSize) {
      hasMore
      posts {
        _id
        title
        imageUrl
        categories
        description
        likes
        createdDate
        messages {
          _id
        }
        createdBy {
          _id
          username
          avatar
        }
      }
    }
  }
`;

/* Posts Mutations */
export const ADD_POST = gql`
  mutation(
    $title: String!
    $imageUrl: String!
    $categories: [String]!
    $description: String!
    $creatorId: ID!
  ) {
    addPost(
      title: $title
      imageUrl: $imageUrl
      categories: $categories
      description: $description
      creatorId: $creatorId
    ) {
      _id
      title
      imageUrl
      categories
      description
    }
  }
`;

/* User Mutations */
export const SIGNIN_USER = gql`
  mutation($username: String!, $password: String!) {
    signinUser(username: $username, password: $password) {
      token
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    signupUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`;

```

- We are going to modify the `Posts\Post.vue` page document to call the `getPost` Query to obtain the data about the post.

> client\src\components\Posts\Post.vue
```html
<template>
  <v-container v-if="getPost">
    <h1>{{getPost.title}}</h1>
  </v-container>
</template>
<script>
import { GET_POST } from "../../queries";
export default {
  name: "Post",
  props: ['postId'],
  apollo: {
    getPost: {
      query: GET_POST,
      variables() {
        return {
          postId: this.postId
        };
      }
    }
  }  
};
</script>

```

- We need to test if it works:

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateAndExecuteGetPostQuery.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateAndExecuteGetPostQuery2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateAndExecuteGetPostQuery3.png)

### 60. Build out Post Card in Post Component 8min

- We are going to modify the `Posts\Post.vue` page document to calput all the nformation about the post.

> client\src\components\Posts\Post.vue
```html
<template>
  <v-container v-if="getPost" class="mt-3" flexbox center>

    <!-- Post Card -->
    <v-layout row wrap>
      <v-flex xs12>
        <v-card hover>
          <v-card-title>
            <h1>{{getPost.title}}</h1>
            <v-btn large icon v-if="user">
              <v-icon large color="grey">favorite</v-icon>
            </v-btn>
            <h3 class="ml-3 font-weight-thin">{{getPost.likes}} LIKES</h3>
            <v-spacer></v-spacer>
            <v-icon @click="goToPreviousPage" color="info" large>arrow_back</v-icon>
          </v-card-title>

          <v-tooltip right>
            <span>Click to enlarge image</span>
            <v-card-media @click="toggleImageDialog" slot="activator" :src="getPost.imageUrl" id="post__image"></v-card-media>
          </v-tooltip>

          <!-- Post Image Dialog -->
          <v-dialog v-model="dialog">
            <v-card>
              <v-card-media :src="getPost.imageUrl" height="80vh"></v-card-media>
            </v-card>
          </v-dialog>

          <v-card-text>
            <span v-for="(category, index) in getPost.categories" :key="index">
              <v-chip class="mb-3" color="accent" text-color="white">{{category}}</v-chip>
            </span>
            <h3>{{getPost.description}}</h3>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";
import { GET_POST } from "../../queries";

export default {
  name: "Post",
  props: ['postId'],
  data() {
    return {
      dialog: false
    };
  },  
  apollo: {
    getPost: {
      query: GET_POST,
      variables() {
        return {
          postId: this.postId
        };
      }
    }
  },
  computed: {
    ...mapGetters(["user"])
  },
  methods: {
    goToPreviousPage() {
      this.$router.go(-1);
    },
    toggleImageDialog() {
      if (window.innerWidth > 500) {
        this.dialog = !this.dialog;
      }
    }
  }  
};
</script>


<style scoped>
#post__image {
  height: 400px !important;
}
</style>
```

- We need to test if it works.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/BuildOutPostCardInPostComponent.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/BuildOutPostCardInPostComponent2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/BuildOutPostCardInPostComponent3.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/BuildOutPostCardInPostComponent4.png)


### 61. Add Messages ## Section to Post Component 6min

- We are going to modify the `Posts\Post.vue` page document to include the `Messages` section


> client\src\components\Posts\Post.vue
```html
<template>
  <v-container v-if="getPost" class="mt-3" flexbox center>

    <!-- Post Card -->
    <v-layout row wrap>
      <v-flex xs12>
        <v-card hover>
          <v-card-title>
            <h1>{{getPost.title}}</h1>
            <v-btn large icon v-if="user">
              <v-icon large color="grey">favorite</v-icon>
            </v-btn>
            <h3 class="ml-3 font-weight-thin">{{getPost.likes}} LIKES</h3>
            <v-spacer></v-spacer>
            <v-icon @click="goToPreviousPage" color="info" large>arrow_back</v-icon>
          </v-card-title>

          <v-tooltip right>
            <span>Click to enlarge image</span>
            <v-img @click="toggleImageDialog" slot="activator" :src="getPost.imageUrl" id="post__image"></v-img>
          </v-tooltip>

          <!-- Post Image Dialog -->
          <v-dialog v-model="dialog">
            <v-card>
              <v-img :src="getPost.imageUrl" height="80vh"></v-img>
            </v-card>
          </v-dialog>

          <v-card-text>
            <span v-for="(category, index) in getPost.categories" :key="index">
              <v-chip class="mb-3" color="accent" text-color="white">{{category}}</v-chip>
            </span>
            <h3>{{getPost.description}}</h3>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <!-- Messages Section -->
    <div class="mt-3">
      <!-- Message Input -->
      <v-layout class="mb-3" v-if="user">
        <v-flex xs12>
          <v-form>
            <v-layout row>
              <v-flex xs12>
                <v-text-field clearable append-outer-icon="send" label="Add Message" type="text" prepend-icon="email" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-form>
        </v-flex>
      </v-layout>

      <!-- Messages -->
      <v-layout row wrap>
        <v-flex xs12>
          <v-list subheader two-line>
            <v-subheader>Messages ({{getPost.messages.length}})</v-subheader>

            <template v-for="message in getPost.messages">
              <v-divider :key="message._id"></v-divider>

              <v-list-tile avatar inset :key="message.title">
                <v-list-tile-avatar>
                  <img :src="message.messageUser.avatar">
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title>
                    {{message.messageBody}}
                  </v-list-tile-title>
                  <v-list-tile-sub-title>
                    {{message.messageUser.username}}
                    <span class="grey--text text--lighten-1 hidden-xs-only">{{message.messageDate}}</span>
                  </v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action class='hidden-xs-only'>
                  <v-icon color="grey">chat_bubble</v-icon>
                </v-list-tile-action>

              </v-list-tile>
            </template>
          </v-list>
        </v-flex>
      </v-layout>

    </div>
        
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";
import { GET_POST } from "../../queries";

export default {
  name: "Post",
  props: ['postId'],
  data() {
    return {
      dialog: false
    };
  },  
  apollo: {
    getPost: {
      query: GET_POST,
      variables() {
        return {
          postId: this.postId
        };
      }
    }
  },
  computed: {
    ...mapGetters(["user"])
  },
  methods: {
    goToPreviousPage() {
      this.$router.go(-1);
    },
    toggleImageDialog() {
      if (window.innerWidth > 500) {
        this.dialog = !this.dialog;
      }
    }
  }  
};
</script>


<style scoped>
#post__image {
  height: 400px !important;
}
</style>
```

- We can test if it works but as we don't have messages yet we can't see much.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddMessagesSectionToPostComponent.png)

### 62. Create addPostMessage Mutation 6min

- We need to modify the `typeDefs.gql` document to include the new `addPostMessage` Mutation

> typeDefs.gql
```graphql
type User {
  _id: ID
  username: String! @unique
  email: String!
  password: String!
  avatar: String
  joinDate: String
  favorites: [Post]
}

type Post {
  _id: ID
  title: String!
  imageUrl: String!
  categories: [String]!
  description: String!
  createdDate: String
  likes: Int
  createdBy: User!
  messages: [Message]
}

type Message {
  _id: ID
  messageBody: String!
  messageDate: String
  messageUser: User!
}

type Token {
  token: String!
}

type PostsPage {
  posts: [Post]
  hasMore: Boolean
}

type Query {
  getCurrentUser: User
  getPosts: [Post]
  getPost(postId: ID!): Post!
  infiniteScrollPosts(pageNum: Int!, pageSize: Int!): PostsPage
}

type Mutation {
  addPost(
    title: String!
    imageUrl: String!
    categories: [String]!
    description: String!
    creatorId: ID!
  ): Post!
  addPostMessage(messageBody: String!, userId: ID!, postId: ID!): Message!
  signinUser(username: String!, password: String!): Token
  signupUser(username: String!, email: String!, password: String!): Token
}

```


- We need to modify the `resolvers.js` document to include the new `addPostMessage` Mutation

> resolvers.js
```js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createToken = (user, secret, expiresIn) => {
  const { username, email } = user;
  return jwt.sign({ username, email }, secret, { expiresIn });
};

module.exports = {
  Query: {
    getCurrentUser: async (_, _args, { User, currentUser }) => {
      if (!currentUser) {
        return null;
      }
      const user = await User.findOne({
        username: currentUser.username
      }).populate({
        path: "favorites",
        model: "Post"
      });
      return user;
    },
    getPosts: async (_, _args, { Post }) => {
      const posts = await Post.find({})
        .sort({ createdDate: "desc" })
        .populate({
          path: "createdBy",
          model: "User"
        });
      return posts;
    },
    getPost: async (_, { postId }, { Post }) => {
      const post = await Post.findOne({ _id: postId }).populate({
        path: "messages.messageUser",
        model: "User"
      });
      return post;
    },    
    infiniteScrollPosts: async (_, { pageNum, pageSize }, { Post }) => {
      let posts;
      if (pageNum === 1) {
        posts = await Post.find({})
          .sort({ createdDate: "desc" })
          .populate({
            path: "createdBy",
            model: "User"
          })
          .limit(pageSize);
      } else {
        // If page number is greater than one, figure out how many documents to skip
        const skips = pageSize * (pageNum - 1);
        posts = await Post.find({})
          .sort({ createdDate: "desc" })
          .populate({
            path: "createdBy",
            model: "User"
          })
          .skip(skips)
          .limit(pageSize);
      }
      const totalDocs = await Post.countDocuments();
      const hasMore = totalDocs > pageSize * pageNum;
      return { posts, hasMore };
    }
  },
  Mutation: {
    addPost: async (
      _,
      { title, imageUrl, categories, description, creatorId },
      { Post }
    ) => {
      const newPost = await new Post({
        title,
        imageUrl,
        categories,
        description,
        createdBy: creatorId
      }).save();
      return newPost;
    },
    addPostMessage: async (_, { messageBody, userId, postId }, { Post }) => {
      const newMessage = {
        messageBody,
        messageUser: userId
      };
      const post = await Post.findOneAndUpdate(
        // find post by id
        { _id: postId },
        // prepend (push) new message to beginning of messages array
        { $push: { messages: { $each: [newMessage], $position: 0 } } },
        // return fresh document after update
        { new: true }
      ).populate({
        path: "messages.messageUser",
        model: "User"
      });
      return post.messages[0];
    },    
    signinUser: async (_, { username, password }, { User }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new Error("User not found");
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        throw new Error("Invalid password");
      }
      return { token: createToken(user, process.env.SECRET, "1hr") };
    },
    signupUser: async (_, { username, email, password }, { User }) => {
      const user = await User.findOne({ username });
      if (user) {
        throw new Error("User already exists");
      }
      const newUser = await new User({
        username,
        email,
        password
      }).save();
      return { token: createToken(newUser, process.env.SECRET, "1hr") };
    }
  }
};

```

- We need to modify the `queries.js` document to include the new `ADD_POST_MESSAGE` mutation.

> client\src\queries.js
```js
import { gql } from "apollo-boost";

/* Posts Queries */
export const GET_POSTS = gql`
  query {
    getPosts {
      _id
      title
      imageUrl
    }
  }
`;

export const GET_POST = gql`
  query($postId: ID!) {
    getPost(postId: $postId) {
      _id
      title
      imageUrl
      categories
      description
      likes
      createdDate
      messages {
        _id
        messageBody
        messageDate
        messageUser {
          _id
          username
          avatar
        }
      }
    }
  }
`;

/* User Queries */
export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      _id
      username
      email
      password
      avatar
      joinDate
      favorites {
        _id
        title
        imageUrl
      }
    }
  }
`;

export const INFINITE_SCROLL_POSTS = gql`
  query($pageNum: Int!, $pageSize: Int!) {
    infiniteScrollPosts(pageNum: $pageNum, pageSize: $pageSize) {
      hasMore
      posts {
        _id
        title
        imageUrl
        categories
        description
        likes
        createdDate
        messages {
          _id
        }
        createdBy {
          _id
          username
          avatar
        }
      }
    }
  }
`;

/* Posts Mutations */
export const ADD_POST = gql`
  mutation(
    $title: String!
    $imageUrl: String!
    $categories: [String]!
    $description: String!
    $creatorId: ID!
  ) {
    addPost(
      title: $title
      imageUrl: $imageUrl
      categories: $categories
      description: $description
      creatorId: $creatorId
    ) {
      _id
      title
      imageUrl
      categories
      description
    }
  }
`;

export const ADD_POST_MESSAGE = gql`
  mutation($messageBody: String!, $userId: ID!, $postId: ID!) {
    addPostMessage(
      messageBody: $messageBody
      userId: $userId
      postId: $postId
    ) {
      _id
      messageBody
      messageDate
      messageUser {
        _id
        username
        avatar
      }
    }
  }
`;

/* User Mutations */
export const SIGNIN_USER = gql`
  mutation($username: String!, $password: String!) {
    signinUser(username: $username, password: $password) {
      token
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    signupUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`;

```
- We have to ensure there are not errors at the terminal

```bash
[client]  WAIT  Compiling...6:03:37 PM
[server] [nodemon] restarting due to changes...
[client]
[server] [nodemon] restarting due to changes...
[server] [nodemon] restarting due to changes...
[client]  40% building 0/1 modules 1 active ...he-ultimate-guide\client\src\queries.js[nodemon] starting `node server.js`
 98% after emitting DONE  Compiled successfully in 828ms6:03:38 PM
[client]

[client]   App running at:
[client]   - Local:   http://localhost:8080/
[client]   - Network: http://192.168.240.205:8080/
[client]
[server] Server listening on http://localhost:4000/
[server] DB connected
```

### 63. Perform addPostMessage in Post Component 8min

- We need to modify the `Posts\Post.vue` page component to add the call to the new `addPostMessage` mutation.

> client\src\components\Posts\Post.vue
```html
<template>
  <v-container
    v-if="getPost"
    class="mt-3"
    flexbox
    center
  >

    <!-- Post Card -->
    <v-layout
      row
      wrap
    >
      <v-flex xs12>
        <v-card hover>
          <v-card-title>
            <h1>{{getPost.title}}</h1>
            <v-btn
              large
              icon
              v-if="user"
            >
              <v-icon
                large
                color="grey"
              >favorite</v-icon>
            </v-btn>
            <h3 class="ml-3 font-weight-thin">{{getPost.likes}} LIKES</h3>
            <v-spacer></v-spacer>
            <v-icon
              @click="goToPreviousPage"
              color="info"
              large
            >arrow_back</v-icon>
          </v-card-title>

          <v-tooltip right>
            <span>Click to enlarge image</span>
            <v-img
              @click="toggleImageDialog"
              slot="activator"
              :src="getPost.imageUrl"
              id="post__image"
            ></v-img>
          </v-tooltip>

          <!-- Post Image Dialog -->
          <v-dialog v-model="dialog">
            <v-card>
              <v-img
                :src="getPost.imageUrl"
                height="80vh"
              ></v-img>
            </v-card>
          </v-dialog>

          <v-card-text>
            <span
              v-for="(category, index) in getPost.categories"
              :key="index"
            >
              <v-chip
                class="mb-3"
                color="accent"
                text-color="white"
              >{{category}}</v-chip>
            </span>
            <h3>{{getPost.description}}</h3>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <!-- Messages Section -->
    <div class="mt-3">
      <!-- Message Input -->
      <v-layout
        class="mb-3"
        v-if="user"
      >
        <v-flex xs12>
          <v-form @submit.prevent="handleAddPostMessage">
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  v-model="messageBody"
                  clearable
                  :append-outer-icon="messageBody && 'send'"
                  label="Add Message"
                  type="text"
                  @click:append-outer="handleAddPostMessage"
                  prepend-icon="email"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-form>
        </v-flex>
      </v-layout>

      <!-- Messages -->
      <v-layout
        row
        wrap
      >
        <v-flex xs12>
          <v-list
            subheader
            two-line
          >
            <v-subheader>Messages ({{getPost.messages.length}})</v-subheader>

            <template v-for="message in getPost.messages">
              <v-divider :key="message._id"></v-divider>

              <v-list-tile
                avatar
                inset
                :key="message.title"
              >
                <v-list-tile-avatar>
                  <img :src="message.messageUser.avatar">
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title>
                    {{message.messageBody}}
                  </v-list-tile-title>
                  <v-list-tile-sub-title>
                    {{message.messageUser.username}}
                    <span class="grey--text text--lighten-1 hidden-xs-only">{{message.messageDate}}</span>
                  </v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action class='hidden-xs-only'>
                  <v-icon color="grey">chat_bubble</v-icon>
                </v-list-tile-action>

              </v-list-tile>
            </template>
          </v-list>
        </v-flex>
      </v-layout>

    </div>

  </v-container>
</template>
<script>
import { mapGetters } from "vuex";
import { GET_POST, ADD_POST_MESSAGE } from "../../queries";

export default {
  name: "Post",
  props: ["postId"],
  data() {
    return {
      dialog: false,
      messageBody: ""
    };
  },
  apollo: {
    getPost: {
      query: GET_POST,
      variables() {
        return {
          postId: this.postId
        };
      }
    }
  },
  computed: {
    ...mapGetters(["user"])
  },
  methods: {
    handleAddPostMessage() {
      const variables = {
        messageBody: this.messageBody,
        userId: this.user._id,
        postId: this.postId
      };
      this.$apollo
        .mutate({
          mutation: ADD_POST_MESSAGE,
          variables,
          update: (cache, { data: { addPostMessage } }) => {
            const data = cache.readQuery({
              query: GET_POST,
              variables: { postId: this.postId }
            });
            data.getPost.messages.unshift(addPostMessage);
            cache.writeQuery({
              query: GET_POST,
              variables: { postId: this.postId },
              data
            });
          }
        })
        .then(({ data }) => {
          console.log(data.addPostMessage);
        })
        .catch(err => console.error(err));
    },
    goToPreviousPage() {
      this.$router.go(-1);
    },
    toggleImageDialog() {
      if (window.innerWidth > 500) {
        this.dialog = !this.dialog;
      }
    }
  }
};
</script>


<style scoped>
#post__image {
  height: 400px !important;
}
</style>
```

- We need to test if it works. We need to be authenticated to be able to create messages.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/PerformAddPostMessageInPostComponent.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/PerformAddPostMessageInPostComponent2.png)

- Now we sign in with another user.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/PerformAddPostMessageInPostComponent3.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/PerformAddPostMessageInPostComponent4.png)

### 64. Add Validation for Message Input, Clear on Submit 5min

- We need to modify the `Posts\Post.vue` page component to add include Validation for Message Input .

> client\src\components\Posts\Post.vue
```html
```

- We need to check if it works properly.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddValidationForMessageInput.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddValidationForMessageInput2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddValidationForMessageInput3.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddValidationForMessageInput4.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddValidationForMessageInput5.png)

## Section 12: Like / Unlike Post 0 / 4|27min

### 65. Create typeDefs / resolvers / queries for Like / Unlike 8min

- We need to modify the `typeDefs.gql` document to include the `LikesFaves` Type and the `likePost` and `unlikePost` Mutations.

> typeDefs.gql
```graphql
type User {
  _id: ID
  username: String! @unique
  email: String!
  password: String!
  avatar: String
  joinDate: String
  favorites: [Post]
}

type Post {
  _id: ID
  title: String!
  imageUrl: String!
  categories: [String]!
  description: String!
  createdDate: String
  likes: Int
  createdBy: User!
  messages: [Message]
}

type Message {
  _id: ID
  messageBody: String!
  messageDate: String
  messageUser: User!
}

type Token {
  token: String!
}

type PostsPage {
  posts: [Post]
  hasMore: Boolean
}

# Likes for Post / Favorites for User
type LikesFaves {
  likes: Int
  favorites: [Post]
}

type Query {
  getCurrentUser: User
  getPosts: [Post]
  getPost(postId: ID!): Post!
  infiniteScrollPosts(pageNum: Int!, pageSize: Int!): PostsPage
}

type Mutation {
  addPost(
    title: String!
    imageUrl: String!
    categories: [String]!
    description: String!
    creatorId: ID!
  ): Post!
  addPostMessage(messageBody: String!, userId: ID!, postId: ID!): Message!
  likePost(postId: ID!, username: String!): LikesFaves!
  unlikePost(postId: ID!, username: String!): LikesFaves!
  signinUser(username: String!, password: String!): Token
  signupUser(username: String!, email: String!, password: String!): Token
}

```

- We need to modify the `resolvers.js` document to include the  `likePost` and `unlikePost` Mutations

> resolvers.js
```js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createToken = (user, secret, expiresIn) => {
  const { username, email } = user;
  return jwt.sign({ username, email }, secret, { expiresIn });
};

module.exports = {
  Query: {
    getCurrentUser: async (_, _args, { User, currentUser }) => {
      if (!currentUser) {
        return null;
      }
      const user = await User.findOne({
        username: currentUser.username
      }).populate({
        path: "favorites",
        model: "Post"
      });
      return user;
    },
    getPosts: async (_, _args, { Post }) => {
      const posts = await Post.find({})
        .sort({ createdDate: "desc" })
        .populate({
          path: "createdBy",
          model: "User"
        });
      return posts;
    },
    getPost: async (_, { postId }, { Post }) => {
      const post = await Post.findOne({ _id: postId }).populate({
        path: "messages.messageUser",
        model: "User"
      });
      return post;
    },    
    infiniteScrollPosts: async (_, { pageNum, pageSize }, { Post }) => {
      let posts;
      if (pageNum === 1) {
        posts = await Post.find({})
          .sort({ createdDate: "desc" })
          .populate({
            path: "createdBy",
            model: "User"
          })
          .limit(pageSize);
      } else {
        // If page number is greater than one, figure out how many documents to skip
        const skips = pageSize * (pageNum - 1);
        posts = await Post.find({})
          .sort({ createdDate: "desc" })
          .populate({
            path: "createdBy",
            model: "User"
          })
          .skip(skips)
          .limit(pageSize);
      }
      const totalDocs = await Post.countDocuments();
      const hasMore = totalDocs > pageSize * pageNum;
      return { posts, hasMore };
    }
  },
  Mutation: {
    addPost: async (
      _,
      { title, imageUrl, categories, description, creatorId },
      { Post }
    ) => {
      const newPost = await new Post({
        title,
        imageUrl,
        categories,
        description,
        createdBy: creatorId
      }).save();
      return newPost;
    },
    addPostMessage: async (_, { messageBody, userId, postId }, { Post }) => {
      const newMessage = {
        messageBody,
        messageUser: userId
      };
      const post = await Post.findOneAndUpdate(
        // find post by id
        { _id: postId },
        // prepend (push) new message to beginning of messages array
        { $push: { messages: { $each: [newMessage], $position: 0 } } },
        // return fresh document after update
        { new: true }
      ).populate({
        path: "messages.messageUser",
        model: "User"
      });
      return post.messages[0];
    },
    likePost: async (_, { postId, username }, { Post, User }) => {
      // Find Post, add 1 to its 'like' value
      const post = await Post.findOneAndUpdate(
        { _id: postId },
        { $inc: { likes: 1 } },
        { new: true }
      );
      // Find User, add id of post to its favorites array (which will be populated as Posts)
      const user = await User.findOneAndUpdate(
        { username },
        { $addToSet: { favorites: postId } },
        { new: true }
      ).populate({
        path: "favorites",
        model: "Post"
      });
      // Return only likes from 'post' and favorites from 'user'
      return { likes: post.likes, favorites: user.favorites };
    },
    unlikePost: async (_, { postId, username }, { Post, User }) => {
      // Find Post, add -1 to its 'like' value
      const post = await Post.findOneAndUpdate(
        { _id: postId },
        { $inc: { likes: -1 } },
        { new: true }
      );
      // Find User, remove id of post from its favorites array (which will be populated as Posts)
      const user = await User.findOneAndUpdate(
        { username },
        { $pull: { favorites: postId } },
        { new: true }
      ).populate({
        path: "favorites",
        model: "Post"
      });
      // Return only likes from 'post' and favorites from 'user'
      return { likes: post.likes, favorites: user.favorites };
    },        
    signinUser: async (_, { username, password }, { User }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new Error("User not found");
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        throw new Error("Invalid password");
      }
      return { token: createToken(user, process.env.SECRET, "1hr") };
    },
    signupUser: async (_, { username, email, password }, { User }) => {
      const user = await User.findOne({ username });
      if (user) {
        throw new Error("User already exists");
      }
      const newUser = await new User({
        username,
        email,
        password
      }).save();
      return { token: createToken(newUser, process.env.SECRET, "1hr") };
    }
  }
};

```

- We need to modify the `client\src\queries.js` document to include the `LIKE_POST` and `UNLIKE_POST` mutations.

> client\src\queries.js
```js
import { gql } from "apollo-boost";

/* Posts Queries */
export const GET_POSTS = gql`
  query {
    getPosts {
      _id
      title
      imageUrl
    }
  }
`;

export const GET_POST = gql`
  query($postId: ID!) {
    getPost(postId: $postId) {
      _id
      title
      imageUrl
      categories
      description
      likes
      createdDate
      messages {
        _id
        messageBody
        messageDate
        messageUser {
          _id
          username
          avatar
        }
      }
    }
  }
`;

/* User Queries */
export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      _id
      username
      email
      password
      avatar
      joinDate
      favorites {
        _id
        title
        imageUrl
      }
    }
  }
`;

export const INFINITE_SCROLL_POSTS = gql`
  query($pageNum: Int!, $pageSize: Int!) {
    infiniteScrollPosts(pageNum: $pageNum, pageSize: $pageSize) {
      hasMore
      posts {
        _id
        title
        imageUrl
        categories
        description
        likes
        createdDate
        messages {
          _id
        }
        createdBy {
          _id
          username
          avatar
        }
      }
    }
  }
`;

/* Posts Mutations */
export const ADD_POST = gql`
  mutation(
    $title: String!
    $imageUrl: String!
    $categories: [String]!
    $description: String!
    $creatorId: ID!
  ) {
    addPost(
      title: $title
      imageUrl: $imageUrl
      categories: $categories
      description: $description
      creatorId: $creatorId
    ) {
      _id
      title
      imageUrl
      categories
      description
    }
  }
`;

export const ADD_POST_MESSAGE = gql`
  mutation($messageBody: String!, $userId: ID!, $postId: ID!) {
    addPostMessage(
      messageBody: $messageBody
      userId: $userId
      postId: $postId
    ) {
      _id
      messageBody
      messageDate
      messageUser {
        _id
        username
        avatar
      }
    }
  }
`;

export const LIKE_POST = gql`
  mutation($postId: ID!, $username: String!) {
    likePost(postId: $postId, username: $username) {
      likes
      favorites {
        _id
        title
        imageUrl
      }
    }
  }
`;

export const UNLIKE_POST = gql`
  mutation($postId: ID!, $username: String!) {
    unlikePost(postId: $postId, username: $username) {
      likes
      favorites {
        _id
        title
        imageUrl
      }
    }
  }
`;

/* User Mutations */
export const SIGNIN_USER = gql`
  mutation($username: String!, $password: String!) {
    signinUser(username: $username, password: $password) {
      token
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    signupUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`;

```

- Ensure there are no error when running the application.

```bash
rver] [nodemon] starting `node server.js`
[client]  INFO  Starting development server...
[server] Server listening on http://localhost:4000/
[server] DB connected
[client]  98% after emitting CopyPlugin DONE  Compiled successfully in 63825ms6:33:03 AM

[client]
[client]   App running at:
[client]   - Local:   http://localhost:8080/
[client]   - Network: http://192.168.1.64:8080/
[client]
[client]   Note that the development build is not optimized.
[client]   To create a production build, run npm run build.
[client]
```

### 66. Firing Like / Unlike Post Mutations from Client 9min

- We are going to modify the `Posts\Post.vue` document to implement the `Like/Unlike` button.

> client\src\components\Posts\Post.vue
```html
<template>
  <v-container
    v-if="getPost"
    class="mt-3"
    flexbox
    center
  >

    <!-- Post Card -->
    <v-layout
      row
      wrap
    >
      <v-flex xs12>
        <v-card hover>
          <v-card-title>
            <h1>{{getPost.title}}</h1>
            <v-btn
              @click="handleLikePost" 
              large
              icon
              v-if="user"
            >
              <v-icon
                large
                color="grey"
              >favorite</v-icon>
            </v-btn>
            <h3 class="ml-3 font-weight-thin">{{getPost.likes}} LIKES</h3>
            <v-spacer></v-spacer>
            <v-icon
              @click="goToPreviousPage"
              color="info"
              large
            >arrow_back</v-icon>
          </v-card-title>

          <v-tooltip right>
            <span>Click to enlarge image</span>
            <v-img
              @click="toggleImageDialog"
              slot="activator"
              :src="getPost.imageUrl"
              id="post__image"
            ></v-img>
          </v-tooltip>

          <!-- Post Image Dialog -->
          <v-dialog v-model="dialog">
            <v-card>
              <v-img
                :src="getPost.imageUrl"
                height="80vh"
              ></v-img>
            </v-card>
          </v-dialog>

          <v-card-text>
            <span
              v-for="(category, index) in getPost.categories"
              :key="index"
            >
              <v-chip
                class="mb-3"
                color="accent"
                text-color="white"
              >{{category}}</v-chip>
            </span>
            <h3>{{getPost.description}}</h3>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <!-- Messages Section -->
    <div class="mt-3">
      <!-- Message Input -->
      <v-layout
        class="mb-3"
        v-if="user"
      >
        <v-flex xs12>
          <v-form
            v-model="isFormValid"
            lazy-validation
            ref="form"
            @submit.prevent="handleAddPostMessage"
          >
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  :rules="messageRules"
                  v-model="messageBody"
                  clearable
                  :append-outer-icon="messageBody && 'send'"
                  label="Add Message"
                  type="text"
                  @click:append-outer="handleAddPostMessage"
                  prepend-icon="email"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-form>
        </v-flex>
      </v-layout>

      <!-- Messages -->
      <v-layout
        row
        wrap
      >
        <v-flex xs12>
          <v-list
            subheader
            two-line
          >
            <v-subheader>Messages ({{getPost.messages.length}})</v-subheader>

            <template v-for="message in getPost.messages">
              <v-divider :key="message._id"></v-divider>

              <v-list-tile
                avatar
                inset
                :key="message.title"
              >
                <v-list-tile-avatar>
                  <img :src="message.messageUser.avatar">
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title>
                    {{message.messageBody}}
                  </v-list-tile-title>
                  <v-list-tile-sub-title>
                    {{message.messageUser.username}}
                    <span class="grey--text text--lighten-1 hidden-xs-only">{{message.messageDate}}</span>
                  </v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action class='hidden-xs-only'>
                  <v-icon :color="checkIfOwnMessage(message) ? 'accent' : 'grey'">chat_bubble</v-icon>
                </v-list-tile-action>

              </v-list-tile>
            </template>
          </v-list>
        </v-flex>
      </v-layout>

    </div>

  </v-container>
</template>
<script>
import { mapGetters } from "vuex";
import {
  GET_POST,
  ADD_POST_MESSAGE,
  LIKE_POST,
  UNLIKE_POST
} from "../../queries";

export default {
  name: "Post",
  props: ["postId"],
  data() {
    return {
      dialog: false,
      messageBody: "",
      isFormValid: true,
      messageRules: [
        message => !!message || "Message is required",
        message =>
          message && message.length < 75 || "Message must be less than 75 characters"
      ]
    };
  },
  apollo: {
    getPost: {
      query: GET_POST,
      variables() {
        return {
          postId: this.postId
        };
      }
    }
  },
  computed: {
    ...mapGetters(["user"])
  },
  methods: {
    handleLikePost() {
      const variables = {
        postId: this.postId,
        username: this.user.username
      };
      this.$apollo
        .mutate({
          mutation: LIKE_POST,
          variables,
          update: (cache, { data: { likePost } }) => {
            const data = cache.readQuery({
              query: GET_POST,
              variables: { postId: this.postId }
            });
            data.getPost.likes += 1;
            cache.writeQuery({
              query: GET_POST,
              variables: { postId: this.postId },
              data
            });
          }
        })
        .then(({ data }) => {
          const updatedUser = {
            ...this.user,
            favorites: data.likePost.favorites
          };
          this.$store.commit("setUser", updatedUser);
        })
        .catch(err => console.error(err));
    },
    handleUnlikePost() {
      const variables = {
        postId: this.postId,
        username: this.user.username
      };
      this.$apollo
        .mutate({
          mutation: UNLIKE_POST,
          variables,
          update: (cache, { data: { unlikePost } }) => {
            const data = cache.readQuery({
              query: GET_POST,
              variables: { postId: this.postId }
            });
            data.getPost.likes -= 1;
            cache.writeQuery({
              query: GET_POST,
              variables: { postId: this.postId },
              data
            });
          }
        })
        .then(({ data }) => {
          const updatedUser = {
            ...this.user,
            favorites: data.unlikePost.favorites
          };
          this.$store.commit("setUser", updatedUser);
        })
        .catch(err => console.error(err));
    },    
    handleAddPostMessage() {
      if (this.$refs.form.validate()) {
        const variables = {
          messageBody: this.messageBody,
          userId: this.user._id,
          postId: this.postId
        };
        this.$apollo
          .mutate({
            mutation: ADD_POST_MESSAGE,
            variables,
            update: (cache, { data: { addPostMessage } }) => {
              const data = cache.readQuery({
                query: GET_POST,
                variables: { postId: this.postId }
              });
              data.getPost.messages.unshift(addPostMessage);
              cache.writeQuery({
                query: GET_POST,
                variables: { postId: this.postId },
                data
              });
            }
          })
          .then(({ data }) => {
            this.$refs.form.reset();
            console.log(data.addPostMessage);
          })
          .catch(err => console.error(err));
      }
    },
    goToPreviousPage() {
      this.$router.go(-1);
    },
    toggleImageDialog() {
      if (window.innerWidth > 500) {
        this.dialog = !this.dialog;
      }
    },
    checkIfOwnMessage(message) {
      return this.user && this.user._id === message.messageUser._id;
    }
  }
};
</script>


<style scoped>
#post__image {
  height: 400px !important;
}
</style>
```

- We need to test if it works.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/FiringLikeUnlikePostMutationsFromClient.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/FiringLikeUnlikePostMutationsFromClient2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/FiringLikeUnlikePostMutationsFromClient3.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/FiringLikeUnlikePostMutationsFromClient4.png)

### 67. Add Logic for Toggling Like / Unlike Post 5min

- We need to modify the `store.js` store document to include the `userFavorites` getter.

> client\src\store.js
```js
```

- We are going to modify the `cPosts\Post.vue` document to finish the implementation of the `Like/Unlike` button.

> client\src\components\Posts\Post.vue
```html
<template>
  <v-container
    v-if="getPost"
    class="mt-3"
    flexbox
    center
  >

    <!-- Post Card -->
    <v-layout
      row
      wrap
    >
      <v-flex xs12>
        <v-card hover>
          <v-card-title>
            <h1>{{getPost.title}}</h1>
            <v-btn
              @click="handleToggleLike" 
              large
              icon
              v-if="user"
            >
              <v-icon
                large
                :color="checkIfPostLiked(getPost._id) ? 'red' : 'grey'"
              >favorite</v-icon>
            </v-btn>
            <h3 class="ml-3 font-weight-thin">{{getPost.likes}} LIKES</h3>
            <v-spacer></v-spacer>
            <v-icon
              @click="goToPreviousPage"
              color="info"
              large
            >arrow_back</v-icon>
          </v-card-title>

          <v-tooltip right>
            <span>Click to enlarge image</span>
            <v-img
              @click="toggleImageDialog"
              slot="activator"
              :src="getPost.imageUrl"
              id="post__image"
            ></v-img>
          </v-tooltip>

          <!-- Post Image Dialog -->
          <v-dialog v-model="dialog">
            <v-card>
              <v-img
                :src="getPost.imageUrl"
                height="80vh"
              ></v-img>
            </v-card>
          </v-dialog>

          <v-card-text>
            <span
              v-for="(category, index) in getPost.categories"
              :key="index"
            >
              <v-chip
                class="mb-3"
                color="accent"
                text-color="white"
              >{{category}}</v-chip>
            </span>
            <h3>{{getPost.description}}</h3>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <!-- Messages Section -->
    <div class="mt-3">
      <!-- Message Input -->
      <v-layout
        class="mb-3"
        v-if="user"
      >
        <v-flex xs12>
          <v-form
            v-model="isFormValid"
            lazy-validation
            ref="form"
            @submit.prevent="handleAddPostMessage"
          >
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  :rules="messageRules"
                  v-model="messageBody"
                  clearable
                  :append-outer-icon="messageBody && 'send'"
                  label="Add Message"
                  type="text"
                  @click:append-outer="handleAddPostMessage"
                  prepend-icon="email"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-form>
        </v-flex>
      </v-layout>

      <!-- Messages -->
      <v-layout
        row
        wrap
      >
        <v-flex xs12>
          <v-list
            subheader
            two-line
          >
            <v-subheader>Messages ({{getPost.messages.length}})</v-subheader>

            <template v-for="message in getPost.messages">
              <v-divider :key="message._id"></v-divider>

              <v-list-tile
                avatar
                inset
                :key="message.title"
              >
                <v-list-tile-avatar>
                  <img :src="message.messageUser.avatar">
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title>
                    {{message.messageBody}}
                  </v-list-tile-title>
                  <v-list-tile-sub-title>
                    {{message.messageUser.username}}
                    <span class="grey--text text--lighten-1 hidden-xs-only">{{message.messageDate}}</span>
                  </v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action class='hidden-xs-only'>
                  <v-icon :color="checkIfOwnMessage(message) ? 'accent' : 'grey'">chat_bubble</v-icon>
                </v-list-tile-action>

              </v-list-tile>
            </template>
          </v-list>
        </v-flex>
      </v-layout>

    </div>

  </v-container>
</template>
<script>
import { mapGetters } from "vuex";
import {
  GET_POST,
  ADD_POST_MESSAGE,
  LIKE_POST,
  UNLIKE_POST
} from "../../queries";

export default {
  name: "Post",
  props: ["postId"],
  data() {
    return {
      postLiked: false,      
      dialog: false,
      messageBody: "",
      isFormValid: true,
      messageRules: [
        message => !!message || "Message is required",
        message =>
          message && message.length < 75 || "Message must be less than 75 characters"
      ]
    };
  },
  apollo: {
    getPost: {
      query: GET_POST,
      variables() {
        return {
          postId: this.postId
        };
      }
    }
  },
  computed: {
    ...mapGetters(["user", "userFavorites"])
  },
  methods: {
    checkIfPostLiked(postId) {
      // check if user favorites includes post with id of 'postId'
      this.postLiked = this.userFavorites &&
        this.userFavorites.some(fave => fave._id === postId)
      return this.postLiked
    },
    handleToggleLike() {
      if (this.postLiked) {
        this.handleUnlikePost();
      } else {
        this.handleLikePost();
      }
    },    
    handleLikePost() {
      const variables = {
        postId: this.postId,
        username: this.user.username
      };
      this.$apollo
        .mutate({
          mutation: LIKE_POST,
          variables,
          update: (cache, { data: { likePost } }) => {
            const data = cache.readQuery({
              query: GET_POST,
              variables: { postId: this.postId }
            });
            data.getPost.likes += 1;
            cache.writeQuery({
              query: GET_POST,
              variables: { postId: this.postId },
              data
            });
          }
        })
        .then(({ data }) => {
          const updatedUser = {
            ...this.user,
            favorites: data.likePost.favorites
          };
          this.$store.commit("setUser", updatedUser);
        })
        .catch(err => console.error(err));
    },
    handleUnlikePost() {
      const variables = {
        postId: this.postId,
        username: this.user.username
      };
      this.$apollo
        .mutate({
          mutation: UNLIKE_POST,
          variables,
          update: (cache, { data: { unlikePost } }) => {
            const data = cache.readQuery({
              query: GET_POST,
              variables: { postId: this.postId }
            });
            data.getPost.likes -= 1;
            cache.writeQuery({
              query: GET_POST,
              variables: { postId: this.postId },
              data
            });
          }
        })
        .then(({ data }) => {
          const updatedUser = {
            ...this.user,
            favorites: data.unlikePost.favorites
          };
          this.$store.commit("setUser", updatedUser);
        })
        .catch(err => console.error(err));
    },    
    handleAddPostMessage() {
      if (this.$refs.form.validate()) {
        const variables = {
          messageBody: this.messageBody,
          userId: this.user._id,
          postId: this.postId
        };
        this.$apollo
          .mutate({
            mutation: ADD_POST_MESSAGE,
            variables,
            update: (cache, { data: { addPostMessage } }) => {
              const data = cache.readQuery({
                query: GET_POST,
                variables: { postId: this.postId }
              });
              data.getPost.messages.unshift(addPostMessage);
              cache.writeQuery({
                query: GET_POST,
                variables: { postId: this.postId },
                data
              });
            }
          })
          .then(({ data }) => {
            this.$refs.form.reset();
            console.log(data.addPostMessage);
          })
          .catch(err => console.error(err));
      }
    },
    goToPreviousPage() {
      this.$router.go(-1);
    },
    toggleImageDialog() {
      if (window.innerWidth > 500) {
        this.dialog = !this.dialog;
      }
    },
    checkIfOwnMessage(message) {
      return this.user && this.user._id === message.messageUser._id;
    }
  }
};
</script>


<style scoped>
#post__image {
  height: 400px !important;
}
</style>
```
- We need to test if it works.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddLogicForTogglingLikeUnlikePost.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddLogicForTogglingLikeUnlikePost2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddLogicForTogglingLikeUnlikePost3.png)


### 68. Add Like Notification in Profile Tab 5min

- We need to modify the `App.vue` Home page to add a badge in the `Profile` button when we like any of the posts.

> client\src\App.vue
```html
<template>
  <v-app style="background: #E3E3EE">
    <!-- Side Navbar -->
    <v-navigation-drawer
      app
      temporary
      fixed
      v-model="sideNav"
    >
      <v-toolbar
        color="accent"
        dark
        flat
      >
        <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
        <router-link
          to="/"
          tag="span"
          style="cursor: pointer"
        >
          <h1 class="title pl-3">VueShare</h1>
        </router-link>
      </v-toolbar>

      <v-divider></v-divider>

      <!-- Side Navbar Links -->
      <v-list>
        <v-list-tile
          ripple
          v-for="item in sideNavItems"
          :key="item.title"
          :to="item.link"
        >
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{item.title}}
          </v-list-tile-content>
        </v-list-tile>

        <!-- Signout Button -->
        <v-list-tile
          v-if="user"
          @click="handleSignoutUser"
        >
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Signout</v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>

    <!-- Horizontal Navbar -->
    <v-toolbar
      fixed
      color="primary"
      dark
    >
      <!-- App Title -->
      <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-xs-only">
        <router-link
          to="/"
          tag="span"
          style="cursor: pointer"
        >
          VueShare
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Search Input -->
      <v-text-field
        flex
        prepend-icon="search"
        placeholder="Search posts"
        color="accent"
        single-line
        hide-details
      ></v-text-field>

      <v-spacer></v-spacer>

      <!-- Horizontal Navbar Links -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in horizontalNavItems"
          :key="item.title"
          :to="item.link"
        >
          <v-icon
            class="hidden-sm-only"
            left
          >{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>

        <!-- Profile Button -->
        <v-btn
          flat
          to="/profile"
          v-if="user"
        >
          <v-icon
            class="hidden-sm-only"
            left
          >account_box</v-icon>
          <v-badge
            right
            color="blue darken-2"
            :class="{ 'bounce': badgeAnimated }"
          >
            <span slot="badge" v-if="userFavorites.length">{{userFavorites.length}}</span>
            Profile
          </v-badge>
        </v-btn>

        <!-- Signout Button -->
        <v-btn
          flat
          v-if="user"
          @click="handleSignoutUser"
        >
          <v-icon
            class="hidden-sm-only"
            left
          >exit_to_app</v-icon>
          Signout
        </v-btn>

      </v-toolbar-items>
    </v-toolbar>

    <!-- App Content -->
    <main>
      <v-container class="mt-4">
        <transition name="fade">
          <router-view />
        </transition>

        <!-- Auth Snackbar -->
        <v-snackbar
          v-model="authSnackbar"
          color="success"
          :timeout='5000'
          bottom
          left
        >
          <v-icon class="mr-3">check_circle</v-icon>
          <h3>You are now signed in!</h3>
          <v-btn
            dark
            flat
            @click="authSnackbar = false"
          >Close</v-btn>
        </v-snackbar>

        <!-- Auth Error Snackbar -->
        <v-snackbar
          v-if="authError"
          v-model="authErrorSnackbar"
          color="info"
          :timeout='5000'
          bottom
          left
        >
          <v-icon class="mr-3">cancel</v-icon>
          <h3>{{authError.message}}</h3>
          <v-btn
            dark
            flat
            to="/signin"
          >Sign in</v-btn>
        </v-snackbar>

      </v-container>
    </main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  data() {
    return {
      sideNav: false,
      authSnackbar: false,
      authErrorSnackbar: false,
      badgeAnimated: false
    };
  },
  watch: {
    user(newValue, oldValue) {
      // if we had no value for user before, show snackbar
      if (oldValue === null) {
        this.authSnackbar = true;
      }
    },
    authError(value) {
      // if auth error is not null, show auth error snackbar
      if (value !== null) {
        this.authErrorSnackbar = true;
      }
    },
    userFavorites(value) {
      // if user favorites value changed at all
      if (value) {
        this.badgeAnimated = true;
        setTimeout(() => (this.badgeAnimated = false), 1000);
      }
    }
  },
  computed: {
    ...mapGetters(["authError", "user", "userFavorites"]),
    horizontalNavItems() {
      let items = [
        { icon: "chat", title: "Posts", link: "/posts" },
        { icon: "lock_open", title: "Sign In", link: "/signin" },
        { icon: "create", title: "Sign Up", link: "/signup" }
      ];
      if (this.user) {
        items = [{ icon: "chat", title: "Posts", link: "/posts" }];
      }
      return items;
    },
    sideNavItems() {
      let items = [
        { icon: "chat", title: "Posts", link: "/posts" },
        { icon: "lock_open", title: "Sign In", link: "/signin" },
        { icon: "create", title: "Sign Up", link: "/signup" }
      ];
      if (this.user) {
        items = [
          { icon: "chat", title: "Posts", link: "/posts" },
          { icon: "stars", title: "Create Post", link: "/post/add" },
          { icon: "account_box", title: "Profile", link: "/profile" }
        ];
      }
      return items;
    }
  },
  methods: {
    handleSignoutUser() {
      this.$store.dispatch("signoutUser");
    },
    toggleSideNav() {
      this.sideNav = !this.sideNav;
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
/* User Favorite Animation */
.bounce {
  animation: bounce 1s both;
}

@keyframes bounce {
  0%,
  20%,
  53%,
  80%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  40%,
  43% {
    transform: translate3d(0, -20px, 0);
  }
  70% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, -4px, 0);
  }
}
</style>
```

- We need to test if it works.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddLikeNotificationInProfileTab.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddLikeNotificationInProfileTab2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddLikeNotificationInProfileTab3.png)

## Section 13: Search Posts 0 / 4|22min

### 69. Add typeDef / resolver / query for searchPosts 7min

- We need to modify the `models\Post.js` document to create index to search on all fields of posts

> models\Post.js
```js
const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  categories: {
    type: [String],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: Number,
    default: 0
  },
  // property ('createdBy') === path
  // ref ('User') === model
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  messages: [
    {
      messageBody: {
        type: String,
        required: true
      },
      messageDate: {
        type: Date,
        default: Date.now
      },
      messageUser: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
      }
    }
  ]
});

// Create index to search on all fields of posts
PostSchema.index({
  '$**': 'text'
});

module.exports = mongoose.model("Post", PostSchema);
```

- We need to modify the `typeDefs.gql` document to include the `searchPosts` Query.

> typeDefs.gql
```graphql
type User {
  _id: ID
  username: String! @unique
  email: String!
  password: String!
  avatar: String
  joinDate: String
  favorites: [Post]
}

type Post {
  _id: ID
  title: String!
  imageUrl: String!
  categories: [String]!
  description: String!
  createdDate: String
  likes: Int
  createdBy: User!
  messages: [Message]
}

type Message {
  _id: ID
  messageBody: String!
  messageDate: String
  messageUser: User!
}

type Token {
  token: String!
}

type PostsPage {
  posts: [Post]
  hasMore: Boolean
}

# Likes for Post / Favorites for User
type LikesFaves {
  likes: Int
  favorites: [Post]
}

type Query {
  getCurrentUser: User
  getPosts: [Post]
  getPost(postId: ID!): Post!
  searchPosts(searchTerm: String): [Post]
  infiniteScrollPosts(pageNum: Int!, pageSize: Int!): PostsPage
}

type Mutation {
  addPost(
    title: String!
    imageUrl: String!
    categories: [String]!
    description: String!
    creatorId: ID!
  ): Post!
  addPostMessage(messageBody: String!, userId: ID!, postId: ID!): Message!
  likePost(postId: ID!, username: String!): LikesFaves!
  unlikePost(postId: ID!, username: String!): LikesFaves!
  signinUser(username: String!, password: String!): Token
  signupUser(username: String!, email: String!, password: String!): Token
}
```
- We need to modify the `resolvers.js` document to include the the `searchPosts` Query.

> resolvers.js
```js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createToken = (user, secret, expiresIn) => {
  const { username, email } = user;
  return jwt.sign({ username, email }, secret, { expiresIn });
};

module.exports = {
  Query: {
    getCurrentUser: async (_, _args, { User, currentUser }) => {
      if (!currentUser) {
        return null;
      }
      const user = await User.findOne({
        username: currentUser.username
      }).populate({
        path: "favorites",
        model: "Post"
      });
      return user;
    },
    getPosts: async (_, _args, { Post }) => {
      const posts = await Post.find({})
        .sort({ createdDate: "desc" })
        .populate({
          path: "createdBy",
          model: "User"
        });
      return posts;
    },
    getPost: async (_, { postId }, { Post }) => {
      const post = await Post.findOne({ _id: postId }).populate({
        path: "messages.messageUser",
        model: "User"
      });
      return post;
    },
    searchPosts: async (_, { searchTerm }, { Post }) => {
      if (searchTerm) {
        const searchResults = await Post.find(
          // Perform text search for search value of 'searchTerm'
          { $text: { $search: searchTerm } },
          // Assign 'searchTerm' a text score to provide best match
          { score: { $meta: "textScore" } }
        )
          // Sort results according to that textScore (as well as by likes in descending order)
          .sort({
            score: { $meta: "textScore" },
            likes: "desc"
          })
          .limit(5);
        return searchResults;
      }
    },
    infiniteScrollPosts: async (_, { pageNum, pageSize }, { Post }) => {
      let posts;
      if (pageNum === 1) {
        posts = await Post.find({})
          .sort({ createdDate: "desc" })
          .populate({
            path: "createdBy",
            model: "User"
          })
          .limit(pageSize);
      } else {
        // If page number is greater than one, figure out how many documents to skip
        const skips = pageSize * (pageNum - 1);
        posts = await Post.find({})
          .sort({ createdDate: "desc" })
          .populate({
            path: "createdBy",
            model: "User"
          })
          .skip(skips)
          .limit(pageSize);
      }
      const totalDocs = await Post.countDocuments();
      const hasMore = totalDocs > pageSize * pageNum;
      return { posts, hasMore };
    }
  },
  Mutation: {
    addPost: async (
      _,
      { title, imageUrl, categories, description, creatorId },
      { Post }
    ) => {
      const newPost = await new Post({
        title,
        imageUrl,
        categories,
        description,
        createdBy: creatorId
      }).save();
      return newPost;
    },
    addPostMessage: async (_, { messageBody, userId, postId }, { Post }) => {
      const newMessage = {
        messageBody,
        messageUser: userId
      };
      const post = await Post.findOneAndUpdate(
        // find post by id
        { _id: postId },
        // prepend (push) new message to beginning of messages array
        { $push: { messages: { $each: [newMessage], $position: 0 } } },
        // return fresh document after update
        { new: true }
      ).populate({
        path: "messages.messageUser",
        model: "User"
      });
      return post.messages[0];
    },
    likePost: async (_, { postId, username }, { Post, User }) => {
      // Find Post, add 1 to its 'like' value
      const post = await Post.findOneAndUpdate(
        { _id: postId },
        { $inc: { likes: 1 } },
        { new: true }
      );
      // Find User, add id of post to its favorites array (which will be populated as Posts)
      const user = await User.findOneAndUpdate(
        { username },
        { $addToSet: { favorites: postId } },
        { new: true }
      ).populate({
        path: "favorites",
        model: "Post"
      });
      // Return only likes from 'post' and favorites from 'user'
      return { likes: post.likes, favorites: user.favorites };
    },
    unlikePost: async (_, { postId, username }, { Post, User }) => {
      // Find Post, add -1 to its 'like' value
      const post = await Post.findOneAndUpdate(
        { _id: postId },
        { $inc: { likes: -1 } },
        { new: true }
      );
      // Find User, remove id of post from its favorites array (which will be populated as Posts)
      const user = await User.findOneAndUpdate(
        { username },
        { $pull: { favorites: postId } },
        { new: true }
      ).populate({
        path: "favorites",
        model: "Post"
      });
      // Return only likes from 'post' and favorites from 'user'
      return { likes: post.likes, favorites: user.favorites };
    },        
    signinUser: async (_, { username, password }, { User }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new Error("User not found");
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        throw new Error("Invalid password");
      }
      return { token: createToken(user, process.env.SECRET, "1hr") };
    },
    signupUser: async (_, { username, email, password }, { User }) => {
      const user = await User.findOne({ username });
      if (user) {
        throw new Error("User already exists");
      }
      const newUser = await new User({
        username,
        email,
        password
      }).save();
      return { token: createToken(newUser, process.env.SECRET, "1hr") };
    }
  }
};

```

- We need to modify the `client\src\queries.js` document to include the `SEARCH_POST` query.

> client\src\queries.js
```js
import { gql } from "apollo-boost";

/* Posts Queries */
export const GET_POSTS = gql`
  query {
    getPosts {
      _id
      title
      imageUrl
    }
  }
`;

export const GET_POST = gql`
  query($postId: ID!) {
    getPost(postId: $postId) {
      _id
      title
      imageUrl
      categories
      description
      likes
      createdDate
      messages {
        _id
        messageBody
        messageDate
        messageUser {
          _id
          username
          avatar
        }
      }
    }
  }
`;

export const SEARCH_POSTS = gql`
  query($searchTerm: String) {
    searchPosts(searchTerm: $searchTerm) {
      _id
      title
      description
      imageUrl
      likes
    }
  }
`;

/* User Queries */
export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      _id
      username
      email
      password
      avatar
      joinDate
      favorites {
        _id
        title
        imageUrl
      }
    }
  }
`;

export const INFINITE_SCROLL_POSTS = gql`
  query($pageNum: Int!, $pageSize: Int!) {
    infiniteScrollPosts(pageNum: $pageNum, pageSize: $pageSize) {
      hasMore
      posts {
        _id
        title
        imageUrl
        categories
        description
        likes
        createdDate
        messages {
          _id
        }
        createdBy {
          _id
          username
          avatar
        }
      }
    }
  }
`;

/* Posts Mutations */
export const ADD_POST = gql`
  mutation(
    $title: String!
    $imageUrl: String!
    $categories: [String]!
    $description: String!
    $creatorId: ID!
  ) {
    addPost(
      title: $title
      imageUrl: $imageUrl
      categories: $categories
      description: $description
      creatorId: $creatorId
    ) {
      _id
      title
      imageUrl
      categories
      description
    }
  }
`;

export const ADD_POST_MESSAGE = gql`
  mutation($messageBody: String!, $userId: ID!, $postId: ID!) {
    addPostMessage(
      messageBody: $messageBody
      userId: $userId
      postId: $postId
    ) {
      _id
      messageBody
      messageDate
      messageUser {
        _id
        username
        avatar
      }
    }
  }
`;

export const LIKE_POST = gql`
  mutation($postId: ID!, $username: String!) {
    likePost(postId: $postId, username: $username) {
      likes
      favorites {
        _id
        title
        imageUrl
      }
    }
  }
`;

export const UNLIKE_POST = gql`
  mutation($postId: ID!, $username: String!) {
    unlikePost(postId: $postId, username: $username) {
      likes
      favorites {
        _id
        title
        imageUrl
      }
    }
  }
`;

/* User Mutations */
export const SIGNIN_USER = gql`
  mutation($username: String!, $password: String!) {
    signinUser(username: $username, password: $password) {
      token
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    signupUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`;

```

- Ensure there are no error when running the application.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide (master)
$ npm run dev

> fullstack-vue-graphql-starter@1.0.0 dev C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide
> concurrently --names "server,client" "npm run server --silent" "npm run client --silent"

[server] [nodemon] 1.19.1
[server] [nodemon] to restart at any time, enter `rs`
[server] [nodemon] watching: *.*
[server] [nodemon] starting `node server.js`
[client]  INFO  Starting development server...
[server] Server listening on http://localhost:4000/
[server] DB connected
[client]  98% after emitting CopyPlugin DONE  Compiled successfully in 51581ms6:27:18 AM

[client]
[client]   App running at:
[client]   - Local:   http://localhost:8080/
[client]   - Network: http://192.168.1.64:8080/
[client]
[client]   Note that the development build is not optimized.
[client]   To create a production build, run npm run build.
[client]
```

### 70. Fire searchPosts Action, Log Search Results 4min

- We need to modify the `client\src\store.js` store document to include the `searchPosts` action

> client\src\store.js
```js
import Vue from "vue"
import Vuex from "vuex"
import router from "./router"

import { defaultClient as apolloClient } from "./main"

import {
  GET_CURRENT_USER,
  GET_POSTS,
  SEARCH_POSTS,
  ADD_POST,
  SIGNIN_USER,
  SIGNUP_USER
} from "./queries";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    user: null,    
    loading: false,
    error: null,
    authError: null
  },
  mutations: {
    setPosts: (state, payload) => {
      state.posts = payload
    },
    setUser: (state, payload) => {
      state.user = payload
    },    
    setLoading: (state, payload) => {
      state.loading = payload
    },
    clearUser: state => (state.user = null),
    clearError: state => (state.error = null),
    setError: (state, payload) => {
      state.error = payload
    },
    setAuthError: (state, payload) => {
      state.authError = payload
    }
  },
  actions: {
    getCurrentUser: ({ commit }) => {
      commit("setLoading", true)
      apolloClient
        .query({
          query: GET_CURRENT_USER
        })
        .then(({ data }) => {
          commit("setLoading", false)
          // Add user data to state
          commit("setUser", data.getCurrentUser)
          console.log(data.getCurrentUser)
        })
        .catch(err => {
          commit("setLoading", false)
          console.error(err)
        })
    },    
    getPosts: ({ commit }) => {
      commit("setLoading", true)
      apolloClient
        .query({
          query: GET_POSTS
        })
        .then(({ data }) => {
          commit("setPosts", data.getPosts)
          commit("setLoading", false)
        })
        .catch(err => {
          commit("setLoading", false)
          console.error(err)
        })
    },
    searchPosts: ( _, payload) => {
      apolloClient
        .query({
          query: SEARCH_POSTS,
          variables: payload
        })
        .then(({ data }) => {
          console.log(data.searchPosts);
        })
        .catch(err => console.error(err));
    },    
    signinUser: ({commit}, payload) => {
      commit("clearError")
      commit("setLoading", true)
      apolloClient
        .mutate({
          mutation: SIGNIN_USER,
          variables: payload
        })
        .then(({ data }) => {
          commit("setLoading", false)
          localStorage.setItem("token", data.signinUser.token)
          // to make sure created method is run in main.js (we run getCurrentUser), reload the page
          router.go()
        })
        .catch(err => {
          commit("setLoading", false)
          commit("setError", err)          
          console.error(err)
        })
    },
    addPost: (_ , payload) => {
      console.log(`payload: `,payload)
      apolloClient
        .mutate({
          mutation: ADD_POST,
          variables: payload,
          update: (cache, { data: { addPost } }) => {
            // First read the query you want to update
            const data = cache.readQuery({ query: GET_POSTS });
            // Create updated data
            data.getPosts.unshift(addPost);
            // Write updated data back to query
            console.log(data);
            cache.writeQuery({
              query: GET_POSTS,
              data
            });
          },
          // optimistic response ensures data is added immediately as we specified for the update function
          optimisticResponse: {
            __typename: 'Mutation',
            addPost: {
              __typename: 'Post',
              _id: -1,
              ...payload
            }
          }
        })
        .then(({ data }) => {
          console.log(data.addPost);
        })
        .catch(err => {
          console.error(err);
        });
    },    
    signupUser: ({ commit }, payload) => {
      commit("clearError");
      commit("setLoading", true);
      apolloClient
        .mutate({
          mutation: SIGNUP_USER,
          variables: payload
        })
        .then(({ data }) => {
          commit("setLoading", false);
          localStorage.setItem("token", data.signupUser.token);
          // to make sure created method is run in main.js (we run getCurrentUser), reload the page
          router.go();
        })
        .catch(err => {
          commit("setLoading", false);
          commit("setError", err);
          console.error(err);
        });
    },    
    signoutUser: async ({ commit }) => {
      // clear user in state
      commit("clearUser")
      // remove token in localStorage
      localStorage.setItem("token", "")
      // end session
      await apolloClient.resetStore()
      // redirect home - kick users out of private pages (i.e. profile)
      router.push("/")
    }
  },
  getters: {
    posts: state => state.posts,
    user: state => state.user,
    userFavorites: state => state.user && state.user.favorites,
    loading: state => state.loading,
    error: state => state.error,
    authError: state => state.authError
  }
})
```

- We need to modify the `src\App.vue` Home document to allow to search results.

> client\src\App.vue
```html
<template>
  <v-app style="background: #E3E3EE">
    <!-- Side Navbar -->
    <v-navigation-drawer
      app
      temporary
      fixed
      v-model="sideNav"
    >
      <v-toolbar
        color="accent"
        dark
        flat
      >
        <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
        <router-link
          to="/"
          tag="span"
          style="cursor: pointer"
        >
          <h1 class="title pl-3">VueShare</h1>
        </router-link>
      </v-toolbar>

      <v-divider></v-divider>

      <!-- Side Navbar Links -->
      <v-list>
        <v-list-tile
          ripple
          v-for="item in sideNavItems"
          :key="item.title"
          :to="item.link"
        >
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{item.title}}
          </v-list-tile-content>
        </v-list-tile>

        <!-- Signout Button -->
        <v-list-tile
          v-if="user"
          @click="handleSignoutUser"
        >
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Signout</v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>

    <!-- Horizontal Navbar -->
    <v-toolbar
      fixed
      color="primary"
      dark
    >
      <!-- App Title -->
      <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-xs-only">
        <router-link
          to="/"
          tag="span"
          style="cursor: pointer"
        >
          VueShare
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Search Input -->
      <v-text-field
        v-model="searchTerm" 
        @input="handleSearchPosts"
        flex
        prepend-icon="search"
        placeholder="Search posts"
        color="accent"
        single-line
        hide-details
      ></v-text-field>

      <v-spacer></v-spacer>

      <!-- Horizontal Navbar Links -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in horizontalNavItems"
          :key="item.title"
          :to="item.link"
        >
          <v-icon
            class="hidden-sm-only"
            left
          >{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>

        <!-- Profile Button -->
        <v-btn
          flat
          to="/profile"
          v-if="user"
        >
          <v-icon
            class="hidden-sm-only"
            left
          >account_box</v-icon>
          <v-badge
            right
            color="blue darken-2"
            :class="{ 'bounce': badgeAnimated }"
          >
            <span slot="badge" v-if="userFavorites.length">{{userFavorites.length}}</span>
            Profile
          </v-badge>
        </v-btn>

        <!-- Signout Button -->
        <v-btn
          flat
          v-if="user"
          @click="handleSignoutUser"
        >
          <v-icon
            class="hidden-sm-only"
            left
          >exit_to_app</v-icon>
          Signout
        </v-btn>

      </v-toolbar-items>
    </v-toolbar>

    <!-- App Content -->
    <main>
      <v-container class="mt-4">
        <transition name="fade">
          <router-view />
        </transition>

        <!-- Auth Snackbar -->
        <v-snackbar
          v-model="authSnackbar"
          color="success"
          :timeout='5000'
          bottom
          left
        >
          <v-icon class="mr-3">check_circle</v-icon>
          <h3>You are now signed in!</h3>
          <v-btn
            dark
            flat
            @click="authSnackbar = false"
          >Close</v-btn>
        </v-snackbar>

        <!-- Auth Error Snackbar -->
        <v-snackbar
          v-if="authError"
          v-model="authErrorSnackbar"
          color="info"
          :timeout='5000'
          bottom
          left
        >
          <v-icon class="mr-3">cancel</v-icon>
          <h3>{{authError.message}}</h3>
          <v-btn
            dark
            flat
            to="/signin"
          >Sign in</v-btn>
        </v-snackbar>

      </v-container>
    </main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  data() {
    return {
      searchTerm: "",      
      sideNav: false,
      authSnackbar: false,
      authErrorSnackbar: false,
      badgeAnimated: false
    };
  },
  watch: {
    user(newValue, oldValue) {
      // if we had no value for user before, show snackbar
      if (oldValue === null) {
        this.authSnackbar = true;
      }
    },
    authError(value) {
      // if auth error is not null, show auth error snackbar
      if (value !== null) {
        this.authErrorSnackbar = true;
      }
    },
    userFavorites(value) {
      // if user favorites value changed at all
      if (value) {
        this.badgeAnimated = true;
        setTimeout(() => (this.badgeAnimated = false), 1000);
      }
    }
  },
  computed: {
    ...mapGetters(["authError", "user", "userFavorites"]),
    horizontalNavItems() {
      let items = [
        { icon: "chat", title: "Posts", link: "/posts" },
        { icon: "lock_open", title: "Sign In", link: "/signin" },
        { icon: "create", title: "Sign Up", link: "/signup" }
      ];
      if (this.user) {
        items = [{ icon: "chat", title: "Posts", link: "/posts" }];
      }
      return items;
    },
    sideNavItems() {
      let items = [
        { icon: "chat", title: "Posts", link: "/posts" },
        { icon: "lock_open", title: "Sign In", link: "/signin" },
        { icon: "create", title: "Sign Up", link: "/signup" }
      ];
      if (this.user) {
        items = [
          { icon: "chat", title: "Posts", link: "/posts" },
          { icon: "stars", title: "Create Post", link: "/post/add" },
          { icon: "account_box", title: "Profile", link: "/profile" }
        ];
      }
      return items;
    }
  },
  methods: {
    handleSearchPosts() {
      this.$store.dispatch("searchPosts", {
        searchTerm: this.searchTerm
      });
    },    
    handleSignoutUser() {
      this.$store.dispatch("signoutUser");
    },
    toggleSideNav() {
      this.sideNav = !this.sideNav;
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
/* User Favorite Animation */
.bounce {
  animation: bounce 1s both;
}

@keyframes bounce {
  0%,
  20%,
  53%,
  80%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  40%,
  43% {
    transform: translate3d(0, -20px, 0);
  }
  70% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, -4px, 0);
  }
}
</style>
```

- We need to test if it works.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/FireSearchPostsActionLogSearchResults.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/FireSearchPostsActionLogSearchResults2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/FireSearchPostsActionLogSearchResults3.png)

### 71. Add searchResults to State, Build Search Result Card 5min

- We need to modify the `client\src\store.js` store document to include the `searchResults` state.

> client\src\store.js
```js
import Vue from "vue"
import Vuex from "vuex"
import router from "./router"

import { defaultClient as apolloClient } from "./main"

import {
  GET_CURRENT_USER,
  GET_POSTS,
  SEARCH_POSTS,
  ADD_POST,
  SIGNIN_USER,
  SIGNUP_USER
} from "./queries";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    searchResults: [],    
    user: null,    
    loading: false,
    error: null,
    authError: null
  },
  mutations: {
    setPosts: (state, payload) => {
      state.posts = payload
    },
    setSearchResults: (state, payload) => {
      if (payload !== null) {
        state.searchResults = payload;
      }
    },    
    setUser: (state, payload) => {
      state.user = payload
    },    
    setLoading: (state, payload) => {
      state.loading = payload
    },
    setError: (state, payload) => {
      state.error = payload
    },
    setAuthError: (state, payload) => {
      state.authError = payload
    },
    clearUser: state => (state.user = null),
    clearError: state => (state.error = null),
    clearSearchResults: state => (state.searchResults = []),    
  },
  actions: {
    getCurrentUser: ({ commit }) => {
      commit("setLoading", true)
      apolloClient
        .query({
          query: GET_CURRENT_USER
        })
        .then(({ data }) => {
          commit("setLoading", false)
          // Add user data to state
          commit("setUser", data.getCurrentUser)
          console.log(data.getCurrentUser)
        })
        .catch(err => {
          commit("setLoading", false)
          console.error(err)
        })
    },    
    getPosts: ({ commit }) => {
      commit("setLoading", true)
      apolloClient
        .query({
          query: GET_POSTS
        })
        .then(({ data }) => {
          commit("setPosts", data.getPosts)
          commit("setLoading", false)
        })
        .catch(err => {
          commit("setLoading", false)
          console.error(err)
        })
    },
    searchPosts: ( { commit }, payload) => {
      apolloClient
        .query({
          query: SEARCH_POSTS,
          variables: payload
        })
        .then(({ data }) => {
          commit("setSearchResults", data.searchPosts);
        })
        .catch(err => console.error(err));
    },    
    signinUser: ({commit}, payload) => {
      commit("clearError")
      commit("setLoading", true)
      apolloClient
        .mutate({
          mutation: SIGNIN_USER,
          variables: payload
        })
        .then(({ data }) => {
          commit("setLoading", false)
          localStorage.setItem("token", data.signinUser.token)
          // to make sure created method is run in main.js (we run getCurrentUser), reload the page
          router.go()
        })
        .catch(err => {
          commit("setLoading", false)
          commit("setError", err)          
          console.error(err)
        })
    },
    addPost: (_ , payload) => {
      console.log(`payload: `,payload)
      apolloClient
        .mutate({
          mutation: ADD_POST,
          variables: payload,
          update: (cache, { data: { addPost } }) => {
            // First read the query you want to update
            const data = cache.readQuery({ query: GET_POSTS });
            // Create updated data
            data.getPosts.unshift(addPost);
            // Write updated data back to query
            console.log(data);
            cache.writeQuery({
              query: GET_POSTS,
              data
            });
          },
          // optimistic response ensures data is added immediately as we specified for the update function
          optimisticResponse: {
            __typename: 'Mutation',
            addPost: {
              __typename: 'Post',
              _id: -1,
              ...payload
            }
          }
        })
        .then(({ data }) => {
          console.log(data.addPost);
        })
        .catch(err => {
          console.error(err);
        });
    },    
    signupUser: ({ commit }, payload) => {
      commit("clearError");
      commit("setLoading", true);
      apolloClient
        .mutate({
          mutation: SIGNUP_USER,
          variables: payload
        })
        .then(({ data }) => {
          commit("setLoading", false);
          localStorage.setItem("token", data.signupUser.token);
          // to make sure created method is run in main.js (we run getCurrentUser), reload the page
          router.go();
        })
        .catch(err => {
          commit("setLoading", false);
          commit("setError", err);
          console.error(err);
        });
    },    
    signoutUser: async ({ commit }) => {
      // clear user in state
      commit("clearUser")
      // remove token in localStorage
      localStorage.setItem("token", "")
      // end session
      await apolloClient.resetStore()
      // redirect home - kick users out of private pages (i.e. profile)
      router.push("/")
    }
  },
  getters: {
    posts: state => state.posts,
    searchResults: state => state.searchResults,    
    user: state => state.user,
    userFavorites: state => state.user && state.user.favorites,
    loading: state => state.loading,
    error: state => state.error,
    authError: state => state.authError
  }
})

```

- We need to modify the `src\App.vue` Home document to make us of the `searchResults` state.

> client\src\App.vue
```html
<template>
  <v-app style="background: #E3E3EE">
    <!-- Side Navbar -->
    <v-navigation-drawer
      app
      temporary
      fixed
      v-model="sideNav"
    >
      <v-toolbar
        color="accent"
        dark
        flat
      >
        <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
        <router-link
          to="/"
          tag="span"
          style="cursor: pointer"
        >
          <h1 class="title pl-3">VueShare</h1>
        </router-link>
      </v-toolbar>

      <v-divider></v-divider>

      <!-- Side Navbar Links -->
      <v-list>
        <v-list-tile
          ripple
          v-for="item in sideNavItems"
          :key="item.title"
          :to="item.link"
        >
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{item.title}}
          </v-list-tile-content>
        </v-list-tile>

        <!-- Signout Button -->
        <v-list-tile
          v-if="user"
          @click="handleSignoutUser"
        >
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Signout</v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>

    <!-- Horizontal Navbar -->
    <v-toolbar
      fixed
      color="primary"
      dark
    >
      <!-- App Title -->
      <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-xs-only">
        <router-link
          to="/"
          tag="span"
          style="cursor: pointer"
        >
          VueShare
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Search Input -->
      <v-text-field
        v-model="searchTerm"
        @input="handleSearchPosts"
        flex
        prepend-icon="search"
        placeholder="Search posts"
        color="accent"
        single-line
        hide-details
      ></v-text-field>

      <!-- Search Results Card -->
      <v-card
        dark
        v-if="searchResults.length"
        id="search__card"
      >
        <v-list>
          <v-list-tile
            v-for="result in searchResults"
            :key="result._id"
          >
            <v-list-tile-title>
              {{result.title}} -
              <span class="font-weight-thin">{{result.description}}</span>
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-card>

      <v-spacer></v-spacer>

      <!-- Horizontal Navbar Links -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in horizontalNavItems"
          :key="item.title"
          :to="item.link"
        >
          <v-icon
            class="hidden-sm-only"
            left
          >{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>

        <!-- Profile Button -->
        <v-btn
          flat
          to="/profile"
          v-if="user"
        >
          <v-icon
            class="hidden-sm-only"
            left
          >account_box</v-icon>
          <v-badge
            right
            color="blue darken-2"
            :class="{ 'bounce': badgeAnimated }"
          >
            <span
              slot="badge"
              v-if="userFavorites.length"
            >{{userFavorites.length}}</span>
            Profile
          </v-badge>
        </v-btn>

        <!-- Signout Button -->
        <v-btn
          flat
          v-if="user"
          @click="handleSignoutUser"
        >
          <v-icon
            class="hidden-sm-only"
            left
          >exit_to_app</v-icon>
          Signout
        </v-btn>

      </v-toolbar-items>
    </v-toolbar>

    <!-- App Content -->
    <main>
      <v-container class="mt-4">
        <transition name="fade">
          <router-view />
        </transition>

        <!-- Auth Snackbar -->
        <v-snackbar
          v-model="authSnackbar"
          color="success"
          :timeout='5000'
          bottom
          left
        >
          <v-icon class="mr-3">check_circle</v-icon>
          <h3>You are now signed in!</h3>
          <v-btn
            dark
            flat
            @click="authSnackbar = false"
          >Close</v-btn>
        </v-snackbar>

        <!-- Auth Error Snackbar -->
        <v-snackbar
          v-if="authError"
          v-model="authErrorSnackbar"
          color="info"
          :timeout='5000'
          bottom
          left
        >
          <v-icon class="mr-3">cancel</v-icon>
          <h3>{{authError.message}}</h3>
          <v-btn
            dark
            flat
            to="/signin"
          >Sign in</v-btn>
        </v-snackbar>

      </v-container>
    </main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  data() {
    return {
      searchTerm: "",
      sideNav: false,
      authSnackbar: false,
      authErrorSnackbar: false,
      badgeAnimated: false
    };
  },
  watch: {
    user(newValue, oldValue) {
      // if we had no value for user before, show snackbar
      if (oldValue === null) {
        this.authSnackbar = true;
      }
    },
    authError(value) {
      // if auth error is not null, show auth error snackbar
      if (value !== null) {
        this.authErrorSnackbar = true;
      }
    },
    userFavorites(value) {
      // if user favorites value changed at all
      if (value) {
        this.badgeAnimated = true;
        setTimeout(() => (this.badgeAnimated = false), 1000);
      }
    }
  },
  computed: {
    ...mapGetters(["searchResults", "authError", "user", "userFavorites"]),
    horizontalNavItems() {
      let items = [
        { icon: "chat", title: "Posts", link: "/posts" },
        { icon: "lock_open", title: "Sign In", link: "/signin" },
        { icon: "create", title: "Sign Up", link: "/signup" }
      ];
      if (this.user) {
        items = [{ icon: "chat", title: "Posts", link: "/posts" }];
      }
      return items;
    },
    sideNavItems() {
      let items = [
        { icon: "chat", title: "Posts", link: "/posts" },
        { icon: "lock_open", title: "Sign In", link: "/signin" },
        { icon: "create", title: "Sign Up", link: "/signup" }
      ];
      if (this.user) {
        items = [
          { icon: "chat", title: "Posts", link: "/posts" },
          { icon: "stars", title: "Create Post", link: "/post/add" },
          { icon: "account_box", title: "Profile", link: "/profile" }
        ];
      }
      return items;
    }
  },
  methods: {
    handleSearchPosts() {
      this.$store.dispatch("searchPosts", {
        searchTerm: this.searchTerm
      });
    },
    handleSignoutUser() {
      this.$store.dispatch("signoutUser");
    },
    toggleSideNav() {
      this.sideNav = !this.sideNav;
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

/* Search Results Card */
#search__card {
  position: absolute;
  width: 100vw;
  z-index: 8;
  top: 100%;
  left: 0%;
}

/* User Favorite Animation */
.bounce {
  animation: bounce 1s both;
}

@keyframes bounce {
  0%,
  20%,
  53%,
  80%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  40%,
  43% {
    transform: translate3d(0, -20px, 0);
  }
  70% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, -4px, 0);
  }
}
</style>

```

- We need to test if it works.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddSearchResultsToStateBuildSearchResultCard.png)

### 72. Finishing Search Results, Making them Functional 6min

- We need to modify the `src\App.vue` Home document to be able to access any of the search post results.

> client\src\App.vue
```html
<template>
  <v-app style="background: #E3E3EE">
    <!-- Side Navbar -->
    <v-navigation-drawer
      app
      temporary
      fixed
      v-model="sideNav"
    >
      <v-toolbar
        color="accent"
        dark
        flat
      >
        <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
        <router-link
          to="/"
          tag="span"
          style="cursor: pointer"
        >
          <h1 class="title pl-3">VueShare</h1>
        </router-link>
      </v-toolbar>

      <v-divider></v-divider>

      <!-- Side Navbar Links -->
      <v-list>
        <v-list-tile
          ripple
          v-for="item in sideNavItems"
          :key="item.title"
          :to="item.link"
        >
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{item.title}}
          </v-list-tile-content>
        </v-list-tile>

        <!-- Signout Button -->
        <v-list-tile
          v-if="user"
          @click="handleSignoutUser"
        >
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Signout</v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>

    <!-- Horizontal Navbar -->
    <v-toolbar
      fixed
      color="primary"
      dark
    >
      <!-- App Title -->
      <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-xs-only">
        <router-link
          to="/"
          tag="span"
          style="cursor: pointer"
        >
          VueShare
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Search Input -->
      <v-text-field
        v-model="searchTerm"
        @input="handleSearchPosts"
        flex
        prepend-icon="search"
        placeholder="Search posts"
        color="accent"
        single-line
        hide-details
      ></v-text-field>

      <!-- Search Results Card -->
      <v-card
        dark
        v-if="searchResults.length"
        id="search__card"
      >
        <v-list>
          <v-list-tile
            v-for="result in searchResults"
            :key="result._id"
            @click="goToSearchResult(result._id)"
          >
            <v-list-tile-title>
              {{result.title}} -
              <span class="font-weight-thin">{{formatDescription(result.description)}}</span>
            </v-list-tile-title>

            <!-- Show Icon if Result Favorited by User -->
            <v-list-tile-action v-if="checkIfUserFavorite(result._id)">
              <v-icon>favorite</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-card>

      <v-spacer></v-spacer>

      <!-- Horizontal Navbar Links -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in horizontalNavItems"
          :key="item.title"
          :to="item.link"
        >
          <v-icon
            class="hidden-sm-only"
            left
          >{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>

        <!-- Profile Button -->
        <v-btn
          flat
          to="/profile"
          v-if="user"
        >
          <v-icon
            class="hidden-sm-only"
            left
          >account_box</v-icon>
          <v-badge
            right
            color="blue darken-2"
            :class="{ 'bounce': badgeAnimated }"
          >
            <span
              slot="badge"
              v-if="userFavorites.length"
            >{{userFavorites.length}}</span>
            Profile
          </v-badge>
        </v-btn>

        <!-- Signout Button -->
        <v-btn
          flat
          v-if="user"
          @click="handleSignoutUser"
        >
          <v-icon
            class="hidden-sm-only"
            left
          >exit_to_app</v-icon>
          Signout
        </v-btn>

      </v-toolbar-items>
    </v-toolbar>

    <!-- App Content -->
    <main>
      <v-container class="mt-4">
        <transition name="fade">
          <router-view />
        </transition>

        <!-- Auth Snackbar -->
        <v-snackbar
          v-model="authSnackbar"
          color="success"
          :timeout='5000'
          bottom
          left
        >
          <v-icon class="mr-3">check_circle</v-icon>
          <h3>You are now signed in!</h3>
          <v-btn
            dark
            flat
            @click="authSnackbar = false"
          >Close</v-btn>
        </v-snackbar>

        <!-- Auth Error Snackbar -->
        <v-snackbar
          v-if="authError"
          v-model="authErrorSnackbar"
          color="info"
          :timeout='5000'
          bottom
          left
        >
          <v-icon class="mr-3">cancel</v-icon>
          <h3>{{authError.message}}</h3>
          <v-btn
            dark
            flat
            to="/signin"
          >Sign in</v-btn>
        </v-snackbar>

      </v-container>
    </main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  data() {
    return {
      searchTerm: "",
      sideNav: false,
      authSnackbar: false,
      authErrorSnackbar: false,
      badgeAnimated: false
    };
  },
  watch: {
    user(newValue, oldValue) {
      // if we had no value for user before, show snackbar
      if (oldValue === null) {
        this.authSnackbar = true;
      }
    },
    authError(value) {
      // if auth error is not null, show auth error snackbar
      if (value !== null) {
        this.authErrorSnackbar = true;
      }
    },
    userFavorites(value) {
      // if user favorites value changed at all
      if (value) {
        this.badgeAnimated = true;
        setTimeout(() => (this.badgeAnimated = false), 1000);
      }
    }
  },
  computed: {
    ...mapGetters(["searchResults", "authError", "user", "userFavorites"]),
    horizontalNavItems() {
      let items = [
        { icon: "chat", title: "Posts", link: "/posts" },
        { icon: "lock_open", title: "Sign In", link: "/signin" },
        { icon: "create", title: "Sign Up", link: "/signup" }
      ];
      if (this.user) {
        items = [{ icon: "chat", title: "Posts", link: "/posts" }];
      }
      return items;
    },
    sideNavItems() {
      let items = [
        { icon: "chat", title: "Posts", link: "/posts" },
        { icon: "lock_open", title: "Sign In", link: "/signin" },
        { icon: "create", title: "Sign Up", link: "/signup" }
      ];
      if (this.user) {
        items = [
          { icon: "chat", title: "Posts", link: "/posts" },
          { icon: "stars", title: "Create Post", link: "/post/add" },
          { icon: "account_box", title: "Profile", link: "/profile" }
        ];
      }
      return items;
    }
  },
  methods: {
    handleSearchPosts() {
      this.$store.dispatch("searchPosts", {
        searchTerm: this.searchTerm
      });
    },
    handleSignoutUser() {
      this.$store.dispatch("signoutUser");
    },
    goToSearchResult(resultId) {
      // Clear search term
      this.searchTerm = "";
      // Go to desired result
      this.$router.push(`/posts/${resultId}`);
      // Clear search results
      this.$store.commit("clearSearchResults");
    },
    formatDescription(desc) {
      return desc.length > 30 ? `${desc.slice(0, 30)}...` : desc;
    },
    checkIfUserFavorite(resultId) {
      return (
        this.userFavorites &&
        this.userFavorites.some(fave => fave._id === resultId)
      );
    },    
    toggleSideNav() {
      this.sideNav = !this.sideNav;
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

/* Search Results Card */
#search__card {
  position: absolute;
  width: 100vw;
  z-index: 8;
  top: 100%;
  left: 0%;
}

/* User Favorite Animation */
.bounce {
  animation: bounce 1s both;
}

@keyframes bounce {
  0%,
  20%,
  53%,
  80%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  40%,
  43% {
    transform: translate3d(0, -20px, 0);
  }
  70% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, -4px, 0);
  }
}
</style>
```

- We need to test if it works.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/FinishingSearchResultsMakingThemFunctional.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/FinishingSearchResultsMakingThemFunctional2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/FinishingSearchResultsMakingThemFunctional3.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/FinishingSearchResultsMakingThemFunctional4.png)

## Section 14: Profile Page, Update / Delete Posts 0 / 7|53min

### 73. Add User Details Card / Favorites Cards 6min

- We are going to modify the 'Auth\Profile.vue' page document to a User details card and Favorites Post cards for the User. 

> client\src\components\Auth\Profile.vue
```html
<template>
  <v-container class="text-xs-center">

    <!-- User Details Card -->
    <v-flex
      sm6
      offset-sm3
    >
      <v-card
        class="white--text"
        color="secondary"
      >
        <v-layout>
          <v-flex xs5>
            <v-card-media
              height="125px"
              contain
              :src="user.avatar"
            ></v-card-media>
          </v-flex>
          <v-flex xs7>
            <v-card-title primary-title>
              <div>
                <div class="headline">{{user.username}}</div>
                <div>Joined {{user.joinDate}}</div>
                <div class="hidden-xs-only font-weight-thin">{{user.favorites.length}} Favorites</div>
                <div class="hidden-xs-only font-weight-thin">2 Posts Added</div>
              </div>
            </v-card-title>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>

    <!-- Posts Favorited by User -->
    <v-container v-if="!userFavorites.length">
      <v-layout
        row
        wrap
      >
        <v-flex xs12>
          <h2>You have no favorites currently. Go and add some!</h2>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container
      class="mt-3"
      v-else
    >
      <v-flex xs12>
        <h2 class="font-weight-light">Favorited
          <span class="font-weight-regular">{{userFavorites.length}}</span>
        </h2>
      </v-flex>
      <v-layout
        row
        wrap
      >
        <v-flex
          xs12
          sm6
          v-for="favorite in userFavorites"
          :key="favorite._id"
        >
          <v-card
            class="mt-3 ml-1 mr-2"
            hover
          >
            <v-card-media
              height="30vh"
              :src="favorite.imageUrl"
            ></v-card-media>
            <v-card-text>{{favorite.title}}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Profile",
  computed: {
    ...mapGetters(["user", "userFavorites"])
  }
};
</script>

```

- We need to test if it works.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddUserDetailsCardFavoritesCards.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddUserDetailsCardFavoritesCards2.png)

### 74. Write getUserPosts Query 4min

- We are going to modify the `typeDefs.gql` document to include the `getUserPosts` Query

> typeDefs.gql
```graphql
type User {
  _id: ID
  username: String! @unique
  email: String!
  password: String!
  avatar: String
  joinDate: String
  favorites: [Post]
}

type Post {
  _id: ID
  title: String!
  imageUrl: String!
  categories: [String]!
  description: String!
  createdDate: String
  likes: Int
  createdBy: User!
  messages: [Message]
}

type Message {
  _id: ID
  messageBody: String!
  messageDate: String
  messageUser: User!
}

type Token {
  token: String!
}

type PostsPage {
  posts: [Post]
  hasMore: Boolean
}

# Likes for Post / Favorites for User
type LikesFaves {
  likes: Int
  favorites: [Post]
}

type Query {
  getCurrentUser: User
  getPosts: [Post]
  getUserPosts(userId: ID!): [Post]
  getPost(postId: ID!): Post!
  searchPosts(searchTerm: String): [Post]
  infiniteScrollPosts(pageNum: Int!, pageSize: Int!): PostsPage
}

type Mutation {
  addPost(
    title: String!
    imageUrl: String!
    categories: [String]!
    description: String!
    creatorId: ID!
  ): Post!
  addPostMessage(messageBody: String!, userId: ID!, postId: ID!): Message!
  likePost(postId: ID!, username: String!): LikesFaves!
  unlikePost(postId: ID!, username: String!): LikesFaves!
  signinUser(username: String!, password: String!): Token
  signupUser(username: String!, email: String!, password: String!): Token
}
```

- We are going to modify the `resolvers.js` document to include the `getUserPosts` Query

> resolvers.js
```js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createToken = (user, secret, expiresIn) => {
  const { username, email } = user;
  return jwt.sign({ username, email }, secret, { expiresIn });
};

module.exports = {
  Query: {
    getCurrentUser: async (_, _args, { User, currentUser }) => {
      if (!currentUser) {
        return null;
      }
      const user = await User.findOne({
        username: currentUser.username
      }).populate({
        path: "favorites",
        model: "Post"
      });
      return user;
    },
    getPosts: async (_, _args, { Post }) => {
      const posts = await Post.find({})
        .sort({ createdDate: "desc" })
        .populate({
          path: "createdBy",
          model: "User"
        });
      return posts;
    },
    getUserPosts: async (_, { userId }, { Post }) => {
      const posts = await Post.find({
        createdBy: userId
      });
      return posts;
    },    
    getPost: async (_, { postId }, { Post }) => {
      const post = await Post.findOne({ _id: postId }).populate({
        path: "messages.messageUser",
        model: "User"
      });
      return post;
    },
    searchPosts: async (_, { searchTerm }, { Post }) => {
      if (searchTerm) {
        const searchResults = await Post.find(
          // Perform text search for search value of 'searchTerm'
          { $text: { $search: searchTerm } },
          // Assign 'searchTerm' a text score to provide best match
          { score: { $meta: "textScore" } }
        )
          // Sort results according to that textScore (as well as by likes in descending order)
          .sort({
            score: { $meta: "textScore" },
            likes: "desc"
          })
          .limit(5);
        return searchResults;
      }
    },
    infiniteScrollPosts: async (_, { pageNum, pageSize }, { Post }) => {
      let posts;
      if (pageNum === 1) {
        posts = await Post.find({})
          .sort({ createdDate: "desc" })
          .populate({
            path: "createdBy",
            model: "User"
          })
          .limit(pageSize);
      } else {
        // If page number is greater than one, figure out how many documents to skip
        const skips = pageSize * (pageNum - 1);
        posts = await Post.find({})
          .sort({ createdDate: "desc" })
          .populate({
            path: "createdBy",
            model: "User"
          })
          .skip(skips)
          .limit(pageSize);
      }
      const totalDocs = await Post.countDocuments();
      const hasMore = totalDocs > pageSize * pageNum;
      return { posts, hasMore };
    }
  },
  Mutation: {
    addPost: async (
      _,
      { title, imageUrl, categories, description, creatorId },
      { Post }
    ) => {
      const newPost = await new Post({
        title,
        imageUrl,
        categories,
        description,
        createdBy: creatorId
      }).save();
      return newPost;
    },
    addPostMessage: async (_, { messageBody, userId, postId }, { Post }) => {
      const newMessage = {
        messageBody,
        messageUser: userId
      };
      const post = await Post.findOneAndUpdate(
        // find post by id
        { _id: postId },
        // prepend (push) new message to beginning of messages array
        { $push: { messages: { $each: [newMessage], $position: 0 } } },
        // return fresh document after update
        { new: true }
      ).populate({
        path: "messages.messageUser",
        model: "User"
      });
      return post.messages[0];
    },
    likePost: async (_, { postId, username }, { Post, User }) => {
      // Find Post, add 1 to its 'like' value
      const post = await Post.findOneAndUpdate(
        { _id: postId },
        { $inc: { likes: 1 } },
        { new: true }
      );
      // Find User, add id of post to its favorites array (which will be populated as Posts)
      const user = await User.findOneAndUpdate(
        { username },
        { $addToSet: { favorites: postId } },
        { new: true }
      ).populate({
        path: "favorites",
        model: "Post"
      });
      // Return only likes from 'post' and favorites from 'user'
      return { likes: post.likes, favorites: user.favorites };
    },
    unlikePost: async (_, { postId, username }, { Post, User }) => {
      // Find Post, add -1 to its 'like' value
      const post = await Post.findOneAndUpdate(
        { _id: postId },
        { $inc: { likes: -1 } },
        { new: true }
      );
      // Find User, remove id of post from its favorites array (which will be populated as Posts)
      const user = await User.findOneAndUpdate(
        { username },
        { $pull: { favorites: postId } },
        { new: true }
      ).populate({
        path: "favorites",
        model: "Post"
      });
      // Return only likes from 'post' and favorites from 'user'
      return { likes: post.likes, favorites: user.favorites };
    },        
    signinUser: async (_, { username, password }, { User }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new Error("User not found");
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        throw new Error("Invalid password");
      }
      return { token: createToken(user, process.env.SECRET, "1hr") };
    },
    signupUser: async (_, { username, email, password }, { User }) => {
      const user = await User.findOne({ username });
      if (user) {
        throw new Error("User already exists");
      }
      const newUser = await new User({
        username,
        email,
        password
      }).save();
      return { token: createToken(newUser, process.env.SECRET, "1hr") };
    }
  }
};

```

- We are going to modify the `client\src\queries.js` to add the `GET_USER_POSTS` query.

> client\src\queries.js
```js
import { gql } from "apollo-boost";

/* Posts Queries */
export const GET_POSTS = gql`
  query {
    getPosts {
      _id
      title
      imageUrl
    }
  }
`;

export const GET_POST = gql`
  query($postId: ID!) {
    getPost(postId: $postId) {
      _id
      title
      imageUrl
      categories
      description
      likes
      createdDate
      messages {
        _id
        messageBody
        messageDate
        messageUser {
          _id
          username
          avatar
        }
      }
    }
  }
`;

export const SEARCH_POSTS = gql`
  query($searchTerm: String) {
    searchPosts(searchTerm: $searchTerm) {
      _id
      title
      description
      imageUrl
      likes
    }
  }
`;

/* User Queries */
export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      _id
      username
      email
      password
      avatar
      joinDate
      favorites {
        _id
        title
        imageUrl
      }
    }
  }
`;

export const GET_USER_POSTS = gql`
  query($userId: ID!) {
    getUserPosts(userId: $userId) {
      _id
      title
      imageUrl
      description
      categories
      createdDate
      likes
    }
  }
`;

export const INFINITE_SCROLL_POSTS = gql`
  query($pageNum: Int!, $pageSize: Int!) {
    infiniteScrollPosts(pageNum: $pageNum, pageSize: $pageSize) {
      hasMore
      posts {
        _id
        title
        imageUrl
        categories
        description
        likes
        createdDate
        messages {
          _id
        }
        createdBy {
          _id
          username
          avatar
        }
      }
    }
  }
`;

/* Posts Mutations */
export const ADD_POST = gql`
  mutation(
    $title: String!
    $imageUrl: String!
    $categories: [String]!
    $description: String!
    $creatorId: ID!
  ) {
    addPost(
      title: $title
      imageUrl: $imageUrl
      categories: $categories
      description: $description
      creatorId: $creatorId
    ) {
      _id
      title
      imageUrl
      categories
      description
    }
  }
`;

export const ADD_POST_MESSAGE = gql`
  mutation($messageBody: String!, $userId: ID!, $postId: ID!) {
    addPostMessage(
      messageBody: $messageBody
      userId: $userId
      postId: $postId
    ) {
      _id
      messageBody
      messageDate
      messageUser {
        _id
        username
        avatar
      }
    }
  }
`;

export const LIKE_POST = gql`
  mutation($postId: ID!, $username: String!) {
    likePost(postId: $postId, username: $username) {
      likes
      favorites {
        _id
        title
        imageUrl
      }
    }
  }
`;

export const UNLIKE_POST = gql`
  mutation($postId: ID!, $username: String!) {
    unlikePost(postId: $postId, username: $username) {
      likes
      favorites {
        _id
        title
        imageUrl
      }
    }
  }
`;

/* User Mutations */
export const SIGNIN_USER = gql`
  mutation($username: String!, $password: String!) {
    signinUser(username: $username, password: $password) {
      token
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    signupUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`;

```

- We need to ensure there are no errors

```bash
[server] [nodemon] restarting due to changes...
[client]  WAIT  Compiling...5:46:10 AM
[client]
[client]  10% building 0/0 modules 0 active[nodemon] starting `node server.js`
 98% after emitting DONE  Compiled successfully in 1046ms5:46:12 AM
[client]
[client]
[client]   App running at:
[client]   - Local:   http://localhost:8080/
  - Network: http://192.168.1.38:8080/
[client]
[server] Server listening on http://localhost:4000/
[server] DB connected
```

### 75. Execute getUserPosts Query, Create and Populate User Cards 9min

- We are going to modify the `store.js` store document to include the `userPosts` state.

> client\src\store.js
```js
import Vue from "vue"
import Vuex from "vuex"
import router from "./router"

import { defaultClient as apolloClient } from "./main"

import {
  GET_CURRENT_USER,
  GET_POSTS,
  GET_USER_POSTS,
  SEARCH_POSTS,
  ADD_POST,
  SIGNIN_USER,
  SIGNUP_USER
} from "./queries";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    userPosts: [],
    searchResults: [],    
    user: null,    
    loading: false,
    error: null,
    authError: null
  },
  mutations: {
    setPosts: (state, payload) => {
      state.posts = payload
    },
    setSearchResults: (state, payload) => {
      if (payload !== null) {
        state.searchResults = payload;
      }
    },    
    setUser: (state, payload) => {
      state.user = payload
    },    
    setUserPosts: (state, payload) => {
      state.userPosts = payload;
    },    
    setLoading: (state, payload) => {
      state.loading = payload
    },
    setError: (state, payload) => {
      state.error = payload
    },
    setAuthError: (state, payload) => {
      state.authError = payload
    },
    clearUser: state => (state.user = null),
    clearError: state => (state.error = null),
    clearSearchResults: state => (state.searchResults = []),    
  },
  actions: {
    getCurrentUser: ({ commit }) => {
      commit("setLoading", true)
      apolloClient
        .query({
          query: GET_CURRENT_USER
        })
        .then(({ data }) => {
          commit("setLoading", false)
          // Add user data to state
          commit("setUser", data.getCurrentUser)
          console.log(data.getCurrentUser)
        })
        .catch(err => {
          commit("setLoading", false)
          console.error(err)
        })
    },    
    getPosts: ({ commit }) => {
      commit("setLoading", true)
      apolloClient
        .query({
          query: GET_POSTS
        })
        .then(({ data }) => {
          commit("setPosts", data.getPosts)
          commit("setLoading", false)
        })
        .catch(err => {
          commit("setLoading", false)
          console.error(err)
        })
    },
    getUserPosts: ({ commit }, payload) => {
      apolloClient
        .query({
          query: GET_USER_POSTS,
          variables: payload
        })
        .then(({ data }) => {
          commit("setUserPosts", data.getUserPosts);
          // console.log(data.getUserPosts);
        })
        .catch(err => {
          console.error(err);
        });
    },    
    searchPosts: ( { commit }, payload) => {
      apolloClient
        .query({
          query: SEARCH_POSTS,
          variables: payload
        })
        .then(({ data }) => {
          commit("setSearchResults", data.searchPosts);
        })
        .catch(err => console.error(err));
    },    
    signinUser: ({commit}, payload) => {
      commit("clearError")
      commit("setLoading", true)
      apolloClient
        .mutate({
          mutation: SIGNIN_USER,
          variables: payload
        })
        .then(({ data }) => {
          commit("setLoading", false)
          localStorage.setItem("token", data.signinUser.token)
          // to make sure created method is run in main.js (we run getCurrentUser), reload the page
          router.go()
        })
        .catch(err => {
          commit("setLoading", false)
          commit("setError", err)          
          console.error(err)
        })
    },
    addPost: (_ , payload) => {
      console.log(`payload: `,payload)
      apolloClient
        .mutate({
          mutation: ADD_POST,
          variables: payload,
          update: (cache, { data: { addPost } }) => {
            // First read the query you want to update
            const data = cache.readQuery({ query: GET_POSTS });
            // Create updated data
            data.getPosts.unshift(addPost);
            // Write updated data back to query
            console.log(data);
            cache.writeQuery({
              query: GET_POSTS,
              data
            });
          },
          // optimistic response ensures data is added immediately as we specified for the update function
          optimisticResponse: {
            __typename: 'Mutation',
            addPost: {
              __typename: 'Post',
              _id: -1,
              ...payload
            }
          }
        })
        .then(({ data }) => {
          console.log(data.addPost);
        })
        .catch(err => {
          console.error(err);
        });
    },    
    signupUser: ({ commit }, payload) => {
      commit("clearError");
      commit("setLoading", true);
      apolloClient
        .mutate({
          mutation: SIGNUP_USER,
          variables: payload
        })
        .then(({ data }) => {
          commit("setLoading", false);
          localStorage.setItem("token", data.signupUser.token);
          // to make sure created method is run in main.js (we run getCurrentUser), reload the page
          router.go();
        })
        .catch(err => {
          commit("setLoading", false);
          commit("setError", err);
          console.error(err);
        });
    },    
    signoutUser: async ({ commit }) => {
      // clear user in state
      commit("clearUser")
      // remove token in localStorage
      localStorage.setItem("token", "")
      // end session
      await apolloClient.resetStore()
      // redirect home - kick users out of private pages (i.e. profile)
      router.push("/")
    }
  },
  getters: {
    posts: state => state.posts,
    userPosts: state => state.userPosts,
    searchResults: state => state.searchResults,    
    user: state => state.user,
    userFavorites: state => state.user && state.user.favorites,
    loading: state => state.loading,
    error: state => state.error,
    authError: state => state.authError
  }
})
```

- We are going to modify the `Auth\Profile.vue` page document to include the posts created by the user

> client\src\components\Auth\Profile.vue
```html
<template>
  <v-container class="text-xs-center">

    <!-- User Details Card -->
    <v-flex
      sm6
      offset-sm3
    >
      <v-card
        class="white--text"
        color="secondary"
      >
        <v-layout>
          <v-flex xs5>
            <v-img
              height="125px"
              contain
              :src="user.avatar"
            ></v-img>
          </v-flex>
          <v-flex xs7>
            <v-card-title primary-title>
              <div>
                <div class="headline">{{user.username}}</div>
                <div>Joined {{user.joinDate}}</div>
                <div class="hidden-xs-only font-weight-thin">{{user.favorites.length}} Favorites</div>
                <div class="hidden-xs-only font-weight-thin">{{userPosts.length}} Posts Added</div>
              </div>
            </v-card-title>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>

    <!-- Posts Favorited by User -->
    <v-container v-if="!userFavorites.length">
      <v-layout
        row
        wrap
      >
        <v-flex xs12>
          <h2>You have no favorites currently. Go and add some!</h2>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container
      class="mt-3"
      v-else
    >
      <v-flex xs12>
        <h2 class="font-weight-light">Favorited
          <span class="font-weight-regular">({{userFavorites.length}})</span>
        </h2>
      </v-flex>
      <v-layout
        row
        wrap
      >
        <v-flex
          xs12
          sm6
          v-for="favorite in userFavorites"
          :key="favorite._id"
        >
          <v-card
            class="mt-3 ml-1 mr-2"
            hover
          >
            <v-img
              height="30vh"
              :src="favorite.imageUrl"
            ></v-img>
            <v-card-text>{{favorite.title}}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- Posts Created By user -->
    <v-container v-if="!userPosts.length">
      <v-layout
        row
        wrap
      >
        <v-flex xs12>
          <h2>You have no posts currently. Go and add some!</h2>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container
      class="mt-3"
      v-else
    >
      <v-flex xs12>
        <h2 class="font-weight-light">Your Posts
          <span class="font-weight-regular">({{userPosts.length}})</span>
        </h2>
      </v-flex>
      <v-layout
        row
        wrap
      >
        <v-flex
          xs12
          sm6
          v-for="post in userPosts"
          :key="post._id"
        >
          <v-card
            class="mt-3 ml-1 mr-2"
            hover
          >
            <v-btn
              color="info"
              floating
              fab
              small
              dark
            >
              <v-icon>edit</v-icon>
            </v-btn>
            <v-btn
              color="error"
              floating
              fab
              small
              dark
            >
              <v-icon>delete</v-icon>
            </v-btn>

            <v-img
              height="30vh"
              :src="post.imageUrl"
            ></v-img>
            <v-card-text>{{post.title}}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Profile",
  computed: {
    ...mapGetters(["user", "userFavorites", "userPosts"])
  },
  created() {
    this.handleGetUserPosts();
  },
  methods: {
    handleGetUserPosts() {
      this.$store.dispatch("getUserPosts", {
        userId: this.user._id
      });
    }
  }
};
</script>
```

- We need to test if it works.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ExecuteGetUserPostsQueryCreateAndPopulateUserCards.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ExecuteGetUserPostsQueryCreateAndPopulateUserCards2.png)

### 76. Add Edit Post Dialog for Updating User Posts 6min

- We are going to modify the `Auth\Profile.vue` page document to add the edit Post dialog for updating the user posts

> client\src\components\Auth\Profile.vue
```html
<template>
  <v-container class="text-xs-center">

    <!-- User Details Card -->
    <v-flex
      sm6
      offset-sm3
    >
      <v-card
        class="white--text"
        color="secondary"
      >
        <v-layout>
          <v-flex xs5>
            <v-img
              height="125px"
              contain
              :src="user.avatar"
            ></v-img>
          </v-flex>
          <v-flex xs7>
            <v-card-title primary-title>
              <div>
                <div class="headline">{{user.username}}</div>
                <div>Joined {{user.joinDate}}</div>
                <div class="hidden-xs-only font-weight-thin">{{user.favorites.length}} Favorites</div>
                <div class="hidden-xs-only font-weight-thin">{{userPosts.length}} Posts Added</div>
              </div>
            </v-card-title>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>

    <!-- Posts Favorited by User -->
    <v-container v-if="!userFavorites.length">
      <v-layout
        row
        wrap
      >
        <v-flex xs12>
          <h2>You have no favorites currently. Go and add some!</h2>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container
      class="mt-3"
      v-else
    >
      <v-flex xs12>
        <h2 class="font-weight-light">Favorited
          <span class="font-weight-regular">({{userFavorites.length}})</span>
        </h2>
      </v-flex>
      <v-layout
        row
        wrap
      >
        <v-flex
          xs12
          sm6
          v-for="favorite in userFavorites"
          :key="favorite._id"
        >
          <v-card
            class="mt-3 ml-1 mr-2"
            hover
          >
            <v-img
              height="30vh"
              :src="favorite.imageUrl"
            ></v-img>
            <v-card-text>{{favorite.title}}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- Posts Created By user -->
    <v-container v-if="!userPosts.length">
      <v-layout
        row
        wrap
      >
        <v-flex xs12>
          <h2>You have no posts currently. Go and add some!</h2>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container
      class="mt-3"
      v-else
    >
      <v-flex xs12>
        <h2 class="font-weight-light">Your Posts
          <span class="font-weight-regular">({{userPosts.length}})</span>
        </h2>
      </v-flex>
      <v-layout
        row
        wrap
      >
        <v-flex
          xs12
          sm6
          v-for="post in userPosts"
          :key="post._id"
        >
          <v-card
            class="mt-3 ml-1 mr-2"
            hover
          >
            <v-btn
              color="info"
              floating
              fab
              small
              dark
              @click="editPostDialog = true"
            >
              <v-icon>edit</v-icon>
            </v-btn>
            <v-btn
              color="error"
              floating
              fab
              small
              dark
            >
              <v-icon>delete</v-icon>
            </v-btn>

            <v-img
              height="30vh"
              :src="post.imageUrl"
            ></v-img>
            <v-card-text>{{post.title}}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- Edit Post Dialog -->
    <v-dialog xs12 sm6 offset-sm3 persistent v-model="editPostDialog">
      <v-card>
        <v-card-title class="headline grey lighten-2">Update Post</v-card-title>
        <v-container>
          <v-form v-model="isFormValid" lazy-validation ref="form" @submit.prevent="handleUpdateUserPost">

            <!-- Title Input -->
            <v-layout row>
              <v-flex xs12>
                <v-text-field :rules="titleRules" v-model="title" label="Post Title" type="text" required></v-text-field>
              </v-flex>
            </v-layout>

            <!-- Image Url Input -->
            <v-layout row>
              <v-flex xs12>
                <v-text-field :rules="imageRules" v-model="imageUrl" label="Image URL" type="text" required></v-text-field>
              </v-flex>
            </v-layout>

            <!-- Image Preview -->
            <v-layout row>
              <v-flex xs12>
                <img :src="imageUrl" height="300px">
              </v-flex>
            </v-layout>

            <!-- Categories Select -->
            <v-layout row>
              <v-flex xs12>
                <v-select v-model="categories" :rules="categoriesRules" :items="['Art', 'Education', 'Food', 'Furniture', 'Travel', 'Photography', 'Technology']" multiple label="Categories"></v-select>
              </v-flex>
            </v-layout>

            <!-- Description Text Area -->
            <v-layout row>
              <v-flex xs12>
                <v-textarea :rules="descRules" v-model="description" label="Description" type="text" required></v-textarea>
              </v-flex>
            </v-layout>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn type="submit" class="success--text" flat>Update</v-btn>
              <v-btn class="error--text" flat @click="editPostDialog = false">Cancel</v-btn>
            </v-card-actions>

          </v-form>
        </v-container>
      </v-card>
    </v-dialog>

  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Profile",
  data() {
    return {
      editPostDialog: false,
      isFormValid: true,
      title: "",
      imageUrl: "",
      categories: [],
      description: "",
      titleRules: [
        title => !!title || "Title is required",
        title => title.length < 20 || "Title must have less than 20 characters"
      ],
      imageRules: [image => !!image || "Image is required"],
      categoriesRules: [
        categories =>
          categories.length >= 1 || "At least one category is required"
      ],
      descRules: [
        desc => !!desc || "Description is required",
        desc =>
          desc.length < 200 || "Description must have less than 200 characters"
      ]
    };
  },  
  computed: {
    ...mapGetters(["user", "userFavorites", "userPosts"])
  },
  created() {
    this.handleGetUserPosts();
  },
  methods: {
    handleGetUserPosts() {
      this.$store.dispatch("getUserPosts", {
        userId: this.user._id
      });
    },
    handleUpdateUserPost() {
      // update user post action
    }
  }
};
</script>

```

- We need to test if it works.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddEditPostDialogForUpdatingUserPosts.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddEditPostDialogForUpdatingUserPosts2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddEditPostDialogForUpdatingUserPosts3.png)

### 77. Create updateUserPost Mutation 8min

- We are going to modify the `typeDefs.gql` document to include the `updateUserPost` Mutation.

> typeDefs.gql
```graphql
type User {
  _id: ID
  username: String! @unique
  email: String!
  password: String!
  avatar: String
  joinDate: String
  favorites: [Post]
}

type Post {
  _id: ID
  title: String!
  imageUrl: String!
  categories: [String]!
  description: String!
  createdDate: String
  likes: Int
  createdBy: User!
  messages: [Message]
}

type Message {
  _id: ID
  messageBody: String!
  messageDate: String
  messageUser: User!
}

type Token {
  token: String!
}

type PostsPage {
  posts: [Post]
  hasMore: Boolean
}

# Likes for Post / Favorites for User
type LikesFaves {
  likes: Int
  favorites: [Post]
}

type Query {
  getCurrentUser: User
  getPosts: [Post]
  getUserPosts(userId: ID!): [Post]
  getPost(postId: ID!): Post!
  searchPosts(searchTerm: String): [Post]
  infiniteScrollPosts(pageNum: Int!, pageSize: Int!): PostsPage
}

type Mutation {
  addPost(
    title: String!
    imageUrl: String!
    categories: [String]!
    description: String!
    creatorId: ID!
  ): Post!
  updateUserPost(
    postId: ID!
    userId: ID!
    title: String!
    imageUrl: String!
    categories: [String]!
    description: String!
  ): Post!  
  addPostMessage(messageBody: String!, userId: ID!, postId: ID!): Message!
  likePost(postId: ID!, username: String!): LikesFaves!
  unlikePost(postId: ID!, username: String!): LikesFaves!
  signinUser(username: String!, password: String!): Token
  signupUser(username: String!, email: String!, password: String!): Token
}

```

- We are going to modify the `resolvers.js` document to include the `updateUserPost` Mutation.

> resolvers.js
```js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createToken = (user, secret, expiresIn) => {
  const { username, email } = user;
  return jwt.sign({ username, email }, secret, { expiresIn });
};

module.exports = {
  Query: {
    getCurrentUser: async (_, _args, { User, currentUser }) => {
      if (!currentUser) {
        return null;
      }
      const user = await User.findOne({
        username: currentUser.username
      }).populate({
        path: "favorites",
        model: "Post"
      });
      return user;
    },
    getPosts: async (_, _args, { Post }) => {
      const posts = await Post.find({})
        .sort({ createdDate: "desc" })
        .populate({
          path: "createdBy",
          model: "User"
        });
      return posts;
    },
    getUserPosts: async (_, { userId }, { Post }) => {
      const posts = await Post.find({
        createdBy: userId
      });
      return posts;
    },    
    getPost: async (_, { postId }, { Post }) => {
      const post = await Post.findOne({ _id: postId }).populate({
        path: "messages.messageUser",
        model: "User"
      });
      return post;
    },
    searchPosts: async (_, { searchTerm }, { Post }) => {
      if (searchTerm) {
        const searchResults = await Post.find(
          // Perform text search for search value of 'searchTerm'
          { $text: { $search: searchTerm } },
          // Assign 'searchTerm' a text score to provide best match
          { score: { $meta: "textScore" } }
        )
          // Sort results according to that textScore (as well as by likes in descending order)
          .sort({
            score: { $meta: "textScore" },
            likes: "desc"
          })
          .limit(5);
        return searchResults;
      }
    },
    infiniteScrollPosts: async (_, { pageNum, pageSize }, { Post }) => {
      let posts;
      if (pageNum === 1) {
        posts = await Post.find({})
          .sort({ createdDate: "desc" })
          .populate({
            path: "createdBy",
            model: "User"
          })
          .limit(pageSize);
      } else {
        // If page number is greater than one, figure out how many documents to skip
        const skips = pageSize * (pageNum - 1);
        posts = await Post.find({})
          .sort({ createdDate: "desc" })
          .populate({
            path: "createdBy",
            model: "User"
          })
          .skip(skips)
          .limit(pageSize);
      }
      const totalDocs = await Post.countDocuments();
      const hasMore = totalDocs > pageSize * pageNum;
      return { posts, hasMore };
    }
  },
  Mutation: {
    addPost: async (
      _,
      { title, imageUrl, categories, description, creatorId },
      { Post }
    ) => {
      const newPost = await new Post({
        title,
        imageUrl,
        categories,
        description,
        createdBy: creatorId
      }).save();
      return newPost;
    },
    updateUserPost: async (
      _,
      { postId, userId, title, imageUrl, categories, description },
      { Post }
    ) => {
      const post = await Post.findOneAndUpdate(
        // Find post by postId and createdBy
        { _id: postId, createdBy: userId },
        { $set: { title, imageUrl, categories, description } },
        { new: true }
      );
      return post;
    },    
    addPostMessage: async (_, { messageBody, userId, postId }, { Post }) => {
      const newMessage = {
        messageBody,
        messageUser: userId
      };
      const post = await Post.findOneAndUpdate(
        // find post by id
        { _id: postId },
        // prepend (push) new message to beginning of messages array
        { $push: { messages: { $each: [newMessage], $position: 0 } } },
        // return fresh document after update
        { new: true }
      ).populate({
        path: "messages.messageUser",
        model: "User"
      });
      return post.messages[0];
    },
    likePost: async (_, { postId, username }, { Post, User }) => {
      // Find Post, add 1 to its 'like' value
      const post = await Post.findOneAndUpdate(
        { _id: postId },
        { $inc: { likes: 1 } },
        { new: true }
      );
      // Find User, add id of post to its favorites array (which will be populated as Posts)
      const user = await User.findOneAndUpdate(
        { username },
        { $addToSet: { favorites: postId } },
        { new: true }
      ).populate({
        path: "favorites",
        model: "Post"
      });
      // Return only likes from 'post' and favorites from 'user'
      return { likes: post.likes, favorites: user.favorites };
    },
    unlikePost: async (_, { postId, username }, { Post, User }) => {
      // Find Post, add -1 to its 'like' value
      const post = await Post.findOneAndUpdate(
        { _id: postId },
        { $inc: { likes: -1 } },
        { new: true }
      );
      // Find User, remove id of post from its favorites array (which will be populated as Posts)
      const user = await User.findOneAndUpdate(
        { username },
        { $pull: { favorites: postId } },
        { new: true }
      ).populate({
        path: "favorites",
        model: "Post"
      });
      // Return only likes from 'post' and favorites from 'user'
      return { likes: post.likes, favorites: user.favorites };
    },        
    signinUser: async (_, { username, password }, { User }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new Error("User not found");
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        throw new Error("Invalid password");
      }
      return { token: createToken(user, process.env.SECRET, "1hr") };
    },
    signupUser: async (_, { username, email, password }, { User }) => {
      const user = await User.findOne({ username });
      if (user) {
        throw new Error("User already exists");
      }
      const newUser = await new User({
        username,
        email,
        password
      }).save();
      return { token: createToken(newUser, process.env.SECRET, "1hr") };
    }
  }
};

```

- We are going to modify the `client\src\queries.js` to add the `UPDATE_USER_POST` Mutation.

> client\src\queries.js
```js
import { gql } from "apollo-boost";

/* Posts Queries */
export const GET_POSTS = gql`
  query {
    getPosts {
      _id
      title
      imageUrl
    }
  }
`;

export const GET_POST = gql`
  query($postId: ID!) {
    getPost(postId: $postId) {
      _id
      title
      imageUrl
      categories
      description
      likes
      createdDate
      messages {
        _id
        messageBody
        messageDate
        messageUser {
          _id
          username
          avatar
        }
      }
    }
  }
`;

export const SEARCH_POSTS = gql`
  query($searchTerm: String) {
    searchPosts(searchTerm: $searchTerm) {
      _id
      title
      description
      imageUrl
      likes
    }
  }
`;

/* User Queries */
export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      _id
      username
      email
      password
      avatar
      joinDate
      favorites {
        _id
        title
        imageUrl
      }
    }
  }
`;

export const GET_USER_POSTS = gql`
  query($userId: ID!) {
    getUserPosts(userId: $userId) {
      _id
      title
      imageUrl
      description
      categories
      createdDate
      likes
    }
  }
`;

export const INFINITE_SCROLL_POSTS = gql`
  query($pageNum: Int!, $pageSize: Int!) {
    infiniteScrollPosts(pageNum: $pageNum, pageSize: $pageSize) {
      hasMore
      posts {
        _id
        title
        imageUrl
        categories
        description
        likes
        createdDate
        messages {
          _id
        }
        createdBy {
          _id
          username
          avatar
        }
      }
    }
  }
`;

/* Posts Mutations */
export const ADD_POST = gql`
  mutation(
    $title: String!
    $imageUrl: String!
    $categories: [String]!
    $description: String!
    $creatorId: ID!
  ) {
    addPost(
      title: $title
      imageUrl: $imageUrl
      categories: $categories
      description: $description
      creatorId: $creatorId
    ) {
      _id
      title
      imageUrl
      categories
      description
    }
  }
`;

export const UPDATE_USER_POST = gql`
  mutation(
    $postId: ID!
    $userId: ID!
    $title: String!
    $imageUrl: String!
    $categories: [String]!
    $description: String!
  ) {
    updateUserPost(
      postId: $postId
      userId: $userId
      title: $title
      imageUrl: $imageUrl
      categories: $categories
      description: $description
    ) {
      _id
      title
      imageUrl
      description
      categories
      createdDate
      likes
      createdBy {
        _id
        avatar
      }
    }
  }
`;

export const ADD_POST_MESSAGE = gql`
  mutation($messageBody: String!, $userId: ID!, $postId: ID!) {
    addPostMessage(
      messageBody: $messageBody
      userId: $userId
      postId: $postId
    ) {
      _id
      messageBody
      messageDate
      messageUser {
        _id
        username
        avatar
      }
    }
  }
`;

export const LIKE_POST = gql`
  mutation($postId: ID!, $username: String!) {
    likePost(postId: $postId, username: $username) {
      likes
      favorites {
        _id
        title
        imageUrl
      }
    }
  }
`;

export const UNLIKE_POST = gql`
  mutation($postId: ID!, $username: String!) {
    unlikePost(postId: $postId, username: $username) {
      likes
      favorites {
        _id
        title
        imageUrl
      }
    }
  }
`;

/* User Mutations */
export const SIGNIN_USER = gql`
  mutation($username: String!, $password: String!) {
    signinUser(username: $username, password: $password) {
      token
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    signupUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`;

```

- We need to ensure that everything works properly.

```bash
[client] [nodemon] restarting due to changes...
[client]  WAIT  Compiling...6:40:35 AM
[client]
[server] [nodemon] restarting due to changes...
[server] [nodemon] restarting due to changes...
[client]  40% building 0/1 modules 1 active ...he-ultimate-guide\client\src\queries.js[nodemon] starting `node server.js`
 DONE  Compiled successfully in 1458ms6:40:37 AM
[client]
[client]
[client]   App running at:
[client]   - Local:   http://localhost:8080/
[client]   - Network: http://192.168.1.38:8080/
[client]
[server] Server listening on http://localhost:4000/
[server] DB connected
```

### 78. Executing updateUserPost Mutation with Vuex Action 13min

- We need to modify the `store.js` store document to create the `updateUserPost` action.

> client\src\store.js
```js
import Vue from "vue"
import Vuex from "vuex"
import router from "./router"

import { defaultClient as apolloClient } from "./main"

import {
  GET_CURRENT_USER,
  GET_POSTS,
  GET_USER_POSTS,
  SEARCH_POSTS,
  ADD_POST,
  UPDATE_USER_POST,
  SIGNIN_USER,
  SIGNUP_USER
} from "./queries";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    userPosts: [],
    searchResults: [],    
    user: null,    
    loading: false,
    error: null,
    authError: null
  },
  mutations: {
    setPosts: (state, payload) => {
      state.posts = payload
    },
    setSearchResults: (state, payload) => {
      if (payload !== null) {
        state.searchResults = payload;
      }
    },    
    setUser: (state, payload) => {
      state.user = payload
    },    
    setUserPosts: (state, payload) => {
      state.userPosts = payload;
    },    
    setLoading: (state, payload) => {
      state.loading = payload
    },
    setError: (state, payload) => {
      state.error = payload
    },
    setAuthError: (state, payload) => {
      state.authError = payload
    },
    clearUser: state => (state.user = null),
    clearError: state => (state.error = null),
    clearSearchResults: state => (state.searchResults = []),    
  },
  actions: {
    getCurrentUser: ({ commit }) => {
      commit("setLoading", true)
      apolloClient
        .query({
          query: GET_CURRENT_USER
        })
        .then(({ data }) => {
          commit("setLoading", false)
          // Add user data to state
          commit("setUser", data.getCurrentUser)
          console.log(data.getCurrentUser)
        })
        .catch(err => {
          commit("setLoading", false)
          console.error(err)
        })
    },    
    getPosts: ({ commit }) => {
      commit("setLoading", true)
      apolloClient
        .query({
          query: GET_POSTS
        })
        .then(({ data }) => {
          commit("setPosts", data.getPosts)
          commit("setLoading", false)
        })
        .catch(err => {
          commit("setLoading", false)
          console.error(err)
        })
    },
    getUserPosts: ({ commit }, payload) => {
      apolloClient
        .query({
          query: GET_USER_POSTS,
          variables: payload
        })
        .then(({ data }) => {
          commit("setUserPosts", data.getUserPosts);
          // console.log(data.getUserPosts);
        })
        .catch(err => {
          console.error(err);
        });
    },    
    searchPosts: ( { commit }, payload) => {
      apolloClient
        .query({
          query: SEARCH_POSTS,
          variables: payload
        })
        .then(({ data }) => {
          commit("setSearchResults", data.searchPosts);
        })
        .catch(err => console.error(err));
    },    
    signinUser: ({commit}, payload) => {
      commit("clearError")
      commit("setLoading", true)
      apolloClient
        .mutate({
          mutation: SIGNIN_USER,
          variables: payload
        })
        .then(({ data }) => {
          commit("setLoading", false)
          localStorage.setItem("token", data.signinUser.token)
          // to make sure created method is run in main.js (we run getCurrentUser), reload the page
          router.go()
        })
        .catch(err => {
          commit("setLoading", false)
          commit("setError", err)          
          console.error(err)
        })
    },
    addPost: (_ , payload) => {
      console.log(`payload: `,payload)
      apolloClient
        .mutate({
          mutation: ADD_POST,
          variables: payload,
          update: (cache, { data: { addPost } }) => {
            // First read the query you want to update
            const data = cache.readQuery({ query: GET_POSTS });
            // Create updated data
            data.getPosts.unshift(addPost);
            // Write updated data back to query
            console.log(data);
            cache.writeQuery({
              query: GET_POSTS,
              data
            });
          },
          // optimistic response ensures data is added immediately as we specified for the update function
          optimisticResponse: {
            __typename: 'Mutation',
            addPost: {
              __typename: 'Post',
              _id: -1,
              ...payload
            }
          }
        })
        .then(({ data }) => {
          console.log(data.addPost);
        })
        .catch(err => {
          console.error(err);
        });
    },    
    updateUserPost: ({ state, commit }, payload) => {
      apolloClient
        .mutate({
          mutation: UPDATE_USER_POST,
          variables: payload
        })
        .then(({ data }) => {
          const index = state.userPosts.findIndex(
            post => post._id === data.updateUserPost._id
          );
          const userPosts = [
            ...state.userPosts.slice(0, index),
            data.updateUserPost,
            ...state.userPosts.slice(index + 1)
          ];
          commit("setUserPosts", userPosts);
        })
        .catch(err => {
          console.error(err);
        });
    },    
    signupUser: ({ commit }, payload) => {
      commit("clearError");
      commit("setLoading", true);
      apolloClient
        .mutate({
          mutation: SIGNUP_USER,
          variables: payload
        })
        .then(({ data }) => {
          commit("setLoading", false);
          localStorage.setItem("token", data.signupUser.token);
          // to make sure created method is run in main.js (we run getCurrentUser), reload the page
          router.go();
        })
        .catch(err => {
          commit("setLoading", false);
          commit("setError", err);
          console.error(err);
        });
    },    
    signoutUser: async ({ commit }) => {
      // clear user in state
      commit("clearUser")
      // remove token in localStorage
      localStorage.setItem("token", "")
      // end session
      await apolloClient.resetStore()
      // redirect home - kick users out of private pages (i.e. profile)
      router.push("/")
    }
  },
  getters: {
    posts: state => state.posts,
    userPosts: state => state.userPosts,
    searchResults: state => state.searchResults,    
    user: state => state.user,
    userFavorites: state => state.user && state.user.favorites,
    loading: state => state.loading,
    error: state => state.error,
    authError: state => state.authError
  }
})
```

- We need to modify the `Auth\Profile.vue` page to handle the change of a User Post.

> client\src\components\Auth\Profile.vue
```html
<template>
  <v-container class="text-xs-center">

    <!-- User Details Card -->
    <v-flex
      sm6
      offset-sm3
    >
      <v-card
        class="white--text"
        color="secondary"
      >
        <v-layout>
          <v-flex xs5>
            <v-img
              height="125px"
              contain
              :src="user.avatar"
            ></v-img>
          </v-flex>
          <v-flex xs7>
            <v-card-title primary-title>
              <div>
                <div class="headline">{{user.username}}</div>
                <div>Joined {{user.joinDate}}</div>
                <div class="hidden-xs-only font-weight-thin">{{user.favorites.length}} Favorites</div>
                <div class="hidden-xs-only font-weight-thin">{{userPosts.length}} Posts Added</div>
              </div>
            </v-card-title>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>

    <!-- Posts Favorited by User -->
    <v-container v-if="!userFavorites.length">
      <v-layout
        row
        wrap
      >
        <v-flex xs12>
          <h2>You have no favorites currently. Go and add some!</h2>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container
      class="mt-3"
      v-else
    >
      <v-flex xs12>
        <h2 class="font-weight-light">Favorited
          <span class="font-weight-regular">({{userFavorites.length}})</span>
        </h2>
      </v-flex>
      <v-layout
        row
        wrap
      >
        <v-flex
          xs12
          sm6
          v-for="favorite in userFavorites"
          :key="favorite._id"
        >
          <v-card
            class="mt-3 ml-1 mr-2"
            hover
          >
            <v-img
              height="30vh"
              :src="favorite.imageUrl"
            ></v-img>
            <v-card-text>{{favorite.title}}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- Posts Created By user -->
    <v-container v-if="!userPosts.length">
      <v-layout
        row
        wrap
      >
        <v-flex xs12>
          <h2>You have no posts currently. Go and add some!</h2>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container
      class="mt-3"
      v-else
    >
      <v-flex xs12>
        <h2 class="font-weight-light">Your Posts
          <span class="font-weight-regular">({{userPosts.length}})</span>
        </h2>
      </v-flex>
      <v-layout
        row
        wrap
      >
        <v-flex
          xs12
          sm6
          v-for="post in userPosts"
          :key="post._id"
        >
          <v-card
            class="mt-3 ml-1 mr-2"
            hover
          >
            <v-btn
              color="info"
              floating
              fab
              small
              dark
              @click="loadPost(post)"
            >
              <v-icon>edit</v-icon>
            </v-btn>
            <v-btn
              color="error"
              floating
              fab
              small
              dark
            >
              <v-icon>delete</v-icon>
            </v-btn>

            <v-img
              height="30vh"
              :src="post.imageUrl"
            ></v-img>
            <v-card-text>{{post.title}}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- Edit Post Dialog -->
    <v-dialog
      xs12
      sm6
      offset-sm3
      persistent
      v-model="editPostDialog"
    >
      <v-card>
        <v-card-title class="headline grey lighten-2">Update Post</v-card-title>
        <v-container>
          <v-form
            v-model="isFormValid"
            lazy-validation
            ref="form"
            @submit.prevent="handleUpdateUserPost"
          >

            <!-- Title Input -->
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  :rules="titleRules"
                  v-model="title"
                  label="Post Title"
                  type="text"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>

            <!-- Image Url Input -->
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  :rules="imageRules"
                  v-model="imageUrl"
                  label="Image URL"
                  type="text"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>

            <!-- Image Preview -->
            <v-layout row>
              <v-flex xs12>
                <img
                  :src="imageUrl"
                  height="300px"
                >
              </v-flex>
            </v-layout>

            <!-- Categories Select -->
            <v-layout row>
              <v-flex xs12>
                <v-select
                  v-model="categories"
                  :rules="categoriesRules"
                  :items="['Art', 'Education', 'Food', 'Furniture', 'Travel', 'Photography', 'Technology']"
                  multiple
                  label="Categories"
                ></v-select>
              </v-flex>
            </v-layout>

            <!-- Description Text Area -->
            <v-layout row>
              <v-flex xs12>
                <v-textarea
                  :rules="descRules"
                  v-model="description"
                  label="Description"
                  type="text"
                  required
                ></v-textarea>
              </v-flex>
            </v-layout>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                :disabled="!isFormValid"
                type="submit"
                class="success--text"
                flat
              >Update</v-btn>
              <v-btn
                class="error--text"
                flat
                @click="editPostDialog = false"
              >Cancel</v-btn>
            </v-card-actions>

          </v-form>
        </v-container>
      </v-card>
    </v-dialog>

  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Profile",
  data() {
    return {
      editPostDialog: false,
      isFormValid: true,
      title: "",
      imageUrl: "",
      categories: [],
      description: "",
      titleRules: [
        title => !!title || "Title is required",
        title => title.length < 20 || "Title must have less than 20 characters"
      ],
      imageRules: [image => !!image || "Image is required"],
      categoriesRules: [
        categories =>
          categories.length >= 1 || "At least one category is required"
      ],
      descRules: [
        desc => !!desc || "Description is required",
        desc =>
          desc.length < 200 || "Description must have less than 200 characters"
      ]
    };
  },
  computed: {
    ...mapGetters(["user", "userFavorites", "userPosts"])
  },
  created() {
    this.handleGetUserPosts();
  },
  methods: {
    handleGetUserPosts() {
      this.$store.dispatch("getUserPosts", {
        userId: this.user._id
      });
    },
    handleUpdateUserPost() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("updateUserPost", {
          postId: this.postId,
          userId: this.user._id,
          title: this.title,
          imageUrl: this.imageUrl,
          categories: this.categories,
          description: this.description
        });
        this.editPostDialog = false;
      }
    },
    loadPost(
      { _id, title, imageUrl, categories, description },
      editPostDialog = true
    ) {
      this.editPostDialog = editPostDialog;
      this.postId = _id;
      this.title = title;
      this.imageUrl = imageUrl;
      this.categories = categories;
      this.description = description;
    }
  }
};
</script>
```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ExecutingUpdateUserPostMutationWithVuexAction.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ExecutingUpdateUserPostMutationWithVuexAction2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ExecutingUpdateUserPostMutationWithVuexAction3.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ExecutingUpdateUserPostMutationWithVuexAction4.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ExecutingUpdateUserPostMutationWithVuexAction5.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ExecutingUpdateUserPostMutationWithVuexAction6.png)

### 79. deleteUserRecipe Mutation - Backend Creation to Frontend Execution 7min


- We are going to modify the `typeDefs.gql` document to include the `deleteUserRecipe` Mutation.

> typeDefs.gql
```graphql
type User {
  _id: ID
  username: String! @unique
  email: String!
  password: String!
  avatar: String
  joinDate: String
  favorites: [Post]
}

type Post {
  _id: ID
  title: String!
  imageUrl: String!
  categories: [String]!
  description: String!
  createdDate: String
  likes: Int
  createdBy: User!
  messages: [Message]
}

type Message {
  _id: ID
  messageBody: String!
  messageDate: String
  messageUser: User!
}

type Token {
  token: String!
}

type PostsPage {
  posts: [Post]
  hasMore: Boolean
}

# Likes for Post / Favorites for User
type LikesFaves {
  likes: Int
  favorites: [Post]
}

type Query {
  getCurrentUser: User
  getPosts: [Post]
  getUserPosts(userId: ID!): [Post]
  getPost(postId: ID!): Post!
  searchPosts(searchTerm: String): [Post]
  infiniteScrollPosts(pageNum: Int!, pageSize: Int!): PostsPage
}

type Mutation {
  addPost(
    title: String!
    imageUrl: String!
    categories: [String]!
    description: String!
    creatorId: ID!
  ): Post!
  updateUserPost(
    postId: ID!
    userId: ID!
    title: String!
    imageUrl: String!
    categories: [String]!
    description: String!
  ): Post!
  deleteUserPost(postId: ID!): Post!
  addPostMessage(messageBody: String!, userId: ID!, postId: ID!): Message!
  likePost(postId: ID!, username: String!): LikesFaves!
  unlikePost(postId: ID!, username: String!): LikesFaves!
  signinUser(username: String!, password: String!): Token
  signupUser(username: String!, email: String!, password: String!): Token
}
```

- We are going to modify the `resolvers.js` document to include the `deleteUserRecipe` Mutation.

> resolvers.js
```js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createToken = (user, secret, expiresIn) => {
  const { username, email } = user;
  return jwt.sign({ username, email }, secret, { expiresIn });
};

module.exports = {
  Query: {
    getCurrentUser: async (_, _args, { User, currentUser }) => {
      if (!currentUser) {
        return null;
      }
      const user = await User.findOne({
        username: currentUser.username
      }).populate({
        path: "favorites",
        model: "Post"
      });
      return user;
    },
    getPosts: async (_, _args, { Post }) => {
      const posts = await Post.find({})
        .sort({ createdDate: "desc" })
        .populate({
          path: "createdBy",
          model: "User"
        });
      return posts;
    },
    getUserPosts: async (_, { userId }, { Post }) => {
      const posts = await Post.find({
        createdBy: userId
      });
      return posts;
    },
    getPost: async (_, { postId }, { Post }) => {
      const post = await Post.findOne({ _id: postId }).populate({
        path: "messages.messageUser",
        model: "User"
      });
      return post;
    },
    searchPosts: async (_, { searchTerm }, { Post }) => {
      if (searchTerm) {
        const searchResults = await Post.find(
          // Perform text search for search value of 'searchTerm'
          { $text: { $search: searchTerm } },
          // Assign 'searchTerm' a text score to provide best match
          { score: { $meta: "textScore" } }
        )
          // Sort results according to that textScore (as well as by likes in descending order)
          .sort({
            score: { $meta: "textScore" },
            likes: "desc"
          })
          .limit(5);
        return searchResults;
      }
    },
    infiniteScrollPosts: async (_, { pageNum, pageSize }, { Post }) => {
      let posts;
      if (pageNum === 1) {
        posts = await Post.find({})
          .sort({ createdDate: "desc" })
          .populate({
            path: "createdBy",
            model: "User"
          })
          .limit(pageSize);
      } else {
        // If page number is greater than one, figure out how many documents to skip
        const skips = pageSize * (pageNum - 1);
        posts = await Post.find({})
          .sort({ createdDate: "desc" })
          .populate({
            path: "createdBy",
            model: "User"
          })
          .skip(skips)
          .limit(pageSize);
      }
      const totalDocs = await Post.countDocuments();
      const hasMore = totalDocs > pageSize * pageNum;
      return { posts, hasMore };
    }
  },
  Mutation: {
    addPost: async (
      _,
      { title, imageUrl, categories, description, creatorId },
      { Post }
    ) => {
      const newPost = await new Post({
        title,
        imageUrl,
        categories,
        description,
        createdBy: creatorId
      }).save();
      return newPost;
    },
    updateUserPost: async (
      _,
      { postId, userId, title, imageUrl, categories, description },
      { Post }
    ) => {
      const post = await Post.findOneAndUpdate(
        // Find post by postId and createdBy
        { _id: postId, createdBy: userId },
        { $set: { title, imageUrl, categories, description } },
        { new: true }
      );
      return post;
    },
    deleteUserPost: async (_, { postId }, { Post }) => {
      const post = await Post.findOneAndRemove({ _id: postId });
      return post;
    },
    addPostMessage: async (_, { messageBody, userId, postId }, { Post }) => {
      const newMessage = {
        messageBody,
        messageUser: userId
      };
      const post = await Post.findOneAndUpdate(
        // find post by id
        { _id: postId },
        // prepend (push) new message to beginning of messages array
        { $push: { messages: { $each: [newMessage], $position: 0 } } },
        // return fresh document after update
        { new: true }
      ).populate({
        path: "messages.messageUser",
        model: "User"
      });
      return post.messages[0];
    },
    likePost: async (_, { postId, username }, { Post, User }) => {
      // Find Post, add 1 to its 'like' value
      const post = await Post.findOneAndUpdate(
        { _id: postId },
        { $inc: { likes: 1 } },
        { new: true }
      );
      // Find User, add id of post to its favorites array (which will be populated as Posts)
      const user = await User.findOneAndUpdate(
        { username },
        { $addToSet: { favorites: postId } },
        { new: true }
      ).populate({
        path: "favorites",
        model: "Post"
      });
      // Return only likes from 'post' and favorites from 'user'
      return { likes: post.likes, favorites: user.favorites };
    },
    unlikePost: async (_, { postId, username }, { Post, User }) => {
      // Find Post, add -1 to its 'like' value
      const post = await Post.findOneAndUpdate(
        { _id: postId },
        { $inc: { likes: -1 } },
        { new: true }
      );
      // Find User, remove id of post from its favorites array (which will be populated as Posts)
      const user = await User.findOneAndUpdate(
        { username },
        { $pull: { favorites: postId } },
        { new: true }
      ).populate({
        path: "favorites",
        model: "Post"
      });
      // Return only likes from 'post' and favorites from 'user'
      return { likes: post.likes, favorites: user.favorites };
    },
    signinUser: async (_, { username, password }, { User }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new Error("User not found");
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        throw new Error("Invalid password");
      }
      return { token: createToken(user, process.env.SECRET, "1hr") };
    },
    signupUser: async (_, { username, email, password }, { User }) => {
      const user = await User.findOne({ username });
      if (user) {
        throw new Error("User already exists");
      }
      const newUser = await new User({
        username,
        email,
        password
      }).save();
      return { token: createToken(newUser, process.env.SECRET, "1hr") };
    }
  }
};

```

- We are going to modify the `client\src\queries.js` to add the `DELETE_USER_POST` Mutation.

> client\src\queries.js
```js
import { gql } from "apollo-boost";

/* Posts Queries */
export const GET_POSTS = gql`
  query {
    getPosts {
      _id
      title
      imageUrl
    }
  }
`;

export const GET_POST = gql`
  query($postId: ID!) {
    getPost(postId: $postId) {
      _id
      title
      imageUrl
      categories
      description
      likes
      createdDate
      messages {
        _id
        messageBody
        messageDate
        messageUser {
          _id
          username
          avatar
        }
      }
    }
  }
`;

export const SEARCH_POSTS = gql`
  query($searchTerm: String) {
    searchPosts(searchTerm: $searchTerm) {
      _id
      title
      description
      imageUrl
      likes
    }
  }
`;

/* User Queries */
export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      _id
      username
      email
      password
      avatar
      joinDate
      favorites {
        _id
        title
        imageUrl
      }
    }
  }
`;

export const GET_USER_POSTS = gql`
  query($userId: ID!) {
    getUserPosts(userId: $userId) {
      _id
      title
      imageUrl
      description
      categories
      createdDate
      likes
    }
  }
`;

export const INFINITE_SCROLL_POSTS = gql`
  query($pageNum: Int!, $pageSize: Int!) {
    infiniteScrollPosts(pageNum: $pageNum, pageSize: $pageSize) {
      hasMore
      posts {
        _id
        title
        imageUrl
        categories
        description
        likes
        createdDate
        messages {
          _id
        }
        createdBy {
          _id
          username
          avatar
        }
      }
    }
  }
`;

/* Posts Mutations */
export const ADD_POST = gql`
  mutation(
    $title: String!
    $imageUrl: String!
    $categories: [String]!
    $description: String!
    $creatorId: ID!
  ) {
    addPost(
      title: $title
      imageUrl: $imageUrl
      categories: $categories
      description: $description
      creatorId: $creatorId
    ) {
      _id
      title
      imageUrl
      categories
      description
    }
  }
`;

export const UPDATE_USER_POST = gql`
  mutation(
    $postId: ID!
    $userId: ID!
    $title: String!
    $imageUrl: String!
    $categories: [String]!
    $description: String!
  ) {
    updateUserPost(
      postId: $postId
      userId: $userId
      title: $title
      imageUrl: $imageUrl
      categories: $categories
      description: $description
    ) {
      _id
      title
      imageUrl
      description
      categories
      createdDate
      likes
      createdBy {
        _id
        avatar
      }
    }
  }
`;

export const DELETE_USER_POST = gql`
  mutation($postId: ID!) {
    deleteUserPost(postId: $postId) {
      _id
    }
  }
`;

export const ADD_POST_MESSAGE = gql`
  mutation($messageBody: String!, $userId: ID!, $postId: ID!) {
    addPostMessage(
      messageBody: $messageBody
      userId: $userId
      postId: $postId
    ) {
      _id
      messageBody
      messageDate
      messageUser {
        _id
        username
        avatar
      }
    }
  }
`;

export const LIKE_POST = gql`
  mutation($postId: ID!, $username: String!) {
    likePost(postId: $postId, username: $username) {
      likes
      favorites {
        _id
        title
        imageUrl
      }
    }
  }
`;

export const UNLIKE_POST = gql`
  mutation($postId: ID!, $username: String!) {
    unlikePost(postId: $postId, username: $username) {
      likes
      favorites {
        _id
        title
        imageUrl
      }
    }
  }
`;

/* User Mutations */
export const SIGNIN_USER = gql`
  mutation($username: String!, $password: String!) {
    signinUser(username: $username, password: $password) {
      token
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    signupUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`;

```

- We need to modify the `store.js` store document to create the `deleteUserPost` action.

> client\src\store.js
```js
import Vue from "vue"
import Vuex from "vuex"
import router from "./router"

import { defaultClient as apolloClient } from "./main"

import {
  GET_CURRENT_USER,
  GET_POSTS,
  GET_USER_POSTS,
  SEARCH_POSTS,
  ADD_POST,
  UPDATE_USER_POST,
  DELETE_USER_POST,
  SIGNIN_USER,
  SIGNUP_USER
} from "./queries";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    userPosts: [],
    searchResults: [],    
    user: null,    
    loading: false,
    error: null,
    authError: null
  },
  mutations: {
    setPosts: (state, payload) => {
      state.posts = payload
    },
    setSearchResults: (state, payload) => {
      if (payload !== null) {
        state.searchResults = payload;
      }
    },    
    setUser: (state, payload) => {
      state.user = payload
    },    
    setUserPosts: (state, payload) => {
      state.userPosts = payload;
    },    
    setLoading: (state, payload) => {
      state.loading = payload
    },
    setError: (state, payload) => {
      state.error = payload
    },
    setAuthError: (state, payload) => {
      state.authError = payload
    },
    clearUser: state => (state.user = null),
    clearError: state => (state.error = null),
    clearSearchResults: state => (state.searchResults = []),    
  },
  actions: {
    getCurrentUser: ({ commit }) => {
      commit("setLoading", true)
      apolloClient
        .query({
          query: GET_CURRENT_USER
        })
        .then(({ data }) => {
          commit("setLoading", false)
          // Add user data to state
          commit("setUser", data.getCurrentUser)
          console.log(data.getCurrentUser)
        })
        .catch(err => {
          commit("setLoading", false)
          console.error(err)
        })
    },    
    getPosts: ({ commit }) => {
      commit("setLoading", true)
      apolloClient
        .query({
          query: GET_POSTS
        })
        .then(({ data }) => {
          commit("setPosts", data.getPosts)
          commit("setLoading", false)
        })
        .catch(err => {
          commit("setLoading", false)
          console.error(err)
        })
    },
    getUserPosts: ({ commit }, payload) => {
      apolloClient
        .query({
          query: GET_USER_POSTS,
          variables: payload
        })
        .then(({ data }) => {
          commit("setUserPosts", data.getUserPosts);
          // console.log(data.getUserPosts);
        })
        .catch(err => {
          console.error(err);
        });
    },    
    searchPosts: ( { commit }, payload) => {
      apolloClient
        .query({
          query: SEARCH_POSTS,
          variables: payload
        })
        .then(({ data }) => {
          commit("setSearchResults", data.searchPosts);
        })
        .catch(err => console.error(err));
    },    
    signinUser: ({commit}, payload) => {
      commit("clearError")
      commit("setLoading", true)
      apolloClient
        .mutate({
          mutation: SIGNIN_USER,
          variables: payload
        })
        .then(({ data }) => {
          commit("setLoading", false)
          localStorage.setItem("token", data.signinUser.token)
          // to make sure created method is run in main.js (we run getCurrentUser), reload the page
          router.go()
        })
        .catch(err => {
          commit("setLoading", false)
          commit("setError", err)          
          console.error(err)
        })
    },
    addPost: (_ , payload) => {
      console.log(`payload: `,payload)
      apolloClient
        .mutate({
          mutation: ADD_POST,
          variables: payload,
          update: (cache, { data: { addPost } }) => {
            // First read the query you want to update
            const data = cache.readQuery({ query: GET_POSTS });
            // Create updated data
            data.getPosts.unshift(addPost);
            // Write updated data back to query
            console.log(data);
            cache.writeQuery({
              query: GET_POSTS,
              data
            });
          },
          // optimistic response ensures data is added immediately as we specified for the update function
          optimisticResponse: {
            __typename: 'Mutation',
            addPost: {
              __typename: 'Post',
              _id: -1,
              ...payload
            }
          }
        })
        .then(({ data }) => {
          console.log(data.addPost);
        })
        .catch(err => {
          console.error(err);
        });
    },    
    updateUserPost: ({ state, commit }, payload) => {
      apolloClient
        .mutate({
          mutation: UPDATE_USER_POST,
          variables: payload
        })
        .then(({ data }) => {
          const index = state.userPosts.findIndex(
            post => post._id === data.updateUserPost._id
          );
          const userPosts = [
            ...state.userPosts.slice(0, index),
            data.updateUserPost,
            ...state.userPosts.slice(index + 1)
          ];
          commit("setUserPosts", userPosts);
        })
        .catch(err => {
          console.error(err);
        });
    },
    deleteUserPost: ({ state, commit }, payload) => {
      apolloClient
        .mutate({
          mutation: DELETE_USER_POST,
          variables: payload
        })
        .then(({ data }) => {
          const index = state.userPosts.findIndex(
            post => post._id === data.deleteUserPost._id
          );
          const userPosts = [
            ...state.userPosts.slice(0, index),
            ...state.userPosts.slice(index + 1)
          ];
          commit("setUserPosts", userPosts);
        })
        .catch(err => {
          console.error(err);
        });
    },    
    signupUser: ({ commit }, payload) => {
      commit("clearError");
      commit("setLoading", true);
      apolloClient
        .mutate({
          mutation: SIGNUP_USER,
          variables: payload
        })
        .then(({ data }) => {
          commit("setLoading", false);
          localStorage.setItem("token", data.signupUser.token);
          // to make sure created method is run in main.js (we run getCurrentUser), reload the page
          router.go();
        })
        .catch(err => {
          commit("setLoading", false);
          commit("setError", err);
          console.error(err);
        });
    },    
    signoutUser: async ({ commit }) => {
      // clear user in state
      commit("clearUser")
      // remove token in localStorage
      localStorage.setItem("token", "")
      // end session
      await apolloClient.resetStore()
      // redirect home - kick users out of private pages (i.e. profile)
      router.push("/")
    }
  },
  getters: {
    posts: state => state.posts,
    userPosts: state => state.userPosts,
    searchResults: state => state.searchResults,    
    user: state => state.user,
    userFavorites: state => state.user && state.user.favorites,
    loading: state => state.loading,
    error: state => state.error,
    authError: state => state.authError
  }
})

```

- We are going to modify the `Auth\Profile.vue` page document to delete a User Post.

> client\src\components\Auth\Profile.vue
```html
<template>
  <v-container class="text-xs-center">

    <!-- User Details Card -->
    <v-flex
      sm6
      offset-sm3
    >
      <v-card
        class="white--text"
        color="secondary"
      >
        <v-layout>
          <v-flex xs5>
            <v-img
              height="125px"
              contain
              :src="user.avatar"
            ></v-img>
          </v-flex>
          <v-flex xs7>
            <v-card-title primary-title>
              <div>
                <div class="headline">{{user.username}}</div>
                <div>Joined {{user.joinDate}}</div>
                <div class="hidden-xs-only font-weight-thin">{{user.favorites.length}} Favorites</div>
                <div class="hidden-xs-only font-weight-thin">{{userPosts.length}} Posts Added</div>
              </div>
            </v-card-title>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>

    <!-- Posts Favorited by User -->
    <v-container v-if="!userFavorites.length">
      <v-layout
        row
        wrap
      >
        <v-flex xs12>
          <h2>You have no favorites currently. Go and add some!</h2>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container
      class="mt-3"
      v-else
    >
      <v-flex xs12>
        <h2 class="font-weight-light">Favorited
          <span class="font-weight-regular">({{userFavorites.length}})</span>
        </h2>
      </v-flex>
      <v-layout
        row
        wrap
      >
        <v-flex
          xs12
          sm6
          v-for="favorite in userFavorites"
          :key="favorite._id"
        >
          <v-card
            class="mt-3 ml-1 mr-2"
            hover
          >
            <v-img
              height="30vh"
              :src="favorite.imageUrl"
            ></v-img>
            <v-card-text>{{favorite.title}}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- Posts Created By user -->
    <v-container v-if="!userPosts.length">
      <v-layout
        row
        wrap
      >
        <v-flex xs12>
          <h2>You have no posts currently. Go and add some!</h2>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container
      class="mt-3"
      v-else
    >
      <v-flex xs12>
        <h2 class="font-weight-light">Your Posts
          <span class="font-weight-regular">({{userPosts.length}})</span>
        </h2>
      </v-flex>
      <v-layout
        row
        wrap
      >
        <v-flex
          xs12
          sm6
          v-for="post in userPosts"
          :key="post._id"
        >
          <v-card
            class="mt-3 ml-1 mr-2"
            hover
          >
            <v-btn
              color="info"
              floating
              fab
              small
              dark
              @click="loadPost(post)"
            >
              <v-icon>edit</v-icon>
            </v-btn>
            <v-btn
              color="error"
              floating
              fab
              small
              dark
              @click="handleDeleteUserPost(post)"
            >
              <v-icon>delete</v-icon>
            </v-btn>

            <v-img
              height="30vh"
              :src="post.imageUrl"
            ></v-img>
            <v-card-text>{{post.title}}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- Edit Post Dialog -->
    <v-dialog
      xs12
      sm6
      offset-sm3
      persistent
      v-model="editPostDialog"
    >
      <v-card>
        <v-card-title class="headline grey lighten-2">Update Post</v-card-title>
        <v-container>
          <v-form
            v-model="isFormValid"
            lazy-validation
            ref="form"
            @submit.prevent="handleUpdateUserPost"
          >

            <!-- Title Input -->
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  :rules="titleRules"
                  v-model="title"
                  label="Post Title"
                  type="text"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>

            <!-- Image Url Input -->
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  :rules="imageRules"
                  v-model="imageUrl"
                  label="Image URL"
                  type="text"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>

            <!-- Image Preview -->
            <v-layout row>
              <v-flex xs12>
                <img
                  :src="imageUrl"
                  height="300px"
                >
              </v-flex>
            </v-layout>

            <!-- Categories Select -->
            <v-layout row>
              <v-flex xs12>
                <v-select
                  v-model="categories"
                  :rules="categoriesRules"
                  :items="['Art', 'Education', 'Food', 'Furniture', 'Travel', 'Photography', 'Technology']"
                  multiple
                  label="Categories"
                ></v-select>
              </v-flex>
            </v-layout>

            <!-- Description Text Area -->
            <v-layout row>
              <v-flex xs12>
                <v-textarea
                  :rules="descRules"
                  v-model="description"
                  label="Description"
                  type="text"
                  required
                ></v-textarea>
              </v-flex>
            </v-layout>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                :disabled="!isFormValid"
                type="submit"
                class="success--text"
                flat
              >Update</v-btn>
              <v-btn
                class="error--text"
                flat
                @click="editPostDialog = false"
              >Cancel</v-btn>
            </v-card-actions>

          </v-form>
        </v-container>
      </v-card>
    </v-dialog>

  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Profile",
  data() {
    return {
      editPostDialog: false,
      isFormValid: true,
      title: "",
      imageUrl: "",
      categories: [],
      description: "",
      titleRules: [
        title => !!title || "Title is required",
        title => title.length < 20 || "Title must have less than 20 characters"
      ],
      imageRules: [image => !!image || "Image is required"],
      categoriesRules: [
        categories =>
          categories.length >= 1 || "At least one category is required"
      ],
      descRules: [
        desc => !!desc || "Description is required",
        desc =>
          desc.length < 200 || "Description must have less than 200 characters"
      ]
    };
  },
  computed: {
    ...mapGetters(["user", "userFavorites", "userPosts"])
  },
  created() {
    this.handleGetUserPosts();
  },
  methods: {
    handleGetUserPosts() {
      this.$store.dispatch("getUserPosts", {
        userId: this.user._id
      });
    },
    handleUpdateUserPost() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("updateUserPost", {
          postId: this.postId,
          userId: this.user._id,
          title: this.title,
          imageUrl: this.imageUrl,
          categories: this.categories,
          description: this.description
        });
        this.editPostDialog = false;
      }
    },
    handleDeleteUserPost(post) {
      this.loadPost(post, false);
      const deletePost = window.confirm(
        "Are you sure you want to delete this post?"
      );
      if (deletePost) {
        this.$store.dispatch("deleteUserPost", {
          postId: this.postId
        });
      }
    },
    loadPost(
      { _id, title, imageUrl, categories, description },
      editPostDialog = true
    ) {
      this.editPostDialog = editPostDialog;
      this.postId = _id;
      this.title = title;
      this.imageUrl = imageUrl;
      this.categories = categories;
      this.description = description;
    }
  }
};
</script>

```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/DeleteUserRecipeMutationBackendCreationToFrontendExecution.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/DeleteUserRecipeMutationBackendCreationToFrontendExecution2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/DeleteUserRecipeMutationBackendCreationToFrontendExecution3.png)

- Modify the `server.js` document to amend the "DeprecationWarning: Mongoose: `findOneAndUpdate()` and `findOneAndDelete()` without the `useFindAndModify` option set to false are deprecated." message 

> server.js
```js
const { ApolloServer, AuthenticationError } = require("apollo-server");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");

// Import Environment variables from .env
require("dotenv").config();

// Import typedefs and resolvers
const filePath = path.join(__dirname, "typeDefs.gql");
const typeDefs = fs.readFileSync(filePath, "utf-8");
const resolvers = require("./resolvers");

const User = require("./models/User");
const Post = require("./models/Post");

// Connect to MongoDb Atlas
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log("DB connected"))
  .catch(error => console.error(error));

// Verify JWT Token passed from client
const getUser = async token => {
  if (token) {
    try {
      return await jwt.verify(token, process.env.SECRET);
    } catch (err) {
      throw new AuthenticationError(
        "Your session has ended. Please sign in again."
      );
    }
  }
};

// Create Apollo/GraphQL Server using typeDefs, resolvers, and context object
const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: error => ({
    name: error.name,
    message: error.message.replace("Context creation failed:", "")
  }),  
  context: async ({ req }) => {
    const token = req.headers["authorization"];
    return { User, Post, currentUser: await getUser(token) };
  }
});

server.listen().then(({ url }) => {
  console.log(`Server listening on ${url}`);
});

```

## Section 15: Preparing for Deployment 0 / 3|17min

### 80. RefetchQueries for Fresh Data upon Executing Mutations 4min

- We need to modify the `store.js` store document to add RefetchQueries for Fresh Data upon Executing Mutations

> client\src\store.js
```js
import Vue from "vue"
import Vuex from "vuex"
import router from "./router"

import { defaultClient as apolloClient } from "./main"

import {
  GET_CURRENT_USER,
  GET_POSTS,
  GET_USER_POSTS,
  INFINITE_SCROLL_POSTS,
  SEARCH_POSTS,
  ADD_POST,
  UPDATE_USER_POST,
  DELETE_USER_POST,
  SIGNIN_USER,
  SIGNUP_USER
} from "./queries";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    userPosts: [],
    searchResults: [],    
    user: null,    
    loading: false,
    error: null,
    authError: null
  },
  mutations: {
    setPosts: (state, payload) => {
      state.posts = payload
    },
    setSearchResults: (state, payload) => {
      if (payload !== null) {
        state.searchResults = payload;
      }
    },    
    setUser: (state, payload) => {
      state.user = payload
    },    
    setUserPosts: (state, payload) => {
      state.userPosts = payload;
    },    
    setLoading: (state, payload) => {
      state.loading = payload
    },
    setError: (state, payload) => {
      state.error = payload
    },
    setAuthError: (state, payload) => {
      state.authError = payload
    },
    clearUser: state => (state.user = null),
    clearError: state => (state.error = null),
    clearSearchResults: state => (state.searchResults = []),    
  },
  actions: {
    getCurrentUser: ({ commit }) => {
      commit("setLoading", true)
      apolloClient
        .query({
          query: GET_CURRENT_USER
        })
        .then(({ data }) => {
          commit("setLoading", false)
          // Add user data to state
          commit("setUser", data.getCurrentUser)
          console.log(data.getCurrentUser)
        })
        .catch(err => {
          commit("setLoading", false)
          console.error(err)
        })
    },    
    getPosts: ({ commit }) => {
      commit("setLoading", true)
      apolloClient
        .query({
          query: GET_POSTS
        })
        .then(({ data }) => {
          commit("setPosts", data.getPosts)
          commit("setLoading", false)
        })
        .catch(err => {
          commit("setLoading", false)
          console.error(err)
        })
    },
    getUserPosts: ({ commit }, payload) => {
      apolloClient
        .query({
          query: GET_USER_POSTS,
          variables: payload
        })
        .then(({ data }) => {
          commit("setUserPosts", data.getUserPosts);
          // console.log(data.getUserPosts);
        })
        .catch(err => {
          console.error(err);
        });
    },    
    searchPosts: ( { commit }, payload) => {
      apolloClient
        .query({
          query: SEARCH_POSTS,
          variables: payload
        })
        .then(({ data }) => {
          commit("setSearchResults", data.searchPosts);
        })
        .catch(err => console.error(err));
    },    
    signinUser: ({commit}, payload) => {
      commit("clearError")
      commit("setLoading", true)
      apolloClient
        .mutate({
          mutation: SIGNIN_USER,
          variables: payload
        })
        .then(({ data }) => {
          commit("setLoading", false)
          localStorage.setItem("token", data.signinUser.token)
          // to make sure created method is run in main.js (we run getCurrentUser), reload the page
          router.go()
        })
        .catch(err => {
          commit("setLoading", false)
          commit("setError", err)          
          console.error(err)
        })
    },
    addPost: (_ , payload) => {
      console.log(`payload: `,payload)
      apolloClient
        .mutate({
          mutation: ADD_POST,
          variables: payload,
          update: (cache, { data: { addPost } }) => {
            // First read the query you want to update
            const data = cache.readQuery({ query: GET_POSTS });
            if (data.getPosts) {
              // Create updated data
              data.getPosts.unshift(addPost);
              // Write updated data back to query
              console.log(data);
              cache.writeQuery({
                query: GET_POSTS,
                data
              });
            }
          },
          // optimistic response ensures data is added immediately as we specified for the update function
          optimisticResponse: {
            __typename: 'Mutation',
            addPost: {
              __typename: 'Post',
              _id: -1,
              ...payload
            }
          },
          // Rerun specified queries after performing the mutation in order to get fresh data
          refetchQueries: [
            {
              query: INFINITE_SCROLL_POSTS,
              variables: {
                pageNum: 1,
                pageSize: 2
              }
            }
          ]          
        })
        .then(({ data }) => {
          console.log(data.addPost);
        })
        .catch(err => {
          console.error(err);
        });
    },    
    updateUserPost: ({ state, commit }, payload) => {
      apolloClient
        .mutate({
          mutation: UPDATE_USER_POST,
          variables: payload
        })
        .then(({ data }) => {
          const index = state.userPosts.findIndex(
            post => post._id === data.updateUserPost._id
          );
          const userPosts = [
            ...state.userPosts.slice(0, index),
            data.updateUserPost,
            ...state.userPosts.slice(index + 1)
          ];
          commit("setUserPosts", userPosts);
        })
        .catch(err => {
          console.error(err);
        });
    },
    deleteUserPost: ({ state, commit }, payload) => {
      apolloClient
        .mutate({
          mutation: DELETE_USER_POST,
          variables: payload
        })
        .then(({ data }) => {
          const index = state.userPosts.findIndex(
            post => post._id === data.deleteUserPost._id
          );
          const userPosts = [
            ...state.userPosts.slice(0, index),
            ...state.userPosts.slice(index + 1)
          ];
          commit("setUserPosts", userPosts);
        })
        .catch(err => {
          console.error(err);
        });
    },    
    signupUser: ({ commit }, payload) => {
      commit("clearError");
      commit("setLoading", true);
      apolloClient
        .mutate({
          mutation: SIGNUP_USER,
          variables: payload
        })
        .then(({ data }) => {
          commit("setLoading", false);
          localStorage.setItem("token", data.signupUser.token);
          // to make sure created method is run in main.js (we run getCurrentUser), reload the page
          router.go();
        })
        .catch(err => {
          commit("setLoading", false);
          commit("setError", err);
          console.error(err);
        });
    },    
    signoutUser: async ({ commit }) => {
      // clear user in state
      commit("clearUser")
      // remove token in localStorage
      localStorage.setItem("token", "")
      // end session
      await apolloClient.resetStore()
      // redirect home - kick users out of private pages (i.e. profile)
      router.push("/")
    }
  },
  getters: {
    posts: state => state.posts,
    userPosts: state => state.userPosts,
    searchResults: state => state.searchResults,    
    user: state => state.user,
    userFavorites: state => state.user && state.user.favorites,
    loading: state => state.loading,
    error: state => state.error,
    authError: state => state.authError
  }
})

```

- We need to test if it works.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/RefetchQueriesForFreshDataUponExecutingMutations.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/RefetchQueriesForFreshDataUponExecutingMutations2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/RefetchQueriesForFreshDataUponExecutingMutations3.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/RefetchQueriesForFreshDataUponExecutingMutations4.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/RefetchQueriesForFreshDataUponExecutingMutations5.png)

### 81. Formatting Dates with moment 6min

- We need to install the [moment](https://momentjs.com/docs/) library that will be use to forrmat dates
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide/client (master)
$ npm i moment
npm WARN apollo-boost@0.4.3 requires a peer of graphql@^0.11.0 || ^0.12.0 || ^0.13.0 || ^14.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN apollo-cache-inmemory@1.6.2 requires a peer of graphql@0.11.7 || ^0.12.0 || ^0.13.0 || ^14.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN apollo-client@2.6.3 requires a peer of graphql@^0.11.0 || ^0.12.0 || ^0.13.0 || ^14.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN apollo-link@1.2.12 requires a peer of graphql@^0.11.3 || ^0.12.3 || ^0.13.0 || ^14.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN apollo-link-http@1.5.15 requires a peer of graphql@^0.11.0 || ^0.12.0 || ^0.13.0 || ^14.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN apollo-link-http-common@0.2.14 requires a peer of graphql@^0.11.0 || ^0.12.0 || ^0.13.0 || ^14.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN apollo-utilities@1.3.2 requires a peer of graphql@^0.11.0 || ^0.12.0 || ^0.13.0 || ^14.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN graphql-tag@2.10.1 requires a peer of graphql@^0.9.0 || ^0.10.0 || ^0.11.0 || ^0.12.0 || ^0.13.0 || ^14.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ moment@2.24.0
added 1 package from 6 contributors and audited 18451 packages in 24.14s
found 0 vulnerabilities
```

- We need to modify the `Auth\Profile.vue` Porofile page document to use `moment` to forrmat dates

> client\src\components\Auth\Profile.vue
```html
<template>
  <v-container class="text-xs-center">

    <!-- User Details Card -->
    <v-flex
      sm6
      offset-sm3
    >
      <v-card
        class="white--text"
        color="secondary"
      >
        <v-layout>
          <v-flex xs5>
            <v-img
              height="125px"
              contain
              :src="user.avatar"
            ></v-img>
          </v-flex>
          <v-flex xs7>
            <v-card-title primary-title>
              <div>
                <div class="headline">{{user.username}}</div>
                <div>Joined {{formatJoinDate(user.joinDate)}}</div>
                <div class="hidden-xs-only font-weight-thin">{{user.favorites.length}} Favorites</div>
                <div class="hidden-xs-only font-weight-thin">{{userPosts.length}} Posts Added</div>
              </div>
            </v-card-title>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>

    <!-- Posts Favorited by User -->
    <v-container v-if="!userFavorites.length">
      <v-layout
        row
        wrap
      >
        <v-flex xs12>
          <h2>You have no favorites currently. Go and add some!</h2>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container
      class="mt-3"
      v-else
    >
      <v-flex xs12>
        <h2 class="font-weight-light">Favorited
          <span class="font-weight-regular">({{userFavorites.length}})</span>
        </h2>
      </v-flex>
      <v-layout
        row
        wrap
      >
        <v-flex
          xs12
          sm6
          v-for="favorite in userFavorites"
          :key="favorite._id"
        >
          <v-card
            class="mt-3 ml-1 mr-2"
            hover
          >
            <v-img
              height="30vh"
              :src="favorite.imageUrl"
            ></v-img>
            <v-card-text>{{favorite.title}}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- Posts Created By user -->
    <v-container v-if="!userPosts.length">
      <v-layout
        row
        wrap
      >
        <v-flex xs12>
          <h2>You have no posts currently. Go and add some!</h2>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container
      class="mt-3"
      v-else
    >
      <v-flex xs12>
        <h2 class="font-weight-light">Your Posts
          <span class="font-weight-regular">({{userPosts.length}})</span>
        </h2>
      </v-flex>
      <v-layout
        row
        wrap
      >
        <v-flex
          xs12
          sm6
          v-for="post in userPosts"
          :key="post._id"
        >
          <v-card
            class="mt-3 ml-1 mr-2"
            hover
          >
            <v-btn
              color="info"
              floating
              fab
              small
              dark
              @click="loadPost(post)"
            >
              <v-icon>edit</v-icon>
            </v-btn>
            <v-btn
              color="error"
              floating
              fab
              small
              dark
              @click="handleDeleteUserPost(post)"
            >
              <v-icon>delete</v-icon>
            </v-btn>

            <v-img
              height="30vh"
              :src="post.imageUrl"
            ></v-img>
            <v-card-text>{{post.title}}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- Edit Post Dialog -->
    <v-dialog
      xs12
      sm6
      offset-sm3
      persistent
      v-model="editPostDialog"
    >
      <v-card>
        <v-card-title class="headline grey lighten-2">Update Post</v-card-title>
        <v-container>
          <v-form
            v-model="isFormValid"
            lazy-validation
            ref="form"
            @submit.prevent="handleUpdateUserPost"
          >

            <!-- Title Input -->
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  :rules="titleRules"
                  v-model="title"
                  label="Post Title"
                  type="text"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>

            <!-- Image Url Input -->
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  :rules="imageRules"
                  v-model="imageUrl"
                  label="Image URL"
                  type="text"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>

            <!-- Image Preview -->
            <v-layout row>
              <v-flex xs12>
                <img
                  :src="imageUrl"
                  height="300px"
                >
              </v-flex>
            </v-layout>

            <!-- Categories Select -->
            <v-layout row>
              <v-flex xs12>
                <v-select
                  v-model="categories"
                  :rules="categoriesRules"
                  :items="['Art', 'Education', 'Food', 'Furniture', 'Travel', 'Photography', 'Technology']"
                  multiple
                  label="Categories"
                ></v-select>
              </v-flex>
            </v-layout>

            <!-- Description Text Area -->
            <v-layout row>
              <v-flex xs12>
                <v-textarea
                  :rules="descRules"
                  v-model="description"
                  label="Description"
                  type="text"
                  required
                ></v-textarea>
              </v-flex>
            </v-layout>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                :disabled="!isFormValid"
                type="submit"
                class="success--text"
                flat
              >Update</v-btn>
              <v-btn
                class="error--text"
                flat
                @click="editPostDialog = false"
              >Cancel</v-btn>
            </v-card-actions>

          </v-form>
        </v-container>
      </v-card>
    </v-dialog>

  </v-container>
</template>

<script>
import moment from "moment";
import { mapGetters } from "vuex";

export default {
  name: "Profile",
  data() {
    return {
      editPostDialog: false,
      isFormValid: true,
      title: "",
      imageUrl: "",
      categories: [],
      description: "",
      titleRules: [
        title => !!title || "Title is required",
        title => title.length < 20 || "Title must have less than 20 characters"
      ],
      imageRules: [image => !!image || "Image is required"],
      categoriesRules: [
        categories =>
          categories.length >= 1 || "At least one category is required"
      ],
      descRules: [
        desc => !!desc || "Description is required",
        desc =>
          desc.length < 200 || "Description must have less than 200 characters"
      ]
    };
  },
  computed: {
    ...mapGetters(["user", "userFavorites", "userPosts"])
  },
  created() {
    this.handleGetUserPosts();
  },
  methods: {
    formatJoinDate(date) {
      return moment(new Date(date)).format("ll");
    },    
    handleGetUserPosts() {
      this.$store.dispatch("getUserPosts", {
        userId: this.user._id
      });
    },
    handleUpdateUserPost() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("updateUserPost", {
          postId: this.postId,
          userId: this.user._id,
          title: this.title,
          imageUrl: this.imageUrl,
          categories: this.categories,
          description: this.description
        });
        this.editPostDialog = false;
      }
    },
    handleDeleteUserPost(post) {
      this.loadPost(post, false);
      const deletePost = window.confirm(
        "Are you sure you want to delete this post?"
      );
      if (deletePost) {
        this.$store.dispatch("deleteUserPost", {
          postId: this.postId
        });
      }
    },
    loadPost(
      { _id, title, imageUrl, categories, description },
      editPostDialog = true
    ) {
      this.editPostDialog = editPostDialog;
      this.postId = _id;
      this.title = title;
      this.imageUrl = imageUrl;
      this.categories = categories;
      this.description = description;
    }
  }
};
</script>
```

- We need to modify the `Posts\Post.vue` post page document to use `moment` to forrmat dates

> client\src\components\Posts\Post.vue
```html
<template>
  <v-container
    v-if="getPost"
    class="mt-3"
    flexbox
    center
  >

    <!-- Post Card -->
    <v-layout
      row
      wrap
    >
      <v-flex xs12>
        <v-card hover>
          <v-card-title>
            <h1>{{getPost.title}}</h1>
            <v-btn
              @click="handleToggleLike" 
              large
              icon
              v-if="user"
            >
              <v-icon
                large
                :color="checkIfPostLiked(getPost._id) ? 'red' : 'grey'"
              >favorite</v-icon>
            </v-btn>
            <h3 class="ml-3 font-weight-thin">{{getPost.likes}} LIKES</h3>
            <v-spacer></v-spacer>
            <v-icon
              @click="goToPreviousPage"
              color="info"
              large
            >arrow_back</v-icon>
          </v-card-title>

          <v-tooltip right>
            <span>Click to enlarge image</span>
            <v-img
              @click="toggleImageDialog"
              slot="activator"
              :src="getPost.imageUrl"
              id="post__image"
            ></v-img>
          </v-tooltip>

          <!-- Post Image Dialog -->
          <v-dialog v-model="dialog">
            <v-card>
              <v-img
                :src="getPost.imageUrl"
                height="80vh"
              ></v-img>
            </v-card>
          </v-dialog>

          <v-card-text>
            <span
              v-for="(category, index) in getPost.categories"
              :key="index"
            >
              <v-chip
                class="mb-3"
                color="accent"
                text-color="white"
              >{{category}}</v-chip>
            </span>
            <h3>{{getPost.description}}</h3>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <!-- Messages Section -->
    <div class="mt-3">
      <!-- Message Input -->
      <v-layout
        class="mb-3"
        v-if="user"
      >
        <v-flex xs12>
          <v-form
            v-model="isFormValid"
            lazy-validation
            ref="form"
            @submit.prevent="handleAddPostMessage"
          >
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  :rules="messageRules"
                  v-model="messageBody"
                  clearable
                  :append-outer-icon="messageBody && 'send'"
                  label="Add Message"
                  type="text"
                  @click:append-outer="handleAddPostMessage"
                  prepend-icon="email"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-form>
        </v-flex>
      </v-layout>

      <!-- Messages -->
      <v-layout
        row
        wrap
      >
        <v-flex xs12>
          <v-list
            subheader
            two-line
          >
            <v-subheader>Messages ({{getPost.messages.length}})</v-subheader>

            <template v-for="message in getPost.messages">
              <v-divider :key="message._id"></v-divider>

              <v-list-tile
                avatar
                inset
                :key="message.title"
              >
                <v-list-tile-avatar>
                  <img :src="message.messageUser.avatar">
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title>
                    {{message.messageBody}}
                  </v-list-tile-title>
                  <v-list-tile-sub-title>
                    {{message.messageUser.username}}
                    <span class="grey--text text--lighten-1 hidden-xs-only">{{getTimeFromNow(message.messageDate)}}</span>
                  </v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action class='hidden-xs-only'>
                  <v-icon :color="checkIfOwnMessage(message) ? 'accent' : 'grey'">chat_bubble</v-icon>
                </v-list-tile-action>

              </v-list-tile>
            </template>
          </v-list>
        </v-flex>
      </v-layout>

    </div>

  </v-container>
</template>
<script>
import moment from "moment";
import { mapGetters } from "vuex";
import {
  GET_POST,
  ADD_POST_MESSAGE,
  LIKE_POST,
  UNLIKE_POST
} from "../../queries";

export default {
  name: "Post",
  props: ["postId"],
  data() {
    return {
      postLiked: false,      
      dialog: false,
      messageBody: "",
      isFormValid: true,
      messageRules: [
        message => !!message || "Message is required",
        message =>
          message && message.length < 75 || "Message must be less than 75 characters"
      ]
    };
  },
  apollo: {
    getPost: {
      query: GET_POST,
      variables() {
        return {
          postId: this.postId
        };
      }
    }
  },
  computed: {
    ...mapGetters(["user", "userFavorites"])
  },
  methods: {
    getTimeFromNow(time) {
      return moment(new Date(time)).fromNow();
    },    
    checkIfPostLiked(postId) {
      // check if user favorites includes post with id of 'postId'
      this.postLiked = this.userFavorites &&
        this.userFavorites.some(fave => fave._id === postId)
      return this.postLiked
    },
    handleToggleLike() {
      if (this.postLiked) {
        this.handleUnlikePost();
      } else {
        this.handleLikePost();
      }
    },    
    handleLikePost() {
      const variables = {
        postId: this.postId,
        username: this.user.username
      };
      this.$apollo
        .mutate({
          mutation: LIKE_POST,
          variables,
          update: (cache, { data: { likePost } }) => {
            const data = cache.readQuery({
              query: GET_POST,
              variables: { postId: this.postId }
            });
            data.getPost.likes += 1;
            cache.writeQuery({
              query: GET_POST,
              variables: { postId: this.postId },
              data
            });
          }
        })
        .then(({ data }) => {
          const updatedUser = {
            ...this.user,
            favorites: data.likePost.favorites
          };
          this.$store.commit("setUser", updatedUser);
        })
        .catch(err => console.error(err));
    },
    handleUnlikePost() {
      const variables = {
        postId: this.postId,
        username: this.user.username
      };
      this.$apollo
        .mutate({
          mutation: UNLIKE_POST,
          variables,
          update: (cache, { data: { unlikePost } }) => {
            const data = cache.readQuery({
              query: GET_POST,
              variables: { postId: this.postId }
            });
            data.getPost.likes -= 1;
            cache.writeQuery({
              query: GET_POST,
              variables: { postId: this.postId },
              data
            });
          }
        })
        .then(({ data }) => {
          const updatedUser = {
            ...this.user,
            favorites: data.unlikePost.favorites
          };
          this.$store.commit("setUser", updatedUser);
        })
        .catch(err => console.error(err));
    },    
    handleAddPostMessage() {
      if (this.$refs.form.validate()) {
        const variables = {
          messageBody: this.messageBody,
          userId: this.user._id,
          postId: this.postId
        };
        this.$apollo
          .mutate({
            mutation: ADD_POST_MESSAGE,
            variables,
            update: (cache, { data: { addPostMessage } }) => {
              const data = cache.readQuery({
                query: GET_POST,
                variables: { postId: this.postId }
              });
              data.getPost.messages.unshift(addPostMessage);
              cache.writeQuery({
                query: GET_POST,
                variables: { postId: this.postId },
                data
              });
            }
          })
          .then(({ data }) => {
            this.$refs.form.reset();
            console.log(data.addPostMessage);
          })
          .catch(err => console.error(err));
      }
    },
    goToPreviousPage() {
      this.$router.go(-1);
    },
    toggleImageDialog() {
      if (window.innerWidth > 500) {
        this.dialog = !this.dialog;
      }
    },
    checkIfOwnMessage(message) {
      return this.user && this.user._id === message.messageUser._id;
    }
  }
};
</script>


<style scoped>
#post__image {
  height: 400px !important;
}
</style>
```

- We need to modify the `Posts\Posts.vue` posts page document to use `moment` to forrmat dates

> client\src\components\Posts\Posts.vue
```html
<template>
  <v-container fluid grid-list-xl>

    <!-- Post Cards -->
    <v-layout row wrap v-if="infiniteScrollPosts">
      <v-flex xs12 sm6 v-for="post in infiniteScrollPosts.posts" :key="post._id">
        <v-card hover>
          <v-img @click.native="goToPost(post._id)" :src="post.imageUrl" height="30vh" lazy></v-img>

          <v-card-actions>
            <v-card-title primary>
              <div>
                <div class="headline">{{post.title}}</div>
                <span class="grey--text">{{post.likes}} likes - {{post.messages.length}} comments</span>
              </div>
            </v-card-title>
            <v-spacer></v-spacer>
            <v-btn @click="showPostCreator = !showPostCreator" icon>
              <v-icon>{{`keyboard_arrow_${showPostCreator ? 'up' : 'down'}`}}</v-icon>
            </v-btn>
          </v-card-actions>

          <!-- Post Creator Tile -->
          <v-slide-y-transition>
            <v-card-text v-show="showPostCreator" class="grey lighten-4">
              <v-list-tile avatar>
                <v-list-tile-avatar>
                  <img :src="post.createdBy.avatar">
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title class="text--primary">{{post.createdBy.username}}</v-list-tile-title>
                  <v-list-tile-sub-title class="font-weight-thin">Added {{formatCreatedDate(post.createdDate)}}</v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action>
                  <v-btn icon ripple>
                    <v-icon color="grey lighten-1">info</v-icon>
                  </v-btn>
                </v-list-tile-action>
              </v-list-tile>
            </v-card-text>
          </v-slide-y-transition>

        </v-card>
      </v-flex>
    </v-layout>

    <!-- Fetch More Button -->
    <v-layout v-if="showMoreEnabled" column>
      <v-flex xs12>
        <v-layout justify-center row>
          <v-btn color="info" @click="showMorePosts">Fetch More</v-btn>
        </v-layout>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import moment from "moment";
import { INFINITE_SCROLL_POSTS } from "../../queries";

const pageSize = 2;

export default {
  name: "Posts",
  data() {
    return {
      pageNum: 1,
      showMoreEnabled: true,
      showPostCreator: false
    };
  },
  apollo: {
    infiniteScrollPosts: {
      query: INFINITE_SCROLL_POSTS,
      variables: {
        pageNum: 1,
        pageSize
      }
    }
  },
  methods: {
    formatCreatedDate(date) {
      return moment(new Date(date)).format("ll");
    },    
    showMorePosts() {
      this.pageNum += 1;
      // fetch more data and transform original result
      this.$apollo.queries.infiniteScrollPosts.fetchMore({
        variables: {
          // pageNum incremented by 1
          pageNum: this.pageNum,
          pageSize
        },
        updateQuery: (prevResult, { fetchMoreResult }) => {
          console.log("previous result", prevResult.infiniteScrollPosts.posts);
          console.log("fetch more result", fetchMoreResult);

          const newPosts = fetchMoreResult.infiniteScrollPosts.posts;
          const hasMore = fetchMoreResult.infiniteScrollPosts.hasMore;
          this.showMoreEnabled = hasMore;

          return {
            infiniteScrollPosts: {
              __typename: prevResult.infiniteScrollPosts.__typename,
              // Merge previous posts with new posts
              posts: [...prevResult.infiniteScrollPosts.posts, ...newPosts],
              hasMore
            }
          };
        }
      });
    },
    goToPost(postId) {
      this.$router.push(`/posts/${postId}`);
    }
  }
};
</script>
```

- We need to test if it works.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/FormattingDatesWithMoment.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/FormattingDatesWithMoment2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/FormattingDatesWithMoment3.png)

### 82. Minor Improvements/Fixes 7min

- We are going to modify the `App.vue` document to change the `h1` and `h2` CSS segments.

> client\src\App.vue
```html
<template>
  <v-app style="background: #E3E3EE">
    <!-- Side Navbar -->
    <v-navigation-drawer
      app
      temporary
      fixed
      v-model="sideNav"
    >
      <v-toolbar
        color="accent"
        dark
        flat
      >
        <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
        <router-link
          to="/"
          tag="span"
          style="cursor: pointer"
        >
          <h1 class="title pl-3">VueShare</h1>
        </router-link>
      </v-toolbar>

      <v-divider></v-divider>

      <!-- Side Navbar Links -->
      <v-list>
        <v-list-tile
          ripple
          v-for="item in sideNavItems"
          :key="item.title"
          :to="item.link"
        >
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{item.title}}
          </v-list-tile-content>
        </v-list-tile>

        <!-- Signout Button -->
        <v-list-tile
          v-if="user"
          @click="handleSignoutUser"
        >
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Signout</v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>

    <!-- Horizontal Navbar -->
    <v-toolbar
      fixed
      color="primary"
      dark
    >
      <!-- App Title -->
      <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-xs-only">
        <router-link
          to="/"
          tag="span"
          style="cursor: pointer"
        >
          VueShare
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Search Input -->
      <v-text-field
        v-model="searchTerm"
        @input="handleSearchPosts"
        flex
        prepend-icon="search"
        placeholder="Search posts"
        color="accent"
        single-line
        hide-details
      ></v-text-field>

      <!-- Search Results Card -->
      <v-card
        dark
        v-if="searchResults.length"
        id="search__card"
      >
        <v-list>
          <v-list-tile
            v-for="result in searchResults"
            :key="result._id"
            @click="goToSearchResult(result._id)"
          >
            <v-list-tile-title>
              {{result.title}} -
              <span class="font-weight-thin">{{formatDescription(result.description)}}</span>
            </v-list-tile-title>

            <!-- Show Icon if Result Favorited by User -->
            <v-list-tile-action v-if="checkIfUserFavorite(result._id)">
              <v-icon>favorite</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-card>

      <v-spacer></v-spacer>

      <!-- Horizontal Navbar Links -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in horizontalNavItems"
          :key="item.title"
          :to="item.link"
        >
          <v-icon
            class="hidden-sm-only"
            left
          >{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>

        <!-- Profile Button -->
        <v-btn
          flat
          to="/profile"
          v-if="user"
        >
          <v-icon
            class="hidden-sm-only"
            left
          >account_box</v-icon>
          <v-badge
            right
            color="blue darken-2"
            :class="{ 'bounce': badgeAnimated }"
          >
            <span
              slot="badge"
              v-if="userFavorites.length"
            >{{userFavorites.length}}</span>
            Profile
          </v-badge>
        </v-btn>

        <!-- Signout Button -->
        <v-btn
          flat
          v-if="user"
          @click="handleSignoutUser"
        >
          <v-icon
            class="hidden-sm-only"
            left
          >exit_to_app</v-icon>
          Signout
        </v-btn>

      </v-toolbar-items>
    </v-toolbar>

    <!-- App Content -->
    <main>
      <v-container class="mt-4">
        <transition name="fade">
          <router-view />
        </transition>

        <!-- Auth Snackbar -->
        <v-snackbar
          v-model="authSnackbar"
          color="success"
          :timeout='5000'
          bottom
          left
        >
          <v-icon class="mr-3">check_circle</v-icon>
          <h3>You are now signed in!</h3>
          <v-btn
            dark
            flat
            @click="authSnackbar = false"
          >Close</v-btn>
        </v-snackbar>

        <!-- Auth Error Snackbar -->
        <v-snackbar
          v-if="authError"
          v-model="authErrorSnackbar"
          color="info"
          :timeout='5000'
          bottom
          left
        >
          <v-icon class="mr-3">cancel</v-icon>
          <h3>{{authError.message}}</h3>
          <v-btn
            dark
            flat
            to="/signin"
          >Sign in</v-btn>
        </v-snackbar>

      </v-container>
    </main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  data() {
    return {
      searchTerm: "",
      sideNav: false,
      authSnackbar: false,
      authErrorSnackbar: false,
      badgeAnimated: false
    };
  },
  watch: {
    user(newValue, oldValue) {
      // if we had no value for user before, show snackbar
      if (oldValue === null) {
        this.authSnackbar = true;
      }
    },
    authError(value) {
      // if auth error is not null, show auth error snackbar
      if (value !== null) {
        this.authErrorSnackbar = true;
      }
    },
    userFavorites(value) {
      // if user favorites value changed at all
      if (value) {
        this.badgeAnimated = true;
        setTimeout(() => (this.badgeAnimated = false), 1000);
      }
    }
  },
  computed: {
    ...mapGetters(["searchResults", "authError", "user", "userFavorites"]),
    horizontalNavItems() {
      let items = [
        { icon: "chat", title: "Posts", link: "/posts" },
        { icon: "lock_open", title: "Sign In", link: "/signin" },
        { icon: "create", title: "Sign Up", link: "/signup" }
      ];
      if (this.user) {
        items = [{ icon: "chat", title: "Posts", link: "/posts" }];
      }
      return items;
    },
    sideNavItems() {
      let items = [
        { icon: "chat", title: "Posts", link: "/posts" },
        { icon: "lock_open", title: "Sign In", link: "/signin" },
        { icon: "create", title: "Sign Up", link: "/signup" }
      ];
      if (this.user) {
        items = [
          { icon: "chat", title: "Posts", link: "/posts" },
          { icon: "stars", title: "Create Post", link: "/post/add" },
          { icon: "account_box", title: "Profile", link: "/profile" }
        ];
      }
      return items;
    }
  },
  methods: {
    handleSearchPosts() {
      this.$store.dispatch("searchPosts", {
        searchTerm: this.searchTerm
      });
    },
    handleSignoutUser() {
      this.$store.dispatch("signoutUser");
    },
    goToSearchResult(resultId) {
      // Clear search term
      this.searchTerm = "";
      // Go to desired result
      this.$router.push(`/posts/${resultId}`);
      // Clear search results
      this.$store.commit("clearSearchResults");
    },
    formatDescription(desc) {
      return desc.length > 30 ? `${desc.slice(0, 30)}...` : desc;
    },
    checkIfUserFavorite(resultId) {
      return (
        this.userFavorites &&
        this.userFavorites.some(fave => fave._id === resultId)
      );
    },    
    toggleSideNav() {
      this.sideNav = !this.sideNav;
    }
  }
};
</script>

<style>
h1 {
  font-weight: 400;
  font-size: 2.5rem;

}

h2 {
  font-weight: 400;
   font-size: 2rem;   
}
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

/* Search Results Card */
#search__card {
  position: absolute;
  width: 100vw;
  z-index: 8;
  top: 100%;
  left: 0%;
}

/* User Favorite Animation */
.bounce {
  animation: bounce 1s both;
}

@keyframes bounce {
  0%,
  20%,
  53%,
  80%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  40%,
  43% {
    transform: translate3d(0, -20px, 0);
  }
  70% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, -4px, 0);
  }
}
</style>
```

- We are going to modify the `Home.vue` page document to add the `Explore Posts` Button

> client\src\components\Home.vue
```html
<template>
  <v-container text-xs-center>
    
    <!-- Loading Spinner -->
    <v-layout row>
      <v-dialog v-model="loading" persistent fullscreen>
        <v-container fill-height>
          <v-layout row justify-center align-center>
            <v-progress-circular indeterminate :size="70" :width="7" color="secondary"></v-progress-circular>
          </v-layout>
        </v-container>
      </v-dialog>
    </v-layout>

    <!-- Explore Posts Button -->
    <v-layout class="mt-2 mb-3" row wrap v-if="!loading">
      <v-flex xs-12>
        <v-btn class="secondary" to="/posts" large dark>
          Explore Posts
        </v-btn>
      </v-flex>
    </v-layout>

    <!-- Posts Carrousel -->
    <v-flex xs12>
      <v-carousel v-if="!loading && posts.length > 0" v-bind="{ 'cycle': true }" interval="3000">
        <v-carousel-item v-for="post in posts" :key="post._id" :src="post.imageUrl" @click.native="goToPost(post._id)">
          <h1 id="carousel__title">{{post.title}}</h1>
        </v-carousel-item>
      </v-carousel>
    </v-flex>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "home",
  created() {
    this.handleGetCarouselPosts();
  },
  computed: {
    ...mapGetters(["loading", "posts"])
  },
  methods: {
    handleGetCarouselPosts() {
      // reach out to Vuex store, fire action that gets posts for carousel
      this.$store.dispatch("getPosts");
    },
    goToPost(postId) {
      this.$router.push(`/posts/${postId}`);
    }
  }
};
</script>

<style>
#carousel__title {
  position: absolute;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 5px 5px 0 0;
  padding: 0.5em;
  margin: 0 auto;
  bottom: 50px;
  left: 0;
  right: 0;
}
</style>
```

- We are going to modify the `Auth\Profile.vue` profile page document to allow to go to the Posts from the Post Images.

> client\src\components\Auth\Profile.vue
```html
<template>
  <v-container class="text-xs-center">

    <!-- User Details Card -->
    <v-flex
      sm6
      offset-sm3
    >
      <v-card
        class="white--text"
        color="secondary"
      >
        <v-layout>
          <v-flex xs5>
            <v-img
              height="125px"
              contain
              :src="user.avatar"
            ></v-img>
          </v-flex>
          <v-flex xs7>
            <v-card-title primary-title>
              <div>
                <div class="headline">{{user.username}}</div>
                <div>Joined {{formatJoinDate(user.joinDate)}}</div>
                <div class="hidden-xs-only font-weight-thin">{{user.favorites.length}} Favorites</div>
                <div class="hidden-xs-only font-weight-thin">{{userPosts.length}} Posts Added</div>
              </div>
            </v-card-title>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>

    <!-- Posts Favorited by User -->
    <v-container v-if="!userFavorites.length">
      <v-layout
        row
        wrap
      >
        <v-flex xs12>
          <h2>You have no favorites currently. Go and add some!</h2>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container
      class="mt-3"
      v-else
    >
      <v-flex xs12>
        <h2 class="font-weight-light">Favorited
          <span class="font-weight-regular">({{userFavorites.length}})</span>
        </h2>
      </v-flex>
      <v-layout
        row
        wrap
      >
        <v-flex
          xs12
          sm6
          v-for="favorite in userFavorites"
          :key="favorite._id"
        >
          <v-card
            class="mt-3 ml-1 mr-2"
            hover
          >
            <v-img
              height="30vh"
              :src="favorite.imageUrl"
              @click="goToPost(favorite._id)"
            ></v-img>
            <v-card-text>{{favorite.title}}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- Posts Created By user -->
    <v-container v-if="!userPosts.length">
      <v-layout
        row
        wrap
      >
        <v-flex xs12>
          <h2>You have no posts currently. Go and add some!</h2>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container
      class="mt-3"
      v-else
    >
      <v-flex xs12>
        <h2 class="font-weight-light">Your Posts
          <span class="font-weight-regular">({{userPosts.length}})</span>
        </h2>
      </v-flex>
      <v-layout
        row
        wrap
      >
        <v-flex
          xs12
          sm6
          v-for="post in userPosts"
          :key="post._id"
        >
          <v-card
            class="mt-3 ml-1 mr-2"
            hover
          >
            <v-btn
              color="info"
              floating
              fab
              small
              dark
              @click="loadPost(post)"
            >
              <v-icon>edit</v-icon>
            </v-btn>
            <v-btn
              color="error"
              floating
              fab
              small
              dark
              @click="handleDeleteUserPost(post)"
            >
              <v-icon>delete</v-icon>
            </v-btn>

            <v-img
              height="30vh"
              :src="post.imageUrl"
              @click="goToPost(post._id)"
            ></v-img>
            <v-card-text>{{post.title}}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- Edit Post Dialog -->
    <v-dialog
      xs12
      sm6
      offset-sm3
      persistent
      v-model="editPostDialog"
    >
      <v-card>
        <v-card-title class="headline grey lighten-2">Update Post</v-card-title>
        <v-container>
          <v-form
            v-model="isFormValid"
            lazy-validation
            ref="form"
            @submit.prevent="handleUpdateUserPost"
          >

            <!-- Title Input -->
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  :rules="titleRules"
                  v-model="title"
                  label="Post Title"
                  type="text"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>

            <!-- Image Url Input -->
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  :rules="imageRules"
                  v-model="imageUrl"
                  label="Image URL"
                  type="text"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>

            <!-- Image Preview -->
            <v-layout row>
              <v-flex xs12>
                <img
                  :src="imageUrl"
                  height="300px"
                >
              </v-flex>
            </v-layout>

            <!-- Categories Select -->
            <v-layout row>
              <v-flex xs12>
                <v-select
                  v-model="categories"
                  :rules="categoriesRules"
                  :items="['Art', 'Education', 'Food', 'Furniture', 'Travel', 'Photography', 'Technology']"
                  multiple
                  label="Categories"
                ></v-select>
              </v-flex>
            </v-layout>

            <!-- Description Text Area -->
            <v-layout row>
              <v-flex xs12>
                <v-textarea
                  :rules="descRules"
                  v-model="description"
                  label="Description"
                  type="text"
                  required
                ></v-textarea>
              </v-flex>
            </v-layout>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                :disabled="!isFormValid"
                type="submit"
                class="success--text"
                flat
              >Update</v-btn>
              <v-btn
                class="error--text"
                flat
                @click="editPostDialog = false"
              >Cancel</v-btn>
            </v-card-actions>

          </v-form>
        </v-container>
      </v-card>
    </v-dialog>

  </v-container>
</template>

<script>
import moment from "moment";
import { mapGetters } from "vuex";

export default {
  name: "Profile",
  data() {
    return {
      editPostDialog: false,
      isFormValid: true,
      title: "",
      imageUrl: "",
      categories: [],
      description: "",
      titleRules: [
        title => !!title || "Title is required",
        title => title.length < 20 || "Title must have less than 20 characters"
      ],
      imageRules: [image => !!image || "Image is required"],
      categoriesRules: [
        categories =>
          categories.length >= 1 || "At least one category is required"
      ],
      descRules: [
        desc => !!desc || "Description is required",
        desc =>
          desc.length < 200 || "Description must have less than 200 characters"
      ]
    };
  },
  computed: {
    ...mapGetters(["user", "userFavorites", "userPosts"])
  },
  created() {
    this.handleGetUserPosts();
  },
  methods: {
    goToPost(id) {
      this.$router.push(`/posts/${id}`);
    },
    formatJoinDate(date) {
      return moment(new Date(date)).format("ll");
    },    
    handleGetUserPosts() {
      this.$store.dispatch("getUserPosts", {
        userId: this.user._id
      });
    },
    handleUpdateUserPost() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("updateUserPost", {
          postId: this.postId,
          userId: this.user._id,
          title: this.title,
          imageUrl: this.imageUrl,
          categories: this.categories,
          description: this.description
        });
        this.editPostDialog = false;
      }
    },
    handleDeleteUserPost(post) {
      this.loadPost(post, false);
      const deletePost = window.confirm(
        "Are you sure you want to delete this post?"
      );
      if (deletePost) {
        this.$store.dispatch("deleteUserPost", {
          postId: this.postId
        });
      }
    },
    loadPost(
      { _id, title, imageUrl, categories, description },
      editPostDialog = true
    ) {
      this.editPostDialog = editPostDialog;
      this.postId = _id;
      this.title = title;
      this.imageUrl = imageUrl;
      this.categories = categories;
      this.description = description;
    }
  }
};
</script>
```

- We are going to modify the `Posts\Posts.vue` posts page document to manage properly the `showMoreEnabled` property.

> client\src\components\Posts\Posts.vue
```html
<template>
  <v-container fluid grid-list-xl>

    <!-- Post Cards -->
    <v-layout row wrap v-if="infiniteScrollPosts">
      <v-flex xs12 sm6 v-for="post in infiniteScrollPosts.posts" :key="post._id">
        <v-card hover>
          <v-img @click.native="goToPost(post._id)" :src="post.imageUrl" height="30vh" lazy></v-img>

          <v-card-actions>
            <v-card-title primary>
              <div>
                <div class="headline">{{post.title}}</div>
                <span class="grey--text">{{post.likes}} likes - {{post.messages.length}} comments</span>
              </div>
            </v-card-title>
            <v-spacer></v-spacer>
            <v-btn @click="showPostCreator = !showPostCreator" icon>
              <v-icon>{{`keyboard_arrow_${showPostCreator ? 'up' : 'down'}`}}</v-icon>
            </v-btn>
          </v-card-actions>

          <!-- Post Creator Tile -->
          <v-slide-y-transition>
            <v-card-text v-show="showPostCreator" class="grey lighten-4">
              <v-list-tile avatar>
                <v-list-tile-avatar>
                  <img :src="post.createdBy.avatar">
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title class="text--primary">{{post.createdBy.username}}</v-list-tile-title>
                  <v-list-tile-sub-title class="font-weight-thin">Added {{formatCreatedDate(post.createdDate)}}</v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action>
                  <v-btn icon ripple>
                    <v-icon color="grey lighten-1">info</v-icon>
                  </v-btn>
                </v-list-tile-action>
              </v-list-tile>
            </v-card-text>
          </v-slide-y-transition>

        </v-card>
      </v-flex>
    </v-layout>

    <!-- Fetch More Button -->
    <v-layout v-if="showMoreEnabled" column>
      <v-flex xs12>
        <v-layout justify-center row>
          <v-btn color="info" @click="showMorePosts">Fetch More</v-btn>
        </v-layout>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import moment from "moment";
import { INFINITE_SCROLL_POSTS } from "../../queries";

const pageSize = 2;

export default {
  name: "Posts",
  data() {
    return {
      pageNum: 1,
      // showMoreEnabled: true,
      showPostCreator: false
    };
  },
  apollo: {
    infiniteScrollPosts: {
      query: INFINITE_SCROLL_POSTS,
      variables: {
        pageNum: 1,
        pageSize
      }
    }
  },
  computed: {
    showMoreEnabled() {
      return this.infiniteScrollPosts && this.infiniteScrollPosts.hasMore;
    }
  },
  methods: {
    formatCreatedDate(date) {
      return moment(new Date(date)).format("ll");
    },    
    showMorePosts() {
      this.pageNum += 1;
      // fetch more data and transform original result
      this.$apollo.queries.infiniteScrollPosts.fetchMore({
        variables: {
          // pageNum incremented by 1
          pageNum: this.pageNum,
          pageSize
        },
        updateQuery: (prevResult, { fetchMoreResult }) => {
          console.log("previous result", prevResult.infiniteScrollPosts.posts);
          console.log("fetch more result", fetchMoreResult);

          const newPosts = fetchMoreResult.infiniteScrollPosts.posts;
          const hasMore = fetchMoreResult.infiniteScrollPosts.hasMore;
          // this.showMoreEnabled = hasMore;

          return {
            infiniteScrollPosts: {
              __typename: prevResult.infiniteScrollPosts.__typename,
              // Merge previous posts with new posts
              posts: [...prevResult.infiniteScrollPosts.posts, ...newPosts],
              hasMore
            }
          };
        }
      });
    },
    goToPost(postId) {
      this.$router.push(`/posts/${postId}`);
    }
  }
};
</script>
```

- We need to test if everything works properly.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/MinorImprovementsFixes.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/MinorImprovementsFixes2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/MinorImprovementsFixes3.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/MinorImprovementsFixes4.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/MinorImprovementsFixes5.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/MinorImprovementsFixes6.png)

## Section 16: Deployment with Heroku / Now v2 0 / 1|13min

### 83. Deploying App with Heroku / Now v2 13min

- We are going to use [Heroku](https://www.heroku.com/) to deploy our `server code` and [Now](https://zeit.co/now) to deploy our `client code`.

- Signup on `Keroku`

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/DeployingAppWithHerokuNowV2.png)

- Signup on `Now`

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/DeployingAppWithHerokuNowV22.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/DeployingAppWithHerokuNowV23.png)

- We need to set up the Atlas `IP Whitelist`.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/DeployingAppWithHerokuNowV24.png)

#### Deploy the server code

- We need to modify the `server.js` document to set up the `server port value`

> server.js
```js
const { ApolloServer, AuthenticationError } = require("apollo-server");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");

// Import Environment variables from .env
require("dotenv").config();

// Import typedefs and resolvers
const filePath = path.join(__dirname, "typeDefs.gql");
const typeDefs = fs.readFileSync(filePath, "utf-8");
const resolvers = require("./resolvers");

const User = require("./models/User");
const Post = require("./models/Post");

// Connect to MongoDb Atlas
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log("DB connected"))
  .catch(error => console.error(error));

// Verify JWT Token passed from client
const getUser = async token => {
  if (token) {
    try {
      return await jwt.verify(token, process.env.SECRET);
    } catch (err) {
      throw new AuthenticationError(
        "Your session has ended. Please sign in again."
      );
    }
  }
};

// Create Apollo/GraphQL Server using typeDefs, resolvers, and context object
const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: error => ({
    name: error.name,
    message: error.message.replace("Context creation failed:", "")
  }),  
  context: async ({ req }) => {
    const token = req.headers["authorization"];
    return { User, Post, currentUser: await getUser(token) };
  }
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server listening on ${url}`);
});
```
- We need to create a new App on `Heroku`.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/DeployingAppWithHerokuNowV25.png)

- Put the name: `vue-with-graphql-peelmicro` and then click on `Create app`

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/DeployingAppWithHerokuNowV26.png)

- Install the `Heroku CLI`

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide (master)
$ npm i -g heroku
npm WARN deprecated cross-spawn-async@2.2.5: cross-spawn no longer requires a build toolchain, use it instead
C:\Users\juan.pablo.perez\AppData\Roaming\npm\heroku -> C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\heroku\bin\run
+ heroku@7.27.1
added 26 packages from 12 contributors, removed 5 packages, updated 48 packages and moved 6 packages in 126.305sheroku login
```

- Log in from the terminal to `Heroku`

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide (master)
$ heroku login
heroku: Press any key to open up the browser to login or q to exit:
```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/DeployingAppWithHerokuNowV27.png)

```bash
Opening browser to https://cli-auth.heroku.com/auth/browser/d99aa950-7e75-4a3e-bca6-717446cd370b
heroku: Waiting for login... |
```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/DeployingAppWithHerokuNowV28.png)

```bash
Logging in... done
Logged in as juanp_perez@msn.com
```

- Create a `git` repository, if it is not created yet, using `git init`

- We need to commit the changes.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide (master)
$ git commit -m "Heroku Deployment"
[master 0016d2e] Heroku Deployment
 1 file changed, 1 insertion(+), 1 deletion(-)
```

- Set the `Heroku` remote repository

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide (master)
$ heroku git:remote -a vue-with-graphql-peelmicro
set git remote heroku to https://git.heroku.com/vue-with-graphql-peelmicro.git
```

- Include the environment variables on `Heroku`

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/DeployingAppWithHerokuNowV29.png)

- Deploy on `Heroku`

```bash
juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide (master)
$ git push heroku master
Enumerating objects: 190, done.
Counting objects: 100% (190/190), done.
Delta compression using up to 4 threads
Compressing objects: 100% (187/187), done.
Writing objects: 100% (190/190), 138.99 KiB | 837.00 KiB/s, done.
Total 190 (delta 102), reused 0 (delta 0)
remote: Compressing source files... done.
remote: Building source:
remote:
remote: -----> Node.js app detected
remote:
remote: -----> Creating runtime environment
remote:
remote:        NPM_CONFIG_LOGLEVEL=error
remote:        NODE_ENV=production
remote:        NODE_MODULES_CACHE=true
remote:        NODE_VERBOSE=false
remote:
remote: -----> Installing binaries
remote:        engines.node (package.json):  unspecified
remote:        engines.npm (package.json):   unspecified (use default)
remote:
remote:        Resolving node version 10.x...
remote:        Downloading and installing node 10.16.3...
remote:        Using default npm version: 6.9.0
remote:
remote: -----> Installing dependencies
remote:        Installing node modules (package.json + package-lock)
remote:
remote:        > bcrypt@3.0.6 install /tmp/build_4390a153baa002773690df5c5d1656a7/node_modules/bcrypt
remote:        > node-pre-gyp install --fallback-to-build
remote:
remote:        [bcrypt] Success: "/tmp/build_4390a153baa002773690df5c5d1656a7/node_modules/bcrypt/lib/binding/bcrypt_lib.node" is installed via remote
remote:
remote:        > core-js@3.1.3 postinstall /tmp/build_4390a153baa002773690df5c5d1656a7/node_modules/core-js
remote:        > node scripts/postinstall || echo "ignore"
remote:
remote:
remote:        > protobufjs@6.8.8 postinstall /tmp/build_4390a153baa002773690df5c5d1656a7/node_modules/protobufjs
remote:        > node scripts/postinstall
remote:
remote:
remote:        > nodemon@1.19.1 postinstall /tmp/build_4390a153baa002773690df5c5d1656a7/node_modules/nodemon
remote:        > node bin/postinstall || exit 0
remote:
remote:        Love nodemon? You can now support the project via the open collective:
remote:         > https://opencollective.com/nodemon/donate
remote:
remote:        added 475 packages from 358 contributors and audited 3222 packages in 11.936s
remote:        found 0 vulnerabilities
remote:
remote:
remote: -----> Build
remote:
remote: -----> Pruning devDependencies
remote:        removed 229 packages and audited 912 packages in 3.814s
remote:        found 0 vulnerabilities
remote:
remote:
remote: -----> Caching build
remote:        - node_modules
remote:
remote: -----> Build succeeded!
remote: -----> Discovering process types
remote:        Procfile declares types     -> (none)
remote:        Default types for buildpack -> web
remote:
remote: -----> Compressing...
remote:        Done: 24.7M
remote: -----> Launching...
remote:        Released v5
remote:        https://vue-with-graphql-peelmicro.herokuapp.com/ deployed to Heroku
remote:
remote: Verifying deploy... done.
To https://git.heroku.com/vue-with-graphql-peelmicro.git
 * [new branch]      master -> master
```

- We should ensure it is working browsing https://vue-with-graphql-peelmicro.herokuapp.com/

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/DeployingAppWithHerokuNowV30.png)

#### Deploy the client code

- As we need to make changes on the app that are going to make the app not work locally we are going to create a new branch.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide (master)
$ git checkout -b NowDeployment
Switched to a new branch 'NowDeployment'

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide (NowDeployment)
$ git status
On branch NowDeployment
nothing to commit, working tree clean
```

- Modify the `main.js` document to change the `Apollo Client uri` value.

> client\src\main.js
```js
// import "@babel/polyfill"
import Vue from "vue"
import "./plugins/vuetify"
import App from "./App.vue"
import router from "./router"
import store from "./store"

import ApolloClient from "apollo-boost"
import VueApollo from "vue-apollo"

import FormAlert from "./components/Shared/FormAlert"

// Register Global Component
Vue.component("form-alert", FormAlert)

Vue.use(VueApollo)

// Setup ApolloClient
export const defaultClient = new ApolloClient({
  uri: "https://vue-with-graphql-peelmicro.herokuapp.com/graphql",
  // include auth token with requests made to backend
  fetchOptions: {
    credentials: "include"
  },
  request: operation => {
    // if no token with key of 'token' in localStorage, add it
    if (!localStorage.token) {
      localStorage.setItem("token", "")
    }

    // operation adds the token to an authorization header, which is sent to backend
    operation.setContext({
      headers: {
        authorization: localStorage.getItem("token")
      }
    })
  },
  onError: ({ graphQLErrors, networkError }) => {
    if (networkError) {
      console.log("[networkError]", networkError)
    }

    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        console.dir(err)
        if (err.name === "AuthenticationError") {
          // set auth error in state (to show in snackbar)
          store.commit("setAuthError", err);
          // signout user (to clear token)
          store.dispatch("signoutUser");
        }        
      }
    }
  }
})

const apolloProvider = new VueApollo({ defaultClient })

Vue.config.productionTip = false

new Vue({
  apolloProvider,
  router,
  store,
  render: h => h(App),
  created() {
    // execute getCurrentUser query
    this.$store.dispatch("getCurrentUser")
  }
}).$mount("#app")

```

- We need to install the [graphql-tag](https://github.com/apollographql/graphql-tag) and [GraphQL.js](https://github.com/graphql/graphql-js) packages.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide/client (NowDeployment)
$ npm i graphql-tag graphql
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ graphql-tag@2.10.1
+ graphql@14.4.2
added 2 packages from 1 contributor and updated 1 package in 42.542s
```

- We need to install our `VueJS` application as a set of static files. We need the `now.json` document to be able to do that. 

- We can find the original code that we need on [GitHub Gist CodeArtistry.io](https://gist.github.com/codeartistryio).

> client\now.json
```json
{
  "version": 2,
  "name": "vue-with-graphql-peelmicro",
  "builds": [{ "src": "package.json", "use": "@now/static-build" }],
  "routes": [
    { "src": "^/js/(.*)", "dest": "/js/$1" },
    { "src": "^/css/(.*)", "dest": "/css/$1" },
    { "src": "^/img/(.*)", "dest": "/img/$1" },
    { "src": ".*", "dest": "/index.html" }
  ]
}
```

- We need to modify the `client\package.json` document to add the `,"now-build": "npm run build"` script.

> client\package.json

```json
{
  "name": "client",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "now-build": "npm run build"
  },
  "dependencies": {
    "apollo-boost": "^0.4.3",
    "core-js": "^2.6.5",
    "graphql": "^14.4.2",
    "graphql-tag": "^2.10.1",
    "lodash": ">=4.17.13",
    "moment": "^2.24.0",
    "vue": "^2.6.10",
    "vue-apollo": "^3.0.0-rc.1",
    "vue-router": "^3.0.3",
    "vuetify": "^1.5.5",
    "vuex": "^3.0.1"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "^3.8.0",
    "@vue/cli-service": "^3.8.0",
    "stylus": "^0.54.5",
    "stylus-loader": "^3.0.1",
    "vue-cli-plugin-vuetify": "^0.5.0",
    "vue-template-compiler": "^2.6.10",
    "vuetify-loader": "^1.0.5"
  },
  "postcss": {
    "plugins": {
      "autoprefixer": {}
    }
  },
  "browserslist": [
    "> 1%",
    "last 2 versions"
  ]
}
```

- We need to install the `Now CLI` by using `npm i -g now`

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide/client (NowDeployment)
$ npm i -g now

> now@16.1.1 preinstall C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\now
> node ./scripts/preinstall.js

C:\Users\juan.pablo.perez\AppData\Roaming\npm\now -> C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\now\dist\index.js
+ now@16.1.1
added 1 package in 179.252s
```

- We need to login on `Now` by using `now login`

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/DeployingAppWithHerokuNowV31.png)

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide/client (NowDeployment)
$ now login
> We sent an email to juanp_perez@loyaltycrm.com. Please follow the steps provided
  inside it and make sure the security code matches Jolly Quoll.
```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/DeployingAppWithHerokuNowV33.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/DeployingAppWithHerokuNowV34.png)

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide/client (NowDeployment)
$ now login
> We sent an email to juanp_perez@loyaltycrm.com. Please follow the steps provided
  inside it and make sure the security code matches Jolly Quoll.
√ Email confirmed
> Ready! Authentication token and personal details saved in "~\.now"
```

- We can deploy our application by using `now`

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide/client (NowDeployment)
$ now
> Deploying C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide\client under peelmicro
> Using project vue-with-graphql-peelmicro
> Synced 14 files (421.16KB) [2s]
> https://vue-with-graphql-peelmicro-ibnbb83kh.now.sh [v2] [876ms]
> Ready! Deployed to https://vue-with-graphql-peelmicro.peelmicro.now.sh [in clipboard] [2m]
```

- We can check if it works.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/DeployingAppWithHerokuNowV35.png)

DeployingAppWithHerokuNowV36

DeployingAppWithHerokuNowV37

DeployingAppWithHerokuNowV38

DeployingAppWithHerokuNowV39

DeployingAppWithHerokuNowV40DeployingAppWithHerokuNowV36

## Section 17: BONUS 0 / 1|1min

### 84. Bonus Lecture

