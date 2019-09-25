
//function begins with small alphabet but object begins with caps
// object creation using templates i.e constructors
function Employee(a,b,c){
    this.id=a;
    this.name=b;
    this.salary=c;
    this.computeAllowance=function(){
        return this.salary*0.20;
    }
    this.computeTax=function(){
        return this.salary*0.10;
    }
    this.getNetSalary=function(){
        return this.salary+this.computeAllowance()-this.computeTax();
    }

}
var e1=new Employee(101,"Rahul",10000);
console.log(e1.id+"--"+e1.name+"--"+e1.salary+"--"+e1.computeAllowance());
console.log(e1.computeTax()+"--"+e1.getNetSalary());

var e2=new Employee(102,"Kapil",20000);