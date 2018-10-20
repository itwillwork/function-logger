# function-logger
Logging of the input and output arguments of the function on each call.
## Example
code
```javascript
function doJob(job) {
  console.log('I did the job: ' + job);
  
  return 'job report: ' + job;
}

functionLogger(doJob)('run');
```
output in console

<img width="450" alt="output" src="https://user-images.githubusercontent.com/15855766/47255630-01bd8c00-d47d-11e8-9c06-9d6d672c0b23.png">

## Install

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

## Contributing
Got ideas on how to make this better? Open an issue!

## License
MIT
