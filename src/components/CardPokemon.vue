<template>
<div>
    <b-row>
        <b-col sm="4" md ="4" lg="3" v-for= "pokemon, index in array" :key="'A'+index">
            <b-card 
                :title="`${pokemon.nombre}`"
                :img-src="`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`"
                img-alt="Image"
                img-top
                tag="article"
                class=" mb-2 letraMayuscula" 
            >
                <b-card-text v-for ="habilidades, index in pokemon.habilidades" :key ="'B'+index"> <strong> Habilidad: </strong> {{ habilidades.ability.name }}</b-card-text>
                <b-card-text v-for ="tipos, index in pokemon.tipos" :key ="'C'+index"> <strong> Tipo: </strong> {{ tipos.type.name}}</b-card-text>
                <b-card-text> <strong>Altura:</strong> {{ pokemon.altura *10}} cm</b-card-text>
                <b-card-text> <strong>Peso:</strong> {{ pokemon.peso / 10 }} kg</b-card-text>
                <b-card-text> <strong>Lugar:</strong> {{ pokemon.lugar }} </b-card-text>
                <b-card-text> <strong>Se atrapó:</strong> {{ pokemon.atrapado }}</b-card-text>
            </b-card>
        </b-col>
    </b-row>
</div>

</template>

<script>

export default {
    name:"CardPokemon",
    props:{
    array: Array    
    }

}
</script>

<style>
    .letraMayuscula {
        text-transform: capitalize;
    }
    .card-title{
    font-size: 25px;
    font-weight: bold;
    }

</style>