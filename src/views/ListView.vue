<template>
  <p class="text-left text-4xl mb-4 mt-5 text-white ml-11 font-RobotoCondensedBold">Movies</p>
  <div class="grid grid-cols-5 px-11">
    <div class="col-span-4">
      <div v-if="moviesList && moviesList.length > 0" class="grid grid-cols-4 gap-4">
        <div class="cardList overflow-hidden relative cursor-pointer bg-darkT flex border-2 border-logo" v-for="movie in moviesList" :key="movie.id">
          <img v-if="movie.poster_path" :src="imageUrl + movie.poster_path" alt="" class="cardimg w-full h-full">
          <img v-else src="../assets/logo/FF2.png" class="w-full h-auto my-auto">
          <div class="descriptions absolute top-0 left-0 w-full h-full p-5">
            <h1 class="text-base font-RobotoCondensedBold text-white m-0">{{ movie.title }}</h1>
            <p class="text-sm font-RobotoCondensedRegular text-gray-800">
              {{ movie.overview.slice(0, 180) }}
              <span v-if="movie.overview.length > 180">...</span>
            </p>
            <div class="flex justify-center">
              <router-link :to="{ name: 'detaill', params: { id: movie.id } }" target="_blank">
                <button class="w-fit my-0 mx-auto py-0 px-3 h-10 border-none outline-none hover:bg-logo text-white bg-darkP rounded-md font-RobotoCondensedBold">
                  More details
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="flex mx-auto my-10 w-fit text-white">
        <button v-if="currentPage > 1 && page != 0" class="bg-transparent text-white font-bold py-2 px-4 rounded-full w-20"
          @click="pages(-1)"><svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill="#bf95f7"
              d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z"
              fill-rule="nonzero" />
          </svg></button>
        <p class="text-3xl mx-4 my-auto">{{ page }} / {{ totalPages }}</p>
        <button v-if="currentPage < totalPages && page != 0" class="bg-transparent text-white font-bold py-2 px-4 rounded-full w-20" @click="pages(+1)"><svg
            clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path fill="#bf95f7"
              d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"
              fill-rule="nonzero" />
          </svg></button>
      </div>
    </div>

    <div class="col-span-1 bg-darkP text-white rounded-lg sticky top-4 font-RobotoCondensedBold" style="height: 400px;">
      <div class="my-2 grid grid-cols-4 px-4">
        <span class="col-span-1 flex"><img @click="fromDate = null" v-if="fromDate != null" src="../assets/x.svg"
            class="w-4">from:</span>
        <flat-pickr v-model="fromDate" class="rounded-lg col-span-3 text-center outline-0 text-black" />
      </div>
      <div class="mb-2 grid grid-cols-4 px-4">
        <span class="col-span-1 flex"><img @click="toDate = null" v-if="toDate != null" src="../assets/x.svg"
            class="w-4">to:</span>
        <flat-pickr v-model="toDate" class="rounded-lg col-span-3 text-center outline-0 text-black" />
      </div>
      <hr class="w-4/5 mx-auto bg-lightP p-0.5">
      <div v-if="genresList && genresList.length > 0" class="overflow-y-scroll h-80">
        <p @click="genres(genre.id)" v-for="genre in genresList" :key="genre.id" class="flex p-1 mx-auto">
          <img v-if="genresId === genre.id" src="../assets/x.svg" class="w-4">
          <img v-else src="../assets/circle.svg" class="w-4">
          {{ genre.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
  name: 'ListView',

  components: {
    flatPickr,
  },

  data() {
    return {
      imageUrl: process.env.VUE_APP_BASE_API_IMG,
      fromDate: null,
      toDate: null,
      currentPage: 1
    }
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.fetchGenres()
      vm.fetchMovies()
    })
  },


  computed: {
    ...mapGetters({
      genresList: 'genres/genresList',
      moviesList: 'movies/moviesList',
      page: 'movies/page',
      totalPages: 'movies/totalPages',
      genresId: 'movies/genres',
    }),
  },

  methods: {
    ...mapActions({
      fetchGenres: 'genres/fetch',
      fetchMovies: 'movies/fetch',
    }),
    pages(num) {
      this.currentPage = this.page + num
      this.fetchMovies({ page: this.page + num })
    },
    genres(id) {
      if (id == this.genresId) {
        this.fetchMovies({ page: 1, with_genres: '' })
      } else {
        this.fetchMovies({ page: 1, with_genres: id })
      }
    },
    date(clear) {
      if (this.toDate != '' || this.fromDate != '') {
        if (clear) {
          this.fetchMovies({ page: 1, 'primary_release_date.gte': '', 'primary_release_date.lte': '' })
          this.toDate = ''
          this.fromDate = ''
        } else {
          this.fetchMovies({ page: 1, 'primary_release_date.gte': this.fromDate, 'primary_release_date.lte': this.toDate })
        }
      }
    }
  },
  watch: {
    toDate(value) {
      setTimeout(() => {
        this.fetchMovies({ page: 1, 'primary_release_date.lte': this.toDate })
      }, 800)
    },
    fromDate(value) {
      setTimeout(() => {
        this.fetchMovies({ page: 1, 'primary_release_date.gte': this.fromDate })
      }, 800)
    }
  }
}
</script>
