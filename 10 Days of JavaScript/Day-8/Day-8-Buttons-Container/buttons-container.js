let btn5=document.getElementById("btn5");

btn5.onclick=function(){
    var first=btn1.innerHtml;
    btn1.innerHtml=btn4.innerHtml;
    btn4.innerHtml=btn7.innerHtml;
    btn7.innerHtml=btn8.innerHtml;
    btn8.innerHtml=btn9.innerHtml;
    btn9.innerHtml=btn6.innerHtml;
    btn6.innerHtml=btn3.innerHtml;
    btn3.innerHtml=btn2.innerHtml;
    btn2.innerHtml=first;

}