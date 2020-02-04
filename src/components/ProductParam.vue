<template>
    <div class="nav-bar">
        <div class="container">
            <div class="pro-title">
                {{title}}
            </div>
            <div class="pro-param">
                <a href="javescript:;">概述</a><span> | </span>
                <a href="javescript:;">参数</a><span> | </span>
                <a href="javescript:;">用户评价 </a>
                <slot name="buy"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'nav-bar',
        props:{
            title:{
                type:String,
                default:''
            }
        },
        data(){
            return{
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '../assets/scss/mixin.scss';
    @import '../assets/scss/config.scss';
.nav-bar{
    height:70px;
    line-height:70px;
    border-top:1px solid $colorH;
    background-color:#fff;
    // &.is_fixed{
    //     position:fixed;
    //     top:0px;
    //     width:100%;
    //     box-shadow:0 5px 5px 0 $colorE;
    // }
    .container{
        width:1226px;
        padding-left:17px;
        box-sizing:border-box;
        margin:0 auto;
        @include flex();
        .pro-title{
            font-size:$fontH;
            color:$colorB;
            font-weight:bold;
        }
        .pro-param{
            font-size:$fontJ;
            span{
                display:inline-block;
                margin:0 5px;
            }
            a{
                color:$colorC;
            }
        }
    }
}
</style>