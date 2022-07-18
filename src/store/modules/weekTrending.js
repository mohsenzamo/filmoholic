import axios from 'axios'

export default {
    namespaced: true,
    state: {
        weekTrendingList: []
    },
    getters: {
        weekTrendingList: state => state.weekTrendingList,
    },
    mutations: {
        setWeekTrending(state, weekTrending) {
            state.weekTrendingList = weekTrending
        },
    },
    actions: {
        fetch({ commit }) {
            return new Promise((resolve, reject) => {
                axios.get(process.env.VUE_APP_BASE_API_URL + '/trending/movie/week', {
                    params: {
                        api_key: process.env.VUE_APP_BASE_API_KEY
                    }
                })
                    .then((response) => {
                        commit('setWeekTrending', response.data.results)
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
