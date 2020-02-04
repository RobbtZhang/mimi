<template>
    <div class="menu-list" 
    @mouseover="menuListMouseover" 
    @mouseleave="menuListMouseleave">
       <ul class="menu-list-container">
           <li v-for="(item,index) in data" :key="index">
               <router-link :to="/product/+item.id" class="menu-list-item">
               <img :src="item.img" alt="">{{item.name}}
               </router-link>
               <!-- <a  class="menu-list-item" :href="'/#/product/'+item.id">
                   <img :src="item.img" alt="">{{item.name}}
               </a> -->
           </li>
       </ul> 
    </div>
</template>

<script>
    export default {
        props:{
            data:{
                type:Array,
                default:()=>{
                    return []
                }
            }
        },
        methods:{
            menuListMouseover(){
                this.$emit('childmosover')
            },
            menuListMouseleave(){
                this.$emit('childmosleave')
            }
        }
    } 
</script>

<style lang="scss" scoped>
@import './../assets/scss/config.scss';
    .menu-list{
        position:absolute;
        box-sizing:border-box;
        top:0;
        left:264px;
        width:962px;
        height:451px;
        background-color:#ffffff;
        border:1px solid $colorH;
        .menu-list-container{
            height:100%;
            overflow:hidden;
            li{
                float:left;
                width:25%;
                height:75px;
                text-align:center;
                .menu-list-item{
                    display:block;
                    box-sizing:border-box;
                    height:75px;
                    line-height:75px;
                    color:$colorB;
                    font-size:14px;
                    img{
                        width:42px;
                        height:35px;
                        vertical-align:middle;
                        margin-right:15px;
                    }
                }
            }
        }
    }
</style>