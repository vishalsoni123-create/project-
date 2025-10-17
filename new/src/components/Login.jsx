import { Link } from "react-router-dom";
export function Login(){
    return(
         <>
    
        <div className="login-container">
          <div className="login-form">
           <h1 >Welcome Back!</h1>
           <p style={{marginBottom:"0.5rem"}}>Login to continue your journey with <span style={{color:"purple"}}>TechHub</span></p>
           <form>
            <div className="form-div">
                <label>Email:</label><br/>
                <input type="email" placeholder="Enter Email"/>
            </div>
            <div className="form-div">
                <label>Password</label><br/>
                <input type="password" placeholder="Enter Password"/>
            </div>
            <div className="login-btn">
                <button>Login</button>
            </div>
            <div className="account">
                <p><a href="">Forget Password</a></p>
                <p>Don`t Have an account ? <a style={{fontWeight:"600"}} href="">Sign Up</a></p>
                <Link to="/" className="header-link">Home</Link>
            </div>
           </form>
          </div>
        </div>
        </>
    )
}