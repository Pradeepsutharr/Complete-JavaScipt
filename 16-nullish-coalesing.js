//1. If the first value is null or undefined, the nullish coalescing operator returns the second value
//2. if both values are not null or undefined then it will returns the left value

let val1;

val1 = 10 ?? null;
console.log(val1); //output : 10

val1 = null ?? 20;
console.log(val1); //output : 20

val1 = undefined ?? 50;
console.log(val1); //output : 50

val1 = undefined ?? null;
console.log(val1); //output : null

val1 = null ?? undefined;
console.log(val1); //output : undefined

val1 = 20 ?? 30;
console.log(val1); //output : 20

val1 = 30 ?? 20;
console.log(val1); //output : 30

val1 = 50 ?? 20 ?? 5;
console.log(val1); //output : 50

val1 = "" ?? 10;
console.log(val1); //output : "" empty string  coz it is not null  empty string also count as a value*

val1 = 10 ?? "";
console.log(val1); //output : 10
