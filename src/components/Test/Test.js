import React from 'react';
import { observer } from 'mobx-react';

@observer
export default class Test extends React.Component{
  render(){
    return <div>{this.props.store.text}</div>
  }
}

