var interVal = setInterval(function(){
    var a = document.getElementById('added-repo-to-menu');
    if(a != "" && a != null && typeof a != 'undefined'){
        clearInterval(interVal);
    }
    else{
    var p = document.getElementsByTagName('nav');
    var elem = document.createElement('div');
    elem.innerHTML = "<a id='added-repo-to-menu' class='Header-link' href='https://github.com/Harish321?tab=repositories'>Repositories</a>"
    p[0].insertBefore(elem,p[0].lastChild);
    }
},2000)
