import React, {Component} from 'react';
import Master from "./Components/Layouts/Master";
import {Route, Switch} from "react-router-dom";
import Home from "./Components/Pages/Home";
import TestPage from "./Components/Pages/TestPage";
import Error from "./Components/Pages/Error";


class App extends Component {
    render() {
        return (
            <div>
                <Master/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/testpage" exact strict component={TestPage}/>
                    <Route component={Error}/>
                </Switch>
            </div>
        );
    }
}

export default App;
