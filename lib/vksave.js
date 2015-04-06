var VKSave;

(function(document) {
    'use strict';
    
    VKSave = {};
    
    window.addEventListener('scroll', VKSave.addLinks);
    
    function getLinkName() {
        var ret,
            myPage = document.querySelector('.left_label').textContent;
        
        switch(myPage) {
        case 'Моя Страница':
            ret = 'Скачать';
            break;
        
        case 'Моя Cторінка':
            ret = 'Завантажити';
            break;
        
        default:
            ret = 'Download';
            break;
        }
        
        return ret;
    }
    
    VKSave.addLinks = function() {
        var create      = document.createElement.bind(document),
            area        = document.querySelectorAll('.area');
        
        [].forEach.call(area, function(el, i) {
            var input, title, artist, name, link,
                src, coma, replace,
                
                id  = 'vksave_' + i,
                is  = !!document.querySelector('#' + id);
            
            if (!is) {
                input   = el.document.querySelector('input');
                title   = el.querySelector('.title');
                
                artist  = el.querySelector('.title_wrap').textContent;
                name    = title.textContent;
                
                link    = create('a');
                src     = input.value;
                coma    = src.indexOf(',');
                replace = src.substr(coma);
                    
                src     = src.replace(replace, '');                
                /*  убираем пробел, который             *
                 * добавляется в конец каждого трека    */
                name    = name.substr(0, name.length - 1);
                
                link.href           = src;
                link.textContent    = getLinkName();
                link.download       = artist + name + '.mp3';
                link.id             = id;
                
                title.appendChild(create('br'));
                title.appendChild(link);
            }
        });
    }
})(document);
