//Variable declarations
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var eightInput = $('#eightInput');
var nineInput = $('#nineInput');
var tenInput = $('#tenInput');
var elevenInput = $('#elevenInput');
var twelveInput = $('#twelveInput');
var oneInput = $('#oneInput');
var twoInput = $('#twoInput');
var threeInput = $('#threeInput');
var fourInput = $('#fourInput');
var fiveInput = $('#fiveInput');
var Inputs = [eightInput, nineInput, tenInput, elevenInput, twelveInput, oneInput, twoInput, threeInput, fourInput, fiveInput]



var save0 = $('#save0');
var save1 = $('#save1');
var save2 = $('#save2');
var save3 = $('#save3');
var save4 = $('#save4');
var save5 = $('#save5');
var save6 = $('#save6');
var save7 = $('#save7');
var save8 = $('#save8');
var save9 = $('#save9');
var saveBtns = [save0, save1, save2, save3, save4, save5, save6, save7, save8, save9];

console.log(save0);
var currentTime = moment().startOf('day').fromNow();
console.log(currentTime);

for (i = 0; i < saveBtns.length; i++) {
    
}

saveBtns[0].on('click', function(event){
    event.preventDefault();
    console.log(Inputs[0].val());
})

