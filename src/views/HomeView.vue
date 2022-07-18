<template>
  <p class="mt-5 ml-5 text-left text-4xl mb-4 bg-darkT font-RobotoCondensedBold text-white">This week's trending</p>
  <div v-if="weekTrendingList && weekTrendingList.length > 0" class="grid grid-cols-4 pl-4 bg-darkT "
    style="height: 500px;">
    <div class="overflow-y-scroll" style="height: 500px;">
      <div @click="weekTrendingCount = count - 1" v-for="count in 5" :key="count"
        class="grid mb-4 hover:bg-lightP border-b-2 border-lightP pb-4 rounded-lg justify-center"
        :class="{ 'bg-lightP': weekTrendingCount == count - 1 }">
        <img :src="imageUrl + weekTrendingList[count - 1].poster_path" alt=""
          class="h-40 w-auto rounded-lg justify-self-center">
        <p class="text-white font-RobotoCondensedBold">
          {{ weekTrendingList[count - 1].title }}
        </p>
      </div>
    </div>
    <div class="movie_card relative w-full overflow-hidden col-span-3 bg" id="bright bg-red-500">
      <div class="info_section z-10 relative w-full h-full">
        <div class="movie_header w-3/5 relative p-4 h-1/5">
          <h1 class="text-white text-xl font-RobotoCondensedBold">{{ weekTrendingList[weekTrendingCount].title }}</h1>
          <h4 class="text-gray-300 font-medium">{{ weekTrendingList[weekTrendingCount].release_date }}</h4>
        </div>
        <div class="movie_desc w-1/2 pt-1 pb-3 pl-6 h-1/2">
          <p class="text-lg text-white leading-loose font-RobotoCondensedRegular ">
            {{ weekTrendingList[weekTrendingCount].overview }}
          </p>
        </div>
        <div class="movie_social">
          <router-link :to="{ name: 'detaill', params: { id: weekTrendingList[weekTrendingCount].id } }"
            target="_blank">
            <button class="bg-lightP hover:bg-logo text-white font-RobotoCondensedBold py-2 px-4 rounded mx-4"> More
              details
            </button>
          </router-link>
        </div>
      </div>
      <div class="blur_back w-4/5 bright_back absolute top-0 h-full right-0 bg-cover"
        :style="{ 'background-image': `url(${imageUrl + weekTrendingList[weekTrendingCount].backdrop_path})` }"></div>
    </div>
  </div>

  <hr class="mt-5 p-0.5 bg-lightP">
  <div class="bg-darkT">
    <p class="text-center text-white ml-5 text-4xl mb-4 mt-10 font-RobotoCondensedBold">Popular faces</p>
  </div>
  <div class="contain w-full flex justify-around items-center m-0 bg-darkT" v-if="ActersList && ActersList.length > 0">
    <div v-for="acter in 5" :key="acter"
      class="card card0 relative items-center justify-center bg-center bg-no-repeat overflow-hidden h-72 w-48 rounded-lg bg-black flex"
      :style="{ 'background-image': `url(${imageUrl + ActersList[acter - 1].profile_path})` }">
      <div class="borderr h-64 w-44 bg-transparent rounded-lg relative hover:border-2 hover:border-logo">
        <p class="pAct m-5 opacity-0 text-logo font-RobotoCondensedBold">{{ ActersList[acter - 1].name }}</p>
        <div class="icons absolute h-32 top-28 w-12 flex flex-col items-center justify-around">
          <i class="fa opacity-0" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24">
              <path fill="#61539d"
                d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.082c1.602 0 1.792.006 2.425.035 1.627.074 2.385.845 2.46 2.459.028.633.034.822.034 2.424s-.006 1.792-.034 2.424c-.075 1.613-.832 2.386-2.46 2.46-.633.028-.822.035-2.425.035-1.602 0-1.792-.006-2.424-.035-1.63-.075-2.385-.849-2.46-2.46-.028-.632-.035-.822-.035-2.424s.007-1.792.035-2.424c.074-1.615.832-2.386 2.46-2.46.632-.029.822-.034 2.424-.034zm0-1.082c-1.63 0-1.833.007-2.474.037-2.18.1-3.39 1.309-3.49 3.489-.029.641-.036.845-.036 2.474 0 1.63.007 1.834.036 2.474.1 2.179 1.31 3.39 3.49 3.49.641.029.844.036 2.474.036 1.63 0 1.834-.007 2.475-.036 2.176-.1 3.391-1.309 3.489-3.49.029-.64.036-.844.036-2.474 0-1.629-.007-1.833-.036-2.474-.098-2.177-1.309-3.39-3.489-3.489-.641-.03-.845-.037-2.475-.037zm0 2.919c-1.701 0-3.081 1.379-3.081 3.081s1.38 3.081 3.081 3.081 3.081-1.379 3.081-3.081c0-1.701-1.38-3.081-3.081-3.081zm0 5.081c-1.105 0-2-.895-2-2 0-1.104.895-2 2-2 1.104 0 2.001.895 2.001 2s-.897 2-2.001 2zm3.202-5.922c-.397 0-.72.322-.72.72 0 .397.322.72.72.72.398 0 .721-.322.721-.72 0-.398-.322-.72-.721-.72z" />
            </svg></i>
          <i class="fa opacity-0" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24">
              <path fill="#61539d"
                d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.5 8.778c-.441.196-.916.328-1.414.388.509-.305.898-.787 1.083-1.362-.476.282-1.003.487-1.564.597-.448-.479-1.089-.778-1.796-.778-1.59 0-2.758 1.483-2.399 3.023-2.045-.103-3.86-1.083-5.074-2.572-.645 1.106-.334 2.554.762 3.287-.403-.013-.782-.124-1.114-.308-.027 1.14.791 2.207 1.975 2.445-.346.094-.726.116-1.112.042.313.978 1.224 1.689 2.3 1.709-1.037.812-2.34 1.175-3.647 1.021 1.09.699 2.383 1.106 3.773 1.106 4.572 0 7.154-3.861 6.998-7.324.482-.346.899-.78 1.229-1.274z" />
            </svg></i>
          <i class="fa opacity-0" aria-hidden="true"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd" clip-rule="evenodd">
              <path fill="#61539d"
                d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12m2.557 16h-5.115c.546 2.46 1.441 4.114 2.558 5.744 1.194-1.741 2.041-3.41 2.557-5.744m-7.157 0h-4.567c1.236 2.825 3.704 4.972 6.755 5.716-1.048-1.733-1.783-3.658-2.188-5.716m13.767 0h-4.567c-.391 1.988-1.095 3.887-2.175 5.694 3.012-.763 5.517-2.895 6.742-5.694m-14.005-6h-4.962c-.267 1.313-.267 2.685 0 4h4.915c-.119-1.329-.101-2.672.047-4m7.661 0h-5.647c-.165 1.326-.185 2.672-.053 4h5.753c.133-1.328.111-2.673-.053-4m6.977 0h-4.963c.148 1.328.166 2.671.048 4h4.915c.26-1.285.273-2.648 0-4m-12.156-7.729c-3.077.732-5.567 2.886-6.811 5.729h4.653c.435-2.042 1.178-3.985 2.158-5.729m2.355-.048c-1.089 1.77-1.91 3.453-2.463 5.777h4.927c-.534-2.246-1.337-3.948-2.464-5.777m2.368.069c1.013 1.812 1.733 3.76 2.146 5.708h4.654c-1.232-2.816-3.762-4.958-6.8-5.708" />
            </svg></i>
        </div>
      </div>
    </div>
  </div>
  <hr class="mt-5 p-0.5 bg-lightP">

  <p class="text-left text-white ml-5 text-4xl mb-4 mt-14 bg-darkT font-RobotoCondensedBold">Popular titles</p>
  <div v-if="popularMoviesList && popularMoviesList.length > 0" class="grid grid-cols-4 pl-4 bg-darkT"
    style="height: 500px;">
    <div class="overflow-y-scroll" style="height: 500px;">
      <div @click="popularMoviesCount = count - 1" v-for="count in 5" :key="count"
        class="grid mb-4 hover:bg-lightP border-b-2 border-lightP pb-4 rounded-lg justify-center"
        :class="{ 'bg-lightP': popularMoviesCount == count - 1 }">
        <img :src="imageUrl + popularMoviesList[count - 1].poster_path" alt=""
          class="h-40 w-auto rounded-lg justify-self-center">
        <p class="text-white font-RobotoCondensedBold">
          {{ popularMoviesList[count - 1].title }}
        </p>
      </div>
    </div>
    <div class="movie_card relative w-full overflow-hidden col-span-3" id="bright bg-darkT">
      <div class="info_section z-10  relative w-full h-full">
        <div class="movie_header w-3/5 relative p-6 h-1/5">
          <h1 class="text-white text-xl font-RobotoCondensedBold">{{ popularMoviesList[popularMoviesCount].title }}</h1>
          <h4 class="text-gray-300 font-medium">{{ popularMoviesList[popularMoviesCount].release_date }}</h4>
        </div>
        <div class="movie_desc w-1/2 pt-1 pb-3 pl-6 h-1/2">
          <p class="text-lg text-white leading-loose font-RobotoCondensedRegular">
            {{ popularMoviesList[popularMoviesCount].overview }}
          </p>
        </div>
        <div class="movie_social">
          <router-link :to="{ name: 'detaill', params: { id: popularMoviesList[popularMoviesCount].id } }"
            target="_blank">
            <button
              class="bg-lightP hover:bg-logo text-white font-bold py-2 px-4 rounded mx-4 font-RobotoCondensedBold"> More
              details
            </button>
          </router-link>
        </div>
      </div>
      <div class="blur_back w-4/5 bright_back absolute top-0 h-full right-0 bg-cover"
        :style="{ 'background-image': `url(${imageUrl + popularMoviesList[popularMoviesCount].backdrop_path})` }"></div>
    </div>
  </div>
  <hr class="mt-5 p-0.5 bg-lightP">
  <p class="text-center text-white text-4xl mb-4 mt-14 bg-darkT font-RobotoCondensedBold">Download & Enjoy</p>
  <router-link to="/list"><button
      class="bg-lightP text-white hover:bg-logo p-2 h-10 ml-6 rounded-lg font-RobotoCondensedBold">Full
      archive</button></router-link>
  <div class="splide mb-10 bg-darkT" aria-labelledby="carousel-heading">
    <div class="splide__track">
      <ul class="splide__list">
        <li v-for="movie in 16" :key="movie" class="splide__slide">
          <router-link v-if="moviesList && moviesList.length > 0"
            :to="{ name: 'detaill', params: { id: moviesList[movie - 1].id } }" target="_blank">
            <div class="cards flex justify-center" v-if="moviesList && moviesList.length > 0">
              <figure
                class="card  flex rounded-lg after:z-10 after:h-full after:opacity-10 overflow-hidden h-64 w-48 m-5 relative after:absolute items-center justify-center">
                <img v-if="moviesList[movie - 1].poster_path" :src="imageUrl + moviesList[movie - 1].poster_path" />
                <div v-else class="bg-darkT"><img src="../assets/logo/FF1.png" class="w-full h-full"></div>
                <figcaption class="text-center bottom-0 left-0 right-0 text-xl bg-none text-white absolute">{{
                    moviesList[movie - 1].title
                }}</figcaption>
              </figure>
            </div>
          </router-link>
        </li>
        <li class="splide__slide text-center">
          <router-link to="/list">
            <div class="cards flex justify-center">
              <figure
                class="card  flex rounded-lg after:z-10 after:h-full after:opacity-10 overflow-hidden h-64 w-48 m-5 relative after:absolute items-center justify-center">
                <p class="text-lightP font-semibold text-lg">want more?!</p>
              </figure>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
