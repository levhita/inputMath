const assert  = require('assert');
const mathEval = require('../lib/inputMath');

describe('mathEval()', () =>{
    it('Must return 4, when given 2+2', () => {
        assert.equal( mathEval("2+2"), 4);
    });
    
    it('Must return 8, when using (2+2)*2 //parentesis', () => {
        assert.equal( mathEval("(2+2)*2"), 8);
    });

    it('Must return 2.5, when using ((2+2) * 2 / 2) - 1.5 //all symbols allowed', () => {
        assert.equal( mathEval("((2+2) * 2 / 2) - 1.5"), 2.5);
    });

    it('Must return 3, when using 1.5+1.5 //floating values', () => {
        assert.equal( mathEval("1.5+1.5"), 3);
    });
    
    it('Must give an error, when using invalid characters alert("vulnerable")', () => {
        assert.throws( ()=> mathEval('alert("vulnerable")'), Error );
    });
});