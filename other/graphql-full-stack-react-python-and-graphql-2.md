# Full-Stack React, Python, and GraphQL (Part 2)

> Github Repositories

- [full-stack-react-python-and-graphql](https://github.com/peelmicro/full-stack-react-python-and-graphql).

The [Full-Stack React, Python, and GraphQL](https://www.udemy.com/full-stack-react-python-and-graphql/) Udemy course helps develop impressive, rich full-stack apps with the latest and greatest features of Python, React and GraphQL.

> Other parts:

- [Full-Stack React, Python, and GraphQL (Part 1)](./graphql-full-stack-react-python-and-graphql.md)
- [Full-Stack React, Python, and GraphQL (Part 3)](./graphql-full-stack-react-python-and-graphql-3.md)

> Table of contents
> [[toc]]

## What I've learned

- How to build stunning, complete full-stack applications with React and Python
- Create robust Python backends with the Django Web Framework
- Integrate GraphQL with Python using Graphene and Graphene-Django
- Use GraphQL in great depth; from fundamental concepts to using it in full-stack apps
- The latest and greatest React concepts, including React Hooks, React Context and more
- Working with GraphQL on the backend to create a complete API (w/ Django and Graphene)
- GraphQL in React applications in great depth with Apollo Boost, Apollo Client and Apollo Client State

## Section 5 Developing a React Client App for the Backend 4hr 12min

### 29. Adding our React Client App 3min

- We are going to create the `client` folder where we are going to depvelop the `React Client` app.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/react-tracks (master)
$ mkdir client

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/react-tracks (master)
$ cd client

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/react-tracks/client (master)
$
```

- We are going to use `Apollo Client for React`. We can find more information on [Introduction
  What is Apollo Client and what does it do?](https://www.apollographql.com/docs/react/)

![](/images/other/graphql-full-stack-react-python-and-graphql/AddingOurReactClientApp.png)

- We are going to start the app by clonning the [React client for Fullstack Python, React, and GraphQL Course App](https://github.com/reedbarger/react-tracks-client) repository.

![](/images/other/graphql-full-stack-react-python-and-graphql/AddingOurReactClientApp2.png)

- As we have already created a repository for the full solution we are just going to download the zip file and unzip it on the new `client` folder.

![](/images/other/graphql-full-stack-react-python-and-graphql/AddingOurReactClientApp3.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/AddingOurReactClientApp4.png)

- We need to install the `npm packages` by executing `yarn install`

> client/package.json

```json
{
  "name": "client",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@material-ui/core": "3.0.1",
    "@material-ui/icons": "3.0.1",
    "apollo-boost": "^0.1.28",
    "axios": "^0.18.0",
    "date-fns": "^1.30.1",
    "graphql": "^14.1.1",
    "react": "^16.8.2",
    "react-apollo": "^2.4.1",
    "react-dom": "^16.8.2",
    "react-player": "^1.9.3",
    "react-router-dom": "^4.3.1",
    "react-scripts": "2.1.5"
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
  "browserslist": [">0.2%", "not dead", "not ie <= 11", "not op_mini all"]
}
```

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/react-tracks/client (master)
$ yarn
yarn install v1.15.2





info fsevents@1.2.4: The platform "win32" is incompatible with this module.
info "fsevents@1.2.4" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
warning " > react-apollo@2.4.1" has unmet peer dependency "apollo-client@^2.4.12".
warning "react-scripts > pnp-webpack-plugin > ts-pnp@1.0.0" has unmet peer dependency "typescript@*".
[4/4] Building fresh packages...
Done in 182.66s.
```

- We can run the project by executing `yarn start`

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/react-tracks/client (master)
$ yarn start
yarn run v1.15.2





Starting the development server...
Compiled successfully!

You can now view client in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://10.0.75.1:3000/

Note that the development build is not optimized.
To create a production build, use yarn build.
```

- It is running on http://localhost:3000/

![](/images/other/graphql-full-stack-react-python-and-graphql/AddingOurReactClientApp5.png)

### 30. Exploring the React Source Code 6min

- The application has been created by using [Create React App](https://github.com/facebook/create-react-app)

![](/images/other/graphql-full-stack-react-python-and-graphql/ExploringTheReactSourceCode.png)

- The entry point of the application is `app/src/index.js`

> app/src/index.js

```js
import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
```

- This module uses React to render the main component on the `app/src/Root.js` document that initially just put Root.

> app/src/Root.js

```js
import React from "react";
import withRoot from "./withRoot";

const Root = () => <div>Root</div>;

export default withRoot(Root);
```

- Each user is going to have their own profile page on `/profile/id` where `id` is the User Id. We are going to have a login page where the users can authenticate.

- We have the `pages` folder where we are going to put our pages. It has initially the `App.js` and the `Profile.js` documents.

> app/src/pages/App.js

```js
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

const App = ({ classes }) => {
  return <div>App</div>;
};

const styles = theme => ({
  container: {
    margin: "0 auto",
    maxWidth: 960,
    padding: theme.spacing.unit * 2
  }
});

export default withStyles(styles)(App);
```

> app/src/pages/Profile.js

```js
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
// import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
// import Avatar from "@material-ui/core/Avatar";
// import Paper from "@material-ui/core/Paper";
// import Typography from "@material-ui/core/Typography";
// import ThumbUpIcon from "@material-ui/icons/ThumbUpTwoTone";
// import AudiotrackIcon from "@material-ui/icons/AudiotrackTwoTone";
// import Divider from "@material-ui/core/Divider";

const Profile = ({ classes }) => {
  return <div>Profile</div>;
};

const styles = theme => ({
  paper: {
    width: "auto",
    display: "block",
    padding: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    [theme.breakpoints.up("md")]: {
      width: 650,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  card: {
    display: "flex",
    justifyContent: "center"
  },
  title: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing.unit * 2
  },
  audioIcon: {
    color: "purple",
    fontSize: 30,
    marginRight: theme.spacing.unit
  },
  thumbIcon: {
    color: "green",
    marginRight: theme.spacing.unit
  },
  divider: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  }
});

export default withStyles(styles)(Profile);
```

- We have also the `components` folder where we are going to put our components. It will have an individual folder for each module. `Auth` with all the authentication components, `Shared` with all the shared components and `Track` with all the components related to the Tracks.

![](/images/other/graphql-full-stack-react-python-and-graphql/ExploringTheReactSourceCode2.png)

- The application is using the `Material UI` library. The set-up of this library is created on the `app/src/withRoot.js` document.

> app/src/withRoot.js

```js
import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";
import orange from "@material-ui/core/colors/orange";
import CssBaseline from "@material-ui/core/CssBaseline";

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: indigo[500],
      main: indigo[700],
      dark: indigo[900]
    },
    secondary: {
      light: orange[300],
      main: orange[500],
      dark: orange[700]
    }
  },
  typography: {
    useNextVariants: true
  }
});

