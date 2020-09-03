const persn={
    name:'ashu',
    age:23,
    display()
    {
        console.log('name is' +this.name);
    
    }
};
const ary=['ashu','alex',23];
const hob=['chat','mus'];
hob.push('reading');
for(let ar of ary)
{
    console.log(ar);
}
const dis=ary.concat(hob);
const changedAr=hob.slice();
const newar=[hob];
const newarr=[...hob];
const chngpersn={...persn};
console.log(hob);
console.log(dis);
console.log(changedAr);
console.log(newar);
console.log(newarr);
console.log(chngpersn);