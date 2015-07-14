import Ember from 'ember';

export default Ember.Controller.extend({
	init: function() {
      // Update the time.
      // this.updateTime();
  },

  updateTime: function() {
      var _this = this;

      // Update the time every second.
      Ember.run.later(function() {
          _this.set('localTime', new Date().toLocaleTimeString());
          _this.updateTime();
      }, 1000);
  },

	localTime : new Date().toLocaleTimeString(),
	actions: {
        /* save a message record to our offline datastore */
        add: function() {
          
          var msgText = this.get('preDefinedMessageText');
          var gender = this.get('gender');
          var age = this.get('age');

          var message = this.store.createRecord('message', {
            preDefinedMessageText: msgText,
            gender: gender,
            age : age
          });
          //var message = this.get("model");
          message.save();
          alert("Saved New Message Successfully.");
          this.transitionToRoute('messages');
        }, 
        /* delete a message record from our offline datastore */
        clear: function() {
          var message = this.get("model");
          message.set('preDefinedMessageText', "");
          message.set('gender', "");
          message.set('age', "");
        }
      }
});
