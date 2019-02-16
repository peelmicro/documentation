# React Hooks
> Github Repositories
- [ReactHooks](https://github.com/peelmicro/ReactHooks).

The [React Hooks](https://www.udemy.com/react-hooks/) Udemy course teaches how to learn the future of creating React apps today!

> Table of contents
[[toc]]

## What I've learned
- Understand how React Hooks work in-depth
- Build impressive, real-world applications with React Hooks
- Use React Hooks in place of previous libraries and patterns (i.e. Redux, Higher Order Components, etc.)

## React Hooks Intro
1. Create the `react-hooks-intro` project using the `create-react-app` client
```bash
Creating a new React app in C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-intro.

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
Done in 80.54s.

Initialized a git repository.

Success! Created react-hooks-intro at C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-intro
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

  cd react-hooks-intro
  yarn start

Happy hacking!
```
2. Delete unnecessary files (only App.js and index.js are nedded)

![](/images/frontend/react-react-hooks/hooks-intro.png)

3. Update `index.js` and `App.js`.
> index.js
```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
```

> `App.js`
```js
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>Hello world</div>
    );
  }
}

export default App;
```
4. Check if it is working
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/React/ReactHooksCourse/react-hooks-intro (master)
$ npm run start

> react-hooks-intro@0.1.0 start C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-intro
> react-scripts start
Starting the development server...
Compiled successfully!

You can now view react-hooks-intro in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://172.18.55.225:3000/

Note that the development build is not optimized.
To create a production build, use yarn build.
```
- Browse to `http://localhost:3000/`

![](/images/frontend/react-react-hooks/react-intro2.png)

5. Review documentation on `https://reactjs.org/docs/hooks-intro.html`

![](/images/frontend/react-react-hooks/react-intro3.png)

6. Example of `class-based` componenet.

> `App.js`
```bash
import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1});
  }
  render() {
    return (
      <button onClick={() => this.incrementCount()}>I was clicked {this.state.count} times</button>
    );
  }
}

export default App;
```

![](/images/frontend/react-react-hooks/react-intro4.png)

7. Same example but using a `function-based` component.

- Rename `App.js` to `AppClass.js`

> `index.js`
```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './AppClass';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
```

- Create `AppFunction.js`
> `AppFunction.js`
```js
import React, {useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count+1)
  }  
  return <button onClick={incrementCount}>I was clicked {count} times</button>
}

export default App;
```
> `index.js`
```js
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './AppClass';
import App from './AppFunction';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
```

- If we have the following error is because we don't have a `React` version installed that supports `Hooks`

![](/images/frontend/react-react-hooks/react-intro5.png)

- It has to be at least `16.7.0`
> `package.json`
```json
{
  "name": "react-hooks-intro",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^16.7.0",
    "react-dom": "^16.7.0",
    "react-scripts": "2.1.1"
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

- Update `node` libraries executing `yarn install`

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/React/ReactHooksCourse/react-hooks-intro (master)
$ yarn install
yarn install v1.12.3
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@1.2.4: The platform "win32" is incompatible with this module.
info "fsevents@1.2.4" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[4/4] Building fresh packages...

success Saved lockfile.
Done in 40.25s.
```
- If it still doesn't work execute:

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/React/ReactHooksCourse/react-hooks-intro (master)
$ yarn add -D react@next react-dom@next
yarn add v1.12.3
warning package-lock.json found. Your project contains lock files generated by tools other than Yarn. It is advised not to mix package managers in order to avoid resolution inconsistencies caused
by unsynchronized lock files. To clear this warning, remove package-lock.json.
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@1.2.4: The platform "win32" is incompatible with this module.
info "fsevents@1.2.4" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[4/4] Building fresh packages...

success Saved lockfile.
warning "react" is already in "dependencies". Please remove existing entry first before adding it to "devDependencies".
warning "react-dom" is already in "dependencies". Please remove existing entry first before adding it to "devDependencies".
success Saved 2 new dependencies.
info Direct dependencies
├─ react-dom@16.7.0-alpha.2
└─ react@16.7.0-alpha.2
info All dependencies
├─ react-dom@16.7.0-alpha.2
└─ react@16.7.0-alpha.2
Done in 228.82s.
```

- It changes the `package.json` file
> `package.json`
```json
{
  "name": "react-hooks-intro",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^16.7.0-alpha.2",
    "react-dom": "^16.7.0-alpha.2",
    "react-scripts": "2.1.1"
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

- It is executed correctly now usingn the `function-base` component with `Hooks`.

![](/images/frontend/react-react-hooks/react-intro6.png)

8. Use `Previous State` to ensure we're getting the valid value of the state when we're incrementing it. It's unlikely, but it can happens that we don't get the current value correctly because it is not updated yet.

- We have to modify the `class-based` component like this:

> `AppClass.js`
```js
import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0
  }

  incrementCount = () => {
    this.setState(previousState => ({ count: previousState.count + 1}));
  }
  render() {
    return (
      <button onClick={() => this.incrementCount()}>I was clicked {this.state.count} times</button>
    );
  }
}

export default App;
```

- We have to modify the `function-based` component like this:

> `AppFunction.js`
```js
import React, {useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  }  
  return <button onClick={incrementCount}>I was clicked {count} times</button>
}

export default App;
```

9. Create a `Toggle Light`

- [Fragments](https://reactjs.org/docs/fragments.html) in `React` are used to group a list of children without adding extra nodes to the DOM. We used to need to put a wrap element, like `<div>` when we had more than one children elements.

> `AppClass.js`
```js
import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0,
    isOn: false
  }

  incrementCount = () => {
    this.setState(previousState => ({ count: previousState.count + 1}));
  }

  toggleLight = () => {
    this.setState(previousState => ({ isOn: !previousState.isOn}));
  }

  render() {
    return (
      <>
        <h2>Counter</h2>
        <button onClick={() => this.incrementCount()}>I was clicked {this.state.count} times</button>

        <h2>Toggle Light</h2>
        <div 
          style={{
            height: '50px',
            width: '50px',
            background: this.state.isOn ? 'yellow' : 'grey'
          }}
          onClick={this.toggleLight}
          >
        </div>
      </>
    );
  }
}

export default App;
```

![](/images/frontend/react-react-hooks/react-intro7.png)

> `AppFunction.js`
```js
import React, {useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  }  

  const toggleLight = () => {
    setIsOn(previousIsOn => !previousIsOn);
  }

  return (
    <>
    <h2>Counter</h2>
    <button onClick={incrementCount}>I was clicked {count} times</button>

    <h2>Toggle Light</h2>
    <div 
      style={{
        height: '50px',
        width: '50px',
        background: isOn ? 'yellow' : 'grey'
      }}
      onClick={toggleLight}
      >
    </div>
  </>    
  ) 
}

export default App;
```

![](/images/frontend/react-react-hooks/react-intro8.png)

- Make it nicer using icons:

> `AppFunction.js`
```js
import React, {useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  }  

  const toggleLight = () => {
    setIsOn(previousIsOn => !previousIsOn);
  }

  return (
    <>
    <h2>Counter</h2>
    <button onClick={incrementCount}>I was clicked {count} times</button>

    <h2>Toggle Light</h2>
    <img 
      src={
        isOn 
          ? 'https://icon.now.sh/highlight/fd0'
          : 'https://icon.now.sh/highlight/aaa'
      }
      style={{
        height: '50px',
        width: '50px'
      }}
      alt="Flashlight"
      onClick={toggleLight}
      >
    </img>
  </>    
  ) 
}

export default App;
```

![](/images/frontend/react-react-hooks/react-intro9.png)

10. Use of `useEffect`

- [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect) is used to manage `side effects` (like Mutations, subscriptions, timers, logging) inside of a `function-based` component.

- It is used after any render.

> `AppFunction.js`
```js
import React, {useState, useEffect} from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    document.title = `You have click ${count} times`;
  })

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  }  

  const toggleLight = () => {
    setIsOn(previousIsOn => !previousIsOn);
  }

  return (
    <>
    <h2>Counter</h2>
    <button onClick={incrementCount}>I was clicked {count} times</button>

    <h2>Toggle Light</h2>
    <img 
      src={
        isOn 
          ? 'https://icon.now.sh/highlight/fd0'
          : 'https://icon.now.sh/highlight/aaa'
      }
      style={{
        height: '50px',
        width: '50px'
      }}
      alt="Flashlight"
      onClick={toggleLight}
      >
    </img>
  </>    
  ) 
}

export default App;
```

![](/images/frontend/react-react-hooks/react-intro10.png)

> `AppClass.js`
```js
import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0,
    isOn: false
  }

  componentDidMount() {
    document.title = `You have been clicked ${this.state.count} times`;
  }

  componentDidUpdate() {
    document.title = `You have been clicked ${this.state.count} times`;
  }

  incrementCount = () => {
    this.setState(previousState => ({ count: previousState.count + 1}));
  }

  toggleLight = () => {
    this.setState(previousState => ({ isOn: !previousState.isOn}));
  }

  render() {
    return (
      <>
        <h2>Counter</h2>
        <button onClick={() => this.incrementCount()}>I was clicked {this.state.count} times</button>

        <h2>Toggle Light</h2>
        <div 
          style={{
            height: '50px',
            width: '50px',
            background: this.state.isOn ? 'yellow' : 'grey'
          }}
          onClick={this.toggleLight}
          >
        </div>
      </>
    );
  }
}

export default App;
```

![](/images/frontend/react-react-hooks/react-intro11.png)

11. Cleaning up `Side Effects` with `useEffect`

> `AppClass.js`
```js
import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0,
    isOn: false,
    x: null,
    y: null
  }

  componentDidMount() {
    document.title = `You have been clicked ${this.state.count} times`;
    window.addEventListener('mousemove', this.handleMouseMove);
  }

  componentDidUpdate() {
    document.title = `You have been clicked ${this.state.count} times`;
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
  }

  incrementCount = () => {
    this.setState(previousState => ({ count: previousState.count + 1}));
  }

  toggleLight = () => {
    this.setState(previousState => ({ isOn: !previousState.isOn}));
  }

  handleMouseMove = event => {
    this.setState({
      x: event.pageX,
      y: event.pageY
    })
  }

  render() {
    return (
      <>
        <h2>Counter</h2>
        <button onClick={() => this.incrementCount()}>I was clicked {this.state.count} times</button>

        <h2>Toggle Light</h2>
        <div 
          style={{
            height: '50px',
            width: '50px',
            background: this.state.isOn ? 'yellow' : 'grey'
          }}
          onClick={this.toggleLight}
          >
        </div>

        <h2>Mouse Position</h2>
        <p>X position: {this.state.x}</p>
        <p>Y position: {this.state.y}</p>
      </>
    );
  }
}

export default App;
```

![](/images/frontend/react-react-hooks/react-intro12.png)

> `AppFunction.js`
```js
import React, {useState, useEffect} from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null});

  useEffect(() => {
    document.title = `You have click ${count} times`;
    window.addEventListener('mousemove', handleMouseMove);

    // Here we tell the useEffect what we want to do when the component is unmounted
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []) // As we don't pass any value in the array, it is executed only once.

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  }  

  const toggleLight = () => {
    setIsOn(previousIsOn => !previousIsOn);
  }

  const handleMouseMove = event => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY
    });
  }

  return (
    <>
    <h2>Counter</h2>
    <button onClick={incrementCount}>I was clicked {count} times</button>

    <h2>Toggle Light</h2>
    <img 
      src={
        isOn 
          ? 'https://icon.now.sh/highlight/fd0'
          : 'https://icon.now.sh/highlight/aaa'
      }
      style={{
        height: '50px',
        width: '50px'
      }}
      alt="Flashlight"
      onClick={toggleLight}
      >
    </img>

    <h2>Mouse Position</h2>
    {JSON.stringify(mousePosition, null, 2 )}
    <br />   
  </>    
  ) 
}

export default App;
```

![](/images/frontend/react-react-hooks/react-intro13.png)

- We need to fix the header message because it is not updated now.

> `AppFunction.js`
```js
import React, {useState, useEffect} from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null});

  useEffect(() => {
    document.title = `You have click ${count} times`;
    window.addEventListener('mousemove', handleMouseMove);

    // Here we tell the useEffect what we want to do when the component is unmounted
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [count]) // Every time count changes it is executed.

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  }  

  const toggleLight = () => {
    setIsOn(previousIsOn => !previousIsOn);
  }

  const handleMouseMove = event => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY
    });
  }

  return (
    <>
    <h2>Counter</h2>
    <button onClick={incrementCount}>I was clicked {count} times</button>

    <h2>Toggle Light</h2>
    <img 
      src={
        isOn 
          ? 'https://icon.now.sh/highlight/fd0'
          : 'https://icon.now.sh/highlight/aaa'
      }
      style={{
        height: '50px',
        width: '50px'
      }}
      alt="Flashlight"
      onClick={toggleLight}
      >
    </img>

    <h2>Mouse Position</h2>
    {JSON.stringify(mousePosition, null, 2 )}
    <br />   
  </>    
  ) 
}

export default App;
```

12. Using / Cleaning up `Multiple Listeners` in `useEffect`

> `AppFunction.js`
```js
import React, {useState, useEffect} from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null});
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine)

  useEffect(() => {
    document.title = `You have click ${count} times`;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOfflineStatus);

    // Here we tell the useEffect what we want to do when the component is unmounted
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOfflineStatus);
    }
  }, [count]) // Every time count changes it is executed.

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  }  

  const toggleLight = () => {
    setIsOn(previousIsOn => !previousIsOn);
  }

  const handleMouseMove = event => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY
    });
  }

  const handleOnlineStatus = () => {
    setOnlineStatus(true);
  }

  const handleOfflineStatus = () => {
    setOnlineStatus(false);
  }
  
  return (
    <>
    <h2>Counter</h2>
    <button onClick={incrementCount}>I was clicked {count} times</button>

    <h2>Toggle Light</h2>
    <img 
      src={
        isOn 
          ? 'https://icon.now.sh/highlight/fd0'
          : 'https://icon.now.sh/highlight/aaa'
      }
      style={{
        height: '50px',
        width: '50px'
      }}
      alt="Flashlight"
      onClick={toggleLight}
      >
    </img>

    <h2>Mouse Position</h2>
    {JSON.stringify(mousePosition, null, 2 )}
    <br />   

    <h2>Network Status</h2>
    <p>You are <strong>{onlineStatus ? 'online': 'offline'}</strong></p>
    </>
  ) 
}

export default App;
```

![](/images/frontend/react-react-hooks/react-intro15.png)

![](/images/frontend/react-react-hooks/react-intro16.png)

13. Cleaning up `Listeners without a Supportive API`

> `AppFunction.js`
```js
import React, {useState, useEffect} from 'react';

const initialLocationState = {
  latitude: null,
  longitude: null,
  speed: null
}

const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null});
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);
  const [{latitude, longitude, speed}, setLocation] = useState(initialLocationState);
  let geolocationMounted = true;

  useEffect(() => {
    document.title = `You have click ${count} times`;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOfflineStatus);
    navigator.geolocation.getCurrentPosition(handleGeolocation);
    const geolocationWatchId = navigator.geolocation.watchPosition(handleGeolocation)

    // Here we tell the useEffect what we want to do when the component is unmounted
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOfflineStatus);
      geolocationMounted = false;
      navigator.geolocation.clearWatch(geolocationWatchId);
    }
  }, [count]) // Every time count changes it is executed.

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  }  

  const toggleLight = () => {
    setIsOn(previousIsOn => !previousIsOn);
  }

  const handleMouseMove = event => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY
    });
  }

  const handleOnlineStatus = () => {
    setOnlineStatus(true);
  }

  const handleOfflineStatus = () => {
    setOnlineStatus(false);
  }
  
  const handleGeolocation = event => {
    if (geolocationMounted) {
      setLocation({
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
        speed: event.coords.speed
      })
    }
  }

  return (
    <>
    <h2>Counter</h2>
    <button onClick={incrementCount}>I was clicked {count} times</button>

    <h2>Toggle Light</h2>
    <img 
      src={
        isOn 
          ? 'https://icon.now.sh/highlight/fd0'
          : 'https://icon.now.sh/highlight/aaa'
      }
      style={{
        height: '50px',
        width: '50px'
      }}
      alt="Flashlight"
      onClick={toggleLight}
      >
    </img>

    <h2>Mouse Position</h2>
    {JSON.stringify(mousePosition, null, 2 )}
    <br />   

    <h2>Network Status</h2>
    <p>You are <strong>{onlineStatus ? 'online': 'offline'}</strong></p>

    <h2>Geolocation</h2>
    <p>Latitude is: {latitude}</p>
    <p>Longitude is: {longitude}</p>
    <p>Your speed is: {speed ? speed: '0'}</p>
    </>
  ) 
}

export default App;
```

![](/images/frontend/react-react-hooks/react-intro17.png)

![](/images/frontend/react-react-hooks/react-intro18.png)


14. Creating a `Login` function-base Component using `Hooks`

> `Login.js`
```js
import React, {useState} from 'react'

export default function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();
    const userData = {
      username,
      password
    }
    setUser(userData);
    setUsername("");
    setPassword("");
  }

  return (
    <div
      style={{
        textAlign: 'center'
      }}
    >
      <h2>Login</h2>
      <form
        style={{
          display: 'grid',
          alignItems: 'centre',
          justifyItems: 'center'
        }}
        onSubmit={handleSubmit}
      >
        <input 
          type="text"
          placeholder="Username"
          onChange={event => setUsername(event.target.value)}
          value={username}
        />
        <input 
          type="password"
          placeholder="Password"
          onChange={event => setPassword(event.target.value)}
          value={password}
        />
        <button type="submit">Submit</button>
      </form>
      
      {user && JSON.stringify(user, null, 2)}
    </div>
  )
}
```

![](/images/frontend/react-react-hooks/react-intro19.png)


15. Creating a `Register` Form with a `Hooks` Single State Value.

> `Register.js`
```js
import React, {useState} from 'react'

const initialFormState = {
  username: "",
  email: "",
  password: ""
}

export default function Register() {
  const [form, setForm] = useState(initialFormState)

  const [user, setUser] = useState(null);

  const handleChange = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = event => {
    event.preventDefault();
    setUser(form);
    setForm(initialFormState)
  }
  return (
    <div
    style={{
      textAlign: 'center'
    }}
  >
    <h2>Register</h2>
    <form
      style={{
        display: 'grid',
        alignItems: 'centre',
        justifyItems: 'center'
      }}
      onSubmit={handleSubmit}
    >
      <input 
        type="text"
        placeholder="Username"
        name="username"
        onChange={handleChange}
        value={form.username}
      />
      <input 
        type="email"
        placeholder="Email address"
        name="email"
        onChange={handleChange}
        value={form.email}
      />
      <input 
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleChange}
        value={form.password}
      />
      <button type="submit">Submit</button>
    </form>
    
    {user && JSON.stringify(user, null, 2)}
  </div>
  )
}
```

![](/images/frontend/react-react-hooks/react-intro20.png)

## Use useEffect and useRef for Data Fetching with Hooks
1. Create the `react-hooks-news` project using the `create-react-app` client

```bash
C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse>create-react-app react-hooks-news

Creating a new React app in C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-news.

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
success Saved 17 new dependencies.
info Direct dependencies
├─ react-dom@16.7.0
├─ react-scripts@2.1.2
└─ react@16.7.0
info All dependencies
├─ @babel/runtime@7.1.5
├─ autoprefixer@9.4.3
├─ babel-plugin-transform-react-remove-prop-types@0.4.20
├─ babel-preset-react-app@7.0.0
├─ cssdb@4.3.0
├─ eslint-config-react-app@3.0.6
├─ postcss-color-gray@5.0.0
├─ postcss-custom-media@7.0.7
├─ postcss-custom-properties@8.0.9
├─ postcss-double-position-gradients@1.0.0
├─ postcss-preset-env@6.3.1
├─ react-app-polyfill@0.2.0
├─ react-dev-utils@7.0.0
├─ react-dom@16.7.0
├─ react-error-overlay@5.1.1
├─ react-scripts@2.1.2
└─ react@16.7.0
Done in 88.12s.

Initialized a git repository.

Success! Created react-hooks-news at C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-news
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

  cd react-hooks-news
  yarn start

Happy hacking!
```
2. Ensure we're using the latest version of `React` and install `axios` as well.

```bash
C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse>cd react-hooks-news

C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-news>npm i react@next react-dom@next axios
npm WARN deprecated kleur@2.0.2: Please upgrade to kleur@3 or migrate to 'ansi-colors' if you prefer the old syntax. Visit <https://github.com/lukeed/kleur/releases/tag/v3.0.0\> for migration path(s).
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-news\node_modules\.bin\jest.cmd as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-news\node_modules\jest
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-news\node_modules\.bin\jest as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-news\node_modules\jest
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-news\node_modules\.bin\browserslist.cmd as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-news\node_modules\browserslist
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-news\node_modules\.bin\browserslist as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-news\node_modules\browserslist
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-news\node_modules\.bin\regjsparser.cmd as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-news\node_modules\regjsparser
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-news\node_modules\.bin\regjsparser as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-news\node_modules\regjsparser
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-news\node_modules\.bin\json5.cmd as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-news\node_modules\json5
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-news\node_modules\.bin\json5 as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-news\node_modules\json5
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-news\node_modules\.bin\jsesc.cmd as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-news\node_modules\jsesc
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-news\node_modules\.bin\jsesc as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-news\node_modules\jsesc
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-news\node_modules\.bin\esparse.cmd as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-news\node_modules\esprima
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-news\node_modules\.bin\esvalidate.cmd as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-news\node_modules\esprima
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-news\node_modules\.bin\esparse as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-news\node_modules\esprima
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-news\node_modules\.bin\esvalidate as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-news\node_modules\esprima
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-news\node_modules\.bin\cssesc.cmd as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-news\node_modules\cssesc
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-news\node_modules\.bin\cssesc as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-news\node_modules\cssesc
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ axios@0.18.0
+ react@16.7.0-alpha.2
+ react-dom@16.7.0-alpha.2
added 476 packages from 189 contributors, removed 361 packages, updated 1224 packages and audited 35695 packages in 233.834s
found 0 vulnerabilities
```

3. Remove the `*.css`, `logo.svg` and `test` files.

![](/images/frontend/react-react-hooks/react-news.png)

4. Clean up the `App.js` and `index.js`

> `App.js`
```js
import React from 'react';

export default function App() {
  return (
    <div>App</div>
  )
}
```

> `Index.js`
```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/React/ReactHooksCourse/react-hooks-news (master)
$ npm run start

> react-hooks-news@0.1.0 start C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-news
> react-scripts start
Starting the development server...
Compiled successfully!

You can now view react-hooks-news in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://172.18.55.225:3000/

Note that the development build is not optimized.
To create a production build, use yarn build.
```

![](/images/frontend/react-react-hooks/react-new2.png)

4. Fetching Data on component Mount with `useEffect`

> `App.js`
```js
import React, {useState, useEffect} from 'react';
import axios from 'axios'

export default function App() {

  const [results, setResults] = useState([])
  useEffect(() => {
    axios.get('http://hn.algolia.com/api/v1/search?query=reacthooks')
      .then(response => {
        console.log(response.data);
        setResults(response.data.hits);
      });
  }, [])

  return (
    <>
    <ul>
      {results.map(result => (
        <li key={result.objectID}>
          <a href={result.url}>{result.title}</a>
        </li>
      ))}
    </ul>
    </>
  )
}
```

![](/images/frontend/react-react-hooks/react-new3.png)

5. Using Async / Await for Fetching Data in `useEffect`

> `App.js`
```js
import React, {useState, useEffect} from 'react';
import axios from 'axios'

export default function App() {

  const [results, setResults] = useState([])

  useEffect(() => {
    getResult();
  }, [])

  const getResult = async () => {
    const response = await axios.get('http://hn.algolia.com/api/v1/search?query=reacthooks');
    setResults(response.data.hits);
  }

  return (
    <>
    <ul>
      {results.map(result => (
        <li key={result.objectID}>
          <a href={result.url}>{result.title}</a>
        </li>
      ))}
    </ul>
    </>
  )
}
```

![](/images/frontend/react-react-hooks/react-new4.png)

6. Fetching Search Results on Component Update with useEffect

> `App.js`
```js
import React, {useState, useEffect} from 'react';
import axios from 'axios'

export default function App() {

  const [results, setResults] = useState([])
  const [query, setQuery] = useState('reacthooks');

  useEffect(() => {
    getResult();
  }, [query])

  const getResult = async () => {
    const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`);
    setResults(response.data.hits);
  }

  return (
    <>
    <input type="text" onChange={event => setQuery(event.target.value)}/>
    <ul>
      {results.map(result => (
        <li key={result.objectID}>
          <a href={result.url}>{result.title}</a>
        </li>
      ))}
    </ul>
    </>
  )
}
```

![](/images/frontend/react-react-hooks/react-new5.png)

7. Fetching Data upon Submitting Form

> `App.js`
```js
import React, {useState, useEffect} from 'react';
import axios from 'axios'

export default function App() {

  const [results, setResults] = useState([])
  const [query, setQuery] = useState('react hooks');

  useEffect(() => {
    getResults();
  }, [])

  const getResults = async () => {
    const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`);
    setResults(response.data.hits);
  }

  const handleSearch = event => {
    event.preventDefault();
    getResults();
  }

  return (
    <>
    <form
      onSubmit={handleSearch}
    >
      <input 
        type="text" 
        onChange={event => setQuery(event.target.value)}
        value={query}
      />
      <button type="submit">Search</button>
    </form>
    <ul>
      {results.map(result => (
        <li key={result.objectID}>
          <a href={result.url}>{result.title}</a>
        </li>
      ))}
    </ul>
    </>
  )
}
```

![](/images/frontend/react-react-hooks/react-new6.png)

8. Using the `useRef` Hook on our Search Input

- We can manage Ref for a `funxtion-based` component by using [useRef](https://reactjs.org/docs/hooks-reference.html#useref) that returns a mutable ref object whose `.current` property is initialized to the passed argument (`initialValue`). The returned object will persist for the full lifetime of the component.

> `App.js`
```js
import React, {useState, useEffect, useRef } from 'react';
import axios from 'axios'

export default function App() {

  const [results, setResults] = useState([])
  const [query, setQuery] = useState('react hooks');
  const searchInputRef = useRef();

  useEffect(() => {
    getResults();
  }, [])

  const getResults = async () => {
    const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`);
    setResults(response.data.hits);
  }

  const handleSearch = event => {
    event.preventDefault();
    getResults();
  }

  const handleClearSearch = event => {
    event.preventDefault();
    setQuery("");
    searchInputRef.current.focus();
  }

  return (
    <>
    <form
      onSubmit={handleSearch}
    >
      <input 
        type="text" 
        onChange={event => setQuery(event.target.value)}
        value={query}
        ref={searchInputRef}
      />
      <button type="submit">Search</button>
      <button 
        type="button"
        onClick={handleClearSearch}
      >Clear</button>
    </form>
    <ul>
      {results.map(result => (
        <li key={result.objectID}>
          <a href={result.url}>{result.title}</a>
        </li>
      ))}
    </ul>
    </>
  )
}
```

![](/images/frontend/react-react-hooks/react-new7.png)

9. `Displaying Loading` State with `useState` 

> `App.js`
```js
import React, {useState, useEffect, useRef } from 'react';
import axios from 'axios'

export default function App() {

  const [results, setResults] = useState([])
  const [query, setQuery] = useState('react hooks');
  const [loading, setLoading] = useState(false);
  const searchInputRef = useRef();

  useEffect(() => {
    getResults();
  }, [])

  const getResults = async () => {
    setLoading(true);
    const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`);
    setResults(response.data.hits);
    setLoading(false);
  }

  const handleSearch = event => {
    event.preventDefault();
    getResults();
  }

  const handleClearSearch = event => {
    event.preventDefault();
    setQuery("");
    searchInputRef.current.focus();
  }

  return (
    <>
    <form
      onSubmit={handleSearch}
    >
      <input 
        type="text" 
        onChange={event => setQuery(event.target.value)}
        value={query}
        ref={searchInputRef}
      />
      <button type="submit">Search</button>
      <button 
        type="button"
        onClick={handleClearSearch}
      >Clear</button>
    </form>
    { loading ? (
        <div>Loading results...</div>
      ) : (
        <ul>
          {results.map(result => (
            <li key={result.objectID}>
              <a href={result.url}>{result.title}</a>
            </li>
          ))}
        </ul>
      )
    }
    </>
  )
}
```

![](/images/frontend/react-react-hooks/react-new8.png)

10. `Error Handling` and `Displaying Errors` with `useState` 

> `App.js`
```js
import React, {useState, useEffect, useRef } from 'react';
import axios from 'axios'

export default function App() {

  const [results, setResults] = useState([])
  const [query, setQuery] = useState('react hooks');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const searchInputRef = useRef();

  useEffect(() => {
    getResults();
  }, [])

  const getResults = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`);
      setResults(response.data.hits);     
    } catch (error) {
      setError(error)
    }

    setLoading(false);
  }

  const handleSearch = event => {
    event.preventDefault();
    getResults();
  }

  const handleClearSearch = event => {
    event.preventDefault();
    setQuery("");
    setError("");
    searchInputRef.current.focus();
  }

  return (
    <>
    <form
      onSubmit={handleSearch}
    >
      <input 
        type="text" 
        onChange={event => setQuery(event.target.value)}
        value={query}
        ref={searchInputRef}
      />
      <button type="submit">Search</button>
      <button 
        type="button"
        onClick={handleClearSearch}
      >Clear</button>
    </form>
    { loading ? (
        <div>Loading results...</div>
      ) : (
        <ul>
          {results.map(result => (
            <li key={result.objectID}>
              <a href={result.url}>{result.title}</a>
            </li>
          ))}
        </ul>
      )
    }

    {error && <div>{error.message}</div>}
    </>
  )
}
```

![](/images/frontend/react-react-hooks/react-new9.png)

11. Styling our Project with `TailwindCSS` 

- We can style our project using the [Tailwind CSS Framework](https://tailwindcss.com/)

![](/images/frontend/react-react-hooks/react-new10.png)

- We can find the link on [cdnjs](https://cdnjs.com/)

![](/images/frontend/react-react-hooks/react-new11.png)

- Modify `index.html` to include the new `TailwindCSS` library

> `index.html`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="theme-color" content="#000000" />
    <!--
      manifest.json provides metadata used when your web app is added to the
      homescreen on Android. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/0.7.3/tailwind.min.css">
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
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
- Make the app update whenever we change anything they are inmediately applied.

> `index.js`
```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
```

> `App.js`
```js
import React, {useState, useEffect, useRef } from 'react';
import axios from 'axios'

