<template>
    <v-container fluid class="home-container-wrap">
        <v-layout class="src-filter" wrap>
            <v-flex xs12>
                <SearchCard  :calenderOn="false" :isDefaultDate="false" @search="srcForm" ref="search">
                    <template slot="extension">
                        <div class="d-flex">
                            <v-select
                                outlined dense hide-details light
                                id="selectbox"
                                color="white" 
                                class="ml-2 div-selectbox d-inline-flex"
                                :label="label"
                                :items="srcKeyItems"
                                full-width
                                :style="{ 'width' : $vuetify.breakpoint.xsOnly ? '100%' : undefined, }"
                                height="30"
                                item-text="serverName"
                                item-value="serverId"
                                v-model="filter.server"
                            ></v-select>
                            <v-text-field
                                hide-details
                                class="d-inline-flex txt-box"
                                outlined
                                full-width
                                v-model="filter.character">
                            </v-text-field>
                        </div>
                    </template>
                </SearchCard>
            </v-flex>
            <v-flex xs12>
               <SearchList ref="srcList" ></SearchList>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import SearchCard from '@/components/common/card/SearchCard'
import commonMixin from '@/mixins/common'
import commonService from '@/service/common'
import imgService from '@/service/image'
import SearchList from '@/components/contents/SearchList'
export default {
    mixins: [ commonMixin],
    data(){
        return {
            srcKeyItems:[],
            label : "전체",
            filter : [
                { select : '전체'},
                { text : ''}
            ],
            result : '',
            crtList : []
        }
    },
    components:{
        SearchCard,
        SearchList
    },
    methods:{
        srcForm(){
            this.$refs.srcList.searchCharInfo(this.filter);
        },
        async setServerList(e){
            try{
                const server = await commonService.getServerList();
                this.srcKeyItems = server.data.rows;
            }
            catch(e){
                console.log(e);
            }
        },
    },
    mounted(){
        this.setServerList();
    },
    watch:{
        crtList(e){
            this.getCharacterImg(this.crtList[0])
        }
    }
}
</script>
<style scoped>
.home-container-wrap{ padding: 0px;}
.search-card-wrap div { align-self: center;}
.src-filter{align-content: center;}
.selectbox { width: 100px;}
</style>
