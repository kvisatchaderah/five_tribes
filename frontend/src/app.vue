<script setup>
import * as views from '@views'
import {
  vars_wrapper,
  view_wrapper,
  style_wrapper,
  theme_buttons,
} from '@components'

import { use_state_store } from '@stores'
const state_store = use_state_store()

const { active_view } = state_store
</script>

<template>
  <vars_wrapper>
    <style_wrapper>
      <view_wrapper>
        <theme_buttons />

        <!-- view -->
        <component :is="views[active_view]" />
        <!-- /view -->
      </view_wrapper>
    </style_wrapper>
  </vars_wrapper>
</template>
