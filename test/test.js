var powerlevel = require('../index')
var assert = require('assert')

var powerA = 800
powerlevel(powerA, function (err, level) {
  assert.equal('weak', level)

    powerB = 10000

    powerlevel(powerB, function (err, level) {
      assert.equal('it\'s over 9000?! there\'s no way that can be right!', level)

      console.log('aight, tests green')
    })

})