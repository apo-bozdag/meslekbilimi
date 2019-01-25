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
    {key: 'to', text: 'Hesabım', icon: 'user', as: Link, to: '/hesabim'},
    {key: 'ayarlar', text: 'Ayarlar', icon: 'settings', as: Link , to: '/ayarlar'},
    {key: 'cikis', text: 'Çıkış', icon: 'sign out', as: Link , to: '/cikis'},
];

const DropDown = (props) => (
    <Dropdown trigger={trigger} pointing className={props.className} options={options}/>
);

export default DropDown