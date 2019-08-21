# Build a News Feed with Nuxt 2 and Firestore

> Github Repositories

- [build-a-news-feed-with-nuxt-2-and-firestore](https://github.com/peelmicro/build-a-news-feed-with-nuxt-2-and-firestore).

The [Build a News Feed with Nuxt 2 and Firestore
](https://www.udemy.com/course/build-a-news-feed-with-nuxt-2-and-firestore/) Udemy course explains how to Create a complete, full-stack news aggregator from front to back with Nuxt 2, Firestore and Vue Material.

> Other parts:

- [Build a News Feed with Nuxt 2 and Firestore (Part 2)](./vuejs-build-a-news-feed-with-nuxt-2-and-firestore-2.md)

> Table of contents
> [[toc]]

## What I've learned

- See how to implement core Nuxt concepts (middleware, plugins, modules pages / routing, etc.) in building your own Nuxt apps
- Learn the practical side of working with various Nuxt / Vue features within the context of building a professional, complete application
- Use the techniques / material covered in this course to spark your own ideas in making cool, functional web apps
- Rapidly (yet thoroughly) build a Nuxt project from start to finish

## Section 1: Getting Started 0 / 2|4min

### 1. Required Tools 2min

- We need to have installed at least `NodeJs 10.x`. We can install it from []

```bash
C:\Windows\system32>node -v
v11.13.0
```

- We can install it from [NodeJs](https://nodejs.org/en/)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/RequiredTools.png)

- We can also use [Chocolately NodeJs](https://chocolatey.org/packages/nodejs)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/RequiredTools2.png)

- We also need to have [Visual Studio Code Editor](https://code.visualstudio.com/)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/RequiredTools3.png)

- We also need the [Chrome Canary Browser](https://www.google.com/chrome/canary/)

Chrome has four release channels – stable, beta, dev and canary. Stable is the regular Chrome most users use. Canary is simply a much newer release that's not as well tested, but has the latest shiny stuff. After a while, the version that was released in the canary channel gets any bugs that are found fixed, then filters downward to dev, and then to the beta and stable releases. Other than the lack of testing, and possibly not having all the bugs fixed, canary is merely Chrome FROM THE FUTURE (except for those features that might get scrapped due to lack of quality).

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/RequiredTools4.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/RequiredTools5.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/RequiredTools6.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/RequiredTools7.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/RequiredTools8.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/RequiredTools9.png)

- We need to install `Vue dev tools`

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/RequiredTools10.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/RequiredTools11.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/RequiredTools12.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/RequiredTools13.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/RequiredTools14.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/RequiredTools15.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/RequiredTools16.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/RequiredTools17.png)

### 2. Create Project with create-nuxt-app 2min

- Instead of installing the the `create-nuxt-app` Nuxt client globally we are going to use [npx](https://www.npmjs.com/package/npx). This command execute client npm commands without needing to install them. It also ensure you are using the latest version.

```
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs
$ npx create-nuxt-app nuxt-news
npx: installed 379 in 32.655s
> Generating Nuxt.js project in C:\Work\Training\Pre\VueJs\nuxt-news
? Project name nuxt-news
? Project description A news application built with Nuxt 2 and Firestore
? Use a custom server framework none
? Choose features to install Axios
? Use a custom UI framework none
? Use a custom test framework none
? Choose rendering mode Single Page App
? Author name Juan Pablo Perez
? Choose a package manager npm

> core-js@2.6.9 postinstall C:\Work\Training\Pre\VueJs\nuxt-news\node_modules\core-js
> node scripts/postinstall || echo "ignore"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

> core-js@2.6.9 postinstall C:\Work\Training\Pre\VueJs\nuxt-news\node_modules\core-js
> node scripts/postinstall || echo "ignore"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js
> https://www.patreon.com/zloirock

> core-js@2.6.9 postinstall C:\Work\Training\Pre\VueJs\nuxt-news\node_modules\core-js
> node scripts/postinstall || echo "ignore"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js
> https://www.patreon.com/zloirock

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> core-js@2.6.9 postinstall C:\Work\Training\Pre\VueJs\nuxt-news\node_modules\core-js
> node scripts/postinstall || echo "ignore"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js
> https://www.patreon.com/zloirock

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> core-js-pure@3.1.3 postinstall C:\Work\Training\Pre\VueJs\nuxt-news\node_modules\core-js-pure
> node scripts/postinstall || echo "ignore"


> core-js@2.6.9 postinstall C:\Work\Training\Pre\VueJs\nuxt-news\node_modules\core-js
> node scripts/postinstall || echo "ignore"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js
> https://www.patreon.com/zloirock

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> core-js-pure@3.1.3 postinstall C:\Work\Training\Pre\VueJs\nuxt-news\node_modules\core-js-pure
> node scripts/postinstall || echo "ignore"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

> core-js@2.6.9 postinstall C:\Work\Training\Pre\VueJs\nuxt-news\node_modules\core-js
> node scripts/postinstall || echo "ignore"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js
> https://www.patreon.com/zloirock

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> core-js-pure@3.1.3 postinstall C:\Work\Training\Pre\VueJs\nuxt-news\node_modules\core-js-pure
> node scripts/postinstall || echo "ignore"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js
> https://www.patreon.com/zloirock

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> nodemon@1.19.1 postinstall C:\Work\Training\Pre\VueJs\nuxt-news\node_modules\nodemon
> node bin/postinstall || exit 0

Love nodemon? You can now support the project via the open collective:
  > https://opencollective.com/nodemon/donate


> nuxt@2.8.1 postinstall C:\Work\Training\Pre\VueJs\nuxt-news\node_modules\nuxt
> opencollective || exit 0



> core-js@2.6.9 postinstall C:\Work\Training\Pre\VueJs\nuxt-news\node_modules\core-js
> node scripts/postinstall || echo "ignore"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js
> https://www.patreon.com/zloirock

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> core-js-pure@3.1.3 postinstall C:\Work\Training\Pre\VueJs\nuxt-news\node_modules\core-js-pure
> node scripts/postinstall || echo "ignore"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js
> https://www.patreon.com/zloirock

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> nodemon@1.19.1 postinstall C:\Work\Training\Pre\VueJs\nuxt-news\node_modules\nodemon
> node bin/postinstall || exit 0

Love nodemon? You can now support the project via the open collective:
  > https://opencollective.com/nodemon/donate


> nuxt@2.8.1 postinstall C:\Work\Training\Pre\VueJs\nuxt-news\node_modules\nuxt
> opencollective || exit 0


                                      :-:
                                    .==-+:
                                   .==. :+- .-=-
                                  .==.   :==++-+=.
                                 :==.     -**: :+=.
npm

> core-js@2.6.9 postinstall C:\Work\Training\Pre\VueJs\nuxt-news\node_modules\core-js
> node scripts/postinstall || echo "ignore"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js
> https://www.patreon.com/zloirock

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> core-js-pure@3.1.3 postinstall C:\Work\Training\Pre\VueJs\nuxt-news\node_modules\core-js-pure
> node scripts/postinstall || echo "ignore"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js
> https://www.patreon.com/zloirock

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> nodemon@1.19.1 postinstall C:\Work\Training\Pre\VueJs\nuxt-news\node_modules\nodemon
> node bin/postinstall || exit 0

Love nodemon? You can now support the project via the open collective:
  > https://opencollective.com/nodemon/donate


> nuxt@2.8.1 postinstall C:\Work\Training\Pre\VueJs\nuxt-news\node_modules\nuxt
> opencollective || exit 0


                                      :-:
                                    .==-+:
                                   .==. :+- .-=-
                                  .==.   :==++-+=.
                                 :==.     -**: :+=.

> core-js@2.6.9 postinstall C:\Work\Training\Pre\VueJs\nuxt-news\node_modules\core-js
> node scripts/postinstall || echo "ignore"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js
> https://www.patreon.com/zloirock

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> core-js-pure@3.1.3 postinstall C:\Work\Training\Pre\VueJs\nuxt-news\node_modules\core-js-pure
> node scripts/postinstall || echo "ignore"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js
> https://www.patreon.com/zloirock

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> nodemon@1.19.1 postinstall C:\Work\Training\Pre\VueJs\nuxt-news\node_modules\nodemon
> node bin/postinstall || exit 0

Love nodemon? You can now support the project via the open collective:
  > https://opencollective.com/nodemon/donate


> nuxt@2.8.1 postinstall C:\Work\Training\Pre\VueJs\nuxt-news\node_modules\nuxt
> opencollective || exit 0


                                      :-:
                                    .==-+:
                                   .==. :+- .-=-
                                  .==.   :==++-+=.
                                 :==.     -**: :+=.
                                :+-      :*+++. .++.
                               :+-      -*= .++: .=+.
                              -+:      =*-   .+*: .=+:
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\watchpack\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\nodemon\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.0.7 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.0.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})



> core-js@2.6.9 postinstall C:\Work\Training\Pre\VueJs\nuxt-news\node_modules\core-js
> node scripts/postinstall || echo "ignore"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js
> https://www.patreon.com/zloirock

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> core-js-pure@3.1.3 postinstall C:\Work\Training\Pre\VueJs\nuxt-news\node_modules\core-js-pure
> node scripts/postinstall || echo "ignore"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js
> https://www.patreon.com/zloirock

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> nodemon@1.19.1 postinstall C:\Work\Training\Pre\VueJs\nuxt-news\node_modules\nodemon
> node bin/postinstall || exit 0

Love nodemon? You can now support the project via the open collective:
  > https://opencollective.com/nodemon/donate


> nuxt@2.8.1 postinstall C:\Work\Training\Pre\VueJs\nuxt-news\node_modules\nuxt
> opencollective || exit 0


                                      :-:
                                    .==-+:
                                   .==. :+- .-=-
                                  .==.   :==++-+=.
                                 :==.     -**: :+=.
                                :+-      :*+++. .++.
                               :+-      -*= .++: .=+.
                              -+:      =*-   .+*: .=+:

  To get started:

        cd nuxt-news
        npm run dev

  To build & start for production:

        cd nuxt-news
        npm run build
        npm start
```

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs
$ cd nuxt-news/

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/nuxt-news (master)
$ npm run dev

> nuxt-news@1.0.0 dev C:\Work\Training\Pre\VueJs\nuxt-news
> nuxt


   ╭──────────────────────────────────────────╮
   │                                          │
   │   Nuxt.js v2.8.1                         │
   │   Running in development mode (spa)      │
   │                                          │
   │   Listening on: http://localhost:3000/   │
   │                                          │
   ╰──────────────────────────────────────────╯

i Preparing project for development                                                                                                                           05:41:37
i Initial build may take a while                                                                                                                              05:41:37
√ Builder initialized                                                                                                                                         05:41:37
√ Nuxt files generated                                                                                                                                        05:41:37

√ Client
  Compiled successfully in 5.64s

i Waiting for file changes                                                                                                                                    05:41:46
i Memory usage: 117 MB (RSS: 205 MB)                                                                                                                          05:41:46

```

- Browse to http://localhost:3000/

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateProjectWithCreateNuxtApp.png)

## Section 2: Adding Vue Material 0 / 2|7min

### 3. Integrate Vue Material with App 4min

- We are going to use the [Vue Material](https://vuematerial.io/) library.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/IntegrateVueMaterialWithApp.png)

- We need to execute `npm install vue-material --save` to install it locally.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/nuxt-news (master)
$ npm install vue-material --save
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.0.7 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.0.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\watchpack\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\nodemon\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ vue-material@1.0.0-beta-11
added 1 package from 1 contributor and audited 12603 packages in 23.676s
found 0 vulnerabilities
```

- We are going to create the `plugins/vue-material.js` document to configure the use of `Vue Material`

> plugins/vue-material.js

```js
import Vue from "vue";
import VueMaterial from "vue-material";

Vue.use(VueMaterial);
```

- We need to modify the `nuxt.config.js` document to include the new `vue-material plugin` created.

> nuxt.config.js

```js
export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [{ src: "vue-material/dist/vue-material.min.css", lang: "css" }],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~/plugins/vue-material" }],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
```

- We need to ensure the application is still working by executing

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/nuxt-news (master)
$ npm run dev

> nuxt-news@1.0.0 dev C:\Work\Training\Pre\VueJs\nuxt-news
> nuxt


   ╭──────────────────────────────────────────╮
   │                                          │
   │   Nuxt.js v2.8.1                         │
   │   Running in development mode (spa)      │
   │                                          │
   │   Listening on: http://localhost:3000/   │
   │                                          │
   ╰──────────────────────────────────────────╯

i Preparing project for development                                                                                                                           06:03:54
i Initial build may take a while                                                                                                                              06:03:54
√ Builder initialized                                                                                                                                         06:03:54
√ Nuxt files generated                                                                                                                                        06:03:55

√ Client
  Compiled successfully in 7.53s

i Waiting for file changes                                                                                                                                    06:04:08
i Memory usage: 137 MB (RSS: 193 MB)                                                                                                                          06:04:08
```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/IntegrateVueMaterialWithApp2.png)

- We are going to modify the `pages/index.vue` document to set up the main page.

> pages/index.vue

```html
<template>
  <div>
    <p>Nuxt News</p>
    <md-button>Submit</md-button>
  </div>
</template>
```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/IntegrateVueMaterialWithApp3.png)

### 4. Generate Vue Material Theme (App Color Scheme) 3min

- We are going to create a specific `Vue Material Theme` by installing `node-sass` and `sass-loader` in development (with -save-dev or -D)

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs
$ npm i -D node-sass sass-loader

> node-sass@4.12.0 install C:\Work\Training\Pre\VueJs\node_modules\node-sass
> node scripts/install.js

Downloading binary from https://github.com/sass/node-sass/releases/download/v4.12.0/win32-x64-67_binding.node
Download complete..] - :
Binary saved to C:\Work\Training\Pre\VueJs\node_modules\node-sass\vendor\win32-x64-67\binding.node
Caching binary to C:\Users\juan.pablo.perez\AppData\Roaming\npm-cache\node-sass\4.12.0\win32-x64-67_binding.node

> node-sass@4.12.0 postinstall C:\Work\Training\Pre\VueJs\node_modules\node-sass
> node scripts/build.js

Binary found at C:\Work\Training\Pre\VueJs\node_modules\node-sass\vendor\win32-x64-67\binding.node
Testing binary
Binary is fine
npm WARN saveError ENOENT: no such file or directory, open 'C:\Work\Training\Pre\VueJs\package.json'
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN enoent ENOENT: no such file or directory, open 'C:\Work\Training\Pre\VueJs\package.json'
npm WARN sass-loader@7.1.0 requires a peer of webpack@^3.0.0 || ^4.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN VueJs No description
npm WARN VueJs No repository field.
npm WARN VueJs No README data
npm WARN VueJs No license field.

+ sass-loader@7.1.0
+ node-sass@4.12.0
added 193 packages from 164 contributors and audited 551 packages in 60.361s
found 0 vulnerabilities
```

- We need to create the `assests/theme.scss` document.

> assests/theme.scss

```css
@import "~vue-material/dist/theme/engine";

@include md-register-theme(
  "default",
  (
    primary: md-get-palette-color(lightgreen, 400),
    accent: md-get-palette-color(red, A400),
    theme: dark
  )
);

@import "~vue-material/dist/theme/all";
```

- We can see how the theme can be configured on [Vue Material - Themes - Configuration
  ](https://vuematerial.io/themes/configuration)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/GenerateVueMaterialTheme.png)

- We need to modify the `nuxt.config.js` document to include the new `theme` created.

> nuxt.config.js

```js
export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#9ccc65", height: "10px" },
  /*
   ** Global CSS
   */
  css: [
    { src: "vue-material/dist/vue-material.min.css", lang: "css" },
    { src: "~/assets/theme.scss", lang: "scss" }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~/plugins/vue-material" }],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
```

- We are going to modify the `pages/index.vue` document add `Vue Material design` to the `Submit` button.

> pages/index.vue

```html
<template>
  <div>
    <p>Nuxt News</p>
    <md-button class="md-primary">Submit</md-button>
  </div>
</template>
```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/GenerateVueMaterialTheme2.png)

## Section 3: Axios Module, Built-in Nuxt Methods (fetch / asyncData) 0 / 6|21min

### 5. Get API Key from NewsAPI, asyncData to Fetch Top Headlines 5min

- We are going to use the [News API](https://newsapi.org/)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/GetAPIKeyFromNewsAPI.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/GetAPIKeyFromNewsAPI2.png)

- Your API key is: `79e7f03896bd42fb99ebb9b33e55518f`

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/GetAPIKeyFromNewsAPI3.png)

- As it's explained on [New API Authentication](https://newsapi.org/docs/authentication)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/GetAPIKeyFromNewsAPI4.png)

- We need to create the `plugins/axios.js` to configure the use of `Axios.

> plugins/axios.js

```js
export default function({ $axios }) {
  $axios.onRequest(config => {
    config.headers.common["Authorization"] = process.env.NEWS_API_KEY;
  });
}
```

- We need to modify the `nuxt.config.js` document to include the new `NEWS_API_KEY` environment variable and `Axios`.

> nuxt.config.js

```js
export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#9ccc65", height: "10px" },
  /*
   ** Global CSS
   */
  css: [
    { src: "vue-material/dist/vue-material.min.css", lang: "css" },
    { src: "~/assets/theme.scss", lang: "scss" }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~/plugins/vue-material" }, { src: "~/plugins/axios" }],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    credentials: true
  },
  env: {
    NEWS_API_KEY: "79e7f03896bd42fb99ebb9b33e55518f"
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
};
```

- We are going to modify the `pages/index.vue` document add `a request to teh API News` .

> pages/index.vue

```html
<template>
  <div>
    <p>Nuxt News</p>
    <ul v-for="headline in headlines" :key="headline.id">
      <li>{{headline}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    async asyncData({ app }) {
      const topHeadlines = await app.$axios.$get(
        "https://newsapi.org/v2/top-headlines?country=us"
      );
      return { headlines: topHeadlines.articles };
    }
  };
</script>
```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/GetAPIKeyFromNewsAPI5.png)

### 6. Proxy Axios Requests with Nuxt Proxy Module 2min

- We are going to install [Nuxt proxy](https://github.com/nuxt-community/proxy-module) that is the solution of cross origin resource sharing in `Nuxt.js`

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/nuxt-news (master)
$ npm i @nuxtjs/proxy
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.0.7 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.0.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\watchpack\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\nodemon\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ @nuxtjs/proxy@1.3.3
updated 1 package and audited 13515 packages in 66.768s
found 0 vulnerabilities
```

- Once installed we need to modify the `nuxt.config.js` document to set it up..

> nuxt.config.js

```js
export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#9ccc65", height: "10px" },
  /*
   ** Global CSS
   */
  css: [
    { src: "vue-material/dist/vue-material.min.css", lang: "css" },
    { src: "~/assets/theme.scss", lang: "scss" }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~/plugins/vue-material" }, { src: "~/plugins/axios" }],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
    "@nuxtjs/proxy"
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    credentials: true,
    proxy: true
  },
  proxy: {
    "/api/": {
      target: "https://newsapi.org/v2/",
      pathRewrite: { "^/api/": "" }
    }
  },
  env: {
    NEWS_API_KEY: "79e7f03896bd42fb99ebb9b33e55518f"
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
};
```

- We can now modify the `pages/index.vue` document to use the `/api/ url`.

> pages/index.vue

```html
<template>
  <div>
    <p>Nuxt News</p>
    <ul v-for="headline in headlines" :key="headline.id">
      <li>{{headline}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    async asyncData({ app }) {
      const topHeadlines = await app.$axios.$get(
        "/api/top-headlines?country=us"
      );
      return { headlines: topHeadlines.articles };
    }
  };
</script>
```

- We can check if the app still works properly by executing `npm run dev`

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ProxyAxiosRequestsWithNuxtProxyModule.png)

### 7. Style Headlines with Card Components 4min

- We can now modify the `pages/index.vue` document again to use the `Vue Material` components to style the `News API` data properly.

> pages/index.vue

```html
<template>
  <div class="md-layout md-alignment-center">
    <!-- App Content -->
    <div class="md-layout-item md-size-95">
      <md-content
        class="md-layout md-gutter"
        style="background: #007998; padding: 1em;"
      >
        <ul
          v-for="headline in headlines"
          :key="headline.id"
          class="md-layout-item md-large-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100"
        >
          <md-card style="margin-top: 1em;" md-with-hover>
            <md-ripple>
              <md-card-media md-ratio="16:9">
                <img :src="headline.urlToImage" :alt="headline.title" />
              </md-card-media>

              <md-card-header>
                <div class="md-title">
                  <a :href="headline.url" target="_blank">{{headline.title}}</a>
                </div>
                <div>
                  {{headline.source.name}}
                  <md-icon class="small-icon">book</md-icon>
                </div>
                <div class="md-subhead" v-if="headline.author">
                  {{headline.author}}
                  <md-icon class="small-icon">face</md-icon>
                </div>
                <div class="md-subhead">
                  {{headline.publishedAt}}
                  <md-icon class="small-icon">alarm</md-icon>
                </div>
              </md-card-header>

              <md-card-content>{{headline.description}}</md-card-content>

              <md-card-actions>
                <md-button class="md-icon-button">
                  <md-icon>bookmark</md-icon>
                </md-button>
                <md-button class="md-icon-button">
                  <md-icon>message</md-icon>
                </md-button>
              </md-card-actions>
            </md-ripple>
          </md-card>
        </ul>
      </md-content>
    </div>
  </div>
</template>

<script>
  export default {
    async asyncData({ app }) {
      const topHeadlines = await app.$axios.$get(
        "/api/top-headlines?country=us"
      );
      return { headlines: topHeadlines.articles };
    }
  };
</script>

<style scoped>
  .small-icon {
    font-size: 18px !important;
  }
</style>
```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/StyleHeadlinesWithCardComponents.png)

### 8. Preventing Errors - Changing 'to' to '\$router.push' for Route Changes 2min

- It seems as if there was the [Cannot read property 'options' of undefined" when passing route to md-list-item](https://github.com/vuematerial/vue-material/issues/1980) error when using `vue 2.5.2`, `vue-material 1.0.0-beta-10.2` and `vue-router 3.0.2`.

- But, according to [[Nuxt] Error in render: "TypeError: Cannot read property 'options' of undefined"](https://github.com/vuematerial/vue-material/issues/2039) the issue is supposed to be solved.

### 9. Add Login / Register Pages, Create Navbar 3min

- We are going to create the `pages/login` folder and the the `pages/login/index.vue` document to add a `Login` page to our app.

> pages/login/index.vue

```html
<template>
  <p>login</p>
</template>
```

- We are also going to create the `pages/register` folder and the the `pages/register/index.vue` document to add a `Rogin` page to our app.

> pages/register/index.vue

```html
<template>
  <p>register</p>
</template>
```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddLoginRegisterPages.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddLoginRegisterPages2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddLoginRegisterPages3.png)

- We can now modify the `pages/index.vue` document again to include a `Navigation Menu`.

> pages/index.vue

```html
<template>
  <div class="md-layout md-alignment-center" style="margin: 4em 0">
    <!-- Top Navigation -->
    <md-toolbar class="fixed-toolbar" elevation="1">
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>
      <nuxt-link class="md-primary md-title" to="/">NuxtNews</nuxt-link>

      <div class="md-toolbar-section-end">
        <md-button to="/login">Login</md-button>
        <md-button to="/register">Register</md-button>
      </div>
    </md-toolbar>

    <!-- App Content -->
    <div class="md-layout-item md-size-95">
      <md-content
        class="md-layout md-gutter"
        style="background: #007998; padding: 1em;"
      >
        <ul
          v-for="headline in headlines"
          :key="headline.id"
          class="md-layout-item md-large-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100"
        >
          <md-card style="margin-top: 1em;" md-with-hover>
            <md-ripple>
              <md-card-media md-ratio="16:9">
                <img :src="headline.urlToImage" :alt="headline.title" />
              </md-card-media>

              <md-card-header>
                <div class="md-title">
                  <a :href="headline.url" target="_blank">{{headline.title}}</a>
                </div>
                <div>
                  {{headline.source.name}}
                  <md-icon class="small-icon">book</md-icon>
                </div>
                <div class="md-subhead" v-if="headline.author">
                  {{headline.author}}
                  <md-icon class="small-icon">face</md-icon>
                </div>
                <div class="md-subhead">
                  {{headline.publishedAt}}
                  <md-icon class="small-icon">alarm</md-icon>
                </div>
              </md-card-header>

              <md-card-content>{{headline.description}}</md-card-content>

              <md-card-actions>
                <md-button class="md-icon-button">
                  <md-icon>bookmark</md-icon>
                </md-button>
                <md-button class="md-icon-button">
                  <md-icon>message</md-icon>
                </md-button>
              </md-card-actions>
            </md-ripple>
          </md-card>
        </ul>
      </md-content>
    </div>
  </div>
</template>

<script>
  export default {
    async asyncData({ app }) {
      const topHeadlines = await app.$axios.$get(
        "/api/top-headlines?country=us"
      );
      return { headlines: topHeadlines.articles };
    }
  };
</script>

<style scoped>
  .small-icon {
    font-size: 18px !important;
  }

  .fixed-toolbar {
    position: fixed;
    top: 0;
    z-index: 5;
  }
</style>
```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddLoginRegisterPages4.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddLoginRegisterPages5.png)

### 10. Create Vuex Store, Use fetch to Put Headlines in Store 5min

- We are going to create the `store\index.js` document to set up our `store` for the or app.

> store\index.js

```bash
import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      headlines: []
    },
    mutations: {
      setHeadlines(state, headlines) {
        state.headlines = headlines;
      }
    },
    actions: {
      async loadHeadlines({ commit }, apiUrl) {
        const { articles } = await this.$axios.$get(apiUrl);
        commit("setHeadlines", articles);
      }
    },
    getters: {
      headlines: state => state.headlines
    }
  });
};

export default createStore;
```

- We can now modify the `pages/index.vue` document again to use the store to get the data from the `News API`.

> pages/index.vue

```html
<template>
  <div class="md-layout md-alignment-center" style="margin: 4em 0">
    <!-- Top Navigation -->
    <md-toolbar class="fixed-toolbar" elevation="1">
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>
      <nuxt-link class="md-primary md-title" to="/">NuxtNews</nuxt-link>

      <div class="md-toolbar-section-end">
        <md-button to="/login">Login</md-button>
        <md-button to="/register">Register</md-button>
      </div>
    </md-toolbar>

    <!-- App Content -->
    <div class="md-layout-item md-size-95">
      <md-content
        class="md-layout md-gutter"
        style="background: #007998; padding: 1em;"
      >
        <ul
          v-for="headline in headlines"
          :key="headline.id"
          class="md-layout-item md-large-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100"
        >
          <md-card style="margin-top: 1em;" md-with-hover>
            <md-ripple>
              <md-card-media md-ratio="16:9">
                <img :src="headline.urlToImage" :alt="headline.title" />
              </md-card-media>

              <md-card-header>
                <div class="md-title">
                  <a :href="headline.url" target="_blank">{{headline.title}}</a>
                </div>
                <div>
                  {{headline.source.name}}
                  <md-icon class="small-icon">book</md-icon>
                </div>
                <div class="md-subhead" v-if="headline.author">
                  {{headline.author}}
                  <md-icon class="small-icon">face</md-icon>
                </div>
                <div class="md-subhead">
                  {{headline.publishedAt}}
                  <md-icon class="small-icon">alarm</md-icon>
                </div>
              </md-card-header>

              <md-card-content>{{headline.description}}</md-card-content>

              <md-card-actions>
                <md-button class="md-icon-button">
                  <md-icon>bookmark</md-icon>
                </md-button>
                <md-button class="md-icon-button">
                  <md-icon>message</md-icon>
                </md-button>
              </md-card-actions>
            </md-ripple>
          </md-card>
        </ul>
      </md-content>
    </div>
  </div>
</template>

<script>
  export default {
    async fetch({ store }) {
      await store.dispatch("loadHeadlines", "/api/top-headlines?country=us");
    },
    computed: {
      headlines() {
        return this.$store.getters.headlines;
      }
    }
  };
</script>

<style scoped>
  .small-icon {
    font-size: 18px !important;
  }

  .fixed-toolbar {
    position: fixed;
    top: 0;
    z-index: 5;
  }
</style>
```

- We can check if it works correctly by running the app with `npm run dev`

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateVuexStoreUseFetchToPutHeadlinesInStore.png)

## Section 4: Fetching News Headlines with NewsAPI 0 / 2|13min

### 11. Select Headlines by News Category 8min

- We can now modify the `pages/index.vue` document again to add a `Categories` option menu and the `loading` progress bar that will be shown when the data is loading.

> pages/index.vue

```html
<template>
  <div class="md-layout md-alignment-center" style="margin: 4em 0">
    <!-- Top Navigation -->
    <md-toolbar class="fixed-toolbar" elevation="1">
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>
      <nuxt-link class="md-primary md-title" to="/">NuxtNews</nuxt-link>

      <div class="md-toolbar-section-end">
        <md-button to="/login">Login</md-button>
        <md-button to="/register">Register</md-button>
        <md-button class="md-accent" @click="showSidepanel = true"
          >Categories</md-button
        >
      </div>
    </md-toolbar>

    <!-- News Categories (Right Drawer) -->
    <md-drawer class="md-right" md-fixed :md-active.sync="showSidepanel">
      <md-toolbar :md-elevation="1">
        <span class="md-title">News Categories</span>
      </md-toolbar>

      <md-progress-bar v-if="loading" md-mode="indeterminate"></md-progress-bar>

      <md-list>
        <md-subheader class="md-primary">Categories</md-subheader>

        <md-list-item
          v-for="(newsCategory, i) in newsCategories"
          :key="i"
          @click="loadCategory(newsCategory.path)"
        >
          <md-icon :class="newsCategory.path === category ? 'md-primary' : ''"
            >{{newsCategory.icon}}</md-icon
          >
          <span class="md-list-item-text">{{newsCategory.name}}</span>
        </md-list-item>
      </md-list>
    </md-drawer>

    <!-- App Content -->
    <div class="md-layout-item md-size-95">
      <md-content
        class="md-layout md-gutter"
        style="background: #007998; padding: 1em;"
      >
        <ul
          v-for="headline in headlines"
          :key="headline.id"
          class="md-layout-item md-large-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100"
        >
          <md-card style="margin-top: 1em;" md-with-hover>
            <md-ripple>
              <md-card-media md-ratio="16:9">
                <img :src="headline.urlToImage" :alt="headline.title" />
              </md-card-media>

              <md-card-header>
                <div class="md-title">
                  <a :href="headline.url" target="_blank">{{headline.title}}</a>
                </div>
                <div>
                  {{headline.source.name}}
                  <md-icon class="small-icon">book</md-icon>
                </div>
                <div class="md-subhead" v-if="headline.author">
                  {{headline.author}}
                  <md-icon class="small-icon">face</md-icon>
                </div>
                <div class="md-subhead">
                  {{headline.publishedAt}}
                  <md-icon class="small-icon">alarm</md-icon>
                </div>
              </md-card-header>

              <md-card-content>{{headline.description}}</md-card-content>

              <md-card-actions>
                <md-button class="md-icon-button">
                  <md-icon>bookmark</md-icon>
                </md-button>
                <md-button class="md-icon-button">
                  <md-icon>message</md-icon>
                </md-button>
              </md-card-actions>
            </md-ripple>
          </md-card>
        </ul>
      </md-content>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      showSidepanel: false,
      newsCategories: [
        { name: "Top Headlines", path: "", icon: "today" },
        { name: "Technology", path: "technology", icon: "keyboard" },
        { name: "Business", path: "business", icon: "business_center" },
        { name: "Entertainment", path: "entertainment", icon: "weekend" },
        { name: "Health", path: "health", icon: "fastfood" },
        { name: "Science", path: "science", icon: "fingerprint" },
        { name: "Sports", path: "sports", icon: "golf_course" }
      ]
    }),
    async fetch({ store }) {
      await store.dispatch(
        "loadHeadlines",
        `/api/top-headlines?country=us&category=${store.state.category}`
      );
    },
    computed: {
      headlines() {
        return this.$store.getters.headlines;
      },
      category() {
        return this.$store.getters.category;
      },
      loading() {
        return this.$store.getters.loading;
      }
    },
    methods: {
      async loadCategory(category) {
        this.$store.commit("setCategory", category);
        await this.$store.dispatch(
          "loadHeadlines",
          `/api/top-headlines?country=us&category=${this.category}`
        );
      }
    }
  };
</script>

<style scoped>
  .small-icon {
    font-size: 18px !important;
  }

  .fixed-toolbar {
    position: fixed;
    top: 0;
    z-index: 5;
  }
</style>
```

- We also need to modify the `store/index.js` document to include the different parts for the categories data and the loading progress bar.

> store/index.js

```js
import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      headlines: [],
      loading: false,
      category: ""
    },
    mutations: {
      setHeadlines(state, headlines) {
        state.headlines = headlines;
      },
      setLoading(state, loading) {
        state.loading = loading;
      },
      setCategory(state, category) {
        state.category = category;
      }
    },
    actions: {
      async loadHeadlines({ commit }, apiUrl) {
        commit("setLoading", true);
        const { articles } = await this.$axios.$get(apiUrl);
        commit("setLoading", false);
        commit("setHeadlines", articles);
      }
    },
    getters: {
      headlines: state => state.headlines,
      loading: state => state.loading,
      category: state => state.category
    }
  });
};

export default createStore;
```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SelectHeadlinesByNewsCategory.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SelectHeadlinesByNewsCategory2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SelectHeadlinesByNewsCategory3.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SelectHeadlinesByNewsCategory4.png)

### 12. Select Headlines by Country 6min

- We can now modify the `pages/index.vue` document again to add a left drawer for `Personal Feed` and a new button on it to select the `Country`.

> pages/index.vue

```html
<template>
  <div class="md-layout md-alignment-center" style="margin: 4em 0">
    <!-- Top Navigation -->
    <md-toolbar class="fixed-toolbar" elevation="1">
      <md-button @click="showLeftSidepanel = true" class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>
      <nuxt-link class="md-primary md-title" to="/">
        NuxtNews
      </nuxt-link>

      <div class="md-toolbar-section-end">
        <md-button to="/login">Login</md-button>
        <md-button to="/register">Register</md-button>
        <md-button class="md-accent" @click="showRightSidepanel = true">Categories</md-button>
      </div>
    </md-toolbar>

    <!-- Personal News Feed (Left Drawer) -->
    <md-drawer md-fixed :md-active.sync="showLeftSidepanel">
      <md-toolbar md-elevation="1">
        <span class="md-title">Personal Feed</span>
      </md-toolbar>

      <md-progress-bar v-if="loading" md-mode="indeterminate"></md-progress-bar>

      <md-field>
        <label for="country">Country</label>
        <md-select @input="changeCountry" :value="country" name="country" id="country">
          <md-option value="us">United States</md-option>
          <md-option value="ca">Canada</md-option>
          <md-option value="de">Germany</md-option>
          <md-option value="ru">Russia</md-option>
        </md-select>
      </md-field>
    </md-drawer>

    <!-- News Categories (Right Drawer) -->
    <md-drawer class="md-right" md-fixed :md-active.sync="showRightSidepanel">
      <md-toolbar :md-elevation="1">
        <span class="md-title">News Categories</span>
      </md-toolbar>

      <md-progress-bar v-if="loading" md-mode='indeterminate'></md-progress-bar>

      <md-list>
        <md-subheader class="md-primary">Categories</md-subheader>

        <md-list-item v-for="(newsCategory, i) in newsCategories" :key="i" @click="loadCategory(newsCategory.path)">
          <md-icon :class="newsCategory.path === category ? 'md-primary' : ''">{{newsCategory.icon}}</md-icon>
          <span class="md-list-item-text">{{newsCategory.name}}</span>
        </md-list-item>
      </md-list>
    </md-drawer>

    <!-- App Content -->
    <div class="md-layout-item md-size-95">
      <md-content class="md-layout md-gutter" style="background: #007998; padding: 1em;">
        <ul v-for="headline in headlines" :key="headline.id" class="md-layout-item md-large-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100">
          <md-card style="margin-top: 1em;" md-with-hover>
            <md-ripple>
              <md-card-media md-ratio="16:9">
                <img :src="headline.urlToImage" :alt="headline.title">
          </md-card-media>

                <md-card-header>
                  <div class="md-title">
                    <a :href="headline.url" target="_blank">{{headline.title}}</a>
                  </div>
                  <div>
                    {{headline.source.name}}
                    <md-icon class="small-icon">book</md-icon>
                  </div>
                  <div class="md-subhead" v-if="headline.author">
                    {{headline.author}}
                    <md-icon class="small-icon">face</md-icon>
                  </div>
                  <div class="md-subhead">
                    {{headline.publishedAt}}
                    <md-icon class="small-icon">alarm</md-icon>
                  </div>
                </md-card-header>

                <md-card-content>{{headline.description}}</md-card-content>

                <md-card-actions>
                  <md-button class="md-icon-button">
                    <md-icon>bookmark</md-icon>
                  </md-button>
                  <md-button class="md-icon-button">
                    <md-icon>message</md-icon>
                  </md-button>
                </md-card-actions>
            </md-ripple>
          </md-card>
        </ul>
      </md-content>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    showLeftSidepanel: false,
    showRightSidepanel: false,
    newsCategories: [
      { name: "Top Headlines", path: "", icon: "today" },
      { name: "Technology", path: "technology", icon: "keyboard" },
      { name: "Business", path: "business", icon: "business_center" },
      { name: "Entertainment", path: "entertainment", icon: "weekend" },
      { name: "Health", path: "health", icon: "fastfood" },
      { name: "Science", path: "science", icon: "fingerprint" },
      { name: "Sports", path: "sports", icon: "golf_course" }
    ]
  }),
  async fetch({ store }) {
    await store.dispatch(
      "loadHeadlines",
      `/api/top-headlines?country=${store.state.country}&category=${
        store.state.category
      }`
    );
  },
  watch: {
    async country() {
      await this.$store.dispatch(
        "loadHeadlines",
        `/api/top-headlines?country=${this.country}&category=${this.category}`
      );
    }
  },
  computed: {
    headlines() {
      return this.$store.getters.headlines;
    },
    category() {
      return this.$store.getters.category;
    },
    country() {
      return this.$store.getters.country;
    },
    loading() {
      return this.$store.getters.loading;
    }
  },
  methods: {
    async loadCategory(category) {
      this.$store.commit("setCategory", category);
      await this.$store.dispatch(
        "loadHeadlines",
        `/api/top-headlines?country=${this.country}&category=${this.category}`
      );
    },
    changeCountry(country) {
      this.$store.commit("setCountry", country);
    }
  }
};
</script>

<style scoped>
.small-icon {
  font-size: 18px !important;
}

.fixed-toolbar {
  position: fixed;
  top: 0;
  z-index: 5;
}
</style>
```

- We also need to modify the `store/index.js` document to include the different parts for the countries data.

> store/index.js

```js
import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      headlines: [],
      loading: false,
      category: '',
      country: 'us'
    },
    mutations: {
      setHeadlines(state, headlines) {
        state.headlines = headlines;
      },
      setLoading(state, loading) {
        state.loading = loading;
      },
      setCategory(state, category) {
        state.category = category;
      },
      setCountry(state, country) {
        state.country = country;
      }
    },
    actions: {
      async loadHeadlines({ commit }, apiUrl) {
        commit('setLoading', true);
        const { articles } = await this.$axios.$get(apiUrl);
        commit('setLoading', false);
        commit("setHeadlines", articles);
      }
    },
    getters: {
      headlines: state => state.headlines,
      loading: state => state.loading,
      category: state => state.category,
      country: state => state.country
    }
  });
};

export default createStore;
```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SelectHeadlinesByCountry.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SelectHeadlinesByCountry2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SelectHeadlinesByCountry3.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SelectHeadlinesByCountry4.png)

