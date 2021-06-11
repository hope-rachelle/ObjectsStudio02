// Code your orbitCircumference function here:

function orbitCircumference(radius) {
  let integer = Math.round((Math.PI * 2) * radius)
  return integer;
}
// Code your missionDuration function here:

function missionDuration(nums, radius=2000, speed=28000) {
  let distance = nums * orbitCircumference(radius);
  let time = distance/speed;
  time = Math.round(time * 100)/100;
  console.log(`The mission will travel ${distance} km around the planet, and it will take ${time} hours to complete.`);
  return time;
}
// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(nums) {
  let idNumbers = [291, 414, 503, 599, 796, 890];
  let randomNumbers = [];
  while (randomNumbers.length < 3) {
  let  numberSelected = Math.floor(Math.random() * nums.length);
    if (randomNumbers.includes(nums[numberSelected])){
      numberSelected = Math.floor(Math.random() * nums.length);  
    } else{
    randomNumbers.push(nums[numberSelected]);
    }
  }return randomNumbers;
}

// Code your oxygenExpended function here:
function oxygenExpended (candidate,radius=2000, speed=28000){
let time = missionDuration(3, radius, speed);
let oxygen = candidate.o2Used(time);
oxygen = Math.round(oxygen * 1000)/1000;
return(`${candidate.name} will perform the spacewalk, which will last ${time} hours and require ${oxygen} kg of oxygen.`);
}


// Candidate data & crew array.
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let crew = [candidateA,candidateB,candidateC,candidateD, candidateE,candidateF];
function leastOxygen(crew) {
  let lowestOxygen = crew[0].o2Used(3);
  let candidateChosen = crew[0];
  for(i=0; i<crew.length; i++){
    if(crew[i].o2Used(3) < lowestOxygen) {
      lowestOxygen = crew[i].o2Used(3);
      candidateChosen = crew[i];
    }
  }
    return candidateChosen
}
console.log(oxygenExpended(leastOxygen(crew)));