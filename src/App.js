import React, {Component} from 'react';
import Master from "./Components/Layouts/Master";
import {Route, Switch} from "react-router-dom";
import Home from "./Components/Pages/Home";
import TestPage from "./Components/Pages/TestPage";
import Error from "./Components/Pages/Error";
import Header from "./Components/Partials/Header/Header";
import Footer from "./Components/Partials/Footer/Footer";
import Jobs from "./Components/Pages/Jobs";


class App extends Component {
    render() {
        return (
            <div>
                <Master>
                    <Header/>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/is-ilanlari" exact component={Jobs}/>
                        <Route path="/testpage" exact strict component={TestPage}/>
                        <Route component={Error}/>
                    </Switch>
                    <Footer/>
                </Master>
            </div>
        );
    }
}

export default App;
