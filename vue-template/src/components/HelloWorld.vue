<template>
  <div>
    <h1>{{demo | autoChange}}</h1>
    <div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      demo: "test"
    };
  }
};
</script>


<style lang="less" scoped>
</style>
