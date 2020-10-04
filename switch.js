{
  // Make a switch statement with this variables and these conditions.
  // Make a variable restaurant Item. as well as a price.
  // Make the conditions,
  // Burger; $10
  // Steak ; $25
  // Salmon; $20
  // Shrimp; $20
  // Chicken; $15
  // Make a default instructing option not available.

  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(
    `Welcome to Glow Dinner, what can I get for you?`,
    (food) => {
      function restaurantItems(food) {
        switch (food) {
          case "burger":
            return "Great choice, that'll be $10";
            break;
          case "steak":
            return "Great choice, that'll be $25";
            break;
          case "salmon":
            return " Great choice, that'll be $20";
            break;
          case "shrimp":
            return "Great choice, that'll be $20";
            break;
          case "chicken":
            return "Great choice, that'll be $15";
            break;
          default:
            return "Oh so sorry, we've actually just run out that item.";
            break;
        }
      }
      console.log(`${restaurantItems(food)}`);
      readline.close();
    }
  );
}
