import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Utils from './../../common/utils'

class HomeApp extends React.Component {
  render() {
    let {userData} = this.props,
     preLoaded = null
    if(userData){
        preLoaded = <script  type="text/javascript" dangerouslySetInnerHTML={{__html: 'window.preloadedData = ' + Utils.safeStringify({SearchReducer: {userData: userData}})}} ></script>
    }

    return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <link rel="stylesheet" type="text/css" href="home_app.css"/>
        {preLoaded}
        <title>EZrite!</title>
      </head>
      <body>
        <div id="app"></div>
        <script src="home_app.js" type="text/javascript"></script>
      </body>
    </html>)
  }
}

var homeApp = {
  pageTemplate: function(userData) {
    return ReactDOMServer.renderToStaticMarkup(<HomeApp userData={userData} />)
  }
};

module.exports = homeApp
