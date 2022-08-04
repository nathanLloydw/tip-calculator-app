import { createApp } from 'vue'
import '../css/styles.css'

import Calculator from './components/Calculator.vue'

const app = createApp({})

app.component('calculator', Calculator);

app.mount('#app')