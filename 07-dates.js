let myDate = new Date();
// console.log(myDate);
// //output= 2024-02-21T05:18:07.600Z

// console.log(myDate.toDateString());
// //output=> Wed Feb 14 2024

// console.log(myDate.toISOString());
// //output=> 2024-02-14T08:57:53.543Z

// console.log(myDate.toJSON());
// //output=> 2024-02-14T08:58:33.784Z

// console.log(myDate.toLocaleDateString());
// //output=> 14/02/2024

// console.log(myDate.toLocaleString());
// //output=> 14/02/2024, 14:29:13

// console.log(myDate.toLocaleTimeString());
// //output=> 14:29:34

// let createDate = Date(2023, 11, 22);
// //Wed Feb 14 2024 14:30:57 GMT+0530 (India Standard Time)

// let createDate = new Date(2023, 0, 22, 11, 30);
// //22/01/2023, 11:30:00

// let createDate = new Date(2023, 0, 22, 5, 3);
// //22/01/2023, 05:03:00

// let createDate = new Date("01-14-2023");
// //14/01/2023, 00:00:00
// console.log(createDate.toLocaleString());

// let timeStamp = Date.now;
// console.log(timeStamp());
//output=> 1707909682139  it gives you time in miliseconds

// console.log(createDate.getTime());
// console.log(Math.round(Date.now() / 1000));
// //output=> 1707909919  in seconds (curent time)

// let newDate = new Date();
// console.log(newDate.getMonth());
// //it wil starts from 0 ex.= jan.-0  feb.-1

// console.log(newDate.getMonth() + 1);
// //it will gives you exact count of month

// console.log(newDate.getDate());
// //it will givs you date

// console.log(newDate.getDay());
// //it will gives you day like sun=0  mon=1
