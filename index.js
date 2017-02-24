var _ = require('lodash'),
  loaderUtils = require('loader-utils')

module.exports = function(source) {
  this.cacheable && this.cacheable()
  var options = this.query instanceof Object ? this.query : loaderUtils.parseQuery(this.query)
  var compiled = _.template(source, options)
  return 'var _ = require(\'lodash\');module.exports = ' + compiled
}
