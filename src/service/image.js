import { imgInstance as axios } from "./axios";

const getCharacterImg = (filter) => {
    console.log('imgFilter', filter)
    const req = {
        method: 'GET',
        url : `df/servers/${filter.serverId}/characters/${filter.characterId}?zoom=1`
    }
    return axios(req);
}

export default {
    getCharacterImg
}