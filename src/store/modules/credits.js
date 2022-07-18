import axios from 'axios'

export default {
    namespaced: true,
    state: {
        credits: []
    },
    getters: {
        credits: state => state.credits,
    },
    mutations: {
        setCredits(state, credit) {
            state.credits = credit
        },
    },
    actions: {
        fetch({ commit }, id) {
            return new Promise((resolve, reject) => {
                axios.get(process.env.VUE_APP_BASE_API_URL + '/movie/' + id + '/credits', {
                    params: {
                        api_key: process.env.VUE_APP_BASE_API_KEY
                    }
                })
                    .then((response) => {
                        commit('setCredits', response.data.cast)
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
