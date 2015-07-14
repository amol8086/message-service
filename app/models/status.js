import DS from 'ember-data';

export default DS.Model.extend({
  	statusCode: DS.attr('string'),
  	errorKey: DS.attr('string'),
  	errorMessage: DS.attr('string')
});
