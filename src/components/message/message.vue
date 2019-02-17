<template>
    <div>
       <header-nav></header-nav>
       <banner-nav></banner-nav>
       <content-nav></content-nav>
       <di-bu></di-bu>
    </div>
</template>
<script>
    import HeaderNav from './top/Header.vue'
    import BannerNav from './top/banner.vue'
    import ContentNav from './center/content.vue'
    import DiBu from './dibu/dibu.vue'
    export default {
        name:'message',
        data(){
            return {

            }
        },
        components:{
            HeaderNav,
            BannerNav,
            ContentNav,
            DiBu
        }
    }
</script>
<style>
    
</style>