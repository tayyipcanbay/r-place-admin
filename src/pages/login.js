import React, { useEffect } from "react";

const Login = () => {
    const [,setUser]=React.useState("");
    const usernameRef = React.useRef();
    const passwordRef = React.useRef();
    const buttonRef= React.useRef();   
    const alertRef = React.useRef(); 

    useEffect(() => {
        let user=JSON.parse(localStorage.getItem("user"));
        if(user.success){
            window.location.href="/panel";
        }
    },[])
    const handleSubmit=(e)=>{
        e.preventDefault();
        let username= usernameRef.current.value;
        let password= passwordRef.current.value;
        if(username && password){
            handleLogin(username,password);
        }
        else{
            alertRef.current.style.display="block";
            alertRef.current.innerHTML="Please enter username and password";
        }
        
    }
    const handleLogin = (username,password) => {
        simulateLoginRequest(username,password).then((response)=>{
            if(response.success===true){
                setUser(response);
                localStorage.setItem("user",JSON.stringify(response));
                window.location.href="/panel";
            }
            else{
                alertRef.current.style.display="block";
                alertRef.current.innerHTML=response.message;
            }
        })
    }

    const simulateLoginRequest = (username, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (username === "admin" && password === "admin") {
                    let loginData = { success:true ,username: username, password: password , token:"1234567890"};
                    resolve(loginData);
                } else {
                    let loginData={success:false,message:"Invalid username or password"};
                    reject(loginData);
                }
            }, 1000);
        });
    }
    
    return(
        <div className="login-body">
            <div className="login-container">
                <div className="login-header">
                    <h1>Sign In</h1><hr></hr>
                </div>
                <div className="login-form">
                    <form onSubmit={handleSubmit}>
                        <div className="login-form-group">
                            <input ref={usernameRef} type="text" name="username" autoComplete="on" id="username" placeholder="Username"/>  
                        </div>
                        <div className="login-form-group">
                            <input ref={passwordRef} type="password" name="password" autoComplete="on" id="password" placeholder="Password"/>
                        </div>
                        <div className="login-form-group">
                            <button ref={buttonRef} type="submit">Sign In</button>
                        </div>
                    </form>
                    <div ref={alertRef} className="login-alert">
                        
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Login;