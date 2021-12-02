import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './main.scss';
import { ipcRenderer } from 'electron';

const app = createApp(App);

app.use(router);

app.config.globalProperties.$ipcRenderer = ipcRenderer;

app.mount('#app');
