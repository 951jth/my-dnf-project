<template>
    <!-- <v-select
    outlined hide-details
    dense solo
    :items="items"
    :label="label"
    item-text="key"
    item-value="value"
    height="10"
    >
    </v-select> -->
        <!-- background-color="#abb0cb" -->
    <v-select
        outlined dense hide-details light
        color="white" 
        class="ml-2 div-selectbox"
        :label="label"
        :items="items"
        :full-width="false"
        height="30"
        item-text="key"
        item-value="value"
    ></v-select>
</template>
<script>

export default {
    props: {
        items : Array,
        label : { type : String , default : '선택'},
        height : { type : String, default : '30'},
        width : { type : String, default : 'unset'},
        filled : Boolean
    },
    data(){
        return {

        }
    },
    components:{

    },
    methods:{

    }
}
</script>
<style scoped>
.div-selectbox { align-items: center; font-size: 14px; max-width: 80px;}
/* .v-list-item__content{
   padding: 0 !important;
 }
 .v-list-item{
   min-height: 24px !important;
 } */
/* .div-selectbox >>> fieldset { height: 35px !important; align-items: center; top: 0px;} */
.div-selectbox >>> .v-label{ font-size: 14px !important; position: unset !important; } 
.v-text-field--outlined.v-input--dense.v-text-field--outlined>.v-input__control>.v-input__slot {min-height: 0px !important;}
.v-text-field--filled>.v-input__control>.v-input__slot, .v-text-field--full-width>.v-input__control>.v-input__slot, .v-text-field--outlined>.v-input__control>.v-input__slot{
    min-height: auto !important;
}
.v-text-field--outlined.v-input--dense.v-text-field--single-line>.v-input__control>.v-input__slot {
    min-height: unset !important;
}
.v-text-field--full-width.v-input--dense>.v-input__control>.v-input__slot, .v-text-field--outlined.v-input--dense>.v-input__control>.v-input__slot{
    min-height: unset !important;
}
/* .v-text-field--box .v-input__slot, .v-text-field--outline .v-input__slot{
    display: flex!important; align-items: center!important;  min-height: auto !important;
} */

</style>
