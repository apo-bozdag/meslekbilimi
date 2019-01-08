import React, {Component} from 'react';

import {
    Container,
    Image,
    Menu,
} from 'semantic-ui-react';


import logo from '../../../Assets/Img/logo.png';
import DropDown from "../Others/DropDown";
import Notification from "../Others/Notification";
import CreateLink from "../Others/CreateLink";

class Header extends Component {

    render() {
        return (
            <div>
                <Menu borderless>
                    <Container>
                        <Menu.Item>
                            <CreateLink url={"/"}>
                                <Image src={logo} alt={process.env.REACT_APP_NAME}/>
                            </CreateLink>
                        </Menu.Item>

                        <Menu.Menu position='right'>
                            <Notification color={"green"} icon={"comments"}/>
                            <Notification color={"red"} icon={"world"}/>
                            <DropDown className={"link item user_dropdown"}/>
                        </Menu.Menu>
                    </Container>
                </Menu>
                <Menu className={"bottom_menu"} >
                    <Container className='center bottom_menu_container'>
                        <CreateLink url='testpage' className={"item bottom_menu_link"} text={"Kategori"}/>
                        <CreateLink url='testpage' className={"item bottom_menu_link"} text={"Kategori"}/>
                        <CreateLink url='testpage' className={"item bottom_menu_link"} text={"Kategori"}/>
                        <CreateLink url='testpage' className={"item bottom_menu_link"} text={"Kategori"}/>
                        <CreateLink url='testpage' className={"item bottom_menu_link"} text={"Kategori"}/>
                    </Container>
                </Menu>
            </div>
        );
    }
}

Header.propTypes = {};

export default Header;