# Progressive Web Apps (PWA) - The Complete Guide

The code is stored in [This GitHub Repository](https://github.com/peelmicro/progressive-web-apps) and [Another GitHub Repository](https://github.com/peelmicro/progressive-web-apps-spas).

The [Progressive Web Apps (PWA) - The Complete Guide](https://www.udemy.com/progressive-web-app-pwa-the-complete-guide/) Udemy course teaches to build a `Progressive Web App` (PWA) that feels like an iOS & Android App, using Device Camera, Push Notifications and more.

## I've learned how to
- Build web apps that look and feel like native mobile apps for iOS and Android
- Use service workers to build web apps that work without internet connection (offline-first)
- Leverage device features like the camera and geolocation in your web apps
- Use web push notifications to increase user engagement with your web apps

## Creation of different 'Spa' projects with the 'PWA' integration
### React
```sh
C:\Users\juan.pablo.perez\OneDrive\Training\JavaScript\progressive-web-apps-spas>npm i -g create-react-app
C:\Users\juan.pablo.perez\AppData\Roaming\npm\create-react-app -> C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\create-react-app\index.js
+ create-react-app@1.5.2
added 67 packages from 20 contributors in 4.98s
```
```sh
C:\Users\juan.pablo.perez\OneDrive\Training\JavaScript\progressive-web-apps-spas>create-react-app pwa-react

Creating a new React app in C:\Users\juan.pablo.perez\OneDrive\Training\JavaScript\progressive-web-apps-spas\pwa-react.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts...

yarn add v1.9.2
info No lockfile found.
[1/4] Resolving packages...
warning react-scripts > autoprefixer > browserslist@2.11.3: Browserslist 2 could fail on reading Browserslist >3.0 config used in other tools.
warning react-scripts > babel-preset-react-app > babel-preset-env > browserslist@2.11.3: Browserslist 2 could fail on reading Browserslist >3.0 config used in other tools.
warning react-scripts > css-loader > cssnano > autoprefixer > browserslist@1.7.7: Browserslist 2 could fail on reading Browserslist >3.0 config used in other tools.
warning react-scripts > css-loader > cssnano > postcss-merge-rules > browserslist@1.7.7: Browserslist 2 could fail on reading Browserslist >3.0 config used in other tools.
warning react-scripts > css-loader > cssnano > postcss-merge-rules > caniuse-api > browserslist@1.7.7: Browserslist 2 could fail on reading Browserslist >3.0 config used in other tools.
[2/4] Fetching packages...
[--------------------------------------------------------------------------------------------------------------] 0/1093(node:9872) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
info There appears to be trouble with your network connection. Retrying...
info fsevents@1.2.4: The platform "win32" is incompatible with this module.
info "fsevents@1.2.4" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
warning Your current version of Yarn is out of date. The latest version is "1.9.4", while you're on "1.9.2".
info To upgrade, download the latest installer at "https://yarnpkg.com/latest.msi".
success Saved 729 new dependencies.
info Direct dependencies
├─ react-dom@16.5.2
├─ react-scripts@1.1.5
└─ react@16.5.2
info All dependencies
├─ abab@1.0.4
├─ acorn-dynamic-import@2.0.2
├─ acorn-globals@3.1.0
├─ acorn-jsx@3.0.1
├─ address@1.0.3
├─ ajv-keywords@2.1.1
├─ ajv@5.5.2
├─ align-text@0.1.4
├─ ansi-align@2.0.0
├─ ansi-escapes@1.4.0
├─ ansi-html@0.0.7
├─ ansi-regex@2.1.1
├─ ansi-styles@3.2.1
├─ anymatch@2.0.0
├─ append-transform@0.4.0
├─ aria-query@0.7.1
├─ arr-flatten@1.1.0
├─ array-equal@1.0.0
├─ array-filter@0.0.1
├─ array-find-index@1.0.2
├─ array-flatten@1.1.1
├─ array-map@0.0.0
├─ array-reduce@0.0.0
├─ array-uniq@1.0.3
├─ arrify@1.0.1
├─ asap@2.0.6
├─ asn1.js@4.10.1
├─ asn1@0.2.4
├─ assert@1.4.1
├─ assign-symbols@1.0.0
├─ async-each@1.0.1
├─ async@2.6.1
├─ asynckit@0.4.0
├─ atob@2.1.2
├─ autoprefixer@7.1.6
├─ aws-sign2@0.7.0
├─ aws4@1.8.0
├─ axobject-query@0.1.0
├─ babel-eslint@7.2.3
├─ babel-generator@6.26.1
├─ babel-helper-builder-binary-assignment-operator-visitor@6.24.1
├─ babel-helper-builder-react-jsx@6.26.0
├─ babel-helper-call-delegate@6.24.1
├─ babel-helper-define-map@6.26.0
├─ babel-helper-explode-assignable-expression@6.24.1
├─ babel-helper-remap-async-to-generator@6.24.1
├─ babel-jest@20.0.3
├─ babel-plugin-check-es2015-constants@6.22.0
├─ babel-plugin-dynamic-import-node@1.1.0
├─ babel-plugin-jest-hoist@20.0.3
├─ babel-plugin-syntax-async-functions@6.13.0
├─ babel-plugin-syntax-class-properties@6.13.0
├─ babel-plugin-syntax-dynamic-import@6.18.0
├─ babel-plugin-syntax-exponentiation-operator@6.13.0
├─ babel-plugin-syntax-flow@6.18.0
├─ babel-plugin-syntax-object-rest-spread@6.13.0
├─ babel-plugin-syntax-trailing-function-commas@6.22.0
├─ babel-plugin-transform-async-to-generator@6.24.1
├─ babel-plugin-transform-class-properties@6.24.1
├─ babel-plugin-transform-es2015-arrow-functions@6.22.0
├─ babel-plugin-transform-es2015-block-scoped-functions@6.22.0
├─ babel-plugin-transform-es2015-block-scoping@6.26.0
├─ babel-plugin-transform-es2015-classes@6.24.1
├─ babel-plugin-transform-es2015-computed-properties@6.24.1
├─ babel-plugin-transform-es2015-destructuring@6.23.0
├─ babel-plugin-transform-es2015-duplicate-keys@6.24.1
├─ babel-plugin-transform-es2015-for-of@6.23.0
├─ babel-plugin-transform-es2015-function-name@6.24.1
├─ babel-plugin-transform-es2015-literals@6.22.0
├─ babel-plugin-transform-es2015-modules-amd@6.24.1
├─ babel-plugin-transform-es2015-modules-commonjs@6.26.2
├─ babel-plugin-transform-es2015-modules-systemjs@6.24.1
├─ babel-plugin-transform-es2015-modules-umd@6.24.1
├─ babel-plugin-transform-es2015-object-super@6.24.1
├─ babel-plugin-transform-es2015-parameters@6.24.1
├─ babel-plugin-transform-es2015-shorthand-properties@6.24.1
├─ babel-plugin-transform-es2015-spread@6.22.0
├─ babel-plugin-transform-es2015-sticky-regex@6.24.1
├─ babel-plugin-transform-es2015-template-literals@6.22.0
├─ babel-plugin-transform-es2015-typeof-symbol@6.23.0
├─ babel-plugin-transform-es2015-unicode-regex@6.24.1
├─ babel-plugin-transform-exponentiation-operator@6.24.1
├─ babel-plugin-transform-flow-strip-types@6.22.0
├─ babel-plugin-transform-object-rest-spread@6.26.0
├─ babel-plugin-transform-react-constant-elements@6.23.0
├─ babel-plugin-transform-react-display-name@6.25.0
├─ babel-plugin-transform-react-jsx-self@6.22.0
├─ babel-plugin-transform-react-jsx-source@6.22.0
├─ babel-plugin-transform-react-jsx@6.24.1
├─ babel-plugin-transform-regenerator@6.26.0
├─ babel-plugin-transform-runtime@6.23.0
├─ babel-plugin-transform-strict-mode@6.24.1
├─ babel-preset-env@1.6.1
├─ babel-preset-flow@6.23.0
├─ babel-preset-jest@20.0.3
├─ babel-preset-react-app@3.1.2
├─ babel-preset-react@6.24.1
├─ base@0.11.2
├─ base64-js@1.3.0
├─ batch@0.6.1
├─ bcrypt-pbkdf@1.0.2
├─ binary-extensions@1.12.0
├─ bluebird@3.5.2
├─ body-parser@1.18.2
├─ bonjour@3.5.0
├─ boxen@1.3.0
├─ brace-expansion@1.1.11
├─ braces@2.3.2
├─ browser-resolve@1.11.3
├─ browserify-aes@1.2.0
├─ browserify-cipher@1.0.1
├─ browserify-des@1.0.2
├─ browserify-sign@4.0.4
├─ browserify-zlib@0.2.0
├─ browserslist@1.7.7
├─ bser@2.0.0
├─ buffer-from@1.1.1
├─ buffer-indexof@1.1.1
├─ buffer-xor@1.0.3
├─ buffer@4.9.1
├─ builtin-modules@1.1.1
├─ builtin-status-codes@3.0.0
├─ cache-base@1.0.1
├─ caller-path@0.1.0
├─ callsites@2.0.0
├─ camel-case@3.0.0
├─ camelcase-keys@2.1.0
├─ caniuse-api@1.6.1
├─ caniuse-db@1.0.30000886
├─ caniuse-lite@1.0.30000886
├─ capture-stack-trace@1.0.1
├─ case-sensitive-paths-webpack-plugin@2.1.1
├─ caseless@0.12.0
├─ center-align@0.1.3
├─ chardet@0.4.2
├─ chokidar@2.0.4
├─ ci-info@1.6.0
├─ circular-json@0.3.3
├─ clap@1.2.3
├─ class-utils@0.3.6
├─ clean-css@4.2.1
├─ cli-boxes@1.0.0
├─ cli-cursor@2.1.0
├─ cli-width@2.2.0
├─ clone@1.0.4
├─ co@4.6.0
├─ coa@1.0.4
├─ code-point-at@1.1.0
├─ collection-visit@1.0.0
├─ color-convert@1.9.3
├─ color-name@1.1.3
├─ color-string@0.3.0
├─ color@0.11.4
├─ colormin@1.1.2
├─ colors@1.1.2
├─ combined-stream@1.0.7
├─ commander@2.17.1
├─ compressible@2.0.15
├─ compression@1.7.3
├─ concat-map@0.0.1
├─ concat-stream@1.6.2
├─ configstore@3.1.2
├─ connect-history-api-fallback@1.5.0
├─ console-browserify@1.1.0
├─ constants-browserify@1.0.0
├─ contains-path@0.1.0
├─ content-disposition@0.5.2
├─ content-type-parser@1.0.2
├─ convert-source-map@1.6.0
├─ cookie-signature@1.0.6
├─ cookie@0.3.1
├─ copy-descriptor@0.1.1
├─ core-js@2.5.7
├─ core-util-is@1.0.2
├─ cosmiconfig@2.2.2
├─ create-ecdh@4.0.3
├─ create-error-class@3.0.2
├─ create-hmac@1.1.7
├─ cross-spawn@5.1.0
├─ crypto-browserify@3.12.0
├─ crypto-random-string@1.0.0
├─ css-color-names@0.0.4
├─ css-loader@0.28.7
├─ css-select@1.2.0
├─ css-what@2.1.0
├─ cssesc@0.1.0
├─ cssnano@3.10.0
├─ csso@2.3.2
├─ cssom@0.3.4
├─ cssstyle@0.2.37
├─ currently-unhandled@0.4.1
├─ damerau-levenshtein@1.0.4
├─ dashdash@1.14.1
├─ date-now@0.1.4
├─ decode-uri-component@0.2.0
├─ deep-equal@1.0.1
├─ deep-extend@0.6.0
├─ deep-is@0.1.3
├─ default-require-extensions@1.0.0
├─ define-properties@1.1.3
├─ defined@1.0.0
├─ del@2.2.2
├─ des.js@1.0.0
├─ destroy@1.0.4
├─ detect-indent@4.0.0
├─ detect-node@2.0.4
├─ detect-port-alt@1.1.6
├─ diff@3.5.0
├─ diffie-hellman@5.0.3
├─ dns-equal@1.0.0
├─ dns-packet@1.3.1
├─ dns-txt@2.0.2
├─ dom-converter@0.1.4
├─ dom-serializer@0.1.0
├─ dom-urls@1.1.0
├─ domain-browser@1.2.0
├─ domhandler@2.1.0
├─ domutils@1.1.6
├─ dot-prop@4.2.0
├─ dotenv-expand@4.2.0
├─ dotenv@4.0.0
├─ duplexer@0.1.1
├─ duplexer3@0.1.4
├─ ecc-jsbn@0.1.2
├─ ee-first@1.1.1
├─ electron-to-chromium@1.3.70
├─ emoji-regex@6.5.1
├─ enhanced-resolve@3.4.1
├─ entities@1.1.1
├─ errno@0.1.7
├─ error-ex@1.3.2
├─ es-abstract@1.12.0
├─ es-to-primitive@1.1.1
├─ es6-iterator@2.0.3
├─ es6-map@0.1.5
├─ es6-promise@4.2.5
├─ es6-set@0.1.5
├─ es6-weak-map@2.0.2
├─ escodegen@1.11.0
├─ escope@3.6.0
├─ eslint-config-react-app@2.1.0
├─ eslint-import-resolver-node@0.3.2
├─ eslint-loader@1.9.0
├─ eslint-module-utils@2.2.0
├─ eslint-plugin-flowtype@2.39.1
├─ eslint-plugin-import@2.8.0
├─ eslint-plugin-jsx-a11y@5.1.1
├─ eslint-plugin-react@7.4.0
├─ eslint-scope@3.7.3
├─ eslint@4.10.0
├─ espree@3.5.4
├─ esprima@4.0.1
├─ esquery@1.0.1
├─ eventemitter3@3.1.0
├─ events@1.1.1
├─ eventsource@0.1.6
├─ exec-sh@0.2.2
├─ expand-brackets@0.1.5
├─ expand-range@1.8.2
├─ expand-tilde@2.0.2
├─ express@4.16.3
├─ extend@3.0.2
├─ external-editor@2.2.0
├─ extglob@0.3.2
├─ extract-text-webpack-plugin@3.0.2
├─ extsprintf@1.3.0
├─ fast-deep-equal@1.1.0
├─ fast-levenshtein@2.0.6
├─ fastparse@1.1.1
├─ faye-websocket@0.10.0
├─ fb-watchman@2.0.0
├─ figures@2.0.0
├─ file-entry-cache@2.0.0
├─ file-loader@1.1.5
├─ filename-regex@2.0.1
├─ fileset@2.0.3
├─ filesize@3.5.11
├─ fill-range@4.0.0
├─ finalhandler@1.1.1
├─ find-cache-dir@1.0.0
├─ flat-cache@1.3.0
├─ flatten@1.0.2
├─ follow-redirects@1.5.8
├─ for-in@1.0.2
├─ for-own@0.1.5
├─ forever-agent@0.6.1
├─ form-data@2.3.2
├─ forwarded@0.1.2
├─ fs-extra@3.0.1
├─ fs.realpath@1.0.0
├─ functional-red-black-tree@1.0.1
├─ get-stdin@4.0.1
├─ get-value@2.0.6
├─ getpass@0.1.7
├─ glob-base@0.3.0
├─ glob-parent@2.0.0
├─ global-dirs@0.1.1
├─ global-modules@1.0.0
├─ global-prefix@1.0.2
├─ globals@9.18.0
├─ globby@5.0.0
├─ got@6.7.1
├─ growly@1.3.0
├─ gzip-size@3.0.0
├─ handle-thing@1.2.5
├─ handlebars@4.0.12
├─ har-schema@2.0.0
├─ har-validator@5.1.0
├─ has-ansi@2.0.0
├─ has-flag@3.0.0
├─ has-symbols@1.0.0
├─ has-value@1.0.0
├─ has-values@1.0.0
├─ hash.js@1.1.5
├─ he@1.1.1
├─ hmac-drbg@1.0.1
├─ home-or-tmp@2.0.0
├─ hosted-git-info@2.7.1
├─ hpack.js@2.1.6
├─ html-comment-regex@1.1.1
├─ html-encoding-sniffer@1.0.2
├─ html-entities@1.2.1
├─ html-minifier@3.5.20
├─ html-webpack-plugin@2.29.0
├─ htmlparser2@3.3.0
├─ http-deceiver@1.2.7
├─ http-parser-js@0.4.13
├─ http-proxy-middleware@0.17.4
├─ http-proxy@1.17.0
├─ http-signature@1.2.0
├─ https-browserify@1.0.0
├─ icss-replace-symbols@1.1.0
├─ icss-utils@2.1.0
├─ ieee754@1.1.12
├─ ignore@3.3.10
├─ import-lazy@2.1.0
├─ import-local@1.0.0
├─ indent-string@2.1.0
├─ indexes-of@1.0.1
├─ indexof@0.0.1
├─ inflight@1.0.6
├─ inquirer@3.3.0
├─ internal-ip@1.2.0
├─ interpret@1.1.0
├─ invert-kv@1.0.0
├─ ip@1.1.5
├─ ipaddr.js@1.8.0
├─ is-absolute-url@2.1.0
├─ is-accessor-descriptor@1.0.0
├─ is-arrayish@0.2.1
├─ is-binary-path@1.0.1
├─ is-callable@1.1.4
├─ is-data-descriptor@1.0.0
├─ is-date-object@1.0.1
├─ is-descriptor@1.0.2
├─ is-directory@0.3.1
├─ is-dotfile@1.0.3
├─ is-equal-shallow@0.1.3
├─ is-finite@1.0.2
├─ is-installed-globally@0.1.0
├─ is-npm@1.0.0
├─ is-obj@1.0.1
├─ is-plain-obj@1.1.0
├─ is-plain-object@2.0.4
├─ is-posix-bracket@0.1.1
├─ is-primitive@2.0.0
├─ is-promise@2.1.0
├─ is-redirect@1.0.0
├─ is-regex@1.0.4
├─ is-resolvable@1.1.0
├─ is-retry-allowed@1.1.0
├─ is-root@1.0.0
├─ is-stream@1.1.0
├─ is-svg@2.1.0
├─ is-symbol@1.0.2
├─ is-typedarray@1.0.0
├─ is-utf8@0.2.1
├─ is-windows@1.0.2
├─ isarray@1.0.0
├─ isexe@2.0.0
├─ isstream@0.1.2
├─ istanbul-api@1.3.7
├─ istanbul-lib-hook@1.2.2
├─ istanbul-lib-instrument@1.10.2
├─ istanbul-lib-report@1.1.5
├─ istanbul-lib-source-maps@1.2.6
├─ istanbul-reports@1.5.1
├─ jest-changed-files@20.0.3
├─ jest-cli@20.0.4
├─ jest-environment-node@20.0.3
├─ jest-matchers@20.0.3
├─ jest-resolve-dependencies@20.0.3
├─ jest-runtime@20.0.4
├─ jest@20.0.4
├─ js-base64@2.4.9
├─ js-tokens@4.0.0
├─ js-yaml@3.12.0
├─ jsdom@9.12.0
├─ jsesc@1.3.0
├─ json-loader@0.5.7
├─ json-schema-traverse@0.3.1
├─ json-schema@0.2.3
├─ json-stringify-safe@5.0.1
├─ json3@3.3.2
├─ jsonfile@3.0.1
├─ jsprim@1.4.1
├─ jsx-ast-utils@1.4.1
├─ killable@1.0.1
├─ kind-of@3.2.2
├─ klaw@1.3.1
├─ latest-version@3.1.0
├─ lazy-cache@1.0.4
├─ levn@0.3.0
├─ load-json-file@1.1.0
├─ loader-fs-cache@1.0.1
├─ loader-runner@2.3.1
├─ locate-path@2.0.0
├─ lodash.camelcase@4.3.0
├─ lodash.cond@4.5.2
├─ lodash.debounce@4.0.8
├─ lodash.defaults@4.2.0
├─ lodash.memoize@4.1.2
├─ lodash.template@4.4.0
├─ lodash.templatesettings@4.1.0
├─ lodash.uniq@4.5.0
├─ loglevel@1.6.1
├─ longest@1.0.1
├─ loose-envify@1.4.0
├─ loud-rejection@1.6.0
├─ lower-case@1.1.4
├─ lowercase-keys@1.0.1
├─ lru-cache@4.1.3
├─ makeerror@1.0.11
├─ map-obj@1.0.1
├─ map-visit@1.0.0
├─ math-expression-evaluator@1.2.17
├─ math-random@1.0.1
├─ media-typer@0.3.0
├─ mem@1.1.0
├─ meow@3.7.0
├─ merge-descriptors@1.0.1
├─ merge@1.2.0
├─ methods@1.1.2
├─ micromatch@2.3.11
├─ miller-rabin@4.0.1
├─ mime-db@1.36.0
├─ mime-types@2.1.20
├─ mime@1.6.0
├─ minimalistic-assert@1.0.1
├─ minimalistic-crypto-utils@1.0.1
├─ minimatch@3.0.4
├─ minimist@1.2.0
├─ mixin-deep@1.3.1
├─ multicast-dns-service-types@1.1.0
├─ multicast-dns@6.2.3
├─ mute-stream@0.0.7
├─ nanomatch@1.2.13
├─ negotiator@0.6.1
├─ neo-async@2.5.2
├─ next-tick@1.0.0
├─ node-forge@0.7.5
├─ node-libs-browser@2.1.0
├─ node-notifier@5.2.1
├─ normalize-package-data@2.4.0
├─ normalize-path@2.1.1
├─ normalize-url@1.9.1
├─ npm-run-path@2.0.2
├─ nth-check@1.0.1
├─ nwmatcher@1.4.4
├─ oauth-sign@0.9.0
├─ object-copy@0.1.0
├─ object-hash@1.3.0
├─ object-keys@1.0.12
├─ object.omit@2.0.1
├─ obuf@1.1.2
├─ on-headers@1.0.1
├─ onetime@2.0.1
├─ opn@5.2.0
├─ optimist@0.6.1
├─ optionator@0.8.2
├─ original@1.0.2
├─ os-browserify@0.3.0
├─ os-homedir@1.0.2
├─ os-tmpdir@1.0.2
├─ p-finally@1.0.0
├─ p-limit@1.3.0
├─ p-locate@2.0.0
├─ p-try@1.0.0
├─ package-json@4.0.1
├─ pako@1.0.6
├─ param-case@2.1.1
├─ parse-glob@3.0.4
├─ parse-passwd@1.0.0
├─ parse5@1.5.1
├─ pascalcase@0.1.1
├─ path-browserify@0.0.0
├─ path-dirname@1.0.2
├─ path-exists@2.1.0
├─ path-is-inside@1.0.2
├─ path-key@2.0.1
├─ path-to-regexp@0.1.7
├─ path-type@1.1.0
├─ pinkie@2.0.4
├─ pluralize@7.0.0
├─ portfinder@1.0.17
├─ posix-character-classes@0.1.1
├─ postcss-calc@5.3.1
├─ postcss-colormin@2.2.2
├─ postcss-convert-values@2.6.1
├─ postcss-discard-comments@2.0.4
├─ postcss-discard-duplicates@2.1.0
├─ postcss-discard-empty@2.1.0
├─ postcss-discard-overridden@0.1.1
├─ postcss-discard-unused@2.2.3
├─ postcss-filter-plugins@2.0.3
├─ postcss-flexbugs-fixes@3.2.0
├─ postcss-load-config@1.2.0
├─ postcss-load-options@1.2.0
├─ postcss-load-plugins@2.3.0
├─ postcss-loader@2.0.8
├─ postcss-merge-idents@2.1.7
├─ postcss-merge-longhand@2.0.2
├─ postcss-merge-rules@2.1.2
├─ postcss-message-helpers@2.0.0
├─ postcss-minify-font-values@1.0.5
├─ postcss-minify-gradients@1.0.5
├─ postcss-minify-params@1.2.2
├─ postcss-minify-selectors@2.1.1
├─ postcss-modules-extract-imports@1.1.0
├─ postcss-modules-local-by-default@1.2.0
├─ postcss-modules-scope@1.1.0
├─ postcss-modules-values@1.3.0
├─ postcss-normalize-charset@1.1.1
├─ postcss-normalize-url@3.0.8
├─ postcss-ordered-values@2.2.3
├─ postcss-reduce-idents@2.4.0
├─ postcss-reduce-initial@1.0.1
├─ postcss-reduce-transforms@1.0.4
├─ postcss-selector-parser@2.2.3
├─ postcss-svgo@2.1.6
├─ postcss-unique-selectors@2.0.2
├─ postcss-zindex@2.2.0
├─ prepend-http@1.0.4
├─ preserve@0.2.0
├─ pretty-bytes@4.0.2
├─ pretty-error@2.1.1
├─ private@0.1.8
├─ process-nextick-args@2.0.0
├─ process@0.11.10
├─ progress@2.0.0
├─ promise@8.0.1
├─ prop-types@15.6.2
├─ proxy-addr@2.0.4
├─ prr@1.0.1
├─ pseudomap@1.0.2
├─ psl@1.1.29
├─ public-encrypt@4.0.2
├─ punycode@1.4.1
├─ q@1.5.1
├─ query-string@4.3.4
├─ querystring-es3@0.2.1
├─ querystring@0.2.0
├─ querystringify@2.0.0
├─ raf@3.4.0
├─ randomatic@3.1.0
├─ randomfill@1.0.4
├─ raw-body@2.3.2
├─ rc@1.2.8
├─ react-dev-utils@5.0.2
├─ react-dom@16.5.2
├─ react-error-overlay@4.0.1
├─ react-scripts@1.1.5
├─ react@16.5.2
├─ read-pkg@1.1.0
├─ readdirp@2.2.1
├─ recursive-readdir@2.2.1
├─ redent@1.0.0
├─ reduce-css-calc@1.3.0
├─ reduce-function-call@1.0.2
├─ regenerator-runtime@0.11.1
├─ regenerator-transform@0.10.1
├─ regex-cache@0.4.4
├─ regex-not@1.0.2
├─ regexpu-core@1.0.0
├─ registry-auth-token@3.3.2
├─ registry-url@3.1.0
├─ relateurl@0.2.7
├─ remove-trailing-separator@1.1.0
├─ renderkid@2.0.1
├─ request@2.88.0
├─ require-from-string@1.2.1
├─ require-uncached@1.0.3
├─ resolve-cwd@2.0.0
├─ resolve-dir@1.0.1
├─ resolve-from@1.0.1
├─ resolve-url@0.2.1
├─ resolve@1.8.1
├─ restore-cursor@2.0.0
├─ ret@0.1.15
├─ right-align@0.1.3
├─ run-async@2.3.0
├─ rx-lite-aggregates@4.0.8
├─ rx-lite@4.0.8
├─ safer-buffer@2.1.2
├─ sane@1.6.0
├─ sax@1.2.4
├─ select-hose@2.0.0
├─ selfsigned@1.10.3
├─ semver-diff@2.1.0
├─ semver@5.5.1
├─ serve-index@1.9.1
├─ serve-static@1.13.2
├─ serviceworker-cache-polyfill@4.0.0
├─ set-blocking@2.0.0
├─ set-value@2.0.0
├─ setimmediate@1.0.5
├─ shebang-command@1.2.0
├─ shebang-regex@1.0.0
├─ shell-quote@1.6.1
├─ shellwords@0.1.1
├─ slice-ansi@1.0.0
├─ snapdragon-node@2.1.1
├─ snapdragon-util@3.0.1
├─ sockjs@0.3.19
├─ sort-keys@1.1.2
├─ source-map-resolve@0.5.2
├─ source-map-support@0.4.18
├─ source-map-url@0.4.0
├─ spdx-correct@3.0.0
├─ spdx-exceptions@2.1.0
├─ spdy-transport@2.1.0
├─ spdy@3.4.7
├─ split-string@3.1.0
├─ sprintf-js@1.0.3
├─ sshpk@1.14.2
├─ static-extend@0.1.2
├─ stream-browserify@2.0.1
├─ stream-http@2.8.3
├─ strict-uri-encode@1.1.0
├─ string_decoder@1.1.1
├─ string-length@1.0.1
├─ string-width@2.1.1
├─ strip-eof@1.0.0
├─ strip-indent@1.0.1
├─ strip-json-comments@2.0.1
├─ style-loader@0.19.0
├─ supports-color@5.5.0
├─ svgo@0.7.2
├─ sw-precache-webpack-plugin@0.11.4
├─ sw-precache@5.2.1
├─ sw-toolbox@3.6.0
├─ symbol-tree@3.2.2
├─ table@4.0.3
├─ term-size@1.2.0
├─ test-exclude@4.2.3
├─ text-table@0.2.0
├─ throat@3.2.0
├─ through@2.3.8
├─ thunky@1.0.2
├─ time-stamp@2.1.0
├─ timed-out@4.0.1
├─ timers-browserify@2.0.10
├─ tmp@0.0.33
├─ tmpl@1.0.4
├─ to-arraybuffer@1.0.1
├─ to-fast-properties@1.0.3
├─ to-regex-range@2.1.1
├─ toposort@1.0.7
├─ tough-cookie@2.4.3
├─ tr46@0.0.3
├─ trim-newlines@1.0.0
├─ trim-right@1.0.1
├─ tty-browserify@0.0.0
├─ tunnel-agent@0.6.0
├─ tweetnacl@0.14.5
├─ type-is@1.6.16
├─ typedarray@0.0.6
├─ uglify-js@3.4.9
├─ uglify-to-browserify@1.0.2
├─ uglifyjs-webpack-plugin@0.4.6
├─ union-value@1.0.0
├─ uniq@1.0.1
├─ unique-string@1.0.0
├─ universalify@0.1.2
├─ unpipe@1.0.0
├─ unset-value@1.0.0
├─ unzip-response@2.0.1
├─ upath@1.1.0
├─ update-notifier@2.5.0
├─ upper-case@1.1.3
├─ uri-js@4.2.2
├─ urijs@1.19.1
├─ urix@0.1.0
├─ url-loader@0.6.2
├─ url-parse-lax@1.0.0
├─ url-parse@1.4.3
├─ url@0.11.0
├─ use@3.1.1
├─ util-deprecate@1.0.2
├─ util@0.10.4
├─ utils-merge@1.0.1
├─ uuid@3.3.2
├─ validate-npm-package-license@3.0.4
├─ vendors@1.0.2
├─ verror@1.10.0
├─ vm-browserify@0.0.4
├─ walker@1.0.7
├─ watch@0.10.0
├─ watchpack@1.6.0
├─ wbuf@1.7.3
├─ webidl-conversions@4.0.2
├─ webpack-dev-middleware@1.12.2
├─ webpack-dev-server@2.11.3
├─ webpack-manifest-plugin@1.3.2
├─ webpack@3.8.1
├─ websocket-extensions@0.1.3
├─ whatwg-fetch@2.0.3
├─ whatwg-url@4.8.0
├─ whet.extend@0.9.9
├─ which@1.3.1
├─ widest-line@2.0.0
├─ window-size@0.1.0
├─ wordwrap@1.0.0
├─ wrap-ansi@2.1.0
├─ write-file-atomic@2.3.0
├─ write@0.2.1
├─ xml-name-validator@2.0.1
├─ xtend@4.0.1
└─ yargs-parser@5.0.0
Done in 141.99s.

Success! Created pwa-react at C:\Users\juan.pablo.perez\OneDrive\Training\JavaScript\progressive-web-apps-spas\pwa-react
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

  cd pwa-react
  yarn start

Happy hacking!
```
```sh
$ npm run eject

> pwa-react@0.1.0 eject C:\Users\juan.pablo.perez\OneDrive\Training\JavaScript\progressive-web-apps-spas\pwa-react
> react-scripts eject

? Are you sure you want to eject? This action is permanent. (y/N)


? Are you sure you want to eject? This action is permanent. Yes
Ejecting...

Copying files into C:\Users\juan.pablo.perez\OneDrive\Training\JavaScript\progressive-web-apps-spas\pwa-react
  Adding \config\env.js to the project
  Adding \config\paths.js to the project
  Adding \config\polyfills.js to the project
  Adding \config\webpack.config.dev.js to the project
  Adding \config\webpack.config.prod.js to the project
  Adding \config\webpackDevServer.config.js to the project
  Adding \config\jest\cssTransform.js to the project
  Adding \config\jest\fileTransform.js to the project
  Adding \scripts\build.js to the project
  Adding \scripts\start.js to the project
  Adding \scripts\test.js to the project

Updating the dependencies
  Removing react-scripts from dependencies
  Adding autoprefixer to dependencies
  Adding babel-core to dependencies
  Adding babel-eslint to dependencies
  Adding babel-jest to dependencies
  Adding babel-loader to dependencies
  Adding babel-preset-react-app to dependencies
  Adding babel-runtime to dependencies
  Adding case-sensitive-paths-webpack-plugin to dependencies
  Adding chalk to dependencies
  Adding css-loader to dependencies
  Adding dotenv to dependencies
  Adding dotenv-expand to dependencies
  Adding eslint to dependencies
  Adding eslint-config-react-app to dependencies
  Adding eslint-loader to dependencies
  Adding eslint-plugin-flowtype to dependencies
  Adding eslint-plugin-import to dependencies
  Adding eslint-plugin-jsx-a11y to dependencies
  Adding eslint-plugin-react to dependencies
  Adding extract-text-webpack-plugin to dependencies
  Adding file-loader to dependencies
  Adding fs-extra to dependencies
  Adding html-webpack-plugin to dependencies
  Adding jest to dependencies
  Adding object-assign to dependencies
  Adding postcss-flexbugs-fixes to dependencies
  Adding postcss-loader to dependencies
  Adding promise to dependencies
  Adding raf to dependencies
  Adding react-dev-utils to dependencies
  Adding resolve to dependencies
  Adding style-loader to dependencies
  Adding sw-precache-webpack-plugin to dependencies
  Adding url-loader to dependencies
  Adding webpack to dependencies
  Adding webpack-dev-server to dependencies
  Adding webpack-manifest-plugin to dependencies
  Adding whatwg-fetch to dependencies

Updating the scripts
  Replacing "react-scripts start" with "node scripts/start.js"
  Replacing "react-scripts build" with "node scripts/build.js"
  Replacing "react-scripts test" with "node scripts/test.js"

Configuring package.json
  Adding Jest configuration
  Adding Babel preset
  Adding ESLint configuration

Ejected successfully!

Please consider sharing why you ejected in this survey:
  http://goo.gl/forms/Bi6CZjk1EqsdelXk1
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/JavaScript/progressive-web-apps-spas/pwa-react
$ npm run build

> pwa-react@0.1.0 build C:\Users\juan.pablo.perez\OneDrive\Training\JavaScript\progressive-web-apps-spas\pwa-react
> node scripts/build.js

internal/modules/cjs/loader.js:583
    throw err;
    ^

Error: Cannot find module 'babel-loader'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:581:15)
    at Function.resolve (internal/modules/cjs/helpers.js:30:19)
    at Object.<anonymous> (C:\Users\juan.pablo.perez\OneDrive\Training\JavaScript\progressive-web-apps-spas\pwa-react\config\webpack.config.prod.js:150:29)
    at Module._compile (internal/modules/cjs/loader.js:689:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)
    at Module.load (internal/modules/cjs/loader.js:599:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)
    at Function.Module._load (internal/modules/cjs/loader.js:530:3)
    at Module.require (internal/modules/cjs/loader.js:637:17)
    at require (internal/modules/cjs/helpers.js:20:18)
    at Object.<anonymous> (C:\Users\juan.pablo.perez\OneDrive\Training\JavaScript\progressive-web-apps-spas\pwa-react\scripts\build.js:21:16)
    at Module._compile (internal/modules/cjs/loader.js:689:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)
    at Module.load (internal/modules/cjs/loader.js:599:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)
    at Function.Module._load (internal/modules/cjs/loader.js:530:3)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! pwa-react@0.1.0 build: `node scripts/build.js`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the pwa-react@0.1.0 build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\juan.pablo.perez\AppData\Roaming\npm-cache\_logs\2018-09-22T11_29_32_331Z-debug.log
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/JavaScript/progressive-web-apps-spas/pwa-react
$ yarn install
yarn install v1.9.2
[1/4] Resolving packages...
[2/4] Fetching packages...
[-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------] 0/1092(
node:27476) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
info fsevents@1.2.4: The platform "win32" is incompatible with this module.
info "fsevents@1.2.4" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[4/4] Building fresh packages...

success Saved lockfile.
Done in 111.44s.
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/JavaScript/progressive-web-apps-spas/pwa-react
$ npm run build

> pwa-react@0.1.0 build C:\Users\juan.pablo.perez\OneDrive\Training\JavaScript\progressive-web-apps-spas\pwa-react
> node scripts/build.js

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  37.34 KB  build\static\js\main.70423982.js
  299 B     build\static\css\main.c17080f1.css

The project was built assuming it is hosted at the server root.
You can control this with the homepage field in your package.json.
For example, add this to build it for GitHub Pages:

  "homepage" : "http://myname.github.io/myapp",

The build folder is ready to be deployed.
You may serve it with a static server:

  yarn global add serve
  serve -s build

Find out more about deployment here:

  http://bit.ly/2vY88Kr

 $ yarn global add serve
yarn global v1.9.2
[1/4] Resolving packages...
[2/4] Fetching packages...
[--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------] 0/586(
node:3256) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
[3/4] Linking dependencies...
[4/4] Building fresh packages...

warning Your current version of Yarn is out of date. The latest version is "1.9.4", while you're on "1.9.2".
info To upgrade, download the latest installer at "https://yarnpkg.com/latest.msi".
success Installed "serve@10.0.1" with binaries:
      - serve
Done in 74.54s.
```
```sh
$ serve -s build

   ┌───────────────────────────────────────────────┐
   │                                               │
   │   Serving!                                    │
   │                                               │
   │   - Local:            http://localhost:5000   │
   │   - On Your Network:  http://10.0.75.1:5000   │
   │                                               │
   │   Copied local address to clipboard!          │
   │                                               │
   └───────────────────────────────────────────────┘
```

### Angular
```sh
C:\Users\juan.pablo.perez\OneDrive\Training\JavaScript\progressive-web-apps-spas>npm i -g @angular/cli
C:\Users\juan.pablo.perez\AppData\Roaming\npm\ng -> C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\@angular\cli\bin\ng
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\@angular\cli\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ @angular/cli@6.2.3
added 4 packages from 3 contributors, removed 10 packages and updated 28 packages in 20.325s
```
```sh
C:\Users\juan.pablo.perez\OneDrive\Training\JavaScript\progressive-web-apps-spas>ng new pwa-angular
CREATE pwa-angular/angular.json (3593 bytes)
CREATE pwa-angular/package.json (1317 bytes)
CREATE pwa-angular/README.md (1027 bytes)
CREATE pwa-angular/tsconfig.json (408 bytes)
CREATE pwa-angular/tslint.json (2837 bytes)
CREATE pwa-angular/.editorconfig (245 bytes)
CREATE pwa-angular/.gitignore (503 bytes)
CREATE pwa-angular/src/favicon.ico (5430 bytes)
CREATE pwa-angular/src/index.html (297 bytes)
CREATE pwa-angular/src/main.ts (373 bytes)
CREATE pwa-angular/src/polyfills.ts (3194 bytes)
CREATE pwa-angular/src/test.ts (642 bytes)
CREATE pwa-angular/src/styles.css (80 bytes)
CREATE pwa-angular/src/browserslist (388 bytes)
CREATE pwa-angular/src/karma.conf.js (964 bytes)
CREATE pwa-angular/src/tsconfig.app.json (166 bytes)
CREATE pwa-angular/src/tsconfig.spec.json (256 bytes)
CREATE pwa-angular/src/tslint.json (314 bytes)
CREATE pwa-angular/src/assets/.gitkeep (0 bytes)
CREATE pwa-angular/src/environments/environment.prod.ts (51 bytes)
CREATE pwa-angular/src/environments/environment.ts (662 bytes)
CREATE pwa-angular/src/app/app.module.ts (314 bytes)
CREATE pwa-angular/src/app/app.component.html (1141 bytes)
CREATE pwa-angular/src/app/app.component.spec.ts (1010 bytes)
CREATE pwa-angular/src/app/app.component.ts (215 bytes)
CREATE pwa-angular/src/app/app.component.css (0 bytes)
CREATE pwa-angular/e2e/protractor.conf.js (752 bytes)
CREATE pwa-angular/e2e/tsconfig.e2e.json (213 bytes)
CREATE pwa-angular/e2e/src/app.e2e-spec.ts (307 bytes)
CREATE pwa-angular/e2e/src/app.po.ts (208 bytes)

> node-sass@4.9.3 install C:\Users\juan.pablo.perez\OneDrive\Training\JavaScript\progressive-web-apps-spas\pwa-angular\node_modules\node-sass
> node scripts/install.js

Cached binary found at C:\Users\juan.pablo.perez\AppData\Roaming\npm-cache\node-sass\4.9.3\win32-x64-64_binding.node

> circular-json@0.5.7 postinstall C:\Users\juan.pablo.perez\OneDrive\Training\JavaScript\progressive-web-apps-spas\pwa-angular\node_modules\circular-json
> echo ''; echo "\x1B[1mCircularJSON\x1B[0m is in \x1B[4mmaintenance only\x1B[0m, \x1B[1mflatted\x1B[0m is its successor."; echo ''

''; echo "\x1B[1mCircularJSON\x1B[0m is in \x1B[4mmaintenance only\x1B[0m, \x1B[1mflatted\x1B[0m is its successor."; echo ''

> node-sass@4.9.3 postinstall C:\Users\juan.pablo.perez\OneDrive\Training\JavaScript\progressive-web-apps-spas\pwa-angular\node_modules\node-sass
> node scripts/build.js

Binary found at C:\Users\juan.pablo.perez\OneDrive\Training\JavaScript\progressive-web-apps-spas\pwa-angular\node_modules\node-sass\vendor\win32-x64-64\binding.node
Testing binary
Binary is fine
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

added 1087 packages from 1324 contributors and audited 39031 packages in 130.972s
found 0 vulnerabilities

warning: LF will be replaced by CRLF in .editorconfig.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in .gitignore.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in README.md.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in angular.json.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in e2e/protractor.conf.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in e2e/src/app.e2e-spec.ts.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in e2e/src/app.po.ts.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in e2e/tsconfig.e2e.json.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in package-lock.json.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in package.json.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/app.component.html.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/app.component.spec.ts.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/app.component.ts.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/app/app.module.ts.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/browserslist.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/environments/environment.prod.ts.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/environments/environment.ts.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/index.html.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/karma.conf.js.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/main.ts.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/polyfills.ts.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/styles.css.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/test.ts.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/tsconfig.app.json.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/tsconfig.spec.json.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in src/tslint.json.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in tsconfig.json.
The file will have its original line endings in your working directory.
warning: LF will be replaced by CRLF in tslint.json.
The file will have its original line endings in your working directory.
    Successfully initialized git.
```
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/JavaScript/progressive-web-apps-spas/pwa-angular (master)
$ ng add @angular/pwa
Installing packages for tooling via npm.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ @angular/pwa@0.8.3
added 2 packages from 2 contributors and audited 47545 packages in 22.571s
found 0 vulnerabilities

Installed packages for tooling via npm.
CREATE ngsw-config.json (441 bytes)
CREATE src/manifest.json (1079 bytes)
CREATE src/assets/icons/icon-128x128.png (1253 bytes)
CREATE src/assets/icons/icon-144x144.png (1394 bytes)
CREATE src/assets/icons/icon-152x152.png (1427 bytes)
CREATE src/assets/icons/icon-192x192.png (1790 bytes)
CREATE src/assets/icons/icon-384x384.png (3557 bytes)
CREATE src/assets/icons/icon-512x512.png (5008 bytes)
CREATE src/assets/icons/icon-72x72.png (792 bytes)
CREATE src/assets/icons/icon-96x96.png (958 bytes)
UPDATE angular.json (3700 bytes)
UPDATE package.json (1388 bytes)
UPDATE src/app/app.module.ts (756 bytes)
UPDATE src/index.html (688 bytes)
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

added 1 package from 1 contributor and audited 47547 packages in 22.493s
found 0 vulnerabilities


Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/JavaScript/progressive-web-apps-spas/pwa-angular (master)
```

- In package.json add start:prod (after installing http-server)
```json
"scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "start:prod": "ng build --prod && cd dist/pwa-angular && http-server -c-1"
  },
```  
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/JavaScript/progressive-web-apps-spas/pwa-angular (master)
$ npm run start:prod

> pwa-angular@0.0.0 start:prod C:\Users\juan.pablo.perez\OneDrive\Training\JavaScript\progressive-web-apps-spas\pwa-angular
> ng build --prod && cd dist/pwa-angular && http-server -c-1


Date: 2018-09-22T14:16:58.267Z
Hash: 56cdbf2bef84db0b1989
Time: 20905ms
chunk {0} runtime.ec2944dd8b20ec099bf3.js (runtime) 1.44 kB [entry] [rendered]
chunk {1} main.47d099718e7f490818f0.js (main) 268 kB [initial] [rendered]
chunk {2} polyfills.f6ae3e8b63939c618130.js (polyfills) 59.6 kB [initial] [rendered]
chunk {3} styles.3bb2a9d4949b7dc120a9.css (styles) 0 bytes [initial] [rendered]
Starting up http-server, serving ./
Available on:
  http://172.18.55.225:8080
  http://10.0.75.1:8080
  http://192.168.56.1:8080
  http://192.168.0.107:8080
  http://169.254.234.235:8080
  http://127.0.0.1:8080
  http://172.30.192.1:8080
Hit CTRL-C to stop the server
```  

### Vue.js 
```sh
C:\Users\juan.pablo.perez\OneDrive\Training\JavaScript\progressive-web-apps-spas>npm uninstall vue-cli -g
up to date in 0.043s

C:\Users\juan.pablo.perez\OneDrive\Training\JavaScript\progressive-web-apps-spas>npm install -g @vue/cli
C:\Users\juan.pablo.perez\AppData\Roaming\npm\vue -> C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\@vue\cli\bin\vue.js

> protobufjs@6.8.8 postinstall C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\@vue\cli\node_modules\protobufjs
> node scripts/postinstall


> nodemon@1.18.4 postinstall C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\@vue\cli\node_modules\nodemon
> node bin/postinstall || exit 0

Love nodemon? You can now support the project via the open collective:
 > https://opencollective.com/nodemon/donate

npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\@vue\cli\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ @vue/cli@3.0.3
added 639 packages from 455 contributors in 43.883s
```  
```sh
C:\Users\juan.pablo.perez\OneDrive\Training\JavaScript\progressive-web-apps-spas>vue --version
3.0.3
```  
```sh
C:\Users\juan.pablo.perez\OneDrive\Training\JavaScript\progressive-web-apps-spas>vue create pwa-vuejs

Vue CLI v3.0.3
? Please pick a preset: (Use arrow keys)
> default (babel, eslint)
  Manually select features
? Pick the package manager to use when installing dependencies: (Use arrow keys)
> Use Yarn
  Use NPM 
Vue CLI v3.0.3
✨  Creating project in C:\Users\juan.pablo.perez\OneDrive\Training\JavaScript\progressive-web-apps-spas\pwa-vuejs.
🗃  Initializing git repository...
⚙  Installing CLI plugins. This might take a while...

yarn install v1.9.2
info No lockfile found.
[1/4] Resolving packages...
[2/4] Fetching packages...
[-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------] 0/1046(node:72352) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
info fsevents@1.2.4: The platform "win32" is incompatible with this module.
info "fsevents@1.2.4" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------] 0/1049(node:32960) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
info fsevents@1.2.4: The platform "win32" is incompatible with this module.
info "fsevents@1.2.4" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[4/4] Building fresh packages...

success Saved lockfile.
Done in 71.11s.
⚓  Running completion hooks...

📄  Generating README.md...

🎉  Successfully created project pwa-vuejs.
👉  Get started with the following commands:

 $ cd pwa-vuejs
 $ yarn serve
```  
```sh
 Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/JavaScript/progressive-web-apps-spas/pwa-vuejs (master)
$ vue add @vue/pwa

📦  Installing @vue/cli-plugin-pwa...

yarn add v1.9.2
[1/4] Resolving packages...
[2/4] Fetching packages...
[-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------] 0/1084(node:37792) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
info fsevents@1.2.4: The platform "win32" is incompatible with this module.
info "fsevents@1.2.4" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------] 0/1135
[4/4] Building fresh packages...

success Saved lockfile.
success Saved 24 new dependencies.
info Direct dependencies
└─ @vue/cli-plugin-pwa@3.0.3
info All dependencies
├─ @vue/cli-plugin-pwa@3.0.3
├─ babel-extract-comments@1.0.0
├─ babel-plugin-syntax-object-rest-spread@6.13.0
├─ babel-plugin-transform-object-rest-spread@6.26.0
├─ common-tags@1.8.0
├─ get-own-enumerable-property-symbols@2.0.1
├─ is-regexp@1.0.0
├─ json-stable-stringify@1.0.1
├─ lodash.template@4.4.0
├─ lodash.templatesettings@4.1.0
├─ pretty-bytes@4.0.2
├─ stringify-object@3.2.2
├─ strip-comments@1.0.2
├─ workbox-broadcast-cache-update@3.6.1
├─ workbox-build@3.6.1
├─ workbox-cache-expiration@3.6.1
├─ workbox-cacheable-response@3.6.1
├─ workbox-google-analytics@3.6.1
├─ workbox-navigation-preload@3.6.1
├─ workbox-precaching@3.6.1
├─ workbox-range-requests@3.6.1
├─ workbox-streams@3.6.1
├─ workbox-sw@3.6.1
└─ workbox-webpack-plugin@3.6.1
Done in 70.79s.
✔  Successfully installed plugin: @vue/cli-plugin-pwa

🚀  Invoking generator for @vue/cli-plugin-pwa...
📦  Installing additional dependencies...

yarn install v1.9.2
[1/4] Resolving packages...
[2/4] Fetching packages...
[-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------] 0/1085(node:16056) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
info fsevents@1.2.4: The platform "win32" is incompatible with this module.
info "fsevents@1.2.4" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
Done in 69.36s.
✔  Successfully invoked generator for plugin: @vue/cli-plugin-pwa
   The following files have been updated / added:

     public/img/icons/android-chrome-192x192.png
     public/img/icons/android-chrome-512x512.png
     public/img/icons/apple-touch-icon-120x120.png
     public/img/icons/apple-touch-icon-152x152.png
     public/img/icons/apple-touch-icon-180x180.png
     public/img/icons/apple-touch-icon-60x60.png
     public/img/icons/apple-touch-icon-76x76.png
     public/img/icons/apple-touch-icon.png
     public/img/icons/favicon-16x16.png
     public/img/icons/favicon-32x32.png
     public/img/icons/msapplication-icon-144x144.png
     public/img/icons/mstile-150x150.png
     public/img/icons/safari-pinned-tab.svg
     public/manifest.json
     public/robots.txt
     src/registerServiceWorker.js
     package.json
     src/main.js
     yarn.lock

   You should review these changes with git diff and commit them.
```  
- New Attempt
```sh
C:\Users\juan.pablo.perez\OneDrive\Training\JavaScript\progressive-web-apps-spas>vue create vuejs
Vue CLI v3.0.3
? Please pick a preset:
  default (babel, eslint)
> Manually select features
? Check the features needed for your project:
>(*) Babel
 (*) TypeScript
 (*) Progressive Web App (PWA) Support
 (*) Router
 (*) Vuex
 (*) CSS Pre-processors
 (*) Linter / Formatter
 ( ) Unit Testing
 ( ) E2E Testing
? Use class-style component syntax? (Y/n) y
? Use Babel alongside TypeScript for auto-detected polyfills? (Y/n) y
? Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n) y
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): (Use arrow keys)
> Sass/SCSS
  Less
  Stylus
? Pick a linter / formatter config: (Use arrow keys)
> TSLint
  ESLint with error prevention only
  ESLint + Airbnb config
  ESLint + Standard config
  ESLint + Prettier
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)
>(*) Lint on save
 ( ) Lint and fix on commit
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? (Use arrow keys)
> In dedicated config files
  In package.json
? Save this as a preset for future projects? (y/N)


Vue CLI v3.0.3
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, TS, PWA, Router, Vuex, CSS Pre-processors, Linter
? Use class-style component syntax? Yes
? Use Babel alongside TypeScript for auto-detected polyfills? Yes
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS
? Pick a linter / formatter config: TSLint
? Pick additional lint features: Lint on save
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? No


Vue CLI v3.0.3
✨  Creating project in C:\Users\juan.pablo.perez\OneDrive\Training\JavaScript\progressive-web-apps-spas\pwa-vuejs.
🗃  Initializing git repository...
⚙  Installing CLI plugins. This might take a while...

yarn install v1.9.2
info No lockfile found.
[1/4] Resolving packages...
[2/4] Fetching packages...
[--------------------------------------------------------------------------------------------------------------] 0/1022(node:24772) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
info fsevents@1.2.4: The platform "win32" is incompatible with this module.
info "fsevents@1.2.4" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
Done in 48.00s.
🚀  Invoking generators...
📦  Installing additional dependencies...

yarn install v1.9.2
[1/4] Resolving packages...
[2/4] Fetching packages...
[--------------------------------------------------------------------------------------------------------------] 0/1094(node:18324) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
info fsevents@1.2.4: The platform "win32" is incompatible with this module.
info "fsevents@1.2.4" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
Done in 80.89s.
⚓  Running completion hooks...

📄  Generating README.md...

🎉  Successfully created project pwa-vuejs.
👉  Get started with the following commands:

 $ cd pwa-vuejs
 $ yarn serve
```  
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/JavaScript/progressive-web-apps-spas/pwa-vuejs (master)
$ npm run build

> pwa-vuejs@0.1.0 build C:\Users\juan.pablo.perez\OneDrive\Training\JavaScript\progressive-web-apps-spas\pwa-vuejs
> vue-cli-service build


\  Building for production...Starting type checking and linting service...
Using 1 worker with 2048MB memory limit
\  Building for production...

 DONE  Compiled successfully in 20282ms                                                                                                                                                    4:34:04 PM
  File                                      Size             Gzipped

  dist\js\chunk-vendors.be8571c9.js         117.67 kb        40.51 kb
  dist\js\app.62375e29.js                   7.25 kb          2.69 kb
  dist\service-worker.js                    0.94 kb          0.54 kb
  dist\precache-manifest.b79a17c751f1d8e    0.63 kb          0.30 kb
  0e83d467feae84b54.js
  dist\js\about.e8de88ed.js                 0.47 kb          0.33 kb
  dist\css\app.115d5e2b.css                 0.42 kb          0.26 kb

  Images and other types of assets omitted.

 DONE  Build complete. The dist directory is ready to be deployed.
 INFO  Check out deployment instructions at https://cli.vuejs.org/guide/deployment.html


   "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "start:prod": "vue-cli-service build && cd dist && http-server -c-1"
  },
  
