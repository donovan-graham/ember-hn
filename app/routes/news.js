import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return this.store.find('item', 8422599);
  }
  // return this.store.find('task', params.task_id)

});
