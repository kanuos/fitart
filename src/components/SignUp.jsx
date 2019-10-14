import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const SignUp = () => {
    const [hasAccount, setHasAccount] = useState(true);
    const reg = (
                <form className="register-form" autoComplete={"off"}>
                    <div className="gridy">
                        <input type="text" placeholder="*First Name"/>
                        <input type="text" placeholder="*Last Name"/>
                        <input type="email" placeholder="*Email Address" autoComplete="off"/>
                    </div>
                    <div className="gridy">
                        <input type="password" placeholder="*Password" />
                        <input type="password" placeholder="*Confirm Password"/>
                    <button className="register-btn" onClick={e=>e.preventDefault()}>Join Now</button>
                    </div>
                </form>
    );
    const log = (
                <form className="log-form" autoComplete={"off"}>
                    <div className="gridy">
                        <input type="email" placeholder="*Email Address" autoComplete={"off"}/>
                        <input type="password" placeholder="*Password" />
                    <button className="register-btn" onClick={e=>e.preventDefault()}>Log In</button>
                    </div>
                </form>
    )
    return (
        <main>
            <Navbar />
            
            <div className="register-content">
                <button className="sign-toggle-box">
                    <span className={`sign-toggle sign-toggle-${hasAccount}`} onClick={()=>setHasAccount(!hasAccount)}></span>
                </button>
                {hasAccount? log:reg}
            </div>
            <Footer />
        </main>
    )
}

export default SignUp
