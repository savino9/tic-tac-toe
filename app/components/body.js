import Component from '@ember/component';

export default Component.extend({
  actions: {
    hideMe() {
      document.querySelector(".go-to").style.display = "none";
    }
  }
});
