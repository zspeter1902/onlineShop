import { getNavMenu, login, logout } from '@/api/user'
import { getToken, setToken, removeToken, setName, getName, removeName, setExpire, getExpire, setNav, getNav } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: getName(),
    expire: getExpire(),
    navList: JSON.parse(getNav()) || []
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_EXPIRE: (state, expire) => {
    state.expire = expire
  },
  SET_SERVICE: (state, list) => {
    state.navList = list
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password, captcha, uuid } = userInfo
    return new Promise((resolve, reject) => {
      login({
        username: username.trim(),
        password: password,
        captcha: captcha.trim(),
        uuid: uuid
      }).then(response => {
        const { token, username } = response
        commit('SET_TOKEN', token)
        commit('SET_NAME', username)
        setToken(token)
        setName(username)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  // get user info
  getInfo({ commit, state }) {
    // return new Promise((resolve, reject) => {
    //   getInfo(state.token).then(response => {
    //     const { data } = response

    //     if (!data) {
    //       reject('Verification failed, please Login again.')
    //     }

    //     const { roles, name, avatar, introduction } = data

    //     // roles must be a non-empty array
    //     if (!roles || roles.length <= 0) {
    //       reject('getInfo: roles must be a non-null array!')
    //     }

    //     commit('SET_ROLES', roles)
    //     commit('SET_NAME', name)
    //     commit('SET_AVATAR', avatar)
    //     commit('SET_INTRODUCTION', introduction)
    //     resolve(data)
    //   }).catch(error => {
    //     reject(error)
    //   })
    // })
  },
  // 获取功能服务
  getNav({ commit }) {
    return new Promise((resolve, reject) => {
      getNavMenu().then(response => {
        commit('SET_SERVICE', response.data)
        setNav(response.data)
        commit('SET_EXPIRE', new Date())
        setExpire(new Date())
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  // user logout
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      logout().then(() => {
        removeToken() // must remove  token  first
        removeName()
        resetRouter()
        commit('RESET_STATE')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      removeName()
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