function withRoot(Component) {
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        {/* https://material-ui.com/getting-started/usage/#cssbaseline */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
```

- We can just modify this document if we want to use a different `theme`

- We can apply individual styles to each `page` or `component` by defining the `style` function in each document, as we are doing in the `app/src/components/Auth/Register.js` document.

> app/src/components/Auth/Register.js

```js
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
// import Typography from "@material-ui/core/Typography";
// import Avatar from "@material-ui/core/Avatar";
// import FormControl from "@material-ui/core/FormControl";
// import Paper from "@material-ui/core/Paper";
// import Input from "@material-ui/core/Input";
// import InputLabel from "@material-ui/core/InputLabel";
// import Button from "@material-ui/core/Button";
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import Slide from "@material-ui/core/Slide";
// import Gavel from "@material-ui/icons/Gavel";
// import VerifiedUserTwoTone from "@material-ui/icons/VerifiedUserTwoTone";

const Register = ({ classes }) => {
  return <div>Register</div>;
};

const styles = theme => ({
  root: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up("md")]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing.unit * 2
  },
  title: {
    marginTop: theme.spacing.unit * 2,
    color: theme.palette.openTitle
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  },
  icon: {
    padding: "0px 2px 2px 0px",
    verticalAlign: "middle",
    color: "green"
  }
});

export default withStyles(styles)(Register);
```

### 31. Setting up Apollo Client / Executing Queries with React Apollo 5min

- We need to modify the `src/index.js` to set up the Apollo Client to be able to run queries.

> src/index.js

```js
import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import * as serviceWorker from "./serviceWorker";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:9000/graphql/"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
```

- We also need to modify the `src/Root.js` to set up the Apollo Client.

> src/Root.js

```js
import React from "react";
import withRoot from "./withRoot";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const Root = () => (
  <Query query={GET_TRACKS_QUERY}>
    {({ data, loading, error }) => {
      if (loading) return <div>Loading</div>;
      if (error) return <div>Error</div>;
      return <div>{JSON.stringify(data)}</div>;
    }}
  </Query>
);

const GET_TRACKS_QUERY = gql`
  {
    tracks {
      id
      title
      description
      url
    }
  }
`;

export default withRoot(Root);
```

SettingUpApolloClientExecutingQueriesWithReactApollo
SettingUpApolloClientExecutingQueriesWithReactApollo2
SettingUpApolloClientExecutingQueriesWithReactApollo3
SettingUpApolloClientExecutingQueriesWithReactApollo4
SettingUpApolloClientExecutingQueriesWithReactApollo5

### 32. Enabling django-cors-headers for Connecting to our Backend 4min

- We need to run the `django` app in one terminal

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/react-tracks (master)
$ pipenv shell
Launching subshell in virtual environment…

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/react-tracks (master)
$ cd app

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/react-tracks/app (master)
$ python manage.py runserver 9000
Performing system checks...

System check identified no issues (0 silenced).
April 04, 2019 - 19:00:09
Django version 2.1.7, using settings 'app.settings'
Starting development server at http://127.0.0.1:9000/
Quit the server with CTRL-BREAK.
```

- We need to start the `react` app in another terminal

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/react-tracks (master)$ cd client
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/GraphQL/full-stack-react-python-and-graphql/react-tracks/client (master)
$ yarn start
yarn run v1.15.2





Starting the development server...
Compiled successfully!

You can now view client in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://10.0.75.1:3000/

Note that the development build is not optimized.
To create a production build, use yarn build.
```

- But we can notice there are errors when browsing.

![](/images/other/graphql-full-stack-react-python-and-graphql/EnablingDjango-cors-headersForConnectingToOurBackend.png)

- We have to tell `django` that we can receive request from a different `endpoint`. We have already a special package installed to manage that `django-cors-headers`

> Pipfile

```toml
[[source]]
name = "pypi"
url = "https://pypi.org/simple"
verify_ssl = true

[dev-packages]
autopep8 = "*"
pylint = "*"

[packages]
django = "*"
graphene-django = "*"
django-graphql-jwt = "*"
django-cors-headers = "*"

[requires]
python_version = "3.7"
```

- We can check the `django` documentation to see how to manage headers on [django-cors-headers](https://github.com/ottoyiu/django-cors-headers)

![](/images/other/graphql-full-stack-react-python-and-graphql/EnablingDjango-cors-headersForConnectingToOurBackend2.png)

- We need to modify the `app/app/settings.py` document to tell `Django` we want to use the `corsheaders` App.
- We need to add the `corsheaders` name to the `INSTALLED_APPS` array and `corsheaders.middleware.CorsMiddleware` and `django.middleware.common.CommonMiddleware` to the `MIDDLEWARE` object.
- We finnaly have to add another `CORS_ORIGIN_WHITELIST` with the list of endpoints that are going to have access to the API.

> app/app/settings.py

```py
"""
Django settings for app project.

Generated by 'django-admin startproject' using Django 2.1.7.

For more information on this file, see
https://docs.djangoproject.com/en/2.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/2.1/ref/settings/
"""

import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'kpwro5ldvma_r_nlb&_cjtwm0emgpr@#x1-vlm3lb84f!7!-m0'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
    'corsheaders',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'graphene_django',
    'tracks'
]

GRAPHENE = {
    'SCHEMA': 'app.schema.schema',
    'MIDDLEWARE': [
        'graphql_jwt.middleware.JSONWebTokenMiddleware',
    ],
}

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
]

CORS_ORIGIN_WHITELIST = (
    'localhost:3000'
)

AUTHENTICATION_BACKENDS = [
    'graphql_jwt.backends.JSONWebTokenBackend',
    'django.contrib.auth.backends.ModelBackend',
]

ROOT_URLCONF = 'app.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'app.wsgi.application'


# Database
# https://docs.djangoproject.com/en/2.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}


# Password validation
# https://docs.djangoproject.com/en/2.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/2.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.1/howto/static-files/

STATIC_URL = '/static/'
```

- We can refresh the browser and see that we are now receiving the list of `Tracks`.

![](/images/other/graphql-full-stack-react-python-and-graphql/EnablingDjango-cors-headersForConnectingToOurBackend3.png)

### 33. Creating our Register Form 8min

- We are going to modify the `client/src/index.js` to show the `Root` or the `Auth` components depending on if the user is authenticated or not.

> client/src/index.js

```js
import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import Root from "./Root";
import Auth from "./components/Auth";

