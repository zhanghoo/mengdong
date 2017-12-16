import * as types from './mutation-types'

const mutations = {
  [types.SET_LOGIN_STATUS] (state, loginStatus) {
    state.loginStatus = loginStatus
  }
}

export default mutations