## Section 5: User Registration with Firebase REST API, Form Validation with Vuelidate 0 / 5|20min

### 13. Register New Users with Firebase REST API 7min

- We are going to authenticate our users with the help of [Firebase](https://firebase.google.com/)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/RegisterNewUsersWithFirebaseRestApi.png)

- We are going to create a new `Firebase` project.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/RegisterNewUsersWithFirebaseRestApi2.png)

- Put the `nuxt-news-feed` for the `Project-name`

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/RegisterNewUsersWithFirebaseRestApi3.png)

- We are going to use a project that already exists.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/RegisterNewUsersWithFirebaseRestApi4.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/RegisterNewUsersWithFirebaseRestApi5.png)

- We are going to see how to authentica using `User` and `Password` by using [Firebase Auth REST API](https://firebase.google.com/docs/reference/rest/auth?authuser=1)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/RegisterNewUsersWithFirebaseRestApi6.png)

- Copy the endpoint: `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyCustomToken?key=[API_KEY]`

- We need the Web API key

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/RegisterNewUsersWithFirebaseRestApi7.png)

- `Web API key=` **AIzaSyBjq48QI0xbHMFMI3O_jGv7Z7Yo20qIGRQ**

- We need to modify the `nuxt.config.js` document to create a new proxy for `Firebase`.

