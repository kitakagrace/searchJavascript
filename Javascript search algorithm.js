//Javascript search algorithm
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];
const searchBox = 'desk';
const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';

})
const onlySearch = things.filter(thing => {
  if(thing === searchBox){
    return true;
  }
  
})
console.log(onlySearch);
console.log(onlyNumbers);




