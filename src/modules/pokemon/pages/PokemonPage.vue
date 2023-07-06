<template>
  <h1 v-if="!pokemonCorrecto">Espera por favor......</h1>
  <!-- <div v-if="pokemonCorrecto"> -->
  <div v-if="pokemonCorrecto">
    <h1>Juego Pokémon</h1>
    <PokemonImg :pokemonId="pokemonCorrecto.id" :muestraPokemon="showPokemon" />
    <PokemonOps :options="pokemonsArray" v-on:seleccionado="revisarSeleccion($event)" />
    
    <div v-if="showWin" class="c">
      <h1>Ganaste</h1>
    </div>

  </div>
</template>

<script>
import PokemonImg from "../components/PokemonImg.vue";
import PokemonOps from "../components/PokemonOps.vue";

//Se importa el metodo fachada del cliente
import getPokemonFacade from '../helpers/clientePokemonAPI'
export default {

  data() {
    return {
      pokemonsArray: [],
      pokemonCorrecto: null,
      showPokemon: false,
      showWin: false,
    }
  },
  components: {
    PokemonImg,
    PokemonOps,
  },
  methods: {
    //metodo que se ejecuta siempre cuando el componente se monta al DOM(es especial)

    async loadStartGame() {
      //llama al metodo interfaz del cliente, que devuelve un arreglo de 4 pokemon
      const arregloPokemons = await getPokemonFacade();
      console.log(arregloPokemons)
      this.pokemonsArray = arregloPokemons
      const indicePokemon = Math.floor(Math.random() * 4)
      this.pokemonCorrecto = this.pokemonsArray[indicePokemon]
    },

    revisarSeleccion(idSeleccionado) {
      console.log('evento en el padre')
      this.showPokemon = true
      console.log(idSeleccionado)
      if (idSeleccionado === this.pokemonCorrecto.id) {
        console.log('Estas bien??')
        this.showWin = true
      } else {
        console.log('estas mal???')
        this.showWin = false
      }
    }
  },
  mounted() {
    console.log("se monto el componente");
    this.loadStartGame();
  },

}
</script>



<style></style>