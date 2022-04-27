import axios from 'axios'

const API_URL="http://localhost:5002/auth"

const login=(email, password)=>{
    return axios.post(API_URL+'/login',{
        email,
        password
    }).then((response)=>{
        if(response.data.token){
            localStorage.setItem("user",JSON.stringify(response.data))
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
}
const authService={
    login,
    logout
}

export default authService