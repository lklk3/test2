<template>
    <div>
        <top-nav></top-nav>
        <tab-nav></tab-nav>
        <t-one></t-one>
        <t-two></t-two>
        <t-three></t-three>
        <boo-nav></boo-nav>
    </div>
</template>
<script>
    import TopNav from './comp/TopNav.vue'
    import TabNav from './comp/TabNav.vue'
    import TOne from './comp/tone.vue'
    import TTwo from './comp/Ttwo.vue'
    import TThree from './comp/Tthree.vue'
    import BooNav from './comp/one/bottom.vue'
    export default {
        name:'echars',
        data(){
            return {

            }
        },
        components:{
            TopNav,
            TabNav,
            TOne,
            TTwo,
            TThree,
            BooNav
        }
    }
</script>
<style>
    
</style>