const client = new ApolloClient({
  uri: "http://localhost:9000/graphql/"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Auth />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
```

> src/Auth/index.js

```js
import React from "react";

import withRoot from "../../withRoot";

export default withRoot(() => {
  return <div>Auth</div>;
});
```

![](/images/other/graphql-full-stack-react-python-and-graphql/CreatingOurRegisterForm.png)

- The `src/Auth/index.js` is going to show either the `Login` component or the `Register` component.

> src/Auth/index.js

```js
import React from "react";

import withRoot from "../../withRoot";
import Login from "./Login";
import Register from "./Register";

export default withRoot(() => {
  return <Register />;
});
```

![](/images/other/graphql-full-stack-react-python-and-graphql/CreatingOurRegisterForm2.png)

- We are going to complete the `Register` component.

> src/Auth/Register.js

```js
import React from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Gavel from "@material-ui/icons/Gavel";
import VerifiedUserTwoTone from "@material-ui/icons/VerifiedUserTwoTone";

const Register = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Gavel />
        </Avatar>
      </Paper>
      <Typography variant="headline">Register</Typography>
      {/* <Mutation>
        {() => {
      return ( */}
      <form className={classes.form}>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input id="username" />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input id="email" type="email" />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input id="password" type="password" />
        </FormControl>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          className={classes.submit}
        >
          Register
        </Button>
        <Button color="primary" variant="outlined" fullWidth>
          Previous user? Log in here
        </Button>
      </form>
      {/* );
        }}
      </Mutation> */}
    </div>
  );
};

const styles = theme => ({
  root: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up("md")]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing.unit * 2
  },
  title: {
    marginTop: theme.spacing.unit * 2,
    color: theme.palette.openTitle
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  },
  icon: {
    padding: "0px 2px 2px 0px",
    verticalAlign: "middle",
    color: "green"
  }
});

export default withStyles(styles)(Register);
```

![](/images/other/graphql-full-stack-react-python-and-graphql/CreatingOurRegisterForm3.png)

### 34. Executing GraphQL Operations Client-Side with Apollo Dev Tools 4min

- We can install [Apollo Client Devtools](https://github.com/apollographql/apollo-client-devtools) to have access to the Apollo Client from the `Chrome Development tools`

![](/images/other/graphql-full-stack-react-python-and-graphql/ExecutingGraphQLOperationsClient-SideWithApolloDevTools.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/ExecutingGraphQLOperationsClient-SideWithApolloDevTools2.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/ExecutingGraphQLOperationsClient-SideWithApolloDevTools3.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/ExecutingGraphQLOperationsClient-SideWithApolloDevTools4.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/ExecutingGraphQLOperationsClient-SideWithApolloDevTools5.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/ExecutingGraphQLOperationsClient-SideWithApolloDevTools6.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/ExecutingGraphQLOperationsClient-SideWithApolloDevTools7.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/ExecutingGraphQLOperationsClient-SideWithApolloDevTools8.png)

### 35. Storing Form State with useState 5min

- Once we've ensured the mutation is valid we can copy it and paste in the `Register` component.

- We are also going to use `useState` from React to manage the state in the form.

> src/Auth/Register.js

```js
import React, { useState } from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Gavel from "@material-ui/icons/Gavel";
import VerifiedUserTwoTone from "@material-ui/icons/VerifiedUserTwoTone";

const Register = ({ classes }) => {
  // First value is the name of the variable for the state
  // Second value is the name of the function that we are going to use to change the value
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Gavel />
        </Avatar>
      </Paper>
      <Typography variant="headline">Register</Typography>
      <Mutation mutation={REGISTER_MUTATION}>
        {() => {
          return (
            <form className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="username">Username</InputLabel>
                <Input
                  id="username"
                  onChange={event => setUsername(event.target.value)}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input
                  id="email"
                  type="email"
                  onChange={event => setEmail(event.target.value)}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  id="password"
                  type="password"
                  onChange={event => setPassword(event.target.value)}
                />
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                Register
              </Button>
              <Button color="primary" variant="outlined" fullWidth>
                Previous user? Log in here
              </Button>
            </form>
          );
        }}
      </Mutation>
    </div>
  );
};

const REGISTER_MUTATION = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      user {
        username
        email
      }
    }
  }
`;

const styles = theme => ({
  root: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up("md")]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing.unit * 2
  },
  title: {
    marginTop: theme.spacing.unit * 2,
    color: theme.palette.openTitle
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  },
  icon: {
    padding: "0px 2px 2px 0px",
    verticalAlign: "middle",
    color: "green"
  }
});

export default withStyles(styles)(Register);
```

![](/images/other/graphql-full-stack-react-python-and-graphql/StoringFormStateWithuseState.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/StoringFormStateWithuseState2.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/StoringFormStateWithuseState3.png)

### 36. Executing Mutations with Mutation Component / Register User Mutation 6min

- We are going to modify the `Register` component to get access to the `createUser` mutation.

> src/Auth/Register.js

```js
import React, { useState } from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Gavel from "@material-ui/icons/Gavel";
import VerifiedUserTwoTone from "@material-ui/icons/VerifiedUserTwoTone";

const Register = ({ classes }) => {
  // First value is the name of the variable for the state
  // Second value is the name of the function that we are going to use to change the value
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event, createUser) => {
    event.preventDefault();
    const res = await createUser();
    console.log({ res });
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Gavel />
        </Avatar>
      </Paper>
      <Typography variant="headline">Register</Typography>
      <Mutation
        mutation={REGISTER_MUTATION}
        variables={{ username, email, password }}
      >
        {(createUser, { loading, error }) => {
          return (
            <form
              onSubmit={event => handleSubmit(event, createUser)}
              className={classes.form}
            >
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="username">Username</InputLabel>
                <Input
                  id="username"
                  onChange={event => setUsername(event.target.value)}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input
                  id="email"
                  type="email"
                  onChange={event => setEmail(event.target.value)}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  id="password"
                  type="password"
                  onChange={event => setPassword(event.target.value)}
                />
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                Register
              </Button>
              <Button color="primary" variant="outlined" fullWidth>
                Previous user? Log in here
              </Button>
            </form>
          );
        }}
      </Mutation>
    </div>
  );
};

const REGISTER_MUTATION = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      user {
        username
        email
      }
    }
  }
`;

const styles = theme => ({
  root: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up("md")]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing.unit * 2
  },
  title: {
    marginTop: theme.spacing.unit * 2,
    color: theme.palette.openTitle
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  },
  icon: {
    padding: "0px 2px 2px 0px",
    verticalAlign: "middle",
    color: "green"
  }
});

export default withStyles(styles)(Register);
```

![](/images/other/graphql-full-stack-react-python-and-graphql/ExecutingMutationsWithMutationComponentRegisterUserMutation.png)

### 37. Finishing Register (Success Dialog, Toggling Auth Components, Transitions) 13min

- We are going to modify the `Register` component to display a modal form telling the user the login was succesfull and also the user needs to log in.

- In order to get the information about the user when is logged in in the `Register` component we need to modify the `src/Auth/index.js` document

> src/Auth/index.js

```js
import React, { useState } from "react";

import withRoot from "../../withRoot";
import Login from "./Login";
import Register from "./Register";

