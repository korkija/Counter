import {calculate} from './calculate';
import {INCREASE, DECREASE} from '../../constants/actionConstants.js';

test('Reducer on INCREASE ', () => {
  const action = {type: INCREASE};
  const sut = calculate({number: 0}, action);
  expect(sut.number).toEqual(1);
});

test('Reducer on DECREASE ', () => {
  const action = {type: DECREASE};
  const sut = calculate({number: 0}, action);
  expect(sut.number).toEqual(-1);
});
