$(document).ready(function(){
// Global Variables
var user = {};
var opponents = {};
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
    

$(".harryPotter").on("click", function() {
    $(".harryPotter").hide();
});

$(".hermione").on("click", function(){
    $(".hermione").hide();
});


$(".harryPotter").html(harryPotter.Health);
});



