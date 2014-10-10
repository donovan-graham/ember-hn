import Ember from 'ember';

// {{url-parse myurl part="hostname"}}

export default Ember.Handlebars.makeBoundHelper(function(href, options) {
  var parser = document.createElement('a');
  parser.href = href;  

  var part = options.hash.part || "hostname";
  return parser[part]
});