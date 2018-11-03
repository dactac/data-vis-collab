import React from 'react';
import ReactDOM from 'react-dom';

import Test from './components/Test/Test';
import testStore from './stores/testStore';

ReactDOM.render(
  <Test store={testStore} />,
  document.getElementById('app')
)

setTimeout(function(){
  testStore.change();

},1000)

setTimeout(function(){
  testStore.modify();

},2000)