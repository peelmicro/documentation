# Build an Online Store with React and GraphQL in 90 Minutes

> Github Repositories

- [build-an-online-store-with-react-and-graphql-in-90-minutes](https://github.com/peelmicro/build-an-online-store-with-react-and-graphql-in-90-minutes).

The [Build an Online Store with React and GraphQL in 90 Minutes
](https://www.udemy.com/build-an-online-store-with-react-and-graphql-in-90-minutes/) Udemy course explains how to Create a full-stack E-commerce app from scratch using React, GraphQL, Stripe, and the Headless CMS Strapi in record time.

> Table of contents
> [[toc]]

## What I've learned

- Create E-commerce apps with React and GraphQL
- Make full-stack React apps in a very short period of time using the headless CMS Strapi
- Learn how to integrate the payment service Stripe with React applications using react-stripe-components
- Send emails to users of your React applications with the email client SendGrid
- Build attractive, mobile-first user interfaces with the new React component library from Pinterest, Gestalt

## Section 1 Getting Started 6min

### 1. Tools Used / Needed for Our App 5min

- We need the following tools:

> [Node.js](https://nodejs.org/en/)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/GettingStarted.png)

> [Visual Studio Code](https://code.visualstudio.com/)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/GettingStarted2.png)

> [Strapi](https://strapi.io/)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/GettingStarted3.png)

> [Stripe](https://stripe.com)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/GettingStarted4.png)

> [SendGrid](https://sendgrid.com/)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/GettingStarted5.png)

> [mLab](https://mlab.com/)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/GettingStarted6.png)

> [React Developer Tools](chrome://extensions/)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/GettingStarted7.png)

### 2. Short Path versus the Long(er) Path in the Course 1min

- The short path is just to follow the course without the `Optional` videos.

## Section 2 Setup React App (Routing, Navigation) 15min

### 3. Git Clone Repo, Install Dependencies, Scaffold React App 3min

- We can clone the initial repository from https://github.com/reedbarger/ecommerce-react-graphql-stripe.

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/GitCloneRepoInstallDependenciesScaffoldReactApp.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/GitCloneRepoInstallDependenciesScaffoldReactApp2.png)

- Create a new `build-an-online-store-with-react-and-graphql-in-90-minutes` folder and copy and paste the content from the repository on it.

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/GitCloneRepoInstallDependenciesScaffoldReactApp3.png)

- Open `Visual Studio Code`

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/GitCloneRepoInstallDependenciesScaffoldReactApp4.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/GitCloneRepoInstallDependenciesScaffoldReactApp5.png)

- Create a new GitHub repository

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/GitCloneRepoInstallDependenciesScaffoldReactApp6.png)

- Configure the local `build-an-online-store-with-react-and-graphql-in-90-minutes` folder to relate it to the new repository.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/build-an-online-store-with-react-and-graphql-in-90-minutes (master)
$ git init
Initialized empty Git repository in C:/Work/Training/Pre/GraphQL/build-an-online-store-with-react-and-graphql-in-90-minutes/.git/

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/build-an-online-store-with-react-and-graphql-in-90-minutes (master)
$ git remote add origin https://github.com/peelmicro/build-an-online-store-with-react-and-graphql-in-90-minutes.git

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/build-an-online-store-with-react-and-graphql-in-90-minutes (master)
```

- Create a new `README.md` document

> README.md

```md
# Build an Online Store with React and GraphQL in 90 Minutes

Source code for the ["Build an Online Store with React and GraphQL in 90 Minutes" Udemy Course](https://www.udemy.com/build-an-online-store-with-react-and-graphql-in-90-minutes/).

## How to Use

### To run the `react` client project execute on a terminal window

cd client
yarn start

## Follow the course

Follow the course on https://www.udemy.com/build-an-online-store-with-react-and-graphql-in-90-minutes/
```

- Commit and push the code

```bash
uan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/build-an-online-store-with-react-and-graphql-in-90-minutes (master)
$ git commit -m "First commit"
[master (root-commit) d4f482a] First commit
 40 files changed, 10309 insertions(+)
 create mode 100644 README.md
 create mode 100644 brands-images/brand-bearpaw-river.png
 create mode 100644 brands-images/brand-goose-island.png
 create mode 100644 brands-images/brand-mthood-brewing.png
 create mode 100644 brands-images/brand-olentangy-river.png
 create mode 100644 brands-images/brand-solera-brewery.png
 create mode 100644 brands-images/brand-southern-tier.png
 create mode 100644 brands.json
 create mode 100644 brews-images/90-minute.jpg
 create mode 100644 brews-images/boston-lager.jpg
 create mode 100644 brews-images/christmas-ale.jpg
 create mode 100644 brews-images/gueze-tilquin.jpg
 create mode 100644 brews-images/jack-the-lad.jpg
 create mode 100644 brews-images/la-folie.jpg
 create mode 100644 brews-images/liberty-ale.jpg
 create mode 100644 brews-images/oude kriek.jpg
 create mode 100644 brews-images/pizza-port.jpg
 create mode 100644 brews-images/porter.jpg
 create mode 100644 brews-images/rochefort-8.jpg
 create mode 100644 brews-images/steam.jpg
 create mode 100644 brews-images/the-fearless.jpg
 create mode 100644 brews-images/trappist-ale.jpg
 create mode 100644 brews-images/xx-bitter.jpg
 create mode 100644 brews.json
 create mode 100644 client/.gitignore
 create mode 100644 client/README.md
 create mode 100644 client/package.json
 create mode 100644 client/public/favicon.ico
 create mode 100644 client/public/icons/google.svg
 create mode 100644 client/public/icons/logo.svg
 create mode 100644 client/public/index.html
 create mode 100644 client/public/manifest.json
 create mode 100644 client/src/App.css
 create mode 100644 client/src/App.js
 create mode 100644 client/src/App.test.js
 create mode 100644 client/src/index.css
 create mode 100644 client/src/index.js
 create mode 100644 client/src/logo.svg
 create mode 100644 client/src/registerServiceWorker.js
 create mode 100644 client/yarn.lock

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/build-an-online-store-with-react-and-graphql-in-90-minutes (master)
$ git push
fatal: The current branch master has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin master


Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/build-an-online-store-with-react-and-graphql-in-90-minutes (master)
$ git push --set-upstream origin master
Enumerating objects: 48, done.
Counting objects: 100% (48/48), done.
Delta compression using up to 4 threads
Compressing objects: 100% (48/48), done.
Writing objects: 100% (48/48), 2.16 MiB | 1.17 MiB/s, done.
Total 48 (delta 0), reused 0 (delta 0)
To https://github.com/peelmicro/build-an-online-store-with-react-and-graphql-in-90-minutes.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
```

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/GitCloneRepoInstallDependenciesScaffoldReactApp7.png)

- We can see the `Node.js` dependencies

> package.json

```json
{
  "name": "ecommerce-react-graphql-stripe",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "gestalt": "^0.79.1",
    "react": "^16.4.2",
    "react-dom": "^16.4.2",
    "react-router-dom": "^4.3.1",
    "react-scripts": "1.1.5",
    "react-spinners": "^0.4.5",
    "react-stripe-elements": "^2.0.1",
    "strapi-sdk-javascript": "^0.2.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}
```

- Install the `React client` dependencies

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/build-an-online-store-with-react-and-graphql-in-90-minutes/client (master)
$ yarn install
yarn install v1.15.2






[2/4] Fetching packages...
info fsevents@1.2.4: The platform "win32" is incompatible with this module.
info "fsevents@1.2.4" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
Done in 147.43s.
```

- Clean up the project created with [Create React App](https://github.com/facebookincubator/create-react-app).

- remove from the `src` folder the `App.test.js`, `logo.svg`

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/GitCloneRepoInstallDependenciesScaffoldReactApp8.png)

- Modify the `src/App.js` to remove all the tags in between the main `div` with the `className="App"`

> src/App.js

```js
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return <div>App</div>;
  }
}

export default App;
```

- Create the new `components` folder and move the `App.js` and `App.css` documents to it.

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/GitCloneRepoInstallDependenciesScaffoldReactApp9.png)

- Modify the `index.js` document to ensure the App.js is import from the components document.

> index.js

```js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
```

- Run the app by executing `yarn start` to ensure everything is working properly.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/build-an-online-store-with-react-and-graphql-in-90-minutes/client (master)
$ yarn start
yarn run v1.15.2
$ react-scripts start
Starting the development server...
Compiled successfully!

You can now view ecommerce-react-graphql-stripe in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://10.0.75.1:3000/

Note that the development build is not optimized.
To create a production build, use yarn build.
```

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/GitCloneRepoInstallDependenciesScaffoldReactApp10.png)

### 4. Create Components, Routing for Project 3min

- Create the following component documents:

> src/components/Signin.js

```js
import React from "react";

class Signin extends React.Component {
  render() {
    return <div>Signin</div>;
  }
}

export default Signin;
```

> src/components/Signup.js

```js
import React from "react";

class Signup extends React.Component {
  render() {
    return <div>Signup</div>;
  }
}

export default Signup;
```

> src/components/Checkout.js

```js
import React from "react";

class Checkout extends React.Component {
  render() {
    return <div>Checkout</div>;
  }
}

export default Checkout;
```

- Modify the `index.js` document to use `React Router` and set up the access to each component.

> src/index.js

```js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";

import App from "./components/App";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Checkout from "./components/Checkout";

import registerServiceWorker from "./registerServiceWorker";

const Root = () => (
  <Router>
    <Switch>
      <Route component={App} exact path="/" />
      <Route component={Signin} path="/signin" />
      <Route component={Signup} path="/signup" />
      <Route component={Checkout} path="/checkout" />
    </Switch>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
```

- Ensure we can access all the routes:

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/CreateComponentsRoutingForProject.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/CreateComponentsRoutingForProject2.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/CreateComponentsRoutingForProject3.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/CreateComponentsRoutingForProject4.png)

### 5. Gestalt Setup and Navbar Component 7min

- We are going to use the [Gestalt library](https://github.com/pinterest/gestalt)

Gestalt is a set of React UI components that enforces Pinterest’s design language. We use it to streamline communication between designers and developers by enforcing a bunch of fundamental UI components. This common set of components helps raise the bar for UX & accessibility across Pinterest.

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/GestaltSetupAndNavbarComponent.png)

- We need to modify the `src/index.js` document to import the `Gestalt css`

> src/index.js

```js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "gestalt/dist/gestalt.css";

import App from "./components/App";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Checkout from "./components/Checkout";

import registerServiceWorker from "./registerServiceWorker";

const Root = () => (
  <Router>
    <Switch>
      <Route component={App} exact path="/" />
      <Route component={Signin} path="/signin" />
      <Route component={Signup} path="/signup" />
      <Route component={Checkout} path="/checkout" />
    </Switch>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
```

- We can remove the `index.css` document and empty the `App.css` document.

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/GestaltSetupAndNavbarComponent2.png)

> src/components/App.css

```css
```

- Ensure the App is still working:

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/GestaltSetupAndNavbarComponent3.png)

- We are going to create the `Navbar` component

> scr/component/Navbar.js

```js
import React from "react";
import { Box, Text, Heading, Image } from "gestalt";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="around"
    height={70}
    color="midnight"
    padding={1}
    shape="roundedBottom"
  >
    {/* Sign In Link */}
    <NavLink to="/signin">
      <Text size="xl" color="white">
        Sign In
      </Text>
    </NavLink>

    {/* Title and Logo */}
    <NavLink to="/">
      <Box display="flex" alignItems="center">
        <Box margin={2} height={50} width={50}>
          <Image
            alt="BrewHaha Logo"
            naturalHeight={1}
            naturalWidth={1}
            src="./icons/logo.svg"
          />
        </Box>
        <Heading size="xs" color="orange">
          BrewHaha
        </Heading>
      </Box>
    </NavLink>

    {/* Sign Up Link */}
    <NavLink to="/signup">
      <Text size="xl" color="white">
        Sign Up
      </Text>
    </NavLink>
  </Box>
);

export default Navbar;
```

- We need to modify the `index.js` document to import the new `Navbar` component.

> scr/index.js

```js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "gestalt/dist/gestalt.css";

import App from "./components/App";
import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Checkout from "./components/Checkout";

import registerServiceWorker from "./registerServiceWorker";

const Root = () => (
  <Router>
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route component={App} exact path="/" />
        <Route component={Signin} path="/signin" />
        <Route component={Signup} path="/signup" />
        <Route component={Checkout} path="/checkout" />
      </Switch>
    </React.Fragment>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
```

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/GestaltSetupAndNavbarComponent4.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/GestaltSetupAndNavbarComponent5.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/GestaltSetupAndNavbarComponent6.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/GestaltSetupAndNavbarComponent7.png)

### 6. Add Base CSS Rules and Apply Class to Active NavLink (Optional) 2min

- Modify the `App.css` document to add some new style.

> src/component/App.cs

```css
html,
body {
  margin: 0;
  background-color: #f6f9fc;
}

a,
a:link,
a:visited {
  text-decoration: none;
}

.active {
  font-style: italic;
}
```

- Modify the `Navbar` component to use the new styles.

> scr/component/Navbar.js

```js
```

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBaseCSSRulesAndApplyClassToActiveNavLink.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBaseCSSRulesAndApplyClassToActiveNavLink2.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBaseCSSRulesAndApplyClassToActiveNavLink3.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBaseCSSRulesAndApplyClassToActiveNavLink4.png)

## Section 3 Create Server with Strapi, Add GraphQL to our API 22min

### 7. (Updated) Setup MongoDB Atlas Database, Install Strapi CLI, Create Strapi Server 6min

- We need to install the `strapi CLI`:

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/build-an-online-store-with-react-and-graphql-in-90-minutes (master)
$ yarn global add strapi@alpha
yarn global v1.15.2
[1/4] Resolving packages...
warning strapi > boom@5.2.0: This version has been deprecated in accordance with the hapi support policy (hapi.im/support). Please upgrade to the latest version to get
the best features, bug fixes, and security patches. If you are unable to upgrade at this time, paid support is available for older versions (hapi.im/commercial).
warning strapi > koa-router-joi > joi@10.2.2: This version has been deprecated in accordance with the hapi support policy (hapi.im/support). Please upgrade to the lates
t version to get the best features, bug fixes, and security patches. If you are unable to upgrade at this time, paid support is available for older versions (hapi.im/co
mmercial).
warning strapi > koa-router-joi > joi > items@2.1.2: This module has been deprecated in accordance with the hapi support policy (hapi.im/support). Please upgrade to the
 latest version of hapi to get the best features, bug fixes, and security patches. If you are unable to upgrade at this time, paid support is available for older versio
ns (hapi.im/commercial).
[2/4] Fetching packages...
info There appears to be trouble with your network connection. Retrying...
info fsevents@1.2.4: The platform "win32" is incompatible with this module.
info "fsevents@1.2.4" is an optional dependency and failed compatibility check. Excluding it from installation.
info fsevents@1.2.9: The platform "win32" is incompatible with this module.
info "fsevents@1.2.9" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
warning "strapi > strapi-generate-admin > strapi-admin > react-ga@2.5.7" has unmet peer dependency "prop-types@^15.6.0".
warning "strapi > strapi-generate-admin > strapi-admin > react-ga@2.5.7" has unmet peer dependency "react@^15.6.2 || ^16.0".
warning "strapi > strapi-generate-admin > strapi-admin > video-react@0.13.6" has unmet peer dependency "react@^15.0.0 || ^16.0.0".
warning "strapi > strapi-generate-admin > strapi-admin > video-react@0.13.6" has unmet peer dependency "react-dom@^15.0.0 || ^16.0.0".
[4/4] Building fresh packages...
success Installed "strapi@3.0.0-alpha.26.1" with binaries:
      - strapi
Done in 302.30s.
```

- Ensure it has been installed correctly

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/build-an-online-store-with-react-and-graphql-in-90-minutes (master)
$ strapi --version
3.0.0-alpha.26.1
```

- [mLab](https://mlab.com/) has been closed down because it has been bought by MongoDB. We have to use [MongoDB Atlas](https://www.mongodb.com/cloud/Atlas) instead.

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SetupMongoDBAtlasDatabaseInstallStrapiCLICreateStrapiServer.png)

- Once the cluster is created in `MongoDB Atlas` ensure the current IP is whitelisted.

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SetupMongoDBAtlasDatabaseInstallStrapiCLICreateStrapiServer2.png)

- Click on `connect` button to see the credentials information:

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SetupMongoDBAtlasDatabaseInstallStrapiCLICreateStrapiServer3.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SetupMongoDBAtlasDatabaseInstallStrapiCLICreateStrapiServer4.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SetupMongoDBAtlasDatabaseInstallStrapiCLICreateStrapiServer5.png)

- Create a new `Strapi Server` on the `server` folder by using `strapi new server`.

- Select the `Custom` one to select the following values:

* database: `MongoDB` database
* name of the Database: `Strapi`
* Host: cluster0-ycwj8.mongodb.net
* +srv connection: true
* Port: 27017
* Username: juan
* Password: **\*\*\***
* Authentication database:
* Enable SSL connection: true

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/build-an-online-store-with-react-and-graphql-in-90-minutes (master)
$ strapi new server
� Starting to create your Strapi application.

? Choose your installation type Custom (manual settings)
? Choose your main database: MongoDB
? Database name: Strapi
? Host: cluster0-ycwj8.mongodb.net
? +srv connection: true
? Port (It will be ignored if you enable +srv): 27017
? Username: juan
? Password: ********
? Authentication database (Maybe "admin" or blank):
? Enable SSL connection: true

⏳ Testing database connection...
It might take a minute, please have a coffee ☕️

Error: Error: Failed to load `admin`... (Error: Cannot find module 'C:\Users\juan.pablo.perez\AppData\Local\Yarn\Data\global\node_modules\strapi\node_modules\strapi-generate-admin')
    at parseTarget (C:\Users\juan.pablo.perez\AppData\Local\Yarn\Data\global\node_modules\strapi-generate\lib\target.js:253:15)
    at async.until.asyncCb (C:\Users\juan.pablo.perez\AppData\Local\Yarn\Data\global\node_modules\strapi-generate\lib\target.js:46:7)
    at whilst (C:\Users\juan.pablo.perez\AppData\Local\Yarn\Data\global\node_modules\async\dist\async.js:5227:5)
    at Object.until (C:\Users\juan.pablo.perez\AppData\Local\Yarn\Data\global\node_modules\async\dist\async.js:5253:5)
    at generateTarget (C:\Users\juan.pablo.perez\AppData\Local\Yarn\Data\global\node_modules\strapi-generate\lib\target.js:41:9)
    at async.eachSeries (C:\Users\juan.pablo.perez\AppData\Local\Yarn\Data\global\node_modules\strapi-generate\lib\generate.js:117:13)
    at C:\Users\juan.pablo.perez\AppData\Local\Yarn\Data\global\node_modules\async\dist\async.js:3110:16
    at replenish (C:\Users\juan.pablo.perez\AppData\Local\Yarn\Data\global\node_modules\async\dist\async.js:1011:17)
    at C:\Users\juan.pablo.perez\AppData\Local\Yarn\Data\global\node_modules\async\dist\async.js:1016:9
    at eachLimit$1 (C:\Users\juan.pablo.perez\AppData\Local\Yarn\Data\global\node_modules\async\dist\async.js:3196:24)
    at Object.<anonymous> (C:\Users\juan.pablo.perez\AppData\Local\Yarn\Data\global\node_modules\async\dist\async.js:1046:16)
    at async.each (C:\Users\juan.pablo.perez\AppData\Local\Yarn\Data\global\node_modules\strapi-generate\lib\generate.js:116:17)
    at C:\Users\juan.pablo.perez\AppData\Local\Yarn\Data\global\node_modules\async\dist\async.js:3110:16
    at eachOfArrayLike (C:\Users\juan.pablo.perez\AppData\Local\Yarn\Data\global\node_modules\async\dist\async.js:1069:9)
    at eachOf (C:\Users\juan.pablo.perez\AppData\Local\Yarn\Data\global\node_modules\async\dist\async.js:1117:5)
    at Object.eachLimit (C:\Users\juan.pablo.perez\AppData\Local\Yarn\Data\global\node_modules\async\dist\async.js:3172:5)
```

- Remove `strapi` CLI installed with `yarn`

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/build-an-online-store-with-react-and-graphql-in-90-minutes (master)
$ yarn global remove strapi
yarn global v1.15.2
[1/2] Removing module strapi...
[2/2] Regenerating lockfile and installing missing dependencies...
info fsevents@1.2.4: The platform "win32" is incompatible with this module.
info "fsevents@1.2.4" is an optional dependency and failed compatibility check. Excluding it from installation.
[###########################################################################################################################################################] 1969/1969
success Uninstalled packages.
Done in 25.39s.
```

- Install `strapi` CLI using `mpm`

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/build-an-online-store-with-react-and-graphql-in-90-minutes (master)
$ npm -g i strapi@alpha
npm WARN deprecated boom@5.2.0: This version has been deprecated in accordance with the hapi support policy (hapi.im/support). Please upgrade to the latest version to get the best features, bug fixes, and security patches. If you are unable to upgrade at this time, paid support is available for older versions (hapi.im/commercial).
npm WARN deprecated joi@10.2.2: This version has been deprecated in accordance with the hapi support policy (hapi.im/support). Please upgrade to the latest version to get the best features, bug fixes, and security patches. If you are unable to upgrade at this time, paid support is available for older versions (hapi.im/commercial).
npm WARN deprecated items@2.1.2: This module has been deprecated in accordance with the hapi support policy (hapi.im/support). Please upgrade to the latest version of hapi to get the best features, bug fixes, and security patches. If you are unable to upgrade at this time, paid support is available for older versions (hapi.im/commercial).
C:\Users\juan.pablo.perez\AppData\Roaming\npm\strapi -> C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\bin\strapi.js

> strapi@3.0.0-alpha.26.1 postinstall C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi
> node lib/utils/success.js

npm WARN video-react@0.13.6 requires a peer of react@^15.0.0 || ^16.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN video-react@0.13.6 requires a peer of react-dom@^15.0.0 || ^16.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN react-ga@2.5.7 requires a peer of react@^15.6.2 || ^16.0 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\strapi\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ strapi@3.0.0-alpha.26.1
added 537 packages from 395 contributors in 88.331s

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/build-an-online-store-with-react-and-graphql-in-90-minutes (master)
```

- Try to create `Strapi server` again:

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/build-an-online-store-with-react-and-graphql-in-90-minutes (master)
$ strapi new server
� Starting to create your Strapi application.

? Choose your installation type Custom (manual settings)
? Choose your main database: MongoDB
? Database name: Strapi
? Host: cluster0-ycwj8.mongodb.net
? +srv connection: true
? Port (It will be ignored if you enable +srv): 27017
? Username: juan
? Password: ********
? Authentication database (Maybe "admin" or blank):
? Enable SSL connection: true

⏳ Testing database connection...
It might take a minute, please have a coffee ☕️
⚠️  Database connection has failed! Make sure your database is running.
? Choose your installation type Custom (manual settings)
? Choose your main database: MongoDB
? Database name: Strapi
? Host: cluster0-ycwj8.mongodb.net
? +srv connection: true
? Port (It will be ignored if you enable +srv): 27017
? Username: juan
? Password: ********
? Authentication database (Maybe "admin" or blank):
? Enable SSL connection: true

⏳ Testing database connection...
It might take a minute, please have a coffee ☕️

The app has been connected to the database successfully!

�  Application generation:
√ Copy dashboard
√ Install plugin settings-manager.
√ Install plugin content-type-builder.
√ Install plugin content-manager.
√ Install plugin users-permissions.
√ Install plugin email.
√ Install plugin upload.
√ Link strapi dependency to the project.

� Your new application server is ready at C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server.

⚡️ Change directory:
$ cd server

⚡️ Start application:
$ strapi start
```

### 8. Brief Look at Strapi CLI (Optional) 2min

- There are some commands that we can use from the `Strapi CLI`

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/build-an-online-store-with-react-and-graphql-in-90-minutes (master)
$ strapi help
Usage: strapi [options] [command]

Options:
  -v, --version                                  output the version number
  -h, --help                                     output usage information

Commands:
  version                                        output your version of Strapi
  console                                        open the Strapi framework console
  new [options]                                  create a new application
  start [appPath]                                start your Strapi application
  generate:api [options] <id> [attributes...]    generate a basic API
  generate:controller [options] <id>             generate a controller for an API
  generate:model [options] <id> [attributes...]  generate a model for an API
  generate:policy [options] <id>                 generate a policy for an API
  generate:service [options] <id>                generate a service for an API
  generate:plugin [options] <id>                 generate a basic plugin
  install [options] <plugin>                     install a Strapi plugin
  uninstall <plugin>                             uninstall a Strapi plugin
  help                                           output the help
```

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/build-an-online-store-with-react-and-graphql-in-90-minutes (master)
$ strapi version
3.0.0-alpha.26.1
```

- We can also install a plugin like `strapi install email` or `strapi install graphql`

- We can unistall anything by using `strapi uninstall`

- We can create a simple `api` by executing `strapi generate:api`

- We can obtain more information about the `Stripe CLI` on [Command Line Interface (CLI)](https://strapi.io/documentation/3.x.x/cli/CLI.html)

### 9. Start the Strapi Server, Create Root Admin for CMS 2min

- We can start the `Strapi Server` by executing `strapi start` from the `server` directory

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/build-an-online-store-with-react-and-graphql-in-90-minutes (master)
$ cd server

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/build-an-online-store-with-react-and-graphql-in-90-minutes/server (master)
$ strapi start
[2019-05-01T18:00:55.337Z] warn Bootstrap is taking unusually long to execute its callback 3500 miliseconds).
[2019-05-01T18:00:55.344Z] warn Perhaps you forgot to call it?
[2019-05-01T18:00:55.349Z] warn Bootstrap is taking unusually long to execute its callback 3500 miliseconds).
[2019-05-01T18:00:55.350Z] warn Perhaps you forgot to call it?
[2019-05-01T18:00:55.353Z] warn Bootstrap is taking unusually long to execute its callback 3500 miliseconds).
[2019-05-01T18:00:55.355Z] warn Perhaps you forgot to call it?
[2019-05-01T18:00:55.357Z] warn Bootstrap is taking unusually long to execute its callback 3500 miliseconds).
[2019-05-01T18:00:55.360Z] warn Perhaps you forgot to call it?
[2019-05-01T18:01:00.605Z] info File changed: C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server\plugins\users-permissions\config\actions.json
[2019-05-01T18:01:00.682Z] info Time: Wed May 01 2019 19:01:00 GMT+0100 (Irish Standard Time)
[2019-05-01T18:01:00.684Z] info Launched in: 23862 ms
[2019-05-01T18:01:00.685Z] info Environment: development
[2019-05-01T18:01:00.687Z] info Process PID: 14428
[2019-05-01T18:01:00.688Z] info Version: 3.0.0-alpha.26.1 (node v11.13.0)
[2019-05-01T18:01:00.690Z] info To shut down your server, press <CTRL> + C at any time

[2019-05-01T18:01:00.695Z] info ☄️  Admin panel: http://localhost:1337/admin
[2019-05-01T18:01:00.697Z] info ⚡️ Server: http://localhost:1337

[2019-05-01T18:01:00.799Z] debug HEAD index.html (77 ms)
[2019-05-01T18:01:00.815Z] info ⏳ Opening the admin panel...
[2019-05-01T18:01:02.271Z] debug GET index.html (23 ms)
[2019-05-01T18:01:02.807Z] debug GET vendor.dll.js (28 ms)
[2019-05-01T18:01:02.842Z] debug GET main.js (50 ms)
[2019-05-01T18:01:07.684Z] debug GET plugins.json (14 ms)
[2019-05-01T18:01:08.561Z] debug GET main.js (12 ms)
[2019-05-01T18:01:08.637Z] debug GET main.js (15 ms)
[2019-05-01T18:01:08.780Z] debug GET main.js (118 ms)
[2019-05-01T18:01:08.968Z] debug GET main.js (234 ms)
[2019-05-01T18:01:09.275Z] debug GET main.js (163 ms)
[2019-05-01T18:01:09.533Z] debug GET main.js (398 ms)
```

- It starts automatically on http://localhost:1337/admin/plugins/users-permissions/auth/register

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/StartTheStrapiServerCreateRootAdminForCMS.png)

- We need to create the first user:

- Username: Peelmicro
- Password: **\*\*\*\***
- email: juanp_perez@msn.com

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/StartTheStrapiServerCreateRootAdminForCMS2.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/StartTheStrapiServerCreateRootAdminForCMS3.png)

- We can access `MongoDB Atlas` to see what tables have been created.

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/StartTheStrapiServerCreateRootAdminForCMS4.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/StartTheStrapiServerCreateRootAdminForCMS5.png)

### 10. Overview of Strapi Admin Panel (Optional) 6min

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/OverviewOfStrapiAdminPanel.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/OverviewOfStrapiAdminPanel2.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/OverviewOfStrapiAdminPanel3.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/OverviewOfStrapiAdminPanel4.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/OverviewOfStrapiAdminPanel5.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/OverviewOfStrapiAdminPanel6.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/OverviewOfStrapiAdminPanel7.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/OverviewOfStrapiAdminPanel8.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/OverviewOfStrapiAdminPanel9.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/OverviewOfStrapiAdminPanel9b.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/OverviewOfStrapiAdminPanel10.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/OverviewOfStrapiAdminPanel11.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/OverviewOfStrapiAdminPanel12.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/OverviewOfStrapiAdminPanel13.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/OverviewOfStrapiAdminPanel14.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/OverviewOfStrapiAdminPanel15.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/OverviewOfStrapiAdminPanel16.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/OverviewOfStrapiAdminPanel17.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/OverviewOfStrapiAdminPanel18.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/OverviewOfStrapiAdminPanel19.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/OverviewOfStrapiAdminPanel20.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/OverviewOfStrapiAdminPanel21.png)

### 11. Add Brand Content Type with Content Type Builder, Add First Brand 5min

- We are going to create the `Brand` content type from the `Admin Strapi server`.

- Access the server on http://localhost:1337/admin/ and login

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBrandContentTypeWithContentTypeBuilderAddFirstBrand.png)

- Access the `Content Type Builder` and click on `+ Add Content Type`

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBrandContentTypeWithContentTypeBuilderAddFirstBrand2.png)

- Put `Brand` for the name and leave the rest of the fields empty.

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBrandContentTypeWithContentTypeBuilderAddFirstBrand3.png)

- Click on `Save` button.

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBrandContentTypeWithContentTypeBuilderAddFirstBrand4.png)

- Create the following `Fields`

| Name        | Type   | Options              |
| ----------- | ------ | -------------------- |
| name        | String |
| description | Text   | Display as a WYSIWYG |
| image       | Media  |

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBrandContentTypeWithContentTypeBuilderAddFirstBrand5.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBrandContentTypeWithContentTypeBuilderAddFirstBrand6.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBrandContentTypeWithContentTypeBuilderAddFirstBrand7.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBrandContentTypeWithContentTypeBuilderAddFirstBrand8.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBrandContentTypeWithContentTypeBuilderAddFirstBrand9.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBrandContentTypeWithContentTypeBuilderAddFirstBrand10.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBrandContentTypeWithContentTypeBuilderAddFirstBrand11.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBrandContentTypeWithContentTypeBuilderAddFirstBrand12.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBrandContentTypeWithContentTypeBuilderAddFirstBrand13.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBrandContentTypeWithContentTypeBuilderAddFirstBrand14.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBrandContentTypeWithContentTypeBuilderAddFirstBrand15.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBrandContentTypeWithContentTypeBuilderAddFirstBrand16.png)

