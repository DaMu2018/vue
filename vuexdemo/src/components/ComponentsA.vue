<template>
  <div class="componentsA">
    <div>A组件</div>
    <div>餐馆名称：{{resturantName}}</div>
    <div>
      <button @click="stateNow">打印state状态</button>
    </div>
    <div>
      <!-- 修改为A餐馆 -->
      <button @click="modifyName('A餐馆')">修改为A餐馆</button>
    </div>
    <div>
      <button @click="turnToB">跳转到B页面</button>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'A',
  data () {
    return {}
  },
  methods: {
    ...mapActions(
      // 语法糖
      ['modifyName']// 相当于this.$store.dispatch("modifyName"),提交这个方法
    ),
    turnToB () {
      this.$router.push({ path: '/b' })
    },
    stateNow () {
      console.log(this.$store.state.resturantName)
    }
  },
  computed: {
    ...mapGetters(['resturantName']) // 动态计算属性，相当于this.$store.getter.resturantName
  }
}
</script>
