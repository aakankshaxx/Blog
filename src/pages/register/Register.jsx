import "./register.css"

export const Register = () => {
  return (
    <div className="register">
        <span className="registerTitle"> Register</span>
        <form className="registerForm">
            <label>Usename</label>
            <input type="text" className="registerInput" placeholder="Enter your Email..." />
            <label>Email</label>
            <input type="text" className="registerInput" placeholder="Enter your username..." />
            <label>Password</label>
            <input type="password" className="registerInput" placeholder="Enter your Password..." />
            <button className="registerButton">Register</button>
            <button className="registerLoginButton">Login</button>
        </form>
        </div>
  )
}