```  
```sh
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Training/JavaScript/progressive-web-apps-spas/pwa-vuejs (master)$ npm run start:prod

> pwa-vuejs@0.1.0 start:prod C:\Users\juan.pablo.perez\OneDrive\Training\JavaScript\progressive-web-apps-spas\pwa-vuejs
> vue-cli-service build && cd dist && http-server -c-1


\  Building for production...Starting type checking and linting service...
Using 1 worker with 2048MB memory limit
|  Building for production...

 DONE  Compiled successfully in 7446ms                                                                                                                                                     4:52:06 PM
  File                                      Size             Gzipped

  dist\js\chunk-vendors.be8571c9.js         117.67 kb        40.51 kb
  dist\js\app.62375e29.js                   7.25 kb          2.69 kb
  dist\service-worker.js                    0.94 kb          0.54 kb
  dist\precache-manifest.95475d0094ec0a4    0.63 kb          0.30 kb
  7264d038360db1382.js
  dist\js\about.e8de88ed.js                 0.47 kb          0.33 kb
  dist\css\app.115d5e2b.css                 0.42 kb          0.26 kb

  Images and other types of assets omitted.

 DONE  Build complete. The dist directory is ready to be deployed.
 INFO  Check out deployment instructions at https://cli.vuejs.org/guide/deployment.html

