import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class TestPage extends Component {
    componentDidMount() {
        document.title = 'test'
    }

    render() {
        return (
            <div>
                <h3>test sayfa</h3>
                <NavLink activeClassName="active" exact to="/">home</NavLink>
            </div>
        );
    }
}

TestPage.propTypes = {};

export default TestPage;