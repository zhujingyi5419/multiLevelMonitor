/**
 * Created by kingwubin on 2017/7/19.
 */
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Row,Col} from 'antd'
import './style.less'
class ServiceProcess extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <Row>
                {this.props.data.data.map((item,index)=>{
                let keyF = '0'+ index;
                return <Col span={6} key={keyF}>
                        <p key={index}>{item.ServiceName}</p>
                        {item.list.map((name,ind)=>{
                            let keyNub = (index+1)*10+ind;
                        return <p key={keyNub}>{name}</p>
                        })}
                    </Col>
                })}
                </Row>
            </div>
        );
    }
}

export default ServiceProcess;