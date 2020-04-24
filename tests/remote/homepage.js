module.exports = {
  'Demo test': function (browser) {
    browser
      .url('https://bobs-playland-tests.netlify.app/')
      .assert.titleContains('Tech Kid News')
      .waitForElementPresent('#termInput', 20000)
      .assert.visible('input[id=termInput]')
      .setValue('#termInput','Marco')
      .click('#clickButton')
      .assert.containsText('#textArea','Marco')
      .end()
  }
}