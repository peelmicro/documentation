# Documentation Website for Training and Projects. It is created using VuePress.

The code is stored in [This GitHub Repository](https://github.com/peelmicro/documentation).

Within the code you can see how to:
- Create a static website for documentation using [VuePress](https://vuepress.vuejs.org/)
- Create a repository in [Github](https://github.com) to store the code.
- Deploy the website in [netlify](https://www.netlify.com/)
- Set up a custom domain.
- Set up [Algolia Search](https://www.algolia.com/)
- Set up [Google Analytics](https://analytics.google.com)

> Table of contents
[[toc]]

## Set up the project
1. Create the `folder` where the `project` is going to be developed
```bash
Microsoft Windows [Version 10.0.17134.285]
(c) 2018 Microsoft Corporation. All rights reserved.

C:\WINDOWS\system32>cd C:\Users\juan.pablo.perez\OneDrive\Projects

C:\Users\juan.pablo.perez\OneDrive\Projects>Mkdir Documentation

C:\Users\juan.pablo.perez\OneDrive\Projects>cd Documentation
```
2. Open `Visual Studio Code`
```bash
C:\Users\juan.pablo.perez\OneDrive\Projects\Documentation>code .
```

![](/images/projects/documentation/SetUpProject.png)

3. Install the `latest` version of `VuePress`
- Browse to [VuePress Website](https://vuepress.vuejs.org/guide/)

![](/images/projects/documentation/SetUpProject2.png)

- Execute the `yarn global add vuepress@next` command to install the latest version
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Projects/Documentation$ yarn global add vuepress@next
yarn global v1.9.2
[1/4] Resolving packages...
[2/4] Fetching packages...
[------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------] 0/1232(
node:48852) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
info fsevents@1.2.4: The platform "win32" is incompatible with this module.
info "fsevents@1.2.4" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[4/4] Building fresh packages...

warning Your current version of Yarn is out of date. The latest version is "1.12.3", while you're on "1.9.2".
info To upgrade, download the latest installer at "https://yarnpkg.com/latest.msi".
success Installed "vuepress@1.0.0-alpha.27" with binaries:
      - vuepress
Done in 190.12s.
```
4. Create the main `README.md` file.

![](/images/projects/documentation/SetUpProject3.png)

> `README.md`
```md
# Juan Pablo Perez - Documentation
```

5. Run the project locally using the `vuepress dev` command.
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Projects/Documentation
$ vuepress dev
wait Extracting site metadata...
tip Apply theme @vuepress/theme-default
tip Apply plugin @vuepress/register-components (i.e. "@vuepress/plugin-register-components") ...
tip Apply plugin @vuepress/active-header-links (i.e. "@vuepress/plugin-active-header-links") ...
tip Apply plugin @vuepress/search (i.e. "@vuepress/plugin-search") ...
success [05:41:34] Build dd92e7 finished in 13604 ms!
> VuePress dev server listening at http://localhost:8080/
```

6. Browse to http://localhost:8080/

![](/images/projects/documentation/SetUpProject4.png)

7. Create the the `.vuepress` folder and inside the `config.js` file.

![](/images/projects/documentation/SetUpProject5.png)

```js
module.exports = {
  title: `Juan Pablo Perez - Documentation`,
  description: `Documentation for Training and Projects`
}
```

![](/images/projects/documentation/SetUpProject6.png)

## Create the `menu`, `main page` and `sidebar`
1. Create the `public` static resource directory

![](/images/projects/documentation/DevelopMainParts.png)

2. Create the `images` subfolder and copy the main `image` there.

![](/images/projects/documentation/DevelopMainParts2.png)

3. Modify the main `README.md` document to include the `home` content.
> `README.md`
```md
---
home: true
heroImage: /images/Documentation.png
actionText: Documents →
actionLink: /Documents/
features:
- title: Projects
  details: Public projects developed by myself
- title: Front End 
  details: Vue.Js, React, Angular, JavaScript, CSS, ...
- title: Back End
  details: .Net Core, Java, Pyton, NodeJs, ...
- title: Static Webs
  details: Markdown, VuePress, ...
- title: Microservices
  details: Docker, Kubernetes, ...
- title: Other
  details: Blockchain

footer: Copyright © 2019-present Juan Pablo Perez
---
```

![](/images/projects/documentation/DevelopMainParts3.png)

4. Copy the `favicon.png` to the `image` folder.

![](/images/projects/documentation/DevelopMainParts4.png)

5. Modify the `config.js` to include the `menu` and the `favicon`.
> `config.js`
```js
module.exports = {
  title: `Documentation`,
  description: `For Training and Projects created by Juan Pablo Perez`,
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.png' }]
  ],  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/'},
      { text: 'Projects', link: '/projects/'},
      { text: 'Front End', link: '/frontend/'},
      { text: 'Back End', link: '/backend/'},
      { text: 'Static Webs', link: '/staticwebs/'},
      { text: 'Microservices', link: '/microservices/'},
      { text: 'Other', link: '/other/'},
      { text: 'About me', link: 'https://github.com/peelmicro'},
      { text: 'Github', link: 'https://github.com/peelmicro/documentation'},
    ],
    sidebar: 'auto'
  }  
}
```

![](/images/projects/documentation/DevelopMainParts5.png)

## Create the repository in `Github` and commit the current code
1. Browse to [Github](https://github.com)

![](/images/projects/documentation/CreateGitHubRepository.png)

2. Click on `Start a project`

Repository name: `documentation`
Description: `Documentation Website for Training and Projects created using VuePress`

![](/images/projects/documentation/CreateGitHubRepository2.png)

3. Click on `Create repository`

![](/images/projects/documentation/CreateGitHubRepository3.png)

4. Add the `.gitignore` file
> `.gitignore`
```
/node_modules
```

![](/images/projects/documentation/CreateGitHubRepository4.png)

5. Init `Git` with the `git init` command
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Projects/Documentation$ git init
Initialized empty Git repository in C:/Users/juan.pablo.perez/OneDrive/Projects/Documentation/.git/
```

6. `Link` the current project to the new `GitHub` repository
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Projects/Documentation (master)
$ git remote add origin https://github.com/peelmicro/documentation.git
```

7. `Commit` and `push` the current code.
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Projects/Documentation (master)
$ git add .
warning: LF will be replaced by CRLF in package-lock.json.
The file will have its original line endings in your working directory.
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Projects/Documentation (master)
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   .gitignore
        new file:   .vuepress/config.js
        new file:   .vuepress/public/images/Documentation.png
        new file:   .vuepress/public/images/favicon.png
        new file:   README.md
        new file:   favicon.ico
        new file:   package-lock.json
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Projects/Documentation (master)
$ git commit -m "first commit"
[master (root-commit) f039f7a] first commit
 7 files changed, 2001 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 .vuepress/config.js
 create mode 100644 .vuepress/public/images/Documentation.png
 create mode 100644 .vuepress/public/images/favicon.png
 create mode 100644 README.md
 create mode 100644 favicon.ico
 create mode 100644 package-lock.json
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Projects/Documentation (master)
$ git push origin HEAD
Counting objects: 12, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (10/10), done.
Writing objects: 100% (12/12), 86.63 KiB | 2.63 MiB/s, done.
Total 12 (delta 0), reused 0 (delta 0)
remote:
remote: Create a pull request for 'master' on GitHub by visiting:
remote:      https://github.com/peelmicro/documentation/pull/new/master
remote:
To https://github.com/peelmicro/documentation.git
 * [new branch]      HEAD -> master
```
8. Ensure the code has been `pushed` correctly

![](/images/projects/documentation/CreateGitHubRepository5.png)

## Deploy the solution in `netlify`

1. Browse to [netlify](https://www.netlify.com/)

![](/images/projects/documentation/DeployInNetlify.png)

2. Click on `Get started for free`

![](/images/projects/documentation/DeployInNetlify2.png)

3. Click on `GitHub`

![](/images/projects/documentation/DeployInNetlify3.png)

4. Click on `New site from Git`

![](/images/projects/documentation/DeployInNetlify4.png)

5. Click on `GitHub`

![](/images/projects/documentation/DeployInNetlify5.png)

6. Authorise access clicking on `Authorize Netlify by Netlify`

![](/images/projects/documentation/DeployInNetlify6.png)

7. Click on `(*)Only select repositories` and then `Select repositories`

![](/images/projects/documentation/DeployInNetlify7.png)

8. Click on the `documentation` repository

![](/images/projects/documentation/DeployInNetlify8.png)

9. Click on `Install`

![](/images/projects/documentation/DeployInNetlify9.png)

10. Put the `GitHub` password and then click on `Confirm password`

![](/images/projects/documentation/DeployInNetlify10.png)

11. Select the `documentation` repository

12. Put the following values:
- Branch to deploy: `master`
Basic build settings
- Build command: `yarn docs:build`
- Publish directory: `docs/.vuepress/dist`

![](/images/projects/documentation/DeployInNetlify11.png)

13. Click on `Deploy site`

![](/images/projects/documentation/DeployInNetlify12.png)

14. Click on `Site deploy failed`

![](/images/projects/documentation/DeployInNetlify13.png)

15. Click on `FAILED`

![](/images/projects/documentation/DeployInNetlify14.png)

```bash
4:25:38 PM: Build ready to start
4:25:40 PM: build-image version: 12783d4d177a66bec5a23ad1097ea7bd02931128
4:25:40 PM: buildbot version: 5a64b5cb0ce1ed3ba485935522483a4d39e15107
4:25:40 PM: Fetching cached dependencies
4:25:40 PM: Failed to fetch cache, continuing with build
4:25:40 PM: Starting to prepare the repo for build
4:25:41 PM: No cached dependencies found. Cloning fresh repo
4:25:41 PM: git clone https://github.com/peelmicro/documentation
4:25:41 PM: Preparing Git Reference refs/heads/master
4:25:42 PM: Starting build script
4:25:42 PM: Installing dependencies
4:25:43 PM: Downloading and installing node v8.14.0...
4:25:43 PM: Downloading https://nodejs.org/dist/v8.14.0/node-v8.14.0-linux-x64.tar.xz...
4:25:43 PM:   0.0%
4:25:43 PM: #
4:25:43 PM: ####                                                                      7.1%
4:25:43 PM: 
#################################################################
4:25:43 PM: 90.4%
######################################################################## 100.0%
4:25:43 PM: Computing checksum with sha256sum
4:25:44 PM: Checksums matched!
4:25:46 PM: Now using node v8.14.0 (npm v6.4.1)
4:25:46 PM: Attempting ruby version 2.3.6, read from environment
4:25:47 PM: Using ruby version 2.3.6
4:25:47 PM: Using PHP version 5.6
4:25:47 PM: Started restoring cached go cache
4:25:48 PM: Finished restoring cached go cache
4:25:48 PM: unset GOOS;
4:25:48 PM: unset GOARCH;
4:25:48 PM: export GOROOT='/opt/buildhome/.gimme/versions/go1.10.linux.amd64';
4:25:48 PM: export PATH="/opt/buildhome/.gimme/versions/go1.10.linux.amd64/bin:${PATH}";
4:25:48 PM: go version >&2;
4:25:48 PM: export GIMME_ENV='/opt/buildhome/.gimme/env/go1.10.linux.amd64.env';
4:25:48 PM: go version go1.10 linux/amd64
4:25:48 PM: Installing missing commands
4:25:48 PM: Verify run directory
4:25:48 PM: Executing user command: yarn docs:build
4:25:48 PM: /usr/local/bin/build: line 32: yarn: command not found
4:25:48 PM: Caching artifacts
4:25:48 PM: Started saving pip cache
4:25:48 PM: Finished saving pip cache
4:25:48 PM: Started saving emacs cask dependencies
4:25:48 PM: Finished saving emacs cask dependencies
4:25:48 PM: Started saving maven dependencies
4:25:48 PM: Finished saving maven dependencies
4:25:48 PM: Started saving boot dependencies
4:25:48 PM: Finished saving boot dependencies
4:25:48 PM: Started saving go dependencies
4:25:48 PM: Finished saving go dependencies
4:25:48 PM: Cached node version v8.14.0
4:25:48 PM: Error running command: Build script returned non-zero exit code: 127
4:25:48 PM: Failing build: Failed to build site
4:25:48 PM: failed during stage 'building site': Build script returned non-zero exit code: 127
4:25:48 PM: Finished processing build request in 8.387730586s
```

16. The problem is that `VuePress` has been installed globally instead of locally. It has to be installed locally.
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Projects/Documentation (master)
$ yarn add vuepress@next
yarn add v1.12.3
info No lockfile found.
[1/4] Resolving packages...
warning vuepress > @vuepress/core > css-loader > cssnano > autoprefixer > browserslist@1.7.7: Browserslist 2 could fail on reading Browserslist >3.0 config used in other tools.
warning vuepress > @vuepress/core > css-loader > cssnano > postcss-merge-rules > browserslist@1.7.7: Browserslist 2 could fail on reading Browserslist >3.0 config used in other tools.
warning vuepress > @vuepress/core > css-loader > cssnano > postcss-merge-rules > caniuse-api > browserslist@1.7.7: Browserslist 2 could fail on reading Browserslist >3.0 config used in other tools.
[2/4] Fetching packages...
info fsevents@1.2.4: The platform "win32" is incompatible with this module.
info "fsevents@1.2.4" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[4/4] Building fresh packages...

success Saved lockfile.
success Saved 664 new dependencies.
info Direct dependencies
└─ vuepress@1.0.0-alpha.27
info All dependencies
├─ xtend@4.0.1
├─ yargs-parser@10.1.0
├─ ylru@1.2.1
└─ zepto@1.2.0
Done in 425.17s.
```

17. Modify the `package.json` created to add the `script` section:
> `package.json`
```bash
{
  "scripts": {
    "docs:build": "vuepress build"
  },  
  "dependencies": {
    "vuepress": "^1.0.0-alpha.27"
  }
}
```

18. Test if the `build` command is executed correctly checking if the `dist` is created as expected
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Projects/Documentation (master)
$ yarn docs:build
yarn run v1.12.3
warning package.json: No license field
$ vuepress build
wait Extracting site metadata...
tip Apply theme @vuepress/theme-default
tip Apply plugin @vuepress/register-components (i.e. "@vuepress/plugin-register-components") ...
tip Apply plugin @vuepress/active-header-links (i.e. "@vuepress/plugin-active-header-links") ...
tip Apply plugin @vuepress/search (i.e. "@vuepress/plugin-search") ...
[4:57:37 PM] Compiling Client
[4:57:37 PM] Compiling Server
[4:58:16 PM] Compiled Server in 39s
[4:58:33 PM] Compiled Client in 56s
wait Rendering static HTML...
success Generated static files in .vuepress/dist.

Done in 79.58s.
```

![](/images/projects/documentation/DeployInNetlify15.png)

19. Include the `dist` folder to the `.gitignore` file.
> `.gitignore`
```
/node_modules
/.vuepress/dist
```

20. `Commit` and `push` the changes
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Projects/Documentation (master)
$ git add .
warning: LF will be replaced by CRLF in .gitignore.
The file will have its original line endings in your working directory.
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Projects/Documentation (master)
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   .gitignore
        deleted:    package-lock.json
        new file:   package.json
        new file:   yarn.lock
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Projects/Documentation (master)
$ git commit -m "Installed VuePress locally"
[master 00a61f9] Installed VuePress locally
 4 files changed, 7235 insertions(+), 1959 deletions(-)
 delete mode 100644 package-lock.json
 create mode 100644 package.json
 create mode 100644 yarn.lock
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Projects/Documentation (master)
$ git push origin HEAD
Counting objects: 5, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (5/5), 109.64 KiB | 3.43 MiB/s, done.
Total 5 (delta 0), reused 0 (delta 0)
To https://github.com/peelmicro/documentation.git
   f039f7a..00a61f9  HEAD -> master
```

21. Check if the `site` is deploying on `netlify`

![](/images/projects/documentation/DeployInNetlify16.png)

![](/images/projects/documentation/DeployInNetlify17.png)

```bash
5:06:24 PM: Build ready to start
5:06:26 PM: build-image version: 12783d4d177a66bec5a23ad1097ea7bd02931128
5:06:26 PM: buildbot version: 5a64b5cb0ce1ed3ba485935522483a4d39e15107
5:06:26 PM: Fetching cached dependencies
5:06:26 PM: Failed to fetch cache, continuing with build
5:06:26 PM: Starting to prepare the repo for build
5:06:26 PM: No cached dependencies found. Cloning fresh repo
5:06:26 PM: git clone https://github.com/peelmicro/documentation
5:06:27 PM: Preparing Git Reference refs/heads/master
5:06:27 PM: Starting build script
5:06:27 PM: Installing dependencies
5:06:28 PM: Downloading and installing node v8.14.0...
5:06:28 PM: Downloading https://nodejs.org/dist/v8.14.0/node-v8.14.0-linux-x64.tar.xz...
5:06:28 PM: 
#                                                                          1.8%
5:06:29 PM: #
5:06:29 PM: #############################                                            42.8%
5:06:29 PM: 
########################################################################
5:06:29 PM: 100.0%
5:06:29 PM: Computing checksum with sha256sum
5:06:29 PM: Checksums matched!
5:06:31 PM: Now using node v8.14.0 (npm v6.4.1)
5:06:32 PM: Attempting ruby version 2.3.6, read from environment
5:06:32 PM: Using ruby version 2.3.6
5:06:32 PM: Using PHP version 5.6
5:06:32 PM: Started restoring cached node modules
5:06:32 PM: Finished restoring cached node modules
5:06:32 PM: Started restoring cached yarn cache
5:06:32 PM: Finished restoring cached yarn cache
5:06:32 PM: Installing yarn at version 1.3.2
5:06:32 PM: Installing Yarn!
5:06:32 PM: > Downloading tarball...
5:06:32 PM: [1/2]: https://yarnpkg.com/downloads/1.3.2/yarn-v1.3.2.tar.gz --> /tmp/yarn.tar.gz.Gb4IDzXMrB
5:06:32 PM:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
5:06:32 PM:                                  Dload  Upload   Total   Spent    Left  Speed
5:06:32 PM: 
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
5:06:32 PM: 
100    91  100    91    0     0    764      0 --:--:-- --:--:-- --:--:--   771
5:06:32 PM: 
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
5:06:32 PM: 
  0     0    0   608    0     0   1957      0 --:--:-- --:--:-- --:--:--  593k
5:06:33 PM: 
100  865k  100  865k    0     0   961k      0 --:--:-- --:--:-- --:--:--  961k
5:06:33 PM: [2/2]: https://yarnpkg.com/downloads/1.3.2/yarn-v1.3.2.tar.gz.asc --> /tmp/yarn.tar.gz.Gb4IDzXMrB.asc
5:06:33 PM: 
100    95  100    95    0     0   2019      0 --:--:-- --:--:
5:06:33 PM: -- --:--:--  2019
5:06:33 PM: 
  0     0    0   612    0     0   4031      0 --:--:-- --:--:-- --:--:--  4031
5:06:33 PM: 
100  1027  100  1027    0     0   5340      0 --:--:-- --:--:-- --:--:--  5340
5:06:33 PM: > Verifying integrity...
5:06:33 PM: gpg: Signature made Thu 02 Nov 2017 04:44:10 PM UTC using RSA key ID FD2497F5
5:06:33 PM: gpg: Good signature from "Yarn Packaging <yarn@dan.cx>"
5:06:33 PM: gpg: WARNING: This key is not certified with a trusted signature!
5:06:33 PM: gpg:          There is no indication that the signature belongs to the owner.
5:06:33 PM: Primary key fingerprint: 72EC F46A 56B4 AD39 C907  BBB7 1646 B01B 86E5 0310
5:06:33 PM:      Subkey fingerprint: 6A01 0C51 6600 6599 AA17  F081 46C2 130D FD24 97F5
5:06:33 PM: > GPG signature looks good
5:06:33 PM: > Extracting to ~/.yarn...
5:06:33 PM: > Adding to $PATH...
5:06:33 PM: > We've added the following to your /opt/buildhome/.profile
5:06:33 PM: > If this isn't the profile of your current shell then please add the following to your correct profile:
5:06:33 PM: export PATH="$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH"
5:06:33 PM: 
5:06:34 PM: > Successfully installed Yarn 1.3.2! Please open another terminal where the `yarn` command will now be available.
5:06:34 PM: Installing NPM modules using Yarn version 1.3.2
5:06:35 PM: yarn install v1.3.2
5:06:35 PM: warning package.json: No license field
5:06:35 PM: warning No license field
5:06:35 PM: [1/4] Resolving packages...
5:06:35 PM: [2/4] Fetching packages...
5:06:45 PM: info There appears to be trouble with your network connection. Retrying...
5:06:48 PM: info fsevents@1.2.4: The platform "linux" is incompatible with this module.
5:06:48 PM: info "fsevents@1.2.4" is an optional dependency and failed compatibility check. Excluding it from installation.
5:06:48 PM: [3/4] Linking dependencies...
5:06:48 PM: warning "vuepress > @vuepress/core > mini-css-extract-plugin > schema-utils > ajv-errors@1.0.0" has unmet peer dependency "ajv@>=5.0.0".
5:06:52 PM: [4/4] Building fresh packages...
5:06:52 PM: Done in 17.63s.
5:06:52 PM: NPM modules installed using Yarn
5:06:53 PM: warning package.json: No license field
5:06:53 PM: Started restoring cached go cache
5:06:53 PM: Finished restoring cached go cache
5:06:53 PM: unset GOOS;
5:06:53 PM: unset GOARCH;
5:06:53 PM: export GOROOT='/opt/buildhome/.gimme/versions/go1.10.linux.amd64';
5:06:53 PM: export PATH="/opt/buildhome/.gimme/versions/go1.10.linux.amd64/bin:${PATH}";
5:06:53 PM: go version >&2;
5:06:53 PM: export GIMME_ENV='/opt/buildhome/.gimme/env/go1.10.linux.amd64.env';
5:06:53 PM: go version go1.10 linux/amd64
5:06:53 PM: Installing missing commands
5:06:53 PM: Verify run directory
5:06:53 PM: Executing user command: yarn docs:build
5:06:53 PM: yarn run v1.3.2
5:06:53 PM: warning package.json: No license field
5:06:53 PM: $ vuepress build
5:06:54 PM: wait Extracting site metadata...
5:06:54 PM: tip Apply theme @vuepress/theme-default
5:06:54 PM: tip Apply plugin @vuepress/register-components (i.e. "@vuepress/plugin-register-components") ...
5:06:54 PM: tip Apply plugin @vuepress/active-header-links (i.e. "@vuepress/plugin-active-header-links") ...
5:06:54 PM: tip Apply plugin @vuepress/search (i.e. "@vuepress/plugin-search") ...
5:06:55 PM: [17:06:55] Compiling Client
5:06:55 PM: [17:06:55] Compiling Server
5:07:02 PM: [17:07:02] Compiled Server in 7s
5:07:07 PM: [17:07:07] Compiled Client in 12s
5:07:07 PM: wait Rendering static HTML...
5:07:07 PM: Rendering page: /
5:07:07 PM: 
5:07:07 PM: Rendering page: /404.htmlsuccess Generated static files in .vuepress/dist.
5:07:07 PM: Done in 14.46s.
5:07:07 PM: Caching artifacts
5:07:08 PM: Started saving node modules
5:07:08 PM: Finished saving node modules
5:07:08 PM: Started saving yarn cache
5:07:08 PM: Finished saving yarn cache
5:07:08 PM: Started saving pip cache
5:07:08 PM: Finished saving pip cache
5:07:08 PM: Started saving emacs cask dependencies
5:07:08 PM: Finished saving emacs cask dependencies
5:07:08 PM: Started saving maven dependencies
5:07:08 PM: Finished saving maven dependencies
5:07:08 PM: Started saving boot dependencies
5:07:08 PM: Finished saving boot dependencies
5:07:08 PM: Started saving go dependencies
5:07:08 PM: Finished saving go dependencies
5:07:08 PM: Cached node version v8.14.0
5:07:08 PM: Build script success
5:07:08 PM: Failing build: Failed to build site
5:07:08 PM: failed during stage 'building site': Deploy directory 'docs/.vuepress/dist' does not exist
5:07:08 PM: Finished processing build request in 42.573083828s
```

22. The problem is that `VuePress` project is on the `main` folder, not on the `docs` folder. This has to be changed in `netlify`.

![](/images/projects/documentation/DeployInNetlify18.png)

23. Click on `Deploy settings`

![](/images/projects/documentation/DeployInNetlify19.png)

24. Click on `Edit settings` and update `Publish directory`

![](/images/projects/documentation/DeployInNetlify20.png)

25. Click on `Save`

![](/images/projects/documentation/DeployInNetlify21.png)

26. Click on `Trigger deploy -> Deploy site`
```bash
5:36:04 PM: Build ready to start
5:36:05 PM: build-image version: 12783d4d177a66bec5a23ad1097ea7bd02931128
5:36:05 PM: buildbot version: 5a64b5cb0ce1ed3ba485935522483a4d39e15107
5:36:05 PM: Fetching cached dependencies
5:36:06 PM: Failed to fetch cache, continuing with build
5:36:06 PM: Starting to prepare the repo for build
5:36:06 PM: No cached dependencies found. Cloning fresh repo
5:36:06 PM: git clone https://github.com/peelmicro/documentation
5:36:06 PM: Preparing Git Reference refs/heads/master
5:36:07 PM: Starting build script
5:36:07 PM: Installing dependencies
5:36:08 PM: Downloading and installing node v8.14.0...
5:36:08 PM: Downloading https://nodejs.org/dist/v8.14.0/node-v8.14.0-linux-x64.tar.xz...
5:36:08 PM: 
#
5:36:08 PM:                                          1.6%
5:36:08 PM: 
#######################
5:36:08 PM: #####                                              40.1%
5:36:08 PM: 
#####################
5:36:08 PM: ################################################### 100.0%
5:36:08 PM: Computing checksum with sha256sum
5:36:08 PM: Checksums matched!
5:36:10 PM: Now using node v8.14.0 (npm v6.4.1)
5:36:11 PM: Attempting ruby version 2.3.6, read from environment
5:36:12 PM: Using ruby version 2.3.6
5:36:12 PM: Using PHP version 5.6
5:36:12 PM: Started restoring cached node modules
5:36:12 PM: Finished restoring cached node modules
5:36:12 PM: Started restoring cached yarn cache
5:36:12 PM: Finished restoring cached yarn cache
5:36:12 PM: Installing yarn at version 1.3.2
5:36:12 PM: Installing Yarn!
5:36:12 PM: > Downloading tarball...
5:36:12 PM: [1/2]: https://yarnpkg.com/downloads/1.3.2/yarn-v1.3.2.tar.gz --> /tmp/yarn.tar.gz.JHZmql4QuE
5:36:12 PM:   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
5:36:12 PM:                                  Dload  Upload   Total   Spent    Left  Speed
5:36:12 PM: 
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
5:36:12 PM: 
100    91  100
5:36:12 PM:     91    0     0    487      0 --:--:-- --:--:-- --:--:--   489
5:36:12 PM: 
  0     0    0   608
5:36:12 PM:     0     0   1682      0 --:--:-- --:--:-- --:--:--  1682
5:36:13 PM: 
100  865k  100  865k    0
5:36:13 PM: 0  1168k      0 --:--:-- --:--:-- --:--:-- 1168k
5:36:13 PM: [2/2]: https://yarnpkg.com/downloads/1.3.2/yarn-v1.3.2.tar.gz.asc --> /tmp/yarn.tar.gz.JHZmql4QuE.asc
5:36:13 PM: 
100    95  100    95    0     0   2491      0 --:--:-- --:--:-- --:--:--  2491
100    95  100    95    0     0   2477      0 --:--:-- --:--:-- --:--:--     0
5:36:13 PM: 0
5:36:13 PM:      0    0   612    0     0   5030      0 --:--:-- --:--:-- --:--:--  5030
5:36:13 PM: 
100
5:36:13 PM:  1027  100  1027    0     0   5327      0 --:--:-- --:--:-- --:--:--  5327
5:36:13 PM: > Verifying integrity...
5:36:13 PM: gpg: Signature made Thu 02 Nov 2017 04:44:10 PM UTC using RSA key ID FD2497F5
5:36:13 PM: gpg: Good signature from "Yarn Packaging <yarn@dan.cx>"
5:36:13 PM: gpg: WARNING: This key is not certified with a trusted signature!
5:36:13 PM: gpg:          There is no indication that the signature belongs to the owner.
5:36:13 PM: Primary key fingerprint: 72EC F46A 56B4 AD39 C907  BBB7 1646 B01B 86E5 0310
5:36:13 PM:      Subkey fingerprint: 6A01 0C51 6600 6599 AA17  F081 46C2 130D FD24 97F5
5:36:13 PM: > GPG signature looks good
5:36:13 PM: > Extracting to ~/.yarn...
5:36:13 PM: > Adding to $PATH...
5:36:13 PM: > We've added the following to your /opt/buildhome/.profile
5:36:13 PM: > If this isn't the profile of your current shell then please add the following to your correct profile:
5:36:13 PM: export PATH="$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH"
5:36:13 PM: 
5:36:13 PM: > Successfully installed Yarn 1.3.2! Please open another terminal where the `yarn` command will now be available.
5:36:14 PM: Installing NPM modules using Yarn version 1.3.2
5:36:14 PM: yarn install v1.3.2
5:36:14 PM: warning package.json: No license field
5:36:14 PM: warning No license field
5:36:14 PM: [1/4] Resolving packages...
5:36:15 PM: [2/4] Fetching packages...
5:36:24 PM: info fsevents@1.2.4: The platform "linux" is incompatible with this module.
5:36:24 PM: info "fsevents@1.2.4" is an optional dependency and failed compatibility check. Excluding it from installation.
5:36:24 PM: [3/4] Linking dependencies...
5:36:24 PM: warning "vuepress > @vuepress/core > mini-css-extract-plugin > schema-utils > ajv-errors@1.0.0" has unmet peer dependency "ajv@>=5.0.0".
5:36:28 PM: [4/4] Building fresh packages...
5:36:28 PM: Done in 13.73s.
5:36:28 PM: NPM modules installed using Yarn
5:36:28 PM: warning package.json: No license field
5:36:28 PM: Started restoring cached go cache
5:36:28 PM: Finished restoring cached go cache
5:36:28 PM: unset GOOS;
5:36:28 PM: unset GOARCH;
5:36:28 PM: export GOROOT='/opt/buildhome/.gimme/versions/go1.10.linux.amd64';
5:36:28 PM: export PATH="/opt/buildhome/.gimme/versions/go1.10.linux.amd64/bin:${PATH}";
5:36:28 PM: go version >&2;
5:36:28 PM: export GIMME_ENV='/opt/buildhome/.gimme/env/go1.10.linux.amd64.env';
5:36:28 PM: go version go1.10 linux/amd64
5:36:28 PM: Installing missing commands
5:36:28 PM: Verify run directory
5:36:28 PM: Executing user command: yarn docs:build
5:36:29 PM: yarn run v1.3.2
5:36:29 PM: warning package.json: No license field
5:36:29 PM: $ vuepress build
5:36:30 PM: wait Extracting site metadata...
5:36:30 PM: tip Apply theme @vuepress/theme-default
5:36:30 PM: tip Apply plugin @vuepress/register-components (i.e. "@vuepress/plugin-register-components") ...
5:36:30 PM: tip Apply plugin @vuepress/active-header-links (i.e. "@vuepress/plugin-active-header-links") ...
5:36:30 PM: tip Apply plugin @vuepress/search (i.e. "@vuepress/plugin-search") ...
5:36:31 PM: [17:36:31] Compiling Client
5:36:31 PM: [17:36:31] Compiling Server
5:36:38 PM: [17:36:38] Compiled Server in 7s
5:36:42 PM: [17:36:42] Compiled Client in 11s
5:36:42 PM: wait Rendering static HTML...
5:36:42 PM: Rendering page: /
5:36:42 PM: 
5:36:42 PM: Rendering page: /404.htmlsuccess Generated static files in .vuepress/dist.
5:36:42 PM: Done in 13.74s.
5:36:43 PM: Caching artifacts
5:36:43 PM: Started saving node modules
5:36:43 PM: Finished saving node modules
5:36:43 PM: Started saving yarn cache
5:36:43 PM: Finished saving yarn cache
5:36:43 PM: Started saving pip cache
5:36:43 PM: Finished saving pip cache
5:36:43 PM: Started saving emacs cask dependencies
5:36:43 PM: Finished saving emacs cask dependencies
5:36:43 PM: Started saving maven dependencies
5:36:43 PM: Finished saving maven dependencies
5:36:43 PM: Started saving boot dependencies
5:36:43 PM: Finished saving boot dependencies
5:36:43 PM: Started saving go dependencies
5:36:43 PM: Finished saving go dependencies
5:36:43 PM: Cached node version v8.14.0
5:36:43 PM: Build script success
5:36:43 PM: Starting to deploy site from '.vuepress/dist'
5:36:44 PM: Starting post processing
5:36:45 PM: Post processing done
5:36:45 PM: Site is live
5:36:52 PM: Finished processing build request in 46.861635689s
```

![](/images/projects/documentation/DeployInNetlify22.png)

27. Click on `Preview Deploy`

![](/images/projects/documentation/DeployInNetlify23.png)

## Set up a `custom domain`
1. Identify the `netlify` subdomain of the solution

> `flamboyant-haibt-a3e337.netlify.com`

2. Add the new `document` subdomain to `peelmicro.info`
- Browse to [Google Domains](https://domains.google.com) and select the `peelmicro.info` domain.

![](/images/projects/documentation/SetupACustomDomain.png
)
3. Click on `DNS` icon and scroll down until `Custom resource records` section.

![](/images/projects/documentation/SetupACustomDomain2.png)

4. Add the following `two` entries 
1) Name: `documentation`

Type: `CNAME`

TTL: `1h` 

DATA: `flamboyant-haibt-a3e337.netlify.com`

2) Name: `www.documentation`

Type: `CNAME`

TTL: `1h`

DATA: `documentation.peelmicro.info`

![](/images/projects/documentation/SetupACustomDomain3.png)

5. Browse to `https://documentation.peelmicro.info/`

![](/images/projects/documentation/SetupACustomDomain4.png)

6. Browse to [netlify](https://app.netlify.com/sites/flamboyant-haibt-a3e337/overview) to link the new `subdomain`

![](/images/projects/documentation/SetupACustomDomain5.png)

7. Click on `Set up a custom domain ->`

![](/images/projects/documentation/SetupACustomDomain6.png)

8. Put the new `documentation.peelmicro.info` subdomain and click on `Verify`

![](/images/projects/documentation/SetupACustomDomain7.png)

9. Click on `Yes, add domain`

![](/images/projects/documentation/SetupACustomDomain8.png)

10. Browse to https://app.netlify.com/sites/flamboyant-haibt-a3e337/overview

![](/images/projects/documentation/SetupACustomDomain9.png)

11. Click on `Secure your site with HTTPS ->`

![](/images/projects/documentation/SetupACustomDomain10.png)

- It will provision the `Let's Encrypt` certificate once the DNS configuration for the  `subdomain` is pointing to the `netlify` servers and the changes have propagated.

![](/images/projects/documentation/SetupACustomDomain11.png)

12. Ensure that we can browse the `website` without errors

![](/images/projects/documentation/SetupACustomDomain12.png)

## Set up `Algolia Search`
As it's explain in the [Algolia Search](https://vuepress.vuejs.org/theme/default-theme-config.html#algolia-search) section from the VuePress `Default Theme Config`, we need tho set up the search on the whole website using `Algolia Search`
1. Browse to [Algolia Search](https://community.algolia.com/docsearch/)

![](/images/projects/documentation/AlgoliaSearchSetUp.png)

- Click on `Join the program`
2. Fill in the required information
DOCUMENTATION URL: `https://documentation.peelmicro.info/`
EMAIL: `juanp_perez@msn.com`
`[X]`I'm the owner of the website and I read the checklist before applying.

![](/images/projects/documentation/AlgoliaSearchSetUp2.png)

3. Click on `APPLY TO DOCSEARCH`

![](/images/projects/documentation/AlgoliaSearchSetUp3.png)

4. Wait until `Algolia` sends an email with the confirmation.
```html
From: DocSearch Support
Sent: Tuesday 11 December 2018 13:08
To: Juan Pablo Perez
Subject: Re: Help me improve my documentation search :)

Hi Juan, 

Congratulations, your search is now ready! 
I've successfully configured the underlying crawler and it will now run every 24h. 

You're now a few steps away from having it working on your website: 

- Copy the following CSS/JS snippets and add them to your page 

<!-- at the end of the HEAD --> 
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css" /> 

<!-- at the end of the BODY --> 
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"></script> 
<script type="text/javascript"> docsearch({ 
apiKey: '9d9b53b6e2f953299ac9ab6d8b6428d1', 
indexName: 'peelmicro', 
inputSelector: '### REPLACE ME ####', 
debug: false // Set debug to true if you want to inspect the dropdown 
}); 
</script> 

- Add a search input in your page if you don't have any yet. Then update the inputSelector value in JS snippet to a CSS selector that targets your search input field. 
- Optionally customize the look and feel by following the DocSearch documentation (https://community.algolia.com/docsearch/styling.html) 
- You can also check your configuration in our github repo (https://github.com/algolia/docsearch-configs/blob/master/configs/peelmicro.json). 
- juanp_perez@msn.com can get access to the full Algolia analytics for your DocSearch index by creating an account, following this link: https://www.algolia.com/users/invitation/accept?invitation_token=u9j5kzkL11DC3M_bPR_d


Please open a pull request if want to leverage your configuration! 

Feel free to get back to us if you have any issues or questions regarding the integration. 

We'd also be happy to get your feedback and thoughts about DocSearch - so we can continue to improve it. 

Have a nice day :


How would you rate my reply?
Great    Okay    Not Good

 
Sylvain Pace
Software Engineer 
 |  www.algolia.com |  @algolia
 
{#HS:727793287-111366#}  
On Mon, Dec 10, 2018 at 9:10:45 CET, Juan Pablo Perez <juanp_perez@msn.com> wrote: 
Hi Sylvain,



Thank you for contacting me.



Yes, I'm the maintainer of the website and I can inject the JavaScript snippet.



Regards,



Juan


On Mon, Dec 10, 2018 at 9:00:14 CET, DocSearch Support <documentationsearch@algolia.com> wrote: 
Hi Juan Pablo,

This is great news to know that you want to integrate DocSearch in your website. A good search experience is key to help your users discover your content.

We would love to help your project but we'll need to inject a small JavaScript snippet in the page: are you able to do that? Are you a maintainer of the website?

Let us know!

 
Sylvain Pace
Software Engineer 
 |  www.algolia.com |  @algolia
 

On Sun, Dec 9, 2018 at 19:51:51 CET, Juan Pablo Perez <juanp_perez@msn.com> wrote: 
https://documentation.peelmicro.info/
```

5. Modify the `config.js` to include the values sent by `Algolia`
> `config.js`
```json
module.exports = {
  title: `Documentation`,
  description: `For Training and Projects`,
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.png' }]
  ],  
  themeConfig: {
    algolia: {
      apiKey: '9d9b53b6e2f953299ac9ab6d8b6428d1',
      indexName: 'peelmicro'
    },    
    nav: [
      { text: 'Home', link: '/'},
      { text: 'Projects', link: '/projects/'},
      { text: 'Front End', link: '/frontend/'},
      { text: 'Back End', link: '/backend/'},
      { text: 'Static Webs', link: '/staticwebs/'},
      { text: 'Microservices', link: '/microservices/'},
      { text: 'Other', link: '/other/'},
      { text: 'About me', link: 'https://github.com/peelmicro'},
      { text: 'Github', link: 'https://github.com/peelmicro/documentation'},
    ],
    sidebar: {
      '/projects/': [
        '',
        'documentation.md',
        'dotnet-core-multi-docker.md',
        'java-multi-docker.md',
        'python-multi-docker.md',
        'dotnet-core-react-redux-advanced.md',
        'purchase-slack-command-dotnet.md',
        'node-with-vuejs-fullstack-web-development.md',
        'ethereum-kickstart-vue.md',
        'devmeetup-vuetify-nuxt.md'
      ],
      '/frontend/': [
        '',
        {
          title: 'Vue.js',
          collapsable: false,
          children: [
            'vuejs'
          ]
        },
        {
          title: 'React',
          collapsable: false,
          children: [
            'react'
          ]
        },
        {
          title: 'Angular',
          collapsable: false,
          children: [
            'angular'
          ]
        },
        {
          title: 'JavaScript',
          collapsable: false,
          children: [
            'javascript'
          ]
        },
        {
          title: 'CSS',
          collapsable: false,
          children: [
            'css'
          ]
        }
      ],
      '/backend/': [
        '',
        {
          title: 'Node.js',
          collapsable: false,
          children: [
            'nodejs'
          ]
        },
        {
          title: 'Java',
          collapsable: false,
          children: [
            'java'
          ]
        },
        {
          title: 'Python',
          collapsable: false,
          children: [
            'python'
          ]
        },
        {
          title: '.Net Core',
          collapsable: false,
          children: [
            'dotnetcore'
          ]
        },
        {
          title: '.Net',
          collapsable: false,
          children: [
            'dotnet'
          ]
        }
      ],
      '/staticwebs/': [
        '',
        {
          title: 'Markdown',
          collapsable: false,
          children: [
            'markdown',
            'markdown-easy-markdown-with-vs-code',
          ]
        },
        {
          title: 'VuePress',
          collapsable: false,
          children: [
            'vuepress',
            'vuepress-how-to-use-vuepress-for-a-documentation-site',
          ]
        }
      ],
      '/microservices/': [
        '',
        {
          title: 'Development',
          collapsable: false,
          children: [
            'development'
          ]
        },
        {
          title: 'Docker',
          collapsable: false,
          children: [
            'docker'
          ]
        },
        {
          title: 'Kubernetes',
          collapsable: false,
          children: [
            'kubernetes'
          ]
        }
      ],
      '/other/': [
        '',
        {
          title: 'Blockchain',
          collapsable: false,
          children: [
            'blockchain'
          ]
        },
        {
          title: 'Excel',
          collapsable: false,
          children: [
            'excel'
          ]
        }
      ]
    }
  } 
}
```

## Add new folder with documents
In order to create one of the folders (`Static Webs` in this case) with documents we have to follow the following steps:

1. Modify the `config.js` file to include the `sidebar` for the `Static Web` folder.
> `config.js`
```bash
module.exports = {
  title: `Documentation`,
  description: `For Training and Projects`,
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.png' }]
  ],  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/'},
      { text: 'Projects', link: '/projects/'},
      { text: 'Front End', link: '/frontend/'},
      { text: 'Back End', link: '/backend/'},
      { text: 'Static Webs', link: '/staticwebs/'},
      { text: 'Microservices', link: '/microservices/'},
      { text: 'Other', link: '/other/'},
      { text: 'About me', link: 'https://github.com/peelmicro'},
      { text: 'Github', link: 'https://github.com/peelmicro/documentation'},
    ],
    sidebar: {
      '/staticwebs/': [
        {
          title: 'Markdown',
          collapsable: false,
          children: [
            'markdown',
            'markdown-easy-markdown-with-vs-code',
          ]
        },
        {
          title: 'VuePress',
          collapsable: false,
          children: [
            'vuepress',
            'vuepress-how-to-use-vuepress-for-a-documentation-site',
          ]
        }
      ]
    }
  } 
}
```

2. Create the `staticwebs` folder

![](/images/projects/documentation/AddNewFolder.png)

3. Create the main `README.md` document inside the folder. 
- This document will be transformed to `index.html` inside the `staticwebs` folder by `WebPack` when it is deployed.

> `README.md`
```md
# Static Webs
This documentation section is about the use of `static site` generators and tools that take some `text` and `templates` as input and produce html files on the output.
```

4. Create the rest of the pages as `Markdown` documents.
They will transformed to `Html` files inside the `staticwebs` folder by `WebPack` when it is deployed.

> `markdown.md`
```md
# Introduction
[Markdown](https://en.wikipedia.org/wiki/Markdown) is a lightweight markup language that is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor. 

Nowadays is highly used as a base tool to generate Static Webs.

## Courses

- [Easy Markdown with VS Code](markdown-easy-markdown-with-vs-code.md)
```

> `markdown-easy-markdown-with-vs-code.md`
```md
# Easy Markdown with VS Code
...
...
```
> `vuepress.md`
```md
# Introduction
[VuePress](https://vuepress.vuejs.org) is a static site generator based on Vue JavaScript framework.

## Courses
- [Learn how to use VuePress for a Documentation Site](https://www.youtube.com/watch?v=5Kqyhu_eIcw)
```

> `vuepress-how-to-use-vuepress-for-a-documentation-site.md`
```md
# Learn how to use VuePress for a Documentation Site
...
...
```

5. Create the `folders` for the specific `images` of the new `Markdown` files from the `public\images` folder.

![](/images/projects/documentation/AddNewFolder2.png)

6. Commit and deploy the changes

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Projects/Documentation (master)
$ git add .
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Projects/Documentation (master)
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   .vuepress/config.js
        new file:   .vuepress/public/images/markdown/easy-markdown-with-vs-code/CommandPallete.png
        new file:   .vuepress/public/images/markdown/easy-markdown-with-vs-code/Extensions.png
        new file:   .vuepress/public/images/markdown/easy-markdown-with-vs-code/GFMSettings.png
        new file:   .vuepress/public/images/markdown/easy-markdown-with-vs-code/OpenPreviwtoTheSideGFM.png
        new file:   .vuepress/public/images/markdown/easy-markdown-with-vs-code/Settings.png
        new file:   .vuepress/public/images/vuepress/how-to-use-vuepress-for-a-documentation-site/VuePress.png
        new file:   .vuepress/public/images/vuepress/how-to-use-vuepress-for-a-documentation-site/VuePress10.png
        new file:   .vuepress/public/images/vuepress/how-to-use-vuepress-for-a-documentation-site/VuePress11.png
        new file:   .vuepress/public/images/vuepress/how-to-use-vuepress-for-a-documentation-site/VuePress12.png
        new file:   .vuepress/public/images/vuepress/how-to-use-vuepress-for-a-documentation-site/VuePress13.png
        new file:   .vuepress/public/images/vuepress/how-to-use-vuepress-for-a-documentation-site/VuePress14.png
        new file:   .vuepress/public/images/vuepress/how-to-use-vuepress-for-a-documentation-site/VuePress15.png
        new file:   .vuepress/public/images/vuepress/how-to-use-vuepress-for-a-documentation-site/VuePress16.png
        new file:   .vuepress/public/images/vuepress/how-to-use-vuepress-for-a-documentation-site/VuePress2.png
        new file:   .vuepress/public/images/vuepress/how-to-use-vuepress-for-a-documentation-site/VuePress3.png
        new file:   .vuepress/public/images/vuepress/how-to-use-vuepress-for-a-documentation-site/VuePress4.png
        new file:   .vuepress/public/images/vuepress/how-to-use-vuepress-for-a-documentation-site/VuePress5.png
        new file:   .vuepress/public/images/vuepress/how-to-use-vuepress-for-a-documentation-site/VuePress6.png
        new file:   .vuepress/public/images/vuepress/how-to-use-vuepress-for-a-documentation-site/VuePress7.png
        new file:   .vuepress/public/images/vuepress/how-to-use-vuepress-for-a-documentation-site/VuePress8.png
        new file:   .vuepress/public/images/vuepress/how-to-use-vuepress-for-a-documentation-site/VuePress9.png
        modified:   README.md
        new file:   package-lock.json
        modified:   package.json
        new file:   staticwebs/README.md
        new file:   staticwebs/markdown-easy-markdown-with-vs-code.md
        new file:   staticwebs/markdown.md
        new file:   staticwebs/vuepress-how-to-use-vuepress-for-a-documentation-site.md
        new file:   staticwebs/vuepress.md
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Projects/Documentation (master)
$ git commit -m "Added the Static Webs Folder"
[master 425132a] Added the Static Webs Folder
 30 files changed, 10444 insertions(+), 7 deletions(-)
 create mode 100644 .vuepress/public/images/markdown/easy-markdown-with-vs-code/CommandPallete.png
 create mode 100644 .vuepress/public/images/markdown/easy-markdown-with-vs-code/Extensions.png
 create mode 100644 .vuepress/public/images/markdown/easy-markdown-with-vs-code/GFMSettings.png
 create mode 100644 .vuepress/public/images/markdown/easy-markdown-with-vs-code/OpenPreviwtoTheSideGFM.png
 create mode 100644 .vuepress/public/images/markdown/easy-markdown-with-vs-code/Settings.png
 create mode 100644 .vuepress/public/images/vuepress/how-to-use-vuepress-for-a-documentation-site/VuePress.png
 create mode 100644 .vuepress/public/images/vuepress/how-to-use-vuepress-for-a-documentation-site/VuePress10.png
 create mode 100644 .vuepress/public/images/vuepress/how-to-use-vuepress-for-a-documentation-site/VuePress11.png
 create mode 100644 .vuepress/public/images/vuepress/how-to-use-vuepress-for-a-documentation-site/VuePress12.png
 create mode 100644 .vuepress/public/images/vuepress/how-to-use-vuepress-for-a-documentation-site/VuePress13.png
 create mode 100644 .vuepress/public/images/vuepress/how-to-use-vuepress-for-a-documentation-site/VuePress14.png
 create mode 100644 .vuepress/public/images/vuepress/how-to-use-vuepress-for-a-documentation-site/VuePress15.png
 create mode 100644 .vuepress/public/images/vuepress/how-to-use-vuepress-for-a-documentation-site/VuePress16.png
 create mode 100644 .vuepress/public/images/vuepress/how-to-use-vuepress-for-a-documentation-site/VuePress2.png
 create mode 100644 .vuepress/public/images/vuepress/how-to-use-vuepress-for-a-documentation-site/VuePress3.png
 create mode 100644 .vuepress/public/images/vuepress/how-to-use-vuepress-for-a-documentation-site/VuePress4.png
 create mode 100644 .vuepress/public/images/vuepress/how-to-use-vuepress-for-a-documentation-site/VuePress5.png
 create mode 100644 .vuepress/public/images/vuepress/how-to-use-vuepress-for-a-documentation-site/VuePress6.png
 create mode 100644 .vuepress/public/images/vuepress/how-to-use-vuepress-for-a-documentation-site/VuePress7.png
 create mode 100644 .vuepress/public/images/vuepress/how-to-use-vuepress-for-a-documentation-site/VuePress8.png
 create mode 100644 .vuepress/public/images/vuepress/how-to-use-vuepress-for-a-documentation-site/VuePress9.png
 create mode 100644 package-lock.json
 create mode 100644 staticwebs/README.md
 create mode 100644 staticwebs/markdown-easy-markdown-with-vs-code.md
 create mode 100644 staticwebs/markdown.md
 create mode 100644 staticwebs/vuepress-how-to-use-vuepress-for-a-documentation-site.md
 create mode 100644 staticwebs/vuepress.md
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Projects/Documentation (master)
$ git push origin HEAD
Counting objects: 40, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (39/39), done.
Writing objects: 100% (40/40), 737.25 KiB | 4.52 MiB/s, done.
Total 40 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/peelmicro/documentation.git
   00a61f9..425132a  HEAD -> master
```
7. Ensure the changes are deployed correctly

![](/images/projects/documentation/ChangesDeployedCorrectly.png)

## Set up `Google Analytics`
1. Browse to [Google Analytics](https://analytics.google.com)

![](/images/projects/documentation/GoogleAnalytics.png)

2. Go to `+ Create Account`

- Put the following values:

Field | Value 
---------|----------
 What would you like to track? | Website 
 Account Name | peelmicro info 
 Website Name | peelmicro documentation 
 Website URL | documentation.peelmicro.info
 Industry Category | Computer adn Electronics
 Reporting Time Zone | Ireland: (GMT+00:00) Ireland Time
 Data Sharing Settings | Leave all checked [x]

![](/images/projects/documentation/GoogleAnalytics2.png)

- Click on `Get Tracking ID`

![](/images/projects/documentation/GoogleAnalytics3.png)

- Click on `[x] I also accept the Data Processing Terms as required by GDPR. Learn more.`
- Click on `[x] I accept the Measurement Controller-Controller Data Protection Terms for the data that I share with Google.`
- Click on `I accept`

![](/images/projects/documentation/GoogleAnalytics4.png)

Tracking ID: `UA-130949957-1`

> `Global Site Tag (gtag.js)`
```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-130949957-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-130949957-1');
</script>
```

3. Browse to [VuePress Google Analytics](https://vuepress.vuejs.org/plugin/official/plugin-google-analytics.html#vuepress-plugin-google-analytics)

![](/images/projects/documentation/GoogleAnalytics5.png)

4. Install the new `Google Analytics plugin`
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Projects/Documentation (master)
$ yarn add -D @vuepress/plugin-google-analytics
yarn add v1.12.3
warning package.json: No license field
warning package-lock.json found. Your project contains lock files generated by tools other than Yarn. It is advised not to mix package managers in order to avoid resolution inconsistencies caused by unsynchronized lock files. To clear this warning, remove packa
ge-lock.json.
warning No license field
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@1.2.4: The platform "win32" is incompatible with this module.
info "fsevents@1.2.4" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
warning "webpack-serve > @webpack-contrib/config-loader@1.2.1" has unmet peer dependency "webpack@^4.3.0".
warning "webpack-serve > time-fix-plugin@2.0.5" has unmet peer dependency "webpack@>=4.0.0".
warning "webpack-serve > @webpack-contrib/schema-utils@1.0.0-beta.0" has unmet peer dependency "webpack@^3.0.0 || ^4.0.0".
warning "webpack-serve > koa-webpack > webpack-dev-middleware@3.4.0" has unmet peer dependency "webpack@^4.0.0".
warning " > webpack-serve@2.0.3" has unmet peer dependency "webpack@^4.0.0".
warning "webpack-serve > koa-webpack@5.1.1" has unmet peer dependency "webpack@^4.0.0".
warning "webpack-serve > koa-webpack > webpack-hot-client@4.1.1" has unmet peer dependency "webpack@^4.0.0".
warning "webpack-serve > @webpack-contrib/cli-utils@1.0.2" has unmet peer dependency "webpack@^4.3.0".
[4/4] Building fresh packages...
success Saved lockfile.
warning No license field
success Saved 15 new dependencies.
info Direct dependencies
├─ @vuepress/plugin-google-analytics@1.0.0-alpha.0
└─ webpack-serve@2.0.3
info All dependencies
├─ @sindresorhus/is@0.7.0
├─ @vuepress/plugin-google-analytics@1.0.0-alpha.0
├─ @webpack-contrib/cli-utils@1.0.2
├─ camelize@1.0.0
├─ koa-webpack@5.1.1
├─ meant@1.0.1
├─ mem@3.0.1
├─ node-version@1.2.0
├─ p-defer@1.0.0
├─ p-is-promise@1.1.0
├─ p-reduce@1.0.0
├─ p-series@1.1.0
├─ url-join@4.0.0
├─ webpack-serve@2.0.3
└─ xregexp@4.0.0
Done in 73.61s.
```

5. Change `config.js` to include the `configuration` for `Google Analytics`

> `config.js`
```js
module.exports = ctx => ({
  title: `Documentation`,
  description: `For Training and Projects`,
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.png' }]
  ],  
  themeConfig: {
    algolia: ctx.isProd ? ({
      apiKey: '9d9b53b6e2f953299ac9ab6d8b6428d1',
      indexName: 'peelmicro'
    }) : null,
    plugins: [
      ['@vuepress/google-analytics', {
        ga: 'UA-130949957-1'
      }],
    ],      
    nav: [
      { text: 'Home', link: '/'},
      { text: 'Projects', link: '/projects/'},
      { text: 'Front End', link: '/frontend/'},
      { text: 'Back End', link: '/backend/'},
      { text: 'Static Webs', link: '/staticwebs/'},
      { text: 'Microservices', link: '/microservices/'},
      { text: 'Other', link: '/other/'},
      { text: 'About me', link: 'https://github.com/peelmicro'},
      { text: 'Github', link: 'https://github.com/peelmicro/documentation'},
    ],
    sidebar: {
      '/projects/': [
        '',
        'documentation.md',
        'dotnet-core-multi-docker.md',
        'java-multi-docker.md',
        'python-multi-docker.md',
        'dotnet-core-react-redux-advanced.md',
        'purchase-slack-command-dotnet.md',
        'node-with-vuejs-fullstack-web-development.md',
        'ethereum-kickstart-vue.md',
        'devmeetup-vuetify-nuxt.md'
      ],
      '/frontend/': [
        '',
        {
          title: 'Vue.js',
          collapsable: false,
          children: [
            'vuejs'
          ]
        },
        {
          title: 'React',
          collapsable: false,
          children: [
            'react'
          ]
        },
        {
          title: 'Angular',
          collapsable: false,
          children: [
            'angular'
          ]
        },
        {
          title: 'JavaScript',
          collapsable: false,
          children: [
            'javascript'
          ]
        },
        {
          title: 'CSS',
          collapsable: false,
          children: [
            'css'
          ]
        }
      ],
      '/backend/': [
        '',
        {
          title: 'Node.js',
          collapsable: false,
          children: [
            'nodejs'
          ]
        },
        {
          title: 'Java',
          collapsable: false,
          children: [
            'java'
          ]
        },
        {
          title: 'Python',
          collapsable: false,
          children: [
            'python'
          ]
        },
        {
          title: '.Net Core',
          collapsable: false,
          children: [
            'dotnetcore'
          ]
        },
        {
          title: '.Net',
          collapsable: false,
          children: [
            'dotnet'
          ]
        }
      ],
      '/staticwebs/': [
        '',
        {
          title: 'Markdown',
          collapsable: false,
          children: [
            'markdown',
            'markdown-easy-markdown-with-vs-code',
          ]
        },
        {
          title: 'VuePress',
          collapsable: false,
          children: [
            'vuepress',
            'vuepress-how-to-use-vuepress-for-a-documentation-site',
          ]
        }
      ],
      '/microservices/': [
        '',
        {
          title: 'Development',
          collapsable: false,
          children: [
            'development'
          ]
        },
        {
          title: 'Docker',
          collapsable: false,
          children: [
            'docker'
          ]
        },
        {
          title: 'Kubernetes',
          collapsable: false,
          children: [
            'kubernetes'
          ]
        }
      ],
      '/other/': [
        '',
        {
          title: 'Blockchain',
          collapsable: false,
          children: [
            'blockchain'
          ]
        },
        {
          title: 'Excel',
          collapsable: false,
          children: [
            'excel'
          ]
        }
      ]
    }
  } 
})
```

6. Commit and push changes and ensure there are no errors on the production website.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Projects/Documentation (master)
$ git commit -m "Added Google Analytics"
[master 29ac136] Added Google Analytics
 69 files changed, 1807 insertions(+), 12 deletions(-)
 create mode 100644 .vuepress/public/images/projects/documentation/AddNewFolder.png
 create mode 100644 .vuepress/public/images/projects/documentation/AddNewFolder2.png
 create mode 100644 .vuepress/public/images/projects/documentation/AlgoliaSearchSetUp.png
 create mode 100644 .vuepress/public/images/projects/documentation/AlgoliaSearchSetUp2.png
 create mode 100644 .vuepress/public/images/projects/documentation/AlgoliaSearchSetUp3.png
 create mode 100644 .vuepress/public/images/projects/documentation/ChangesDeployedCorrectly.png
 create mode 100644 .vuepress/public/images/projects/documentation/CreateGitHubRepository.png
 create mode 100644 .vuepress/public/images/projects/documentation/CreateGitHubRepository2.png
 create mode 100644 .vuepress/public/images/projects/documentation/CreateGitHubRepository3.png
 create mode 100644 .vuepress/public/images/projects/documentation/CreateGitHubRepository4.png
 create mode 100644 .vuepress/public/images/projects/documentation/CreateGitHubRepository5.png
 create mode 100644 .vuepress/public/images/projects/documentation/DeployInNetlify.png
 create mode 100644 .vuepress/public/images/projects/documentation/DeployInNetlify10.png
 create mode 100644 .vuepress/public/images/projects/documentation/DeployInNetlify11.png
 create mode 100644 .vuepress/public/images/projects/documentation/DeployInNetlify12.png
 create mode 100644 .vuepress/public/images/projects/documentation/DeployInNetlify13.png
 create mode 100644 .vuepress/public/images/projects/documentation/DeployInNetlify14.png
 create mode 100644 .vuepress/public/images/projects/documentation/DeployInNetlify15.png
 create mode 100644 .vuepress/public/images/projects/documentation/DeployInNetlify16.png
 create mode 100644 .vuepress/public/images/projects/documentation/DeployInNetlify17.png
 create mode 100644 .vuepress/public/images/projects/documentation/DeployInNetlify18.png
 create mode 100644 .vuepress/public/images/projects/documentation/DeployInNetlify19.png
 create mode 100644 .vuepress/public/images/projects/documentation/DeployInNetlify2.png
 create mode 100644 .vuepress/public/images/projects/documentation/DeployInNetlify20.png
 create mode 100644 .vuepress/public/images/projects/documentation/DeployInNetlify21.png
 create mode 100644 .vuepress/public/images/projects/documentation/DeployInNetlify22.png
 create mode 100644 .vuepress/public/images/projects/documentation/DeployInNetlify23.png
 create mode 100644 .vuepress/public/images/projects/documentation/DeployInNetlify3.png
 create mode 100644 .vuepress/public/images/projects/documentation/DeployInNetlify4.png
 create mode 100644 .vuepress/public/images/projects/documentation/DeployInNetlify5.png
 create mode 100644 .vuepress/public/images/projects/documentation/DeployInNetlify6.png
 create mode 100644 .vuepress/public/images/projects/documentation/DeployInNetlify7.png
 create mode 100644 .vuepress/public/images/projects/documentation/DeployInNetlify8.png
 create mode 100644 .vuepress/public/images/projects/documentation/DeployInNetlify9.png
 create mode 100644 .vuepress/public/images/projects/documentation/DevelopMainParts.png
 create mode 100644 .vuepress/public/images/projects/documentation/DevelopMainParts2.png
 create mode 100644 .vuepress/public/images/projects/documentation/DevelopMainParts3.png
 create mode 100644 .vuepress/public/images/projects/documentation/DevelopMainParts4.png
 create mode 100644 .vuepress/public/images/projects/documentation/DevelopMainParts5.png
 create mode 100644 .vuepress/public/images/projects/documentation/GoogleAnalytics.png
 create mode 100644 .vuepress/public/images/projects/documentation/GoogleAnalytics2.png
 create mode 100644 .vuepress/public/images/projects/documentation/GoogleAnalytics3.png
 create mode 100644 .vuepress/public/images/projects/documentation/GoogleAnalytics4.png
 create mode 100644 .vuepress/public/images/projects/documentation/GoogleAnalytics5.png
 create mode 100644 .vuepress/public/images/projects/documentation/SetUpProject.png
 create mode 100644 .vuepress/public/images/projects/documentation/SetUpProject2.png
 create mode 100644 .vuepress/public/images/projects/documentation/SetUpProject3.png
 create mode 100644 .vuepress/public/images/projects/documentation/SetUpProject4.png
 create mode 100644 .vuepress/public/images/projects/documentation/SetUpProject5.png
 create mode 100644 .vuepress/public/images/projects/documentation/SetUpProject6.png
 create mode 100644 .vuepress/public/images/projects/documentation/SetupACustomDomain.png
 create mode 100644 .vuepress/public/images/projects/documentation/SetupACustomDomain10.png
 create mode 100644 .vuepress/public/images/projects/documentation/SetupACustomDomain11.png
 create mode 100644 .vuepress/public/images/projects/documentation/SetupACustomDomain12.png
 create mode 100644 .vuepress/public/images/projects/documentation/SetupACustomDomain2.png
 create mode 100644 .vuepress/public/images/projects/documentation/SetupACustomDomain3.png
 create mode 100644 .vuepress/public/images/projects/documentation/SetupACustomDomain4.png
 create mode 100644 .vuepress/public/images/projects/documentation/SetupACustomDomain5.png
 create mode 100644 .vuepress/public/images/projects/documentation/SetupACustomDomain6.png
 create mode 100644 .vuepress/public/images/projects/documentation/SetupACustomDomain7.png
 create mode 100644 .vuepress/public/images/projects/documentation/SetupACustomDomain8.png
 create mode 100644 .vuepress/public/images/projects/documentation/SetupACustomDomain9.png
```
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 ~/OneDrive/Projects/Documentation (master)
$ git push origin HEAD
Counting objects: 77, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (76/76), done.
Writing objects: 100% (77/77), 4.08 MiB | 186.00 KiB/s, done.
Total 77 (delta 9), reused 0 (delta 0)
remote: Resolving deltas: 100% (9/9), completed with 8 local objects.
To https://github.com/peelmicro/documentation.git
   bc293cc..29ac136  HEAD -> master
```
![](/images/projects/documentation/GoogleAnalytics6.png)