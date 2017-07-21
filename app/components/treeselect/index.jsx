import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Tree} from 'antd'
import './style.less'

const TreeNode = Tree.TreeNode;

class TreeSelectComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }


  render() {
      const loop = data => data.map((item) => {
          if (item.children) {
              return (
                  <TreeNode key={item.key} title={item.label}>
                      {loop(item.children)}
                  </TreeNode>
              );
          }
          return <TreeNode key={item.key} title={item.label} />;
      });

    return (
            <div>
                <Tree>
                    {loop(this.props.treeDate)}
                </Tree>
            </div>
    );
  }
}

export default TreeSelectComponent;