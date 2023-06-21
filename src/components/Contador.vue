<template>
	<h3>{{ evaluarTitulo}}</h3>
	<p>{{ numero }} <sup>2</sup>={{ obtenerCuadradoComputado }}</p>
	<p>{{ numero }} <sup>2</sup>={{ obtenerCuadradoComputado }}</p>
	<p>{{ numero }} <sup>2</sup>={{ obtenerCuadradoComputado }}</p>
	<button @click="aumentarNumero()">+</button>
	<button v-on:click="disminuirNumero()">-</button>
</template>

<script>
	export default {
		name: "Contador", //Nombre del componente

		data() {
			return {
				numero : this.inicio,
				tituloComponente: this.titulo,
			};
		},
		methods: {
			obtenerCuadrado() {
				console.log("Entro al metodo cuadrado");
				return this.numero * this.numero;
			},
			aumentarNumero() {
				this.numero++;
			},
			disminuirNumero() {
				this.numero--;
			},
		},
		computed: {
			obtenerCuadradoComputado() {
				console.log("Entro al metodo cuadrado computado");
				return this.numero * this.numero;
			},

			evaluarTitulo(){
				return this.tituloComponente || 'Valor por defecto';
			}
		},
		props:{
			titulo: String,
			inicio: {
				type: Number,
				required: false,
				default:6,

				validator(value){
					return value > 100 //un boolean
				}
			}
		}
	};
</script>

<style>
	button {
		background-color: #64b687;
		border-radius: 5px;
		border: 1px solid white;
		color: white;
		cursor: pointer;
		margin: 0 5px;
		padding: 5px 15px;
	}

	button:hover {
		background-color: #549972;
	}
</style>