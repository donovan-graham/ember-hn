import Ember from 'ember';
import Pagination from 'hacker-news/mixins/pagination';

var alias = Ember.computed.alias;

export default Ember.ArrayController.extend(Pagination, {

  stories: alias('model'),
  paginate: alias('stories'),

});
