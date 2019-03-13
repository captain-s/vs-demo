import axios from '../libs/api.request'

export const getHomeInfo = () => {
    return axios.request({
        url: 'Home',
        method: 'get'
    })
}