
const age = prompt ("Wie alt sind sie?");

let output = (age < 18)
   ?"Nein, sie dürfen nicht zur Wahl gehen"
   :"Ja sie dürfen zur Wahl gehen";

console.log ("Alter :",age);

console.log ("Antwort :", output);

alert (output);
