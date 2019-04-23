<template>
    <div>
        <slot>
            <h1>默认替换不带slot的元素</h1>
        </slot><br/>
        <slot name='one'>会被替换成父组件中slot=“one”的元素</slot><br/>
        <slot name='two'>会被替换成父组件中slot=“two”的元素</slot><br/>
        <p>子组件自己的标签</p>
        <slot name='list' v-for='val in arr' :myId='val'>{{val}}</slot>
    </div>
</template>
<script>
export default {
  data () {
    return {
      arr: [1, 2, 3]
    }
  }
}
</script>
