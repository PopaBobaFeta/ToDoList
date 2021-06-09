import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    NavLink
  } from "react-router-dom";

import "./nav.css"

function Navbar(){
    const [user,setUser] = useState(null);

    async function getUser(){
        let tok = localStorage.getItem("token");
        if(tok != null){
            let response = await fetch("http://localhost:8080/getUser/"+tok);
            let jwt = await response.json();
            console.log("jwt",jwt)
            setUser(jwt);
            localStorage.setItem('user', JSON.stringify(jwt));
        }else{
            setUser(null)
        }
    }

    // const [user,setUser] = useState({});
    useEffect(() => {
        // setUser(getUser());
        // console.log(getUser());
        
        getUser()
        // let tmp = JSON.parse(localStorage.getItem('user_data'))
        // console.log(tmp)
        // setUser(tmp)
    },[]);


    return (
        <div className="Navbar">
            <div className="linkRow">
                <div className="link">
                    <NavLink to="/AddCard" >Добавить задание</NavLink>
                </div>
                
                {/* <div className="link">
                    <a>Запчасти</a>
                </div> */}
            </div>
        </div>
    );
}
export default Navbar;