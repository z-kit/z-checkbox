import test from 'ava';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import checkbox from '../../../src/component';

configure({ adapter: new Adapter() });

const ZCheckbox = checkbox(React.createElement);

test('Checkbox', (t) => {
  const msg = 'should render';
  const actual = shallow(<ZCheckbox />).html();
  const expected = shallow(
    <div className="z-checkbox">
      <div className="z-checkbox__box">
        <input className="z-checkbox__input" type="checkbox" />
        <div className="z-checkbox__container" />
      </div>
    </div>,
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Checkbox html props', (t) => {
  const msg = 'should pass through';
  const actual = shallow(<ZCheckbox disabled />).html();
  const expected = shallow(
    <div className="z-checkbox">
      <div className="z-checkbox__box">
        <input className="z-checkbox__input" type="checkbox" disabled />
        <div className="z-checkbox__container" />
      </div>
    </div>,
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Checkbox label', (t) => {
  const msg = 'should be available';
  const actual = shallow(<ZCheckbox label="Test" />).html();
  const expected = shallow(
    <div className="z-checkbox">
      <div className="z-checkbox__box">
        <input className="z-checkbox__input" type="checkbox" />
        <div className="z-checkbox__container" />
      </div>
      <label className="z-checkbox__label">Test</label>
    </div>,
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Checkbox label position', (t) => {
  const msg = 'should be configurable';
  const actual = shallow(<ZCheckbox label="Test" labelPosition="top" />).html();
  const expected = shallow(
    <div className="z-checkbox">
      <label className="z-checkbox__label z-checkbox__label--top">Test</label>
      <div className="z-checkbox__box">
        <input className="z-checkbox__input" type="checkbox" />
        <div className="z-checkbox__container" />
      </div>
    </div>,
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Checkbox secondary color', (t) => {
  const msg = 'should be available';
  const actual = shallow(<ZCheckbox secondary />).html();
  const expected = shallow(
    <div className="z-checkbox">
      <div className="z-checkbox__box">
        <input className="z-checkbox__input" type="checkbox" />
        <div className="z-checkbox__container z-checkbox__container--secondary" />
      </div>
    </div>,
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Checkbox success color', (t) => {
  const msg = 'should be available';
  const actual = shallow(<ZCheckbox success />).html();
  const expected = shallow(
    <div className="z-checkbox">
      <div className="z-checkbox__box">
        <input className="z-checkbox__input" type="checkbox" />
        <div className="z-checkbox__container z-checkbox__container--success" />
      </div>
    </div>,
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Checkbox warning color', (t) => {
  const msg = 'should be available';
  const actual = shallow(<ZCheckbox warning />).html();
  const expected = shallow(
    <div className="z-checkbox">
      <div className="z-checkbox__box">
        <input className="z-checkbox__input" type="checkbox" />
        <div className="z-checkbox__container z-checkbox__container--warning" />
      </div>
    </div>,
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Checkbox danger color', (t) => {
  const msg = 'should be available';
  const actual = shallow(<ZCheckbox danger />).html();
  const expected = shallow(
    <div className="z-checkbox">
      <div className="z-checkbox__box">
        <input className="z-checkbox__input" type="checkbox" />
        <div className="z-checkbox__container z-checkbox__container--danger" />
      </div>
    </div>,
  ).html();
  return t.deepEqual(actual, expected, msg);
});

test('Checkbox error color', (t) => {
  const msg = 'should be available';
  const actual = shallow(<ZCheckbox error />).html();
  const expected = shallow(
    <div className="z-checkbox">
      <div className="z-checkbox__box">
        <input className="z-checkbox__input" type="checkbox" />
        <div className="z-checkbox__container z-checkbox__container--error" />
      </div>
    </div>,
  ).html();
  return t.deepEqual(actual, expected, msg);
});
