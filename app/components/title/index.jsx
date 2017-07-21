import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Row,Col} from 'antd'
import './style.less'
class Title extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="title">
                <Row>
                    <Col span={8} className='titleIn'>
                        <span>保障关系</span>
                    </Col>
                    <Col span={8} className='titleIn'>
                        <span>资源状态</span>
                    </Col>
                    <Col span={8} className='titleIn'>
                        <span>资源态势</span>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Title;