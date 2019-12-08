import DS from 'ember-data';

export default DS.Model.extend({
  player: DS.attr('string'),
  score: DS.attr('number')
})