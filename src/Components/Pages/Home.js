import React, {Component} from 'react';
import SearchBox from "../Partials/Home/SearchBox";
import Departments from "../Partials/Others/Departments";

class Home extends Component {
    componentDidMount() {
        document.title = 'home'
    }

    render() {
        return (
            <div>
                <SearchBox title={process.env.REACT_APP_SLUG}/>
                <Departments/>
            </div>
        );
    }
}


export default Home;