- We can see the new `Brands` content type has been added to the left menu

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBrandContentTypeWithContentTypeBuilderAddFirstBrand17.png)

- Add a new Brand

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBrandContentTypeWithContentTypeBuilderAddFirstBrand18.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBrandContentTypeWithContentTypeBuilderAddFirstBrand19.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBrandContentTypeWithContentTypeBuilderAddFirstBrand20.png)

- Add an image by clicking on `browse`

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBrandContentTypeWithContentTypeBuilderAddFirstBrand21.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBrandContentTypeWithContentTypeBuilderAddFirstBrand22.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBrandContentTypeWithContentTypeBuilderAddFirstBrand23.png)

- Save the new Brand

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBrandContentTypeWithContentTypeBuilderAddFirstBrand24.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBrandContentTypeWithContentTypeBuilderAddFirstBrand25.png)

### 12. Install GraphQL Plugin, Visit GraphQL Playground 1min

- We are going to install the `GraphQL Plugin` from the `Marketplace`

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/InstallGraphQLPluginVisitGraphQLPlayground.png)

```bash
.
.
[2019-05-02T05:11:49.201Z] debug GET /content-manager/explorer/brand/count?_limit=10&_start=0&_sort=_id%3AASC&source=content-manager (487 ms)
[2019-05-02T05:11:49.334Z] debug GET /content-manager/explorer/brand?_limit=10&_start=0&_sort=_id%3AASC&source=content-manager (612 ms)
[2019-05-02T05:13:22.647Z] debug GET 2.055e5fc5d24b92296db1.chunk.js (10 ms)
[2019-05-02T05:13:23.205Z] debug GET /admin/plugins (300 ms)
[2019-05-02T05:13:57.757Z] info Installing graphql...
[2019-05-02T05:16:28.603Z] debug POST /admin/plugins/install (151186 ms)
[2019-05-02T05:16:28.603Z] info The server is restarting

[2019-05-02T05:16:53.038Z] warn Bootstrap is taking unusually long to execute its callback 3500 miliseconds).
[2019-05-02T05:16:53.041Z] warn Perhaps you forgot to call it?
[2019-05-02T05:16:53.080Z] warn Bootstrap is taking unusually long to execute its callback 3500 miliseconds).
[2019-05-02T05:16:53.082Z] warn Perhaps you forgot to call it?
[2019-05-02T05:16:53.083Z] warn Bootstrap is taking unusually long to execute its callback 3500 miliseconds).
[2019-05-02T05:16:53.084Z] warn Perhaps you forgot to call it?
[2019-05-02T05:16:54.982Z] info File changed: C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server\plugins\users-permissions\config\actions.json
[2019-05-02T05:16:55.968Z] info Time: Thu May 02 2019 06:16:55 GMT+0100 (Irish Standard Time)
[2019-05-02T05:16:55.970Z] info Launched in: 23235 ms
[2019-05-02T05:16:55.970Z] info Environment: development
[2019-05-02T05:16:55.972Z] info Process PID: 10956
[2019-05-02T05:16:55.972Z] info Version: 3.0.0-alpha.26.1 (node v11.13.0)
[2019-05-02T05:16:55.974Z] info To shut down your server, press <CTRL> + C at any time

[2019-05-02T05:16:55.977Z] info ☄️  Admin panel: http://localhost:1337/admin
[2019-05-02T05:16:55.979Z] info ⚡️ Server: http://localhost:1337
```

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/InstallGraphQLPluginVisitGraphQLPlayground2.png)

- We can query the database using `GraphQL Playground` by accesing http://localhost:1337/graphql

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/InstallGraphQLPluginVisitGraphQLPlayground3.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/InstallGraphQLPluginVisitGraphQLPlayground4.png)

## Section 4 Executing Queries in GraphQL Playground 8min

### 13. Query Brand by Id in GraphQL Playground, Give Permission to All Users (optional) 5min

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/QueryBrandByIdInGraphQLPlaygroundGivePermissionToAllUsers.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/QueryBrandByIdInGraphQLPlaygroundGivePermissionToAllUsers2.png)

> Query

```graphql
query {
  brand(id: "5cca7c12c411f32d843825b6") {
    _id
    id
    createdAt
    updatedAt
    name
    description
    image {
      _id
      id
      name
      mime
      url
    }
  }
}
```

> Response

```json
{
  "errors": [
    {
      "message": "Forbidden",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": ["brand"],
      "extensions": {
        "code": "INTERNAL_SERVER_ERROR",
        "exception": {
          "data": null,
          "isBoom": true,
          "isServer": false,
          "output": {
            "statusCode": 403,
            "payload": {
              "statusCode": 403,
              "error": "Forbidden",
              "message": "Forbidden"
            },
            "headers": {}
          },
          "message": "Forbidden",
          "stacktrace": [
            "Error: Forbidden",
            "    at handleErrors (C:\\Work\\Training\\Pre\\GraphQL\\build-an-online-store-with-react-and-graphql-in-90-minutes\\server\\plugins\\users-permissions\\config\\policies\\permissions.js:73:53)",
            "    at module.exports (C:\\Work\\Training\\Pre\\GraphQL\\build-an-online-store-with-react-and-graphql-in-90-minutes\\server\\plugins\\users-permissions\\config\\policies\\permissions.js:59:12)",
            "    at processTicksAndRejections (internal/process/task_queues.js:86:5)"
          ]
        }
      }
    }
  ],
  "data": {
    "brand": null
  }
}
```

- The reason is that we are not sending information about our credentials so as, by default, all the `content types` are restricted, we need to allow everybody to access this content type.

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/QueryBrandByIdInGraphQLPlaygroundGivePermissionToAllUsers3.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/QueryBrandByIdInGraphQLPlaygroundGivePermissionToAllUsers4.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/QueryBrandByIdInGraphQLPlaygroundGivePermissionToAllUsers5.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/QueryBrandByIdInGraphQLPlaygroundGivePermissionToAllUsers6.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/QueryBrandByIdInGraphQLPlaygroundGivePermissionToAllUsers7.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/QueryBrandByIdInGraphQLPlaygroundGivePermissionToAllUsers8.png)

- Now we should be able to execute the query.

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/QueryBrandByIdInGraphQLPlaygroundGivePermissionToAllUsers9.png)

> Query

```graphql
query {
  brand(id: "5cca7c12c411f32d843825b6") {
    _id
    id
    createdAt
    updatedAt
    name
    description
    image {
      _id
      id
      name
      mime
      url
    }
  }
}
```

> Response

```json
{
  "data": {
    "brand": {
      "_id": "5cca7c12c411f32d843825b6",
      "id": "5cca7c12c411f32d843825b6",
      "createdAt": "2019-05-02T05:11:46.029Z",
      "updatedAt": "2019-05-02T05:11:46.500Z",
      "name": "BearPaw River",
      "description": "BPR is a microbrewery based in Wasilla, dedicated to making classic hand-crafted beers.",
      "image": {
        "_id": "5cca7c13c411f32d843825b7",
        "id": "5cca7c13c411f32d843825b7",
        "name": "brand-bearpaw-river.png",
        "mime": "image/png",
        "url": "/uploads/e7d0477159df4c8db1af38ec2a9dd1d4.png"
      }
    }
  }
}
```

- We can also obtain the same result by accessing http://localhost:1337/brands/5cca7c12c411f32d843825b6

- In this case all the data available is returned.

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/QueryBrandByIdInGraphQLPlaygroundGivePermissionToAllUsers10.png)

### 14. Query Multiple Brands with GraphQL, Change Permissions Again 3min

- We are going to try to get all the brands available

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/QueryMultipleBrandsWithGraphQLChangePermissionsAgain.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/QueryMultipleBrandsWithGraphQLChangePermissionsAgain2.png)

- We need to grant permission to access all the invoices. But first we are going to add another `Brand` the same way it was done before.

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/QueryMultipleBrandsWithGraphQLChangePermissionsAgain3.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/QueryMultipleBrandsWithGraphQLChangePermissionsAgain4.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/QueryMultipleBrandsWithGraphQLChangePermissionsAgain5.png)

- Now we should be able to execute the query.

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/QueryMultipleBrandsWithGraphQLChangePermissionsAgain6.png)

> Query

```graphql
query {
  brands {
    _id
    createdAt
    updatedAt
    name
    description
    image {
      _id
      name
      mime
      url
    }
  }
}
```

> Response

```json
{
  "data": {
    "brands": [
      {
        "_id": "5cca7c12c411f32d843825b6",
        "createdAt": "2019-05-02T05:11:46.029Z",
        "updatedAt": "2019-05-02T05:11:46.500Z",
        "name": "BearPaw River",
        "description": "BPR is a microbrewery based in Wasilla, dedicated to making classic hand-crafted beers.",
        "image": {
          "_id": "5cca7c13c411f32d843825b7",
          "name": "brand-bearpaw-river.png",
          "mime": "image/png",
          "url": "/uploads/e7d0477159df4c8db1af38ec2a9dd1d4.png"
        }
      },
      {
        "_id": "5cca8959d148472accdb4309",
        "createdAt": "2019-05-02T06:08:25.302Z",
        "updatedAt": "2019-05-02T06:08:25.786Z",
        "name": "Goose Island",
        "description": "Goose Island Brewery is a Chicago brewery that makes a number of IPAs, both seasonal and year-round",
        "image": {
          "_id": "5cca895ad148472accdb430a",
          "name": "brand-goose-island.png",
          "mime": "image/png",
          "url": "/uploads/d48dba686a5d406b9c76fad3dcdc5aee.png"
        }
      }
    ]
  }
}
```

- We can also obtain the same result by accessing http://localhost:1337/brands

- In this case all the data available is returned.

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/QueryMultipleBrandsWithGraphQLChangePermissionsAgain7.png)

## Section 5 Query Brands with GraphQL in React App, Display Brands in UI 15min

### 15. Run Client Script with Server, Add Markup for Brands Section 2min

- We are going to modify the `App` component to show the header for all the `Brands`

> client/src/components/App.js

```js
import React, { Component } from "react";
import { Container, Box, Heading } from "gestalt";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Container>
        {/* Brands Section */}
        <Box display="flex" justifyContent="center" marginBottom={2}>
          {/* Brands Header */}
          <Heading color="midnight" size="md">
            Brew Brands
          </Heading>
        </Box>
      </Container>
    );
  }
}

export default App;
```

- Open a new terminal and from the `client` folder execute `yarn start`

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/RunClientScriptWithServerAddMarkupForBrandsSection.png)

### 16. Connecting React with GraphQL using Strapi SDK, Fetch Data from Client 4min

- We are going to modify the `App` component to connect Strapi Server by using GraphQL and show all the `Brands`

> client/src/components/App.js

```js
import React, { Component } from "react";
import { Container, Box, Heading } from "gestalt";
import "./App.css";
import Strapi from "strapi-sdk-javascript/build/main";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

class App extends Component {
  async componentDidMount() {
    const response = await strapi.request("POST", "/graphql", {
      data: {
        query: `query {
          brands {
            _id
            name
            description
            createdAt
            image {
              url
              name
            }
          }
        }`
      }
    });
    console.log(response);
  }

  render() {
    return (
      <Container>
        {/* Brands Section */}
        <Box display="flex" justifyContent="center" marginBottom={2}>
          {/* Brands Header */}
          <Heading color="midnight" size="md">
            Brew Brands
          </Heading>
        </Box>
      </Container>
    );
  }
}

export default App;
```

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/ConnectingReactWithGraphQLUsingStrapiSDKFetchDataFromClient.png)

### 17. Catch async / await Errors with try / catch, Put Brand Data in Local State 3min

- We are going to modify the `App` component to catch any potential error by using `try/catch`

> client/src/components/App.js

```js
import React, { Component } from "react";
import { Container, Box, Heading } from "gestalt";
import "./App.css";
import Strapi from "strapi-sdk-javascript/build/main";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

class App extends Component {
  state = {
    brands: []
  };

  async componentDidMount() {
    try {
      const response = await strapi.request("POST", "/graphql", {
        data: {
          query: `query {
            brands {
              _id
              name
              description
              image {
                url
              }
            }
          }`
        }
      });
      // console.log(response);
      this.setState({ brands: response.data.brands });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <Container>
        {/* Brands Section */}
        <Box display="flex" justifyContent="center" marginBottom={2}>
          {/* Brands Header */}
          <Heading color="midnight" size="md">
            Brew Brands
          </Heading>
        </Box>
      </Container>
    );
  }
}

export default App;
```

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/CatchAsyncAwaitErrorsWithTryCatchPutBrandDataInLocalState.png)

### 18. Display Brands on Home Page, Create Brand Card Component 6min

