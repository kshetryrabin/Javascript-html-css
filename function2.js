function f1(){
    var a=10;
    console.log(a);
    for(var i=0;i<10;i++){// i is accessible within the function f1
        console.log(i);
    }
    console.log(i);
    console.log(a);
}
f1();