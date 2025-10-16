// Guess the Number Game

// let max=parseInt(prompt("Enter the maximum number:"));
// while(!max){
//     max=parseInt(prompt("Enter a valid number:"));
// }
// const targetNum=Math.floor(Math.random()*max)+1;
// console.log(targetNum);
// let guess=parseInt(prompt("Enter your first guess:"));
// let attempts=1;
// while(parseInt(guess)!==targetNum){
//     if(guess==='q')break;
//     attempts++; 
//     if(guess>targetNum){
//         guess=prompt("Too high! Enter a new guess:");
//     }else{
//         guess=prompt("Too low! Enter a new guess:");
//     }
// }
// if(guess==='q'){
//     console.log("You quit the game.");
// }else{
//     console.log(`You got it! It took you ${attempts} guesses.`);
// }


// To Do List Application

let input=prompt("Start The To-Do list ? yes/quit");
const todos=[];
while(input!=='quit'){
input=prompt("What would you like to do? (list/delete/quit)");
if(input==='list'){
    let list=prompt("enter the list name");
    todos.push(list);
    for(let i=0;i<todos.length;i++){
        console.log(`${i}: ${todos[i]}`);
    }
    console.log("updated list is:");
    console.log(todos);
    // for(let i=0;i<todos.length;i++){
}
else if(input=='delete'){
    let index=prompt("Enter the index of the item to delete:");
    todos.splice(index,1);
    console.log("updated list is:");
    console.log(todos);
}
}
console.log(`hellow u quit the game`);
