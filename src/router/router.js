import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: "/",
        component: ()=>import ('../modules/pokemon/pages/Bienvenida.vue')
    },
    {
        path: "/juego",
        component: ()=>import ('../modules/pokemon/pages/JuegoPage.vue')
    },
    {
        path: "/premios",
        component: ()=>import ('../modules/pokemon/pages/PremiosPage.vue')
    },
    {
        path: "/pokemonjuego",
        component: ()=>import ('../modules/pokemon/pages/PokemonPage.vue')
    },
    {
        path: "/:pathMatch(.*)*",
        component: ()=>import ('../modules/pokemon/pages/NoEncontradaPage.vue')
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;