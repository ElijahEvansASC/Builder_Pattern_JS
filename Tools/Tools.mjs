import enquirer from 'enquirer';
import * as GVars from '../GVars/GVars.mjs';

//Enquirer import is used to get user input similar to the C# readline()


//Vehicle chooses a brand choice because functions give options based on if brand choice is a Toyota or Subaru.
export async function VehicleBrandChoice(brandChoice) {
    const { prompt } = enquirer;
    var brandValidator = false;
  while(!brandValidator){
    const { userBrandChoice } = await prompt({
      type: 'input',
      name: 'userBrandChoice',
      message: 'Enter a number "1" to build a Subaru, or a number "2" to build a Toyota:',
    });
    const trimmedChoice = userBrandChoice.trim()

  if(trimmedChoice == "1")
  {var brandChoice = "Subaru";
  brandValidator = true;}
  else if(trimmedChoice == "2")
  {var brandChoice  = "Toyota";
   brandValidator = true;}
  else
  {console.log('That is not a valid input choice.');
  }

  
  }
  return brandChoice;
}

//The user selects a model for their brand choice, and the input is an index value that corresponds to different parallel arrays of that vehicle model.
export async function VehicleModelChoice(brandChoice) {
  const { prompt } = enquirer;
  var year = 2024;
  var modelChoice, vehicleCost, vehicleMPG;
  var modelValidator = false;
  if(brandChoice == "Subaru")
  {  
    while(modelValidator == false){
     PrintSubaruModelList();
    const { userModelIndex } = await prompt({
    type: 'input',
    name: 'userModelIndex',
    message: 'Please choose the number corresponding to your desired model:',
     });
     if(userModelIndex >= 0 && userModelIndex <= 7)
       {
        
        modelChoice = GVars.subaruModel[userModelIndex];
        vehicleCost = GVars.subaruMSRP[userModelIndex];
        vehicleMPG = GVars.subaruMPG[userModelIndex];
        modelValidator = true;
       }
       else{
        console.log("That is not a valid choice. Please enter a number 0 through 7.")
       }
      }
  }
  else if(brandChoice =="Toyota")
  {
    while(modelValidator == false){
      PrintToyotaModelList();
     const { userModelIndex } = await prompt({
     type: 'input',
     name: 'userModelIndex',
     message: 'Please choose the number corresponding to your desired model:',
      });
      if(userModelIndex >= 0 && userModelIndex <= 7)
        {
         modelChoice = GVars.toyotaModel[userModelIndex];
         vehicleCost = GVars.toyotaMSRP[userModelIndex];
         vehicleMPG = GVars.toyotaMPG[userModelIndex];
         modelValidator = true;
        }
        else{
         console.log("That is not a valid choice. Please enter a number 0 through 7.")
        }
      }
  }

  return { year, modelChoice, vehicleCost, vehicleMPG };
}

//This function gets input from the user on color choice based on their brand choice, they have different color options.
export async function VehicleColorChoice(brandChoice, colorChoice){
  const { prompt } = enquirer;
  var colorValidator = false;
  if(brandChoice == "Subaru"){
    while(colorValidator == false){
      PrintSubaruColorList();
    const { userColorIndex } = await prompt({
      type: 'input',
      name: 'userColorIndex',
      message: 'Please choose the number corresponding to your desired color:',
       });
       if(userColorIndex >= 0 && userColorIndex <= 7)
       {
          colorChoice = GVars.subaruColor[userColorIndex];
          colorValidator = true;
       }
       else{
        console.log("That is not a valid choice. Please enter a number 0 through 7.")
       }
      }
  }
  else if(brandChoice =="Toyota")
   {while(colorValidator == false){
    PrintToyotaColorList();
    const { userColorIndex } = await prompt({
      type: 'input',
      name: 'userColorIndex',
      message: 'Please choose the number corresponding to your desired color:',
       });
       if(userColorIndex >= 0 && userColorIndex <= 7)
       {
          colorChoice = GVars.toyotaColor[userColorIndex];
          colorValidator = true;
       }
       else{
        console.log("That is not a valid choice. Please enter a number 0 through 7.")
       }
      }
    }
  return colorChoice;
 }

 //These functions print a list of options to the user.
function PrintSubaruColorList(){
  console.log("0:", GVars.subaruColor[0],  "3:",GVars.subaruColor[3])
  console.log("1:", GVars.subaruColor[1],  "4:",GVars.subaruColor[4])
  console.log("2:", GVars.subaruColor[2],  "5:",GVars.subaruColor[5])
}
function PrintToyotaColorList(){
  console.log("0:", GVars.toyotaColor[0],  "3:",GVars.toyotaColor[3])
  console.log("1:", GVars.toyotaColor[1],  "4:",GVars.toyotaColor[4])
  console.log("2:", GVars.toyotaColor[2],  "5:",GVars.toyotaColor[5])
}

 function PrintSubaruModelList() {
  console.log("0:", GVars.subaruModel[0],  "4:",GVars.subaruModel[4])
  console.log("1:", GVars.subaruModel[1],  "5:",GVars.subaruModel[5])
  console.log("2:", GVars.subaruModel[2],  "6:",GVars.subaruModel[6])
  console.log("3:", GVars.subaruModel[3],  "7:",GVars.subaruModel[7])
 }

 function PrintToyotaModelList() {
  console.log("0:", GVars.toyotaModel[0],  "4:",GVars.toyotaModel[4])
  console.log("1:", GVars.toyotaModel[1],  "5:",GVars.toyotaModel[5])
  console.log("2:", GVars.toyotaModel[2],  "6:",GVars.toyotaModel[6])
  console.log("3:", GVars.toyotaModel[3],  "7:",GVars.toyotaModel[7])
 }
 