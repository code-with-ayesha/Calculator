#! /usr/bin/env node
import inquirer from "inquirer";
import showBanner from "node-banner";
import {sum,subtraction,multiplication,division} from "./function.js"
import gradient from "gradient-string"

let answers=[
    {
        name: "num1",
        type: "number",
        message: gradient.rainbow("Enter your first number:"),
   },
   {
       name: "num2",
       type: "number",
       message:gradient.rainbow ("Enter your second number:"),
  },
  {
   name: "operation",
   type: "list",
   message: gradient.rainbow("Enter your operation:"),
   choices: ["add","sub","mul","div"],
}, 

];
let answer=[
{
name:"again",
type:"confirm",
message:"Do you want to calculate again"
}
];



(async () => {
	await showBanner('Calculator', 'This can perform addition, subtraction, multiplication and division',"red","blue");
})();

async function calculator(){
    let condition=true;
    while(condition){let {num2,num1,operation} = await inquirer.prompt(answers) ;
    if(operation==="add") {
        console.log("The sum of two numbers:", sum(num1,num2))
    }
   else if (operation==="sub") {
        console.log("The difference of two numbers:",subtraction (num1,num2))
    }
   else if(operation==="mul") {
        console.log("The mul of two numbers:", multiplication(num1,num2))
    }
   else if(operation==="div") {
        console.log("The div of two numbers:", division(num1,num2))
    }
    let {again}=await inquirer.prompt(answer);
    condition=again;
}
}


setTimeout(() => {
   calculator() 
},1000);






  
