import axios from 'axios'

export default {
    namespaced: true,
    state: {
        popularActersList: []
    },
    getters: {
        popularActersList: state => state.popularActersList,
    },
    mutations: {
        setPopularActers(state, popularActers) {
            state.popularActersList = popularActers
        },
    },
    actions: {
        fetch({ commit }) {
            return new Promise((resolve, reject) => {
                axios.get(process.env.VUE_APP_BASE_API_URL + '/trending/person/week', {
                    params: {
                        api_key: process.env.VUE_APP_BASE_API_KEY
                    }
                })
                    .then((response) => {
                        commit('setPopularActers', response.data.results)
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
