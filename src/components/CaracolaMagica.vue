<template>
	<h1>Caracola Mágica</h1>
	<img v-if="urlImagen" :src="urlImagen" alt="No se puede presentar" />
	<div class="bg-dark"></div>
	<div class="container">
		<input v-model="pregunta" type="text" placeholder="Hazme una pregunta" />
		<p>Recuerda terminar con un signo de interrogacion (?) la pregunta</p>
		<p>Si recibes tres YES seguidos, ganas!</p>

		<div>
			<h2>{{ pregunta }}</h2>
			<h1>{{ respuesta }}</h1>
			<h3>{{ contadorYes }}</h3>
			<h1 style="color:yellow" v-if="gano">Tres Yes seguidos. Ganaste!!</h1>
		</div>
	</div>
</template>

<script>
export default {

	data() {
		return {
			pregunta: '',
			respuesta: '',
			urlImagen: null,
			contadorYes: 0,
			gano: false,
		}
	},
	watch: {
		pregunta(value, oldValue) {
			//console.log(value);
			//console.log(oldValue);

			//Valida si el valor nuevo incluye el signo de ?
			if (value.includes('?')) {
				console.log('Consumir el API');
				this.respuesta = 'Pensando'
				this.consumirAPI()
			}
		},


	},
	methods: {
		async consumirAPI() {
			this.resetearContadorYes()
			const { answer, image } = await fetch('https://yesno.wtf/api').then(r => r.json())
			this.respuesta = answer;
			this.urlImagen = image;

			//console.log(this.respuesta);
			this.respuestaYes()
			this.pregunta = ''
			this.validarRespuestaYes()
		},
		validarRespuestaYes() {
			console.log(this.respuesta);
			this.gano = this.contadorYes === 3;
		},
		resetearContadorYes() {
			if (this.gano === true) {
				this.contadorYes = 0;
				this.gano = false;
			}
		},
		respuestaYes() {
			this.contadorYes = this.respuesta === ('yes') ? this.contadorYes + 1 : 0;
		}

	}

}
</script>

<style>

</style>