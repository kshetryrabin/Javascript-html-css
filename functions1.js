//anonymous functins

function doThat(a,b){
    a(b);
}


doThat(function(s){
    alert(s+"Welcome")
},10
);

doThat(
    function (s){
        alert(s+"Goodbye")
    },"Rahul"
);

function main(){
    return f1;
}