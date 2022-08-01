import React from "react"

export default function Login() {
    return (
        <div>
            <div>
                <div>
                    <h1>LOGIN</h1>
                </div>
                <div>
                    <input type="text" placeholder="Username"/>
                </div>
                <div>
                    <input type="text" placeholder="Password"/>
                </div>
                <div>
                    <button>Login</button>
                </div>
                <div>
                <a href="/forgotPassword">Esqueci-me da password</a>
                </div>
            </div>
        </div>
    )
}