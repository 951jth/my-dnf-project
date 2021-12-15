<template>
    <v-card flat class="card pa-0 search-card-wrap" color="#fff">
        <v-row class="ma-0">
            <div>
                <label v-if="cardLabel">{{cardLabel}}</label>
            </div>
            <div class="d-flex calender-wrap">
                <template v-if="calenderOn">
                    <outlinedBtn @click="thisMonth" color="#abb0cb" text="이번달"></outlinedBtn>
                    <div class="d-flex">
                        <date-picker ref="startDate" @change="setStartDate"/>
                        <span style="align-self : center;"> - </span>
                        <date-picker ref="endDate" @change="setEndDate"/>
                    </div>
                </template>
            </div>
            <slot name="extension"></slot>
            <outlined-btn  text="검색" color="#abb0cb" @click="search"/>
        </v-row>
    </v-card>
</template>
<script>
import commonMixin from '@/mixins/common';
import OutlinedBtn from '../button/outlinedBtn.vue';
import SelectBox from '../button/selectBox.vue';

export default {
    mixins :[commonMixin],
    props:{
        cardLabel : { Type : String, defualt: "등록일"},
        calenderOn : { type : Boolean, default : false},
        isDefaultDate : { type: Boolean, default : false},
        extendData : { type : Object, defualt : null}   
    },
    data(){
        return {
            data : {}
        }
    },
    components:{
        OutlinedBtn,
        SelectBox
    },
    mounted(){
        if(this.isDefaultDate) this.thisMonth();
    },
    methods:{
        formatDate (date) {
            return this.$moment(date).format('YYYY-MM-DD');
        },
        thisMonth(){
            this.$refs.startDate.date = this.$moment().format('YYYY-MM-01');
			this.$refs.endDate.date = this.$moment().format('YYYY-MM-DD');
        },
        setStartDate(value){
            this.data.startDate = value.replace(/-/gi, '');
        },
        setEndDate(value){
            this.data.endDate = value.replace(/-/gi, '');
        },
        search(){
            const data = this.extendData
				? Object.assign(this.data, this.extendData)
				: this.data;
			if (this.$refs.startDate && this.$refs.startDate.dateFormatted == '')
				data.startDate = null;
			if (this.$refs.endDate && this.$refs.endDate.dateFormatted == '')
				data.endDate = null;
			this.$emit('search', data);
        }
    }
}
</script>
<style scoped>
.search-card-wrap {border-radius: 8px;}
.calender-wrap {padding : 0px 10px 0px 0px;}
</style>