export default withRoot(() => {
  const [newUser, setNewUser] = useState(true);

  return newUser ? <Register setNewUser={setNewUser} /> : <Login />;
});
```

> src/Auth/Register.js

```js
import React, { useState } from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Gavel from "@material-ui/icons/Gavel";
import VerifiedUserTwoTone from "@material-ui/icons/VerifiedUserTwoTone";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const Register = ({ classes, setNewUser }) => {
  // First value is the name of the variable for the state
  // Second value is the name of the function that we are going to use to change the value
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = (event, createUser) => {
    event.preventDefault();
    createUser();
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Gavel />
        </Avatar>
        <Typography variant="headline">Register</Typography>
        <Mutation
          mutation={REGISTER_MUTATION}
          variables={{ username, email, password }}
          onCompleted={data => {
            console.log({ data });
            setOpen(true);
          }}
        >
          {(createUser, { loading, error }) => {
            return (
              <form
                onSubmit={event => handleSubmit(event, createUser)}
                className={classes.form}
              >
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="username">Username</InputLabel>
                  <Input
                    id="username"
                    onChange={event => setUsername(event.target.value)}
                  />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <Input
                    id="email"
                    type="email"
                    onChange={event => setEmail(event.target.value)}
                  />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input
                    id="password"
                    type="password"
                    onChange={event => setPassword(event.target.value)}
                  />
                </FormControl>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  disabled={
                    loading ||
                    !username.trim() ||
                    !email.trim() ||
                    !password.trim()
                  }
                  className={classes.submit}
                >
                  {loading ? "Registering..." : "Register"}
                </Button>
                <Button
                  onClick={() => setNewUser(false)}
                  color="primary"
                  variant="outlined"
                  fullWidth
                >
                  Previous user? Log in here
                </Button>

                {/* Error Handling */}
                {error && <div>>{error}</div>}
              </form>
            );
          }}
        </Mutation>
      </Paper>
      {/* Success Dialog */}
      <Dialog
        open={open}
        disableBackdropClick={true}
        TransitionComponent={Transition}
      >
        <DialogTitle>
          <VerifiedUserTwoTone className={classes.icon} />
          New Account
        </DialogTitle>
        <DialogContent>
          <DialogContentText>User successfully created!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            variant="contained"
            onClick={() => setNewUser(false)}
          >
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const REGISTER_MUTATION = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      user {
        username
        email
      }
    }
  }
`;

const styles = theme => ({
  root: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up("md")]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing.unit * 2
  },
  title: {
    marginTop: theme.spacing.unit * 2,
    color: theme.palette.openTitle
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  },
  icon: {
    padding: "0px 2px 2px 0px",
    verticalAlign: "middle",
    color: "green"
  }
});

export default withStyles(styles)(Register);
```

![](/images/other/graphql-full-stack-react-python-and-graphql/FinishingRegister.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/FinishingRegister2.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/FinishingRegister3.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/FinishingRegister4.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/FinishingRegister5.png)

### 38. Custom Error Component / Improved Error Handling 6min

- We are going to modify the `Auth/Register` and the `Shared/Error` components to improve the error handling.

> src/Shared/Error.js

```js
import React, { useState } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";

const Error = ({ classes, error }) => {
  const [open, setOpen] = useState(true);

  return (
    <Snackbar
      open={open}
      className={classes.snackbar}
      message={error.message}
      action={
        <Button onClick={() => setOpen(false)} color="secondary" size="small">
          Close
        </Button>
      }
    />
  );
};

const styles = theme => ({
  snackbar: {
    margin: theme.spacing.unit
  }
});

export default withStyles(styles)(Error);
```

> src/Auth/Register.js

```js
import React, { useState } from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";

import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Gavel from "@material-ui/icons/Gavel";
import VerifiedUserTwoTone from "@material-ui/icons/VerifiedUserTwoTone";

import Error from "../Shared/Error";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const Register = ({ classes, setNewUser }) => {
  // First value is the name of the variable for the state
  // Second value is the name of the function that we are going to use to change the value
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = (event, createUser) => {
    event.preventDefault();
    createUser();
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Gavel />
        </Avatar>
        <Typography variant="headline">Register</Typography>
        <Mutation
          mutation={REGISTER_MUTATION}
          variables={{ username, email, password }}
          onCompleted={data => {
            console.log({ data });
            setOpen(true);
          }}
        >
          {(createUser, { loading, error }) => {
            return (
              <form
                onSubmit={event => handleSubmit(event, createUser)}
                className={classes.form}
              >
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="username">Username</InputLabel>
                  <Input
                    id="username"
                    onChange={event => setUsername(event.target.value)}
                  />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <Input
                    id="email"
                    type="email"
                    onChange={event => setEmail(event.target.value)}
                  />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input
                    id="password"
                    type="password"
                    onChange={event => setPassword(event.target.value)}
                  />
                </FormControl>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  disabled={
                    loading ||
                    !username.trim() ||
                    !email.trim() ||
                    !password.trim()
                  }
                  className={classes.submit}
                >
                  {loading ? "Registering..." : "Register"}
                </Button>
                <Button
                  onClick={() => setNewUser(false)}
                  color="primary"
                  variant="outlined"
                  fullWidth
                >
                  Previous user? Log in here
                </Button>

                {/* Error Handling */}
                {error && <Error error={error} />}
              </form>
            );
          }}
        </Mutation>
      </Paper>
      {/* Success Dialog */}
      <Dialog
        open={open}
        disableBackdropClick={true}
        TransitionComponent={Transition}
      >
        <DialogTitle>
          <VerifiedUserTwoTone className={classes.icon} />
          New Account
        </DialogTitle>
        <DialogContent>
          <DialogContentText>User successfully created!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            variant="contained"
            onClick={() => setNewUser(false)}
          >
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const REGISTER_MUTATION = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      user {
        username
        email
      }
    }
  }
`;

const styles = theme => ({
  root: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up("md")]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing.unit * 2
  },
  title: {
    marginTop: theme.spacing.unit * 2,
    color: theme.palette.openTitle
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  },
  icon: {
    padding: "0px 2px 2px 0px",
    verticalAlign: "middle",
    color: "green"
  }
});

export default withStyles(styles)(Register);
```

![](/images/other/graphql-full-stack-react-python-and-graphql/CustomErrorComponentImprovedErrorHandling.png)

- After applying the changes.

![](/images/other/graphql-full-stack-react-python-and-graphql/CustomErrorComponentImprovedErrorHandling2.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/CustomErrorComponentImprovedErrorHandling3.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/CustomErrorComponentImprovedErrorHandling4.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/CustomErrorComponentImprovedErrorHandling5.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/CustomErrorComponentImprovedErrorHandling6.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/CustomErrorComponentImprovedErrorHandling7.png)

### 39. Build out Login Form / Execute Login Mutation for JWT 7min

- We are going to develop the `Auth/Login` component.

> Auth/Login.js

```js
import React, { useState } from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Lock from "@material-ui/icons/Lock";

import Error from "../Shared/Error";

