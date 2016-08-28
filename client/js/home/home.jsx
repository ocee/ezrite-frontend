import React from 'react';
import {render} from 'react-dom';
import "../../style/home.less";
import 'file-loader?name=[name].[ext]!../../template/home.html';

import AwesomeComponent from '../common/component.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React!</p>
        <AwesomeComponent />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