export default function App() {

  const [results, setResults] = useState([])
  const [query, setQuery] = useState('react hooks');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const searchInputRef = useRef();

  useEffect(() => {
    getResults();
  }, [])

  const getResults = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`);
      setResults(response.data.hits);     
    } catch (error) {
      setError(error)
    }

    setLoading(false);
  }

  const handleSearch = event => {
    event.preventDefault();
    getResults();
  }

  const handleClearSearch = event => {
    event.preventDefault();
    setQuery("");
    setError("");
    searchInputRef.current.focus();
  }

  return (
    <div className="container max-w-md mx-auto p-4 m-2 bg-purple-lightest shadow-lg rounded">
    <img 
      src="https://icon.now.sh/react/c0c" 
      alt="React logo" 
      className="float-right h-12"
    />
    <h1 className="text-grey-darkets font-thin">Hook News</h1>
    <form
      onSubmit={handleSearch}
      className="mb-2"
    >
      <input 
        type="text" 
        onChange={event => setQuery(event.target.value)}
        value={query}
        ref={searchInputRef}
        className="border p-1 rounded"
      />
      <button 
        type="submit"
        className="bg-orange rounded m-1 p-1"
      >Search</button>
      <button 
        type="button"
        onClick={handleClearSearch}
        className="bg-teal text-white rounded p-1"
      >Clear</button>
    </form>
    { loading ? (
        <div className="font-bold text-orange-dark">Loading results...</div>
      ) : (
        <ul className="list-reset leading-normal">
          {results.map(result => (
            <li key={result.objectID}>
              <a 
                href={result.url}
                className="text-indigo-dark hover:text-indigo-darkest"
              >{result.title}</a>
            </li>
          ))}
        </ul>
      )
    }

    {error && <div className="text-red font-bold">{error.message}</div>}
    </div>
  )
}
```

![](/images/frontend/react-react-hooks/react-new12.png)

## Building a Complete CRUD App with React Hooks / Replacing Redux

1. Create the `react-hooks-news` project using the `create-react-app` client

```bash
C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse>create-react-app react-hooks-todos

Creating a new React app in C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-todos.

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
success Saved 17 new dependencies.
info Direct dependencies
├─ react-dom@16.7.0
├─ react-scripts@2.1.2
└─ react@16.7.0
info All dependencies
├─ @babel/runtime@7.1.5
├─ autoprefixer@9.4.3
├─ babel-plugin-transform-react-remove-prop-types@0.4.20
├─ babel-preset-react-app@7.0.0
├─ cssdb@4.3.0
├─ eslint-config-react-app@3.0.6
├─ postcss-color-gray@5.0.0
├─ postcss-custom-media@7.0.7
├─ postcss-custom-properties@8.0.9
├─ postcss-double-position-gradients@1.0.0
├─ postcss-preset-env@6.3.1
├─ react-app-polyfill@0.2.0
├─ react-dev-utils@7.0.0
├─ react-dom@16.7.0
├─ react-error-overlay@5.1.1
├─ react-scripts@2.1.2
└─ react@16.7.0
Done in 75.44s.

Initialized a git repository.

Success! Created react-hooks-todos at C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-todos
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

  cd react-hooks-todos
  yarn start

Happy hacking!
```

2. Ensure we're using the latest version of `React` and install `axios` and `uuid` as well.

```bash
C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse>cd react-hooks-todos

C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-todos>npm i react@next react-dom@next axios uuid
npm WARN deprecated kleur@2.0.2: Please upgrade to kleur@3 or migrate to 'ansi-colors' if you prefer the old syntax. Visit <https://github.com/lukeed/kleur/releases/tag/v3.0.0\> for migration path(s).
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-todos\node_modules\.bin\jest.cmd as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-todos\node_modules\jest
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-todos\node_modules\.bin\jest as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-todos\node_modules\jest
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-todos\node_modules\.bin\browserslist.cmd as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-todos\node_modules\browserslist
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-todos\node_modules\.bin\browserslist as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-todos\node_modules\browserslist
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-todos\node_modules\.bin\regjsparser.cmd as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-todos\node_modules\regjsparser
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-todos\node_modules\.bin\regjsparser as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-todos\node_modules\regjsparser
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-todos\node_modules\.bin\json5.cmd as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-todos\node_modules\json5
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-todos\node_modules\.bin\json5 as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-todos\node_modules\json5
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-todos\node_modules\.bin\jsesc.cmd as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-todos\node_modules\jsesc
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-todos\node_modules\.bin\jsesc as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-todos\node_modules\jsesc
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-todos\node_modules\.bin\esparse.cmd as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-todos\node_modules\esprima
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-todos\node_modules\.bin\esvalidate.cmd as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-todos\node_modules\esprima
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-todos\node_modules\.bin\esparse as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-todos\node_modules\esprima
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-todos\node_modules\.bin\esvalidate as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-todos\node_modules\esprima
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-todos\node_modules\.bin\cssesc.cmd as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-todos\node_modules\cssesc
npm WARN rm not removing C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-todos\node_modules\.bin\cssesc as it wasn't installed by C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-todos\node_modules\cssesc
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ axios@0.18.0
+ react@16.7.0-alpha.2
+ react-dom@16.7.0-alpha.2
+ uuid@3.3.2
added 476 packages from 189 contributors, removed 361 packages, updated 1224 packages and audited 35696 packages in 235.085s
found 0 vulnerabilities
```
3. Modify `index.html` to install `tailwindCSS`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="theme-color" content="#000000" />
    <!--
      manifest.json provides metadata used when your web app is added to the
      homescreen on Android. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/0.7.3/tailwind.min.css">
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
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
4. Remove the `*.css`, `logo.svg` and `test` files.

![](/images/frontend/react-react-hooks/hooks-todos.png)


5. Clean up the `App.js` and `index.js`

> `index.js`
```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
```

> `App.js`
```js
import React from 'react';

export default function App() {
  return (
    <div>App</div>
  );
}
```

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/React/ReactHooksCourse/react-hooks-todos (master)
$ npm start

> react-hooks-todos@0.1.0 start C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-todos
> react-scripts start
Starting the development server...
Compiled successfully!

You can now view react-hooks-todos in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://172.18.55.225:3000/

Note that the development build is not optimized.
To create a production build, use yarn build.
```

![](/images/frontend/react-react-hooks/hooks-todos2.png)

6. Avoiding `Props Drilling` with React Context and the `useContext` Hook

- We can pass values to the components using `Props Drilling`

> `index.js`
```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const username = "Dave";

ReactDOM.render(<App username={username} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

```

> `App.js`
```js
import React from 'react';

export default function App(props) {
  return (
    <div>{props.username}</div>
  );
}
```

![](/images/frontend/react-react-hooks/hooks-todos3.png)

- We can pass values using [React Context](https://reactjs.org/docs/context.html) that provides a way to pass data through the component tree without having to pass props down manually at every level. 

> `index.js`
```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

export const UserContext = React.createContext()

const username = "Dave";

ReactDOM.render(
  <UserContext.Provider value={username}>
    <App />
  </UserContext.Provider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
```

> `App.js`
```js
import React from 'react';
import { UserContext } from './index'

export default function App() {
  return (
    <div>
      <UserContext.Consumer>
        {value => <div>Hello, {value}</div>}
      </UserContext.Consumer>
    </div>
  );
}
```

![](/images/frontend/react-react-hooks/hooks-todos4.png)

- We can use [React useContext](https://reactjs.org/docs/hooks-reference.html#usecontext) that accepts a context object (the value returned from `React.createContext`) and returns the current context value, as given by the nearest context provider for the given context.


> `App.js`
```js
import React, {useContext} from 'react';
import { UserContext } from './index'

export default function App() {
  const value = useContext(UserContext);

  return (
      <div>Hello, {value}</div>
  );
}

```

![](/images/frontend/react-react-hooks/hooks-todos5.png)

7. Replacing `Redux` with the `useReducer Hooks`

- We can use [React Hooks useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer) that is an alternative to `useState`. Accepts a reducer of type `(state, action) => newState`, and returns the current state paired with a `dispatch` method. (If you’re familiar with Redux, you already know how this works.)

> `App.js`
```js
import React, {useContext, useReducer} from 'react';
import { UserContext } from './index'

const initialState = {
  count: 0
}

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1
      }
    default:
      return initialState;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useContext(UserContext);

  return (
    <div>
      Count: {state.count}
      <button hooks-todos6
        className="border p-1"
        onClick={() => dispatch({ type: "increment"})}
      >Increment</button>
      <br />
      <div>Hello, {value}</div>
    </div>
  );
}
```

![](/images/frontend/react-react-hooks/hooks-todos6.png)

- We can implement other states:

> `App.js`
```js
import React, {useContext, useReducer} from 'react';
import { UserContext } from './index'

const initialState = {
  count: 0
}

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1
      };
    case "decrement":
      return {
        count: state.count - 1
      };
    case "reset":
      return initialState;
    default:
      return initialState;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useContext(UserContext);

  return (
    <div>
      Count: {state.count}
      <button 
        className="border p-1 m-1"
        onClick={() => dispatch({ type: "increment"})}
      >Increment</button>
      <button 
        className="border p-1 m-1"
        onClick={() => dispatch({ type: "decrement"})}
      >Decrement</button>
      <button 
        className="border p-1 m-1"
        onClick={() => dispatch({ type: "reset"})}
      >Reset</button>        
      <br />
      <div>Hello, {value}</div>
    </div>
  );
}
```

![](/images/frontend/react-react-hooks/hooks-todos7.png)

8. Combining `useContext` and `useReducer` to make `Initial App State`.

- We are going to remove the current `App.js` component and clean up any use of `UserContext` in `index.js`.

> `index.js`
```js
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <App />
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
```

- Create the generic `context.js` and `reducer.js`
> `context.js`
```js
import React from 'react';

