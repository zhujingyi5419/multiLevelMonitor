import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'


class SystemManage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                系统管理
            </div>
        );
    }

}

export default SystemManage;