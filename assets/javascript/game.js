$(document).ready(function(){
// Global Variables
var user = [];
var opponents = [];
var harryPotter = {
        Name: "Harry Potter",
        Attack: function (){
           x += 6;},
        Health: 100, 
        CounterAttack: 6
};
    var hermione = {
        Name: "Hermione Granger",
        Attack: function (){
            x += 4;},
        Health: 120,
        CouterAttack: 4
};
    var ron = {
        Name: "Ron Weasley",
        Attack: function (){
            x += 5;},
        Health: 110,
        CounterAttack: 5
};
    var draco = {
        Name: "Draco Malfoy",
        Attack: function (){
            x += 3;},
        Health: 140,
        CounterAttack: 3
};
    
// Button initial clicks begin
$(".harryPotter").on("click", function() {
    user.push(harryPotter);
    opponents.push(hermione);
    opponents.push(ron);
    opponents.push(draco);
    console.log(user);
    console.log(opponents);

});

$(".hermione").on("click", function() {
    user.push(hermione);
    opponents.push(harryPotter);
    opponents.push(ron);
    opponents.push(draco);
    console.log(user);
    console.log(opponents);

});

$(".ron").on("click", function() {
    user.push(ron);
    opponents.push(hermione);
    opponents.push(harryPotter);
    opponents.push(draco);
    console.log(user);
    console.log(opponents);

});

$(".draco").on("click", function() {
    user.push(draco);
    opponents.push(hermione);
    opponents.push(ron);
    opponents.push(harryPotter);
    console.log(user);
    console.log(opponents);

});
//Button intital click end

$(".harryPotter").html(harryPotter.Health);
});



