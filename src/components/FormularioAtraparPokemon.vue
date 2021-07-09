<template>
    <div>
        <b-row>
            <b-col>
                <b-form >
                    <b-form-group class="mt-3 mb-2" label="Tipo Pokémon:">
                        <select class=" custom-select form-select" v-model="pokemon.tipoPokemonnombre" id="nombreProducto" @change="onChangeTipoPokemon($event)">
                            <option v-for="item, index in listaPokemonTipoOpts" :key="index" :value="item.display">
                                {{ item.display }}
                            </option>
                        </select>
                    </b-form-group>
                    <b-form-group class="mt-3 mb-2" label="Nombre Pokemón:" label-for="NombrePokemon" > 
                        <select class=" custom-select form-select" v-model="pokemon.nombrePokemon" id="nombreProducto" @change="onPokemonSelect($event)">
                            <option v-for="item, index in listaPokemonPorTipoOpts" :key="index" :value="item.url">
                                {{ item.display }}
                            </option>
                        </select>
                        
                    </b-form-group>
                    <b-form-group class="mt-3 mb-2" label="Lugar:" label-for="Lugar">
                        <b-form-input id="Lugar" v-model="pokemon.lugar"  type="text"></b-form-input>
                    </b-form-group> 
                    <button @click="guardarPokemonSeleccionado()" type="button"  class=" m-3 btn btn-primary button">Atrapar</button>
                </b-form>
            </b-col>
        </b-row>
    </div> 
</template>

<script>

import {mapState,mapActions} from "vuex";
// let myTrack = new Audio ('..public/')
export default {
    name:"FormularioAtrapaPokemon",
    computed: {
        ...mapState(['pokemon','listaPokemonTipoOpts','arrayAPIPokemon','listaPokemonPorTipoOpts']),
    },
    methods:{
        ...mapActions(['pushArrayRutasAction','ArrayAPIPostPokemonAction',
        'DisplaydeTiposdePokemonAction', 'getPokemonByType', 'getSelectedPokemonData', 'agregarPokemonAlArray'
        ]),
        fetchPokemonEspecifico() {
            const a = this.listaPokemonTipoOpts.filter((elemento) => elemento.display == this.pokemon.tipoPokemonnombre)
            this.pushArrayRutasAction(a[0].display)
            this.getPokemonByType(this.pokemon.tipoPokemonnombre)
                this.pushArrayRutasAction();
        },
        onChangeTipoPokemon($event) {
            this.getPokemonByType($event.target.value);
        },
        onPokemonSelect($event) {
            
            this.getSelectedPokemonData($event.target.value)
        },
        guardarPokemonSeleccionado() {
            
            this.agregarPokemonAlArray(this.pokemon.lugar);
            this.pushArrayRutasAction();
        }
    },
    mounted() {
        this.DisplaydeTiposdePokemonAction();
    },

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300&display=swap');
.letraMayuscula{
    text-transform: capitalize;
    }
.col-md-10{
    justify-content: center;
}
.col-lg-6{
    justify-content: flex-start;
}
</style>