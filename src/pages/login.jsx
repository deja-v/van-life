import React from "react"
import { useNavigate, useLocation, Navigate } from "react-router-dom"
import { loginUser } from "../api"
export default function Login({setAuthenticated}) {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const location = useLocation()
    function handleSubmit(e) {
        e.preventDefault()
        // async function login() {
        //     const data = await loginUser(loginFormData)
        //     console.log(data)
        // }
        // login()
        
    }

    const navigate = useNavigate()
    const gotToNewPage=()=>{
        if(loginFormData.email==="b@b.com" && loginFormData.password==="p123"){
            setAuthenticated(true)
            navigate("/host");
        }
        else{
            alert("Wrong email or password!")
        }
        
    }
    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="login-container">
            {location.state && <h3>{location.state.message}</h3>}
            <h1>Sign in to your account</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button onClick={()=> gotToNewPage()}>Log in</button>
            </form>
        </div>
    )

}