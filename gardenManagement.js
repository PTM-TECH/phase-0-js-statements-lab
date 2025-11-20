const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

//STEP 5: Watering Control

if (temperature > 80) {
  console.log("Watering on");
} else {
  console.log("Watering off");
}

//STEP 6: Garden Lights Control

if (timeOfDay === "evening" || timeOfDay === "night") {
  console.log("Lights on");
} else {
  console.log("Lights off");
}

//STEP 7: Soil Moisture Adjustment

while (soilMoisture < 40) {
  soilMoisture += 5;
  console.log(soilMoisture);
}
