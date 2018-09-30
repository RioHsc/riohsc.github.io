document.onkeydown=function(){
    var e = window.event||arguments[0];
    if(e.keyCode==123){
    	alert('Don't download this picture!');
            return false;
    }else if((e.ctrlKey)&&(e.shiftKey)&&(e.keyCode==73)){
    	alert('Don't download this picture!');
            return false;
    }else if((e.ctrlKey)&&(e.keyCode==85)){
            alert('Don't download this picture!');
            return false;
    }else if((e.ctrlKey)&&(e.keyCode==83)){
           alert('Don't download this picture!');
           return false;
    }
}
document.oncontextmenu=function(){
	alert('Don't download this picture!');
    return false;
}