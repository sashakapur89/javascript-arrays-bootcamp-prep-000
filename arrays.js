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
  var newArray = array.push(`element`);
  return newArray;
}
