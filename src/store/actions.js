import router from '../router'
import * as types from './mutation-types'

export const login = ({commit, state}) => {
  const flag = true
  if (flag) {
    router.push('index')
    commit(types.SET_LOGIN_STATUS, true)
  } else {
    commit(types.SET_LOGIN_STATUS, false)
  }
}
