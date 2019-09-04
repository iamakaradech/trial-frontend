/*
* Function can accept any parameter but first parameter is member and another are in args variable
*/
const acceptAnyParameters = (member, ...args) => {
  console.log('Name: ', member)
  console.log('Another argrument: ', args)
}

const cars = ['Corvette Z06', 'Lotus Exite S', 'Honda Jazz', 'Honda Click', 'Honda Waves']
// Copy value from cars into member's cars property
const member = { name: 'Rick', cars: [...cars] }

// Pass member object into function and another parameter
acceptAnyParameters(member, 'red', 'bold')
