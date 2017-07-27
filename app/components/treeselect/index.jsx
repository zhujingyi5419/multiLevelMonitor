import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {TreeSelect} from 'antd'
import './style.less'

const TreeNode = TreeSelect.TreeNode;

class TreeSelectComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  onChange(value) {
      this.props.changeCenterFn(value)
  }

  render() {
      const data = this.props.treeDate;
      const loop = data => data.map((item) => {
          if (item.children) {
              return (
                  <TreeNode value={item.value} key={item.key} title={item.label}>
                      {loop(item.children)}
                  </TreeNode>
              );
          }
          return <TreeNode value={item.value} key={item.key} title={item.label}/>;
      });
    return (
            <div>
                <TreeSelect checkable style={{ width: 300 }}
                onChange={this.onChange.bind(this)}
                defaultValue="commander">
                    {loop(data)}
                </TreeSelect>
            </div>
    );
  }
}

export default TreeSelectComponent;