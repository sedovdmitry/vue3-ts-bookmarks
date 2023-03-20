# Vue 3, Vuex Typescript Bookmarks

## Description

This is just [testing task](https://studioratio.notion.site/Frontend-Ratio-d3983ed6d12e4cc0b844bed9b9417537) for one company. By task we need to use [this template](https://github.com/vuejs-templates/webpack), but it is deprecated, and I decided to use vue-cli.

[![Main page screenshot](https://raw.githubusercontent.com/sedovdmitry/vue3-ts-bookmarks/main/public/Screenshot_main_page.png)](https://vue3-ts-bookmarks.vercel.app/)

This App reproduces the work ot the standard feature of the Chrome browser: [chrome://bookmarks/](chrome://bookmarks/). For imitate working with the backend I am using [GNEWS API](https://gnews.io) - you need get an API token to run app locally.

**Demo: [see in production](https://vue3-ts-bookmarks.vercel.app/)**

## What we use

Vue cli presets

[![Vue cli preset](https://raw.githubusercontent.com/sedovdmitry/vue3-ts-bookmarks/main/public/project-preset.png)]

* Vue 3
* Typescript
* Router
* Vuex
* Airbnb Linter

* Client API (GNEWS)
* SCSS
* Fontawesome
* Directives

## Features

+ In the App we can add, delete and change our bookmarks
+ Bookmarks is sortable
+ We call the API when user scroll down the page (only one time because free subscription plan on the GNEWS API can't get access to [page parameter](https://gnews.io/docs/v4#http-request-2) in the request)

[![Structure of the project](https://raw.githubusercontent.com/sedovdmitry/vue3-ts-bookmarks/main/public/structure-of-the-project.png)]

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
