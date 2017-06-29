import React from 'react'
import { render } from 'react-dom'
import { hashHistory } from 'react-router'

import './static/css/common.less'
import './static/css/font.css'


import RouteMap from './router/routeMap'

render(
        <RouteMap history={hashHistory}/>,
    document.getElementById('root')
);
