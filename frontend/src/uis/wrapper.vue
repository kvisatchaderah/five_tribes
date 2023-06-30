<script setup>
// props
import { use_props, t } from '@composables'

const props = defineProps(
  use_props({
    container: false,
    vertical: false,
    horizontal: false,
    background: false,
  })
)
const { cls } = t(props)
</script>

<template>
  <div
    :class="[
      'wrapper',
      cls.container,
      cls.vertical,
      cls.horizontal,
      cls.background,
    ]"
  >
    <slot />
  </div>
</template>

<style lang="sass" scoped>
@use '@styles/uses'

.wrapper
	@include uses.overflow
</style>
