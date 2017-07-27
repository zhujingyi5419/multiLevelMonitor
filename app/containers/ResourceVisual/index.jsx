import React from 'react';
import {Row, Col} from 'antd';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Title from '../../components/title';
import Time from '../../components/time';
import TreeSelectComponent from '../../components/treeselect';
import Dashboard from './subpage/dashboard';
import JuniorCenter from '../../components/juniorcenter';
import {getTreeData,getJuniorCenter,getDashboard} from '../../fetch/ResourceVisual/resourceVisual'
import './style.css'

class ResourceVisual extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            treeDate: [],
            dashboard: {},
            juniorCenter: {},
            initCenter:'king'
        }
    }
    render() {
        return (
            <div>
                <Row>
                    <Col span={24}><Title/></Col>
                </Row>
                <Row style={{height:'60px'}}>
                    <Col span={7} className='administer'>管辖中心概括</Col>
                    <Col span={6}>
                        {
                            this.state.treeDate.length
                            ? <TreeSelectComponent treeDate={this.state.treeDate}
                              changeCenterFn={this.changeCenter.bind(this)}/>
                            : ''
                        }
                    </Col>
                    <Col span={7}>
                        <Time/>
                    </Col>
                    <Col span={4}>下级中心</Col>
                </Row>
                <Row>
                    <Col span={19}>
                        {
                            this.state.dashboard
                            ? <Dashboard Data={this.state.dashboard}/>
                            : ''
                        }

                    </Col>
                    <Col span={5}>
                        {
                            this.state.juniorCenter.length
                                ? <JuniorCenter juniorCenterDate={this.state.juniorCenter}/>
                                : ''
                        }
                    </Col>
                </Row>
            </div>
        );
    }

    //获取仪表盘数据
    dashDateFn(currentDate){
        // 获取仪表盘数据
        const getDashboardResult = getDashboard(currentDate);
        getDashboardResult.then(res => {
            return res.json()
        }).then(json => {
            // 处理获取的数据
            const data = json.dashboard;
            if (data) {
                this.setState({
                    dashboard: data
                })
            }
        }).catch(ex => {
            // 发生错误
            console.error('获取仪表盘数据报错, ', ex.message)
        });
    }
    //获取下级目录数据
    juniorCenterDateFn(currentDate){
        const getJuniorCenterResult = getJuniorCenter(currentDate);
        getJuniorCenterResult.then(res => {
            return res.json()
        }).then(json => {
            // 处理获取的数据
            const data = json.juniorCenterList;
            if (data.length) {
                this.setState({
                    juniorCenter: data
                })
            }
        }).catch(ex => {
            // 发生错误
            console.error('获取下级中心数据, ', ex.message)
        })
    }

    componentWillMount() {
        const getTreeDataResult = getTreeData();
        getTreeDataResult.then(res => {
            return res.json()
        }).then(json => {
            // 处理获取的数据
            const data = json.data;
            if (data) {
                this.setState({
                    treeDate: data,
                    initCenter:data[0].value
                });
                //获取多级中心目录树数据最上层的中心，作为默认值；
                this.dashDateFn(data[0].value);
                this.juniorCenterDateFn(data[0].value);
            }
        }).catch(ex => {
            console.error('获取目录树数据报错, ', ex.message)
        });
    }
    //更改当前中心
    changeCenter(currentCenter){
        if(this.state.initCenter != currentCenter){
            this.dashDateFn(currentCenter);
            this.juniorCenterDateFn(currentCenter);
            this.setState({
                initCenter:currentCenter
            })
        }
    }
}

export default ResourceVisual;