<template>
	<div class="navBar">
		<router-link class="routerElem" to="/">Bienvenida</router-link>
		<router-link class="routerElem" to="/premios">Premios</router-link>
		<router-link class="routerElem" to="/pokemonjuego"
			>Pokemon Game</router-link
		>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped>
	.navBar {
    display: flex;

    justify-content: center;
		font-weight: bold;
		padding: 10px;
    color: white;
    font-size: larger;
		background-color: #d9b53e;
		border: 10px solid #385c91;
    border-radius: 5px;
    margin-bottom: 25px;
	}
	.routerElem {
		margin: 0 25px;
    padding: 10px 0px;
	}
	.routerElem:hover {
		background-color: rgb(224, 94, 94);
	}
</style>