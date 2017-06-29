import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'


class UserAuthority extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                用户权限
            </div>
        )
    }

}

export default UserAuthority;