const TodosContext = React.createContext({
  todos: [
    {id: 1, text: 'Eat breakfast', complete: false},
    {id: 2, text: 'Do laundry', complete: false},
    {id: 3, text: 'Finish project', complete: true}
  ]
});

export default TodosContext;
```

> `reducer.js`
```js
export default function reducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}
```

- Create the new 'TodoList' component on the new `components` folder.
> `TodoList.js`
```js
import React, {useContext} from 'react';
import TodosContext from '../context';

export default function TodoList() {
  const {state} = useContext(TodosContext);
  return (
    <div>
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id}>
            <span>{todo.text}</span>
          </li>  
        ))}
      </ul>
    </div>
  )
}
```

- Update the `index.js` to manage the `Initial App State`.
> `index.js`
```js
import React, {useContext, useReducer} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import TodosContext from './context';
import todosReducer from './reducer';
import TodoList from './components/TodoList'

const App = () => {
  const initialState = useContext(TodosContext);
  const [state, dispatch] = useReducer(todosReducer, initialState);
  return (
    <TodosContext.Provider value={{ state, dispatch}}> 
      <TodoList />
    </TodosContext.Provider>
  )
}


ReactDOM.render(
  <App />
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
```

![](/images/frontend/react-react-hooks/hooks-todos8.png)

9. Styling our TodoList Component with `TailwindCSS`

> `TodoList.js`
```js
import React, {useContext} from 'react';
import TodosContext from '../context';

export default function TodoList() {
  const {state} = useContext(TodosContext);
  const title = state.todos.length > 0 ? `${state.todos.length} Todos` : 'Nothing To Do!';
  return (
    <div className="container mx-auto max-w-md text-center font-mono">
      <h1 className="text-bold">{title}</h1>
      <ul className="list-reset text-white p-0">
        {state.todos.map(todo => (
          <li 
            key={todo.id}
            className="flex items-center bg-orange-dark border-black border-dashed border-2 my-2 py-4"
          >
            <span className="flex-1 ml-12 cursor-pointer">{todo.text}</span>
            <button>
              <img 
                src="https://icon.now.sh/edit/0050c5"
                alt="Edit Icon"
                className="h-6"
              />
            </button>
            <button>
              <img 
                src="https://icon.now.sh/delete/8b0000"
                alt="Delete Icon"
                className="h-6"
              />
            </button>
          </li>  
        ))}
      </ul>
    </div>
  )
}
```

![](/images/frontend/react-react-hooks/hooks-todos9.png)

10. Toggling Todos / `TOGGLE_TODO` case.

> `TodoList.js`
```js
import React, {useContext} from 'react';
import TodosContext from '../context';

export default function TodoList() {
  const {state, dispatch } = useContext(TodosContext);
  const title = state.todos.length > 0 ? `${state.todos.length} Todos` : 'Nothing To Do!';
  return (
    <div className="container mx-auto max-w-md text-center font-mono">
      <h1 className="text-bold">{title}</h1>
      <ul className="list-reset text-white p-0">
        {state.todos.map(todo => (
          <li 
            key={todo.id}
            className="flex items-center bg-orange-dark border-black border-dashed border-2 my-2 py-4"
          >
            <span 
              onDoubleClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo})}
              className={`flex-1 ml-12 cursor-pointer ${todo.complete && "line-through text-grey-darkest"}` }
            >{todo.text}</span>
            <button>
              <img 
                src="https://icon.now.sh/edit/0050c5"
                alt="Edit Icon"
                className="h-6"
              />
            </button>
            <button>
              <img 
                src="https://icon.now.sh/delete/8b0000"
                alt="Delete Icon"
                className="h-6"
              />
            </button>
          </li>  
        ))}
      </ul>
    </div>
  )
}
```
> `reducer.js`
```js
export default function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_TODO":
      const toggledTodos = state.todos.map(t => 
        t.id === action.payload.id ? {...action.payload, complete: !action.payload.complete} : t )
      return {
        ...state,
        todos: toggledTodos
      }
    default:
      return state;
  }
}
```

![](/images/frontend/react-react-hooks/hooks-todos10.png)

11. Removing Todos / `REMOVE_TODO` case.

> `TodoList.js`
```js
import React, {useContext} from 'react';
import TodosContext from '../context';

