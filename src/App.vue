<template>
  <nav class="grid grid-cols-4 bg-darkP p-5 border-b-2 border-lightP items-center">
    <div class="flex content-center items-center gap-2">
      <router-link to="/"><img src="./assets/logo/FF2.png" class="w-20 h-20"></router-link>
      <p class="text-lightP font-RobotoCondensedLightItalic">Filmoholics never quit!</p>
    </div>
    <div class="col-span-2 flex justify-center items-center gap-20 text-lg font-RobotoCondensedBold text-white">
      <router-link to="/">Home</router-link>
      <router-link to="/list">Movies</router-link>
      <p>Account</p>
      <p>premium membership</p>
    </div>
    <div class="col-span-1 text-right">
      <button
        class="bg-transparent hover:bg-logo text-white font-bold hover:text-white py-2 px-4 border border-logo hover:border-transparent rounded-lg">Login</button>
      <button class="bg-lightP hover:bg-logo text-white font-bold py-2 px-4 rounded-lg mx-4">Register</button>
    </div>
  </nav>


  <router-view v-slot="{ Component, route }">
    <transition name="page" mode="out-in">
      <div :key="route.path" class="bg-darkT">
        <component :is="Component" />
      </div>
    </transition>
  </router-view>


  <footer class="p-4 bg-darkP shadow md:px-6 md:py-8 font-RobotoCondensedBold dark:bg-gray-900 border-t-2 border-lightP ">
    <div class="sm:flex sm:items-center sm:justify-between">
      
      <div class="grid grid-cols-4 gap-52 text-center text-lg text-white ml-14 items-center content-center">
        <p class="hover:text-lightP cursor-pointer">About</p>
        <p class="hover:text-lightP cursor-pointer">Privacy policy</p>
        <p class="hover:text-lightP cursor-pointer">Licencing</p>
        <p class="hover:text-lightP cursor-pointer">Contact</p>
      </div>
      <img src="./assets/logo/FF2.png" class="w-20 h-20 mr-4">
    </div>
    <hr class="my-6 border-lightP sm:mx-auto dark:border-gray-700 lg:my-8">
    <span class="block text-sm text-gray-400 sm:text-center dark:text-gray-400">© 2022 <a href="#"
        class="hover:underline">Filmoholic</a>. All Rights Reserved.
    </span>
  </footer>

</template>
<style>
html{
  background-color: #171a1c;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.router-link-exact-active {
  @apply text-lightP
}
</style>
