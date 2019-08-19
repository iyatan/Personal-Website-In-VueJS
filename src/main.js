import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import VueParticles from "vue-particles";
import KsVueFullpage from "ks-vue-fullpage";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faExternalLinkAlt,
  faEye
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faUserSecret, faExternalLinkAlt, faEye);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(KsVueFullpage);

Vue.use(VueParticles);

Vue.use(VueRouter);

new Vue({
  render: h => h(App)
}).$mount("#app");
