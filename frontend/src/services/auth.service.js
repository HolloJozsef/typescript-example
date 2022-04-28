import axios from 'axios'
import { useState } from 'react'

const API_URL="http://localhost:5002/auth"


const checkToken=()=>{
    const token = localStorage.getItem('user')
    if(token)
        return true
    return false
}
const login=(email, password)=>{
    return axios.post(API_URL+'/login',{
        email,
        password
    }).then((response)=>{
        console.log(response.data)
        if(response.data.token){
            localStorage.setItem("user",JSON.stringify(response.data.token.accessToken))
            localStorage.setItem("email",email)
            localStorage.setItem("userId",response.data.token.userId)
        }
        console.log(response)
        return response.data
    }).catch((error) => {
        console.log(error)
        throw error.response
    })
}
const logout=()=>{
    localStorage.removeItem("user")
    localStorage.removeItem("email")
    localStorage.removeItem("userId")
}
const authService={
    login,
    logout, 
    checkToken
}

export default authService