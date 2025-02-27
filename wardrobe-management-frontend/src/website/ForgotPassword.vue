<script setup>
  import AuthenticationRoot from "./AuthenticationRoot.vue";
  import {WardrobeButton} from "../components/index.js";
  import {useRouter} from "vue-router";
  import * as yup from "yup";
  import {useField, useForm} from "vee-validate";

  const router = useRouter();

  // ✅ Define Validation Schema
  const schema = yup.object({
    email: yup.string().email("Invalid email format").required("Email is required"),
  });

  // ✅ Initialize form with schema & empty fields
  const { handleSubmit } = useForm({
    validationSchema: schema,
    initialValues: { email: '' }, // Ensure fields start empty
  });

  // ✅ Define Fields
  const { value: email, errorMessage: emailError } = useField('email');

  // ✅ Submit Handler
  const onSubmit = handleSubmit(values => {
    console.log("Form Data:", values);
  });
</script>

<template>
  <AuthenticationRoot>
    <form @submit.prevent="onSubmit" class="flex w-full px-[20px] py-[30px] gap-[10px] border border-[#c3c1b5] rounded-[12px] flex-col mr-[20px]">
      <h4 class="flex w-full text-[16px] font-bold uppercase text-gray-700 mt-[10px] text-center items-center justify-center">
        Forgot Password?
      </h4>
      <p  class="flex w-full text-[14px] font-normal first-letter:uppercase text-gray-700 mb-[10px] text-center items-center justify-center">No worries, we’ll send you reset instructions</p>

      <!-- Email Input -->
      <div class="flex flex-col w-full relative gap-[10px]">
        <div class="flex flex-col w-full relative">
          <input
              :value="email"
              @input="email = $event.target.value"
              type="email"
              placeholder="example@email.com"
              class="flex h-[42px] bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <p v-if="emailError" class="first-letter:uppercase text-red-700 text-[13px] py-2">
            {{ emailError }}
          </p>
        </div>
      </div>

      <!-- Reset password Button -->
      <div class="flex items-center justify-center my-[20px] pt-[20px]">
        <WardrobeButton @click="handleSubmit(onSubmit)">
          Reset Password
        </WardrobeButton>
      </div>

      <!-- Go back to login Link -->
      <div class="flex items-center justify-center pb-[10px]">
        <p class="text-gray-700 text-[12px]">
          Go back to
          <span @click="() => { router.replace('/login') }" class="text-blue-500 font-semibold tracking-wide text-[14px] cursor-pointer">Login</span>
        </p>
      </div>
    </form>
  </AuthenticationRoot>
</template>

<style scoped>

</style>