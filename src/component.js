/**
 * Copyright (c) 2019 z-kit contributors.
 * @license MIT LICENSE
 * https://github.com/z-kit/z-checkbox
 */

import styles from './style.css';

// Global to local style mappings, works even if using CSS modules
const classnames = {
  wrapper: styles['z-checkbox'] || 'z-checkbox',
  box: styles['z-checkbox__box'] || 'z-checkbox__box',
  input: styles['z-checkbox__input'] || 'z-checkbox__input',
  container: styles['z-checkbox__container'] || 'z-checkbox__container',
  label: styles['z-checkbox__label'] || 'z-checkbox__label',
  labelTop: styles['z-checkbox__label--top'] || 'z-checkbox__label--top',
  labelBottom: styles['z-checkbox__label--bottom'] || 'z-checkbox__label--bottom',
  labelLeft: styles['z-checkbox__label--left'] || 'z-checkbox__label--left',
  isSecondary: styles['z-checkbox__container--secondary'] || 'z-checkbox__container--secondary',
  isSuccess: styles['z-checkbox__container--success'] || 'z-checkbox__container--success',
  isWarning: styles['z-checkbox__container--warning'] || 'z-checkbox__container--warning',
  isDanger: styles['z-checkbox__container--danger'] || 'z-checkbox__container--danger',
  isError: styles['z-checkbox__container--error'] || 'z-checkbox__container--error',
};

export function ZCheckbox(e) {
  return ({ label, labelPosition, secondary, success, warning, danger, error, ...props }) => {
    const labelClasses = [classnames.label];
    if (labelPosition === 'top') labelClasses.push(classnames.labelTop);
    if (labelPosition === 'bottom') labelClasses.push(classnames.labelBottom);
    if (labelPosition === 'left') labelClasses.push(classnames.labelLeft);
    const labelProps = { className: labelClasses.join(' ') };
    if (props.id) labelProps.for = props.id;
    const eLabel = label ? e('label', labelProps, label) : null;
    const eInput = e('input', { className: classnames.input, type: 'checkbox', ...props });
    const containerClasses = [classnames.container];
    if (secondary) containerClasses.push(classnames.isSecondary);
    if (success) containerClasses.push(classnames.isSuccess);
    if (warning) containerClasses.push(classnames.isWarning);
    if (danger) containerClasses.push(classnames.isDanger);
    if (error) containerClasses.push(classnames.isError);
    const eContainer = e('div', { className: containerClasses.join(' ') });
    const eBox = e('div', { className: classnames.box }, [eInput, eContainer]);
    const checkbox = (labelPosition === 'top' || labelPosition === 'left')
      ? [eLabel, eBox]
      : [eBox, eLabel];
    return e('div', { className: classnames.wrapper }, checkbox);
  };
}

export default ZCheckbox;