- We are going to modify the `App` component to display the `Brands`.

> client/src/components/App.js

```js
import React, { Component } from "react";
import { Container, Box, Heading, Card, Image, Text } from "gestalt";
import { Link } from "react-router-dom";
import "./App.css";
import Strapi from "strapi-sdk-javascript/build/main";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

class App extends Component {
  state = {
    brands: []
  };

  async componentDidMount() {
    try {
      const response = await strapi.request("POST", "/graphql", {
        data: {
          query: `query {
            brands {
              _id
              name
              description
              image {
                url
              }
            }
          }`
        }
      });
      // console.log(response);
      this.setState({ brands: response.data.brands });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const { brands } = this.state;

    return (
      <Container>
        {/* Brands Section */}
        <Box display="flex" justifyContent="center" marginBottom={2}>
          {/* Brands Header */}
          <Heading color="midnight" size="md">
            Brew Brands
          </Heading>
        </Box>
        {/* Brands */}
        <Box display="flex" justifyContent="around">
          {brands.map(brand => (
            <Box margin={2} width={200} key={brand._id}>
              <Card
                image={
                  <Box height={200} width={200}>
                    <Image
                      alt="Brand"
                      naturalHeight={1}
                      naturalWidth={1}
                      src={`${apiUrl}${brand.image.url}`}
                    />
                  </Box>
                }
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  direction="column"
                >
                  <Text bold size="xl">
                    {brand.name}
                  </Text>
                  <Text>{brand.description}</Text>
                  <Text bold size="xl">
                    <Link to={`/${brand._id}`}>See Brews</Link>
                  </Text>
                </Box>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    );
  }
}

export default App;
```

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/DisplayBrandsOnHomePageCreateBrandCardComponent.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/DisplayBrandsOnHomePageCreateBrandCardComponent2.png)

## Section 6 Additional Features - Responsive Design, Searching, Loading Spinners 16min

### 19. Add Flex Wrap to Brand Cards for Responsive Design, More Styles (Optional) 2min

- We are going to modify the `App` component to have a Responsive Design, specially when we work with mobiles.

> client/src/components/App.js

```js
import React, { Component } from "react";
import { Container, Box, Heading, Card, Image, Text } from "gestalt";
import { Link } from "react-router-dom";
import "./App.css";
import Strapi from "strapi-sdk-javascript/build/main";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

class App extends Component {
  state = {
    brands: []
  };

  async componentDidMount() {
    try {
      const response = await strapi.request("POST", "/graphql", {
        data: {
          query: `query {
            brands {
              _id
              name
              description
              image {
                url
              }
            }
          }`
        }
      });
      // console.log(response);
      this.setState({ brands: response.data.brands });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const { brands } = this.state;

    return (
      <Container>
        {/* Brands Section */}
        <Box display="flex" justifyContent="center" marginBottom={2}>
          {/* Brands Header */}
          <Heading color="midnight" size="md">
            Brew Brands
          </Heading>
        </Box>
        {/* Brands */}
        <Box
          dangerouslySetInlineStyle={{
            __style: {
              backgroundColor: "#d6c8ec"
            }
          }}
          shape="rounded"
          wrap
          display="flex"
          justifyContent="around"
        >
          {brands.map(brand => (
            <Box paddingY={4} margin={2} width={200} key={brand._id}>
              <Card
                image={
                  <Box height={200} width={200}>
                    <Image
                      fit="cover"
                      alt="Brand"
                      naturalHeight={1}
                      naturalWidth={1}
                      src={`${apiUrl}${brand.image.url}`}
                    />
                  </Box>
                }
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  direction="column"
                >
                  <Text bold size="xl">
                    {brand.name}
                  </Text>
                  <Text>{brand.description}</Text>
                  <Text bold size="xl">
                    <Link to={`/${brand._id}`}>See Brews</Link>
                  </Text>
                </Box>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    );
  }
}

export default App;
```

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddFlexWrapToBrandCardsForResponsiveDesignMoreStyles.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddFlexWrapToBrandCardsForResponsiveDesignMoreStyles2.png)

### 20. Add SearchField Component to Search Brands (Optional) 5min

- We are going to modify the `App` component to add a Search component used to search `Brands`.

> client/src/components/App.js

```js
import React, { Component } from "react";
// prettier-ignore
import { Container, Box, Heading, Card, Image, Text, SearchField, Icon } from "gestalt";
import { Link } from "react-router-dom";
import "./App.css";
import Strapi from "strapi-sdk-javascript/build/main";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

class App extends Component {
  state = {
    brands: [],
    searchTerm: ""
  };

  async componentDidMount() {
    try {
      const response = await strapi.request("POST", "/graphql", {
        data: {
          query: `query {
            brands {
              _id
              name
              description
              image {
                url
              }
            }
          }`
        }
      });
      // console.log(response);
      this.setState({ brands: response.data.brands });
    } catch (err) {
      console.error(err);
    }
  }

  handleChange = ({ value }) => {
    this.setState({ searchTerm: value });
  };

  render() {
    const { brands, searchTerm } = this.state;

    return (
      <Container>
        {/* Brands Search Field */}
        <Box display="flex" justifyContent="center" marginTop={4}>
          <SearchField
            id="searchField"
            accessibilityLabel="Brands Search Field"
            onChange={this.handleChange}
            placeholder="Search Brands"
          />
          <Box margin={3}>
            <Icon
              icon="filter"
              color={searchTerm ? "orange" : "gray"}
              size={20}
              accessibilityLabel="Filter"
            />
          </Box>
        </Box>

        {/* Brands Section */}
        <Box display="flex" justifyContent="center" marginBottom={2}>
          {/* Brands Header */}
          <Heading color="midnight" size="md">
            Brew Brands
          </Heading>
        </Box>
        {/* Brands */}
        <Box
          dangerouslySetInlineStyle={{
            __style: {
              backgroundColor: "#d6c8ec"
            }
          }}
          shape="rounded"
          wrap
          display="flex"
          justifyContent="around"
        >
          {brands.map(brand => (
            <Box paddingY={4} margin={2} width={200} key={brand._id}>
              <Card
                image={
                  <Box height={200} width={200}>
                    <Image
                      fit="cover"
                      alt="Brand"
                      naturalHeight={1}
                      naturalWidth={1}
                      src={`${apiUrl}${brand.image.url}`}
                    />
                  </Box>
                }
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  direction="column"
                >
                  <Text bold size="xl">
                    {brand.name}
                  </Text>
                  <Text>{brand.description}</Text>
                  <Text bold size="xl">
                    <Link to={`/${brand._id}`}>See Brews</Link>
                  </Text>
                </Box>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    );
  }
}

export default App;
```

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddSearchFieldComponentToSearchBrands.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddSearchFieldComponentToSearchBrands2.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddSearchFieldComponentToSearchBrands3.png)

### 21. Client-Side Search with .filter() (Optional) 4min

- We are going to modify the `App` component to make the search filter work.

> client/src/components/App.js

```js
import React, { Component } from "react";
// prettier-ignore
import { Container, Box, Heading, Card, Image, Text, SearchField, Icon } from "gestalt";
import { Link } from "react-router-dom";
import "./App.css";
import Strapi from "strapi-sdk-javascript/build/main";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

class App extends Component {
  state = {
    brands: [],
    searchTerm: ""
  };

  async componentDidMount() {
    try {
      const response = await strapi.request("POST", "/graphql", {
        data: {
          query: `query {
            brands {
              _id
              name
              description
              image {
                url
              }
            }
          }`
        }
      });
      // console.log(response);
      this.setState({ brands: response.data.brands });
    } catch (err) {
      console.error(err);
    }
  }

  handleChange = ({ value }) => {
    this.setState({ searchTerm: value });
  };

  filteredBrands = ({ searchTerm, brands }) => {
    return brands.filter(brand => {
      return (
        brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        brand.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  };

  render() {
    const { searchTerm } = this.state;

    return (
      <Container>
        {/* Brands Search Field */}
        <Box display="flex" justifyContent="center" marginTop={4}>
          <SearchField
            id="searchField"
            accessibilityLabel="Brands Search Field"
            onChange={this.handleChange}
            value={searchTerm}
            placeholder="Search Brands"
          />
          <Box margin={3}>
            <Icon
              icon="filter"
              color={searchTerm ? "orange" : "gray"}
              size={20}
              accessibilityLabel="Filter"
            />
          </Box>
        </Box>

        {/* Brands Section */}
        <Box display="flex" justifyContent="center" marginBottom={2}>
          {/* Brands Header */}
          <Heading color="midnight" size="md">
            Brew Brands
          </Heading>
        </Box>
        {/* Brands */}
        <Box
          dangerouslySetInlineStyle={{
            __style: {
              backgroundColor: "#d6c8ec"
            }
          }}
          shape="rounded"
          wrap
          display="flex"
          justifyContent="around"
        >
          {this.filteredBrands(this.state).map(brand => (
            <Box paddingY={4} margin={2} width={200} key={brand._id}>
              <Card
                image={
                  <Box height={200} width={200}>
                    <Image
                      fit="cover"
                      alt="Brand"
                      naturalHeight={1}
                      naturalWidth={1}
                      src={`${apiUrl}${brand.image.url}`}
                    />
                  </Box>
                }
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  direction="column"
                >
                  <Text bold size="xl">
                    {brand.name}
                  </Text>
                  <Text>{brand.description}</Text>
                  <Text bold size="xl">
                    <Link to={`/${brand._id}`}>See Brews</Link>
                  </Text>
                </Box>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    );
  }
}

export default App;
```

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/ClientSideSearchwithfilter.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/ClientSideSearchwithfilter2.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/ClientSideSearchwithfilter3.png)

### 22. Add Loading State for Brand Data, Create Loader Component (Optional) 6min

- We are going to create the `Loader` component to show a spinner when the page is loading. The spinner we are going to use is based on the [React spinners library](http://www.davidhu.io/react-spinners/).

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddLoadingStateForBrandDataCreateLoaderComponent.png)

> client/src/components/Loader.js

```js
import React from "react";
import { GridLoader } from "react-spinners";
import { Box } from "gestalt";

const Loader = ({ show }) =>
  show && (
    <Box
      position="fixed"
      dangerouslySetInlineStyle={{
        __style: {
          bottom: 300,
          left: "50%",
          transform: "translateX(-50%)"
        }
      }}
    >
      <GridLoader color="darkorange" size={25} margin="3px" />
    </Box>
  );

export default Loader;
```

- We are going to modify the `App` component to make use of the `Loader` component when the data is still loading.

> client/src/components/App.js

```js
import React, { Component } from "react";
// prettier-ignore
import { Container, Box, Heading, Card, Image, Text, SearchField, Icon } from "gestalt";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import "./App.css";
import Strapi from "strapi-sdk-javascript/build/main";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

class App extends Component {
  state = {
    brands: [],
    searchTerm: "",
    loadingBrands: true
  };

  async componentDidMount() {
    try {
      const response = await strapi.request("POST", "/graphql", {
        data: {
          query: `query {
            brands {
              _id
              name
              description
              image {
                url
              }
            }
          }`
        }
      });
      // console.log(response);
      this.setState({ brands: response.data.brands, loadingBrands: false });
    } catch (err) {
      console.error(err);
      this.setState({ loadingBrands: false });
    }
  }

  handleChange = ({ value }) => {
    this.setState({ searchTerm: value });
  };

  filteredBrands = ({ searchTerm, brands }) => {
    return brands.filter(brand => {
      return (
        brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        brand.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  };

  render() {
    const { searchTerm, loadingBrands } = this.state;

    return (
      <Container>
        {/* Brands Search Field */}
        <Box display="flex" justifyContent="center" marginTop={4}>
          <SearchField
            id="searchField"
            accessibilityLabel="Brands Search Field"
            onChange={this.handleChange}
            value={searchTerm}
            placeholder="Search Brands"
          />
          <Box margin={3}>
            <Icon
              icon="filter"
              color={searchTerm ? "orange" : "gray"}
              size={20}
              accessibilityLabel="Filter"
            />
          </Box>
        </Box>

        {/* Brands Section */}
        <Box display="flex" justifyContent="center" marginBottom={2}>
          {/* Brands Header */}
          <Heading color="midnight" size="md">
            Brew Brands
          </Heading>
        </Box>
        {/* Brands */}
        <Box
          dangerouslySetInlineStyle={{
            __style: {
              backgroundColor: "#d6c8ec"
            }
          }}
          shape="rounded"
          wrap
          display="flex"
          justifyContent="around"
        >
          {this.filteredBrands(this.state).map(brand => (
            <Box paddingY={4} margin={2} width={200} key={brand._id}>
              <Card
                image={
                  <Box height={200} width={200}>
                    <Image
                      fit="cover"
                      alt="Brand"
                      naturalHeight={1}
                      naturalWidth={1}
                      src={`${apiUrl}${brand.image.url}`}
                    />
                  </Box>
                }
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  direction="column"
                >
                  <Text bold size="xl">
                    {brand.name}
                  </Text>
                  <Text>{brand.description}</Text>
                  <Text bold size="xl">
                    <Link to={`/${brand._id}`}>See Brews</Link>
                  </Text>
                </Box>
              </Card>
            </Box>
          ))}
        </Box>
        {/* <Spinner show={loadingBrands} accessibilityLabel="Loading Spinner" /> */}
        <Loader show={loadingBrands} />
      </Container>
    );
  }
}

export default App;
```

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddLoadingStateForBrandDataCreateLoaderComponent2.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddLoadingStateForBrandDataCreateLoaderComponent3.png)

## Section 7 Create Brews Data / Brews Component 24min

### 23. Add Brew Content Type 2min

- We are going to create the `Brew Content Type` the same way we created the `Brand` one.

- Create the following `Fields`

| Name        | Type     | Options              |
| ----------- | -------- | -------------------- |
| name        | String   |
| description | Text     | Display as a WYSIWYG |
| image       | Media    |
| price       | Number   | decimal (ex: 2.22)   |
| Brand       | Relation | Brand has many Brews |

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBrewContentType.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBrewContentType2.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBrewContentType3.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBrewContentType4.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBrewContentType5.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBrewContentType6.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBrewContentType7.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBrewContentType8.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBrewContentType9.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBrewContentType10.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBrewContentType11.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddBrewContentType12.png)

### 24. Seed Brew Data 4min

- We are going to add new Brand from the `brands.json` file attached to the project.

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SeedBrewData.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SeedBrewData2.png)

- We are going to add new Brews from the `brews.json` file attached to the project.

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SeedBrewData3.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SeedBrewData4.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SeedBrewData5.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SeedBrewData6.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SeedBrewData7.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SeedBrewData8.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SeedBrewData9.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SeedBrewData10.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SeedBrewData11.png)

### 25. Query Brew / Brews, Change Permission for Public / Auth Users 3min

- We are going to try to obtain the brews from http://localhost:1337/graphql

> Request

```graphql
query {
  brews {
    _id
    createdAt
    updatedAt
    name
    description
    image {
      name
      url
    }
    price
    brand {
      _id
      name
    }
  }
}
```

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/QueryBrewBrewsChangePermissionForPublic.png)

> Response

```json
{
  "errors": [
    {
      "message": "Forbidden",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": ["brews"],
      "extensions": {
        "code": "INTERNAL_SERVER_ERROR",
        "exception": {
          "data": null,
          "isBoom": true,
          "isServer": false,
          "output": {
            "statusCode": 403,
            "payload": {
              "statusCode": 403,
              "error": "Forbidden",
              "message": "Forbidden"
            },
            "headers": {}
          },
          "message": "Forbidden",
          "stacktrace": [
            "Error: Forbidden",
            "    at handleErrors (C:\\Work\\Training\\Pre\\GraphQL\\build-an-online-store-with-react-and-graphql-in-90-minutes\\server\\plugins\\users-permissions\\config\\policies\\permissions.js:73:53)",
            "    at module.exports (C:\\Work\\Training\\Pre\\GraphQL\\build-an-online-store-with-react-and-graphql-in-90-minutes\\server\\plugins\\users-permissions\\config\\policies\\permissions.js:59:12)",
            "    at processTicksAndRejections (internal/process/task_queues.js:86:5)"
          ]
        }
      }
    }
  ],
  "data": {
    "brews": null
  }
}
```

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/QueryBrewBrewsChangePermissionForPublic2.png)

- We need to change the permission for public to be able to obtain the data .

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/QueryBrewBrewsChangePermissionForPublic3.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/QueryBrewBrewsChangePermissionForPublic4.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/QueryBrewBrewsChangePermissionForPublic5.png)

- Now we have to try to get the data

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/QueryBrewBrewsChangePermissionForPublic6.png)

> Response

```json
{
  "data": {
    "brews": [
      {
        "_id": "5ccb27ea0f457953ecc2b22e",
        "createdAt": "2019-05-02T17:24:58.932Z",
        "updatedAt": "2019-05-02T17:24:59.453Z",
        "name": "Liberty Ale",
        "description": "Liberty Ale uses only natural ingredients — pale malted barley, fresh whole-cone Cascade hops and a special top-fermenting yeast, and water.",
        "image": {
          "name": "liberty-ale.jpg",
          "url": "/uploads/0ff5b770cee3453798d092d36150e0ca.jpg"
        },
        "price": 7.99,
        "brand": {
          "_id": "5cca7c12c411f32d843825b6",
          "name": "BearPaw River"
        }
      },
      {
        "_id": "5ccb287b0f457953ecc2b231",
        "createdAt": "2019-05-02T17:27:23.358Z",
        "updatedAt": "2019-05-02T17:27:23.860Z",
        "name": "Christmas Ale",
        "description": "The beer pours a dark, mahogany brown with a creamy, tan head. It has flavors of creamy bittersweet chocolate, coffee, and nuts with a rich mouthfeel.",
        "image": {
          "name": "christmas-ale.jpg",
          "url": "/uploads/36550816f85c4c09978330912ec02f39.jpg"
        },
        "price": 9.99,
        "brand": {
          "_id": "5cca8959d148472accdb4309",
          "name": "Goose Island"
        }
      },
      {
        "_id": "5ccb28d50f457953ecc2b234",
        "createdAt": "2019-05-02T17:28:53.340Z",
        "updatedAt": "2019-05-02T17:28:53.879Z",
        "name": "Porter",
        "description": "A blend of specially roasted pale, caramel, chocolate, and black malts, along with our top-fermenting yeast, creates complexity without bitterness.",
        "image": {
          "name": "porter.jpg",
          "url": "/uploads/d9565aa35d994ddea5002b48353e9f41.jpg"
        },
        "price": 6.99,
        "brand": {
          "_id": "5ccb26a00f457953ecc2b22b",
          "name": "Solera"
        }
      },
      {
        "_id": "5ccb29310f457953ecc2b237",
        "createdAt": "2019-05-02T17:30:25.918Z",
        "updatedAt": "2019-05-02T17:30:26.386Z",
        "name": "Steam",
        "description": "A blend of pale and caramel malts, fermentation with lager yeast at warmer ale temperatures in shallow open-air fermenters, and gentle carbonation.",
        "image": {
          "name": "steam.jpg",
          "url": "/uploads/524bf722a62e4325900a439b73fbb83c.jpg"
        },
        "price": 7.99,
        "brand": {
          "_id": "5cca7c12c411f32d843825b6",
          "name": "BearPaw River"
        }
      },
      {
        "_id": "5ccb29730f457953ecc2b23a",
        "createdAt": "2019-05-02T17:31:31.729Z",
        "updatedAt": "2019-05-02T17:32:14.058Z",
        "name": "La Folie",
        "description": "Dry-hopped with some of our hop heroes, bringing incredibly fruity aromas of zesty orange, pithy grapefruit, pungent pine and resin.",
        "image": {
          "name": "la-folie.jpg",
          "url": "/uploads/fff38bd26f004d9397990779b19edc1a.jpg"
        },
        "price": 8.99,
        "brand": {
          "_id": "5cca8959d148472accdb4309",
          "name": "Goose Island"
        }
      },
      {
        "_id": "5ccb2a0a0f457953ecc2b23d",
        "createdAt": "2019-05-02T17:34:02.511Z",
        "updatedAt": "2019-05-02T17:34:02.982Z",
        "name": "Gueze Tilquin",
        "description": "A balance of sweet and salty, citrus, and caramel. Fermented at the bottom of the North Sea, which is the perfect temperature for lagers.",
        "image": {
          "name": "gueze-tilquin.jpg",
          "url": "/uploads/474480dda6da41e0acb86708b24e35b8.jpg"
        },
        "price": 10.99,
        "brand": {
          "_id": "5ccb26a00f457953ecc2b22b",
          "name": "Solera"
        }
      }
    ]
  }
}
```

- We are going to try to get the `brew` by Id

> Request

```graphql
query {
  brew(id: "5ccb27ea0f457953ecc2b22e") {
    _id
    name
    createdAt
    description
    price
    image {
      url
    }
    brand {
      _id
      name
    }
  }
}
```

> Response

```json
{
  "data": {
    "brew": {
      "_id": "5ccb27ea0f457953ecc2b22e",
      "name": "Liberty Ale",
      "createdAt": "2019-05-02T17:24:58.932Z",
      "description": "Liberty Ale uses only natural ingredients — pale malted barley, fresh whole-cone Cascade hops and a special top-fermenting yeast, and water.",
      "price": 7.99,
      "image": {
        "url": "/uploads/0ff5b770cee3453798d092d36150e0ca.jpg"
      },
      "brand": {
        "_id": "5cca7c12c411f32d843825b6",
        "name": "BearPaw River"
      }
    }
  }
}
```

### 26. Query Brand by Id to Get Associated Brews 2min

- We are going to try to get all the `Brews` from an specific `Brand`. The `Brand` query includes now an array with all the `Brews` related.

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/QueryBrandByIdToGetAssociatedBrews.png)

> Request

```graphql
query {
  brand(id: "5cca7c12c411f32d843825b6") {
    _id
    name
    createdAt
    description
    image {
      url
    }
    brews {
      _id
      name
      createdAt
      updatedAt
      description
      price
      image {
        url
      }
      brand {
        _id
      }
    }
  }
}
```

> Response

