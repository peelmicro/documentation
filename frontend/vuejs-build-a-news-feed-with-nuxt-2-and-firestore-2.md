# Build a News Feed with Nuxt 2 and Firestore

> Github Repositories

- [build-a-news-feed-with-nuxt-2-and-firestore](https://github.com/peelmicro/build-a-news-feed-with-nuxt-2-and-firestore).

The [Build a News Feed with Nuxt 2 and Firestore
](https://www.udemy.com/course/build-a-news-feed-with-nuxt-2-and-firestore/) Udemy course explains how to Create a complete, full-stack news aggregator from front to back with Nuxt 2, Firestore and Vue Material.

> Other parts:

- [Build a News Feed with Nuxt 2 and Firestore (Part 1)](./vuejs-build-a-news-feed-with-nuxt-2-and-firestore.md)

> Table of contents
> [[toc]]

## What I've learned

- See how to implement core Nuxt concepts (middleware, plugins, modules pages / routing, etc.) in building your own Nuxt apps
- Learn the practical side of working with various Nuxt / Vue features within the context of building a professional, complete application
- Use the techniques / material covered in this course to spark your own ideas in making cool, functional web apps
- Rapidly (yet thoroughly) build a Nuxt project from start to finish

## Section 8: Bookmarking Headlines / Removing Bookmarks from Personal Feed 0 / 4|15min

### 21. Create Ability to Bookmark Headlines, Add Bookmarks to User's Feed 7min

- We are going to modify the `store\index.js` document to include everything related the ability to `bookmark` headlines.

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
      feed: [],
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
      setFeed(state, headlines) {
        state.feed = headlines;
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
      async addHeadlineToFeed({ state }, headline) {
        const feedRef = db
          .collection(`users/${state.user.email}/feed`)
          .doc(headline.title);

        await feedRef.set(headline);
      },
      async loadUserFeed({ state, commit }) {
        if (state.user) {
          const feedRef = db.collection(`users/${state.user.email}/feed`);

          await feedRef.get().then(querySnapshot => {
            let headlines = [];
            querySnapshot.forEach(doc => {
              headlines.push(doc.data());
              commit("setFeed", headlines);
            });
          });
        }
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
      feed: state => state.feed,
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

- We are going to modify the `pages\index.vue` document to add a new function to manage the ability to bookmark headlines.

> pages\index.vue

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
            <md-avatar><img :src="user.avatar" :alt="user.email"/></md-avatar>
            {{user.email}}
          </md-button>
          <md-button @click="logoutUser">Logout</md-button>
        </template>

        <template v-else>
          <md-button to="/login">Login</md-button>
          <md-button to="/register">Register</md-button>
        </template>
        <md-button class="md-accent" @click="showRightSidepanel = true"
          >Categories</md-button
        >
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
        <md-select
          @input="changeCountry"
          :value="country"
          name="country"
          id="country"
        >
          <md-option value="us">United States</md-option>
          <md-option value="ca">Canada</md-option>
          <md-option value="de">Germany</md-option>
          <md-option value="ru">Russia</md-option>
        </md-select>
      </md-field>

      <!-- Feed Content -->
      <md-list
        class="md-triple-line"
        v-for="headline in feed"
        :key="headline.id"
      >
        <md-list-item>
          <md-avatar
            ><img :src="headline.urlToImage" :alt="headline.title"
          /></md-avatar>

          <div class="md-list-item-text">
            <span
              ><a :href="headline.url" target="_blank"
                >{{headline.title}}</a
              ></span
            >
            <span>{{headline.source.name}}</span>
            <span>View Comments</span>
          </div>

          <md-button class="md-icon-button md-list-action">
            <md-icon class="md-accent">delete</md-icon>
          </md-button>
        </md-list-item>
        <md-divider class="md-inset"></md-divider>
      </md-list>
    </md-drawer>

    <!-- News Categories (Right Drawer) -->
    <md-drawer class="md-right" md-fixed :md-active.sync="showRightSidepanel">
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
                <md-button
                  @click="addHeadlineToFeed(headline)"
                  class="md-icon-button"
                >
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
      await store.dispatch("loadUserFeed");
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
      feed() {
        return this.$store.getters.feed;
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
      async addHeadlineToFeed(headline) {
        if (this.user) {
          await this.$store.dispatch("addHeadlineToFeed", headline);
        }
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

- We need to test if everything works properly.

- We have the following error:

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateAbilityToBookmarkHeadlines.png)

```
vendors.app.js:22737 [2019-06-09T11:26:45.051Z]  @firebase/firestore: Firestore (6.1.1):
  The timestampsInSnapshots setting now defaults to true and you no
  longer need to explicitly set it. In a future release, the setting
  will be removed entirely and so it is recommended that you remove it
  from your firestore.settings() call now.
```

- We need to modify the `plugin/firestore.js` document to remove the code that set the `timestampsInSnapshots` to true.

> plugin/firestore.js

```js
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
}

const db = firebase.firestore();

export default db;
```

- The error is not shown anymore.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateAbilityToBookmarkHeadlines2.png)

- If there is not authentication, when we click the `bookmark` button nothing happens.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateAbilityToBookmarkHeadlines3.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateAbilityToBookmarkHeadlines4.png)

- If the use is authenticated, when we click the `bookmark` button the headline is stored in the `feeds` collection of the user.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateAbilityToBookmarkHeadlines5.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateAbilityToBookmarkHeadlines6.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateAbilityToBookmarkHeadlines7.png)

- If we refresh the page we can see the bookmark.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateAbilityToBookmarkHeadlines8.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateAbilityToBookmarkHeadlines9.png)

### 22. Add Listener .onSnapshot to Personal Feed 2min

- Currently we need to refresh the page to be able to get the stored feeds loaded.

- We are going to modify the `store\index.js` document to use the `onSnapshot` firestore funtion instead of the `get` function to make it reactived when a new feed is created. Also the new `clearFeed` mutation will be created to ensure the feeds are removed when the user logs out.

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
      feed: [],
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
      setFeed(state, headlines) {
        state.feed = headlines;
      },
      clearToken: state => (state.token = ""),
      clearUser: state => (state.user = null),
      clearFeed: state => (state.feed = [])
    },
    actions: {
      async loadHeadlines({ commit }, apiUrl) {
        commit("setLoading", true);
        const { articles } = await this.$axios.$get(apiUrl);
        commit("setLoading", false);
        commit("setHeadlines", articles);
      },
      async addHeadlineToFeed({ state }, headline) {
        const feedRef = db
          .collection(`users/${state.user.email}/feed`)
          .doc(headline.title);

        await feedRef.set(headline);
      },
      async loadUserFeed({ state, commit }) {
        if (state.user) {
          const feedRef = db.collection(`users/${state.user.email}/feed`);

          await feedRef.onSnapshot(querySnapshot => {
            let headlines = [];
            querySnapshot.forEach(doc => {
              headlines.push(doc.data());
              commit("setFeed", headlines);
            });
          });
        }
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
        commit("clearFeed");
        clearUserData();
      }
    },
    getters: {
      headlines: state => state.headlines,
      feed: state => state.feed,
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

- We are going to modify the `pages\index.vue` document to change the `bookmark` icon when the headline belongs to the user's feeds.

> pages\index.vue

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

      <!-- Feed Content -->
      <md-list class="md-triple-line" v-for="(headline, i) in feed" :key="i">
        <md-list-item>
          <md-avatar><img :src="headline.urlToImage" :alt="headline.title"></md-avatar>

            <div class="md-list-item-text">
              <span><a :href="headline.url" target="_blank">{{headline.title}}</a></span>
              <span>{{headline.source.name}}</span>
              <span>View Comments</span>
            </div>

            <md-button class="md-icon-button md-list-action">
              <md-icon class="md-accent">delete</md-icon>
            </md-button>
        </md-list-item>
        <md-divider class="md-inset"></md-divider>
      </md-list>
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
                  <md-button @click="addHeadlineToFeed(headline)" class="md-icon-button" :class="isInFeed(headline.title)">
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
    await store.dispatch("loadUserFeed");
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
    feed() {
      return this.$store.getters.feed;
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
    async addHeadlineToFeed(headline) {
      if (this.user) {
        await this.$store.dispatch("addHeadlineToFeed", headline);
      }
    },
    changeCountry(country) {
      this.$store.commit("setCountry", country);
    },
    logoutUser() {
      this.$store.dispatch("logoutUser");
    },
    isInFeed(title) {
      const inFeed =
        this.feed.findIndex(headline => headline.title === title) > -1;
      return inFeed ? "md-primary" : "";
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

- We need to test it.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddListenerOnSnapshotToPersonalFeed.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddListenerOnSnapshotToPersonalFeed2.png)

- The headline is added without needing to refresh the page.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddListenerOnSnapshotToPersonalFeed3.png)


### 23. Add Markup for Empty State in Personal Feed 2min


- We are going to modify the `pages\index.vue` document to create default `bookmars` if the `feed` is empty.

> pages\index.vue

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

      <!-- Default Markup (if Feed Empty) -->
      <md-empty-state class="md-primary" v-if="feed.length === 0 && !user" md-icon="bookmarks" md-label="Nothing in Feed" md-description="Login to bookmark headlines">
        <md-button to='/login' class="md-primary md-raised">Login</md-button>
      </md-empty-state>

      <md-empty-state v-else-if="feed.length === 0" class="md-accent" md-icon="bookmark_outline" md-label="Nothing in Feed" md-description="Anything you bookmark will be safely stored here"></md-empty-state>

      <!-- Feed Content (if Feed Not Empty) -->
      <md-list class="md-triple-line" v-else v-for="(headline, i) in feed" :key="i">
        <md-list-item>
          <md-avatar><img :src="headline.urlToImage" :alt="headline.title"></md-avatar>

            <div class="md-list-item-text">
              <span><a :href="headline.url" target="_blank">{{headline.title}}</a></span>
              <span>{{headline.source.name}}</span>
              <span>View Comments</span>
            </div>

            <md-button class="md-icon-button md-list-action">
              <md-icon class="md-accent">delete</md-icon>
            </md-button>
        </md-list-item>
        <md-divider class="md-inset"></md-divider>
      </md-list>
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
                  <md-button @click="addHeadlineToFeed(headline)" class="md-icon-button" :class="isInFeed(headline.title)">
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
    await store.dispatch("loadUserFeed");
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
    feed() {
      return this.$store.getters.feed;
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
    async addHeadlineToFeed(headline) {
      if (this.user) {
        await this.$store.dispatch("addHeadlineToFeed", headline);
      }
    },
    changeCountry(country) {
      this.$store.commit("setCountry", country);
    },
    logoutUser() {
      this.$store.dispatch("logoutUser");
    },
    isInFeed(title) {
      const inFeed =
        this.feed.findIndex(headline => headline.title === title) > -1;
      return inFeed ? "md-primary" : "";
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

- We need to test it.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddMarkupForEmptyStateInPersonalFeed.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddMarkupForEmptyStateInPersonalFeed2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddMarkupForEmptyStateInPersonalFeed3.png)

### 24. Delete Headlines from Personal Feed 3min
- We are going to modify the `store\index.js` document to include the `removeHeadlineFromFeed` action.

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
      feed: [],
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
      setFeed(state, headlines) {
        state.feed = headlines;
      },
      clearToken: state => (state.token = ""),
      clearUser: state => (state.user = null),
      clearFeed: state => (state.feed = [])
    },
    actions: {
      async loadHeadlines({ commit }, apiUrl) {
        commit("setLoading", true);
        const { articles } = await this.$axios.$get(apiUrl);
        commit("setLoading", false);
        commit("setHeadlines", articles);
      },
      async addHeadlineToFeed({ state }, headline) {
        const feedRef = db
          .collection(`users/${state.user.email}/feed`)
          .doc(headline.title);

        await feedRef.set(headline);
      },
      async loadUserFeed({ state, commit }) {
        if (state.user) {
          const feedRef = db.collection(`users/${state.user.email}/feed`);

          await feedRef.onSnapshot(querySnapshot => {
            let headlines = [];
            querySnapshot.forEach(doc => {
              headlines.push(doc.data());
              commit("setFeed", headlines);
            });

            if (querySnapshot.empty) {
              headlines = [];
              commit("setFeed", headlines);
            }
          });
        }
      },
      async removeHeadlineFromFeed({ state }, headline) {
        const headlineRef = db
          .collection(`users/${state.user.email}/feed`)
          .doc(headline.title);

        await headlineRef.delete();
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
        commit("clearFeed");
        clearUserData();
      }
    },
    getters: {
      headlines: state => state.headlines,
      feed: state => state.feed,
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

- We are going to modify the `pages\index.vue` document to include the `removeHeadlineFromFeed` method.

> pages\index.vue

```html
<template>
  <div class="md-layout md-alignment-center" style="margin: 4em 0">
    <!-- Top Navigation -->
    <md-toolbar class="fixed-toolbar" elevation="1">
      <md-button @click="showLeftSidepanel = true" class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>
      <nuxt-link class="md-primary md-title" to="/">NuxtNews</nuxt-link>

      <div class="md-toolbar-section-end">
        <template v-if="isAuthenticated">
          <md-button>
            <md-avatar>
              <img :src="user.avatar" :alt="user.email">
            </md-avatar>
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

      <!-- Default Markup (if Feed Empty) -->
      <md-empty-state
        class="md-primary"
        v-if="feed.length === 0 && !user"
        md-icon="bookmarks"
        md-label="Nothing in Feed"
        md-description="Login to bookmark headlines"
      >
        <md-button to="/login" class="md-primary md-raised">Login</md-button>
      </md-empty-state>

      <md-empty-state
        v-else-if="feed.length === 0"
        class="md-accent"
        md-icon="bookmark_outline"
        md-label="Nothing in Feed"
        md-description="Anything you bookmark will be safely stored here"
      ></md-empty-state>

      <!-- Feed Content (if Feed Not Empty) -->
      <md-list class="md-triple-line" v-else v-for="(headline, i) in feed" :key="i">
        <md-list-item>
          <md-avatar>
            <img :src="headline.urlToImage" :alt="headline.title">
          </md-avatar>

          <div class="md-list-item-text">
            <span>
              <a :href="headline.url" target="_blank">{{headline.title}}</a>
            </span>
            <span>{{headline.source.name}}</span>
            <span>View Comments</span>
          </div>

          <md-button
            @click="removeHeadlineFromFeed(headline)"
            class="md-icon-button md-list-action"
          >
            <md-icon class="md-accent">delete</md-icon>
          </md-button>
        </md-list-item>
        <md-divider class="md-inset"></md-divider>
      </md-list>
    </md-drawer>

    <!-- News Categories (Right Drawer) -->
    <md-drawer class="md-right" md-fixed :md-active.sync="showRightSidepanel">
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
          <md-icon :class="newsCategory.path === category ? 'md-primary' : ''">{{newsCategory.icon}}</md-icon>
          <span class="md-list-item-text">{{newsCategory.name}}</span>
        </md-list-item>
      </md-list>
    </md-drawer>

    <!-- App Content -->
    <div class="md-layout-item md-size-95">
      <md-content class="md-layout md-gutter" style="background: #007998; padding: 1em;">
        <ul
          v-for="headline in headlines"
          :key="headline.id"
          class="md-layout-item md-large-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100"
        >
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
                <md-button
                  @click="addHeadlineToFeed(headline)"
                  class="md-icon-button"
                  :class="isInFeed(headline.title)"
                >
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
    await store.dispatch("loadUserFeed");
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
    feed() {
      return this.$store.getters.feed;
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
    async addHeadlineToFeed(headline) {
      if (this.user) {
        await this.$store.dispatch("addHeadlineToFeed", headline);
      }
    },
    async removeHeadlineFromFeed(headline) {
      await this.$store.dispatch("removeHeadlineFromFeed", headline);
    },
    changeCountry(country) {
      this.$store.commit("setCountry", country);
    },
    logoutUser() {
      this.$store.dispatch("logoutUser");
    },
    isInFeed(title) {
      const inFeed =
        this.feed.findIndex(headline => headline.title === title) > -1;
      return inFeed ? "md-primary" : "";
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

- We need to test it.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/DeleteHeadlinesFromPersonalFeed.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/DeleteHeadlinesFromPersonalFeed2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/DeleteHeadlinesFromPersonalFeed3.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/DeleteHeadlinesFromPersonalFeed4.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/DeleteHeadlinesFromPersonalFeed5.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/DeleteHeadlinesFromPersonalFeed6.png)

## Section 9: Creating Pages for Individual Headlines 0 / 2|12min

### 25. Create Individual Headline Page, Slugify Headline Titles 5min

- As we can see on [Nuxt Dynamic Routes](https://nuxtjs.org/guide/routing/#dynamic-routes) and 
on [VueSchool Nuxt Dynamic Routes](https://vueschool.io/lessons/nuxtjs-dynamic-routes?friend=nuxt), we can create dynamic routes by putting an underscore (_) character before the name of the `vue` file. Nuxt takes care of everything.

- We are going to create the `pages\headlines` folder and the `pages\headlines\_slug.vue` document in it.

> pages\headlines\_slug.vue
```html
<template>
  <p>{{$route.params.slug}}</p>
</template>
```

- We are going to install the [slugify][https://www.npmjs.com/package/slugify] package that is used to slugify every string, even when it contains unicode, it means it makes strings url-safe.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/nuxt-news (master)
$ npm i slugify
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.0.7 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.0.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\watchpack\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\nodemon\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ slugify@1.3.4
added 1 package from 1 contributor and audited 14309 packages in 32.722s
found 0 vulnerabilities
```

- We are going to modify the `store\index.js` document to add the slug property for each headline.

> store\index.js

```js
import Vuex from "vuex";
import md5 from "md5";
import slugify from 'slugify';
import db from "~/plugins/firestore";
import { saveUserData, clearUserData } from "~/utils";

const createStore = () => {
  return new Vuex.Store({
    state: {
      headlines: [],
      feed: [],
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
      setFeed(state, headlines) {
        state.feed = headlines;
      },
      clearToken: state => (state.token = ""),
      clearUser: state => (state.user = null),
      clearFeed: state => (state.feed = [])
    },
    actions: {
      async loadHeadlines({ commit }, apiUrl) {
        commit("setLoading", true);
        const { articles } = await this.$axios.$get(apiUrl);
        const headlines = articles.map(article => {
          const slug = slugify(article.title, {
            replacement: '-',
            remove: /[^a-zA-Z0-9 -]/g,
            lower: true
          });
          const headline = { ...article, slug };
          return headline;
        })
        commit("setLoading", false);
        commit("setHeadlines", headlines);
      },
      async addHeadlineToFeed({ state }, headline) {
        const feedRef = db
          .collection(`users/${state.user.email}/feed`)
          .doc(headline.title);

        await feedRef.set(headline);
      },
      async loadUserFeed({ state, commit }) {
        if (state.user) {
          const feedRef = db.collection(`users/${state.user.email}/feed`);

          await feedRef.onSnapshot(querySnapshot => {
            let headlines = [];
            querySnapshot.forEach(doc => {
              headlines.push(doc.data());
              commit("setFeed", headlines);
            });

            if (querySnapshot.empty) {
              headlines = [];
              commit("setFeed", headlines);
            }
          });
        }
      },
      async removeHeadlineFromFeed({ state }, headline) {
        const headlineRef = db
          .collection(`users/${state.user.email}/feed`)
          .doc(headline.title);

        await headlineRef.delete();
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
        commit("clearFeed");
        clearUserData();
      }
    },
    getters: {
      headlines: state => state.headlines,
      feed: state => state.feed,
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

- We need to modify the `pages\index.vue` document to include the `saveHeadline` function that will redirect to the headline individual slug page.

> `pages\index.vue`
```html
<template>
  <div class="md-layout md-alignment-center" style="margin: 4em 0">
    <!-- Top Navigation -->
    <md-toolbar class="fixed-toolbar" elevation="1">
      <md-button @click="showLeftSidepanel = true" class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>
      <nuxt-link class="md-primary md-title" to="/">NuxtNews</nuxt-link>

      <div class="md-toolbar-section-end">
        <template v-if="isAuthenticated">
          <md-button>
            <md-avatar>
              <img :src="user.avatar" :alt="user.email">
            </md-avatar>
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

      <!-- Default Markup (if Feed Empty) -->
      <md-empty-state
        class="md-primary"
        v-if="feed.length === 0 && !user"
        md-icon="bookmarks"
        md-label="Nothing in Feed"
        md-description="Login to bookmark headlines"
      >
        <md-button to="/login" class="md-primary md-raised">Login</md-button>
      </md-empty-state>

      <md-empty-state
        v-else-if="feed.length === 0"
        class="md-accent"
        md-icon="bookmark_outline"
        md-label="Nothing in Feed"
        md-description="Anything you bookmark will be safely stored here"
      ></md-empty-state>

      <!-- Feed Content (if Feed Not Empty) -->
      <md-list class="md-triple-line" v-else v-for="(headline, i) in feed" :key="i">
        <md-list-item>
          <md-avatar>
            <img :src="headline.urlToImage" :alt="headline.title">
          </md-avatar>

          <div class="md-list-item-text">
            <span>
              <a :href="headline.url" target="_blank">{{headline.title}}</a>
            </span>
            <span>{{headline.source.name}}</span>
            <span>View Comments</span>
          </div>

          <md-button
            @click="removeHeadlineFromFeed(headline)"
            class="md-icon-button md-list-action"
          >
            <md-icon class="md-accent">delete</md-icon>
          </md-button>
        </md-list-item>
        <md-divider class="md-inset"></md-divider>
      </md-list>
    </md-drawer>

    <!-- News Categories (Right Drawer) -->
    <md-drawer class="md-right" md-fixed :md-active.sync="showRightSidepanel">
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
          <md-icon :class="newsCategory.path === category ? 'md-primary' : ''">{{newsCategory.icon}}</md-icon>
          <span class="md-list-item-text">{{newsCategory.name}}</span>
        </md-list-item>
      </md-list>
    </md-drawer>

    <!-- App Content -->
    <div class="md-layout-item md-size-95">
      <md-content class="md-layout md-gutter" style="background: #007998; padding: 1em;">
        <ul
          v-for="headline in headlines"
          :key="headline.id"
          class="md-layout-item md-large-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100"
        >
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
                <md-button
                  @click="addHeadlineToFeed(headline)"
                  class="md-icon-button"
                  :class="isInFeed(headline.title)"
                >
                  <md-icon>bookmark</md-icon>
                </md-button>
                <md-button @click="saveHeadline(headline)" class="md-icon-button">
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
    await store.dispatch("loadUserFeed");
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
    feed() {
      return this.$store.getters.feed;
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
    async addHeadlineToFeed(headline) {
      if (this.user) {
        await this.$store.dispatch("addHeadlineToFeed", headline);
      }
    },
    async removeHeadlineFromFeed(headline) {
      await this.$store.dispatch("removeHeadlineFromFeed", headline);
    },
    saveHeadline(headline) {
      this.$router.push(`/headlines/${headline.slug}`);
    },
    changeCountry(country) {
      this.$store.commit("setCountry", country);
    },
    logoutUser() {
      this.$store.dispatch("logoutUser");
    },
    isInFeed(title) {
      const inFeed =
        this.feed.findIndex(headline => headline.title === title) > -1;
      return inFeed ? "md-primary" : "";
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

- We need to test if it works properly.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateIndividualHeadlinePage.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/CreateIndividualHeadlinePage2.png)

### 26. Save and Display Individual Headlines 8min

- We are going to modify the `store\index.js` document to include the `saveHeadline` and `loadHeadline` actions.

> store\index.js

```js
import Vuex from "vuex";
import md5 from "md5";
import slugify from 'slugify';
import db from "~/plugins/firestore";
import { saveUserData, clearUserData } from "~/utils";

const createStore = () => {
  return new Vuex.Store({
    state: {
      headlines: [],
      headline: null,
      feed: [],
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
      setHeadline(state, headline) {
        state.headline = headline;
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
      setFeed(state, headlines) {
        state.feed = headlines;
      },
      clearToken: state => (state.token = ""),
      clearUser: state => (state.user = null),
      clearFeed: state => (state.feed = [])
    },
    actions: {
      async loadHeadlines({ commit }, apiUrl) {
        commit("setLoading", true);
        const { articles } = await this.$axios.$get(apiUrl);
        const headlines = articles.map(article => {
          const slug = slugify(article.title, {
            replacement: '-',
            remove: /[^a-zA-Z0-9 -]/g,
            lower: true
          });
          const headline = { ...article, slug };
          return headline;
        })
        commit("setLoading", false);
        commit("setHeadlines", headlines);
      },
      async addHeadlineToFeed({ state }, headline) {
        const feedRef = db
          .collection(`users/${state.user.email}/feed`)
          .doc(headline.title);

        await feedRef.set(headline);
      },
      async loadUserFeed({ state, commit }) {
        if (state.user) {
          const feedRef = db.collection(`users/${state.user.email}/feed`);

          await feedRef.onSnapshot(querySnapshot => {
            let headlines = [];
            querySnapshot.forEach(doc => {
              headlines.push(doc.data());
              commit("setFeed", headlines);
            });

            if (querySnapshot.empty) {
              headlines = [];
              commit("setFeed", headlines);
            }
          });
        }
      },
      async loadHeadline({ commit }, headlineSlug) {
        const headlineRef = db.collection('headlines').doc(headlineSlug);

        await headlineRef.get().then(doc => {
          if (doc.exists) {
            const headline = doc.data();
            commit('setHeadline', headline);
          }
        })
      },
      async saveHeadline(context, headline) {
        const headlineRef = db.collection('headlines').doc(headline.slug);

        let headlineId;
        await headlineRef.get().then(doc => {
          if (doc.exists) {
            headlineId = doc.id;
          }
        });

        if (!headlineId) {
          await headlineRef.set(headline);
        }
      },
      async removeHeadlineFromFeed({ state }, headline) {
        const headlineRef = db
          .collection(`users/${state.user.email}/feed`)
          .doc(headline.title);

        await headlineRef.delete();
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
        commit("clearFeed");
        clearUserData();
      }
    },
    getters: {
      headlines: state => state.headlines,
      headline: state => state.headline,
      feed: state => state.feed,
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

- We are going to modify the  `pages\headlines\_slug.vue` document to complete the individual `headline` page.

> pages\headlines\_slug.vue
```html
<template>
  <div class="md-layout md-alignment-center" style="margin: 5em 0">

    <!-- Headline Markup -->
    <md-card class="md-layout-item md-size-75 md-small-size-80 md-xsmall-size-100">
      <md-card-media style="height: 300px" md-ratio="16:9">
        <img :src="headline.urlToImage" :alt="headline.title">
      </md-card-media>

        <md-card-header>
          <div class="md-title">
            <a :href="headline.url" target="_blank">{{headline.title}}</a>
          </div>
          <div>
            {{headline.source.name}}
            <md-icon>book</md-icon>
          </div>
          <span class="md-subhead">
            {{headline.author}}
            <md-icon>face</md-icon>
          </span>
        </md-card-header>

        <md-card-content>{{headline.content}}</md-card-content>
    </md-card>

    <!-- Back Button -->
    <md-button class="md-fixed md-fab-bottom-right md-fab md-primary" @click="$router.go(-1)">
      <md-icon>arrow_back</md-icon>
    </md-button>
  </div>
</template>

<script>
export default {
  async fetch({ store, params }) {
    await store.dispatch("loadHeadline", params.slug);
  },
  computed: {
    headline() {
      return this.$store.getters.headline;
    }
  }
};
</script>
```

- We are going to modify the `pages\index.vue` document to modify the `saveHeadline` method to store the data in the `firebase` database so that it can be read from the individual headline page.

> pages\index.vue

```html
<template>
  <div class="md-layout md-alignment-center" style="margin: 4em 0">
    <!-- Top Navigation -->
    <md-toolbar class="fixed-toolbar" elevation="1">
      <md-button @click="showLeftSidepanel = true" class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>
      <nuxt-link class="md-primary md-title" to="/">NuxtNews</nuxt-link>

      <div class="md-toolbar-section-end">
        <template v-if="isAuthenticated">
          <md-button>
            <md-avatar>
              <img :src="user.avatar" :alt="user.email">
            </md-avatar>
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

      <!-- Default Markup (if Feed Empty) -->
      <md-empty-state
        class="md-primary"
        v-if="feed.length === 0 && !user"
        md-icon="bookmarks"
        md-label="Nothing in Feed"
        md-description="Login to bookmark headlines"
      >
        <md-button to="/login" class="md-primary md-raised">Login</md-button>
      </md-empty-state>

      <md-empty-state
        v-else-if="feed.length === 0"
        class="md-accent"
        md-icon="bookmark_outline"
        md-label="Nothing in Feed"
        md-description="Anything you bookmark will be safely stored here"
      ></md-empty-state>

      <!-- Feed Content (if Feed Not Empty) -->
      <md-list class="md-triple-line" v-else v-for="(headline, i) in feed" :key="i">
        <md-list-item>
          <md-avatar>
            <img :src="headline.urlToImage" :alt="headline.title">
          </md-avatar>

          <div class="md-list-item-text">
            <span>
              <a :href="headline.url" target="_blank">{{headline.title}}</a>
            </span>
            <span>{{headline.source.name}}</span>
            <span>View Comments</span>
          </div>

          <md-button
            @click="removeHeadlineFromFeed(headline)"
            class="md-icon-button md-list-action"
          >
            <md-icon class="md-accent">delete</md-icon>
          </md-button>
        </md-list-item>
        <md-divider class="md-inset"></md-divider>
      </md-list>
    </md-drawer>

    <!-- News Categories (Right Drawer) -->
    <md-drawer class="md-right" md-fixed :md-active.sync="showRightSidepanel">
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
          <md-icon :class="newsCategory.path === category ? 'md-primary' : ''">{{newsCategory.icon}}</md-icon>
          <span class="md-list-item-text">{{newsCategory.name}}</span>
        </md-list-item>
      </md-list>
    </md-drawer>

    <!-- App Content -->
    <div class="md-layout-item md-size-95">
      <md-content class="md-layout md-gutter" style="background: #007998; padding: 1em;">
        <ul
          v-for="headline in headlines"
          :key="headline.id"
          class="md-layout-item md-large-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100"
        >
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
                <md-button
                  @click="addHeadlineToFeed(headline)"
                  class="md-icon-button"
                  :class="isInFeed(headline.title)"
                >
                  <md-icon>bookmark</md-icon>
                </md-button>
                <md-button @click="saveHeadline(headline)" class="md-icon-button">
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
    await store.dispatch("loadUserFeed");
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
    feed() {
      return this.$store.getters.feed;
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
    async addHeadlineToFeed(headline) {
      if (this.user) {
        await this.$store.dispatch("addHeadlineToFeed", headline);
      }
    },
    async removeHeadlineFromFeed(headline) {
      await this.$store.dispatch("removeHeadlineFromFeed", headline);
    },
    async saveHeadline(headline) {
      await this.$store.dispatch("saveHeadline", headline).then(() => {
        this.$router.push(`/headlines/${headline.slug}`);
      });
    },
    changeCountry(country) {
      this.$store.commit("setCountry", country);
    },
    logoutUser() {
      this.$store.dispatch("logoutUser");
    },
    isInFeed(title) {
      const inFeed =
        this.feed.findIndex(headline => headline.title === title) > -1;
      return inFeed ? "md-primary" : "";
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

- We need to test it.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SaveAndDisplayIndividualHeadlines.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SaveAndDisplayIndividualHeadlines2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SaveAndDisplayIndividualHeadlines3.png)

## Section 10: Sending and Liking User Comments 0 / 3|18min

### 27. Add Ability to Send Comments 7min

- We are going to modify the `store\index.js` document to add the `sendComment` action.

> store\index.js

```js
import Vuex from "vuex";
import md5 from "md5";
import slugify from 'slugify';
import db from "~/plugins/firestore";
import { saveUserData, clearUserData } from "~/utils";

const createStore = () => {
  return new Vuex.Store({
    state: {
      headlines: [],
      headline: null,
      feed: [],
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
      setHeadline(state, headline) {
        state.headline = headline;
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
      setFeed(state, headlines) {
        state.feed = headlines;
      },
      clearToken: state => (state.token = ""),
      clearUser: state => (state.user = null),
      clearFeed: state => (state.feed = [])
    },
    actions: {
      async loadHeadlines({ commit }, apiUrl) {
        commit("setLoading", true);
        const { articles } = await this.$axios.$get(apiUrl);
        const headlines = articles.map(article => {
          const slug = slugify(article.title, {
            replacement: '-',
            remove: /[^a-zA-Z0-9 -]/g,
            lower: true
          });
          const headline = { ...article, slug };
          return headline;
        })
        commit("setLoading", false);
        commit("setHeadlines", headlines);
      },
      async addHeadlineToFeed({ state }, headline) {
        const feedRef = db
          .collection(`users/${state.user.email}/feed`)
          .doc(headline.title);

        await feedRef.set(headline);
      },
      async loadUserFeed({ state, commit }) {
        if (state.user) {
          const feedRef = db.collection(`users/${state.user.email}/feed`);

          await feedRef.onSnapshot(querySnapshot => {
            let headlines = [];
            querySnapshot.forEach(doc => {
              headlines.push(doc.data());
              commit("setFeed", headlines);
            });

            if (querySnapshot.empty) {
              headlines = [];
              commit("setFeed", headlines);
            }
          });
        }
      },
      async loadHeadline({ commit }, headlineSlug) {
        const headlineRef = db.collection('headlines').doc(headlineSlug);

        await headlineRef.get().then(doc => {
          if (doc.exists) {
            const headline = doc.data();
            commit('setHeadline', headline);
          }
        })
      },
      async sendComment({ state, commit }, comment) {
        const commentsRef = db.collection(`headlines/${state.headline.slug}/comments`);

        commit('setLoading', true);
        await commentsRef.doc(comment.id).set(comment);
        await commentsRef.get().then(querySnapshot => {
          let comments = [];
          querySnapshot.forEach(doc => {
            comments.push(doc.data());
            const updatedHeadline = { ...state.headline, comments };
            commit('setHeadline', updatedHeadline);
          })
        });
        commit('setLoading', false);
      },
      async saveHeadline(context, headline) {
        const headlineRef = db.collection('headlines').doc(headline.slug);

        let headlineId;
        await headlineRef.get().then(doc => {
          if (doc.exists) {
            headlineId = doc.id;
          }
        });

        if (!headlineId) {
          await headlineRef.set(headline);
        }
      },
      async removeHeadlineFromFeed({ state }, headline) {
        const headlineRef = db
          .collection(`users/${state.user.email}/feed`)
          .doc(headline.title);

        await headlineRef.delete();
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
        commit("clearFeed");
        clearUserData();
      }
    },
    getters: {
      headlines: state => state.headlines,
      headline: state => state.headline,
      feed: state => state.feed,
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
- We need to install the [uuid](https://www.npmjs.com/package/uuid) package that is used to generate [RFC4122](https://www.ietf.org/rfc/rfc4122.txt) UUIDS 


```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/nuxt-news (master)
$ npm i uuid
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.0.7 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.0.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\watchpack\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\nodemon\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ uuid@3.3.2
updated 1 package and audited 14310 packages in 32.836s
found 0 vulnerabilities
```
- We are going to modify the  `pages\headlines\_slug.vue` document to create a form where the user can put comments about the `headline`.
> pages\headlines\_slug.vue
```html
<template>
  <div class="md-layout md-alignment-center" style="margin: 5em 0">
    <div class="md-layout-item md-size-75 md-small-size-80 md-xsmall-size-100">
      <!-- Headline Markup -->
      <md-card>
        <md-card-media style="height: 300px" md-ratio="16:9">
          <img :src="headline.urlToImage" :alt="headline.title">
      </md-card-media>

          <md-card-header>
            <div class="md-title">
              <a :href="headline.url" target="_blank">{{headline.title}}</a>
            </div>
            <div>
              {{headline.source.name}}
              <md-icon>book</md-icon>
            </div>
            <span class="md-subhead">
              {{headline.author}}
              <md-icon>face</md-icon>
            </span>
          </md-card-header>

          <md-card-content>{{headline.content}}</md-card-content>
      </md-card>

      <!-- Comment Form -->
      <form @submit.prevent="sendComment">
        <md-field>
          <label>Enter your comment</label>
          <md-textarea v-model="text" :disabled="loading || !user"></md-textarea>
          <md-icon>description</md-icon>
        </md-field>
        <md-button class="md-primary md-raised" type="submit" :disabled="loading || !user">Send Comment</md-button>
      </form>

      <!-- Back Button -->
      <md-button class="md-fixed md-fab-bottom-right md-fab md-primary" @click="$router.go(-1)">
        <md-icon>arrow_back</md-icon>
      </md-button>
    </div>
  </div>
</template>

<script>
import uuidv4 from 'uuid/v4';

export default {
  data: () => ({
    text: ""
  }),
  async fetch({ store, params }) {
    await store.dispatch("loadHeadline", params.slug);
  },
  computed: {
    headline() {
      return this.$store.getters.headline;
    },
    loading() {
      return this.$store.getters.loading;
    },
    user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    async sendComment() {
      const comment = {
        id: uuidv4(),
        text: this.text,
        user: this.getCommentUserData(),
        publishedAt: Date.now(),
        likes: 0
      };
      await this.$store.dispatch('sendComment', comment);
      this.text = '';
    },
    getCommentUserData() {
      const commentUserData = { ...this.user };
      commentUserData['username'] = commentUserData['email'].split('@')[0];
      return commentUserData;
    }
  }
};
</script>
```
- We need to test it to ensure it works properly.

- We need to login to be able to send comments.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddAbilityToSendComments.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddAbilityToSendComments2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddAbilityToSendComments3.png)

### 28. Fetch Comments with Headline, Display Comments 5min

- We are going to modify the `store\index.js` document to modify the `loadHeadline` action to include the comments related to it.

> store\index.js

```js
import Vuex from "vuex";
import md5 from "md5";
import slugify from 'slugify';
import db from "~/plugins/firestore";
import { saveUserData, clearUserData } from "~/utils";

const createStore = () => {
  return new Vuex.Store({
    state: {
      headlines: [],
      headline: null,
      feed: [],
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
      setHeadline(state, headline) {
        state.headline = headline;
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
      setFeed(state, headlines) {
        state.feed = headlines;
      },
      clearToken: state => (state.token = ""),
      clearUser: state => (state.user = null),
      clearFeed: state => (state.feed = [])
    },
    actions: {
      async loadHeadlines({ commit }, apiUrl) {
        commit("setLoading", true);
        const { articles } = await this.$axios.$get(apiUrl);
        const headlines = articles.map(article => {
          const slug = slugify(article.title, {
            replacement: '-',
            remove: /[^a-zA-Z0-9 -]/g,
            lower: true
          });
          const headline = { ...article, slug };
          return headline;
        })
        commit("setLoading", false);
        commit("setHeadlines", headlines);
      },
      async addHeadlineToFeed({ state }, headline) {
        const feedRef = db
          .collection(`users/${state.user.email}/feed`)
          .doc(headline.title);

        await feedRef.set(headline);
      },
      async loadUserFeed({ state, commit }) {
        if (state.user) {
          const feedRef = db.collection(`users/${state.user.email}/feed`);

          await feedRef.onSnapshot(querySnapshot => {
            let headlines = [];
            querySnapshot.forEach(doc => {
              headlines.push(doc.data());
              commit("setFeed", headlines);
            });

            if (querySnapshot.empty) {
              headlines = [];
              commit("setFeed", headlines);
            }
          });
        }
      },
      async loadHeadline({ commit }, headlineSlug) {
        const headlineRef = db.collection('headlines').doc(headlineSlug);
        const commentsRef = db.collection(`headlines/${headlineSlug}/comments`);

        let loadedHeadline = {};
        await headlineRef.get().then(async doc => {
          if (doc.exists) {
            loadedHeadline = doc.data();

            await commentsRef.get().then(querySnapshot => {
              if (querySnapshot.empty) {
                commit('setHeadline', loadedHeadline);
              }
              let loadedComments = [];
              querySnapshot.forEach(doc => {
                loadedComments.push(doc.data());
                loadedHeadline['comments'] = loadedComments;
                commit('setHeadline', loadedHeadline);
              });
            })
          }
        })
      },
      async sendComment({ state, commit }, comment) {
        const commentsRef = db.collection(`headlines/${state.headline.slug}/comments`);

        commit('setLoading', true);
        await commentsRef.doc(comment.id).set(comment);
        await commentsRef.get().then(querySnapshot => {
          let comments = [];
          querySnapshot.forEach(doc => {
            comments.push(doc.data());
            const updatedHeadline = { ...state.headline, comments };
            commit('setHeadline', updatedHeadline);
          })
        });
        commit('setLoading', false);
      },
      async saveHeadline(context, headline) {
        const headlineRef = db.collection('headlines').doc(headline.slug);

        let headlineId;
        await headlineRef.get().then(doc => {
          if (doc.exists) {
            headlineId = doc.id;
          }
        });

        if (!headlineId) {
          await headlineRef.set(headline);
        }
      },
      async removeHeadlineFromFeed({ state }, headline) {
        const headlineRef = db
          .collection(`users/${state.user.email}/feed`)
          .doc(headline.title);

        await headlineRef.delete();
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
        commit("clearFeed");
        clearUserData();
      }
    },
    getters: {
      headlines: state => state.headlines,
      headline: state => state.headline,
      feed: state => state.feed,
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

- We are going to modify the  `pages\headlines\_slug.vue` document to put the comments sent by the users.

> pages\headlines\_slug.vue
```html
<template>
  <div class="md-layout md-alignment-center" style="margin: 5em 0">
    <div class="md-layout-item md-size-75 md-small-size-80 md-xsmall-size-100">
      <!-- Headline Markup -->
      <md-card>
        <md-card-media style="height: 300px" md-ratio="16:9">
          <img :src="headline.urlToImage" :alt="headline.title">
      </md-card-media>

          <md-card-header>
            <div class="md-title">
              <a :href="headline.url" target="_blank">{{headline.title}}</a>
            </div>
            <div>
              {{headline.source.name}}
              <md-icon>book</md-icon>
            </div>
            <span class="md-subhead">
              {{headline.author}}
              <md-icon>face</md-icon>
            </span>
          </md-card-header>

          <md-card-content>{{headline.content}}</md-card-content>
      </md-card>

      <!-- Comment Form -->
      <form @submit.prevent="sendComment">
        <md-field>
          <label>Enter your comment</label>
          <md-textarea v-model="text" :disabled="loading || !user"></md-textarea>
          <md-icon>description</md-icon>
        </md-field>
        <md-button class="md-primary md-raised" type="submit" :disabled="loading || !user">Send Comment</md-button>
      </form>

      <!-- Comments -->
      <md-list class="md-triple-line" style="margin-top: 1em">
        <md-list-item v-for="comment in headline.comments" :key="comment.id">
          <md-avatar><img :src="comment.user.avatar" :alt="comment.user.username"></md-avatar>
            <div class="md-list-item-text">
              <span>{{comment.user.username}}</span>
              <span>{{comment.publishedAt}}</span>
              <p>{{comment.text}}</p>
            </div>

            <md-badge class="md-primary" md-position="bottom" :md-content="comment.likes" />
            <md-button class="md-icon-button" :disabled="loading || !user">
              <md-icon>thumb_up</md-icon>
            </md-button>
        </md-list-item>
      </md-list>

      <!-- Back Button -->
      <md-button class="md-fixed md-fab-bottom-right md-fab md-primary" @click="$router.go(-1)">
        <md-icon>arrow_back</md-icon>
      </md-button>
    </div>
  </div>
</template>

<script>
import uuidv4 from "uuid/v4";

export default {
  data: () => ({
    text: ""
  }),
  async fetch({ store, params }) {
    await store.dispatch("loadHeadline", params.slug);
  },
  computed: {
    headline() {
      return this.$store.getters.headline;
    },
    loading() {
      return this.$store.getters.loading;
    },
    user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    async sendComment() {
      const comment = {
        id: uuidv4(),
        text: this.text,
        user: this.getCommentUserData(),
        publishedAt: Date.now(),
        likes: 0
      };
      await this.$store.dispatch("sendComment", comment);
      this.text = "";
    },
    getCommentUserData() {
      const commentUserData = { ...this.user };
      commentUserData["username"] = commentUserData["email"].split("@")[0];
      return commentUserData;
    }
  }
};
</script>
```

- We need to test if it works.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/FetchCommentsWithHeadline.png)

### 29. Like Comments and Order Comments by Like Count 6min

- We are going to modify the `store\index.js` document to create the `likeComment` action.

> store\index.js

```js
import Vuex from "vuex";
import md5 from "md5";
import slugify from 'slugify';
import db from "~/plugins/firestore";
import { saveUserData, clearUserData } from "~/utils";

const createStore = () => {
  return new Vuex.Store({
    state: {
      headlines: [],
      headline: null,
      feed: [],
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
      setHeadline(state, headline) {
        state.headline = headline;
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
      setFeed(state, headlines) {
        state.feed = headlines;
      },
      clearToken: state => (state.token = ""),
      clearUser: state => (state.user = null),
      clearFeed: state => (state.feed = [])
    },
    actions: {
      async loadHeadlines({ commit }, apiUrl) {
        commit("setLoading", true);
        const { articles } = await this.$axios.$get(apiUrl);
        const headlines = articles.map(article => {
          const slug = slugify(article.title, {
            replacement: '-',
            remove: /[^a-zA-Z0-9 -]/g,
            lower: true
          });
          const headline = { ...article, slug };
          return headline;
        })
        commit("setLoading", false);
        commit("setHeadlines", headlines);
      },
      async addHeadlineToFeed({ state }, headline) {
        const feedRef = db
          .collection(`users/${state.user.email}/feed`)
          .doc(headline.title);

        await feedRef.set(headline);
      },
      async loadUserFeed({ state, commit }) {
        if (state.user) {
          const feedRef = db.collection(`users/${state.user.email}/feed`);

          await feedRef.onSnapshot(querySnapshot => {
            let headlines = [];
            querySnapshot.forEach(doc => {
              headlines.push(doc.data());
              commit("setFeed", headlines);
            });

            if (querySnapshot.empty) {
              headlines = [];
              commit("setFeed", headlines);
            }
          });
        }
      },
      async loadHeadline({ commit }, headlineSlug) {
        const headlineRef = db.collection('headlines').doc(headlineSlug);
        const commentsRef = db.collection(`headlines/${headlineSlug}/comments`).orderBy('likes', 'desc');

        let loadedHeadline = {};
        await headlineRef.get().then(async doc => {
          if (doc.exists) {
            loadedHeadline = doc.data();

            await commentsRef.get().then(querySnapshot => {
              if (querySnapshot.empty) {
                commit('setHeadline', loadedHeadline);
              }
              let loadedComments = [];
              querySnapshot.forEach(doc => {
                loadedComments.push(doc.data());
                loadedHeadline['comments'] = loadedComments;
                commit('setHeadline', loadedHeadline);
              });
            })
          }
        })
      },
      async sendComment({ state, commit }, comment) {
        const commentsRef = db.collection(`headlines/${state.headline.slug}/comments`);

        commit('setLoading', true);
        await commentsRef.doc(comment.id).set(comment);
        await commentsRef.orderBy('likes', 'desc').get().then(querySnapshot => {
          let comments = [];
          querySnapshot.forEach(doc => {
            comments.push(doc.data());
            const updatedHeadline = { ...state.headline, comments };
            commit('setHeadline', updatedHeadline);
          })
        });
        commit('setLoading', false);
      },
      async likeComment({ state, commit }, commentId) {
        const commentsRef = db.collection(`headlines/${state.headline.slug}/comments`).orderBy('likes', 'desc');
        const likedCommentRef = db.collection('headlines').doc(state.headline.slug).collection('comments').doc(commentId);

        await likedCommentRef.get().then(doc => {
          if (doc.exists) {
            const prevLikes = doc.data().likes;
            const currentLikes = prevLikes + 1;
            likedCommentRef.update({
              likes: currentLikes
            });
          }
        });

        await commentsRef.onSnapshot(querySnapshot => {
          let loadedComments = [];
          querySnapshot.forEach(doc => {
            loadedComments.push(doc.data());
            const updatedHeadline = {
              ...state.headline,
              comments: loadedComments
            };
            commit('setHeadline', updatedHeadline);
          })
        })
      },
      async saveHeadline(context, headline) {
        const headlineRef = db.collection('headlines').doc(headline.slug);

        let headlineId;
        await headlineRef.get().then(doc => {
          if (doc.exists) {
            headlineId = doc.id;
          }
        });

        if (!headlineId) {
          await headlineRef.set(headline);
        }
      },
      async removeHeadlineFromFeed({ state }, headline) {
        const headlineRef = db
          .collection(`users/${state.user.email}/feed`)
          .doc(headline.title);

        await headlineRef.delete();
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
        commit("clearFeed");
        clearUserData();
      }
    },
    getters: {
      headlines: state => state.headlines,
      headline: state => state.headline,
      feed: state => state.feed,
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

- We are going to modify the  `pages\headlines\_slug.vue` document to create the `likeComment` method.

> pages\headlines\_slug.vue
```html
<template>
  <div class="md-layout md-alignment-center" style="margin: 5em 0">
    <div class="md-layout-item md-size-75 md-small-size-80 md-xsmall-size-100">
      <!-- Headline Markup -->
      <md-card>
        <md-card-media style="height: 300px" md-ratio="16:9">
          <img :src="headline.urlToImage" :alt="headline.title">
      </md-card-media>

          <md-card-header>
            <div class="md-title">
              <a :href="headline.url" target="_blank">{{headline.title}}</a>
            </div>
            <div>
              {{headline.source.name}}
              <md-icon>book</md-icon>
            </div>
            <span class="md-subhead" v-if="headline.author">
              {{headline.author}}
              <md-icon>face</md-icon>
            </span>
          </md-card-header>

          <md-card-content>{{headline.content}}</md-card-content>
      </md-card>

      <!-- Comment Form -->
      <form @submit.prevent="sendComment">
        <md-field>
          <label>Enter your comment</label>
          <md-textarea v-model="text" :disabled="loading || !user"></md-textarea>
          <md-icon>description</md-icon>
        </md-field>
        <md-button class="md-primary md-raised" type="submit" :disabled="loading || !user">Send Comment</md-button>
      </form>

      <!-- Comments -->
      <md-list class="md-triple-line" style="margin-top: 1em">
        <md-list-item v-for="comment in headline.comments" :key="comment.id">
          <md-avatar><img :src="comment.user.avatar" :alt="comment.user.username"></md-avatar>
            <div class="md-list-item-text">
              <span>{{comment.user.username}}</span>
              <span>{{comment.publishedAt}}</span>
              <p>{{comment.text}}</p>
            </div>

            <md-badge class="md-primary" md-position="bottom" :md-content="comment.likes" />
            <md-button @click="likeComment(comment.id)" class="md-icon-button" :disabled="loading || !user">
              <md-icon>thumb_up</md-icon>
            </md-button>
        </md-list-item>
      </md-list>

      <!-- Back Button -->
      <md-button class="md-fixed md-fab-bottom-right md-fab md-primary" @click="$router.go(-1)">
        <md-icon>arrow_back</md-icon>
      </md-button>
    </div>
  </div>
</template>

<script>
import uuidv4 from "uuid/v4";

export default {
  data: () => ({
    text: ""
  }),
  async fetch({ store, params }) {
    await store.dispatch("loadHeadline", params.slug);
  },
  computed: {
    headline() {
      return this.$store.getters.headline;
    },
    loading() {
      return this.$store.getters.loading;
    },
    user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    async sendComment() {
      const comment = {
        id: uuidv4(),
        text: this.text,
        user: this.getCommentUserData(),
        publishedAt: Date.now(),
        likes: 0
      };
      await this.$store.dispatch("sendComment", comment);
      this.text = "";
    },
    async likeComment(commentId) {
      await this.$store.dispatch('likeComment', commentId);
    },
    getCommentUserData() {
      const commentUserData = { ...this.user };
      commentUserData["username"] = commentUserData["email"].split("@")[0];
      return commentUserData;
    }
  }
};
</script>
```

- We need to test if it works.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/LikeCommentsAndOrderCommentsByLikeCount.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/LikeCommentsAndOrderCommentsByLikeCount2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/LikeCommentsAndOrderCommentsByLikeCount3.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/LikeCommentsAndOrderCommentsByLikeCount4.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/LikeCommentsAndOrderCommentsByLikeCount5.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/LikeCommentsAndOrderCommentsByLikeCount6.png)

## Section 11: Querying Headlines by Search Terms, Date and Criteria 0 / 2|10min

### 30. Get Headlines by News Source 3min

- We are going to show all the [Top headlines](https://newsapi.org/docs/endpoints/top-headlines) related to a news `source`, using the specific endpoint developed by `News API`.

- We are going to modify the `store\index.js` document to create the `setSource` mutation.

> store\index.js

```js
import Vuex from "vuex";
import md5 from "md5";
import slugify from 'slugify';
import db from "~/plugins/firestore";
import { saveUserData, clearUserData } from "~/utils";

const createStore = () => {
  return new Vuex.Store({
    state: {
      headlines: [],
      headline: null,
      feed: [],
      loading: false,
      token: "",
      user: null,
      category: "",
      country: "us",
      source: ''
    },
    mutations: {
      setHeadlines(state, headlines) {
        state.headlines = headlines;
      },
      setHeadline(state, headline) {
        state.headline = headline;
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
      setSource(state, source) {
        state.source = source;
      },
      setFeed(state, headlines) {
        state.feed = headlines;
      },
      clearToken: state => (state.token = ""),
      clearUser: state => (state.user = null),
      clearFeed: state => (state.feed = [])
    },
    actions: {
      async loadHeadlines({ commit }, apiUrl) {
        commit("setLoading", true);
        const { articles } = await this.$axios.$get(apiUrl);
        const headlines = articles.map(article => {
          const slug = slugify(article.title, {
            replacement: '-',
            remove: /[^a-zA-Z0-9 -]/g,
            lower: true
          });
          const headline = { ...article, slug };
          return headline;
        })
        commit("setLoading", false);
        commit("setHeadlines", headlines);
      },
      async addHeadlineToFeed({ state }, headline) {
        const feedRef = db
          .collection(`users/${state.user.email}/feed`)
          .doc(headline.title);

        await feedRef.set(headline);
      },
      async loadUserFeed({ state, commit }) {
        if (state.user) {
          const feedRef = db.collection(`users/${state.user.email}/feed`);

          await feedRef.onSnapshot(querySnapshot => {
            let headlines = [];
            querySnapshot.forEach(doc => {
              headlines.push(doc.data());
              commit("setFeed", headlines);
            });

            if (querySnapshot.empty) {
              headlines = [];
              commit("setFeed", headlines);
            }
          });
        }
      },
      async loadHeadline({ commit }, headlineSlug) {
        const headlineRef = db.collection('headlines').doc(headlineSlug);
        const commentsRef = db.collection(`headlines/${headlineSlug}/comments`).orderBy('likes', 'desc');

        let loadedHeadline = {};
        await headlineRef.get().then(async doc => {
          if (doc.exists) {
            loadedHeadline = doc.data();

            await commentsRef.get().then(querySnapshot => {
              if (querySnapshot.empty) {
                commit('setHeadline', loadedHeadline);
              }
              let loadedComments = [];
              querySnapshot.forEach(doc => {
                loadedComments.push(doc.data());
                loadedHeadline['comments'] = loadedComments;
                commit('setHeadline', loadedHeadline);
              });
            })
          }
        })
      },
      async sendComment({ state, commit }, comment) {
        const commentsRef = db.collection(`headlines/${state.headline.slug}/comments`);

        commit('setLoading', true);
        await commentsRef.doc(comment.id).set(comment);
        await commentsRef.orderBy('likes', 'desc').get().then(querySnapshot => {
          let comments = [];
          querySnapshot.forEach(doc => {
            comments.push(doc.data());
            const updatedHeadline = { ...state.headline, comments };
            commit('setHeadline', updatedHeadline);
          })
        });
        commit('setLoading', false);
      },
      async likeComment({ state, commit }, commentId) {
        const commentsRef = db.collection(`headlines/${state.headline.slug}/comments`).orderBy('likes', 'desc');
        const likedCommentRef = db.collection('headlines').doc(state.headline.slug).collection('comments').doc(commentId);

        await likedCommentRef.get().then(doc => {
          if (doc.exists) {
            const prevLikes = doc.data().likes;
            const currentLikes = prevLikes + 1;
            likedCommentRef.update({
              likes: currentLikes
            });
          }
        });

        await commentsRef.onSnapshot(querySnapshot => {
          let loadedComments = [];
          querySnapshot.forEach(doc => {
            loadedComments.push(doc.data());
            const updatedHeadline = {
              ...state.headline,
              comments: loadedComments
            };
            commit('setHeadline', updatedHeadline);
          })
        })
      },
      async saveHeadline(context, headline) {
        const headlineRef = db.collection('headlines').doc(headline.slug);

        let headlineId;
        await headlineRef.get().then(doc => {
          if (doc.exists) {
            headlineId = doc.id;
          }
        });

        if (!headlineId) {
          await headlineRef.set(headline);
        }
      },
      async removeHeadlineFromFeed({ state }, headline) {
        const headlineRef = db
          .collection(`users/${state.user.email}/feed`)
          .doc(headline.title);

        await headlineRef.delete();
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
        commit("clearFeed");
        clearUserData();
      }
    },
    getters: {
      headlines: state => state.headlines,
      headline: state => state.headline,
      feed: state => state.feed,
      loading: state => state.loading,
      user: state => state.user,
      isAuthenticated: state => !!state.token,
      category: state => state.category,
      country: state => state.country,
      source: state => state.source
    }
  });
};

export default createStore;
```

- We are going to modify the  `pages\pages\index.vue` document to create the `loadSource` method.

> pages\pages\index.vue
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

      <!-- Default Markup (if Feed Empty) -->
      <md-empty-state class="md-primary" v-if="feed.length === 0 && !user" md-icon="bookmarks" md-label="Nothing in Feed" md-description="Login to bookmark headlines">
        <md-button to='/login' class="md-primary md-raised">Login</md-button>
      </md-empty-state>

      <md-empty-state v-else-if="feed.length === 0" class="md-accent" md-icon="bookmark_outline" md-label="Nothing in Feed" md-description="Anything you bookmark will be safely stored here"></md-empty-state>

      <!-- Feed Content (if Feed Not Empty) -->
      <md-list class="md-triple-line" v-else v-for="(headline, i) in feed" :key="i">
        <md-list-item>
          <md-avatar><img :src="headline.urlToImage" :alt="headline.title"></md-avatar>

            <div class="md-list-item-text">
              <span><a :href="headline.url" target="_blank">{{headline.title}}</a></span>
              <span>{{headline.source.name}}</span>
              <span>View Comments</span>
            </div>

            <md-button @click="removeHeadlineFromFeed(headline)" class="md-icon-button md-list-action">
              <md-icon class="md-accent">delete</md-icon>
            </md-button>
        </md-list-item>
        <md-divider class="md-inset"></md-divider>
      </md-list>
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
                  <div @click="loadSource(headline.source.id)">
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
                  <md-button @click="addHeadlineToFeed(headline)" class="md-icon-button" :class="isInFeed(headline.title)">
                    <md-icon>bookmark</md-icon>
                  </md-button>
                  <md-button @click="saveHeadline(headline)" class="md-icon-button">
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
    await store.dispatch("loadUserFeed");
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
    feed() {
      return this.$store.getters.feed;
    },
    category() {
      return this.$store.getters.category;
    },
    country() {
      return this.$store.getters.country;
    },
    source() {
      return this.$store.getters.source;
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
    async loadSource(sourceId) {
      if (sourceId) {
        this.$store.commit('setSource', sourceId);
        await this.$store.dispatch('loadHeadlines', `/api/top-headlines?sources=${this.source}`);
      }
    },
    async addHeadlineToFeed(headline) {
      if (this.user) {
        await this.$store.dispatch("addHeadlineToFeed", headline);
      }
    },
    async removeHeadlineFromFeed(headline) {
      await this.$store.dispatch("removeHeadlineFromFeed", headline);
    },
    async saveHeadline(headline) {
      await this.$store.dispatch("saveHeadline", headline).then(() => {
        this.$router.push(`/headlines/${headline.slug}`);
      });
    },
    changeCountry(country) {
      this.$store.commit("setCountry", country);
    },
    logoutUser() {
      this.$store.dispatch("logoutUser");
    },
    isInFeed(title) {
      const inFeed =
        this.feed.findIndex(headline => headline.title === title) > -1;
      return inFeed ? "md-primary" : "";
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

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/GetHeadlinesByNewsSource.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/GetHeadlinesByNewsSource2.png)

### 31. Query Headlines by Search Terms, Date, and Criteria 7min

- We are going to use the [News API Everything](https://newsapi.org/docs/endpoints/everything) endpoint to Query Headlines by Search Terms, Date, and Criteria.

- We are going to modify the  `pages\pages\index.vue` document to create the `searchHeadlines` method and the form to enter the seaching criteria.

> pages\pages\index.vue
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
        <md-button class="md-primary" @click="showSearchDialog = true">Search</md-button>
        <md-button class="md-accent" @click="showRightSidepanel = true">Categories</md-button>
      </div>
    </md-toolbar>

    <!-- Search Dialog -->
    <md-dialog :md-active.sync="showSearchDialog">
      <md-dialog-title>Search Headlines</md-dialog-title>

      <div class="md-layout" style="padding: 1em">
        <md-field>
          <label>Search Term(s)</label>
          <md-input v-model="query" placeholder="Use quotes for exact matches, AND / OR / NOT for multiple terms" maxlength="30"></md-input>
        </md-field>
        <md-datepicker v-model="fromDate" md-immediately><label>Select starting date (optional)</label></md-datepicker>
        <md-datepicker v-model="toDate" md-immediately><label>Select ending date (optional)</label></md-datepicker>
        <md-field>
          <label for="sortBy">Sort search results by criteria (optional)</label>
          <md-select v-model="sortBy" name="sortBy" id="sortBy" md-dense>
            <md-option value="publishedAt">Newest (default)</md-option>
            <md-option value="relevancy">Relevant</md-option>
            <md-option value="popularity">Popular</md-option>
          </md-select>
        </md-field>
      </div>

      <md-dialog-actions>
        <md-button class="md-accent" @click="showSearchDialog = false">Cancel</md-button>
        <md-button class="md-primary" @click="searchHeadlines">Search</md-button>
      </md-dialog-actions>
    </md-dialog>

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

      <!-- Default Markup (if Feed Empty) -->
      <md-empty-state class="md-primary" v-if="feed.length === 0 && !user" md-icon="bookmarks" md-label="Nothing in Feed" md-description="Login to bookmark headlines">
        <md-button to='/login' class="md-primary md-raised">Login</md-button>
      </md-empty-state>

      <md-empty-state v-else-if="feed.length === 0" class="md-accent" md-icon="bookmark_outline" md-label="Nothing in Feed" md-description="Anything you bookmark will be safely stored here"></md-empty-state>

      <!-- Feed Content (if Feed Not Empty) -->
      <md-list class="md-triple-line" v-else v-for="(headline, i) in feed" :key="i">
        <md-list-item>
          <md-avatar><img :src="headline.urlToImage" :alt="headline.title"></md-avatar>

            <div class="md-list-item-text">
              <span><a :href="headline.url" target="_blank">{{headline.title}}</a></span>
              <span>{{headline.source.name}}</span>
              <span>View Comments</span>
            </div>

            <md-button @click="removeHeadlineFromFeed(headline)" class="md-icon-button md-list-action">
              <md-icon class="md-accent">delete</md-icon>
            </md-button>
        </md-list-item>
        <md-divider class="md-inset"></md-divider>
      </md-list>
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
                  <div @click="loadSource(headline.source.id)">
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
                  <md-button @click="addHeadlineToFeed(headline)" class="md-icon-button" :class="isInFeed(headline.title)">
                    <md-icon>bookmark</md-icon>
                  </md-button>
                  <md-button @click="saveHeadline(headline)" class="md-icon-button">
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
    showSearchDialog: false,
    newsCategories: [
      { name: "Top Headlines", path: "", icon: "today" },
      { name: "Technology", path: "technology", icon: "keyboard" },
      { name: "Business", path: "business", icon: "business_center" },
      { name: "Entertainment", path: "entertainment", icon: "weekend" },
      { name: "Health", path: "health", icon: "fastfood" },
      { name: "Science", path: "science", icon: "fingerprint" },
      { name: "Sports", path: "sports", icon: "golf_course" }
    ],
    query: '',
    fromDate: '',
    toDate: '',
    sortBy: ''
  }),
  async fetch({ store }) {
    await store.dispatch(
      "loadHeadlines",
      `/api/top-headlines?country=${store.state.country}&category=${
        store.state.category
      }`
    );
    await store.dispatch("loadUserFeed");
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
    feed() {
      return this.$store.getters.feed;
    },
    category() {
      return this.$store.getters.category;
    },
    country() {
      return this.$store.getters.country;
    },
    source() {
      return this.$store.getters.source;
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
    async loadSource(sourceId) {
      if (sourceId) {
        this.$store.commit('setSource', sourceId);
        await this.$store.dispatch('loadHeadlines', `/api/top-headlines?sources=${this.source}`);
      }
    },
    async searchHeadlines() {
      await this.$store.dispatch('loadHeadlines', `/api/everything?q=${this.query}&from=${this.dateToISOString(this.fromDate)}&to=${this.dateToISOString(this.toDate)}&sortBy=${this.sortBy}`);
      this.showSearchDialog = false;
    },
    async addHeadlineToFeed(headline) {
      if (this.user) {
        await this.$store.dispatch("addHeadlineToFeed", headline);
      }
    },
    async removeHeadlineFromFeed(headline) {
      await this.$store.dispatch("removeHeadlineFromFeed", headline);
    },
    async saveHeadline(headline) {
      await this.$store.dispatch("saveHeadline", headline).then(() => {
        this.$router.push(`/headlines/${headline.slug}`);
      });
    },
    changeCountry(country) {
      this.$store.commit("setCountry", country);
    },
    logoutUser() {
      this.$store.dispatch("logoutUser");
    },
    isInFeed(title) {
      const inFeed =
        this.feed.findIndex(headline => headline.title === title) > -1;
      return inFeed ? "md-primary" : "";
    },
    dateToISOString(date) {
      if (date) {
        return new Date(date).toISOString();
      }
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

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/QueryHeadlinesBySearchTerms.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/QueryHeadlinesBySearchTerms2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/QueryHeadlinesBySearchTerms3.png)

- The error is because with the free News API version we can Search articles up to a month old.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/QueryHeadlinesBySearchTerms4.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/QueryHeadlinesBySearchTerms5.png)

## Section 12: Time Formatting and Page Transitions 0 / 3|10min

### 32. Use Date-Fns and Vue Filters to Format Headline / Comment Dates 4min
- We are to to install the [date-fns](https://www.npmjs.com/package/date-fns) package that  provides the most comprehensive, yet simple and consistent toolset for manipulating JavaScript dates.

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/nuxt-news (master)$ npm i date-fns
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.0.7 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.0.7: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\watchpack\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\nodemon\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ date-fns@1.30.1
added 1 package from 1 contributor and audited 14311 packages in 44.61s
found 0 vulnerabilities
```

- We are going to create the `plugins\time-filters.js` document to create the `publishedTimeToNow` and `commentTimeToNow` Vue filters.

> plugins\time-filters.js
```js
import Vue from "vue";
import { distanceInWordsToNow } from "date-fns";

Vue.filter("publishedTimeToNow", time => {
  return `${distanceInWordsToNow(time)} ago`;
});

Vue.filter("commentTimeToNow", timestamp => {
  const timeElapsed = distanceInWordsToNow(timestamp, {
    includeSeconds: true
  });
  return `${timeElapsed} ago`;
});

```

- We need to modify the `nuxt.config.js` document to include the `time-filters` plugin.

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
  loading: { color: "#9ccc65" },
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
    { src: "~/plugins/firestore" },
    { src: "~/plugins/time-filters" }
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

- We are also going to modify the  `pages\headlines\_slug.vue` document to use the `commentTimeToNow` filter.

> pages\headlines\_slug.vue
```html
<template>
  <div class="md-layout md-alignment-center" style="margin: 5em 0">
    <div class="md-layout-item md-size-75 md-small-size-80 md-xsmall-size-100">
      <!-- Headline Markup -->
      <md-card>
        <md-card-media style="height: 300px" md-ratio="16:9">
          <img :src="headline.urlToImage" :alt="headline.title">
      </md-card-media>

          <md-card-header>
            <div class="md-title">
              <a :href="headline.url" target="_blank">{{headline.title}}</a>
            </div>
            <div>
              {{headline.source.name}}
              <md-icon>book</md-icon>
            </div>
            <span class="md-subhead" v-if="headline.author">
              {{headline.author}}
              <md-icon>face</md-icon>
            </span>
          </md-card-header>

          <md-card-content>{{headline.content}}</md-card-content>
      </md-card>

      <!-- Comment Form -->
      <form @submit.prevent="sendComment">
        <md-field>
          <label>Enter your comment</label>
          <md-textarea v-model="text" :disabled="loading || !user"></md-textarea>
          <md-icon>description</md-icon>
        </md-field>
        <md-button class="md-primary md-raised" type="submit" :disabled="loading || !user">Send Comment</md-button>
      </form>

      <!-- Comments -->
      <md-list class="md-triple-line" style="margin-top: 1em">
        <md-list-item v-for="comment in headline.comments" :key="comment.id">
          <md-avatar><img :src="comment.user.avatar" :alt="comment.user.username"></md-avatar>
            <div class="md-list-item-text">
              <span>{{comment.user.username}}</span>
              <span>{{comment.publishedAt | commentTimeToNow}}</span>
              <p>{{comment.text}}</p>
            </div>

            <md-badge class="md-primary" md-position="bottom" :md-content="comment.likes" />
            <md-button @click="likeComment(comment.id)" class="md-icon-button" :disabled="loading || !user">
              <md-icon>thumb_up</md-icon>
            </md-button>
        </md-list-item>
      </md-list>

      <!-- Back Button -->
      <md-button class="md-fixed md-fab-bottom-right md-fab md-primary" @click="$router.go(-1)">
        <md-icon>arrow_back</md-icon>
      </md-button>
    </div>
  </div>
</template>

<script>
import uuidv4 from "uuid/v4";

export default {
  data: () => ({
    text: ""
  }),
  async fetch({ store, params }) {
    await store.dispatch("loadHeadline", params.slug);
  },
  computed: {
    headline() {
      return this.$store.getters.headline;
    },
    loading() {
      return this.$store.getters.loading;
    },
    user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    async sendComment() {
      const comment = {
        id: uuidv4(),
        text: this.text,
        user: this.getCommentUserData(),
        publishedAt: Date.now(),
        likes: 0
      };
      await this.$store.dispatch("sendComment", comment);
      this.text = "";
    },
    async likeComment(commentId) {
      await this.$store.dispatch('likeComment', commentId);
    },
    getCommentUserData() {
      const commentUserData = { ...this.user };
      commentUserData["username"] = commentUserData["email"].split("@")[0];
      return commentUserData;
    }
  }
};
</script>
```

- We are finally going to modify the  `pages\pages\index.vue` document to use the `publishedTimeToNow` filter.

> pages\pages\index.vue
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
        <md-button class="md-primary" @click="showSearchDialog = true">Search</md-button>
        <md-button class="md-accent" @click="showRightSidepanel = true">Categories</md-button>
      </div>
    </md-toolbar>

    <!-- Search Dialog -->
    <md-dialog :md-active.sync="showSearchDialog">
      <md-dialog-title>Search Headlines</md-dialog-title>

      <div class="md-layout" style="padding: 1em">
        <md-field>
          <label>Search Term(s)</label>
          <md-input v-model="query" placeholder="Use quotes for exact matches, AND / OR / NOT for multiple terms" maxlength="30"></md-input>
        </md-field>
        <md-datepicker v-model="fromDate" md-immediately><label>Select starting date (optional)</label></md-datepicker>
        <md-datepicker v-model="toDate" md-immediately><label>Select ending date (optional)</label></md-datepicker>
        <md-field>
          <label for="sortBy">Sort search results by criteria (optional)</label>
          <md-select v-model="sortBy" name="sortBy" id="sortBy" md-dense>
            <md-option value="publishedAt">Newest (default)</md-option>
            <md-option value="relevancy">Relevant</md-option>
            <md-option value="popularity">Popular</md-option>
          </md-select>
        </md-field>
      </div>

      <md-dialog-actions>
        <md-button class="md-accent" @click="showSearchDialog = false">Cancel</md-button>
        <md-button class="md-primary" @click="searchHeadlines">Search</md-button>
      </md-dialog-actions>
    </md-dialog>

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

      <!-- Default Markup (if Feed Empty) -->
      <md-empty-state class="md-primary" v-if="feed.length === 0 && !user" md-icon="bookmarks" md-label="Nothing in Feed" md-description="Login to bookmark headlines">
        <md-button to='/login' class="md-primary md-raised">Login</md-button>
      </md-empty-state>

      <md-empty-state v-else-if="feed.length === 0" class="md-accent" md-icon="bookmark_outline" md-label="Nothing in Feed" md-description="Anything you bookmark will be safely stored here"></md-empty-state>

      <!-- Feed Content (if Feed Not Empty) -->
      <md-list class="md-triple-line" v-else v-for="(headline, i) in feed" :key="i">
        <md-list-item>
          <md-avatar><img :src="headline.urlToImage" :alt="headline.title"></md-avatar>

            <div class="md-list-item-text">
              <span><a :href="headline.url" target="_blank">{{headline.title}}</a></span>
              <span>{{headline.source.name}}</span>
              <span>View Comments</span>
            </div>

            <md-button @click="removeHeadlineFromFeed(headline)" class="md-icon-button md-list-action">
              <md-icon class="md-accent">delete</md-icon>
            </md-button>
        </md-list-item>
        <md-divider class="md-inset"></md-divider>
      </md-list>
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
                  <div @click="loadSource(headline.source.id)">
                    {{headline.source.name}}
                    <md-icon class="small-icon">book</md-icon>
                  </div>
                  <div class="md-subhead" v-if="headline.author">
                    {{headline.author}}
                    <md-icon class="small-icon">face</md-icon>
                  </div>
                  <div class="md-subhead">
                    {{headline.publishedAt | publishedTimeToNow}}
                    <md-icon class="small-icon">alarm</md-icon>
                  </div>
                </md-card-header>

                <md-card-content>{{headline.description}}</md-card-content>

                <md-card-actions>
                  <md-button @click="addHeadlineToFeed(headline)" class="md-icon-button" :class="isInFeed(headline.title)">
                    <md-icon>bookmark</md-icon>
                  </md-button>
                  <md-button @click="saveHeadline(headline)" class="md-icon-button">
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
    showSearchDialog: false,
    newsCategories: [
      { name: "Top Headlines", path: "", icon: "today" },
      { name: "Technology", path: "technology", icon: "keyboard" },
      { name: "Business", path: "business", icon: "business_center" },
      { name: "Entertainment", path: "entertainment", icon: "weekend" },
      { name: "Health", path: "health", icon: "fastfood" },
      { name: "Science", path: "science", icon: "fingerprint" },
      { name: "Sports", path: "sports", icon: "golf_course" }
    ],
    query: '',
    fromDate: '',
    toDate: '',
    sortBy: ''
  }),
  async fetch({ store }) {
    await store.dispatch(
      "loadHeadlines",
      `/api/top-headlines?country=${store.state.country}&category=${
        store.state.category
      }`
    );
    await store.dispatch("loadUserFeed");
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
    feed() {
      return this.$store.getters.feed;
    },
    category() {
      return this.$store.getters.category;
    },
    country() {
      return this.$store.getters.country;
    },
    source() {
      return this.$store.getters.source;
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
    async loadSource(sourceId) {
      if (sourceId) {
        this.$store.commit('setSource', sourceId);
        await this.$store.dispatch('loadHeadlines', `/api/top-headlines?sources=${this.source}`);
      }
    },
    async searchHeadlines() {
      await this.$store.dispatch('loadHeadlines', `/api/everything?q=${this.query}&from=${this.dateToISOString(this.fromDate)}&to=${this.dateToISOString(this.toDate)}&sortBy=${this.sortBy}`);
      this.showSearchDialog = false;
    },
    async addHeadlineToFeed(headline) {
      if (this.user) {
        await this.$store.dispatch("addHeadlineToFeed", headline);
      }
    },
    async removeHeadlineFromFeed(headline) {
      await this.$store.dispatch("removeHeadlineFromFeed", headline);
    },
    async saveHeadline(headline) {
      await this.$store.dispatch("saveHeadline", headline).then(() => {
        this.$router.push(`/headlines/${headline.slug}`);
      });
    },
    changeCountry(country) {
      this.$store.commit("setCountry", country);
    },
    logoutUser() {
      this.$store.dispatch("logoutUser");
    },
    isInFeed(title) {
      const inFeed =
        this.feed.findIndex(headline => headline.title === title) > -1;
      return inFeed ? "md-primary" : "";
    },
    dateToISOString(date) {
      if (date) {
        return new Date(date).toISOString();
      }
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

- We are going to check if it works properly.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/UseDateFnsAndVueFiltersToFormatHeadline.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/UseDateFnsAndVueFiltersToFormatHeadline2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/UseDateFnsAndVueFiltersToFormatHeadline3.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/UseDateFnsAndVueFiltersToFormatHeadline4.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/UseDateFnsAndVueFiltersToFormatHeadline5.png)

### 33. Use CSS Transitions upon Route Change 3min

- We are going to incorporate page transitions by modifying the `assets\theme.scss` document.

> assets\theme.scss
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

/* Page Transitions */
.page-enter,
.page-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.25s;
}

```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/UseCssTransitionsUponRouteChange.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/UseCssTransitionsUponRouteChange2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/UseCssTransitionsUponRouteChange3.png)

### 34. Add Default Image to Headlines without Media 4min

- In order to avoid showing headlines without Media we are going to add a default image.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddDefaultImageToHeadlinesWithoutMedia.png)

- We are going to create the `assests\default-image.jpg` image file that is going to be used as a default image when the headline doesn't have a media.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddDefaultImageToHeadlinesWithoutMedia2.png)

- We are going to modify the `store\index.js` document to use this default image.

> store\index.js

```js
import Vuex from "vuex";
import md5 from "md5";
import slugify from "slugify";
import db from "~/plugins/firestore";
import { saveUserData, clearUserData } from "~/utils";
import defaultImage from "~/assets/default-image.jpg";

const createStore = () => {
  return new Vuex.Store({
    state: {
      headlines: [],
      headline: null,
      feed: [],
      loading: false,
      token: "",
      user: null,
      category: "",
      country: "us",
      source: ""
    },
    mutations: {
      setHeadlines(state, headlines) {
        state.headlines = headlines;
      },
      setHeadline(state, headline) {
        state.headline = headline;
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
      setSource(state, source) {
        state.source = source;
      },
      setFeed(state, headlines) {
        state.feed = headlines;
      },
      clearToken: state => (state.token = ""),
      clearUser: state => (state.user = null),
      clearFeed: state => (state.feed = [])
    },
    actions: {
      async loadHeadlines({ commit }, apiUrl) {
        commit("setLoading", true);
        const { articles } = await this.$axios.$get(apiUrl);
        const headlines = articles.map(article => {
          const slug = slugify(article.title, {
            replacement: "-",
            remove: /[^a-zA-Z0-9 -]/g,
            lower: true
          });
          if (!article.urlToImage) {
            article.urlToImage = defaultImage;
          }
          const headline = { ...article, slug };
          return headline;
        });
        commit("setLoading", false);
        commit("setHeadlines", headlines);
      },
      async addHeadlineToFeed({ state }, headline) {
        const feedRef = db
          .collection(`users/${state.user.email}/feed`)
          .doc(headline.title);

        await feedRef.set(headline);
      },
      async loadUserFeed({ state, commit }) {
        if (state.user) {
          const feedRef = db.collection(`users/${state.user.email}/feed`);

          await feedRef.onSnapshot(querySnapshot => {
            let headlines = [];
            querySnapshot.forEach(doc => {
              headlines.push(doc.data());
              commit("setFeed", headlines);
            });

            if (querySnapshot.empty) {
              headlines = [];
              commit("setFeed", headlines);
            }
          });
        }
      },
      async loadHeadline({ commit }, headlineSlug) {
        const headlineRef = db.collection("headlines").doc(headlineSlug);
        const commentsRef = db
          .collection(`headlines/${headlineSlug}/comments`)
          .orderBy("likes", "desc");

        let loadedHeadline = {};
        await headlineRef.get().then(async doc => {
          if (doc.exists) {
            loadedHeadline = doc.data();

            await commentsRef.get().then(querySnapshot => {
              if (querySnapshot.empty) {
                commit("setHeadline", loadedHeadline);
              }
              let loadedComments = [];
              querySnapshot.forEach(doc => {
                loadedComments.push(doc.data());
                loadedHeadline["comments"] = loadedComments;
                commit("setHeadline", loadedHeadline);
              });
            });
          }
        });
      },
      async sendComment({ state, commit }, comment) {
        const commentsRef = db.collection(
          `headlines/${state.headline.slug}/comments`
        );

        commit("setLoading", true);
        await commentsRef.doc(comment.id).set(comment);
        await commentsRef
          .orderBy("likes", "desc")
          .get()
          .then(querySnapshot => {
            let comments = [];
            querySnapshot.forEach(doc => {
              comments.push(doc.data());
              const updatedHeadline = { ...state.headline, comments };
              commit("setHeadline", updatedHeadline);
            });
          });
        commit("setLoading", false);
      },
      async likeComment({ state, commit }, commentId) {
        const commentsRef = db
          .collection(`headlines/${state.headline.slug}/comments`)
          .orderBy("likes", "desc");
        const likedCommentRef = db
          .collection("headlines")
          .doc(state.headline.slug)
          .collection("comments")
          .doc(commentId);

        await likedCommentRef.get().then(doc => {
          if (doc.exists) {
            const prevLikes = doc.data().likes;
            const currentLikes = prevLikes + 1;
            likedCommentRef.update({
              likes: currentLikes
            });
          }
        });

        await commentsRef.onSnapshot(querySnapshot => {
          let loadedComments = [];
          querySnapshot.forEach(doc => {
            loadedComments.push(doc.data());
            const updatedHeadline = {
              ...state.headline,
              comments: loadedComments
            };
            commit("setHeadline", updatedHeadline);
          });
        });
      },
      async saveHeadline(context, headline) {
        const headlineRef = db.collection("headlines").doc(headline.slug);

        let headlineId;
        await headlineRef.get().then(doc => {
          if (doc.exists) {
            headlineId = doc.id;
          }
        });

        if (!headlineId) {
          await headlineRef.set(headline);
        }
      },
      async removeHeadlineFromFeed({ state }, headline) {
        const headlineRef = db
          .collection(`users/${state.user.email}/feed`)
          .doc(headline.title);

        await headlineRef.delete();
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
        commit("clearFeed");
        clearUserData();
      }
    },
    getters: {
      headlines: state => state.headlines,
      headline: state => state.headline,
      feed: state => state.feed,
      loading: state => state.loading,
      user: state => state.user,
      isAuthenticated: state => !!state.token,
      category: state => state.category,
      country: state => state.country,
      source: state => state.source
    }
  });
};

export default createStore;

```


![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddDefaultImageToHeadlinesWithoutMedia3.png)


- We are finally going to modify the  `pages\pages\index.vue` document to be able to see the comments from the images we have in the `feed`.

> pages\pages\index.vue
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
        <md-button class="md-primary" @click="showSearchDialog = true">Search</md-button>
        <md-button class="md-accent" @click="showRightSidepanel = true">Categories</md-button>
      </div>
    </md-toolbar>

    <!-- Search Dialog -->
    <md-dialog :md-active.sync="showSearchDialog">
      <md-dialog-title>Search Headlines</md-dialog-title>

      <div class="md-layout" style="padding: 1em">
        <md-field>
          <label>Search Term(s)</label>
          <md-input v-model="query" placeholder="Use quotes for exact matches, AND / OR / NOT for multiple terms" maxlength="30"></md-input>
        </md-field>
        <md-datepicker v-model="fromDate" md-immediately><label>Select starting date (optional)</label></md-datepicker>
        <md-datepicker v-model="toDate" md-immediately><label>Select ending date (optional)</label></md-datepicker>
        <md-field>
          <label for="sortBy">Sort search results by criteria (optional)</label>
          <md-select v-model="sortBy" name="sortBy" id="sortBy" md-dense>
            <md-option value="publishedAt">Newest (default)</md-option>
            <md-option value="relevancy">Relevant</md-option>
            <md-option value="popularity">Popular</md-option>
          </md-select>
        </md-field>
      </div>

      <md-dialog-actions>
        <md-button class="md-accent" @click="showSearchDialog = false">Cancel</md-button>
        <md-button class="md-primary" @click="searchHeadlines">Search</md-button>
      </md-dialog-actions>
    </md-dialog>

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

      <!-- Default Markup (if Feed Empty) -->
      <md-empty-state class="md-primary" v-if="feed.length === 0 && !user" md-icon="bookmarks" md-label="Nothing in Feed" md-description="Login to bookmark headlines">
        <md-button to='/login' class="md-primary md-raised">Login</md-button>
      </md-empty-state>

      <md-empty-state v-else-if="feed.length === 0" class="md-accent" md-icon="bookmark_outline" md-label="Nothing in Feed" md-description="Anything you bookmark will be safely stored here"></md-empty-state>

      <!-- Feed Content (if Feed Not Empty) -->
      <md-list class="md-triple-line" v-else v-for="(headline, i) in feed" :key="i">
        <md-list-item>
          <md-avatar><img :src="headline.urlToImage" :alt="headline.title"></md-avatar>

            <div class="md-list-item-text">
              <span><a :href="headline.url" target="_blank">{{headline.title}}</a></span>
              <span>{{headline.source.name}}</span>
              <span @click="saveHeadline(headline)">View Comments</span>
            </div>

            <md-button @click="removeHeadlineFromFeed(headline)" class="md-icon-button md-list-action">
              <md-icon class="md-accent">delete</md-icon>
            </md-button>
        </md-list-item>
        <md-divider class="md-inset"></md-divider>
      </md-list>
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
                  <div @click="loadSource(headline.source.id)">
                    {{headline.source.name}}
                    <md-icon class="small-icon">book</md-icon>
                  </div>
                  <div class="md-subhead" v-if="headline.author">
                    {{headline.author}}
                    <md-icon class="small-icon">face</md-icon>
                  </div>
                  <div class="md-subhead">
                    {{headline.publishedAt | publishedTimeToNow}}
                    <md-icon class="small-icon">alarm</md-icon>
                  </div>
                </md-card-header>

                <md-card-content>{{headline.description}}</md-card-content>

                <md-card-actions>
                  <md-button @click="addHeadlineToFeed(headline)" class="md-icon-button" :class="isInFeed(headline.title)">
                    <md-icon>bookmark</md-icon>
                  </md-button>
                  <md-button @click="saveHeadline(headline)" class="md-icon-button">
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
    showSearchDialog: false,
    newsCategories: [
      { name: "Top Headlines", path: "", icon: "today" },
      { name: "Technology", path: "technology", icon: "keyboard" },
      { name: "Business", path: "business", icon: "business_center" },
      { name: "Entertainment", path: "entertainment", icon: "weekend" },
      { name: "Health", path: "health", icon: "fastfood" },
      { name: "Science", path: "science", icon: "fingerprint" },
      { name: "Sports", path: "sports", icon: "golf_course" }
    ],
    query: '',
    fromDate: '',
    toDate: '',
    sortBy: ''
  }),
  async fetch({ store }) {
    await store.dispatch(
      "loadHeadlines",
      `/api/top-headlines?country=${store.state.country}&category=${
        store.state.category
      }`
    );
    await store.dispatch("loadUserFeed");
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
    feed() {
      return this.$store.getters.feed;
    },
    category() {
      return this.$store.getters.category;
    },
    country() {
      return this.$store.getters.country;
    },
    source() {
      return this.$store.getters.source;
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
    async loadSource(sourceId) {
      if (sourceId) {
        this.$store.commit('setSource', sourceId);
        await this.$store.dispatch('loadHeadlines', `/api/top-headlines?sources=${this.source}`);
      }
    },
    async searchHeadlines() {
      await this.$store.dispatch('loadHeadlines', `/api/everything?q=${this.query}&from=${this.dateToISOString(this.fromDate)}&to=${this.dateToISOString(this.toDate)}&sortBy=${this.sortBy}`);
      this.showSearchDialog = false;
    },
    async addHeadlineToFeed(headline) {
      if (this.user) {
        await this.$store.dispatch("addHeadlineToFeed", headline);
      }
    },
    async removeHeadlineFromFeed(headline) {
      await this.$store.dispatch("removeHeadlineFromFeed", headline);
    },
    async saveHeadline(headline) {
      await this.$store.dispatch("saveHeadline", headline).then(() => {
        this.$router.push(`/headlines/${headline.slug}`);
      });
    },
    changeCountry(country) {
      this.$store.commit("setCountry", country);
    },
    logoutUser() {
      this.$store.dispatch("logoutUser");
    },
    isInFeed(title) {
      const inFeed =
        this.feed.findIndex(headline => headline.title === title) > -1;
      return inFeed ? "md-primary" : "";
    },
    dateToISOString(date) {
      if (date) {
        return new Date(date).toISOString();
      }
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

- We can see if it works.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddDefaultImageToHeadlinesWithoutMedia4.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddDefaultImageToHeadlinesWithoutMedia5.png)

- We are finally going to modify the `pages\login\index.vue` and `pages\register\index.vue` document to include a `go back` button.

> pages\login\index.vue
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

    <!-- Back Button -->
      <md-button class="md-fixed md-fab-bottom-right md-fab md-primary" @click="$router.go(-1)">
        <md-icon>arrow_back</md-icon>
      </md-button>
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

> pages\register\index.vue
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

    <!-- Back Button -->
    <md-button class="md-fixed md-fab-bottom-right md-fab md-primary" @click="$router.go(-1)">
      <md-icon>arrow_back</md-icon>
    </md-button>
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

- We can see if it works.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddDefaultImageToHeadlinesWithoutMedia6.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddDefaultImageToHeadlinesWithoutMedia7.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddDefaultImageToHeadlinesWithoutMedia8.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/AddDefaultImageToHeadlinesWithoutMedia9.png)

## Section 13: Migrating from Nuxt 2 / Vuex Store to the Latest Version 0 / 1|7min

### 35. Removing Nuxt Store Warning; Migrating from Nuxt 2 to Latest Version 7min

The following error was already fixed on `21. Create Ability to Bookmark Headlines, Add Bookmarks to User's.

```
vendors.app.js:22737 [2019-06-09T11:26:45.051Z]  @firebase/firestore: Firestore (6.1.1):
  The timestampsInSnapshots setting now defaults to true and you no
  longer need to explicitly set it. In a future release, the setting
  will be removed entirely and so it is recommended that you remove it
  from your firestore.settings() call now.
```

- We need to fix the warning about the store and Nuxt 3:
 
![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/RemovingNuxtStoreWarning.png)

```
app.js:2720 Classic mode for store/ is deprecated and will be removed in Nuxt 3.
```
- In order to fix this warning we need to create a separated varible for the `state`, `mutations`, `actions` and `getters`.

> store\index.js (deprecated version)
```js
import Vuex from "vuex";
import md5 from "md5";
import slugify from "slugify";
import db from "~/plugins/firestore";
import { saveUserData, clearUserData } from "~/utils";
import defaultImage from "~/assets/default-image.jpg";

const createStore = () => {
  return new Vuex.Store({
    state: {
      headlines: [],
      headline: null,
      feed: [],
      loading: false,
      token: "",
      user: null,
      category: "",
      country: "us",
      source: ""
    },
    mutations: {
      setHeadlines(state, headlines) {
        state.headlines = headlines;
      },
      setHeadline(state, headline) {
        state.headline = headline;
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
      setSource(state, source) {
        state.source = source;
      },
      setFeed(state, headlines) {
        state.feed = headlines;
      },
      clearToken: state => (state.token = ""),
      clearUser: state => (state.user = null),
      clearFeed: state => (state.feed = [])
    },
    actions: {
      async loadHeadlines({ commit }, apiUrl) {
        commit("setLoading", true);
        const { articles } = await this.$axios.$get(apiUrl);
        const headlines = articles.map(article => {
          const slug = slugify(article.title, {
            replacement: "-",
            remove: /[^a-zA-Z0-9 -]/g,
            lower: true
          });
          if (!article.urlToImage) {
            article.urlToImage = defaultImage;
          }
          const headline = { ...article, slug };
          return headline;
        });
        commit("setLoading", false);
        commit("setHeadlines", headlines);
      },
      async addHeadlineToFeed({ state }, headline) {
        const feedRef = db
          .collection(`users/${state.user.email}/feed`)
          .doc(headline.title);

        await feedRef.set(headline);
      },
      async loadUserFeed({ state, commit }) {
        if (state.user) {
          const feedRef = db.collection(`users/${state.user.email}/feed`);

          await feedRef.onSnapshot(querySnapshot => {
            let headlines = [];
            querySnapshot.forEach(doc => {
              headlines.push(doc.data());
              commit("setFeed", headlines);
            });

            if (querySnapshot.empty) {
              headlines = [];
              commit("setFeed", headlines);
            }
          });
        }
      },
      async loadHeadline({ commit }, headlineSlug) {
        const headlineRef = db.collection("headlines").doc(headlineSlug);
        const commentsRef = db
          .collection(`headlines/${headlineSlug}/comments`)
          .orderBy("likes", "desc");

        let loadedHeadline = {};
        await headlineRef.get().then(async doc => {
          if (doc.exists) {
            loadedHeadline = doc.data();

            await commentsRef.get().then(querySnapshot => {
              if (querySnapshot.empty) {
                commit("setHeadline", loadedHeadline);
              }
              let loadedComments = [];
              querySnapshot.forEach(doc => {
                loadedComments.push(doc.data());
                loadedHeadline["comments"] = loadedComments;
                commit("setHeadline", loadedHeadline);
              });
            });
          }
        });
      },
      async sendComment({ state, commit }, comment) {
        const commentsRef = db.collection(
          `headlines/${state.headline.slug}/comments`
        );

        commit("setLoading", true);
        await commentsRef.doc(comment.id).set(comment);
        await commentsRef
          .orderBy("likes", "desc")
          .get()
          .then(querySnapshot => {
            let comments = [];
            querySnapshot.forEach(doc => {
              comments.push(doc.data());
              const updatedHeadline = { ...state.headline, comments };
              commit("setHeadline", updatedHeadline);
            });
          });
        commit("setLoading", false);
      },
      async likeComment({ state, commit }, commentId) {
        const commentsRef = db
          .collection(`headlines/${state.headline.slug}/comments`)
          .orderBy("likes", "desc");
        const likedCommentRef = db
          .collection("headlines")
          .doc(state.headline.slug)
          .collection("comments")
          .doc(commentId);

        await likedCommentRef.get().then(doc => {
          if (doc.exists) {
            const prevLikes = doc.data().likes;
            const currentLikes = prevLikes + 1;
            likedCommentRef.update({
              likes: currentLikes
            });
          }
        });

        await commentsRef.onSnapshot(querySnapshot => {
          let loadedComments = [];
          querySnapshot.forEach(doc => {
            loadedComments.push(doc.data());
            const updatedHeadline = {
              ...state.headline,
              comments: loadedComments
            };
            commit("setHeadline", updatedHeadline);
          });
        });
      },
      async saveHeadline(context, headline) {
        const headlineRef = db.collection("headlines").doc(headline.slug);

        let headlineId;
        await headlineRef.get().then(doc => {
          if (doc.exists) {
            headlineId = doc.id;
          }
        });

        if (!headlineId) {
          await headlineRef.set(headline);
        }
      },
      async removeHeadlineFromFeed({ state }, headline) {
        const headlineRef = db
          .collection(`users/${state.user.email}/feed`)
          .doc(headline.title);

        await headlineRef.delete();
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
        commit("clearFeed");
        clearUserData();
      }
    },
    getters: {
      headlines: state => state.headlines,
      headline: state => state.headline,
      feed: state => state.feed,
      loading: state => state.loading,
      user: state => state.user,
      isAuthenticated: state => !!state.token,
      category: state => state.category,
      country: state => state.country,
      source: state => state.source
    }
  });
};

export default createStore;
```

> store\index.js (valid version)
```js
import md5 from "md5";
import slugify from "slugify";
import db from "~/plugins/firestore";
import { saveUserData, clearUserData } from "~/utils";
import defaultImage from "~/assets/default-image.jpg";

export const state = () => ({
  headlines: [],
  headline: null,
  feed: [],
  loading: false,
  token: "",
  user: null,
  category: "",
  country: "us",
  source: ""
});

export const mutations = {
  setHeadlines(state, headlines) {
    state.headlines = headlines;
  },
  setHeadline(state, headline) {
    state.headline = headline;
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
  setSource(state, source) {
    state.source = source;
  },
  setFeed(state, headlines) {
    state.feed = headlines;
  },
  clearToken: state => (state.token = ""),
  clearUser: state => (state.user = null),
  clearFeed: state => (state.feed = [])
};

export const actions = {
  async loadHeadlines({ commit }, apiUrl) {
    commit("setLoading", true);
    const { articles } = await this.$axios.$get(apiUrl);
    const headlines = articles.map(article => {
      const slug = slugify(article.title, {
        replacement: "-",
        remove: /[^a-zA-Z0-9 -]/g,
        lower: true
      });
      if (!article.urlToImage) {
        article.urlToImage = defaultImage;
      }
      const headline = { ...article, slug };
      return headline;
    });
    commit("setLoading", false);
    commit("setHeadlines", headlines);
  },
  async addHeadlineToFeed({ state }, headline) {
    const feedRef = db
      .collection(`users/${state.user.email}/feed`)
      .doc(headline.title);

    await feedRef.set(headline);
  },
  async loadUserFeed({ state, commit }) {
    if (state.user) {
      const feedRef = db.collection(`users/${state.user.email}/feed`);

      await feedRef.onSnapshot(querySnapshot => {
        let headlines = [];
        querySnapshot.forEach(doc => {
          headlines.push(doc.data());
          commit("setFeed", headlines);
        });

        if (querySnapshot.empty) {
          headlines = [];
          commit("setFeed", headlines);
        }
      });
    }
  },
  async loadHeadline({ commit }, headlineSlug) {
    const headlineRef = db.collection("headlines").doc(headlineSlug);
    const commentsRef = db
      .collection(`headlines/${headlineSlug}/comments`)
      .orderBy("likes", "desc");

    let loadedHeadline = {};
    await headlineRef.get().then(async doc => {
      if (doc.exists) {
        loadedHeadline = doc.data();

        await commentsRef.get().then(querySnapshot => {
          if (querySnapshot.empty) {
            commit("setHeadline", loadedHeadline);
          }
          let loadedComments = [];
          querySnapshot.forEach(doc => {
            loadedComments.push(doc.data());
            loadedHeadline["comments"] = loadedComments;
            commit("setHeadline", loadedHeadline);
          });
        });
      }
    });
  },
  async sendComment({ state, commit }, comment) {
    const commentsRef = db.collection(
      `headlines/${state.headline.slug}/comments`
    );

    commit("setLoading", true);
    await commentsRef.doc(comment.id).set(comment);
    await commentsRef
      .orderBy("likes", "desc")
      .get()
      .then(querySnapshot => {
        let comments = [];
        querySnapshot.forEach(doc => {
          comments.push(doc.data());
          const updatedHeadline = { ...state.headline, comments };
          commit("setHeadline", updatedHeadline);
        });
      });
    commit("setLoading", false);
  },
  async likeComment({ state, commit }, commentId) {
    const commentsRef = db
      .collection(`headlines/${state.headline.slug}/comments`)
      .orderBy("likes", "desc");
    const likedCommentRef = db
      .collection("headlines")
      .doc(state.headline.slug)
      .collection("comments")
      .doc(commentId);

    await likedCommentRef.get().then(doc => {
      if (doc.exists) {
        const prevLikes = doc.data().likes;
        const currentLikes = prevLikes + 1;
        likedCommentRef.update({
          likes: currentLikes
        });
      }
    });

    await commentsRef.onSnapshot(querySnapshot => {
      let loadedComments = [];
      querySnapshot.forEach(doc => {
        loadedComments.push(doc.data());
        const updatedHeadline = {
          ...state.headline,
          comments: loadedComments
        };
        commit("setHeadline", updatedHeadline);
      });
    });
  },
  async saveHeadline(context, headline) {
    const headlineRef = db.collection("headlines").doc(headline.slug);

    let headlineId;
    await headlineRef.get().then(doc => {
      if (doc.exists) {
        headlineId = doc.id;
      }
    });

    if (!headlineId) {
      await headlineRef.set(headline);
    }
  },
  async removeHeadlineFromFeed({ state }, headline) {
    const headlineRef = db
      .collection(`users/${state.user.email}/feed`)
      .doc(headline.title);

    await headlineRef.delete();
  },
  async authenticateUser({ commit }, userPayload) {
    try {
      commit("setLoading", true);
      const authUserData = await this.$axios.$post(`/${userPayload.action}/`, {
        email: userPayload.email,
        password: userPayload.password,
        returnSecureToken: userPayload.returnSecureToken
      });
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
    commit("clearFeed");
    clearUserData();
  }
};

export const getters = {
  headlines: state => state.headlines,
  headline: state => state.headline,
  feed: state => state.feed,
  loading: state => state.loading,
  user: state => state.user,
  isAuthenticated: state => !!state.token,
  category: state => state.category,
  country: state => state.country,
  source: state => state.source
};

```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/RemovingNuxtStoreWarning2.png)

## Section 14: Deployment to the Web 0 / 1|6min

### 36. Seamless App Deployment with Heroku 6min

- We can deploy a `Nuxt` application to [Heroku](https://www.heroku.com/) following the information on [How to deploy on Heroku?](https://nuxtjs.org/faq/heroku-deployment) and [Vue School - How to Deploy Nuxt.js to Heroku](https://vueschool.io/lessons/how-to-deploy-nuxtjs-to-heroku?friend=nuxt).

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SeamlessAppDeploymentWithHeroku.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SeamlessAppDeploymentWithHeroku2.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SeamlessAppDeploymentWithHeroku3.png)

- Log in to `Heroku`

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SeamlessAppDeploymentWithHeroku4.png)

- Click on [New]

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SeamlessAppDeploymentWithHeroku5.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SeamlessAppDeploymentWithHeroku6.png)

- Put `nuxt-news-peelmicro` for `App name` and then click on `Create app`

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SeamlessAppDeploymentWithHeroku7.png)

- We need to install the `Heroku CLI`

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/nuxt-news (master)
$ npm i -g heroku
npm WARN deprecated cross-spawn-async@2.2.5: cross-spawn no longer requires a build toolchain, use it instead
C:\Users\juan.pablo.perez\AppData\Roaming\npm\heroku -> C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\heroku\bin\run

> date-fns@2.0.0-alpha.31 postinstall C:\Users\juan.pablo.perez\AppData\Roaming\npm\node_modules\heroku\node_modules\date-fns
> node ./docs/printV2Notice.js


���������������������������������������

  Thank you for testing (⩗) date-fns v2!

  In v2 we've introduced a number of breaking changes
  that make date-fns even more consistent and reliable.
  Please read the changelog carefully: https://git.io/fxCWb

  Please support us at Open Collective: https://opencollective.com/date-fns

���������������������������������������

+ heroku@7.25.0
added 362 packages from 266 contributors in 81.254s
```

- `Log in` using the `heroku CLI`

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/nuxt-news (master)
$ heroku login
heroku: Press any key to open up the browser to login or q to exit:
Opening browser to https://cli-auth.heroku.com/auth/browser/09669303-ee8e-49ed-aedc-ab020d394f4c
heroku: Waiting for login... -
```

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SeamlessAppDeploymentWithHeroku8.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SeamlessAppDeploymentWithHeroku9.png)

```bash
heroku: Waiting for login... !
JSONError: Unexpected end of JSON input while parsing near ' '
    at module.exports (C:/Users/juan.pablo.perez/AppData/Roaming/npm/node_modules/heroku/node_modules/parse-json/index.js:26:19)
    at HTTP._parse (C:/Users/juan.pablo.perez/AppData/Roaming/npm/node_modules/heroku/node_modules/@heroku-cli/command/node_modules/http-call/lib/http.js:343:25)
```

- Let's try again

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/nuxt-news (master)
$ heroku login
heroku: Press any key to open up the browser to login or q to exit:
Opening browser to https://cli-auth.heroku.com/auth/browser/2842587a-bfe9-44c6-a31f-fdcec6979f14
Logging in... done
Logged in as juanp_perez@msn.com
```

- Create a `repository` in `Heroku` for the current solution (apart from the one that we already have with `GitHub`) by executing:

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/nuxt-news (master)
$ heroku git:remote -a nuxt-news-peelmicro
set git remote heroku to https://git.heroku.com/nuxt-news-peelmicro.git
```

- Check how many remotes we have assigned to git:

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/nuxt-news (master)
$ git remote
heroku
origin
```

- We need to tell Heroku to install the devDependencies of the project (to be able to launch npm run build):

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/nuxt-news (master)
$ heroku config:set NPM_CONFIG_PRODUCTION=false
Setting NPM_CONFIG_PRODUCTION and restarting ⬢ nuxt-news-peelmicro... done, v3
NPM_CONFIG_PRODUCTION: false
```

- We want our application to listen on the host 0.0.0.0 and run in production mode:

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/nuxt-news (master)
$ heroku config:set HOST=0.0.0.0
Setting HOST and restarting ⬢ nuxt-news-peelmicro... done, v4
HOST: 0.0.0.0

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/nuxt-news (master)
$ heroku config:set NODE_ENV=production
Setting NODE_ENV and restarting ⬢ nuxt-news-peelmicro... done, v5
NODE_ENV: production
```
- We need to add our **SECRET** `FIREBASE_API_KEY` and `NEWS_API_KEY` environment variables:

```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/nuxt-news (master)
$ heroku config:set FIREBASE_API_KEY=AIzaSyBxxxxxxxxxxxxxxxxxxxx7Z7Yo20qIGRQ NEWS_API_KEY=79e7f03xxxxxxxxxxxxxxxxxxxx5518f
Setting FIREBASE_API_KEY, NEWS_API_KEY and restarting ⬢ nuxt-news-peelmicro... done, v6
FIREBASE_API_KEY: AIzaSyBxxxxxxxxxxxxxxxxxxxx7Z7Yo20qIGRQ
NEWS_API_KEY:     79e7f03xxxxxxxxxxxxxxxxxxxx5518f
```

- We need to ensure the `Environment variables` have been executed with success:

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SeamlessAppDeploymentWithHeroku10.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SeamlessAppDeploymentWithHeroku11.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SeamlessAppDeploymentWithHeroku12.png)

- Then, we tell Heroku to launch `npm run build` via the `heroku-postbuild` script in our `package.json`:

```json
"scripts": {
  "dev": "nuxt",
  "build": "nuxt build",
  "start": "nuxt start",
  "heroku-postbuild": "npm run build"
}
```

> package.json
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
    "generate": "nuxt generate",
    "heroku-postbuild": "npm run build"
  },
  "dependencies": {
    "@nuxtjs/axios": "^5.3.6",
    "@nuxtjs/proxy": "^1.3.3",
    "date-fns": "^1.30.1",
    "dotenv": "^8.0.0",
    "firebase": "^6.1.1",
    "js-cookie": "^2.2.0",
    "md5": "^2.2.1",
    "nuxt": "^2.0.0",
    "slugify": "^1.3.4",
    "uuid": "^3.3.2",
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

- Commit the changes and push them to both repositories

```bash
uan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/nuxt-news (master)
$ git add .
warning: LF will be replaced by CRLF in package.json.
The file will have its original line endings in your working directory

Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/nuxt-news (master)
$ git commit -m "Changed package.json"
[master ade613a] Changed package.json
 1 file changed, 2 insertions(+), 1 deletion(-)
```

- To `GitHub`
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/nuxt-news (master)
$ git push
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 4 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 352 bytes | 352.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/peelmicro/build-a-news-feed-with-nuxt-2-and-firestore.git
   a0bcbbb..ade613a  master -> master
```

- To `Heroku`
```bash
Juan.Pablo.Perez@RIMDUB-0232 MINGW64 /c/Work/Training/Pre/VueJs/nuxt-news (master)
$ git push heroku master
Enumerating objects: 165, done.
Counting objects: 100% (165/165), done.
Delta compression using up to 4 threads
Compressing objects: 100% (147/147), done.
Writing objects: 100% (165/165), 553.94 KiB | 4.54 MiB/s, done.
Total 165 (delta 72), reused 0 (delta 0)
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
remote:        Downloading and installing node 10.16.0...
remote:        Using default npm version: 6.9.0
remote:
remote: -----> Installing dependencies
remote:        Installing node modules (package.json + package-lock)
remote:
remote:        > grpc@1.20.3 install /tmp/build_3c9b53b256681f7d1288065a7e111869/node_modules/grpc
remote:        > node-pre-gyp install --fallback-to-build --library=static_library
remote:
remote:        [grpc] Success: "/tmp/build_3c9b53b256681f7d1288065a7e111869/node_modules/grpc/src/node/extension_binary/node-v64-linux-x64-glibc/grpc_node.node" is installed via remote
remote:
remote:        > node-sass@4.12.0 install /tmp/build_3c9b53b256681f7d1288065a7e111869/node_modules/node-sass
remote:        > node scripts/install.js
remote:
remote:        Downloading binary from https://github.com/sass/node-sass/releases/download/v4.12.0/linux-x64-64_binding.node
remote:        Download complete
remote:        Binary saved to /tmp/build_3c9b53b256681f7d1288065a7e111869/node_modules/node-sass/vendor/linux-x64-64/binding.node
remote:        Caching binary to /tmp/npmcache.7zhTn/node-sass/4.12.0/linux-x64-64_binding.node
remote:
remote:        > core-js@2.6.9 postinstall /tmp/build_3c9b53b256681f7d1288065a7e111869/node_modules/core-js
remote:        > node scripts/postinstall || echo "ignore"
remote:
remote:
remote:        > core-js-pure@3.1.3 postinstall /tmp/build_3c9b53b256681f7d1288065a7e111869/node_modules/core-js-pure
remote:        > node scripts/postinstall || echo "ignore"
remote:
remote:
remote:        > protobufjs@6.8.8 postinstall /tmp/build_3c9b53b256681f7d1288065a7e111869/node_modules/protobufjs
remote:        > node scripts/postinstall
remote:
remote:
remote:        > node-sass@4.12.0 postinstall /tmp/build_3c9b53b256681f7d1288065a7e111869/node_modules/node-sass
remote:        > node scripts/build.js
remote:
remote:        Binary found at /tmp/build_3c9b53b256681f7d1288065a7e111869/node_modules/node-sass/vendor/linux-x64-64/binding.node
remote:        Testing binary
remote:        Binary is fine
remote:
remote:        > nodemon@1.19.1 postinstall /tmp/build_3c9b53b256681f7d1288065a7e111869/node_modules/nodemon
remote:        > node bin/postinstall || exit 0
remote:
remote:        Love nodemon? You can now support the project via the open collective:
remote:         > https://opencollective.com/nodemon/donate
remote:
remote:
remote:        > nuxt@2.8.1 postinstall /tmp/build_3c9b53b256681f7d1288065a7e111869/node_modules/nuxt
remote:        > opencollective || exit 0
remote:
remote:        added 1355 packages from 652 contributors and audited 14311 packages in 33.739s
remote:        found 0 vulnerabilities
remote:
remote:
remote: -----> Build
remote:        Detected both "build" and "heroku-postbuild" scripts
remote:        Running heroku-postbuild
remote:
remote:        > nuxt-news@1.0.0 heroku-postbuild /tmp/build_3c9b53b256681f7d1288065a7e111869
remote:        > npm run build
remote:
remote:
remote:        > nuxt-news@1.0.0 build /tmp/build_3c9b53b256681f7d1288065a7e111869
remote:        > nuxt build
remote:
remote:        ℹ Production build
remote:        ✔ Builder initialized
remote:        ✔ Nuxt files generated
remote:        ℹ Compiling Client
remote:        ✔ Client: Compiled successfully in 27.12s
remote:
remote: Hash: af3da790c9a11a989e08
remote: Version: webpack 4.33.0
remote: Time: 27119ms
remote: Built at: 06/11/2019 4:32:23 PM
remote:                          Asset      Size  Chunks                    Chunk Names
remote: ../server/client.manifest.json  15.7 KiB          [emitted]
remote:        20f94eb005e27b9bf86e.js   172 KiB       2  [emitted]         commons.app
remote:        283cf4af54c3c3e36859.js  98.2 KiB       1  [emitted]         app
remote:        5cf6a5653fbd211dcfc9.js   832 KiB       8  [emitted]  [big]  vendors.app
remote:        62039e28e50464ea0fb7.js  2.33 KiB       7  [emitted]         runtime
remote:        733f7fe70383e2191b55.js  3.46 KiB       6  [emitted]         pages/register/index
remote:        80891bd9d1a5448e5908.js  21.3 KiB       0  [emitted]         vendors.pages/login/index.pages/register/index
remote:                       LICENSES  4.67 KiB          [emitted]
remote:        b3df1597eb1e73973756.js  12.4 KiB       4  [emitted]         pages/index
remote:        ba22a0f5cdff2b4da576.js  4.82 KiB       3  [emitted]         pages/headlines/_slug
remote:        d45fc48d47bd54e59106.js  3.45 KiB       5  [emitted]         pages/login/index
remote:                img/57caa4f.jpg   414 KiB          [emitted]  [big]
remote:  + 1 hidden asset
remote: Entrypoint app [big] = 62039e28e50464ea0fb7.js 20f94eb005e27b9bf86e.js 5cf6a5653fbd211dcfc9.js 283cf4af54c3c3e36859.js
remote:
remote: WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
remote: This can impact web performance.
remote: Assets: 
remote:   img/57caa4f.jpg (414 KiB)
remote:   5cf6a5653fbd211dcfc9.js (832 KiB)
remote:
remote: WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (1000 KiB). This can impact web performance.
remote: Entrypoints:
remote:   app (1.08 MiB)
remote:       62039e28e50464ea0fb7.js
remote:       20f94eb005e27b9bf86e.js
remote:       5cf6a5653fbd211dcfc9.js
remote:       283cf4af54c3c3e36859.js
remote: 
remote:        ℹ Generating pages
remote:        ✔ Generated /login
remote:        ✔ Generated /register
remote:        ✔ Generated /
remote:
remote: -----> Caching build
remote:        - node_modules
remote:
remote: -----> Pruning devDependencies
remote:        Skipping because NPM_CONFIG_PRODUCTION is 'false'
remote:
remote: -----> Build succeeded!
remote: -----> Discovering process types
remote:        Procfile declares types     -> (none)
remote:        Default types for buildpack -> web
remote:
remote: -----> Compressing...
remote:        Done: 65.3M
remote: -----> Launching...
remote:        Released v7
remote:        https://nuxt-news-peelmicro.herokuapp.com/ deployed to Heroku
remote:
remote: Verifying deploy... done.
To https://git.heroku.com/nuxt-news-peelmicro.git
 * [new branch]      master -> master
```

- We can access https://nuxt-news-peelmicro.herokuapp.com/ 

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SeamlessAppDeploymentWithHeroku13.png)

- We are getting that error because the `process.env.NEWS_API_KEY` value cannot be accessed from the `axios` plugin.

- As explain on [The env Property](https://nuxtjs.org/api/configuration-env) we need to add the `NUXT_ENV_NEWS_API_KEY` environment variable in Production that is going to be available in the build phase, that is when the `axios` plugin we've created needs it. The `NEWS_API_KEY` environment variable can be removed from `Heroku`

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SeamlessAppDeploymentWithHeroku14.png)

- We also need to change the `plugin\axios.js` document to use the `env` from the `context` instead of the `process.env` because the latest is not available in the build phase.

> plugin\axios.js
```js
export default function({ $axios, env }) {
  $axios.onRequest(config => {
    config.headers.common["Authorization"] =
      env.NEWS_API_KEY || env.NUXT_ENV_NEWS_API_KEY;
  });
}
```

- We also need to modify the `pages\index.vue` and `store\index.js` to fix some bugs with the `feed`.

> pages\index.vue
```html
<template>
  <div class="md-layout md-alignment-center" style="margin: 4em 0">
    <!-- Top Navigation -->
    <md-toolbar class="fixed-toolbar" elevation="1">
      <md-button @click="showLeftSidepanel = true" class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>
      <nuxt-link class="md-primary md-title" to="/">NuxtNews</nuxt-link>

      <div class="md-toolbar-section-end">
        <template v-if="isAuthenticated">
          <md-button>
            <md-avatar>
              <img :src="user.avatar" :alt="user.email">
            </md-avatar>
            {{user.email}}
          </md-button>
          <md-button @click="logoutUser">Logout</md-button>
        </template>

        <template v-else>
          <md-button to="/login">Login</md-button>
          <md-button to="/register">Register</md-button>
        </template>
        <md-button class="md-primary" @click="showSearchDialog = true">Search</md-button>
        <md-button class="md-accent" @click="showRightSidepanel = true">Categories</md-button>
      </div>
    </md-toolbar>

    <!-- Search Dialog -->
    <md-dialog :md-active.sync="showSearchDialog">
      <md-dialog-title>Search Headlines</md-dialog-title>

      <div class="md-layout" style="padding: 1em">
        <md-field>
          <label>Search Term(s)</label>
          <md-input
            v-model="query"
            placeholder="Use quotes for exact matches, AND / OR / NOT for multiple terms"
            maxlength="30"
          ></md-input>
        </md-field>
        <md-datepicker v-model="fromDate" md-immediately>
          <label>Select starting date (optional)</label>
        </md-datepicker>
        <md-datepicker v-model="toDate" md-immediately>
          <label>Select ending date (optional)</label>
        </md-datepicker>
        <md-field>
          <label for="sortBy">Sort search results by criteria (optional)</label>
          <md-select v-model="sortBy" name="sortBy" id="sortBy" md-dense>
            <md-option value="publishedAt">Newest (default)</md-option>
            <md-option value="relevancy">Relevant</md-option>
            <md-option value="popularity">Popular</md-option>
          </md-select>
        </md-field>
      </div>

      <md-dialog-actions>
        <md-button class="md-accent" @click="showSearchDialog = false">Cancel</md-button>
        <md-button class="md-primary" @click="searchHeadlines">Search</md-button>
      </md-dialog-actions>
    </md-dialog>

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

      <!-- Default Markup (if Feed Empty) -->
      <md-empty-state
        class="md-primary"
        v-if="feed.length === 0 && !user"
        md-icon="bookmarks"
        md-label="Nothing in Feed"
        md-description="Login to bookmark headlines"
      >
        <md-button to="/login" class="md-primary md-raised">Login</md-button>
      </md-empty-state>

      <md-empty-state
        v-else-if="feed.length === 0"
        class="md-accent"
        md-icon="bookmark_outline"
        md-label="Nothing in Feed"
        md-description="Anything you bookmark will be safely stored here"
      ></md-empty-state>

      <!-- Feed Content (if Feed Not Empty) -->
      <md-list class="md-triple-line" v-else v-for="headline in feed" :key="headline.i">
        <md-list-item>
          <md-avatar>
            <img :src="headline.urlToImage" :alt="headline.title">
          </md-avatar>

          <div class="md-list-item-text">
            <span>
              <a :href="headline.url" target="_blank">{{headline.title}}</a>
            </span>
            <span>{{headline.source.name}}</span>
            <span @click="saveHeadline(headline)">View Comments</span>
          </div>

          <md-button
            @click="removeHeadlineFromFeed(headline)"
            class="md-icon-button md-list-action"
          >
            <md-icon class="md-accent">delete</md-icon>
          </md-button>
        </md-list-item>
        <md-divider class="md-inset"></md-divider>
      </md-list>
    </md-drawer>

    <!-- News Categories (Right Drawer) -->
    <md-drawer class="md-right" md-fixed :md-active.sync="showRightSidepanel">
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
          <md-icon :class="newsCategory.path === category ? 'md-primary' : ''">{{newsCategory.icon}}</md-icon>
          <span class="md-list-item-text">{{newsCategory.name}}</span>
        </md-list-item>
      </md-list>
    </md-drawer>

    <!-- App Content -->
    <div class="md-layout-item md-size-95">
      <md-content class="md-layout md-gutter" style="background: #007998; padding: 1em;">
        <ul
          v-for="headline in headlines"
          :key="headline.id"
          class="md-layout-item md-large-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100"
        >
          <md-card style="margin-top: 1em;" md-with-hover>
            <md-ripple>
              <md-card-media md-ratio="16:9">
                <img :src="headline.urlToImage" :alt="headline.title">
              </md-card-media>

              <md-card-header>
                <div class="md-title">
                  <a :href="headline.url" target="_blank">{{headline.title}}</a>
                </div>
                <div @click="loadSource(headline.source.id)">
                  {{headline.source.name}}
                  <md-icon class="small-icon">book</md-icon>
                </div>
                <div class="md-subhead" v-if="headline.author">
                  {{headline.author}}
                  <md-icon class="small-icon">face</md-icon>
                </div>
                <div class="md-subhead">
                  {{headline.publishedAt | publishedTimeToNow}}
                  <md-icon class="small-icon">alarm</md-icon>
                </div>
              </md-card-header>

              <md-card-content>{{headline.description}}</md-card-content>

              <md-card-actions>
                <md-button
                  @click="addHeadlineToFeed(headline)"
                  class="md-icon-button"
                  :class="isInFeed(headline.title)"
                >
                  <md-icon>bookmark</md-icon>
                </md-button>
                <md-button @click="saveHeadline(headline)" class="md-icon-button">
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
    showSearchDialog: false,
    newsCategories: [
      { name: "Top Headlines", path: "", icon: "today" },
      { name: "Technology", path: "technology", icon: "keyboard" },
      { name: "Business", path: "business", icon: "business_center" },
      { name: "Entertainment", path: "entertainment", icon: "weekend" },
      { name: "Health", path: "health", icon: "fastfood" },
      { name: "Science", path: "science", icon: "fingerprint" },
      { name: "Sports", path: "sports", icon: "golf_course" }
    ],
    query: "",
    fromDate: "",
    toDate: "",
    sortBy: ""
  }),
  async fetch({ store }) {
    await store.dispatch(
      "loadHeadlines",
      `/api/top-headlines?country=${store.state.country}&category=${
        store.state.category
      }`
    );
    await store.dispatch("loadUserFeed");
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
    feed() {
      return this.$store.getters.feed;
    },
    category() {
      return this.$store.getters.category;
    },
    country() {
      return this.$store.getters.country;
    },
    source() {
      return this.$store.getters.source;
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
    async loadSource(sourceId) {
      if (sourceId) {
        this.$store.commit("setSource", sourceId);
        await this.$store.dispatch(
          "loadHeadlines",
          `/api/top-headlines?sources=${this.source}`
        );
      }
    },
    async searchHeadlines() {
      await this.$store.dispatch(
        "loadHeadlines",
        `/api/everything?q=${this.query}&from=${this.dateToISOString(
          this.fromDate
        )}&to=${this.dateToISOString(this.toDate)}&sortBy=${this.sortBy}`
      );
      this.showSearchDialog = false;
    },
    async addHeadlineToFeed(headline) {
      if (this.user) {
        await this.$store.dispatch("addHeadlineToFeed", headline);
      }
    },
    async removeHeadlineFromFeed(headline) {
      await this.$store.dispatch("removeHeadlineFromFeed", headline);
    },
    async saveHeadline(headline) {
      await this.$store.dispatch("saveHeadline", headline).then(() => {
        this.$router.push(`/headlines/${headline.slug}`);
      });
    },
    changeCountry(country) {
      this.$store.commit("setCountry", country);
    },
    logoutUser() {
      this.$store.dispatch("logoutUser");
    },
    isInFeed(title) {
      const inFeed =
        this.feed.findIndex(headline => headline.title === title) > -1;
      return inFeed ? "md-primary" : "";
    },
    dateToISOString(date) {
      if (date) {
        return new Date(date).toISOString();
      }
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

> store\index.js
```js
import md5 from "md5";
import slugify from "slugify";
import db from "~/plugins/firestore";
import { saveUserData, clearUserData } from "~/utils";
import defaultImage from "~/assets/default-image.jpg";

export const state = () => ({
  headlines: [],
  headline: null,
  feed: [],
  loading: false,
  token: "",
  user: null,
  category: "",
  country: "us",
  source: ""
});

export const mutations = {
  setHeadlines(state, headlines) {
    state.headlines = headlines;
  },
  setHeadline(state, headline) {
    state.headline = headline;
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
  setSource(state, source) {
    state.source = source;
  },
  setFeed(state, headlines) {
    state.feed = headlines;
  },
  clearToken: state => (state.token = ""),
  clearUser: state => (state.user = null),
  clearFeed: state => (state.feed = [])
};

export const actions = {
  async loadHeadlines({ commit }, apiUrl) {
    commit("setLoading", true);
    const { articles } = await this.$axios.$get(apiUrl);
    const headlines = articles.map(article => {
      const slug = slugify(article.title, {
        replacement: "-",
        remove: /[^a-zA-Z0-9 -]/g,
        lower: true
      });
      if (!article.urlToImage) {
        article.urlToImage = defaultImage;
      }
      const headline = { ...article, slug };
      return headline;
    });
    commit("setLoading", false);
    commit("setHeadlines", headlines);
  },
  async addHeadlineToFeed({ state }, headline) {
    const feedRef = db
      .collection(`users/${state.user.email}/feed`)
      .doc(headline.slug);

    await feedRef.set(headline);
  },
  async loadUserFeed({ state, commit }) {
    if (state.user) {
      const feedRef = db.collection(`users/${state.user.email}/feed`);

      await feedRef.onSnapshot(querySnapshot => {
        let headlines = [];
        querySnapshot.forEach(doc => {
          const data = doc.data();
          const id = doc.id;
          const headline = { ...data, id };
          headlines.push(headline);
        });

        if (querySnapshot.empty) {
          headlines = [];
        }
        commit("setFeed", headlines);
      });
    }
  },
  async loadHeadline({ commit }, headlineSlug) {
    const headlineRef = db.collection("headlines").doc(headlineSlug);
    const commentsRef = db
      .collection(`headlines/${headlineSlug}/comments`)
      .orderBy("likes", "desc");

    let loadedHeadline = {};
    await headlineRef.get().then(async doc => {
      if (doc.exists) {
        loadedHeadline = doc.data();

        await commentsRef.get().then(querySnapshot => {
          if (querySnapshot.empty) {
            commit("setHeadline", loadedHeadline);
          }
          let loadedComments = [];
          querySnapshot.forEach(doc => {
            loadedComments.push(doc.data());
            loadedHeadline["comments"] = loadedComments;
            commit("setHeadline", loadedHeadline);
          });
        });
      }
    });
  },
  async sendComment({ state, commit }, comment) {
    const commentsRef = db.collection(
      `headlines/${state.headline.slug}/comments`
    );

    commit("setLoading", true);
    await commentsRef.doc(comment.id).set(comment);
    await commentsRef
      .orderBy("likes", "desc")
      .get()
      .then(querySnapshot => {
        let comments = [];
        querySnapshot.forEach(doc => {
          comments.push(doc.data());
          const updatedHeadline = { ...state.headline, comments };
          commit("setHeadline", updatedHeadline);
        });
      });
    commit("setLoading", false);
  },
  async likeComment({ state, commit }, commentId) {
    const commentsRef = db
      .collection(`headlines/${state.headline.slug}/comments`)
      .orderBy("likes", "desc");
    const likedCommentRef = db
      .collection("headlines")
      .doc(state.headline.slug)
      .collection("comments")
      .doc(commentId);

    await likedCommentRef.get().then(doc => {
      if (doc.exists) {
        const prevLikes = doc.data().likes;
        const currentLikes = prevLikes + 1;
        likedCommentRef.update({
          likes: currentLikes
        });
      }
    });

    await commentsRef.onSnapshot(querySnapshot => {
      let loadedComments = [];
      querySnapshot.forEach(doc => {
        loadedComments.push(doc.data());
        const updatedHeadline = {
          ...state.headline,
          comments: loadedComments
        };
        commit("setHeadline", updatedHeadline);
      });
    });
  },
  async saveHeadline(context, headline) {
    const headlineRef = db.collection("headlines").doc(headline.slug);

    let headlineId;
    await headlineRef.get().then(doc => {
      if (doc.exists) {
        headlineId = doc.id;
      }
    });

    if (!headlineId) {
      await headlineRef.set(headline);
    }
  },
  async removeHeadlineFromFeed({ state }, headline) {
    const headlineRef = db
      .collection(`users/${state.user.email}/feed`)
      .doc(headline.title);

    await headlineRef.delete();
  },
  async authenticateUser({ commit }, userPayload) {
    try {
      commit("setLoading", true);
      const authUserData = await this.$axios.$post(`/${userPayload.action}/`, {
        email: userPayload.email,
        password: userPayload.password,
        returnSecureToken: userPayload.returnSecureToken
      });
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
    commit("clearFeed");
    clearUserData();
  }
};

export const getters = {
  headlines: state => state.headlines,
  headline: state => state.headline,
  feed: state => state.feed,
  loading: state => state.loading,
  user: state => state.user,
  isAuthenticated: state => !!state.token,
  category: state => state.category,
  country: state => state.country,
  source: state => state.source
};
```

- We need to deploy the solution to `Heroku` again and test if it works now.

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SeamlessAppDeploymentWithHeroku15.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SeamlessAppDeploymentWithHeroku16.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SeamlessAppDeploymentWithHeroku17.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SeamlessAppDeploymentWithHeroku18.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SeamlessAppDeploymentWithHeroku19.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SeamlessAppDeploymentWithHeroku20.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SeamlessAppDeploymentWithHeroku21.png)

![](/images/frontend/vuejs-full-stack-vue-with-graphql-the-ultimate-guide/SeamlessAppDeploymentWithHeroku22.png)

## Section 15: BONUS 0 / 1|1min

### 37. Bonus Lecture 1min

