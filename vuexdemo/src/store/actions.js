// 给actions注册事件处理函数。当这个函数被触发时，将状态提交到mutations中处理

export function modifyName ({commit}, name) { // commit:提交 name即为点击后的传递过来的参数，此时是A餐馆
  return commit('modifyName', name)
}

export function modifyByName ({commit}, name) {
  return commit('modifyByName', name)
}

// ES6精简写法
export const modifyId = ({commit}, id) => commit('MODIFYUSERNAME', id)
