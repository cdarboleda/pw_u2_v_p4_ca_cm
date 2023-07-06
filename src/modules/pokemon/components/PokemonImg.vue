<template>
<div class="cont">
	<div class="contenedor-imagen">
		<img
			class="oculta-pokemon"
			:src="imagenFuente"
			alt="No se puede mostrar imagen"
		/>
		<img
			v-if="muestraPokemon"
			:src="imagenFuente"
			alt="No se puede mostrar imagen"
		/>
	</div>
</div>

</template>

<script>
	export default {

		props: {
			pokemonId: {
				type: Number,
				required: true
			},
			muestraPokemon: {
				type: Boolean,
				required: true
			}
		},
		computed: {
			imagenFuente() {

				console.log("cambio")
				//return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/+this.pokemonId+.svg"
				return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
			}
		}
	}
</script>

<style scoped>
	.oculta-pokemon {
		filter: brightness(0);
	}

	img {
		position: absolute;
		height: 200px;
		width: 200px;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}

	.contenedor-imagen {
		position: relative;
    align-self: center;
		width: 200px;
		height: 200px;
		background-color: rgb(240, 240, 240);
    border-radius: 10%;
    box-shadow: 0 4px 8px 0px rgba(60, 166, 207, 1), 0 6px 20px 10px rgba(60, 166, 207, 1);
	}

  .cont{
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
</style>