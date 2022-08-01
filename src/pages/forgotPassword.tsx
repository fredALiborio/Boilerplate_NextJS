export default function ForgotPassword() {
    return (
        <>
            <div>
                <h1>Forgot Password</h1>
            </div>
            <div>
                <input type="text" placeholder="E-mail"/>
            </div>
            <div>
                <button> Reset my password</button>
            </div>
            <div>
                <button><a href="/login">Back</a></button>
            </div>
        </>
    )
}