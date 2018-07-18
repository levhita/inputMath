/**Functions should only return a valid value or an error**/
export const mathEval = function(text) {
    /** As we are running unsafe code from the user, we should allow only a limited set of
    * characters, try this regex in: https://regex101.com/
    **/
    const regex = /^[0-9\.\+\-\(\)\/\* \t]*$/gm;
    if ( regex.exec(text) == null) {
        throw new Error('Invalid Characters');
    }
    try {
        /** Instead of eval, we use the alternative given by MDN:
        * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#Do_not_ever_use_eval!
        **/
        return Function('"use strict";return (' + text + ')')();
    } catch(e) {
        /** We might still have wrong syntax even with the limited set of character ((((4..4+45) **/
        throw new Error('Wrong Syntax');
    }
};