```json
{
  "data": {
    "brand": {
      "_id": "5cca7c12c411f32d843825b6",
      "name": "BearPaw River",
      "createdAt": "2019-05-02T05:11:46.029Z",
      "description": "BPR is a microbrewery based in Wasilla, dedicated to making classic hand-crafted beers.",
      "image": {
        "url": "/uploads/e7d0477159df4c8db1af38ec2a9dd1d4.png"
      },
      "brews": [
        {
          "_id": "5ccb27ea0f457953ecc2b22e",
          "name": "Liberty Ale",
          "createdAt": "2019-05-02T17:24:58.932Z",
          "updatedAt": "2019-05-02T17:24:59.453Z",
          "description": "Liberty Ale uses only natural ingredients — pale malted barley, fresh whole-cone Cascade hops and a special top-fermenting yeast, and water.",
          "price": 7.99,
          "image": {
            "url": "/uploads/0ff5b770cee3453798d092d36150e0ca.jpg"
          },
          "brand": {
            "_id": "5cca7c12c411f32d843825b6"
          }
        },
        {
          "_id": "5ccb29310f457953ecc2b237",
          "name": "Steam",
          "createdAt": "2019-05-02T17:30:25.918Z",
          "updatedAt": "2019-05-02T17:30:26.386Z",
          "description": "A blend of pale and caramel malts, fermentation with lager yeast at warmer ale temperatures in shallow open-air fermenters, and gentle carbonation.",
          "price": 7.99,
          "image": {
            "url": "/uploads/524bf722a62e4325900a439b73fbb83c.jpg"
          },
          "brand": {
            "_id": "5cca7c12c411f32d843825b6"
          }
        }
      ]
    }
  }
}
```

### 27. Request Brews by Brand Id in Brews Component 6min

- We are going to create the `Brews` component that will allow us to show all the `Brews` that belongs to a `Brand`

> client/src/components/Brews.js

```js
import React from "react";
import Strapi from "strapi-sdk-javascript/build/main";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

class Brews extends React.Component {
  async componentDidMount() {
    try {
      const response = await strapi.request("POST", "/graphql", {
        data: {
          query: `query {
          brand(id: "${this.props.match.params.brandId}") {
            _id
            name
            brews {
              _id
              name
              image {
                url
              }
              price
            }
          }
        }`
        }
      });
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return <div>Brews</div>;
  }
}

export default Brews;
```

- We are also going to modify the `index.js` document to add a new Route for the `Brews` component.

> client/src/index.js

```js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "gestalt/dist/gestalt.css";

import App from "./components/App";
import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Checkout from "./components/Checkout";
import Brews from "./components/Brews";

import registerServiceWorker from "./registerServiceWorker";

const Root = () => (
  <Router>
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route component={App} exact path="/" />
        <Route component={Signin} path="/signin" />
        <Route component={Signup} path="/signup" />
        <Route component={Checkout} path="/checkout" />
        <Route component={Brews} path="/:brandId" />
      </Switch>
    </React.Fragment>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
```

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/RequestBrewsByBrandIdInBrewsComponent.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/RequestBrewsByBrandIdInBrewsComponent2.png)

### 28. Add Markup to Display Brews 6min

- We are going to modify the `Brews` component to show all the `Brews` that belongs to a `Brand`

> client/src/components/Brews.js

```js
import React from "react";
import Strapi from "strapi-sdk-javascript/build/main";
import { Box, Heading, Text, Image, Card, Button } from "gestalt";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

class Brews extends React.Component {
  state = {
    brews: [],
    brand: ""
  };

  async componentDidMount() {
    try {
      const response = await strapi.request("POST", "/graphql", {
        data: {
          query: `query {
          brand(id: "${this.props.match.params.brandId}") {
            _id
            name
            brews {
              _id
              name
              description
              image {
                url
              }
              price
            }
          }
        }`
        }
      });
      this.setState({
        brews: response.data.brand.brews,
        brand: response.data.brand.name
      });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const { brand, brews } = this.state;

    return (
      <Box
        marginTop={4}
        display="flex"
        justifyContent="center"
        alignItems="start"
      >
        {/* Brews Section */}
        <Box display="flex" direction="column" alignItems="center">
          {/* Brews Heading */}
          <Box margin={2}>
            <Heading color="orchid">{brand}</Heading>
          </Box>
          {/* Brews */}
          <Box
            dangerouslySetInlineStyle={{
              __style: {
                backgroundColor: "#bdcdd9"
              }
            }}
            wrap
            shape="rounded"
            display="flex"
            justifyContent="center"
            padding={4}
          >
            {brews.map(brew => (
              <Box paddingY={4} margin={2} width={210} key={brew._id}>
                <Card
                  image={
                    <Box height={250} width={200}>
                      <Image
                        fit="cover"
                        alt="Brand"
                        naturalHeight={1}
                        naturalWidth={1}
                        src={`${apiUrl}${brew.image.url}`}
                      />
                    </Box>
                  }
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    direction="column"
                  >
                    <Box marginBottom={2}>
                      <Text bold size="xl">
                        {brew.name}
                      </Text>
                    </Box>
                    <Text>{brew.description}</Text>
                    <Text color="orchid">${brew.price}</Text>
                    <Box marginTop={2}>
                      <Text bold size="xl">
                        <Button color="blue" text="Add to Cart" />
                      </Text>
                    </Box>
                  </Box>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Brews;
```

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddMarkupToDisplayBrews.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddMarkupToDisplayBrews2.png)

## Section 8 Create User Cart 17min

### 29. Add Cart Markup in Brews Component 5min

- We are going to modify the `Brews` component to add the `User Cart` section.

> client/src/components/Brews.js

```js
import React from "react";
import Strapi from "strapi-sdk-javascript/build/main";
import { Box, Heading, Text, Image, Card, Button, Mask } from "gestalt";
import { Link } from "react-router-dom";

const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

class Brews extends React.Component {
  state = {
    brews: [],
    brand: "",
    cartItems: []
  };

  async componentDidMount() {
    try {
      const response = await strapi.request("POST", "/graphql", {
        data: {
          query: `query {
          brand(id: "${this.props.match.params.brandId}") {
            _id
            name
            brews {
              _id
              name
              description
              image {
                url
              }
              price
            }
          }
        }`
        }
      });
      this.setState({
        brews: response.data.brand.brews,
        brand: response.data.brand.name
      });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const { brand, brews, cartItems } = this.state;

    return (
      <Box
        marginTop={4}
        display="flex"
        justifyContent="center"
        alignItems="start"
        dangerouslySetInlineStyle={{
          __style: {
            flexWrap: "wrap-reverse"
          }
        }}
      >
        {/* Brews Section */}
        <Box display="flex" direction="column" alignItems="center">
          {/* Brews Heading */}
          <Box margin={2}>
            <Heading color="orchid">{brand}</Heading>
          </Box>
          {/* Brews */}
          <Box
            dangerouslySetInlineStyle={{
              __style: {
                backgroundColor: "#bdcdd9"
              }
            }}
            wrap
            shape="rounded"
            display="flex"
            justifyContent="center"
            padding={4}
          >
            {brews.map(brew => (
              <Box paddingY={4} margin={2} width={210} key={brew._id}>
                <Card
                  image={
                    <Box height={250} width={200}>
                      <Image
                        fit="cover"
                        alt="Brand"
                        naturalHeight={1}
                        naturalWidth={1}
                        src={`${apiUrl}${brew.image.url}`}
                      />
                    </Box>
                  }
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    direction="column"
                  >
                    <Box marginBottom={2}>
                      <Text bold size="xl">
                        {brew.name}
                      </Text>
                    </Box>
                    <Text>{brew.description}</Text>
                    <Text color="orchid">${brew.price}</Text>
                    <Box marginTop={2}>
                      <Text bold size="xl">
                        <Button color="blue" text="Add to Cart" />
                      </Text>
                    </Box>
                  </Box>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>

        {/* User Cart */}
        <Box alignSelf="end" marginTop={2} marginLeft={8}>
          <Mask shape="rounded" wash>
            <Box
              display="flex"
              direction="column"
              alignItems="center"
              padding={2}
            >
              {/* User Cart Heading */}
              <Heading align="center" size="md">
                Your Cart
              </Heading>
              <Text color="gray" italic>
                {cartItems.length} items selected
              </Text>

              {/* Cart Items (will do) */}

              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                direction="column"
              >
                <Box margin={2}>
                  {cartItems.length === 0 && (
                    <Text color="red">Please select some items</Text>
                  )}
                </Box>
                <Text size="lg">Total: $3.99</Text>
                <Text>
                  <Link to="/checkout">Checkout</Link>
                </Text>
              </Box>
            </Box>
          </Mask>
        </Box>
      </Box>
    );
  }
}

export default Brews;
```

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddCartMarkupInBrewsComponent.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddCartMarkupInBrewsComponent2.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddCartMarkupInBrewsComponent3.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddCartMarkupInBrewsComponent4.png)

### 30. Create Function to Add Items to Cart 5min

- We are going to modify the `Brews` component to manage the `Add Cart` button.

> client/src/components/Brews.js

```js
import React from "react";
import Strapi from "strapi-sdk-javascript/build/main";
import {
  Box,
  Heading,
  Text,
  Image,
  Card,
  Button,
  Mask,
  IconButton
} from "gestalt";
import { Link } from "react-router-dom";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

class Brews extends React.Component {
  state = {
    brews: [],
    brand: "",
    cartItems: []
  };

  async componentDidMount() {
    try {
      const response = await strapi.request("POST", "/graphql", {
        data: {
          query: `query {
          brand(id: "${this.props.match.params.brandId}") {
            _id
            name
            brews {
              _id
              name
              description
              image {
                url
              }
              price
            }
          }
        }`
        }
      });
      this.setState({
        brews: response.data.brand.brews,
        brand: response.data.brand.name
      });
    } catch (err) {
      console.error(err);
    }
  }

  addToCart = brew => {
    const alreadyInCart = this.state.cartItems.findIndex(
      item => item._id === brew._id
    );

    if (alreadyInCart === -1) {
      const updatedItems = this.state.cartItems.concat({
        ...brew,
        quantity: 1
      });
      this.setState({ cartItems: updatedItems });
    } else {
      const updatedItems = [...this.state.cartItems];
      updatedItems[alreadyInCart].quantity += 1;
      this.setState({ cartItems: updatedItems });
    }
  };

  render() {
    const { brand, brews, cartItems } = this.state;

    return (
      <Box
        marginTop={4}
        display="flex"
        justifyContent="center"
        alignItems="start"
        dangerouslySetInlineStyle={{
          __style: {
            flexWrap: "wrap-reverse"
          }
        }}
      >
        {/* Brews Section */}
        <Box display="flex" direction="column" alignItems="center">
          {/* Brews Heading */}
          <Box margin={2}>
            <Heading color="orchid">{brand}</Heading>
          </Box>
          {/* Brews */}
          <Box
            dangerouslySetInlineStyle={{
              __style: {
                backgroundColor: "#bdcdd9"
              }
            }}
            wrap
            shape="rounded"
            display="flex"
            justifyContent="center"
            padding={4}
          >
            {brews.map(brew => (
              <Box paddingY={4} margin={2} width={210} key={brew._id}>
                <Card
                  image={
                    <Box height={250} width={200}>
                      <Image
                        fit="cover"
                        alt="Brand"
                        naturalHeight={1}
                        naturalWidth={1}
                        src={`${apiUrl}${brew.image.url}`}
                      />
                    </Box>
                  }
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    direction="column"
                  >
                    <Box marginBottom={2}>
                      <Text bold size="xl">
                        {brew.name}
                      </Text>
                    </Box>
                    <Text>{brew.description}</Text>
                    <Text color="orchid">${brew.price}</Text>
                    <Box marginTop={2}>
                      <Text bold size="xl">
                        <Button
                          onClick={() => this.addToCart(brew)}
                          color="blue"
                          text="Add to Cart"
                        />
                      </Text>
                    </Box>
                  </Box>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>

        {/* User Cart */}
        <Box alignSelf="end" marginTop={2} marginLeft={8}>
          <Mask shape="rounded" wash>
            <Box
              display="flex"
              direction="column"
              alignItems="center"
              padding={2}
            >
              {/* User Cart Heading */}
              <Heading align="center" size="md">
                Your Cart
              </Heading>
              <Text color="gray" italic>
                {cartItems.length} items selected
              </Text>

              {/* Cart Items */}
              {cartItems.map(item => (
                <Box key={item._id} display="flex" alignItems="center">
                  <Text>
                    {item.name} x {item.quantity} - $
                    {(item.quantity * item.price).toFixed(2)}
                  </Text>
                  <IconButton
                    accessibilityLabel="Delete Item"
                    icon="cancel"
                    size="sm"
                    iconColor="red"
                  />
                </Box>
              ))}

              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                direction="column"
              >
                <Box margin={2}>
                  {cartItems.length === 0 && (
                    <Text color="red">Please select some items</Text>
                  )}
                </Box>
                <Text size="lg">Total: $3.99</Text>
                <Text>
                  <Link to="/checkout">Checkout</Link>
                </Text>
              </Box>
            </Box>
          </Mask>
        </Box>
      </Box>
    );
  }
}

export default Brews;
```

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/CreateFunctionToAddItemsToCart.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/CreateFunctionToAddItemsToCart2.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/CreateFunctionToAddItemsToCart3.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/CreateFunctionToAddItemsToCart4.png)

### 31. Create Function to Delete Item from Cart, Calculate Cart Total 4min

- We are going to create the new `utils` folder from the `src` folder and add the `index.js` document there. It will be used to create some generic util functions.

> client/src/utils/index.js

```js
export const calculatePrice = items => {
  return `$${items
    .reduce((acc, item) => acc + item.quantity * item.price, 0)
    .toFixed(2)}`;
};
```

- We are going to modify the `Brews` component to manage the `Delete Item from Cart` button and to calculate the `Cart Total`.

> client/src/components/Brews.js

```js
import React from "react";
import Strapi from "strapi-sdk-javascript/build/main";
import {
  Box,
  Heading,
  Text,
  Image,
  Card,
  Button,
  Mask,
  IconButton
} from "gestalt";
import { calculatePrice } from "../utils";
import { Link } from "react-router-dom";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

class Brews extends React.Component {
  state = {
    brews: [],
    brand: "",
    cartItems: []
  };

  async componentDidMount() {
    try {
      const response = await strapi.request("POST", "/graphql", {
        data: {
          query: `query {
          brand(id: "${this.props.match.params.brandId}") {
            _id
            name
            brews {
              _id
              name
              description
              image {
                url
              }
              price
            }
          }
        }`
        }
      });
      this.setState({
        brews: response.data.brand.brews,
        brand: response.data.brand.name
      });
    } catch (err) {
      console.error(err);
    }
  }

  addToCart = brew => {
    const alreadyInCart = this.state.cartItems.findIndex(
      item => item._id === brew._id
    );

    if (alreadyInCart === -1) {
      const updatedItems = this.state.cartItems.concat({
        ...brew,
        quantity: 1
      });
      this.setState({ cartItems: updatedItems });
    } else {
      const updatedItems = [...this.state.cartItems];
      updatedItems[alreadyInCart].quantity += 1;
      this.setState({ cartItems: updatedItems });
    }
  };

  deleteItemFromCart = itemToDeleteId => {
    const filteredItems = this.state.cartItems.filter(
      item => item._id !== itemToDeleteId
    );
    this.setState({ cartItems: filteredItems });
  };

  render() {
    const { brand, brews, cartItems } = this.state;

    return (
      <Box
        marginTop={4}
        display="flex"
        justifyContent="center"
        alignItems="start"
        dangerouslySetInlineStyle={{
          __style: {
            flexWrap: "wrap-reverse"
          }
        }}
      >
        {/* Brews Section */}
        <Box display="flex" direction="column" alignItems="center">
          {/* Brews Heading */}
          <Box margin={2}>
            <Heading color="orchid">{brand}</Heading>
          </Box>
          {/* Brews */}
          <Box
            dangerouslySetInlineStyle={{
              __style: {
                backgroundColor: "#bdcdd9"
              }
            }}
            wrap
            shape="rounded"
            display="flex"
            justifyContent="center"
            padding={4}
          >
            {brews.map(brew => (
              <Box paddingY={4} margin={2} width={210} key={brew._id}>
                <Card
                  image={
                    <Box height={250} width={200}>
                      <Image
                        fit="cover"
                        alt="Brand"
                        naturalHeight={1}
                        naturalWidth={1}
                        src={`${apiUrl}${brew.image.url}`}
                      />
                    </Box>
                  }
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    direction="column"
                  >
                    <Box marginBottom={2}>
                      <Text bold size="xl">
                        {brew.name}
                      </Text>
                    </Box>
                    <Text>{brew.description}</Text>
                    <Text color="orchid">${brew.price}</Text>
                    <Box marginTop={2}>
                      <Text bold size="xl">
                        <Button
                          onClick={() => this.addToCart(brew)}
                          color="blue"
                          text="Add to Cart"
                        />
                      </Text>
                    </Box>
                  </Box>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>

        {/* User Cart */}
        <Box alignSelf="end" marginTop={2} marginLeft={8}>
          <Mask shape="rounded" wash>
            <Box
              display="flex"
              direction="column"
              alignItems="center"
              padding={2}
            >
              {/* User Cart Heading */}
              <Heading align="center" size="md">
                Your Cart
              </Heading>
              <Text color="gray" italic>
                {cartItems.length} items selected
              </Text>

              {/* Cart Items */}
              {cartItems.map(item => (
                <Box key={item._id} display="flex" alignItems="center">
                  <Text>
                    {item.name} x {item.quantity} - $
                    {(item.quantity * item.price).toFixed(2)}
                  </Text>
                  <IconButton
                    accessibilityLabel="Delete Item"
                    icon="cancel"
                    size="sm"
                    iconColor="red"
                    onClick={() => this.deleteItemFromCart(item._id)}
                  />
                </Box>
              ))}

              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                direction="column"
              >
                <Box margin={2}>
                  {cartItems.length === 0 && (
                    <Text color="red">Please select some items</Text>
                  )}
                </Box>
                <Text size="lg">Total: {calculatePrice(cartItems)}</Text>
                <Text>
                  <Link to="/checkout">Checkout</Link>
                </Text>
              </Box>
            </Box>
          </Mask>
        </Box>
      </Box>
    );
  }
}

export default Brews;
```

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/CreateFunctionToDeleteItemFromCartCalculateCartTotal.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/CreateFunctionToDeleteItemFromCartCalculateCartTotal2.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/CreateFunctionToDeleteItemFromCartCalculateCartTotal3.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/CreateFunctionToDeleteItemFromCartCalculateCartTotal4.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/CreateFunctionToDeleteItemFromCartCalculateCartTotal5.png)

### 32. Persist Cart to LocalStorage 3min

- We are going to modify the `utils/index.js` document to add new functions that are going to be used to store and read the `Cart` to/from the `LocalStorage`.

> client/src/utils/index.js

```js
const CART_KEY = "cart";

export const calculatePrice = items => {
  return `$${items
    .reduce((acc, item) => acc + item.quantity * item.price, 0)
    .toFixed(2)}`;
};

/* Cart */
export const setCart = (value, cartKey = CART_KEY) => {
  if (localStorage) {
    localStorage.setItem(cartKey, JSON.stringify(value));
  }
};

export const getCart = (cartKey = CART_KEY) => {
  if (localStorage && localStorage.getItem(cartKey)) {
    return JSON.parse(localStorage.getItem(cartKey));
  }
  return [];
};
```

- We are going to modify the `Brews` component to manage the `Delete Item from Cart` button and to calculate the `Cart Total`.

> client/src/components/Brews.js

```js
import React from "react";
import Strapi from "strapi-sdk-javascript/build/main";
// prettier-ignore
import { Box, Heading, Text, Image, Card, Button, Mask, IconButton } from "gestalt";
import { calculatePrice, setCart, getCart } from "../utils";
import { Link } from "react-router-dom";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

class Brews extends React.Component {
  state = {
    brews: [],
    brand: "",
    cartItems: []
  };

  async componentDidMount() {
    try {
      const response = await strapi.request("POST", "/graphql", {
        data: {
          query: `query {
          brand(id: "${this.props.match.params.brandId}") {
            _id
            name
            brews {
              _id
              name
              description
              image {
                url
              }
              price
            }
          }
        }`
        }
      });
      this.setState({
        brews: response.data.brand.brews,
        brand: response.data.brand.name,
        cartItems: getCart()
      });
    } catch (err) {
      console.error(err);
    }
  }

  addToCart = brew => {
    const alreadyInCart = this.state.cartItems.findIndex(
      item => item._id === brew._id
    );

    if (alreadyInCart === -1) {
      const updatedItems = this.state.cartItems.concat({
        ...brew,
        quantity: 1
      });
      this.setState({ cartItems: updatedItems }, () => setCart(updatedItems));
    } else {
      const updatedItems = [...this.state.cartItems];
      updatedItems[alreadyInCart].quantity += 1;
      this.setState({ cartItems: updatedItems }, () => setCart(updatedItems));
    }
  };

  deleteItemFromCart = itemToDeleteId => {
    const filteredItems = this.state.cartItems.filter(
      item => item._id !== itemToDeleteId
    );
    this.setState({ cartItems: filteredItems }, () => setCart(filteredItems));
  };

  render() {
    const { brand, brews, cartItems } = this.state;

    return (
      <Box
        marginTop={4}
        display="flex"
        justifyContent="center"
        alignItems="start"
        dangerouslySetInlineStyle={{
          __style: {
            flexWrap: "wrap-reverse"
          }
        }}
      >
        {/* Brews Section */}
        <Box display="flex" direction="column" alignItems="center">
          {/* Brews Heading */}
          <Box margin={2}>
            <Heading color="orchid">{brand}</Heading>
          </Box>
          {/* Brews */}
          <Box
            dangerouslySetInlineStyle={{
              __style: {
                backgroundColor: "#bdcdd9"
              }
            }}
            wrap
            shape="rounded"
            display="flex"
            justifyContent="center"
            padding={4}
          >
            {brews.map(brew => (
              <Box paddingY={4} margin={2} width={210} key={brew._id}>
                <Card
                  image={
                    <Box height={250} width={200}>
                      <Image
                        fit="cover"
                        alt="Brand"
                        naturalHeight={1}
                        naturalWidth={1}
                        src={`${apiUrl}${brew.image.url}`}
                      />
                    </Box>
                  }
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    direction="column"
                  >
                    <Box marginBottom={2}>
                      <Text bold size="xl">
                        {brew.name}
                      </Text>
                    </Box>
                    <Text>{brew.description}</Text>
                    <Text color="orchid">${brew.price}</Text>
                    <Box marginTop={2}>
                      <Text bold size="xl">
                        <Button
                          onClick={() => this.addToCart(brew)}
                          color="blue"
                          text="Add to Cart"
                        />
                      </Text>
                    </Box>
                  </Box>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>

        {/* User Cart */}
        <Box alignSelf="end" marginTop={2} marginLeft={8}>
          <Mask shape="rounded" wash>
            <Box
              display="flex"
              direction="column"
              alignItems="center"
              padding={2}
            >
              {/* User Cart Heading */}
              <Heading align="center" size="sm">
                Your Cart
              </Heading>
              <Text color="gray" italic>
                {cartItems.length} items selected
              </Text>

              {/* Cart Items */}
              {cartItems.map(item => (
                <Box key={item._id} display="flex" alignItems="center">
                  <Text>
                    {item.name} x {item.quantity} - $
                    {(item.quantity * item.price).toFixed(2)}
                  </Text>
                  <IconButton
                    accessibilityLabel="Delete Item"
                    icon="cancel"
                    size="sm"
                    iconColor="red"
                    onClick={() => this.deleteItemFromCart(item._id)}
                  />
                </Box>
              ))}

              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                direction="column"
              >
                <Box margin={2}>
                  {cartItems.length === 0 && (
                    <Text color="red">Please select some items</Text>
                  )}
                </Box>
                <Text size="lg">Total: {calculatePrice(cartItems)}</Text>
                <Text>
                  <Link to="/checkout">Checkout</Link>
                </Text>
              </Box>
            </Box>
          </Mask>
        </Box>
      </Box>
    );
  }
}

export default Brews;
```

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/PersistCartToLocalStorage.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/PersistCartToLocalStorage2.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/PersistCartToLocalStorage3.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/PersistCartToLocalStorage4.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/PersistCartToLocalStorage5.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/PersistCartToLocalStorage6.png)

