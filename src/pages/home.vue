<template>
    <div>
        <nav-header></nav-header>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import NavHeader from '../components/NavHeader'
import NavFooter from '../components/NavFoorer'
    export default {
        name:'home',
        components:{
            NavHeader,
            NavFooter
        }
    }
</script>

<style lang="scss" scoped>

</style>