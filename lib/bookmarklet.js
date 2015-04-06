var VKSave;

(function() {
    "use strict";
    
    var VKSAVE_SRC = '//github.com/coderaiser/vksave/raw/master/lib/vksave.js';
        
    loadScript(VKSAVE_SRC, function() {
        if (typeof VKSave !== 'undefined')
            VKSave.addLinks();
    });
    
    function loadScript(src, fn){
        var script,
            el = document.querySelector('#' + src);
        
        if (el) {
            fn();
        } else {
            script      = document.createElement('script');
            
            script.id   =
            script.src  = src;
            script.addEventListener('load', src);
            
            document.body.appendChild(script);
        }
    }
    
})();
