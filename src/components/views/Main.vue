<template>
    <MainLayout>
        <router-view slot="content"/>
    </MainLayout>
</template>
<script>
import MainLayout from '@/components/layout/MainLayout.vue'
//src\components\layout\MainLayout.vue

export default {
    components:{
        MainLayout
    },
    methods:{

    },
    data(){
        return {

        }
    }
}
</script>
<style scoped>

</style>
