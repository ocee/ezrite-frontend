import React from 'react';
import {render} from 'react-dom';
import "../../style/home.less";
import 'file-loader?name=[name].[ext]!../../template/home.html';

import Header from './header.jsx'
import Body from './body.jsx'
import Footer from './footer.jsx'

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
