const assert  = require('assert');

/** Builds a fake DOM for jQuery */
var jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('<input type="text" value="2+2"/>')).window;
global.document = document;
var jQuery = require('jquery')(window);
const $ = require('../lib/inputMath')(jQuery);
console.log('lskdjflksjdfsdfsdfsdf', jQuery);

describe('mathEval()', () =>{
    it('Must return 4, when given 2+2', () => {
        assert.equal( $.fn.mathEval("2+2"), 4);
    });
    
    it('Must return 8, when using (2+2)*2 //parentesis', () => {
        assert.equal( $.fn.mathEval("(2+2)*2"), 8);
    });

    it('Must return 2.5, when using ((2+2) * 2 / 2) - 1.5 //all symbols allowed', () => {
        assert.equal( $.fn.mathEval("((2+2) * 2 / 2) - 1.5"), 2.5);
    });

    it('Must return 3, when using 1.5+1.5 //floating values', () => {
        assert.equal( $.fn.mathEval("1.5+1.5"), 3);
    });
    
    it('Must give an error, when using invalid characters alert("vulnerable")', () => {
        assert.throws( ()=> $.fn.mathEval('alert("vulnerable")'), Error );
    });
});