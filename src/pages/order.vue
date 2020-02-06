<template>
    <div>
        <order-header :title="title">
             <template v-slot:tip>
                <span>{{tip}}</span>
            </template>
        </order-header>
        <router-view></router-view>
        <service-bar></service-bar>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader'
import ServiceBar from '../components/ServiceBar'
import NavFooter from '../components/NavFoorer'
    export default {
        name:'order',
        data(){
            return {
                title:'',
                tip:''
            }
        },
        components:{
            OrderHeader,
            NavFooter,
            ServiceBar
        },
        mounted(){
            this.getPath()
            
        },
        watch:{
            '$route':'getPath'
        },
        methods:{
           getPath(){
               if(this.$route.path=='/order/confirm'){
                    this.title='订单确认'
                    this.tip='请认真填写收货地址'
                    }else if(this.$route.path=='/order/list'){
                        this.title='订单列表'
                        this.tip='温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算！'
                    }else if(this.$route.path=='/order/pay'){
                        this.title='订单支付'
                        this.tip='温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算！'
                }else if(this.$route.path=='/order/alipay'){
                        this.title='订单支付'
                        this.tip='温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算！'
                }
           } 
        }
    }
</script>

<style lang="scss" scoped>

</style>