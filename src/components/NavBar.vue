<template>
  <div id="nav-bar">
  </div>
</template>
<script lang="ts">
export default {
  setup () {
    return {}
  }
}
</script>
<style lang="scss" scoped>
@import '../main.scss';
#nav-bar  {
  width: 100%;
  height: 30px;
  background-color: $style-color;
  -webkit-app-region: drag;
}
</style>
