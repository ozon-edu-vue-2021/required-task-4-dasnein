import Vue from "vue";
import vClickOutside from "v-click-outside";

import App from "./App.vue";

import "./assets/styles/custom.scss";

Vue.use(vClickOutside);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