export default function TodoList() {
  const {state, dispatch } = useContext(TodosContext);
  const title = state.todos.length > 0 ? `${state.todos.length} Todos` : 'Nothing To Do!';
  return (
    <div className="container mx-auto max-w-md text-center font-mono">
      <h1 className="text-bold">{title}</h1>
      <ul className="list-reset text-white p-0">
        {state.todos.map(todo => (
          <li 
            key={todo.id}
            className="flex items-center bg-orange-dark border-black border-dashed border-2 my-2 py-4"
          >
            <span 
              onDoubleClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo})}
              className={`flex-1 ml-12 cursor-pointer ${todo.complete && "line-through text-grey-darkest"}` }
            >{todo.text}</span>
            <button>
              <img 
                src="https://icon.now.sh/edit/0050c5"
                alt="Edit Icon"
                className="h-6"
              />
            </button>
            <button
              onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo})}
            >
              <img 
                src="https://icon.now.sh/delete/8b0000"
                alt="Delete Icon"
                className="h-6"
              />
            </button>
          </li>  
        ))}
      </ul>
    </div>
  )
}
```

> `reducer.js`
```js
export default function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_TODO":
      const toggledTodos = state.todos.map(t => 
        t.id === action.payload.id ? {...action.payload, complete: !action.payload.complete} : t )
      return {
        ...state,
        todos: toggledTodos
      }
    case "REMOVE_TODO":
      const removedTodos = state.todos.filter(t => t.id !== action.payload.id);
      return {
        ...state,
        todos: removedTodos
      }      
    default:
      return state;
  }
}
```

![](/images/frontend/react-react-hooks/hooks-todos11.png)

![](/images/frontend/react-react-hooks/hooks-todos12.png)

12. Adding Todos and TodoForm Component / `ADD_TODO` case.

- create the new `TodoForm` component
> `TodoForm.js`
```js
import React, { useState, useContext } from 'react';
import TodosContext from '../context';

