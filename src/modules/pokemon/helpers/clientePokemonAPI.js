function getRandom (min, max) {
    //(min(inclusivo) hasta max(exclusivo))
    max++;//Para incluirlo dentro del rango (inclusivo)
    return Math.floor(Math.random()*(max-min)+min);
}

//array de cuatro numeros aleatorios
const getNumericArray = ()=>{
    const arreglo = []
    for(let i=0;i<4;i++){
        arreglo.push(getRandom(1, 600));
    }
    return arreglo;
}

//metodo para consumirAPI, que me devuelva un pokemon de acuerdo a un id
const consumeAPI =  async (id) => {
    return await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r=>r.json())
}


//metodo que me devuelva 4 pokemon con nombre en función de ids aleatorios
//Aquí recibe un arreglo de 4 índices aleatorios
//parametro es un arreglo desesturado, los cuatro elementos que contengan se almacenaran como id1, id2, etc
const getPokemonNames = async ([id1, id2, id3, id4]=[]) => {
    const pokemon1  = await consumeAPI(id1);
    const pokemon2  = await consumeAPI(id2);
    const pokemon3  = await consumeAPI(id3);
    const pokemon4  = await consumeAPI(id4);

    console.log(pokemon1.name);
    console.log(pokemon2.name);
    console.log(pokemon3.name);
    console.log(pokemon4.name);

    const arreglo = [
        {
            "name" : pokemon1.name,"id": pokemon1.id
        },
        {
            "name" : pokemon2.name,"id": pokemon2.id
        },
        {
            "name" : pokemon3.name,"id": pokemon3.id
        },
        {
            "name" : pokemon4.name,"id": pokemon4.id
        }
    ]

    
//Devuelve un arreglo con 4 elementos, cada uno con name e id
    return arreglo;
}

const getPokemons = async () => {
    //return await getPokemonNames(getNumericArray());
    const objArray = await getPokemonNames(getNumericArray());
    console.log(objArray);
    return objArray;
}


const getPokemonFacade = async () =>{
    return await getPokemons();
}

export default getPokemonFacade;