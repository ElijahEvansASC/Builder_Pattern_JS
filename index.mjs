import * as Classes from './Classes/Vehicles.mjs';
import * as GVars from './GVars/GVars.mjs';
import * as Tools from './Tools/Tools.mjs';

// modelChoice, vehicleMPG, colorChoice, vehicleCost;
const year = 2024;
console.log("Welcome to the 2024 Vehicle Builder.")

const brandChoice = await Tools.VehicleBrandChoice();
console.log(brandChoice);

const { modelChoice, vehicleCost, vehicleMPG } = await Tools.VehicleModelChoice(brandChoice);


//var colorChoice = await Tools.VehicleColorChoice(brandChoice);

//vehicleName = new Classes.VehicleBuilder(parameters...).BuildVehicle();
let userVehicle =  new Classes.VehicleBuilder(brandChoice, modelChoice, year, vehicleMPG, GVars.colorChoice,vehicleCost).buildVehicle();
console.log(userVehicle);