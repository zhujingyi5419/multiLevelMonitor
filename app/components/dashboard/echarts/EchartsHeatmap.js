import React from 'react';
import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/heatmap';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/visualMap';
export default class EchartsHeatmap extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const data = this.props.data;
        this.myChart = echarts.init(document.getElementById(data.id));
        let options = this.setHeatmapOption(this.props.data);
        this.myChart.setOption(options)
    }
    componentDidUpdate() {
        if(this.myChart){
        let options = this.setHeatmapOption(this.props.data);
        this.myChart.setOption(options)
        }
    }
    render() {
        const id =this.props.data.id;
        return (
            <div>
                <div id={id} style={{width: "100%", height: "280px"}}></div>
            </div>
        )
    }
    //一个基本的echarts图表配置函数
    setHeatmapOption(heatData) {
        var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
            '7a', '8a', '9a','10a','11a',
            '12p', '1p', '2p', '3p', '4p', '5p',
            '6p', '7p', '8p', '9p', '10p', '11p'];
        var days = ['Saturday', 'Friday', 'Thursday',
            'Wednesday', 'Tuesday', 'Monday', 'Sunday'];
        const data = heatData.data.map(function (item) {
            return [item[1], item[0], item[2] || '-'];
        });
        return {
            title:{
                text:'笛卡尔坐标系上的热力图'
            },
            tooltip: {
                position: 'top'
            },
            animation: false,
            grid: {
                height: '50%',
                y: '10%'
            },
            xAxis: {
                type: 'category',
                data: hours,
                splitArea: {
                    show: true
                }
            },
            yAxis: {
                type: 'category',
                data: days,
                splitArea: {
                    show: true
                }
            },
            visualMap: {
                min: 0,
                max: 10,
                calculable: true,
                orient: 'horizontal',
                left: 'center',
                bottom: '15%'
            },
            series: [{
                name: 'Punch Card',
                type: 'heatmap',
                data: data,
                label: {
                    normal: {
                        show: true
                    }
                },
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }]
        }
    }

}