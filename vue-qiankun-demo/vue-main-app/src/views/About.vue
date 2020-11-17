<template>
    <div class="about">
      <h1>about</h1>
    </div>
</template>
<script>
export default {
    props: {
        loading: Boolean,
        content: String,
    },
    watch:{
      content(nv){
        console.log('11nv', nv)
      }
    }
};
</script>
<style lang="scss" scoped>
#sub-app {
    background-color: rgba(153, 153, 153, 0.5);
    width: 80vw;
    height: 80vh;
}
</style>
