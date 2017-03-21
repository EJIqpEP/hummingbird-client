import OneWayNumber from 'ember-one-way-controls/components/one-way-number';
import get from 'ember-metal/get';

export default OneWayNumber.extend({
  click(event) {
    alert(event.target);
    get(this, 'element').select();
  }
});