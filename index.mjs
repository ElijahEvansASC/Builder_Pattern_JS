import * as Classes from './Classes/Vehicles.mjs';
import * as Tools from './Tools/Tools.mjs';

//Name: Elijah Evans
//Date: 3/08/2023

console.log("Welcome to the 2024 Vehicle Builder.")

//Declared constants, values stored are from functions in the tools folder and functions in the classes folder
const brandChoice = await Tools.VehicleBrandChoice();
const { year, modelChoice, vehicleCost, vehicleMPG } = await Tools.VehicleModelChoice(brandChoice);
const colorChoice = await Tools.VehicleColorChoice(brandChoice);
const builder = new Classes.VehicleBuilder(brandChoice, modelChoice);
const director = new Classes.VehicleDirector(builder);
const userVehicle = director.constructVehicle(year, colorChoice, vehicleMPG, vehicleCost);

//Outputs message to user on their vehicles specifications that they built
console.log("You built a " + userVehicle.year, userVehicle.model, userVehicle.brand + ". It gets up to", userVehicle.mpg, "mpg and is", userVehicle.color +".");