import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'


class InfoManage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                信息管理
            </div>
        )
    }

}

export default InfoManage;