const myName: string = "Souvik Pal";
console.log(myName);

//Interface
interface details{
    name: string,
    age: number,
    active: boolean
}
const personDetails = {
    name: "Venugopal",
    age: 50,
    active: true
}
const printDetails = (Details: details) => {
    console.log(Details.name + " " + Details.age + " " + Details.active);
}
printDetails(personDetails);

//Generics Class
class genericsClass<T>{
    value: T;
    constructor(value: T){
        this.value = value;
    }
}
const obj = new genericsClass<number>(5);
console.log(obj.value);

//Generics Function
const genericFunction = <T>(value: T) : T => {
    return value;
}
console.log(genericFunction<number>(10));