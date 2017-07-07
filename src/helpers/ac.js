/**
 * Any code used inside this helper is ignored by Handlebars. Use it if your email service provider uses a Handlebars-like syntax.
 * @example
 * {{{{ac}}}}
 * {{ this }} code won't be parsed.
 * {{{{/ac}}}}
 */

module.exports = function(options) {
  // options.fn(this) = Handelbars content between {{#ac}} HERE {{/ac}}
  var ac = '{{AC Start}}' + options.fn(this) + '{{AC End}}';
  return ac;
}
