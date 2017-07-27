/**
 * Created by kingwubin on 2017/7/18.
 */
import React from 'react';
import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

export default class EchartsBar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const data = this.props.data;
        this.myChart = echarts.init(document.getElementById(data.id));
        let options = this.setBarOption(this.props.data);
        this.myChart.setOption(options)
    }

    componentDidUpdate() {
        if(this.myChart){
        let options = this.setBarOption(this.props.data);
        this.myChart.setOption(options)
        }
    }

    render() {
        const id =this.props.data.id;
        return (
            <div id={id} style={{width: "100%", height: "280px"}}></div>
        )
    }

    //一个基本的echarts图表配置函数
    setBarOption(barData) {
        const data = barData.data;
        return {
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#fff'
                        }
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLine:{
                        lineStyle:{
                            color:'#fff'
                        }
                    }
                }
            ],
            series:function () {
                let serie = [];
                for (let key in data) {
                    let item = {
                        data: data[key],
                        name: key,
                        type: 'bar',
                        animation: true,
                    };
                    serie.push(item);
                }
                return serie;
            }()
        };

    }

}