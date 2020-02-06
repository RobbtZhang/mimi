<template>
    <div class="ali-pay">
        <loading v-if="loading"></loading>
        <div class="form" v-html="content"></div>
    </div>
</template>

<script>
import Loading from '../components/Loading'
    export default {
        name:'aliPay',
        data(){
            return {
                orderId:this.$route.query.orderId,
                content:'',
                loading:true
            }
        },
        components:{
            Loading
        },
        mounted(){
            this.paySumit()
        },
        methods:{
            paySumit(){
                this.axios.post('/pay',{
                    orderId:this.orderId,
                    orderName:'XXXXXX',
                    amount:0.01,
                    payType:1
                }).then((res)=>{
                    this.content=res.content
                    setTimeout(()=>{
                        document.forms[0].submit()
                    },100)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>