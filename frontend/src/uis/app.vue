<script setup>
import chroma from 'chroma-js'
import { ref, computed } from 'vue'

import { use_state_store } from '@stores'
const state_store = use_state_store()

const app_background_color = computed(() =>
  chroma(state_store.active_theme.vars.background_color).darken()
)
const app_font_color = computed(() => state_store.active_theme.vars.font_color)
</script>

<template>
  <div class="app">
    <slot />
  </div>
</template>

<style lang="sass" scoped>
@use '@styles/t'

.app
	@include t.preset()
	background-color: v-bind(app_background_color)
	color: v-bind(app_font_color)
</style>

<style lang="sass">
@use '@styles/t'

body
	@include t.body()
</style>
