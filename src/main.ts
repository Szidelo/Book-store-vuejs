import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import router from "./router";
import { createApp } from "vue";
import App from "./App.vue";
import BaseLogo from "./components/ui/BaseLogo.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseDialog from './components/ui/BaseDialog.vue'
import BaseConfirm from "./components/ui/BaseConfirm.vue";
import TheHeader from "./components/layouts/TheHeader.vue";
import TheHomeHeaderVue from "./components/layouts/TheHomeHeader.vue";

const app = createApp(App);

app.component("the-header", TheHeader);
app.component("the-home-header", TheHomeHeaderVue);
app.component("base-logo", BaseLogo);
app.component("base-button", BaseButton);
app.component("base-dialog", BaseDialog);
app.component("base-confirm", BaseConfirm);

app.use(router);

app.mount("#app");
