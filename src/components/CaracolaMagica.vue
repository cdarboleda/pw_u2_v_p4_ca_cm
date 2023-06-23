<template>
  <h1>Caracola Mágica</h1>
  <img v-if="urlImagen" :src="urlImagen" alt="No se puede presentar">
  <div class="bg-dark"></div>
  <div class="container">
    <input v-model=pregunta type="text" placeholder="Hazme una pregunta">
    <p>Recuerda terminar con un signo de interrogacion (?) la pregunta</p>

    <div>
      <h2>{{ pregunta }}</h2>
      <h1>{{ respuesta }}</h1>
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
    }
  },
  watch: {
    pregunta(value, oldValue) {
      console.log(value);
      console.log(oldValue);

      //Valida si el valor nuevo incluye el signo de ?
      if (value.includes('?')) {
        console.log('Consumir el API');
        this.consumirAPI()
      }
    }
  },
  methods: {
    async consumirAPI() {
      const { answer, image } = await fetch('https://yesno.wtf/api').then(r => r.json())
      this.respuesta = answer;
      this.urlImagen = image;
      console.log(this.respuesta)
      console.log(this.urlImagen)
    }
  }

}
</script>

<style>

img, .bg-dark {
  height: 100vh;
  width: 100vw;
  left: 0px;
  max-width: 100%;
  max-height: 100%;
  position: fixed;
  top: 0px;

}

.bg-dark{
  background-color: rgba(0, 0, 0, 0.3);
}

.container {
  position: relative;

}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}

p, h1, h2 {
  color: white;
}

p{
  font-size: 20px;
  margin-top: 10px;
}
</style>