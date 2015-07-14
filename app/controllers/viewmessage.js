import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
        /* save a message record to our offline datastore */
        edit: function() {

          //This is for put having ID in it
          var message = this.get("model");
          this.transitionToRoute('editmessage', message.id);
        }, 
        /* delete a message record from our offline datastore */
        cancel: function() {
          this.transitionToRoute('messages');
        }
      }
});
