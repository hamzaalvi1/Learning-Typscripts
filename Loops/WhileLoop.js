// while loop is same as forloop it do same things what for loop does but the syntax is different
// SYNTAX
// for(i = 0; i <= 10; i++)
// let i = 0; //
// while (i <= 10){
//  i++
// }
// simple example
var i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}
// example with array
var c = 0;
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
while (c < cities.length) {
    console.log(c);
    console.log(cities[c]);
    c++;
}
// sum of n numbers
var sumNNumber = function (num) {
    var totalSum = 0;
    var s = 0;
    while (s <= num) {
        totalSum = totalSum + s;
        s++;
    }
    console.log(totalSum, "total sum ");
};
sumNNumber(5);
