function f1(n){
    alert(n)
};
var greet=f1;

//f1("hello how are you")
//greet("welcome to banglore");


var square=function(n){
    alert(n*n)
}
var cube=function(n){
    alert(n*n*n)
}

var add=function(n1,n2){
    alert(n1+n2);
}

function demo(a,b,c){
    a(b,c);
    console.log("Hello from demo");
//function within function
    function inner(){
        console.log("Hello from inner");
    }
   // inner();
    var subtract=function(a,b){
    return a-b;
    }
    return subtract;
}

var d=demo(add,10,15);//passing function as a parameter to another function
console.log(d(30,15));


