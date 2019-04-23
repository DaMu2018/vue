const user = {
  state: {
    userId: '1',
    userName: [{id: 1, name: 'jim'}, {id: 2, name: 'job'}]
  },
  mutations: {
    MODIFYID: (state, userId) => { state.userId = userId },
    MODIFYUSERNAME: (state, userName) => { state.userName = userName }
  },
  actions: {
    modifyId ({ commit }, userId) {
      commit('MODIFYID', userId)
    },
    modifyUserName ({ commit }, userName) {
      commit('MODIFYUSERNAME', userName)
    }
  }
//   getters: {
//     userId: state => state.userId,
//     userName: state => state.userName
//   }
}

export default user
