 <!--  -->
<template>
    <div class="container">
        dp-container
        <router-link to="/dp/ui/ylwz/ui/supply/dispatch">ylwz</router-link> |
        <!-- <div id="root-view" class="app-view-box" v-html="content"></div> -->
        <div id="appContainer"> </div>
    </div>
</template>

<script>
export default {
    name: 'dp',
    components: {},
    data() {
        return {};
    },
    mounted() {},
    methods: {},
    destroyed() {},
};
</script>

<style scoped lang="scss">
#appContainer{
    width: 80vw;
    height: 80vh;
}
</style>
