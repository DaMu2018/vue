<template>
  <div class="componentsA">
    <div>A组件</div>
    <div>餐馆名称：{{resturantName}}</div>
    <div >userId:{{userId}}</div>
    <div v-for="itemName in userName" :key="itemName.index">userName:{{itemName.name}}</div>
    <!-- <div>userName:{{userName}}</div> -->
    <div>
      <button @click="stateNow">打印state状态</button>
    </div>
    <div>
      <!-- 修改为A餐馆 -->
      <button @click="modifyAName('A餐馆')">修改为A餐馆</button>
    </div>
    <div>
      <label for="">
        {{localUserId}}<br/>
        <input type="text" name="" id="" @input='demo' v-model="localUserId">
      </label>
      <button @click="modifyLocalId">修改userId</button>
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
    return {
      localUserId: '',
      itemName: ''
    }
  },
  methods: {
    ...mapActions({
      modifyAName: 'modifyName'
    }
      // ['modifyName', 'modifyId']// 相当于this.$store.dispatch("modifyName"),提交这个方法
    ),
    modifyLocalId () {
      console.log(this.$store.getters.getterId(1))
      this.$store.dispatch('modifyId', this.localUserId)
    },
    demo () {
      console.log('demo')
    },
    turnToB () {
      this.$router.push({ path: '/b' })
    },
    stateNow () {
      console.log(this.$store.state.resturantName)
    }
  },
  computed: {
    ...mapGetters(['resturantName', 'userId', 'userName']) // 动态计算属性，相当于this.$store.getter.resturantName
  }
}
</script>
