import { createApp } from 'vue';
import App from './App.vue';

import './style/flexible';

import router from './router';
import axios from './api/index';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { ElMessage } from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import zhCn from 'element-plus/es/locale/lang/zh-cn';

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

app.use(router);

app.use(ElementPlus, { locale: zhCn });
app.config.globalProperties.$message = ElMessage;
app.config.globalProperties.axios = axios;
app.mount('#app');
