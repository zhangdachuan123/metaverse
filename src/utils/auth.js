/*
 * @Author: zdc 2025607638@qq.com
 * @Date: 2023-01-07 02:06:19
 * @LastEditors: zdc 2025607638@qq.com
 * @LastEditTime: 2023-01-07 02:07:04
 * @FilePath: \metaverse-project\metaverse-project\src\utils\auth.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Session } from "./index";

const TOKEN_KEY = "QM-TOKEN";
const USERINFO_KEY = "QM-USERINFO";

// token相关方法
export function getToken() {
    return Session.get(TOKEN_KEY);
}
export function setToken(token) {
    Session.set(TOKEN_KEY, token);
}
export function removeToken() {
    Session.remove(TOKEN_KEY);
}

// userInfo相关方法
export function getUserInfo() {
    return Session.get(USERINFO_KEY);
}
export function setUserInfo(userInfo) {
    Session.set(USERINFO_KEY, userInfo);
}
export function removeUserInfo() {
    Session.remove(USERINFO_KEY);
}