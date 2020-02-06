<template>
    <div class="order-header">
        <div class="container">
            <div class="header-logo">
                <router-link to="/index"></router-link>
            </div>
            <div class="title">
                <h2>{{title}}</h2>
                    <slot name="tip"></slot>
            </div>
            <div class="username">
                <a href="javascript:;">{{username}}</a>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        name:'order-header',
        props:{
            title:String
        },
        computed:{
            ...mapState(['username'])
        },
        mounted(){
            this.getUser()
        },
        methods:{
                getUser(){
                this.axios.get('/user').then((res={})=>{
                    this.$store.dispatch('saveUserName',res.username)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.order-header{
    padding:30px 0;
    overflow:hidden;
    border-bottom:2px solid #FF6600;
    .header-logo{
        float:left;
    }
    .title,.username{
        display:inline-block;
        height:55px;
        line-height:55px;
        padding-left:54px;
    }
    .title{
        float:left;
        h2{
            display:inline-block;
            font-size:28px;
            color:#333;
        }
        span{
            font-size:14px;
            margin-left:17px;
            color:#999;
            font-weight:200;
        }
    }
    .username{
        float:right;
        a{
            font-size: 16px;
            color:#666;
        }
    }
}
</style>