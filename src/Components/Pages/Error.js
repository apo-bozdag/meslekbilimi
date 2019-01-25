import React, {Component} from 'react';
import {Container} from 'semantic-ui-react'
import Message from "../Partials/Others/Message";

class Error extends Component {

    render() {
        return (
            <div className={"error_page"}>
                <Container>
                    <Message color={"red"} header={"Sayfa bulunamadı"} text={"istediğiniz sayfa bulunamadı"}/>
                </Container>
            </div>
        );
    }
}

Error.propTypes = {};

export default Error;