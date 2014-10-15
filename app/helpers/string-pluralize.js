export default Ember.Handlebars.makeBoundHelper(function(singular, options) {

  var value = 1;
    
  if(options.hash && options.hash.value) {
    value = options.hash.value;
    if (typeof value === 'string'){
      value = parseInt(value, 10);
    }

    if (typeof value !== 'number'){
      value = 1;
    }
  }

  if (value <= 1){
    return singular;
  } else {
    var inflector = Ember.Inflector.inflector;

    // inflector.uncountable('advice');
    // inflector.irregular('formula', 'formulae');
    // /* you would not need to add these as they are the default rules
    // inflector.plural(/$/, 's');
    // inflector.singular(/s$/i, '');

    return inflector.pluralize(singular);
  }

});