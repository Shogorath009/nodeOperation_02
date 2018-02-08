function displayAbbr(){
    var pp = document.getElementById("pp");
    var sec1=document.getElementById("sec1");
    var abbr_arr = document.getElementsByTagName("abbr");
    var dl=document.createElement("dl");
    insertAfter(dl,pp);
    for(var i=0; i<abbr_arr.length; i++){
        var dt=document.createElement("dt");                         /*每次循环都刷新dt这个变量*/
        dl.appendChild(dt);
        var abbr_insert=abbr_arr[i].firstChild.nodeValue;
        var abbr_insertNode = document.createTextNode(abbr_insert);  /*appendChild必须使用createTextNode的属性*/
        if(abbr_arr[i].parentNode.parentNode == sec1) {              /*解除干扰项影响*/
            dt.appendChild(abbr_insertNode);
        }
        var dd=document.createElement("dd");
        dl.appendChild(dd);
        var title_text = abbr_arr[i].getAttribute("title");
        var title_textNode = document.createTextNode(title_text);
        if(abbr_arr[i].parentNode.parentNode == sec1) {
            dd.appendChild(title_textNode);
        }
    }
}
window.onload=displayAbbr;

