<script setup>
// components

import { d4_theme_button } from '@uis'

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

// store
import { use_state_store } from '@stores'
const state_store = use_state_store()

// themes
import { computed, onBeforeMount } from 'vue'

const not_active_themes = computed(() => {
  return state_store.themes.filter(
    (theme) => theme.key !== state_store.active_theme.key
  )
})

const change_theme = (theme) => {
  state_store.active_theme = theme
}
onBeforeMount(() => {
  change_theme(state_store.active_theme)
})
</script>

<template>
  <d4_theme_button
    v-for="(theme, theme_idx) in not_active_themes"
    :key="theme_idx"
    :theme="theme"
    @click="change_theme(theme)"
  />
</template>
