/**
* This will wrap Adobe Campaign print statements in Litmus partials that will be replaced by the correct wrapper tags in Litmus.
 * @example
 * {{#acp}} targetData.firstName {{/acp}}
 */

module.exports = function(options) {
  // options.fn(this) = Handelbars content between {{#acp}} HERE {{/acp}}
  var acp = '{{AC Start}}=' + options.fn(this) + '{{AC End}}';
  return acp;
}
