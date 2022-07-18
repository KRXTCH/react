import "../css/RouteDesign.css";
import React from 'react';

export default function RouteDesign(props){
    const {route} = props;
    return (
        <div className="page_route">{route}</div>
    )
}