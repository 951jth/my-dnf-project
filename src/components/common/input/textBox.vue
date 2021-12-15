<template>
    <!-- v-model="textValue" -->
    <v-text-field
    hide-details
    class="d-inline-flex txt-box"
    outlined
    :placeholder="placeholder"
    :height="height"
    full-width
    :change="change">
    </v-text-field>
</template>
<script>

export default {
    props:{
        placeholder : { type: String, default: ''},
        width : { type : String, default : '150'},
        height : { type : String , default : '30'},
        textValue : {type : String, default : ''}
    },
    data(){
        return {

        }
    },
    components:{

    },
    methods:{
        change(e){
            console.log(e);
            this.$emit("change", e)
        }
    }
}
</script>
<style scoped>
.v-text-field--filled>.v-input__control>.v-input__slot, .v-text-field--full-width>.v-input__control>.v-input__slot, 
.v-text-field--outlined>.v-input__control>.v-input__slot{
    min-height: unset;
}
.txt-box{  align-self: center;}
/* .v-text-field--outlined fieldset{ top : 0px !important;} */

</style>