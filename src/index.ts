const course: string = "Next Level Web"
console.log(course);
console.log('Hello');
const names: string[] = ['Raju', 'Rose', 'Rony']
const info: [number, string] = [22, 'raju']
info[1] = 'rose'
info[0] = 1
// function
function add(num1:number, num2:number):number{
return num1 + num2;
}
const value = add(10,20);
console.log(value);
const addData = (num1:number, num2:number):number => num1 + num2;
const arrow = addData(10,50);
console.log(arrow);
//Spread
const schoolF = ['Mahadi', 'Nayeem', 'Ibrahim']
const clgF = ['Peyal','Abid','Meraj']
schoolF.push(...clgF)
console.log(schoolF);
schoolF.forEach(data => console.log(`Hi ${data}`))

const myFriend = {
    Fname: 'Nayeem',
    age: 25
}
const {Fname}= myFriend
console.log(Fname);

// type alias
 type OperationType=(x:number,y:number)=>number;
const calulate = (
    num1:number,
    num2:number, 
    operation:OperationType
    ) =>{
    return operation(num1,num2)
};
const sum = calulate(10,20, (x,y)=> x + y)
const sub = calulate(10,20, (x,y)=> x - y)
const div = calulate(10,20, (x,y)=> x * y)
console.log(sum, sub, div);

// union
type NoobDeveloper ={
    name:string
}
type JuniorDeveloper = NoobDeveloper & {
    name: string,
    ex: number,
    expert: string
}
type SeniorDeveloper = JuniorDeveloper &{
    level:number
}
const newDeveloper :NoobDeveloper | JuniorDeveloper ={
    name: 'Shanto',
    ex:2,
    expert:'java'

}
const senior : SeniorDeveloper ={
    name:'Raju',
    ex:3,
    expert:'marn',
    level:2
}
console.log(senior);

//unknown, never ,null
const searching =(value:string | null)=>{
    if(value === null){
        console.log('No searching');
    }
    else{
        console.log('Searching....');
    }
}
searching(null)
searching('raju')

const getMyCarSpeed = (speed:unknown) =>{
    if(typeof speed === "number"){
        const convertSpeed = (speed * 1000) / 3600;
        console.log(`My speed ${convertSpeed}`);
    }
    else if (typeof speed === "string"){
        const [value, unit] =speed.split(" ");
        const convertSpeed = (parseFloat(value) * 1000) / 3600;
        console.log(`My speed ${convertSpeed}`);
    }else{
        console.log('Wrong Input');
    }
}
 getMyCarSpeed(10);
 getMyCarSpeed('10 kmh^1') //s

 //Nullish Coneslancing Operator
 type Manush = {
    name:string,
    age:number,
    address:{
        city:string,
        road:string,
        home?:string
    }
 }
 const manush1 :Manush ={
    name: 'Shanto',
    age:20,
    address:{
        city:'Dhaka',
        road:'23 number'
    }

 }
 const home = manush1.address.home ?? 'No Home'
 console.log(home);
 
 function generateAdder(a: number): (b: number) => number {

    return function(b: number) {
  
      return a + b;
  
    };
  
  }
  
  
  const addTwo = generateAdder(2);
  
  console.log(addTwo(3));
  
  console.log(addTwo(5));