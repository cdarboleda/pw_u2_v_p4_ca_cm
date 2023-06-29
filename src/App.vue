<template>
  <!-- <CaracolaMagica/> -->
  <PokemonPage/>
</template>


<script>
  import CaracolaMagica from './components/CaracolaMagica.vue';
  import PokemonPage from './modules/pokemon/components/pages/PokemonPage.vue'

export default {
  name: 'App',
  components: {
    CaracolaMagica,
    PokemonPage,
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

  /* display: flex;
  flex-direction: row; */
} 
</style>
