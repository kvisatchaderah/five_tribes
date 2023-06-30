<script setup>
// props
import { use_props } from '@composables'

const props = defineProps(
  use_props({
    theme: null,
  })
)
</script>

<template>
  <div>
    {{ theme.icon }}
  </div>
</template>