import Splide from '@splidejs/splide';
import { mapActions, mapGetters } from 'vuex';
import '@splidejs/splide/css';

export default {
  name: 'HomeView',

  data() {
    return {
      imageUrl: process.env.VUE_APP_BASE_API_IMG,
      weekTrendingCount: 0,
      popularMoviesCount: 0,
    }
  },

  mounted() {
    const splide = new Splide('.splide', {
      perPage: 4,
      perMove: 1,
    });

    splide.mount();
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.fetchWeekTrending()
      vm.fetchPopularActers()
      vm.fetchPopularMovies()
      vm.fetchMovies({
        sort_by: 'release_date.desc',
        page: 1,
        with_genres: '',
        'primary_release_date.gte': '',
        'primary_release_date.lte': ''
      })
    })
  },

  computed: {
    ...mapGetters({
      weekTrendingList: 'weekTrending/weekTrendingList',
      popularActersList: 'popularActers/popularActersList',
      popularMoviesList: 'popularMovies/popularMoviesList',
      moviesList: 'movies/moviesList',
    }),
    ActersList() {
      let acters = []
      if (this.popularActersList && this.popularActersList.length > 0) {
        acters = this.popularActersList.filter((acter) => {
          if (acter.profile_path) {
            return acter
          }
        })
      }
      return acters
    }
  },

  methods: {
    ...mapActions({
      fetchGenres: 'genres/fetch',
      fetchWeekTrending: 'weekTrending/fetch',
      fetchPopularActers: 'popularActers/fetch',
      fetchPopularMovies: 'popularMovies/fetch',
      fetchMovies: 'movies/fetch',
    }),
  }
}
</script>
<style>
.splide__arrow {
  @apply  !bg-lightP
}
.splide__pagination {
  @apply  !hidden
}
</style>