<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable="lg">
          <b-navbar-brand class="justify-content-center" href="#" ><router-link to="/"><img   alt="LogoPokedex" src="../public/img/logoPokedex.png"> </router-link> 
          </b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-navbar-brand href="#"> 
                  <router-link to="/atraparPokemon">Atrapar Pokémon </router-link> 
                </b-navbar-brand>
          <b-navbar-brand class="colorLink" v-for = "el, index in arrayRutas" :key="index"> <router-link :to="'/pokemonPorHabilidad'+el.path"><u> {{el.value}}</u></router-link>  
          </b-navbar-brand> 
              </b-navbar-nav>
            </b-collapse>
      </b-navbar>  
    </div>
  <router-view />
  </div>
</template>

<script>

import { mapState} from "vuex";

export default {
  computed:{
  ...mapState(["arrayRutas"])
},

}
</script>

<style lang="scss">
@import url(//db.onlinewebfonts.com/c/f4d1593471ddebd973210265762a?family=Pokemon);
//@import url('https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300&display=swap');

.navbar{
background-color: #ffffff52;
border:solid rgba(88, 109, 129, 0.801);
border-radius: 5px;
font-family: 'Source Code Pro', monospace;
//font-family: 'Courier Prime', monospace;
}

#app {
  font-family: 'Source Code Pro', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  background-image: url(../public/img/FondoPokedex.jpg);
  background-repeat: no-repeat;
  background-color: rgb(127, 172, 113);
}
html{
  background-image: url(../public/img/FondoPokedex.jpg);
  background-repeat: no-repeat;
}
#nav {
  padding: 30px;

  a {
    &.router-link-exact-active {
      color: rgba(88, 109, 129, 0.801);
    }
  }
}

u {
  color: rgba(88, 109, 129, 0.801);
}
.navbar-toggler{
  display: flex;
  justify-content: flex-end;
  margin-left: 5px;

}
</style>
