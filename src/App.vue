<template>
  <div id="app">
    <v-app id="myapp" >
      <router-view class="view" />
    </v-app>
  </div>
</template>

<style scoped lang="scss">
@import 'src/styles/_mixin';
#app {
  //@include flex(row, flex-start, flex-start);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  nav {
    padding: 30px;
  }
  .root-main-page {
    @include flex(row, center, flex-start);
    .main-page {
      max-width: 1170px;
    }
  }
}



nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script setup>
</script>
