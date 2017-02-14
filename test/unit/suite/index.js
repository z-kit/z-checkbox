import test from 'ava';
import React from 'react';
import { renderJSX, JSX } from 'jsx-test-helpers';
import checkbox from '../../../src/component';

const ZCheckbox = checkbox(React.createElement);

test('Checkbox', (t) => {
  const msg = 'should render';
  const actual = renderJSX(<ZCheckbox />);
  const expected = JSX(
    <div className="z-checkbox">
      <div className="z-checkbox__box">
        <input className="z-checkbox__input" type="checkbox" />
        <div className="z-checkbox__container" />
      </div>
    </div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Checkbox html props', (t) => {
  const msg = 'should pass through';
  const actual = renderJSX(<ZCheckbox disabled />);
  const expected = JSX(
    <div className="z-checkbox">
      <div className="z-checkbox__box">
        <input className="z-checkbox__input" type="checkbox" disabled />
        <div className="z-checkbox__container" />
      </div>
    </div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Checkbox label', (t) => {
  const msg = 'should be available';
  const actual = renderJSX(<ZCheckbox label="Test" />);
  const expected = JSX(
    <div className="z-checkbox">
      <div className="z-checkbox__box">
        <input className="z-checkbox__input" type="checkbox" />
        <div className="z-checkbox__container" />
      </div>
      <label className="z-checkbox__label">Test</label>
    </div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Checkbox label position', (t) => {
  const msg = 'should be configurable';
  const actual = renderJSX(<ZCheckbox label="Test" labelPosition="top" />);
  const expected = JSX(
    <div className="z-checkbox">
      <label className="z-checkbox__label z-checkbox__label--top">Test</label>
      <div className="z-checkbox__box">
        <input className="z-checkbox__input" type="checkbox" />
        <div className="z-checkbox__container" />
      </div>
    </div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Checkbox success color', (t) => {
  const msg = 'should be available';
  const actual = renderJSX(<ZCheckbox success />);
  const expected = JSX(
    <div className="z-checkbox">
      <div className="z-checkbox__box">
        <input className="z-checkbox__input" type="checkbox" />
        <div className="z-checkbox__container z-checkbox__container--success" />
      </div>
    </div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Checkbox warning color', (t) => {
  const msg = 'should be available';
  const actual = renderJSX(<ZCheckbox warning />);
  const expected = JSX(
    <div className="z-checkbox">
      <div className="z-checkbox__box">
        <input className="z-checkbox__input" type="checkbox" />
        <div className="z-checkbox__container z-checkbox__container--warning" />
      </div>
    </div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Checkbox danger color', (t) => {
  const msg = 'should be available';
  const actual = renderJSX(<ZCheckbox danger />);
  const expected = JSX(
    <div className="z-checkbox">
      <div className="z-checkbox__box">
        <input className="z-checkbox__input" type="checkbox" />
        <div className="z-checkbox__container z-checkbox__container--danger" />
      </div>
    </div>
  );
  return t.deepEqual(actual, expected, msg);
});

test('Checkbox error color', (t) => {
  const msg = 'should be available';
  const actual = renderJSX(<ZCheckbox error />);
  const expected = JSX(
    <div className="z-checkbox">
      <div className="z-checkbox__box">
        <input className="z-checkbox__input" type="checkbox" />
        <div className="z-checkbox__container z-checkbox__container--error" />
      </div>
    </div>
  );
  return t.deepEqual(actual, expected, msg);
});
