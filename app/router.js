import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('messages');
  this.route('newmessage');
  this.route('editmessage', { path: '/editmessage/:message_id' });
  this.route('viewmessage', { path: '/viewmessage/:message_id' });
});

export default Router;
