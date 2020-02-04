export const navslide={
    data(){
        return{
            shownav:false
        }
    },
    mounted(){
        window.addEventListener('scroll',this.initHeight)
    },
    methods:{
        initHeight(){
            let scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop
            this.shownav=scrollTop>222?true:false
        }
    },
    destroyed(){
        window.removeEventListener('scroll',this.initHeight,false)
    }
}