export default function TodoForm() {

  const [todo, setTodo] = useState("");
  const { dispatch } = useContext(TodosContext);
  const handleSubmit = event => {
    event.preventDefault();
    dispatch({ type: "ADD_TODO", payload: todo});
    setTodo("");
  }
  return (
    <form 
      onSubmit={handleSubmit}
      className="flex justify-center p-5"
    >
      <input 
        type="text"
        className="border-black border-solid border-2"
        onChange={event => setTodo(event.target.value)}
        value={todo}
      />

    </form>
  )
}
```
> `index.js`
```js
import React, {useContext, useReducer} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import TodosContext from './context';
import todosReducer from './reducer';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const App = () => {
  const initialState = useContext(TodosContext);
  const [state, dispatch] = useReducer(todosReducer, initialState);
  return (
    <TodosContext.Provider value={{ state, dispatch}}> 
      <TodoForm />
      <TodoList />
    </TodosContext.Provider>
  )
}


ReactDOM.render(
  <App />
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
```
> `reducer.js`
```js
import uuidv4 from 'uuid/v4'

export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        id: uuidv4(),
        text: action.payload,
        complete: false
      };
      const addedTodos = [...state.todos, newTodo];
      return {
        ...state,
        todos: addedTodos
      };
    case "TOGGLE_TODO":
      const toggledTodos = state.todos.map(t => 
        t.id === action.payload.id ? {...action.payload, complete: !action.payload.complete} : t );
      return {
        ...state,
        todos: toggledTodos
      };
    case "REMOVE_TODO":
      const removedTodos = state.todos.filter(t => t.id !== action.payload.id);
      return {
        ...state,
        todos: removedTodos
      };
    default:
      return state;
  }
}
```

![](/images/frontend/react-react-hooks/hooks-todos13.png)

13. Updating Todos / `UPDATE_TODO` case.

> `context.js`
```js
import React from 'react';

