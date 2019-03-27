# function-logger
Awesome tool for [FP JS](https://github.com/stoeffel/awesome-fp-js). Logging of the input and output arguments of the function on each call.

[JSBin demo](https://jsbin.com/sayujal/1/edit?js)

## Motivation
for example, debugging sort products code:
```javascript
const byPrice = order => (a, b) => order(a.price, b.price);

const asc = (a, b) => a - b;
const desc = (a, b) => b - a;

const products = [{price: 100}, {price: 50}, {price: 300}];

// products.sort(byPrice(desc));

// use functionLogger for fast logging
products.sort(functionLogger(byPrice(desc)));
```
browser console output 

<img width="1000" alt="output" src="https://github.com/itwillwork/function-logger/blob/master/media/demo.png?raw=true">

### Installation

```
npm install function-logger --save-dev
```

You can set globally, to be used in all their projects without having to install each.
  
## Usage 
Wrap the function for which you want to watch. And yet! :checkered_flag:
```javascript
import functionLogger from 'function-logger';

// foo('bar')
functionLogger(foo)('bar')
```

## Usage for CodePen and JSBin as UMD module
in html area
```javascript
<script src="https://unpkg.com/function-logger@latest/build/umd/index.js"></script>
```
in js area use ```functionLogger``` from global scope

[JSBin demo](https://jsbin.com/sayujal/1/edit?js)

## Contributing
Got ideas on how to make this better? Open an issue!

## License
MIT
