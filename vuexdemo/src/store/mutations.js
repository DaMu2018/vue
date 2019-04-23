// 提交mutaition是改变Vuex状态的唯一合法方法
export const modifyName = (state, name) => { // A组件点击更改餐厅名为 A餐馆
  state.resturantName = name // 把方法传递过来的参数，赋值给state中的resturantName
}

export const modifyByName = (state, name) => { // B组件点击更改餐厅名为 B餐馆
  state.resturantName = name
}
