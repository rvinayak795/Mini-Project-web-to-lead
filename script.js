function beforeSubmit(event){
let outputdate = document.querySelector(".outputdate");
let inputdate = document.querySelector(".inputdate");
console.log('inputdate.value',inputdate.value); // object --> date(en_US)
let formattedDate = new Date(inputdate.value).toLocaleDateString("en-US");
console.log('formattedDate',formattedDate);
outputdate.value = formattedDate;
}
