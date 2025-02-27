<script setup>
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';
import AuthenticationRoot from "./AuthenticationRoot.vue";
import { WardrobeButton } from "../components/index.js";
import { useRouter } from "vue-router";

const router = useRouter();

// ✅ Define Validation Schema
const schema = yup.object({
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string()
      .min(8, "Password must be at least 6 characters")
      .max(12, "Password must be at most 10 characters")
      .required("Password is required"),
});

// ✅ Initialize form with schema & empty fields
const { handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: { email: '', password: '' }, // Ensure fields start empty
});

// ✅ Define Fields
const { value: email, errorMessage: emailError } = useField('email');
const { value: password, errorMessage: passwordError } = useField('password');

// ✅ Submit Handler
const onSubmit = handleSubmit(values => {
  console.log("Form Data:", values);
});
</script>

<template>
  <AuthenticationRoot>
    <form @submit.prevent="onSubmit" class="flex w-full px-[20px] py-[30px] gap-[10px] border border-[#c3c1b5] rounded-[12px] flex-col mr-[20px]">
      <h4 class="flex w-full text-[16px] font-bold uppercase text-gray-700 my-[10px]">
        Login
      </h4>

      <!-- Email Input -->
      <div class="flex flex-col w-full relative gap-[10px]">
        <label class="flex w-full items-center justify-start text-[15px] text-gray-400 font-normal">
          Email
        </label>
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

      <!-- Password Input  -->
      <div class="flex flex-col w-full relative gap-[10px]">
        <label class="flex w-full items-center justify-start text-[15px] text-gray-400 font-normal">
          Password
        </label>
        <div class="flex flex-col w-full relative">
          <input
              :value="password"
              @input="password = $event.target.value"
              type="password"
              placeholder="Enter your password"
              class="flex h-[42px] bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <p v-if="passwordError" class="first-letter:uppercase text-red-700 text-[13px] py-2">
            {{ passwordError }}
          </p>
        </div>
      </div>

      <!-- Forgot Password Link -->
      <div class="flex items-center justify-end">
        <p @click="() => { router.push('/forgotpassword') }" class="text-blue-500 text-[15px] cursor-pointer">
          Forgot Password?
        </p>
      </div>

      <!-- Login Button -->
      <div class="flex items-center justify-center my-[40px] pt-[20px]">
        <WardrobeButton @click="handleSubmit(onSubmit)">
          Login
        </WardrobeButton>
      </div>

      <!-- Register Link -->
      <div class="flex items-center justify-center pb-[10px]">
        <p class="text-gray-700 text-[12px]">
          Dont have an account?
          <span @click="() => { router.push('/register') }" class="text-blue-500 font-semibold tracking-wide text-[14px] cursor-pointer">Register Now</span>
        </p>
      </div>
    </form>
  </AuthenticationRoot>
</template>

<style scoped>

</style>