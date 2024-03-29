const fork = require('child_process').fork;
const server = fork('./server'); // launch the server

module.exports = {
  'Demo test': function (browser) {
    browser
      .url('http://localhost:3002')
      .assert.titleContains('Tech Kid News')
      .assert.waitForElementPresent('#termInput', 20000)
      // .assert.visible('input[id=termInput]')
      // .assert.visible('#termInput')
      .setValue('#termInput','Marco')
      .click('#clickButton')
      .assert.containsText('#textArea','Marco')
      .end()
  }
}