/**
 * Created by kingwubin on 2017/7/19.
 */
/**
 * Created by kingwubin on 2017/7/19.
 */
/**
 * Created by kingwubin on 2017/7/18.
 */
import React from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts-liquidfill/dist/echarts-liquidfill.min';

export default class EchartsLiquidfill extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const data=this.props.data;
        this.myChart = echarts.init(document.getElementById(data.id));
        let options = this.setLiquidfillOption(this.props.data);
        this.myChart.setOption(options)
    }

    componentDidUpdate() {
        if(this.myChart){
        let options = this.setLiquidfillOption(this.props.data);
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
    setLiquidfillOption(data) {
        return {
            series: [{
                type: 'liquidFill',
                data: [0.6, 0.5, 0.4, 0.3],
                shape: 'diamond',
                radius:data.data,
                label: {
                    normal: {
                        textStyle: {
                            color: 'red',
                            insideColor: 'yellow',
                            fontSize: 10
                        }
                    }
                }
            }]
        }

    }

}