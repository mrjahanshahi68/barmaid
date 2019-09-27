import * as React from 'react';
import { Route, Switch } from 'react-router-dom'
import Dashboard from './Components/Dashboard';
import  FoodCategory from './Components/FoodCategory';
//import App from './Components/App';
import NavbarMenu from './Components/NavbarMenu';

export const routes = <div>
        <NavbarMenu />
        <Route exact path="/" component={Dashboard}></Route>
        <Route exact path="/food-category" component={FoodCategory}></Route>
    
</div>