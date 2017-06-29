import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'


class SimulationVerify extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                仿真验证
            </div>
        )
    }

}

export default SimulationVerify;