Starting up http-server, serving ./
Available on:
  http://172.18.55.225:8080
  http://10.0.75.1:8080
  http://192.168.56.1:8080
  http://192.168.0.107:8080
  http://169.254.234.235:8080
  http://127.0.0.1:8080
  http://172.30.192.1:8080
Hit CTRL-C to stop the server
```  
### Angular with ngX-Rocket CLI 

```sh
C:\Users\juan.pablo.perez\AppData\Roaming\npm\ngx -> C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\generator-ngx-rocket\cli\bin\ngx
+ generator-ngx-rocket@5.1.0
added 420 packages from 284 contributors in 44.212s
```  
```sh
C:\Users\juan.pablo.perez\OneDrive\Training\JavaScript\progressive-web-apps-spas>ngx new pwa-angular-ngx
          __   __
 _ _  __ _\ \./ / ____ ____ ____ _  _ ____ ___
| ' \/ _` |>   <  |--< [__] |___ |-:_ |===  |
|_||_\__, /_/°\_\ ENTERPRISE APP STARTER -~*=>
     |___/ v5.1.0

? What kind of app do you want to create? (Press <space> to select, <a> to toggle all, <i> to invert selection)
>(*) Web app
 ( ) Mobile app (using Cordova)
? Do you want a progressive web app? (with manifest and service worker) (Y/n) y
? Which UI framework do you want?
  Bootstrap (more website-oriented)
