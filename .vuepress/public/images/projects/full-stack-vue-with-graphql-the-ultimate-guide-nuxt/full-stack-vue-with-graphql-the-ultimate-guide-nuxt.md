# Full-Stack Vue with GraphQL - The Ultimate Guide (Nuxt Version)

This is the `Nuxt` version of the [Full-Stack Vue with GraphQL - The Ultimate Guide ]() course.

## Section 3-4: Setting up the `Server` project.

### I.-Create the main folder for the solution

- Create the main `full-stack-vue-with-graphql-the-ultimate-guide-nuxt` folder

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs
$ mkdir full-stack-vue-with-graphql-the-ultimate-guide-nuxt

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs
$ cd full-stack-vue-with-graphql-the-ultimate-guide-nuxt

```

- Initialize `Git`

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt
$ git init
Initialized empty Git repository in C:/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt/.git/
```

- Copy the `README.md` and `.gitignore` from the original `full-stack-vue-with-graphql-the-ultimate-guide` project.

### II.-Create the `server` project using `NetsJS`

- We are now going to use the [NestJS CLI](https://nestjs.com/) to scaffold the project. Nest is a progressive `Node.js` framework for building efficient, reliable and scalable server-side applications.

![](CreateTheServerProjectUsingNetsJS.png)

- We need to ensure `NestJs CLI` is already installed.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt (master)
$ nest -V
6.5.0
```

- If it is not installed we can install it by using `npm i -g @nestjs/cli`

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/Typescript
$ npm i -g @nestjs/cli
C:\Users\juan.pablo.perez\AppData\Roaming\npm\nest -> C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\@nestjs\cli\bin\nest.js
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\@nestjs\cli\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ @nestjs/cli@6.5.0
added 255 packages from 174 contributors in 55.819s
```

- We are going to create the `server` project using the `NestJS CLI`

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt (master)
$ nest new server
⚡  We will scaffold your app in a few seconds..

CREATE /server/.prettierrc (51 bytes)
CREATE /server/nest-cli.json (84 bytes)
CREATE /server/nodemon-debug.json (163 bytes)
CREATE /server/nodemon.json (67 bytes)
CREATE /server/package.json (1802 bytes)
CREATE /server/README.md (3370 bytes)
CREATE /server/tsconfig.build.json (97 bytes)
CREATE /server/tsconfig.json (325 bytes)
CREATE /server/tslint.json (426 bytes)
CREATE /server/src/app.controller.spec.ts (617 bytes)
CREATE /server/src/app.controller.ts (274 bytes)
CREATE /server/src/app.module.ts (249 bytes)
CREATE /server/src/app.service.ts (142 bytes)
CREATE /server/src/main.ts (208 bytes)
CREATE /server/test/app.e2e-spec.ts (561 bytes)
CREATE /server/test/jest-e2e.json (183 bytes)

? Which package manager would you ❤️  to use? npm
▹▹▹▸▹ Installation in progress... ☕
```

```bash

�  Successfully created project server
�  Get started with the following commands:

$ cd server
$ npm run start


                          Thanks for installing Nest �
                 Please consider donating to our open collective
                        to help us maintain this package.


               �  Donate: https://opencollective.com/nest
```

- We can test if it has been installed properly by executing `npm run start`

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt (master)
$ cd server

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt/server (master)
$ npm run start

> server@0.0.1 start C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide-nuxt\server
> ts-node -r tsconfig-paths/register src/main.ts

[Nest] 22508   - 06/17/2019, 5:20 AM   [NestFactory] Starting Nest application...
[Nest] 22508   - 06/17/2019, 5:20 AM   [InstanceLoader] AppModule dependencies initialized +23ms
[Nest] 22508   - 06/17/2019, 5:20 AM   [RoutesResolver] AppController {/}: +13ms
[Nest] 22508   - 06/17/2019, 5:20 AM   [RouterExplorer] Mapped {/, GET} route +7ms
[Nest] 22508   - 06/17/2019, 5:20 AM   [NestApplication] Nest application successfully started +8ms
```

- Browse http://localhost:3000/

![](CreateTheServerProjectUsingNetsJS2.png)

- Let's see what has been created.

![](CreateTheServerProjectUsingNetsJS3.png)

### III.-Setting up Configuration (using environment variables)

- We are going to use [dotenv](https://www.npmjs.com/package/dotenv), so we need to install the `dotenv` and `@types/dotenv`.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt/server (master)
$ npm i dotenv
npm WARN ts-jest@24.0.2 requires a peer of jest@>=24 <25 but none is installed. You must install peer dependencies yourself.
npm WARN server@0.0.1 No repository field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.0.7 (node_modules\@nestjs\graphql\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.0.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ dotenv@8.0.0
added 1 package and audited 22998 packages in 21.757s
found 62 low severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details
```

```bash
$ npm i --save-dev @types/dotenv
npm WARN ts-jest@24.0.2 requires a peer of jest@>=24 <25 but none is installed. You must install peer dependencies yourself.
npm WARN server@0.0.1 No repository field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.0.7 (node_modules\@nestjs\graphql\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.0.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ @types/dotenv@6.1.1
added 1 package from 4 contributors and audited 23000 packages in 15.297s
found 62 low severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details
```

### V.-Setting up MongoDb

- As we can see on [NestJS Mongo](https://docs.nestjs.com/techniques/mongodb) we have to install the `@nestjs/mongoose` and `mongoose` packages.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt/server (master)
$ npm install --save @nestjs/mongoose mongoose
npm WARN ts-jest@24.0.2 requires a peer of jest@>=24 <25 but none is installed. You must install peer dependencies yourself.
npm WARN server@0.0.1 No repository field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.0.7 (node_modules\@nestjs\graphql\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.0.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ mongoose@5.6.0
+ @nestjs/mongoose@6.1.2
added 19 packages from 12 contributors and audited 22997 packages in 23.456s
found 62 low severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details
```

- We also need to install the `@types/mongoose` for the dev environment

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt/server (master)
$ npm i --save-dev @types/mongoose
npm WARN ts-jest@24.0.2 requires a peer of jest@>=24 <25 but none is installed. You must install peer dependencies yourself.
npm WARN server@0.0.1 No repository field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.0.7 (node_modules\@nestjs\graphql\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.0.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ @types/mongoose@5.5.6
added 3 packages from 47 contributors and audited 23006 packages in 16.131s
found 62 low severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details
```

- We are going to have the URI connection in a `.dev` document that `dotenv` will use.

> .dev

```
MONGO_URI=mongodb+srv://USERNAME:PASSWORD@CLUSTERID.mongodb.net/DATABASENAME?retryWrites=true&w=majority
```

- We are going to create the `src/config` folder with the `config.module.ts` and `config.service.ts` documents. It will be used to manage our `config` variables.

> src/config/config.service.ts

```ts
import * as dotenv from "dotenv";
import * as fs from "fs";

export class ConfigService {
  MONGODB_URI: string;
  private readonly envConfig: { [key: string]: string };

  constructor() {
    if (
      process.env.NODE_ENV === "production" ||
      process.env.NODE_ENV === "staging"
    ) {
      this.envConfig = {
        MONGO_URI: process.env.MONGO_URI
      };
    } else {
      this.envConfig = dotenv.parse(fs.readFileSync(".env"));
    }
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
```

> src/config/config.module.ts

```ts
import { Module } from "@nestjs/common";
import { ConfigService } from "./config.service";

@Module({
  providers: [ConfigService],
  exports: [ConfigService]
})
export class ConfigModule {}
```

- We are going to create the `src/database` folder with the `database.providers.ts` and `database.module.ts` documents that are going to be used to set up `MongoDb`

> src/config/database.providers.ts

```ts
import { ConfigModule } from "../config/config.module";
import { ConfigService } from "../config/config.service";
import { MongooseModule } from "@nestjs/mongoose";

export const databaseProviders = [
  MongooseModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (config: ConfigService) => ({
      uri: config.get("MONGO_URI"),
      useNewUrlParser: true
    })
  })
];
```

> src/config/database.module.ts

```ts
import { Module } from "@nestjs/common";
import { databaseProviders } from "./database.providers";

@Module({
  imports: [...databaseProviders],
  exports: [...databaseProviders]
})
export class DatabaseModule {}
```

- We also need to modify the `app.module.ts` document to import the `DatabaseModule`.

> app.module.ts

```ts
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DatabaseModule } from "./database/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
```

- We can test if everything is working without issues.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt/server (master)
$ npm run start:dev

> server@0.0.1 start:dev C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide-nuxt\server
> concurrently --handle-input "wait-on dist/main.js && nodemon" "tsc -w -p tsconfig.build.json"

[1]

[1]
6:40:04 PM - Starting compilation in watch mode...
[1]
[0] [nodemon] 1.19.1
[0] [nodemon] to restart at any time, enter `rs`
[0] [nodemon] watching: C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide-nuxt\server\dist/**/*
[0] [nodemon] starting `node dist/main`
[0] [nodemon] restarting due to changes...
[1]
[1] 6:40:09 PM - Found 0 errors. Watching for file changes.
[0] [nodemon] restarting due to changes...
[0] [nodemon] starting `node dist/main`
[0] [Nest] 15368   - 06/20/2019, 6:40 PM   [NestFactory] Starting Nest application...
[0] [Nest] 15368   - 06/20/2019, 6:40 PM   [InstanceLoader] DatabaseModule dependencies initialized +49ms
[0] [Nest] 15368   - 06/20/2019, 6:40 PM   [InstanceLoader] MongooseModule dependencies initialized +2ms
[0] [Nest] 15368   - 06/20/2019, 6:40 PM   [InstanceLoader] ConfigModule dependencies initialized +2ms
[0] [Nest] 15368   - 06/20/2019, 6:40 PM   [InstanceLoader] AppModule dependencies initialized +12ms
[0] [Nest] 15368   - 06/20/2019, 6:40 PM   [InstanceLoader] MongooseCoreModule dependencies initialized +866ms
[0] [Nest] 15368   - 06/20/2019, 6:40 PM   [RoutesResolver] AppController {/}: +7ms
[0] [Nest] 15368   - 06/20/2019, 6:40 PM   [RouterExplorer] Mapped {/, GET} route +3ms
[0] [Nest] 15368   - 06/20/2019, 6:40 PM   [NestApplication] Nest application successfully started +3ms
```

### IV.-Setting up `GraphQL` with `Apollo Server`

- As we can see on [NestJs GraphQL Quick Start](https://docs.nestjs.com/graphql/quick-start) we need to install the `@nestjs/graphql`, `apollo-server-express`, `graphql-tools` and `graphql` packages.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt/server (master)
$ npm i --save @nestjs/graphql apollo-server-express graphql-tools graphql

> core-js@3.1.4 postinstall C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide-nuxt\server\node_modules\apollo-env\node_modules\core-js
> node scripts/postinstall || echo "ignore"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js
> https://www.patreon.com/zloirock

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> protobufjs@6.8.8 postinstall C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide-nuxt\server\node_modules\protobufjs
> node scripts/postinstall


> type-graphql@0.17.4 postinstall C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide-nuxt\server\node_modules\type-graphql
> node ./dist/postinstall || exit 0

npm WARN ts-jest@24.0.2 requires a peer of jest@>=24 <25 but none is installed. You must install peer dependencies yourself.
npm WARN server@0.0.1 No repository field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.0.7 (node_modules\@nestjs\graphql\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.0.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ graphql@14.3.1
+ graphql-tools@4.0.4
+ apollo-server-express@2.6.3
+ @nestjs/graphql@6.2.4
added 150 packages from 149 contributors and audited 22927 packages in 36.49s
found 62 low severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details
```

- We are going to apply [Code First](https://docs.nestjs.com/graphql/quick-start#code-first) approach for managing `GraphQL` with `NestJS`

- We need to install the `type-graphql` package

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt/server (master)
$ npm i type-graphql

> type-graphql@0.17.4 postinstall C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide-nuxt\server\node_modules\type-graphql
> node ./dist/postinstall || exit 0

npm WARN ts-jest@24.0.2 requires a peer of jest@>=24 <25 but none is installed. You must install peer dependencies yourself.
npm WARN server@0.0.1 No repository field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.0.7 (node_modules\@nestjs\graphql\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.0.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ type-graphql@0.17.4
updated 1 package and audited 22957 packages in 15.604s
found 62 low severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details
```

- We need to modify `src\app.module.ts` document to register `GraphQLModule` and to add `autoSchemaFile` property to the options object. As we have chosen the `Code First` approach, the `GraphQL` schema is going to be generated automatically by `NestJS`. `schema.gpl` is the name of the schema file that is going to be created.

- We are going to get rid of the `app.controller.ts` document as we are not going to use controllers but `GrahpQL`.

> src\app.service.ts

```ts
import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {}
```

> src\app.module.ts

```ts
import { Module } from "@nestjs/common";
import { AppService } from "./app.service";
import { DatabaseModule } from "./database/database.module";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
  imports: [
    DatabaseModule,
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.gql"
    })
  ],
  providers: [AppService]
})
export class AppModule {}
```

### VII.Create the `User` model.

- `database schema`: This is an organization of data as a blueprint for defining the structure and the types of data that the database needs to store.

- `data transfer object`: This is an object that defines how data will be sent over the network and carries the data between processes.

- `interfaces: TypeScript interfaces are used for type-checking`. It can be used to define the types of data that should be passed for an application.

#### 1.Use the `nestjs-typegoose` package to avoid having to create a schema and an interface

- We need to install the [typegoose](https://github.com/szokodiakos/typegoose#motivation) and the [nestjs-typegoose](https://github.com/kpfromer/nestjs-typegoose) packages.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt/server (master)
$ npm i typegoose  nestjs-typegoose
npm WARN ts-jest@24.0.2 requires a peer of jest@>=24 <25 but none is installed. You must install peer dependencies yourself.
npm WARN server@0.0.1 No repository field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.0.7 (node_modules\@nestjs\graphql\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.0.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ nestjs-typegoose@5.2.1
+ typegoose@5.7.2
added 3 packages from 3 contributors and audited 23011 packages in 26.646s
found 62 low severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details
```

#### 2.Create the `model` folder and the `model` documents.

- Create the `users` folder and inside it the `model` folder. In this folder we are going to put the documents related to the database `users` colection. The `user.model.ts` document must be created with the definition of the `User` model.

> src/users/model/users.model.ts

```ts
import * as mongoose from "mongoose";
import { prop, Typegoose } from "typegoose";
import { IsString, IsDate, IsArray } from "class-validator";

export class User extends Typegoose {
  @IsString()
  @prop({ required: true, unique: true, trim: true })
  username: string;

  @IsString()
  @prop({ required: true, trim: true })
  email: string;

  @IsString()
  @prop({ required: true, trim: true })
  password: string;

  @IsString()
  avatar?: string;

  @IsDate()
  @prop({ default: Date.now })
  joinDate: Date;

  @IsArray()
  @prop({ required: true, ref: "Post" })
  favorites: [mongoose.Schema.Types.ObjectId];
}
```

- We are going to create the `dtos` folder where we are going to put the `Data Transfer Objects` used to send data to the collections. We are going to create the `create-user.dto.ts` document that will be used to create a new `user`.

> src/users/model/dto/create-user.dto.ts

```ts
export class CreateUserDto {
  readonly username: string;
  readonly email: string;
  readonly password: string;
}
```

#### 3.Create the `grahpql` folder with the `graphql` documents

- We need to create `graphql` folder with the `inputs` and `types` subfolders.

- We need to create the `users.resolver.ts` with the `GraphQL resolver` for the user.

> src/users/graphql/users.resolver.ts

```ts
import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { UsersService } from "../users.service";
import { UserInput } from "./inputs/user.input";
import { User } from "./types/user.type";

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User])
  async getUsers() {
    return await this.usersService.getUsers();
  }

  @Mutation(() => User)
  async signupUserWithInput(@Args("input") input: UserInput) {
    return await this.usersService.signupUserWithInput(input);
  }
  @Mutation(() => User)
  async signupUser(
    @Args("username") username: string,
    @Args("email") email: string,
    @Args("password") password: string
  ) {
    return await this.usersService.signupUser({ username, email, password });
  }
}
```

- The `inputs` subfolder will contain the classes used to define the `graphQL` inputs used by `Queries` and `Mutations`. We are going to create the `user.input.ts` document that will be used to create a new user when they sign up.

> users//inputs/user.input.ts

```ts
import { InputType, Field, Int } from "type-graphql";

@InputType()
export class UserInput {
  @Field()
  readonly username: string;
  @Field()
  readonly email: string;
  @Field()
  readonly password: string;
}
```

- The `types` subfolder will containt the classes used to define the types returned by the `graphQL Queries and Mutations`. We are going to create the `user.type.ts` document that will be used to return the data from the `User` collection.

> users//types/user.type.ts

```ts
import { Field, ObjectType, ID } from "type-graphql";

@ObjectType()
export class User {
  @Field(() => ID)
  readonly _id: string;
  @Field()
  readonly username: string;
  @Field()
  readonly email: string;
  @Field()
  readonly password: string;
  @Field({ nullable: true })
  readonly avatar: string;
  @Field()
  readonly joinDate: Date;
  @Field(() => [ID], { nullable: true })
  readonly favorites: [string];
}
```

#### 4.Create the `users service`

- We are going to use the `NestJs CLI` to create the `users` service.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt/server (master)
$ nest generate service users
CREATE /src/users/users.service.spec.ts (453 bytes)
CREATE /src/users/users.service.ts (89 bytes)
UPDATE /src/users/users.module.ts (159 bytes)
```

> src/users/users.service.ts

```ts
import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {}
```

> src/users/users.service.spec.ts

```ts
import { Test, TestingModule } from "@nestjs/testing";
import { UsersService } from "./users.service";

describe("UsersService", () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService]
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
```

> src/users/users.module.ts

```ts
import { Module } from "@nestjs/common";

@Module()
export class UsersModule {}
```

- We need to modify the new service to define the methods used to manage the access to the `users` collection.

> src/users/users.service.ts

```ts
import { Injectable } from "@nestjs/common";
import { InjectModel } from "nestjs-typegoose";
import { User } from "./model/user.model";
import { CreateUserDto } from "./model/dtos/create-user.dto";
import { ModelType } from "typegoose";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private readonly userModel: ModelType<User>) {}

  async getUsers(): Promise<User[] | null> {
    return await this.userModel.find().exec();
  }

  async signupUserWithInput(createUserDto: CreateUserDto): Promise<User> {
    const username = createUserDto.username;
    const user = await this.userModel.findOne({ username });
    if (user) {
      throw new Error("User already exists");
    }
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async signupUser({ username, email, password }): Promise<User> {
    const user = await this.userModel.findOne({ username });
    if (user) {
      throw new Error("User already exists");
    }
    const createdUser = new this.userModel({ username, email, password });
    return await createdUser.save();
  }
}
```

#### 5.Create the `users module`

- We are going to use the `NestJs CLI` to create the `users` module.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt/server (master)
$ nest generate module users
CREATE /src/users/users.module.ts (82 bytes)
UPDATE /src/app.module.ts (438 bytes)
```

> src/users/users.module.ts

```ts
import { Module } from "@nestjs/common";

@Module()
export class UsersModule {}
```

- We need to modify the `module` created to define the imports and provides used for `Users`

> src/users/users.module.ts

```ts
import { Module } from "@nestjs/common";
import { TypegooseModule } from "nestjs-typegoose";
import { User } from "./model/user.model";
import { UsersService } from "./users.service";
import { UsersResolver } from "./graphql/users.resolver";

@Module({
  imports: [TypegooseModule.forFeature([User])],
  providers: [UsersService, UsersResolver]
})
export class UsersModule {}
```

#### 6.-Modify the `app.module.ts`

- We need to modify the `app.module.ts` to include the `UsersModule` and the `GraphQLModule`.

> src/app.module.ts

```ts
import { Module } from "@nestjs/common";
import { AppService } from "./app.service";
import { DatabaseModule } from "./database/database.module";
import { GraphQLModule } from "@nestjs/graphql";
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,cd ..
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.gql"
    }),
  ],
  providers: [AppService]
})
export class AppModule { }
```

#### 7.-Examples

> request

```graphql
{
  getUsers {
    _id
    username
    email
    password
    avatar
    joinDate
    favorites
  }
}
```

> response

```json
{
  "data": {
    "getUsers": [
      {
        "_id": "5d04cf30deb8673e8c38fc2d",
        "username": "John",
        "email": "john@gmail.com",
        "password": "Password",
        "avatar": null,
        "joinDate": "2019-06-15T10:57:52.586Z",
        "favorites": null
      },
      {
        "_id": "5d0da3d023e0c02b9c90ef2a",
        "username": "Paul",
        "email": "paul@gmail.com",
        "password": "Password",
        "avatar": null,
        "joinDate": "2019-06-22T03:43:12.472Z",
        "favorites": null
      },
      {
        "_id": "5d0da5312ce4d742386276af",
        "username": "Sarah",
        "email": "sarah@gmail.com",
        "password": "Password",
        "avatar": null,
        "joinDate": "2019-06-22T03:49:05.357Z",
        "favorites": null
      },
      {
        "_id": "5d0da82b9b5def3308ad242a",
        "username": "Mary",
        "email": "mary@gmail.com",
        "password": "Password",
        "avatar": null,
        "joinDate": "2019-06-22T04:01:47.521Z",
        "favorites": null
      },
      {
        "_id": "5d0e10127dd57444d060778e",
        "username": "Jess",
        "email": "jess@gmail.com",
        "password": "Password",
        "avatar": null,
        "joinDate": "2019-06-22T11:25:06.222Z",
        "favorites": null
      },
      {
        "_id": "5d0e10297dd57444d060778f",
        "username": "Juan",
        "email": "juan@gmail.com",
        "password": "Password",
        "avatar": null,
        "joinDate": "2019-06-22T11:25:29.692Z",
        "favorites": null
      }
    ]
  }
}
```

> request

```graphql
mutation {
  signupUser(username: "Juan", email: "juan@gmail.com", password: "Password") {
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
      "_id": "5d0e10297dd57444d060778f",
      "username": "Juan",
      "email": "juan@gmail.com",
      "avatar": null,
      "password": "Password",
      "joinDate": "2019-06-22T11:25:29.692Z"
    }
  }
}
```

> request

```graphql
mutation {
  signupUserWithInput(
    input: { username: "Jess", email: "jess@gmail.com", password: "Password" }
  ) {
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
    "signupUserWithInput": {
      "_id": "5d0e10127dd57444d060778e",
      "username": "Jess",
      "email": "jess@gmail.com",
      "avatar": null,
      "password": "Password",
      "joinDate": "2019-06-22T11:25:06.222Z"
    }
  }
}
```

### VI.-Create the `Post` model.

#### 1.-Create the `posts` folder with a `module` and a `service.

- We need to create the `usr/posts` folder and use the `NestJs CLI` to create the `module` and the `service`

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt/server (master)
$ nest generate module posts
CREATE /src/posts/posts.module.ts (82 bytes)
UPDATE /src/app.module.ts (576 bytes)
```

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt/server (master)
$ nest generate service posts
CREATE /src/posts/posts.service.spec.ts (453 bytes)
CREATE /src/posts/posts.service.ts (89 bytes)
UPDATE /src/posts/posts.module.ts (507 bytes)
```

- The `src/app.module.ts` document is updated automatically

```bash
import { Module } from "@nestjs/common";
import { AppService } from "./app.service";
import { DatabaseModule } from "./database/database.module";
import { GraphQLModule } from "@nestjs/graphql";
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    DatabaseModule,
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.gql"
    }),
    UsersModule,
    PostsModule,
  ],
  providers: [AppService]
})
export class AppModule { }
```

#### 2.-Create the `model` folder and the `model` documents.

- We need to create the `src/posts/model` and `src/posts/model/dtos` folders and the `post.model.ts` and `create-post.dto.ts` documents.

> src/posts/model/post.model.ts

```ts
import * as mongoose from "mongoose";
import { prop, Typegoose } from 'typegoose';
import { IsString, IsDate, IsArray, IsInt } from 'class-validator';
import { User } from '../../users/model/user.model'

class Message {
  @IsString()
  @prop({ required: true })
  messageBody: string;

  @IsDate()
  @prop({ default: Date.now })
  messageDate: Date;

  @IsString()
  @prop({ required: true, ref: User })
  messageUser: mongoose.Schema.Types.ObjectId
}

export class Post extends Typegoose {
  @IsString()
  @prop({ required: true })
  title: string; 

  @IsString()
  @prop({ required: true })
  imageUrl: string;

  @IsString()
  @prop({ required: true })
  categories: string[];

  @IsString()
  @prop({ required: true })
  description: string;

  @IsDate()
  @prop({ default: Date.now })
  createdDate: Date

  @IsInt()
  @prop({ default: 0 })
  likes: number;

  @IsString()
  @prop({ required: true, ref: User })
  createdBy: mongoose.Schema.Types.ObjectId

  @IsArray()
  @prop({ ref: Message })
  messages: [Message]
}

```

> src/posts/model/dtos/create-post.dto.ts

```ts
export class CreatePostDto {
  readonly title: string;
  readonly imageUrl: string;
  readonly categories: string[];
  readonly description: string;
  readonly createdBy: string;
}
```

#### 3.-Create the `grahpql` folder with the `graphql` documents.

- We need to create the `src/posts/graphql`, `src/posts/graphql/inputs` and `src/posts/graphql/types` folders and the `users.resolver.ts`, `post.input.ts` and `post.type.ts` documents.

> src/posts/graphql/post.resolver.ts

```ts
import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { PostsService } from "../posts.service";
import { PostInput } from "./inputs/post.input";
import { Post } from "./types/post.type";

@Resolver()
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query(() => [Post])
  async getPosts() {
    return await this.postsService.getPosts();
  }

  @Mutation(() => Post)
  async addPostWithInput(@Args("input") input: PostInput) {
    const createdBy = input.creatorId;
    const { title, imageUrl, categories, description } = input;
    return await this.postsService.addPost({
      title,
      imageUrl,
      categories,
      description,
      createdBy
    });
  }
  @Mutation(() => Post)
  async addPost(
    @Args("title") title: string,
    @Args("imageUrl") imageUrl: string,
    @Args({ name: "categories", type: () => [String] }) categories: [string],
    @Args("description") description: string,
    @Args("creatorId") creatorId: string
  ) {
    const createdBy = creatorId;
    return await this.postsService.addPost({
      title,
      imageUrl,
      categories,
      description,
      createdBy
    });
  }
}
```

> src/posts/graphql/inputs/post.input.ts

```ts
import { InputType, Field, ID } from 'type-graphql';

@InputType()
export class PostInput {
  @Field()
  readonly title: string;
  @Field()
  readonly imageUrl: string;
  @Field(() => [String], { nullable: "items" })
  readonly categories: string[];
  @Field()
  readonly description: string;
  @Field(() => ID)
  readonly creatorId: string;

}
```

> src/posts/graphql/inputs/post.type.ts

```ts
import { Field, ObjectType, ID, Int } from 'type-graphql';
import { User } from '../../../users/graphql/types/user.type'

@ObjectType()
class Message {
  @Field(() => ID)
  readonly _id: string  
  @Field()
  readonly messageBody: string;
  @Field()
  readonly messageDate: Date;
  @Field()
  readonly messageUser: string;
}

@ObjectType()
export class Post {
  @Field(() => ID)
  readonly _id: string
  @Field()
  readonly title: string;
  @Field()
  readonly imageUrl: string;
  @Field(() => [String], { nullable: "items" })
  readonly categories: string[];
  @Field()
  readonly description: string;
  @Field()
  readonly createdDate: Date
  @Field(() => Int, { nullable: true })
  likes: number;
  @Field(() => User)
  readonly createdBy: User
  @Field(() => [Message], { nullable: true })
  readonly messages: [Message]
}

```

#### 4.-Modify the `module` and `service` documents.

- We need to modify the `module` created to define the imports and provides used for `posts`

> src/users/posts.module.ts

```ts
import { Module } from "@nestjs/common";
import { TypegooseModule } from "nestjs-typegoose";
import { Post } from "./model/post.model";
import { PostsService } from "./posts.service";
import { PostsResolver } from "./graphql/posts.resolver";

@Module({
  imports: [TypegooseModule.forFeature([Post])],
  providers: [PostsService, PostsResolver]
})
export class PostsModule {}
```

- We need to modify the `service` to define the methods used to manage the access to the `posts` collection.

> src/users/posts.service.ts

```ts
import { Injectable } from "@nestjs/common";
import { InjectModel } from "nestjs-typegoose";
import { Post } from "./model/post.model";
import { CreatePostDto } from "./model/dtos/create-post.dto";
import { ModelType } from "typegoose";

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post) private readonly postModel: ModelType<Post>) {}

  async getPosts(): Promise<Post[] | null> {
    const posts = await this.postModel
      .find({})
      .sort({ createdDate: "desc" })
      .populate({
        path: "createdBy",
        model: "User"
      });
    return posts;
  }

  async addPost(createPostDto: CreatePostDto): Promise<Post> {
    const newPost = new this.postModel(createPostDto);
    return await newPost.save();
  }
}
```

#### 5.-Examples

> request

```graphql
{
  getPosts {
    _id
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
        "_id": "5d0e0fdc7dd57444d060778d",
        "title": "Credenza",
        "imageUrl": "https://images.crateandbarrel.com/is/image/Crate/ClybournIICredenza3QF16/?$web_zoom_furn_av$&180802085137&wid=1008&hei=567",
        "categories": ["Furniture"],
        "description": "A piece of furniture I want to buy",
        "createdDate": "2019-06-22T11:24:12.972Z",
        "likes": 0,
        "createdBy": {
          "_id": "5d0da3d023e0c02b9c90ef2a",
          "username": "Paul",
          "email": "paul@gmail.com",
          "avatar": null,
          "password": "Password",
          "joinDate": "2019-06-22T03:43:12.472Z"
        }
      },
      {
        "_id": "5d04d377deb8673e8c38fc2f",
        "title": "Mona lisa",
        "imageUrl": "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.readingpublicmuseum.org%2Fexhibit_secrets-of-mona-lisa-4.jpg&f=1",
        "categories": ["Art"],
        "description": "A painting",
        "createdDate": "2019-06-15T11:16:07.195Z",
        "likes": 0,
        "createdBy": {
          "_id": "5d04cf30deb8673e8c38fc2d",
          "username": "John",
          "email": "john@gmail.com",
          "avatar": null,
          "password": "Password",
          "joinDate": "2019-06-15T10:57:52.586Z"
        }
      }
    ]
  }
}
```

> request

```graphql
mutation {
  addPost(
    title: "Credenza"
    imageUrl: "https://images.crateandbarrel.com/is/image/Crate/ClybournIICredenza3QF16/?$web_zoom_furn_av$&180802085137&wid=1008&hei=567"
    categories: ["Furniture"]
    description: "A piece of furniture I want to buy"
    creatorId: "5d0da3d023e0c02b9c90ef2a"
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
      "title": "Credenza",
      "imageUrl": "https://images.crateandbarrel.com/is/image/Crate/ClybournIICredenza3QF16/?$web_zoom_furn_av$&180802085137&wid=1008&hei=567",
      "categories": ["Furniture"],
      "description": "A piece of furniture I want to buy",
      "createdDate": "2019-06-22T11:24:12.972Z",
      "likes": 0
    }
  }
}
```

> request

```graphql
mutation {
  addPostWithInput(
    input: {
      title: "Tasty coffee"
      imageUrl: "https://images.pexels.com/photos/374757/pexels-photo-374757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      categories: ["Art", "Food"]
      description: "Some nice coffee artwork"
      creatorId: "5d0da3d023e0c02b9c90ef2a"
    }
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
    "addPostWithInput": {
      "title": "Tasty coffee",
      "imageUrl": "https://images.pexels.com/photos/374757/pexels-photo-374757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "categories": ["Art", "Food"],
      "description": "Some nice coffee artwork",
      "createdDate": "2019-06-22T11:27:58.416Z",
      "likes": 0
    }
  }
}
```

## Section 5: Create Vue Frontend with NuxtJs

### I.Create the `NuxtJs` app using the `create-nuxt-app` CLI

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt (master)
$ npx create-nuxt-app client
npx: installed 379 in 37.171s
> Generating Nuxt.js project in C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide-nuxt\client
? Project name client
? Project description Frontend for the Nuxt version of [Full-Stack Vue with GraphQL - The Ultimate Guide
? Use a custom server framework none
? Choose features to install Progressive Web App (PWA) Support, Linter / Formatter, Prettier
? Use a custom UI framework vuetify
? Use a custom test framework jest
? Choose rendering mode Universal
? Author name Juan Pablo Perez
? Choose a package manager npm
\ Installing packages with npm
```

```
 Choose a package manager npm

> core-js@2.6.9 postinstall C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide-nuxt\client\node_modules\core-js
> node scripts/postinstall || echo "ignore"

> core-js@2.6.9 postinstall C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide-nuxt\client\node_modules\core-js
> node scripts/postinstall || echo "ignore"


> core-js@2.6.9 postinstall C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide-nuxt\client\node_modules\core-js
> node scripts/postinstall || echo "ignore"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js
> https://www.patreon.com/zloirock

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> core-js-pure@3.1.4 postinstall C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide-nuxt\client\node_modules\core-js-pure
> node scripts/postinstall || echo "ignore"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js
> https://www.patreon.com/zloirock

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)

> core-js@2.6.9 postinstall C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide-nuxt\client\node_modules\core-js
> node scripts/postinstall || echo "ignore"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js
> https://www.patreon.com/zloirock

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> core-js-pure@3.1.4 postinstall C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide-nuxt\client\node_modules\core-js-pure
> node scripts/postinstall || echo "ignore"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js
> https://www.patreon.com/zloirock

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> nodemon@1.19.1 postinstall C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide-nuxt\client\node_modules\nodemon
> node bin/postinstall || exit 0

npm

> core-js@2.6.9 postinstall C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide-nuxt\client\node_modules\core-js
> node scripts/postinstall || echo "ignore"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js
> https://www.patreon.com/zloirock

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> core-js-pure@3.1.4 postinstall C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide-nuxt\client\node_modules\core-js-pure
> node scripts/postinstall || echo "ignore"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js
> https://www.patreon.com/zloirock

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> nodemon@1.19.1 postinstall C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide-nuxt\client\node_modules\nodemon
> node bin/postinstall || exit 0


> core-js@2.6.9 postinstall C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide-nuxt\client\node_modules\core-js
> node scripts/postinstall || echo "ignore"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js
> https://www.patreon.com/zloirock

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> core-js-pure@3.1.4 postinstall C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide-nuxt\client\node_modules\core-js-pure
> node scripts/postinstall || echo "ignore"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js
> https://www.patreon.com/zloirock

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> nodemon@1.19.1 postinstall C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide-nuxt\client\node_modules\nodemon
> node bin/postinstall || exit 0

Love nodemon? You can now support the project via the open collective:
  > https://opencollective.com/nodemon/donate

npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN @nuxtjs/vuetify@0.5.5 requires a peer of vuetify-loader@^1.2.1 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\watchpack\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\nodemon\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\jest-haste-map\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.0.7 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.0.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})



> core-js@2.6.9 postinstall C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide-nuxt\client\node_modules\core-js
> node scripts/postinstall || echo "ignore"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js
> https://www.patreon.com/zloirock

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> core-js-pure@3.1.4 postinstall C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide-nuxt\client\node_modules\core-js-pure
> node scripts/postinstall || echo "ignore"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js
> https://www.patreon.com/zloirock

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> nodemon@1.19.1 postinstall C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide-nuxt\client\node_modules\nodemon
> node bin/postinstall || exit 0

Love nodemon? You can now support the project via the open collective:
  > https://opencollective.com/nodemon/donate


> client@1.0.0 lint C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide-nuxt\client
> eslint --ext .js,.vue --ignore-path .gitignore . "--fix"


  To get started:

        cd client
        npm run dev

  To build & start for production:

        cd client
        npm run build
        npm start

  To test:

        cd client
        npm run test
```

- Run de app to check if it works properly

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt/client (master)
$ npm run dev

> client@1.0.0 dev C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide-nuxt\client
> nuxt


   ╭─────────────────────────────────────────────╮
   │                                             │
   │   Nuxt.js v2.8.1                            │
   │   Running in development mode (universal)   │
   │                                             │
   │   Listening on: http://localhost:3000/      │
   │                                             │
   ╰─────────────────────────────────────────────╯

i Preparing project for development                                                                                                                                                             16:34:20
i Initial build may take a while                                                                                                                                                                16:34:20
√ Builder initialized                                                                                                                                                                           16:34:21
√ Nuxt files generated                                                                                                                                                                          16:34:21

√ Client
  Compiled successfully in 14.51s

√ Server
  Compiled successfully in 11.43s


 ERROR  (node:13864) DeprecationWarning: Tapable.plugin is deprecated. Use new API on .hooks instead                                                                                            16:34:25

i Waiting for file changes                                                                                                                                                                      16:34:40
i Memory usage: 235 MB (RSS: 337 MB)
```

- Browse to http://localhost:3000/

![](CreateTheNuxtJsAppUsingTheCreateNuxtAppCli.png)

![](CreateTheNuxtJsAppUsingTheCreateNuxtAppCli2.png)

### II.Create a script to run server and client at the same time

- We are going to run server and client at the same time by using the [concurrently](https://www.npmjs.com/package/concurrently) package.

- We need to create a new empty `package.json` file with `npm init -y` at the main folder.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt (master)
$ npm init -y
Wrote to C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide-nuxt\package.json:

{
  "name": "full-stack-vue-with-graphql-the-ultimate-guide-nuxt",
  "version": "1.0.0",
  "description": "Source code for the NestJs and Nuxt version of the 'Full-Stack Vue with GraphQL - The Ultimate Guide' Udemy course.",  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/peelmicro/full-stack-vue-with-graphql-the-ultimate-guide-nuxt.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/peelmicro/full-stack-vue-with-graphql-the-ultimate-guide-nuxt/issues"
  },
  "homepage": "https://github.com/peelmicro/full-stack-vue-with-graphql-the-ultimate-guide-nuxt#readme"
}

```

- We need to install the `concurrently` package.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt (master)
$ npm i --save-dev concurrently
npm notice created a lockfile as package-lock.json. You should commit this file.
+ concurrently@4.1.0
added 86 packages from 48 contributors and audited 103 packages in 21.691s
found 0 vulnerabilities
```

- Change the `server/src/main.ts` to run the server on port `4000`
  > server/src/main.ts

```bash
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 4000);
}
bootstrap();
```

- Modify the `package.json` document to create the scripts needed to run the `server` and the `client` at the same time

> package.json
```json
{
  "name": "full-stack-vue-with-graphql-the-ultimate-guide-nuxt",
  "version": "1.0.0",
  "description": "Source code for the NestJs and Nuxt version of the 'Full-Stack Vue with GraphQL - The Ultimate Guide' Udemy course.",
  "main": "index.js",
  "scripts": {
    "server": "cd server && npm run start:dev",
    "client": "cd client && npm run dev",
    "dev": "concurrently --names \"server,client\" \"npm run server --silent\" \"npm run client --silent\""
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/peelmicro/full-stack-vue-with-graphql-the-ultimate-guide-nuxt.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/peelmicro/full-stack-vue-with-graphql-the-ultimate-guide-nuxt/issues"
  },
  "homepage": "https://github.com/peelmicro/full-stack-vue-with-graphql-the-ultimate-guide-nuxt#readme",
  "devDependencies": {
    "concurrently": "^4.1.0"
  }
}

```

- Execute the `npm run dev` script.
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt (master)
$ npm run dev

> full-stack-vue-with-graphql-the-ultimate-guide-nuxt@1.0.0 dev C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide-nuxt
> concurrently --names "server,client" "npm run server --silent" "npm run client --silent"


5:16:48 PM - Starting compilation in watch mode...
[server] [1]
[server] [0] [nodemon] 1.19.1
[server] [0] [nodemon] to restart at any time, enter `rs`
[server] [0] [nodemon] watching: C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide-nuxt\server\dist/**/*
[server] [0] [nodemon] starting `node dist/main`
[client] i Listening on: http://localhost:3000/
[client] i Preparing project for development
[client] i Initial build may take a while
[server] [0] [Nest] 17600   - 06/22/2019, 5:17 PM   [NestFactory] Starting Nest application...
[server] [0] [Nest] 17600   - 06/22/2019, 5:17 PM   [InstanceLoader] AppModule dependencies initialized +97ms
[server] [0] [Nest] 17600   - 06/22/2019, 5:17 PM   [InstanceLoader] DatabaseModule dependencies initialized +2ms
[server] [0] [Nest] 17600   - 06/22/2019, 5:17 PM   [InstanceLoader] TypegooseModule dependencies initialized +1ms
[server] [0] [Nest] 17600   - 06/22/2019, 5:17 PM   [InstanceLoader] ConfigModule dependencies initialized +2ms
[server] [0] [Nest] 17600   - 06/22/2019, 5:17 PM   [InstanceLoader] GraphQLModule dependencies initialized +24ms
[server] [1] node_modules/apollo-server-express/dist/ApolloServer.d.ts(1,8): error TS1192: Module '"C:/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt/server/node_modules/@types/express/index"' has no default export.
[server] [1] node_modules/apollo-server-express/dist/ApolloServer.d.ts(2,8): error TS1192: Module '"C:/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt/server/node_modules/@types/cors/index"' has no default export.
[server] [1]
[server] [1] 5:17:13 PM - Found 2 errors. Watching for file changes.
[server] [0] [Nest] 17600   - 06/22/2019, 5:17 PM   [InstanceLoader] TypegooseCoreModule dependencies initialized +1552ms
[server] [0] [Nest] 17600   - 06/22/2019, 5:17 PM   [InstanceLoader] TypegooseModule dependencies initialized +2ms
[server] [0] [Nest] 17600   - 06/22/2019, 5:17 PM   [InstanceLoader] TypegooseModule dependencies initialized +2ms
[server] [0] [Nest] 17600   - 06/22/2019, 5:17 PM   [InstanceLoader] UsersModule dependencies initialized +3ms
[server] [0] [Nest] 17600   - 06/22/2019, 5:17 PM   [InstanceLoader] PostsModule dependencies initialized +2ms
[server] [0] [Nest] 17600   - 06/22/2019, 5:17 PM   [NestApplication] Nest application successfully started +641ms
[client] √ Builder initialized
[client] √ Nuxt files generated
[client] i Compiling Client
[client] i Compiling Server


```

- Browse to http://localhost:3000/ to see the client

![](CreateAScriptToRunServerAndClientAtTheSameTime.png)

- Browse to http://localhost:4000/graphql to see the server `graphql`

![](CreateAScriptToRunServerAndClientAtTheSameTime2.png)

### III.-Set up the `Vuetify` Theme

- Modify the `nuxt.config.js` document to change the `vuetify.theme` to use the same colours as the ones from the 'original` Vue app.

> /client/nuxt.config.js

```json
// import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/vuetify', '@nuxtjs/pwa', '@nuxtjs/eslint-module'],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    theme: {
      // primary: colors.blue.darken2,
      // accent: colors.grey.darken3,
      // secondary: colors.amber.darken3,
      // info: colors.teal.lighten1,
      // warning: colors.amber.base,
      // error: colors.deepOrange.accent4,
      // success: colors.green.accent3
      primary: '#3B125F',
      secondary: '#8B5FBF',
      accent: '#BF653F',
      error: '#722530',
      warning: '#A37513',
      info: '#396893',
      success: '#4caf50'
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}

```

![](SetUpTheVuetifyTheme.png)

### IV.-Create the `Pages` (and remove the test code)

- Modify the `client/layouts/default.vue` document to create the layout based on the original `App.vue` document.

> client/layouts/default.vue

```html
<template>
  <v-app style="background: #E3E3EE">
    <!-- Side Navbar -->
    <v-navigation-drawer v-model="sideNav" fixed app temporary>
      <v-toolbar color="accent" dark flat>
        <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
        <nuxt-link to="/" tag="span" style="cursor: pointer">
          <h1 class="title pl-3">VueShare</h1>
        </nuxt-link>
      </v-toolbar>

      <v-divider></v-divider>

      <!-- Side Navbar Links -->
      <v-list>
        <v-list-tile
          v-for="(item, i) in sideNavItems"
          :key="i"
          :to="item.link"
          ripple
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{ item.title }}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- Horizontal Navbar -->
    <v-toolbar fixed color="primary" dark>
      <!-- App Title -->
      <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-xs-only">
        <nuxt-link to="/" tag="span" style="cursor: pointer">
          VueShare
        </nuxt-link>
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
          v-for="(item, i) in horizontalNavItems"
          :key="i"
          :to="item.link"
          flat
        >
          <v-icon class="hidden-sm-only" left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      sideNav: false
    }
  },
  computed: {
    horizontalNavItems() {
      return [
        { icon: 'chat', title: 'Posts', link: '/posts' },
        { icon: 'lock_open', title: 'Sign In', link: '/signin' },
        { icon: 'create', title: 'Sign Up', link: '/signup' }
      ]
    },
    sideNavItems() {
      return [
        { icon: 'chat', title: 'Posts', link: '/posts' },
        { icon: 'lock_open', title: 'Sign In', link: '/signin' },
        { icon: 'create', title: 'Sign Up', link: '/signup' }
      ]
    }
  },
  methods: {
    toggleSideNav() {
      this.sideNav = !this.sideNav
    }
  }
}
</script>

```

- Modify the `client/pages/index.vue` document copy the content from the original `/components/Home.vue`

> client/pages/index.vue

```html
<template>
  <v-container>
    <h1>Home</h1>
  </v-container>
</template>

<script>
export default {
  name: 'Home'
}
</script>

```

- Create the `post` folder with the `add.vue` and `index.vue` document.

> client/pages/posts/add.vue
```html
<template>
  <v-container>
    <h1>Add Post</h1>
  </v-container>
</template>

<script>
export default {
  name: 'AddPost'
}
</script>

```

> client/pages/posts/index.vue
```html
<template>
  <v-container>
    <h1>Posts</h1>
  </v-container>
</template>

<script>
export default {
  name: 'Posts'
}
</script>

```

- Create the `profile` folder with the  `index.vue` document.

> client/pages/profile/index.vue
```html
<template>
  <v-container>
    <h1>Profile</h1>
  </v-container>
</template>

<script>
export default {
  name: 'Profile'
}
</script>

```

- Create the `signin` folder with the  `index.vue` document.

> client/pages/signin/index.vue
```html
<template>
  <v-container>
    <h1>Signin</h1>
  </v-container>
</template>

<script>
export default {
  name: 'Signin'
}
</script>

```

- Create the `signup` folder with the  `index.vue` document.

> client/pages/signup/index.vue
```html
<template>
  <v-container>
    <h1>Signup</h1>
  </v-container>
</template>

<script>
export default {
  name: 'Signup'
}
</script>

```

![](CreateThePages.png)


- Check if the application works the same way as the original application.

![](CreateThePages2.png)

![](CreateThePages3.png)

![](CreateThePages4.png)

![](CreateThePages5.png)

### V.-Sep up `Typescript`

- We are going to follow the [TypeScript Support](https://nuxtjs.org/guide/typescript/) documentation to set up the use of `Typescript` with our `Nuxt` application

#### 1.Install the needed `Typescript` packages

- We need to install `@nuxt/typescript` in `devDependencies` and `ts-node` in `dependencies`

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt/client (master)
$ npm i -D @nuxt/typescript
npm WARN deprecated @types/chokidar@2.1.3: This is a stub types definition. chokidar provides its own type definitions, so you do not need this installed.
npm WARN @nuxtjs/vuetify@0.5.5 requires a peer of vuetify-loader@^1.2.1 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\watchpack\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\nodemon\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\jest-haste-map\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fork-ts-checker-webpack-plugin\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.0.7 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.0.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ @nuxt/typescript@2.8.1
added 55 packages from 162 contributors and audited 884211 packages in 72.918s
found 0 vulnerabilities
```

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt/client (master)
$ npm i ts-node
npm WARN @nuxtjs/vuetify@0.5.5 requires a peer of vuetify-loader@^1.2.1 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\watchpack\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\nodemon\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\jest-haste-map\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fork-ts-checker-webpack-plugin\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.0.7 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.0.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ ts-node@8.3.0
added 5 packages from 4 contributors and audited 884219 packages in 54.323s
found 0 vulnerabilities
```

#### 2.-Create the `tsconfig.json` document

- We need to create an empty `tsconfig.json` file in the root project folder.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt/client (master)
$ touch tsconfig.json
```

' `Note:` The `tsconfig.json` file will automatically update with default values the first time we run the `nuxt` command.

#### 3.-rename the `nuxt.config.js` document to `nuxt.config.ts` and modify it.

- To use TypeScript in the configuration file, we need to rename `nuxt.config.js` to `nuxt.config.ts` and change the document.

> nuxt.config.ts
```ts
// import colors from 'vuetify/es5/util/colors'
import NuxtConfiguration from '@nuxt/config'

const config: NuxtConfiguration = {

  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/vuetify', '@nuxtjs/pwa', '@nuxtjs/eslint-module'],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    theme: {
      // primary: colors.blue.darken2,
      // accent: colors.grey.darken3,
      // secondary: colors.amber.darken3,
      // info: colors.teal.lighten1,
      // warning: colors.amber.base,
      // error: colors.deepOrange.accent4,
      // success: colors.green.accent3
      primary: '#3B125F',
      secondary: '#8B5FBF',
      accent: '#BF653F',
      error: '#722530',
      warning: '#A37513',
      info: '#396893',
      success: '#4caf50'
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}

export default config;

```

#### 4.-Set up `Linting` with `ESLint`

- We need to install `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser`.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt/client (master)
$ npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
npm WARN @nuxtjs/vuetify@0.5.5 requires a peer of vuetify-loader@^1.2.1 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\watchpack\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\nodemon\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\jest-haste-map\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fork-ts-checker-webpack-plugin\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.0.7 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.0.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ @typescript-eslint/parser@1.10.2
+ @typescript-eslint/eslint-plugin@1.10.2
added 8 packages from 5 contributors and audited 884247 packages in 64.087s
found 0 vulnerabilities
```

- We need to edit the ESLint configuration `.eslintrc.js` document by adding the `@typescript-eslint` plugin and making `@typescript-eslint/parser` the default parser.

> .eslintrc.js (before changes)
```js
module.exports = {
  
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/vue'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"    
  },
 
}
```

> .eslintrc.js (after changes)
```js
module.exports = {
  plugins: ['@typescript-eslint','prettier'],
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/vue'
  ],
  // add your custom rules here
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"    
  },
 
}

```

- Finally, add or edit the lint script of the `package.json` document.

. package.json
```bash
{
  "name": "client",
  "version": "1.0.0",
  "description": "Frontend for the Nuxt version of [Full-Stack Vue with GraphQL - The Ultimate Guide",
  "author": "Juan Pablo Perez",
  "private": true,
  "scripts": {
    "lint": "eslint --ext .ts,.js,.vue --ignore-path .gitignore .",
    "precommit": "npm run lint",
    "test": "jest",
    "dev": "nuxt",
    "build": "nuxt build",
    "start": "nuxt start",
    "generate": "nuxt generate"
  },
  "dependencies": {
    "@nuxtjs/pwa": "^2.6.0",
    "@nuxtjs/vuetify": "0.5.5",
    "nuxt": "^2.0.0",
    "nuxt-i18n": "^5.12.7",
    "ts-node": "^8.3.0"
  },
  "devDependencies": {
    "@nuxt/typescript": "^2.8.1",
    "@nuxtjs/eslint-config": "^0.0.1",
    "@nuxtjs/eslint-module": "^0.0.1",
    "@typescript-eslint/eslint-plugin": "^1.10.2",
    "@typescript-eslint/parser": "^1.10.2",
    "@vue/test-utils": "^1.0.0-beta.27",
    "babel-core": "7.0.0-bridge.0",
    "babel-eslint": "^10.0.1",
    "babel-jest": "^24.1.0",
    "eslint": "^5.15.1",
    "eslint-config-prettier": "^4.1.0",
    "eslint-config-standard": ">=12.0.0",
    "eslint-plugin-import": ">=2.16.0",
    "eslint-plugin-jest": ">=22.3.0",
    "eslint-plugin-node": ">=8.0.1",
    "eslint-plugin-nuxt": ">=0.4.2",
    "eslint-plugin-prettier": "^3.0.1",
    "eslint-plugin-promise": ">=4.0.1",
    "eslint-plugin-standard": ">=4.0.0",
    "eslint-plugin-vue": "^5.2.2",
    "jest": "^24.1.0",
    "nodemon": "^1.18.9",
    "prettier": "^1.16.4",
    "stylus": "^0.54.5",
    "stylus-loader": "^3.0.2",
    "vue-jest": "^3.0.3"
  }
}
```

#### 5.-Modify the `pages` to use `TypeScript`

- We need to install the `vue-property-decorator` package that is going to help using `TypeScripts` in `Vue` documents.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt (master)
$ npm i vue-property-decorator
npm WARN full-stack-vue-with-graphql-the-ultimate-guide-nuxt@1.0.0 scripts['server'] should probably be scripts['start'].

+ vue-property-decorator@8.2.1
added 3 packages from 2 contributors and audited 106 packages in 6.878s
found 0 vulnerabilities
```

> layouts/default.vue
```html
<template>
  <v-app style="background: #E3E3EE">
    <!-- Side Navbar -->
    <v-navigation-drawer v-model="sideNav" fixed app temporary>
      <v-toolbar color="accent" dark flat>
        <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
        <nuxt-link to="/" tag="span" style="cursor: pointer">
          <h1 class="title pl-3">VueShare</h1>
        </nuxt-link>
      </v-toolbar>

      <v-divider></v-divider>

      <!-- Side Navbar Links -->
      <v-list>
        <v-list-tile
          v-for="(item, i) in sideNavItems"
          :key="i"
          :to="item.link"
          ripple
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{ item.title }}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- Horizontal Navbar -->
    <v-toolbar fixed color="primary" dark>
      <!-- App Title -->
      <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-xs-only">
        <nuxt-link to="/" tag="span" style="cursor: pointer">
          VueShare
        </nuxt-link>
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
          v-for="(item, i) in horizontalNavItems"
          :key="i"
          :to="item.link"
          flat
        >
          <v-icon class="hidden-sm-only" left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class Layout extends Vue {
  sideNav: boolean = false

  // computed
  get horizontalNavItems() {
    return [
      { icon: 'chat', title: 'Posts', link: '/posts' },
      { icon: 'lock_open', title: 'Sign In', link: '/signin' },
      { icon: 'create', title: 'Sign Up', link: '/signup' }
    ]
  }

  get sideNavItems() {
    return [
      { icon: 'chat', title: 'Posts', link: '/posts' },
      { icon: 'lock_open', title: 'Sign In', link: '/signin' },
      { icon: 'create', title: 'Sign Up', link: '/signup' }
    ]
  }

  // methods
  toggleSideNav() {
    this.sideNav = !this.sideNav
  }
}
</script>

```

> layout/error.vue (It hasn't been changed)
```html
<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>

```

> pages/posts/add.Vue
```html
<template>
  <v-container>
    <h1>Add Post</h1>
  </v-container>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'
export default class AddPostPage extends Vue {
  name: string = 'AddPost'
}
</script>

```

> pages/posts/index.Vue
```html
<template>
  <v-container>
    <h1>Posts</h1>
  </v-container>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'
export default class Posts extends Vue {
  name: string = 'Posts'
}
</script>

```

> pages/profile/index.Vue
```html
<template>
  <v-container>
    <h1>Posts</h1>
  </v-container>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'
export default class Posts extends Vue {
  name: string = 'Posts'
}
</script>

```

> pages/signin/index.Vue
```html
<template>
  <v-container>
    <h1>Posts</h1>
  </v-container>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'
export default class Posts extends Vue {
  name: string = 'Posts'
}
</script>

```

> pages/signup/index.Vue
```html
<template>
  <v-container>
    <h1>Posts</h1>
  </v-container>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'
export default class Posts extends Vue {
  name: string = 'Posts'
}
</script>

```

> pages/index.Vue
```html
<template>
  <v-container>
    <h1>Home</h1>
  </v-container>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'
export default class HomePage extends Vue {
  name: string = 'Home'
}
</script>

```

#### 6.-Run the application to ensure it's working

- Browse to http://localhost:3000/ 

![](RunTheApplicationToEnsureItIsWorking.png)

- It doesn't work. It seems as if the `layout/default.vue` is not loaded. 

#### 7.-Create the `typescript` branch to keep the changes

- We are going to create a new branch to keep the changes applied but we are not going to use `TypeScript` at the moment. Follow the [Move existing, uncommitted work to a new branch in Git](https://stackoverflow.com/a/1394804/1059286) to create the new branch.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt (master)
$ git checkout -b typescript
Switched to a new branch 'typescript'
M       client/.eslintrc.js
M       client/layouts/default.vue
D       client/nuxt.config.js
M       client/package-lock.json
M       client/package.json
M       client/pages/index.vue
M       client/pages/posts/add.vue
M       client/pages/posts/index.vue
M       client/pages/profile/index.vue
M       client/pages/signin/index.vue
M       client/pages/signup/index.vue
M       package-lock.json
M       package.json
```

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt (typescript)
$ git add .
warning: LF will be replaced by CRLF in client/.eslintrc.js.
The file will have its original line endings in your working directory
.
.
.

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt (typescript)
$ git status
On branch typescript
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   client/.eslintrc.js
        modified:   client/layouts/default.vue
        renamed:    client/nuxt.config.js -> client/nuxt.config.ts
        modified:   client/package-lock.json
        modified:   client/package.json
        modified:   client/pages/index.vue
        modified:   client/pages/posts/add.vue
        modified:   client/pages/posts/index.vue
        modified:   client/pages/profile/index.vue
        modified:   client/pages/signin/index.vue
        modified:   client/pages/signup/index.vue
        new file:   client/tsconfig.json
        modified:   package-lock.json
        modified:   package.json
```
- Push the changes
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt (typescript)
$ git push --set-upstream origin typescript
Enumerating objects: 42, done.
Counting objects: 100% (42/42), done.
Delta compression using up to 4 threads
Compressing objects: 100% (20/20), done.
Writing objects: 100% (23/23), 12.30 KiB | 286.00 KiB/s, done.
Total 23 (delta 12), reused 0 (delta 0)
remote: Resolving deltas: 100% (12/12), completed with 6 local objects.
remote:
remote: Create a pull request for 'typescript' on GitHub by visiting:
remote:      https://github.com/peelmicro/full-stack-vue-with-graphql-the-ultimate-guide-nuxt/pull/new/typescript
remote:
To https://github.com/peelmicro/full-stack-vue-with-graphql-the-ultimate-guide-nuxt.git
 * [new branch]      typescript -> typescript
Branch 'typescript' set up to track remote branch 'typescript' from 'origin'.
```
 
- Go back to the `master` branch

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt (typescript)
$ git checkout master
Switched to branch 'master'
Your branch is up to date with 'origin/master'.
```


### VI.-Set up `multi-language`

#### 1.-Base the `multi-language` on the [A simple multi-language site with Nuxt.js and nuxt-i18n](https://medium.com/@ale_colombo/a-simple-multilanguage-site-with-nuxt-js-and-nuxt-i18n-43cce9f9f0fe) articule

- We are going to follow the [A simple multi-language site with Nuxt.js and nuxt-i18n](https://medium.com/@ale_colombo/a-simple-multilanguage-site-with-nuxt-js-and-nuxt-i18n-43cce9f9f0fe) articule and the [nuxt-i18n](https://nuxt-community.github.io/nuxt-i18n/) web site.

#### 2.-Install the `nuxt-i18n` package

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt/client (master)
$ npm i nuxt-i18n --save
npm WARN @nuxtjs/vuetify@0.5.5 requires a peer of vuetify-loader@^1.2.1 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.0.7 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.0.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\watchpack\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\nodemon\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\jest-haste-map\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ nuxt-i18n@5.12.7
added 7 packages from 6 contributors and audited 880983 packages in 37.288s
found 0 vulnerabilities
```

- Fix the `warn` detected

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt/client (master)
$ npm i vuetify-loader
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.0.7 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.0.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\watchpack\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\nodemon\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\jest-haste-map\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ vuetify-loader@1.2.2
added 1 package and audited 880989 packages in 44.82s
found 0 vulnerabilities
```

#### 3.-Create the `lang` folder and the translations documents

- We need to create the `lang` folder and the `es-ES.js` for the `Spanish` translations and the `en-US.js` for the `English` translations.

> client/lang/es-ES.js
```js
export default {
  posts: 'Entradas',
  signin: 'Iniciar sesión',
  signup: 'Inscripción',
  searchposts: 'Buscar entradas',
  home: 'Inicio'
}
```

> client/lang/en-US.js
```js
export default {
  posts: 'Posts',
  signin: 'Sign in',
  signup: 'Sign up',
  searchposts: 'Search Posts',
  home: 'Home'
}
```

#### 4.-Modify the `nuxt.config.js` document to set up the pluging and the initial languages

> nuxt.config.js
```js
import es from './lang/es-ES.js'
import en from './lang/en-US.js'
// import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      'nuxt-i18n',
      {
        seo: false,
        locales: [
          {
            name: 'ESP',
            code: 'es',
            iso: 'es-ES'
          },
          {
            name: 'ENG',
            code: 'en',
            iso: 'en-US'
          }
        ],
        strategy: 'prefix_and_default',
        langDir: 'lang/',
        defaultLocale: 'es',
        vueI18n: {
          fallbackLocale: 'es',
          messages: { es, en }
        }
      }
    ],
    '@nuxtjs/vuetify',
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module'
  ],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    theme: {
      // primary: colors.blue.darken2,
      // accent: colors.grey.darken3,
      // secondary: colors.amber.darken3,
      // info: colors.teal.lighten1,
      // warning: colors.amber.base,
      // error: colors.deepOrange.accent4,
      // success: colors.green.accent3
      primary: '#3B125F',
      secondary: '#8B5FBF',
      accent: '#BF653F',
      error: '#722530',
      warning: '#A37513',
      info: '#396893',
      success: '#4caf50'
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}

```

#### 5.-Modify the layout to include a `lang-switcher` button.

> client/layouts/default.vue
```html
<template>
  <v-app style="background: #E3E3EE">
    <!-- Side Navbar -->
    <v-navigation-drawer v-model="sideNav" fixed app temporary>
      <v-toolbar color="accent" dark flat>
        <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
        <nuxt-link :to="localePath('index')" tag="span" style="cursor: pointer">
          <h1 class="title pl-3">VueShare</h1>
        </nuxt-link>
      </v-toolbar>

      <v-divider></v-divider>

      <!-- Side Navbar Links -->
      <v-list>
        <v-list-tile
          v-for="(item, i) in sideNavItems"
          :key="i"
          :to="localePath(item.link)"
          ripple
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{ item.title }}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- Horizontal Navbar -->
    <v-toolbar fixed color="primary" dark>
      <!-- App Title -->
      <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-xs-only">
        <nuxt-link :to="localePath('index')" tag="span" style="cursor: pointer">
          VueShare
        </nuxt-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Search Input -->
      <v-text-field
        flex
        prepend-icon="search"
        color="accent"
        single-line
        hide-details
        :placeholder="$t('searchposts')"
      ></v-text-field>

      <v-spacer></v-spacer>

      <!-- Horizontal Navbar Links -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          v-for="(item, i) in horizontalNavItems"
          :key="i"
          :to="localePath(item.link)"
          flat
        >
          <v-icon class="hidden-sm-only" left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-title class="hidden-xs-only">
        <nuxt-link
          v-for="(locale, i) in showLocales"
          :key="i"
          tag="span"
          style="cursor: pointer"
          class="lang-switcher"
          :to="switchLocalePath(locale.code)"
        >
          {{ locale.name }}
        </nuxt-link>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-container class="mt-4">
        <transition name="fade">
          <nuxt />
        </transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  head() {
    return this.$nuxtI18nSeo()
  },
  data() {
    return {
      sideNav: false
    }
  },
  computed: {
    horizontalNavItems() {
      return [
        { icon: 'chat', title: this.$i18n.t('posts'), link: 'posts' },
        { icon: 'lock_open', title: this.$i18n.t('signin'), link: 'signin' },
        { icon: 'create', title: this.$i18n.t('signup'), link: 'signup' }
      ]
    },
    sideNavItems() {
      return [
        { icon: 'chat', title: this.$i18n.t('posts'), link: 'posts' },
        { icon: 'lock_open', title: this.$i18n.t('signin'), link: 'signin' },
        { icon: 'create', title: this.$i18n.t('signup'), link: 'signup' }
      ]
    },
    showLocales() {
      return this.$i18n.locales.filter(
        locale => locale.code !== this.$i18n.locale
      )
    }
  },
  methods: {
    toggleSideNav() {
      this.sideNav = !this.sideNav
    }
  }
}
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

#### 6.-Test if the `multi-language` works with the changes applied

![](TestIfTheMultiLanguageWorks.png)

![](TestIfTheMultiLanguageWorks2.png)

![](TestIfTheMultiLanguageWorks3.png)

![](TestIfTheMultiLanguageWorks4.png)

![](TestIfTheMultiLanguageWorks5.png)

## Section 6: Using Vue Apollo 0 / 4|24min

### I.-Setting up Apollo Client / Vue Apollo, Firing getPosts Query from Client

- We are going to use the [@nuxtjs/apollo](https://github.com/nuxt-community/apollo-module) package. We need to install the `@nuxtjs/apollo` and [graphql-tag](https://www.npmjs.com/package/graphql-tag) packages.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt/client (master)
$ npm i @nuxtjs/apollo graphql-tag

> core-js@3.1.4 postinstall C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide-nuxt\client\node_modules\apollo-env\node_modules\core-js
> node scripts/postinstall || echo "ignore"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon: 
> https://opencollective.com/core-js 
> https://www.patreon.com/zloirock 

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> protobufjs@6.8.8 postinstall C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide-nuxt\client\node_modules\protobufjs
> node scripts/postinstall

npm WARN vue-cli-plugin-apollo@0.20.0 requires a peer of @vue/cli-shared-utils@^3.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN ts-node@8.3.0 requires a peer of typescript@>=2.0 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\watchpack\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\nodemon\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\jest-haste-map\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.0.7 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.0.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ graphql-tag@2.10.1
+ @nuxtjs/apollo@4.0.0-rc7
added 100 packages from 126 contributors and audited 883960 packages in 64.792s
found 0 vulnerabilities
```

- Create the `apollo` folder and the `apollo/customErrorHandler.js` document.

> apollo/customErrorHandler.js
```js
export default (err, { error }) => {
  console.log(err)
  error({ statusCode: 304, message: 'Server error!' })
}
```
- Create the `gql` folder and the `gql/getPosts.gql` document.

> gql/getPosts.gql
```graphql
query {
  getPosts {
    _id
    title
    imageUrl
    description
    likes
  }
}
```

- We are going to modify the `client/nuxt.config.js` document to set up the use of the `@nuxtjs/apollo` package.

> client/nuxt.config.js
```js
import es from './lang/es-ES.js'
import en from './lang/en-US.js'
// import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      'nuxt-i18n',
      {
        seo: false,
        locales: [
          {
            name: 'ESP',
            code: 'es',
            iso: 'es-ES'
          },
          {
            name: 'ENG',
            code: 'en',
            iso: 'en-US'
          }
        ],
        strategy: 'prefix_and_default',
        langDir: 'lang/',
        defaultLocale: 'es',
        vueI18n: {
          fallbackLocale: 'es',
          messages: { es, en }
        }
      }
    ],
    '@nuxtjs/vuetify',
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module',
    '@nuxtjs/apollo'
  ],
  apollo: {
    errorHandler: '~/apollo/customErrorHandler.js',
    clientConfigs: {
      default: {
        httpEndpoint:
          process.env.HTTP_ENDPOINT || 'http://localhost:4000/graphql'
      }
    }
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    theme: {
      // primary: colors.blue.darken2,
      // accent: colors.grey.darken3,
      // secondary: colors.amber.darken3,
      // info: colors.teal.lighten1,
      // warning: colors.amber.base,
      // error: colors.deepOrange.accent4,
      // success: colors.green.accent3
      primary: '#3B125F',
      secondary: '#8B5FBF',
      accent: '#BF653F',
      error: '#722530',
      warning: '#A37513',
      info: '#396893',
      success: '#4caf50'
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}

```

- We are going to modify the `client/pages/index.vue` document to include a call to the `getPosts` graphql `query` from the server.

> client/pages/index.vue
```html
<template>
  <v-container>
    <h1>Home</h1>
    <ul v-for="post in getPosts" :key="post._id">
      <li>{{ post.title }} {{ post.imageUrl }} {{ post.description }}</li>
      <li>{{ post.likes }}</li>
    </ul>
  </v-container>
</template>

<script>
import { getPosts } from '~/gql/getPosts.gql'
export default {
  name: 'Home',
  apollo: {
    getPosts: {
      query: getPosts
    }
  }
}
</script>


```

- We need top test if everything works correctly.

![](SettingUpApolloClientVueApollo.png)

![](SettingUpApolloClientVueApollo2.png)

- We are going to modify the `client/pages/index.vue` document to include the `Corousel Vuetify` components.

> client/pages/index.vue
```html
<template>
  <v-container v-if="getPosts" text-xs-center>
    <v-flex xs12>
      <v-carousel v-bind="{ cycle: true }" interval="3000">
        <v-carousel-item
          v-for="post in getPosts"
          :key="post._id"
          :src="post.imageUrl"
        >
          <h1 id="carousel__title">{{ post.title }}</h1>
        </v-carousel-item>
      </v-carousel>
    </v-flex>
  </v-container>
</template>

<script>
import { getPosts } from '~/gql/getPosts.gql'
export default {
  name: 'Home',
  apollo: {
    getPosts: {
      query: getPosts
    }
  }
}
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

![](SettingUpApolloClientVueApollo3.png)

![](SettingUpApolloClientVueApollo4.png)

## Section 7: Integrate Vuex with ApolloClient

### I.Create the store to manage the `GraphQL getPosts` query

> client\store\index.js
```js
import { getPosts } from '~/gql/getPosts.gql'

export const state = () => ({
  posts: [],
  loading: false
})
export const mutations = {
  setPosts: (state, payload) => {
    state.posts = payload
  },
  setLoading: (state, payload) => {
    state.loading = payload
  }
}
export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('getPosts')
  },
  async getPosts({ commit }) {
    commit('setLoading', true)
    try {
      const result = await this.app.apolloProvider.defaultClient.query({
        query: getPosts
      })
      commit('setPosts', result.data.getPosts)
    } catch (error) {
      console.log(error)
    }
    commit('setLoading', false)
  }
}
export const getters = {
  posts: state => state.posts,
  loading: state => state.loading
}

```

### II.-Modify the `Home` page to read the Posts from the store

> client\pages\index.vue
```html
<template>
  <v-container text-xs-center>
    <v-layout row>
      <v-dialog v-model="loading" persistent fullscreen>
        <v-container fill-height>
          <v-layout row justify-center align-center>
            <v-progress-circular
              indeterminate
              :size="70"
              :width="7"
              color="secondary"
            ></v-progress-circular>
          </v-layout>
        </v-container>
      </v-dialog>
    </v-layout>

    <v-flex xs12>
      <v-carousel
        v-if="!loading && posts.length > 0"
        v-bind="{ cycle: true }"
        interval="3000"
      >
        <v-carousel-item
          v-for="post in posts"
          :key="post._id"
          :src="post.imageUrl"
        >
          <h1 id="carousel__title">{{ post.title }}</h1>
        </v-carousel-item>
      </v-carousel>
    </v-flex>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['loading', 'posts'])
  }
}
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

### III.-Test the integration of Vuex with ApolloClient

![](TestTheIntegrationOfVuexWithApolloClient.png)

![](TestTheIntegrationOfVuexWithApolloClient2.png)

![](TestTheIntegrationOfVuexWithApolloClient3.png)


## Section 8: JWT Authentication for Signin / Signup

### I.-Create Gravatar Avatar and Hash User Passwords on Signup 

- We need to install the [MD5](https://github.com/pvorb/node-md5) package, a JavaScript function for hashing messages with MD5, and the [node.bcrypt.js](https://github.com/kelektiv/node.bcrypt.js) package, A library to help you hash passwords.


```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt (master)
$ npm i md5 bcrypt

> bcrypt@3.0.6 install C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide-nuxt\node_modules\bcrypt
> node-pre-gyp install --fallback-to-build

node-pre-gyp WARN Using needle for node-pre-gyp https download
[bcrypt] Success: "C:\Work\Training\Pre\VueJs\full-stack-vue-with-graphql-the-ultimate-guide-nuxt\node_modules\bcrypt\lib\binding\bcrypt_lib.node" is installed via remote
npm WARN full-stack-vue-with-graphql-the-ultimate-guide-nuxt@1.0.0 scripts['server'] should probably be scripts['start'].

+ md5@2.2.1
+ bcrypt@3.0.6
added 65 packages from 51 contributors and audited 202 packages in 8.927s
found 0 vulnerabilities
```

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt (master)
$ npm --save-devnpm i --save-dev @types/md5 @types/bcrypt
npm WARN full-stack-vue-with-graphql-the-ultimate-guide-nuxt@1.0.0 scripts['server'] should probably be scripts['start'].

+ @types/md5@2.1.33
+ @types/bcrypt@3.0.0
added 3 packages from 41 contributors and audited 205 packages in 5.411s
found 0 vulnerabilities
```

- We need to modify the `User's Model` to put the `@prop` attribute to the `avatar` field.

> server\src\users\model\user.model.ts
```ts
import * as mongoose from "mongoose";
import { prop, Typegoose } from 'typegoose';
import { IsString, IsDate, IsArray } from 'class-validator';

export class User extends Typegoose {
  @IsString()
  @prop({ required: true, unique: true, trim: true })
  username: string;

  @IsString()
  @prop({ required: true, trim: true })
  email: string;

  @IsString()
  @prop({ required: true, trim: true })
  password: string;

  @IsString()
  @prop()
  avatar?: string;

  @IsDate()
  @prop({ default: Date.now })
  joinDate: Date

  @IsArray()
  @prop({ required: true, ref: "Post" })
  favorites: [mongoose.Schema.Types.ObjectId]
}

```

- We need to modify the `User Service` to assign a ramndom avatar to the user and to store the password hashed.

> server\src\users\users.service.ts
```ts
import * as mongoose from "mongoose";
import { prop, Typegoose } from 'typegoose';
import { IsString, IsDate, IsArray } from 'class-validator';

export class User extends Typegoose {
  @IsString()
  @prop({ required: true, unique: true, trim: true })
  username: string;

  @IsString()
  @prop({ required: true, trim: true })
  email: string;

  @IsString()
  @prop({ required: true, trim: true })
  password: string;

  @IsString()
  @prop()
  avatar?: string;

  @IsDate()
  @prop({ default: Date.now })
  joinDate: Date

  @IsArray()
  @prop({ required: true, ref: "Post" })
  favorites: [mongoose.Schema.Types.ObjectId]
}

```

- We can test if the request to sign up a new user is working properly now.

> 
```graphql
mutation {
  signupUserWithInput(
    input: { username: "John", email: "john@google.com", password: "John" }
  ) {
    _id
    username
    email
    password
    avatar
    joinDate
    favorites
  }
}
```

```json
{
  "data": {
    "signupUserWithInput": {
      "_id": "5d36a9e007bced421c3a2031",
      "username": "John",
      "email": "john@google.com",
      "password": "$2b$10$OPv9/YQC1zZatdGEDw5YYOjiUE2omaBjuiSn5Bf9cJXahre7A/hNO",
      "avatar": "http://gravatar.com/avatar/61409aa1fd47d4a5332de23cbf59a36f?d=identicon",
      "joinDate": "2019-07-23T06:32:00.328Z",
      "favorites": null
    }
  }
}
```

### II.-Modify the server app to include the authentication.

#### 1.-Install the `passport` and `jwt` packaged needed to manage the authentication

- We need to install the [@nestjs/jwt](https://github.com/nestjs/jwt), [@nestjs/passport](https://github.com/nestjs/passport), [passport](https://github.com/jaredhanson/passport) and [passport-jwt](https://github.com/mikenicholson/passport-jwt) packages.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt/server (master)
$ npm i @nestjs/jwt @nestjs/passport passport passport-jwt
npm WARN server@0.0.1 No repository field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.0.7 (node_modules\@nestjs\graphql\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.0.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ passport-jwt@4.0.0
+ passport@0.4.0
+ @nestjs/passport@6.1.0
+ @nestjs/jwt@6.1.1
added 20 packages from 17 contributors and audited 877489 packages in 75.148s
found 0 vulnerabilities
```

- We also need to install the [@types/passport-jwt](https://www.npmjs.com/package/@types/passport-jwt) packagae.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt/server (master)
$ npm i --save-dev @types/passport-jwt
npm WARN server@0.0.1 No repository field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.0.7 (node_modules\@nestjs\graphql\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.0.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ @types/passport-jwt@3.0.1
added 3 packages from 12 contributors and audited 877533 packages in 15.893s
found 0 vulnerabilities
```

#### 2.-Create the SECRET environment variable

- We need to create the new `SECRET` environment variable needed for the `JWT` token:

> server\fake.env
```bash
MONGO_URI=mongodb+srv://USERNAME:PASSWORD@CLUSTERID.mongodb.net/DATABASENAME?retryWrites=true&w=majority
SECRET=mysupersecretencryptionkey
```

- We need to modify the `config.service.ts` document to include the new `SECRET` environment variable:

> server\src\config\config.service.ts
```ts
import * as dotenv from 'dotenv'
import * as fs from 'fs'

export class ConfigService {
  MONGODB_URI: string
  private readonly envConfig: { [key: string]: string }

  constructor() {
    if (
      process.env.NODE_ENV === 'production' ||
      process.env.NODE_ENV === 'staging'
    ) {
      this.envConfig = {
        MONGO_URI: process.env.MONGO_URI,
        SECRET: process.env.SECRET
      }
    } else {
      this.envConfig = dotenv.parse(fs.readFileSync('.env'))
    }
  }

  get(key: string): string {
    return this.envConfig[key]
  }
}
```

#### 3.-Create the Auth Service

- We need to create the `Auth` folder to put inside the `Auth Service` and everything related. This service is going to be used to manage the `Authentication` and the `Authorisation` of the  GraphQL `Queries` adn `Mutations`.

- We are going to create the `jwt-payload.interface.ts` to define the content of the 'jwt token`

> server\src\auth\jwt-payload.interface.ts
```ts
export interface JwtPayload {
  username: string
  email: string
}
```

- We need to create the `graphql-auth.guard.ts` to create the `GraphqlAuthGuard` guard derived from the `NestJS AuthGuard` Guard to transform from the `Exceution Context` to a `GraphQL context`

> server\src\auth\graphql-auth.guard.ts
```ts
import { Injectable, ExecutionContext } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from "@nestjs/graphql";

@Injectable()
export class GraphqlAuthGuard extends AuthGuard('jwt') {
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context)
    return ctx.getContext().req
  }
}
```

- We need to create the `jwt.strategy.ts` document with the `JwtStrategy` class used to read the `User` information obtained from the token passed through the `authorization` header with any request. It is attached to the request on the `user` object.

> server\src\auth\jwt.strategy.ts
```ts
import { PassportStrategy } from '@nestjs/passport'
import { Strategy, ExtractJwt } from 'passport-jwt'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtPayload } from './jwt-payload.interface'
import { InjectModel } from 'nestjs-typegoose'
import { User } from '../users/model/user.model'
import { ModelType } from 'typegoose'
import { ConfigService } from '../config/config.service'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(User) private readonly userModel: ModelType<User>,
    private readonly configService: ConfigService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromHeader("authorization"),
      secretOrKey: configService.get('SECRET'),
    })
  }

  async validate(payload: JwtPayload): Promise<User> {
    const { username } = payload
    const user = await this.userModel.findOne({
      username: username
    }).populate({
      path: "favorites",
      model: "Post"
    })
    if (!user) {
      throw new UnauthorizedException()
    }
    return user
  }
}
```

- We are going to create the `current-user.decorator.ts` to create the `CurrentUser` custom decorator with `User` information obtained from the token passed through the `authentication` header with any request. Please, note it is `authentication` instead of `authorisation` because it is the standard header for Apollo.

> server\src\auth\current-user.decorator.ts
```ts
import { createParamDecorator } from '@nestjs/common'

export const CurrentUser = createParamDecorator(
  (_data, [,, ctx]) => ctx.req.user,
)
```

- We are going to create the `auth.service.ts` document with the `AuthService` service that has the `signUp` and `signIn` methods.

> server\src\auth\auth.service.ts
```ts
import { Injectable, ConflictException, InternalServerErrorException, UnauthorizedException } from '@nestjs/common'
import { InjectModel } from 'nestjs-typegoose'
import { ModelType } from 'typegoose'
import { JwtService } from '@nestjs/jwt'
import { SigninUserDto } from '../users/model/dtos/signin-user.dto'
import { CreateUserDto } from '../users/model/dtos/create-user.dto'
import { Token, User } from '../users/model/user.model'
import { JwtPayload } from './jwt-payload.interface'
import md5 from 'md5'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User) private readonly userModel: ModelType<User>,
    private readonly jwtService: JwtService,
  ) { }

  async signUp(createUserDto: CreateUserDto): Promise<Token> {
    const username = createUserDto.username
    const user = await this.userModel.findOne({ username })
    if (user) {
      throw new ConflictException("User already exists")
    }
    const avatar = `http://gravatar.com/avatar/${md5(username)}?d=identicon`
    var salt = bcrypt.genSaltSync(10)
    var password = bcrypt.hashSync(createUserDto.password, salt)
    const currentUser = { ...createUserDto, avatar, password }
    const createdUser = new this.userModel(currentUser)
    try {
      const newUser = await createdUser.save()
      const token = this.getAccessToken(newUser)
      return token
    }
    catch (error) {
      throw new InternalServerErrorException()
    }

  }

  async signIn(signinUserDto: SigninUserDto): Promise<Token> {
    const { username, password } = signinUserDto
    const user = await this.userModel.findOne({ username })
    if (!user) {
      throw new UnauthorizedException("Invalid credentials")
    }
    const isValidPassword = await bcrypt.compare(password, user.password)
    if (!isValidPassword) {
      throw new UnauthorizedException("Invalid credentials")
    }
    const token = this.getAccessToken(user)
    return token
  }

  private async getAccessToken(user: User): Promise<Token> {
    const { username, email } = user
    const payload: JwtPayload = { username, email }
    const token = await this.jwtService.sign(payload)
    return { token }
  }
}
```

- We finally need to create the `auth.module.ts` with the `AuthModule` module. It needs to import the `PassportModule` and the `JwtModule`.

> server\src\auth\auth.module.ts
```ts
import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { JwtStrategy } from './jwt.strategy'
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { TypegooseModule } from 'nestjs-typegoose'
import { User } from '../users/model/user.model';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('SECRET'),
        signOptions: {
            expiresIn: 216000, // 1 Hour: 60 * 60 * 60
        },
      }),
    }),
    TypegooseModule.forFeature([User]),    

  ],
  providers: [
    JwtStrategy,
    AuthService,
    ConfigService
  ],
  exports: [
    AuthService
  ],
})
export class AuthModule {}
```

#### 4.-Modify the files related to the `Users` Module

- We need to modify the `app.module.ts` document to include the `context` as part of the `GraphQLModule` module.

> server\src\app.module.ts
```ts
import { Module } from "@nestjs/common"
import { AppService } from "./app.service"
import { DatabaseModule } from "./database/database.module"
import { GraphQLModule } from "@nestjs/graphql"
import { UsersModule } from './users/users.module'
import { PostsModule } from './posts/posts.module'

@Module({
  imports: [
    DatabaseModule,
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.gql",
      context: ({ req }) => ({ req }),
    }),
    UsersModule,
    PostsModule,
  ],
  providers: [AppService]
})
export class AppModule { }
```

- We need to modify the `server\src\users\users.module.ts` document to inlcude the `ConfigService` provider adn the `AuthModule` module.

> server\src\users\users.module.ts
```ts
import { Module } from '@nestjs/common'
import { TypegooseModule } from 'nestjs-typegoose'
import { User } from './model/user.model'
import { UsersService } from './users.service'
import { UsersResolver } from "./graphql/users.resolver"
import { ConfigService } from '../config/config.service'
import { AuthModule } from '../auth/auth.module'

@Module({
  imports: [
    TypegooseModule.forFeature([User]),
    AuthModule
  ],
  providers: [UsersService, UsersResolver, ConfigService]
})
export class UsersModule { }

```

- We are going to create the new `SignUserDto` Data Transfer Object.

> server\src\users\model\dtos\signin-user.dto.ts
```ts
export class SigninUserDto {
  readonly username: string;
  readonly password: string
}
```

- We are going to modify the `user.type.ts` and `user.model.ts` documents to include the `Token` class.

> server\src\users\graphql\types\user.type.ts
```ts
import { Field, ObjectType, ID } from 'type-graphql'

@ObjectType()
export class Token {
  @Field()
  readonly token: string  
}

@ObjectType()
export class User {
  @Field(() => ID)
  readonly _id: string
  @Field()
  readonly username: string
  @Field()
  readonly email: string
  @Field()
  readonly password: string
  @Field({ nullable: true })
  readonly avatar: string
  @Field()
  readonly joinDate: Date
  @Field(() => [ID], { nullable: true })
  readonly favorites: string[]
}

```

> server\src\users\model\user.model.ts
```ts
import * as mongoose from "mongoose"
import { prop, Typegoose } from 'typegoose'
import { IsString, IsDate, IsArray } from 'class-validator'


export class Token {
  @IsString()
  readonly token: string  
}

export class User extends Typegoose {
  @IsString()
  @prop({ required: true, unique: true, trim: true })
  username: string

  @IsString()
  @prop({ required: true, trim: true })
  email: string

  @IsString()
  @prop({ required: true, trim: true })
  password: string

  @IsString()
  @prop()
  avatar?: string

  @IsDate()
  @prop({ default: Date.now })
  joinDate: Date

  @IsArray()
  @prop({ required: true, ref: "Post" })
  favorites: [mongoose.Schema.Types.ObjectId]
}


```

- We are going to modify the `users.service.ts` document to remove the `signupUser` and `createToken` methods that are now part of the `AuthService`. 

> server\src\users\users.service.ts
```ts
import { Injectable } from '@nestjs/common'
import { InjectModel } from 'nestjs-typegoose'
import { User } from './model/user.model'
import { ModelType } from 'typegoose'

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private readonly userModel: ModelType<User>) { }

  async getUsers(): Promise<User[] | null> {
    return await this.userModel.find().exec()
  }

}

```

- We are going to modify the `users.resolver.ts` document to include the `AuthService` service and to include the new `signinUser` mutation, the new `getCurrentUser` query and to modify the `signupUser` mutation. 


> server\src\users\graphql\users.resolver.ts
```ts
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { UsersService } from '../users.service'
import { User, Token } from './types/user.type'
import { GraphqlAuthGuard } from '../../auth/graphql-auth.guard'
import { CurrentUser } from '../../auth/current-user.decorator'
import { AuthService } from '../../auth/auth.service'
import { UseGuards } from '@nestjs/common'

@Resolver()
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) { }

  @Query(() => User)
  @UseGuards(GraphqlAuthGuard)
  async getCurrentUser(@CurrentUser() currentUser: User) {
    return currentUser
  }

  @Query(() => [User])
  async getUsers() {
    return await this.usersService.getUsers()
  }

  @Mutation(() => Token)
  async signupUser(
    @Args('username') username: string,
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    return await this.authService.signUp({ username, email, password })
  }

  @Mutation(() => Token)
  async signinUser(
    @Args('username') username: string,
    @Args('password') password: string,
  ) {
    return await this.authService.signIn({ username,  password })
  }
}
```

- We are going to check if the new `signinUser` mutation works properly:

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
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkZvZm8iLCJlbWFpbCI6IkZvZm9AZ21haWwuY29tIiwiaWF0IjoxNTY1MDIxMTQ5LCJleHAiOjE1NjUyMzcxNDl9.OtGTm2qHC5XT-hqNmb6eypFHrZg3DRwBj7ozac3CPCs"
    }
  }
}
```
- We are going to check if the `signupUser` mutation still works properly, but returning a Token instead of the user:

> Request
```graphql
mutation {
  signupUser(username: "David", email: "david@gmail.com", password: "David") {
		token
  }
}
```

> Response
```json
{
  "data": {
    "signupUser": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkRhdmlkIiwiZW1haWwiOiJkYXZpZEBnbWFpbC5jb20iLCJpYXQiOjE1NjUwMTc4MzksImV4cCI6MTU2NTIzMzgzOX0.KcnzxLj4Wu9RkjT9KD6L55ILzBzYk0NNdnWp6o1-nFk"
    }
  }
}
```

- We are going to check if the new  `getCurrentUser` query works properly:

> Request
```graphql
query {
    getCurrentUser {
      _id
      username
      email
      password
      avatar
      joinDate
      favorites 
    }
  }
```

> Http header
```json
{
  "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkZvZm8iLCJlbWFpbCI6IkZvZm9AZ21haWwuY29tIiwiaWF0IjoxNTY1MDIxMTQ5LCJleHAiOjE1NjUyMzcxNDl9.OtGTm2qHC5XT-hqNmb6eypFHrZg3DRwBj7ozac3CPCs"
}
```
> Response
```json
{
  "data": {
    "getCurrentUser": {
      "_id": "5d35390f58729c10f875d41c",
      "username": "Fofo",
      "email": "Fofo@gmail.com",
      "password": "$2b$10$qb.j.FtbHSfSgyH8ZYGGwOW.cIFj8voPEs1m/jcmdFrX/j/kP1zky",
      "avatar": "http://gravatar.com/avatar/d7ec7a6a7980721f40631794b6e691f8?d=identicon",
      "joinDate": "2019-07-22T04:18:23.184Z",
      "favorites": null
    }
  }
}
```

### III.-Modify the client app to include the Authentication.

#### 1.-Modify the Nuxt.Config to set up Apollo Authentication

- We need to modify the `nuxt.config.js` document to add the `authenticationType: '',` property to the `apollo` tag. Otherwise it would included the `Bearer` prefix as the default value.

> client\nuxt.config.js
```js
import es from './lang/es-ES.js'
import en from './lang/en-US.js'
// import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      'nuxt-i18n',
      {
        seo: false,
        locales: [
          {
            name: 'ESP',
            code: 'es',
            iso: 'es-ES'
          },
          {
            name: 'ENG',
            code: 'en',
            iso: 'en-US'
          }
        ],
        strategy: 'prefix_and_default',
        langDir: 'lang/',
        defaultLocale: 'es',
        vueI18n: {
          fallbackLocale: 'es',
          messages: { es, en }
        }
      }
    ],
    '@nuxtjs/vuetify',
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module',
    '@nuxtjs/apollo'
  ],
  apollo: {
    errorHandler: '~/apollo/customErrorHandler.js',
    authenticationType: '',
    clientConfigs: {
      default: {
        httpEndpoint:
          process.env.HTTP_ENDPOINT || 'http://localhost:4000/graphql'
      }
    }
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    theme: {
      // primary: colors.blue.darken2,
      // accent: colors.grey.darken3,
      // secondary: colors.amber.darken3,
      // info: colors.teal.lighten1,
      // warning: colors.amber.base,
      // error: colors.deepOrange.accent4,
      // success: colors.green.accent3
      primary: '#3B125F',
      secondary: '#8B5FBF',
      accent: '#BF653F',
      error: '#722530',
      warning: '#A37513',
      info: '#396893',
      success: '#4caf50'
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
```

#### 2.-Create the `gql` documents with queries and mutations

> client\gql\getCurrentUser.gql
```graphql
query getCurrentUser {
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
```

> client\gql\signinUser.gql
```graphql
  mutation signinUser($username: String!, $password: String!) {
    signinUser(username: $username, password: $password) {
      token
    }
  }
```

> client\gql\signupUser.gql
```graphql
  mutation signupUser($username: String!, $email: String!, $password: String!) {
    signupUser(username: $username, email: $email, password: $password) {
      token
    }
  }
```

#### 3.-Update the `localization` documents with new entries

> client\lang\en-US.js
```js
export default {
  posts: 'Posts',
  signin: 'Sign in',
  signup: 'Sign up',
  searchposts: 'Search Posts',
  home: 'Home',
  createPost: 'Create Post',
  profile: 'Profile',
  signout: 'Signout',
  password: 'Password',
  username: 'Username',
  dontHaveAnAccount: "Don't have an account?",
  welcomeBack: 'Welcome Back!'
}

```

> client\lang\es-ES.js
```js
export default {
  posts: 'Entradas',
  signin: 'Iniciar sesión',
  signup: 'Inscripción',
  searchposts: 'Buscar entradas',
  home: 'Inicio',
  createPost: 'Crear Entrada',
  profile: 'Perfil',
  signout: 'Cerrar sesión',
  username: 'Usuario',
  password: 'Contraseña',
  dontHaveAnAccount: '¿No tiene una cuenta?',
  welcomeBack: '¡Bienvenido de nuevo!'
}

```

#### 4.-Update the `store` to manaage the Authentication

> client\store\index.js
```js
import { getPosts } from '~/gql/getPosts.gql'
import { getCurrentUser } from '~/gql/getCurrentUser.gql'
import { signinUser } from '~/gql/signinUser.gql'

export const state = () => ({
  posts: [],
  user: null,
  loading: false
})
export const mutations = {
  setPosts: (state, payload) => {
    state.posts = payload
  },
  setUser: (state, payload) => {
    state.user = payload
  },
  setLoading: (state, payload) => {
    state.loading = payload
  },
  clearUser: state => (state.user = null)
}
export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('getCurrentUser')
    await dispatch('getPosts')
  },
  async getPosts({ commit }) {
    commit('setLoading', true)
    try {
      const result = await this.app.apolloProvider.defaultClient.query({
        query: getPosts
      })
      commit('setPosts', result.data.getPosts)
    } catch (error) {
      console.log(error)
    }
    commit('setLoading', false)
  },
  async getCurrentUser({ commit }) {
    if (!this.app.$apolloHelpers.getToken()) {
      commit('clearUser')
      return
    }
    commit('setLoading', true)
    try {
      const result = await this.app.apolloProvider.defaultClient.query({
        query: getCurrentUser
      })
      // Add user data to state
      commit('setUser', result.data.getCurrentUser)
    } catch (error) {
      console.error(error)
    }
    commit('setLoading', false)
  },
  async signinUser({ commit, dispatch }, payload) {
    commit('setLoading', true)
    try {
      const result = await this.app.apolloProvider.defaultClient.mutate({
        mutation: signinUser,
        variables: payload
      })
      await this.app.$apolloHelpers.onLogin(result.data.signinUser.token)
      await dispatch('getCurrentUser')
      commit('setLoading', false)
    } catch (error) {
      console.error(error)
      commit('setLoading', false)
    }
  },
  async signoutUser({ commit }) {
    // clear user in state
    commit('clearUser')
    await this.app.$apolloHelpers.onLogout()
    // redirect home - kick users out of private pages (i.e. profile)
    this.app.router.push(this.app.localePath('index'))
  }
}
export const getters = {
  posts: state => state.posts,
  user: state => state.user,
  loading: state => state.loading
}

```

#### 5.-Update the `SignIn` page

> client\pages\signin\index.vue
```html
<template>
  <v-container text-xs-center mt-5 pt-5>
    <!-- Signin Title -->
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <h1>{{ $t('welcomeBack') }}</h1>
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
                  <v-text-field
                    v-model="username"
                    prepend-icon="face"
                    :label="$t('username')"
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
                    :label="$t('password')"
                    type="password"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-btn color="accent" type="submit">{{ $t('signin') }}</v-btn>
                  <h3>
                    {{ $t('dontHaveAnAccount') }}
                    <nuxt-link to="/signup">{{ $t('signup') }}</nuxt-link>
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
import { mapGetters } from 'vuex'

export default {
  name: 'Signin',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  watch: {
    user(value) {
      // if user value changes, redirect to home page
      if (value) {
        this.$router.push(this.localePath('index'))
      }
    }
  },
  methods: {
    handleSigninUser() {
      this.$store.dispatch('signinUser', {
        username: this.username,
        password: this.password
      })
    }
  }
}
</script>

```

#### 6.-Create the `auth` middleware

> client\middleware\auth.js
```js
export default function({ store, redirect, app }) {
  if (!store.getters.user) {
    return redirect(app.localePath('signin'))
  }
}

```

#### 7.-Update the `Profile` page to use the `auth` middleware

> client\pages\profile\index.vue
```html
<template>
  <v-container>
    <h1>Profile</h1>
  </v-container>
</template>

<script>
export default {
  name: 'Profile',
  middleware: 'auth'
}
</script>

```

#### 8.-Update the `Layout` with new options

> client\layouts\default.vue
```html
<template>
  <v-app style="background: #E3E3EE">
    <!-- Side Navbar -->
    <v-navigation-drawer v-model="sideNav" fixed app temporary>
      <v-toolbar color="accent" dark flat>
        <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
        <nuxt-link :to="localePath('index')" tag="span" style="cursor: pointer">
          <h1 class="title pl-3">VueShare</h1>
        </nuxt-link>
      </v-toolbar>

      <v-divider></v-divider>

      <!-- Side Navbar Links -->
      <v-list>
        <v-list-tile
          v-for="(item, i) in sideNavItems"
          :key="i"
          :to="localePath(item.link)"
          ripple
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{ item.title }}
          </v-list-tile-content>
        </v-list-tile>

        <!-- Signout Button -->
        <v-list-tile v-if="user" @click="handleSignoutUser">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ $t('signout') }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- Horizontal Navbar -->
    <v-toolbar fixed color="primary" dark>
      <!-- App Title -->
      <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-xs-only">
        <nuxt-link :to="localePath('index')" tag="span" style="cursor: pointer">
          VueShare
        </nuxt-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Search Input -->
      <v-text-field
        flex
        prepend-icon="search"
        color="accent"
        single-line
        hide-details
        :placeholder="$t('searchposts')"
      ></v-text-field>

      <v-spacer></v-spacer>

      <!-- Horizontal Navbar Links -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          v-for="(item, i) in horizontalNavItems"
          :key="i"
          :to="localePath(item.link)"
          flat
        >
          <v-icon class="hidden-sm-only" left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

      <!-- Profile Button -->
      <v-btn v-if="user" flat to="profile">
        <v-icon class="hidden-sm-only" left>account_box</v-icon>
        <v-badge right color="blue darken-2">
          <!-- <span slot="badge"></span> -->
          {{ $t('profile') }}
        </v-badge>
      </v-btn>

      <!-- Signout Button -->
      <v-btn v-if="user" flat @click="handleSignoutUser">
        <v-icon class="hidden-sm-only" left>exit_to_app</v-icon>
        {{ $t('signout') }}
      </v-btn>

      <v-toolbar-title class="hidden-xs-only">
        <nuxt-link
          v-for="(locale, i) in showLocales"
          :key="i"
          tag="span"
          style="cursor: pointer"
          class="lang-switcher"
          :to="switchLocalePath(locale.code)"
        >
          {{ locale.name }}
        </nuxt-link>
      </v-toolbar-title>
    </v-toolbar>

    <!-- App Content -->
    <main>
      <v-container class="mt-4">
        <transition name="fade">
          <nuxt />
        </transition>
      </v-container>
    </main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  head() {
    return this.$nuxtI18nSeo()
  },
  data() {
    return {
      sideNav: false
    }
  },
  computed: {
    ...mapGetters(['user']),
    horizontalNavItems() {
      let items = [
        { icon: 'chat', title: this.$i18n.t('posts'), link: 'posts' },
        { icon: 'lock_open', title: this.$i18n.t('signin'), link: 'signin' },
        { icon: 'create', title: this.$i18n.t('signup'), link: 'signup' }
      ]
      if (this.user) {
        items = [{ icon: 'chat', title: this.$i18n.t('posts'), link: 'posts' }]
      }
      return items
    },
    sideNavItems() {
      let items = [
        { icon: 'chat', title: this.$i18n.t('posts'), link: 'posts' },
        { icon: 'lock_open', title: this.$i18n.t('signin'), link: 'signin' },
        { icon: 'create', title: this.$i18n.t('signup'), link: 'signup' }
      ]
      if (this.user) {
        items = [
          { icon: 'chat', title: this.$i18n.t('posts'), link: 'posts' },
          {
            icon: 'stars',
            title: this.$i18n.t('createPost'),
            link: 'posts-add'
          },
          { icon: 'account_box', title: this.$i18n.t('posts'), link: 'profile' }
        ]
      }
      return items
    },
    showLocales() {
      return this.$i18n.locales.filter(
        locale => locale.code !== this.$i18n.locale
      )
    }
  },
  methods: {
    handleSignoutUser() {
      this.$store.dispatch('signoutUser')
    },
    toggleSideNav() {
      this.sideNav = !this.sideNav
    }
  }
}
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

#### 9.-Check if the changes works properly

![](ClientAuthentication.png)

![](ClientAuthentication2.png)

![](ClientAuthentication3.png)

![](ClientAuthentication4.png)

- We can try if we can access the profile without being authenticated

![](ClientAuthentication5.png)

![](ClientAuthentication6.png)

- Check how the cookie is created:

![](ClientAuthentication7.png)

![](ClientAuthentication8.png)


## Section 9: Error Handling and Form Validation

### I.-Modify the server app to avoid `ignoring expiration` of the `jwt` token.

- We need to modify the `jwt.strategy.ts` document to add the option `ignoreExpiration: false`.

> server\src\auth\jwt.strategy.ts
```ts
import { PassportStrategy } from '@nestjs/passport'
import { Strategy, ExtractJwt } from 'passport-jwt'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtPayload } from './jwt-payload.interface'
import { InjectModel } from 'nestjs-typegoose'
import { User } from '../users/model/user.model'
import { ModelType } from 'typegoose'
import { ConfigService } from '../config/config.service'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(User) private readonly userModel: ModelType<User>,
    private readonly configService: ConfigService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromHeader("authorization"),
      ignoreExpiration: false,
      secretOrKey: configService.get('SECRET'),
    })
  }

  async validate(payload: any): Promise<User | null> {
    const { username } = payload
    const user = await this.userModel.findOne({
      username: username
    }).populate({
      path: "favorites",
      model: "Post"
    })
    if (!user) {
      throw new UnauthorizedException()
    }
    return user
  }
}
```

### II.-Modify the client app to include Error Handling and Form Validation.

#### 1.-Install the `cookie-universal-nuxt` package

- We are going to install the [cookie-universal-nuxt](https://github.com/microcipcip/cookie-universal/tree/master/packages/cookie-universal-nuxt) package to be able to remove cookies on both `client` and `server` sides.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt/client (master)
$ npm i cookie-universal-nuxt
npm WARN ts-node@8.3.0 requires a peer of typescript@>=2.0 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.0.7 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.0.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\watchpack\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\nodemon\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\jest-haste-map\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ cookie-universal-nuxt@2.0.17
added 3 packages from 2 contributors and audited 897031 packages in 67.312s
found 0 vulnerabilities
```

#### 2.-Create the `FormAlert` Component and register it globally

- We need to create the `FormAlert.vue` Component document. Create the `Shared` folder from `client\components` and the `FormAlert.vue` document in it.

> client\components\Shared\FormAlert.vue
```html
<template>
  <v-alert type="error" :value="true" transition="scale-transition" dismissible>
    <h3>{{ message }}</h3>
  </v-alert>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>

```

- We need to create the `shared-components.js` plugin component that will be used to register all the components from the `client\components\Shared` folder as Global components. It uses the [WebPack require-context](https://webpack.js.org/guides/dependency-management/#require-context) method.

> client\plugins\shared-components.js
```bash
import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  '~/components/Shared',
  false,
  /[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})

```

#### 3.-Modify the `nuxt.config.js` document to add a new module and a new pugin 

- We need to modify the `nuxt.config.js` document to include the new `cookie-universal-nuxt` module and to register the `shared-components` plugin.

> client\nuxt.config.js
```js
import es from './lang/es-ES.js'
import en from './lang/en-US.js'
// import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@plugins/shared-components.js'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      'nuxt-i18n',
      {
        seo: false,
        locales: [
          {
            name: 'ESP',
            code: 'es',
            iso: 'es-ES'
          },
          {
            name: 'ENG',
            code: 'en',
            iso: 'en-US'
          }
        ],
        strategy: 'prefix_and_default',
        langDir: 'lang/',
        defaultLocale: 'es',
        vueI18n: {
          fallbackLocale: 'es',
          messages: { es, en }
        }
      }
    ],
    '@nuxtjs/vuetify',
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module',
    '@nuxtjs/apollo',
    `cookie-universal-nuxt`
  ],
  apollo: {
    authenticationType: '',
    errorHandler: '~/apollo/customErrorHandler.js',
    clientConfigs: {
      default: {
        httpEndpoint:
          process.env.HTTP_ENDPOINT || 'http://localhost:4000/graphql'
      }
    }
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    theme: {
      // primary: colors.blue.darken2,
      // accent: colors.grey.darken3,
      // secondary: colors.amber.darken3,
      // info: colors.teal.lighten1,
      // warning: colors.amber.base,
      // error: colors.deepOrange.accent4,
      // success: colors.green.accent3
      primary: '#3B125F',
      secondary: '#8B5FBF',
      accent: '#BF653F',
      error: '#722530',
      warning: '#A37513',
      info: '#396893',
      success: '#4caf50'
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}

```

#### 4.-Create a new `utils.js` document that will contain global functions

- Create the `client\helpers` folder and the `utils.js` document inside with global functions.

> client\helpers\utils.js
```js
const utils = {
  isJwtTokenValid(jwtToken) {
    if (!jwtToken) {
      return false
    }
    const items = jwtToken.split('.')
    if (!items) {
      return false
    }
    return items.length > 2
  },
  getFirstGraphQLError(graphQLError) {
    if (
      graphQLError &&
      graphQLError.graphQLErrors &&
      graphQLError.graphQLErrors.length > 0
    ) {
      return graphQLError.graphQLErrors[0]
    }
    if (graphQLError && graphQLError.message) {
      return graphQLError.message
    }
    return graphQLError
  },
  getCurrentGraphQLError(graphQLError) {
    const error = this.getFirstGraphQLError(graphQLError)
    if (!error) {
      return graphQLError
    }
    const currentError =
      error.message && (!error.message.message || !error.message.error)
        ? error.message
        : error.error
        ? error.error
        : error.message && error.message.message
        ? error.message.message
        : error.message && error.message.error
        ? error.message.error
        : error
    return currentError
  }
}

export default utils

```

#### 5.-Modify the store to include the `Signup` action and the `error` and `authError` states.

- We need to modify the `index.js` store document to include the `Signup` action and the `error` and `authError` states.

> client\store\index.js
```js
import { getPosts } from '~/gql/getPosts.gql'
import { getCurrentUser } from '~/gql/getCurrentUser.gql'
import { signinUser } from '~/gql/signinUser.gql'
import { signupUser } from '~/gql/signupUser.gql'
import utils from '~/helpers/utils'

export const state = () => ({
  posts: [],
  user: null,
  loading: false,
  error: null,
  authError: null
})
export const mutations = {
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
  setError: (state, payload) => {
    state.error = payload
  },
  clearError: state => (state.error = null),
  setAuthError: (state, payload) => {
    state.authError = payload
  },
  clearAuthError: state => (state.authError = null)
}
export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('getCurrentUser')
    await dispatch('getPosts')
  },
  async getPosts({ commit }) {
    commit('clearError')
    commit('setLoading', true)
    try {
      const result = await this.app.apolloProvider.defaultClient.query({
        query: getPosts
      })
      commit('setPosts', result.data.getPosts)
    } catch (error) {
      const currentError = utils.getCurrentGraphQLError(error)
      commit('setError', currentError)
      console.error(utils.getFirstGraphQLError(error))
    }
    commit('setLoading', false)
  },
  async logOut({ commit }) {
    this.app.$cookies.remove('apollo-token')
    await this.app.$apolloHelpers.onLogout()
    commit('clearUser')
  },
  async getCurrentUser({ commit, dispatch }) {
    if (!utils.isJwtTokenValid(this.app.$apolloHelpers.getToken())) {
      await dispatch('logOut')
      return
    }
    commit('setLoading', true)
    try {
      const result = await this.app.apolloProvider.defaultClient.query({
        query: getCurrentUser
      })
      // Add user data to state
      commit('setUser', result.data.getCurrentUser)
      commit('clearError')
      commit('clearAuthError')
    } catch (error) {
      const currentError = utils.getCurrentGraphQLError(error)
      if (currentError === 'Unauthorized') {
        commit('setAuthError', currentError)
        await dispatch('logOut')
      } else {
        commit('setError', currentError)
      }
      console.error(utils.getFirstGraphQLError(error))
    }
    commit('setLoading', false)
  },
  async signinUser({ commit, dispatch }, payload) {
    commit('clearError')
    commit('setLoading', true)
    try {
      const result = await this.app.apolloProvider.defaultClient.mutate({
        mutation: signinUser,
        variables: payload
      })
      await this.app.$apolloHelpers.onLogin(result.data.signinUser.token)
      await dispatch('getCurrentUser')
    } catch (error) {
      const currentError = utils.getCurrentGraphQLError(error)
      commit('setError', currentError)
      console.error(utils.getFirstGraphQLError(error))
    }
    commit('setLoading', false)
  },
  async signupUser({ commit, dispatch }, payload) {
    commit('clearError')
    commit('setLoading', true)
    try {
      const result = await this.app.apolloProvider.defaultClient.mutate({
        mutation: signupUser,
        variables: payload
      })
      await this.app.$apolloHelpers.onLogin(result.data.signupUser.token)
      await dispatch('getCurrentUser')
    } catch (error) {
      const currentError = utils.getCurrentGraphQLError(error)
      commit('setError', currentError)
      console.error(utils.getFirstGraphQLError(error))
    }
    commit('setLoading', false)
  },
  async signoutUser({ dispatch }) {
    await dispatch('logOut')
    // redirect home - kick users out of private pages (i.e. profile)
    this.app.router.push(this.app.localePath('index'))
  }
}
export const getters = {
  posts: state => state.posts,
  user: state => state.user,
  loading: state => state.loading,
  error: state => state.error,
  authError: state => state.authError
}

```

#### 6.-Update the `localization` documents with new entries

> client\lang\en-US.js
```js
export default {
  posts: 'Posts',
  signin: 'Sign in',
  signup: 'Sign up',
  searchposts: 'Search Posts',
  home: 'Home',
  createPost: 'Create Post',
  profile: 'Profile',
  signout: 'Signout',
  username: 'Username',
  password: 'Password',
  confirmPassword: 'Confirm Password',
  email: 'Email',
  dontHaveAnAccount: "Don't have an account?",
  alreadyHaveAnAccount: 'Already have an account?',
  welcomeBack: 'Welcome Back!',
  getStartedHere: 'Get Started Here',
  isRequired: '{name} is required',
  mustBeValid: '{name} must be valid',
  cannotBeMoreThanCharacters: `{name} cannot be more than {number} characters`,
  mustBeAtLeast: `{name} must be at least {number} characters`,
  passwordsMustMatch: 'Passwords must match',
  yourAreNowSignedIn: `You are now signed in!`,
  close: `Close`
}

```

> client\lang\es-ES.js
```js
export default {
  posts: 'Entradas',
  signin: 'Iniciar sesión',
  signup: 'Inscripción',
  searchposts: 'Buscar entradas',
  home: 'Inicio',
  createPost: 'Crear Entrada',
  profile: 'Perfil',
  signout: 'Cerrar sesión',
  username: 'Usuario',
  password: 'Contraseña',
  confirmPassword: 'Confirmar Contraseña',
  email: 'Email',
  dontHaveAnAccount: '¿No tiene una cuenta?',
  alreadyHaveAnAccount: '¿Ya tiene una cuenta?',
  welcomeBack: '¡Bienvenido de nuevo!',
  getStartedHere: 'Comience aquí',
  isRequired: '{name} es requerido',
  mustBeValid: '{name} debe de ser válido',
  cannotBeMoreThanCharacters: `{name} no puede contener más de {number} caracteres`,
  mustBeAtLeast: `{name} debe contener al menos {number} caracteres`,
  passwordsMustMatch: 'Las Contraseñas deben coincidir',
  yourAreNowSignedIn: `¡Ahora está registrado!`,
  close: `Cerrar`
}

```

#### 7.-Modify the `signin` page to include the form validation.

- We need to modify the `signin\index.vue` page document to include the form validation.

> client\pages\signin\index.vue
```html
<template>
  <v-container text-xs-center mt-5 pt-5>
    <!-- Signin Title -->
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <h1>{{ $t('welcomeBack') }}</h1>
      </v-flex>
    </v-layout>

    <!-- Error Alert -->
    <v-layout v-if="error" row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <form-alert :message="error"></form-alert>
      </v-flex>
    </v-layout>

    <!-- Signin Form -->
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <v-card color="secondary" dark>
          <v-container>
            <v-form
              ref="form"
              v-model="isFormValid"
              lazy-validation
              @submit.prevent="handleSigninUser"
            >
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    v-model="username"
                    :rules="usernameRules"
                    prepend-icon="face"
                    :label="$t('username')"
                    type="text"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    v-model="password"
                    :rules="passwordRules"
                    prepend-icon="extension"
                    :label="$t('password')"
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
                    color="accent"
                    type="submit"
                  >
                    <span slot="loader" class="custom-loader">
                      <v-icon light>cached</v-icon>
                    </span>
                    {{ $t('signin') }}</v-btn
                  >
                  <h3>
                    {{ $t('dontHaveAnAccount') }}
                    <nuxt-link :to="localePath('signup')">{{
                      $t('signup')
                    }}</nuxt-link>
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
import { mapGetters } from 'vuex'

export default {
  name: 'Signin',
  data() {
    return {
      isFormValid: false,
      username: '',
      password: '',
      usernameRules: [
        // Check if username in input
        username =>
          !!username ||
          this.$i18n.t('isRequired', { name: this.$i18n.t('username') }),
        // Make sure username is less than 10 characters
        username =>
          username.length <= 10 ||
          this.$i18n.t('cannotBeMoreThanCharacters', {
            name: this.$i18n.t('username'),
            number: 10
          })
      ],
      passwordRules: [
        password =>
          !!password ||
          this.$i18n.t('isRequired', { name: this.$i18n.t('password') }),
        // Make sure password is at least 4 characters
        password =>
          password.length >= 4 ||
          this.$i18n.t('mustBeAtLeast', {
            name: this.$i18n.t('password'),
            number: 4
          })
      ]
    }
  },
  computed: {
    ...mapGetters(['loading', 'error', 'user'])
  },
  watch: {
    user(value) {
      // if user value changes, redirect to home page
      if (value) {
        this.$router.push(this.localePath('index'))
      }
    }
  },
  methods: {
    handleSigninUser() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('signinUser', {
          username: this.username,
          password: this.password
        })
      }
    }
  }
}
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

#### 8.-Modify the `signup` page to include to include all the functionality .

- We need to modify the `signup\index.vue` page document to include all the functionality to manage the `Signup`.

> client\pages\signup\index.vue
```html
<template>
  <v-container text-xs-center mt-5 pt-5>
    <!-- Signup Title -->
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <h1>{{ $t('getStartedHere') }}</h1>
      </v-flex>
    </v-layout>

    <!-- Error Alert -->
    <v-layout v-if="error" row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <form-alert :message="error"></form-alert>
      </v-flex>
    </v-layout>

    <!-- Signup Form -->
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <v-card color="accent" dark>
          <v-container>
            <v-form
              ref="form"
              v-model="isFormValid"
              lazy-validation
              @submit.prevent="handleSignupUser"
            >
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    v-model="username"
                    :rules="usernameRules"
                    prepend-icon="face"
                    :label="$t('username')"
                    type="text"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    prepend-icon="email"
                    :label="$t('email')"
                    type="email"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    v-model="password"
                    :rules="passwordRules"
                    prepend-icon="extension"
                    :label="$t('password')"
                    type="password"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    v-model="passwordConfirmation"
                    :rules="passwordRules"
                    prepend-icon="gavel"
                    :label="$t('confirmPassword')"
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
                    <span slot="loader" class="custom-loader">
                      <v-icon light>cached</v-icon>
                    </span>
                    {{ $t('signup') }}</v-btn
                  >
                  <h3>
                    {{ $t('alreadyHaveAnAccount') }}
                    <router-link :to="localePath('signin')">{{
                      $t('signin')
                    }}</router-link>
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
import { mapGetters } from 'vuex'

export default {
  name: 'Signup',
  data() {
    return {
      isFormValid: false,
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      usernameRules: [
        username =>
          !!username ||
          this.$i18n.t('isRequired', { name: this.$i18n.t('username') }),
        username =>
          username.length <= 10 ||
          this.$i18n.t('cannotBeMoreThanCharacters', {
            name: this.$i18n.t('username'),
            number: 10
          })
      ],
      emailRules: [
        email =>
          !!email ||
          this.$i18n.t('isRequired', { name: this.$i18n.t('email') }),
        email =>
          /.@+./.test(email) ||
          this.$i18n.t('mustBeValid', { name: this.$i18n.t('email') })
      ],
      passwordRules: [
        password =>
          !!password ||
          this.$i18n.t('isRequired', { name: this.$i18n.t('password') }),
        password =>
          password.length >= 4 ||
          this.$i18n.t('mustBeAtLeast', {
            name: this.$i18n.t('password'),
            number: 4
          }),
        confirmation =>
          confirmation === this.password || this.$i18n.t('passwordsMustMatch')
      ]
    }
  },
  computed: {
    ...mapGetters(['loading', 'error', 'user'])
  },
  watch: {
    user(value) {
      // if user value changes, redirect to home page
      if (value) {
        this.$router.push(this.localePath('index'))
      }
    }
  },
  methods: {
    handleSignupUser() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('signupUser', {
          username: this.username,
          email: this.email,
          password: this.password
        })
      }
    }
  }
}
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

#### 9.-Modify the main `default` layout to include the `AuthSnackbar` and `AuthErrorSnackbar` components

- We need to modify the `default.vue` layout document to include the `AuthSnackbar` and `AuthErrorSnackbar` components.

> client\layouts\default.vue
```html
<template>
  <v-app style="background: #E3E3EE">
    <!-- Side Navbar -->
    <v-navigation-drawer v-model="sideNav" fixed app temporary>
      <v-toolbar color="accent" dark flat>
        <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
        <nuxt-link :to="localePath('index')" tag="span" style="cursor: pointer">
          <h1 class="title pl-3">VueShare</h1>
        </nuxt-link>
      </v-toolbar>

      <v-divider></v-divider>

      <!-- Side Navbar Links -->
      <v-list>
        <v-list-tile
          v-for="(item, i) in sideNavItems"
          :key="i"
          :to="localePath(item.link)"
          ripple
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{ item.title }}
          </v-list-tile-content>
        </v-list-tile>

        <!-- Signout Button -->
        <v-list-tile v-if="user" @click="handleSignoutUser">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ $t('signout') }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- Horizontal Navbar -->
    <v-toolbar fixed color="primary" dark>
      <!-- App Title -->
      <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-xs-only">
        <nuxt-link :to="localePath('index')" tag="span" style="cursor: pointer">
          VueShare
        </nuxt-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Search Input -->
      <v-text-field
        flex
        prepend-icon="search"
        color="accent"
        single-line
        hide-details
        :placeholder="$t('searchposts')"
      ></v-text-field>

      <v-spacer></v-spacer>

      <!-- Horizontal Navbar Links -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          v-for="(item, i) in horizontalNavItems"
          :key="i"
          :to="localePath(item.link)"
          flat
        >
          <v-icon class="hidden-sm-only" left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

      <!-- Profile Button -->
      <v-btn v-if="user" flat :to="localePath('profile')">
        <v-icon class="hidden-sm-only" left>account_box</v-icon>
        <v-badge right color="blue darken-2">
          <!-- <span slot="badge"></span> -->
          {{ $t('profile') }}
        </v-badge>
      </v-btn>

      <!-- Signout Button -->
      <v-btn v-if="user" flat @click="handleSignoutUser">
        <v-icon class="hidden-sm-only" left>exit_to_app</v-icon>
        {{ $t('signout') }}
      </v-btn>

      <v-toolbar-title class="hidden-xs-only">
        <nuxt-link
          v-for="(locale, i) in showLocales"
          :key="i"
          tag="span"
          style="cursor: pointer"
          class="lang-switcher"
          :to="switchLocalePath(locale.code)"
        >
          {{ locale.name }}
        </nuxt-link>
      </v-toolbar-title>
    </v-toolbar>

    <!-- App Content -->
    <main>
      <v-container class="mt-4">
        <transition name="fade">
          <nuxt />
        </transition>

        <!-- Auth Snackbar -->
        <v-snackbar
          v-model="authSnackbar"
          color="success"
          :timeout="5000"
          bottom
          left
        >
          <v-icon class="mr-3">check_circle</v-icon>
          <h3>{{ $t('yourAreNowSignedIn') }}</h3>
          <v-btn dark flat @click="authSnackbar = false">{{
            $t('close')
          }}</v-btn>
        </v-snackbar>

        <!-- Auth Error Snackbar -->
        <v-snackbar
          v-if="authError"
          v-model="authErrorSnackbar"
          color="info"
          :timeout="5000"
          bottom
          left
        >
          <v-icon class="mr-3">cancel</v-icon>
          <h3>{{ authError.message }}</h3>
          <v-btn dark flat :to="localePath('signin')">{{ $t('close') }}</v-btn>
        </v-snackbar>
      </v-container>
    </main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  head() {
    return this.$nuxtI18nSeo()
  },
  data() {
    return {
      sideNav: false,
      authSnackbar: false,
      authErrorSnackbar: false
    }
  },
  computed: {
    ...mapGetters(['authError', 'user']),
    horizontalNavItems() {
      let items = [
        { icon: 'chat', title: this.$i18n.t('posts'), link: 'posts' },
        { icon: 'lock_open', title: this.$i18n.t('signin'), link: 'signin' },
        { icon: 'create', title: this.$i18n.t('signup'), link: 'signup' }
      ]
      if (this.user) {
        items = [{ icon: 'chat', title: this.$i18n.t('posts'), link: 'posts' }]
      }
      return items
    },
    sideNavItems() {
      let items = [
        { icon: 'chat', title: this.$i18n.t('posts'), link: 'posts' },
        { icon: 'lock_open', title: this.$i18n.t('signin'), link: 'signin' },
        { icon: 'create', title: this.$i18n.t('signup'), link: 'signup' }
      ]
      if (this.user) {
        items = [
          { icon: 'chat', title: this.$i18n.t('posts'), link: 'posts' },
          {
            icon: 'stars',
            title: this.$i18n.t('createPost'),
            link: 'posts-add'
          },
          {
            icon: 'account_box',
            title: this.$i18n.t('profile'),
            link: 'profile'
          }
        ]
      }
      return items
    },
    showLocales() {
      return this.$i18n.locales.filter(
        locale => locale.code !== this.$i18n.locale
      )
    }
  },
  watch: {
    user(newValue, oldValue) {
      // if we had no value for user before, show snackbar
      if (oldValue === null) {
        this.authSnackbar = true
      }
    },
    authError(value) {
      // if auth error is not null, show auth error snackbar
      if (value !== null) {
        this.authErrorSnackbar = true
      }
    }
  },
  methods: {
    handleSignoutUser() {
      this.$store.dispatch('signoutUser')
    },
    toggleSideNav() {
      this.sideNav = !this.sideNav
    }
  }
}
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

#### 10.-We need to test if it works.

![](ErrorHandlingAndFormValidation.png)

![](ErrorHandlingAndFormValidation2.png)

![](ErrorHandlingAndFormValidation3.png)

![](ErrorHandlingAndFormValidation4.png)

![](ErrorHandlingAndFormValidation5.png)

![](ErrorHandlingAndFormValidation6.png)

![](ErrorHandlingAndFormValidation7.png)

![](ErrorHandlingAndFormValidation8.png)

![](ErrorHandlingAndFormValidation9.png)

![](ErrorHandlingAndFormValidation10.png)

![](ErrorHandlingAndFormValidation11.png)

![](ErrorHandlingAndFormValidation12.png)


## Section 10: Add Post / Infinite Scroll Components

### I.-Modify the server app to include the `infiniteScrollPosts` query.

#### 1.-Create the new `PostPage` type

- We are going to create the `post-page.type.ts` document with the new `PostPage` type.

> server\src\posts\graphql\types\post-page.type.ts
```ts
import { Field, ObjectType } from 'type-graphql'
import { Post } from '../post.model'
import { Ref } from 'typegoose'

@ObjectType()
export class PostPage {
  @Field(() => [Post], { nullable: "items" })
  readonly posts: Ref<Post>[]

  @Field(() => Boolean)
  hasMore: boolean
}
```

#### 2.-Modify the Posts service to include the new `infiniteScrollPosts` method.

- We need to modify the `\posts.service.ts` service document to include the new `infiniteScrollPosts` method.

> server\src\posts\posts.service.ts
```ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Post } from './model/post.model';
import { PostPage } from './graphql/types/post-page.type';
import { CreatePostDto } from './model/dtos/create-post.dto'
import { ModelType } from 'typegoose';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post) private readonly postModel: ModelType<Post>) { }

  async getPosts(): Promise<Post[] | null> {
    const posts = await this.postModel.find({})
      .sort({ createdDate: "desc" })
      .populate({
        path: "createdBy",
        model: "User"
      });
    return posts;
  }

  async infiniteScrollPosts(pageNum: number, pageSize: number): Promise<PostPage | null> {
    const skips = pageSize * (pageNum - 1)
    const posts = await this.postModel.find({})
      .sort({ createdDate: "desc" })
      .populate({
        path: "createdBy",
        model: "User"
      })
      .skip(skips)
      .limit(pageSize)
      .lean()
      const totalDocs = await this.postModel.countDocuments()
      const hasMore = totalDocs > pageSize * pageNum
      const postPage: PostPage = {
        posts,
        hasMore
      }
      return postPage
  }  

  async addPost(createPostDto: CreatePostDto): Promise<Post> {
    const newPost = new this.postModel(createPostDto);
    return await newPost.save();
  }
}

```

#### 3.-Modify the Posts resolver to include the new `infiniteScrollPosts` Query.

- We need to modify the `\posts.resolver.ts` resolver document to include the new `infiniteScrollPosts` Query.

> server\src\posts\graphql\posts.resolver.ts
```ts
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Int, ID } from 'type-graphql';
import { PostsService } from '../posts.service';
import { PostInput } from './inputs/post.input';
import { PostPage } from './types/post-page.type';
import { Post } from './types/post.type';

@Resolver()
export class PostsResolver {
  constructor(private readonly postsService: PostsService) { }

  @Query(() => [Post])
  async getPosts() {
    return await this.postsService.getPosts();
  }

  @Query(() => PostPage)
  async infiniteScrollPosts(
    @Args({ name: 'pageNum', type: () => Int}) pageNum: number,
    @Args({ name: 'pageSize', type: () => Int}) pageSize: number
  ) {
    return await this.postsService.infiniteScrollPosts(pageNum, pageSize);
  }

  @Mutation(() => Post)
  async addPostWithInput(@Args('input') input: PostInput) {
    const createdBy = input.creatorId;
    const { title, imageUrl, categories, description } = input
    return await this.postsService.addPost({ title, imageUrl, categories, description, createdBy });
  }
  @Mutation(() => Post)
  async addPost(
    @Args('title') title: string,
    @Args('imageUrl') imageUrl: string,
    @Args({ name: 'categories', type: () => [String], nullable: "items" }) categories: string[],
    @Args('description') description: string,
    @Args({ name: 'creatorId', type: () => ID}) creatorId: string,
  ) {
    const createdBy = creatorId;
    return await this.postsService.addPost({ title, imageUrl, categories, description, createdBy });
  }

}
```

#### 4.-Test if the new `infiniteScrollPosts` Query works propely

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
          "createdDate": "2019-08-11T05:28:28.697Z",
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
          "createdDate": "2019-08-11T05:09:49.634Z",
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
          "createdDate": "2019-06-22T11:27:58.416Z",
          "messages": null,
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

### II.-Modify the client app to make the Add Posts component using the new `infiniteScrollPosts` Query.

#### 1.-Create the `infiniteScrollPosts.gql` and `addPost.gql` documents with the `infiniteScrollPosts` Query and `addPost` mutation.

- We need to create the `addPost.gql` document with the `addPost` Mutation

> client\gql\addPost.gql
```graphql
mutation addPost(
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

```

- We need to create the `infiniteScrollPosts.gql` document with the new `infiniteScrollPosts` Query

> client\gql\infiniteScrollPosts.gql
```graphql
```

- We are going to modify the `` document to put only the fields that we really need.

> client\gql\getPosts.gql
```graphql
query getPosts {
  getPosts {
    _id
    title
    imageUrl
  }
} 
```

#### 2.-Update the `localization` documents with new entries

> client\lang\en-US.js
```js
export default {
  posts: 'Posts',
  signin: 'Sign in',
  signup: 'Sign up',
  searchposts: 'Search Posts',
  home: 'Home',
  createPost: 'Create Post',
  profile: 'Profile',
  signout: 'Signout',
  username: 'Username',
  password: 'Password',
  confirmPassword: 'Confirm Password',
  email: 'Email',
  dontHaveAnAccount: "Don't have an account?",
  alreadyHaveAnAccount: 'Already have an account?',
  welcomeBack: 'Welcome Back!',
  getStartedHere: 'Get Started Here',
  isRequired: '{name} is required',
  mustBeValid: '{name} must be valid',
  cannotBeMoreThanCharacters: '{name} cannot be more than {number} characters',
  mustBeAtLeast: '{name} must be at least {number} characters',
  passwordsMustMatch: 'Passwords must match',
  yourAreNowSignedIn: 'You are now signed in!',
  close: 'Close',
  sessionExpiredSignInAgain: 'Your session has ended. Please sign in again.',
  addPost: 'Add Post',
  postTitle: 'Post Title',
  imageUrl: 'Image URL',
  category: 'Category | Categories',
  categoryItems: {
    art: 'Art',
    education: 'Education',
    food: 'Food',
    furniture: 'Furniture',
    travel: 'Travel',
    photography: 'Photography',
    technology: 'Technology'
  },
  description: 'Description',
  submit: 'Submit',
  atLeastOne: 'At least one',
  likes: 'likes',
  comments: 'comments',
  added: 'Added',
  fetchMore: 'Fetch More'
}

```

> client\lang\es-ES.js
```js
export default {
  posts: 'Entradas',
  signin: 'Iniciar sesión',
  signup: 'Inscripción',
  searchposts: 'Buscar entradas',
  home: 'Inicio',
  createPost: 'Crear Entrada',
  profile: 'Perfil',
  signout: 'Cerrar sesión',
  username: 'Usuario',
  password: 'Contraseña',
  confirmPassword: 'Confirmar Contraseña',
  email: 'Email',
  dontHaveAnAccount: '¿No tiene una cuenta?',
  alreadyHaveAnAccount: '¿Ya tiene una cuenta?',
  welcomeBack: '¡Bienvenido de nuevo!',
  getStartedHere: 'Comience aquí',
  isRequired: '{name} es requerido',
  mustBeValid: '{name} debe de ser válido',
  cannotBeMoreThanCharacters:
    '{name} no puede contener más de {number} caracteres',
  mustBeAtLeast: '{name} debe contener al menos {number} caracteres',
  passwordsMustMatch: 'Las Contraseñas deben coincidir',
  yourAreNowSignedIn: '¡Ahora está registrado!',
  close: 'Cerrar',
  sessionExpiredSignInAgain:
    'Su sesión ha caducado. Por favor, inicie la sesión otra vez.',
  addPost: 'Añadir Entrada',
  postTitle: 'Título de la entrada',
  imageUrl: 'URL de la imagen',
  category: 'Categoría | Categorías',
  categoryItems: {
    art: 'Arte',
    education: 'Educación',
    food: 'Comida',
    furniture: 'Muebles',
    travel: 'Viajes',
    photography: 'Fotografía',
    technology: 'Tecnología'
  },
  description: 'Descripción',
  submit: 'Enviar',
  atLeastOne: 'Por lo menos una',
  likes: 'me gusta',
  comments: 'comentarios',
  added: 'Creado',
  fetchMore: 'Obtener más'
}

```

#### 3.-Modify the store to include the `addPost` action

- We need to modify the `store\index.js` store document to include the `addPost` action and mutation.

> client\store\index.js
```js
import { getPosts } from '~/gql/getPosts.gql'
import { getCurrentUser } from '~/gql/getCurrentUser.gql'
import { signinUser } from '~/gql/signinUser.gql'
import { signupUser } from '~/gql/signupUser.gql'
import { addPost } from '~/gql/addPost.gql'
import utils from '~/helpers/utils'

export const state = () => ({
  posts: [],
  user: null,
  loading: false,
  error: null,
  authError: null
})
export const mutations = {
  setPosts: (state, payload) => {
    state.posts = payload
  },
  addPost: (state, payload) => {
    const posts = state.posts
    posts.unshift(payload)
    state.posts = posts
  },
  setUser: (state, payload) => {
    state.user = payload
  },
  setLoading: (state, payload) => {
    state.loading = payload
  },
  clearUser: state => (state.user = null),
  setError: (state, payload) => {
    state.error = payload
  },
  clearError: state => (state.error = null),
  setAuthError: (state, payload) => {
    state.authError = payload
  },
  clearAuthError: state => (state.authError = null)
}
export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('getCurrentUser')
    await dispatch('getPosts')
  },
  async getPosts({ commit }) {
    commit('clearError')
    commit('setLoading', true)
    try {
      const result = await this.app.apolloProvider.defaultClient.query({
        query: getPosts
      })
      commit('setPosts', result.data.getPosts)
    } catch (error) {
      const currentError = utils.getCurrentGraphQLError(error)
      commit('setError', currentError)
      console.error(utils.getFirstGraphQLError(error))
    }
    commit('setLoading', false)
  },
  async addPost({ commit }, payload) {
    commit('clearError')
    commit('setLoading', true)
    try {
      await this.app.apolloProvider.defaultClient.mutate({
        mutation: addPost,
        variables: payload
      })
      const { _id, title, imageUrl } = payload
      const newPost = {
        _id,
        title,
        imageUrl
      }
      commit('addPost', newPost)
    } catch (error) {
      const currentError = utils.getCurrentGraphQLError(error)
      commit('setError', currentError)
      console.error(utils.getFirstGraphQLError(error))
    }
    commit('setLoading', false)
  },
  async logOut({ commit }) {
    this.app.$cookies.remove('apollo-token')
    await this.app.$apolloHelpers.onLogout()
    commit('clearUser')
  },
  async getCurrentUser({ commit, dispatch }) {
    if (!utils.isJwtTokenValid(this.app.$apolloHelpers.getToken())) {
      await dispatch('logOut')
      return
    }
    commit('setLoading', true)
    try {
      const result = await this.app.apolloProvider.defaultClient.query({
        query: getCurrentUser
      })
      // Add user data to state
      commit('setUser', result.data.getCurrentUser)
      commit('clearError')
      commit('clearAuthError')
    } catch (error) {
      const currentError = utils.getCurrentGraphQLError(error)
      if (currentError === 'Unauthorized') {
        commit('setAuthError', this.app.i18n.t('sessionExpiredSignInAgain'))
        await dispatch('logOut')
      } else {
        commit('setError', currentError)
      }
      console.error(utils.getFirstGraphQLError(error))
    }
    commit('setLoading', false)
  },
  async signinUser({ commit, dispatch }, payload) {
    commit('clearError')
    commit('setLoading', true)
    try {
      const result = await this.app.apolloProvider.defaultClient.mutate({
        mutation: signinUser,
        variables: payload
      })
      await this.app.$apolloHelpers.onLogin(result.data.signinUser.token)
      await dispatch('getCurrentUser')
    } catch (error) {
      const currentError = utils.getCurrentGraphQLError(error)
      commit('setError', currentError)
      console.error(utils.getFirstGraphQLError(error))
    }
    commit('setLoading', false)
  },
  async signupUser({ commit, dispatch }, payload) {
    commit('clearError')
    commit('setLoading', true)
    try {
      const result = await this.app.apolloProvider.defaultClient.mutate({
        mutation: signupUser,
        variables: payload
      })
      await this.app.$apolloHelpers.onLogin(result.data.signupUser.token)
      await dispatch('getCurrentUser')
    } catch (error) {
      const currentError = utils.getCurrentGraphQLError(error)
      commit('setError', currentError)
      console.error(utils.getFirstGraphQLError(error))
    }
    commit('setLoading', false)
  },
  async signoutUser({ dispatch }) {
    await dispatch('logOut')
    // redirect home - kick users out of private pages (i.e. profile)
    this.app.router.push(this.app.localePath('index'))
  }
}
export const getters = {
  posts: state => state.posts,
  user: state => state.user,
  loading: state => state.loading,
  error: state => state.error,
  authError: state => state.authError
}

```

#### 4.-Modify the `post Add` page to include all the functionality .

- We need to modify the `post\add.vue` page document to include all the functionality to manage the creation of a new `Post`

> client\pages\posts\add.vue
```html
<template>
  <v-container text-xs-center mt-5 pt-5>
    <!-- Add Post Title -->
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="primary--text">{{ $t('addPost') }}</h1>
      </v-flex>
    </v-layout>

    <!-- Error Alert -->
    <v-layout v-if="error" row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <form-alert :message="error"></form-alert>
      </v-flex>
    </v-layout>

    <!-- Add Post Form -->
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <v-form
          ref="form"
          v-model="isFormValid"
          lazy-validation
          @submit.prevent="handleAddPost"
        >
          <!-- Title Input -->
          <v-layout row>
            <v-flex xs12>
              <v-text-field
                v-model="title"
                :rules="titleRules"
                :label="$t('postTitle')"
                type="text"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>

          <!-- Image Url Input -->
          <v-layout row>
            <v-flex xs12>
              <v-text-field
                v-model="imageUrl"
                :rules="imageRules"
                :label="$t('imageUrl')"
                type="text"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>

          <!-- Image Preview -->
          <v-layout row>
            <v-flex xs12>
              <img :src="imageUrl" height="300px" />
            </v-flex>
          </v-layout>

          <!-- Categories Select -->
          <v-layout row>
            <v-flex xs12>
              <v-select
                v-model="categories"
                :rules="categoriesRules"
                item-text="text"
                item-value="value"
                :items="categoryItems"
                multiple
                :label="$tc('category', 2)"
              ></v-select>
            </v-flex>
          </v-layout>

          <!-- Description Text Area -->
          <v-layout row>
            <v-flex xs12>
              <v-textarea
                v-model="description"
                :rules="descRules"
                :label="$t('description')"
                type="text"
                required
              ></v-textarea>
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
                <span slot="loader" class="custom-loader">
                  <v-icon light>cached</v-icon>
                </span>
                {{ $t('submit') }}</v-btn
              >
            </v-flex>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AddPost',
  middleware: 'auth',
  data() {
    return {
      isFormValid: true,
      title: '',
      imageUrl: '',
      categories: [],
      categoryItems: [
        { value: 'Art', text: this.$i18n.t('categoryItems.art') },
        { value: 'Education', text: this.$i18n.t('categoryItems.education') },
        { value: 'Food', text: this.$i18n.t('categoryItems.food') },
        { value: 'Furniture', text: this.$i18n.t('categoryItems.furniture') },
        { value: 'Travel', text: this.$i18n.t('categoryItems.travel') },
        {
          value: 'Photography',
          text: this.$i18n.t('categoryItems.photography')
        },
        {
          value: 'Technology',
          text: this.$i18n.t('categoryItems.technology')
        }
      ],
      description: '',
      titleRules: [
        title =>
          !!title ||
          this.$i18n.t('isRequired', { name: this.$i18n.t('postTitle') }),
        title =>
          title.length <= 20 ||
          this.$i18n.t('cannotBeMoreThanCharacters', {
            name: this.$i18n.t('postTitle'),
            number: 20
          })
      ],
      imageRules: [
        image =>
          !!image ||
          this.$i18n.t('isRequired', { name: this.$i18n.t('imageUrl') })
      ],
      categoriesRules: [
        categories =>
          categories.length >= 1 ||
          this.$i18n.t('isRequired', {
            name: `${this.$i18n.t('atLeastOne')} ${this.$i18n.tc(
              'category',
              1
            )}`
          })
      ],
      descRules: [
        desc =>
          !!desc ||
          this.$i18n.t('isRequired', { name: this.$i18n.t('description') }),
        desc =>
          desc.length <= 200 ||
          this.$i18n.t('cannotBeMoreThanCharacters', {
            name: this.$i18n.t('description'),
            number: 200
          })
      ]
    }
  },
  computed: {
    ...mapGetters(['loading', 'error', 'user'])
  },
  methods: {
    handleAddPost() {
      if (this.$refs.form.validate()) {
        // add post action
        this.$store.dispatch('addPost', {
          title: this.title,
          imageUrl: this.imageUrl,
          categories: this.categories,
          description: this.description,
          creatorId: this.user._id
        })
        this.$router.push(this.localePath('index'))
      }
    }
  }
}
</script>

```

#### 5.-Modify the `posts` page to include all the functionality .

- We need to modify the `post\index.vue` page document to include all the functionality to show all the posts incrementally.

> client\pages\posts\index.vue
```html
<template>
  <v-container fluid grid-list-xl>
    <!-- Post Cards -->
    <v-layout v-if="infiniteScrollPosts" row wrap>
      <v-flex
        v-for="post in infiniteScrollPosts.posts"
        :key="post._id"
        xs12
        sm6
      >
        <v-card hover>
          <v-img :src="post.imageUrl" height="30vh" lazy></v-img>

          <v-card-actions>
            <v-card-title primary>
              <div>
                <div class="headline">{{ post.title }}</div>
                <span class="grey--text"
                  >{{ post.likes }} {{ $t('likes') }} -
                  {{ post.messages ? post.messages.length : 0 }}
                  {{ $t('comments') }}</span
                >
              </div>
            </v-card-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="showPostCreator = !showPostCreator">
              <v-icon>{{
                `keyboard_arrow_${showPostCreator ? 'up' : 'down'}`
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <!-- Post Creator Tile -->
          <v-slide-y-transition>
            <v-card-text v-show="showPostCreator" class="grey lighten-4">
              <v-list-tile avatar>
                <v-list-tile-avatar>
                  <img :src="post.createdBy.avatar" />
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title class="text--primary">{{
                    post.createdBy.username
                  }}</v-list-tile-title>
                  <v-list-tile-sub-title class="font-weight-thin"
                    >{{ $t('added') }}
                    {{ post.createdDate }}</v-list-tile-sub-title
                  >
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
          <v-btn color="info" @click="showMorePosts">{{
            $t('fetchMore')
          }}</v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { infiniteScrollPosts } from '~/gql/infiniteScrollPosts.gql'

const pageSize = 2

export default {
  name: 'Posts',
  data() {
    return {
      pageNum: 1,
      showMoreEnabled: true,
      showPostCreator: false
    }
  },
  apollo: {
    infiniteScrollPosts: {
      query: infiniteScrollPosts,
      variables: {
        pageNum: 1,
        pageSize
      }
    }
  },
  methods: {
    showMorePosts() {
      this.pageNum += 1
      // fetch more data and transform original result
      this.$apollo.queries.infiniteScrollPosts.fetchMore({
        variables: {
          // pageNum incremented by 1
          pageNum: this.pageNum,
          pageSize
        },
        updateQuery: (prevResult, { fetchMoreResult }) => {
          console.log('previous result', prevResult.infiniteScrollPosts.posts)
          console.log('fetch more result', fetchMoreResult)

          const newPosts = fetchMoreResult.infiniteScrollPosts.posts
          const hasMore = fetchMoreResult.infiniteScrollPosts.hasMore
          this.showMoreEnabled = hasMore

          return {
            infiniteScrollPosts: {
              __typename: prevResult.infiniteScrollPosts.__typename,
              // Merge previous posts with new posts
              posts: [...prevResult.infiniteScrollPosts.posts, ...newPosts],
              hasMore
            }
          }
        }
      })
    }
  }
}
</script>

```

#### 6.-We need to test if it works.

![](AddPostInfiniteScroll.png)

![](AddPostInfiniteScroll2.png)

![](AddPostInfiniteScroll3.png)

![](AddPostInfiniteScroll4.png)

![](AddPostInfiniteScroll5.png)

![](AddPostInfiniteScroll6.png)

![](AddPostInfiniteScroll7.png)

![](AddPostInfiniteScroll8.png)

![](AddPostInfiniteScroll9.png)

![](AddPostInfiniteScroll10.png)

![](AddPostInfiniteScroll11.png)

## Section 11: Post Component

### I.-Modify the server app to include the `getPost` Query and the `addPostMessage` mutation.

- The folder structure for the models have been changed. Basically the `GraphQL` and `Database(MongoDB)` models have been merged.

> Old format

Level 1 | Level 2 | Level 3 | Description
:-------:|----------|---------|---------
graphql |  |  |Everthing related to GraphQL
-| inputs | | input objects used in GraphQL Queries and Mutations
-|  | post-input.ts | input object used when creating a post
-| types | | object types used by GraphQL
-|  | post-page.type.ts | PostPage type 
-|  | post.type.ts | Post type 
-| posts.resolver.ts| | GraphQL Post resolver
model |  |  |Everthing related to database model
-| dtos | | dtos used mainly for service input objects
-|  | create-post-message.dto.ts | CreatePostMessage dto
-|  | create-post.dto.ts | CreatePost dto
-| post.model.ts | | Database Post model


> New format

Level 1 | Level 2 |  Description 
:-------:|----------|--------- 
dtos | | dtos used mainly for service input objects 
- | create-post-message.dto.ts | CreatePostMessage dto 
- | create-post.dto.ts | CreatePost dto
inputs | | input objects used in GraphQL Queries and Mutations
- | post-input.ts | input object used when creating a post
post.model.ts | | Database and GraphQL Post model
posts.resolver.ts| | GraphQL Post resolver


#### 1.-Update the `posts` module with the new structure and add the `getPost` Query and the `addPostMessage` mutation.

> server\src\posts\dtos\create-post-message.dto.ts
```ts
export class CreatePostMessageDto {
  readonly messageBody: string;
  readonly userId: string;
  readonly postId: string;
}
```

> server\src\posts\dtos\create-post.dto.ts
```ts
export class CreatePostDto {
  readonly title: string;
  readonly imageUrl: string;
  readonly categories: string[];
  readonly description: string;
  readonly createdBy: string;
}
```

> server\src\posts\inputs\post.input.ts
```ts
import { InputType, Field, ID } from 'type-graphql';

@InputType()
export class PostInput {
  @Field()
  readonly title: string;
  @Field()
  readonly imageUrl: string;
  @Field(() => [String], { nullable: "items" })
  readonly categories: string[];
  @Field()
  readonly description: string;
  @Field(() => ID)
  readonly creatorId: string;

}
```

> server\src\posts\types\post-page.type.ts
```ts
import { Field, ObjectType } from 'type-graphql'
import { Post } from '../post.model'
import { Ref } from 'typegoose'

@ObjectType()
export class PostPage {
  @Field(() => [Post], { nullable: "items" })
  readonly posts: Ref<Post>[]

  @Field(() => Boolean)
  hasMore: boolean
}
```

> server\src\posts\post.model.ts
```ts
import { prop, arrayProp, Typegoose, Ref } from 'typegoose';
import { IsDate, IsInt } from 'class-validator';
import { Field, ObjectType, ID, Int } from 'type-graphql';
import { User } from '../users/user.model'

@ObjectType()
export class Message extends Typegoose {
  @Field(() => ID)
  _id: string

  @Field()
  @prop({ required: true })
  messageBody: string;

  @IsDate()
  @Field()
  @prop({ default: Date.now })
  messageDate: Date;

  @Field(() => User)
  @prop({ required: true, ref: User })
  messageUser: Ref<User>
}

@ObjectType()
export class Post extends Typegoose {
  @Field(() => ID)
  _id: string

  @Field()
  @prop({ required: true })
  title: string; 

  @Field()
  @prop({ required: true })
  imageUrl: string;

  @Field(() => [String], { nullable: "items" })
  @prop({ required: true })
  categories: string[];

  @Field()
  @prop({ required: true })
  description: string;

  @IsDate()
  @Field()
  @prop({ default: Date.now })
  createdDate: Date

  @IsInt()
  @Field(() => Int, { nullable: true })
  @prop({ default: 0 })
  likes: number;

  @Field(() => User)
  @prop({ required: true, ref: User })
  createdBy: Ref<User>

  @Field(() => [Message], { nullable: "itemsAndList" })
  @arrayProp({ items: Message })
  messages?: Ref<Message>[]
}
```

> server\src\posts\posts.module.ts
```ts
import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose'
import { Post } from './post.model';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';

@Module({
  imports: [TypegooseModule.forFeature([Post])],
  providers: [PostsService, PostsResolver]
})
export class PostsModule { }
```

> server\src\posts\posts.resolver.ts
```ts
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Int, ID } from 'type-graphql';
import { PostsService } from './posts.service';
import { PostInput } from './inputs/post.input';
import { PostPage } from './types/post-page.type';
import { Post, Message } from './post.model';

@Resolver()
export class PostsResolver {
  constructor(private readonly postsService: PostsService) { }

  @Query(() => [Post])
  async getPosts() {
    return await this.postsService.getPosts();
  }

  @Query(() => Post)
  async getPost(@Args({ name: 'postId', type: () => ID}) postId: string) {
    return await this.postsService.getPost(postId);
  }

  @Query(() => PostPage)
  async infiniteScrollPosts(
    @Args({ name: 'pageNum', type: () => Int}) pageNum: number,
    @Args({ name: 'pageSize', type: () => Int}) pageSize: number
  ) {
    return await this.postsService.infiniteScrollPosts(pageNum, pageSize);
  }

  @Mutation(() => Post)
  async addPostWithInput(@Args('input') input: PostInput) {
    const createdBy = input.creatorId;
    const { title, imageUrl, categories, description } = input
    return await this.postsService.addPost({ title, imageUrl, categories, description, createdBy });
  }

  @Mutation(() => Post)
  async addPost(
    @Args('title') title: string,
    @Args('imageUrl') imageUrl: string,
    @Args({ name: 'categories', type: () => [String], nullable: "items" }) categories: string[],
    @Args('description') description: string,
    @Args({ name: 'creatorId', type: () => ID}) creatorId: string,
  ) {
    const createdBy = creatorId;
    return await this.postsService.addPost({ title, imageUrl, categories, description, createdBy });
  }

  @Mutation(() => Message)
  async addPostMessage(
    @Args('messageBody') messageBody: string,
    @Args({ name: 'userId', type: () => ID}) userId: string,
    @Args({ name: 'postId', type: () => ID}) postId: string,
  ) {
    return await this.postsService.addPostMessage({ messageBody, userId, postId });
  }

}
```

> server\src\posts\posts.service.ts
```ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Post, Message } from './post.model';
import { PostPage } from './types/post-page.type';
import { CreatePostDto } from './dtos/create-post.dto'
import { CreatePostMessageDto } from './dtos/create-post-message.dto'
import { ModelType, Ref } from 'typegoose';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post) private readonly postModel: ModelType<Post>) { }

  async getPosts(): Promise<Post[] | null> {
    const posts = await this.postModel.find({})
      .sort({ createdDate: "desc" })
      .populate({
        path: "createdBy",
        model: "User"
      });
    return posts;
  }

  async getPost(postId: string): Promise<Post | null> {
    const post = await this.postModel.findOne({ _id: postId })
      .populate({
        path: "messages.messageUser",
        model: "User"
      });
    return post;
  }

  async infiniteScrollPosts(pageNum: number, pageSize: number): Promise<PostPage | null> {
    const skips = pageSize * (pageNum - 1)
    const posts = await this.postModel.find({})
      .sort({ createdDate: "desc" })
      .populate({
        path: "createdBy",
        model: "User"
      })
      .skip(skips)
      .limit(pageSize)
      .lean()
    const totalDocs = await this.postModel.countDocuments()
    const hasMore = totalDocs > pageSize * pageNum
    const postPage: PostPage = {
      posts,
      hasMore
    }
    return postPage
  }

  async addPost(createPostDto: CreatePostDto): Promise<Post> {
    const newPost = new this.postModel(createPostDto);
    return await newPost.save();
  }

  async addPostMessage(createPostMessageDto: CreatePostMessageDto): Promise<Ref<Message>> {
    const newMessage = {
      messageBody: createPostMessageDto.messageBody,
      messageUser: createPostMessageDto.userId
    };
    const post = await this.postModel.findOneAndUpdate(
      // find post by id
      { _id: createPostMessageDto.postId },
      // prepend (push) new message to beginning of messages array
      { $push: { messages: { $each: [newMessage], $position: 0 } } },
      // return fresh document after update
      { new: true }
    ).populate({
      path: "messages.messageUser",
      model: "User"
    });
    return post.messages[0];

  }
}

```

#### 2.-Update the `users` module with the new structure and add the getPost` Query and the `addPostMessage` mutation.

> server\src\users\dtos\create-user.dto.ts
```ts
export class CreateUserDto {
  readonly username: string;
  readonly email: string;
  readonly password: string
}
```

> server\src\users\dtos\signin-user.dto.ts
```ts
export class SigninUserDto {
  readonly username: string;
  readonly password: string
}
```

> server\src\users\inputs\user.input.ts
```ts
import { InputType, Field } from 'type-graphql';

@InputType()
export class UserInput {
  @Field()
  readonly username: string;
  @Field()
  readonly email: string;
  @Field()
  readonly password: string;

}
```

> server\src\users\user.model.ts
```ts
import { Field, ObjectType, ID } from 'type-graphql'
import { arrayProp, prop, Typegoose, Ref } from 'typegoose'
import { IsEmail, IsDate, IsArray } from 'class-validator'
import { Post } from '../posts/post.model'

@ObjectType()
export class Token {
  @Field()
  readonly token: string  
}

@ObjectType()
export class User extends Typegoose {
  @Field(() => ID)
  _id: string

  @Field()  
  @prop({ required: true, unique: true, trim: true })
  username: string

  @IsEmail()
  @Field()  
  @prop({ required: true, trim: true })
  email: string

  @Field()
  @prop({ required: true, trim: true })
  password: string

  @Field({ nullable: true })
  @prop()
  avatar?: string

  @IsDate()
  @Field()  
  @prop({ default: Date.now })
  joinDate: Date

  @IsArray()
  @Field(() => [Post], { nullable: "itemsAndList" })  
  @arrayProp({ itemsRef: 'Post' })
  favorites?: Ref<Post>[]
}
```

> server\src\users\users.module.ts
```ts
import { Module } from '@nestjs/common'
import { TypegooseModule } from 'nestjs-typegoose'
import { User } from './user.model'
import { UsersService } from './users.service'
import { UsersResolver } from "./users.resolver"
import { ConfigService } from '../config/config.service'
import { AuthModule } from '../auth/auth.module'

@Module({
  imports: [
    TypegooseModule.forFeature([User]),
    AuthModule
  ],
  providers: [UsersService, UsersResolver, ConfigService]
})
export class UsersModule { }

```

> server\src\users\users.resolver.ts
```ts
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { UsersService } from './users.service'
import { User, Token } from './user.model'
import { GraphqlAuthGuard } from '../auth/graphql-auth.guard'
import { CurrentUser } from '../auth/current-user.decorator'
import { AuthService } from '../auth/auth.service'
import { UseGuards } from '@nestjs/common'

@Resolver()
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) { }

  @Query(() => User)
  @UseGuards(GraphqlAuthGuard)
  async getCurrentUser(@CurrentUser() currentUser: User) {
    return currentUser
  }

  @Query(() => [User])
  async getUsers() {
    return await this.usersService.getUsers()
  }

  @Mutation(() => Token)
  async signupUser(
    @Args('username') username: string,
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    return await this.authService.signUp({ username, email, password })
  }

  @Mutation(() => Token)
  async signinUser(
    @Args('username') username: string,
    @Args('password') password: string,
  ) {
    return await this.authService.signIn({ username,  password })
  }
}
```

> server\src\users\users.service.ts
```ts
import { Injectable } from '@nestjs/common'
import { InjectModel } from 'nestjs-typegoose'
import { User } from './user.model'
import { ModelType } from 'typegoose'

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private readonly userModel: ModelType<User>) { }

  async getUsers(): Promise<User[] | null> {
    return await this.userModel.find().exec()
  }

}

```

#### 3.-Update the `auth` module to change file locations because of the new structure.

> server\src\auth\auth.module.ts
```ts
import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { JwtStrategy } from './jwt.strategy'
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { TypegooseModule } from 'nestjs-typegoose'
import { User } from '../users/user.model';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('SECRET'),
        signOptions: {
            expiresIn: 216000, // 1 Hour: 60 * 60 * 60
        },
      }),
    }),
    TypegooseModule.forFeature([User]),    

  ],
  providers: [
    JwtStrategy,
    AuthService,
    ConfigService
  ],
  exports: [
    AuthService
  ],
})
export class AuthModule {}
```

> server\src\auth\auth.service.ts
```ts
import { Injectable, ConflictException, InternalServerErrorException, UnauthorizedException } from '@nestjs/common'
import { InjectModel } from 'nestjs-typegoose'
import { ModelType } from 'typegoose'
import { JwtService } from '@nestjs/jwt'
import { SigninUserDto } from '../users/dtos/signin-user.dto'
import { CreateUserDto } from '../users/dtos/create-user.dto'
import { Token, User } from '../users/user.model'
import { JwtPayload } from './jwt-payload.interface'
import md5 from 'md5'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User) private readonly userModel: ModelType<User>,
    private readonly jwtService: JwtService,
  ) { }

  async signUp(createUserDto: CreateUserDto): Promise<Token> {
    const username = createUserDto.username
    const user = await this.userModel.findOne({ username })
    if (user) {
      throw new ConflictException("User already exists")
    }
    const avatar = `http://gravatar.com/avatar/${md5(username)}?d=identicon`
    var salt = bcrypt.genSaltSync(10)
    var password = bcrypt.hashSync(createUserDto.password, salt)
    const currentUser = { ...createUserDto, avatar, password }
    const createdUser = new this.userModel(currentUser)
    try {
      const newUser = await createdUser.save()
      const token = this.getAccessToken(newUser)
      return token
    }
    catch (error) {
      throw new InternalServerErrorException()
    }

  }

  async signIn(signinUserDto: SigninUserDto): Promise<Token> {
    const { username, password } = signinUserDto
    const user = await this.userModel.findOne({ username })
    if (!user) {
      throw new UnauthorizedException("Invalid credentials")
    }
    const isValidPassword = await bcrypt.compare(password, user.password)
    if (!isValidPassword) {
      throw new UnauthorizedException("Invalid credentials")
    }
    const token = this.getAccessToken(user)
    return token
  }

  private async getAccessToken(user: User): Promise<Token> {
    const { username, email } = user
    const payload: JwtPayload = { username, email }
    const token = await this.jwtService.sign(payload)
    return { token }
  }
}

```

> server\src\auth\jwt.strategy.ts
```ts
import { PassportStrategy } from '@nestjs/passport'
import { Strategy, ExtractJwt } from 'passport-jwt'
import { Injectable, UnauthorizedException } from '@nestjs/common'
// import { JwtPayload } from './jwt-payload.interface'
import { InjectModel } from 'nestjs-typegoose'
import { User } from '../users/user.model'
import { ModelType } from 'typegoose'
import { ConfigService } from '../config/config.service'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(User) private readonly userModel: ModelType<User>,
    private readonly configService: ConfigService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromHeader("authorization"),
      ignoreExpiration: false,
      secretOrKey: configService.get('SECRET'),
    })
  }

  async validate(payload: any): Promise<User | null> {
    const { username } = payload
    const user = await this.userModel.findOne({
      username: username
    }).populate({
      path: "favorites",
      model: "Post"
    })
    if (!user) {
      throw new UnauthorizedException()
    }
    return user
  }
}
```

#### 4.-Update the `database.providers.ts` document to setup the `useFindAndModify` setting value.

> server\src\database\database.providers.ts
```ts
import { ConfigModule } from '../config/config.module'
import { ConfigService } from '../config/config.service'
import { TypegooseModule } from 'nestjs-typegoose'

export const databaseProviders = [
  TypegooseModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (config: ConfigService) => ({
      uri: config.get('MONGO_URI'),
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify : false,
    }),
  }),
]

```

#### 5.-We need to test if the new Query and Mutation work as expected

- The `schema` created with the new changes is the following one.

> server\schema.gql
```graphql
# -----------------------------------------------
# !!! THIS FILE WAS GENERATED BY TYPE-GRAPHQL !!!
# !!!   DO NOT MODIFY THIS FILE BY YOURSELF   !!!
# -----------------------------------------------

"""
The javascript `Date` as string. Type represents date and time as the ISO Date string.
"""
scalar DateTime

type Message {
  _id: ID!
  messageBody: String!
  messageDate: DateTime!
  messageUser: User!
}

type Mutation {
  signupUser(password: String!, email: String!, username: String!): Token!
  signinUser(password: String!, username: String!): Token!
  addPostWithInput(input: PostInput!): Post!
  addPost(creatorId: ID!, description: String!, categories: [String]!, imageUrl: String!, title: String!): Post!
  addPostMessage(postId: ID!, userId: ID!, messageBody: String!): Message!
}

type Post {
  _id: ID!
  title: String!
  imageUrl: String!
  categories: [String]!
  description: String!
  createdDate: DateTime!
  likes: Int
  createdBy: User!
  messages: [Message]
}

input PostInput {
  title: String!
  imageUrl: String!
  categories: [String]!
  description: String!
  creatorId: ID!
}

type PostPage {
  posts: [Post]!
  hasMore: Boolean!
}

type Query {
  getCurrentUser: User!
  getUsers: [User!]!
  getPosts: [Post!]!
  getPost(postId: ID!): Post!
  infiniteScrollPosts(pageSize: Int!, pageNum: Int!): PostPage!
}

type Token {
  token: String!
}

type User {
  _id: ID!
  username: String!
  email: String!
  password: String!
  avatar: String
  joinDate: DateTime!
  favorites: [ID]
}

```

> request
```graphql
query {
  getPost(postId: "5d505ca7c45cb259b0761e48") {
    _id
    title
    imageUrl
    categories
    description
    createdDate
    likes
    createdBy {
      _id
    }
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

```

> response
```json
{
  "data": {
    "getPost": {
      "_id": "5d505ca7c45cb259b0761e48",
      "title": "A tasty dinner",
      "imageUrl": "https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "categories": [
        "Food",
        "Travel"
      ],
      "description": "Picture of a recipe I would like to prepare",
      "createdDate": "2019-08-11T18:21:27.565Z",
      "likes": 0,
      "createdBy": {
        "_id": "5d35390f58729c10f875d41c"
      },
      "messages": [
        {
          "_id": "5d51a8bbffd7e267e86c34ed",
          "messageBody": "Please, explain to me how to prepare it!",
          "messageDate": "2019-08-12T17:58:19.241Z",
          "messageUser": {
            "_id": "5d35390f58729c10f875d41c",
            "username": "Fofo",
            "avatar": "http://gravatar.com/avatar/d7ec7a6a7980721f40631794b6e691f8?d=identicon"
          }
        },
        {
          "_id": "5d51a168ffd7e267e86c34eb",
          "messageBody": "I want to taste it!",
          "messageDate": "2019-08-12T17:27:04.085Z",
          "messageUser": {
            "_id": "5d35390f58729c10f875d41c",
            "username": "Fofo",
            "avatar": "http://gravatar.com/avatar/d7ec7a6a7980721f40631794b6e691f8?d=identicon"
          }
        },
        {
          "_id": "5d51a109ffd7e267e86c34ea",
          "messageBody": "It looks yummy",
          "messageDate": "2019-08-12T17:25:29.649Z",
          "messageUser": {
            "_id": "5d3730452dbcac4a24749fca",
            "username": "Juan",
            "avatar": "http://gravatar.com/avatar/92eaf3719159c372f3d50337e0a14f57?d=identicon"
          }
        }
      ]
    }
  }
}
```

> Request
```graphql
mutation($messageBody: String!, $userId: ID!, $postId: ID!) {
  addPostMessage(messageBody: $messageBody, userId: $userId, postId: $postId) {
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
```

> Variables
```json
{
  "messageBody": "Let's make iy by ourselves",
  "userId": "5d3730452dbcac4a24749fca",
  "postId": "5d505ca7c45cb259b0761e48"
}
```

> Response
```json
{
  "data": {
    "addPostMessage": {
      "_id": "5d538c2115248e14e09241ac",
      "messageBody": "Let's make iy by ourselves",
      "messageDate": "2019-08-14T04:20:49.588Z",
      "messageUser": {
        "_id": "5d3730452dbcac4a24749fca",
        "username": "Juan",
        "avatar": "http://gravatar.com/avatar/92eaf3719159c372f3d50337e0a14f57?d=identicon"
      }
    }
  }
}
```

### II.-Modify the client app to add the individual `Post` pages.

#### 1.-Update the `localization` documents with new entries

> client\lang\en-US.js
```js
export default {
  posts: 'Posts',
  signin: 'Sign in',
  signup: 'Sign up',
  searchposts: 'Search Posts',
  home: 'Home',
  createPost: 'Create Post',
  profile: 'Profile',
  signout: 'Signout',
  username: 'Username',
  password: 'Password',
  confirmPassword: 'Confirm Password',
  email: 'Email',
  dontHaveAnAccount: "Don't have an account?",
  alreadyHaveAnAccount: 'Already have an account?',
  welcomeBack: 'Welcome Back!',
  getStartedHere: 'Get Started Here',
  isRequired: '{name} is required',
  mustBeValid: '{name} must be valid',
  cannotBeMoreThanCharacters: '{name} cannot be more than {number} characters',
  mustBeAtLeast: '{name} must be at least {number} characters',
  passwordsMustMatch: 'Passwords must match',
  yourAreNowSignedIn: 'You are now signed in!',
  close: 'Close',
  sessionExpiredSignInAgain: 'Your session has ended. Please sign in again.',
  addPost: 'Add Post',
  postTitle: 'Post Title',
  imageUrl: 'Image URL',
  category: 'Category | Categories',
  categoryItems: {
    art: 'Art',
    education: 'Education',
    food: 'Food',
    furniture: 'Furniture',
    travel: 'Travel',
    photography: 'Photography',
    technology: 'Technology'
  },
  description: 'Description',
  submit: 'Submit',
  atLeastOne: 'At least one',
  likes: 'likes',
  comments: 'comments',
  added: 'Added',
  fetchMore: 'Fetch More',
  message: 'Message | Messages',
  clickToEnlargeImage: 'Click to enlarge image',
  addMessage: 'Add Message',
  pageNotFound: '404 Not Found',
  otherError: 'An error occurred',
  homePage: 'Home Page'
}

```

> client\lang\es-ES.js
```js
export default {
  posts: 'Entradas',
  signin: 'Iniciar sesión',
  signup: 'Inscripción',
  searchposts: 'Buscar entradas',
  home: 'Inicio',
  createPost: 'Crear Entrada',
  profile: 'Perfil',
  signout: 'Cerrar sesión',
  username: 'Usuario',
  password: 'Contraseña',
  confirmPassword: 'Confirmar Contraseña',
  email: 'Email',
  dontHaveAnAccount: '¿No tiene una cuenta?',
  alreadyHaveAnAccount: '¿Ya tiene una cuenta?',
  welcomeBack: '¡Bienvenido de nuevo!',
  getStartedHere: 'Comience aquí',
  isRequired: '{name} es requerido',
  mustBeValid: '{name} debe de ser válido',
  cannotBeMoreThanCharacters:
    '{name} no puede contener más de {number} caracteres',
  mustBeAtLeast: '{name} debe contener al menos {number} caracteres',
  passwordsMustMatch: 'Las Contraseñas deben coincidir',
  yourAreNowSignedIn: '¡Ahora está registrado!',
  close: 'Cerrar',
  sessionExpiredSignInAgain:
    'Su sesión ha caducado. Por favor, inicie la sesión otra vez.',
  addPost: 'Añadir Entrada',
  postTitle: 'Título de la entrada',
  imageUrl: 'URL de la imagen',
  category: 'Categoría | Categorías',
  categoryItems: {
    art: 'Arte',
    education: 'Educación',
    food: 'Comida',
    furniture: 'Muebles',
    travel: 'Viajes',
    photography: 'Fotografía',
    technology: 'Tecnología'
  },
  description: 'Descripción',
  submit: 'Enviar',
  atLeastOne: 'Por lo menos una',
  likes: 'me gusta',
  comments: 'comentarios',
  added: 'Creado',
  fetchMore: 'Obtener más',
  message: 'Mensaje | Mensajes',
  clickToEnlargeImage: 'Haga clic para ampliar la imagen',
  addMessage: 'Añadir Mensaje',
  pageNotFound: '404 No encontrado',
  otherError: 'Oucrrió un error',
  homePage: 'Página inicial'
}

```

#### 2.-Create the `getPost.gql` and `addPostMessage.gql` documents with the `getPost` Query and `addPostMessage` mutation.

- We need to create the `getPost.gql` document with the `getPost` Query

> client\gql\getPost.gql
```graphql
query getPost($postId: ID!) {
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

```

- We need to create the `addPostMessage.gql` document with the `addPostMessage` Mutation

> client\gql\addPostMessage.gql
```graphql
mutation addPostMessage($messageBody: String!, $userId: ID!, $postId: ID!) {
  addPostMessage(messageBody: $messageBody, userId: $userId, postId: $postId) {
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

```

#### 3.-Create the individual `Post` page.

- We need to create the `\posts\_id.vue` Post page document.

> client\pages\posts\_id.vue
```html
<template>
  <v-container v-if="getPost" class="mt-3" flexbox center>
    <!-- Post Card -->
    <v-layout row wrap>
      <v-flex xs12>
        <v-card hover>
          <v-card-title>
            <h1>{{ getPost.title }}</h1>
            <v-btn v-if="user" large icon>
              <v-icon large color="grey">favorite</v-icon>
            </v-btn>
            <h3 class="ml-3 font-weight-thin">
              {{ getPost.likes }} {{ $t('likes').toUpperCase() }}
            </h3>
            <v-spacer></v-spacer>
            <v-icon color="info" large @click="goToPreviousPage"
              >arrow_back</v-icon
            >
          </v-card-title>

          <v-tooltip right>
            <span>{{ $t('clickToEnlargeImage') }}</span>
            <v-img
              id="post__image"
              slot="activator"
              :src="getPost.imageUrl"
              @click="toggleImageDialog"
            ></v-img>
          </v-tooltip>

          <!-- Post Image Dialog -->
          <v-dialog v-model="dialog">
            <v-card>
              <v-img :src="getPost.imageUrl" height="80vh"></v-img>
            </v-card>
          </v-dialog>

          <v-card-text>
            <span v-for="(category, index) in getPost.categories" :key="index">
              <v-chip class="mb-3" color="accent" text-color="white">{{
                category
              }}</v-chip>
            </span>
            <h3>{{ getPost.description }}</h3>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <!-- Messages Section -->
    <div class="mt-3">
      <!-- Message Input -->
      <v-layout v-if="user" class="mb-3">
        <v-flex xs12>
          <v-form
            ref="form"
            v-model="isFormValid"
            lazy-validation
            @submit.prevent="handleAddPostMessage"
          >
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  v-model="messageBody"
                  :rules="messageRules"
                  clearable
                  :append-outer-icon="messageBody && 'send'"
                  :label="$t('addMessage')"
                  type="text"
                  prepend-icon="email"
                  required
                  @click:append-outer="handleAddPostMessage"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-form>
        </v-flex>
      </v-layout>

      <!-- Messages -->
      <v-layout row wrap>
        <v-flex xs12>
          <v-list subheader two-line>
            <v-subheader
              >{{ $tc('message', 2) }} ({{
                getPost.messages.length
              }})</v-subheader
            >

            <template v-for="message in getPost.messages">
              <v-divider :key="message._id"></v-divider>

              <v-list-tile :key="message.title" avatar inset>
                <v-list-tile-avatar>
                  <img :src="message.messageUser.avatar" />
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ message.messageBody }}
                  </v-list-tile-title>
                  <v-list-tile-sub-title>
                    {{ message.messageUser.username }}
                    <span class="grey--text text--lighten-1 hidden-xs-only">{{
                      message.messageDate
                    }}</span>
                  </v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action class="hidden-xs-only">
                  <v-icon
                    :color="checkIfOwnMessage(message) ? 'accent' : 'grey'"
                    >chat_bubble</v-icon
                  >
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
import { mapGetters } from 'vuex'
import { getPost } from '~/gql/getPost.gql'
import { addPostMessage } from '~/gql/addPostMessage.gql'
import utils from '~/helpers/utils'

export default {
  name: 'Post',
  validate({ params }) {
    return utils.isValidObjectID(params.id)
  },
  data() {
    return {
      postId: this.$route.params.id,
      dialog: false,
      messageBody: '',
      isFormValid: true,
      messageRules: [
        message =>
          !!message ||
          this.$i18n.t('isRequired', { name: this.$i18n.tc('message', 1) }),
        message =>
          (message && message.length <= 75) ||
          this.$i18n.t('cannotBeMoreThanCharacters', {
            name: this.$i18n.tc('message', 1),
            number: 75
          })
      ]
    }
  },
  apollo: {
    getPost: {
      query: getPost,
      variables() {
        return {
          postId: this.postId
        }
      }
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    handleAddPostMessage() {
      if (this.$refs.form.validate()) {
        const variables = {
          messageBody: this.messageBody,
          userId: this.user._id,
          postId: this.postId
        }
        this.$apollo
          .mutate({
            mutation: addPostMessage,
            variables,
            update: (cache, { data: { addPostMessage } }) => {
              const data = cache.readQuery({
                query: getPost,
                variables: { postId: this.postId }
              })
              data.getPost.messages.unshift(addPostMessage)
              cache.writeQuery({
                query: getPost,
                variables: { postId: this.postId },
                data
              })
            }
          })
          .then(({ data }) => {
            this.$refs.form.reset()
            console.log(data.addPostMessage)
          })
          .catch(err => console.error(err))
      }
    },
    goToPreviousPage() {
      this.$router.go(-1)
    },
    toggleImageDialog() {
      if (window.innerWidth > 500) {
        this.dialog = !this.dialogs
      }
    },
    checkIfOwnMessage(message) {
      return this.user && this.user._id === message.messageUser._id
    }
  }
}
</script>

<style scoped>
#post__image {
  height: 400px !important;
}
</style>

```

#### 4.-Update the `Posts` page to call the new individual `Post` page

- We need to modify the `posts\index.vue` document.

> client\pages\posts\index.vue
```html
<template>
  <v-container fluid grid-list-xl>
    <!-- Post Cards -->
    <v-layout v-if="infiniteScrollPosts" row wrap>
      <v-flex
        v-for="post in infiniteScrollPosts.posts"
        :key="post._id"
        xs12
        sm6
      >
        <v-card hover>
          <v-img
            :src="post.imageUrl"
            height="30vh"
            lazy
            @click.native="goToPost(post._id)"
          ></v-img>

          <v-card-actions>
            <v-card-title primary>
              <div>
                <div class="headline">{{ post.title }}</div>
                <span class="grey--text"
                  >{{ post.likes }} {{ $t('likes') }} -
                  {{ post.messages ? post.messages.length : 0 }}
                  {{ $t('comments') }}</span
                >
              </div>
            </v-card-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="showPostCreator = !showPostCreator">
              <v-icon>{{
                `keyboard_arrow_${showPostCreator ? 'up' : 'down'}`
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <!-- Post Creator Tile -->
          <v-slide-y-transition>
            <v-card-text v-show="showPostCreator" class="grey lighten-4">
              <v-list-tile avatar>
                <v-list-tile-avatar>
                  <img :src="post.createdBy.avatar" />
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title class="text--primary">{{
                    post.createdBy.username
                  }}</v-list-tile-title>
                  <v-list-tile-sub-title class="font-weight-thin"
                    >{{ $t('added') }}
                    {{ post.createdDate }}</v-list-tile-sub-title
                  >
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
          <v-btn color="info" @click="showMorePosts">{{
            $t('fetchMore')
          }}</v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { infiniteScrollPosts } from '~/gql/infiniteScrollPosts.gql'

const pageSize = 2

export default {
  name: 'Posts',
  data() {
    return {
      pageNum: 1,
      showMoreEnabled: true,
      showPostCreator: false
    }
  },
  apollo: {
    infiniteScrollPosts: {
      query: infiniteScrollPosts,
      variables: {
        pageNum: 1,
        pageSize
      }
    }
  },
  methods: {
    showMorePosts() {
      this.pageNum += 1
      // fetch more data and transform original result
      this.$apollo.queries.infiniteScrollPosts.fetchMore({
        variables: {
          // pageNum incremented by 1
          pageNum: this.pageNum,
          pageSize
        },
        updateQuery: (prevResult, { fetchMoreResult }) => {

          const newPosts = fetchMoreResult.infiniteScrollPosts.posts
          const hasMore = fetchMoreResult.infiniteScrollPosts.hasMore
          this.showMoreEnabled = hasMore

          return {
            infiniteScrollPosts: {
              __typename: prevResult.infiniteScrollPosts.__typename,
              // Merge previous posts with new posts
              posts: [...prevResult.infiniteScrollPosts.posts, ...newPosts],
              hasMore
            }
          }
        }
      })
    },
    goToPost(postId) {
      this.$router.push(`${this.localePath('posts')}/${postId}`)
    }
  }
}
</script>

```

#### 5.-Update the `Home` page to call the new individual `Post` page

- We need to modify the main `pages\index.vue` Home page.

> client\pages\index.vue
```html
<template>
  <v-container text-xs-center>
    <v-layout row>
      <v-dialog v-model="loading" persistent fullscreen>
        <v-container fill-height>
          <v-layout row justify-center align-center>
            <v-progress-circular
              indeterminate
              :size="70"
              :width="7"
              color="secondary"
            ></v-progress-circular>
          </v-layout>
        </v-container>
      </v-dialog>
    </v-layout>

    <v-flex xs12>
      <v-carousel
        v-if="!loading && posts.length > 0"
        v-bind="{ cycle: true }"
        interval="3000"
      >
        <v-carousel-item
          v-for="post in posts"
          :key="post._id"
          :src="post.imageUrl"
          @click.native="goToPost(post._id)"
        >
          <h1 id="carousel__title">{{ post.title }}</h1>
        </v-carousel-item>
      </v-carousel>
    </v-flex>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['loading', 'posts'])
  },
  methods: {
    goToPost(postId) {
      this.$router.push(`${this.localePath('posts')}/${postId}`)
    }
  }
}
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


#### 6.-Modify the `utils` helper to add a new function

- We need to modify the `utils.js` document to add the new `isValidObjectID` function.

> client\helpers\utils.js
```js
const utils = {
  isJwtTokenValid(jwtToken) {
    if (!jwtToken) {
      return false
    }
    const items = jwtToken.split('.')
    if (!items) {
      return false
    }
    return items.length > 2
  },
  getFirstGraphQLError(graphQLError) {
    if (
      graphQLError &&
      graphQLError.graphQLErrors &&
      graphQLError.graphQLErrors.length > 0
    ) {
      return graphQLError.graphQLErrors[0]
    }
    if (graphQLError && graphQLError.message) {
      return graphQLError.message
    }
    return graphQLError
  },
  getCurrentGraphQLError(graphQLError) {
    const error = this.getFirstGraphQLError(graphQLError)
    if (!error) {
      return graphQLError
    }
    const currentError =
      error.message && (!error.message.message || !error.message.error)
        ? error.message
        : error.error
        ? error.error
        : error.message && error.message.message
        ? error.message.message
        : error.message && error.message.error
        ? error.message.error
        : error
    return currentError
  },
  isValidObjectID(str) {
    str = str + ''
    const len = str.length
    let valid = false
    if (len === 12 || len === 24) {
      valid = /^[0-9a-fA-F]+$/.test(str)
    }
    return valid
  }
}

export default utils

```

#### 7.-Update the `Error` page to localise it

- We need to modify the `layouts\error.vue` Error page to localize it.

> client\layouts\error.vue
```html
<template>
  <v-container>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink :to="localePath('index')">
      {{ $t('homePage') }}
    </NuxtLink>
  </v-container>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  data() {
    return {
      pageNotFound: this.$i18n.t('pageNotFound'),
      otherError: this.$i18n.t('otherError')
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>

```

#### 8.-We need to test if it works.

![](PostComponent.png)

![](PostComponent2.png)

![](PostComponent3.png)

![](PostComponent4.png)

![](PostComponent5.png)

![](PostComponent6.png)

![](PostComponent7.png)

![](PostComponent8.png)

![](PostComponent9.png)

![](PostComponent10.png)

![](PostComponent11.png)

![](PostComponent12.png)

![](PostComponent13.png)

![](PostComponent14.png)

## Section 12: Like / Unlike Post

### I.-Modify the server app to include the `LikesFaves` Type and the `likePost` and `unlikePost` Mutations.

#### 1.-Create the new `PostPage` type

- We are going to create the `likes-faves.type.ts` document with the new `LikesFaves` type.

> server\src\posts\types\likes-faves.type.ts
```ts
import { Field, ObjectType, Int } from 'type-graphql'
import { Ref } from 'typegoose'
import { Post } from '../post.model'

@ObjectType()
export class LikesFaves {
  @Field(() => Int)
  likes: number

  @Field(() => [Post], { nullable: "items" })
  readonly favorites: Ref<Post>[]
}
```

#### 2.-Modify the Posts service to include the new `likePost` and `unlikePost` methods.

- We need to modify the `\posts.service.ts` service document to include the new `likePost` and `unlikePost` methods.

> server\src\posts\posts.service.ts
```ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Post, Message } from './post.model';
import { PostPage } from './types/post-page.type';
import { LikesFaves } from './types/likes-faves.type';
import { CreatePostDto } from './dtos/create-post.dto'
import { CreatePostMessageDto } from './dtos/create-post-message.dto'
import { ModelType, Ref } from 'typegoose';
import { User } from '../users/user.model';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post) private readonly postModel: ModelType<Post>,
    @InjectModel(User) private readonly userModel: ModelType<User>
  ) { }

  async getPosts(): Promise<Post[] | null> {
    const posts = await this.postModel.find({})
      .sort({ createdDate: "desc" })
      .populate({
        path: "createdBy",
        model: "User"
      });
    return posts;
  }

  async getPost(postId: string): Promise<Post | null> {
    const post = await this.postModel.findOne({ _id: postId })
      .populate({
        path: "messages.messageUser",
        model: "User"
      });
    return post;
  }

  async infiniteScrollPosts(pageNum: number, pageSize: number): Promise<PostPage | null> {
    const skips = pageSize * (pageNum - 1)
    const posts = await this.postModel.find({})
      .sort({ createdDate: "desc" })
      .populate({
        path: "createdBy",
        model: "User"
      })
      .skip(skips)
      .limit(pageSize)
      .lean()
    const totalDocs = await this.postModel.countDocuments()
    const hasMore = totalDocs > pageSize * pageNum
    const postPage: PostPage = {
      posts,
      hasMore
    }
    return postPage
  }

  async addPost(createPostDto: CreatePostDto): Promise<Post> {
    const newPost = new this.postModel(createPostDto);
    return await newPost.save();
  }

  async addPostMessage(createPostMessageDto: CreatePostMessageDto): Promise<Ref<Message>> {
    const newMessage = {
      messageBody: createPostMessageDto.messageBody,
      messageUser: createPostMessageDto.userId
    };
    const post = await this.postModel.findOneAndUpdate(
      // find post by id
      { _id: createPostMessageDto.postId },
      // prepend (push) new message to beginning of messages array
      { $push: { messages: { $each: [newMessage], $position: 0 } } },
      // return fresh document after update
      { new: true }
    ).populate({
      path: "messages.messageUser",
      model: "User"
    });
    return post.messages[0];
  }

  async likePost(postId: string, username: string): Promise<LikesFaves> {
    const post = await this.postModel.findOneAndUpdate(
      { _id: postId },
      { $inc: { likes: 1 } },
      { new: true }
    );
    // Find User, add id of post to its favorites array (which will be populated as Posts)
    const user = await this.userModel.findOneAndUpdate(
      { username },
      { $addToSet: { favorites: postId } },
      { new: true }
    ).populate({
      path: "favorites",
      model: "Post"
    });
    // Return only likes from 'post' and favorites from 'user'
    const likesFaves: LikesFaves = {
      likes: post.likes,
      favorites: user.favorites
    }    
    return likesFaves;
  }

  async unlikePost(postId: string, username: string): Promise<LikesFaves> {
      // Find Post, add -1 to its 'like' value
      const post = await this.postModel.findOneAndUpdate(
        { _id: postId },
        { $inc: { likes: -1 } },
        { new: true }
      );
      // Find User, remove id of post from its favorites array (which will be populated as Posts)
      const user = await this.userModel.findOneAndUpdate(
        { username },
        { $pull: { favorites: postId } },
        { new: true }
      ).populate({
        path: "favorites",
        model: "Post"
      });
    // Return only likes from 'post' and favorites from 'user'
    const likesFaves: LikesFaves = {
      likes: post.likes,
      favorites: user.favorites
    }    
    return likesFaves;
  }  
}

```

#### 3.-Modify the Posts resolver to include the new `likePost` and `unlikePost` Mutations.

- We need to modify the `posts.resolver.ts` resolver document to include the new `likePost` and `unlikePost` Mutations.

> server\src\posts\posts.resolver.ts
```ts
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Int, ID } from 'type-graphql';
import { PostsService } from './posts.service';
import { PostInput } from './inputs/post.input';
import { PostPage } from './types/post-page.type';
import { LikesFaves } from './types/likes-faves.type';
import { Post, Message } from './post.model';

@Resolver()
export class PostsResolver {
  constructor(private readonly postsService: PostsService) { }

  @Query(() => [Post])
  async getPosts() {
    return await this.postsService.getPosts();
  }

  @Query(() => Post)
  async getPost(@Args({ name: 'postId', type: () => ID}) postId: string) {
    return await this.postsService.getPost(postId);
  }

  @Query(() => PostPage)
  async infiniteScrollPosts(
    @Args({ name: 'pageNum', type: () => Int}) pageNum: number,
    @Args({ name: 'pageSize', type: () => Int}) pageSize: number
  ) {
    return await this.postsService.infiniteScrollPosts(pageNum, pageSize);
  }

  @Mutation(() => Post)
  async addPostWithInput(@Args('input') input: PostInput) {
    const createdBy = input.creatorId;
    const { title, imageUrl, categories, description } = input
    return await this.postsService.addPost({ title, imageUrl, categories, description, createdBy });
  }

  @Mutation(() => Post)
  async addPost(
    @Args('title') title: string,
    @Args('imageUrl') imageUrl: string,
    @Args({ name: 'categories', type: () => [String], nullable: "items" }) categories: string[],
    @Args('description') description: string,
    @Args({ name: 'creatorId', type: () => ID}) creatorId: string,
  ) {
    const createdBy = creatorId;
    return await this.postsService.addPost({ title, imageUrl, categories, description, createdBy });
  }

  @Mutation(() => Message)
  async addPostMessage(
    @Args('messageBody') messageBody: string,
    @Args({ name: 'userId', type: () => ID}) userId: string,
    @Args({ name: 'postId', type: () => ID}) postId: string,
  ) {
    return await this.postsService.addPostMessage({ messageBody, userId, postId });
  }

  @Mutation(() => LikesFaves)
  async likePost(
    @Args({ name: 'postId', type: () => ID}) postId: string,
    @Args('username') username: string
  ) {
    return await this.postsService.likePost( postId, username );
  }

  @Mutation(() => LikesFaves)
  async unlikePost(
    @Args({ name: 'postId', type: () => ID}) postId: string,
    @Args('username') username: string
  ) {
    return await this.postsService.unlikePost( postId, username );
  }

}
```

#### 4.-Modify the Posts module to include the User Typegoose module

- We need to modify the `posts\posts.module.ts` resolver document to the `User` Typegoose module.

> server\src\posts\posts.module.ts
```ts
import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose'
import { Post } from './post.model';
import { User } from '../users/user.model';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';

@Module({
  imports: [
    TypegooseModule.forFeature([User]),
    TypegooseModule.forFeature([Post])
  ],
  providers: [PostsService, PostsResolver]
})
export class PostsModule { }
```


#### 5.-Test if the new `likePost` and `unlikePost` Mutations work propely

> query
```graphql
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
```

> variables
```json
{
  "postId": "5d504c6ad1edca3fc41f703a",
  "username": "Juan"
}
```

> response
```json
{
  "data": {
    "likePost": {
      "likes": 1,
      "favorites": [
        {
          "_id": "5d504c6ad1edca3fc41f703a",
          "title": "Abstract Painting",
          "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Vassily_Kandinsky%2C_1939_-_Composition_10.jpg/1024px-Vassily_Kandinsky%2C_1939_-_Composition_10.jpg"
        }
      ]
    }
  }
}
```

> query
```graphql
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
```

> variables
```json
{
  "postId": "5d504c6ad1edca3fc41f703a",
  "username": "Juan"
}
```

> response
```json
{
  "data": {
    "unlikePost": {
      "likes": 0,
      "favorites": []
    }
  }
}
```

### II.-Modify the client app to add the Likes / Unlikes on the `Post` pages.

#### 1.-Create the `likePost.gql` and `unlikePost.gql` documents with the `likePost` and `unlikePost` mutations.

- We need to create the `likePost.gql` document with the `likePost` Mutation.

> client\gql\likePost.gql
```graphql
mutation likePost($postId: ID!, $username: String!) {
  likePost(postId: $postId, username: $username) {
    likes
    favorites {
      _id
      title
      imageUrl
    }
  }
}
```

- We need to create the `unlikePost.gql` document with the `unlikePost` Mutation.

> client\gql\unlikePost.gql
```graphql
mutation unlikePost($postId: ID!, $username: String!) {
  unlikePost(postId: $postId, username: $username) {
    likes
    favorites {
      _id
      title
      imageUrl
    }
  }
}
```

#### 2.-Modify the Store to include the `userFavorites` getter.

- We need to modify the `store\index.js` store document to include the `userFavorites` getter

> client\store\index.js
```js
import { getPosts } from '~/gql/getPosts.gql'
import { getCurrentUser } from '~/gql/getCurrentUser.gql'
import { signinUser } from '~/gql/signinUser.gql'
import { signupUser } from '~/gql/signupUser.gql'
import { addPost } from '~/gql/addPost.gql'
import utils from '~/helpers/utils'

export const state = () => ({
  posts: [],
  user: null,
  loading: false,
  error: null,
  authError: null
})
export const mutations = {
  setPosts: (state, payload) => {
    state.posts = payload
  },
  addPost: (state, payload) => {
    const posts = state.posts
    posts.unshift(payload)
    state.posts = posts
  },
  setUser: (state, payload) => {
    state.user = payload
  },
  setLoading: (state, payload) => {
    state.loading = payload
  },
  clearUser: state => (state.user = null),
  setError: (state, payload) => {
    state.error = payload
  },
  clearError: state => (state.error = null),
  setAuthError: (state, payload) => {
    state.authError = payload
  },
  clearAuthError: state => (state.authError = null)
}
export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('getCurrentUser')
    await dispatch('getPosts')
  },
  async getPosts({ commit }) {
    commit('clearError')
    commit('setLoading', true)
    try {
      const result = await this.app.apolloProvider.defaultClient.query({
        query: getPosts
      })
      commit('setPosts', result.data.getPosts)
    } catch (error) {
      const currentError = utils.getCurrentGraphQLError(error)
      commit('setError', currentError)
      console.error(utils.getFirstGraphQLError(error))
    }
    commit('setLoading', false)
  },
  async addPost({ commit }, payload) {
    commit('clearError')
    commit('setLoading', true)
    try {
      await this.app.apolloProvider.defaultClient.mutate({
        mutation: addPost,
        variables: payload
      })
      const { _id, title, imageUrl } = payload
      const newPost = {
        _id,
        title,
        imageUrl
      }
      commit('addPost', newPost)
    } catch (error) {
      const currentError = utils.getCurrentGraphQLError(error)
      commit('setError', currentError)
      console.error(utils.getFirstGraphQLError(error))
    }
    commit('setLoading', false)
  },
  async logOut({ commit }) {
    this.app.$cookies.remove('apollo-token')
    await this.app.$apolloHelpers.onLogout()
    commit('clearUser')
  },
  async getCurrentUser({ commit, dispatch }) {
    if (!utils.isJwtTokenValid(this.app.$apolloHelpers.getToken())) {
      await dispatch('logOut')
      return
    }
    commit('setLoading', true)
    try {
      const result = await this.app.apolloProvider.defaultClient.query({
        query: getCurrentUser
      })
      // Add user data to state
      commit('setUser', result.data.getCurrentUser)
      commit('clearError')
      commit('clearAuthError')
    } catch (error) {
      const currentError = utils.getCurrentGraphQLError(error)
      if (currentError === 'Unauthorized') {
        commit('setAuthError', this.app.i18n.t('sessionExpiredSignInAgain'))
        await dispatch('logOut')
      } else {
        commit('setError', currentError)
      }
      console.error(utils.getFirstGraphQLError(error))
    }
    commit('setLoading', false)
  },
  async signinUser({ commit, dispatch }, payload) {
    commit('clearError')
    commit('setLoading', true)
    try {
      const result = await this.app.apolloProvider.defaultClient.mutate({
        mutation: signinUser,
        variables: payload
      })
      await this.app.$apolloHelpers.onLogin(result.data.signinUser.token)
      await dispatch('getCurrentUser')
    } catch (error) {
      const currentError = utils.getCurrentGraphQLError(error)
      commit('setError', currentError)
      console.error(utils.getFirstGraphQLError(error))
    }
    commit('setLoading', false)
  },
  async signupUser({ commit, dispatch }, payload) {
    commit('clearError')
    commit('setLoading', true)
    try {
      const result = await this.app.apolloProvider.defaultClient.mutate({
        mutation: signupUser,
        variables: payload
      })
      await this.app.$apolloHelpers.onLogin(result.data.signupUser.token)
      await dispatch('getCurrentUser')
    } catch (error) {
      const currentError = utils.getCurrentGraphQLError(error)
      commit('setError', currentError)
      console.error(utils.getFirstGraphQLError(error))
    }
    commit('setLoading', false)
  },
  async signoutUser({ dispatch }) {
    await dispatch('logOut')
    // redirect home - kick users out of private pages (i.e. profile)
    this.app.router.push(this.app.localePath('index'))
  }
}
export const getters = {
  posts: state => state.posts,
  user: state => state.user,
  userFavorites: state => state.user && state.user.favorites,
  loading: state => state.loading,
  error: state => state.error,
  authError: state => state.authError
}
```

#### 3.-Modify the Post page to include the Like / Unlike toggle

- We need to modify the `posts\_id.vue` document to manage when the user click on `like/unlike ` buttton.

> client\pages\posts\_id.vue
```html
<template>
  <v-container v-if="getPost" class="mt-3" flexbox center>
    <!-- Post Card -->
    <v-layout row wrap>
      <v-flex xs12>
        <v-card hover>
          <v-card-title>
            <h1>{{ getPost.title }}</h1>
            <v-btn v-if="user" large icon @click="handleToggleLike">
              <v-icon
                large
                :color="checkIfPostLiked(getPost._id) ? 'red' : 'grey'"
                >favorite</v-icon
              >
            </v-btn>
            <h3 class="ml-3 font-weight-thin">
              {{ getPost.likes }} {{ $t('likes').toUpperCase() }}
            </h3>
            <v-spacer></v-spacer>
            <v-icon color="info" large @click="goToPreviousPage"
              >arrow_back</v-icon
            >
          </v-card-title>

          <v-tooltip right>
            <span>{{ $t('clickToEnlargeImage') }}</span>
            <v-img
              id="post__image"
              slot="activator"
              :src="getPost.imageUrl"
              @click="toggleImageDialog"
            ></v-img>
          </v-tooltip>

          <!-- Post Image Dialog -->
          <v-dialog v-model="dialog">
            <v-card>
              <v-img :src="getPost.imageUrl" height="80vh"></v-img>
            </v-card>
          </v-dialog>

          <v-card-text>
            <span v-for="(category, index) in getPost.categories" :key="index">
              <v-chip class="mb-3" color="accent" text-color="white">{{
                category
              }}</v-chip>
            </span>
            <h3>{{ getPost.description }}</h3>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <!-- Messages Section -->
    <div class="mt-3">
      <!-- Message Input -->
      <v-layout v-if="user" class="mb-3">
        <v-flex xs12>
          <v-form
            ref="form"
            v-model="isFormValid"
            lazy-validation
            @submit.prevent="handleAddPostMessage"
          >
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  v-model="messageBody"
                  :rules="messageRules"
                  clearable
                  :append-outer-icon="messageBody && 'send'"
                  :label="$t('addMessage')"
                  type="text"
                  prepend-icon="email"
                  required
                  @click:append-outer="handleAddPostMessage"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-form>
        </v-flex>
      </v-layout>

      <!-- Messages -->
      <v-layout row wrap>
        <v-flex xs12>
          <v-list subheader two-line>
            <v-subheader
              >{{ $tc('message', 2) }} ({{
                getPost.messages.length
              }})</v-subheader
            >

            <template v-for="message in getPost.messages">
              <v-divider :key="message._id"></v-divider>

              <v-list-tile :key="message.title" avatar inset>
                <v-list-tile-avatar>
                  <img :src="message.messageUser.avatar" />
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ message.messageBody }}
                  </v-list-tile-title>
                  <v-list-tile-sub-title>
                    {{ message.messageUser.username }}
                    <span class="grey--text text--lighten-1 hidden-xs-only">{{
                      message.messageDate
                    }}</span>
                  </v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action class="hidden-xs-only">
                  <v-icon
                    :color="checkIfOwnMessage(message) ? 'accent' : 'grey'"
                    >chat_bubble</v-icon
                  >
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
import { mapGetters } from 'vuex'
import { getPost } from '~/gql/getPost.gql'
import { addPostMessage } from '~/gql/addPostMessage.gql'
import { likePost } from '~/gql/likePost.gql'
import { unlikePost } from '~/gql/unlikePost.gql'
import utils from '~/helpers/utils'

export default {
  name: 'Post',
  validate({ params }) {
    return utils.isValidObjectID(params.id)
  },
  data() {
    return {
      postLiked: false,
      postId: this.$route.params.id,
      dialog: false,
      messageBody: '',
      isFormValid: true,
      messageRules: [
        message =>
          !!message ||
          this.$i18n.t('isRequired', { name: this.$i18n.tc('message', 1) }),
        message =>
          (message && message.length <= 75) ||
          this.$i18n.t('cannotBeMoreThanCharacters', {
            name: this.$i18n.tc('message', 1),
            number: 75
          })
      ]
    }
  },
  apollo: {
    getPost: {
      query: getPost,
      variables() {
        return {
          postId: this.postId
        }
      }
    }
  },
  computed: {
    ...mapGetters(['user', 'userFavorites'])
  },
  methods: {
    checkIfPostLiked(postId) {
      // check if user favorites includes post with id of 'postId'
      this.postLiked =
        this.userFavorites &&
        this.userFavorites.some(fave => fave._id === postId)
      return this.postLiked
    },
    handleToggleLike() {
      if (this.postLiked) {
        this.handleUnlikePost()
      } else {
        this.handleLikePost()
      }
    },
    handleLikePost() {
      const variables = {
        postId: this.postId,
        username: this.user.username
      }
      this.$apollo
        .mutate({
          mutation: likePost,
          variables,
          update: (cache, { data: { likePost } }) => {
            const data = cache.readQuery({
              query: getPost,
              variables: { postId: this.postId }
            })
            data.getPost.likes += 1
            cache.writeQuery({
              query: getPost,
              variables: { postId: this.postId },
              data
            })
          }
        })
        .then(({ data }) => {
          const updatedUser = {
            ...this.user,
            favorites: data.likePost.favorites
          }
          this.$store.commit('setUser', updatedUser)
        })
        .catch(err => console.error(err))
    },
    handleUnlikePost() {
      const variables = {
        postId: this.postId,
        username: this.user.username
      }
      this.$apollo
        .mutate({
          mutation: unlikePost,
          variables,
          update: (cache, { data: { unlikePost } }) => {
            const data = cache.readQuery({
              query: getPost,
              variables: { postId: this.postId }
            })
            data.getPost.likes -= 1
            cache.writeQuery({
              query: getPost,
              variables: { postId: this.postId },
              data
            })
          }
        })
        .then(({ data }) => {
          const updatedUser = {
            ...this.user,
            favorites: data.unlikePost.favorites
          }
          this.$store.commit('setUser', updatedUser)
        })
        .catch(err => console.error(err))
    },
    handleAddPostMessage() {
      if (this.$refs.form.validate()) {
        const variables = {
          messageBody: this.messageBody,
          userId: this.user._id,
          postId: this.postId
        }
        this.$apollo
          .mutate({
            mutation: addPostMessage,
            variables,
            update: (cache, { data: { addPostMessage } }) => {
              const data = cache.readQuery({
                query: getPost,
                variables: { postId: this.postId }
              })
              data.getPost.messages.unshift(addPostMessage)
              cache.writeQuery({
                query: getPost,
                variables: { postId: this.postId },
                data
              })
            }
          })
          .then(({ data }) => {
            this.$refs.form.reset()
            console.log(data.addPostMessage)
          })
          .catch(err => console.error(err))
      }
    },
    goToPreviousPage() {
      this.$router.go(-1)
    },
    toggleImageDialog() {
      if (window.innerWidth > 500) {
        this.dialog = !this.dialogs
      }
    },
    checkIfOwnMessage(message) {
      return this.user && this.user._id === message.messageUser._id
    }
  }
}
</script>

<style scoped>
#post__image {
  height: 400px !important;
}
</style>
```


#### 4.-Modify the Default layout page to add Like Notification in Profile Button.

- We need to modify the `layouts\default.vue` document to add Like Notification in Profile Button..

> client\layouts\default.vue
```html
<template>
  <v-app style="background: #E3E3EE">
    <!-- Side Navbar -->
    <v-navigation-drawer v-model="sideNav" fixed app temporary>
      <v-toolbar color="accent" dark flat>
        <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
        <nuxt-link :to="localePath('index')" tag="span" style="cursor: pointer">
          <h1 class="title pl-3">VueShare</h1>
        </nuxt-link>
      </v-toolbar>

      <v-divider></v-divider>

      <!-- Side Navbar Links -->
      <v-list>
        <v-list-tile
          v-for="(item, i) in sideNavItems"
          :key="i"
          :to="localePath(item.link)"
          ripple
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{ item.title }}
          </v-list-tile-content>
        </v-list-tile>

        <!-- Signout Button -->
        <v-list-tile v-if="user" @click="handleSignoutUser">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ $t('signout') }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- Horizontal Navbar -->
    <v-toolbar fixed color="primary" dark>
      <!-- App Title -->
      <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-xs-only">
        <nuxt-link :to="localePath('index')" tag="span" style="cursor: pointer">
          VueShare
        </nuxt-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Search Input -->
      <v-text-field
        flex
        prepend-icon="search"
        color="accent"
        single-line
        hide-details
        :placeholder="$t('searchposts')"
      ></v-text-field>

      <v-spacer></v-spacer>

      <!-- Horizontal Navbar Links -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          v-for="(item, i) in horizontalNavItems"
          :key="i"
          :to="localePath(item.link)"
          flat
        >
          <v-icon class="hidden-sm-only" left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

      <!-- Profile Button -->
      <v-btn v-if="user" flat :to="localePath('profile')">
        <v-icon class="hidden-sm-only" left>account_box</v-icon>
        <v-badge right color="blue darken-2" :class="{ bounce: badgeAnimated }">
          <span v-if="userFavorites.length" slot="badge">{{
            userFavorites.length
          }}</span>
          {{ $t('profile') }}
        </v-badge>
      </v-btn>

      <!-- Signout Button -->
      <v-btn v-if="user" flat @click="handleSignoutUser">
        <v-icon class="hidden-sm-only" left>exit_to_app</v-icon>
        {{ $t('signout') }}
      </v-btn>

      <v-toolbar-title class="hidden-xs-only">
        <nuxt-link
          v-for="(locale, i) in showLocales"
          :key="i"
          tag="span"
          style="cursor: pointer"
          class="lang-switcher"
          :to="switchLocalePath(locale.code)"
        >
          {{ locale.name }}
        </nuxt-link>
      </v-toolbar-title>
    </v-toolbar>

    <!-- App Content -->
    <main>
      <v-container class="mt-4">
        <transition name="fade">
          <nuxt />
        </transition>

        <!-- Auth Snackbar -->
        <v-snackbar
          v-model="authSnackbar"
          color="success"
          :timeout="5000"
          bottom
          left
        >
          <v-icon class="mr-3">check_circle</v-icon>
          <h3>{{ $t('yourAreNowSignedIn') }}</h3>
          <v-btn dark flat @click="authSnackbar = false">{{
            $t('close')
          }}</v-btn>
        </v-snackbar>

        <!-- Auth Error Snackbar -->
        <v-snackbar
          v-if="authError"
          v-model="authErrorSnackbar"
          color="info"
          :timeout="5000"
          bottom
          left
        >
          <v-icon class="mr-3">cancel</v-icon>
          <h3>{{ authError.message }}</h3>
          <v-btn dark flat :to="localePath('signin')">{{ $t('close') }}</v-btn>
        </v-snackbar>
      </v-container>
    </main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  head() {
    return this.$nuxtI18nSeo()
  },
  data() {
    return {
      sideNav: false,
      authSnackbar: false,
      authErrorSnackbar: false,
      badgeAnimated: false
    }
  },
  computed: {
    ...mapGetters(['authError', 'user', 'userFavorites']),
    horizontalNavItems() {
      let items = [
        { icon: 'chat', title: this.$i18n.t('posts'), link: 'posts' },
        { icon: 'lock_open', title: this.$i18n.t('signin'), link: 'signin' },
        { icon: 'create', title: this.$i18n.t('signup'), link: 'signup' }
      ]
      if (this.user) {
        items = [{ icon: 'chat', title: this.$i18n.t('posts'), link: 'posts' }]
      }
      return items
    },
    sideNavItems() {
      let items = [
        { icon: 'chat', title: this.$i18n.t('posts'), link: 'posts' },
        { icon: 'lock_open', title: this.$i18n.t('signin'), link: 'signin' },
        { icon: 'create', title: this.$i18n.t('signup'), link: 'signup' }
      ]
      if (this.user) {
        items = [
          { icon: 'chat', title: this.$i18n.t('posts'), link: 'posts' },
          {
            icon: 'stars',
            title: this.$i18n.t('createPost'),
            link: 'posts-add'
          },
          {
            icon: 'account_box',
            title: this.$i18n.t('profile'),
            link: 'profile'
          }
        ]
      }
      return items
    },
    showLocales() {
      return this.$i18n.locales.filter(
        locale => locale.code !== this.$i18n.locale
      )
    }
  },
  watch: {
    user(newValue, oldValue) {
      // if we had no value for user before, show snackbar
      if (oldValue === null) {
        this.authSnackbar = true
      }
    },
    authError(value) {
      // if auth error is not null, show auth error snackbar
      if (value !== null) {
        this.authErrorSnackbar = true
      }
    },
    userFavorites(value) {
      // if user favorites value changed at all
      if (value) {
        this.badgeAnimated = true
        setTimeout(() => (this.badgeAnimated = false), 1000)
      }
    }
  },
  methods: {
    handleSignoutUser() {
      this.$store.dispatch('signoutUser')
    },
    toggleSideNav() {
      this.sideNav = !this.sideNav
    }
  }
}
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

#### 5.-We need to test if it works.

![](LikeUnlikePost.png)

![](LikeUnlikePost2.png)

![](LikeUnlikePost3.png)

![](LikeUnlikePost4.png)

![](LikeUnlikePost5.png)

## Section 13: Search Posts

### I.-Modify the server app to include the `searchPosts` Query.

#### 1.-Modify the Post Model to include a text index

- We need to modify the `post.model.ts` document to add a `text` index.

> server\src\posts\post.model.ts
```ts
import { prop, arrayProp, Typegoose, Ref, index } from 'typegoose';
import { IsDate, IsInt } from 'class-validator';
import { Field, ObjectType, ID, Int } from 'type-graphql';
import { User } from '../users/user.model'

@ObjectType()
export class Message extends Typegoose {
  @Field(() => ID)
  _id: string

  @Field()
  @prop({ required: true })
  messageBody: string;

  @IsDate()
  @Field()
  @prop({ default: Date.now })
  messageDate: Date;

  @Field(() => User)
  @prop({ required: true, ref: 'User' })
  messageUser: Ref<User>
}

// Create index to search on all fields of posts
@index({'$**': 'text'})
@ObjectType()
export class Post extends Typegoose {
  @Field(() => ID)
  _id: string

  @Field()
  @prop({ required: true })
  title: string; 

  @Field()
  @prop({ required: true })
  imageUrl: string;

  @Field(() => [String], { nullable: "items" })
  @prop({ required: true })
  categories: string[];

  @Field()
  @prop({ required: true })
  description: string;

  @IsDate()
  @Field()
  @prop({ default: Date.now })
  createdDate: Date

  @IsInt()
  @Field(() => Int, { nullable: true })
  @prop({ default: 0 })
  likes: number;

  @Field(() => User)
  @prop({ required: true, ref: 'User' })
  createdBy: Ref<User>

  @Field(() => [Message], { nullable: "itemsAndList" })
  @arrayProp({ items: Message })
  messages?: Ref<Message>[]
}
```

#### 2.-Modify the Posts service to include the new `searchPosts` methods.

- We need to modify the `posts.service.ts` service document to include the new `searchPosts` methods.

> server\src\posts\posts.service.ts
```ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Post, Message } from './post.model';
import { PostPage } from './types/post-page.type';
import { LikesFaves } from './types/likes-faves.type';
import { CreatePostDto } from './dtos/create-post.dto'
import { CreatePostMessageDto } from './dtos/create-post-message.dto'
import { ModelType, Ref } from 'typegoose';
import { User } from '../users/user.model';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post) private readonly postModel: ModelType<Post>,
    @InjectModel(User) private readonly userModel: ModelType<User>
  ) { }

  async getPosts(): Promise<Post[] | null> {
    const posts = await this.postModel.find({})
      .sort({ createdDate: "desc" })
      .populate({
        path: "createdBy",
        model: "User"
      });
    return posts;
  }

  async getPost(postId: string): Promise<Post | null> {
    const post = await this.postModel.findOne({ _id: postId })
      .populate({
        path: "messages.messageUser",
        model: "User"
      });
    return post;
  }

  async searchPosts(searchTerm: string): Promise<Post[] | null> {
    if (searchTerm) {
      const searchResults = await this.postModel.find(
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
  }

  async infiniteScrollPosts(pageNum: number, pageSize: number): Promise<PostPage | null> {
    const skips = pageSize * (pageNum - 1)
    const posts = await this.postModel.find({})
      .sort({ createdDate: "desc" })
      .populate({
        path: "createdBy",
        model: "User"
      })
      .skip(skips)
      .limit(pageSize)
      .lean()
    const totalDocs = await this.postModel.countDocuments()
    const hasMore = totalDocs > pageSize * pageNum
    const postPage: PostPage = {
      posts,
      hasMore
    }
    return postPage
  }

  async addPost(createPostDto: CreatePostDto): Promise<Post> {
    const newPost = new this.postModel(createPostDto);
    return await newPost.save();
  }

  async addPostMessage(createPostMessageDto: CreatePostMessageDto): Promise<Ref<Message>> {
    const newMessage = {
      messageBody: createPostMessageDto.messageBody,
      messageUser: createPostMessageDto.userId
    };
    const post = await this.postModel.findOneAndUpdate(
      // find post by id
      { _id: createPostMessageDto.postId },
      // prepend (push) new message to beginning of messages array
      { $push: { messages: { $each: [newMessage], $position: 0 } } },
      // return fresh document after update
      { new: true }
    ).populate({
      path: "messages.messageUser",
      model: "User"
    });
    return post.messages[0];
  }

  async likePost(postId: string, username: string): Promise<LikesFaves> {
    const post = await this.postModel.findOneAndUpdate(
      { _id: postId },
      { $inc: { likes: 1 } },
      { new: true }
    );
    // Find User, add id of post to its favorites array (which will be populated as Posts)
    const user = await this.userModel.findOneAndUpdate(
      { username },
      { $addToSet: { favorites: postId } },
      { new: true }
    ).populate({
      path: "favorites",
      model: "Post"
    });
    // Return only likes from 'post' and favorites from 'user'
    const likesFaves: LikesFaves = {
      likes: post.likes,
      favorites: user.favorites
    }    
    return likesFaves;
  }

  async unlikePost(postId: string, username: string): Promise<LikesFaves> {
      // Find Post, add -1 to its 'like' value
      const post = await this.postModel.findOneAndUpdate(
        { _id: postId },
        { $inc: { likes: -1 } },
        { new: true }
      );
      // Find User, remove id of post from its favorites array (which will be populated as Posts)
      const user = await this.userModel.findOneAndUpdate(
        { username },
        { $pull: { favorites: postId } },
        { new: true }
      ).populate({
        path: "favorites",
        model: "Post"
      });
    // Return only likes from 'post' and favorites from 'user'
    const likesFaves: LikesFaves = {
      likes: post.likes,
      favorites: user.favorites
    }    
    return likesFaves;
  }  
}
```


#### 3.-Modify the Posts resolver to include the new `searchPosts` Query.

- We need to modify the `posts.resolver.ts` resolver document to include the new `searchPosts` Query.

> server\src\posts\posts.resolver.ts
```ts
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Int, ID } from 'type-graphql';
import { PostsService } from './posts.service';
import { PostInput } from './inputs/post.input';
import { PostPage } from './types/post-page.type';
import { LikesFaves } from './types/likes-faves.type';
import { Post, Message } from './post.model';

@Resolver()
export class PostsResolver {
  constructor(private readonly postsService: PostsService) { }

  @Query(() => [Post])
  async getPosts() {
    return await this.postsService.getPosts();
  }

  @Query(() => Post)
  async getPost(@Args({ name: 'postId', type: () => ID }) postId: string) {
    return await this.postsService.getPost(postId);
  }

  @Query(() => [Post], { nullable: true })
  async searchPosts(@Args({ name: 'searchTerm', type: () => String, nullable: true }) searchTerm: string) {
    return await this.postsService.searchPosts(searchTerm);
  }

  @Query(() => PostPage)
  async infiniteScrollPosts(
    @Args({ name: 'pageNum', type: () => Int }) pageNum: number,
    @Args({ name: 'pageSize', type: () => Int }) pageSize: number
  ) {
    return await this.postsService.infiniteScrollPosts(pageNum, pageSize);
  }

  @Mutation(() => Post)
  async addPostWithInput(@Args('input') input: PostInput) {
    const createdBy = input.creatorId;
    const { title, imageUrl, categories, description } = input
    return await this.postsService.addPost({ title, imageUrl, categories, description, createdBy });
  }

  @Mutation(() => Post)
  async addPost(
    @Args('title') title: string,
    @Args('imageUrl') imageUrl: string,
    @Args({ name: 'categories', type: () => [String], nullable: "items" }) categories: string[],
    @Args('description') description: string,
    @Args({ name: 'creatorId', type: () => ID }) creatorId: string,
  ) {
    const createdBy = creatorId;
    return await this.postsService.addPost({ title, imageUrl, categories, description, createdBy });
  }

  @Mutation(() => Message)
  async addPostMessage(
    @Args('messageBody') messageBody: string,
    @Args({ name: 'userId', type: () => ID }) userId: string,
    @Args({ name: 'postId', type: () => ID }) postId: string,
  ) {
    return await this.postsService.addPostMessage({ messageBody, userId, postId });
  }

  @Mutation(() => LikesFaves)
  async likePost(
    @Args({ name: 'postId', type: () => ID }) postId: string,
    @Args('username') username: string
  ) {
    return await this.postsService.likePost(postId, username);
  }

  @Mutation(() => LikesFaves)
  async unlikePost(
    @Args({ name: 'postId', type: () => ID }) postId: string,
    @Args('username') username: string
  ) {
    return await this.postsService.unlikePost(postId, username);
  }

}
```

#### 4.-Test if the new `searchPosts` Query works propely

> query
```graphql
query searchPosts($searchTerm: String) {
  searchPosts(searchTerm: $searchTerm) {
    _id
    title
    description
    imageUrl
    likes
  }
}
```

> variables
```json
{
  "searchTerm": "photo"
}
```

> response
```json
{
  "data": {
    "searchPosts": [
      {
        "_id": "5d4fa31dcb16795b68483e10",
        "title": "At the Beach",
        "description": "A nice photo of the waves",
        "imageUrl": "https://images.pexels.com/photos/1139541/pexels-photo-1139541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "likes": 0
      },
      {
        "_id": "5d505ca7c45cb259b0761e48",
        "title": "A tasty dinner",
        "description": "Picture of a recipe I would like to prepare",
        "imageUrl": "https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "likes": 1
      },
      {
        "_id": "5d0e10be7dd57444d0607790",
        "title": "Tasty coffee",
        "description": "Some nice coffee artwork",
        "imageUrl": "https://images.pexels.com/photos/374757/pexels-photo-374757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "likes": 0
      }
    ]
  }
}
```

> query
```graphql
query searchPosts($searchTerm: String) {
  searchPosts(searchTerm: $searchTerm) {
    _id
    title
    description
    imageUrl
    likes
  }
}
```

> variables
```json
{
  "searchTerm": ""
}
```

> response
```json
{
  "data": {
    "searchPosts": null
  }
}
```

### II.-Modify the client app to implement `Search Posts` on the Default layout.

#### 1.-Create the `searchPosts.gql` document with the `searchPosts` query.

- We need to create the `searchPosts.gql` document with the `searchPosts` Query

> client\gql\likePost.gql
```graphql
query searchPosts($searchTerm: String) {
  searchPosts(searchTerm: $searchTerm) {
    _id
    title
    description
    imageUrl
    likes
  }
}

```

#### 2.-Modify the Store to include the `searchResults` state.

- We need to modify the `store\index.js` store document to include the `searchResults` state.

> client\store\index.js
```js
import { getPosts } from '~/gql/getPosts.gql'
import { searchPosts } from '~/gql/searchPosts.gql'
import { getCurrentUser } from '~/gql/getCurrentUser.gql'
import { signinUser } from '~/gql/signinUser.gql'
import { signupUser } from '~/gql/signupUser.gql'
import { addPost } from '~/gql/addPost.gql'
import utils from '~/helpers/utils'

export const state = () => ({
  posts: [],
  searchResults: [],
  user: null,
  loading: false,
  error: null,
  authError: null
})
export const mutations = {
  setPosts: (state, payload) => {
    state.posts = payload
  },
  setSearchResults: (state, payload) => {
    if (payload !== null && payload.length > 0) {
      state.searchResults = payload
    }
  },
  addPost: (state, payload) => {
    const posts = state.posts
    posts.unshift(payload)
    state.posts = posts
  },
  setUser: (state, payload) => {
    state.user = payload
  },
  setLoading: (state, payload) => {
    state.loading = payload
  },
  clearUser: state => (state.user = null),
  setError: (state, payload) => {
    state.error = payload
  },
  clearError: state => (state.error = null),
  setAuthError: (state, payload) => {
    state.authError = payload
  },
  clearAuthError: state => (state.authError = null),
  clearSearchResults: state => (state.searchResults = [])
}
export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('getCurrentUser')
    await dispatch('getPosts')
  },
  async getPosts({ commit }) {
    commit('clearError')
    commit('setLoading', true)
    try {
      const result = await this.app.apolloProvider.defaultClient.query({
        query: getPosts
      })
      commit('setPosts', result.data.getPosts)
    } catch (error) {
      const currentError = utils.getCurrentGraphQLError(error)
      commit('setError', currentError)
      console.error(utils.getFirstGraphQLError(error))
    }
    commit('setLoading', false)
  },
  async searchPosts({ commit }, payload) {
    commit('clearError')
    try {
      const result = await this.app.apolloProvider.defaultClient.query({
        query: searchPosts,
        variables: payload
      })
      commit('setSearchResults', result.data.searchPosts)
    } catch (error) {
      const currentError = utils.getCurrentGraphQLError(error)
      commit('setError', currentError)
      console.error(utils.getFirstGraphQLError(error))
    }
  },
  async addPost({ commit }, payload) {
    commit('clearError')
    commit('setLoading', true)
    try {
      await this.app.apolloProvider.defaultClient.mutate({
        mutation: addPost,
        variables: payload
      })
      const { _id, title, imageUrl } = payload
      const newPost = {
        _id,
        title,
        imageUrl
      }
      commit('addPost', newPost)
    } catch (error) {
      const currentError = utils.getCurrentGraphQLError(error)
      commit('setError', currentError)
      console.error(utils.getFirstGraphQLError(error))
    }
    commit('setLoading', false)
  },
  async logOut({ commit }) {
    this.app.$cookies.remove('apollo-token')
    await this.app.$apolloHelpers.onLogout()
    commit('clearUser')
  },
  async getCurrentUser({ commit, dispatch }) {
    if (!utils.isJwtTokenValid(this.app.$apolloHelpers.getToken())) {
      console.log('Invalid Token', this.app.i18n.t('sessionExpiredSignInAgain'))
      commit('setAuthError', this.app.i18n.t('sessionExpiredSignInAgain'))
      await dispatch('logOut')
      return
    }
    commit('setLoading', true)
    try {
      const result = await this.app.apolloProvider.defaultClient.query({
        query: getCurrentUser
      })
      // Add user data to state
      commit('setUser', result.data.getCurrentUser)
      commit('clearError')
      commit('clearAuthError')
    } catch (error) {
      const currentError = utils.getCurrentGraphQLError(error)
      if (currentError === 'Unauthorized') {
        console.log('Error', this.app.i18n.t('sessionExpiredSignInAgain'))
        commit('setAuthError', this.app.i18n.t('sessionExpiredSignInAgain'))
        await dispatch('logOut')
      } else {
        commit('setError', currentError)
      }
      console.error(utils.getFirstGraphQLError(error))
    }
    commit('setLoading', false)
  },
  async signinUser({ commit, dispatch }, payload) {
    commit('clearError')
    commit('setLoading', true)
    try {
      const result = await this.app.apolloProvider.defaultClient.mutate({
        mutation: signinUser,
        variables: payload
      })
      await this.app.$apolloHelpers.onLogin(result.data.signinUser.token)
      await dispatch('getCurrentUser')
    } catch (error) {
      const currentError = utils.getCurrentGraphQLError(error)
      commit('setError', currentError)
      console.error(utils.getFirstGraphQLError(error))
    }
    commit('setLoading', false)
  },
  async signupUser({ commit, dispatch }, payload) {
    commit('clearError')
    commit('setLoading', true)
    try {
      const result = await this.app.apolloProvider.defaultClient.mutate({
        mutation: signupUser,
        variables: payload
      })
      await this.app.$apolloHelpers.onLogin(result.data.signupUser.token)
      await dispatch('getCurrentUser')
    } catch (error) {
      const currentError = utils.getCurrentGraphQLError(error)
      commit('setError', currentError)
      console.error(utils.getFirstGraphQLError(error))
    }
    commit('setLoading', false)
  },
  async signoutUser({ dispatch }) {
    await dispatch('logOut')
    // redirect home - kick users out of private pages (i.e. profile)
    this.app.router.push(this.app.localePath('index'))
  }
}
export const getters = {
  posts: state => state.posts,
  searchResults: state => state.searchResults,
  user: state => state.user,
  userFavorites: state => state.user && state.user.favorites,
  loading: state => state.loading,
  error: state => state.error,
  authError: state => state.authError
}
```

#### 3.-Modify the Default layout page to manage the search results.

- We need to modify the `layouts\default.vue` layout document to manage the search results.

> client\layouts\default.vue
```html
<template>
  <v-app style="background: #E3E3EE">
    <!-- Side Navbar -->
    <v-navigation-drawer v-model="sideNav" fixed app temporary>
      <v-toolbar color="accent" dark flat>
        <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
        <nuxt-link :to="localePath('index')" tag="span" style="cursor: pointer">
          <h1 class="title pl-3">VueShare</h1>
        </nuxt-link>
      </v-toolbar>

      <v-divider></v-divider>

      <!-- Side Navbar Links -->
      <v-list>
        <v-list-tile
          v-for="(item, i) in sideNavItems"
          :key="i"
          :to="localePath(item.link)"
          ripple
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{ item.title }}
          </v-list-tile-content>
        </v-list-tile>

        <!-- Signout Button -->
        <v-list-tile v-if="user" @click="handleSignoutUser">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ $t('signout') }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- Horizontal Navbar -->
    <v-toolbar fixed color="primary" dark>
      <!-- App Title -->
      <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-xs-only">
        <nuxt-link :to="localePath('index')" tag="span" style="cursor: pointer">
          VueShare
        </nuxt-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Search Input -->
      <v-text-field
        v-model="searchTerm"
        flex
        prepend-icon="search"
        color="accent"
        single-line
        hide-details
        :placeholder="$t('searchposts')"
        @input="handleSearchPosts"
      ></v-text-field>

      <!-- Search Results Card -->
      <v-card v-if="searchResults.length" id="search__card" dark>
        <v-list>
          <v-list-tile
            v-for="result in searchResults"
            :key="result._id"
            @click="goToSearchResult(result._id)"
          >
            <v-list-tile-title>
              {{ result.title }} -
              <span class="font-weight-thin">{{
                formatDescription(result.description)
              }}</span>
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
          v-for="(item, i) in horizontalNavItems"
          :key="i"
          :to="localePath(item.link)"
          flat
        >
          <v-icon class="hidden-sm-only" left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

      <!-- Profile Button -->
      <v-btn v-if="user" flat :to="localePath('profile')">
        <v-icon class="hidden-sm-only" left>account_box</v-icon>
        <v-badge right color="blue darken-2" :class="{ bounce: badgeAnimated }">
          <span v-if="userFavorites.length" slot="badge">{{
            userFavorites.length
          }}</span>
          {{ $t('profile') }}
        </v-badge>
      </v-btn>

      <!-- Signout Button -->
      <v-btn v-if="user" flat @click="handleSignoutUser">
        <v-icon class="hidden-sm-only" left>exit_to_app</v-icon>
        {{ $t('signout') }}
      </v-btn>

      <v-toolbar-title class="hidden-xs-only">
        <nuxt-link
          v-for="(locale, i) in showLocales"
          :key="i"
          tag="span"
          style="cursor: pointer"
          class="lang-switcher"
          :to="switchLocalePath(locale.code)"
        >
          {{ locale.name }}
        </nuxt-link>
      </v-toolbar-title>
    </v-toolbar>

    <!-- App Content -->
    <main>
      <v-container class="mt-4">
        <transition name="fade">
          <nuxt />
        </transition>

        <!-- Auth Snackbar -->
        <v-snackbar
          v-model="authSnackbar"
          color="success"
          :timeout="5000"
          bottom
          left
        >
          <v-icon class="mr-3">check_circle</v-icon>
          <h3>{{ $t('yourAreNowSignedIn') }}</h3>
          <v-btn dark flat @click="authSnackbar = false">{{
            $t('close')
          }}</v-btn>
        </v-snackbar>

        <!-- Auth Error Snackbar -->
        <v-snackbar
          v-if="authError"
          v-model="authErrorSnackbar"
          color="info"
          :timeout="5000"
          bottom
          left
        >
          <v-icon class="mr-3">cancel</v-icon>
          <h3>{{ authError.message }}</h3>
          <v-btn dark flat :to="localePath('signin')">{{ $t('close') }}</v-btn>
        </v-snackbar>
      </v-container>
    </main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  head() {
    return this.$nuxtI18nSeo()
  },
  data() {
    return {
      searchTerm: '',
      sideNav: false,
      authSnackbar: false,
      authErrorSnackbar: false,
      badgeAnimated: false
    }
  },
  computed: {
    ...mapGetters(['searchResults', 'authError', 'user', 'userFavorites']),
    horizontalNavItems() {
      let items = [
        { icon: 'chat', title: this.$i18n.t('posts'), link: 'posts' },
        { icon: 'lock_open', title: this.$i18n.t('signin'), link: 'signin' },
        { icon: 'create', title: this.$i18n.t('signup'), link: 'signup' }
      ]
      if (this.user) {
        items = [{ icon: 'chat', title: this.$i18n.t('posts'), link: 'posts' }]
      }
      return items
    },
    sideNavItems() {
      let items = [
        { icon: 'chat', title: this.$i18n.t('posts'), link: 'posts' },
        { icon: 'lock_open', title: this.$i18n.t('signin'), link: 'signin' },
        { icon: 'create', title: this.$i18n.t('signup'), link: 'signup' }
      ]
      if (this.user) {
        items = [
          { icon: 'chat', title: this.$i18n.t('posts'), link: 'posts' },
          {
            icon: 'stars',
            title: this.$i18n.t('createPost'),
            link: 'posts-add'
          },
          {
            icon: 'account_box',
            title: this.$i18n.t('profile'),
            link: 'profile'
          }
        ]
      }
      return items
    },
    showLocales() {
      return this.$i18n.locales.filter(
        locale => locale.code !== this.$i18n.locale
      )
    }
  },
  watch: {
    user(newValue, oldValue) {
      // if we had no value for user before, show snackbar
      if (oldValue === null) {
        this.authSnackbar = true
      }
    },
    authError(value) {
      // if auth error is not null, show auth error snackbar
      if (value !== null) {
        this.authErrorSnackbar = true
      }
    },
    userFavorites(value) {
      // if user favorites value changed at all
      if (value) {
        this.badgeAnimated = true
        setTimeout(() => (this.badgeAnimated = false), 1000)
      }
    }
  },
  methods: {
    handleSearchPosts() {
      this.$store.dispatch('searchPosts', {
        searchTerm: this.searchTerm
      })
    },
    goToSearchResult(resultId) {
      // Clear search term
      this.searchTerm = ''
      // Go to desired result
      this.$router.push(`${this.localePath('posts')}/${resultId}`)
      // Clear search results
      this.$store.commit('clearSearchResults')
    },
    formatDescription(desc) {
      return desc.length > 30 ? `${desc.slice(0, 30)}...` : desc
    },
    checkIfUserFavorite(resultId) {
      return (
        this.userFavorites &&
        this.userFavorites.some(fave => fave._id === resultId)
      )
    },
    handleSignoutUser() {
      this.$store.dispatch('signoutUser')
    },
    toggleSideNav() {
      this.sideNav = !this.sideNav
    }
  }
}
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

#### 4.-We need to test if it works.

![](ImplementSearchPosts.png)

![](ImplementSearchPosts2.png)

## Section 14: Profile Page, Update / Delete Posts

### I.-Modify the server app to include the `getUserPosts` Query and the `updateUserPost` and `deleteUserPost` Mutations.

#### 1.-Modify the Posts service to include the new `getUserPosts`, `updateUserPost` and `deleteUserPost` methods.

- We need to create the `update-user-post.dto.ts` document with the `UpdateUserPostDto` DTO.

> server\src\posts\dtos\update-user-post.dto.ts
```ts
export class UpdateUserPostDto {
  readonly postId: string;
  readonly userId: string;
  readonly title: string;
  readonly imageUrl: string;
  readonly categories: string[];
  readonly description: string;
}
```

- We need to modify the `\posts.service.ts` service document to include the new `getUserPosts`, `updateUserPost` and `deleteUserPost` methods.

> server\src\posts\posts.service.ts
```ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Post, Message } from './post.model';
import { PostPage } from './types/post-page.type';
import { LikesFaves } from './types/likes-faves.type';
import { CreatePostDto } from './dtos/create-post.dto'
import { UpdateUserPostDto } from './dtos/update-user-post.dto'
import { CreatePostMessageDto } from './dtos/create-post-message.dto'
import { ModelType, Ref } from 'typegoose';
import { User } from '../users/user.model';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post) private readonly postModel: ModelType<Post>,
    @InjectModel(User) private readonly userModel: ModelType<User>
  ) { }

  async getPosts(): Promise<Post[] | null> {
    const posts = await this.postModel.find({})
      .sort({ createdDate: "desc" })
      .populate({
        path: "createdBy",
        model: "User"
      });
    return posts;
  }

  async getUserPosts(userId: string): Promise<Post[] | null> {
      const posts = await this.postModel
        .find({createdBy: userId })
        .sort({ createdDate: "desc" });
      return posts;      
  }

  async getPost(postId: string): Promise<Post | null> {
    const post = await this.postModel.findOne({ _id: postId })
      .populate({
        path: "messages.messageUser",
        model: "User"
      });
    return post;
  }

  async searchPosts(searchTerm: string): Promise<Post[] | null> {
    if (searchTerm) {
      const searchResults = await this.postModel.find(
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
  }

  async infiniteScrollPosts(pageNum: number, pageSize: number): Promise<PostPage | null> {
    const skips = pageSize * (pageNum - 1)
    const posts = await this.postModel.find({})
      .sort({ createdDate: "desc" })
      .populate({
        path: "createdBy",
        model: "User"
      })
      .skip(skips)
      .limit(pageSize)
      .lean()
    const totalDocs = await this.postModel.countDocuments()
    const hasMore = totalDocs > pageSize * pageNum
    const postPage: PostPage = {
      posts,
      hasMore
    }
    return postPage
  }

  async addPost(createPostDto: CreatePostDto): Promise<Post> {
    const newPost = new this.postModel(createPostDto);
    return await newPost.save();
  }

  async updateUserPost(updateUserPostDto: UpdateUserPostDto): Promise<Post> {
    const { postId, userId, title, imageUrl, categories, description } = updateUserPostDto
    const post = await this.postModel.findOneAndUpdate(
      // Find post by postId and createdBy
      { _id: postId, createdBy: userId },
      { $set: { title, imageUrl, categories, description } },
      { new: true }
    );
    return post;
  }

  async deleteUserPost(postId: string): Promise<Post> {
    const post = await this.postModel.findOneAndRemove({ _id: postId });
    return post;
  }

  async addPostMessage(createPostMessageDto: CreatePostMessageDto): Promise<Ref<Message>> {
    const newMessage = {
      messageBody: createPostMessageDto.messageBody,
      messageUser: createPostMessageDto.userId
    };
    const post = await this.postModel.findOneAndUpdate(
      // find post by id
      { _id: createPostMessageDto.postId },
      // prepend (push) new message to beginning of messages array
      { $push: { messages: { $each: [newMessage], $position: 0 } } },
      // return fresh document after update
      { new: true }
    ).populate({
      path: "messages.messageUser",
      model: "User"
    });
    return post.messages[0];
  }

  async likePost(postId: string, username: string): Promise<LikesFaves> {
    const post = await this.postModel.findOneAndUpdate(
      { _id: postId },
      { $inc: { likes: 1 } },
      { new: true }
    );
    // Find User, add id of post to its favorites array (which will be populated as Posts)
    const user = await this.userModel.findOneAndUpdate(
      { username },
      { $addToSet: { favorites: postId } },
      { new: true }
    ).populate({
      path: "favorites",
      model: "Post"
    });
    // Return only likes from 'post' and favorites from 'user'
    const likesFaves: LikesFaves = {
      likes: post.likes,
      favorites: user.favorites
    }
    return likesFaves;
  }

  async unlikePost(postId: string, username: string): Promise<LikesFaves> {
    // Find Post, add -1 to its 'like' value
    const post = await this.postModel.findOneAndUpdate(
      { _id: postId },
      { $inc: { likes: -1 } },
      { new: true }
    );
    // Find User, remove id of post from its favorites array (which will be populated as Posts)
    const user = await this.userModel.findOneAndUpdate(
      { username },
      { $pull: { favorites: postId } },
      { new: true }
    ).populate({
      path: "favorites",
      model: "Post"
    });
    // Return only likes from 'post' and favorites from 'user'
    const likesFaves: LikesFaves = {
      likes: post.likes,
      favorites: user.favorites
    }
    return likesFaves;
  }
}

```

#### 2.-Modify the Posts resolver to include the new `getUserPosts` Query and and the new `likePost` and `unlikePost` Mutations.

- We need to modify the `posts.resolver.ts` resolver document to include the new `getUserPosts` Query and and the new `likePost` and `unlikePost` Mutations.

> server\src\posts\posts.resolver.ts
```ts
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Int, ID } from 'type-graphql';
import { PostsService } from './posts.service';
import { PostInput } from './inputs/post.input';
import { PostPage } from './types/post-page.type';
import { LikesFaves } from './types/likes-faves.type';
import { Post, Message } from './post.model';

@Resolver()
export class PostsResolver {
  constructor(private readonly postsService: PostsService) { }

  @Query(() => [Post])
  async getPosts() {
    return await this.postsService.getPosts();
  }

  @Query(() => [Post], { nullable: true })
  async getUserPosts(@Args({ name: 'userId', type: () => ID }) userId: string) {
    return await this.postsService.getUserPosts(userId);
  }

  @Query(() => Post)
  async getPost(@Args({ name: 'postId', type: () => ID }) postId: string) {
    return await this.postsService.getPost(postId);
  }

  @Query(() => [Post], { nullable: true })
  async searchPosts(@Args({ name: 'searchTerm', type: () => String, nullable: true }) searchTerm: string) {
    return await this.postsService.searchPosts(searchTerm);
  }

  @Query(() => PostPage)
  async infiniteScrollPosts(
    @Args({ name: 'pageNum', type: () => Int }) pageNum: number,
    @Args({ name: 'pageSize', type: () => Int }) pageSize: number
  ) {
    return await this.postsService.infiniteScrollPosts(pageNum, pageSize);
  }

  @Mutation(() => Post)
  async addPostWithInput(@Args('input') input: PostInput) {
    const createdBy = input.creatorId;
    const { title, imageUrl, categories, description } = input
    return await this.postsService.addPost({ title, imageUrl, categories, description, createdBy });
  }

  @Mutation(() => Post)
  async addPost(
    @Args('title') title: string,
    @Args('imageUrl') imageUrl: string,
    @Args({ name: 'categories', type: () => [String], nullable: "items" }) categories: string[],
    @Args('description') description: string,
    @Args({ name: 'creatorId', type: () => ID }) creatorId: string,
  ) {
    const createdBy = creatorId;
    return await this.postsService.addPost({ title, imageUrl, categories, description, createdBy });
  }

  @Mutation(() => Post)
  async updateUserPost(
    @Args({ name: 'postId', type: () => ID }) postId: string,    
    @Args({ name: 'userId', type: () => ID }) userId: string,
    @Args('title') title: string,
    @Args('imageUrl') imageUrl: string,
    @Args({ name: 'categories', type: () => [String], nullable: "items" }) categories: string[],
    @Args('description') description: string,
  ) {
    return await this.postsService.updateUserPost({ postId, userId, title, imageUrl, categories, description });
  }

  @Mutation(() => Post)
  async deleteUserPost(
    @Args({ name: 'postId', type: () => ID }) postId: string,    
  ) {
    return await this.postsService.deleteUserPost( postId );
  }

  @Mutation(() => Message)
  async addPostMessage(
    @Args('messageBody') messageBody: string,
    @Args({ name: 'userId', type: () => ID }) userId: string,
    @Args({ name: 'postId', type: () => ID }) postId: string,
  ) {
    return await this.postsService.addPostMessage({ messageBody, userId, postId });
  }

  @Mutation(() => LikesFaves)
  async likePost(
    @Args({ name: 'postId', type: () => ID }) postId: string,
    @Args('username') username: string
  ) {
    return await this.postsService.likePost(postId, username);
  }

  @Mutation(() => LikesFaves)
  async unlikePost(
    @Args({ name: 'postId', type: () => ID }) postId: string,
    @Args('username') username: string
  ) {
    return await this.postsService.unlikePost(postId, username);
  }

}
```

#### 3.-Test if the new `getUserPosts` Query and and the new `likePost` and `unlikePost` Mutations work propely

> query
```graphql
query getUserPosts($userId: ID!) {
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
```

> variables
```json
{
  "userId": "5d3730452dbcac4a24749fca"
}
```

> response
```json
{
  "data": {
    "getPosts": [
      {
        "_id": "5d57dfceb24be86be004004a",
        "title": "Chocolate Cake",
        "imageUrl": "https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "categories": [
          "Food"
        ],
        "description": "A delicious piece of chocolate cake",
        "createdDate": "2019-08-17T11:06:54.626Z",
        "likes": 1,
        "createdBy": {
          "_id": "5d3730452dbcac4a24749fca",
          "username": "Juan"
        }
      },
      {
        "_id": "5d57d42ef0db5f61cc3aa21a",
        "title": "Credenza",
        "imageUrl": "https://images.crateandbarrel.com/is/image/Crate/ClybournIICredenza3QF16/?$web_zoom_furn_av$&180802085137&wid=1008&hei=567",
        "categories": [
          "Furniture"
        ],
        "description": "A piece of furniture I want to buy",
        "createdDate": "2019-08-17T10:17:18.015Z",
        "likes": 0,
        "createdBy": {
          "_id": "5d3730452dbcac4a24749fca",
          "username": "Juan"
        }
      },
      {
        "_id": "5d505ca7c45cb259b0761e48",
        "title": "A tasty dinner",
        "imageUrl": "https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "categories": [
          "Food",
          "Travel"
        ],
        "description": "Picture of a recipe I would like to prepare",
        "createdDate": "2019-08-11T18:21:27.565Z",
        "likes": 1,
        "createdBy": {
          "_id": "5d3730452dbcac4a24749fca",
          "username": "Juan"
        }
      },
      {
        "_id": "5d502f6c685ff635a4be5336",
        "title": "Abstract Art",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Vassily_Kandinsky%2C_1923_-_Circles_in_a_Circle.jpg",
        "categories": [
          "Art"
        ],
        "description": "A neat painting by Kandinsky",
        "createdDate": "2019-08-11T15:08:28.203Z",
        "likes": 0,
        "createdBy": {
          "_id": "5d3730452dbcac4a24749fca",
          "username": "Juan"
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
        "createdDate": "2019-08-11T05:09:49.634Z",
        "likes": 0,
        "createdBy": {
          "_id": "5d3730452dbcac4a24749fca",
          "username": "Juan"
        }
      },
      {
        "_id": "5d0e10be7dd57444d0607790",
        "title": "Tasty nice coffee",
        "imageUrl": "https://images.pexels.com/photos/374757/pexels-photo-374757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "categories": [
          "Art",
          "Food"
        ],
        "description": "Some nice coffee artwork",
        "createdDate": "2019-06-22T11:27:58.416Z",
        "likes": 1,
        "createdBy": {
          "_id": "5d3730452dbcac4a24749fca",
          "username": "Juan"
        }
      },
      {
        "_id": "5d04d377deb8673e8c38fc2f",
        "title": "Mona lisa!",
        "imageUrl": "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.readingpublicmuseum.org%2Fexhibit_secrets-of-mona-lisa-4.jpg&f=1",
        "categories": [
          "Art"
        ],
        "description": "A painting",
        "createdDate": "2019-06-15T11:16:07.195Z",
        "likes": 0,
        "createdBy": {
          "_id": "5d3730452dbcac4a24749fca",
          "username": "Juan"
        }
      }
    ]
  }
}
```

> query
```graphql
mutation updateUserPost(
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

```

> variables
```json
{
  "postId": "5d57dfceb24be86be004004a",
  "userId": "5d3730452dbcac4a24749fca",
  "title": "Chocolate Cake II",
  "imageUrl": "https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "categories": [
    "Food"
  ],
  "description": "A delicious piece of chocolate cake"
}
```

> response
```json
{
  "data": {
    "updateUserPost": {
      "_id": "5d57dfceb24be86be004004a",
      "title": "Chocolate Cake II",
      "imageUrl": "https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "description": "A delicious piece of chocolate cake",
      "categories": [
        "Food"
      ],
      "createdDate": "2019-08-17T11:06:54.626Z",
      "likes": 1,
      "createdBy": {
        "_id": "5d3730452dbcac4a24749fca",
        "avatar": null
      }
    }
  }
}
```

> query
```graphql
mutation deleteUserPost($postId: ID!) {
  deleteUserPost(postId: $postId) {
    _id
  }
}
```

> variables
```json
{
  "postId": "5d57dfceb24be86be004004a"
}
```

> response
```json
{
  "data": {
    "deleteUserPost": {
      "_id": "5d57dfceb24be86be004004a"
    }
  }
}
```

### II.-Modify the client app to be able to update and delete a post from the `Pofrile` pages.

#### 1.-Create the `getUserPosts.gql` with the `getUserPosts` query and the `updateUserPost` and `deleteUserPost.gql` documents with the `updateUserPost` and `deleteUserPost` mutations.

- We need to create the `getUserPosts.gql` document with the `getUserPosts` Query.

> client\gql\getUserPosts.gql
```graphql
query getUserPosts($userId: ID!) {
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
```

- We need to create the `updateUserPost.gql` document with the `updateUserPost` Mutation.

> client\gql\updateUserPost.gql
```graphql
mutation updateUserPost(
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
```

- We need to create the `deleteUserPost.gql` document with the `deleteUserPost` Mutation.

> client\gql\deleteUserPost.gql
```graphql
mutation deleteUserPost($postId: ID!) {
  deleteUserPost(postId: $postId) {
    _id
  }
}

```

#### 2.-Modify the Store to include the `userPosts` state and the `getUserPosts`, `updateUserPost` and `deleteUserPost` actions.

- We need to modify the `store\index.js` store document to include the `userPosts` state and the `getUserPosts`, `updateUserPost` and `deleteUserPost` actions.

> client\store\index.js
```js
import { getPosts } from '~/gql/getPosts.gql'
import { searchPosts } from '~/gql/searchPosts.gql'
import { getUserPosts } from '~/gql/getUserPosts.gql'
import { getCurrentUser } from '~/gql/getCurrentUser.gql'
import { signinUser } from '~/gql/signinUser.gql'
import { signupUser } from '~/gql/signupUser.gql'
import { addPost } from '~/gql/addPost.gql'
import { updateUserPost } from '~/gql/updateUserPost.gql'
import { deleteUserPost } from '~/gql/deleteUserPost.gql'
import utils from '~/helpers/utils'

export const state = () => ({
  posts: [],
  userPosts: [],
  searchResults: [],
  user: null,
  loading: false,
  error: null,
  authError: null
})
export const mutations = {
  setPosts: (state, payload) => {
    state.posts = payload
  },
  setSearchResults: (state, payload) => {
    if (payload !== null && payload.length > 0) {
      state.searchResults = payload
    }
  },
  addPost: (state, payload) => {
    const posts = state.posts
    posts.unshift(payload)
    state.posts = posts
  },
  setUser: (state, payload) => {
    state.user = payload
  },
  setUserPosts: (state, payload) => {
    state.userPosts = payload
  },
  setLoading: (state, payload) => {
    state.loading = payload
  },
  clearUser: state => (state.user = null),
  setError: (state, payload) => {
    state.error = payload
  },
  clearError: state => (state.error = null),
  setAuthError: (state, payload) => {
    state.authError = payload
  },
  clearAuthError: state => (state.authError = null),
  clearSearchResults: state => (state.searchResults = [])
}
export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('getCurrentUser')
    await dispatch('getPosts')
  },
  async getPosts({ commit }) {
    commit('clearError')
    commit('setLoading', true)
    try {
      const result = await this.app.apolloProvider.defaultClient.query({
        query: getPosts
      })
      commit('setPosts', result.data.getPosts)
    } catch (error) {
      const currentError = utils.getCurrentGraphQLError(error)
      commit('setError', currentError)
      if (process.env.NODE_ENV === 'development')
        console.error(utils.getFirstGraphQLError(error))
    }
    commit('setLoading', false)
  },
  async getUserPosts({ commit }, payload) {
    commit('clearError')
    commit('setLoading', true)
    try {
      const result = await this.app.apolloProvider.defaultClient.query({
        query: getUserPosts,
        variables: payload
      })
      commit('setUserPosts', result.data.getUserPosts)
    } catch (error) {
      const currentError = utils.getCurrentGraphQLError(error)
      commit('setError', currentError)
      if (process.env.NODE_ENV === 'development')
        console.error(utils.getFirstGraphQLError(error))
    }
    commit('setLoading', false)
  },
  async searchPosts({ commit }, payload) {
    commit('clearError')
    try {
      const result = await this.app.apolloProvider.defaultClient.query({
        query: searchPosts,
        variables: payload
      })
      commit('setSearchResults', result.data.searchPosts)
    } catch (error) {
      const currentError = utils.getCurrentGraphQLError(error)
      commit('setError', currentError)
      if (process.env.NODE_ENV === 'development')
        console.error(utils.getFirstGraphQLError(error))
    }
  },
  async addPost({ commit }, payload) {
    commit('clearError')
    commit('setLoading', true)
    try {
      await this.app.apolloProvider.defaultClient.mutate({
        mutation: addPost,
        variables: payload
      })
      const { _id, title, imageUrl } = payload
      const newPost = {
        _id,
        title,
        imageUrl
      }
      commit('addPost', newPost)
    } catch (error) {
      const currentError = utils.getCurrentGraphQLError(error)
      commit('setError', currentError)
      if (process.env.NODE_ENV === 'development')
        console.error(utils.getFirstGraphQLError(error))
    }
    commit('setLoading', false)
  },
  async updateUserPost({ state, commit }, payload) {
    commit('clearError')
    commit('setLoading', true)
    try {
      const result = await this.app.apolloProvider.defaultClient.mutate({
        mutation: updateUserPost,
        variables: payload
      })
      const index = state.userPosts.findIndex(
        post => post._id === result.data.updateUserPost._id
      )
      const userPosts = [
        ...state.userPosts.slice(0, index),
        result.data.updateUserPost,
        ...state.userPosts.slice(index + 1)
      ]
      commit('setUserPosts', userPosts)
    } catch (error) {
      const currentError = utils.getCurrentGraphQLError(error)
      commit('setError', currentError)
      if (process.env.NODE_ENV === 'development')
        console.error(utils.getFirstGraphQLError(error))
    }
    commit('setLoading', false)
  },
  async deleteUserPost({ state, commit }, payload) {
    commit('clearError')
    commit('setLoading', true)
    try {
      const result = await this.app.apolloProvider.defaultClient.mutate({
        mutation: deleteUserPost,
        variables: payload
      })
      const index = state.userPosts.findIndex(
        post => post._id === result.data.updateUserPost._id
      )
      const userPosts = [
        ...state.userPosts.slice(0, index),
        ...state.userPosts.slice(index + 1)
      ]
      commit('setUserPosts', userPosts)
    } catch (error) {
      const currentError = utils.getCurrentGraphQLError(error)
      commit('setError', currentError)
      if (process.env.NODE_ENV === 'development')
        console.error(utils.getFirstGraphQLError(error))
    }
    commit('setLoading', false)
  },
  async logOut({ commit }) {
    this.app.$cookies.remove('apollo-token')
    await this.app.$apolloHelpers.onLogout()
    commit('clearUser')
  },
  async getCurrentUser({ commit, dispatch }) {
    const token = this.app.$apolloHelpers.getToken()
    if (!token) {
      return
    }
    if (!utils.isJwtTokenValid(token)) {
      commit('setAuthError', this.app.i18n.t('sessionExpiredSignInAgain'))
      await dispatch('logOut')
      return
    }
    commit('setLoading', true)
    try {
      const result = await this.app.apolloProvider.defaultClient.query({
        query: getCurrentUser
      })
      // Add user data to state
      commit('setUser', result.data.getCurrentUser)
      commit('clearError')
      commit('clearAuthError')
    } catch (error) {
      const currentError = utils.getCurrentGraphQLError(error)
      if (process.env.NODE_ENV === 'development') console.log(currentError)
      if (currentError && currentError.error === 'Unauthorized') {
        const sessionExpiredSignInAgain = this.app.i18n.t(
          'sessionExpiredSignInAgain'
        )
        commit('setAuthError', sessionExpiredSignInAgain)
        await dispatch('logOut')
      } else {
        commit('setError', currentError)
      }
      if (process.env.NODE_ENV === 'development')
        console.error(utils.getFirstGraphQLError(error))
    }
    commit('setLoading', false)
  },
  async signinUser({ commit, dispatch }, payload) {
    commit('clearError')
    commit('setLoading', true)
    try {
      const result = await this.app.apolloProvider.defaultClient.mutate({
        mutation: signinUser,
        variables: payload
      })
      await this.app.$apolloHelpers.onLogin(result.data.signinUser.token)
      await dispatch('getCurrentUser')
    } catch (error) {
      const currentError = utils.getCurrentGraphQLError(error)
      commit('setError', currentError)
      if (process.env.NODE_ENV === 'development')
        console.error(utils.getFirstGraphQLError(error))
    }
    commit('setLoading', false)
  },
  async signupUser({ commit, dispatch }, payload) {
    commit('clearError')
    commit('setLoading', true)
    try {
      const result = await this.app.apolloProvider.defaultClient.mutate({
        mutation: signupUser,
        variables: payload
      })
      await this.app.$apolloHelpers.onLogin(result.data.signupUser.token)
      await dispatch('getCurrentUser')
    } catch (error) {
      const currentError = utils.getCurrentGraphQLError(error)
      commit('setError', currentError)
      if (process.env.NODE_ENV === 'development')
        console.error(utils.getFirstGraphQLError(error))
    }
    commit('setLoading', false)
  },
  async signoutUser({ dispatch }) {
    await dispatch('logOut')
    // redirect home - kick users out of private pages (i.e. profile)
    this.app.router.push(this.app.localePath('index'))
  }
}
export const getters = {
  posts: state => state.posts,
  userPosts: state => state.userPosts,
  searchResults: state => state.searchResults,
  user: state => state.user,
  userFavorites: state => state.user && state.user.favorites,
  loading: state => state.loading,
  error: state => state.error,
  authError: state => state.authError
}
```

#### 3.-Modify the Profile page to include all the functionality

- We need to modify the `lang\en-US.js` localization document to add new entries for the page.

> client\lang\en-US.js
```js
export default {
  posts: 'Posts',
  signin: 'Sign in',
  signup: 'Sign up',
  searchposts: 'Search Posts',
  home: 'Home',
  createPost: 'Create Post',
  profile: 'Profile',
  signout: 'Signout',
  username: 'Username',
  password: 'Password',
  confirmPassword: 'Confirm Password',
  email: 'Email',
  dontHaveAnAccount: "Don't have an account?",
  alreadyHaveAnAccount: 'Already have an account?',
  welcomeBack: 'Welcome Back!',
  getStartedHere: 'Get Started Here',
  isRequired: '{name} is required',
  mustBeValid: '{name} must be valid',
  cannotBeMoreThanCharacters: '{name} cannot be more than {number} characters',
  mustBeAtLeast: '{name} must be at least {number} characters',
  passwordsMustMatch: 'Passwords must match',
  yourAreNowSignedIn: 'You are now signed in!',
  close: 'Close',
  sessionExpiredSignInAgain: 'Your session has ended. Please sign in again.',
  addPost: 'Add Post',
  postTitle: 'Post Title',
  imageUrl: 'Image URL',
  category: 'Category | Categories',
  categoryItems: {
    art: 'Art',
    education: 'Education',
    food: 'Food',
    furniture: 'Furniture',
    travel: 'Travel',
    photography: 'Photography',
    technology: 'Technology'
  },
  description: 'Description',
  submit: 'Submit',
  atLeastOne: 'At least one',
  likes: 'likes',
  comments: 'comments',
  added: 'Added',
  fetchMore: 'Fetch More',
  message: 'Message | Messages',
  clickToEnlargeImage: 'Click to enlarge image',
  addMessage: 'Add Message',
  pageNotFound: '404 Not Found',
  otherError: 'An error occurred',
  homePage: 'Home Page',
  sureDeleteThisPost: 'Are you sure you want to delete this post?',
  favorites: 'Favorites',
  postsAdded: 'Posts Added',
  joined: 'Joined',
  noFavoritesCurrently: 'You have no favorites currently.',
  noPostCurrently: 'You have no posts currently.',
  goAndAddSome: 'Go and add some!',
  favorited: `Favorited`,
  yourPosts: 'Your Posts',
  updatePost: 'Update Post',
  update: 'Update',
  cancel: 'Cancel'
}
```

- We need to modify the `lang\es-ES.js` localization document to add new entries for the page.

> client\lang\es-ES.js
```js
export default {
  posts: 'Entradas',
  signin: 'Iniciar sesión',
  signup: 'Inscripción',
  searchposts: 'Buscar entradas',
  home: 'Inicio',
  createPost: 'Crear Entrada',
  profile: 'Perfil',
  signout: 'Cerrar sesión',
  username: 'Usuario',
  password: 'Contraseña',
  confirmPassword: 'Confirmar Contraseña',
  email: 'Email',
  dontHaveAnAccount: '¿No tiene una cuenta?',
  alreadyHaveAnAccount: '¿Ya tiene una cuenta?',
  welcomeBack: '¡Bienvenido de nuevo!',
  getStartedHere: 'Comience aquí',
  isRequired: '{name} es requerido',
  mustBeValid: '{name} debe de ser válido',
  cannotBeMoreThanCharacters:
    '{name} no puede contener más de {number} caracteres',
  mustBeAtLeast: '{name} debe contener al menos {number} caracteres',
  passwordsMustMatch: 'Las Contraseñas deben coincidir',
  yourAreNowSignedIn: '¡Ahora está registrado!',
  close: 'Cerrar',
  sessionExpiredSignInAgain:
    'Su sesión ha caducado. Por favor, inicie la sesión otra vez.',
  addPost: 'Añadir Entrada',
  postTitle: 'Título de la entrada',
  imageUrl: 'URL de la imagen',
  category: 'Categoría | Categorías',
  categoryItems: {
    art: 'Arte',
    education: 'Educación',
    food: 'Comida',
    furniture: 'Muebles',
    travel: 'Viajes',
    photography: 'Fotografía',
    technology: 'Tecnología'
  },
  description: 'Descripción',
  submit: 'Enviar',
  atLeastOne: 'Por lo menos una',
  likes: 'me gusta',
  comments: 'comentarios',
  added: 'Creado',
  fetchMore: 'Obtener más',
  message: 'Mensaje | Mensajes',
  clickToEnlargeImage: 'Haga clic para ampliar la imagen',
  addMessage: 'Añadir Mensaje',
  pageNotFound: '404 No encontrado',
  otherError: 'Oucrrió un error',
  homePage: 'Página inicial',
  sureDeleteThisPost: '¿Está seguro de que desea eliminar esta entrada?',
  favorites: 'Favoritos',
  postsAdded: 'Entradas Añadidas',
  joined: 'Inscrito',
  noFavoritesCurrentlyAddSome: 'No tiene favoritos actualmente.',
  noPostCurrently: 'No tiene entradas actualmente.',
  goAndAddSome: '¡Acceda y agregue alguno!',
  favorited: `Favoritos`,
  yourPosts: 'Sus Entradas',
  updatePost: 'Actualizar Entrada',
  update: 'Actualizar',
  cancel: 'Cancelar'
}
```

- We need to modify the `profile\index.vue` page document to include all the functionality.

> client\pages\profile\index.vue
```html
<template>
  <v-container class="text-xs-center">
    <!-- User Details Card -->
    <v-flex sm6 offset-sm3>
      <v-card class="white--text" color="secondary">
        <v-layout>
          <v-flex xs5>
            <v-img height="125px" contain :src="user.avatar"></v-img>
          </v-flex>
          <v-flex xs7>
            <v-card-title primary-title>
              <div>
                <div class="headline">{{ user.username }}</div>
                <div>{{ $t('joined') }} {{ user.joinDate }}</div>
                <div class="hidden-xs-only font-weight-thin">
                  {{ user.favorites.length }} {{ $t('favorites') }}
                </div>
                <div class="hidden-xs-only font-weight-thin">
                  {{ userPosts.length }} {{ $t('postsAdded') }}
                </div>
              </div>
            </v-card-title>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>

    <!-- Posts Favorited by User -->
    <v-container v-if="!userFavorites.length">
      <v-layout row wrap>
        <v-flex xs12>
          <h2>{{ $t('noFavoritesCurrently') }} {{ $t('goAndAddSome') }}</h2>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container v-else class="mt-3">
      <v-flex xs12>
        <h2 class="font-weight-light">
          {{ $t('favorited') }}
          <span class="font-weight-regular">({{ userFavorites.length }})</span>
        </h2>
      </v-flex>
      <v-layout row wrap>
        <v-flex v-for="favorite in userFavorites" :key="favorite._id" sm6 xs12>
          <v-card class="mt-3 ml-1 mr-2" hover>
            <v-img height="30vh" :src="favorite.imageUrl"></v-img>
            <v-card-text>{{ favorite.title }}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- Posts Created By user -->
    <v-container v-if="!userPosts.length">
      <v-layout row wrap>
        <v-flex xs12>
          <h2>{{ $t('noPostCurrently') }} {{ $t('goAndAddSome') }}</h2>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container v-else class="mt-3">
      <v-flex xs12>
        <h2 class="font-weight-light">
          {{ $t('yourPosts') }}
          <span class="font-weight-regular">({{ userPosts.length }})</span>
        </h2>
      </v-flex>
      <v-layout row wrap>
        <v-flex v-for="post in userPosts" :key="post._id" sm6 xs12>
          <v-card class="mt-3 ml-1 mr-2" hover>
            <v-btn color="info" floating fab small dark @click="loadPost(post)">
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

            <v-img height="30vh" :src="post.imageUrl"></v-img>
            <v-card-text>{{ post.title }}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- Edit Post Dialog -->
    <v-dialog v-model="editPostDialog" xs12 sm6 offset-sm3 persistent>
      <v-card>
        <v-card-title class="headline grey lighten-2">{{
          $t('updatePost')
        }}</v-card-title>
        <v-container>
          <v-form
            ref="form"
            v-model="isFormValid"
            lazy-validation
            @submit.prevent="handleUpdateUserPost"
          >
            <!-- Title Input -->
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  v-model="title"
                  :rules="titleRules"
                  :label="$t('postTitle')"
                  type="text"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>

            <!-- Image Url Input -->
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  v-model="imageUrl"
                  :rules="imageRules"
                  :label="$t('imageUrl')"
                  type="text"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>

            <!-- Image Preview -->
            <v-layout row>
              <v-flex xs12>
                <img :src="imageUrl" height="300px" />
              </v-flex>
            </v-layout>

            <!-- Categories Select -->
            <v-layout row>
              <v-flex xs12>
                <v-select
                  v-model="categories"
                  :rules="categoriesRules"
                  item-text="text"
                  item-value="value"
                  :items="categoryItems"
                  multiple
                  :label="$tc('category', 2)"
                ></v-select>
              </v-flex>
            </v-layout>

            <!-- Description Text Area -->
            <v-layout row>
              <v-flex xs12>
                <v-textarea
                  v-model="description"
                  :rules="descRules"
                  :label="$t('description')"
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
                >{{ $t('update') }}</v-btn
              >
              <v-btn class="error--text" flat @click="editPostDialog = false">{{
                $t('cancel')
              }}</v-btn>
            </v-card-actions>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Profile',
  middleware: 'auth',
  data() {
    return {
      editPostDialog: false,
      isFormValid: true,
      title: '',
      imageUrl: '',
      categories: [],
      categoryItems: [
        { value: 'Art', text: this.$i18n.t('categoryItems.art') },
        { value: 'Education', text: this.$i18n.t('categoryItems.education') },
        { value: 'Food', text: this.$i18n.t('categoryItems.food') },
        { value: 'Furniture', text: this.$i18n.t('categoryItems.furniture') },
        { value: 'Travel', text: this.$i18n.t('categoryItems.travel') },
        {
          value: 'Photography',
          text: this.$i18n.t('categoryItems.photography')
        },
        {
          value: 'Technology',
          text: this.$i18n.t('categoryItems.technology')
        }
      ],
      description: '',
      titleRules: [
        title =>
          !!title ||
          this.$i18n.t('isRequired', { name: this.$i18n.t('postTitle') }),
        title =>
          title.length <= 20 ||
          this.$i18n.t('cannotBeMoreThanCharacters', {
            name: this.$i18n.t('postTitle'),
            number: 20
          })
      ],
      imageRules: [
        image =>
          !!image ||
          this.$i18n.t('isRequired', { name: this.$i18n.t('imageUrl') })
      ],
      categoriesRules: [
        categories =>
          categories.length >= 1 ||
          this.$i18n.t('isRequired', {
            name: `${this.$i18n.t('atLeastOne')} ${this.$i18n.tc(
              'category',
              1
            )}`
          })
      ],
      descRules: [
        desc =>
          !!desc ||
          this.$i18n.t('isRequired', { name: this.$i18n.t('description') }),
        desc =>
          desc.length <= 200 ||
          this.$i18n.t('cannotBeMoreThanCharacters', {
            name: this.$i18n.t('description'),
            number: 200
          })
      ]
    }
  },
  computed: {
    ...mapGetters(['user', 'userFavorites', 'userPosts'])
  },
  created() {
    this.handleGetUserPosts()
  },
  methods: {
    handleGetUserPosts() {
      this.$store.dispatch('getUserPosts', {
        userId: this.user._id
      })
    },
    handleUpdateUserPost() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('updateUserPost', {
          postId: this.postId,
          userId: this.user._id,
          title: this.title,
          imageUrl: this.imageUrl,
          categories: this.categories,
          description: this.description
        })
        this.editPostDialog = false
      }
    },
    handleDeleteUserPost(post) {
      this.loadPost(post, false)
      const deletePost = window.confirm(this.$i18n.t('sureDeleteThisPost'))
      if (deletePost) {
        this.$store.dispatch('deleteUserPost', {
          postId: this.postId
        })
      }
    },
    loadPost(
      { _id, title, imageUrl, categories, description },
      editPostDialog = true
    ) {
      this.editPostDialog = editPostDialog
      this.postId = _id
      this.title = title
      this.imageUrl = imageUrl
      this.categories = categories
      this.description = description
    }
  }
}
</script>

```

#### 4.-Modify the `default` layout document to show the snackbars when the error happenns on server rendering

> client\layouts\default.vue
```html
<template>
  <v-app style="background: #E3E3EE">
    <!-- Side Navbar -->
    <v-navigation-drawer v-model="sideNav" fixed app temporary>
      <v-toolbar color="accent" dark flat>
        <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
        <nuxt-link :to="localePath('index')" tag="span" style="cursor: pointer">
          <h1 class="title pl-3">VueShare</h1>
        </nuxt-link>
      </v-toolbar>

      <v-divider></v-divider>

      <!-- Side Navbar Links -->
      <v-list>
        <v-list-tile
          v-for="(item, i) in sideNavItems"
          :key="i"
          :to="localePath(item.link)"
          ripple
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{ item.title }}
          </v-list-tile-content>
        </v-list-tile>

        <!-- Signout Button -->
        <v-list-tile v-if="user" @click="handleSignoutUser">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ $t('signout') }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- Horizontal Navbar -->
    <v-toolbar fixed color="primary" dark>
      <!-- App Title -->
      <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-xs-only">
        <nuxt-link :to="localePath('index')" tag="span" style="cursor: pointer">
          VueShare
        </nuxt-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Search Input -->
      <v-text-field
        v-model="searchTerm"
        flex
        prepend-icon="search"
        color="accent"
        single-line
        hide-details
        :placeholder="$t('searchposts')"
        @input="handleSearchPosts"
      ></v-text-field>

      <!-- Search Results Card -->
      <v-card v-if="searchResults.length" id="search__card" dark>
        <v-list>
          <v-list-tile
            v-for="result in searchResults"
            :key="result._id"
            @click="goToSearchResult(result._id)"
          >
            <v-list-tile-title>
              {{ result.title }} -
              <span class="font-weight-thin">{{
                formatDescription(result.description)
              }}</span>
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
          v-for="(item, i) in horizontalNavItems"
          :key="i"
          :to="localePath(item.link)"
          flat
        >
          <v-icon class="hidden-sm-only" left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

      <!-- Profile Button -->
      <v-btn v-if="user" flat :to="localePath('profile')">
        <v-icon class="hidden-sm-only" left>account_box</v-icon>
        <v-badge right color="blue darken-2" :class="{ bounce: badgeAnimated }">
          <span v-if="userFavorites.length" slot="badge">{{
            userFavorites.length
          }}</span>
          {{ $t('profile') }}
        </v-badge>
      </v-btn>

      <!-- Signout Button -->
      <v-btn v-if="user" flat @click="handleSignoutUser">
        <v-icon class="hidden-sm-only" left>exit_to_app</v-icon>
        {{ $t('signout') }}
      </v-btn>

      <v-toolbar-title class="hidden-xs-only">
        <nuxt-link
          v-for="(locale, i) in showLocales"
          :key="i"
          tag="span"
          style="cursor: pointer"
          class="lang-switcher"
          :to="switchLocalePath(locale.code)"
        >
          {{ locale.name }}
        </nuxt-link>
      </v-toolbar-title>
    </v-toolbar>

    <!-- App Content -->
    <main>
      <v-container class="mt-4">
        <transition name="fade">
          <nuxt />
        </transition>

        <!-- Auth Snackbar -->
        <v-snackbar
          v-model="authSnackbar"
          color="success"
          :timeout="5000"
          bottom
          left
        >
          <v-icon class="mr-3">check_circle</v-icon>
          <h3>{{ $t('yourAreNowSignedIn') }}</h3>
          <v-btn dark flat @click="authSnackbar = false">{{
            $t('close')
          }}</v-btn>
        </v-snackbar>

        <!-- Auth Error Snackbar -->
        <v-snackbar
          v-if="authError"
          v-model="authErrorSnackbar"
          color="info"
          :timeout="5000"
          bottom
          left
        >
          <v-icon class="mr-3">cancel</v-icon>
          <h3>{{ authError }}</h3>
          <v-btn dark flat :to="localePath('signin')">{{ $t('signin') }}</v-btn>
        </v-snackbar>
      </v-container>
    </main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  head() {
    return this.$nuxtI18nSeo()
  },
  data() {
    return {
      searchTerm: '',
      sideNav: false,
      authSnackbar: false,
      authErrorSnackbar: false,
      badgeAnimated: false
    }
  },
  computed: {
    ...mapGetters(['searchResults', 'authError', 'user', 'userFavorites']),
    horizontalNavItems() {
      let items = [
        { icon: 'chat', title: this.$i18n.t('posts'), link: 'posts' },
        { icon: 'lock_open', title: this.$i18n.t('signin'), link: 'signin' },
        { icon: 'create', title: this.$i18n.t('signup'), link: 'signup' }
      ]
      if (this.user) {
        items = [{ icon: 'chat', title: this.$i18n.t('posts'), link: 'posts' }]
      }
      return items
    },
    sideNavItems() {
      let items = [
        { icon: 'chat', title: this.$i18n.t('posts'), link: 'posts' },
        { icon: 'lock_open', title: this.$i18n.t('signin'), link: 'signin' },
        { icon: 'create', title: this.$i18n.t('signup'), link: 'signup' }
      ]
      if (this.user) {
        items = [
          { icon: 'chat', title: this.$i18n.t('posts'), link: 'posts' },
          {
            icon: 'stars',
            title: this.$i18n.t('createPost'),
            link: 'posts-add'
          },
          {
            icon: 'account_box',
            title: this.$i18n.t('profile'),
            link: 'profile'
          }
        ]
      }
      return items
    },
    showLocales() {
      return this.$i18n.locales.filter(
        locale => locale.code !== this.$i18n.locale
      )
    }
  },
  watch: {
    user(newValue, oldValue) {
      // if we had no value for user before, show snackbar
      if (oldValue === null) {
        this.authSnackbar = true
      }
    },
    authError(value) {
      // if auth error is not null, show auth error snackbar
      if (value !== null) {
        this.authErrorSnackbar = true
      }
    },
    userFavorites(value) {
      // if user favorites value changed at all
      if (value) {
        this.badgeAnimated = true
        setTimeout(() => (this.badgeAnimated = false), 1000)
      }
    }
  },
  mounted() {
    if (this.user) {
      this.authSnackbar = true
    }
    if (this.authError !== null) {
      this.authErrorSnackbar = true
    }
  },
  methods: {
    handleSearchPosts() {
      this.$store.dispatch('searchPosts', {
        searchTerm: this.searchTerm
      })
    },
    goToSearchResult(resultId) {
      // Clear search term
      this.searchTerm = ''
      // Go to desired result
      this.$router.push(`${this.localePath('posts')}/${resultId}`)
      // Clear search results
      this.$store.commit('clearSearchResults')
    },
    formatDescription(desc) {
      return desc.length > 30 ? `${desc.slice(0, 30)}...` : desc
    },
    checkIfUserFavorite(resultId) {
      return (
        this.userFavorites &&
        this.userFavorites.some(fave => fave._id === resultId)
      )
    },
    handleSignoutUser() {
      this.$store.dispatch('signoutUser')
    },
    toggleSideNav() {
      this.sideNav = !this.sideNav
    }
  }
}
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

#### 5.-Modify some documents to show console logs only in the development environment

- We need to change the `customErrorHandler.js` apollo custom error document.

> client\apollo\customErrorHandler.js
```js
export default (err, { error }) => {
  if (process.env.NODE_ENV === 'development') console.log(err)
  error({ statusCode: 304, message: 'Server error!' })
}
```

- We need to modify the `\posts\_id.vue` Post page.
> client\pages\posts\_id.vue
```html
<template>
  <v-container v-if="getPost" class="mt-3" flexbox center>
    <!-- Post Card -->
    <v-layout row wrap>
      <v-flex xs12>
        <v-card hover>
          <v-card-title>
            <h1>{{ getPost.title }}</h1>
            <v-btn v-if="user" large icon @click="handleToggleLike">
              <v-icon
                large
                :color="checkIfPostLiked(getPost._id) ? 'red' : 'grey'"
                >favorite</v-icon
              >
            </v-btn>
            <h3 class="ml-3 font-weight-thin">
              {{ getPost.likes }} {{ $t('likes').toUpperCase() }}
            </h3>
            <v-spacer></v-spacer>
            <v-icon color="info" large @click="goToPreviousPage"
              >arrow_back</v-icon
            >
          </v-card-title>

          <v-tooltip right>
            <span>{{ $t('clickToEnlargeImage') }}</span>
            <v-img
              id="post__image"
              slot="activator"
              :src="getPost.imageUrl"
              @click="toggleImageDialog"
            ></v-img>
          </v-tooltip>

          <!-- Post Image Dialog -->
          <v-dialog v-model="dialog">
            <v-card>
              <v-img :src="getPost.imageUrl" height="80vh"></v-img>
            </v-card>
          </v-dialog>

          <v-card-text>
            <span v-for="(category, index) in getPost.categories" :key="index">
              <v-chip class="mb-3" color="accent" text-color="white">{{
                category
              }}</v-chip>
            </span>
            <h3>{{ getPost.description }}</h3>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <!-- Messages Section -->
    <div class="mt-3">
      <!-- Message Input -->
      <v-layout v-if="user" class="mb-3">
        <v-flex xs12>
          <v-form
            ref="form"
            v-model="isFormValid"
            lazy-validation
            @submit.prevent="handleAddPostMessage"
          >
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  v-model="messageBody"
                  :rules="messageRules"
                  clearable
                  :append-outer-icon="messageBody && 'send'"
                  :label="$t('addMessage')"
                  type="text"
                  prepend-icon="email"
                  required
                  @click:append-outer="handleAddPostMessage"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-form>
        </v-flex>
      </v-layout>

      <!-- Messages -->
      <v-layout row wrap>
        <v-flex xs12>
          <v-list subheader two-line>
            <v-subheader
              >{{ $tc('message', 2) }} ({{
                getPost.messages.length
              }})</v-subheader
            >

            <template v-for="message in getPost.messages">
              <v-divider :key="message._id"></v-divider>

              <v-list-tile :key="message.title" avatar inset>
                <v-list-tile-avatar>
                  <img :src="message.messageUser.avatar" />
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ message.messageBody }}
                  </v-list-tile-title>
                  <v-list-tile-sub-title>
                    {{ message.messageUser.username }}
                    <span class="grey--text text--lighten-1 hidden-xs-only">{{
                      message.messageDate
                    }}</span>
                  </v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action class="hidden-xs-only">
                  <v-icon
                    :color="checkIfOwnMessage(message) ? 'accent' : 'grey'"
                    >chat_bubble</v-icon
                  >
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
import { mapGetters } from 'vuex'
import { getPost } from '~/gql/getPost.gql'
import { addPostMessage } from '~/gql/addPostMessage.gql'
import { likePost } from '~/gql/likePost.gql'
import { unlikePost } from '~/gql/unlikePost.gql'
import utils from '~/helpers/utils'

export default {
  name: 'Post',
  validate({ params }) {
    return utils.isValidObjectID(params.id)
  },
  data() {
    return {
      postLiked: false,
      postId: this.$route.params.id,
      dialog: false,
      messageBody: '',
      isFormValid: true,
      messageRules: [
        message =>
          !!message ||
          this.$i18n.t('isRequired', { name: this.$i18n.tc('message', 1) }),
        message =>
          (message && message.length <= 75) ||
          this.$i18n.t('cannotBeMoreThanCharacters', {
            name: this.$i18n.tc('message', 1),
            number: 75
          })
      ]
    }
  },
  apollo: {
    getPost: {
      query: getPost,
      variables() {
        return {
          postId: this.postId
        }
      }
    }
  },
  computed: {
    ...mapGetters(['user', 'userFavorites'])
  },
  methods: {
    checkIfPostLiked(postId) {
      // check if user favorites includes post with id of 'postId'
      this.postLiked =
        this.userFavorites &&
        this.userFavorites.some(fave => fave._id === postId)
      return this.postLiked
    },
    handleToggleLike() {
      if (this.postLiked) {
        this.handleUnlikePost()
      } else {
        this.handleLikePost()
      }
    },
    handleLikePost() {
      const variables = {
        postId: this.postId,
        username: this.user.username
      }
      this.$apollo
        .mutate({
          mutation: likePost,
          variables,
          update: (cache, { data: { likePost } }) => {
            const data = cache.readQuery({
              query: getPost,
              variables: { postId: this.postId }
            })
            data.getPost.likes += 1
            cache.writeQuery({
              query: getPost,
              variables: { postId: this.postId },
              data
            })
          }
        })
        .then(({ data }) => {
          const updatedUser = {
            ...this.user,
            favorites: data.likePost.favorites
          }
          this.$store.commit('setUser', updatedUser)
        })
        .catch(err => {
          if (process.env.NODE_ENV === 'development') console.error(err)
        })
    },
    handleUnlikePost() {
      const variables = {
        postId: this.postId,
        username: this.user.username
      }
      this.$apollo
        .mutate({
          mutation: unlikePost,
          variables,
          update: (cache, { data: { unlikePost } }) => {
            const data = cache.readQuery({
              query: getPost,
              variables: { postId: this.postId }
            })
            data.getPost.likes -= 1
            cache.writeQuery({
              query: getPost,
              variables: { postId: this.postId },
              data
            })
          }
        })
        .then(({ data }) => {
          const updatedUser = {
            ...this.user,
            favorites: data.unlikePost.favorites
          }
          this.$store.commit('setUser', updatedUser)
        })
        .catch(err => {
          if (process.env.NODE_ENV === 'development') console.error(err)
        })
    },
    handleAddPostMessage() {
      if (this.$refs.form.validate()) {
        const variables = {
          messageBody: this.messageBody,
          userId: this.user._id,
          postId: this.postId
        }
        this.$apollo
          .mutate({
            mutation: addPostMessage,
            variables,
            update: (cache, { data: { addPostMessage } }) => {
              const data = cache.readQuery({
                query: getPost,
                variables: { postId: this.postId }
              })
              data.getPost.messages.unshift(addPostMessage)
              cache.writeQuery({
                query: getPost,
                variables: { postId: this.postId },
                data
              })
            }
          })
          .then(({ data }) => {
            this.$refs.form.reset()
          })
          .catch(err => {
            if (process.env.NODE_ENV === 'development') console.error(err)
          })
      }
    },
    goToPreviousPage() {
      this.$router.go(-1)
    },
    toggleImageDialog() {
      if (window.innerWidth > 500) {
        this.dialog = !this.dialogs
      }
    },
    checkIfOwnMessage(message) {
      return this.user && this.user._id === message.messageUser._id
    }
  }
}
</script>

<style scoped>
#post__image {
  height: 400px !important;
}
</style>
```

#### 6.-We need to test if it works.

![](ProfilePageUpdateDeletePosts.png)

![](ProfilePageUpdateDeletePosts2.png)

![](ProfilePageUpdateDeletePosts3.png)

![](ProfilePageUpdateDeletePosts4.png)

![](ProfilePageUpdateDeletePosts5.png)

![](ProfilePageUpdateDeletePosts6.png)

## Section 15: Preparing for Deployment 

### I.-Modify the client app to make some changes to improve the app

#### 1.-Install the `@nuxtjs/moment` package

- We need to install the [@nuxtjs/moment](https://github.com/nuxt-community/moment-module) library that will be use to forrmat and localize dates

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt/client (master)
$ npm i @nuxtjs/moment
npm WARN ts-node@8.3.0 requires a peer of typescript@>=2.0 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.0.7 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.0.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\watchpack\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\nodemon\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\jest-haste-map\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ @nuxtjs/moment@1.2.0
added 3 packages from 6 contributors and audited 897035 packages in 49.763s
found 0 vulnerabilities
```

- We need to create the `plugins\i18n-moment.js` plugin to use `moment` with `nuxt-i18n`

> client\plugins\i18n-moment.js
```js
export default function({ app }) {
  app.i18n.beforeLanguageSwitch = (_oldLocale, newLocale) => {
    app.$moment.locale(newLocale)
  }
}
```

- We need to modify the `nuxt.config.js` config file to set up the `@nuxtjs/moment` pacjage

> client\nuxt.config.js
```js
import es from './lang/es-ES.js'
import en from './lang/en-US.js'
// import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@plugins/shared-components.js', '@plugins/i18n-moment.js'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      'nuxt-i18n',
      {
        seo: false,
        locales: [
          {
            name: 'ESP',
            code: 'es',
            iso: 'es-ES'
          },
          {
            name: 'ENG',
            code: 'en',
            iso: 'en-US'
          }
        ],
        strategy: 'prefix_and_default',
        langDir: 'lang/',
        defaultLocale: 'es',
        vueI18n: {
          fallbackLocale: 'es',
          messages: { es, en },
          dateTimeFormats: {
            es: {
              short: {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              },
              long: {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                weekday: 'short',
                hour: 'numeric',
                minute: 'numeric'
              }
            },
            en: {
              short: {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              },
              long: {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                weekday: 'short',
                hour: 'numeric',
                minute: 'numeric'
              }
            }
          }
        }
      }
    ],
    ['@nuxtjs/moment', { locales: ['es'], defaultLocale: 'es' }],
    '@nuxtjs/vuetify',
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module',
    '@nuxtjs/apollo',
    `cookie-universal-nuxt`
  ],
  apollo: {
    authenticationType: '',
    errorHandler: '~/apollo/customErrorHandler.js',
    clientConfigs: {
      default: {
        httpEndpoint:
          process.env.HTTP_ENDPOINT || 'http://localhost:4000/graphql'
      }
    }
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    theme: {
      // primary: colors.blue.darken2,
      // accent: colors.grey.darken3,
      // secondary: colors.amber.darken3,
      // info: colors.teal.lighten1,
      // warning: colors.amber.base,
      // error: colors.deepOrange.accent4,
      // success: colors.green.accent3
      primary: '#3B125F',
      secondary: '#8B5FBF',
      accent: '#BF653F',
      error: '#722530',
      warning: '#A37513',
      info: '#396893',
      success: '#4caf50'
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
```

#### 2.-Modify the Store to include the `infiniteScrollPosts` state and to modify the `updateUserPost` and `deleteUserPost` to update the  `infiniteScrollPosts` and `posts` states.

- Modify the `client\store\index.js` store document to include the `infiniteScrollPosts` state and to modify the `updateUserPost` and `deleteUserPost` to update the  `infiniteScrollPosts` and `posts` states.

> client\store\index.js
```js
import { getPosts } from '~/gql/getPosts.gql'
import { infiniteScrollPosts } from '~/gql/infiniteScrollPosts.gql'
import { searchPosts } from '~/gql/searchPosts.gql'
import { getUserPosts } from '~/gql/getUserPosts.gql'
import { getCurrentUser } from '~/gql/getCurrentUser.gql'
import { signinUser } from '~/gql/signinUser.gql'
import { signupUser } from '~/gql/signupUser.gql'
import { addPost } from '~/gql/addPost.gql'
import { updateUserPost } from '~/gql/updateUserPost.gql'
import { deleteUserPost } from '~/gql/deleteUserPost.gql'
import utils from '~/helpers/utils'

export const state = () => ({
  posts: [],
  infiniteScrollPosts: {
    posts: [],
    hasMore: false
  },
  userPosts: [],
  searchResults: [],
  user: null,
  loading: false,
  error: null,
  authError: null
})
export const mutations = {
  setPosts: (state, payload) => {
    state.posts = payload
  },
  setInfiniteScrollPosts: (state, payload) => {
    const infiniteScrollPosts = state.infiniteScrollPosts.posts
    state.infiniteScrollPosts = {
      posts: [...infiniteScrollPosts, ...payload.posts],
      hasMore: payload.hasMore
    }
  },
  clearInfiniteScrollPosts: state => {
    state.clearInfiniteScrollPosts = {
      posts: [],
      hasMore: false
    }
  },
  setSearchResults: (state, payload) => {
    if (payload !== null && payload.length > 0) {
      state.searchResults = payload
    }
  },
  addPost: (state, payload) => {
    const posts = state.posts
    posts.unshift(payload)
    state.posts = posts
  },
  setUser: (state, payload) => {
    state.user = payload
  },
  setUserPosts: (state, payload) => {
    state.userPosts = payload
  },
  setLoading: (state, payload) => {
    state.loading = payload
  },
  clearUser: state => (state.user = null),
  setError: (state, payload) => {
    state.error = payload
  },
  clearError: state => (state.error = null),
  setAuthError: (state, payload) => {
    state.authError = payload
  },
  clearAuthError: state => (state.authError = null),
  clearSearchResults: state => (state.searchResults = [])
}
export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('getCurrentUser')
    await dispatch('getPosts')
  },
  async getPosts({ commit }) {
    commit('clearError')
    commit('setLoading', true)
    try {
      const result = await this.app.apolloProvider.defaultClient.query({
        query: getPosts
      })
      commit('setPosts', result.data.getPosts)
    } catch (error) {
      const currentError = utils.getCurrentGraphQLError(error)
      commit('setError', currentError)
      if (process.env.NODE_ENV === 'development')
        console.error(utils.getFirstGraphQLError(error))
    }
    commit('setLoading', false)
  },
  async getInfiniteScrollPosts({ commit }, payload) {
    const pageSize = 2
    commit('clearError')
    commit('setLoading', true)
    try {
      const pageNum = payload || 1
      const variables = {
        pageNum,
        pageSize
      }
      const result = await this.app.apolloProvider.defaultClient.query({
        query: infiniteScrollPosts,
        variables
      })
      commit('setInfiniteScrollPosts', result.data.infiniteScrollPosts)
    } catch (error) {
      const currentError = utils.getCurrentGraphQLError(error)
      commit('setError', currentError)
      if (process.env.NODE_ENV === 'development')
        console.error(utils.getFirstGraphQLError(error))
    }
    commit('setLoading', false)
  },
  async getUserPosts({ commit }, payload) {
    commit('clearError')
    commit('setLoading', true)
    try {
      const result = await this.app.apolloProvider.defaultClient.query({
        query: getUserPosts,
        variables: payload
      })
      commit('setUserPosts', result.data.getUserPosts)
    } catch (error) {
      const currentError = utils.getCurrentGraphQLError(error)
      commit('setError', currentError)
      if (process.env.NODE_ENV === 'development')
        console.error(utils.getFirstGraphQLError(error))
    }
    commit('setLoading', false)
  },
  async searchPosts({ commit }, payload) {
    commit('clearError')
    try {
      const result = await this.app.apolloProvider.defaultClient.query({
        query: searchPosts,
        variables: payload
      })
      commit('setSearchResults', result.data.searchPosts)
    } catch (error) {
      const currentError = utils.getCurrentGraphQLError(error)
      commit('setError', currentError)
      if (process.env.NODE_ENV === 'development')
        console.error(utils.getFirstGraphQLError(error))
    }
  },
  async addPost({ commit, dispatch, state }, payload) {
    commit('clearError')
    commit('setLoading', true)
    try {
      await this.app.apolloProvider.defaultClient.mutate({
        mutation: addPost,
        variables: payload
      })
      const { _id, title, imageUrl } = payload
      const newPost = {
        _id,
        title,
        imageUrl
      }
      commit('addPost', newPost)
      if (state.infiniteScrollPosts.posts.length > 0) {
        commit('clearInfiniteSrollPosts')
        await dispatch('getInfiniteScrollPosts')
      }
    } catch (error) {
      const currentError = utils.getCurrentGraphQLError(error)
      commit('setError', currentError)
      if (process.env.NODE_ENV === 'development')
        console.error(utils.getFirstGraphQLError(error))
    }
    commit('setLoading', false)
  },
  async updateUserPost({ state, commit, dispatch }, payload) {
    commit('clearError')
    commit('setLoading', true)
    try {
      const result = await this.app.apolloProvider.defaultClient.mutate({
        mutation: updateUserPost,
        variables: payload
      })
      const index = state.userPosts.findIndex(
        post => post._id === result.data.updateUserPost._id
      )
      const userPosts = [
        ...state.userPosts.slice(0, index),
        result.data.updateUserPost,
        ...state.userPosts.slice(index + 1)
      ]
      commit('setUserPosts', userPosts)
      await dispatch('getPosts')
      if (state.infiniteScrollPosts.posts.length > 0) {
        commit('clearInfiniteSrollPosts')
        await dispatch('getInfiniteScrollPosts')
      }
    } catch (error) {
      const currentError = utils.getCurrentGraphQLError(error)
      commit('setError', currentError)
      if (process.env.NODE_ENV === 'development')
        console.error(utils.getFirstGraphQLError(error))
    }
    commit('setLoading', false)
  },
  async deleteUserPost({ state, commit, dispatch }, payload) {
    commit('clearError')
    commit('setLoading', true)
    try {
      const result = await this.app.apolloProvider.defaultClient.mutate({
        mutation: deleteUserPost,
        variables: payload
      })
      const index = state.userPosts.findIndex(
        post => post._id === result.data.updateUserPost._id
      )
      const userPosts = [
        ...state.userPosts.slice(0, index),
        ...state.userPosts.slice(index + 1)
      ]
      commit('setUserPosts', userPosts)
      await dispatch('getPosts')
      if (state.infiniteScrollPosts.posts.length > 0) {
        commit('clearInfiniteSrollPosts')
        await dispatch('getInfiniteScrollPosts')
      }
    } catch (error) {
      const currentError = utils.getCurrentGraphQLError(error)
      commit('setError', currentError)
      if (process.env.NODE_ENV === 'development')
        console.error(utils.getFirstGraphQLError(error))
    }
    commit('setLoading', false)
  },
  async logOut({ commit }) {
    this.app.$cookies.remove('apollo-token')
    await this.app.$apolloHelpers.onLogout()
    commit('clearUser')
  },
  async getCurrentUser({ commit, dispatch }) {
    const token = this.app.$apolloHelpers.getToken()
    if (!token) {
      return
    }
    if (!utils.isJwtTokenValid(token)) {
      commit('setAuthError', this.app.i18n.t('sessionExpiredSignInAgain'))
      await dispatch('logOut')
      return
    }
    commit('setLoading', true)
    try {
      const result = await this.app.apolloProvider.defaultClient.query({
        query: getCurrentUser
      })
      // Add user data to state
      commit('setUser', result.data.getCurrentUser)
      commit('clearError')
      commit('clearAuthError')
    } catch (error) {
      const currentError = utils.getCurrentGraphQLError(error)
      if (currentError && currentError.error === 'Unauthorized') {
        const sessionExpiredSignInAgain = this.app.i18n.t(
          'sessionExpiredSignInAgain'
        )
        commit('setAuthError', sessionExpiredSignInAgain)
        await dispatch('logOut')
      } else {
        commit('setError', currentError)
      }
      if (process.env.NODE_ENV === 'development')
        console.error(utils.getFirstGraphQLError(error))
    }
    commit('setLoading', false)
  },
  async signinUser({ commit, dispatch }, payload) {
    commit('clearError')
    commit('setLoading', true)
    try {
      const result = await this.app.apolloProvider.defaultClient.mutate({
        mutation: signinUser,
        variables: payload
      })
      await this.app.$apolloHelpers.onLogin(result.data.signinUser.token)
      await dispatch('getCurrentUser')
    } catch (error) {
      const currentError = utils.getCurrentGraphQLError(error)
      commit('setError', currentError)
      if (process.env.NODE_ENV === 'development')
        console.error(utils.getFirstGraphQLError(error))
    }
    commit('setLoading', false)
  },
  async signupUser({ commit, dispatch }, payload) {
    commit('clearError')
    commit('setLoading', true)
    try {
      const result = await this.app.apolloProvider.defaultClient.mutate({
        mutation: signupUser,
        variables: payload
      })
      await this.app.$apolloHelpers.onLogin(result.data.signupUser.token)
      await dispatch('getCurrentUser')
    } catch (error) {
      const currentError = utils.getCurrentGraphQLError(error)
      commit('setError', currentError)
      if (process.env.NODE_ENV === 'development')
        console.error(utils.getFirstGraphQLError(error))
    }
    commit('setLoading', false)
  },
  async signoutUser({ dispatch }) {
    await dispatch('logOut')
    // redirect home - kick users out of private pages (i.e. profile)
    this.app.router.push(this.app.localePath('index'))
  }
}
export const getters = {
  posts: state => state.posts,
  infiniteScrollPosts: state => state.infiniteScrollPosts,
  userPosts: state => state.userPosts,
  searchResults: state => state.searchResults,
  user: state => state.user,
  userFavorites: state => state.user && state.user.favorites,
  loading: state => state.loading,
  error: state => state.error,
  authError: state => state.authError
}
```

#### 3.-Modify the Posts page to use the `infiniteScrollPosts` store state and manage the `showMoreEnabled` property properly.

- We need to modify the `posts\index.vue` Posts page document to use the `infiniteScrollPosts` store state and manage the `showMoreEnabled` property properly. Also the dates are formated and localized.

> client\pages\posts\index.vue
```html
<template>
  <v-container fluid grid-list-xl>
    <!-- Post Cards -->
    <v-layout v-if="infiniteScrollPosts" row wrap>
      <v-flex
        v-for="post in infiniteScrollPosts.posts"
        :key="post._id"
        xs12
        sm6
      >
        <v-card hover>
          <v-img
            :src="post.imageUrl"
            height="30vh"
            lazy
            @click.native="goToPost(post._id)"
          ></v-img>

          <v-card-actions>
            <v-card-title primary>
              <div>
                <div class="headline">{{ post.title }}</div>
                <span class="grey--text"
                  >{{ post.likes }} {{ $t('likes') }} -
                  {{ post.messages ? post.messages.length : 0 }}
                  {{ $t('comments') }}</span
                >
              </div>
            </v-card-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="showPostCreator = !showPostCreator">
              <v-icon>{{
                `keyboard_arrow_${showPostCreator ? 'up' : 'down'}`
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <!-- Post Creator Tile -->
          <v-slide-y-transition>
            <v-card-text v-show="showPostCreator" class="grey lighten-4">
              <v-list-tile avatar>
                <v-list-tile-avatar>
                  <img :src="post.createdBy.avatar" />
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title class="text--primary">{{
                    post.createdBy.username
                  }}</v-list-tile-title>
                  <v-list-tile-sub-title class="font-weight-thin"
                    >{{ $t('added') }}
                    {{ $d(new Date(post.createdDate), 'short') }}
                  </v-list-tile-sub-title>
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
          <v-btn color="info" @click="showMorePosts">{{
            $t('fetchMore')
          }}</v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Posts',
  data() {
    return {
      pageNum: 1,
      showPostCreator: false
    }
  },
  computed: {
    ...mapGetters(['infiniteScrollPosts']),
    showMoreEnabled() {
      return this.infiniteScrollPosts && this.infiniteScrollPosts.hasMore
    }
  },
  async asyncData({ store }) {
    if (store.state.infiniteScrollPosts.posts.length === 0) {
      await store.dispatch('getInfiniteScrollPosts')
    }
  },
  // async mounted() {
  //   await this.$store.dispatch('getInfiniteScrollPosts')
  // },
  methods: {
    showMorePosts() {
      this.pageNum += 1
      this.$store.dispatch('getInfiniteScrollPosts', this.pageNum)
    },
    goToPost(postId) {
      this.$router.push(`${this.localePath('posts')}/${postId}`)
    }
  }
}
</script>
```

#### 4.-Modify the Home page document page document to add the `Explore Posts` Button

- We need to modify the `lang\en-US.js` localization document to add new entries for the page.

> client\lang\en-US.js
```js
export default {
  posts: 'Posts',
  signin: 'Sign in',
  signup: 'Sign up',
  searchposts: 'Search Posts',
  home: 'Home',
  createPost: 'Create Post',
  profile: 'Profile',
  signout: 'Signout',
  username: 'Username',
  password: 'Password',
  confirmPassword: 'Confirm Password',
  email: 'Email',
  dontHaveAnAccount: "Don't have an account?",
  alreadyHaveAnAccount: 'Already have an account?',
  welcomeBack: 'Welcome Back!',
  getStartedHere: 'Get Started Here',
  isRequired: '{name} is required',
  mustBeValid: '{name} must be valid',
  cannotBeMoreThanCharacters: '{name} cannot be more than {number} characters',
  mustBeAtLeast: '{name} must be at least {number} characters',
  passwordsMustMatch: 'Passwords must match',
  yourAreNowSignedIn: 'You are now signed in!',
  close: 'Close',
  sessionExpiredSignInAgain: 'Your session has ended. Please sign in again.',
  addPost: 'Add Post',
  postTitle: 'Post Title',
  imageUrl: 'Image URL',
  category: 'Category | Categories',
  categoryItems: {
    art: 'Art',
    education: 'Education',
    food: 'Food',
    furniture: 'Furniture',
    travel: 'Travel',
    photography: 'Photography',
    technology: 'Technology'
  },
  description: 'Description',
  submit: 'Submit',
  atLeastOne: 'At least one',
  likes: 'likes',
  comments: 'comments',
  added: 'Added',
  fetchMore: 'Fetch More',
  message: 'Message | Messages',
  clickToEnlargeImage: 'Click to enlarge image',
  addMessage: 'Add Message',
  pageNotFound: '404 Not Found',
  otherError: 'An error occurred',
  homePage: 'Home Page',
  sureDeleteThisPost: 'Are you sure you want to delete this post?',
  favorites: 'Favorites',
  postsAdded: 'Posts Added',
  joined: 'Joined',
  noFavoritesCurrently: 'You have no favorites currently.',
  noPostCurrently: 'You have no posts currently.',
  goAndAddSome: 'Go and add some!',
  favorited: `Favorited`,
  yourPosts: 'Your Posts',
  updatePost: 'Update Post',
  update: 'Update',
  cancel: 'Cancel',
  explorePosts: 'Explore Posts'
}

```

- We need to modify the `lang\es-ES.js` localization document to add new entries for the page.

> client\lang\es-ES.js
```js
export default {
  posts: 'Entradas',
  signin: 'Iniciar sesión',
  signup: 'Inscripción',
  searchposts: 'Buscar entradas',
  home: 'Inicio',
  createPost: 'Crear Entrada',
  profile: 'Perfil',
  signout: 'Cerrar sesión',
  username: 'Usuario',
  password: 'Contraseña',
  confirmPassword: 'Confirmar Contraseña',
  email: 'Email',
  dontHaveAnAccount: '¿No tiene una cuenta?',
  alreadyHaveAnAccount: '¿Ya tiene una cuenta?',
  welcomeBack: '¡Bienvenido de nuevo!',
  getStartedHere: 'Comience aquí',
  isRequired: '{name} es requerido',
  mustBeValid: '{name} debe de ser válido',
  cannotBeMoreThanCharacters:
    '{name} no puede contener más de {number} caracteres',
  mustBeAtLeast: '{name} debe contener al menos {number} caracteres',
  passwordsMustMatch: 'Las Contraseñas deben coincidir',
  yourAreNowSignedIn: '¡Ahora está registrado!',
  close: 'Cerrar',
  sessionExpiredSignInAgain:
    'Su sesión ha caducado. Por favor, inicie la sesión otra vez.',
  addPost: 'Añadir Entrada',
  postTitle: 'Título de la entrada',
  imageUrl: 'URL de la imagen',
  category: 'Categoría | Categorías',
  categoryItems: {
    art: 'Arte',
    education: 'Educación',
    food: 'Comida',
    furniture: 'Muebles',
    travel: 'Viajes',
    photography: 'Fotografía',
    technology: 'Tecnología'
  },
  description: 'Descripción',
  submit: 'Enviar',
  atLeastOne: 'Por lo menos una',
  likes: 'me gusta',
  comments: 'comentarios',
  added: 'Creado',
  fetchMore: 'Obtener más',
  message: 'Mensaje | Mensajes',
  clickToEnlargeImage: 'Haga clic para ampliar la imagen',
  addMessage: 'Añadir Mensaje',
  pageNotFound: '404 No encontrado',
  otherError: 'Oucrrió un error',
  homePage: 'Página inicial',
  sureDeleteThisPost: '¿Está seguro de que desea eliminar esta entrada?',
  favorites: 'Favoritos',
  postsAdded: 'Entradas Añadidas',
  joined: 'Inscrito',
  noFavoritesCurrentlyAddSome: 'No tiene favoritos actualmente.',
  noPostCurrently: 'No tiene entradas actualmente.',
  goAndAddSome: '¡Acceda y agregue alguno!',
  favorited: `Favoritos`,
  yourPosts: 'Sus Entradas',
  updatePost: 'Actualizar Entrada',
  update: 'Actualizar',
  cancel: 'Cancelar',
  explorePosts: 'Explorar Entradas'
}

```

- We are going to modify the `pages\index.vue` Home page document page document to add the `Explore Posts` Button

> client\pages\index.vue
```html
<template>
  <!-- Loading Spinner -->
  <v-container text-xs-center>
    <v-layout row>
      <v-dialog v-model="loading" persistent fullscreen>
        <v-container fill-height>
          <v-layout row justify-center align-center>
            <v-progress-circular
              indeterminate
              :size="70"
              :width="7"
              color="secondary"
            ></v-progress-circular>
          </v-layout>
        </v-container>
      </v-dialog>
    </v-layout>

    <!-- Explore Posts Button -->
    <v-layout v-if="!loading" class="mt-2 mb-3" row wrap>
      <v-flex xs-12>
        <v-btn class="secondary" :to="localePath('posts')" large dark>
          {{ $t('explorePosts') }}
        </v-btn>
      </v-flex>
    </v-layout>

    <!-- Posts Carrousel -->
    <v-flex xs12>
      <v-carousel
        v-if="!loading && posts.length > 0"
        v-bind="{ cycle: true }"
        interval="3000"
      >
        <v-carousel-item
          v-for="post in posts"
          :key="post._id"
          :src="post.imageUrl"
          @click.native="goToPost(post._id)"
        >
          <h1 id="carousel__title">{{ post.title }}</h1>
        </v-carousel-item>
      </v-carousel>
    </v-flex>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['loading', 'posts'])
  },
  methods: {
    goToPost(postId) {
      this.$router.push(`${this.localePath('posts')}/${postId}`)
    }
  }
}
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

#### 5.-Modify the Default layout document to change the `h1` and `h2` CSS segments.

- We are going to modify the `layouts\default.vue` document to change the `h1` and `h2` CSS segments.

> client\layouts\default.vue
```html
<template>
  <v-app style="background: #E3E3EE">
    <!-- Side Navbar -->
    <v-navigation-drawer v-model="sideNav" fixed app temporary>
      <v-toolbar color="accent" dark flat>
        <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
        <nuxt-link :to="localePath('index')" tag="span" style="cursor: pointer">
          <h1 class="title pl-3">VueShare</h1>
        </nuxt-link>
      </v-toolbar>

      <v-divider></v-divider>

      <!-- Side Navbar Links -->
      <v-list>
        <v-list-tile
          v-for="(item, i) in sideNavItems"
          :key="i"
          :to="localePath(item.link)"
          ripple
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{ item.title }}
          </v-list-tile-content>
        </v-list-tile>

        <!-- Signout Button -->
        <v-list-tile v-if="user" @click="handleSignoutUser">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ $t('signout') }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- Horizontal Navbar -->
    <v-toolbar fixed color="primary" dark>
      <!-- App Title -->
      <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-xs-only">
        <nuxt-link :to="localePath('index')" tag="span" style="cursor: pointer">
          VueShare
        </nuxt-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Search Input -->
      <v-text-field
        v-model="searchTerm"
        flex
        prepend-icon="search"
        color="accent"
        single-line
        hide-details
        :placeholder="$t('searchposts')"
        @input="handleSearchPosts"
      ></v-text-field>

      <!-- Search Results Card -->
      <v-card v-if="searchResults.length" id="search__card" dark>
        <v-list>
          <v-list-tile
            v-for="result in searchResults"
            :key="result._id"
            @click="goToSearchResult(result._id)"
          >
            <v-list-tile-title>
              {{ result.title }} -
              <span class="font-weight-thin">{{
                formatDescription(result.description)
              }}</span>
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
          v-for="(item, i) in horizontalNavItems"
          :key="i"
          :to="localePath(item.link)"
          flat
        >
          <v-icon class="hidden-sm-only" left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

      <!-- Profile Button -->
      <v-btn v-if="user" flat :to="localePath('profile')">
        <v-icon class="hidden-sm-only" left>account_box</v-icon>
        <v-badge right color="blue darken-2" :class="{ bounce: badgeAnimated }">
          <span v-if="userFavorites.length" slot="badge">{{
            userFavorites.length
          }}</span>
          {{ $t('profile') }}
        </v-badge>
      </v-btn>

      <!-- Signout Button -->
      <v-btn v-if="user" flat @click="handleSignoutUser">
        <v-icon class="hidden-sm-only" left>exit_to_app</v-icon>
        {{ $t('signout') }}
      </v-btn>

      <v-toolbar-title class="hidden-xs-only">
        <nuxt-link
          v-for="(locale, i) in showLocales"
          :key="i"
          tag="span"
          style="cursor: pointer"
          class="lang-switcher"
          :to="switchLocalePath(locale.code)"
        >
          {{ locale.name }}
        </nuxt-link>
      </v-toolbar-title>
    </v-toolbar>

    <!-- App Content -->
    <main>
      <v-container class="mt-4">
        <transition name="fade">
          <nuxt />
        </transition>

        <!-- Auth Snackbar -->
        <v-snackbar
          v-model="authSnackbar"
          color="success"
          :timeout="5000"
          bottom
          left
        >
          <v-icon class="mr-3">check_circle</v-icon>
          <h3>{{ $t('yourAreNowSignedIn') }}</h3>
          <v-btn dark flat @click="authSnackbar = false">{{
            $t('close')
          }}</v-btn>
        </v-snackbar>

        <!-- Auth Error Snackbar -->
        <v-snackbar
          v-if="authError"
          v-model="authErrorSnackbar"
          color="info"
          :timeout="5000"
          bottom
          left
        >
          <v-icon class="mr-3">cancel</v-icon>
          <h3>{{ authError }}</h3>
          <v-btn dark flat :to="localePath('signin')">{{ $t('signin') }}</v-btn>
        </v-snackbar>
      </v-container>
    </main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  head() {
    return this.$nuxtI18nSeo()
  },
  data() {
    return {
      searchTerm: '',
      sideNav: false,
      authSnackbar: false,
      authErrorSnackbar: false,
      badgeAnimated: false
    }
  },
  computed: {
    ...mapGetters(['searchResults', 'authError', 'user', 'userFavorites']),
    horizontalNavItems() {
      let items = [
        { icon: 'chat', title: this.$i18n.t('posts'), link: 'posts' },
        { icon: 'lock_open', title: this.$i18n.t('signin'), link: 'signin' },
        { icon: 'create', title: this.$i18n.t('signup'), link: 'signup' }
      ]
      if (this.user) {
        items = [{ icon: 'chat', title: this.$i18n.t('posts'), link: 'posts' }]
      }
      return items
    },
    sideNavItems() {
      let items = [
        { icon: 'chat', title: this.$i18n.t('posts'), link: 'posts' },
        { icon: 'lock_open', title: this.$i18n.t('signin'), link: 'signin' },
        { icon: 'create', title: this.$i18n.t('signup'), link: 'signup' }
      ]
      if (this.user) {
        items = [
          { icon: 'chat', title: this.$i18n.t('posts'), link: 'posts' },
          {
            icon: 'stars',
            title: this.$i18n.t('createPost'),
            link: 'posts-add'
          },
          {
            icon: 'account_box',
            title: this.$i18n.t('profile'),
            link: 'profile'
          }
        ]
      }
      return items
    },
    showLocales() {
      return this.$i18n.locales.filter(
        locale => locale.code !== this.$i18n.locale
      )
    }
  },
  watch: {
    user(newValue, oldValue) {
      // if we had no value for user before, show snackbar
      if (oldValue === null) {
        this.authSnackbar = true
      }
    },
    authError(value) {
      // if auth error is not null, show auth error snackbar
      if (value !== null) {
        this.authErrorSnackbar = true
      }
    },
    userFavorites(value) {
      // if user favorites value changed at all
      if (value) {
        this.badgeAnimated = true
        setTimeout(() => (this.badgeAnimated = false), 1000)
      }
    }
  },
  mounted() {
    if (this.user) {
      this.authSnackbar = true
    }
    if (this.authError !== null) {
      this.authErrorSnackbar = true
    }
  },
  methods: {
    handleSearchPosts() {
      this.$store.dispatch('searchPosts', {
        searchTerm: this.searchTerm
      })
    },
    goToSearchResult(resultId) {
      // Clear search term
      this.searchTerm = ''
      // Go to desired result
      this.$router.push(`${this.localePath('posts')}/${resultId}`)
      // Clear search results
      this.$store.commit('clearSearchResults')
    },
    formatDescription(desc) {
      return desc.length > 30 ? `${desc.slice(0, 30)}...` : desc
    },
    checkIfUserFavorite(resultId) {
      return (
        this.userFavorites &&
        this.userFavorites.some(fave => fave._id === resultId)
      )
    },
    handleSignoutUser() {
      this.$store.dispatch('signoutUser')
    },
    toggleSideNav() {
      this.sideNav = !this.sideNav
    }
  }
}
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


#### 6.-Modify the Profile page to allow to go to the Posts from the Post Images.

- We need to modify the `profile\index.vue` Profile page document to allow to go to the Posts from the Post Images. Also the `moment` library is used to format the dates.

> client\pages\profile\index.vue
```html
<template>
  <v-container class="text-xs-center">
    <!-- User Details Card -->
    <v-flex sm6 offset-sm3>
      <v-card class="white--text" color="secondary">
        <v-layout>
          <v-flex xs5>
            <v-img height="125px" contain :src="user.avatar"></v-img>
          </v-flex>
          <v-flex xs7>
            <v-card-title primary-title>
              <div>
                <div class="headline">{{ user.username }}</div>
                <div>
                  {{ $t('joined') }} {{ $d(new Date(user.joinDate), 'short') }}
                </div>
                <div class="hidden-xs-only font-weight-thin">
                  {{ user.favorites.length }} {{ $t('favorites') }}
                </div>
                <div class="hidden-xs-only font-weight-thin">
                  {{ userPosts.length }} {{ $t('postsAdded') }}
                </div>
              </div>
            </v-card-title>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>

    <!-- Posts Favorited by User -->
    <v-container v-if="!userFavorites.length">
      <v-layout row wrap>
        <v-flex xs12>
          <h2>{{ $t('noFavoritesCurrently') }} {{ $t('goAndAddSome') }}</h2>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container v-else class="mt-3">
      <v-flex xs12>
        <h2 class="font-weight-light">
          {{ $t('favorited') }}
          <span class="font-weight-regular">({{ userFavorites.length }})</span>
        </h2>
      </v-flex>
      <v-layout row wrap>
        <v-flex v-for="favorite in userFavorites" :key="favorite._id" sm6 xs12>
          <v-card class="mt-3 ml-1 mr-2" hover>
            <v-img
              height="30vh"
              :src="favorite.imageUrl"
              @click="goToPost(favorite._id)"
            ></v-img>
            <v-card-text>{{ favorite.title }}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- Posts Created By user -->
    <v-container v-if="!userPosts.length">
      <v-layout row wrap>
        <v-flex xs12>
          <h2>{{ $t('noPostCurrently') }} {{ $t('goAndAddSome') }}</h2>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container v-else class="mt-3">
      <v-flex xs12>
        <h2 class="font-weight-light">
          {{ $t('yourPosts') }}
          <span class="font-weight-regular">({{ userPosts.length }})</span>
        </h2>
      </v-flex>
      <v-layout row wrap>
        <v-flex v-for="post in userPosts" :key="post._id" sm6 xs12>
          <v-card class="mt-3 ml-1 mr-2" hover>
            <v-btn color="info" floating fab small dark @click="loadPost(post)">
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
            <v-card-text>{{ post.title }}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- Edit Post Dialog -->
    <v-dialog v-model="editPostDialog" xs12 sm6 offset-sm3 persistent>
      <v-card>
        <v-card-title class="headline grey lighten-2">{{
          $t('updatePost')
        }}</v-card-title>
        <v-container>
          <v-form
            ref="form"
            v-model="isFormValid"
            lazy-validation
            @submit.prevent="handleUpdateUserPost"
          >
            <!-- Title Input -->
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  v-model="title"
                  :rules="titleRules"
                  :label="$t('postTitle')"
                  type="text"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>

            <!-- Image Url Input -->
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  v-model="imageUrl"
                  :rules="imageRules"
                  :label="$t('imageUrl')"
                  type="text"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>

            <!-- Image Preview -->
            <v-layout row>
              <v-flex xs12>
                <img :src="imageUrl" height="300px" />
              </v-flex>
            </v-layout>

            <!-- Categories Select -->
            <v-layout row>
              <v-flex xs12>
                <v-select
                  v-model="categories"
                  :rules="categoriesRules"
                  item-text="text"
                  item-value="value"
                  :items="categoryItems"
                  multiple
                  :label="$tc('category', 2)"
                ></v-select>
              </v-flex>
            </v-layout>

            <!-- Description Text Area -->
            <v-layout row>
              <v-flex xs12>
                <v-textarea
                  v-model="description"
                  :rules="descRules"
                  :label="$t('description')"
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
                >{{ $t('update') }}</v-btn
              >
              <v-btn class="error--text" flat @click="editPostDialog = false">{{
                $t('cancel')
              }}</v-btn>
            </v-card-actions>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Profile',
  middleware: 'auth',
  data() {
    return {
      editPostDialog: false,
      isFormValid: true,
      title: '',
      imageUrl: '',
      categories: [],
      categoryItems: [
        { value: 'Art', text: this.$i18n.t('categoryItems.art') },
        { value: 'Education', text: this.$i18n.t('categoryItems.education') },
        { value: 'Food', text: this.$i18n.t('categoryItems.food') },
        { value: 'Furniture', text: this.$i18n.t('categoryItems.furniture') },
        { value: 'Travel', text: this.$i18n.t('categoryItems.travel') },
        {
          value: 'Photography',
          text: this.$i18n.t('categoryItems.photography')
        },
        {
          value: 'Technology',
          text: this.$i18n.t('categoryItems.technology')
        }
      ],
      description: '',
      titleRules: [
        title =>
          !!title ||
          this.$i18n.t('isRequired', { name: this.$i18n.t('postTitle') }),
        title =>
          title.length <= 20 ||
          this.$i18n.t('cannotBeMoreThanCharacters', {
            name: this.$i18n.t('postTitle'),
            number: 20
          })
      ],
      imageRules: [
        image =>
          !!image ||
          this.$i18n.t('isRequired', { name: this.$i18n.t('imageUrl') })
      ],
      categoriesRules: [
        categories =>
          categories.length >= 1 ||
          this.$i18n.t('isRequired', {
            name: `${this.$i18n.t('atLeastOne')} ${this.$i18n.tc(
              'category',
              1
            )}`
          })
      ],
      descRules: [
        desc =>
          !!desc ||
          this.$i18n.t('isRequired', { name: this.$i18n.t('description') }),
        desc =>
          desc.length <= 200 ||
          this.$i18n.t('cannotBeMoreThanCharacters', {
            name: this.$i18n.t('description'),
            number: 200
          })
      ]
    }
  },
  computed: {
    ...mapGetters(['user', 'userFavorites', 'userPosts'])
  },
  created() {
    this.handleGetUserPosts()
  },
  methods: {
    goToPost(id) {
      this.$router.push(`${this.localePath('posts')}/${id}`)
    },
    handleGetUserPosts() {
      this.$store.dispatch('getUserPosts', {
        userId: this.user._id
      })
    },
    handleUpdateUserPost() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('updateUserPost', {
          postId: this.postId,
          userId: this.user._id,
          title: this.title,
          imageUrl: this.imageUrl,
          categories: this.categories,
          description: this.description
        })
        this.editPostDialog = false
      }
    },
    handleDeleteUserPost(post) {
      this.loadPost(post, false)
      const deletePost = window.confirm(this.$i18n.t('sureDeleteThisPost'))
      if (deletePost) {
        this.$store.dispatch('deleteUserPost', {
          postId: this.postId
        })
      }
    },
    loadPost(
      { _id, title, imageUrl, categories, description },
      editPostDialog = true
    ) {
      this.editPostDialog = editPostDialog
      this.postId = _id
      this.title = title
      this.imageUrl = imageUrl
      this.categories = categories
      this.description = description
    }
  }
}
</script>
```

#### 7.-Modify the Post page to format and lozalize the dates.

- We need to modify the `posts\_id.vue` Post page document to format and lozalize the dates.

> client\pages\posts\_id.vue
```html
<template>
  <v-container class="text-xs-center">
    <!-- User Details Card -->
    <v-flex sm6 offset-sm3>
      <v-card class="white--text" color="secondary">
        <v-layout>
          <v-flex xs5>
            <v-img height="125px" contain :src="user.avatar"></v-img>
          </v-flex>
          <v-flex xs7>
            <v-card-title primary-title>
              <div>
                <div class="headline">{{ user.username }}</div>
                <div>
                  {{ $t('joined') }} {{ $d(new Date(user.joinDate), 'short') }}
                </div>
                <div class="hidden-xs-only font-weight-thin">
                  {{ user.favorites.length }} {{ $t('favorites') }}
                </div>
                <div class="hidden-xs-only font-weight-thin">
                  {{ userPosts.length }} {{ $t('postsAdded') }}
                </div>
              </div>
            </v-card-title>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>

    <!-- Posts Favorited by User -->
    <v-container v-if="!userFavorites.length">
      <v-layout row wrap>
        <v-flex xs12>
          <h2>{{ $t('noFavoritesCurrently') }} {{ $t('goAndAddSome') }}</h2>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container v-else class="mt-3">
      <v-flex xs12>
        <h2 class="font-weight-light">
          {{ $t('favorited') }}
          <span class="font-weight-regular">({{ userFavorites.length }})</span>
        </h2>
      </v-flex>
      <v-layout row wrap>
        <v-flex v-for="favorite in userFavorites" :key="favorite._id" sm6 xs12>
          <v-card class="mt-3 ml-1 mr-2" hover>
            <v-img
              height="30vh"
              :src="favorite.imageUrl"
              @click="goToPost(favorite._id)"
            ></v-img>
            <v-card-text>{{ favorite.title }}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- Posts Created By user -->
    <v-container v-if="!userPosts.length">
      <v-layout row wrap>
        <v-flex xs12>
          <h2>{{ $t('noPostCurrently') }} {{ $t('goAndAddSome') }}</h2>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container v-else class="mt-3">
      <v-flex xs12>
        <h2 class="font-weight-light">
          {{ $t('yourPosts') }}
          <span class="font-weight-regular">({{ userPosts.length }})</span>
        </h2>
      </v-flex>
      <v-layout row wrap>
        <v-flex v-for="post in userPosts" :key="post._id" sm6 xs12>
          <v-card class="mt-3 ml-1 mr-2" hover>
            <v-btn color="info" floating fab small dark @click="loadPost(post)">
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
            <v-card-text>{{ post.title }}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- Edit Post Dialog -->
    <v-dialog v-model="editPostDialog" xs12 sm6 offset-sm3 persistent>
      <v-card>
        <v-card-title class="headline grey lighten-2">{{
          $t('updatePost')
        }}</v-card-title>
        <v-container>
          <v-form
            ref="form"
            v-model="isFormValid"
            lazy-validation
            @submit.prevent="handleUpdateUserPost"
          >
            <!-- Title Input -->
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  v-model="title"
                  :rules="titleRules"
                  :label="$t('postTitle')"
                  type="text"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>

            <!-- Image Url Input -->
            <v-layout row>
              <v-flex xs12>
                <v-text-field
                  v-model="imageUrl"
                  :rules="imageRules"
                  :label="$t('imageUrl')"
                  type="text"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>

            <!-- Image Preview -->
            <v-layout row>
              <v-flex xs12>
                <img :src="imageUrl" height="300px" />
              </v-flex>
            </v-layout>

            <!-- Categories Select -->
            <v-layout row>
              <v-flex xs12>
                <v-select
                  v-model="categories"
                  :rules="categoriesRules"
                  item-text="text"
                  item-value="value"
                  :items="categoryItems"
                  multiple
                  :label="$tc('category', 2)"
                ></v-select>
              </v-flex>
            </v-layout>

            <!-- Description Text Area -->
            <v-layout row>
              <v-flex xs12>
                <v-textarea
                  v-model="description"
                  :rules="descRules"
                  :label="$t('description')"
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
                >{{ $t('update') }}</v-btn
              >
              <v-btn class="error--text" flat @click="editPostDialog = false">{{
                $t('cancel')
              }}</v-btn>
            </v-card-actions>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Profile',
  middleware: 'auth',
  data() {
    return {
      editPostDialog: false,
      isFormValid: true,
      title: '',
      imageUrl: '',
      categories: [],
      categoryItems: [
        { value: 'Art', text: this.$i18n.t('categoryItems.art') },
        { value: 'Education', text: this.$i18n.t('categoryItems.education') },
        { value: 'Food', text: this.$i18n.t('categoryItems.food') },
        { value: 'Furniture', text: this.$i18n.t('categoryItems.furniture') },
        { value: 'Travel', text: this.$i18n.t('categoryItems.travel') },
        {
          value: 'Photography',
          text: this.$i18n.t('categoryItems.photography')
        },
        {
          value: 'Technology',
          text: this.$i18n.t('categoryItems.technology')
        }
      ],
      description: '',
      titleRules: [
        title =>
          !!title ||
          this.$i18n.t('isRequired', { name: this.$i18n.t('postTitle') }),
        title =>
          title.length <= 20 ||
          this.$i18n.t('cannotBeMoreThanCharacters', {
            name: this.$i18n.t('postTitle'),
            number: 20
          })
      ],
      imageRules: [
        image =>
          !!image ||
          this.$i18n.t('isRequired', { name: this.$i18n.t('imageUrl') })
      ],
      categoriesRules: [
        categories =>
          categories.length >= 1 ||
          this.$i18n.t('isRequired', {
            name: `${this.$i18n.t('atLeastOne')} ${this.$i18n.tc(
              'category',
              1
            )}`
          })
      ],
      descRules: [
        desc =>
          !!desc ||
          this.$i18n.t('isRequired', { name: this.$i18n.t('description') }),
        desc =>
          desc.length <= 200 ||
          this.$i18n.t('cannotBeMoreThanCharacters', {
            name: this.$i18n.t('description'),
            number: 200
          })
      ]
    }
  },
  computed: {
    ...mapGetters(['user', 'userFavorites', 'userPosts'])
  },
  created() {
    this.handleGetUserPosts()
  },
  methods: {
    goToPost(id) {
      this.$router.push(`${this.localePath('posts')}/${id}`)
    },
    handleGetUserPosts() {
      this.$store.dispatch('getUserPosts', {
        userId: this.user._id
      })
    },
    handleUpdateUserPost() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('updateUserPost', {
          postId: this.postId,
          userId: this.user._id,
          title: this.title,
          imageUrl: this.imageUrl,
          categories: this.categories,
          description: this.description
        })
        this.editPostDialog = false
      }
    },
    handleDeleteUserPost(post) {
      this.loadPost(post, false)
      const deletePost = window.confirm(this.$i18n.t('sureDeleteThisPost'))
      if (deletePost) {
        this.$store.dispatch('deleteUserPost', {
          postId: this.postId
        })
      }
    },
    loadPost(
      { _id, title, imageUrl, categories, description },
      editPostDialog = true
    ) {
      this.editPostDialog = editPostDialog
      this.postId = _id
      this.title = title
      this.imageUrl = imageUrl
      this.categories = categories
      this.description = description
    }
  }
}
</script>
```

#### 8.-We need to ensure everything works properly.

![](PreparingForDeployment.png)

![](PreparingForDeployment2.png)

![](PreparingForDeployment3.png)

![](PreparingForDeployment4.png)

![](PreparingForDeployment5.png)

![](PreparingForDeployment6.png)

![](PreparingForDeployment7.png)

![](PreparingForDeployment8.png)

![](PreparingForDeployment9.png)

![](PreparingForDeployment10.png)

![](PreparingForDeployment11.png)

## Section 16: Deployment with Heroku

- We are going to use [Heroku](https://www.heroku.com/) to deploy the whole application.

### 1.-Browse to the `Heroku Dashboard` to create a new app

- Browse to [Heroku Login](https://id.heroku.com/login) to log in.

![](DeploymentWithHeroku.png)

- Click on `Create a new App`

![](DeploymentWithHeroku2.png)

- Put the name: `nuxt-with-graphql-peelmicro` and then click on `Create app`.

![](DeploymentWithHeroku3.png)

![](DeploymentWithHeroku4.png)

### 2.-Add the settings variables

- Click on `Settings` and `Revel Config Vars`. Then add the following `Config Vars`:

Name | Value | Description
---------|----------|---------
 NPM_CONFIG_PRODUCTION | false | Needed for both client and server to install the devDependencies that are needed to generate the code
 MONGO_URI | mongodb+srv://USERNAME:PASSWORD@CLUSTERID.mongodb.net/DATABASENAME?retryWrites=true&w=majority | Connection to MongoDb database
 SECRET | SecretKeyUsedToCreateTheJwtToken | Secret Key Used To Create The Jwt Token
HTTP_ENDPOINT | https://nuxt-with-graphql-peelmicro/graphql | server endpoint

![](DeploymentWithHeroku5.png)

 Modify the `/server/src/main.ts` doccument to access the `client/dist` folder.

### 3.-Modify the server app to use the `client dist` folder 

- Modify the `package.json` document to include the `scripts` that are needed to deploy the app with `Heroku`.

> package.json
```json
{
  "name": "full-stack-vue-with-graphql-the-ultimate-guide-nuxt",
  "version": "1.0.0",
  "description": "Source code for the NestJs and Nuxt version of the 'Full-Stack Vue with GraphQL - The Ultimate Guide' Udemy course.",
  "main": "index.js",
  "scripts": {
    "heroku-prebuild": "npm run install:client && npm run install:server",
    "install:client": "(cd client && npm install)",
    "install:server": "(cd server && npm install)",
    "build": "npm run build:client",
    "build:client": "(cd client && npm run generate)",
    "start": "npm run start:prod",
    "start:prod": "(cd server && npm run start:prod)",    
    "server": "cd server && npm run start:dev",
    "client": "cd client && npm run dev",
    "dev": "concurrently --names \"server,client\" \"npm run server --silent\" \"npm run client --silent\""
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/peelmicro/full-stack-vue-with-graphql-the-ultimate-guide-nuxt.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/peelmicro/full-stack-vue-with-graphql-the-ultimate-guide-nuxt/issues"
  },
  "homepage": "https://github.com/peelmicro/full-stack-vue-with-graphql-the-ultimate-guide-nuxt#readme",
  "devDependencies": {
    "concurrently": "^4.1.0"
  }
}
```

- Modify the `tsconfig.json` document to include `"esModuleInterop": true` to avoid errors when running the `start:prod` node script.

> server\tsconfig.json
```json
{
  "compilerOptions": {
    "module": "commonjs",
    "declaration": true,
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "target": "es6",
    "sourceMap": true,
    "outDir": "./dist",
    "baseUrl": "./",
    "incremental": true,
    "esModuleInterop": true
  },
  "exclude": ["node_modules"]
}
```

- Modify the `main.ts` doccument to access the `client/dist` folder.

> server\src\main.ts
```ts
import * as express from 'express';
import { NestFactory } from '@nestjs/core';
import { join }  from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  if (process.env.NODE_ENV === 'production') {
    const CLIENT_FILES = join(__dirname, '..', '..', 'client', 'dist');
    app.use(express.static(CLIENT_FILES));
  }
  await app.listen(process.env.PORT || 4000);
}
bootstrap(); 
```

### 4.-Install the `Heroku CLI`

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt (master)
$ npm i -g heroku
npm WARN deprecated cross-spawn-async@2.2.5: cross-spawn no longer requires a build toolchain, use it instead
C:\Users\juan.pablo.perez\AppData\Roaming\npm\heroku -> C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\heroku\bin\run
+ heroku@7.27.1
updated 2 packages in 41.814s
```

### 5.-Log in from the terminal to `Heroku`

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt (master)
$ heroku login
heroku: Press any key to open up the browser to login or q to exit:
Opening browser to https://cli-auth.heroku.com/auth/browser/014e0e39-5f93-4fb0-9fff-02f58b4cfc14
heroku: Waiting for login... |
```
![](DeploymentWithHeroku6.png)

![](DeploymentWithHeroku7.png)


```bash
Logging in... done
Logged in as juanp_perez@msn.com
```

### 6.-Set up the `Heroku git` repository

- Put `heroku git:remote -a nuxt-with-graphql-peelmicro` to set up the `Heroku git` repository

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt (master)
$ heroku git:remote -a nuxt-with-graphql-peelmicro
set git remote heroku to https://git.heroku.com/nuxt-with-graphql-peelmicro.git
```

### 7.-Deploy to `Heroku`

- Commit the current code.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt (master)
$ git commit -m "Heroku Deployment"
[master 0333090] Heroku Deployment
 3 files changed, 16 insertions(+), 2 deletions(-)
```

- Push the new `commit`

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/full-stack-vue-with-graphql-the-ultimate-guide-nuxt (master)
$ git push heroku master
Enumerating objects: 11, done.
Counting objects: 100% (11/11), done.
Delta compression using up to 4 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (6/6), 481 bytes | 240.00 KiB/s, done.
Total 6 (delta 5), reused 0 (delta 0)
remote: Compressing source files... done.
remote: Building source:
remote:
remote: -----> Node.js app detected
remote:
remote: -----> Creating runtime environment
remote:
remote:        NPM_CONFIG_LOGLEVEL=error
remote:        NPM_CONFIG_PRODUCTION=false
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
remote: -----> Restoring cache
remote:        - node_modules
remote:
remote: -----> Prebuild
remote:        Running heroku-prebuild
remote:
remote:        > full-stack-vue-with-graphql-the-ultimate-guide-nuxt@1.0.0 heroku-prebuild /tmp/build_53b0679ae7798a8233a34cf02eb7da63
remote:        > npm run install:client && npm run install:server
remote:
remote:
remote:        > full-stack-vue-with-graphql-the-ultimate-guide-nuxt@1.0.0 install:client /tmp/build_53b0679ae7798a8233a34cf02eb7da63
remote:        > (cd client && npm install)
remote:
remote:
remote:        > core-js@3.1.4 postinstall /tmp/build_53b0679ae7798a8233a34cf02eb7da63/client/node_modules/apollo-env/node_modules/core-js
remote:        > node scripts/postinstall || echo "ignore"
remote:
remote:
remote:        > core-js@2.6.9 postinstall /tmp/build_53b0679ae7798a8233a34cf02eb7da63/client/node_modules/core-js
remote:        > node scripts/postinstall || echo "ignore"
remote:
remote:
remote:        > core-js-pure@3.1.4 postinstall /tmp/build_53b0679ae7798a8233a34cf02eb7da63/client/node_modules/core-js-pure
remote:        > node scripts/postinstall || echo "ignore"
remote:
remote:
remote:        > protobufjs@6.8.8 postinstall /tmp/build_53b0679ae7798a8233a34cf02eb7da63/client/node_modules/protobufjs
remote:        > node scripts/postinstall
remote:
remote:
remote:        > nodemon@1.19.1 postinstall /tmp/build_53b0679ae7798a8233a34cf02eb7da63/client/node_modules/nodemon
remote:        > node bin/postinstall || exit 0
remote:
remote:        Love nodemon? You can now support the project via the open collective:
remote:         > https://opencollective.com/nodemon/donate
remote:
remote:
remote:        > nuxt@2.8.1 postinstall /tmp/build_53b0679ae7798a8233a34cf02eb7da63/client/node_modules/nuxt
remote:        > opencollective || exit 0
remote:
remote:        added 1684 packages from 992 contributors and audited 897035 packages in 42.376s
remote:        found 0 vulnerabilities
remote:
remote:
remote:        > full-stack-vue-with-graphql-the-ultimate-guide-nuxt@1.0.0 install:server /tmp/build_53b0679ae7798a8233a34cf02eb7da63
remote:        > (cd server && npm install)
remote:
remote:
remote:        > bcrypt@3.0.6 install /tmp/build_53b0679ae7798a8233a34cf02eb7da63/server/node_modules/bcrypt
remote:        > node-pre-gyp install --fallback-to-build
remote:
remote:        [bcrypt] Success: "/tmp/build_53b0679ae7798a8233a34cf02eb7da63/server/node_modules/bcrypt/lib/binding/bcrypt_lib.node" is installed via remote
remote:
remote:        > core-js@3.1.4 postinstall /tmp/build_53b0679ae7798a8233a34cf02eb7da63/server/node_modules/apollo-env/node_modules/core-js
remote:        > node scripts/postinstall || echo "ignore"
remote:
remote:
remote:        > core-js@2.6.9 postinstall /tmp/build_53b0679ae7798a8233a34cf02eb7da63/server/node_modules/core-js
remote:        > node scripts/postinstall || echo "ignore"
remote:
remote:
remote:        > protobufjs@6.8.8 postinstall /tmp/build_53b0679ae7798a8233a34cf02eb7da63/server/node_modules/protobufjs
remote:        > node scripts/postinstall
remote:
remote:
remote:        > type-graphql@0.17.4 postinstall /tmp/build_53b0679ae7798a8233a34cf02eb7da63/server/node_modules/type-graphql
remote:        > node ./dist/postinstall || exit 0
remote:
remote:        Love TypeGraphQL or use it at work? 
remote:        You can now support the project via the Open Collective:
remote:         > https://opencollective.com/typegraphql
remote:
remote:
remote:        > @nestjs/core@6.5.3 postinstall /tmp/build_53b0679ae7798a8233a34cf02eb7da63/server/node_modules/@nestjs/core
remote:        > opencollective || exit 0
remote:
remote:
remote:        > nodemon@1.19.1 postinstall /tmp/build_53b0679ae7798a8233a34cf02eb7da63/server/node_modules/nodemon
remote:        > node bin/postinstall || exit 0
remote:
remote:        added 1020 packages from 744 contributors and audited 877533 packages in 25.009s
remote:        found 0 vulnerabilities
remote:
remote:
remote: -----> Installing dependencies
remote:        Installing node modules (package.json + package-lock)
remote:        audited 103 packages in 1.136s
remote:        found 0 vulnerabilities
remote:
remote:
remote: -----> Build
remote:        Running build
remote:
remote:        > full-stack-vue-with-graphql-the-ultimate-guide-nuxt@1.0.0 build /tmp/build_53b0679ae7798a8233a34cf02eb7da63
remote:        > npm run build:client
remote:
remote:
remote:        > full-stack-vue-with-graphql-the-ultimate-guide-nuxt@1.0.0 build:client /tmp/build_53b0679ae7798a8233a34cf02eb7da63
remote:        > (cd client && npm run generate)
remote:
remote:
remote:        > client@1.0.0 generate /tmp/build_53b0679ae7798a8233a34cf02eb7da63/client
remote:        > nuxt generate
remote:
remote:        ℹ Production build
remote:        ✔ Builder initialized
remote:        ✔ Nuxt files generated
remote:        ℹ Compiling Client
remote:
remote:  ERROR  (node:2658) DeprecationWarning: Tapable.plugin is deprecated. Use new API on .hooks instead
remote:
remote:        ✔ Client: Compiled successfully in 33.24s
remote:        ℹ Compiling Server
remote:        ✔ Server: Compiled successfully in 7.31s
remote:
remote: Hash: f2c8e9cef7f302628c06
remote: Version: webpack 4.35.0
remote: Time: 33239ms
remote: Built at: 08/19/2019 5:49:26 PM
remote:                          Asset       Size  Chunks                    Chunk Names
remote: ../server/client.manifest.json   13.5 KiB          [emitted]
remote:        091eb1ba7c34d4d68a75.js   4.07 KiB       6  [emitted]         pages/posts/add
remote:        1f04b5e33ef840ee4bd0.js   17.9 KiB       5  [emitted]         pages/posts/_id
remote:        3683f0e4e74662961350.js   1.79 KiB       0  [emitted]         lang-en-US
remote:        63dbc69e947c85b04cbe.js   3.55 KiB       9  [emitted]         pages/signin/index
remote:        82426196f53d02d4ddca.js   4.42 KiB      10  [emitted]         pages/signup/index
remote:        85604e8486fcc92fd1c6.js   2.96 KiB       7  [emitted]         pages/posts/index
remote:        86d9527c4b20968645b9.js   7.39 KiB       8  [emitted]         pages/profile/index
remote:                       LICENSES   71.2 KiB          [emitted]
remote:        a039c0d8194d984e641f.js   99.1 KiB       2  [emitted]         app
remote:        ac34cd61ed33f08f2b38.js   1.95 KiB       4  [emitted]         pages/index
remote:        cfe47ecee9b544654b87.js    939 KiB      12  [emitted]  [big]  vendors.app
remote:        f0eb1e68fd0f6061b698.js   2.46 KiB      11  [emitted]         runtime
remote:        f73faa835d1b9e577503.js    162 KiB       3  [emitted]         commons.app
remote:        fb7614c155200c910176.js      2 KiB       1  [emitted]         lang-es-ES
remote:         manifest.bff934b8.json  290 bytes          [emitted]
remote:  + 2 hidden assets
remote: Entrypoint app [big] = f0eb1e68fd0f6061b698.js f73faa835d1b9e577503.js cfe47ecee9b544654b87.js a039c0d8194d984e641f.js
remote:
remote: WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
remote: This can impact web performance.
remote: Assets: 
remote:   cfe47ecee9b544654b87.js (939 KiB)
remote:
remote: WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (1000 KiB). This can impact web performance.
remote: Entrypoints:
remote:   app (1.17 MiB)
remote:       f0eb1e68fd0f6061b698.js
remote:       f73faa835d1b9e577503.js
remote:       cfe47ecee9b544654b87.js
remote:       a039c0d8194d984e641f.js
remote: 
remote:
remote: Hash: e6bcd576ff6a87bcc606
remote: Version: webpack 4.35.0
remote: Time: 7313ms
remote: Built at: 08/19/2019 5:49:33 PM
remote:                   Asset      Size  Chunks             Chunk Names
remote: 29a76df4ab143063aaac.js  1.81 KiB       0  [emitted]  lang-en-US
remote: 4b256be2c9276bc3356f.js  3.98 KiB       5  [emitted]  pages/posts/add
remote: 5b31222f128b7c1ce738.js  7.18 KiB       7  [emitted]  pages/profile/index
remote: 6189f6a1888146f1abc2.js  2.64 KiB       6  [emitted]  pages/posts/index
remote: 8ab6a4547923cc14d1a8.js  17.8 KiB       4  [emitted]  pages/posts/_id
remote: a3b8dedb61ed670c1c6d.js  4.49 KiB       9  [emitted]  pages/signup/index
remote: b3499d3cded987a4c8bc.js  3.65 KiB       8  [emitted]  pages/signin/index
remote: e0130c9f27a2fa423bbb.js  2.03 KiB       1  [emitted]  lang-es-ES
remote: fe01929be13d0279e0ff.js   2.1 KiB       3  [emitted]  pages/index
remote:               server.js   306 KiB       2  [emitted]  app
remote:    server.manifest.json  1.17 KiB          [emitted]
remote:  + 10 hidden assets
remote: Entrypoint app = server.js server.js.map
remote:        ℹ Generating pages
remote:        ✔ Generated /signin
remote:        ✔ Generated /profile
remote:        ✔ Generated /signup
remote:        ✔ Generated /en/signup
remote:        ✔ Generated /es/profile
remote:        ✔ Generated /en/signin
remote:        ✔ Generated /es/signup
remote:        ✔ Generated /en/posts
remote:        ✔ Generated /es/signin
remote:        ✔ Generated /en/profile
remote:        ✔ Generated /posts
remote:        ✔ Generated /
remote:        ✔ Generated /es/
remote:        ✔ Generated /en/
remote:        ✔ Generated /es/posts/add
remote:        ✔ Generated /en/posts/add
remote:        ✔ Generated /posts/add
remote:        ✔ Generated /es/posts
remote:
remote: -----> Pruning devDependencies
remote:        Skipping because NPM_CONFIG_PRODUCTION is 'false'
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
remote:        Done: 100.9M
remote: -----> Launching...
remote:        Released v11
remote:        https://nuxt-with-graphql-peelmicro.herokuapp.com/ deployed to Heroku
remote:
remote: Verifying deploy... done.
To https://git.heroku.com/nuxt-with-graphql-peelmicro.git
   6d5243e..3c38d14  master -> master
```

### 8.- Ensure everything is working properly

![](DeploymentWithHeroku8.png)

![](DeploymentWithHeroku9.png)

![](DeploymentWithHeroku10.png)

![](DeploymentWithHeroku11.png)

![](DeploymentWithHeroku12.png)

![](DeploymentWithHeroku13.png)

![](DeploymentWithHeroku14.png)

![](DeploymentWithHeroku15.png)

