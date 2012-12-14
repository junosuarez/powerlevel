# powerlevel
a convenient way to see if things are powerful enough


## installation

    # npm install powerlevel


## usage

    var powerlevel = require('powerlevel')

    var powerA = 800

    powerlevel(powerA, function (err, level) {
      console.log(level)
      // => "weak"
    })

    powerB = 10000

    powerlevel(powerB, function (err, level) {
      console.log(level)
      // => "it's over 9000?! there's no way that can be right!"
    })


## api reference

**powerlevel: function (powerUnderTest: number|array|object|string, callback: function (err: Error, level: string))**

Asynchronously test the power level of any number, array, object, or string. Once the powerlevel has been evaluated, it will call back with the resulting `level`.

## but why is the version so high?

It's more powerful that way.


## license

MIT
(c) 2012 jden - Jason Denizac <jason@denizac.org> - http://jden.mit-license.org/2012

