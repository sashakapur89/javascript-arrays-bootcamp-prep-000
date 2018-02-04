var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ];
  
function addElementToBeginningOfArray(array, element){
 array = [element,...array];
 var newArray= array
 return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  array = [...array, element];
  var newArray = array;
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

function removeElementFromBeginningOfArray(array){
  array.shift();
  var newArray = array;
  return newArray
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}