> nuxt.config.js

```js
export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#9ccc65", height: "10px" },
  /*
   ** Global CSS
   */
  css: [
    { src: "vue-material/dist/vue-material.min.css", lang: "css" },
    { src: "~/assets/theme.scss", lang: "scss" }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~/plugins/vue-material" }, { src: "~/plugins/axios" }],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
    "@nuxtjs/proxy"
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    credentials: true,
    proxy: true
  },
  proxy: {
    "/api/": {
      target: "https://newsapi.org/v2/",
      pathRewrite: { "^/api/": "" }
    },
    "/register/": {
      target:
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBjq48QI0xbHMFMI3O_jGv7Z7Yo20qIGRQ",
      pathRewrite: { "^/register/": "" }
    }
  },
  env: {
    NEWS_API_KEY: "79e7f03896bd42fb99ebb9b33e55518f"
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
};

```

- We are going to complete the `pages/register/index.vue` document.

> pages/register/index.vue
```html
<template>
  <div class="md-layout md-alignment-center-center" style="height: 100vh;">
    <md-card class="md-layout-item md-size-50">
      <md-card-header>
        <div class="md-title">Register</div>
      </md-card-header>

      <!-- Register Form -->
      <form @submit.prevent="registerUser">
        <md-card-content>
          <md-field md-clearable>
            <label for="email">Email</label>
            <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" />
          </md-field>

          <md-field>
            <label for="password">Password</label>
            <md-input type="password" name="password" id="password" autocomplete="password" v-model="form.password" />
          </md-field>
        </md-card-content>

        <md-card-actions>
          <md-button to="/login">Go to Login</md-button>
          <md-button class="md-primary md-raised" type="submit">Submit</md-button>
        </md-card-actions>
      </form>
    </md-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: {
      email: "",
      password: ""
    }
  }),
  methods: {
    async registerUser() {
      await this.$store.dispatch("authenticateUser", {
        email: this.form.email,
        password: this.form.password,
        returnSecureToken: true
      });
    }
  }
};
</script>
```

