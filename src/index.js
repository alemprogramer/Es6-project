let name  = 'Hasib'
let age  = 10
let str = `I ${age>15?'dont':''} go to school ` 

function fun(){
    this.test=()=>{
        console.log(this);
    }

}
let obj = new fun()
// obj.test()
let add = ()=>console.log('fdjfd');

// console.log(add(4));

let test = ()=>{
    console.log(this);
}
test()

