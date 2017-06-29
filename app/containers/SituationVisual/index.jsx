import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import buildModuleUrl from "cesium/Source/Core/buildModuleUrl";
buildModuleUrl.setBaseUrl('./Cesium');
import CesiumMap from '../../components/cesium'
import { Button } from 'antd';
import { Link } from 'react-router'

class SituationVisual extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <Link to="/VirtualRoom"><Button type="primary">虚拟机房</Button></Link>
                <CesiumMap/>
            </div>
        )
    }

}

export default SituationVisual;