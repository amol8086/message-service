import DS from 'ember-data';

export default DS.Model.extend({
  	preDefinedMessageText: DS.attr('string'),
  	gender: DS.attr('string'),
  	age: DS.attr('string')
});
