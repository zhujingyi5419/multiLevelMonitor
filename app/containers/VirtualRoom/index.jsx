import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import MachineRoom from '../../components/three';


class VirtualRoom extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <MachineRoom/>
            </div>
        );
    }

}

export default VirtualRoom;