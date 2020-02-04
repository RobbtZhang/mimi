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
                    <a :href="'/#/product/'+item.id" v-for="(item,index) in adsList" v-bind:key="index">
                        <img v-lazy="item.img" alt="">
                    </a>
                </div>
            </div>
            <div class="product-box">
                <div class="container1">
                    <h2>手机</h2>
                    <div class="wrapper">
                        <div class="banner-left">
                            <a href="/#/product/35">
                                <img src="/imgs/mix-alpha.jpg" alt="">
                            </a>
                        </div>
                        <div class="list-box">
                            <div class="list" v-for="(arr,i) in phoneList" :key="i">
                                <div class="item" v-for="(item,j) in arr" :key="j">
                                    <span :class="j%2==0?'new-pro':'kill'"
                                    v-text="j%2==0?'新品':'秒杀'"></span>
                                    <div class="item-img">
                                        <img v-lazy="item.mainImage" alt="">
                                    </div>
                                    <div class="item-info">
                                        <h3>{{item.name}}</h3>
                                        <P>>{{item.subtitle}}</P>
                                        <p class="price" @click="addCart(item.id)">{{item.price}}元</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
        <service-bar></service-bar>
        <modal 
        title="提示" 
        sureText="查看购物车" 
        btnType="1" 
        modalType="middle"
        :showModal="showModal"
        @submit="goToCart"
        @cancel="showModal=false"
        >
            <template v-slot:body>
                <p>商品添加成功！</p>
            </template>
        </modal>
    </div>
</template>

<script>
import ServiceBar from '../components/ServiceBar'
import NavMenuList from '../components/NavMenuList'
import Modal from '../components/Modal'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
    export default {
        name:'index',
        components:{
            ServiceBar,
            swiper,
            swiperSlide,
            NavMenuList,
            Modal
        },
        data(){
            return {
                showNav:false,
                showModal:false,
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
                ],
                adsList:[
                    {
                        id:33,
                        img:'/imgs/ads/ads-1.png'
                    },{
                        id:48,
                        img:'/imgs/ads/ads-2.jpg'
                    },{
                        id:45,
                        img:'/imgs/ads/ads-3.png'
                    },{
                        id:47,
                        img:'/imgs/ads/ads-4.jpg'
                    }
                ],
                phoneList:[
                    
                ]
            }
        },
        mounted(){
          this.init()   
        },
        methods:{
            init(){
                this.axios.get('/products',{
                    params:{
                        categoryId:100012,
                        pageSize:14
                    }
                }).then((res)=>{
                    this.phoneList=[res.list.slice(6,10),res.list.slice(10,14)]
                })
            },
            goToCart(){
                this.$router.push('/cart')
            },
            addCart(id){
                
                // return
                this.axios.post('/carts',{
                    productId:id,
                    selected:true
                }).then((res)=>{
                    if(res.status==10){
                        this.$router.push('/login')
                    }else{
                        this.showModal=true
                        this.$store.dispatch('saveCartCount',res.cartTotalQuantity)
                    }
                })
            },
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
        .ads-box{
            @include flex();
            margin-top:14px;
            margin-bottom:31px;
            img{
                width:296px;
                height:167px;
            }
        }
    }
    .product-box{
        background-color:$colorJ;
        .container1{
            width:1226px;
            padding-left:17px;
            margin:0 auto;
            box-sizing:border-box;
            overflow:hidden;
            h2{
                font-size:$fontF;
                height:21px;
                line-height:21px;
                color:$colorB;
                margin-bottom:10px;
                margin-top:10px;
            }
            .wrapper{
                display:flex;
                height:630px;
                .banner-left{
                    margin-right:16px;
                    img{
                        width:224px;
                        height:619px;
                    }
                }
                .list-box{
                    .list{
                        padding-right:15px;
                        padding-left:10px;
                        box-sizing: border-box;
                        @include flex();
                        width:969px;
                        margin-bottom:14px;
                        &:last-child{
                            margin-bottom:0;
                        }
                        .item{
                            box-sizing:border-box;
                            width:226px;
                            height:302px;
                            padding-top:15px;
                            background-color:$colorG;
                            text-align:center;
                            transition:all .2s linear;
                            &:hover{
                                transform: translate3d(0,-2px,0);
                                box-shadow:0px 15px 30px rgba(0,0,0,.1);
                                z-index:10;
                            }
                            span{
                                display:inline-block;
                                width:67px;
                                height:24px;
                                font-size:14px;
                                line-height:24px;
                                color:#ffffff;
                                &.new-pro{
                                    background-color:#7ECF68;
                                }
                                &.kill{
                                    background-color:#E82626;
                                }
                            }
                            .item-img{
                                img{
                                    width:100%;
                                    height:180px;
                                }
                            }
                            .item-info{
                                h3{
                                    font-size:$fontJ;
                                    color:$colorB;
                                    line-height:$fontJ;
                                    font-weight:bold;
                                }
                                p{
                                    color:$colorD;
                                    line-height:13px;
                                    margin:6px auto 13px;
                                    &.price{
                                        color:#F20A0A;
                                        font-size:$fontJ;
                                        font-weight:bold;
                                        cursor:pointer;
                                        &:after{
                                            content:' ';
                                            @include bgImg(22px,22px,'/imgs/icon-cart-hover.png');
                                            margin-left:5px;
                                            vertical-align:middle;
                                        }
                                    }
                                }
                                
                            }
                        }
                    }
                }
            }
        }        
    }
}
</style>