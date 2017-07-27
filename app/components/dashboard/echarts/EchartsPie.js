/**
 * Created by kingwubin on 2017/7/19.
 */
/**
 * Created by kingwubin on 2017/7/18.
 */
import React from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';

export default class EchartsPie extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const data=this.props.data;
        this.myChart = echarts.init(document.getElementById(data.id));
        let options = this.setPieOption(this.props.data);
        this.myChart.setOption(options)
    }

    componentDidUpdate() {
        if(this.myChart) {
            let options = this.setPieOption(this.props.data);
            this.myChart.setOption(options)
        }
    }

    render() {
        const id=this.props.data.id;
        return (
            <div id={id} style={{width: "100%", height: "180px"}}></div>
        )
    }

    //一个基本的echarts图表配置函数
    setPieOption(data) {
        return {
            title : {
                text: '磁盘使用率',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            calculable : true,
            series : [
                {
                    name:'半径模式',
                    type:'pie',
                    radius : [50,60],
                    center : ['50%', '50%'],
                    roseType : 'radius',
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    lableLine: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data:[
                        {value:data.data, name:'rose1'},
                        {value:data.data, name:'rose2'}
                    ]
                }
            ]

    }

    }

}