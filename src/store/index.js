import { createStore } from 'vuex'

import genres from './modules/genres'
import weekTrending from './modules/weekTrending'
import popularActers from './modules/popularActers'
import popularMovies from './modules/popularMovies'
import movies from './modules/movies'
import detaill from './modules/detaill'
import credits from './modules/credits'

export default createStore({
    modules: {
        genres, weekTrending, popularActers, popularMovies, movies, detaill, credits
    },
})