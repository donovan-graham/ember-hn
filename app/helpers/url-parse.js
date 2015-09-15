import Ember from 'ember';

// {{url-parse myurl part="hostname"}}

export default Ember.Handlebars.makeBoundHelper(function(href, options) {
  let parser = document.createElement('a');
  parser.href = href;

  let part = options.hash.part || "hostname";
  return parser[part];
});