const Login = ({ classes, setNewUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event, tokenAuth) => {
    event.preventDefault();
    tokenAuth();
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Lock />
        </Avatar>
        <Typography variant="title">Login as Existing User</Typography>
        <Mutation
          mutation={LOGIN_MUTATION}
          variables={{ username, password }}
          onCompleted={data => {
            console.log({ data });
          }}
        >
          {(tokenAuth, { loading, error }) => {
            return (
              <form
                onSubmit={event => handleSubmit(event, tokenAuth)}
                className={classes.form}
              >
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="username">Username</InputLabel>
                  <Input
                    id="username"
                    onChange={event => setUsername(event.target.value)}
                  />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input
                    id="password"
                    type="password"
                    onChange={event => setPassword(event.target.value)}
                  />
                </FormControl>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={loading || !username.trim() || !password.trim()}
                  className={classes.submit}
                >
                  {loading ? "Logging in..." : "Login"}
                </Button>
                <Button
                  onClick={() => setNewUser(true)}
                  color="secondary"
                  variant="outlined"
                  fullWidth
                >
                  New user? Register here
                </Button>

                {/* Error Handling */}
                {error && <Error error={error} />}
              </form>
            );
          }}
        </Mutation>
      </Paper>
    </div>
  );
};

const LOGIN_MUTATION = gql`
  mutation($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`;

const styles = theme => ({
  root: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up("md")]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing.unit * 2
  },
  title: {
    marginTop: theme.spacing.unit * 2,
    color: theme.palette.secondary.main
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.primary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  }
});

export default withStyles(styles)(Login);
```

- We need to update `Auth/index.js` to include the `setNewUser` parameter when calling the `Login` component

> Auth/index.js

```js
import React, { useState } from "react";

import withRoot from "../../withRoot";
import Login from "./Login";
import Register from "./Register";

export default withRoot(() => {
  const [newUser, setNewUser] = useState(true);
  return newUser ? (
    <Register setNewUser={setNewUser} />
  ) : (
    <Login setNewUser={setNewUser} />
  );
});
```

![](/images/other/graphql-full-stack-react-python-and-graphql/BuildOutLoginFormExecuteLoginMutationForJWT.png)

### 40. Using Apollo Client State to Manage Auth State 9min

- We need to modify the `Auth/Login` component to do two things:

1. Go to the Home Page
2. We need to provide the token on every request we make afterwords. In order to do this we are going to put the token on the browser `localStorage`

> Auth/Login.js

```js
import React, { useState } from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Lock from "@material-ui/icons/Lock";

import Error from "../Shared/Error";

const Login = ({ classes, setNewUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event, tokenAuth) => {
    event.preventDefault();
    const res = await tokenAuth();
    localStorage.setItem("authToken", res.data.tokenAuth.token);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Lock />
        </Avatar>
        <Typography variant="title">Login as Existing User</Typography>
        <Mutation mutation={LOGIN_MUTATION} variables={{ username, password }}>
          {(tokenAuth, { loading, error }) => {
            return (
              <form
                onSubmit={event => handleSubmit(event, tokenAuth)}
                className={classes.form}
              >
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="username">Username</InputLabel>
                  <Input
                    id="username"
                    onChange={event => setUsername(event.target.value)}
                  />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input
                    id="password"
                    type="password"
                    onChange={event => setPassword(event.target.value)}
                  />
                </FormControl>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={loading || !username.trim() || !password.trim()}
                  className={classes.submit}
                >
                  {loading ? "Logging in..." : "Login"}
                </Button>
                <Button
                  onClick={() => setNewUser(true)}
                  color="secondary"
                  variant="outlined"
                  fullWidth
                >
                  New user? Register here
                </Button>

                {/* Error Handling */}
                {error && <Error error={error} />}
              </form>
            );
          }}
        </Mutation>
      </Paper>
    </div>
  );
};

const LOGIN_MUTATION = gql`
  mutation($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`;

const styles = theme => ({
  root: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up("md")]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing.unit * 2
  },
  title: {
    marginTop: theme.spacing.unit * 2,
    color: theme.palette.secondary.main
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.primary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  }
});

export default withStyles(styles)(Login);
```

![](/images/other/graphql-full-stack-react-python-and-graphql/UsingApolloClientStateToManageAuthState.png)

- We need to modify main `index.js` document to do two things:

1. Set up a new Apollo client called `clientState` that is going to be available for every component in our app. So our state is going to be managed by this client State. We are going to store the authorication token there.
2. Access the Apollo client to check if the user has an user authentication token stored there. If there is one it is going to redirect to the `Root` page, otherwise to the `Auth` page.

> index.js

```js
import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";
import { ApolloProvider, Query } from "react-apollo";
import ApolloClient, { gql } from "apollo-boost";

import Root from "./Root";
import Auth from "./components/Auth";

const client = new ApolloClient({
  uri: "http://localhost:9000/graphql/",
  clientState: {
    defaults: {
      isLoggedIn: !!localStorage.getItem("authToken")
    }
  }
});

const IS_LOGGED_IN_QUERY = gql`
  query {
    isLoggedIn @client
  }
`;

ReactDOM.render(
  <ApolloProvider client={client}>
    <Query query={IS_LOGGED_IN_QUERY}>
      {({ data }) => (data.isLoggedIn ? <Root /> : <Auth />)}
    </Query>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
```

- We need to modify the `Auth/Login` component again to do another two things:

1. Modify the mutation to get access to the `clientState`
2. Set the `isLoggedIn` value to true when the user is authenticathed.

> Auth/Login.js

```js
import React, { useState } from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Lock from "@material-ui/icons/Lock";

import Error from "../Shared/Error";

const Login = ({ classes, setNewUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event, tokenAuth, client) => {
    event.preventDefault();
    const res = await tokenAuth();
    localStorage.setItem("authToken", res.data.tokenAuth.token);
    client.writeData({ data: { isLoggedIn: true } });
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Lock />
        </Avatar>
        <Typography variant="title">Login as Existing User</Typography>
        <Mutation mutation={LOGIN_MUTATION} variables={{ username, password }}>
          {/* 
          called: it returns true if the mutation has been executed
          client: client object
          */}
          {(tokenAuth, { loading, error, called, client }) => {
            return (
              <form
                onSubmit={event => handleSubmit(event, tokenAuth, client)}
                className={classes.form}
              >
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="username">Username</InputLabel>
                  <Input
                    id="username"
                    onChange={event => setUsername(event.target.value)}
                  />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input
                    id="password"
                    type="password"
                    onChange={event => setPassword(event.target.value)}
                  />
                </FormControl>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={loading || !username.trim() || !password.trim()}
                  className={classes.submit}
                >
                  {loading ? "Logging in..." : "Login"}
                </Button>
                <Button
                  onClick={() => setNewUser(true)}
                  color="secondary"
                  variant="outlined"
                  fullWidth
                >
                  New user? Register here
                </Button>

                {/* Error Handling */}
                {error && <Error error={error} />}
              </form>
            );
          }}
        </Mutation>
      </Paper>
    </div>
  );
};

const LOGIN_MUTATION = gql`
  mutation($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`;

const styles = theme => ({
  root: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up("md")]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing.unit * 2
  },
  title: {
    marginTop: theme.spacing.unit * 2,
    color: theme.palette.secondary.main
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.primary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  }
});

