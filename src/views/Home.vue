<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/Pokebola.png" width="100px" /><br>
    <HelloWorld msg="Bienvenidos a nuestra App Pokédex del Equipo 123" /><br>
    <h2><strong>Podrás atrapar Todos los Pokémons que desees!</strong></h2><br>
    <h3><strong>Anímate dale Play!</strong></h3><br>
    <audio controls>
    <source src="../assets/mp3/Pokemon.mp3" type="audio/mp3">
    </audio>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

<style>
  audio {
border: solid red  ;
border-radius: 30px;
  }
</style>
