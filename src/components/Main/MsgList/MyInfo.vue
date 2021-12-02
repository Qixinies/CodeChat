<template>
  <div id="my-info">
    <img id="userhead" src="../../../assets/default/icon/default_user.png" alt="">
    <p>七夕泥</p>
  </div>
</template>
<script lang="ts">
export default {
  setup () {
    return {};
  }
};
</script>
<style lang="scss" scoped>
#my-info {
  background-color: #ffffff;
  height: 60px;
  width: 100%;
  display: flex;
  flex-shrink: 0;
  align-items: center
}
#userhead {
  height: 40px;
  margin: 10px;
}
</style>
