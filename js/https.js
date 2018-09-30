window.onload = function(){
        /*跳转开始*/
        var tmpTag = 'https:' == document.location.protocol ? false : true;
        if(tmpTag){
        var urls=window.location.href;
        urls = urls.replace("http", "https");
        window.location=urls;
        }
        /*跳转结束*/
        }