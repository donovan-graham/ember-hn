import Ember from 'ember';

export default Ember.View.extend({
  templateName: 'views/comment-item',
  classNames: ['comment-item'], 

  comment: Ember.computed.alias('content'),

  isExpanded: true,


  // LOGIC SHOULD BE ON ul parentView for @each ...
  
  // members: function() {
  //   return this.get('memberships').getEach('person');
  // }.property('memberships.@each.relationshipsLoaded'),  

  //  kidsIsLoaded: Ember.computed.every('')


  // showLoader: true,

  // hasLoaded: function(){
  //    this.set('showLoader', false);
  // },

  // kidsLoaded: function() {

  //   console.log("comment:", this.get('comment.id'));
 
  // }.observes("comment.kids.@each.isLoaded"),  

 // scheduleMasonry: (function(){
 //    // scheduleOnce debounces applyMasonry to only run once per
 //    // runloop. scheduleMasonry is called on didInsertElement, and
 //    // whenever controller.images changes.
 //    Ember.run.scheduleOnce('afterRender', this, this.applyMasonry);
 //  }).observes('controller.images.@each'),
 
  actions: {
    toggleExpanded: function() {
      this.toggleProperty('isExpanded');
    }
  }
});