export default withStyles(styles)(Login);
```

- If we refresh the page, as there is a token in the Apollo Client, it is redirect to the `Root` page.

![](/images/other/graphql-full-stack-react-python-and-graphql/UsingApolloClientStateToManageAuthState2.png)

### 41. Adding JWT to our Authorization Header with Apollo Client 4min

- We need to modify main `index.js` document to set the authentication token to the header when we make GraphQl calls.

> index.js

```js
import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";
import { ApolloProvider, Query } from "react-apollo";
import ApolloClient, { gql } from "apollo-boost";

import Root from "./Root";
import Auth from "./components/Auth";

const client = new ApolloClient({
  uri: "http://localhost:9000/graphql/",
  // When we make a fetch we will send credentials
  fetchOptions: {
    credentials: "include"
  },
  // operation allow as to access the header
  request: operation => {
    const token = localStorage.getItem("authToken") || "";
    operation.setContext({
      headers: {
        Authorization: `JWT ${token}`
      }
    });
  },
  clientState: {
    defaults: {
      isLoggedIn: !!localStorage.getItem("authToken")
    }
  }
});

const IS_LOGGED_IN_QUERY = gql`
  query {
    isLoggedIn @client
  }
`;

ReactDOM.render(
  <ApolloProvider client={client}>
    <Query query={IS_LOGGED_IN_QUERY}>
      {({ data }) => (data.isLoggedIn ? <Root /> : <Auth />)}
    </Query>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
```

- In order to test if the authentication is working we are going to change the query we use on the `Root` page for one that needs authentication to be executed.

> Root.js

```js
import React from "react";
import withRoot from "./withRoot";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const Root = () => (
  <Query query={ME_QUERY}>
    {({ data, loading, error }) => {
      if (loading) return <div>Loading</div>;
      if (error) return <div>Error</div>;
      return <div>{JSON.stringify(data)}</div>;
    }}
  </Query>
);

export const ME_QUERY = gql`
  {
    me {
      id
      username
      email
    }
  }
`;

// const GET_TRACKS_QUERY = gql`
//   {
//     tracks {
//       id
//       title
//       description
//       url
//     }
//   }
// `;

export default withRoot(Root);
```

- If we refresh the page we can see the `me` query is executed correctly.

![](/images/other/graphql-full-stack-react-python-and-graphql/AddingJWTtoOurAuthorizationHeaderWithApolloClient.png)

- And if we remove the `authToken` from the `LocalStorage` and refresh the page it is redirected to the `Register` page.

![](/images/other/graphql-full-stack-react-python-and-graphql/AddingJWTtoOurAuthorizationHeaderWithApolloClient2.png)

- And if we log in again we another user we can see the information of this other user.

![](/images/other/graphql-full-stack-react-python-and-graphql/AddingJWTtoOurAuthorizationHeaderWithApolloClient3.png)

### 42. Adding Routing with React Router 4 5min

- We need to modify the `Root` page to manage the `routing`. We are going to use the `React Router DOM`

> Root.js

```js
import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import withRoot from "./withRoot";
import App from "./pages/App";
import Profile from "./pages/Profile";

const Root = () => (
  <Query query={ME_QUERY}>
    {({ data, loading, error }) => {
      if (loading) return <div>Loading</div>;
      if (error) return <div>Error</div>;
      return (
        <Router>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/profile/:id" component={Profile} />
          </Switch>
        </Router>
      );
    }}
  </Query>
);

export const ME_QUERY = gql`
  {
    me {
      id
      username
      email
    }
  }
`;

// const GET_TRACKS_QUERY = gql`
//   {
//     tracks {
//       id
//       title
//       description
//       url
//     }
//   }
// `;

export default withRoot(Root);
```

> pages/App.js

```js
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

const App = ({ classes }) => {
  return <div>App</div>;
};

const styles = theme => ({
  container: {
    margin: "0 auto",
    maxWidth: 960,
    padding: theme.spacing.unit * 2
  }
});

export default withStyles(styles)(App);
```

> pages/Profile.js

```js
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
// import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
// import Avatar from "@material-ui/core/Avatar";
// import Paper from "@material-ui/core/Paper";
// import Typography from "@material-ui/core/Typography";
// import ThumbUpIcon from "@material-ui/icons/ThumbUpTwoTone";
// import AudiotrackIcon from "@material-ui/icons/AudiotrackTwoTone";
// import Divider from "@material-ui/core/Divider";

const Profile = ({ classes }) => {
  return <div>Profile</div>;
};

const styles = theme => ({
  paper: {
    width: "auto",
    display: "block",
    padding: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    [theme.breakpoints.up("md")]: {
      width: 650,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  card: {
    display: "flex",
    justifyContent: "center"
  },
  title: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing.unit * 2
  },
  audioIcon: {
    color: "purple",
    fontSize: 30,
    marginRight: theme.spacing.unit
  },
  thumbIcon: {
    color: "green",
    marginRight: theme.spacing.unit
  },
  divider: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  }
});

export default withStyles(styles)(Profile);
```

- So, we can check the routing works.

![](/images/other/graphql-full-stack-react-python-and-graphql/AddingRoutingWithReactRouter4.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/AddingRoutingWithReactRouter42.png)

- We need to modify the `Root` page to include the `Header` component.

> components/Shared/Header.js

```js
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import RadioIcon from "@material-ui/icons/RadioTwoTone";
// import FaceIcon from "@material-ui/icons/FaceTwoTone";
// import Typography from "@material-ui/core/Typography";

const Header = ({ classes }) => {
  return <div>Header</div>;
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 0,
    padding: 0
  },
  grow: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    textDecoration: "none"
  },
  logo: {
    marginRight: theme.spacing.unit,
    fontSize: 45
  },
  faceIcon: {
    marginRight: theme.spacing.unit,
    fontSize: 30,
    color: "white"
  },
  username: {
    color: "white",
    fontSize: 30
  }
});

export default withStyles(styles)(Header);
```

> Root.js

```js
import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import withRoot from "./withRoot";
import App from "./pages/App";
import Profile from "./pages/Profile";
import Header from "./components/Shared/Header";

const Root = () => (
  <Query query={ME_QUERY}>
    {({ data, loading, error }) => {
      if (loading) return <div>Loading</div>;
      if (error) return <div>Error</div>;
      return (
        <Router>
          <>
            <Header />
            <Switch>
              <Route exact path="/" component={App} />
              <Route path="/profile/:id" component={Profile} />
            </Switch>
          </>
        </Router>
      );
    }}
  </Query>
);

export const ME_QUERY = gql`
  {
    me {
      id
      username
      email
    }
  }
`;

// const GET_TRACKS_QUERY = gql`
//   {
//     tracks {
//       id
//       title
//       description
//       url
//     }
//   }
// `;

export default withRoot(Root);
```

- We can see now that the `Header` component is on top of the `App`and `Profile` pages.

![](/images/other/graphql-full-stack-react-python-and-graphql/AddingRoutingWithReactRouter43.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/AddingRoutingWithReactRouter44.png)

### 43. Styling our Header 6min

- We are going to update the `Shared/Header.js` component to style the header, the `Root` page to send the client data to the Header component and the `Auth/Signout.js` component used to sign out from the app.

> Auth/Signout.js

```js
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import ExitToApp from "@material-ui/icons/ExitToApp";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Signout = ({ classes }) => {
  return (
    <Button>
      <Typography
        variant="body1"
        className={classes.buttonText}
        color="secondary"
      >
        Signout
      </Typography>
      <ExitToApp className={classes.buttonIcon} color="secondary" />
    </Button>
  );
};

