<template>
    <v-btn
        class="ma-2 pa-1 noto-sans custom-btn"
        outlined
        :color="color"
        :block="block"
		:disabled="disabled"
		:large="large"
        :loading="loading"
        :style="{'width' : width, 'height' : height}"
        @click="click"
    >
        <slot name="addEtc"></slot>
        <span>{{text}}</span>
    </v-btn>
</template>
<script>

export default {
    props: {
        text : { type : String , default : "등록"},
        color: { type : String, default : "black"},
        disabled: { type: Boolean, required: false },
        large: { type: Boolean, default: false},
        block: { type: Boolean, default: false },
        height : { type : String , default : '30px'},
        width: { type : String , default : 'unset'},
        loading : {type : Boolean, default : false}
    },
    data(){
        return {

        }
    },
    components:{

    },
    methods:{
        click(){
            this.$emit('click')
        }
    }
}
</script>
<style scoped>
.custom-btn:hover{
    background: #abb0cb;
}
.custom-btn:hover span{
    color: #fff !important;
}
</style>
