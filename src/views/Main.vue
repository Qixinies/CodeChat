<template>
  <div id="main">
    <msg-list/>
  </div>
</template>
<script lang="ts">
import MsgList from '../components/Main/MsgList/MsgList.vue';
export default {
  components: { MsgList },
  setup () {
    return {};
  }
};
</script>
<style lang="scss" scoped>
#main {
  height: 100%;
}
</style>
