import * as React from "react";
import { Route ,BrowserRouter as Router  } from "react-router-dom";
import  NavbarMenu  from './NavbarMenu'
import { Dashboard } from "./Dashboard";
import { FoodCategory } from "./FoodCategory";

export default class App extends React.Component<{}, {}>{

    render() {
        return (
            <div>
                <Router>
                    <NavbarMenu />

                    <div className="main-content">
                        <Route exact path="/" component={Dashboard}></Route>
                        <Route exact path="/food-category" component={FoodCategory}></Route>
                    </div>
                </Router>
            </div >

        );
    }
}