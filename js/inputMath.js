/** Based on https://learn.jquery.com/plugins/basic-plugin-creation/ **/
(function($) {
    
    $.fn.inputMath = function() {
        
        this.filter('input[type="text"]').each(function() {
            $(this).on('keyup',(event)=>{
                var $target = $(event.target);
                if (event.which == 13) {
                    console.log("Evaluating:"+$target.val() );
                    var new_value = "";
                    try {
                        new_value = mathEval($target.val());
                    } catch(e) {
                        new_value = $target.val();
                    }
                    $target.val(new_value);
                } else {
                    console.log($target.val());
                }
            });
            
        });
        
        return this;
    };
    
}( jQuery ));
