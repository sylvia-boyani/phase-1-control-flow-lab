function scuberGreetingForFeet(distance){
  // Write your code here!
  let result;
  
  if (distance <= 400){
    result = "This one is on me!";
  } 
  else if (distance > 2000 && distance < 2500){
    result = "I will gladly take your thirty bucks.";
  }
  else if (distance > 2500){
    result = "No can do.";
  }
  return result;
}

function ternaryCheckCity(city){
  // Write your code here!
  let result;
   city === "NYC" ? (result = "Ok, sounds good.") : (result = "No go.");
  return result
}

// function switchOnCharmFromTip(tip){
//   // Write your code here!
//   let result;
//   switch (switchOnCharmFromTip){
//     case "tip generous":
//       result = "Thank you so much."
//       break;
//       case "tip not so generous":
//       result = "Thank you.";
//       break;
//       default:
//         result = "Bye.";
//         break;
//   }
// }

function switchOnCharmFromTip(tip){
if (tip === "generous") {
  return "Thank you so much."
} else if (tip === "not as generous") {
  return "Thank you."
} else {
  return "Bye."
}
}