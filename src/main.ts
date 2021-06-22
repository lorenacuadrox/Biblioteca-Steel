// STYLE

import "./style/index.scss"

//axios

import "./services/axios"

// VUE

import view from "./app.vue"

import { createApp } from "vue"
import { router } from "./router"

const app = createApp(view)

app.use(router)

app.mount("#app")