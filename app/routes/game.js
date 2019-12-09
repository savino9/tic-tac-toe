import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return this.store.queryRecord('score', {})
    .then(function(score) {
      let username = score.get('player');
      let playerScore = score.get('score');
      console.log(`Currently logged in as ${username}`);
      console.log(`Current score is: ${playerScore}`);
    });    
  }
});
