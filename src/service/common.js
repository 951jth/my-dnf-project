import { commonInstance as axios } from "./axios";

const getServerList = () => {
    const req = {
        method: 'GET',
        url : 'df/servers'
    }
    return axios(req);
}
const getCharacterList = (filter) => {
    const req = {
        method: 'GET',
        url: `df/servers/${filter.server}/characters?characterName=${filter.character}`,
    }
    return axios(req);
}

export default {
    getServerList,
    getCharacterList
}