import React from 'react';
import ChartsView from 'components/ChartsView/index.tsx'
import './index.less'
export default class App extends React.Component {
    constructor(props){
        super();

    }
    componentDidMount(){
    }
    render(){
        return <div  >
                 < ChartsView />
             </div>
    }
}