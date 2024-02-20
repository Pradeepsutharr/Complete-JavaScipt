let marks = 60;
let msg;
if (marks >= 0 && marks <= 100) {
  if (marks > 50) {
    if (marks >= 50 && marks <= 60) {
      msg = "50+ Marks Passed";
    } else if (marks >= 60 && marks <= 70) {
      msg = "60+ Marks Third Division";
    } else if (marks >= 70 && marks <= 80) {
      msg = "70+ Marks Second Division";
    } else if (marks >= 80 && marks <= 90) {
      msg = "80+ Mraks First Division";
    } else {
      msg = "Pass";
    }
  } else {
    msg = "Padhai jyada Kro ";
  }
} else {
  msg = "Invalid Marks";
}
console.log(msg);