const TodosContext = React.createContext({
  todos: [
    {id: 1, text: 'Eat breakfast', complete: false},
    {id: 2, text: 'Do laundry', complete: false},
    {id: 3, text: 'Finish project', complete: true}
  ],
  currentTodo: {}
});

export default TodosContext;
```
> `TodoList.js`
```js
import React, {useContext} from 'react';
import TodosContext from '../context';

export default function TodoList() {
  const {state, dispatch } = useContext(TodosContext);
  const title = state.todos.length > 0 ? `${state.todos.length} Todos` : 'Nothing To Do!';
  return (
    <div className="container mx-auto max-w-md text-center font-mono">
      <h1 className="text-bold">{title}</h1>
      <ul className="list-reset text-white p-0">
        {state.todos.map(todo => (
          <li 
            key={todo.id}
            className="flex items-center bg-orange-dark border-black border-dashed border-2 my-2 py-4"
          >
            <span 
              onDoubleClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo})}
              className={`flex-1 ml-12 cursor-pointer ${todo.complete && "line-through text-grey-darkest"}` }
            >{todo.text}</span>
            <button
              onClick={() => dispatch({ type: "SET_CURRENT_TODO", payload: todo})}
            >
              <img 
                src="https://icon.now.sh/edit/0050c5"
                alt="Edit Icon"
                className="h-6"
              />
            </button>
            <button
              onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo})}
            >
              <img 
                src="https://icon.now.sh/delete/8b0000"
                alt="Delete Icon"
                className="h-6"
              />
            </button>
          </li>  
        ))}
      </ul>
    </div>
  )
}
```
> `reducer.js`
```js
import uuidv4 from 'uuid/v4'

export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        id: uuidv4(),
        text: action.payload,
        complete: false
      };
      const addedTodos = [...state.todos, newTodo];
      return {
        ...state,
        todos: addedTodos
      };
    case "SET_CURRENT_TODO":
      return {
        ...state,
        currentTodo: action.payload
      }
    case "TOGGLE_TODO":
      const toggledTodos = state.todos.map(t => 
        t.id === action.payload.id ? {...action.payload, complete: !action.payload.complete} : t );
      return {
        ...state,
        todos: toggledTodos
      };
    case "UPDATE_TODO":
      const updatedTodo = {...state.currentTodo, text: action.payload};
      const updatedTodoIndex = state.todos.findIndex(t => t.id === state.currentTodo.id);
      const updatedTodos = [
        ...state.todos.slice(0, updatedTodoIndex),
        updatedTodo,
        ...state.todos.slice(updatedTodoIndex + 1)
      ];
      return {
        ...state,
        currentTodo: {},
        todos: updatedTodos
      };   
    case "REMOVE_TODO":
      const removedTodos = state.todos.filter(t => t.id !== action.payload.id);
      return {
        ...state,
        todos: removedTodos
      };
    default:
      return state;
  }
}
```
> `reducer.js`
```js
import React, { useState, useEffect, useContext } from 'react';
import TodosContext from '../context';

export default function TodoForm() {

  const [todo, setTodo] = useState("");
  const { state: { currentTodo = {} }, dispatch } = useContext(TodosContext);

  useEffect(() => {
    if (currentTodo.text) {
      setTodo(currentTodo.text)
    }
  }, [currentTodo.id])

  const handleSubmit = event => {
    event.preventDefault();
    const type = currentTodo.text ? "UPDATE_TODO" : "ADD_TODO";
    dispatch({ type, payload: todo});
    setTodo("");
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex justify-center p-5"
    >
      <input 
        type="text"
        className="border-black border-solid border-2"
        onChange={event => setTodo(event.target.value)}
        value={todo}
      />

    </form>
  )
}
```

![](/images/frontend/react-react-hooks/hooks-todos14.png)

14. Improving our App 

- Fix when removing the `todo` that we are currently `editing`

> `reducer.js`
```js
import uuidv4 from 'uuid/v4'

export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        id: uuidv4(),
        text: action.payload,
        complete: false
      };
      const addedTodos = [...state.todos, newTodo];
      return {
        ...state,
        todos: addedTodos
      };
    case "SET_CURRENT_TODO":
      return {
        ...state,
        currentTodo: action.payload
      }
    case "TOGGLE_TODO":
      const toggledTodos = state.todos.map(t => 
        t.id === action.payload.id ? {...action.payload, complete: !action.payload.complete} : t );
      return {
        ...state,
        todos: toggledTodos
      };
    case "UPDATE_TODO":
      const updatedTodo = {...state.currentTodo, text: action.payload};
      const updatedTodoIndex = state.todos.findIndex(t => t.id === state.currentTodo.id);
      const updatedTodos = [
        ...state.todos.slice(0, updatedTodoIndex),
        updatedTodo,
        ...state.todos.slice(updatedTodoIndex + 1)
      ];
      return {
        ...state,
        currentTodo: {},
        todos: updatedTodos
      };   
    case "REMOVE_TODO":
      const removedTodos = state.todos.filter(t => t.id !== action.payload.id);
      const isRemovedTodo = state.currentTodo.id === action.payload.id ? {}: state.currentTodo;
      return {
        ...state,
        currentTodo: isRemovedTodo,
        todos: removedTodos
      };
    default:
      return state;
  }
}
```
> `TodoForm.js`
```js
import React, { useState, useEffect, useContext } from 'react';
import TodosContext from '../context';

export default function TodoForm() {

  const [todo, setTodo] = useState("");
  const { state: { currentTodo = {} }, dispatch } = useContext(TodosContext);

  useEffect(() => {
    if (currentTodo.text) {
      setTodo(currentTodo.text);
    } else {
      setTodo("");
    }
  }, [currentTodo.id])

  const handleSubmit = event => {
    event.preventDefault();
    const type = currentTodo.text ? "UPDATE_TODO" : "ADD_TODO";
    dispatch({ type, payload: todo});
    setTodo("");
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex justify-center p-5"
    >
      <input 
        type="text"
        className="border-black border-solid border-2"
        onChange={event => setTodo(event.target.value)}
        value={todo}
      />

    </form>
  )
}
```

![](/images/frontend/react-react-hooks/hooks-todos15.png)


![](/images/frontend/react-react-hooks/hooks-todos16.png)

- Avoid adding / editing todos with `empty text` and `duplicated` todos

> `reducer.js`
```js
import uuidv4 from 'uuid/v4'

