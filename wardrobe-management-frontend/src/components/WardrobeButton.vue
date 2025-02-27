<script setup>
const baseStyles = `flex w-full flex gap-4 w-full py-[10px] text-center items-center justify-center text-[16px] font-body font-bold tracking-[5px] text-primary-white rounded focus:outline-none focus:shadow-outline`;

const props = defineProps({
  icon: {
    type: String,
  },
  variant: {
    type: String,
    default: 'primary',
  },
  size: {
    type: String,
    default:'md',
  },
})
// Define variants (styles)
const variants = {
  primary: 'bg-primary-blue text-white hover:primary-text',
  secondary: 'bg-secondary-color text-white hover:bg-secondary-text',
  success: 'bg-green-500 text-white hover:bg-green-700',
  danger: 'bg-red-500 text-white hover:bg-red-700',
};

// Define sizes
const sizes = {
  sm: 'text-[9.9px] py-[8px] px-[16px] font-comfortaa',
  md: 'text-base py-2 px-4',
  lg: 'text-lg py-3 px-6',
}
</script>

<template>
  <button class="flex gap-4 w-full py-[10px] px-[20px] text-center items-center justify-center text-[16px] font-body font-bold tracking-[5px] text-primary-white rounded-[15px] focus:outline-none focus:shadow-outline border border-blue-600 bg- text-blue-600 hover:primary-text">
    <slot/>
    <Component :is="props.icon"/>
  </button>
</template>

<style scoped>

</style>