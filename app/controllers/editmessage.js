import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
        /* save a message record to our offline datastore */
        update: function() {
           
          //This is for put having ID in it
          var message = this.get("model");

          message.save();

          alert("Updated Message Successfully.");
          this.transitionToRoute('messages');
        }, 
        /* cancel a message record from our offline datastore */
        cancel: function() {
          this.transitionToRoute('messages');
        }
      }
});
