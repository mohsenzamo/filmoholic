<template>
    <div class="movie_card_list relative w-full overflow-hidden" id="bright">
        <div class="info_section relative w-full h-full bg-blend-multiply z-20">
            <div class="movie_header w-3/5 relative p-6 h-2/5">
                <p v-if="details.title"
                    class="text-left ml-2 mt-2 text-white text-3xl pl-1.5 bg-transparent font-RobotoCondensedBold">{{
                            details.title
                    }} <span v-if="details.release_date">({{
        details.release_date
}})</span></p>
                <p v-if="details.tagline" class="text-2xl ml-2 text-white font-RobotoCondensedBoldItalic">{{
                        details.tagline
                }}</p>
                <p v-if="details.overview" class="text-white text-lg mt-10 leading-loose font-RobotoCondensedRegular">{{
                        details.overview
                }}</p>
                <div class="flex text-white gap-4 content-center items-center">
                    <img src="../assets/imdb.png" class="w-12 h-12">
                    <img src="../assets/star.png" class="w-5 h-5 ">
                    <div class="grid grid-rows-2 items-center content-center text-center pt-6">
                        <div>
                            <p v-if="details.vote_average">{{ details.vote_average }}</p>
                        </div>
                        <div>
                            <p v-if="details.vote_count">({{ details.vote_count }})</p>
                        </div>
                    </div>
                </div>
                <p v-if="details.genres" class="type text-white inline-block mt-10"><span
                        v-for="genre in details.genres" :key="genre.id" class="mx-3">{{ genre.name
                        }}</span></p>
            </div>
        </div>
        <div class="blur_back w-4/5 bright_back absolute top-0 h-full right-0 bg-cover"
            :style="{ 'background-image': details.backdrop_path ? `url(${imageUrl + details.backdrop_path}) !important` : `` }">
        </div>
    </div>
    <hr class="p-0.5 bg-lightP">
    <div class="w-full h-64 bg-logo flex font-RobotoCondensedLight">
        <div class="h-full w-44 flex"><img v-if="details.poster_path" :src="imageUrl + details.poster_path"
                class="w-full h-full"><img v-else src="../assets/logo/FF1.png" class="w-full h-auto my-auto"></div>
        <div class="h-full w-3/4 bg-cover grid grid-rows-2 p-8 items-center">
            <div class="grid grid-cols-3">
                <div class="flex items-center gap-1"><img src="../assets/runtime.png" class="w-7 h-7">
                    <p v-if="details.runtime" class="text-white">{{ details.runtime }}mins</p>
                </div>
                <div class="flex items-center gap-1"><img src="../assets/budget.png" class="w-7 h-7">
                    <p v-if="details.budget" class="text-white">{{ details.budget }}</p>
                </div>
                <div class="flex items-center gap-1"><img src="../assets/date.png" class="w-7 h-7">
                    <p v-if="details.release_date" class="text-white">{{ details.release_date }}</p>
                </div>
            </div>
            <div class="grid grid-cols-3">
                <div class="flex items-center gap-1"><img src="../assets/language.png" class="w-7 h-7">
                    <p v-if="details.original_language" class="text-white">{{ details.original_language }}</p>
                </div>
                <div v-if="details.genres" class="flex items-center gap-1 text-white"><img src="../assets/genre.png"
                        class="w-7 h-7"><span v-for="(genre, index) in details.genres" :key="genre.id" class=""><span
                            v-if="index < 3">{{
                                    genre.name
                            }}</span><span v-if="index != details.genres.length - 1 && index < 2">,</span></span></div>
                <div class="flex items-center gap-1"><img src="../assets/website.png" class="w-7 h-7">
                    <p v-if="details.homepage" class="text-white">{{ details.homepage }}</p>
                </div>
            </div>
        </div>
    </div>
    <hr class="p-0.5 bg-lightP">

    <div class="contain w-full flex justify-around items-center m-0 py-5 bg-darkT" v-if="credits && credits.length > 0">
        <div v-for="actor in creditsNum" :key="actor"
            class="card card0 relative items-center justify-center bg-center bg-no-repeat overflow-hidden h-72 w-48 rounded-lg bg-black flex"
            :style="{ 'background-image': credits[actor - 1].profile_path ? `url(${imageUrl + credits[actor - 1].profile_path}) !important` : `` }">
            <div class="borderr h-64 w-44 bg-transparent rounded-lg relative">
                <p class="pAct m-5 opacity-0 text-logo font-RobotoCondensedBold">{{ credits[actor - 1].name }}</p>
                <div class="icons absolute h-32 top-28 w-12 flex flex-col items-center justify-around">
                    <i class="fa opacity-0" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" viewBox="0 0 24 24">
                            <path fill="#61539d"
                                d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.082c1.602 0 1.792.006 2.425.035 1.627.074 2.385.845 2.46 2.459.028.633.034.822.034 2.424s-.006 1.792-.034 2.424c-.075 1.613-.832 2.386-2.46 2.46-.633.028-.822.035-2.425.035-1.602 0-1.792-.006-2.424-.035-1.63-.075-2.385-.849-2.46-2.46-.028-.632-.035-.822-.035-2.424s.007-1.792.035-2.424c.074-1.615.832-2.386 2.46-2.46.632-.029.822-.034 2.424-.034zm0-1.082c-1.63 0-1.833.007-2.474.037-2.18.1-3.39 1.309-3.49 3.489-.029.641-.036.845-.036 2.474 0 1.63.007 1.834.036 2.474.1 2.179 1.31 3.39 3.49 3.49.641.029.844.036 2.474.036 1.63 0 1.834-.007 2.475-.036 2.176-.1 3.391-1.309 3.489-3.49.029-.64.036-.844.036-2.474 0-1.629-.007-1.833-.036-2.474-.098-2.177-1.309-3.39-3.489-3.489-.641-.03-.845-.037-2.475-.037zm0 2.919c-1.701 0-3.081 1.379-3.081 3.081s1.38 3.081 3.081 3.081 3.081-1.379 3.081-3.081c0-1.701-1.38-3.081-3.081-3.081zm0 5.081c-1.105 0-2-.895-2-2 0-1.104.895-2 2-2 1.104 0 2.001.895 2.001 2s-.897 2-2.001 2zm3.202-5.922c-.397 0-.72.322-.72.72 0 .397.322.72.72.72.398 0 .721-.322.721-.72 0-.398-.322-.72-.721-.72z" />
                        </svg></i>
                    <i class="fa opacity-0" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" viewBox="0 0 24 24">
                            <path fill="#61539d"
                                d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.5 8.778c-.441.196-.916.328-1.414.388.509-.305.898-.787 1.083-1.362-.476.282-1.003.487-1.564.597-.448-.479-1.089-.778-1.796-.778-1.59 0-2.758 1.483-2.399 3.023-2.045-.103-3.86-1.083-5.074-2.572-.645 1.106-.334 2.554.762 3.287-.403-.013-.782-.124-1.114-.308-.027 1.14.791 2.207 1.975 2.445-.346.094-.726.116-1.112.042.313.978 1.224 1.689 2.3 1.709-1.037.812-2.34 1.175-3.647 1.021 1.09.699 2.383 1.106 3.773 1.106 4.572 0 7.154-3.861 6.998-7.324.482-.346.899-.78 1.229-1.274z" />
                        </svg></i>
                    <i class="fa opacity-0" aria-hidden="true"><svg width="24" height="24"
                            xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                            <path fill="#61539d"
                                d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12m2.557 16h-5.115c.546 2.46 1.441 4.114 2.558 5.744 1.194-1.741 2.041-3.41 2.557-5.744m-7.157 0h-4.567c1.236 2.825 3.704 4.972 6.755 5.716-1.048-1.733-1.783-3.658-2.188-5.716m13.767 0h-4.567c-.391 1.988-1.095 3.887-2.175 5.694 3.012-.763 5.517-2.895 6.742-5.694m-14.005-6h-4.962c-.267 1.313-.267 2.685 0 4h4.915c-.119-1.329-.101-2.672.047-4m7.661 0h-5.647c-.165 1.326-.185 2.672-.053 4h5.753c.133-1.328.111-2.673-.053-4m6.977 0h-4.963c.148 1.328.166 2.671.048 4h4.915c.26-1.285.273-2.648 0-4m-12.156-7.729c-3.077.732-5.567 2.886-6.811 5.729h4.653c.435-2.042 1.178-3.985 2.158-5.729m2.355-.048c-1.089 1.77-1.91 3.453-2.463 5.777h4.927c-.534-2.246-1.337-3.948-2.464-5.777m2.368.069c1.013 1.812 1.733 3.76 2.146 5.708h4.654c-1.232-2.816-3.762-4.958-6.8-5.708" />
                        </svg></i>
                </div>
            </div>
        </div>
    </div>
</template> 

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'DetaillView',

    components: {
    },

    data() {
        return {
            imageUrl: process.env.VUE_APP_BASE_API_IMG,
        }
    },

    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.fetchDetaill(vm.$route.params.id)
            vm.fetchCredits(vm.$route.params.id)
        })
    },


    computed: {
        ...mapGetters({
            details: 'detaill/details',
            credits: 'credits/credits'
        }),
        creditsNum() {
            if (this.credits.length < 5) {
                return this.credits.length
            } else {
                return 5
            }
        }
    },

    methods: {
        ...mapActions({
            fetchDetaill: 'detaill/fetch',
            fetchCredits: 'credits/fetch'
        }),
    },
}
</script>