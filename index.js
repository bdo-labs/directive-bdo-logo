
/**
 * Expose `logo`.
 */

module.exports = logo;

/**
 * BDO logo directive
 */

function logo(){
  return {
    restrict: 'E',
    scope: {color: '@'},
    template: require('./template.html')
  };
}

