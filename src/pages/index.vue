<template>
    <div>
        <div class="index">
            <div class="container">
                <div class="swiper-box">
                    <div class="nav-menu">
                        <nav-menu-list
                         :data="navMenuData"
                          v-show="showNav"
                          @childmosover="childmosover"
                          @childmosleave="childmosleave"
                          ></nav-menu-list>
                        <ul class="menu-wrap"
                         @mouseover="NavMenuMouseover"
                         @mouseleave="NavMenuMouseleave"
                         >
                            <li class="menu-item">
                                <a href="javascript:;" :class="(showNav&&dataType==1)?'active':''" data-type="1">手机 电话卡</a>
                            </li>
                            <li class="menu-item">
                                <a href="javascript:;" :class="(showNav&&dataType==2)?'active':''" data-type="2">电视 盒子</a>
                            </li>
                            <li class="menu-item">
                                <a href="javascript:;" :class="(showNav&&dataType==3)?'active':''" data-type="3">笔记本 平板</a>
                            </li>
                            <li class="menu-item">
                                <a href="javascript:;" :class="(showNav&&dataType==4)?'active':''" data-type="4">家电 插线板</a>
                            </li>
                            <li class="menu-item">
                                <a href="javascript:;" :class="(showNav&&dataType==5)?'active':''" data-type="5">出行 穿戴</a>
                            </li>
                            <li class="menu-item">
                                <a href="javascript:;" :class="(showNav&&dataType==6)?'active':''" data-type="6">智能 路由器</a>
                            </li>
                            <li class="menu-item">
                                <a href="javascript:;" :class="(showNav&&dataType==7)?'active':''" data-type="7">电源 配件</a>
                            </li>
                            <li class="menu-item">
                                <a href="javascript:;" :class="(showNav&&dataType==8)?'active':''" data-type="8">生活 箱包</a>
                            </li>
                        </ul>
                    </div>
                    <swiper :options="swiperOption">
                        <swiper-slide v-for="(item,index) in slideList" :key="index">
                            <a :href="'/#/product/'+item.id">
                                <img :src="item.img" alt="">
                            </a>
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                    </swiper>
                </div>
                <div class="ads-box">
                    
                </div>
                <div class="banner"></div>
                <div class="product-box"></div>
            </div>
        </div>
        <service-bar></service-bar>
    </div>
</template>

<script>
import ServiceBar from '../components/ServiceBar'
import NavMenuList from '../components/NavMenuList'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
    export default {
        name:'index',
        components:{
            ServiceBar,
            swiper,
            swiperSlide,
            NavMenuList
        },
        data(){
            return {
                showNav:1,
                navMenuData:[],
                data:{
                    type1:[
                        {
                        id:30,
                        img:'/imgs/item-box-1.png',
                        name:'小米CC9',
                        },{
                        id:31,
                        img:'/imgs/item-box-2.png',
                        name:'小米8青春版',
                        },{
                        id:32,
                        img:'/imgs/item-box-3.jpg',
                        name:'Redmi K20 Pro',
                        },{
                        id:33,
                        img:'/imgs/item-box-4.jpg',
                        name:'移动4G专区',
                        }
                    ],
                    type2:[
                        {
                        id:33,
                        img:'/imgs/item-box-4.jpg',
                        name:'移动4G专区',
                        },{
                        id:32,
                        img:'/imgs/item-box-3.jpg',
                        name:'Redmi K20 Pro',
                        },{
                        id:31,
                        img:'/imgs/item-box-2.png',
                        name:'小米8青春版',
                        },{
                        id:30,
                        img:'/imgs/item-box-1.png',
                        name:'小米CC9',
                        }
                    ],
                    type3:[
                        {
                        id:30,
                        img:'/imgs/item-box-1.png',
                        name:'小米CC9',
                        },{
                        id:31,
                        img:'/imgs/item-box-2.png',
                        name:'小米8青春版',
                        },{
                        id:32,
                        img:'/imgs/item-box-3.jpg',
                        name:'Redmi K20 Pro',
                        },{
                        id:33,
                        img:'/imgs/item-box-4.jpg',
                        name:'移动4G专区',
                        }
                    ],
                },
                dataType:'',
                swiperOption:{
                    speed:1000,
                    autoplay:{
                        disableOnInteraction:false,
                        delay: 1500
                    },
                    loop:true,
                    effect:'fade',
                    fadeEffect: {
                        crossFade: true,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable :true,
                    },
                     navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                },
                slideList:[
                    {
                        id:'42',
                        img:'imgs/slider/slide-1.jpg'
                    },
                    {
                        id:'45',
                        img:'imgs/slider/slide-2.jpg'
                    },
                    {
                        id:'46',
                        img:'imgs/slider/slide-3.jpg'
                    },
                    {
                        id:'',
                        img:'imgs/slider/slide-4.jpg'
                    },
                    {
                        id:'',
                        img:'imgs/slider/slide-5.jpg'
                    }
                ]
            }
        },
        methods:{
            NavMenuMouseover(e){
                this.showNav=true
                this.dataType=e.target.getAttribute('data-type')
                this.navMenuData=this.data[`type${this.dataType}`]
            },
            NavMenuMouseleave(){
                this.timer=setTimeout(()=>{
                    this.showNav=false
                },200)
            },
            childmosover(){
                clearTimeout(this.timer)
            },
            childmosleave(){
                this.showNav=false
            }
        }
    }
</script>

<style lang="scss" scoped>
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/base.scss';
.index{
    .container{
        .swiper-box{
            .swiper-container{
                height:451px;
                .swiper-button-prev{
                    left:274px;
                }
                img{
                    width:100%;
                    height:100%;
                }
            }
            .nav-menu{
                position:absolute;
                width:264px;
                height:451px;
                z-index:9;
                box-sizing:border-box;
                background-color:rgba(105,101,101,.6);
                padding:26px 0;
                .menu-wrap{
                    .menu-item{
                        position:relative;
                        height:50px;
                        line-height:50px;
                        a{
                            display:block;
                            font-size:16px;
                            color:#ffffff;
                            padding-left:30px;
                            &:after{
                                position:absolute;
                                right:30px;
                                top:17.5px;
                                content:' ';
                                @include bgImg(10px,15px,'/imgs/icon-arrow.png')
                            }
                            &.active{
                               background-color:$colorA; 
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>