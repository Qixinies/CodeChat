<template>
  <div class="item">
    <img id="icon" src="../../../assets/logo.png" alt="">
    <p id="title">{{name}}</p>
  </div>
</template>
<script lang="ts">

export default {
  props: {
    name: {
      require: true,
      type: String
    }
  },
  setup () {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.item {
  width: 100%;
  height: 70px;
  flex-shrink: 0;
  background-color: #f6f6f6;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e7e7e7;
}

#icon {
  height: 50px;
  padding-left: 10px;
}
#title {
  margin-left: 4px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
</style>
