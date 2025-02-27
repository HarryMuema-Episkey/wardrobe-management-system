<script setup>
  import {HomeIcon, IdentificationIcon} from "@heroicons/vue/24/outline/index.js";
  import { useRoute } from 'vue-router';
  import {WardrobeButton} from "../components/index.js";

  const route = useRoute();
</script>

<template>
  <section class="home-bg flex w-full items-center justify-center h-[100vh] py-[40px] px-[15%] gap-[40px]">
    <div class="flex w-full min-w-[50%] h-fit min-h-[50%] px-[20px] py-[30px] items-center justify-center bg-gray-50 rounded-[40px] drop-shadow-2xl gap-[20px]">
      <div class="flex w-full items-center justify-center flex-col">
        <div class="flex w-full items-center justify-center flex-col gap-[80px]">
          <div class="flex w-full items-center flex-col justify-center gap-[15px]">
            <h2 class="text-[100px] text-center font-bold gap-[5px] tracking-widest">
              Vazi
              <span class="text-[42px] text-center font-semibold italic tracking-widest text-blue-500">
            254
          </span>
            </h2>
            <p class="text-center text-[16px] text-gray-700 tracking-wider">
              Wardrobe Management
            </p>
          </div>
          <p class="text-center text-[16px] text-gray-700 tracking-wider">
            All your wardrobe in one place
          </p>
        </div>
      </div>
      <div class="flex w-full items-center justify-center flex-col">
       <slot></slot>
      </div>
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