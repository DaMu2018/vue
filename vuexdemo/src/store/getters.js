// 获取最终的状态信息
// export const resturantName = state => state.resturantName
const getters = {
  resturantName: state => state.resturantName,
  userName: state => state.user.userName,
  userId: state => state.user.userId,
  getterId: state => id => { return state.user.userName.find(item => item.id === id) }
//   (state) => (id) => {
//     return state.todos.find(todo => todo.id === id)
//   }
}

export default getters
