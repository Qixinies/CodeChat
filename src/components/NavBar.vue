<template>
  <div id="nav-bar">
    <div id="nav-btnbar">
      <button title="最小化" id="nav-min" @click="min"></button>
      <button title="最大化" id="nav-max" @click="max"></button>
      <button title="退出" id="nav-qui" @click="quit"></button>
    </div>
  </div>
</template>
<script lang="ts">
import { getCurrentInstance } from 'vue';

export default {
  setup () {
    const instance = getCurrentInstance();

    function sendIPCRequest (message:string) {
      if (instance != null) {
        instance.appContext.config.globalProperties.$ipcRenderer.send(message);
      } else {
        console.error('instance is null');
      }
    }

    function quit () {
      sendIPCRequest('nav-quit');
    }
    function max () {
      sendIPCRequest('nav-max');
    }
    function min () {
      sendIPCRequest('nav-min');
    }
    return { quit, min, max };
  }
};
</script>
<style lang="scss" scoped>
$nav-bar-height: 32px;
#nav-bar  {
  width: 100%;
  height: $nav-bar-height;
  background-color: #2c2c2c;
  -webkit-app-region: drag;
}

#nav-btnbar {
  display: flex;
  align-items: center;
  height: $nav-bar-height;
  float: right;
}
.nav-btn {
  height: 20px;
  width: 20px;
  margin-right: 10px;

  border: none;
  border-radius: 15px;
  outline: 0;
  -webkit-app-region: no-drag;

  &:hover{
    filter:brightness(1.05);
  }

  &:active{
    filter:brightness(0.8);
  }
}

#nav-qui{
  @extend .nav-btn;
  background-color: #e23737;
}

#nav-max{
  @extend .nav-btn;
  background-color: #22d82b;
}

#nav-min{
  @extend .nav-btn;
  background-color: #d8bf2e;
}

</style>
