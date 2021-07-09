<template>
    <b-container>
        <b-row>
            <b-col sm="10" md="4" lg="4">
                <FormularioAtraparPokemon />
            </b-col>
            <b-col sm="12" md="8" lg="8"
                ><CardPokemon :array="pokemonsAtrapados" />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { mapState } from "vuex";
import FormularioAtraparPokemon from "@/components/FormularioAtraparPokemon.vue";
import CardPokemon from "@/components/CardPokemon.vue";

export default {
    name: "AtraparPokemon",
    components: {
        FormularioAtraparPokemon,
        CardPokemon,
    },
    computed: {
        ...mapState(["pokemonsAtrapados"]),
    },
};
</script>

<style>
.col-sm-10 {
  justify-content: center;
}
</style>
