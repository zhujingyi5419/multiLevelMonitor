import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Button } from 'antd';
import { Link } from 'react-router';
class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
            <div>
                <div>
                    <Link to="/VirtualRoom"><Button type="primary">虚拟机房</Button></Link>
                    <Link to="/"><Button type="primary">关系态势可视化</Button></Link>
                    <Link to="/ResourceCollect"><Button type="primary">资源采集</Button></Link>
                    <Link to="/UserAuthority"><Button type="primary">用户权限</Button></Link>
                    <Link to="/SystemManage"><Button type="primary">系统管理</Button></Link>
                    <Link to="/InfoManage"><Button type="primary">信息管理</Button></Link>
                    <Link to="/EquipmentManage"><Button type="primary">设备周期管理</Button></Link>
                    <Link to="/SimulationVerify"><Button type="primary">仿真验证</Button></Link>
                    <Link to="/ResourceVisual"><Button type="primary">资源可视化</Button></Link>
                    <Link to="/ResourceDispose"><Button type="primary">资源处理</Button></Link>
                    <Link to="/UnusualAlert"><Button type="primary">异常报警</Button></Link>
                </div>
                {this.props.children}
            </div>
    );
  }
}
export default App;