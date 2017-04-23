# <a name="z-checkbox"></a> z-checkbox

[![Build]](https://travis-ci.org/z-kit/z-checkbox) [![SemVer]](http://semver.org/) [![Greenkeeper badge](https://badges.greenkeeper.io/z-kit/z-checkbox.svg)](https://greenkeeper.io/) [![License]](LICENSE)

A styled checkbox component for your web application.

## <a name="toc"></a> Table of contents

- [z-checkbox](#z-checkbox)
- [Table of contents](#toc)
- [Install](#install)
  - [Import as HTML/CSS component](#import-css)
  - [Import as Stateless Functional Component (SFC)](#import-sfc)
- [How to use](#howto)
  - [CSS component](#css)
  - [Stateless Functional Component](#sfc)
- [License](#license)

## <a name="install"></a> Install

The package is available to download through [npm](https://npmjs.com):

```bash
npm install z-checkbox --save
```

### <a name="import-css"></a> Import as HTML/CSS component

### The simple case

The package will be located inside the `node_modules` folder, you can import it into the HTML document as follows:

```html
<link rel="stylesheet" href="node_modules/z-checkbox/dist/style.css">
```

### When bundling an web app

**For bundlers that support CSS, like [Webpack](https://webpack.github.io/), you can use it like this:**

```javascript
require('z-checkbox/dist/style.css');
```

### <a name="import-sfc"></a> Import as a Stateless Functional Component (SFC)

The package does not include the renderer, you can use any renderer that supports SFCs. You could use React, Preact, Inferno, etc.

**Notice: This package contains CSS styling, you may need a bundler that's capable of requiring CSS files like Webpack with [css-loader](https://github.com/webpack/css-loader).**

Once you have chosen the renderer you can include the package in your project as follows:

```jsx
// Assuming the React renderer is being used
const React = require('react');
const render = require('react-dom').render;

// Passing the render function when importing
const ZCheckbox = require('z-checkbox')(React.createElement);

// Render it on page, using JSX here :)
render(<ZCheckbox />, document.body);
```

## <a name="howto"></a> How to use

### <a name="css"></a> CSS component

Just add the HTML structure and CSS classes to reproduce the UI component.

### Class hierarchy

| Recommended HTML tags                   | Parent                              | Class                        | Description                                                                                                                                      | Type     |
| --------------------------------------- | ----------------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| `div`                                   | `root`                              | `.z-checkbox`                | Root container                                                                                                                                   | Block    |
| `div`                                   | `.z-checkbox`                       | `.z-checkbox__box`           | The box containing the checkbox                                                                                                                  | Element  |
| `input` of type `checkbox`              | `.z-checkbox__box`                  | `.z-checkbox__input`         | The standard HTML checkbox input                                                                                                                 | Element  |
| `div`                                   | `.z-checkbox__box`                  | `.z-checkbox__container`     | The visually styled checkbox that the user sees                                                                                                  | Element  |
| Any containing `.z-checkbox__container` | `.z-checkbox__container--secondary` | `.z-checkbox__container`     | Change the background color of the the checkbox to the secondary color                                                                           | Modifier |
| Any containing `.z-checkbox__container` | `.z-checkbox__container--success`   | `.z-checkbox__container`     | Change the background color of the the checkbox to green                                                                                         | Modifier |
| Any containing `.z-checkbox__container` | `.z-checkbox__container--warning`   | `.z-checkbox__container`     | Change the background color of the the checkbox to yellow                                                                                        | Modifier |
| Any containing `.z-checkbox__container` | `.z-checkbox__container--error`     | `.z-checkbox__container`     | Change the background color of the the checkbox to red, useful for errors                                                                        | Modifier |
| Any containing `.z-checkbox__container` | `.z-checkbox__container--danger`    | `.z-checkbox__container`     | Change the background color of the the checkbox to a lighter red                                                                                 | Modifier |
| `label`                                 | `.z-checkbox`                       | `.z-checkbox__label`         | The optional label that describes the checkbox, the default position is on the right side of the `.z-checkbox__box` element                      | Element  |
| Any containing `.z-checkbox__label`     | `.z-checkbox`                       | `.z-checkbox__label--top`    | Change the label position to be above the `.z-checkbox__box` element, label must be declared before the `.z-checkbox__box` element               | Modifier |
| Any containing `.z-checkbox__label`     | `.z-checkbox`                       | `.z-checkbox__label--left`   | Change the label position to be on the left side of the `.z-checkbox__box` element, label must be declared before the `.z-checkbox__box` element | Modifier |
| Any containing `.z-checkbox__label`     | `.z-checkbox`                       | `.z-checkbox__label--bottom` | Change the label position to be below the `.z-checkbox__box` element, label must be declared after the `.z-checkbox__box` element                | Modifier |

#### Full working example:

```html
<div class="z-checkbox">
  <div class="z-checkbox__box">
    <input id="example" type="checkbox" class="z-checkbox__input">
    <div class="z-checkbox__container"></div>
  </div>
  <label for="example" class="z-checkbox__label">Example checkbox</label>
</div>
```

### <a name="sfc"></a> Stateless Functional Component

Render the HTML by using the SFC and passing props.

### Supported Props

| Prop name       | Expected Type | Description                                                                         |
| --------------- | ------------- | ----------------------------------------------------------------------------------- |
| `label`         | `string`      | The text description of the checkbox                                                |
| `labelPosition` | `string`      | Pass `top`, `left` or `bottom` to change the label position, the default is `right` |
| `secondary`     | `boolean`     | Change the background color of the checkbox to the secondary color                  |
| `success`       | `boolean`     | Change the background color of the checkbox to green                                |
| `warning`       | `boolean`     | Change the background color of the checkbox to yellow                               |
| `error`         | `boolean`     | Change the background color of the checkbox to red, useful for errors               |
| `danger`        | `boolean`     | Change the background color of the checkbox to a lighter red                        |

**Note: You can pass any `input` attribute to ZCheckbox, like `disabled`, `checked` and so on, it will pass through.**

#### Full example (JSX):

```jsx
<ZCheckbox id="example" label="Label" labelPosition="top" />
```

## <a name="license"></a> LICENSE

[MIT](LICENSE)

[Build]: https://img.shields.io/travis/z-kit/z-checkbox.svg
[SemVer]: https://img.shields.io/:semver-%E2%9C%93-brightgreen.svg
[License]: https://img.shields.io/npm/l/z-checkbox.svg