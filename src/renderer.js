/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './index.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import ElementPlus, { ElMessage, ElMessageBox, ElNotification } from 'element-plus';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';

import * as ElementPlusIconsVue from '@element-plus/icons-vue';



const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(store);
app.use(router);
app.use(ElementPlus);
app.config.globalProperties.$message = ElMessage;
app.config.globalProperties.$alert = ElMessageBox.alert;
app.config.globalProperties.$notify = ElNotification;

app.mount('#app');
console.log(
  '👋 This message is being logged by "renderer.js", included via Vite',
);
