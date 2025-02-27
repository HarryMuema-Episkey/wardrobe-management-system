<script setup>

import AuthenticationRoot from "./AuthenticationRoot.vue";
</script>

<template>
  <AuthenticationRoot>
    <div id="error-page" class="flex w-full h-[100vh] items-center justify-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
  <!--    <p>-->
  <!--      <i>{error.statusText || error.message}</i>-->
  <!--    </p>-->
    </div>
  </AuthenticationRoot>
</template>

<style scoped>

</style>