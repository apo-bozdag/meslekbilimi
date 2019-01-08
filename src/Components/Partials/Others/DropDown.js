import faker from 'faker'
import React from 'react'
import {Dropdown, Image} from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const trigger = (
  <span>
    <Image avatar src={faker.internet.avatar()}/> {faker.name.findName()}
  </span>
);

const options = [
    {key: 'user', text: 'Hesabım', icon: 'user', as: Link, to: '/my-account'},
    {key: 'settings', text: 'Settings', icon: 'settings'},
    {key: 'sign-out', text: 'Sign Out', icon: 'sign out'},
];

const DropDown = (props) => (
    <Dropdown trigger={trigger} pointing className={props.className} options={options}/>
);

export default DropDown