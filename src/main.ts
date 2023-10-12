import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import router from "./router";
import { createApp } from "vue";
import App from "./App.vue";
import BaseLogo from "./components/ui/BaseLogo.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseDialog from './components/ui/BaseDialog.vue'
import TheHeader from "./components/layouts/TheHeader.vue";

const app = createApp(App);

app.component("the-header", TheHeader);
app.component("base-logo", BaseLogo);
app.component("base-button", BaseButton);
app.component("base-dialog", BaseDialog);

app.use(router);

app.mount("#app");
