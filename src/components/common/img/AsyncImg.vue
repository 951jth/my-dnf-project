<template>
    <!-- <v-img :src="getCharacterImg(propsSrc)"/> -->
    <v-img :src="reqUrl"/>
</template>
<script>
import imgService from '@/service/image'
export default {
    props:{
        propsSrc : {type : Object, default : null}
    },
    data(){
        return {
            reqUrl : ''
        }
    },
    components:{

    },
    methods:{
        // arrayBufferToBase64 (buffer) {
        //     let binary = ''
        //     let bytes = new Uint8Array(buffer)
        //     console.log(bytes);
        //     for (let i = 0; i < bytes.byteLength; i++) {
        //     binary += String.fromCharCode(bytes[i])
        //     }

        //     // return btoa(binary)
        //     return btoa(buffer)
        // },
        async getCharacterImg(item){
            // try{
            //     const crtImgUrlPromise = imgService.getCharacterImg(item);
            //     const crtImgUrl = await Promise.resolve(crtImgUrlPromise)
            //     console.log("crtImgUrl", crtImgUrl)
            //     const binary = crtImgUrl.data
            //     const base64 = this.arrayBufferToBase64(binary)
            //     this.dataUrl = 'data:image/png;base64, ' + base64
            //     console.log('dataUrl', this.dataUrl)
            // } catch(e){
            //     console.log(e)
            // }
            if(!item) return;
            const url = `${process.env.imgUrl}df/servers/${item.serverId}/characters/${item.characterId}?zoom=1`
            this.reqUrl = url
        }
    },
    watch:{
        propsSrc: {
            handler(e){
                console.log('watch', e)
                this.getCharacterImg(e);
            },
            immediate: true
        }
    }
}
</script>
<style scoped>

</style>
