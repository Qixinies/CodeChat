<template>
  <div id="msg-list-root">
    <my-info/>
    <div id="msg-list">
      <msg-item name="七夕泥"></msg-item>
      <msg-item name="成都某人"></msg-item>
      <msg-item name="小红"></msg-item>
      <msg-item name="老子名字就是长的很你怎么办呢?记得修改名字长度限制"></msg-item>
      <msg-item name="我就是来凑个个数的"></msg-item>
      <msg-item name="我就是来凑个个数的"></msg-item>
      <msg-item name="我就是来凑个个数的"></msg-item>
      <msg-item name="我就是来凑个个数的"></msg-item>
      <msg-item name="我就是来凑个个数的"></msg-item>
      <msg-item name="我就是来凑个个数的"></msg-item>
      <msg-item name="我就是来凑个个数的"></msg-item>
      <msg-item name="我就是来凑个个数的"></msg-item>
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
@import '../../../main.scss';
$list-width:240px;

#msg-list {
  background-color: #e7e7e7;
  width: 100%;
  overflow:auto;
  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    width: 8px;
    background-color: #F5F5F5;
  }
  &::-webkit-scrollbar-thumb {
    height: 1px;    /* 滚动条滑块长度 */
    border-radius: 10px;
    background-color: #e9e9e9;
    &:hover {
      background-color: #c0c0c0;
    }
  }
  &::-webkit-scrollbar-track {
    background-color: #F5F5F5;;
  }
  &::-webkit-scrollbar-button {
  }
}
#msg-list-root {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: $list-width;
  // border-right: 1px solid #e7e7e7;
}
</style>
