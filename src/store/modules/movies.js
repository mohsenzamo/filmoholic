import axios from 'axios'

export default {
    namespaced: true,
    state: {
        moviesList: [],
        params: {
            api_key: process.env.VUE_APP_BASE_API_KEY,
            sort_by: 'release_date.desc',
            page: 1,
            with_genres: '',
            'primary_release_date.gte': '',
            'primary_release_date.lte': ''
        },
        totalPages: 1
    },
    getters: {
        moviesList: state => state.moviesList,
        page: state => state.params.page,
        totalPages: state => state.totalPages,
        genres: state => state.params.with_genres,
    },
    mutations: {
        setMovies(state, movies) {
            state.moviesList = movies
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages
        },
        setParams(state, params) {
            state.params = params
        },
        setGenre(state, genre) {
            state.genre = genre
        }
    },
    actions: {
        fetch({ commit, state }, params) {
            params = Object.assign({}, state.params, params)
            return new Promise((resolve, reject) => {
                axios.get(process.env.VUE_APP_BASE_API_URL + '/discover/movie', {
                    params: params
                })
                    .then((response) => {
                        commit('setMovies', response.data.results)
                        commit('setTotalPages', response.data.total_pages)
                        commit('setParams', params)
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
