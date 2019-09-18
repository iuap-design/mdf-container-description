import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as echarts from 'echarts';
import data from 'common/views.ts';
import './index.less'
import { any } from 'prop-types';

export default class ChartsView extends React.Component {
    constructor(props){
        super(props);

    }
    componentDidMount(){

        let _viewTree = {
            name: 'view',
            children:  []
        };
        data.map((item , key) => {
            let container  = item.toJS();
            container.name  = container.text;
            container.type  = key;
            
            container.children = container.item.map((_item ) => {
                let _contanler = data.get(key);
                return {
                    name: _item,
                    text: _contanler.get('text'),
                    description: _contanler.get('description')
                }
            });
            _viewTree.children.push(container);
        })
        // for( let key in data ){
        
        // let container = data[key];
        // container.name  = container.text;
        // container.type  = key;
        
        // container.children = container.item.map(item => {
        //     return {
        //         name: item
        //     }
        // });
        // _viewTree.children.push(container);
        // }
        let myChart = echarts.init(document.getElementById('charts'));
        myChart.setOption({
            title: {
                text: '容器组件关系图'
            },
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'
            },
            series: [
                {
                    type: 'tree',
    
                    data: [_viewTree],
    
                    top: '1%',
                    left: '7%',
                    bottom: '1%',
                    right: '20%',
    
                    symbolSize: 5,
    
                    label: {
                        normal: {
                            position: 'left',
                            verticalAlign: 'middle',
                            align: 'right',
                            fontSize: 14
                        }
                    },
    
                    leaves: {
                        label: {
                            normal: {
                                position: 'right',
                                verticalAlign: 'middle',
                                align: 'left',
                                fontSize: 10
                            }
                        }
                    },
    
                }
            ]
        });
    }
    render(){
        return <div id="charts" className="chartsview-container"> </div>
    }
}