> Angular Material (more website-oriented)
  Ionic (more mobile-oriented)
? Which kind of layout do you want? (Use arrow keys)
  Simple responsive header bar (more website-oriented)
> Side menu with split panels (more app-oriented)
? Do you want authentication? (Y/n) y
? Do you want lazy loading? (y/N) N
? Do you want analytics support (with Angulartics2)? (y/N) N
```  
```sh
C:\Users\juan.pablo.perez\OneDrive\Training\JavaScript\progressive-web-apps-spas>mkdir pwa-angular-ngx
```  
```sh
C:\Users\juan.pablo.perez\OneDrive\Training\JavaScript\progressive-web-apps-spas>cd pwa-angular-ngx
```  
```sh
C:\Users\juan.pablo.perez\OneDrive\Training\JavaScript\progressive-web-apps-spas\pwa-angular-ngx>ngx new pwa-angular-ngx
          __   __
 _ _  __ _\ \./ / ____ ____ ____ _  _ ____ ___
| ' \/ _` |>   <  |--< [__] |___ |-:_ |===  |
|_||_\__, /_/°\_\ ENTERPRISE APP STARTER -~*=>
     |___/ v5.1.0

? What kind of app do you want to create? Web app
? Do you want a progressive web app? (with manifest and service worker) Yes
? Which UI framework do you want? Angular Material (more website-oriented)
? Which kind of layout do you want? Side menu with split panels (more app-oriented)
? Do you want authentication? Yes
? Do you want lazy loading? No
? Do you want analytics support (with Angulartics2)? No
   create package.json
   create .htmlhintrc
   create .editorconfig
   create .stylelintrc
   create proxy.conf.js
   create tsconfig.json
   create tslint.json
   create .gitignore
   create angular.json
   create README.md
   create ngsw-config.json
   create docs\backend-proxy.md
   create docs\i18n.md
   create docs\routing.md
   create docs\analytics.md
   create docs\corporate-proxy.md
   create docs\readme.md
   create docs\updating.md
   create docs\coding-guides\angular.md
   create docs\coding-guides\e2e-tests.md
   create docs\coding-guides\html.md
   create docs\coding-guides\typescript.md
   create docs\coding-guides\sass.md
   create docs\coding-guides\unit-tests.md
   create e2e\protractor.conf.js
   create e2e\tsconfig.e2e.json
   create e2e\src\app.e2e-spec.ts
   create e2e\src\app.po.ts
   create src\polyfills.ts
   create src\test.ts
   create src\tsconfig.app.json
   create src\tsconfig.spec.json
   create src\browserslist
   create src\index.html
   create src\karma.conf.js
   create src\main.scss
   create src\main.ts
   create src\manifest.json
   create src\apple-touch-icon.png
   create src\favicon.ico
   create src\robots.txt
   create src\typings.d.ts
   create src\assets\ngx-rocket-logo.png
   create src\environments\environment.prod.ts
   create src\environments\environment.ts
   create src\translations\en-US.json
   create src\translations\fr-FR.json
   create src\theme\theme.scss
   create src\theme\theme-variables.scss
   create src\app\app-routing.module.ts
   create src\app\app.component.html
   create src\app\app.component.scss
   create src\app\app.component.spec.ts
   create src\app\app.component.ts
   create src\app\app.module.ts
   create src\app\material.module.ts
   create src\app\home\home-routing.module.ts
   create src\app\home\home.component.ts
   create src\app\home\quote.service.spec.ts
   create src\app\home\quote.service.ts
   create src\app\home\home.component.scss
   create src\app\home\home.component.spec.ts
   create src\app\home\home.module.ts
   create src\app\home\home.component.html
   create src\app\about\about.component.ts
   create src\app\about\about-routing.module.ts
   create src\app\about\about.component.scss
   create src\app\about\about.component.spec.ts
   create src\app\about\about.module.ts
   create src\app\about\about.component.html
   create src\app\login\login.component.html
   create src\app\login\login.component.scss
   create src\app\login\login-routing.module.ts
   create src\app\login\login.component.spec.ts
   create src\app\login\login.component.ts
   create src\app\login\login.module.ts
   create src\app\core\i18n.service.spec.ts
   create src\app\core\i18n.service.ts
   create src\app\core\logger.service.spec.ts
   create src\app\core\logger.service.ts
   create src\app\core\route-reusable-strategy.ts
   create src\app\core\core.module.ts
   create src\app\core\index.ts
   create src\app\core\authentication\authentication.guard.spec.ts
   create src\app\core\authentication\authentication.guard.ts
   create src\app\core\authentication\authentication.service.mock.ts
   create src\app\core\authentication\authentication.service.spec.ts
   create src\app\core\authentication\authentication.service.ts
   create src\app\core\http\api-prefix.interceptor.spec.ts
   create src\app\core\http\api-prefix.interceptor.ts
   create src\app\core\http\cache.interceptor.spec.ts
   create src\app\core\http\cache.interceptor.ts
   create src\app\core\http\error-handler.interceptor.spec.ts
   create src\app\core\http\error-handler.interceptor.ts
   create src\app\core\http\http-cache.service.spec.ts
   create src\app\core\http\http-cache.service.ts
   create src\app\core\http\http.service.spec.ts
   create src\app\core\http\http.service.ts
   create src\app\shared\index.ts
   create src\app\shared\shared.module.ts
   create src\app\shared\loader\loader.component.scss
   create src\app\shared\loader\loader.component.spec.ts
   create src\app\shared\loader\loader.component.ts
   create src\app\shared\loader\loader.component.html
   create src\app\shell\shell.module.spec.ts
   create src\app\shell\shell.component.scss
   create src\app\shell\shell.module.ts
   create src\app\shell\shell.service.spec.ts
   create src\app\shell\shell.component.spec.ts
   create src\app\shell\shell.service.ts
   create src\app\shell\shell.component.ts
   create src\app\shell\shell.component.html

