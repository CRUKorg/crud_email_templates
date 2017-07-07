/**
 * This will wrap Javascript for use in Adobe Campaign in Litmus partials that will be replaced by the correct wrapper tags in Litmus.
 * @example
 * {{ac}}
 * if (targetData.firstName !== '') {
 * {{/ac}}
 */

module.exports = function(options) {
  // options.fn(this) = Handelbars content between {{#ac}} HERE {{/ac}}
  var ac = '{{AC Start}}' + options.fn(this) + '{{AC End}}';
  return ac;
}
