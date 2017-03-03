import { test } from 'ava';
import Nightmare from 'nightmare';

test('SFC component - default', (t) => {
  t.plan(1);
  const msg = 'should render an input type checkbox';
  const expected = 'checkbox';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=default')
    .wait('.z-checkbox')
    .evaluate(() => document.querySelector('.z-checkbox__input').getAttribute('type'))
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('SFC component - colors', (t) => {
  t.plan(1);
  const msg = 'should render color for success modifier';
  const expected = 'rgb(118, 178, 69)';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=colors')
    .wait('.z-checkbox')
    .evaluate(() => {
      const checkboxStyle = getComputedStyle(document.querySelector('.z-checkbox__container--success'));
      return checkboxStyle.backgroundColor;
    })
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('SFC component - colors', (t) => {
  t.plan(1);
  const msg = 'should render color for warning modifier';
  const expected = 'rgb(254, 215, 102)';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=colors')
    .wait('.z-checkbox')
    .evaluate(() => {
      const checkboxStyle = getComputedStyle(document.querySelector('.z-checkbox__container--warning'));
      return checkboxStyle.backgroundColor;
    })
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('SFC component - colors', (t) => {
  t.plan(1);
  const msg = 'should render color for danger modifier';
  const expected = 'rgb(240, 58, 71)';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=colors')
    .wait('.z-checkbox')
    .evaluate(() => {
      const checkboxStyle = getComputedStyle(document.querySelector('.z-checkbox__container--danger'));
      return checkboxStyle.backgroundColor;
    })
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('SFC component - colors', (t) => {
  t.plan(1);
  const msg = 'should render color for error modifier';
  const expected = 'rgb(255, 0, 0)';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=colors')
    .wait('.z-checkbox')
    .evaluate(() => {
      const checkboxStyle = getComputedStyle(document.querySelector('.z-checkbox__container--error'));
      return checkboxStyle.backgroundColor;
    })
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('SFC component - label', (t) => {
  t.plan(1);
  const msg = 'should render the label';
  const expected = 'Label';
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=label')
    .wait('.z-checkbox')
    .evaluate(() => document.querySelector('.z-checkbox__label:nth-of-type(1)').textContent)
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});

test('SFC component - disabled input', (t) => {
  t.plan(1);
  const msg = 'should render the disabled checkbox style';
  const expected = 0;
  return Nightmare()
    .goto('http://localhost:6006/iframe.html?selectedKind=Stateless%20functional%20component&selectedStory=disabled%20input')
    .wait('.z-checkbox')
    .evaluate(() => {
      const checkboxStyle = getComputedStyle(document.querySelector('.z-checkbox__container'));
      return parseInt(checkboxStyle.opacity, 10);
    })
    .end()
    .then(actual => t.deepEqual(expected, actual, msg));
});
