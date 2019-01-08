import React from 'react'
import { Icon, Label, Menu } from 'semantic-ui-react'

const Notification = (props) => (
    <Menu.Item as='a'>
        <Icon name={props.icon} />
        <Label color={props.color} className={"notification_icon"} floating>
            22
        </Label>
    </Menu.Item>
);

export default Notification
