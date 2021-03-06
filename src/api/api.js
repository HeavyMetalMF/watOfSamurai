import * as axios from "axios";
import {saveProfile} from "../redux/profile-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { 'API-KEY': '9711c675-0590-4395-8034-4568a71705d0' }
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollow(userId){
       return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    follow(userId){
        return instance.post(`follow/${userId}`)
            .then(response => response.data)

    },
    getProfile(userID){
        console.warn('Используйте новый метод');
        return profileAPI.getProfile(userID);
    },
}

export const profileAPI = {
    getProfile(userID){
        return instance.get(`profile/${userID}`)
    },
    getStatus(userID){
        return instance.get(`profile/status/${userID}`)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status})
    },
    savePhoto(photo) {
        let formData = new FormData();
        formData.append('image', photo)
        return instance.put(`profile/photo`, formData, {
            headers: {'Content-Type': 'multipart/form-data'}
        })
    },
    saveProfile(profileData){
        return instance.put(`profile`, profileData)
    }
}

export const authAPI = {
    me(){
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false, captcha){
        return instance.post(`auth/login`, { email, password, rememberMe, captcha})
    },
    logout(){
        return instance.delete(`auth/login`)
    },
    getCaptchaUrl(){
        return instance.get("security/get-captcha-url");
    }
}
