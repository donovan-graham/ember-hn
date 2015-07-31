import Ember from 'ember';
import Pagination from 'hacker-news/mixins/pagination';

const { computed } = Ember;

export default Ember.Controller.extend(Pagination, {
  stories: null,
  paginate: computed.alias('stories'),
  // itemsPerPage: 10
});
