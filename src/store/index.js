import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {

        arrayRutas: [],
        arrayfiltrado: [],
        pokemon: {},
        listaPokemonTipoOpts: [],
        listaPokemonPorTipoOpts: [],
        urlPokemonSeleccionado: "",
        pokemonSeleccionado: {},
        pokemonsAtrapados: [],
    },

    mutations: {
        filtroDelArrayPokemon(state, tipoPokemonnombre) {
            console.log(state.pokemonsAtrapados)
            console.log(tipoPokemonnombre)
            state.arrayfiltrado = []
            this.state.pokemonsAtrapados.forEach((pokemon) => {
                console.log("recorriendo dentro del primer arreglo")
                console.log(pokemon)
                let tieneEltipo = false;

                pokemon.tipos.forEach((tipo) => {
                    console.log("recorriendo dentro del segundo arreglo")
                    console.log(tipoPokemonnombre)
                    if (tipo.type.name == tipoPokemonnombre) {
                        tieneEltipo = true;
                    }
                    console.log(tipo)
                });
                if (tieneEltipo == true) {
                    state.arrayfiltrado.push(pokemon)
                }
            })
            console.log("acá el array filtrado")
            console.log(state.arrayfiltrado)
        },
        pushAlArrayRutas(state) {
            state.pokemonSeleccionado.tipos.forEach((tipo) => {
                let valida = state.arrayRutas.some(elem => elem.value == tipo.type.name)
                if (valida == false) {
                    state.arrayRutas.push({
                        value: tipo.type.name,
                        path: `/${tipo.type.name}`
                    })
                }
            })
        },

        cargarListadoDeTiposDePokemon(state, posts) {
            state.listaPokemonTipoOpts = posts;
        },
        cargarListadoDePokemonSeleccionadoTipo(state, posts) {
            state.listaPokemonPorTipoOpts = posts;
        },
        cargarDataPokemonSeleccionado(state, posts) {
            state.pokemonSeleccionado = posts;
        },
        agregarPokemonAlArray(state, descripcion) {
            state.pokemonsAtrapados.push({...state.pokemonSeleccionado, atrapado: new Date().toLocaleDateString(), lugar: descripcion })

        }

    },
    actions: {
        DisplaydeTiposdePokemonAction: async function(context) {
            const data = await fetch("https://pokeapi.co/api/v2/type")
            const posts = await data.json()
            const arrayDeOpciones = posts.results.map((options) => {
                return {
                    display: options.name,
                    id: options.url.split('/')[6]
                };
            });
            context.commit("cargarListadoDeTiposDePokemon", arrayDeOpciones)
        },

        getPokemonByType: async function(context, tipoPokemonnombre) {

            const data = await fetch("https://pokeapi.co/api/v2/type/" + tipoPokemonnombre)
            const posts = await data.json()
            const arraydeNombresPokemon = posts.pokemon.map((value) => {

                return {
                    display: value.pokemon.name,
                    url: value.pokemon.url
                };
            })
            context.commit("cargarListadoDePokemonSeleccionadoTipo", arraydeNombresPokemon)
        },

        getSelectedPokemonData: async function(context, url) {
            const data = await fetch(url)
            const posts = await data.json()
            const dataPokemon = {
                nombre: posts.name,
                imagen: posts.sprites.front_default,
                id: posts.id,
                habilidades: posts.abilities,
                altura: posts.height,
                peso: posts.weight,
                tipos: posts.types
            };
            context.commit("cargarDataPokemonSeleccionado", dataPokemon)
        },
        agregarPokemonAlArray: async function(context, descripcion) {

            context.commit("agregarPokemonAlArray", descripcion)
        },
        pushArrayRutasAction(context) {
            context.commit("pushAlArrayRutas")
        },
        filtradodePokemonAction(context, tipoPokemonnombre) {
            context.commit("filtroDelArrayPokemon", tipoPokemonnombre)
        },
    },
    getters: {
        mostrarRutasTipoPokemon: function(state) {
            return state.arrayRutas
        },
    }

});