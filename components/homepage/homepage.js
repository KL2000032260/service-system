import React from "react"
import "./homepage.css"

import Mainpage from "./Mainpage"
const Homepage = ({setLoginUser}) => {
    return (
        
       
        <div className="home">
              <Mainpage/>
              
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
    )
}

export default Homepage