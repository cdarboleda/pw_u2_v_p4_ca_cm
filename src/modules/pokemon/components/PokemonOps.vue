<template>
	<div class="contenedor-opciones">
		<ul>
			<li
				v-for="pokemon in options"
				:key="pokemon.id"
				@click="$emit('seleccionado', pokemon.id)"
			>
				{{ pokemon.name }}
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: {
			options: {
				type: Array,
				required: true,
			}
		},
		methods: {
			pruebaDeEvento() {
				console.log('Prueba de evento')
			}
		}
	}
</script>

<style scoped>
	ul {
		list-style-type: none;
		padding-inline-start: 0px;
	}

	li {
		border: 3px solid #385c91;
		border-radius: 5px;
		background-color: #d9b53e;
		margin-bottom: 5px;
		width: 200px;
		cursor: pointer;
		padding: 3px;
		color: white;
		font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
	}

	li:hover {
		background-color: rgb(224, 94, 94);
	}

	.contenedor-opciones {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 5px;
	}

</style>