## Section 9 Add Signin / Signup Components, User Authentication with JWT 29min

### 33. Create Sign Up Form 5min

- We are going to modify the `Signup` component to include a form to sign up.

> client/src/components/Signup.js

```js
import React from "react";
import { Container, Box, Button, Heading, Text, TextField } from "gestalt";

class Signup extends React.Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  handleChange = ({ event, value }) => {
    event.persist();
    this.setState({ [event.target.name]: value });
  };

  render() {
    return (
      <Container>
        <Box
          dangerouslySetInlineStyle={{
            __style: {
              backgroundColor: "#ebe2da"
            }
          }}
          margin={4}
          padding={4}
          shape="rounded"
          display="flex"
          justifyContent="center"
        >
          {/* Sign Up Form */}
          <form
            style={{
              display: "inlineBlock",
              textAlign: "center",
              maxWidth: 450
            }}
          >
            {/* Sign Up Form Heading */}
            <Box
              marginBottom={2}
              display="flex"
              direction="column"
              alignItems="center"
            >
              <Heading color="midnight">Let's Get Started</Heading>
              <Text italic color="orchid">
                Sign up to order some brews!
              </Text>
            </Box>
            {/* Username Input */}
            <TextField
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              onChange={this.handleChange}
            />
            {/* Email Address Input */}
            <TextField
              id="email"
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={this.handleChange}
            />
            {/* Password Input */}
            <TextField
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
            <Button inline color="blue" text="Submit" type="submit" />
          </form>
        </Box>
      </Container>
    );
  }
}

export default Signup;
```

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/CreateSignUpForm.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/CreateSignUpForm2.png)

### 34. Add Form Validation to Sign Up (Optional) 2min

- We are going to modify the `Signup` component to include some validations to the form.

> client/src/components/Signup.js

```js
import React from "react";
import { Container, Box, Button, Heading, Text, TextField } from "gestalt";

class Signup extends React.Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  handleChange = ({ event, value }) => {
    event.persist();
    this.setState({ [event.target.name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (!this.isFormEmpty(this.state)) {
      console.log("submitted");
    }
  };

  isFormEmpty = ({ username, email, password }) => {
    return !username || !email || !password;
  };

  render() {
    return (
      <Container>
        <Box
          dangerouslySetInlineStyle={{
            __style: {
              backgroundColor: "#ebe2da"
            }
          }}
          margin={4}
          padding={4}
          shape="rounded"
          display="flex"
          justifyContent="center"
        >
          {/* Sign Up Form */}
          <form
            style={{
              display: "inlineBlock",
              textAlign: "center",
              maxWidth: 450
            }}
            onSubmit={this.handleSubmit}
          >
            {/* Sign Up Form Heading */}
            <Box
              marginBottom={2}
              display="flex"
              direction="column"
              alignItems="center"
            >
              <Heading color="midnight">Let's Get Started</Heading>
              <Text italic color="orchid">
                Sign up to order some brews!
              </Text>
            </Box>
            {/* Username Input */}
            <TextField
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              onChange={this.handleChange}
            />
            {/* Email Address Input */}
            <TextField
              id="email"
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={this.handleChange}
            />
            {/* Password Input */}
            <TextField
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
            <Button inline color="blue" text="Submit" type="submit" />
          </form>
        </Box>
      </Container>
    );
  }
}

export default Signup;
```

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddFormValidationToSignUp.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddFormValidationToSignUp2.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddFormValidationToSignUp3.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddFormValidationToSignUp4.png)

### 35. Create Toast Message Component to Show Upon Validation Error (Optional) 5min

- We are going to create the `ToastMessage` component that will be used to show temporary messages.

> client/src/components/ToastMessage.js

```js
import React from "react";
import { Box, Toast } from "gestalt";

const ToastMessage = ({ show, message }) =>
  show && (
    <Box
      dangerouslySetInlineStyle={{
        __style: {
          bottom: 250,
          left: "50%",
          transform: "translateX(-50%)"
        }
      }}
      position="fixed"
    >
      <Toast color="orange" text={message} />
    </Box>
  );

export default ToastMessage;
```

- We are going to modify the `Signup` component to include the use of the `ToastMessage` component.

> client/src/components/Signup.js

```js
import React from "react";
import Strapi from "strapi-sdk-javascript/build/main";
// prettier-ignore
import { Box, Heading, Text, Image, Card, Button, Mask, IconButton } from "gestalt";
import { calculatePrice, setCart, getCart } from "../utils";
import { Link } from "react-router-dom";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

class Brews extends React.Component {
  state = {
    brews: [],
    brand: "",
    cartItems: []
  };

  async componentDidMount() {
    try {
      const response = await strapi.request("POST", "/graphql", {
        data: {
          query: `query {
          brand(id: "${this.props.match.params.brandId}") {
            _id
            name
            brews {
              _id
              name
              description
              image {
                url
              }
              price
            }
          }
        }`
        }
      });
      this.setState({
        brews: response.data.brand.brews,
        brand: response.data.brand.name,
        cartItems: getCart()
      });
    } catch (err) {
      console.error(err);
    }
  }

  addToCart = brew => {
    const alreadyInCart = this.state.cartItems.findIndex(
      item => item._id === brew._id
    );

    if (alreadyInCart === -1) {
      const updatedItems = this.state.cartItems.concat({
        ...brew,
        quantity: 1
      });
      this.setState({ cartItems: updatedItems }, () => setCart(updatedItems));
    } else {
      const updatedItems = [...this.state.cartItems];
      updatedItems[alreadyInCart].quantity += 1;
      this.setState({ cartItems: updatedItems }, () => setCart(updatedItems));
    }
  };

  deleteItemFromCart = itemToDeleteId => {
    const filteredItems = this.state.cartItems.filter(
      item => item._id !== itemToDeleteId
    );
    this.setState({ cartItems: filteredItems }, () => setCart(filteredItems));
  };

  render() {
    const { brand, brews, cartItems } = this.state;

    return (
      <Box
        marginTop={4}
        display="flex"
        justifyContent="center"
        alignItems="start"
        dangerouslySetInlineStyle={{
          __style: {
            flexWrap: "wrap-reverse"
          }
        }}
      >
        {/* Brews Section */}
        <Box display="flex" direction="column" alignItems="center">
          {/* Brews Heading */}
          <Box margin={2}>
            <Heading color="orchid">{brand}</Heading>
          </Box>
          {/* Brews */}
          <Box
            dangerouslySetInlineStyle={{
              __style: {
                backgroundColor: "#bdcdd9"
              }
            }}
            wrap
            shape="rounded"
            display="flex"
            justifyContent="center"
            padding={4}
          >
            {brews.map(brew => (
              <Box paddingY={4} margin={2} width={210} key={brew._id}>
                <Card
                  image={
                    <Box height={250} width={200}>
                      <Image
                        fit="cover"
                        alt="Brand"
                        naturalHeight={1}
                        naturalWidth={1}
                        src={`${apiUrl}${brew.image.url}`}
                      />
                    </Box>
                  }
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    direction="column"
                  >
                    <Box marginBottom={2}>
                      <Text bold size="xl">
                        {brew.name}
                      </Text>
                    </Box>
                    <Text>{brew.description}</Text>
                    <Text color="orchid">${brew.price}</Text>
                    <Box marginTop={2}>
                      <Text bold size="xl">
                        <Button
                          onClick={() => this.addToCart(brew)}
                          color="blue"
                          text="Add to Cart"
                        />
                      </Text>
                    </Box>
                  </Box>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>

        {/* User Cart */}
        <Box alignSelf="end" marginTop={2} marginLeft={8}>
          <Mask shape="rounded" wash>
            <Box
              display="flex"
              direction="column"
              alignItems="center"
              padding={2}
            >
              {/* User Cart Heading */}
              <Heading align="center" size="sm">
                Your Cart
              </Heading>
              <Text color="gray" italic>
                {cartItems.length} items selected
              </Text>

              {/* Cart Items */}
              {cartItems.map(item => (
                <Box key={item._id} display="flex" alignItems="center">
                  <Text>
                    {item.name} x {item.quantity} - $
                    {(item.quantity * item.price).toFixed(2)}
                  </Text>
                  <IconButton
                    accessibilityLabel="Delete Item"
                    icon="cancel"
                    size="sm"
                    iconColor="red"
                    onClick={() => this.deleteItemFromCart(item._id)}
                  />
                </Box>
              ))}

              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                direction="column"
              >
                <Box margin={2}>
                  {cartItems.length === 0 && (
                    <Text color="red">Please select some items</Text>
                  )}
                </Box>
                <Text size="lg">Total: {calculatePrice(cartItems)}</Text>
                <Text>
                  <Link to="/checkout">Checkout</Link>
                </Text>
              </Box>
            </Box>
          </Mask>
        </Box>
      </Box>
    );
  }
}

export default Brews;
```

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/CreateToastMessageComponentToShowUponValidationError.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/CreateToastMessageComponentToShowUponValidationError2.png)

### 36. Register User, Store JWT in LocalStorage 6min

- We are going to modify the `utils/index.js` document to add the new `setToken` function that is going to be used to store the `JWT token` in the `LocalStorage`.

> client/src/utils/index.js

```js
const CART_KEY = "cart";
const TOKEN_KEY = "jwt";

export const calculatePrice = items => {
  return `$${items
    .reduce((acc, item) => acc + item.quantity * item.price, 0)
    .toFixed(2)}`;
};

/* Cart */
export const setCart = (value, cartKey = CART_KEY) => {
  if (localStorage) {
    localStorage.setItem(cartKey, JSON.stringify(value));
  }
};

export const getCart = (cartKey = CART_KEY) => {
  if (localStorage && localStorage.getItem(cartKey)) {
    return JSON.parse(localStorage.getItem(cartKey));
  }
  return [];
};

/* Auth */
export const setToken = (value, tokenKey = TOKEN_KEY) => {
  if (localStorage) {
    localStorage.setItem(tokenKey, JSON.stringify(value));
  }
};
```

- We are going to modify the `Signup` component to obtain the JWT token and store it in the `LocalStorage`.

> client/src/components/Signup.js

```js
import React from "react";
import { Container, Box, Button, Heading, Text, TextField } from "gestalt";
import { setToken } from "../utils";
import ToastMessage from "./ToastMessage";
import Strapi from "strapi-sdk-javascript/build/main";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

class Signup extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    toast: false,
    toastMessage: "",
    loading: false
  };

  handleChange = ({ event, value }) => {
    event.persist();
    this.setState({ [event.target.name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { username, email, password } = this.state;

    if (this.isFormEmpty(this.state)) {
      this.showToast("Fill in all fields");
      return;
    }

    // Sign up user
    try {
      this.setState({ loading: true });
      const response = await strapi.register(username, email, password);
      this.setState({ loading: false });
      setToken(response.jwt);
      this.redirectUser("/");
    } catch (err) {
      this.setState({ loading: false });
      this.showToast(err.message);
    }
  };

  redirectUser = path => this.props.history.push(path);

  isFormEmpty = ({ username, email, password }) => {
    return !username || !email || !password;
  };

  showToast = toastMessage => {
    this.setState({ toast: true, toastMessage });
    setTimeout(() => this.setState({ toast: false, toastMessage: "" }), 5000);
  };

  render() {
    const { toastMessage, toast, loading } = this.state;

    return (
      <Container>
        <Box
          dangerouslySetInlineStyle={{
            __style: {
              backgroundColor: "#ebe2da"
            }
          }}
          margin={4}
          padding={4}
          shape="rounded"
          display="flex"
          justifyContent="center"
        >
          {/* Sign Up Form */}
          <form
            style={{
              display: "inlineBlock",
              textAlign: "center",
              maxWidth: 450
            }}
            onSubmit={this.handleSubmit}
          >
            {/* Sign Up Form Heading */}
            <Box
              marginBottom={2}
              display="flex"
              direction="column"
              alignItems="center"
            >
              <Heading color="midnight">Let's Get Started</Heading>
              <Text italic color="orchid">
                Sign up to order some brews!
              </Text>
            </Box>
            {/* Username Input */}
            <TextField
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              onChange={this.handleChange}
            />
            {/* Email Address Input */}
            <TextField
              id="email"
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={this.handleChange}
            />
            {/* Password Input */}
            <TextField
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
            <Button
              inline
              disabled={loading}
              color="blue"
              text="Submit"
              type="submit"
            />
          </form>
        </Box>
        <ToastMessage show={toast} message={toastMessage} />
      </Container>
    );
  }
}

export default Signup;
```

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/RegisterUserStoreJWTinLocalStorage.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/RegisterUserStoreJWTinLocalStorage2.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/RegisterUserStoreJWTinLocalStorage3.png)

### 37. Change Navbar Upon Sign Up 4min

- We are going to modify the `utils/index.js` document to add the new `getToken` function that is going to be used to get the `JWT token` from the `LocalStorage`.

> client/src/utils/index.js

```js
const CART_KEY = "cart";
const TOKEN_KEY = "jwt";

export const calculatePrice = items => {
  return `$${items
    .reduce((acc, item) => acc + item.quantity * item.price, 0)
    .toFixed(2)}`;
};

/* Cart */
export const setCart = (value, cartKey = CART_KEY) => {
  if (localStorage) {
    localStorage.setItem(cartKey, JSON.stringify(value));
  }
};

export const getCart = (cartKey = CART_KEY) => {
  if (localStorage && localStorage.getItem(cartKey)) {
    return JSON.parse(localStorage.getItem(cartKey));
  }
  return [];
};

/* Auth */
export const getToken = (tokenKey = TOKEN_KEY) => {
  if (localStorage && localStorage.getItem(tokenKey)) {
    return JSON.parse(localStorage.getItem(tokenKey));
  }
  return null;
};

export const setToken = (value, tokenKey = TOKEN_KEY) => {
  if (localStorage) {
    localStorage.setItem(tokenKey, JSON.stringify(value));
  }
};
```

- We are going to modify the `NavBar` component to Show or Hide the `Signin` and `Signup` buttons depending on if the user is authenticated or not.

> client/src/components/NavBar.js

```js
import React from "react";
import { Box, Text, Heading, Image, Button } from "gestalt";
import { getToken } from "../utils";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return getToken() !== null ? <AuthNav /> : <UnAuthNav />;
};

const AuthNav = () => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="around"
    height={70}
    color="midnight"
    padding={1}
    shape="roundedBottom"
  >
    {/* Checkout Link */}
    <NavLink activeClassName="active" to="/checkout">
      <Text size="xl" color="white">
        Checkout
      </Text>
    </NavLink>

    {/* Title and Logo */}
    <NavLink activeClassName="active" exact to="/">
      <Box display="flex" alignItems="center">
        <Box margin={2} height={50} width={50}>
          <Image
            alt="BrewHaha Logo"
            naturalHeight={1}
            naturalWidth={1}
            src="./icons/logo.svg"
          />
        </Box>
        <Heading size="xs" color="orange">
          BrewHaha
        </Heading>
      </Box>
    </NavLink>

    {/* Signout Button */}
    <Button color="transparent" text="Sign Out" inline size="md" />
  </Box>
);

const UnAuthNav = () => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="around"
    height={70}
    color="midnight"
    padding={1}
    shape="roundedBottom"
  >
    {/* Sign In Link */}
    <NavLink activeClassName="active" to="/signin">
      <Text size="xl" color="white">
        Sign In
      </Text>
    </NavLink>

    {/* Title and Logo */}
    <NavLink activeClassName="active" exact to="/">
      <Box display="flex" alignItems="center">
        <Box margin={2} height={50} width={50}>
          <Image
            alt="BrewHaha Logo"
            naturalHeight={1}
            naturalWidth={1}
            src="./icons/logo.svg"
          />
        </Box>
        <Heading size="xs" color="orange">
          BrewHaha
        </Heading>
      </Box>
    </NavLink>

    {/* Sign Up Link */}
    <NavLink activeClassName="active" to="/signup">
      <Text size="xl" color="white">
        Sign Up
      </Text>
    </NavLink>
  </Box>
);

export default Navbar;
```

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/ChangeNavbarUponSignUp.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/ChangeNavbarUponSignUp2.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/ChangeNavbarUponSignUp3.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/ChangeNavbarUponSignUp4.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/ChangeNavbarUponSignUp5.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/ChangeNavbarUponSignUp6.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/ChangeNavbarUponSignUp7.png)

### 38. Sign Out User 4min

- We are going to modify the `utils/index.js` document to add the new `clearToken` and `clearCart` functions that are going to be used to remove the `Cart` and the `JWT token` from the `LocalStorage`.

> client/src/utils/index.js

```js
const CART_KEY = "cart";
const TOKEN_KEY = "jwt";

export const calculatePrice = items => {
  return `$${items
    .reduce((acc, item) => acc + item.quantity * item.price, 0)
    .toFixed(2)}`;
};

/* Cart */
export const setCart = (value, cartKey = CART_KEY) => {
  if (localStorage) {
    localStorage.setItem(cartKey, JSON.stringify(value));
  }
};

export const getCart = (cartKey = CART_KEY) => {
  if (localStorage && localStorage.getItem(cartKey)) {
    return JSON.parse(localStorage.getItem(cartKey));
  }
  return [];
};

export const clearCart = (cartKey = CART_KEY) => {
  if (localStorage) {
    localStorage.removeItem(cartKey);
  }
};

/* Auth */
export const getToken = (tokenKey = TOKEN_KEY) => {
  if (localStorage && localStorage.getItem(tokenKey)) {
    return JSON.parse(localStorage.getItem(tokenKey));
  }
  return null;
};

export const setToken = (value, tokenKey = TOKEN_KEY) => {
  if (localStorage) {
    localStorage.setItem(tokenKey, JSON.stringify(value));
  }
};

export const clearToken = (tokenKey = TOKEN_KEY) => {
  if (localStorage) {
    localStorage.removeItem(tokenKey);
  }
};
```

- We are going to modify the `NavBar` component to develop the functionality when the `Sign out` button is clicked.

> client/src/components/NavBar.js

```js
import React from "react";
import { Box, Text, Heading, Image, Button } from "gestalt";
import { getToken, clearToken, clearCart } from "../utils";
import { NavLink, withRouter } from "react-router-dom";

class Navbar extends React.Component {
  handleSignout = () => {
    clearToken();
    clearCart();
    this.props.history.push("/");
  };

  render() {
    return getToken() !== null ? (
      <AuthNav handleSignout={this.handleSignout} />
    ) : (
      <UnAuthNav />
    );
  }
}

const AuthNav = ({ handleSignout }) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="around"
    height={70}
    color="midnight"
    padding={1}
    shape="roundedBottom"
  >
    {/* Checkout Link */}
    <NavLink activeClassName="active" to="/checkout">
      <Text size="xl" color="white">
        Checkout
      </Text>
    </NavLink>

    {/* Title and Logo */}
    <NavLink activeClassName="active" exact to="/">
      <Box display="flex" alignItems="center">
        <Box margin={2} height={50} width={50}>
          <Image
            alt="BrewHaha Logo"
            naturalHeight={1}
            naturalWidth={1}
            src="./icons/logo.svg"
          />
        </Box>
        <Heading size="xs" color="orange">
          BrewHaha
        </Heading>
      </Box>
    </NavLink>

    {/* Signout Button */}
    <Button
      onClick={handleSignout}
      color="transparent"
      text="Sign Out"
      inline
      size="md"
    />
  </Box>
);

const UnAuthNav = () => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="around"
    height={70}
    color="midnight"
    padding={1}
    shape="roundedBottom"
  >
    {/* Sign In Link */}
    <NavLink activeClassName="active" to="/signin">
      <Text size="xl" color="white">
        Sign In
      </Text>
    </NavLink>

    {/* Title and Logo */}
    <NavLink activeClassName="active" exact to="/">
      <Box display="flex" alignItems="center">
        <Box margin={2} height={50} width={50}>
          <Image
            alt="BrewHaha Logo"
            naturalHeight={1}
            naturalWidth={1}
            src="./icons/logo.svg"
          />
        </Box>
        <Heading size="xs" color="orange">
          BrewHaha
        </Heading>
      </Box>
    </NavLink>

    {/* Sign Up Link */}
    <NavLink activeClassName="active" to="/signup">
      <Text size="xl" color="white">
        Sign Up
      </Text>
    </NavLink>
  </Box>
);

export default withRouter(Navbar);
```

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SignOutUser.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SignOutUser2.png)

