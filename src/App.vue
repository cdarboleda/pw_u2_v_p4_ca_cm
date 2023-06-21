<template>
  <img alt="Vue logo" src="./assets/toon_link.webp" width="100"> 
  <Contador titulo="Estudiante" v-bind:inicio="4+2"/>
  <Contador titulo= "Profesor" :inicio = "102"/>
  <!-- <Calculadora/> -->
</template>


<script>
  import Contador from './components/Contador.vue' //Referencia del componente
  //import Calculadora from './components/Calculadora.vue';
export default {
  name: 'App',
  components: {
   Contador,
    //Calculadora
  }
}
</script>

<style>
 #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  margin-top: 60px;
} 
</style>
