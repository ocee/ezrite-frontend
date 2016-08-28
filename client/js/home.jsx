import React from 'react';
import {render} from 'react-dom';
import "./home.less";
import 'file?name=app/[name]/[name].[ext]!../template/home.html';


// import "style-loader!css-loader!less-loader!./home.less";

import AwesomeComponent from './component.jsx';

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
