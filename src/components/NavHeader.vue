<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="javascript:;">小米商城</a>
                    <a href="javascript:;">MUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;" v-if="username">{{username}}</a>
                    <a href="javascript:;" @click="login" v-else>登录</a>
                    <a href="javascript:;" v-if="username" @click="logout">退出登录</a>
                    <a href="/#/order/list" v-if="username">我的订单</a>
                    <a href="javascript:;" class="my-cart"
                    @click="goToCart">
                        <span class="icon-cart"></span>
                        <span v-if="cartCount">购物车({{cartCount}})</span>
                        <span v-else>购物车</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <transition name="phonelist">
                            <div class="children">
                                <ul>
                                    <li class="product" v-for="(item,index) in phoneList" :key="index">
                                        <a :href="'/#/product/'+item.id" target="_blank">
                                            <div class="pro-img">
                                                <img v-lazy="item.mainImage" :alt="item.subtitle">
                                            </div>
                                            <div class="pro-name">{{item.name}}</div>
                                            <div class="pro-price">{{item.price|currency}}</div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </transition>
                    </div>
                    <div class="item-menu">
                        <span>RedMi红米</span>
                        <div class="children2"></div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children3"></div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href="javascript:;"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'nav-header',
        data(){
            return {
                // showPhoneList:false,
                phoneList:[],
            }
        },
        computed:{
            username(){
                return this.$store.state.username
            },
            cartCount(){
                return this.$store.state.cartCount
            }
        },
        filters:{
            currency(val){
                if(!val) return '0.00'
                return '￥'+val.toFixed(2)+'元'
            }
        },
        mounted(){
            this.getProductList()
            if(this.$cookie.get('userId')){
                this.getCartCount(),
                this.getUser()
            }
        },
        methods:{
            getUser(){
                this.axios.get('/user').then((res={})=>{
                    this.$store.dispatch('saveUserName',res.username)
                })
            },
            getCartCount(){
                this.axios.get('/carts/products/sum').then((res)=>{
                    if(res.status==10){
                        return
                    }
                    this.$store.dispatch('saveCartCount',res)
                })
            },
            // mousemovePhone(){
            //    this.showPhoneList=true
            // },
            // mouseleavePhone(){
            //     this.timer=setTimeout(()=>{
            //         this.showPhoneList=false
            //     },200)
            // },
            // mouseleavePhoneList(){
            //     this.showPhoneList=false
            // },
            // mousemovePhoneList(){
            //     clearTimeout(this.timer)
            // },
            
            getProductList(){
                this.axios.get('/products',{
                    params:{
                        categoryId:'100012'
                    }
                }).then(res=>{
                    if(res.list.length>6){
                        this.phoneList=res.list.slice(0,6)
                    }
                })
            },
            goToCart(){
                this.$router.push('/cart')
            },
            login(){
                this.$router.push('/login')
            },
            logout(){
                this.axios.post('/user/logout').then(()=>{
                    this.$message.success('退出成功！')
                    this.$cookie.set('userId','',{expires:'-1'})
                    this.$store.dispatch('saveUserName','')
                    this.$store.dispatch('saveCartCount','')
                    this.$router.push('/index')
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../assets/scss/base.scss';
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';
    .header{
        .nav-topbar{
            height:39px;
            line-height:39px;
            background-color:#333;
            color:#B0B0B0;
            .container{
                @include flex();
                a{
                    display:inline-block;
                    color:#B0B0B0;
                    margin-right:17px;
                    &:last-child{
                        margin-right:0;
                    }
                }
                .my-cart{
                    width:110px;
                    background-color:#FF6600;
                    text-align:center;
                    color:#ffffff;
                    .icon-cart{
                        @include bgImg(16px,12px,'/imgs/icon-cart-checked.png');
                        margin-right:4px;
                    }
                }
            }
        }
        .nav-header{
            .container{
                position:relative;
                height:112px;
                @include flex();
                .header-menu{
                    display:inline-block;
                    width:643px;
                    padding-left:209px;
                    height:112px;
                    .item-menu{
                        display:inline-block;
                        color:#333;
                        font-weight: bold;
                        font-size:16px;
                        line-height:112px;
                        margin-right:20px;
                        span{
                            cursor:pointer;
                        }
                        // .phonelist-enter-active,.phonelist-leave-active{
                        //     height:220px;
                        //     opacity:1;
                        //     transition:all 0.5s;
                        // }
                        // .phonelist-enter,.phonelist-leave-to{
                        //     height:0;
                        //     opacity:0;
                        // }
                        &:hover{
                            color:$colorA;
                            .children{
                                height:220px;
                                opacity:1;
                            }
                        }
                        .children{
                            position:absolute;
                            box-sizing:border-box;
                            background-color:#ffffff;
                            top:112px;
                            height:0;
                            opacity:0;
                            z-index:10;
                            left:0;
                            width:1192px;
                            overflow:hidden;
                            margin-left:17px;
                            border-top:1px solid #E5E5E5;
                            box-shadow:0px 7px 6px 0px rgba(0,0,0,0.11);
                            transition:all .5s;
                            .product{
                                float:left;
                                width:16.6%;
                                height:220px;
                                font-size:12px;
                                line-height:12px;
                                text-align:center;
                                position:relative;
                                a{
                                    display:inline-block;
                                }
                                img{
                                    width:auto;
                                    height:111px;
                                    margin-top:26px;
                                }
                                .pro-img{
                                    height:137px;
                                }
                                .pro-name{
                                    font-weight:bold;
                                    margin-top:19px;
                                    margin-bottom:8px;
                                    color:$colorB;
                                }
                                .pro-price{
                                    color:$colorA;
                                }
                                &:before{
                                    content:' ';
                                    position:absolute;
                                    top:28px;
                                    right:0;
                                    border-left:1px solid $colorF;
                                    height:100px;
                                    width:1px;
                                }
                                &:last-child:before{
                                    display:none;
                                }
                            }
                        }
                    }
                }
                .header-search{
                    width:316px;
                    .wrapper{
                        height:50px;
                        border:1px solid #E0E0E0;
                        display:flex;
                        align-items:center;
                        input{
                            border:none;
                            box-sizing:border-box;
                            border-right:1px solid #E0E0E0;
                            width:264px;
                            height:50px;
                            padding-left:14px;
                        }
                        a{
                            @include bgImg(50px,50px,'/imgs/icon-search.png',18px 18px);
                            &:hover{
                                background:url('/imgs/mi-logo.png') no-repeat center;
                                background-color:#FF6600;
                                background-size:25px 25px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>