export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      if (!action.payload) {
        return state;
      }
      if (state.todos.findIndex(t => t.text === action.payload) > -1) {
        return state;
      }
      const newTodo = {
        id: uuidv4(),
        text: action.payload,
        complete: false
      };
      const addedTodos = [...state.todos, newTodo];
      return {
        ...state,
        todos: addedTodos
      };
    case "SET_CURRENT_TODO":
      return {
        ...state,
        currentTodo: action.payload
      }
    case "TOGGLE_TODO":
      const toggledTodos = state.todos.map(t => 
        t.id === action.payload.id ? {...action.payload, complete: !action.payload.complete} : t );
      return {
        ...state,
        todos: toggledTodos
      };
    case "UPDATE_TODO":
      if (!action.payload) {
        return state;
      }
      if (state.todos.findIndex(t => t.text === action.payload) > -1) {
        return state;
      }
      const updatedTodo = {...state.currentTodo, text: action.payload};
      const updatedTodoIndex = state.todos.findIndex(t => t.id === state.currentTodo.id);
      const updatedTodos = [
        ...state.todos.slice(0, updatedTodoIndex),
        updatedTodo,
        ...state.todos.slice(updatedTodoIndex + 1)
      ];
      return {
        ...state,
        currentTodo: {},
        todos: updatedTodos
      };   
    case "REMOVE_TODO":
      const removedTodos = state.todos.filter(t => t.id !== action.payload.id);
      const isRemovedTodo = state.currentTodo.id === action.payload.id ? {}: state.currentTodo;
      return {
        ...state,
        currentTodo: isRemovedTodo,
        todos: removedTodos
      };
    default:
      return state;
  }
}
```
## Connecting our App to an API
1. Creating / Deploying our API to Persist App Data

- We are going to use the [Now - Global Serverless Deployments](https://zeit.co/now) Service

![](/images/frontend/react-react-hooks/hooks-todos-api.png)

- click on `JOIN FREE`

![](/images/frontend/react-react-hooks/hooks-todos-api2.png)

- Click on `SIGNUP WITH GITHUB`

![](/images/frontend/react-react-hooks/hooks-todos-api3.png)

- Click on `Authorize Now by ZEIT`

![](/images/frontend/react-react-hooks/hooks-todos-api4.png)

- Click on `Now CLI`

![](/images/frontend/react-react-hooks/hooks-todos-api5.png)

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/React/ReactHooksCourse/react-hooks-todos (master)
$ npm install -g now
C:\Users\juan.pablo.perez\AppData\Roaming\npm\now -> C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\now\download\dist\now

> now@12.1.14 postinstall C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\now
> node download/install.js

> For the source code, check out: https://github.com/zeit/now-cli

> Downloading Now CLI 12.1.14 [====================] 100%

+ now@12.1.14
added 1 package in 14.722s
```
- Dowload the `hooks-api` from the [reedbarger/hooks-api](https://github.com/reedbarger/hooks-api) repository.

![](/images/frontend/react-react-hooks/hooks-todos-api6.png)

- Copy the repository to a local folder and deploy the API using the `now` command.
```bash
C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-api>now login
> We sent an email to juanp_perez@loyaltycrm.com. Please follow the steps provided
  inside it and make sure the security code matches Unusual Anteater.
\ Waiting for your confirmation
```
```bash
From: ZEIT
Sent: Tuesday 25 December 2018 10:11
To: juanp_perez@loyaltycrm.com
Subject: ZEIT Login Verification (code: "Unusual Anteater")

 
Verify your email to log on to ZEIT
Hello peelmicro,
We have received a login attempt with the following code:

Unusual Anteater

To complete the login process, please click the button below:

 

Or copy and paste this URL into your browser:
https://zeit.co/confirm?email=juanp_perez%40loyaltycrm.com&token=I3iNVyCUefRfXGlDvgPNB4jvd

 
If you didn't attempt to log in but received this email, or if the location doesn't match, please ignore this email. If you are concerned about your account's safety, please reply to this email to get in touch with us.
```
![](/images/frontend/react-react-hooks/hooks-todos-api7.png)

```bash
C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-api>now login
> We sent an email to juanp_perez@loyaltycrm.com. Please follow the steps provided
  inside it and make sure the security code matches Unusual Anteater.
√ Email confirmed
> Ready! Authentication token and personal details saved in "~\.now"
```

```bash
C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-api>now
> WARN! You are using an old version of the Now Platform. More: https://zeit.co/docs/v1-upgrade
> Deploying ~\OneDrive\Training\React\ReactHooksCourse\react-hooks-api under peelmicro
> Using Node.js 8.11.3 (default)
> https://todos-api-juwmymcrdh.now.sh [v1] [in clipboard] (bru1) [11s]
> Building…
> ▲ yarn
> yarn install v1.10.0
> [1/4] Resolving packages...
> [2/4] Fetching packages...
> [3/4] Linking dependencies...
> [4/4] Building fresh packages...
> success Saved lockfile.
> Done in 5.66s.
> ▲ Snapshotting deployment
> ▲ Saving deployment image (2.1M)
> Build completed
> Verifying instantiation in bru1
> [0]
> [0] todos-api@1.0.0 start /home/nowuser/src
> [0] json-server data.json
> [0]
> [0]
> [0]   \{^_^}/ hi!
> [0]
> [0]   Loading data.json
> [0]   Done
> [0]
> [0]   Resources
> [0]   http://localhost:3000/todos
> [0]
> [0]   Home
> [0]   http://localhost:3000
> [0]
> [0]   Type s + enter at any time to create a snapshot of the database
> √ Scaled 1 instance in bru1 [24s]
> Success! Deployment ready
```

```bash
C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-api>now
> WARN! You are using an old version of the Now Platform. More: https://zeit.co/docs/v1-upgrade
> Deploying ~\OneDrive\Training\React\ReactHooksCourse\react-hooks-api under peelmicro
> Using Node.js 8.11.3 (default)
> https://todos-api-juwmymcrdh.now.sh [v1] [in clipboard] (bru1) [9s]
> Success! Deployment ready
```

```bash
C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-api>curl https://todos-api-juwmymcrdh.now.sh/todos
[
  {
    "id": 1,
    "text": "Eat breakfast",
    "complete": false
  },
  {
    "id": 2,
    "text": "Do laundry",
    "complete": false
  },
  {
    "id": 3,
    "text": "Finish project",
    "complete": true
  }
]
```

![](/images/frontend/react-react-hooks/hooks-todos-api8.png)

![](/images/frontend/react-react-hooks/hooks-todos-api9.png)

![](/images/frontend/react-react-hooks/hooks-todos-api10.png)

2. Creating a Custom Hook to Fetch Initial App Data 

- Remove the initial todos from `context.js`
> `context.js`
```js
import React from 'react';

const TodosContext = React.createContext({
  todos: [],
  currentTodo: {}
});

export default TodosContext;
```
> `reducer.js`
```js
import uuidv4 from 'uuid/v4'

export default function reducer(state, action) {
  switch (action.type) {
    case "GET_TODOS":
      return {
        ...state,
        todos: action.payload
      };    
    case "ADD_TODO":
      if (!action.payload) {
        return state;
      }
      if (state.todos.findIndex(t => t.text === action.payload) > -1) {
        return state;
      }
      const newTodo = {
        id: uuidv4(),
        text: action.payload,
        complete: false
      };
      const addedTodos = [...state.todos, newTodo];
      return {
        ...state,
        todos: addedTodos
      };
    case "SET_CURRENT_TODO":
      return {
        ...state,
        currentTodo: action.payload
      }
    case "TOGGLE_TODO":
      const toggledTodos = state.todos.map(t => 
        t.id === action.payload.id ? {...action.payload, complete: !action.payload.complete} : t );
      return {
        ...state,
        todos: toggledTodos
      };
    case "UPDATE_TODO":
      if (!action.payload) {
        return state;
      }
      if (state.todos.findIndex(t => t.text === action.payload) > -1) {
        return state;
      }
      const updatedTodo = {...state.currentTodo, text: action.payload};
      const updatedTodoIndex = state.todos.findIndex(t => t.id === state.currentTodo.id);
      const updatedTodos = [
        ...state.todos.slice(0, updatedTodoIndex),
        updatedTodo,
        ...state.todos.slice(updatedTodoIndex + 1)
      ];
      return {
        ...state,
        currentTodo: {},
        todos: updatedTodos
      };   
    case "REMOVE_TODO":
      const removedTodos = state.todos.filter(t => t.id !== action.payload.id);
      const isRemovedTodo = state.currentTodo.id === action.payload.id ? {}: state.currentTodo;
      return {
        ...state,
        currentTodo: isRemovedTodo,
        todos: removedTodos
      };
    default:
      return state;
  }
}
```
> `index.js`
```js
import React, {useContext, useReducer, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import axios from 'axios'
import TodosContext from './context';
import todosReducer from './reducer';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const useAPI = endpoint => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const response = await axios.get(endpoint);
    setData(response.data);
  }

  return data;
}

const App = () => {
  const initialState = useContext(TodosContext);
  const [state, dispatch] = useReducer(todosReducer, initialState);
  const savedTodos = useAPI('https://todos-api-juwmymcrdh.now.sh/todos');

  useEffect(() => {
    dispatch({
      type: "GET_TODOS",
      payload: savedTodos
    })
  }, [savedTodos])

  return (
    <TodosContext.Provider value={{ state, dispatch}}> 
      <TodoForm />
      <TodoList />
    </TodosContext.Provider>
  )
}


ReactDOM.render(
  <App />
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

```
![](/images/frontend/react-react-hooks/hooks-todos-api11.png)

3. Delete Request to Remove Todos 

- Modify `TodoList.js` to call axios.delete to the API when a `todo` is removed.

> `TodoList.js`
```js
import React, {useContext} from 'react';
import TodosContext from '../context';
import axios from 'axios';

export default function TodoList() {
  const {state, dispatch } = useContext(TodosContext);
  const title = state.todos.length > 0 ? `${state.todos.length} Todos` : 'Nothing To Do!';
  return (
    <div className="container mx-auto max-w-md text-center font-mono">
      <h1 className="text-bold">{title}</h1>
      <ul className="list-reset text-white p-0">
        {state.todos.map(todo => (
          <li 
            key={todo.id}
            className="flex items-center bg-orange-dark border-black border-dashed border-2 my-2 py-4"
          >
            <span 
              onDoubleClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo})}
              className={`flex-1 ml-12 cursor-pointer ${todo.complete && "line-through text-grey-darkest"}` }
            >{todo.text}</span>
            <button
              onClick={() => dispatch({ type: "SET_CURRENT_TODO", payload: todo})}
            >
              <img 
                src="https://icon.now.sh/edit/0050c5"
                alt="Edit Icon"
                className="h-6"
              />
            </button>
            <button
              onClick={async () => {
                  await axios.delete(`https://todos-api-juwmymcrdh.now.sh/todos/${todo.id}`)
                  dispatch({ type: "REMOVE_TODO", payload: todo})
                }
              }
            >
              <img 
                src="https://icon.now.sh/delete/8b0000"
                alt="Delete Icon"
                className="h-6"
              />
            </button>
          </li>  
        ))}
      </ul>
    </div>
  )
}
```

![](/images/frontend/react-react-hooks/hooks-todos-api12.png)

![](/images/frontend/react-react-hooks/hooks-todos-api13.png)

```bash
C:\Users\juan.pablo.perez\OneDrive\Training\React\ReactHooksCourse\react-hooks-api>curl https://todos-api-juwmymcrdh.now.sh/todos
[
  {
    "id": 1,
    "text": "Eat breakfast",
    "complete": false
  },
  {
    "id": 3,
    "text": "Finish project",
    "complete": true
  }
]
```
4. Performing Post Request to Add Todos 

- Modiy the `ADD_TODO` dispatch
> `reducer.js`
```js
export default function reducer(state, action) {
  switch (action.type) {
    case "GET_TODOS":
      return {
        ...state,
        todos: action.payload
      };    
    case "ADD_TODO":
      const addedTodos = [...state.todos, action.payload];
      return {
        ...state,
        todos: addedTodos
      };
    case "SET_CURRENT_TODO":
      return {
        ...state,
        currentTodo: action.payload
      }
    case "TOGGLE_TODO":
      const toggledTodos = state.todos.map(t => 
        t.id === action.payload.id ? {...action.payload, complete: !action.payload.complete} : t );
      return {
        ...state,
        todos: toggledTodos
      };
    case "UPDATE_TODO":
      if (!action.payload) {
        return state;
      }
      if (state.todos.findIndex(t => t.text === action.payload) > -1) {
        return state;
      }
      const updatedTodo = {...state.currentTodo, text: action.payload};
      const updatedTodoIndex = state.todos.findIndex(t => t.id === state.currentTodo.id);
      const updatedTodos = [
        ...state.todos.slice(0, updatedTodoIndex),
        updatedTodo,
        ...state.todos.slice(updatedTodoIndex + 1)
      ];
      return {
        ...state,
        currentTodo: {},
        todos: updatedTodos
      };   
    case "REMOVE_TODO":
      const removedTodos = state.todos.filter(t => t.id !== action.payload.id);
      const isRemovedTodo = state.currentTodo.id === action.payload.id ? {}: state.currentTodo;
      return {
        ...state,
        currentTodo: isRemovedTodo,
        todos: removedTodos
      };
    default:
      return state;
  }
}
```
- Modify the `TodoForm.js` file to manage the new `ADD_TODO` dispatch
> `TodoForm.js`
```js
import React, { useState, useEffect, useContext } from 'react';
import TodosContext from '../context';
import axios from 'axios';
import uuidv4 from 'uuid/v4';

