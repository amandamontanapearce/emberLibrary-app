import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',
  message: '',

  isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isValidMessage: Ember.computed.gte('message.length', 5),
  validForm: Ember.computed.and('isValidEmail', 'isValidMessage'),
  isDisabled: Ember.computed.not('validForm'),

  actions: {
    sendMessage() {
      alert(`Sending message is in progress: ${this.get('message')}`);
      this.set('responseMessage', `Thank you! We've just sent you message and will reply promptly: ${this.get('message')}`);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }

});
