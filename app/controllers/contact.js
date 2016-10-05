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
      const email = this.get('emailAddress');
      const message = this.get('message');
      const newMessage = this.store.createRecord('contact', {email: email, message: message});
      newMessage.save().then((response) => {
        this.set('responseMessage', `Thank you! We've just sent you message and will reply promptly: ${response.get('message')}`);
        this.set('emailAddress', '');
        this.set('message', '');
      });
    }
  }

});
