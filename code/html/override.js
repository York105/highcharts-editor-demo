function ready(callback){
    
    if (document.readyState!='loading') callback();
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);   
    else document.attachEvent('onreadystatechange', function(){
        if (document.readyState=='complete') callback();
    });
}

ready(function(){
    const logo = document.querySelector(".highed-toolbar-left"); 
    console.log(logo);    
});

// quick hack - wait 100 ms before execution 

setTimeout(function() {
    const logo = document.querySelector(".highed-toolbar-left"); 
    logo.textContent = 'BlackRock';
    console.log(logo);
    logo.className += ' blk-logo';
}, 100);