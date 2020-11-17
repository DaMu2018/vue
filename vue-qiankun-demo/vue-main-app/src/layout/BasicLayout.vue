 <!-- basieLayout -->
<template>
    <div class="container">
        <div class="header">header</div>
        <div class="center-wrap">
            <div class="side">
                <div><router-link to="/about">about</router-link></div>
                <div><router-link to="/dp/ui/ylwz/ui/supply/dispatch">ylwz</router-link></div>
                <div><router-link to="/dp/ui/about">dp-about</router-link></div>
            </div>
            <div class="content">
                <router-view  v-if="$route.name"/>
                <div v-else v-html="childHtml" id="appContainer"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { registerMicroApps, start } from 'qiankun';
export default {
    name: 'BasicLayout',
    components: {},
    data() {
        return {
            show: true,
            childHtml:''
        };
    },
    computed: {
        showView: function () {
            return this.$route.path === '/home';
        },
    },
    watch: {
        $route(nv) {
            console.log('route', nv);
        },
    },
    mounted() {
        console.log('document.getElementById("appContainer")', document.getElementById('appContainer'));
            // 注册子应用
            registerMicroApps(
                [
                    {
                        name: 'ylwz',
                        entry: 'http://ylwz.demo.cddpi.com:8081/',
                        // container: '#appContainer',
                        // render,
                        activeRule: '/dp/ui/ylwz/ui',
                    },
                ],
                {
                    beforeLoad: [
                        app => {
                            console.log('f before load', app);
                        },
                    ], // 挂载前回调
                    beforeMount: [
                        app => {
                            this.show = true;
                            console.log('f before mount', app);
                        },
                    ], // 挂载后回调
                    afterUnmount: [
                        app => {
                            this.show = false;
                            console.log('f after unload', app);
                        },
                    ], // 卸载后回调
                }
            );
            start();
    },
    methods: {},
    destroyed() {},
};
</script>

<style scoped lang="scss">
.header {
    height: 60px;
    background: rgba(0, 0, 0, 0.5);
}
.center-wrap {
    display: flex;
    width: 100vw;
    height: calc(100vh - 60px);
    .side {
        width: 200px;
        background: rgba(66, 165, 245, 0.5);
        border-right: 1px solid #000;
    }
    .content {
        width: calc(100% - 201px);
    }
    #appContainer {
        height: 100%;
        width: calc(100% - 201px);
    }
}
</style>
