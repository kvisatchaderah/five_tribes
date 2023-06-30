// libs
import { defineStore } from 'pinia'

// stores
import state from './state'

// define stores
const use_state_store = defineStore('config', state)

// export
export { use_state_store }
