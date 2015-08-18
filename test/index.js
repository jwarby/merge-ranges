'use strict';
/* global describe, it */

var expect = require('chai').expect;

var mergeRanges = require('../');

describe('merge-ranges', function() {
  it('should return an empty array if no ranges passed', function() {
    expect(mergeRanges()).to.deep.equal([]);
    expect(mergeRanges([])).to.deep.equal([]);
  });

  it('should handle pairs of intersecting ranges', function() {
    var data = [
      [1, 3],
      [7, 9],
      [2, 5],
      [9, 12]
    ];

    expect(mergeRanges(data)).to.deep.equal([
      [1, 5],
      [7, 12]
    ]);
  });

  it('should handle many intersecting ranges', function() {
    var data = [
      [2, 4],
      [3, 5],
      [12, 15],
      [1, 2],
      [11, 13],
      [13, 18]
    ];

    expect(mergeRanges(data)).to.deep.equal([
      [1, 5],
      [11, 18]
    ]);
  });

  it('should handle edge-intersections', function() {
    expect(mergeRanges([
      [3, 5],
      [1, 3],
      [7, 10],
      [10, 12]
    ])).to.deep.equal([
      [1, 5],
      [7, 12]
    ]);
  });

  it('should work with dates', function() {
    var dates = [
      [new Date('Sat, 08 Aug 2015 06:04:50 +0000'), new Date('Wed, 12 Aug 2015 06:04:50 +0000')],
      [new Date('Mon, 07 Sep 2015 06:04:50 +0000'), new Date('Sun, 13 Sep 2015 06:04:50 +0000')],
      [new Date('Mon, 10 Aug 2015 06:04:50 +0000'), new Date('Fri, 14 Aug 2015 06:04:50 +0000')]
    ];

    expect(mergeRanges(dates)).to.deep.equal([
      [new Date('Sat, 08 Aug 2015 06:04:50 +0000'), new Date('Fri, 14 Aug 2015 06:04:50 +0000')],
      [new Date('Mon, 07 Sep 2015 06:04:50 +0000'), new Date('Sun, 13 Sep 2015 06:04:50 +0000')]
    ]);
  });

  it('should just return sorted original ranges if no overlaps', function() {
    expect(mergeRanges([
      [4, 7],
      [1, 3],
      [10, 14]
    ])).to.deep.equal([
      [1, 3],
      [4, 7],
      [10, 14]
    ]);
  });

  it('should handle invalid ranges gracefully', function() {
    expect(mergeRanges([
      [10, 12],
      [18, 14],
      [12, 19]
    ])).to.deep.equal([
      [10, 19]
    ]);
  });
});
