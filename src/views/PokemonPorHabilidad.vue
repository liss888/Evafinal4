<template>
    <b-container>
        <b-row>
            <b-col>
                <CardPokemon :array="arrayfiltrado"/>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import {mapActions, mapState} from "vuex";
import CardPokemon from "@/components/CardPokemon.vue"
export default {
    nombre:"PokemonPorHabilidad",
    components: {CardPokemon},
    methods:{
        ...mapActions(['filtradodePokemonAction','ArrayAPIPostPokemonAction'])
    },
    computed:{
        ...mapState(['arrayfiltrado'])
    },
    watch: {
        $route(to){
            this.filtradodePokemonAction(to.params.habilidad).then((ok => {
                console.log(ok,"despues de la accion")
                console.log(this.arrayfiltrado)
                }));
            console.log(this.arrayfiltrado)
        }
    },
    mounted() {
        this.filtradodePokemonAction(this.$route.params.habilidad);
    },

}

</script>

<style>

</style>