export default function TodoForm() {

  const [todo, setTodo] = useState("");
  const { state, dispatch } = useContext(TodosContext);

  useEffect(() => {
    if (state.currentTodo.text) {
      setTodo(state.currentTodo.text);
    } else {
      setTodo("");
    }
  }, [state.currentTodo.id])

  const handleSubmit = async event => {
    event.preventDefault();
    if (!todo) {
      return;
    }
    if (state.todos.findIndex(t => t.text === todo) > -1) {
      return;
    }    
    if (state.currentTodo.text) {
      dispatch({ type: "UPDATE_TODO", payload: todo});
    } else {
      const response = await axios.post('https://todos-api-juwmymcrdh.now.sh/todos', {
        id: uuidv4(),
        text: todo,
        complete: false
      });
      dispatch({ type: "ADD_TODO", payload: response.data});
    }
    setTodo("");
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex justify-center p-5"
    >
      <input 
        type="text"
        className="border-black border-solid border-2"
        onChange={event => setTodo(event.target.value)}
        value={todo}
      />

    </form>
  )
}
```
![](/images/frontend/react-react-hooks/hooks-todos-api14.png)

![](/images/frontend/react-react-hooks/hooks-todos-api15.png)

5. Performing Patch Request to Toggle Todos 

- Modiy the `TOGGLE_TODO` dispatch
> `reducer.js`
```js
export default function reducer(state, action) {
  switch (action.type) {
    case "GET_TODOS":
      return {
        ...state,
        todos: action.payload
      };    
    case "ADD_TODO":
      const addedTodos = [...state.todos, action.payload];
      return {
        ...state,
        todos: addedTodos
      };
    case "SET_CURRENT_TODO":
      return {
        ...state,
        currentTodo: action.payload
      }
    case "TOGGLE_TODO":
      const toggledTodos = state.todos.map(t => 
        t.id === action.payload.id ? action.payload : t );
      return {
        ...state,
        todos: toggledTodos
      };
    case "UPDATE_TODO":
      if (!action.payload) {
        return state;
      }
      if (state.todos.findIndex(t => t.text === action.payload) > -1) {
        return state;
      }
      const updatedTodo = {...state.currentTodo, text: action.payload};
      const updatedTodoIndex = state.todos.findIndex(t => t.id === state.currentTodo.id);
      const updatedTodos = [
        ...state.todos.slice(0, updatedTodoIndex),
        updatedTodo,
        ...state.todos.slice(updatedTodoIndex + 1)
      ];
      return {
        ...state,
        currentTodo: {},
        todos: updatedTodos
      };   
    case "REMOVE_TODO":
      const removedTodos = state.todos.filter(t => t.id !== action.payload.id);
      const isRemovedTodo = state.currentTodo.id === action.payload.id ? {}: state.currentTodo;
      return {
        ...state,
        currentTodo: isRemovedTodo,
        todos: removedTodos
      };
    default:
      return state;
  }
}
```

- Modify the `TodoList.js` file to manage the new `TOGGLE_TODO` dispatch
> `TodoForm.js`
```js
import React, {useContext} from 'react';
import TodosContext from '../context';
import axios from 'axios';

export default function TodoList() {
  const {state, dispatch } = useContext(TodosContext);
  const title = state.todos.length > 0 ? `${state.todos.length} Todos` : 'Nothing To Do!';
  return (
    <div className="container mx-auto max-w-md text-center font-mono">
      <h1 className="text-bold">{title}</h1>
      <ul className="list-reset text-white p-0">
        {state.todos.map(todo => (
          <li 
            key={todo.id}
            className="flex items-center bg-orange-dark border-black border-dashed border-2 my-2 py-4"
          >
            <span 
              onDoubleClick={async () => {
                  const response = await axios.patch(`https://todos-api-juwmymcrdh.now.sh/todos/${todo.id}`, {
                    complete: !todo.complete
                  });
                  dispatch({ type: "TOGGLE_TODO", payload: response.data});
                }
              }
              className={`flex-1 ml-12 cursor-pointer ${todo.complete && "line-through text-grey-darkest"}` }
            >{todo.text}</span>
            <button
              onClick={() => dispatch({ type: "SET_CURRENT_TODO", payload: todo})}
            >
              <img 
                src="https://icon.now.sh/edit/0050c5"
                alt="Edit Icon"
                className="h-6"
              />
            </button>
            <button
              onClick={async () => {
                  await axios.delete(`https://todos-api-juwmymcrdh.now.sh/todos/${todo.id}`)
                  dispatch({ type: "REMOVE_TODO", payload: todo})
                }
              }
            >
              <img 
                src="https://icon.now.sh/delete/8b0000"
                alt="Delete Icon"
                className="h-6"
              />
            </button>
          </li>  
        ))}
      </ul>
    </div>
  )
}
```

![](/images/frontend/react-react-hooks/hooks-todos-api16.png)

6. Finishing our App

- Modiy the `UPDATE_TODO` dispatch
> `reducer.js`
```js
export default function reducer(state, action) {
  switch (action.type) {
    case "GET_TODOS":
      return {
        ...state,
        todos: action.payload
      };    
    case "ADD_TODO":
      const addedTodos = [...state.todos, action.payload];
      return {
        ...state,
        todos: addedTodos
      };
    case "SET_CURRENT_TODO":
      return {
        ...state,
        currentTodo: action.payload
      }
    case "TOGGLE_TODO":
      const toggledTodos = state.todos.map(t => 
        t.id === action.payload.id ? action.payload : t );
      return {
        ...state,
        todos: toggledTodos
      };
    case "UPDATE_TODO":
      const updatedTodo = { ...action.payload};
      const updatedTodoIndex = state.todos.findIndex(t => t.id === state.currentTodo.id);
      const updatedTodos = [
        ...state.todos.slice(0, updatedTodoIndex),
        updatedTodo,
        ...state.todos.slice(updatedTodoIndex + 1)
      ];
      return {
        ...state,
        currentTodo: {},
        todos: updatedTodos
      };   
    case "REMOVE_TODO":
      const removedTodos = state.todos.filter(t => t.id !== action.payload.id);
      const isRemovedTodo = state.currentTodo.id === action.payload.id ? {}: state.currentTodo;
      return {
        ...state,
        currentTodo: isRemovedTodo,
        todos: removedTodos
      };
    default:
      return state;
  }
}
```
- Modify the `TodoForm.js` file to manage the new `UPDATE_TODO` dispatch
> `TodoForm.js`
```js
import React, { useState, useEffect, useContext } from 'react';
import TodosContext from '../context';
import axios from 'axios';
import uuidv4 from 'uuid/v4';

export default function TodoForm() {

  const [todo, setTodo] = useState("");
  const { state, dispatch } = useContext(TodosContext);

  useEffect(() => {
    if (state.currentTodo.text) {
      setTodo(state.currentTodo.text);
    } else {
      setTodo("");
    }
  }, [state.currentTodo.id])

  const handleSubmit = async event => {
    event.preventDefault();
    if (!todo) {
      return;
    }
    if (state.todos.findIndex(t => t.text === todo) > -1) {
      return;
    }    
    if (state.currentTodo.text) {
      const response = await axios.patch(`https://todos-api-juwmymcrdh.now.sh/todos/${state.currentTodo.id}`, {
        text: todo
      });
      dispatch({ type: "UPDATE_TODO", payload: response.data});
    } else {
      const response = await axios.post('https://todos-api-juwmymcrdh.now.sh/todos', {
        id: uuidv4(),
        text: todo,
        complete: false
      });
      dispatch({ type: "ADD_TODO", payload: response.data});
    }
    setTodo("");
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex justify-center p-5"
    >
      <input 
        type="text"
        className="border-black border-solid border-2"
        onChange={event => setTodo(event.target.value)}
        value={todo}
      />

    </form>
  )
}
```

![](/images/frontend/react-react-hooks/hooks-todos-api17.png)

![](/images/frontend/react-react-hooks/hooks-todos-api18.png)
