import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class MachineRoom extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  componentDidMount() {
    new Cesium.Viewer("cesiumContainer");
  }
  render() {
    return (
        <div>
        <div id="cesiumContainer" style={{width:"100%",height:"100%"}}/>
        </div>
    );
  }
}

export default MachineRoom;