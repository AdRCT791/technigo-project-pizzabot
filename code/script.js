// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);
const name = prompt('Hello! What is your name?', '');
alert(`Hi and welcome ${name}!`);

// Step 2 - Food choice
const choice = prompt(
  `What would you like to order?\n(Enter a number)\n1-Pizza\n2-Pasta\n3-Salad`
);

// Step 3 - Subtype choice

if (Number(choice) === 1) {
  alert(`Pizza! Great choice`);
  const pizzaChoice = prompt(
    `Select a Pizza: \n(Enter a number)\n1-Margerita\n2-Capriciosa\n3-Pepperoni`
  );

  if (Number(pizzaChoice) === 1) {
    alert('You have chosen a Pizza Margerita');
  } else if (Number(pizzaChoice) === 2) {
    alert('You have chosen a Pizza Capriciosa');
  } else if (Number(pizzaChoice) === 3) {
    alert('You have chosen a Pizza Pepperoni');
  }
} else if (Number(choice) === 2) {
  alert(`Pasta! The best food is the world`);
  const pastaChoice = prompt(
    `Select a Pasta: \n(Enter a number)\n1-Carbonara\n2-Bolognese`
  );

  if (Number(pastaChoice) === 1) {
    alert('You have chosen Pasta Carbonara');
  } else if (Number(pastaChoice) === 2) {
    alert('You have chosen Pasta Bolognese');
  }
} else if (Number(choice) === 3) {
  alert(`Salad? Really? You eat what you want!`);
  const saladChoice = prompt(
    `Select a Salad: \n(Enter a number)\n1-Cesar\n2-Avocado\n`
  );

  if (Number(saladChoice) === 1) {
    alert('You have chosen a Salad Cesar');
  } else if (Number(saladChoice) === 2) {
    alert('You have chosen an Avocado Salad');
  }
} else {
  alert(`Please enter a valid choice. ${choice} is not on the menu.`);
}

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
