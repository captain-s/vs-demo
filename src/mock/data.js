import Mock from 'mockjs'
import { doCustomTimes } from '@/libs/util'

export const HomeInfo = () => {
    let listdata = []
    doCustomTimes(5, () => {
        listdata.push(Mock.mock('@cparagraph()'))
    })
    return listdata
}