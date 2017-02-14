import React from 'react';
import { storiesOf } from '@kadira/storybook';
import checkbox from '../src/component';

const ZCheckbox = checkbox(React.createElement);

storiesOf('CSS component', module)
  .add('default', () => (
    <div className="z-checkbox">
      <div className="z-checkbox__box">
        <input className="z-checkbox__input" type="checkbox" />
        <div className="z-checkbox__container" />
      </div>
    </div>
  ))
  .add('colors', () => (
    <div>
      <div className="z-checkbox">
        <div className="z-checkbox__box">
          <input id="test" className="z-checkbox__input" type="checkbox" checked />
          <div className="z-checkbox__container z-checkbox__container--success" />
        </div>
      </div>
      <div className="z-checkbox">
        <div className="z-checkbox__box">
          <input id="test" className="z-checkbox__input" type="checkbox" checked />
          <div className="z-checkbox__container z-checkbox__container--warning" />
        </div>
      </div>
      <div className="z-checkbox">
        <div className="z-checkbox__box">
          <input id="test" className="z-checkbox__input" type="checkbox" checked />
          <div className="z-checkbox__container z-checkbox__container--danger" />
        </div>
      </div>
      <div className="z-checkbox">
        <div className="z-checkbox__box">
          <input id="test" className="z-checkbox__input" type="checkbox" checked />
          <div className="z-checkbox__container z-checkbox__container--error" />
        </div>
      </div>
    </div>
  ))
  .add('label', () => (
    <div>
      <div className="z-checkbox">
        <div className="z-checkbox__box">
          <input id="test" className="z-checkbox__input" type="checkbox" />
          <div className="z-checkbox__container" />
        </div>
        <label htmlFor="test" className="z-checkbox__label">Label</label>
      </div>
      <div className="z-checkbox">
        <label htmlFor="test2" className="z-checkbox__label z-checkbox__label--left">Label</label>
        <div className="z-checkbox__box">
          <input id="test2" className="z-checkbox__input" type="checkbox" />
          <div className="z-checkbox__container" />
        </div>
      </div>
      <div className="z-checkbox">
        <label htmlFor="test3" className="z-checkbox__label z-checkbox__label--top">Label</label>
        <div className="z-checkbox__box">
          <input id="test3" className="z-checkbox__input" type="checkbox" />
          <div className="z-checkbox__container" />
        </div>
      </div>
      <div className="z-checkbox">
        <div className="z-checkbox__box">
          <input id="test4" className="z-checkbox__input" type="checkbox" />
          <div className="z-checkbox__container" />
        </div>
        <label htmlFor="test4" className="z-checkbox__label z-checkbox__label--bottom">Label</label>
      </div>
    </div>
  ))
  .add('disabled input', () => (
    <div className="z-checkbox">
      <div className="z-checkbox__box">
        <input className="z-checkbox__input" type="checkbox" disabled />
        <div className="z-checkbox__container" />
      </div>
    </div>
  ));

storiesOf('Stateless functional component', module)
  .add('default', () => <ZCheckbox />)
  .add('colors', () => (
    <div>
      <ZCheckbox success checked />
      <ZCheckbox warning checked />
      <ZCheckbox danger checked />
      <ZCheckbox error checked />
    </div>
  ))
  .add('label', () => (
    <div>
      <ZCheckbox label="Label" />
      <ZCheckbox label="Label" labelPosition="left" />
      <ZCheckbox label="Label" labelPosition="top" />
      <ZCheckbox label="Label" labelPosition="bottom" />
    </div>
  ))
  .add('disabled input', () => <ZCheckbox disabled />);
