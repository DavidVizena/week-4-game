$(document).ready(function(){
// Global Variables
var user = [];
var opponents = [];
var defender = [];
var compAttack = [];
var harryPotter =  {Name: "Harry Potter", 
                    Attack: 6, 
                    Health: 100,
                    CounterAttack: 6};
var hermione = {Name:"Hermione Granger", 
                Attack: 4, 
                Health: 120, 
                CounterAttack: 4};
var ron =  {Name: "Ron Weasley",
            Attack: 5, 
            Health: 110, 
            CounterAttack: 5};
var draco =    {Name: "Draco Malfoy",
                Attack: 3,
                Health: 130,
                CounterAttack: 3};

// Attack functions
function multipleAttack(){
    compAttack.push(user.Attack);
    user.Attack += compAttack[0] = combinedAttack;
};

// Attack button
$("#attack").on("click", function clickAttack(){
    multipleAttack();
    defender.Health -= combinedAttack;
    user.Health -= defender.CounterAttack;
});

// Win conditions
if (defender.Health <= 0){
    defender.slice(0);
}
else if (user.Health <= 0){
    alert("You lose, brush up your skills and try again!");
    initialize();
}
else if (opponents.Health <=0 && defender.Health <=0){
    alert("Congratulations you are a Duel Master!");
    initialize();
};


// INITIALIZE
function initialize(){
$("#harryPotterCharacter .card-text").html("Health: " + harryPotter.Health);
$("#hermioneCharacter .card-text").html("Health: " + hermione.Health);
$("#ronCharacter .card-text").html("Health: " + ron.Health);
$("#dracoCharacter .card-text").html("Health: " + draco.Health);
$("#harryPotterEnemy .card-text").html("Health: " + harryPotter.Health);
$("#hermioneEnemy .card-text").html("Health: " + hermione.Health);
$("#ronEnemy .card-text").html("Health: " + ron.Health);
$("#dracoEnemy .card-text").html("Health: " + draco.Health);
$("#harryPotterDefend .card-text").html("Health: " + harryPotter.Health);
$("#hermioneDefend .card-text").html("Health: " + hermione.Health);
$("#ronDefend .card-text").html("Health: " + ron.Health);
$("#dracoDefend .card-text").html("Health: " + draco.Health);
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
console.log(user);
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



