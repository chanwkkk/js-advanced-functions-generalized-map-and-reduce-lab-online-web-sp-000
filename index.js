// Add your functions here
function map(array,func){
  return array.map(func)
}

function reduce(array,func,startingPoint=0){
  return array.reduce(func,startingPoint)
}

[1, 2, true, "razmatazz"].reduce(function(a, b){ return !!a && !!b}))
