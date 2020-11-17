<template>
  <div class="home">
    home page
    <div>
      <button @click="onclick">clicl</button>
      <MyUploader></MyUploader>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MyUploader from '@/components/MyUploader.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    MyUploader
  },
  methods:{
    onclick(){
      console.log('1111', 1111)
    }
  }
}
</script>
