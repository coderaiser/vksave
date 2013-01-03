(function(){
    'use strict';
            
    function getByClass(pClass, pElement){
        return (pElement || document).getElementsByClassName(pClass);
    }
    
    function getByTag(pTag, pElement){
        return (pElement || document).getElementsByTagName(pTag);
    }
            
    function getLinkName(){
        var lRet,
            lMyPage = getByClass('left_label')[0].textContent;
        
        switch(lMyPage){            
            case 'Моя Страница':
                lRet = 'Скачать';
                break;
            
            case 'Моя Cторінка':
                lRet = 'Завантажити';
                break;
            
            default:
                lRet = 'Download';
                break;
        }
        
        return lRet;
    }
    
    var create      = document.createElement.bind(document),
        area        = getByClass('area');
        
        for (var i=0, n=area.length; i < n ; i++){
            var input   = getByTag('input', area[i]) [0],
                title   = getByClass('title', area[i])[0],
                
                artist  = getByClass('title_wrap',  area[i]) [0].textContent,
                name    = title.textContent,              
                
                link    = create('a'),
                src     = input.value,
                coma    = src.indexOf(','),
                replace = src.substr(coma);
                
            src = src.replace(replace, '');
            
            link.href           = src;
            link.textContent    = getLinkName();
            link.download       = artist + name + '.mp3';
            
            title.appendChild(create('br'));
            title.appendChild(link);
        }
    
})();
