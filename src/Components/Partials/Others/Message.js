import React from 'react';
import {Message as Box} from 'semantic-ui-react'


const Message = (props) => (
    <Box color={props.color}>
        <Box.Header>{props.header}</Box.Header>
        <p>{props.text}</p>
    </Box>
);

export default Message