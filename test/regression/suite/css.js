module.exports = {
  default: (browser) => {
    browser
      .url('http://localhost:6006/iframe.html?selectedKind=CSS%20component&selectedStory=default')
      .waitForElementPresent('.z-checkbox', 1000)
      .assert.attributeEquals('.z-checkbox__input', 'type', 'checkbox')
      .end();
  },
  colors: (browser) => {
    browser
      .url('http://localhost:6006/iframe.html?selectedKind=CSS%20component&selectedStory=colors')
      .waitForElementPresent('.z-checkbox', 1000)
      .getCssProperty('.z-checkbox__container--success', 'background-color', (result) => {
        browser.assert.equal(result.value, 'rgba(118, 178, 69, 1)');
      })
      .getCssProperty('.z-checkbox__container--warning', 'background-color', (result) => {
        browser.assert.equal(result.value, 'rgba(254, 215, 102, 1)');
      })
      .getCssProperty('.z-checkbox__container--danger', 'background-color', (result) => {
        browser.assert.equal(result.value, 'rgba(240, 58, 71, 1)');
      })
      .getCssProperty('.z-checkbox__container--error', 'background-color', (result) => {
        browser.assert.equal(result.value, 'rgba(255, 0, 0, 1)');
      })
      .end();
  },
  label: (browser) => {
    browser
      .url('http://localhost:6006/iframe.html?selectedKind=CSS%20component&selectedStory=label')
      .waitForElementPresent('.z-checkbox', 1000)
      .assert.containsText('.z-checkbox__label:nth-of-type(1)', 'Label')
      .end();
  },
  'disabled input': (browser) => {
    browser
      .url('http://localhost:6006/iframe.html?selectedKind=CSS%20component&selectedStory=disabled%20input')
      .waitForElementPresent('.z-checkbox', 1000)
      .getCssProperty('.z-checkbox__container', 'opacity', (result) => {
        browser.assert.equal(result.value, '0,5');
      })
      .end();
  },
};
