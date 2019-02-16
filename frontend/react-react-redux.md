# Modern React with Redux

> Github Repositories
- [ReduxSimpleBlog](https://github.com/peelmicro/ReduxSimpleBlog).
- [ReactFirstApp](https://github.com/peelmicro/ReactFirstApp).
- [ReduxFirstApp](https://github.com/peelmicro/ReduxFirstApp).
- [ReduxWeatherForecast](https://github.com/peelmicro/ReduxWeatherForecast).
- [ReduxThunk](https://github.com/peelmicro/ReduxThunk).
- [react-hooks](https://github.com/peelmicro/react-hooks).

The [Modern React with Redux](https://www.udemy.com/react-redux/) Udemy course teaches how to Master React v16.6.3 and Redux with React Router, Webpack, and Create-React-App. Includes Hooks!.

> Table of contents
[[toc]]

## What I've learned
- Build amazing single page applications with React JS and Redux
- Master fundamental concepts behind structuring Redux applications
- Realize the power of building composable components
- Be the engineer who explains how Redux works to everyone else, because you know the fundamentals so well
- Become fluent in the toolchain supporting React, including NPM, Webpack, Babel, and ES6/ES2015 Javascript syntax

## React Hooks
### Introduction
1. Differences between `Class-Based Components` and `Function-Based Componets`
- Without `Hooks`

![](/images/frontend/react-react-redux/Introduction.png)

- With `Hooks`, we have a different approach for `State`and `Lifecycle Methods`

![](/images/frontend/react-react-redux/Introduction2.png)

2. Create a simple application
```bash
C:\Users\juan.pablo.perez\OneDrive\Training\React\react-hooks>create-react-app hooks-simple

Creating a new React app in C:\Users\juan.pablo.perez\OneDrive\Training\React\react-hooks\hooks-simple.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts...

yarn add v1.12.3
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@1.2.4: The platform "win32" is incompatible with this module.
info "fsevents@1.2.4" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[4/4] Building fresh packages...

success Saved lockfile.
success Saved 6 new dependencies.
info Direct dependencies
├─ react-dom@16.7.0
├─ react-scripts@2.1.1
└─ react@16.7.0
info All dependencies
├─ babel-preset-react-app@6.1.0
├─ react-dev-utils@6.1.1
├─ react-dom@16.7.0
├─ react-error-overlay@5.1.0
├─ react-scripts@2.1.1
└─ react@16.7.0
Done in 137.34s.

Initialized a git repository.

Success! Created hooks-simple at C:\Users\juan.pablo.perez\OneDrive\Training\React\react-hooks\hooks-simple
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

  cd hooks-simple
  yarn start

Happy hacking!
```
3. Ensure we are using the latest version of `React` because the current stable version doesn't include `hooks` yet.

```bash
C:\Users\juan.pablo.perez\OneDrive\Training\React\react-hooks>cd hooks-simple

C:\Users\juan.pablo.perez\OneDrive\Training\React\react-hooks\hooks-simple>npm install --save react@next react-dom@next
npm WARN deprecated kleur@2.0.2: Please upgrade to kleur@3 or migrate to 'ansi-colors' if you prefer the old syntax. Visit <https://github.com/lukeed/kleur/releases/tag/v3.0.0\> for migration path(s).
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\react-hooks\hooks-simple\node_modules\.bin\jest.cmd as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\react-hooks\hooks-simple\node_modules\jest
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\react-hooks\hooks-simple\node_modules\.bin\jest as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\react-hooks\hooks-simple\node_modules\jest
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\react-hooks\hooks-simple\node_modules\.bin\regjsparser.cmd as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\react-hooks\hooks-simple\node_modules\regjsparser
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\react-hooks\hooks-simple\node_modules\.bin\regjsparser as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\react-hooks\hooks-simple\node_modules\regjsparser
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\react-hooks\hooks-simple\node_modules\.bin\jsesc.cmd as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\react-hooks\hooks-simple\node_modules\jsesc
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\react-hooks\hooks-simple\node_modules\.bin\jsesc as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\react-hooks\hooks-simple\node_modules\jsesc
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\react-hooks\hooks-simple\node_modules\.bin\esparse.cmd as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\react-hooks\hooks-simple\node_modules\esprima
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\react-hooks\hooks-simple\node_modules\.bin\esvalidate.cmd as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\react-hooks\hooks-simple\node_modules\esprima
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\react-hooks\hooks-simple\node_modules\.bin\esparse as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\react-hooks\hooks-simple\node_modules\esprima
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\react-hooks\hooks-simple\node_modules\.bin\esvalidate as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\react-hooks\hooks-simple\node_modules\esprima
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\react-hooks\hooks-simple\node_modules\.bin\cssesc.cmd as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\react-hooks\hooks-simple\node_modules\cssesc
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\react-hooks\hooks-simple\node_modules\.bin\cssesc as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\react-hooks\hooks-simple\node_modules\cssesc
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ react-dom@16.7.0-alpha.2
+ react@16.7.0-alpha.2
added 495 packages from 183 contributors, removed 214 packages, updated 1213 packages and audited 35655 packages in 209.37s
found 0 vulnerabilities
```

4. Ensure the new application is running properly

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/React/react-hooks/hooks-simple (master)
$ npm start

> hooks-simple@0.1.0 start C:\Users\juan.pablo.perez\OneDrive\Training\React\react-hooks\hooks-simple
> react-scripts start
Starting the development server...
Compiled successfully!

You can now view hooks-simple in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://172.18.55.225:3000/

Note that the development build is not optimized.
To create a production build, use yarn build.
```

- browse to `http://localhost:3000/` it is has not been executed automatically

![](/images/frontend/react-react-redux/Introduction3.png)

5. Delete everything inside the `src` folder

![](/images/frontend/react-react-redux/Introduction4.png)

6. Create the `index.js` and `App.js` programs.

> `index.js`
```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.querySelector('#root'));

```

> `App.js`
```js
import React from 'react';

class App extends React.Component {
  render() {
    return <div>App</div>
  }
}

export default App;
```

- Ensure the app is correctly running.

![](/images/frontend/react-react-redux/Introduction5.png)

7. Complete the solution using the `Class` approach.

> `App.js`
```js
import React from 'react';

class App extends React.Component {

  state = { resource: 'posts'};

  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.setState({ resource: 'posts'})}>Posts</button>
          <button onClick={() => this.setState({ resource: 'todos'})}>Todos</button>
        </div>
        {this.state.resource}
      </div>
    )
  }
}

export default App;
```

- Ensure the app is correctly running.

![](/images/frontend/react-react-redux/Introduction6.png)

8. Type of Hooks

Name | Goal 
---------|----------
 `useState` | Allow a functional component to use `component-level state`.
 `useEffect` | Allow a functional component to use `lifecycle methods`.
 `useContext` | Allow a functional component to use the `context system`.
 `useRef` | Allow a functional component to use the `ref system`.
 `useReducer` | Allow a functional to store data through a `reducer`.

 9. Transform the `Class-based component` into a `function-based component`

> `App.js`
```js
import React, {useState} from 'react';

const App = () => {
  // First element of the array is the name of the state value
  // Second element of the array is the name of the function used to update the state value
  // We initialize the `resource` value with `posts
  const [resource, setResource] = useState('posts');
  return (
    <div>
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      {resource}
    </div>
  );
}

export default App;
```
- Ensure the app is correctly running.

![](/images/frontend/react-react-redux/Introduction7.png)

![](/images/frontend/react-react-redux/Introduction8.png)

10. Create the `ResourceList` to render the list of records returned by the API.

> `ResourceList.js`
```js
import React from 'react';

class ResouceList extends React.Component {

  render() {
    return <div>{this.props.resource}</div>
  }
}

export default ResouceList;
```

> `App.js`
```js
import React, {useState} from 'react';
import ResourceList from './ResourceList';

const App = () => {
  // First element of the array is the name of the state value
  // Second element of the array is the name of the function used to update the state value
  // We initialize the `resource` value with `posts
  const [resource, setResource] = useState('posts');
  return (
    <div>
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
}

export default App;
```

- Ensure the app is correctly running.

![](/images/frontend/react-react-redux/Introduction9.png)

11. Install `axios`
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/React/react-hooks/hooks-simple (master)
$ npm i --save axios
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ axios@0.18.0
added 1 package from 1 contributor, updated 1 package and audited 35660 packages in 31.223s
found 0 vulnerabilities
```

12. Show the number of records returned by the API

> `ResourceList.js`
```js
import React from 'react';
import axios from 'axios';

class ResouceList extends React.Component {

  state = { resources: [] };

  async componentDidMount() {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
    this.setState({ resources: response.data });
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.resource !== this.props.resource) {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)
      this.setState({ resources: response.data });
    }
  }

  render() {
    return <div>{this.state.resources.length}</div>
  }
}

export default ResouceList;
```
- Ensure the app is correctly running.

![](/images/frontend/react-react-redux/Introduction10.png)

13. Refactor the `ResourceList class-based` component into a `ResourceList function-based` component.

- `useEffect` can be used on `function-based components` instead of `componentDidMount` and `componentDidUpdate` methods on `class-based components`.

![](/images/frontend/react-react-redux/Introduction11.png)

> `ResourceList.js`
```js
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ResouceList = ({resource}) => {

  const [resources, setResources] = useState([]);

  const fecthResource = async (resource) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
    setResources(response.data);
  }

  // The second argument indicates the value that when it is updated it forces the funtion to be called
  // Inside useEffect you always has to define function that is going to be called
  useEffect(() => {
    fecthResource(resource)
  }, [resource])

  return <div>{resources.length}</div>
}

export default ResouceList;
```

![](/images/frontend/react-react-redux/Introduction12.png)

![](/images/frontend/react-react-redux/Introduction13.png)

14. How to avoid having to create a function using useEffect and call the code inside

> `ResourceList.js`
```js
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ResouceList = ({resource}) => {

  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async (resource) => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
      setResources(response.data);
    })(resource);
  }, [resource])

  return <div>{resources.length}</div>
}

export default ResouceList;
```

15. Render the list
![](/images/frontend/react-react-redux/Introduction11.png)

> `ResourceList.js`
```js
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ResouceList = ({resource}) => {

  const [resources, setResources] = useState([]);

  // The second argument indicates the value that when it is updated it forces the funtion to be called
  // Inside useEffect you always has to define function that is going to be called
  useEffect(() => {
    (async (resource) => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
      setResources(response.data);
    })(resource);
  }, [resource])

  return <ul>{resources.map(record => <li key={record.id}>{record.title}</li>)}</ul>
}

export default ResouceList;
```

![](/images/frontend/react-react-redux/Introduction13.png)

16. Refactor to allow reuse the code

![](/images/frontend/react-react-redux/Introduction14.png)

> `ResourceList.js`
```js
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async (resource) => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
      setResources(response.data);
    })(resource);
  }, [resource])

  return resources;
}

const ResouceList = ({resource}) => {

  const resources = useResources(resource);

  return <ul>{resources.map(record => <li key={record.id}>{record.title}</li>)}</ul>
}

export default ResouceList;
```

![](/images/frontend/react-react-redux/Introduction15.png)

17. Move the reused code to another file 

> `useResources.js`
```js
import {useState, useEffect} from 'react';
import axios from 'axios';


const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async (resource) => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
      setResources(response.data);
    })(resource);
  }, [resource])

  return resources;
}

export default useResources;
```

> `ResourceList.js`
```js
import React from 'react';
import useResources from './useResources'

const ResouceList = ({resource}) => {

  const resources = useResources(resource);

  return <ul>{resources.map(record => <li key={record.id}>{record.title}</li>)}</ul>
}

export default ResouceList;
```

![](/images/frontend/react-react-redux/Introduction16.png)

18. Create a new component that it's going to use the new Hook function

> `UserList.js`
```js
import React from 'react';
import useResources from './useResources'

const UserList = () => {

  const users = useResources('users');

  return <ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
}

export default UserList;
```

> `App.js`
```js
import React, {useState} from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
  // First element of the array is the name of the state value
  // Second element of the array is the name of the function used to update the state value
  // We initialize the `resource` value with `posts
  const [resource, setResource] = useState('posts');
  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
}

export default App;
```

![](/images/frontend/react-react-redux/Introduction17.png)

### Migrate the Seasons app to Hooks
1. Copy the Seasons App from the current chapter of the course or from previous chapters

- Install node modules
```bash
$ npm i
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

added 1714 packages from 661 contributors and audited 35563 packages in 175.43s
found 0 vulnerabilities
```

- Ensure it is working

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/React/react-hooks/hooks-seasons
$ npm run start

> seasons@0.1.0 start C:\Users\juan.pablo.perez\OneDrive\Training\React\react-hooks\hooks-seasons
> react-scripts start
```
![](/images/frontend/react-react-redux/SeasonsApp.png)

2. Original code

> `index.js`
```js
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
```

3. Migrate to `function-base` component with Hooks
> `index.js`
```js
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

const  App = () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setErrorMessage(err.message)
    );
  }, [])

  let content;
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = <Spinner message="Please accept location request" />;
  }

  return <div className="border red">{content}</div>;
}

ReactDOM.render(<App />, document.querySelector('#root'));
```

- Ensure ii is working

![](/images/frontend/react-react-redux/SeasonApp2.png)

4. Extract the hook logic to an external file

> `useLocation.js`
```js
import { useState, useEffect } from 'react';

const useLocation = () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setErrorMessage(err.message)
    );
  }, [])  

  //return { lat, errorMessage };
  // Community convention is to use an array
  return [lat, errorMessage];
}

export default useLocation;
```
> `index.js`
```js
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import useLocation from './useLocation';

const  App = () => {

  //const { lat, errorMessage } = useLocation();
  // Community convention is to use an array
  const [lat, errorMessage] = useLocation();

  let content;
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = <Spinner message="Please accept location request" />;
  }

  return <div className="border red">{content}</div>;
}

ReactDOM.render(<App />, document.querySelector('#root'));
```

- Ensure it is working.

![](/images/frontend/react-react-redux/SeasonApp3.png)