- We finally need to modify the `store/index.js` document to include the different parts for the `register` page.

> store/index.js

```js
import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      headlines: [],
      loading: false,
      category: "",
      country: "us"
    },
    mutations: {
      setHeadlines(state, headlines) {
        state.headlines = headlines;
      },
      setLoading(state, loading) {
        state.loading = loading;
      },
      setCategory(state, category) {
        state.category = category;
      },
      setCountry(state, country) {
        state.country = country;
      }
    },
    actions: {
      async loadHeadlines({ commit }, apiUrl) {
        commit("setLoading", true);
        const { articles } = await this.$axios.$get(apiUrl);
        commit("setLoading", false);
        commit("setHeadlines", articles);
      },
      async authenticateUser({ commit }, userPayload) {
        try {
          commit("setLoading", true);
          const authUserData = await this.$axios.$post(
            "/register/",
            userPayload
          );
          console.log(authUserData);
          commit("setLoading", false);
        } catch (err) {
          console.error(err);
          commit("setLoading", false);
        }
      }
    },
    getters: {
      headlines: state => state.headlines,
      loading: state => state.loading,
      category: state => state.category,
      country: state => state.country
    }
  });
};

export default createStore;

```

- We need to ensure that `Firebase authentication email/password` provider is `enabled`

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/RegisterNewUsersWithFirebaseRestApi8.png)

- We need to test if the `register` page is working.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/RegisterNewUsersWithFirebaseRestApi9.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/RegisterNewUsersWithFirebaseRestApi10.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/RegisterNewUsersWithFirebaseRestApi11.png)

```json
{kind: "identitytoolkit#SignupNewUserResponse", idToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjVjZWVhNDg5Y2QyZmQ2ND…nWD_IxNvslpSNnGiLfFCsqoANsCmbnl5RNBTkyLjTrmoDE8LQ", email: "peelmicro@gmail.com", refreshToken: "AEu4IL0z49wuc4WBTdFr4GFoG998vzBYzIgIp2zsbiJIdVtmjF…HtBLzXH1qMTDR0esUW9NN5KbASEE_fPce2Ksy_iQUMsgvG_vw", expiresIn: "3600", …}
email: "peelmicro@gmail.com"
expiresIn: "3600"
idToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjVjZWVhNDg5Y2QyZmQ2NDEzMTIwNDIzMjRjOTFjMTcyMGM2NmE1N2IiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbnV4dC1ibG9nLWIzMjkyIiwiYXVkIjoibnV4dC1ibG9nLWIzMjkyIiwiYXV0aF90aW1lIjoxNTYwMDA5ODI5LCJ1c2VyX2lkIjoiN3dDY1pKNVI5c2FtTGF5MjMxQ2Q2d0ZlNzQ2MiIsInN1YiI6Ijd3Q2NaSjVSOXNhbUxheTIzMUNkNndGZTc0NjIiLCJpYXQiOjE1NjAwMDk4MzAsImV4cCI6MTU2MDAxMzQzMCwiZW1haWwiOiJwZWVsbWljcm9AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInBlZWxtaWNyb0BnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.FmcWk33rubM0tenC02Z5_s6LEpeTbX20kp5gRYyOyzJe_3fBIGURqoe3vvO8651odgB3NK2X-YlleNXw_3M0viQYMDdFxroUMSdknUJOogDlFDSXFUnXrqL07GEJu-aqL2Jn4RMkUVQOe_f2U-zKRJzk9uHYd_rXuHlWW5FoCQs6GTVwV1o6ivgi82zZqtTfGMeZija-NfPTLt9b6IIVXTl-EDnk8qHyhi-y_sHfbW0ppfe6e1NWwoj2rC5dTmQso4TyRl-swNy0y2LvJrDRbI3NGaPcPcgpmqKoHnWD_IxNvslpSNnGiLfFCsqoANsCmbnl5RNBTkyLjTrmoDE8LQ"
kind: "identitytoolkit#SignupNewUserResponse"
localId: "7wCcZJ5R9samLay231Cd6wFe7462"
refreshToken: "AEu4IL0z49wuc4WBTdFr4GFoG998vzBYzIgIp2zsbiJIdVtmjFfonqa0uXlFTm-9KRtUXIAszqhoac9xkXGxa-s67cWdTfUZNBnVCzM98YD0hUrW156zgKhXzQbMfU_BIoFt1KqwxCaRUIXUsBn8KYki0itLx5VclI56v5hESZzZiXikLHtBLzXH1qMTDR0esUW9NN5KbASEE_fPce2Ksy_iQUMsgvG_vw"
__proto__: Object
```

### 14. Disable Form upon Registration, Redirect Home upon Successful Auth 3min

- We are going to modify  the `pages/register/index.vue` document to disable the document once the use is registered and also will be redirect to the home page.

> pages/register/index.vue
```html
<template>
  <div class="md-layout md-alignment-center-center" style="height: 100vh;">
    <md-card class="md-layout-item md-size-50">
      <md-card-header>
        <div class="md-title">Register</div>
      </md-card-header>

      <!-- Register Form -->
      <form @submit.prevent="registerUser">
        <md-card-content>
          <md-field md-clearable>
            <label for="email">Email</label>
            <md-input :disabled="loading" type="email" name="email" id="email" autocomplete="email" v-model="form.email" />
          </md-field>

          <md-field>
            <label for="password">Password</label>
            <md-input :disabled="loading" type="password" name="password" id="password" autocomplete="password" v-model="form.password" />
          </md-field>
        </md-card-content>

        <md-card-actions>
          <md-button to="/login">Go to Login</md-button>
          <md-button class="md-primary md-raised" type="submit" :disabled="loading">Submit</md-button>
        </md-card-actions>
      </form>

      <md-snackbar :md-active.sync="isAuthenticated">
        {{form.email}} was successfully registered!
      </md-snackbar>
    </md-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: {
      email: "",
      password: ""
    }
  }),
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  watch: {
    isAuthenticated(value) {
      if (value) {
        setTimeout(() => this.$router.push("/"), 2000);
      }
    }
  },
  methods: {
    async registerUser() {
      await this.$store.dispatch("authenticateUser", {
        email: this.form.email,
        password: this.form.password,
        returnSecureToken: true
      });
    }
  }
};
</script>
```

