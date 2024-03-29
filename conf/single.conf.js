nightwatch_config = {
    "src_folders": [
        "tests/remote"
      ],
      "output_folder": "reports/remote",
    selenium : {
      "start_process" : false,
      "host" : "hub-cloud.browserstack.com",
      "port" : 80
    },
  
    test_settings: {
      default: {
        desiredCapabilities: {
          'browserstack.user': 'joshgoldstein1',
          'browserstack.key': 'VzqJNX3opwQyCz85VVhy',
          'browser': 'chrome',
          'name': 'Browserstack Remote Test'
        }
      }
    }
  };
  
  // Code to copy seleniumhost/port into test settings
  for(var i in nightwatch_config.test_settings){
    var config = nightwatch_config.test_settings[i];
    config['selenium_host'] = nightwatch_config.selenium.host;
    config['selenium_port'] = nightwatch_config.selenium.port;
  }
  
  module.exports = nightwatch_config;