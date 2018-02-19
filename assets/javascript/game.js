$(document).ready(function(){
// Global Variables
var user = [];
var opponents = [];
var defender = [];
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

// INITIALIZE
function initialize(){
$("#harryPotterCharacter").hide();
$("#hermioneCharacter").hide();
$("#ronCharacter").hide();
$("#dracoCharacter").hide();
$("#harryPotterEnemy").hide();
$("#hermioneEnemy").hide();
$("#ronEnemy").hide();
$("#dracoEnemy").hide();
$("#harryPotterDefend").hide();
$("#hermioneDefend").hide();
$("#ronDefend").hide();
$("#dracoDefend").hide();
};

initialize();
//END Initialize

// Button initial clicks begin
$(".harryPotter").on("click", function() {
    user.push(harryPotter);
    opponents.push(hermione);
    opponents.push(ron);
    opponents.push(draco);
    $(".harryPotter").hide();
    $(".hermione").hide();
    $(".ron").hide();
    $(".draco").hide();
    $("#harryPotterCharacter").show();
    $("#hermioneEnemy").show();
    $("#ronEnemy").show();
    $("#dracoEnemy").show();
});

$(".hermione").on("click", function() {
    user.push(hermione);
    opponents.push(harryPotter);
    opponents.push(ron);
    opponents.push(draco);
    $(".harryPotter").hide();
    $(".hermione").hide();
    $(".ron").hide();
    $(".draco").hide();
    $("#hermioneCharacter").show();
    $("#harryPotterEnemy").show();
    $("#ronEnemy").show();
    $("#dracoEnemy").show();
});

$(".ron").on("click", function() {
    user.push(ron);
    opponents.push(hermione);
    opponents.push(harryPotter);
    opponents.push(draco);
    $(".harryPotter").hide();
    $(".hermione").hide();
    $(".ron").hide();
    $(".draco").hide();
    $("#ronCharacter").show();
    $("#harryPotterEnemy").show();
    $("#hermioneEnemy").show();
    $("#dracoEnemy").show();
});

$(".draco").on("click", function() {
    user.push(draco);
    opponents.push(hermione);
    opponents.push(ron);
    opponents.push(harryPotter);
    $(".harryPotter").hide();
    $(".hermione").hide();
    $(".ron").hide();
    $(".draco").hide();
    $("#dracoCharacter").show();
    $("#harryPotterEnemy").show();
    $("#hermioneEnemy").show();
    $("#ronEnemy").show();
});
//Button initial click end

//From enemiesAvaliable to defender 
$("#harryPotterEnemy").on("click", function() {
    defender.push(harryPotter);
    $("#harryPotterEnemy").hide();
    $("#harryPotterDefend").show();
});

$("#hermioneEnemy").on("click", function() {
    defender.push(hermione);
    $("#hermioneEnemy").hide();
    $("#hermioneDefend").show();
});

$("#ronEnemy").on("click", function() {
    defender.push(ron);
    $("#ronEnemy").hide();
    $("#ronDefend").show();
});

$("#dracoEnemy").on("click", function() {
    defender.push(draco);
    $("#dracoEnemy").hide();
    $("#dracoDefend").show();
});
//From enemiesAvaliable to defender END



}); //Closing tag for ready state