### 39. Create Sign In Markup / Functionality 2min

- We are going to modify the `Signin` component to allow to Sign In .

> client/src/components/Signin.js

```js
import React from "react";
import { Container, Box, Button, Heading, Text, TextField } from "gestalt";
import { setToken } from "../utils";
import ToastMessage from "./ToastMessage";
import Strapi from "strapi-sdk-javascript/build/main";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

class Signin extends React.Component {
  state = {
    username: "",
    password: "",
    toast: false,
    toastMessage: "",
    loading: false
  };

  handleChange = ({ event, value }) => {
    event.persist();
    this.setState({ [event.target.name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { username, password } = this.state;

    if (this.isFormEmpty(this.state)) {
      this.showToast("Fill in all fields");
      return;
    }

    // Sign up user
    try {
      this.setState({ loading: true });
      const response = await strapi.login(username, password);
      this.setState({ loading: false });
      setToken(response.jwt);
      this.redirectUser("/");
    } catch (err) {
      this.setState({ loading: false });
      this.showToast(err.message);
    }
  };

  redirectUser = path => this.props.history.push(path);

  isFormEmpty = ({ username, password }) => {
    return !username || !password;
  };

  showToast = toastMessage => {
    this.setState({ toast: true, toastMessage });
    setTimeout(() => this.setState({ toast: false, toastMessage: "" }), 5000);
  };

  render() {
    const { toastMessage, toast, loading } = this.state;

    return (
      <Container>
        <Box
          dangerouslySetInlineStyle={{
            __style: {
              backgroundColor: "#d6a3b1"
            }
          }}
          margin={4}
          padding={4}
          shape="rounded"
          display="flex"
          justifyContent="center"
        >
          {/* Sign In Form */}
          <form
            style={{
              display: "inlineBlock",
              textAlign: "center",
              maxWidth: 450
            }}
            onSubmit={this.handleSubmit}
          >
            {/* Sign In Form Heading */}
            <Box
              marginBottom={2}
              display="flex"
              direction="column"
              alignItems="center"
            >
              <Heading color="midnight">Welcome Back!</Heading>
            </Box>
            {/* Username Input */}
            <TextField
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              onChange={this.handleChange}
            />
            {/* Password Input */}
            <TextField
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
            <Button
              inline
              disabled={loading}
              color="blue"
              text="Submit"
              type="submit"
            />
          </form>
        </Box>
        <ToastMessage show={toast} message={toastMessage} />
      </Container>
    );
  }
}

export default Signin;
```

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/CreateSignInMarkupFunctionality.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/CreateSignInMarkupFunctionality2.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/CreateSignInMarkupFunctionality3.png)

## Section 10 Checkout Component, Process Payments with Stripe 41min

### 40. Make Checkout a Private Route (Optional) 3min

- We are going to modify the `utils/index.js` document to avoid not authenticated users access the `Checkout` component.

> client/src/utils/index.js

```js
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { getToken } from "./utils";
import "gestalt/dist/gestalt.css";

import App from "./components/App";
import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Checkout from "./components/Checkout";
import Brews from "./components/Brews";

import registerServiceWorker from "./registerServiceWorker";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      getToken() !== null ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/signin",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const Root = () => (
  <Router>
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route component={App} exact path="/" />
        <Route component={Signin} path="/signin" />
        <Route component={Signup} path="/signup" />
        <PrivateRoute component={Checkout} path="/checkout" />
        <Route component={Brews} path="/:brandId" />
      </Switch>
    </React.Fragment>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
```

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/MakeCheckoutAPrivateRoute.png)

- It is redirect to http://localhost:3000/signin

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/MakeCheckoutAPrivateRoute2.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/MakeCheckoutAPrivateRoute3.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/MakeCheckoutAPrivateRoute4.png)

### 41. Add Markup for Checkout Form 6min

- We are going to modify the `Checkout` component to add the functionality to manage the form to ask the customer's address for the shipping.

> src/components/Checkout.js

```js
import React from "react";
import { Container, Box, Button, Heading, Text, TextField } from "gestalt";
import ToastMessage from "./ToastMessage";

class Checkout extends React.Component {
  state = {
    address: "",
    postalCode: "",
    city: "",
    confirmationEmailAddress: "",
    toast: false,
    toastMessage: ""
  };

  handleChange = ({ event, value }) => {
    event.persist();
    this.setState({ [event.target.name]: value });
  };

  handleConfirmOrder = async event => {
    event.preventDefault();

    if (this.isFormEmpty(this.state)) {
      this.showToast("Fill in all fields");
      return;
    }
  };

  isFormEmpty = ({ address, postalCode, city, confirmationEmailAddress }) => {
    return !address || !postalCode || !city || !confirmationEmailAddress;
  };

  showToast = toastMessage => {
    this.setState({ toast: true, toastMessage });
    setTimeout(() => this.setState({ toast: false, toastMessage: "" }), 5000);
  };

  render() {
    const { toast, toastMessage } = this.state;

    return (
      <Container>
        <Box
          color="darkWash"
          margin={4}
          padding={4}
          shape="rounded"
          display="flex"
          justifyContent="center"
        >
          {/* Checkout Form */}
          <form
            style={{
              display: "inlineBlock",
              textAlign: "center",
              maxWidth: 450
            }}
            onSubmit={this.handleConfirmOrder}
          >
            {/* Checkout Form Heading */}
            <Heading color="midnight">Checkout</Heading>

            {/* Shipping Address Input */}
            <TextField
              id="address"
              type="text"
              name="address"
              placeholder="Shipping Address"
              onChange={this.handleChange}
            />
            {/* Postal Code Input */}
            <TextField
              id="postalCode"
              type="number"
              name="postalCode"
              placeholder="Postal Code"
              onChange={this.handleChange}
            />
            {/* City Input */}
            <TextField
              id="city"
              type="text"
              name="city"
              placeholder="City of Residence"
              onChange={this.handleChange}
            />
            {/* Confirmation Email Address Input */}
            <TextField
              id="confirmationEmailAddress"
              type="email"
              name="confirmationEmailAddress"
              placeholder="Confirmation Email Address"
              onChange={this.handleChange}
            />
            <button id="stripe__button" type="submit">
              Submit
            </button>
          </form>
        </Box>
        <ToastMessage show={toast} message={toastMessage} />
      </Container>
    );
  }
}

export default Checkout;
```

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddMarkupForCheckoutForm.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddMarkupForCheckoutForm2.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddMarkupForCheckoutForm3.png)

### 42. Add Cart to Checkout, Show Default Text if Cart Empty 6min

- We are going to modify the `Checkout` component to add the functionality to include the `Cart` data to the `Checkout`.

> src/components/Checkout.js

```js
import React from "react";
import { Container, Box, Button, Heading, Text, TextField } from "gestalt";
import ToastMessage from "./ToastMessage";
import { getCart, calculatePrice } from "../utils";

class Checkout extends React.Component {
  state = {
    cartItems: [],
    address: "",
    postalCode: "",
    city: "",
    confirmationEmailAddress: "",
    toast: false,
    toastMessage: ""
  };

  componentDidMount() {
    this.setState({ cartItems: getCart() });
  }

  handleChange = ({ event, value }) => {
    event.persist();
    this.setState({ [event.target.name]: value });
  };

  handleConfirmOrder = async event => {
    event.preventDefault();

    if (this.isFormEmpty(this.state)) {
      this.showToast("Fill in all fields");
      return;
    }
  };

  isFormEmpty = ({ address, postalCode, city, confirmationEmailAddress }) => {
    return !address || !postalCode || !city || !confirmationEmailAddress;
  };

  showToast = toastMessage => {
    this.setState({ toast: true, toastMessage });
    setTimeout(() => this.setState({ toast: false, toastMessage: "" }), 5000);
  };

  render() {
    const { toast, toastMessage, cartItems } = this.state;

    return (
      <Container>
        <Box
          color="darkWash"
          margin={4}
          padding={4}
          shape="rounded"
          display="flex"
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          {/* Checkout Form Heading */}
          <Heading color="midnight">Checkout</Heading>
          {cartItems.length > 0 ? (
            <React.Fragment>
              {/* User Cart */}
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                direction="column"
                marginTop={2}
                marginBottom={6}
              >
                <Text color="darkGray" italic>
                  {cartItems.length} Items for Checkout
                </Text>
                <Box padding={2}>
                  {cartItems.map(item => (
                    <Box key={item._id} padding={1}>
                      <Text color="midnight">
                        {item.name} x {item.quantity} - $
                        {item.quantity * item.price}
                      </Text>
                    </Box>
                  ))}
                </Box>
                <Text bold>Total Amount: {calculatePrice(cartItems)}</Text>
              </Box>
              {/* Checkout Form */}
              <form
                style={{
                  display: "inlineBlock",
                  textAlign: "center",
                  maxWidth: 450
                }}
                onSubmit={this.handleConfirmOrder}
              >
                {/* Shipping Address Input */}
                <TextField
                  id="address"
                  type="text"
                  name="address"
                  placeholder="Shipping Address"
                  onChange={this.handleChange}
                />
                {/* Postal Code Input */}
                <TextField
                  id="postalCode"
                  type="number"
                  name="postalCode"
                  placeholder="Postal Code"
                  onChange={this.handleChange}
                />
                {/* City Input */}
                <TextField
                  id="city"
                  type="text"
                  name="city"
                  placeholder="City of Residence"
                  onChange={this.handleChange}
                />
                {/* Confirmation Email Address Input */}
                <TextField
                  id="confirmationEmailAddress"
                  type="email"
                  name="confirmationEmailAddress"
                  placeholder="Confirmation Email Address"
                  onChange={this.handleChange}
                />
                <button id="stripe__button" type="submit">
                  Submit
                </button>
              </form>
            </React.Fragment>
          ) : (
            // Default Text if No Items in Cart
            <Box color="darkWash" shape="rounded" padding={4}>
              <Heading align="center" color="watermelon" size="xs">
                Your Cart is Empty
              </Heading>
              <Text align="center" italic color="green">
                Add some brews!
              </Text>
            </Box>
          )}
        </Box>
        <ToastMessage show={toast} message={toastMessage} />
      </Container>
    );
  }
}

export default Checkout;
```

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddCartToCheckoutShowDefaultTextIfCartEmpty.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddCartToCheckoutShowDefaultTextIfCartEmpty2.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddCartToCheckoutShowDefaultTextIfCartEmpty3.png)

### 43. Add Confirmation Modal to Order on Submit 7min

- We are going to modify the `Checkout` component to add a confirmation modal form that will be shown when the cutomer submit the order.

> src/components/Checkout.js

```js
import React from "react";
// prettier-ignore
import { Container, Box, Button, Heading, Text, TextField, Modal, Spinner } from "gestalt";
import ToastMessage from "./ToastMessage";
import { getCart, calculatePrice } from "../utils";

class Checkout extends React.Component {
  state = {
    cartItems: [],
    address: "",
    postalCode: "",
    city: "",
    confirmationEmailAddress: "",
    toast: false,
    toastMessage: "",
    orderProcessing: true,
    modal: false
  };

  componentDidMount() {
    this.setState({ cartItems: getCart() });
  }

  handleChange = ({ event, value }) => {
    event.persist();
    this.setState({ [event.target.name]: value });
  };

  handleConfirmOrder = async event => {
    event.preventDefault();

    if (this.isFormEmpty(this.state)) {
      this.showToast("Fill in all fields");
      return;
    }

    this.setState({ modal: true });
  };

  handleSubmitOrder = () => {};

  isFormEmpty = ({ address, postalCode, city, confirmationEmailAddress }) => {
    return !address || !postalCode || !city || !confirmationEmailAddress;
  };

  showToast = toastMessage => {
    this.setState({ toast: true, toastMessage });
    setTimeout(() => this.setState({ toast: false, toastMessage: "" }), 5000);
  };

  closeModal = () => this.setState({ modal: false });

  render() {
    // prettier-ignore
    const { toast, toastMessage, cartItems, modal, orderProcessing } = this.state;

    return (
      <Container>
        <Box
          color="darkWash"
          margin={4}
          padding={4}
          shape="rounded"
          display="flex"
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          {/* Checkout Form Heading */}
          <Heading color="midnight">Checkout</Heading>
          {cartItems.length > 0 ? (
            <React.Fragment>
              {/* User Cart */}
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                direction="column"
                marginTop={2}
                marginBottom={6}
              >
                <Text color="darkGray" italic>
                  {cartItems.length} Items for Checkout
                </Text>
                <Box padding={2}>
                  {cartItems.map(item => (
                    <Box key={item._id} padding={1}>
                      <Text color="midnight">
                        {item.name} x {item.quantity} - $
                        {item.quantity * item.price}
                      </Text>
                    </Box>
                  ))}
                </Box>
                <Text bold>Total Amount: {calculatePrice(cartItems)}</Text>
              </Box>
              {/* Checkout Form */}
              <form
                style={{
                  display: "inlineBlock",
                  textAlign: "center",
                  maxWidth: 450
                }}
                onSubmit={this.handleConfirmOrder}
              >
                {/* Shipping Address Input */}
                <TextField
                  id="address"
                  type="text"
                  name="address"
                  placeholder="Shipping Address"
                  onChange={this.handleChange}
                />
                {/* Postal Code Input */}
                <TextField
                  id="postalCode"
                  type="number"
                  name="postalCode"
                  placeholder="Postal Code"
                  onChange={this.handleChange}
                />
                {/* City Input */}
                <TextField
                  id="city"
                  type="text"
                  name="city"
                  placeholder="City of Residence"
                  onChange={this.handleChange}
                />
                {/* Confirmation Email Address Input */}
                <TextField
                  id="confirmationEmailAddress"
                  type="email"
                  name="confirmationEmailAddress"
                  placeholder="Confirmation Email Address"
                  onChange={this.handleChange}
                />
                <button id="stripe__button" type="submit">
                  Submit
                </button>
              </form>
            </React.Fragment>
          ) : (
            // Default Text if No Items in Cart
            <Box color="darkWash" shape="rounded" padding={4}>
              <Heading align="center" color="watermelon" size="xs">
                Your Cart is Empty
              </Heading>
              <Text align="center" italic color="green">
                Add some brews!
              </Text>
            </Box>
          )}
        </Box>
        {/* Confirmation Modal */}
        {modal && (
          <ConfirmationModal
            orderProcessing={orderProcessing}
            cartItems={cartItems}
            closeModal={this.closeModal}
            handleSubmitOrder={this.handleSubmitOrder}
          />
        )}
        <ToastMessage show={toast} message={toastMessage} />
      </Container>
    );
  }
}

const ConfirmationModal = ({
  orderProcessing,
  cartItems,
  closeModal,
  handleSubmitOrder
}) => (
  <Modal
    accessibilityCloseLabel="close"
    accessibilityModalLabel="Confirm Your Order"
    heading="Confirm Your Order"
    onDismiss={closeModal}
    footer={
      <Box
        display="flex"
        marginRight={-1}
        marginLeft={-1}
        justifyContent="center"
      >
        <Box padding={1}>
          <Button
            size="lg"
            color="red"
            text="Submit"
            disabled={orderProcessing}
            onClick={handleSubmitOrder}
          />
        </Box>
        <Box padding={1}>
          <Button
            size="lg"
            text="Cancel"
            disabled={orderProcessing}
            onClick={closeModal}
          />
        </Box>
      </Box>
    }
    role="alertdialog"
    size="sm"
  >
    {/* Order Summary */}
    {!orderProcessing && (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        direction="column"
        padding={2}
        color="lightWash"
      >
        {cartItems.map(item => (
          <Box key={item._id} padding={1}>
            <Text size="lg" color="red">
              {item.name} x {item.quantity} - ${item.quantity * item.price}
            </Text>
          </Box>
        ))}
        <Box paddingY={2}>
          <Text size="lg" bold>
            Total: {calculatePrice(cartItems)}
          </Text>
        </Box>
      </Box>
    )}

    {/* Order Processing Spinner */}
    <Spinner
      show={orderProcessing}
      accessibilityLabel="Order Processing Spinner"
    />
    {orderProcessing && (
      <Text align="center" italic>
        Submitting Order...
      </Text>
    )}
  </Modal>
);

export default Checkout;
```

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddConfirmationModalToOrderOnSubmit.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddConfirmationModalToOrderOnSubmit2.png)

### 44. Sign Up for Stripe and Get API Keys 1min

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SignUpForStripeAndGetAPIKeys.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SignUpForStripeAndGetAPIKeys2.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SignUpForStripeAndGetAPIKeys3.png)

### 45. Add Stripe to Checkout Page 4min

- We are going to update the `src/components/App.css` document with the elements needed for the `Checkout` component to integrate with `Stripe`.

> src/components/App.css

```css
html,
body {
  margin: 0;
  background-color: #f6f9fc;
}

a,
a:link,
a:visited {
  text-decoration: none;
}

.active {
  font-style: italic;
}

form input {
  margin-bottom: 0.5em;
}

#stripe__button {
  white-space: nowrap;
  border: 0;
  outline: 0;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  padding: 0 14px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  color: #fff;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  background-color: #6772e5;
  text-decoration: none;
  transition: all 150ms ease;
  margin-top: 10px;
}

#stripe__button:hover {
  color: #fff;
  cursor: pointer;
  background-color: #7795f8;
  transform: translateY(-1px);
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
}

.StripeElement {
  display: block;
  margin: 10px 0 20px 0;
  max-width: 500px;
  padding: 10px 14px;
  font-size: 1em;
  font-family: monospace;
  box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px, rgba(0, 0, 0, 0.0196078) 0px
      1px 0px;
  border: 0;
  outline: 0;
  border-radius: 4px;
  background: white;
}

.StripeElement--focus {
  box-shadow: rgba(50, 50, 93, 0.109804) 0px 4px 6px, rgba(0, 0, 0, 0.0784314) 0px
      1px 3px;
  transition: all 150ms ease;
}
```

- We can obtain the Stripe public key from https://stripe.com/docs/development once authenticated.

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddStripeToCheckoutPage.png)

- We are also going to modify the `Checkout` component to add `Stripe`.

> src/components/Checkout.js

```js
import React from "react";
// prettier-ignore
import { Container, Box, Button, Heading, Text, TextField, Modal, Spinner } from "gestalt";
// prettier-ignore
import { Elements, StripeProvider, CardElement, injectStripe } from 'react-stripe-elements';

import ToastMessage from "./ToastMessage";
import { getCart, calculatePrice } from "../utils";

class _CheckoutForm extends React.Component {
  state = {
    cartItems: [],
    address: "",
    postalCode: "",
    city: "",
    confirmationEmailAddress: "",
    toast: false,
    toastMessage: "",
    orderProcessing: false,
    modal: false
  };

  componentDidMount() {
    this.setState({ cartItems: getCart() });
  }

  handleChange = ({ event, value }) => {
    event.persist();
    this.setState({ [event.target.name]: value });
  };

  handleConfirmOrder = async event => {
    event.preventDefault();

    if (this.isFormEmpty(this.state)) {
      this.showToast("Fill in all fields");
      return;
    }

    this.setState({ modal: true });
  };

  handleSubmitOrder = () => {};

  isFormEmpty = ({ address, postalCode, city, confirmationEmailAddress }) => {
    return !address || !postalCode || !city || !confirmationEmailAddress;
  };

  showToast = toastMessage => {
    this.setState({ toast: true, toastMessage });
    setTimeout(() => this.setState({ toast: false, toastMessage: "" }), 5000);
  };

  closeModal = () => this.setState({ modal: false });

  render() {
    // prettier-ignore
    const { toast, toastMessage, cartItems, modal, orderProcessing } = this.state;

    return (
      <Container>
        <Box
          color="darkWash"
          margin={4}
          padding={4}
          shape="rounded"
          display="flex"
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          {/* Checkout Form Heading */}
          <Heading color="midnight">Checkout</Heading>
          {cartItems.length > 0 ? (
            <React.Fragment>
              {/* User Cart */}
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                direction="column"
                marginTop={2}
                marginBottom={6}
              >
                <Text color="darkGray" italic>
                  {cartItems.length} Items for Checkout
                </Text>
                <Box padding={2}>
                  {cartItems.map(item => (
                    <Box key={item._id} padding={1}>
                      <Text color="midnight">
                        {item.name} x {item.quantity} - $
                        {item.quantity * item.price}
                      </Text>
                    </Box>
                  ))}
                </Box>
                <Text bold>Total Amount: {calculatePrice(cartItems)}</Text>
              </Box>
              {/* Checkout Form */}
              <form
                style={{
                  display: "inlineBlock",
                  textAlign: "center",
                  maxWidth: 450
                }}
                onSubmit={this.handleConfirmOrder}
              >
                {/* Shipping Address Input */}
                <TextField
                  id="address"
                  type="text"
                  name="address"
                  placeholder="Shipping Address"
                  onChange={this.handleChange}
                />
                {/* Postal Code Input */}
                <TextField
                  id="postalCode"
                  type="number"
                  name="postalCode"
                  placeholder="Postal Code"
                  onChange={this.handleChange}
                />
                {/* City Input */}
                <TextField
                  id="city"
                  type="text"
                  name="city"
                  placeholder="City of Residence"
                  onChange={this.handleChange}
                />
                {/* Confirmation Email Address Input */}
                <TextField
                  id="confirmationEmailAddress"
                  type="email"
                  name="confirmationEmailAddress"
                  placeholder="Confirmation Email Address"
                  onChange={this.handleChange}
                />
                {/* Credit Card Element */}
                <CardElement
                  id="stripe__input"
                  onReady={input => input.focus()}
                />
                <button id="stripe__button" type="submit">
                  Submit
                </button>
              </form>
            </React.Fragment>
          ) : (
            // Default Text if No Items in Cart
            <Box color="darkWash" shape="rounded" padding={4}>
              <Heading align="center" color="watermelon" size="xs">
                Your Cart is Empty
              </Heading>
              <Text align="center" italic color="green">
                Add some brews!
              </Text>
            </Box>
          )}
        </Box>
        {/* Confirmation Modal */}
        {modal && (
          <ConfirmationModal
            orderProcessing={orderProcessing}
            cartItems={cartItems}
            closeModal={this.closeModal}
            handleSubmitOrder={this.handleSubmitOrder}
          />
        )}
        <ToastMessage show={toast} message={toastMessage} />
      </Container>
    );
  }
}

const ConfirmationModal = ({
  orderProcessing,
  cartItems,
  closeModal,
  handleSubmitOrder
}) => (
  <Modal
    accessibilityCloseLabel="close"
    accessibilityModalLabel="Confirm Your Order"
    heading="Confirm Your Order"
    onDismiss={closeModal}
    footer={
      <Box
        display="flex"
        marginRight={-1}
        marginLeft={-1}
        justifyContent="center"
      >
        <Box padding={1}>
          <Button
            size="lg"
            color="red"
            text="Submit"
            disabled={orderProcessing}
            onClick={handleSubmitOrder}
          />
        </Box>
        <Box padding={1}>
          <Button
            size="lg"
            text="Cancel"
            disabled={orderProcessing}
            onClick={closeModal}
          />
        </Box>
      </Box>
    }
    role="alertdialog"
    size="sm"
  >
    {/* Order Summary */}
    {!orderProcessing && (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        direction="column"
        padding={2}
        color="lightWash"
      >
        {cartItems.map(item => (
          <Box key={item._id} padding={1}>
            <Text size="lg" color="red">
              {item.name} x {item.quantity} - ${item.quantity * item.price}
            </Text>
          </Box>
        ))}
        <Box paddingY={2}>
          <Text size="lg" bold>
            Total: {calculatePrice(cartItems)}
          </Text>
        </Box>
      </Box>
    )}

    {/* Order Processing Spinner */}
    <Spinner
      show={orderProcessing}
      accessibilityLabel="Order Processing Spinner"
    />
    {orderProcessing && (
      <Text align="center" italic>
        Submitting Order...
      </Text>
    )}
  </Modal>
);

const CheckoutForm = injectStripe(_CheckoutForm);

const Checkout = () => (
  <StripeProvider apiKey="pk_test_TAxyscASw6HzuArW1lBMAqvI">
    <Elements>
      <CheckoutForm />
    </Elements>
  </StripeProvider>
);

export default Checkout;
```

