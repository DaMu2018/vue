 <!-- subApp -->
<template>
    <div class="container">
        <div>subApp</div>
    </div>
</template>

<script>
export default {
    name: 'subApp',
    props: {
        loading: Boolean,
        content: String,
    },
    components: {},
    watch:{
      content(nv){
        console.log('11nv', nv)
      }
    },
    data() {
        return {};
    },
    mounted() {},
    methods: {},
    destroyed() {},
};
</script>

<style scoped lang="less">
</style>
