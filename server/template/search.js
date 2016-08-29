import React from 'react'
import ReactDOMServer from 'react-dom/server'

class SearchApp extends React.Component {
  render() {
    return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>Hello React!</title>
      </head>
      <body>
        <div id="app"></div>
        <div>Search Page</div>
      </body>
    </html>)
  }
}

var searchApp = {
  pageTemplate: function() {
    return ReactDOMServer.renderToStaticMarkup(<SearchApp />)
  }
};

module.exports = searchApp
