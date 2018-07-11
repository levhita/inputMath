(function($) {
 
    var inputMath = function(text) {
        const regex = /^[0-9\.\+\-\(\)\/\* \t]*$/gm;
        if ( regex.exec(text) !== null) {
            try {
                var evaluation = Function('"use strict";return (' + text + ')')();
            } catch(e) {
                console.log("Wrong Syntax!");
                return text;
            }
            return evaluation;
        }
        return text;
    }
    
    $.fn.inputMath = function() {
 
        this.filter('input[type="text"]').each(function() {
            $(this).on('keyup',(event)=>{
                var $target = $(event.target);
                if (event.which == 13) {
                    console.log("Evaluating:"+$target.val() );
                    var new_value = inputMath($target.val());
                    $target.val(new_value);
                } else {
                    console.log($target.val());
                }
            });
            
        });
 
        return this;
    };
    
}( jQuery ));
