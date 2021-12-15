<template>
    <v-menu 
	v-model="menu"
    :close-on-content-click="false"
	transition="scale-transition"
	offset-y
	>
        <template v-slot:activator="{ on, attrs }">
            <v-text-field
            :label="label" v-model="dateFormatted"
            no-title readonly
            hide-details rounded
            v-bind="attrs" v-on="on"
            class="date-picker-txt"
            style="height: 30px;"
            ></v-text-field>
        </template>
        <v-date-picker v-model="date"
        no-title @input="menu = false"
        class="date-picker"
        locale="ko" type="date"> 
        </v-date-picker>
    </v-menu>
</template>
<script>
import moment from 'moment'

export default {
    props :{
        label : { type : String , default : ''},
        type : { type : String , default : "A"},
        startDate : { type: Boolean, default : false},
        useDefaultDate : { type: Boolean, default : false},
    },
    data(){
        return {
            date: this.useDefaultDate ? new Date().toISOString().substr(0, 10) : null,
            menu : false,
            dateFormatted: this.useDefaultDate ? this.formatDate(new Date().toISOString().substr(0, 10)) : null,
        }
    },
    watch: {
        date(){
            this.$emit('change', this.parseDate(this.date));
            this.dateFormatted = this.formatDate(this.date);
        },
    },
    mounted(){
        /* 지정된 날짜 입력하고 싶을 경우 props로 입력해서 여기에 추가할 것 ! */
        if(this.startDate){
            this.date = this.$moment().format('YYYY-MM-01'); 
        }
    },
    methods:{
        parseDate (date) {
            if (!date) {
                return null
            }
            const [year, month, day] = date.split('-')
            return `${year}${month}${day.substr(0, 2)}`
        },
        formatDate (date) {
            if(this.type == "A"){
                return this.$moment(date).format('YYYY-MM-DD');
            }
            else if(this.type == "B"){
                return this.$moment(date).format('YYYYMMDD');
            }
        }
    }
}
</script>
<style scoped>
.date-picker-txt{ margin : 8px 0px; padding: 0px; border: 0.5px solid #abb0cb; border-radius: 4px; width: 125px; font-size: 14px;
    font-weight: 500;}
.date-picker-txt >>> .v-text-field__slot input { padding : 0px; height : 30px; border: unset; text-align: center; align-self: center;}


</style>