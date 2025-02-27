<script setup>
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';
import AuthenticationRoot from "./AuthenticationRoot.vue";
import { WardrobeButton } from "../components/index.js";
import { useRouter } from "vue-router";
import { VueTelInput } from "vue-tel-input";
import "vue-tel-input/vue-tel-input.css";

const router = useRouter();

// ✅ Define Validation Schema
const schema = yup.object({
  firstName: yup.string().min(2, "First name must be at least 2 characters").required("First name is required"),
  lastName: yup.string().min(2, "Last name must be at least 2 characters").required("Last name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
  confirmPassword: yup.string().oneOf([yup.ref('password')], "Passwords must match").required("Confirm password is required"),
});

// ✅ Initialize form with schema & empty fields
const { handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: { firstName: '', lastName: '', email: '', phoneNumber: '', password: '', confirmPassword: '' },
});

// ✅ Define Fields
const { value: firstName, errorMessage: firstNameError } = useField('firstName');
const { value: lastName, errorMessage: lastNameError } = useField('lastName');
const { value: email, errorMessage: emailError } = useField('email');
const { value: password, errorMessage: passwordError } = useField('password');
const { value: confirmPassword, errorMessage: confirmPasswordError } = useField('confirmPassword');

// ✅ Controlled Phone Input
const { value: phoneNumber, errorMessage: phoneNumberError } = useField("phoneNumber", undefined, {
  initialValue: "",
});

// ✅ Handle Phone Input Change
const onPhoneInput = (phone) => {
  phoneNumber.value = phone ? String(phone) : ""; // Ensure it’s always a string
};

// ✅ Submit Handler
const onSubmit = handleSubmit(values => {
  console.log("Registration Data:", values);
});
</script>

<template>
  <AuthenticationRoot>
    <form @submit.prevent="onSubmit" class="flex w-full max-h-[80vh] overflow-y-auto px-[20px] py-[30px] gap-[10px] border border-[#c3c1b5] rounded-[12px] flex-col mr-[20px]">
      <h4 class="flex w-full text-[16px] font-bold uppercase text-gray-700 my-[10px]">
        Register
      </h4>

      <!-- First Name Input -->
      <div class="flex flex-col w-full relative gap-[10px]">
        <label class="flex w-full items-center justify-start text-[15px] text-gray-400 font-normal">
          First Name
        </label>
        <div class="flex flex-col w-full relative">
          <input :value="firstName" @input="firstName = $event.target.value" type="text" placeholder="John" class="flex h-[42px] bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2 focus:ring-blue-500 focus:border-blue-500" />
          <p v-if="firstNameError" class="first-letter:uppercase text-red-700 text-[13px] py-2">{{ firstNameError }}</p>
        </div>
      </div>

      <!-- Last Name Input -->
      <div class="flex flex-col w-full relative gap-[10px]">
        <label class="flex w-full items-center justify-start text-[15px] text-gray-400 font-normal">
          Last Name
        </label>
        <div class="flex flex-col w-full relative">
          <input :value="lastName" @input="lastName = $event.target.value" type="text" placeholder="Doe" class="flex h-[42px] bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2 focus:ring-blue-500 focus:border-blue-500" />
          <p v-if="lastNameError" class="first-letter:uppercase text-red-700 text-[13px] py-2">{{ lastNameError }}</p>
        </div>
      </div>

      <!-- Email Input -->
      <div class="flex flex-col w-full relative gap-[10px]">
        <label class="flex w-full items-center justify-start text-[15px] text-gray-400 font-normal">
          Email
        </label>
        <div class="flex flex-col w-full relative">
          <input :value="email" @input="email = $event.target.value" type="email" placeholder="example@email.com" class="flex h-[42px] bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2 focus:ring-blue-500 focus:border-blue-500" />
          <p v-if="emailError" class="first-letter:uppercase text-red-700 text-[13px] py-2">{{ emailError }}</p>
        </div>
      </div>

      <!-- Phone Number (Controlled) -->
      <div style="display: flex; flex-direction: column; width: 100%; gap: 10px;">
        <label style="font-size: 15px; color: #9ca3af;">Phone Number</label>
        <VueTelInput
            v-model="phoneNumber"
            default-country="KE"
            @update:modelValue="onPhoneInput"
            class="flex h-[42px] bg-white border border-gray-300 text-gray-900 rounded-lg w-full p-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <p v-if="phoneNumberError" class="text-red-700 text-[13px] py-2">{{ phoneNumberError }}</p>
      </div>

      <!-- Password Input -->
      <div class="flex flex-col w-full relative gap-[10px]">
        <label class="flex w-full items-center justify-start text-[15px] text-gray-400 font-normal">
          Password
        </label>
        <div class="flex flex-col w-full relative">
          <input :value="password" @input="password = $event.target.value" type="password" placeholder="Enter your password" class="flex h-[42px] bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2 focus:ring-blue-500 focus:border-blue-500" />
          <p v-if="passwordError" class="first-letter:uppercase text-red-700 text-[13px] py-2">{{ passwordError }}</p>
        </div>
      </div>

      <!-- Confirm Password Input -->
      <div class="flex flex-col w-full relative gap-[10px]">
        <label class="flex w-full items-center justify-start text-[15px] text-gray-400 font-normal">
          Confirm Password
        </label>
        <div class="flex flex-col w-full relative">
          <input :value="confirmPassword" @input="confirmPassword = $event.target.value" type="password" placeholder="Re-enter your password" class="flex h-[42px] bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2 focus:ring-blue-500 focus:border-blue-500" />
          <p v-if="confirmPasswordError" class="first-letter:uppercase text-red-700 text-[13px] py-2">{{ confirmPasswordError }}</p>
        </div>
      </div>

      <!-- Register Button -->
      <div class="flex items-center justify-center my-[40px] pt-[20px]">
        <WardrobeButton @click="handleSubmit(onSubmit)">
          Register
        </WardrobeButton>
      </div>

      <!-- Already have an account? -->
      <div class="flex items-center justify-center pb-[10px]">
        <p class="text-gray-700 text-[12px]">
          Already have an account?
          <span @click="() => { router.push('/login') }" class="text-blue-500 font-semibold tracking-wide text-[14px] cursor-pointer">Login</span>
        </p>
      </div>
    </form>
  </AuthenticationRoot>
</template>

<style scoped>

</style>