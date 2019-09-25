//using this approach we have to create template everytime object is but in previous approach
//template can be reused 
//if any special characters like - and 0 are not used then
//quotes "emp-id" is not compulsory
//object creation using object notation (JSON)
var emp={
    "emp-id":101,
    "emp-name":"Rahul",
    "emp-salary":10000,
    "0-computeAllowance":function(){
     return this["emp-salary"]*0.20;
    },
    "0-computeTax":function(){
        return this["emp-salary"]*0.10;
    },
    "0-getNetSalary":function(){
        return this["emp-salary"]+this["0-computeAllowance"]()-this["0-computeTax"]();
    }
};
emp.experienced=true;//dynamic addtion of attributes
delete emp["emp-name"];//dynamic deletion of attributes
console.log(emp["emp-id"]);
console.log(emp["emp-name"]);
console.log(emp["emp-salary"]);
console.log(emp["0-computeAllowance"]());
console.log(emp["0-computeTax"]());
console.log(emp["0-getNetSalary"]());
