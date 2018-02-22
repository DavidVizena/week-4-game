$(document).ready(function(){
    // Global Variables
    var user = [];
    var opponents = [];
    var defender = [];
    var attk;
    var cAttk;
    var Health;

    // Character object/properties
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
    
    
// Media Player



    // Attack button
    $("#attack").on("click", function clickAttack(){
        user[0].Health -= cAttk;
        var defDead =   defender[0].Health -= user[0].Attack;
        var userDead = user[0].Attack += attk;
        // Displays for card healths
        $(".yourCharactersWrapper .card-text").html("Health: " + user[0].Health);
        $(".defenderWrapper .card-text").html("Health: " + defender[0].Health);
        // console.log ("user health " + user[0].Health + " defender health: " + defender[0].Health + " Next attack: " + user[0].Attack + " counterattack: " + cAttk)
            
        // Win conditions
        if (defDead <= 0){
            var test = opponents.lastIndexOf(defender[0]);
            console.log(test);
            defender=[];
            $("div#harryPotterDefend.card.col-md-12").hide();
            $("div#hermioneDefend.card.col-md-12").hide();
            $("div#ronDefend.card.col-md-12").hide();
            $("div#dracoDefend.card.col-md-12").hide();
            $("div#enemiesPick").show();
            $("div#harryPotterEnemy.card.col-md-3").show();
            $("div#hermioneEnemy.card.col-md-3").show();
            $("div#ronEnemy.card.col-md-3").show();
            $("div#dracoEnemy.card.col-md-3").show();
            $("img#attack").hide();
            $("div#defenderPick").hide();
            
        }
        else if (user[0].Health <= 0){
            alert("You lose, brush up your skills and try again!");
            initialize();
            }
        else if (opponents[0].Health <=0 && defender[0].Health <=0){
                alert("Congratulations you are a Duel Master!");
                initialize();
            }    
    });
        
    // INITIALIZE
    function initialize(){
    user = [];
    opponents = [];
    defender = [];
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
    $("div#yourCharacter").hide();
    $("div#enemiesPick").hide();
    $("div.col-sm").hide();
    $("img#attack").hide();
    $("div#defenderPick").hide();
    };
    
    initialize();
    //END Initialize
    
    // Button initial clicks begin
    $(".harryPotter").on("click", function() {
        user.push(harryPotter);
        opponents.push(hermione);
        opponents.push(ron);
        opponents.push(draco);
        attk= user[0].Attack;
        $(".harryPotter").hide();
        $(".hermione").hide();
        $(".ron").hide();
        $(".draco").hide();
        $("h2").hide();
        $("#harryPotterCharacter").show();
        $("div#enemiesPick.col-sm").show();
        $("#enemies").show();
        $("#hermioneEnemy").show();
        $("#ronEnemy").show();
        $("#dracoEnemy").show();
        $("div#yourCharacter").show();
        $("div#enemiesPick").show();
    });

    $(".hermione").on("click", function() {
        user.push(hermione);
        opponents.push(harryPotter);
        opponents.push(ron);
        opponents.push(draco);
        attk= user[0].Attack;
        $(".harryPotter").hide();
        $(".hermione").hide();
        $(".ron").hide();
        $(".draco").hide();
        $("h2").hide();
        $("#hermioneCharacter").show();
        $("div#enemiesPick.col-sm").show();
        $("#enemies").show();
        $("#harryPotterEnemy").show();
        $("#ronEnemy").show();
        $("#dracoEnemy").show();
        $("div#yourCharacter").show();
        $("div#enemiesPick").show();
    });
    
    $(".ron").on("click", function() {
        user.push(ron);
        opponents.push(hermione);
        opponents.push(harryPotter);
        opponents.push(draco);
        attk= user[0].Attack;
        $(".harryPotter").hide();
        $(".hermione").hide();
        $(".ron").hide();
        $(".draco").hide();
        $("h2").hide();
        $("#ronCharacter").show();
        $("div#enemiesPick.col-sm").show();
        $("#enemies").show();
        $("#harryPotterEnemy").show();
        $("#hermioneEnemy").show();
        $("#dracoEnemy").show();
        $("div#yourCharacter").show();
        $("div#enemiesPick").show();
    });
    
    $(".draco").on("click", function() {
        user.push(draco);
        opponents.push(hermione);
        opponents.push(ron);
        opponents.push(harryPotter);
        attk= user[0].Attack;
        $(".harryPotter").hide();
        $(".hermione").hide();
        $(".ron").hide();
        $(".draco").hide();
        $("h2").hide();
        $("#dracoCharacter").show();
        $("div#enemiesPick.col-sm").show();
        $("#enemies").show();
        $("#harryPotterEnemy").show();
        $("#hermioneEnemy").show();
        $("#ronEnemy").show();
        $("div#yourCharacter").show();
        $("div#enemiesPick").show();
    });
    
    //Button initial click end
    
    //From enemiesAvaliable to defender 
    $("#harryPotterEnemy").on("click", function() {
        defender.push(harryPotter);
        cAttk = defender[0].CounterAttack;
        $("div.col-sm.text-center").hide();
        $("div#enemiesPick").hide();
        $("#harryPotterEnemy").hide();
        $("#hermioneEnemy").hide();
        $("#ronEnemy").hide();
        $("#dracoEnemy").hide();
        $("div#defenderPick").show();
        $("div#harryPotterDefend.card.col-md-12").show();
        $("div.col-sm").show();
        $("div#fightPick").hide();
        $("img#attack").show();
    });
    
    $("#hermioneEnemy").on("click", function() {
        defender.push(hermione);
        cAttk = defender[0].CounterAttack;
        $("div.col-sm.text-center").hide();
        $("div#enemiesPick").hide();
        $("#harryPotterEnemy").hide();
        $("#hermioneEnemy").hide();
        $("#ronEnemy").hide();
        $("#dracoEnemy").hide();
        $("div#defenderPick").show();
        $("div#hermioneDefend.card.col-md-12").show();
        $("div.col-sm").show();
        $("div#fightPick").hide();
        $("img#attack").show();
    });
    
    $("#ronEnemy").on("click", function() {
        defender.push(ron);
        cAttk = defender[0].CounterAttack;
        $("div.col-sm.text-center").hide();
        $("div#enemiesPick").hide();
        $("#harryPotterEnemy").hide();
        $("#hermioneEnemy").hide();
        $("#ronEnemy").hide();
        $("#dracoEnemy").hide();
        $("div#defenderPick").show();
        $("div#ronDefend.card.col-md-12").show();
        $("div.col-sm").show();
        $("div#fightPick").hide();
        $("img#attack").show();
    });
    
    $("#dracoEnemy").on("click", function() {
        defender.push(draco);
        cAttk = defender[0].CounterAttack;
        $("div.col-sm.text-center").hide();
        $("div#enemiesPick").hide();
        $("#harryPotterEnemy").hide();
        $("#hermioneEnemy").hide();
        $("#ronEnemy").hide();
        $("#dracoEnemy").hide();
        $("div#defenderPick").show();
        $("div#dracoDefend.card.col-md-12").show();
        $("div.col-sm").show();
        $("div#fightPick").hide();
        $("img#attack").show();
    });
    
    //From enemiesAvaliable to defender END
    console.log("this is true");
    

    
    
    
    }); //Closing tag for ready state
    
    
    
    