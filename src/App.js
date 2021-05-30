import React from 'react';
import HomePage from "./pages/homepage/HomePage.jsx";
import ShopPage from "./pages/shop/ShopPage.jsx";

import { Switch, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>        
      </Switch>
    </div>
  );
}

export default App;
