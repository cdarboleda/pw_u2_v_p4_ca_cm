<template>
  <div class="contenedor-opciones">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
ul {
  list-style-type: none;
}

li {
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: white;
  margin-bottom: 5px;
  width: 200px;
  cursor: pointer;
}

li:hover {
  background-color: rgb(224, 94, 94);
}

.contenedor-opciones {
  display: flex;
  justify-content: center;
  

}
</style>