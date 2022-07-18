import axios from 'axios'

export default {
    namespaced: true,
    state: {
        popularMoviesList: []
    },
    getters: {
        popularMoviesList: state => state.popularMoviesList,
    },
    mutations: {
        setPopularMovies(state, popularMovies) {
            state.popularMoviesList = popularMovies
        },
    },
    actions: {
        fetch({ commit }) {
            return new Promise((resolve, reject) => {
                axios.get(process.env.VUE_APP_BASE_API_URL + '/discover/movie', {
                    params: {
                        api_key: process.env.VUE_APP_BASE_API_KEY,
                        sort_by: 'popularity.desc',
                        page: 1
                    }
                })
                    .then((response) => {
                        commit('setPopularMovies', response.data.results)
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
