<template>
        <v-app>
            <header-component/>
            <v-content>
                <v-container class="content-wrap">
                    <slot name="content"/>
                </v-container>
            </v-content>
            <footer-component /> 
        </v-app>
</template>
<script>
import footerComponent from "@/components/widget/FooterComponent.vue";
import headerComponent from "@/components/widget/HeaderComponent.vue";
export default {
    data(){
        return {

        }
    },
    components:{
        footerComponent,
        headerComponent
    },
    methods:{

    }
}
</script>
<style scoped>
.v-application--wrap{ overflow-y: auto !important;}
.v-content >>> .v-content__wrap { background-color : #f5f6f9 !important;}
.v-main {min-height: 874px; margin-top: 64px;}
.content-wrap {max-width: 1100px; height: 100%; padding : 10px 0px;}
</style>
