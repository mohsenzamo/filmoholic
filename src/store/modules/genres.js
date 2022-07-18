import axios from 'axios'

export default {
    namespaced: true,
    state: {
        genresList: []
    },
    getters: {
        genresList: state => state.genresList,
    },
    mutations: {
        setGenres(state, genres) {
            state.genresList = genres
        },
    },
    actions: {
        fetch({ commit }) {
            return new Promise((resolve, reject) => {
                axios.get(process.env.VUE_APP_BASE_API_URL + '/genre/movie/list', {
                    params: {
                        api_key: process.env.VUE_APP_BASE_API_KEY
                    }
                })
                    .then((response) => {
                        commit('setGenres', response.data.genres)
                        resolve(response.data)
                    })
                    .catch((error) => {
                        reject(error.response.data || error.response)
                    })
            })

        }
    },
    modules: {
    }
}
