#inputMath

jQuery plugin to evaluate the written expression on every Enter, like blender 

Visit the test page at [levhita.github.io/inputMath](https://levhita.github.io/inputMath/)


## Usage

### Browser

Include it after the jQuery definition in your HTML:
```
<script src="node_modules/input-math/dist/inputMath.js"></script>
```

Then you can attach the inputMath evaluator using:
```js
$('.input-math').inputMath();
```

For an example input[type=text].input-math:
```html
    <input type="text" class="input-math"/>
```
    
Then on every keyup it'll check for an enter and then evaluate the expression.

### Node
Install with ```npm install input-math```, you will need to install jQuery and JSDOM
to be able to run it in node ```npm install jsdom jquery```, then use the following template to create a fake DOM for jQuery to work

```node
var jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
var jQuery = require('jquery')(window);
const $ = require('input-math')(jQuery);

console.log($.fn.mathEval('2+2'));
```

