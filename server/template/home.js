import React from 'react'
import ReactDOMServer from 'react-dom/server'

class HomeApp extends React.Component {
  render() {
    return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <link rel="stylesheet" type="text/css" href="home_app.css"/>
        <title>Hello React!</title>
      </head>
      <body>
        <div id="app"></div>
        <script src="home_app.js"></script>
      </body>
    </html>)
  }
}

var homeApp = {
  pageTemplate: function() {
    return ReactDOMServer.renderToStaticMarkup(<HomeApp />)
  }
};

module.exports = homeApp
