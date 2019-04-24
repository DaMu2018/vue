# vuexdemo

> vuex project <br >

vuex是vue的状态管理，相当于是定义全局的变量来使用。
相关教程参考官网[vuex](https://vuex.vuejs.org/zh/ "veux")

1.相关知识点
----
vuex使用状态管理其中的相关词汇有state，mutation，action，module，getter大概这些关键词

2.相关用法
----

### 2.0 vuex用法
引用vuex, npm install vuex -S,然后在main.js中import引入，import Vuex from 'vuex',之后还要在使用Vue.use(Vuex)。vuex一般需要创建store文件夹作为统一的状态管理。

### 2.1 state
state是作为vuex中的核心，在state中定义变量然后在其他地方调用。定义的方法还是键值对的方法。
````
const state = {
    key: value
}
const store = new Vuex.store({
    state //引入全局状态
})
````
state可以使用$store.state来使用，来访问state中的信息。

### 2.2 mutation
mutation是vuex中唯一能够直接修改state的方法。mutation在官网文档说类似于事件，mutation有一个字符串的事件类型（type）和一个回调函数（handler）,回调函数就是我们实际进行更改的地方，接收state作为第一个参数

提交修改: `store.commit('functionName',newValue)`
官网：这个选项更像是事件注册用store.commit来注册。
````
mutations: {
    functionName(state, newValue) {
        state.oldVal = newVal
    } 
}
````
`newVal`可以是对象这样可以包含多个参数

### 2.3 actions
action有点类似mutation都是对state进行操作，但是也有所区别，mutation是一个同步操作而不是异步的，但是实际上异步 的需求，所以就使用actions来做需要异步操作的。按照vuex中的风格约定，尽量让mutation中的使用常量的方法，使用大写，在action中可以写和mutation一样的名字，这样可以一一对应，用小写。
````
action:{
    modifyName ({commit},newVal){
        commit('MODIFYNAME',newVal)
    }
}
````
### 2.4 getter
getter类似于vue中的computed（计算属性）,vuex在store中定义getter，用来使用那些需要多次调用的属性。
getter会暴露为$store.getter对象，可以通过属性值来进行访问。

### 2.5 module
在大型网站建设时需要很多种状态，如果都在一个文件中会很冗长，vuex的module将多种情景下的状态做拆分。每一个js文件就是一个store。
example:创建了一个user.js来管理用户的状态
````
const user = {
    state: {
        userName:'jim',
        userId:,
    },
    mutations: {
        MODIFYNAME: (state,name) => {
            state.name = name
        }
    },
    actions: {
        modifyName: ({commit},name) => {
            commit('MODIFYNAME',name)
        }
    },
    getter: {
        userName: state => state.user.userNames
    }
}

export default user
````
在store中index.js中引入` new Vue.store({
    modules:{
        user
    }
})`

### 附录
对于vuex来说其中的getters，actions，mutations，都是可以拆分的，在单独的文件中使用然后用import引入。在Vue.store中引用