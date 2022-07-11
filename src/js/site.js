import { createApp } from 'vue'
import '../css/styles.css'

import HelloWorld from './components/HelloWorld.vue'

const app = createApp({})

app.component('hello-world', HelloWorld);

app.mount('#app')