# toHaveProperty [![npm](https://img.shields.io/npm/v/to-have-property.svg)](https://www.npmjs.com/package/to-have-property) [![Build Status](https://travis-ci.org/hyzhak/to-have-property.svg?branch=master)](https://travis-ci.org/hyzhak/to-have-property)

toHaveProperty matcher for Jasmine (http://jasmine.github.io/) to check whether object has property or not.

## Installation

```
npm install to-have-property --save-dev
```

## How to use

```javascript

require('to-have-property');

it('should find property in object', function() {
    expect({ x: 10 }).toHaveProperty('x');
});

it('should find property in object and check is it equal to certain value', function() {
    expect({ y: 123}).toHaveProperty('y', 123);
});

```
