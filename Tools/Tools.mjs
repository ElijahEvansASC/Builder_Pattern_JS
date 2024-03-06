import enquirer from 'enquirer';
import * as GVars from '../GVars/GVars.mjs';

//const { prompt } = enquirer;

//(async () => {
  //const { userInput } = await prompt({
  //  type: 'input',
  //  name: 'userInput',
  //  message: 'Please enter something:',
  //});

  //console.log('You entered:', userInput);
//})();


//Vehicle Brand Choice
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

  if(trimmedChoice == 1)
  {var brandChoice = "Subaru";
  brandValidator = true;}
  else if(trimmedChoice == 2)
  {var brandChoice  = "Toyota";
   brandValidator = true;}
  else
  {console.log('That is not a valid input choice.');
  }

  return brandChoice;
  };

}

//Vehicle Model Choice
export async function VehicleModelChoice(brandChoice, modelChoice, vehicleCost, vehicleMPG) {
  const { prompt } = enquirer;
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

  return { modelChoice, vehicleCost, vehicleMPG };
}

 //Vehicle Color Choice
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
  else if(brandChoice =="Toyota"){  while(colorValidator == false){
    const { userColorIndex } = await prompt({
      type: 'input',
      name: 'userColorIndex',
      message: 'Please choose the number corresponding to your desired color:',
       });
      }}

  return colorChoice;
 }

function PrintSubaruColorList(){
  console.log("0:", GVars.subaruColor[0],  "4:",GVars.subaruColor[4])
  console.log("1:", GVars.subaruColor[1],  "5:",GVars.subaruColor[5])
  console.log("2:", GVars.subaruColor[2],  "6:",GVars.subaruColor[6])
}
function PrintToyotaColorList(){
  console.log("0:", GVars.toyotaColor[0],  "4:",GVars.toyotaColor[4])
  console.log("1:", GVars.toyotaColor[1],  "5:",GVars.toyotaColor[5])
  console.log("2:", GVars.toyotaColor[2],  "6:",GVars.toyotaColor[6])
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
 