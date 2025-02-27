<script setup>
 import WebsiteRoot from "./WebsiteRoot.vue";
 import {WardrobeButton} from "../components/index.js";
 import {useRouter} from "vue-router";

 const router = useRouter()
</script>

<template>
  <WebsiteRoot>
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
      <div class="flex w-fit max-w-[80%] items-center justify-between gap-[20px] my-[20px]">
        <WardrobeButton @click="()=>{router.push('/login')}">
          Login
        </WardrobeButton>
        <WardrobeButton @click="()=>{router.push('/register')}">
          Register
        </WardrobeButton>
      </div>
    </div>
  </WebsiteRoot>
</template>

<style scoped>

</style>