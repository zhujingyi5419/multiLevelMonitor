import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';


class EquipmentManage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
        <div>
            设备周期管理
        </div>
    );
  }

}

export default EquipmentManage;