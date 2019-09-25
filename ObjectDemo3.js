var obj1={};
var obj2={};
var obj3={};
//{} indicates json object and [] indicates array objects
var cities=[];
cities[0]="Delhi";
cities[1]="Banglore";
cities[2]=30;
cities[10]=true;
//elements between 2-10 are undefined and size of array is 11.
cities[11]=function(){
    alert("how are you");
}
//accessing elements of array
console.log(cities[10]);
console.log(cities[11]());
//in js number within quote and without quote are same
console.log(cities["10"]);

//accessing using for loop
for(i in cities){
    if(typeof cities[i]=="function"){//to access function stored in array
        cities[i]();
        continue;
    }
    console.log(i+"--"+cities[i]);//automatically increases i 
}
