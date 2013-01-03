var VKSave;

(function(){
    "use strict";
    
    var VKSAVE_SRC = '//github.com/coderaiser/vksave/raw/master/lib/vksave.js';
        
    loadScript(VKSave, function(){
        try{
            VKSave.addLinks();
        }
        catch(pError){
            alert(pError);
        }
    });
    
    function loadScript(pSrc, pFunc){
        var lElement = document.getElementById(pSrc);
        if(!lElement){
            var lScript     = document.createElement('script');
            
            lScript.id      =
            lScript.src     = pSrc;
            lScript.onload  = pFunc;
            
            document.body.appendChild(lScript);
        }
        else
            pFunc();
    }
    
})();
