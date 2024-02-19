// var c = 100;

// if (true) {
//   let a = 10;
//   const b = 20;
//   var c = 50;
// }
// // console.log(a);  //output=> a is not defined (coz  it's in the scope of if block only)
// // console.log(b); //output=> a is not defined (coz  it's in the scope of if block only)
// // console.log(c); //output=> 50  (coz c is a global scope variable  and accessible outside the if block also)

if (true) {
  const user = "pradeep";
  if (true) {
    const work = "javaScript";
    console.log(user); //output : pradeep coz child can access parent's data but parent cant access child
    console.log(work);
    console.log(user + " " + work);
  }
  // console.log(work)       //output : error work no defined
}
// console.log(user)           //output : error user not defined

/*
|
|
|
|
|
|
*/

// let a = 30;
// const b = 70;
// var c = 100;

// if (true) {
//   let a = 10;
//   const b = 20;
//   var c = 50;

//   console.log("INNER:", a);
//   console.log("INNER:", b);
//   console.log("INNER:", c);
// }

// console.log("OUTER:", a);
// console.log("OUTER:", b);
// console.log("OUTER:", c);

/*
|
\
|
|
|
|
|
|
*/

function father() {
  const username = "Pradeep";

  function child() {
    const childName = "Aksh";
    console.log("Inner Child :", username); //output=> Pradeep (here we can access username coz we inside of the parent (father) function)
  }
  //   console.log(childName); //output=> error (chilname is no defined coz  it's not accessible out of the child function.)
  child();
}
father();

// In a simple way A child can borrow an ice-cream from father but father cant borrow  anything from his son.
