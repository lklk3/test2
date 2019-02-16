<template>
    <div>
      <header-nav></header-nav>
      <content-nav></content-nav>
      <bottom-nav></bottom-nav>
    </div>
</template>
<script>
    import HeaderNav from './pages/Header.vue'
    import ContentNav from './pages/content.vue'
    import BottomNav from './pages/bottom.vue'
    export default {
        name:'index',
        data(){
            return {

            }
        },
        components:{
            HeaderNav,
            ContentNav,
            BottomNav
        }
    }
</script>
<style>
    
</style>