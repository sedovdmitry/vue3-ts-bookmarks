<template>
  <div class="about margin__top__20">
    <div class="container">
      <div class="flex">
        <div class="col1">
          <h1 id="vue-3-vuex-typescript-bookmarks">Vue 3, Vuex Typescript Bookmarks</h1>
          <h2 id="description">Description</h2>
          <p>This is just
            <a href="https://studioratio.notion.site/Frontend-Ratio-d3983ed6d12e4cc0b844bed9b9417537">
              testing task
            </a> for Notion Company. By task we need to use this template but this deprecated,
            and I decide to use vue-cli.
          </p>
          <p>
            App reproduce work standard feature Chrome browser:
            <a href="chrome://bookmarks/">chrome://bookmarks/</a>.
            For imitate working with backend I use <a href="https://gnews.io">GNEWS API</a> -
            you need get API token to run app locally.
          </p>
          <p><b><a href="https://github.com/sedovdmitry/vue3-ts-bookmarks/">Github repository</a></b></p>
          <h2 id="what-we-use">What we use</h2>
          <p>Vue cli presets</p>
          <p>
            <img
              width="100%"
              height="auto"
              src="/project-preset.png" alt="Vue cli preset"
            />
          </p>
          <ul>
            <li>Vue 3</li>
            <li>Typescript</li>
            <li>Router</li>
            <li>Vuex</li>
            <li>Airbnb Linter</li>
            <li>Client API</li>
            <li>SCSS</li>
            <li>Fontawesome</li>
          </ul>
          <p>In this project I also use some features from Vue: directives and animation.</p>
          <h2 id="features">Features</h2>
          <ul>
            <li>In App we can add, delete and change our bookmarks</li>
            <li>Bookmarks is sortable</li>
            <li>We call API when user scroll page</li>
          </ul>
          <p><img src="/structure-of-the-project.png" alt="Structure of the project"></p>
          <h2 id="project-setup">Project setup</h2>
          <pre>
            npm <span class="hljs-keyword">install</span>
          </pre>
          <h3 id="compiles-and-hot-reloads-for-development">
            Compiles and hot-reloads for development
          </h3>
          <pre>
            npm <span class="hljs-keyword">run</span><span class="bash"> serve</span>
          </pre>
          <h3 id="compiles-and-minifies-for-production">Compiles and minifies for production</h3>
          <pre>
            npm <span class="hljs-keyword">run</span><span class="bash"> build</span>
          </pre>
          <h3 id="lints-and-fixes-files">Lints and fixes files</h3>
          <pre>
            npm <span class="hljs-keyword">run</span><span class="bash"> lint</span>
          </pre>
          <h3 id="customize-configuration">Customize configuration</h3>
          <p>See <a href="https://cli.vuejs.org/config/">Configuration Reference</a>.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
p, li {
  padding: 10px 0;
}

p {
  line-height: 2em;
}

li {
  margin-left: 20px;
}

.about {
  background: $text-color;
}

h1,h2,h3 {
  padding: 20px 0;
}
</style>
