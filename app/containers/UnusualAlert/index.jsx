import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'


class UnusualAlert extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                异常报警
            </div>
        )
    }

}

export default UnusualAlert;