Running npm install, please wait...

> node-sass@4.9.3 install C:\Users\juan.pablo.perez\OneDrive\Training\JavaScript\progressive-web-apps-spas\pwa-angular-ngx\node_modules\node-sass
> node scripts/install.js

Cached binary found at C:\Users\juan.pablo.perez\AppData\Roaming\npm-cache\node-sass\4.9.3\win32-x64-64_binding.node

> phantomjs-prebuilt@2.1.16 install C:\Users\juan.pablo.perez\OneDrive\Training\JavaScript\progressive-web-apps-spas\pwa-angular-ngx\node_modules\phantomjs-prebuilt
> node install.js

PhantomJS not found on PATH
Download already available at C:\Users\JUANPA~1.PER\AppData\Local\Temp\phantomjs\phantomjs-2.1.1-windows.zip
Verified checksum of previously downloaded file
Extracting zip contents
Removing C:\Users\juan.pablo.perez\OneDrive\Training\JavaScript\progressive-web-apps-spas\node_modules\phantomjs-prebuilt\lib\phantom
Copying extracted folder C:\Users\JUANPA~1.PER\AppData\Local\Temp\phantomjs\phantomjs-2.1.1-windows.zip-extract-1537677100847\phantomjs-2.1.1-windows -> C:\Users\juan.pablo.perez\OneDrive\Training\JavaScript\progressive-web-apps-spas\node_modules\phantomjs-prebuilt\lib\phantom
Writing location.js file
Done. Phantomjs binary available at C:\Users\juan.pablo.perez\OneDrive\Training\JavaScript\progressive-web-apps-spas\pwa-angular-ngx\node_modules\phantomjs-prebuilt\lib\phantom\bin\phantomjs.exe

