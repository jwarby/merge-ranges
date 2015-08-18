'use strict';

module.exports = function mergeRanges(ranges) {
  if (!(ranges && ranges.length)) {
    return [];
  }

  // Stack of final ranges
  var stack = [];

  // Sort according to start value
  ranges.sort(function(a, b) {
    return a[0] - b[0];
  });

  // Add first range to stack
  stack.push(ranges[0]);

  ranges.slice(1).forEach(function(range, i) {
    var top = stack[stack.length - 1];

    if (top[1] < range[0]) {

      // No overlap, push range onto stack
      stack.push(range);
    } else if (top[1] < range[1]) {

      // Update previous range
      top[1] = range[1];
    }
  });

  return stack;
};
