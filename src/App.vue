<template>
  <img alt="Vue logo" src="./assets/toon_link.webp" width="100">
  <Contador titulo="Estudiante" valor2="2"/>
  <Contador titulo="Profesor" valor2="7"/>
</template>


<script>
  import Contador from './components/Contador.vue' //Referencia del componente

export default {
  name: 'App',
  components: {
    Contador
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
