# JS Generators Startup Kit
A collection of ready-to-use general-purpose generators for the next version of JavaScript. If you think of any others or if you think there is a smarter way of implementing the current ones, don't hesitate to send me a pull request. :-)

## Generators
### Identity
Produces a sequence of the given value.

```javascript
// Returns 1 infinitely
var g1 = Gen.identity(1);
// Returns 'Hello' 5 times
var g2 = Gen.identity('Hello', 5);
```

### Sequence
Produces a sequence of integers.

```javascript
// Starts from 0, incremented by 1, infinitely
var g1 = Gen.sequence();
// Starts from 3, incremented by 2, infinitely
var g2 = Gen.sequence(3, 2);
// Starts from -10, incremented by 2, 5 times
var g3 = Gen.sequence(-10, 2, 5);
```

### Map
Transforms a sequence by a given transformation function.

```javascript
// Generates an infinite sequence starting from 0, incremented by 1
var input = Gen.sequence();
// Generates an infinite sequence where every number is muliplied by 2
var g1 = Gen.map(input, x => x * 2);
```

### Filter
Filters a sequence by a given filter function.

```javascript
// Generates an infinite sequence starting from 0, incremented by 1
var input = Gen.sequence();
// Generates an infinite sequence of even numbers
var g1 = Gen.filter(input, x => x % 2 == 0);
```

### Aggregate
Combines a list of sequences.

```javascript
// Generates an infinite sequence starting from 1, incremented by 1
var g1 = Gen.sequence(1);
// Generates an infinite sequence starting from -1, incremented by -1
var g2 = Gen.sequence(-1, -1);
// Generates an infinite sequence switching between g1 and g2, f.x. 1, -1, 2, -2, ...
var g3 = Gen.aggregate(g1, g2);
```

## Install
The following will install the necessary modules and will start a local server at [http://127.0.0.1:8888]([http://127.0.0.1:8888/index.html])

```
npm install
gulp build serve
```
