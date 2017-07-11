import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class DashboardView extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
            <h1>DashboardView</h1>
    );
  }
}

export default DashboardView;