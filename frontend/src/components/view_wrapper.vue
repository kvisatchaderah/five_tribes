<script setup>
import { d4_wrapper } from '@uis'
</script>

<template>
  <d4_wrapper
    container
    horizontal
    vertical
    :background="'default'"
  >
    <slot />
  </d4_wrapper>
</template>
