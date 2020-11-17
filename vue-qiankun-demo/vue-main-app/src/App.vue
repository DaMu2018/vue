<template>
    <div id="main-root">
        <!-- <router-link to="/">Home</router-link> | <router-link to="/dp">dp</router-link> |
        <router-link to="/ylwz">ylwz</router-link> |
        <router-link to="/app1">app1</router-link> |
        <div v-if="loading">loading</div> -->
        <router-view />
        <div id="root-view" class="app-view-box" v-html="content"></div>
    </div>
</template>
<script>
export default {
    name: 'App',
    props: {
        loading: Boolean,
        content: String,
    },
    data() {
        return {};
    },
    mounted() {},
    watch: {},
};
</script>
<style lang="scss">
*{
    margin: 0;
    padding: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
#sub-app {
}
#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
.app-view-box {
    width: 99vw;
    height: 50vh;
    margin-top: 10vh;
}
</style>
