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