- We finally need to modify the `store/index.js` document to check if the user is already authenticated.

> store/index.js

```js
import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      headlines: [],
      loading: false,
      token: "",
      category: "",
      country: "us"
    },
    mutations: {
      setHeadlines(state, headlines) {
        state.headlines = headlines;
      },
      setLoading(state, loading) {
        state.loading = loading;
      },
      setToken(state, token) {
        state.token = token;
      },
      setCategory(state, category) {
        state.category = category;
      },
      setCountry(state, country) {
        state.country = country;
      }
    },
    actions: {
      async loadHeadlines({ commit }, apiUrl) {
        commit("setLoading", true);
        const { articles } = await this.$axios.$get(apiUrl);
        commit("setLoading", false);
        commit("setHeadlines", articles);
      },
      async authenticateUser({ commit }, userPayload) {
        try {
          commit("setLoading", true);
          const authUserData = await this.$axios.$post(
            "/register/",
            userPayload
          );
          commit("setToken", authUserData.idToken);
          commit("setLoading", false);
        } catch (err) {
          console.error(err);
          commit("setLoading", false);
        }
      }
    },
    getters: {
      headlines: state => state.headlines,
      loading: state => state.loading,
      isAuthenticated: state => !!state.token,
      category: state => state.category,
      country: state => state.country
    }
  });
};

export default createStore;

```

- We can test it now:

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/DisableFormUponRegistrationRedirectHomeUponSuccessful.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/DisableFormUponRegistrationRedirectHomeUponSuccessful2.png)

### 15. Add Navigation Guards using Middleware 2min

- We are going to create the `midelware/auth.js` document used to protect the pages that only can be accessed once the user is authenticated.

> midelware/auth.js
```js
export default function({ store, redirect }) {
  if (store.getters.isAuthenticated) {
    return redirect("/");
  }
}
```
- We are going to modify  the `pages/register/index.vue` document to avoid accessing the `register` Page it once the user has authenticated.

> pages/register/index.vue
```html
<template>
  <div class="md-layout md-alignment-center-center" style="height: 100vh;">
    <md-card class="md-layout-item md-size-50">
      <md-card-header>
        <div class="md-title">Register</div>
      </md-card-header>

      <!-- Register Form -->
      <form @submit.prevent="registerUser">
        <md-card-content>
          <md-field md-clearable>
            <label for="email">Email</label>
            <md-input
              :disabled="loading"
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              v-model="form.email"
            />
          </md-field>

          <md-field>
            <label for="password">Password</label>
            <md-input
              :disabled="loading"
              type="password"
              name="password"
              id="password"
              autocomplete="password"
              v-model="form.password"
            />
          </md-field>
        </md-card-content>

        <md-card-actions>
          <md-button to="/login">Go to Login</md-button>
          <md-button class="md-primary md-raised" type="submit" :disabled="loading">Submit</md-button>
        </md-card-actions>
      </form>

      <md-snackbar :md-active.sync="isAuthenticated">{{form.email}} was successfully registered!</md-snackbar>
    </md-card>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  data: () => ({
    form: {
      email: "",
      password: ""
    }
  }),
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  watch: {
    isAuthenticated(value) {
      if (value) {
        setTimeout(() => this.$router.push("/"), 2000);
      }
    }
  },
  methods: {
    async registerUser() {
      await this.$store.dispatch("authenticateUser", {
        email: this.form.email,
        password: this.form.password,
        returnSecureToken: true
      });
    }
  }
};
</script>
```


- We have to do the same with the `pages/login/index.vue` document to avoid accessing the `login` Page. 

> pages/login/index.vue
```html
<template>
  <p>login</p>
</template>

<script>
export default {
  middleware: "auth"
};
</script>
```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddNavigationGuardsUsingMiddleware.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddNavigationGuardsUsingMiddleware2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddNavigationGuardsUsingMiddleware3.png)

### 16. Form Validation with Vuelidate 5min

- We need to install the `vuelidate` package that is going to allow us to validate our register form.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/nuxt-news (master)
$ npm i vuelidate
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.0.7 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.0.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\watchpack\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\nodemon\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ vuelidate@0.7.4
added 1 package from 1 contributor and audited 13516 packages in 31.647s
found 0 vulnerabilities
```
- We are going to modify  the `pages/register/index.vue` document to use the `vuelidate` package to validate the `register` Page.

> pages/register/index.vue
```html
<template>
  <div class="md-layout md-alignment-center-center" style="height: 100vh;">
    <md-card class="md-layout-item md-size-50">
      <md-card-header>
        <div class="md-title">Register</div>
      </md-card-header>

      <!-- Register Form -->
      <form @submit.prevent="validateForm">
        <md-card-content>
          <md-field md-clearable :class="getValidationClass('email')">
            <label for="email">Email</label>
            <md-input :disabled="loading" type="email" name="email" id="email" autocomplete="email" v-model="form.email" />
            <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
            <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
          </md-field>

          <md-field :class="getValidationClass('password')">
            <label for="password">Password</label>
            <md-input :disabled="loading" type="password" name="password" id="password" autocomplete="password" v-model="form.password" />
            <span class="md-error" v-if="!$v.form.password.required">The password is required</span>
            <span class="md-error" v-else-if="!$v.form.password.minLength">Password too short</span>
            <span class="md-error" v-else-if="!$v.form.password.maxLength">Password too long</span>
          </md-field>
        </md-card-content>

        <md-card-actions>
          <md-button to="/login">Go to Login</md-button>
          <md-button class="md-primary md-raised" type="submit" :disabled="loading">Submit</md-button>
        </md-card-actions>
      </form>

      <md-snackbar :md-active.sync="isAuthenticated">
        {{form.email}} was successfully registered!
      </md-snackbar>
    </md-card>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  email,
  minLength,
  maxLength
} from "vuelidate/lib/validators";

export default {
  middleware: "auth",
  mixins: [validationMixin],
  data: () => ({
    form: {
      email: "",
      password: ""
    }
  }),
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(20)
      }
    }
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  watch: {
    isAuthenticated(value) {
      if (value) {
        setTimeout(() => this.$router.push("/"), 2000);
      }
    }
  },
  methods: {
    validateForm() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.registerUser();
      }
    },
    async registerUser() {
      await this.$store.dispatch("authenticateUser", {
        email: this.form.email,
        password: this.form.password,
        returnSecureToken: true
      });
    },
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];
      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    }
  }
};
</script>
```

- We are going to test it.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/FormValidationWithVuelidate.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/FormValidationWithVuelidate2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/FormValidationWithVuelidate3.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/FormValidationWithVuelidate4.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/FormValidationWithVuelidate5.png)

### 17. Create Avatar upon Register and Display User Data in Navbar 3min

- We are going to install the `md5` package used to `hash` the created users.

```bash
an.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/nuxt-news (master)
$ npm i md5
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.0.7 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.0.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\watchpack\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\nodemon\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ md5@2.2.1
added 3 packages from 3 contributors and audited 13520 packages in 32.8s
found 0 vulnerabilities
```

- We need to modify the `store/index.js` document to get the avatar for the user.

> store/index.js

```js
import Vuex from "vuex";
import md5 from "md5";

const createStore = () => {
  return new Vuex.Store({
    state: {
      headlines: [],
      loading: false,
      token: "",
      user: null,
      category: "",
      country: "us"
    },
    mutations: {
      setHeadlines(state, headlines) {
        state.headlines = headlines;
      },
      setLoading(state, loading) {
        state.loading = loading;
      },
      setToken(state, token) {
        state.token = token;
      },
      setUser(state, user) {
        state.user = user;
      },
      setCategory(state, category) {
        state.category = category;
      },
      setCountry(state, country) {
        state.country = country;
      }
    },
    actions: {
      async loadHeadlines({ commit }, apiUrl) {
        commit("setLoading", true);
        const { articles } = await this.$axios.$get(apiUrl);
        commit("setLoading", false);
        commit("setHeadlines", articles);
      },
      async authenticateUser({ commit }, userPayload) {
        try {
          commit("setLoading", true);
          const authUserData = await this.$axios.$post(
            "/register/",
            userPayload
          );
          const avatar = `http://gravatar.com/avatar/${md5(
            authUserData.email
          )}?d=identicon`;
          const user = { email: authUserData.email, avatar };
          commit("setUser", user);
          commit("setToken", authUserData.idToken);
          commit("setLoading", false);
        } catch (err) {
          console.error(err);
          commit("setLoading", false);
        }
      }
    },
    getters: {
      headlines: state => state.headlines,
      loading: state => state.loading,
      user: state => state.user,
      isAuthenticated: state => !!state.token,
      category: state => state.category,
      country: state => state.country
    }
  });
};

export default createStore;

```
- We are going to modify the `pages/index.vue` document hide the `Login` and `Register` options when the `user` is authenticated and to show the `avatar` of the user.

> pages/index.vue

```html
<template>
  <div class="md-layout md-alignment-center" style="margin: 4em 0">
    <!-- Top Navigation -->
    <md-toolbar class="fixed-toolbar" elevation="1">
      <md-button @click="showLeftSidepanel = true" class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>
      <nuxt-link class="md-primary md-title" to="/">
        NuxtNews
      </nuxt-link>

      <div class="md-toolbar-section-end">
        <template v-if="isAuthenticated">
          <md-button>
            <md-avatar><img :src="user.avatar" :alt="user.email"></md-avatar>
              {{user.email}}
          </md-button>
          <md-button>Logout</md-button>
        </template>

        <template v-else>
          <md-button to="/login">Login</md-button>
          <md-button to="/register">Register</md-button>
        </template>
        <md-button class="md-accent" @click="showRightSidepanel = true">Categories</md-button>
      </div>
    </md-toolbar>

    <!-- Personal News Feed (Left Drawer) -->
    <md-drawer md-fixed :md-active.sync="showLeftSidepanel">
      <md-toolbar md-elevation="1">
        <span class="md-title">Personal Feed</span>
      </md-toolbar>

      <md-progress-bar v-if="loading" md-mode="indeterminate"></md-progress-bar>

      <md-field>
        <label for="country">Country</label>
        <md-select @input="changeCountry" :value="country" name="country" id="country">
          <md-option value="us">United States</md-option>
          <md-option value="ca">Canada</md-option>
          <md-option value="de">Germany</md-option>
          <md-option value="ru">Russia</md-option>
        </md-select>
      </md-field>
    </md-drawer>

    <!-- News Categories (Right Drawer) -->
    <md-drawer class="md-right" md-fixed :md-active.sync="showRightSidepanel">
      <md-toolbar :md-elevation="1">
        <span class="md-title">News Categories</span>
      </md-toolbar>

      <md-progress-bar v-if="loading" md-mode='indeterminate'></md-progress-bar>

      <md-list>
        <md-subheader class="md-primary">Categories</md-subheader>

        <md-list-item v-for="(newsCategory, i) in newsCategories" :key="i" @click="loadCategory(newsCategory.path)">
          <md-icon :class="newsCategory.path === category ? 'md-primary' : ''">{{newsCategory.icon}}</md-icon>
          <span class="md-list-item-text">{{newsCategory.name}}</span>
        </md-list-item>
      </md-list>
    </md-drawer>

    <!-- App Content -->
    <div class="md-layout-item md-size-95">
      <md-content class="md-layout md-gutter" style="background: #007998; padding: 1em;">
        <ul v-for="headline in headlines" :key="headline.id" class="md-layout-item md-large-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100">
          <md-card style="margin-top: 1em;" md-with-hover>
            <md-ripple>
              <md-card-media md-ratio="16:9">
                <img :src="headline.urlToImage" :alt="headline.title">
          </md-card-media>

                <md-card-header>
                  <div class="md-title">
                    <a :href="headline.url" target="_blank">{{headline.title}}</a>
                  </div>
                  <div>
                    {{headline.source.name}}
                    <md-icon class="small-icon">book</md-icon>
                  </div>
                  <div class="md-subhead" v-if="headline.author">
                    {{headline.author}}
                    <md-icon class="small-icon">face</md-icon>
                  </div>
                  <div class="md-subhead">
                    {{headline.publishedAt}}
                    <md-icon class="small-icon">alarm</md-icon>
                  </div>
                </md-card-header>

                <md-card-content>{{headline.description}}</md-card-content>

                <md-card-actions>
                  <md-button class="md-icon-button">
                    <md-icon>bookmark</md-icon>
                  </md-button>
                  <md-button class="md-icon-button">
                    <md-icon>message</md-icon>
                  </md-button>
                </md-card-actions>
            </md-ripple>
          </md-card>
        </ul>
      </md-content>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    showLeftSidepanel: false,
    showRightSidepanel: false,
    newsCategories: [
      { name: "Top Headlines", path: "", icon: "today" },
      { name: "Technology", path: "technology", icon: "keyboard" },
      { name: "Business", path: "business", icon: "business_center" },
      { name: "Entertainment", path: "entertainment", icon: "weekend" },
      { name: "Health", path: "health", icon: "fastfood" },
      { name: "Science", path: "science", icon: "fingerprint" },
      { name: "Sports", path: "sports", icon: "golf_course" }
    ]
  }),
  async fetch({ store }) {
    await store.dispatch(
      "loadHeadlines",
      `/api/top-headlines?country=${store.state.country}&category=${
        store.state.category
      }`
    );
  },
  watch: {
    async country() {
      await this.$store.dispatch(
        "loadHeadlines",
        `/api/top-headlines?country=${this.country}&category=${this.category}`
      );
    }
  },
  computed: {
    headlines() {
      return this.$store.getters.headlines;
    },
    category() {
      return this.$store.getters.category;
    },
    country() {
      return this.$store.getters.country;
    },
    loading() {
      return this.$store.getters.loading;
    },
    user() {
      return this.$store.getters.user;
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    async loadCategory(category) {
      this.$store.commit("setCategory", category);
      await this.$store.dispatch(
        "loadHeadlines",
        `/api/top-headlines?country=${this.country}&category=${this.category}`
      );
    },
    changeCountry(country) {
      this.$store.commit("setCountry", country);
    }
  }
};
</script>

