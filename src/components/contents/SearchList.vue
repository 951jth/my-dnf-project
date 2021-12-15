<template>
    <v-container fluid class="search-list-wrap">
        <v-layout>
            <v-flex xs4>
                <!-- <v-card
                    flat light
                    min-height="500" rounded
                    @mouseover="hover = true"
                    @mouseout="hover = false"
                    :class="hover == true ? 'card-hover' : ''"
                    >
                    <slot name="cardbody">
                    </slot>
                </v-card> -->
                <template v-for="(crt, index) in crtList">
                    <character-card :key="index">
                        <template slot="cardbody">
                            <div>
                                <!-- <v-img src="https://img-api.neople.co.kr/df/servers/prey/characters/79b83635418718390a19d583ce0ddfc0?
                                zoom=3&apikey=xZhxxptQ7OKKyRmnhW083wOiDPfT5afv" /> -->
                                <h3>commit</h3>
                                <asyncImage :propsSrc="crt"/>
                            </div>
                        </template>
                    </character-card>
                </template>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import commonMixin from '@/mixins/common';
import commonService from '@/service/common'

export default {
    mixins:[commonMixin],
    data(){
        return {
            hover : false,
            crtList : []
        }
    },
    components:{
    },
    methods:{
        async searchCharInfo(filter){
            console.log(filter);
            try{
                const list = await commonService.getCharacterList(filter);

                this.crtList = list.data.rows
                console.log('crtList', this.crtList);
            } catch(e){
                console.log(e);
            }
        },
    }
}
</script>
<style scoped>
.search-list-wrap{
    padding : 10px 0px;
}
</style>
