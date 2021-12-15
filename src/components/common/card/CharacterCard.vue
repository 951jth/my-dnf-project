<template>
    <v-card
        flat light
        rounded
        @mouseover="hover = true"
        @mouseout="hover = false"
        :class="hover == true ? 'card-hover' : ''"
        :min-height="minHeight"
        :min-width="minWidth"
        :loading="loading"
        :color="color"
    >
        <slot name="cardbody">
        </slot>
    </v-card>
</template>
<script>

export default {
    props:{
        minHeight: { type :String , default : '500'},
        minWidth: { type: String, default : 'unset'},
        loading: {type : Boolean, default : false},
        color: { type: String , default : "#fff"}
    },
    data(){
        return {
            hover : false
        }
    },
    components:{

    },
    methods:{

    }
}
</script>
<style scoped>
.card-hover{
    transition: all ease 0.3s 0s;
    transform: translateY(-0.20em) scale(1.05);
    z-index: 999;
}
</style>
