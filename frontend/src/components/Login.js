import React from 'react'
import { useState, useRef, useEffect } from 'react'
import authService from '../services/auth.service'
import {useNavigate} from "react-router-dom"

const Login = () => {
    const userRef=useRef(null)
    const errRef=useRef()

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [errorMessage, setErrorMessage]=useState('')

    useEffect(()=>{
        userRef.current.focus()
    },[])
    const navigate=useNavigate()
    useEffect(()=>{
        setErrorMessage('')
        },[email,password])

    const handleLogin=async(e)=>{
        e.preventDefault()
       try{
            let response=await authService.login(email,password)
            navigate("/home")            
            console.log(response)
       }catch(error){
           setErrorMessage(error.data.error)
       }
    }
    
    return (
        <><section>
            <p ref={errRef} className={errorMessage?"err-msg":"offscreen"} aria-live="assertive">{errorMessage}</p>
            <h1>Sign In</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email:</label>
                <input 
                type="text"
                id="email"
                ref={userRef}
                autoComplete="off"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                required
                />
                <label htmlFor="password">Password:</label>
                <input 
                type="password"
                id="password"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                required
                />
                <button>Sign in</button>
            </form>
            <p>
                Need an account?<br/>
                <span className="line">
                    {/*router link */}
                    <a href="#">Sign up</a>
                </span>
            </p>
        </section>
        </>
    )
}

export default Login
