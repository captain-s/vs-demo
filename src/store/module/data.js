import {getHomeInfo} from '@/api/data'
export default {
    namespaced: true,
    state: {
        userName: '',
    },
    mutations: {
        setUserName(state, name) {
            state.userName = name
        },

        // moveMsg(state, { from, to, msg_id }) {
        //     const index = state[from].findIndex(_ => _.msg_id === msg_id)
        //     const msgItem = state[from].splice(index, 1)[0]
        //     msgItem.loading = false
        //     state[to].unshift(msgItem)
        // }
    },
    getters: {
        // messageUnreadCount: state => state.messageUnreadList.length,
        // messageReadedCount: state => state.messageReadedList.length,
        // messageTrashCount: state => state.messageTrashList.length
    },
    actions: {
        // 获取用户相关信息
        handleHomeInfo({state}) {
            return new Promise((resolve, reject) => {
                getHomeInfo().then(res => {
                    const data = res.data
                        resolve(data)
                }).catch(err => {
                    reject(err)
                })
            })
        },
    }
}