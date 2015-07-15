import Ember from 'ember';

export default Ember.Route.extend({
		afterModel : function(/*messages, transition*/) {
			// This can be used for fetching metadata
			/*var meta0 = this.store.get('meta');
    	var meta = this.store.metadataFor("message");
    	console.log("status can be shown using metadata", meta);
    	console.log("metadata0", meta0);*/
    	
  	},
		model: function(params) {

			//store.findRecord(type, id, { reload: true });
	    var model = this.get('store').findRecord('message', params.message_id, { reload: true });
    	var meta2 = model.get("content.meta");
    	console.log("status 2", meta2); 
	    return model;
	  }
}); 
