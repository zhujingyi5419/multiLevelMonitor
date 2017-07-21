import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from '../containers';
//import VirtualRoom from '../containers/VirtualRoom';
//import SituationVisual from '../containers/SituationVisual';
//import ResourceCollect from '../containers/ResourceCollect';
//import UserAuthority from '../containers/UserAuthority';
//import SystemManage from '../containers/SystemManage';
//import InfoManage from '../containers/InfoManage';
//import EquipmentManage from '../containers/EquipmentManage';
//import SimulationVerify from '../containers/SimulationVerify';
import ResourceVisual from '../containers/ResourceVisual';
//import ResourceDispose from '../containers/ResourceDispose';
//import UnusualAlert from '../containers/UnusualAlert';
import NotFound from '../containers/404';

// 如果是大型项目，router部分就需要做更加复杂的配置
// 参见 https://github.com/reactjs/react-router/tree/master/examples/huge-apps

class RouterMap extends React.Component {
  render() {
    return (
            <Router history={this.props.history}>
                <Route path='/' component={App}>
                    <IndexRoute component={ResourceVisual}/>
                    {/*<Route path='/VirtualRoom' component={VirtualRoom}/>
                    <Route path='/ResourceCollect' component={ResourceCollect}/>
                    <Route path='/UserAuthority' component={UserAuthority}/>
                    <Route path='/SystemManage' component={SystemManage}/>
                    <Route path='/InfoManage' component={InfoManage}/>
                    <Route path='/EquipmentManage' component={EquipmentManage}/>
                    <Route path='/SimulationVerify' component={SimulationVerify}/>
                    <Route path='/ResourceVisual' component={ResourceVisual}/>
                    <Route path='/ResourceDispose' component={ResourceDispose}/>
                    <Route path='/UnusualAlert' component={UnusualAlert}/>
                    */}<Route path='*' component={NotFound}/>
                </Route>
            </Router>
    );
  }
}

export default RouterMap;
