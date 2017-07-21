/**
 * Created by kingwubin on 2017/7/18.
 */
import React from 'react';
import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
export default class EchartsLine extends React.Component {
    constructor(props) {
        super(props);
        this.setLineOption = this.setLineOption.bind(this);
        this.initLine = this.initLine.bind(this)
    }
    initLine() {
            const data = this.props.data;
            let myChart = echarts.init(document.getElementById(data.id));
            let options = this.setLineOption(this.props.data);
            myChart.setOption(options)
        }
    componentDidMount() {
        this.initLine()
    }
    componentDidUpdate() {
        this.initLine()
    }
    render() {
        const id = this.props.data.id;
        return (
            <div>
                <div id={id} style={{width: "100%", height: "280px"}}></div>
            </div>
        )
    }
    //一个基本的echarts图表配置函数
    setLineOption(lineData) {
        const data = lineData.data;
        return {
            // title: {
            //     text: '堆叠区域图'
            // },
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['周一','周二','周三','周四','周五','周六','周日'],
                    axisLine:{
                        lineStyle:{
                            color:'#fff'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLine:{
                        lineStyle:{
                            color:'#fff'
                        }
                    }
                },

            ],
            series : function () {
                let serie = [];
                for (let key in data) {
                    let item = {
                        data: data[key],
                        name: key,
                        type: 'line'
                    };
                    serie.push(item);
                }
                return serie;
            }()
        };

    }

}