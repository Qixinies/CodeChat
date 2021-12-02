<template>
  <div id="msg-list-root">
    <my-info/>
    <div id="msg-list">
      <msg-item></msg-item>
      <msg-item></msg-item>
      <msg-item></msg-item>
    </div>
  </div>
</template>
<script lang="ts">
import MsgItem from './MsgItem.vue';
import MyInfo from './MyInfo.vue';
export default {
  components: { MsgItem, MyInfo },
  setup () {
    return {};
  }
};
</script>
<style lang="scss" scoped>
$list-width:240px;
#msg-list {
  background-color: #e7e7e7;
  height: 100%;
  width: 100%;
}
#msg-list-root {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: $list-width;
  // border-right: 1px solid #e7e7e7;
}
</style>