const styles = {
  root: {
    cursor: "pointer",
    display: "flex"
  },
  buttonIcon: {
    marginLeft: "5px"
  }
};

export default withStyles(styles)(Signout);
```

> Root.js

```js
import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import withRoot from "./withRoot";
import App from "./pages/App";
import Profile from "./pages/Profile";
import Header from "./components/Shared/Header";

const Root = () => (
  <Query query={ME_QUERY}>
    {({ data, loading, error }) => {
      if (loading) return <div>Loading</div>;
      if (error) return <div>Error</div>;
      const currentUser = data.me;

      return (
        <Router>
          <>
            <Header currentUser={currentUser} />
            <Switch>
              <Route exact path="/" component={App} />
              <Route path="/profile/:id" component={Profile} />
            </Switch>
          </>
        </Router>
      );
    }}
  </Query>
);

export const ME_QUERY = gql`
  {
    me {
      id
      username
      email
    }
  }
`;

// const GET_TRACKS_QUERY = gql`
//   {
//     tracks {
//       id
//       title
//       description
//       url
//     }
//   }
// `;

export default withRoot(Root);
```

> Shared/Header.js

```js
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import RadioIcon from "@material-ui/icons/RadioTwoTone";
import FaceIcon from "@material-ui/icons/FaceTwoTone";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import Signout from "../Auth/Signout";

const Header = ({ classes, currentUser }) => {
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        {/* Title / Logo */}
        <Link to="/" className={classes.grow}>
          <RadioIcon className={classes.logo} color="secondary" />
          <Typography variant="headline" color="secondary" noWrap>
            ReactTracks
          </Typography>
        </Link>

        {/* Auth User Info */}
        {currentUser && (
          <Link to={`/profile/${currentUser.id}`} className={classes.grow}>
            <FaceIcon className={classes.faceIcon} />
            <Typography variant="headline" className={classes.username} noWrap>
              {currentUser.username}
            </Typography>
          </Link>
        )}

        {/* Signout Button */}
        <Signout />
      </Toolbar>
    </AppBar>
  );
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 0,
    padding: 0
  },
  grow: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    textDecoration: "none"
  },
  logo: {
    marginRight: theme.spacing.unit,
    fontSize: 45
  },
  faceIcon: {
    marginRight: theme.spacing.unit,
    fontSize: 30,
    color: "white"
  },
  username: {
    color: "white",
    fontSize: 30
  }
});

export default withStyles(styles)(Header);
```

- If we run the app we can see how the header looks like:

![](/images/other/graphql-full-stack-react-python-and-graphql/StylingOurHeader.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/StylingOurHeader2.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/StylingOurHeader3.png)

### 44. Signing Out Users with Signout Button 5min

- We are going to update the `Auth/Signout.js` component to finish the Sign Out feauture.

- We want to do two things:

1. Remove the token from the `LocalStorage`
2. Update the `isLoggedIn` property from the `Apollo Client State` to false.

> Auth/Signout.js

```js
import React from "react";
import { ApolloConsumer } from "react-apollo";
import withStyles from "@material-ui/core/styles/withStyles";
import ExitToApp from "@material-ui/icons/ExitToApp";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Signout = ({ classes }) => {
  const handleSignout = client => {
    localStorage.removeItem("authToken");
    client.writeData({ data: { isLoggedIn: false } });
    console.log("Signed out user", client);
  };

  return (
    <ApolloConsumer>
      {client => (
        <Button onClick={() => handleSignout(client)}>
          <Typography
            variant="body1"
            className={classes.buttonText}
            color="secondary"
          >
            Signout
          </Typography>
          <ExitToApp className={classes.buttonIcon} color="secondary" />
        </Button>
      )}
    </ApolloConsumer>
  );
};

const styles = {
  root: {
    cursor: "pointer",
    display: "flex"
  },
  buttonIcon: {
    marginLeft: "5px"
  }
};

export default withStyles(styles)(Signout);
```

- If we click now on the `SIGNOUT` button we can see the token is removed from the `LocalStorage` and it is redirect to the `Register` page.

![](/images/other/graphql-full-stack-react-python-and-graphql/SigningOutUsersWithSignoutButton.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/SigningOutUsersWithSignoutButton2.png)

### 45. Creating Loading Component 3min

- If we load the page we can see the `Loading` text.

![](/images/other/graphql-full-stack-react-python-and-graphql/CreatingLoadingComponent.png)

- We are going to finish the `Shared/Loading` component that will be shown instead of the text, the `Root` page will be changed to use it.

> Root.js

```js
import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import withRoot from "./withRoot";
import App from "./pages/App";
import Profile from "./pages/Profile";
import Header from "./components/Shared/Header";
import Loading from "./components/Shared/Loading";
import Error from "./components/Shared/Error";

const Root = () => (
  <Query query={ME_QUERY}>
    {({ data, loading, error }) => {
      if (loading) return <Loading />;
      if (error) return <Error error={error} />;
      const currentUser = data.me;

      return (
        <Router>
          <>
            <Header currentUser={currentUser} />
            <Switch>
              <Route exact path="/" component={App} />
              <Route path="/profile/:id" component={Profile} />
            </Switch>
          </>
        </Router>
      );
    }}
  </Query>
);

export const ME_QUERY = gql`
  {
    me {
      id
      username
      email
    }
  }
`;

// const GET_TRACKS_QUERY = gql`
//   {
//     tracks {
//       id
//       title
//       description
//       url
//     }
//   }
// `;

export default withRoot(Root);
```

> Shared/Loading.js

```js
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loading = ({ classes }) => (
  <div className={classes.root}>
    <CircularProgress className={classes.progress} />
  </div>
);

const styles = theme => ({
  root: {
    width: "100vw",
    textAlign: "center"
  },
  progress: {
    margin: theme.spacing.unit * 2,
    color: theme.palette.secondary.dark
  }
});

export default withStyles(styles)(Loading);
```

- We are going to test it by setting the Network to `Fast 3G` and refreshing the page.

![](/images/other/graphql-full-stack-react-python-and-graphql/CreatingLoadingComponent2.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/CreatingLoadingComponent3.png)

### 46. Displaying Tracks with Track List 15min

- We are going to finish the `pages/App` page to put a search bar, a list with the tracks and for each tarck it will be possible to like the track, see the track details, play the track and if the user has created the track it could be edited and deleted. There will also be a button that will open a dialog to create new tracks.

- The following components will be included

> components/Track/SearchTracks.js

```js
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
// import TextField from "@material-ui/core/TextField";
// import ClearIcon from "@material-ui/icons/Clear";
// import Paper from "@material-ui/core/Paper";
// import IconButton from "@material-ui/core/IconButton";
// import SearchIcon from "@material-ui/icons/Search";

