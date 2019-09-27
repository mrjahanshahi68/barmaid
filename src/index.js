import React from 'react'
import ReactDom from 'react-dom'

import App from './Components/App'
const MOUNT_NODE = document.getElementById("app");
window.$=require('jquery');
ReactDom.render(
    <App/>,
    MOUNT_NODE
)