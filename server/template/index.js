'use strict'
var React = require('react');
var ReactDOMServer = require('react-dom/server')


module.exports = {
  pageTemplate: function(options) {
    let app = require('../../public/js/helloworld');
    let head = React.DOM.head(null);
    let body = React.DOM.body(null, app);
    let html = ReactDOMServer.renderToStaticMarkup(React.DOM.html(null, body));

    return html;
  },
  render: function(options) {
    let context = this;
    let markup = context.pageTemplate(options);
  }
};
