<template>
    <v-toolbar
        fixed flat
        class="main-header-wrap custom-toolbar"
        style="padding-left:0;"
        >
                <!-- <v-toolbar-title>
                    <v-img src="@/assets/img/flogo_df.png" width="115" height="30"/>
                </v-toolbar-title> -->
                <v-toolbar-items class="ma-0 header-txtln">
                    <a @click="routeTo('/')"><span>1</span></a>
                    <a @click="routeTo('rank')"><span>2</span></a>
                    <a @click="routeTo('board')"><span>3</span></a>
                </v-toolbar-items>
     </v-toolbar>
</template>
<script>
import { routeTo } from '@/utils/util.js';
export default {
    data(){
        return {

        }
    },
    components:{
        
    },
    methods:{
        routeTo
    }
}
</script>
<style scoped>
    .main-header-wrap { color : #818181; position: absolute; top: 0px; width: 100%; border-bottom : 1px solid #e4e4e4}
    .main-header-wrap >>>  .v-toolbar__content{border-bottom: 1px solid #e4e4e4; margin: 0 auto; align-items: center; height: 63px; width: 1100px;}
    /* .main-header >>>  .v-toolbar-items >>> span { text-align: center; margin-right: 10px;} */
    .header-txtln  { align-items: center;}
    .header-txtln > a > span{ margin-right: 20px; align-items: center;}
</style>
