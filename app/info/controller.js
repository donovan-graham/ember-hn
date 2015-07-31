import Ember from 'ember';

export default Ember.Controller.extend({

  libraries: null,

  init() {
    this._super();

    let libraries = Ember.libraries._registry.filter(library => {
      if (library.name.indexOf("unknownMixin") > -1) {
        return false;
      } else {
        return true;
      }
    });

    this.set('libraries', libraries);
  }

});
