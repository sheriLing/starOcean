<template>
  <div id="app">
    <navMenu></navMenu>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
    <footerMenu></footerMenu>
  </div>
</template>

<script>
import navMenu from '@/components/Navmenu'
import footerMenu from '@/components/Footermenu'

export default {
  components: {
    navMenu,
    footerMenu
  }
}
</script>

<style>
body,html {
  margin: 0;
  padding: 0;
  background: url(./sourses/web_bg.jpg) center fixed no-repeat;
  background-size: cover;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgba(0, 0, 0, 0.8);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
