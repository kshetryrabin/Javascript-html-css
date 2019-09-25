var a;
console.log(a + typeof a);
a=10.6;
console.log(a + typeof a);
a="delhi";
console.log(a + typeof a);
a=true;
console.log(a+ typeof a);


b=10;//implicit declaration

//console.log(c);//without declaring it can be referenced(runtime error)
c=20;

function add(a,b){
    if(typeof a=="undefined")// if parameters are not passed then default value will be assigned
    a=0;
    if(typeof b=="undefined")
    b=0;
    console.log(a+b);

}
add(10,20);
add("delhi","banglore");
add(10,"delhi");
add();//valid call but no value is assigned to a and b so it gives NaN
add(10,20,30);//extra parameters will be ignored

var substract=function(a,b){
    return a-b;
}
console.log(substract(50,10));

var multiply=(a,b)=>{ //it can be replaced as var multiply=(a,b)=>a*b ,it is called arrow functions
    return a*b;
} 
console.log(multiply(10,10));

(function greet(a){  //self executing function first two lines are definition and last () line is invoking
    alert(a+"how are You");
})("arun");

(function divide(a,b){
    console.log(a/b);
})(50,5);
