import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as echarts from 'echarts';
import data from 'common/views';
import './index.less'

export default class ChartsView extends React.Component {
    constructor(props){
        super(props);

    }
    componentDidMount(){

        let _viewTree = {
            name: 'container',
            children:  []
        };
        let _billTree = {
            name: 'bill',
            children:  []
        };
        // let table = []
        data.map((item , key) => {
          
            let container  = item.toJS();
            container.name  = container.text;
            container.cType = key;
            // table.push( 
            //     `## ${key}`,
            //     `> ${container.description}`,
            //     '| 控件分类 | cControlType | **含义** | **说明** |',
            //     '| :---: | :---: | :---: | :---: |'
            // )
            // let _table = [];
            container.children = container.item.map((_item ) => {
                
                let _contanler = data.get(key);
                // let _c = data.get(_item);
                // console.log(_item)
                // _table.push('')
                // _table.push('容器型组')
                // _table.push(_item)
                // if(_c){
                //     _table.push(_c.get('text'))
                //     _table.push(_c.get('description'))
                // }else{
                //     _table.push('')
                //     _table.push('')
                // }
                // _table.push('')
                // _table.push('\n')
                return {
                    name: _item,
                    text: _contanler.get('text'),
                    description: _contanler.get('description')
                }
            });
            // table.push(_table.join('|'))

            if(container.type === 'bill') {
                _billTree.children.push(container);
            }else{
                _viewTree.children.push(container);

            }
        })
        let myChart = echarts.init(document.getElementById('charts'));
        myChart.setOption({
            title: {
                text: '容器组件关系图'
            },
            legend: {
                top: '10%',
                left: '3%',
                orient: 'vertical',
                data: [{
                    name: '容器',
                    icon: 'rectangle'
                } ,
                {
                    name: '实体',
                    icon: 'rectangle'
                }],
                borderColor: '#c23531'
            },
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove',
                formatter: (params) => {
                    let { data } = params;
                    if(data.cType){
                        return `${data.name}-${data.cType}`
                    }else{
                        return `${data.name}-${data.text}`
                    }
                }
            },
            series: [
                {
                    type: 'tree',
        
                    name: '容器',
        
                    data: [_viewTree],
        
                    top: '5%',
                    left: '7%',
                    bottom: '2%',
                    right: '60%',
                    roam: true,
                    symbolSize: 7,
        
                    label: {
                        normal: {
                            position: 'left',
                            verticalAlign: 'middle',
                            align: 'right'
                        }
                    },
        
                    leaves: {
                        label: {
                            normal: {
                                position: 'right',
                                verticalAlign: 'middle',
                                align: 'left'
                            }
                        }
                    },
        
                    expandAndCollapse: true,
        
                    animationDuration: 550,
                    animationDurationUpdate: 750
        
                },
                {
                    type: 'tree',
                    name: '实体',
                    data: [_billTree],
        
                    top: '20%',
                    left: '60%',
                    bottom: '22%',
                    right: '18%',
                    roam: true,
                    symbolSize: 7,
        
                    label: {
                        normal: {
                            position: 'left',
                            verticalAlign: 'middle',
                            align: 'right'
                        }
                    },
        
                    leaves: {
                        label: {
                            normal: {
                                position: 'right',
                                verticalAlign: 'middle',
                                align: 'left'
                            }
                        }
                    },
        
                    expandAndCollapse: true,
        
                    animationDuration: 550,
                    animationDurationUpdate: 750
                }
                // {
                //     type: 'tree',
    
                //     data: [{
                //         name: 'view',
                //         children:  [_viewTree, _billTree]
                        
                //     }],
    
                //     top: '1%',
                //     left: '7%',
                //     bottom: '1%',
                //     right: '20%',
                //     roam: true,
                //     symbolSize: 5,
                //     expandAndCollapse: false,
                //     label: {
                //         normal: {
                //             position: 'left',
                //             verticalAlign: 'middle',
                //             align: 'right',
                //             fontSize: 14
                //         }
                //     },
    
                //     leaves: {
                //         label: {
                //             normal: {
                //                 position: 'right',
                //                 verticalAlign: 'middle',
                //                 align: 'left',
                //                 fontSize: 10
                //             }
                //         }
                //     },
    
                // }
            ]
        });
    }
    render(){
        return <div id="charts" className="chartsview-container"> </div>
    }
}