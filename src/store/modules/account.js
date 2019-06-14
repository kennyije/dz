
import { SET_ACCOUNT } from '../mutations'

export default {
    state: {
        account: {}
    },

    mutations: {
        [SET_ACCOUNT] (state, data) {
            state.account = data
        }
    },
}
