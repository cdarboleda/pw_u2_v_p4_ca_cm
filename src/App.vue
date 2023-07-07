<template>
  <NavBar />
  <router-view />
</template>


<script>

import NavBar from './modules/pokemon/components/NavBar.vue'


export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;

}

html,
body {
  background-color: rgba(0, 0, 0, 0);
}

html {
  background: linear-gradient(90deg, rgb(36, 0, 0) 0%, rgb(194, 12, 12) 35%, rgb(255, 115, 0) 100%);
}


button {
  border: 3px solid #385c91;
  border-radius: 5px;
  background-color: #d9b53e;
  margin-bottom: 5px;
  cursor: pointer;
  padding: 3px;
  color: white;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}

button:hover {
  background-color: rgb(224, 94, 94);
}
</style>
