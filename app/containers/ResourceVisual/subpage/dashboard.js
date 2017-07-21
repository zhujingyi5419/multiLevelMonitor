/**
 * Created by kingwubin on 2017/7/19.
 */
/**
 * Created by kingwubin on 2017/7/18.
 */
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Row,Col} from 'antd';
import EchartsGauge from '../../../components/dashboard/echarts/EchartsGauge';
import EchartsLine from '../../../components/dashboard/echarts/Echartsline';
import EchartsRadar from '../../../components/dashboard/echarts/EchartsRadar';
import EchartsBar from '../../../components/dashboard/echarts/EchartsBar';
import EchartsHeatmap from '../../../components/dashboard/echarts/EchartsHeatmap';
import ServiceProcess from '../../../components/dashboard/serviceprocess'


class Dashboard extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const Data = this.props.Data;
        return (
            <div>
                <Row>
                    {
                    Data.CPUNum ? <Col span={6}><EchartsGauge data={Data.CPUNum}/></Col>:''
                    }
                    {
                    Data.cpuUser ? <Col span={6}><EchartsGauge data={Data.cpuUser}/></Col>:''
                    }
                    {
                    Data.diskUser ? <Col span={6}><EchartsGauge data={Data.diskUser}/></Col>:''
                    }
                    {
                    Data.memoryUser ? <Col span={6}><EchartsGauge data={Data.memoryUser}/></Col>:''
                    }
                </Row>
                <Row>
                    {
                    Data.diskV ? <Col span={6}><EchartsLine data={Data.diskV}/></Col>:''
                    }
                    {
                    Data.memoryInfo ? <Col span={6}><EchartsRadar data={Data.memoryInfo}/></Col> :''
                    }
                    {
                    Data.netInfo ? <Col span={6}><EchartsLine data={Data.netInfo}/></Col> : ''
                    }
                    {
                    Data.runningTime ? <Col span={6}><EchartsBar data={Data.runningTime}/></Col> :''
                    }
                </Row>
                <Row>
                    {
                    Data.serviceProcess ? <Col span={12}><ServiceProcess data={Data.serviceProcess}/></Col>:''
                    }
                    {
                    Data.serverName ? <Col span={12}><EchartsHeatmap data={Data.serverName}/></Col>:''
                    }
                </Row>
            </div>
        )
    }
}

export default Dashboard