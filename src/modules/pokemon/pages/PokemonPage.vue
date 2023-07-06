<template>
	<div class="container">
		<h1 v-if="!pokemonCorrecto">Espera por favor......</h1>
		<div v-else>
			<!-- <h1>Juego Pokémon</h1> -->
			<img class="whos" :src="pokemonImgStart" alt="Juego Pokemon" />
			<PokemonImg
				:pokemonId="pokemonCorrecto.id"
				:muestraPokemon="showPokemon"
			/>
			<PokemonOps
				v-show="!showResult"
				:options="pokemonsArray"
				v-on:seleccionado="revisarSeleccion($event)"
			/>
			<h3 v-if="wrongChoice && !showResult">Prueba otro!</h3>
		</div>

		<div v-if="showResult">
			<div v-if="showWin">
        <h1>Ganaste</h1>
				<div class="result">
					<p><b>Puntaje:</b> {{ this.puntaje }}</p>
					<p><b>Intentos:</b> {{ this.intentos }}</p>
				</div>
			</div>
			<h1 v-else>Perdiste</h1>
			<button @click="reiniciar()">REINICIAR</button>
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
				showResult: false,
				puntaje: 0,
				intentos: 0,
				wrongChoice: false,
				pokemonImgStart: 'https://camo.githubusercontent.com/5d1fe59c3f0e4cfb5480bb8d8b1eb3ba58906acef846904fde8afcc5f773adbb/68747470733a2f2f692e696d6775722e636f6d2f583962314b75362e706e67',
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
				this.intentos += 1
				console.log(idSeleccionado)

				if (idSeleccionado === this.pokemonCorrecto.id) {
					this.showWin = true
					this.showResult = true
					this.acumulacionPuntos()
				} else {
					this.wrongChoice = true
				}
				this.conteoIntentos()
				this.showPokemon = true

			},

			acumulacionPuntos() {

				switch (this.intentos) {
					case 1:
						this.puntaje = 5
						break;
					case 2:
						this.puntaje = 2
						break;
					default:
						this.puntaje = 1
						break;
				}

			},

			conteoIntentos() {
				if (this.intentos == 3 && !this.showWin) {
					this.showResult = true
				}
			},

			reiniciar() {
				this.pokemonsArray = []
				this.pokemonCorrecto = null
				this.showPokemon = false
				this.showWin = false
				this.showResult = false
				this.puntaje = 0
				this.intentos = 0
				this.loadStartGame()
				this.wrongChoice = false
			},
		},
		mounted() {
			console.log("se monto el componente");
			this.loadStartGame();
		},

	}
</script>

<style>
	.result {
		display: flex;
		flex-direction: row;
		align-content: center;
		justify-content: center;
		gap: 100px;
	}
	.whos {
		height: 100px;
	}
</style>