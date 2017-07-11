import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import CesiumMap from '../../components/cesium';
import buildModuleUrl from 'cesium/Source/Core/buildModuleUrl';
buildModuleUrl.setBaseUrl('./Cesium');


class SituationVisual extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <CesiumMap/>
            </div>
        );
    }

}

export default SituationVisual;