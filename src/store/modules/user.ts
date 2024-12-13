/*
 * @Description: 
 * @Date: 2022-06-23 11:58:57
 * @LastEditTime: 2022-08-05 11:11:38
 */
import { defineStore } from "pinia"
interface IUserState {
    name: string
    msg?:string
}
export const userStore = defineStore({
    id: 'user',
    state: (): IUserState => {
        return {
            name: 'doubleh',
            msg: ''
        }
    },
    getters: {},
    actions: {
        consoleMsg() {
            this.msg = this.name + ' nice'
        }
    }
})