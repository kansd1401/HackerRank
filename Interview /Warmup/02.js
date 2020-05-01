// Complete the countingValleys function below.
function countingValleys(n, s) {
  const steps = s.split("")
  let valleys = 0
  let altitude = 0
  let inValley = false
  for( let i = 0 ; i < steps.length; i++){
    if (steps[i] === 'U'){
      altitude++
    }else{
      altitude--
    }
    if (altitude < 0){
      inValley = true
    }
    if (inValley && altitude === 0){
      valleys++
      inValley = false
    }
    console.log(inValley)
    console.log(altitude)
  }
  
  return valleys
}

console.log(countingValleys(8,'UDDDUDUU'))