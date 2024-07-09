// // interface student {
// //     student_id : number;
// //     name : string;
// // }

// // interface teacher {
// //     teacher_Id : number
// //     teacher_name : string;
// // }

// // type intersected_type = student & teacher
// // let obj1 : intersected_type = {
// // student_id : 234,
// // name : "ALI",
// // teacher_Id : 4678,
// // teacher_name: "ZAIN",

// // };

// // console.log(obj1.teacher_Id);
// // console.log(obj1.name)


// let myval : any;

// myval = true;
// myval = () =>{console.log(`Hey again!`);}


// let value : unknown;
// value = "HEY!"

// value = () => {console.log(`Hey again!`)}

// let val : unknown;

// const val1 : any = val

// const val : (... atgs: any[]) =>void = val ;

// function error(message :string): never{
//     throw new Error (message);
// }

// function fail(){
//     return error("something failed");

// }

// function infiniteLoop(): never{
//     while(true){}
// // }

// let myname : unknown = "WAJEEHA"

// console.log((myname as string).length);
// console.log((<string> myname).length)

// enum Color {Red,Green,Blue};
// var c : Color = Color.Green;

// enum Color1 {Red = 1, Green,Blue};
// var ColorName :string = Color1[2]

// // console.log(ColorName);

// enum Color2 {REd =1 , Green = 2, Blue = 4};
// var colorIndex = Color2["Blue"];
// console.log(colorIndex);

// const enum Color { Red , Green, Blue}
// var c : Color = Color.Green;

// const enum Color1{ Red = 1, Green ,Blue};
// var colorName : string = Color[2]
// // console.log(colorName);

// const enum Color2 {Red =1, Green= 2 , Blue = 4};
// var ColorIndex = Color2["Blue"]
// console.log(ColorIndex);