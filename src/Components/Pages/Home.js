import React, {Component} from 'react';
import SearchBox from "../Partials/Home/SearchBox";

class Home extends Component {
    componentDidMount() {
        document.title = 'home'
    }

    render() {
        return (
            <div>
                <SearchBox title={process.env.REACT_APP_SLUG}/>
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;