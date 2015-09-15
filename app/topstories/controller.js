import Ember from 'ember';
import Pagination from 'hacker-news/mixins/pagination';

const { computed } = Ember;

export default Ember.Controller.extend(Pagination, {
  stories: [],
  paginate: computed.alias('stories'),
  itemsPerPage: 50
});
