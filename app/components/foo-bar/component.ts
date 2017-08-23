import Component from '@ember/component';
import {computed} from 'ember-decorators/object';
import {and} from 'ember-decorators/object/computed';

export default class FooBarComponent extends Component {
  foo = "foo";
  bar = "bar"
  one = true;
  two = false;

  @and('one', 'two') three;

  @computed('foo', 'bar')
  baz(foo, bar) {
    return `${foo} ${bar}`
  }
}
