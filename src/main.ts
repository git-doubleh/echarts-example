/*
 * @Description:
 * @Date: 2022-06-23 11:38:34
 * @LastEditTime: 2025-03-12 15:20:57
 */
import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "@/assets/css/reset.scss"
import animated from 'animate.css'

// import ArcoVue from "@arco-design/web-vue"
// import "@arco-design/web-vue/dist/arco.css"

import SvgIcon from "@/components/svg-icon/index.vue"
import "virtual:svg-icons-register"

const app = createApp(App)
app.component("SvgIcon", SvgIcon)
// app.use(animated).use(ArcoVue).use(router).use(store).mount("#app")
app.use(animated).use(router).use(store).mount("#app")
