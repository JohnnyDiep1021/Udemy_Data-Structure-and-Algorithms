/*
  Single Responsibility
  => Each class should have only one sole purpose, and not be filled with excessive functionality.
*/

import logMessage from "./logger.js";

//This class has sole responsibility in only tracking calories. Not in charge of printing the result
class CalorieTracker {
  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }

  trackCalories(CalorieCount) {
    this.currentCalories += CalorieCount;
    if (this.currentCalories > this.maxCalories)
      logMessage("Max calories exceeded");
  }
}

const calorieTracker = new CalorieTracker(2000);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(1000);
calorieTracker.trackCalories(700);
