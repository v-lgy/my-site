import "@/mock";
import Vue from 'vue';
import App from './App.vue';
import "./styles/global.less";
import router from "@/router";
import { showMessage } from "@/utils";
Vue.prototype.$showMessage = showMessage;
import "./eventBus";

// 去掉警告
Vue.config.productionTip = false;

// 加载指令
import loading from "@/directives/loading";
import lazy from "@/directives/lazy";
Vue.directive("loading", loading);
Vue.directive("lazy", lazy);

// 加载vuex仓库，并加载全局设置
import store from "@/store";
store.dispatch("setting/remoteSetting");

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')