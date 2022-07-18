import axios from 'axios'

export default {
    namespaced: true,
    state: {
        details: []
    },
    getters: {
        details: state => state.details,
    },
    mutations: {
        setDetails(state, detaill) {
            state.details = detaill
        },
    },
    actions: {
        fetch({ commit }, id) {
            return new Promise((resolve, reject) => {
                axios.get(process.env.VUE_APP_BASE_API_URL + '/movie/' + id, {
                    params: {
                        api_key: process.env.VUE_APP_BASE_API_KEY
                    }
                })
                    .then((response) => {
                        commit('setDetails', response.data)
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