> puppeteer@1.8.0 install C:\Users\juan.pablo.perez\OneDrive\Training\JavaScript\progressive-web-apps-spas\pwa-angular-ngx\node_modules\puppeteer
> node install.js

Downloading Chromium r588429 - 130.6 Mb [====================] 100% 0.0s
Chromium downloaded to C:\Users\juan.pablo.perez\OneDrive\Training\JavaScript\progressive-web-apps-spas\pwa-angular-ngx\node_modules\puppeteer\.local-chromium\win64-588429

> circular-json@0.5.7 postinstall C:\Users\juan.pablo.perez\OneDrive\Training\JavaScript\progressive-web-apps-spas\pwa-angular-ngx\node_modules\circular-json
> echo ''; echo "\x1B[1mCircularJSON\x1B[0m is in \x1B[4mmaintenance only\x1B[0m, \x1B[1mflatted\x1B[0m is its successor."; echo ''

''; echo "\x1B[1mCircularJSON\x1B[0m is in \x1B[4mmaintenance only\x1B[0m, \x1B[1mflatted\x1B[0m is its successor."; echo ''

> node-sass@4.9.3 postinstall C:\Users\juan.pablo.perez\OneDrive\Training\JavaScript\progressive-web-apps-spas\pwa-angular-ngx\node_modules\node-sass
> node scripts/build.js

Binary found at C:\Users\juan.pablo.perez\OneDrive\Training\JavaScript\progressive-web-apps-spas\pwa-angular-ngx\node_modules\node-sass\vendor\win32-x64-64\binding.node
Testing binary
Binary is fine
added 1550 packages from 1748 contributors and audited 42312 packages in 521.894s
found 0 vulnerabilities


All done! Get started with these tasks:
- $ npm start: start dev server with live reload on http://localhost:4200
- $ npm run build: build web app for production
- $ npm test: run unit tests in watch mode for TDD
- $ npm run test:ci: lint code and run units tests with coverage
- $ npm run e2e: launch e2e tests
- $ npm run docs: show docs and coding guides
```  

