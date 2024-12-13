/*
 * @Description: 
 * @Date: 2022-06-24 11:19:01
 * @LastEditTime: 2022-06-24 11:39:03
 */
import axios from '@/utils/request'

export function getList() {
    return axios.get('/test')
}