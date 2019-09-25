function Emp(){
    this.id=0;
    this.name="";
    self=this;// to access element of outer constructor self is used

    function DoSomething(){
        this.some=250;
        console.log(self.id);//accessing id of emp 
    }
    new DoSomething();
}
new Emp();