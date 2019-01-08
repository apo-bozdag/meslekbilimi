import React from 'react'
import {NavLink} from "react-router-dom";

function contentCheck(props){
    let content;
    if(props.text){
        content = props.text;
    }else{
        content = props.children;
    }
    return content;
}

function className(props){
    let className = "";
    if(props.className){
        className = props.className
    }
    return className;
}

const CreateLink = (props) => (
    <NavLink activeClassName="active" className={className(props)} exact to={props.url}>{contentCheck(props)}</NavLink>
);

export default CreateLink