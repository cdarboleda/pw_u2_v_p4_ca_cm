<template>
	<div class="container">
		<div class="calculadora">
			<label class="labelCalculadora" for="">Calculadora</label>
			<button v-on:click="calc('1')">1</button>
			<button v-on:click="calc('2')">2</button>
			<button v-on:click="calc('3')">3</button>
			<button v-on:click="calc('+')">+</button>

			<button v-on:click="calc('4')">4</button>
			<button v-on:click="calc('5')">5</button>
			<button v-on:click="calc('6')">6</button>
			<button v-on:click="calc('-')">-</button>

			<button v-on:click="calc('7')">7</button>
			<button v-on:click="calc('8')">8</button>
			<button v-on:click="calc('9')">9</button>
			<button v-on:click="calc('/')">/</button>

			<button class="botonGrande" v-on:click="calc('0')">0</button>
			<button v-on:click="calcRes">=</button>
			<button v-on:click="calc('*')">*</button>

			<button v-on:click="calcClear">Limpiar</button>
			<p class="labelResultado">{{ resultado }}</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Calculadora',

		data() {
			return {
				resultado: '',
			};
		},
		methods: {
			calc(num) {
				this.resultado += num;
				console.log(this.resultado);
			},
            calcClear() {
				this.resultado = '';
				
			},
			calcRes(){
				this.resultado = this.resultadoComputado;
			}
		},
		computed: {
			resultadoComputado() {
				try {
					this.resultado = parseFloat(eval(this.resultado));
					console.log(this.resultado);
					return this.resultado;
					
				} catch (error) {
                    console.log('En el catch');
					this.calcClear();
					return this.resultado;
				}

			},
		},
	};
</script>


<style>
	.container {
		display: flex;
		/*background-color: aqua;*/
		justify-content: center;
		align-items: center;
	}

	.calculadora {
		display: grid;
		/*Ocupa una linea por elemento */
		grid-template-columns: repeat(4, 75px);
		/*Cuatro columnas con un ancho de 75px */
		/* Tambien podemos limitar las filas 
												   grid-template-rows: repeat(4, 25px);
												   */
		background-color: salmon;
		padding: 20px;

		border-radius: 20px;
		box-shadow: 13px 13px 10px 0px brown;
	}

	.botonGrande {
		grid-column: span 2;
		/*Elemento que ocupa mas de un espacio COLUMNA*/
	}

	.calculadora button {
		margin: 2px 2px 2px 2px;
		border-radius: 10px;
		border: 2px solid orange;
	}

	.calculadora button:hover {
		background-color: rgb(235, 206, 180);
		cursor: pointer;
	}

	.labelResultado {
		grid-column: span 3;
		/*Elemento que ocupa mas de un espacio COLUMNA*/
		background-color: whitesmoke;
		border: 2px solid rgb(216, 82, 82);
	}

	.labelCalculadora {
		grid-column: span 4;
		border: 2px solid rgb(216, 82, 82);
		background-color: orange;
		padding: 10px;
		text-align: center;
		color: white;
		font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
	}
</style>