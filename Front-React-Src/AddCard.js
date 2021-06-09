import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  NavLink,
  Redirect
} from "react-router-dom";

import './App.css';
import axios from 'axios';

function AddCard(){
  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const [services,setServices] = useState("");


  const handleServicesChange = event =>{
    setServices(event.target.value);

    console.log("Services",services);
  }

  const handleSubmit = event =>{
    const inputData = {name,description,services}
    console.log("input Data",inputData);

    const fd = new FormData();

    fd.append('name',name);
    fd.append('desc',description);
    fd.append('services',services);

    axios.post('http://localhost:8080/addCard',fd);

    // addCard(inputData);
    event.preventDefault();
  }

  const handleNameChange = event =>{
    setName(event.target.value);
}
const handleDescChange = event =>{
  setDesc(event.target.value);

}


  async function addCard(data){
        
    // const response = await fetch("http://localhost:8080/addRequest", {
    //     method: "POST",
    //     mode: "cors",
    //     cache: "no-cache",
    //     credentials: "same-origin",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     redirect: "follow",
    //     referrerPolicy: "no-referrer",
    //     body: JSON.stringify(data)
    //   });
    //   let messData = await response.json();
    //   localStorage.setItem('currentDetail',messData);
    }




  return(
    <>
    <div className="addWrapper">
        <div className="addBlock">
          <div className="textBlock">
            <form onSubmit={handleSubmit}>
              <div className="inputField">
                  <div className="inputName">
                    Название задания
                  </div>
                  <div className="inputLogin">
                    <input value={name} onChange = {handleNameChange}></input>
                  </div>
              </div>
              <div className="inputDesc">
                <div className="inputName">
                  Описание
                </div>
                <div className="inputLogin">
                  <textarea type="text" value={description} onChange = {handleDescChange}></textarea>
                </div>
              </div>
              <div className="inputName">
                Приоритет
              </div>
              <div className="inputCheck">
                <div className="checkBox">
                  <input type="checkbox" value="Высокий" onChange={handleServicesChange}></input>
                  <p>Высокий</p>
                </div>
                <div className="checkBox">
                  <input type="checkbox" value="Средний" onChange={handleServicesChange}></input>
                  <p>Средний</p>
                </div>
                <div className="checkBox">
                  <input type="checkbox" value="Низкий" onChange={handleServicesChange}></input>
                  <p>Низкий</p>
                </div>
              </div>
              <div className="registerButton" style={{color:"white"},{flexDirection:"column-reverse"}}>
                  <a onClick={handleSubmit}>Добавить задание</a>
              </div>
              
            </form>
        </div>
        </div>
      </div>
    </>
  );
}
export default AddCard;
