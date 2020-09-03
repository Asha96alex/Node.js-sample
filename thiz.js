const person={
    name:'ASHA ALEX',
    age:24,
    greet(){
        console.log('heyyy ${this,name})');
    },
};
function pname(){
    console.log(this.name);

}
pname.bind(person)();