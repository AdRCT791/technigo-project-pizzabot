// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);
const name = prompt('Hello! What is your name?');
alert(`Hi and welcome ${name}!`);

// Step 2 - Food choice
let choice = prompt(
  `What would you like to order?\n(Enter a number)\n1-Pizza\n2-Pasta\n3-Salad`
);

// Step 3 - Subtype choice

if (Number(choice) === 1) {
  alert(`Pizza! Great choice`);
  choice = prompt(
    `Select a Pizza: \n(Enter a number)\n1-Margerita\n2-Capriciosa\n3-Pepperoni`
  );

  if (Number(choice) === 1) {
    choice = 'Margerita';
    alert(`You have chosen a Pizza ${choice}`);
  } else if (Number(choice) === 2) {
    alert(`You have chosen a Pizza ${choice}`);
  } else if (Number(choice) === 3) {
    alert(`You have chosen a Pizza ${choice}`);
  }
} else if (Number(choice) === 2) {
  alert(`Pasta! The best food is the world`);
  choice = prompt(
    `Select a Pasta: \n(Enter a number)\n1-Carbonara\n2-Bolognese`
  );

  if (Number(choice) === 1) {
    choice = 'Pasta Carbonara';
  } else if (Number(choice) === 2) {
    choice = 'Pasta Bolognese';
  }

  alert(`You have chosen ${choice}`);
} else if (Number(choice) === 3) {
  alert(`Salad? Really? You eat what you want!`);
  choice = prompt(
    `Select a Salad: \n(Enter a number)\n1-Salad Cesar\n2-Avocado Salad\n`
  );

  if (Number(choice) === 1) {
    choice = 'Salad Cesar';
  } else if (Number(choice) === 2) {
    choice = 'Avocado Salad';
  }
  alert(`You have chosen ${choice}`);
} else {
  alert(`Please enter a valid choice.`);
}

// Step 4 - Age

const customerAge = prompt(
  `is this food for an adult or a child? Please enter your age`
);

// Step 5 - Order confirmation
// Your code goes here
