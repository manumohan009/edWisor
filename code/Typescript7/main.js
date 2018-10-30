// let myFirstVariable:string = "Hello World";
// console.log(myFirstVariable);
// let popularSports: string[] = ["soccer", "basketball", "cricket", "tennis", "rugby"];
// let someNumberArray: number[] = [1, 2, 3, 4, 5 ];
// let x: [string, number];
// let iCanStoreAnyValue: any;
// let iDontHaveAValue: null;
// let iHaveUndefinedValue: undefined;
// let iCanOnlyHaveNullAndUndefinedValues: void;
// Boolean, String, Array, Tuple, Any, Void
// -------------------------------------------------
// let someValue: any ="this is a string";
// let strLength: number = (<string>someValue).length;
// -------------------------------------------------
// applying types to functions
// let multiply = function( x:number, y:number ):number {
//     return x*y;
// }
// console.log(2,3);
// ---------------------------------------------------------------------
// let divide = (x:number, y:number):number =>{
//     return x/y;
// }
// ----------------------------------------------------------------------
// only function definition
// let divide: (x:number, y:number)=> number;
// divide = (x:number, y:number)=>{
//     return x*y;
// }
// ------------------------------------------------------------------------
// optional parameter
// let multiplyOrSquare = (x:number, y?:number) => {
//     if(y){
//         return x*y;
//     } else{
//         return x*x;
//     }
// }
// console.log(multiplyOrSquare(2,3));
// console.log(multiplyOrSquare(4));
// --------------------------------------------------------------------------
// rest parameter
// let allPeopleIWantToInvite: string[] = [];
// let pushToPartyList = (...people:string[]) => {
//     console.log(people);
//     let newPeopleArray = people;
//     allPeopleIWantToInvite = allPeopleIWantToInvite.concat(newPeopleArray);
//     console.log(allPeopleIWantToInvite);
//     return allPeopleIWantToInvite;
// }
// pushToPartyList("Aditya", "Sid", "Rohit");
// pushToPartyList("Shika", "Kavita", "Aarohi");
// ------------------------------------------------------------------------------------
// making use of type 'any'
// let numberOfFriends = (friends:any) => {
//     if(typeof friends === 'string') {
//         return 'you have 1 friend';
//     }else {
//         let message = `you have ${friends.length} friends`
//         return message;
//     }
// }
// console.log(numberOfFriends("Aaditya"));
// console.log(numberOfFriends(["Aaditya", "Ajay"]));
// ----------------------------------------------------------------------------------
// This keyword
// function hello(thing){
//     console.log(this);
// }
// hello('message');
// let helloArrow = (thing)=> {
//     console.log(this);
//     console.log(this + 'says hello' + thing);
// }
// helloArrow('Manu');
// let myName = {
//     firstName: 'Aditya',
//     lastName: 'Kumar',
//     calculateFullName(){
//         console.log(this);
//         return this.firstName+' '+this.lastName;
//     }
// }
// 'this' keyword in arrow function
// let myName = {
//     firstName: 'Aditya',
//     lastName: 'Kumar',
//     calculateFullName: () => {
//         console.log(this);
//         return this.firstName+' '+this.lastName;
//     }
// }
// let someName = myName.calculateFullName();
// let myFullName = {
//     firstName: 'Aditya',
//     lastName: 'Kumar',
//     calculateFullName(){
//         return function(){
//             console.log(this)
//             return this.firstName+' '+this.lastName;
//         }
//     }
// }
// let someOtherName = myFullName.calculateFullName();
// someOtherName();
// let myFullName = {
//         firstName: 'Aditya',
//         lastName: 'Kumar',
//         calculateFullName(){
//             return ()=>{
//                 console.log(this)
//                 return this.firstName+' '+this.lastName;
//             }
//         }
//     }
//     let someOtherName = myFullName.calculateFullName();
//     someOtherName();
// ----------------------------------------------------------------------------------
//     let myName = {
//     firstName: 'Aditya',
//     lastName: 'Kumar',
//     calculateFullName(this:void){
//         console.log(this);
//         return this.firstName+' '+this.lastName;
//     }
// }
// ---------------------------------------------------------------------------------------
// defining a class
// class MobilePhone {
//     // fields or properties
//     screenSize: string;
//     RAM: string;
//     processor: string;
//     camera: number;
//     battery: number;
//     operatingSystem: string;
//     // a constructor which is used to initialize a class fields
//     constructor(screenSize: string, RAM: string, processor: string, camera: number, battery: number, operatingSystem: string){
//         this.screenSize = screenSize;
//         this.RAM = RAM;
//         this.processor = processor;
//         this.camera = camera;
//         this.battery = battery;
//         this.operatingSystem = operatingSystem;
//     }// end constructor
//     // a method which is accessible to outside world
//     getOperatingSystem = () =>{
//         return this.operatingSystem
//     }
// }
// let onePlus5t = new MobilePhone('6 inch', '6 GB', 'Snapdragon', 20, 3300, 'Android');
// let os = onePlus5t.getOperatingSystem();
// console.log(os);
// ---------------------------------------------------------------------------------
// class Animal{
//     constructor(public limbs: number, public typeOfAnimal: string, public diet?: string){
//         this.limbs = limbs;
//         this.typeOfAnimal = typeOfAnimal;
//         this.diet = diet;
//     }
//     getDietType = () => {
//         return this.diet;
//     }
// }
// let tiger = new Animal(4, 'mammal');
// let snake = new Animal(0, 'reptile', 'carnivore');
// console.log(tiger.getDietType());
// ------------------------------------------------------------------------------------------
// tsc main.ts --strictPropertyInitialization false
// -----------------------------------------------------------------------------------------
// Access modifiers
// Public, Private, Protected, Getters and Setters (properties)
// -----------------------------------------------------------------------------------------
var MobilePhone = /** @class */ (function () {
    // a constructor which is used to initialize a class fields
    function MobilePhone(screenSize, RAM, processor, camera, battery, operatingSystem) {
        var _this = this;
        // a method which is accessible to outside world
        this.getOperatingSystem = function () {
            return _this.operatingSystem;
        };
        this.getScreenSize = function () {
            return _this.screenSize;
        };
        this.getCameraPixels = function () {
            return _this.camera;
        };
        this.setCameraPixels = function (pixels) {
            _this.camera = pixels;
        };
        this.screenSize = screenSize;
        this.RAM = RAM;
        this.processor = processor;
        this.camera = camera;
        this.battery = battery;
        this.operatingSystem = operatingSystem;
    } // end constructor
    return MobilePhone;
}());
var onePlus5t = new MobilePhone('6 inch', '6 GB', 'Snapdragon', 20, 3300, 'Android');
var os = onePlus5t.getOperatingSystem();
console.log(onePlus5t.getScreenSize());
console.log(onePlus5t.getCameraPixels());
onePlus5t.setCameraPixels(25);
console.log(onePlus5t.getCameraPixels());
