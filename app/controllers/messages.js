import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
        /* save a message record to our offline datastore */
        edit: function(message) {
        	this.transitionToRoute('editmessage', message.id);
        }, 
        /* delete a message record from our offline datastore */
        delete: function(message) {
					if (window.confirm("Are you sure you want to delete this record?")) {   
						message.destroyRecord();
						//message.save(); to be used when using deleteRecord as it deletes from offline store.
					}
        },
        view: function(message) {
        	this.transitionToRoute('viewmessage', message.id);
        }
      }
});
