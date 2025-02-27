<script setup>
import {HomeIcon, IdentificationIcon} from "@heroicons/vue/24/outline/index.js";
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <section class="home-bg flex w-full items-center justify-center h-[100vh] py-[40px] px-[15%] gap-[40px]">
    <div class="flex w-fit h-fit px-[20px] py-[30px] items-center justify-center flex-col bg-gray-50 rounded-[40px] drop-shadow-2xl gap-[20px]">
      <RouterLink
          to="/"
          class="flex w-full items-center justify-center group px-[10px] py-[10px] rounded-full border gap-[10px]"
          :class="route.path === '/' ? 'bg-blue-100 border-blue-500' : 'border-[#c3c1b5]'"
      >
        <div class="flex m-[2px]">
          <HomeIcon class="size-6 text-blue-500" />
        </div>
      </RouterLink>

      <RouterLink
          to="/about"
          class="flex w-full items-center justify-center group px-[10px] py-[10px] rounded-full border gap-[10px]"
          :class="route.path === '/about' ? 'bg-blue-100 border-blue-500' : 'border-[#c3c1b5]'"
      >
        <div class="flex m-[2px]">
          <IdentificationIcon class="size-6 text-blue-500" />
        </div>
      </RouterLink>
    </div>
    <div class="flex w-full px-[20px] py-[40px] items-center justify-center flex-col bg-gray-50 rounded-[40px] drop-shadow-2xl ">
      <slot/>
    </div>
  </section>
</template>

<style scoped>
.home-bg {
  background-image: url("../assets/HomeBackground.jpg");
  background-size: cover;
  background-position: center;
}
</style>