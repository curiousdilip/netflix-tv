<script setup>
import { onMounted, ref } from "vue";
import movies from './movie.json'
import Magnify from "vue-material-design-icons/Magnify.vue";
import HomeOutline from "vue-material-design-icons/HomeOutline.vue";
import TrendingUp from "vue-material-design-icons/TrendingUp.vue";
import Television from "vue-material-design-icons/Television.vue";
import MovieOutline from "vue-material-design-icons/MovieOutline.vue";
import Plus from "vue-material-design-icons/Plus.vue";
import ChevronLeft from "vue-material-design-icons/ChevronLeft.vue";

import MovieDetails from "./components/MovieDetails.vue";
import { useMovieStore } from './stores/movie'
import { storeToRefs } from "pinia";
const useMovie = useMovieStore()
const { movie, showFullVideo } = storeToRefs(useMovie)

onMounted(() => {
  setTimeout(() => movie.value = movies[0][0], 100)
})
</script>

<template>
  <div class="fixed w-full h-screen bg-black">
    <div v-if="!showFullVideo" id="SideNav" class="flex z-40 items-center w-[120px] h-screen bg-black relative">
      <img src="../public/images/netflix-logo.png" alt="" class="absolute top-0 w-[35px] mt-10 ml-10">
      <div class="">
        <div class="py-2 mx-10 my-6">
          <Magnify fillColor="#fff" :size=40 class="cursor-pointer" />
        </div>
        <div class="py-2 mx-10 my-6 border-b-4 border-b-red-500">
          <HomeOutline fillColor="#fff" :size=40 class="cursor-pointer" />
        </div>
        <div class="py-2 mx-10 my-6">
          <TrendingUp fillColor="#fff" :size=40 class="cursor-pointer" />
        </div>
        <div class="py-2 mx-10 my-6">
          <Television fillColor="#fff" :size=40 class="cursor-pointer" />
        </div>
        <div class="py-2 mx-10 my-6">
          <MovieOutline fillColor="#fff" :size=40 class="cursor-pointer" />
        </div>
        <div class="py-2 mx-10 my-6">
          <Plus fillColor="#fff" :size=40 class="cursor-pointer" />
        </div>
      </div>

      <div class="" v-if="!showFullVideo">
        <div class="fixed flex z-20 top-0 right-0 w-full h-[50%] bg-black pl-[120px] bg-clip-border">

          <MovieDetails v-if="movie" :movie="movie" />

          <video v-if="movie" :src="'../public/videos/' + movie.name + '.mp4'" autoplay loop
            class="absolute z-0 h-[600px] right-0 top-0" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
