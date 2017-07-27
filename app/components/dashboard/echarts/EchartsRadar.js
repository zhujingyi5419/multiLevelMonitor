/**
 * Created by kingwubin on 2017/7/18.
 */
import React from 'react';
import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/radar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
export default class EchartsRadar extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const data =this.props.data;
        this.myChart = echarts.init(document.getElementById(data.id));
        let options = this.setRadarOption(this.props.data);
        this.myChart.setOption(options)
    }
    componentDidUpdate() {
        if(this.myChart) {
            let options = this.setRadarOption(this.props.data);
            this.myChart.setOption(options)
        }
    }
    render() {
        const id=this.props.data.id
        return (
            <div>
                <div id={id} style={{width: "100%", height: "280px"}}></div>
            </div>
        )
    }
    //一个基本的echarts图表配置函数
    setRadarOption(radardata) {
        return {
            title: {
                text: '内存指标'
            },
            tooltip: {},
            radar: {
                // shape: 'circle',
                indicator: radardata.max
            },
            series: [{
                name: '预算 vs 开销（Budget vs spending）',
                type: 'radar',
                // areaStyle: {normal: {}},
                data : radardata.data
            }]
        };

    }

}