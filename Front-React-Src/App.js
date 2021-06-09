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

import logo from './logo.svg';
import './App.css';


import Navbar from './Layouts/Navbar'
import Footer from './Layouts/Footer'
import Ads from './Ads'
import Stations from './Stations'
import Login from './Login'
import Register from './Register'
import Cabinet from './Cabinet'
import AddCard from './AddCard'
import AddImage from './AddImage'
import AddCompany from './AddCompany'
import AddImageCompany from './AddImageCompany'
import Details from './Details'
import Request from './Request'
import { Children } from 'react';
import Responses from './Responses'

function App() {
  function Main(){
    const [requests, setRequests] = useState([]);

    async function getAllRequests() {
      let response = await fetch("http://localhost:8080/getAllCards");
      let req = await response.json();
      console.log('reqqqq', req);
      setRequests(req);
  }



  useEffect(() => {
        getAllRequests();
    
    console.log("requests", requests);
}, []);

    return (
      <>
      <div className="cardWrapper">
      {requests.map((req, index) => {
                return (
                
                  <div className="myCard">
                    <div className="myCardHeader">
                      {req.name}
                    </div>
                    <div className="myCardPriority">
                      {req.priority} <p>{req.addedDate}</p>
                    </div>
                    <div className="myCardDesc">
                      {req.description}
                    </div>
                    <div className="myCardDone">
                      Сделано
                      {req.done==true?<input type="checkbox" checked="checked"/> :<input type="checkbox"/>}
                    </div>
                    <div className="controlRow">
                      <button className="danger" ><p>Удалить</p></button>
                    </div>
                  </div>
                
                );
                })}
        </div>
      </>
    );
  }

  return (
    <>
      <Router>
        <Navbar/>
        <div className="Container">
            <Switch>
              <Route exact path="/">
                <Main/>
              </Route>
              <Route path="/Ads">
                <Ads/>
              </Route>
              <Route path="/Stations">
                <Stations/>
              </Route>
              <Route path="/Login">
                <Login/>
              </Route>
              <Route path="/Register">
                <Register/>
              </Route>
              <Route path="/cabinet">
                <Cabinet/>
              </Route>
              <Route path="/AddCard">
                <AddCard/>
              </Route>
              <Route path="/AddImage">
                <AddImage/>
              </Route>
              <Route path="/AddCompany">
                <AddCompany/>
              </Route>
              <Route path="/AddImageCompany">
                <AddImageCompany/>
              </Route>
              <Route path={`/Details/:id`} children={<Details/>}>
              </Route>
              <Route path={`/Request/:id`}>
                <Request/>
              </Route>
              <Route path={`/Responses/:id`}>
                <Responses/>
              </Route>
            </Switch>
        </div>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
