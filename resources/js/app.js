import "./bootstrap";
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router/Index";
import vuetify from "./plugins/vuetify";
// import "../sass/app.scss";

createApp(App).use(router).use(vuetify).mount("#app");
