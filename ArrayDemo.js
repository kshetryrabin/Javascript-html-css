var cities=[];
console.log(cities);
//adding elements into array
cities.push("pune");
cities.push("kolkata");
cities.push("delhi");
cities.push("kathmandu","banglore");
console.log(cities);
console.log(cities[2]);

//adding element at beginning of array
cities.unshift("hyderabad");
console.log(cities);
//removing elements normally from bottom
cities.pop();
console.log(cities);
//adding or removing elements in between
cities.splice(3,1,"butwal");
console.log(cities);

//sorting an array containing numbers
var nums=[10,45,101,89];
function helper(a,b){
    return a-b;
}
nums.sort(helper);
console.log(nums);
