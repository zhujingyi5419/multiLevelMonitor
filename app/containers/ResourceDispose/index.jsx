import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'


class ResourceDispose extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                资源处理
            </div>
        )
    }

}

export default ResourceDispose;