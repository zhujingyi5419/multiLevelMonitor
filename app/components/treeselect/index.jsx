import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class TreeSelectComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
            <div>
            目录树
            </div>
    );
  }
}

export default TreeSelectComponent;