# toHaveProperty ![](https://img.shields.io/npm/v/to-have-property.svg)

toHaveProperty matcher for Jasmine (http://jasmine.github.io/)

## Usage

```
npm install to-have-property --save-dev
```

## How to use

```javascript

it('should find property in object', function() {
    expect({ x: 10 }).toHaveProperty('x');
});

it('should find property in object and check is it equal to certain value', function() {
    expect({ y: 123}).toHaveProperty('y', 123);
});

```
