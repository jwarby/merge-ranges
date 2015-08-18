# merge-ranges
> Merge overlapping numerical ranges [![GitHub version](https://badge.fury.io/gh/jwarby%2Fmerge-ranges.svg)](http://semver.org/spec/v2.0.0.html) [![Build Status](https://secure.travis-ci.org/jwarby/merge-ranges.png?branch=master)](https://travis-ci.org/jwarby/merge-ranges)

## Install

```bash
npm install --save merge-ranges
```

## Usage

```javascript
var mergeRanges = require('merge-ranges');

console.log(mergeRanges([
  [1, 3],
  [11, 14],
  [2, 7],
  [9, 12],
  [15, 19]
]));
//=> [ [1, 7], [9, 14], [15, 19] ]
```

Ranges are sorted by lowest start number.

## Examples

### Date ranges

```javascript
var dates = [
  [new Date('Sat, 08 Aug 2015 06:04:50 +0000'), new Date('Wed, 12 Aug 2015 06:04:50 +0000')],
  [new Date('Mon, 07 Sep 2015 06:04:50 +0000'), new Date('Sun, 13 Sep 2015 06:04:50 +0000')],
  [new Date('Mon, 10 Aug 2015 06:04:50 +0000'), new Date('Fri, 14 Aug 2015 06:04:50 +0000')]
];

console.log(mergeRanges(dates));
//=> [
  [ Sat Aug 08 2015 06:04:50 +0000, Fri Aug 14 2015 06:04:50 +0000 ],
  [ Mon Sep 07 2015 06:04:50 +0000, Sun Sep 13 2015 06:04:50 +0000 ]
]

```

## License

[MIT](https://github.com/jwarby/merge-ranges/blob/master/LICENSE) &copy; James Warwood
