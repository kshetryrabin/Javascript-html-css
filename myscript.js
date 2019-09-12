function test(e){
    console.log(e);//accepts an object from the caller
}
function changeContent(){
    var ele=document.getElementById("i");
    ele.innerHTML="This is just for Demo";
    console.log("changeContent called");
    console.log(ele);

}
function changeColor(){
    var ele=document.getElementById("i");
    ele.style.color='blue';
}
function changeImage(e){
    var ele=document.getElementById("mainImage");
    var targetEle=e.target;
    if(targetEle.tagName=='IMG')
      ele.src=targetEle.src;
}
function validateForm(){
    //you need to read the form
    var un=document.forms[0].n1;
    var pw=document.forms[0].n2;
    if(un.value.length <=0){
        var ele=document.getElementById("l");
        ele.innerHTML="Username cannot be empty !";
        return false;
    }
    if(pw.value.length <=0){
        var ele=document.getElementById("l1");
        ele.innerHTML="Password cannot be empty !";
        return false;
    }
}