const SearchTracks = ({ classes }) => {
  return <div>SearchTracks</div>;
};

const styles = theme => ({
  root: {
    padding: "2px 4px",
    margin: theme.spacing.unit,
    display: "flex",
    alignItems: "center"
  }
});

export default withStyles(styles)(SearchTracks);
```

> components/Track/TrackList.js

```js
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
// import Typography from "@material-ui/core/Typography";
// import ExpansionPanel from "@material-ui/core/ExpansionPanel";
// import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
// import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
// import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const TrackList = ({ classes }) => <div>TrackList</div>;

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  details: {
    alignItems: "center"
  },
  link: {
    color: "#424242",
    textDecoration: "none",
    "&:hover": {
      color: "black"
    }
  }
};

export default withStyles(styles)(TrackList);
```

> components/Track/CreateTrack.js

```js
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import FormControl from "@material-ui/core/FormControl";
// import FormHelperText from "@material-ui/core/FormHelperText";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
// import CircularProgress from "@material-ui/core/CircularProgress";
// import AddIcon from "@material-ui/icons/Add";
// import ClearIcon from "@material-ui/icons/Clear";
// import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

const CreateTrack = ({ classes }) => {
  return <div>CreateTrack</div>;
};

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  dialog: {
    margin: "0 auto",
    maxWidth: 550
  },
  textField: {
    margin: theme.spacing.unit
  },
  cancel: {
    color: "red"
  },
  save: {
    color: "green"
  },
  button: {
    margin: theme.spacing.unit * 2
  },
  icon: {
    marginLeft: theme.spacing.unit
  },
  input: {
    display: "none"
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
    zIndex: "200"
  }
});

export default withStyles(styles)(CreateTrack);
```

> pages/App.js

```js
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import SearchTracks from "../components/Track/SearchTracks";
import TrackList from "../components/Track/TrackList";
import CreateTrack from "../components/Track/CreateTrack";

const App = ({ classes }) => {
  return (
    <div className={classes.container}>
      <SearchTracks />
      <CreateTrack />
      <TrackList />
    </div>
  );
};

const styles = theme => ({
  container: {
    margin: "0 auto",
    maxWidth: 960,
    padding: theme.spacing.unit * 2
  }
});

export default withStyles(styles)(App);
```

![](/images/other/graphql-full-stack-react-python-and-graphql/DisplayingTracksWithTrackList.png)

- We need to modify the `pages/App` page and the `components/Track/TrackList` components to obtain the list of tracks.

The `TrackList` component is going to use the following components:

> components/Shared/AudioPlayer.js

```js
import React from "react";

const AudioPlayer = () => <div>AudioPlayer</div>;

export default AudioPlayer;
```

> components/Track/LikeTrack.js

```js
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
// import IconButton from "@material-ui/core/IconButton";
// import ThumbUpIcon from "@material-ui/icons/ThumbUp";

const LikeTrack = ({ classes }) => {
  return <div>LikeTrack</div>;
};

const styles = theme => ({
  iconButton: {
    color: "deeppink"
  },
  icon: {
    marginLeft: theme.spacing.unit / 2
  }
});

export default withStyles(styles)(LikeTrack);
```

> components/Track/DeleteTrack.js

```js
import React from "react";
// import IconButton from "@material-ui/core/IconButton";
// import TrashIcon from "@material-ui/icons/DeleteForeverOutlined";

const DeleteTrack = () => {
  return <div>DeleteTrack</div>;
};

export default DeleteTrack;
```

> components/Track/UpdateTrack.js

```js
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
// import IconButton from "@material-ui/core/IconButton";
// import EditIcon from "@material-ui/icons/Edit";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import FormControl from "@material-ui/core/FormControl";
// import FormHelperText from "@material-ui/core/FormHelperText";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import CircularProgress from "@material-ui/core/CircularProgress";
// import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

const UpdateTrack = ({ classes }) => {
  return <div>UpdateTrack</div>;
};

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  dialog: {
    margin: "0 auto",
    maxWidth: 550
  },
  textField: {
    margin: theme.spacing.unit
  },
  cancel: {
    color: "red"
  },
  save: {
    color: "green"
  },
  button: {
    margin: theme.spacing.unit * 2
  },
  icon: {
    marginLeft: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

export default withStyles(styles)(UpdateTrack);
```

> components/Track/TrackList.js

```js
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";

import AudioPlayer from "../Shared/AudioPlayer";
import LikeTrack from "./LikeTrack";
import DeleteTrack from "./DeleteTrack";
import UpdateTrack from "./UpdateTrack";

const TrackList = ({ classes, tracks }) => (
  <List>
    {tracks.map(track => (
      <ExpansionPanel key={track.id}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <ListItem className={classes.root}>
            <LikeTrack />
            <ListItemText
              primaryTypographyProps={{
                variant: "subheading",
                color: "primary"
              }}
              primary={track.title}
              secondary={
                <Link
                  className={classes.link}
                  to={`/profile/${track.postedBy.id}`}
                >
                  {track.postedBy.username}
                </Link>
              }
            />
            <AudioPlayer />
          </ListItem>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <Typography variant="body1">{track.description}</Typography>
        </ExpansionPanelDetails>
        <ExpansionPanelActions>
          <UpdateTrack track={track} />
          <DeleteTrack track={track} />
        </ExpansionPanelActions>
      </ExpansionPanel>
    ))}
  </List>
);

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  details: {
    alignItems: "center"
  },
  link: {
    color: "#424242",
    textDecoration: "none",
    "&:hover": {
      color: "black"
    }
  }
};

export default withStyles(styles)(TrackList);
```

> pages/App.js

```js
import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import withStyles from "@material-ui/core/styles/withStyles";

import SearchTracks from "../components/Track/SearchTracks";
import TrackList from "../components/Track/TrackList";
import CreateTrack from "../components/Track/CreateTrack";
import Loading from "../components/Shared/Loading";
import Error from "../components/Shared/Error";

const App = ({ classes }) => {
  return (
    <div className={classes.container}>
      <SearchTracks />
      <CreateTrack />
      <Query query={GET_TRACKS_QUERY}>
        {({ data, loading, error }) => {
          if (loading) return <Loading />;
          if (error) return <Error error={error} />;
          return <TrackList tracks={data.tracks} />;
        }}
      </Query>
    </div>
  );
};

export const GET_TRACKS_QUERY = gql`
  query getTracksQuery {
    tracks {
      id
      title
      description
      url
      likes {
        id
      }
      postedBy {
        id
        username
      }
    }
  }
`;

const styles = theme => ({
  container: {
    margin: "0 auto",
    maxWidth: 960,
    padding: theme.spacing.unit * 2
  }
});

export default withStyles(styles)(App);
```

![](/images/other/graphql-full-stack-react-python-and-graphql/DisplayingTracksWithTrackList2.png)

![](/images/other/graphql-full-stack-react-python-and-graphql/DisplayingTracksWithTrackList3.png)