<style scoped>
.small-icon {
  font-size: 18px !important;
}

.fixed-toolbar {
  position: fixed;
  top: 0;
  z-index: 5;
}
</style>
```
- We are going to test it.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateAvatarUponRegisterAndDisplayUserDataInNavbar.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateAvatarUponRegisterAndDisplayUserDataInNavbar2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateAvatarUponRegisterAndDisplayUserDataInNavbar3.png)

## Section 6: Integrating Firestore with Nuxt 0 / 1|4min

### 18. Setup Firestore as a Plugin, Add User Data to Firestore Database 4min

- We are going to create a `Firestore Database`

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SetupFirestoreAsAPluginAddUserDataToFirestoreDatabase.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SetupFirestoreAsAPluginAddUserDataToFirestoreDatabase2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SetupFirestoreAsAPluginAddUserDataToFirestoreDatabase3.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SetupFirestoreAsAPluginAddUserDataToFirestoreDatabase4.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SetupFirestoreAsAPluginAddUserDataToFirestoreDatabase5.png)

- Add the `users` collection.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SetupFirestoreAsAPluginAddUserDataToFirestoreDatabase6.png)

- Put `peelmicro@gmail.com` for the `Document ID`, create the `email` field with the same `peelmicro@gmail.com` value and the `avatar` field with the `http://gravatar.com/...` value.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SetupFirestoreAsAPluginAddUserDataToFirestoreDatabase7.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SetupFirestoreAsAPluginAddUserDataToFirestoreDatabase8.png)

- We are going to delete the test data created.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SetupFirestoreAsAPluginAddUserDataToFirestoreDatabase9.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SetupFirestoreAsAPluginAddUserDataToFirestoreDatabase10.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SetupFirestoreAsAPluginAddUserDataToFirestoreDatabase11.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SetupFirestoreAsAPluginAddUserDataToFirestoreDatabase12.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SetupFirestoreAsAPluginAddUserDataToFirestoreDatabase13.png)

```xml
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/6.1.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#config-web-app -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBjq48QI0xbHMFMI3O_jGv7Z7Yo20qIGRQ",
    authDomain: "nuxt-blog-b3292.firebaseapp.com",
    databaseURL: "https://nuxt-blog-b3292.firebaseio.com",
    projectId: "nuxt-blog-b3292",
    storageBucket: "nuxt-blog-b3292.appspot.com",
    messagingSenderId: "93621928223",
    appId: "1:93621928223:web:5000a6de279c7246"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
```

- We are going to create the `plugin\firestore.js` document used to create the `Firestore` plugin.

> plugin\firestore.js
```js
import firebase from "firebase/app";
import "firebase/firestore";

if (!firebase.apps.length) {
  var firebaseConfig = {
    apiKey: "AIzaSyBjq48QI0xbHMFMI3O_jGv7Z7Yo20qIGRQ",
    authDomain: "nuxt-blog-b3292.firebaseapp.com",
    databaseURL: "https://nuxt-blog-b3292.firebaseio.com",
    projectId: "nuxt-blog-b3292",
    storageBucket: "nuxt-blog-b3292.appspot.com",
    messagingSenderId: "93621928223",
    appId: "1:93621928223:web:5000a6de279c7246"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({
    timestampsInSnapshots: true
  });
}

const db = firebase.firestore();

export default db;
```

- We need to modify the `nuxt.config.js` document to include the new `friestore` plugin created.

> nuxt.config.js

```js
export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#9ccc65", height: "10px" },
  /*
   ** Global CSS
   */
  css: [
    { src: "vue-material/dist/vue-material.min.css", lang: "css" },
    { src: "~/assets/theme.scss", lang: "scss" }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/vue-material" },
    { src: "~/plugins/axios" },
    { src: "~/plugins/firestore" }
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
    "@nuxtjs/proxy"
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    credentials: true,
    proxy: true
  },
  proxy: {
    "/api/": {
      target: "https://newsapi.org/v2/",
      pathRewrite: { "^/api/": "" }
    },
    "/register/": {
      target:
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBjq48QI0xbHMFMI3O_jGv7Z7Yo20qIGRQ",
      pathRewrite: { "^/register/": "" }
    }
  },
  env: {
    NEWS_API_KEY: "79e7f03896bd42fb99ebb9b33e55518f"
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
};
```

- We also need to modify the `store/index.js` document to use the new `firestore` plugin.

> store/index.js

```js
import Vuex from "vuex";
import md5 from "md5";
import db from "~/plugins/firestore";

const createStore = () => {
  return new Vuex.Store({
    state: {
      headlines: [],
      loading: false,
      token: "",
      user: null,
      category: "",
      country: "us"
    },
    mutations: {
      setHeadlines(state, headlines) {
        state.headlines = headlines;
      },
      setLoading(state, loading) {
        state.loading = loading;
      },
      setToken(state, token) {
        state.token = token;
      },
      setUser(state, user) {
        state.user = user;
      },
      setCategory(state, category) {
        state.category = category;
      },
      setCountry(state, country) {
        state.country = country;
      }
    },
    actions: {
      async loadHeadlines({ commit }, apiUrl) {
        commit("setLoading", true);
        const { articles } = await this.$axios.$get(apiUrl);
        commit("setLoading", false);
        commit("setHeadlines", articles);
      },
      async authenticateUser({ commit }, userPayload) {
        try {
          commit("setLoading", true);
          const authUserData = await this.$axios.$post(
            "/register/",
            userPayload
          );
          const avatar = `http://gravatar.com/avatar/${md5(
            authUserData.email
          )}?d=identicon`;
          const user = { email: authUserData.email, avatar };
          await db
            .collection("users")
            .doc(userPayload.email)
            .set(user);
          commit("setUser", user);
          commit("setToken", authUserData.idToken);
          commit("setLoading", false);
        } catch (err) {
          console.error(err);
          commit("setLoading", false);
        }
      }
    },
    getters: {
      headlines: state => state.headlines,
      loading: state => state.loading,
      user: state => state.user,
      isAuthenticated: state => !!state.token,
      category: state => state.category,
      country: state => state.country
    }
  });
};

export default createStore;

```

- We need to install the `firebase SDK`

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/nuxt-news
$ npm i firebase

> grpc@1.20.3 install C:\Work\Training\Pre\VueJs\nuxt-news\node_modules\grpc
> node-pre-gyp install --fallback-to-build --library=static_library

node-pre-gyp WARN Using request for node-pre-gyp https download
[grpc] Success: "C:\Work\Training\Pre\VueJs\nuxt-news\node_modules\grpc\src\node\extension_binary\node-v67-win32-x64-unknown\grpc_node.node" is installed via remote

> protobufjs@6.8.8 postinstall C:\Work\Training\Pre\VueJs\nuxt-news\node_modules\protobufjs
> node scripts/postinstall

+ firebase@6.1.1
added 132 packages from 94 contributors and audited 1976 packages in 85.455s
found 0 vulnerabilities
```

- We are going to test it.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SetupFirestoreAsAPluginAddUserDataToFirestoreDatabase14.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SetupFirestoreAsAPluginAddUserDataToFirestoreDatabase15.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SetupFirestoreAsAPluginAddUserDataToFirestoreDatabase16.png)

> packahe.json
```json
{
  "name": "nuxt-news",
  "version": "1.0.0",
  "description": "A news application built with Nuxt 2 and Firestore",
  "author": "Juan Pablo Perez",
  "private": true,
  "scripts": {
    "dev": "nuxt",
    "build": "nuxt build",
    "start": "nuxt start",
    "generate": "nuxt generate"
  },
  "dependencies": {
    "@nuxtjs/axios": "^5.3.6",
    "@nuxtjs/proxy": "^1.3.3",
    "firebase": "^6.1.1",
    "md5": "^2.2.1",
    "nuxt": "^2.0.0",
    "vue-material": "^1.0.0-beta-11",
    "vuelidate": "^0.7.4"
  },
  "devDependencies": {
    "node-sass": "^4.12.0",
    "nodemon": "^1.18.9",
    "sass-loader": "^7.1.0"
  }
}
```

### Issue with the Firebase Key security

- We've received the following email: 

```


From: security@mail.gitguardian.com <security@mail.gitguardian.com> 
Sent: Saturday 8 June 2019 19:41
To: Juan Pablo Perez <Juan.Pablo.Perez@retailinmotion.com>
Subject: [peelmicro/build-a-news-feed-with-nuxt-2-and-firestore] Google apikey exposed on GitHub

	Warning: GitGuardian detected an API key from Google 
Hello @peelmicro 

GitGuardian detected an API key from Google in the following commit from peelmicro/build-a-news-feed-with-nuxt-2-and-firestore pushed at 2019-06-08T18:35:56Z. 
GitGuardian, or "GG", is a "Good Guy" bot scanning in real time GitHub commits for sensitive information. 
Once you have pushed sensitive information to GitHub, this information is public and should be considered compromised. We just open sourced our GitHub repository to help developers take appropriate actions. Would love a star! :) 
Accidents happened to the best of us and will continue to happen. Sign up to our service to be notified if this happens again. We got a free tier for individual developers ! 
Stay safe 


Privacy matters a lot to us. When you sign up to our service, we require permissions affecting only your public repositories. 


GitGuardian needs you ! 
Our Machine Learning algorithms can only get better with your feedback. Please help us improve our service by clicking on the blue button if we are correct and on the red button if we made a mistake. 
True Positive False Positive 


Unsubscribe from these alerts if you are unhappy.
	
```

- In order to avoid this we are going to use the [dotenv](https://www.npmjs.com/package/dotenv) package to create a file with the environment variables with `Nuxt` as explain on [Using .env files with Nuxt](https://codecourse.com/watch/using-env-files-with-nuxt)

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/nuxt-news (master)
$ npm i dotenv --save
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.0.7 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.0.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\watchpack\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\nodemon\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ dotenv@8.0.0
added 1 package, removed 3 packages and audited 14307 packages in 76.634s
found 0 vulnerabilities
```

