import React from 'react';
import {Row, Col} from 'antd';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Title from '../../components/title';
import Time from '../../components/time';
import TreeSelectComponent from '../../components/treeselect';
import AssistAnalyze from '../../components/assistanalyze';
import DashboardView from '../../components/dashboard/dashboardview';
import DashboardAnalyze from '../../components/dashboard/dashboardanalyze';
//import { getTreeData } from '../../fetch/ResourceVisual/resourceVisual'

class ResourceVisual extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            treeData: {}
        };
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={16}><Title/></Col>
                    <Col span={8}><Time/></Col>
                </Row>
                <Row>
                    <Col span={8}><TreeSelectComponent data={this.state.treeData}/></Col>
                    <Col span={16}><DashboardView/></Col>
                </Row>
                <Row>
                    <Col span={6}><AssistAnalyze/></Col>
                    <Col span={16}><DashboardAnalyze/></Col>
                </Row>
            </div>
        );
    }
   /* componentDidMount() {
        const result = getTreeData();
        result.then(res => {
            return res.json()
        }).then(json => {
            const data = json.data;
            console.log(json);
            this.setState({
                treeData: data
            })
        }).catch(ex => {
            if (__DEV__) {
                console.error('搜索页获取数据报错, ', ex.message)
            }
        })
    }*/

}

export default ResourceVisual;