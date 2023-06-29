<template>
  <h1>Juego Pokémon</h1>
  <PokemonImg :pokemonId="50" :muestraPokemon="true"/>
  <!-- <PokemonImg :pokemonId="51" :muestraPokemon="false"/> -->
  <PokemonOps/>

</template>

<script>
import PokemonImg from '../PokemonImg.vue'
import PokemonOps from '../PokemonOps.vue'
export default {
    components : {
        PokemonImg,
        PokemonOps,
    }
}
</script>

<style>

</style>