- We are going to create the `.env` document to insert the proper environment variable and the `test.env` to store the ones that are going to be commited to the `git` repository.

> .env
```
FIREBASE_API_KEY = AIzaSyBjq48QI0xbHMFMI3O_jGv7Z7Yo20qIGRQ
NEWS_API_KEY = 79e7f03896bd42fb99ebb9b33e55518f
```

> fake.env
```
FIREBASE_API_KEY = YOUR_FIREBASE_API_KEY
NEWS_API_KEY = YOUR_NEWS_API_KEY
```

- Exclude the `.env` documentr from `git` adding it to `.gitignore`

> .gitignore
```
# Created by .ignore support plugin (hsz.mobi)
### Node template
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Directory for instrumented libs generated by jscoverage/JSCover
lib-cov

# Coverage directory used by tools like istanbul
coverage

# nyc test coverage
.nyc_output

# Grunt intermediate storage (http://gruntjs.com/creating-plugins#storing-task-files)
.grunt

# Bower dependency directory (https://bower.io/)
bower_components

# node-waf configuration
.lock-wscript

# Compiled binary addons (https://nodejs.org/api/addons.html)
build/Release

# Dependency directories
node_modules/
jspm_packages/

# TypeScript v1 declaration files
typings/

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env

# parcel-bundler cache (https://parceljs.org/)
.cache

# next.js build output
.next

# nuxt.js build output
.nuxt

# Nuxt generate
dist

# vuepress build output
.vuepress/dist

# Serverless directories
.serverless

# IDE / Editor
.idea
.editorconfig

# Service worker
sw.*

# Mac OSX
.DS_Store

# Specific to the solution
/.env
```

- We need to modify the `plugin/firestore.js` document to use the environt variable.

> plugin/firestore.js
```
import firebase from "firebase/app";
import "firebase/firestore";

if (!firebase.apps.length) {
  var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "nuxt-blog-b3292.firebaseapp.com",
    databaseURL: "https://nuxt-blog-b3292.firebaseio.com",
    projectId: "nuxt-blog-b3292",
    storageBucket: "nuxt-blog-b3292.appspot.com",
    messagingSenderId: "93621928223",
    appId: "1:93621928223:web:5000a6de279c7246"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({
    timestampsInSnapshots: true
  });
}

const db = firebase.firestore();

export default db;
```

- We need to modify the `nuxt.config.js` document to include the `dotnet` library.

> nuxt.config.js

```js
cconst env = require("dotenv").config();

export default {
  mode: "spa",
  env: env.parsed,
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#9ccc65", height: "10px" },
  /*
   ** Global CSS
   */
  css: [
    { src: "vue-material/dist/vue-material.min.css", lang: "css" },
    { src: "~/assets/theme.scss", lang: "scss" }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/vue-material" },
    { src: "~/plugins/axios" },
    { src: "~/plugins/firestore" }
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
    "@nuxtjs/proxy"
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    credentials: true,
    proxy: true
  },
  proxy: {
    "/api/": {
      target: "https://newsapi.org/v2/",
      pathRewrite: { "^/api/": "" }
    },
    "/register/": {
      target:
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=" +
        process.env.FIREBASE_API_KEY,
      pathRewrite: { "^/register/": "" }
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
};

```


## Section 7: Login Functionality / Managing User Sessions 0 / 2|15min

### 19. Add Login Form / Functionality, Query Logged In User Data from Firestore 5min

- We are going to follow the [Sign in with email / password](https://firebase.google.com/docs/reference/rest/auth?authuser=1#section-sign-in-email-password) documentation.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddLoginFormFunctionality.png)

- `Endpoint=` **https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=[API_KEY]**


- We need to modify the `nuxt.config.js` document to include the `login endpoint`.

> nuxt.config.js

```js
const env = require("dotenv").config();

export default {
  mode: "spa",
  env: env.parsed,
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#9ccc65", height: "10px" },
  /*
   ** Global CSS
   */
  css: [
    { src: "vue-material/dist/vue-material.min.css", lang: "css" },
    { src: "~/assets/theme.scss", lang: "scss" }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/vue-material" },
    { src: "~/plugins/axios" },
    { src: "~/plugins/firestore" }
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
    "@nuxtjs/proxy"
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    credentials: true,
    proxy: true
  },
  proxy: {
    "/api/": {
      target: "https://newsapi.org/v2/",
      pathRewrite: { "^/api/": "" }
    },
    "/register/": {
      target:
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=" +
        process.env.FIREBASE_API_KEY,
      pathRewrite: { "^/register/": "" }
    },
    "/login/": {
      target:
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" +
        process.env.FIREBASE_API_KEY,
      pathRewrite: { "^/login/": "" }
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
};

```

- We are going to modify the `pages/login/index.vue` page to complete the `login` page.

> pages/login/index.vue
```html
<template>
  <div class="md-layout md-alignment-center-center" style="height: 100vh;">
    <md-card class="md-layout-item md-size-50">
      <md-card-header>
        <div class="md-title">Login</div>
      </md-card-header>

      <!-- Login Form -->
      <form @submit.prevent="validateForm">
        <md-card-content>
          <md-field md-clearable :class="getValidationClass('email')">
            <label for="email">Email</label>
            <md-input :disabled="loading" type="email" name="email" id="email" autocomplete="email" v-model="form.email" />
            <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
            <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
          </md-field>

          <md-field :class="getValidationClass('password')">
            <label for="password">Password</label>
            <md-input :disabled="loading" type="password" name="password" id="password" autocomplete="password" v-model="form.password" />
            <span class="md-error" v-if="!$v.form.password.required">The password is required</span>
            <span class="md-error" v-else-if="!$v.form.password.minLength">Password too short</span>
            <span class="md-error" v-else-if="!$v.form.password.maxLength">Password too long</span>
          </md-field>
        </md-card-content>

        <md-card-actions>
          <md-button to="/register">Go to Register</md-button>
          <md-button class="md-primary md-raised" type="submit" :disabled="loading">Submit</md-button>
        </md-card-actions>
      </form>

      <md-snackbar :md-active.sync="isAuthenticated">
        {{form.email}} was successfully logged in!
      </md-snackbar>
    </md-card>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  email,
  minLength,
  maxLength
} from "vuelidate/lib/validators";

export default {
  middleware: "auth",
  mixins: [validationMixin],
  data: () => ({
    form: {
      email: "",
      password: ""
    }
  }),
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(20)
      }
    }
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  watch: {
    isAuthenticated(value) {
      if (value) {
        setTimeout(() => this.$router.push("/"), 2000);
      }
    }
  },
  methods: {
    validateForm() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.loginUser();
      }
    },
    async loginUser() {
      await this.$store.dispatch("authenticateUser", {
        action: "login",
        email: this.form.email,
        password: this.form.password,
        returnSecureToken: true
      });
    },
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];
      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    }
  }
};
</script>
```

- We are going to modify the `pages/register/index.vue` page to add the `register` action.

> pages/register/index.vue
```html
<template>
  <div class="md-layout md-alignment-center-center" style="height: 100vh;">
    <md-card class="md-layout-item md-size-50">
      <md-card-header>
        <div class="md-title">Register</div>
      </md-card-header>

      <!-- Register Form -->
      <form @submit.prevent="validateForm">
        <md-card-content>
          <md-field md-clearable :class="getValidationClass('email')">
            <label for="email">Email</label>
            <md-input :disabled="loading" type="email" name="email" id="email" autocomplete="email" v-model="form.email" />
            <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
            <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
          </md-field>

          <md-field :class="getValidationClass('password')">
            <label for="password">Password</label>
            <md-input :disabled="loading" type="password" name="password" id="password" autocomplete="password" v-model="form.password" />
            <span class="md-error" v-if="!$v.form.password.required">The password is required</span>
            <span class="md-error" v-else-if="!$v.form.password.minLength">Password too short</span>
            <span class="md-error" v-else-if="!$v.form.password.maxLength">Password too long</span>
          </md-field>
        </md-card-content>

        <md-card-actions>
          <md-button to="/login">Go to Login</md-button>
          <md-button class="md-primary md-raised" type="submit" :disabled="loading">Submit</md-button>
        </md-card-actions>
      </form>

      <md-snackbar :md-active.sync="isAuthenticated">
        {{form.email}} was successfully registered!
      </md-snackbar>
    </md-card>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  email,
  minLength,
  maxLength
} from "vuelidate/lib/validators";

export default {
  middleware: "auth",
  mixins: [validationMixin],
  data: () => ({
    form: {
      email: "",
      password: ""
    }
  }),
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(20)
      }
    }
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  watch: {
    isAuthenticated(value) {
      if (value) {
        setTimeout(() => this.$router.push("/"), 2000);
      }
    }
  },
  methods: {
    validateForm() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.registerUser();
      }
    },
    async registerUser() {
      await this.$store.dispatch("authenticateUser", {
        action: "register",
        email: this.form.email,
        password: this.form.password,
        returnSecureToken: true
      });
    },
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];
      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    }
  }
};
</script>
```

- We also need to modify the `store\index.js` document to include the `login` values.

> store\index.js

```js
import Vuex from "vuex";
import md5 from "md5";
import db from "~/plugins/firestore";

const createStore = () => {
  return new Vuex.Store({
    state: {
      headlines: [],
      loading: false,
      token: "",
      user: null,
      category: "",
      country: "us"
    },
    mutations: {
      setHeadlines(state, headlines) {
        state.headlines = headlines;
      },
      setLoading(state, loading) {
        state.loading = loading;
      },
      setToken(state, token) {
        state.token = token;
      },
      setUser(state, user) {
        state.user = user;
      },
      setCategory(state, category) {
        state.category = category;
      },
      setCountry(state, country) {
        state.country = country;
      }
    },
    actions: {
      async loadHeadlines({ commit }, apiUrl) {
        commit("setLoading", true);
        const { articles } = await this.$axios.$get(apiUrl);
        commit("setLoading", false);
        commit("setHeadlines", articles);
      },
      async authenticateUser({ commit }, userPayload) {
        try {
          commit("setLoading", true);
          const authUserData = await this.$axios.$post(
            `/${userPayload.action}/`,
            {
              email: userPayload.email,
              password: userPayload.password,
              returnSecureToken: userPayload.returnSecureToken
            }
          );
          let user;
          if (userPayload.action === "register") {
            const avatar = `http://gravatar.com/avatar/${md5(
              authUserData.email
            )}?d=identicon`;
            user = { email: authUserData.email, avatar };
            await db
              .collection("users")
              .doc(userPayload.email)
              .set(user);
          } else {
            const loginRef = db.collection("users").doc(userPayload.email);
            const loggedInUser = await loginRef.get();
            user = loggedInUser.data();
          }
          commit("setUser", user);
          commit("setToken", authUserData.idToken);
          commit("setLoading", false);
        } catch (err) {
          console.error(err);
          commit("setLoading", false);
        }
      }
    },
    getters: {
      headlines: state => state.headlines,
      loading: state => state.loading,
      user: state => state.user,
      isAuthenticated: state => !!state.token,
      category: state => state.category,
      country: state => state.country
    }
  });
};

export default createStore;
```

- We need to test if the login works properly.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddLoginFormFunctionality2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddLoginFormFunctionality3.png)
![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddLoginFormFunctionality4.png)

### 20. Manage User Sessions with Cookies / Local Storage, Create Logout Functionality 11min

- We need to install the `js-cookie` packed used to manage cookies.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/nuxt-news (master)
$ npm i js-cookie
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.0.7 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.0.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\watchpack\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\nodemon\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ js-cookie@2.2.0
added 1 package from 1 contributor and audited 14308 packages in 66.431s
found 0 vulnerabilities
```

- We are going to create the `utils` folder and the `utils/index.js` document that is going to contain generic functions like `saveUserData` to store the user authentication data in the `LocalStore` and `clearUserData` to clear the user authentication data from the `LocalStore`.

> utils/index.js
```js
import Cookie from "js-cookie";

export const saveUserData = ({ idToken, expiresIn }, { email, avatar }) => {
  const tokenExpiration = Date.now() + expiresIn * 1000;
  localStorage.setItem("jwt", idToken);
  localStorage.setItem("expiresIn", tokenExpiration);
  localStorage.setItem("user", email);
  localStorage.setItem("avatar", avatar);
  Cookie.set("jwt", idToken);
  Cookie.set("expiresIn", tokenExpiration);
  Cookie.set("user", email);
  Cookie.set("avatar", avatar);
};

