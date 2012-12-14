var maximum = 9000;

module.exports = function (thing, callback) {
  if (thing === undefined || thing === null)
    return callback(new Error('Thing is null or undefined'))

  var operand = thing.hasOwnProperty('length') ? thing.length : thing
    , level = operand > maximum ?
      'it\'s over ' + maximum + '?! there\'s no way that can be right!' :
      'weak'

  callback(null, level)
}