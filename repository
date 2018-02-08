
function insertAfter(newElement,targetElement) {
    var pare = targetElement.parentNode;
    if (pare.lastChild == targetElement){
        pare.appendChild(newElement);
    }else{
        pare.insertBefore(newElement,targetElement.nextSibling);
    }
}

function addLoadEvent(func) {
    var oldOnLoad = window.onload;
    if(typeof window.onload == "function") {
        window.onload = function () {
            oldOnLoad();
            func();
        }
    }else{
        window.onload = func;
    }
}