export const getUserFromCookie = req => {
  if (!req.headers.cookie) return;

  const jwtCookie = req.headers.cookie
    .split(";")
    .find(c => c.trim().startsWith("jwt="));
  const expiresInCookie = req.headers.cookie
    .split(";")
    .find(c => c.trim().startsWith("expiresIn="));
  const userCookie = req.headers.cookie
    .split(";")
    .find(c => c.trim().startsWith("user="));
  const avatarCookie = req.headers.cookie
    .split(";")
    .find(c => c.trim().startsWith("avatar="));

  if (!jwtCookie || !expiresInCookie || !userCookie || !avatarCookie) return;

  const jwt = jwtCookie.split("=")[1];
  const expiresIn = expiresInCookie.split("=")[1];
  const user = userCookie.split("=")[1];
  const avatar = avatarCookie.split("=")[1];

  return { jwt, expiresIn, user, avatar };
};

export const getUserFromLocalStorage = () => {
  if (localStorage) {
    const jwt = localStorage.getItem("jwt");
    const expiresIn = localStorage.getItem("expiresIn");
    const user = localStorage.getItem("user");
    const avatar = localStorage.getItem("avatar");

    return { jwt, expiresIn, user, avatar };
  }
};

export const clearUserData = () => {
  if (!process.server) {
    localStorage.removeItem("jwt");
    localStorage.removeItem("expiresIn");
    localStorage.removeItem("user");
    localStorage.removeItem("avatar");
  }
  Cookie.remove("jwt");
  Cookie.remove("expiresIn");
  Cookie.remove("user");
  Cookie.remove("avatar");
};
```

- We are going to modify the `store\index.js` document to include a funtion to store the user authentication data in the `LocalStore`.

> store\index.js

```js
import Vuex from "vuex";
import md5 from "md5";
import db from "~/plugins/firestore";
import { saveUserData, clearUserData } from "~/utils";

const createStore = () => {
  return new Vuex.Store({
    state: {
      headlines: [],
      loading: false,
      token: "",
      user: null,
      category: "",
      country: "us"
    },
    mutations: {
      setHeadlines(state, headlines) {
        state.headlines = headlines;
      },
      setLoading(state, loading) {
        state.loading = loading;
      },
      setToken(state, token) {
        state.token = token;
      },
      setUser(state, user) {
        state.user = user;
      },
      setCategory(state, category) {
        state.category = category;
      },
      setCountry(state, country) {
        state.country = country;
      },
      clearToken: state => (state.token = ""),
      clearUser: state => (state.user = null)
    },
    actions: {
      async loadHeadlines({ commit }, apiUrl) {
        commit("setLoading", true);
        const { articles } = await this.$axios.$get(apiUrl);
        commit("setLoading", false);
        commit("setHeadlines", articles);
      },
      async authenticateUser({ commit }, userPayload) {
        try {
          commit("setLoading", true);
          const authUserData = await this.$axios.$post(
            `/${userPayload.action}/`,
            {
              email: userPayload.email,
              password: userPayload.password,
              returnSecureToken: userPayload.returnSecureToken
            }
          );
          let user;
          if (userPayload.action === "register") {
            const avatar = `http://gravatar.com/avatar/${md5(
              authUserData.email
            )}?d=identicon`;
            user = { email: authUserData.email, avatar };
            await db
              .collection("users")
              .doc(userPayload.email)
              .set(user);
          } else {
            const loginRef = db.collection("users").doc(userPayload.email);
            const loggedInUser = await loginRef.get();
            user = loggedInUser.data();
          }
          commit("setUser", user);
          commit("setToken", authUserData.idToken);
          commit("setLoading", false);
          saveUserData(authUserData, user);
        } catch (err) {
          console.error(err);
          commit("setLoading", false);
        }
      },
      setLogoutTimer({ dispatch }, interval) {
        setTimeout(() => dispatch("logoutUser"), interval);
      },
      logoutUser({ commit }) {
        commit("clearToken");
        commit("clearUser");
        clearUserData();
      }
    },
    getters: {
      headlines: state => state.headlines,
      loading: state => state.loading,
      user: state => state.user,
      isAuthenticated: state => !!state.token,
      category: state => state.category,
      country: state => state.country
    }
  });
};

export default createStore;
```

- We also need to create the `middleware/check-auth.js` document that is going to be used get the user authentication data from the `cookie` or the `LocalStorage` and store it in the `store`.

> middleware/check-auth.js
```js
import { getUserFromCookie, getUserFromLocalStorage } from "~/utils";

export default function({ store, req }) {
  if (process.server && !req) return;

  const userData = process.server
    ? getUserFromCookie(req)
    : getUserFromLocalStorage();

  if (!userData) {
    return;
  } else if (!userData.jwt || Date.now() > userData.expiresIn) {
    store.commit("clearToken");
    store.commit("clearUser");
  } else {
    store.commit("setToken", userData.jwt);
    store.commit("setUser", { email: userData.user, avatar: userData.avatar });
    const timeToLogout = userData.expiresIn - Date.now();
    store.dispatch("setLogoutTimer", timeToLogout);
  }
}
```

- We need to modify the `nuxt.config.js` document to include the new `check-auth` middleware created.

> nuxt.config.js

```js
const env = require("dotenv").config();

export default {
  mode: "spa",
  env: env.parsed,
  router: {
    middleware: "check-auth"
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#9ccc65", height: "10px" },
  /*
   ** Global CSS
   */
  css: [
    { src: "vue-material/dist/vue-material.min.css", lang: "css" },
    { src: "~/assets/theme.scss", lang: "scss" }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/vue-material" },
    { src: "~/plugins/axios" },
    { src: "~/plugins/firestore" }
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
    "@nuxtjs/proxy"
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    credentials: true,
    proxy: true
  },
  proxy: {
    "/api/": {
      target: "https://newsapi.org/v2/",
      pathRewrite: { "^/api/": "" }
    },
    "/register/": {
      target:
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=" +
        process.env.FIREBASE_API_KEY,
      pathRewrite: { "^/register/": "" }
    },
    "/login/": {
      target:
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" +
        process.env.FIREBASE_API_KEY,
      pathRewrite: { "^/login/": "" }
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
};
```

- We need to modify the `pages/index.vue` document to include the `logoff` functionality.

> `pages/index.vue`
```html
<template>
  <div class="md-layout md-alignment-center" style="margin: 4em 0">
    <!-- Top Navigation -->
    <md-toolbar class="fixed-toolbar" elevation="1">
      <md-button @click="showLeftSidepanel = true" class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>
      <nuxt-link class="md-primary md-title" to="/">
        NuxtNews
      </nuxt-link>

      <div class="md-toolbar-section-end">
        <template v-if="isAuthenticated">
          <md-button>
            <md-avatar><img :src="user.avatar" :alt="user.email"></md-avatar>
              {{user.email}}
          </md-button>
          <md-button @click="logoutUser">Logout</md-button>
        </template>

        <template v-else>
          <md-button to="/login">Login</md-button>
          <md-button to="/register">Register</md-button>
        </template>
        <md-button class="md-accent" @click="showRightSidepanel = true">Categories</md-button>
      </div>
    </md-toolbar>

    <!-- Personal News Feed (Left Drawer) -->
    <md-drawer md-fixed :md-active.sync="showLeftSidepanel">
      <md-toolbar md-elevation="1">
        <span class="md-title">Personal Feed</span>
      </md-toolbar>

      <md-progress-bar v-if="loading" md-mode="indeterminate"></md-progress-bar>

      <md-field>
        <label for="country">Country</label>
        <md-select @input="changeCountry" :value="country" name="country" id="country">
          <md-option value="us">United States</md-option>
          <md-option value="ca">Canada</md-option>
          <md-option value="de">Germany</md-option>
          <md-option value="ru">Russia</md-option>
        </md-select>
      </md-field>
    </md-drawer>

    <!-- News Categories (Right Drawer) -->
    <md-drawer class="md-right" md-fixed :md-active.sync="showRightSidepanel">
      <md-toolbar :md-elevation="1">
        <span class="md-title">News Categories</span>
      </md-toolbar>

      <md-progress-bar v-if="loading" md-mode='indeterminate'></md-progress-bar>

      <md-list>
        <md-subheader class="md-primary">Categories</md-subheader>

        <md-list-item v-for="(newsCategory, i) in newsCategories" :key="i" @click="loadCategory(newsCategory.path)">
          <md-icon :class="newsCategory.path === category ? 'md-primary' : ''">{{newsCategory.icon}}</md-icon>
          <span class="md-list-item-text">{{newsCategory.name}}</span>
        </md-list-item>
      </md-list>
    </md-drawer>

    <!-- App Content -->
    <div class="md-layout-item md-size-95">
      <md-content class="md-layout md-gutter" style="background: #007998; padding: 1em;">
        <ul v-for="headline in headlines" :key="headline.id" class="md-layout-item md-large-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100">
          <md-card style="margin-top: 1em;" md-with-hover>
            <md-ripple>
              <md-card-media md-ratio="16:9">
                <img :src="headline.urlToImage" :alt="headline.title">
          </md-card-media>

                <md-card-header>
                  <div class="md-title">
                    <a :href="headline.url" target="_blank">{{headline.title}}</a>
                  </div>
                  <div>
                    {{headline.source.name}}
                    <md-icon class="small-icon">book</md-icon>
                  </div>
                  <div class="md-subhead" v-if="headline.author">
                    {{headline.author}}
                    <md-icon class="small-icon">face</md-icon>
                  </div>
                  <div class="md-subhead">
                    {{headline.publishedAt}}
                    <md-icon class="small-icon">alarm</md-icon>
                  </div>
                </md-card-header>

                <md-card-content>{{headline.description}}</md-card-content>

                <md-card-actions>
                  <md-button class="md-icon-button">
                    <md-icon>bookmark</md-icon>
                  </md-button>
                  <md-button class="md-icon-button">
                    <md-icon>message</md-icon>
                  </md-button>
                </md-card-actions>
            </md-ripple>
          </md-card>
        </ul>
      </md-content>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    showLeftSidepanel: false,
    showRightSidepanel: false,
    newsCategories: [
      { name: "Top Headlines", path: "", icon: "today" },
      { name: "Technology", path: "technology", icon: "keyboard" },
      { name: "Business", path: "business", icon: "business_center" },
      { name: "Entertainment", path: "entertainment", icon: "weekend" },
      { name: "Health", path: "health", icon: "fastfood" },
      { name: "Science", path: "science", icon: "fingerprint" },
      { name: "Sports", path: "sports", icon: "golf_course" }
    ]
  }),
  async fetch({ store }) {
    await store.dispatch(
      "loadHeadlines",
      `/api/top-headlines?country=${store.state.country}&category=${
        store.state.category
      }`
    );
  },
  watch: {
    async country() {
      await this.$store.dispatch(
        "loadHeadlines",
        `/api/top-headlines?country=${this.country}&category=${this.category}`
      );
    }
  },
  computed: {
    headlines() {
      return this.$store.getters.headlines;
    },
    category() {
      return this.$store.getters.category;
    },
    country() {
      return this.$store.getters.country;
    },
    loading() {
      return this.$store.getters.loading;
    },
    user() {
      return this.$store.getters.user;
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    async loadCategory(category) {
      this.$store.commit("setCategory", category);
      await this.$store.dispatch(
        "loadHeadlines",
        `/api/top-headlines?country=${this.country}&category=${this.category}`
      );
    },
    changeCountry(country) {
      this.$store.commit("setCountry", country);
    },
    logoutUser() {
      this.$store.dispatch("logoutUser");
    }
  }
};
</script>

<style scoped>
.small-icon {
  font-size: 18px !important;
}

.fixed-toolbar {
  position: fixed;
  top: 0;
  z-index: 5;
}
</style>
```

- We need to test if it works.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ManageUserSessionsWithCookies.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ManageUserSessionsWithCookies2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ManageUserSessionsWithCookies3.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ManageUserSessionsWithCookies4.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ManageUserSessionsWithCookies5.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ManageUserSessionsWithCookies6.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ManageUserSessionsWithCookies7.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ManageUserSessionsWithCookies8.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ManageUserSessionsWithCookies9.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/ManageUserSessionsWithCookies10.png)

