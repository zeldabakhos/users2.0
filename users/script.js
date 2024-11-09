"use strict"
const users = [
	{
		userName: "Alice",
		lastName: "Johnson",
		age: 30,
		address: {
			street: "Oak Avenue",
			number: 45,
			house: true,
		},
		role: "Software Engineer",
	},
	{
		userName: "Charlie",
		lastName: "Smith",
		age: 27,
		address: {
			street: "Maple Street",
			number: 101,
			house: false,
		},
		role: "Project Manager",
	},
	{
		userName: "Diana",
		lastName: "Brown",
		age: 35,
		address: {
			street: "Elm Road",
			number: 88,
			house: true,
		},
		role: "UX Designer",
	},
	{
		userName: "Eve",
		lastName: "Davis",
		age: 21,
		address: {
			street: "Birch Lane",
			number: 7,
			house: false,
		},
		role: "Intern",
	},
	{
		userName: "Frank",
		lastName: "Miller",
		age: 40,
		address: {
			street: "Pine Street",
			number: 200,
			house: true,
		},
		role: "CTO",
	},
	{
		userName: "Grace",
		lastName: "Wilson",
		age: 28,
		address: {
			street: "Cedar Avenue",
			number: 99,
			house: false,
		},
		role: "Marketing Specialist",
	},
	{
		userName: "Henry",
		lastName: "Moore",
		age: 33,
		address: {
			street: "Poplar Road",
			number: 16,
			house: true,
		},
		role: "HR Manager",
	},
	{
		userName: "Ivy",
		lastName: "Taylor",
		age: 25,
		address: {
			street: "Willow Street",
			number: 52,
			house: false,
		},
		role: "Sales Associate",
	},
	{
		userName: "Jack",
		lastName: "Anderson",
		age: 29,
		address: {
			street: "Spruce Avenue",
			number: 78,
			house: true,
		},
		role: "DevOps Engineer",
	},
	{
		userName: "Karen",
		lastName: "Thomas",
		age: 37,
		address: {
			street: "Chestnut Street",
			number: 65,
			house: false,
		},
		role: "Finance Manager",
	},
	{
		userName: "Leo",
		lastName: "Harris",
		age: 22,
		address: {
			street: "Fir Lane",
			number: 10,
			house: true,
		},
		role: "Data Analyst",
	},
]

//strings
let firstName="martin"
//numbers
let age=25

//booleans
true| false

//objects
let userOne = {
	name: "John",
	age: 25,
}

const user = [1,"Bob",true]


//function sayHey(firstName){
//	console.log("HELLO my G"+" "+firstName)
//}

function sayHey(firstName){
	console.log(`HELLO my G ${firstName}`)
}

console.log(firstName.toUpperCase())
console.log(typeof firstName)
console.log(userOne.name)

sayHey("MARTINOO")

/*
function processTwoNumbers(firstNumber,secondNumber,operator){
	if (operator =="sum"){
		console.log(firstNumber + secondNumber)
	}
	if (operator =="rest"){
		console.log(firstNumber - secondNumber)
	}	
}

processTwoNumbers(10,5,"sum")
processTwoNumbers(10,5,"rest")
*/

function processTwoNumbers(firstNumber, secondNumber, operator) {
	switch (operator) {
	  case "sum":
		console.log(firstNumber + secondNumber);
		break;
	  case "rest":
		console.log(firstNumber - secondNumber);
		break;
	  case "multiply":
		console.log(firstNumber * secondNumber);
		break;
	  case "divide":
		if (secondNumber !== 0) {
		  console.log(firstNumber / secondNumber);
		} else {
		  console.log("Error: Division by zero!");
		}
		break;
	  default:
		console.log("Error: Invalid operator!");
	}
}


  processTwoNumbers(10,5,"sum")
  processTwoNumbers(10,5,"rest")
  processTwoNumbers(10,5,"multiply")
  processTwoNumbers(10,5,"divide")



  const container = document.querySelector(".container");
  users.forEach((user) => {
	let imgSrc = user.userName.charAt(0) === 'A' || user.userName.charAt(0) === 'E' || user.userName.charAt(0) === 'I' || user.userName.charAt(0) === 'O' || user.userName.charAt(0) === 'U' ? "./assets/01.jpg" : "./assets/02.jpg";
	
	const cardHTML = `
	  <article class="card">
		<div class="card-image">
		  <img src="${imgSrc}" alt="${user.userName}" />
		  <span class="card-title">${user.userName}</span>
		</div>
  
		<div class="card-content">
		  <ul class="list-group">
			<li class="list-group-item"><strong>Name:</strong> ${user.userName} ${user.lastName}</li>
			<li class="list-group-item"><strong>Age:</strong> ${user.age}</li>
			<li class="list-group-item">
			  <strong>Address:</strong> ${user.address.number} ${user.address.street}
			  ${user.address.house ? `<img class="list-group-img" src="./assets/apart.svg" alt="" />` : ""}
			</li>
			<li class="list-group-item">
			  <strong>Role:</strong> ${user.role}
			</li>
		  </ul>
		</div>
	  </article>
	`;
	container.innerHTML += cardHTML;
  });