> We also need to modify the `public/index.html` to include a javaScript above the title.

> src/components/public/index.html

```js
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="theme-color" content="#000000">
  <!--
      manifest.json provides metadata used when your web app is added to the
      homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
    -->
  <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
  <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
  <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
  <script id="stripe-js" src="https://js.stripe.com/v3/"></script>
  <title>React App</title>
</head>

<body>
  <noscript>
    You need to enable JavaScript to run this app.
  </noscript>
  <div id="root"></div>
  <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
</body>

</html>
```

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddStripeToCheckoutPage2.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/AddStripeToCheckoutPage3.png)

### 46. Create Orders Content Type, Add Create Function in Controllers 6min

- We need to create the `Orders` Content Type from the `Strapi` back-end the same way we created the other content types.

- Create the following `Fields`

| Name       | Type   | Options                            |
| ---------- | ------ | ---------------------------------- |
| address    | String | Required field                     |
| postalCode | String | Required field                     |
| city       | String | Required field                     |
| amount     | Number | decimal (ex: 2.22), Required field |
| brews      | JSON   | Required field                     |

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/CreateOrdersContentTypeAddCreateFunctionInControllers.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/CreateOrdersContentTypeAddCreateFunctionInControllers2.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/CreateOrdersContentTypeAddCreateFunctionInControllers3.png)

CreateOrdersContentTypeAddCreateFunctionInControllers3b

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/CreateOrdersContentTypeAddCreateFunctionInControllers4.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/CreateOrdersContentTypeAddCreateFunctionInControllers5.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/CreateOrdersContentTypeAddCreateFunctionInControllers6.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/CreateOrdersContentTypeAddCreateFunctionInControllers7.png)

- Modify the Roles and Permission for `Orders`

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/CreateOrdersContentTypeAddCreateFunctionInControllers8.png)

- We have to modify the `server/api/order/controllers/Order.js` to modify the `create` function:

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/CreateOrdersContentTypeAddCreateFunctionInControllers9.png)

> server/api/order/controllers/Order.js

```js
"use strict";
const stripe = require("stripe")("sk_test_XXXXXXdrwTKvSbXXXXX");

/**
 * Order.js controller
 *
 * @description: A set of functions called "actions" for managing `Order`.
 */

module.exports = {
  /**
   * Retrieve order records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.order.search(ctx.query);
    } else {
      return strapi.services.order.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a order record.
   *
   * @return {Object}
   */

  findOne: async ctx => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.order.fetch(ctx.params);
  },

  /**
   * Count order records.
   *
   * @return {Number}
   */

  count: async ctx => {
    return strapi.services.order.count(ctx.query);
  },

  /**
   * Create a/an order record.
   *
   * @return {Object}
   */

  create: async ctx => {
    const {
      address,
      amount,
      brews,
      postalCode,
      token,
      city
    } = ctx.request.body;

    // Send charge to Stripe
    const charge = await stripe.charges.create({
      amount: amount * 100,
      currency: "usd",
      description: `Order ${new Date(Date.now())} - User ${ctx.state.user._id}`,
      source: token
    });

    // Create order in database
    const order = await strapi.services.orders.add({
      user: ctx.state.user._id,
      address,
      amount,
      brews,
      postalCode,
      city
    });

    return order;
  },

  /**
   * Update a/an order record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.order.edit(ctx.params, ctx.request.body);
  },

  /**
   * Destroy a/an order record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.order.remove(ctx.params);
  }
};
```

- We need to install stripe on the server:

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/build-an-online-store-with-react-and-graphql-in-90-minutes/server (master)
$ npm i stripe
npm WARN rollback Rolling back fsevents@1.2.9 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back abbrev@1.1.1 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\abbrev is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back ansi-regex@2.1.1 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\ansi-regex is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back aproba@1.2.0 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\aproba is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back balanced-match@1.0.0 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\balanced-match is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back chownr@1.1.1 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\chownr is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back code-point-at@1.1.0 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\code-point-at is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back concat-map@0.0.1 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\concat-map is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back brace-expansion@1.1.11 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\brace-expansion is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back console-control-strings@1.1.0 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\console-control-strings is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back core-util-is@1.0.2 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\core-util-is is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back deep-extend@0.6.0 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\deep-extend is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back delegates@1.0.0 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\delegates is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back detect-libc@1.0.3 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\detect-libc is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back fs.realpath@1.0.0 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\fs.realpath is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back has-unicode@2.0.1 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\has-unicode is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back inherits@2.0.3 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\inherits is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back ini@1.3.5 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\ini is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back isarray@1.0.0 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\isarray is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back minimatch@3.0.4 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\minimatch is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back ignore-walk@3.0.1 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\ignore-walk is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back minimist@0.0.8 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\minimist is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back mkdirp@0.5.1 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\mkdirp is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back ms@2.1.1 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\ms is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back debug@4.1.1 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\debug is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back npm-bundled@1.0.6 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\npm-bundled is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back npm-packlist@1.4.1 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\npm-packlist is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back number-is-nan@1.0.1 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\number-is-nan is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back is-fullwidth-code-point@1.0.0 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\is-fullwidth-code-point is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back object-assign@4.1.1 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\object-assign is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back os-homedir@1.0.2 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\os-homedir is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back os-tmpdir@1.0.2 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\os-tmpdir is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back osenv@0.1.5 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\osenv is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back nopt@4.0.1 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\nopt is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back path-is-absolute@1.0.1 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\path-is-absolute is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back process-nextick-args@2.0.0 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\process-nextick-args is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back minimist@1.2.0 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\rc\node_modules\minimist is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back safe-buffer@5.1.2 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\safe-buffer is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back safer-buffer@2.1.2 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\safer-buffer is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back iconv-lite@0.4.24 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\iconv-lite is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back sax@1.2.4 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\sax is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back needle@2.3.0 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\needle is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back semver@5.7.0 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\semver is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back set-blocking@2.0.0 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\set-blocking is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back signal-exit@3.0.2 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\signal-exit is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back string_decoder@1.1.1 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\string_decoder is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back strip-ansi@3.0.1 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\strip-ansi is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back string-width@1.0.2 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\string-width is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back strip-json-comments@2.0.1 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\strip-json-comments is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back rc@1.2.8 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\rc is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back util-deprecate@1.0.2 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\util-deprecate is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back readable-stream@2.3.6 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\readable-stream is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back are-we-there-yet@1.1.5 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\are-we-there-yet is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back wide-align@1.1.3 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\wide-align is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back gauge@2.7.4 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\gauge is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back npmlog@4.1.2 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\npmlog is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back wrappy@1.0.2 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\wrappy is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back once@1.4.0 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\once is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back inflight@1.0.6 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\inflight is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back glob@7.1.3 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\glob is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back rimraf@2.6.3 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\rimraf is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back yallist@3.0.3 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\yallist is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back minipass@2.3.5 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\minipass is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back fs-minipass@1.2.5 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\fs-minipass is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back minizlib@1.2.1 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\minizlib is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back tar@4.4.8 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\tar is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back node-pre-gyp@0.12.0 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents\node_modules\node-pre-gyp is not a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm WARN rollback Rolling back nan@2.13.2 failed (this is probably harmless): C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\nan is not
a child of C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN react-ga@2.5.7 requires a peer of react@^15.6.2 || ^16.0 but none is installed. You must install peer dependencies yourself.
npm WARN video-react@0.13.6 requires a peer of react@^15.0.0 || ^16.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN video-react@0.13.6 requires a peer of react-dom@^15.0.0 || ^16.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (..\..\..\..\..\..\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\strapi\node_modules\fsevents):npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ stripe@6.31.2
added 3 packages from 9 contributors and audited 9120 packages in 20.413s
found 3 vulnerabilities (2 low, 1 moderate)
  run `npm audit fix` to fix them, or `npm audit` for details
```

- We need to start the `strapi server` and mo errors should be shown.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/build-an-online-store-with-react-and-graphql-in-90-minutes/server (master)
$ strapi start
[2019-05-03T18:33:37.713Z] warn Bootstrap is taking unusually long to execute its callback 3500 miliseconds).
[2019-05-03T18:33:37.717Z] warn Perhaps you forgot to call it?
[2019-05-03T18:33:37.769Z] warn Bootstrap is taking unusually long to execute its callback 3500 miliseconds).
[2019-05-03T18:33:37.779Z] warn Perhaps you forgot to call it?
[2019-05-03T18:33:37.780Z] warn Bootstrap is taking unusually long to execute its callback 3500 miliseconds).
[2019-05-03T18:33:37.786Z] warn Perhaps you forgot to call it?
[2019-05-03T18:33:37.786Z] warn Bootstrap is taking unusually long to execute its callback 3500 miliseconds).
[2019-05-03T18:33:37.787Z] warn Perhaps you forgot to call it?
[2019-05-03T18:33:40.289Z] info File changed: C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server\plugins\users-permissions\config\actions.json
[2019-05-03T18:33:41.419Z] info Time: Fri May 03 2019 19:33:41 GMT+0100 (Irish Standard Time)
[2019-05-03T18:33:41.421Z] info Launched in: 29671 ms
[2019-05-03T18:33:41.422Z] info Environment: development
[2019-05-03T18:33:41.423Z] info Process PID: 11104
[2019-05-03T18:33:41.424Z] info Version: 3.0.0-alpha.26.1 (node v11.13.0)
[2019-05-03T18:33:41.426Z] info To shut down your server, press <CTRL> + C at any time

[2019-05-03T18:33:41.430Z] info ☄️  Admin panel: http://localhost:1337/admin
[2019-05-03T18:33:41.432Z] info ⚡️ Server: http://localhost:1337
```

### 47. Submit Order to Database, Send / Process Payment with Stripe 8min

- We are going to modify the `src/utils/index.js` document to add the `calculateAmount` function.`

> src/utils/index.js

```js
const CART_KEY = "cart";
const TOKEN_KEY = "jwt";

export const calculatePrice = items => {
  return `$${items
    .reduce((acc, item) => acc + item.quantity * item.price, 0)
    .toFixed(2)}`;
};

export const calculateAmount = items => {
  return Number(
    items.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)
  );
};

/* Cart */
export const setCart = (value, cartKey = CART_KEY) => {
  if (localStorage) {
    localStorage.setItem(cartKey, JSON.stringify(value));
  }
};

export const getCart = (cartKey = CART_KEY) => {
  if (localStorage && localStorage.getItem(cartKey)) {
    return JSON.parse(localStorage.getItem(cartKey));
  }
  return [];
};

export const clearCart = (cartKey = CART_KEY) => {
  if (localStorage) {
    localStorage.removeItem(cartKey);
  }
};

/* Auth */
export const getToken = (tokenKey = TOKEN_KEY) => {
  if (localStorage && localStorage.getItem(tokenKey)) {
    return JSON.parse(localStorage.getItem(tokenKey));
  }
  return null;
};

export const setToken = (value, tokenKey = TOKEN_KEY) => {
  if (localStorage) {
    localStorage.setItem(tokenKey, JSON.stringify(value));
  }
};

export const clearToken = (tokenKey = TOKEN_KEY) => {
  if (localStorage) {
    localStorage.removeItem(tokenKey);
  }
};
```

- We are going to modify the `Checkout` component to be able to send the order to the database.

> client/src/components/Checkout.js

```js
import React from "react";
// prettier-ignore
import { Container, Box, Button, Heading, Text, TextField, Modal, Spinner } from "gestalt";
// prettier-ignore
import { Elements, StripeProvider, CardElement, injectStripe } from 'react-stripe-elements';
import ToastMessage from "./ToastMessage";
import { getCart, calculatePrice, clearCart, calculateAmount } from "../utils";
import { withRouter } from "react-router-dom";
import Strapi from "strapi-sdk-javascript/build/main";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

class _CheckoutForm extends React.Component {
  state = {
    cartItems: [],
    address: "",
    postalCode: "",
    city: "",
    confirmationEmailAddress: "",
    toast: false,
    toastMessage: "",
    orderProcessing: false,
    modal: false
  };

  componentDidMount() {
    this.setState({ cartItems: getCart() });
  }

  handleChange = ({ event, value }) => {
    event.persist();
    this.setState({ [event.target.name]: value });
  };

  handleConfirmOrder = async event => {
    event.preventDefault();

    if (this.isFormEmpty(this.state)) {
      this.showToast("Fill in all fields");
      return;
    }

    this.setState({ modal: true });
  };

  handleSubmitOrder = async () => {
    const { cartItems, city, address, postalCode } = this.state;

    const amount = calculateAmount(cartItems);
    // Process order
    this.setState({ orderProcessing: true });
    let token;
    try {
      const response = await this.props.stripe.createToken();
      token = response.token.id;
      await strapi.createEntry("orders", {
        amount,
        brews: cartItems,
        city,
        postalCode,
        address,
        token
      });
      this.setState({ orderProcessing: false, modal: false });
      clearCart();
      this.showToast("Your order has been successfully submitted!", true);
    } catch (err) {
      this.setState({ orderProcessing: false, modal: false });
      this.showToast(err.message);
    }
  };

  isFormEmpty = ({ address, postalCode, city, confirmationEmailAddress }) => {
    return !address || !postalCode || !city || !confirmationEmailAddress;
  };

  showToast = (toastMessage, redirect = false) => {
    this.setState({ toast: true, toastMessage });
    setTimeout(
      () =>
        this.setState(
          { toast: false, toastMessage: "" },
          // if true passed to 'redirect' argument, redirect home
          () => redirect && this.props.history.push("/")
        ),
      5000
    );
  };

  closeModal = () => this.setState({ modal: false });

  render() {
    // prettier-ignore
    const { toast, toastMessage, cartItems, modal, orderProcessing } = this.state;

    return (
      <Container>
        <Box
          color="darkWash"
          margin={4}
          padding={4}
          shape="rounded"
          display="flex"
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          {/* Checkout Form Heading */}
          <Heading color="midnight">Checkout</Heading>
          {cartItems.length > 0 ? (
            <React.Fragment>
              {/* User Cart */}
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                direction="column"
                marginTop={2}
                marginBottom={6}
              >
                <Text color="darkGray" italic>
                  {cartItems.length} Items for Checkout
                </Text>
                <Box padding={2}>
                  {cartItems.map(item => (
                    <Box key={item._id} padding={1}>
                      <Text color="midnight">
                        {item.name} x {item.quantity} - $
                        {item.quantity * item.price}
                      </Text>
                    </Box>
                  ))}
                </Box>
                <Text bold>Total Amount: {calculatePrice(cartItems)}</Text>
              </Box>
              {/* Checkout Form */}
              <form
                style={{
                  display: "inlineBlock",
                  textAlign: "center",
                  maxWidth: 450
                }}
                onSubmit={this.handleConfirmOrder}
              >
                {/* Shipping Address Input */}
                <TextField
                  id="address"
                  type="text"
                  name="address"
                  placeholder="Shipping Address"
                  onChange={this.handleChange}
                />
                {/* Postal Code Input */}
                <TextField
                  id="postalCode"
                  type="text"
                  name="postalCode"
                  placeholder="Postal Code"
                  onChange={this.handleChange}
                />
                {/* City Input */}
                <TextField
                  id="city"
                  type="text"
                  name="city"
                  placeholder="City of Residence"
                  onChange={this.handleChange}
                />
                {/* Confirmation Email Address Input */}
                <TextField
                  id="confirmationEmailAddress"
                  type="email"
                  name="confirmationEmailAddress"
                  placeholder="Confirmation Email Address"
                  onChange={this.handleChange}
                />
                {/* Credit Card Element */}
                <CardElement
                  id="stripe__input"
                  onReady={input => input.focus()}
                />
                <button id="stripe__button" type="submit">
                  Submit
                </button>
              </form>
            </React.Fragment>
          ) : (
            // Default Text if No Items in Cart
            <Box color="darkWash" shape="rounded" padding={4}>
              <Heading align="center" color="watermelon" size="xs">
                Your Cart is Empty
              </Heading>
              <Text align="center" italic color="green">
                Add some brews!
              </Text>
            </Box>
          )}
        </Box>
        {/* Confirmation Modal */}
        {modal && (
          <ConfirmationModal
            orderProcessing={orderProcessing}
            cartItems={cartItems}
            closeModal={this.closeModal}
            handleSubmitOrder={this.handleSubmitOrder}
          />
        )}
        <ToastMessage show={toast} message={toastMessage} />
      </Container>
    );
  }
}

const ConfirmationModal = ({
  orderProcessing,
  cartItems,
  closeModal,
  handleSubmitOrder
}) => (
  <Modal
    accessibilityCloseLabel="close"
    accessibilityModalLabel="Confirm Your Order"
    heading="Confirm Your Order"
    onDismiss={closeModal}
    footer={
      <Box
        display="flex"
        marginRight={-1}
        marginLeft={-1}
        justifyContent="center"
      >
        <Box padding={1}>
          <Button
            size="lg"
            color="red"
            text="Submit"
            disabled={orderProcessing}
            onClick={handleSubmitOrder}
          />
        </Box>
        <Box padding={1}>
          <Button
            size="lg"
            text="Cancel"
            disabled={orderProcessing}
            onClick={closeModal}
          />
        </Box>
      </Box>
    }
    role="alertdialog"
    size="sm"
  >
    {/* Order Summary */}
    {!orderProcessing && (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        direction="column"
        padding={2}
        color="lightWash"
      >
        {cartItems.map(item => (
          <Box key={item._id} padding={1}>
            <Text size="lg" color="red">
              {item.name} x {item.quantity} - ${item.quantity * item.price}
            </Text>
          </Box>
        ))}
        <Box paddingY={2}>
          <Text size="lg" bold>
            Total: {calculatePrice(cartItems)}
          </Text>
        </Box>
      </Box>
    )}

    {/* Order Processing Spinner */}
    <Spinner
      show={orderProcessing}
      accessibilityLabel="Order Processing Spinner"
    />
    {orderProcessing && (
      <Text align="center" italic>
        Submitting Order...
      </Text>
    )}
  </Modal>
);

const CheckoutForm = withRouter(injectStripe(_CheckoutForm));

const Checkout = () => (
  <StripeProvider apiKey="pk_test_TAxyscASw6HzuArW1lBMAqvI">
    <Elements>
      <CheckoutForm />
    </Elements>
  </StripeProvider>
);

export default Checkout;
```

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SubmitOrderToDatabaseSendProcessPaymentWithStripe.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SubmitOrderToDatabaseSendProcessPaymentWithStripe2.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SubmitOrderToDatabaseSendProcessPaymentWithStripe3.png)

- Probably the strapi user token has expired

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SubmitOrderToDatabaseSendProcessPaymentWithStripe4.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SubmitOrderToDatabaseSendProcessPaymentWithStripe5.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SubmitOrderToDatabaseSendProcessPaymentWithStripe6.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SubmitOrderToDatabaseSendProcessPaymentWithStripe7.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SubmitOrderToDatabaseSendProcessPaymentWithStripe8.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SubmitOrderToDatabaseSendProcessPaymentWithStripe9.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SubmitOrderToDatabaseSendProcessPaymentWithStripe10.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SubmitOrderToDatabaseSendProcessPaymentWithStripe11.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SubmitOrderToDatabaseSendProcessPaymentWithStripe12.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SubmitOrderToDatabaseSendProcessPaymentWithStripe13.png)

- The order was proccesed by `Stripe`

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SubmitOrderToDatabaseSendProcessPaymentWithStripe14.png)

- The problem is that the `Orders` content type is `order` not `orders`, so, this code is not correct:

```
[2019-05-04T04:55:31.962Z] debug OPTIONS /orders (1 ms)
TypeError: Cannot read property 'add' of undefined
    at create (C:\Work\Training\Pre\GraphQL\build-an-online-store-with-react-and-graphql-in-90-minutes\server\api\order\controllers\Order.js:74:48)
    at processTicksAndRejections (internal/process/task_queues.js:86:5)
