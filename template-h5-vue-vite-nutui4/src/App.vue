<template>
  <nut-button type="primary" @click="click">NutUI 按钮</nut-button>
</template>
<script setup lang="ts">
import { showToast } from '@nutui/nutui'
import '@nutui/nutui/dist/packages/toast/index.css'
const click = () => {
  showToast.text('成功')
}
</script>