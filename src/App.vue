<template>
  <div id="root">
    <nav-bar/>
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
export default {
  components: { NavBar }
};
</script>

<style lang="scss">
#app {
  height: 100%;
}
#root {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
