/**
 * Created by kingwubin on 2017/7/18.
 */
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Row,Col} from 'antd';
import EchartsPie from '../dashboard/echarts/EchartsPie';
import EchartsLiquidfill from '../dashboard/echarts/EchartsLiquidfill'

class JuniorCenterComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                {this.props.juniorCenterDate.map((item,index)=>{
                    return <div style={{width: "100%", height: "280px"}} key={index}>
                        <Row>
                            <Col span={8}>
                                <div>
                                    CPU核数
                                </div>
                                <div>
                                    {item.centerInfo.CPUNum}
                                </div>
                            </Col>
                            <Col span={8}>
                                <div>
                                    CPU使用率
                                </div>
                                <div>
                                    {item.centerInfo.CPUUser}
                                </div>
                            </Col>
                            <Col span={8}>
                                <div>
                                    服务器总数
                                </div>
                                <div>
                                    {item.centerInfo.serverNum}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                {
                                item.centerInfo.diskUser ? <EchartsPie data={item.centerInfo.diskUser}/>:''
                                }
                            </Col>
                            <Col span={12}>
                                {
                                item.centerInfo.memory ? <EchartsLiquidfill data={item.centerInfo.memory}/>:''
                                }
                            </Col>
                        </Row>
                    </div>
                })}
            </div>

        )
    }
}

export default JuniorCenterComponent