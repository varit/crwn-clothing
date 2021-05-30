import React from 'react';
import './App.css';

import HomePage from "./pages/homepage/HomePage.jsx";
import ShopPage from "./pages/shop/ShopPage.jsx";
import Header from "./components/Header/Header.jsx";
import { Switch, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>        
      </Switch>
    </div>
  );
}

export default App;
