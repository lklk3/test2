<template>
    <div>
        <top-nav></top-nav>
        <logo-nav></logo-nav>
        <banner-nav></banner-nav>
        <server-nav></server-nav>
        <news-nav></news-nav>
        <process-nav></process-nav>
        <reaion-nav></reaion-nav>
        <sound-nav></sound-nav>
        <panner-nav></panner-nav>
        <friend-nav></friend-nav>
        <four-nav></four-nav>
        <bottom-nav></bottom-nav>
        <footer-nav></footer-nav>
    </div>
</template>
<script>
    import TopNav from './pages/Top.vue'
    import LogoNav from './pages/Logo.vue'
    import BannerNav from './pages/banner.vue'
    import ServerNav from './pages/server.vue'
    import NewsNav from './pages/news.vue'
    import ProcessNav from './pages/process.vue'
    import ReaionNav from './pages/Resion.vue'
    import SoundNav from './pages/sounds.vue'
    import PannerNav from './pages/panner.vue'
    import FriendNav from './pages/friend.vue'
    import FourNav from './pages/four.vue'
    import BottomNav from './pages/bottom.vue'
    import FooterNav from './pages/footer.vue'
    export default {
        data(){
            return {

            }
        },
        components:{
            TopNav,
            LogoNav,
            BannerNav,
            ServerNav,
            NewsNav,
            ProcessNav,
            ReaionNav,
            SoundNav,
            PannerNav,
            FriendNav,
            FourNav,
            BottomNav,
            FooterNav
        }
    }
</script>
<style>
    
</style>