// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  const array = []
  array.push(drivers[0])
  array.push(drivers[1])
  return array
}

const returnLastTwoDrivers = function(drivers) {
  const array = []
  array.push(drivers[drivers.length-2])
  array.push(drivers[drivers.length-1])
  return array
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(integer){
  return function (fare) {
    return integer * fare
  }
}
const fareDoubler = function(fare) {
  return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare) {
  return createFareMultiplier(3)(fare)
}
const selectDifferentDrivers = function(drivers, functions) {
  return functions(drivers)
}
