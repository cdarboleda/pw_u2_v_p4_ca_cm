<template>
  <h1>Juego Pokémon</h1>
  <PokemonImg :pokemonId="50" :muestraPokemon="true"/>
  <!-- <PokemonImg :pokemonId="51" :muestraPokemon="false"/> -->
  <PokemonOps :options="pokemonsArray" />

</template>

<script>
import PokemonImg from "../components/PokemonImg.vue";
import PokemonOps from "../components/PokemonOps.vue";

//Se importa el metodo fachada del cliente
import getPokemonFacade from '../helpers/clientePokemonAPI'
export default {

  data(){
      return{
        pokemonsArray: [],
      }
  },
    components : {
        PokemonImg,
        PokemonOps,
    },
    methods:{
      //metodo que se ejecuta siempre cuando el componente se monta al DOM(es especial)
      
      async chargeStartGame(){
        //llama al metodo interfaz del cliente, que devuelve un arreglo de 4 pokemon
          this.pokemonsArray = await getPokemonFacade();
          console.log('hol')
      },
    },
    mounted(){
        console.log("se monto el componente");
        this.chargeStartGame();
      },

}
</script>



<style>

</style>