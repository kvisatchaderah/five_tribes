<script setup>
// store
import { use_state_store } from '@stores'
const state_store = use_state_store()

// ref
import { ref } from 'vue'
const vars_wrapper = ref(null)

// set_vars
import { watch, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { get_contrast_color, get_opacity_color } from '@helpers'

const { active_theme } = storeToRefs(state_store)

const color_params = {
  contrast: get_contrast_color,
  opacity: get_opacity_color,
}

const get_theme_vars = (theme_vars) => {
  Object.keys(theme_vars).reduce((vars, theme_vars_key) => {
    if (not_color_var(theme_vars_key)) {
      vars = theme_vars[theme_vars_key]
      return vars
    }

    vars = theme_vars[theme_vars_key]

    return vars
  }, {})
}

const set_css_vars = () => {
  const vars = get_theme_vars(state_store.active_theme.vars)
  Object.keys(vars).forEach((var_key) => {
    vars_wrapper.value.style.setProperty(`--${var_key}`, vars[var_key])
  })
}

onMounted(set_css_vars)
watch(active_theme, set_css_vars)
</script>

<template>
  <div
    ref="vars_wrapper"
    class="vars_wrapper"
  >
    <slot />
  </div>
</template>