[2019-05-04T04:55:35.573Z] debug POST /orders (3595 ms)
```

> server/api/order/controllers/Order.js

```js
.
.

    // Create order in database
    const order = await strapi.services.orders.add({
      user: ctx.state.user._id,
      address,
      amount,
      brews,
      postalCode,
      city
    });
.
.
```

It should be:

> server/api/order/controllers/Order.js

```js
.
.

    // Create order in database
    const order = await strapi.services.order.add({
      user: ctx.state.user._id,
      address,
      amount,
      brews,
      postalCode,
      city
    });
.
.
```

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SubmitOrderToDatabaseSendProcessPaymentWithStripe15.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SubmitOrderToDatabaseSendProcessPaymentWithStripe16.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SubmitOrderToDatabaseSendProcessPaymentWithStripe17.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SubmitOrderToDatabaseSendProcessPaymentWithStripe18.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SubmitOrderToDatabaseSendProcessPaymentWithStripe19.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SubmitOrderToDatabaseSendProcessPaymentWithStripe20.png)

## Section 11 BONUS: Send Emails with SendGrid 12min

### 48. Set up SendGrid, Give API Key to Strapi (Optional) 3min

- We have to set up the delivery of emails from the `EMAIL` plugin.

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SetUpSendGridGiveAPIKeyToStrapi.png)

- We need to install the `strapi-email-sendgrind@alpha` package on the server:

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/build-an-online-store-with-react-and-graphql-in-90-minutes/server (master)
$ npm i strapi-email-sendgrid@alpha
npm WARN react-ga@2.5.7 requires a peer of react@^15.6.2 || ^16.0 but none is installed. You must install peer dependencies yourself.
npm WARN video-react@0.13.6 requires a peer of react@^15.0.0 || ^16.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN video-react@0.13.6 requires a peer of react-dom@^15.0.0 || ^16.0.0 but none is installed. You must install peer dependencies yourself.

+ strapi-email-sendgrid@3.0.0-alpha.14.5
added 54 packages from 115 contributors and audited 9210 packages in 37.215s
found 3 vulnerabilities (2 low, 1 moderate)
  run `npm audit fix` to fix them, or `npm audit` for details
```

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SetUpSendGridGiveAPIKeyToStrapi2.png)

- We need to setup on [SendGrid](https://sendgrid.com)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SetUpSendGridGiveAPIKeyToStrapi3.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SetUpSendGridGiveAPIKeyToStrapi4.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SetUpSendGridGiveAPIKeyToStrapi5.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SetUpSendGridGiveAPIKeyToStrapi6.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SetUpSendGridGiveAPIKeyToStrapi7.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SetUpSendGridGiveAPIKeyToStrapi8.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SetUpSendGridGiveAPIKeyToStrapi9.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SetUpSendGridGiveAPIKeyToStrapi10.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SetUpSendGridGiveAPIKeyToStrapi11.png)

### 49. Send Confirmation Email upon Checkout (Optional) 9min

- We have to modify the `server/plugins/controllers/Email.js` document to manage the behaviour when an email is sent.
  > server/plugins/controllers/Email.js

We have to modify from:

```js
send: async ctx => {
  // Retrieve provider configuration.
  const config = await strapi
    .store({
      environment: strapi.config.environment,
      type: "plugin",
      name: "email"
    })
    .get({ key: "provider" });

  // Verify if the file email is enable.
  if (config.enabled === false) {
    strapi.log.error("Email is disabled");
    return ctx.badRequest(
      null,
      ctx.request.admin
        ? [{ messages: [{ id: "Email.status.disabled" }] }]
        : "Emailis disabled"
    );
  }

  // Something is wrong
  if (ctx.status === 400) {
    return;
  }

  let options = ctx.request.body;

  await strapi.plugins.email.services.email.send(options, config);

  // Send 200 `ok`
  ctx.send({});
};
```

to:

```js
send: async (ctx) => {
    // Retrieve provider configuration.
    const config = await strapi.store({
      environment: strapi.config.environment,
      type: 'plugin',
      name: 'email'
    }).get({ key: 'provider' });

    // Verify if the file email is enable.
    if (config.enabled === false) {
      strapi.log.error('Email is disabled');
      return ctx.badRequest(null, ctx.request.admin ? [{ messages: [{ id: 'Email.status.disabled' }] }] : 'Emailis disabled');
    }

    // Something is wrong
    if (ctx.status === 400) {
      return;
    }

    let options = ctx.request.body;

    // await strapi.plugins.email.services.email.send(options, config);
    try {
      // Send email to the user
      await strapi.plugins["email"].services.email.send({
        to: options.to,
        from: "test@example.com",
        subject: options.subject,
        text: options.text,
        html: options.html
      });
    } catch (err) {
      return ctx.badRequest(null, err);
    }
    // Send 200 `ok`
    ctx.send({});
  },

  getEnvironments: async (ctx) => {
    const environments =  _.map(_.keys(strapi.config.environments), environment => {
      return {
        name: environment,
        active: (strapi.config.environment === environment)
      };
    });

    ctx.send({ environments });
  }
```

- We also have to modify the `Checkout` component to make use of the `email` plugin.

> client/src/components/Checkout.js

```js
import React from "react";
// prettier-ignore
import { Container, Box, Button, Heading, Text, TextField, Modal, Spinner } from "gestalt";
// prettier-ignore
import { Elements, StripeProvider, CardElement, injectStripe } from 'react-stripe-elements';
import ToastMessage from "./ToastMessage";
import { getCart, calculatePrice, clearCart, calculateAmount } from "../utils";
import { withRouter } from "react-router-dom";
import Strapi from "strapi-sdk-javascript/build/main";
const apiUrl = process.env.API_URL || "http://localhost:1337";
const strapi = new Strapi(apiUrl);

class _CheckoutForm extends React.Component {
  state = {
    cartItems: [],
    address: "",
    postalCode: "",
    city: "",
    confirmationEmailAddress: "",
    toast: false,
    toastMessage: "",
    orderProcessing: false,
    modal: false
  };

  componentDidMount() {
    this.setState({ cartItems: getCart() });
  }

  handleChange = ({ event, value }) => {
    event.persist();
    this.setState({ [event.target.name]: value });
  };

  handleConfirmOrder = async event => {
    event.preventDefault();

    if (this.isFormEmpty(this.state)) {
      this.showToast("Fill in all fields");
      return;
    }

    this.setState({ modal: true });
  };

  handleSubmitOrder = async () => {
    const {
      cartItems,
      city,
      address,
      postalCode,
      confirmationEmailAddress
    } = this.state;

    const amount = calculateAmount(cartItems);
    // Process order
    this.setState({ orderProcessing: true });
    let token;
    try {
      const response = await this.props.stripe.createToken();
      token = response.token.id;
      await strapi.createEntry("orders", {
        amount,
        brews: cartItems,
        city,
        postalCode,
        address,
        token
      });
      await strapi.request("POST", "/email", {
        data: {
          to: confirmationEmailAddress,
          subject: `Order Confirmation - BrewHaha ${new Date(Date.now())}`,
          text: "Your order has been processed",
          html: "<bold>Expect your order to arrive in 2-3 shipping days</bold>"
        }
      });
      this.setState({ orderProcessing: false, modal: false });
      clearCart();
      this.showToast("Your order has been successfully submitted!", true);
    } catch (err) {
      this.setState({ orderProcessing: false, modal: false });
      this.showToast(err.message);
    }
  };

  isFormEmpty = ({ address, postalCode, city, confirmationEmailAddress }) => {
    return !address || !postalCode || !city || !confirmationEmailAddress;
  };

  showToast = (toastMessage, redirect = false) => {
    this.setState({ toast: true, toastMessage });
    setTimeout(
      () =>
        this.setState(
          { toast: false, toastMessage: "" },
          // if true passed to 'redirect' argument, redirect home
          () => redirect && this.props.history.push("/")
        ),
      5000
    );
  };

  closeModal = () => this.setState({ modal: false });

  render() {
    // prettier-ignore
    const { toast, toastMessage, cartItems, modal, orderProcessing } = this.state;

    return (
      <Container>
        <Box
          color="darkWash"
          margin={4}
          padding={4}
          shape="rounded"
          display="flex"
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          {/* Checkout Form Heading */}
          <Heading color="midnight">Checkout</Heading>
          {cartItems.length > 0 ? (
            <React.Fragment>
              {/* User Cart */}
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                direction="column"
                marginTop={2}
                marginBottom={6}
              >
                <Text color="darkGray" italic>
                  {cartItems.length} Items for Checkout
                </Text>
                <Box padding={2}>
                  {cartItems.map(item => (
                    <Box key={item._id} padding={1}>
                      <Text color="midnight">
                        {item.name} x {item.quantity} - $
                        {item.quantity * item.price}
                      </Text>
                    </Box>
                  ))}
                </Box>
                <Text bold>Total Amount: {calculatePrice(cartItems)}</Text>
              </Box>
              {/* Checkout Form */}
              <form
                style={{
                  display: "inlineBlock",
                  textAlign: "center",
                  maxWidth: 450
                }}
                onSubmit={this.handleConfirmOrder}
              >
                {/* Shipping Address Input */}
                <TextField
                  id="address"
                  type="text"
                  name="address"
                  placeholder="Shipping Address"
                  onChange={this.handleChange}
                />
                {/* Postal Code Input */}
                <TextField
                  id="postalCode"
                  type="text"
                  name="postalCode"
                  placeholder="Postal Code"
                  onChange={this.handleChange}
                />
                {/* City Input */}
                <TextField
                  id="city"
                  type="text"
                  name="city"
                  placeholder="City of Residence"
                  onChange={this.handleChange}
                />
                {/* Confirmation Email Address Input */}
                <TextField
                  id="confirmationEmailAddress"
                  type="email"
                  name="confirmationEmailAddress"
                  placeholder="Confirmation Email Address"
                  onChange={this.handleChange}
                />
                {/* Credit Card Element */}
                <CardElement
                  id="stripe__input"
                  onReady={input => input.focus()}
                />
                <button id="stripe__button" type="submit">
                  Submit
                </button>
              </form>
            </React.Fragment>
          ) : (
            // Default Text if No Items in Cart
            <Box color="darkWash" shape="rounded" padding={4}>
              <Heading align="center" color="watermelon" size="xs">
                Your Cart is Empty
              </Heading>
              <Text align="center" italic color="green">
                Add some brews!
              </Text>
            </Box>
          )}
        </Box>
        {/* Confirmation Modal */}
        {modal && (
          <ConfirmationModal
            orderProcessing={orderProcessing}
            cartItems={cartItems}
            closeModal={this.closeModal}
            handleSubmitOrder={this.handleSubmitOrder}
          />
        )}
        <ToastMessage show={toast} message={toastMessage} />
      </Container>
    );
  }
}

const ConfirmationModal = ({
  orderProcessing,
  cartItems,
  closeModal,
  handleSubmitOrder
}) => (
  <Modal
    accessibilityCloseLabel="close"
    accessibilityModalLabel="Confirm Your Order"
    heading="Confirm Your Order"
    onDismiss={closeModal}
    footer={
      <Box
        display="flex"
        marginRight={-1}
        marginLeft={-1}
        justifyContent="center"
      >
        <Box padding={1}>
          <Button
            size="lg"
            color="red"
            text="Submit"
            disabled={orderProcessing}
            onClick={handleSubmitOrder}
          />
        </Box>
        <Box padding={1}>
          <Button
            size="lg"
            text="Cancel"
            disabled={orderProcessing}
            onClick={closeModal}
          />
        </Box>
      </Box>
    }
    role="alertdialog"
    size="sm"
  >
    {/* Order Summary */}
    {!orderProcessing && (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        direction="column"
        padding={2}
        color="lightWash"
      >
        {cartItems.map(item => (
          <Box key={item._id} padding={1}>
            <Text size="lg" color="red">
              {item.name} x {item.quantity} - ${item.quantity * item.price}
            </Text>
          </Box>
        ))}
        <Box paddingY={2}>
          <Text size="lg" bold>
            Total: {calculatePrice(cartItems)}
          </Text>
        </Box>
      </Box>
    )}

    {/* Order Processing Spinner */}
    <Spinner
      show={orderProcessing}
      accessibilityLabel="Order Processing Spinner"
    />
    {orderProcessing && (
      <Text align="center" italic>
        Submitting Order...
      </Text>
    )}
  </Modal>
);

const CheckoutForm = withRouter(injectStripe(_CheckoutForm));

const Checkout = () => (
  <StripeProvider apiKey="pk_test_TAxyscASw6HzuArW1lBMAqvI">
    <Elements>
      <CheckoutForm />
    </Elements>
  </StripeProvider>
);

export default Checkout;
```

- We need to give permission to the authenticated user to use the `email` plugin:

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SendConfirmationEmailUponCheckout.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SendConfirmationEmailUponCheckout2.png)

- We can try know to see if the `email` is sent when the order is `processed`.

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SendConfirmationEmailUponCheckout3.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SendConfirmationEmailUponCheckout4.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SendConfirmationEmailUponCheckout5.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SendConfirmationEmailUponCheckout6.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SendConfirmationEmailUponCheckout7.png)

- It doesn't seem the email has been sent, so I've modified the `server/plugins/controllers/Email.js` document to put a valid `sender`.
  > server/plugins/controllers/Email.js

```js
send: async ctx => {
  // Retrieve provider configuration.
  const config = await strapi
    .store({
      environment: strapi.config.environment,
      type: "plugin",
      name: "email"
    })
    .get({ key: "provider" });

  // Verify if the file email is enable.
  if (config.enabled === false) {
    strapi.log.error("Email is disabled");
    return ctx.badRequest(
      null,
      ctx.request.admin
        ? [{ messages: [{ id: "Email.status.disabled" }] }]
        : "Emailis disabled"
    );
  }

  // Something is wrong
  if (ctx.status === 400) {
    return;
  }

  let options = ctx.request.body;

  // await strapi.plugins.email.services.email.send(options, config);
  try {
    // Send email to the user
    await strapi.plugins["email"].services.email.send({
      to: options.to,
      from: "juanp_perez@msn.com",
      subject: options.subject,
      text: options.text,
      html: options.html
    });
  } catch (err) {
    return ctx.badRequest(null, err);
  }
  // Send 200 `ok`
  ctx.send({});
};
```

- The order will be cretae and process again:

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SendConfirmationEmailUponCheckout8.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SendConfirmationEmailUponCheckout9.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SendConfirmationEmailUponCheckout10.png)

- The email has been received with success:

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SendConfirmationEmailUponCheckout11.png)

SendConfirmationEmailUponCheckout12

## Section 12 BONUS #2: Search with GraphQL, Mobile Design, UI Features 15min

### 50. Search with GraphQL and where / field_contains (Optional) 8min

- The main `Strapi content type` queries contain a `where` parameter that can be used to filter the `content type` records returned by the `query`.

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SearchWithGraphQLAndWhere_field_contains.png)

> Query

```graphql
query {
  brands(where: { name_contains: "s" }) {
    _id
    name
    createdAt
    description
    image {
      url
    }
  }
}
```

> Response

```json
{
  "data": {
    "brands": [
      {
        "_id": "5cca8959d148472accdb4309",
        "name": "Goose Island",
        "createdAt": "2019-05-02T06:08:25.302Z",
        "description": "Goose Island Brewery is a Chicago brewery that makes a number of IPAs, both seasonal and year-round",
        "image": {
          "url": "/uploads/d48dba686a5d406b9c76fad3dcdc5aee.png"
        }
      },
      {
        "_id": "5ccb26a00f457953ecc2b22b",
        "name": "Solera",
        "createdAt": "2019-05-02T17:19:28.228Z",
        "description": "Solera Brewery is based out of Parkdale, Oregon and has a passion for creating delicious beers",
        "image": {
          "url": "/uploads/0b2ecabbb8a644008ef2858c2a5fd4be.png"
        }
      }
    ]
  }
}
```

> Query

```graphql
query {
  brands(where: { name_contains: "Soler" }) {
    _id
    name
    createdAt
    description
    image {
      url
    }
  }
}
```

> Response

```json
{
  "data": {
    "brands": [
      {
        "_id": "5ccb26a00f457953ecc2b22b",
        "name": "Solera",
        "createdAt": "2019-05-02T17:19:28.228Z",
        "description": "Solera Brewery is based out of Parkdale, Oregon and has a passion for creating delicious beers",
        "image": {
          "url": "/uploads/0b2ecabbb8a644008ef2858c2a5fd4be.png"
        }
      }
    ]
  }
}
```

- We need to ensure that the permissions for the `find` and `findone` Brands methods has `None` value for the `Allow to perform this action for:` setting.

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SearchWithGraphQLAndWhere_field_contains2.png)

- We are going to modify the `App` component to show the header for all the `Brands`

> client/src/components/App.js

```js
```

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SearchWithGraphQLAndWhere_field_contains3.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SearchWithGraphQLAndWhere_field_contains4.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SearchWithGraphQLAndWhere_field_contains5.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SearchWithGraphQLAndWhere_field_contains6.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SearchWithGraphQLAndWhere_field_contains7.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/SearchWithGraphQLAndWhere_field_contains8.png)

## 51. Make App Fully Mobile-Compatible (Optional) 7min

- Even though the app is responsive it doesn't seem to look well on smartphones devices:

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/MakeAppFullyMobileCompatible.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/MakeAppFullyMobileCompatible2.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/MakeAppFullyMobileCompatible3.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/MakeAppFullyMobileCompatible4.png)

- We are going to update the `src/components/App.css` document and the `NavBar` component to hide the `BrewHaha` title depending on the size using media queries.

> src/components/App.css

```css
html,
body {
  margin: 0;
  background-color: #f6f9fc;
}

a,
a:link,
a:visited {
  text-decoration: none;
}

.active {
  font-style: italic;
}

form input {
  margin-bottom: 0.5em;
}

#stripe__button {
  white-space: nowrap;
  border: 0;
  outline: 0;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  padding: 0 14px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  color: #fff;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  background-color: #6772e5;
  text-decoration: none;
  transition: all 150ms ease;
  margin-top: 10px;
}

#stripe__button:hover {
  color: #fff;
  cursor: pointer;
  background-color: #7795f8;
  transform: translateY(-1px);
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
}

.StripeElement {
  display: block;
  margin: 10px 0 20px 0;
  max-width: 500px;
  padding: 10px 14px;
  font-size: 1em;
  font-family: monospace;
  box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px, rgba(0, 0, 0, 0.0196078) 0px
      1px 0px;
  border: 0;
  outline: 0;
  border-radius: 4px;
  background: white;
}

.StripeElement--focus {
  box-shadow: rgba(50, 50, 93, 0.109804) 0px 4px 6px, rgba(0, 0, 0, 0.0784314) 0px
      1px 3px;
  transition: all 150ms ease;
}

/* Media Queries */
@media (max-width: 400px) {
  .main-title {
    display: none;
  }
}
```

> src/components/NavBar.js

```js
import React from "react";
import { Box, Text, Heading, Image, Button } from "gestalt";
import { getToken, clearToken, clearCart } from "../utils";
import { NavLink, withRouter } from "react-router-dom";

class Navbar extends React.Component {
  handleSignout = () => {
    clearToken();
    clearCart();
    this.props.history.push("/");
  };

  render() {
    return getToken() !== null ? (
      <AuthNav handleSignout={this.handleSignout} />
    ) : (
      <UnAuthNav />
    );
  }
}

const AuthNav = ({ handleSignout }) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="around"
    height={70}
    color="midnight"
    padding={1}
    shape="roundedBottom"
  >
    {/* Checkout Link */}
    <NavLink activeClassName="active" to="/checkout">
      <Text size="xl" color="white">
        Checkout
      </Text>
    </NavLink>

    {/* Title and Logo */}
    <NavLink activeClassName="active" exact to="/">
      <Box display="flex" alignItems="center">
        <Box margin={2} height={50} width={50}>
          <Image
            alt="BrewHaha Logo"
            naturalHeight={1}
            naturalWidth={1}
            src="./icons/logo.svg"
          />
        </Box>
        <div className="main-title">
          <Heading size="xs" color="orange">
            BrewHaha
          </Heading>
        </div>
      </Box>
    </NavLink>

    {/* Signout Button */}
    <Button
      onClick={handleSignout}
      color="transparent"
      text="Sign Out"
      inline
      size="md"
    />
  </Box>
);

const UnAuthNav = () => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="around"
    height={70}
    color="midnight"
    padding={1}
    shape="roundedBottom"
  >
    {/* Sign In Link */}
    <NavLink activeClassName="active" to="/signin">
      <Text size="xl" color="white">
        Sign In
      </Text>
    </NavLink>

    {/* Title and Logo */}
    <NavLink activeClassName="active" exact to="/">
      <Box display="flex" alignItems="center">
        <Box margin={2} height={50} width={50}>
          <Image
            alt="BrewHaha Logo"
            naturalHeight={1}
            naturalWidth={1}
            src="./icons/logo.svg"
          />
        </Box>
        {/* Title */}
        <div className="main-title">
          <Heading size="xs" color="orange">
            BrewHaha
          </Heading>
        </div>
      </Box>
    </NavLink>

    {/* Sign Up Link */}
    <NavLink activeClassName="active" to="/signup">
      <Text size="xl" color="white">
        Sign Up
      </Text>
    </NavLink>
  </Box>
);

export default withRouter(Navbar);
```

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/MakeAppFullyMobileCompatible5.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/MakeAppFullyMobileCompatible6.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/MakeAppFullyMobileCompatible7.png)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/MakeAppFullyMobileCompatible8.png)

## Section 13 BONUS 1min

### 52. Bonus Lecture 1min

- Browse to [codeartistry.io](https://codeartistry.io/)

![](/images/other/graphql-build-an-online-store-with-react-and-graphql-in-90-minutes/BonusLecture.png)
