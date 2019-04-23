<template>
  <div class="componentsB">
    <div>B组件</div>
    <div>餐馆名称：{{resturantName}}</div>
    <div>
      <!-- 修改为B餐馆 -->
      <button @click="modifyByName('B餐馆')">修改为B餐馆</button>
    </div>
    <div>
      <button @click="turnToA">跳转到A页面</button>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'B',
  data () {
    return {}
  },
  methods: {
    ...mapActions(
      // 语法糖
      ['modifyByName']// 相当于this.$store.dispatch("modifyName"),提交这个方法
    ),
    turnToA () {
      this.$router.push({ path: '/a' })
    }
  },
  computed: {
    ...mapGetters(['resturantName']) // 动态计算属性，相当于this.$store.getter.resturantName
  }
}
</script>
