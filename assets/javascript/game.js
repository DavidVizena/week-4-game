$(document).ready(function(){
    // Global Variables
    var user;
    var defender;
    var attk;
    var cAttk;
    var Health;
    var enemyDead = 0;
    var pickedUser;
    var pickedDefender;

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
    
    // Attack button
    $("#attack").on("click", function clickAttack(){
        user.Health -= cAttk;
        var defDead =  defender.Health -= user.Attack;
        var userDead = user.Attack += attk;
        // Displays for card healths
        $(".yourCharactersWrapper .card-text").html("Health: " + user.Health);
        $(".defenderWrapper .card-text").html("Health: " + defender.Health);
        // console.log ("user health " + user[0].Health + " defender health: " + defender[0].Health + " Next attack: " + user[0].Attack + " counterattack: " + cAttk)
            
// Picked True/fale
    if (pickedUser === harryPotter){
        $("div.card.col-md-2.harryPotter").hide();
    }
    if (pickedUser === hermione){
        $("div.card.col-md-2.hermione").hide();
    }
    if (pickedUser === ron){
        $("div.card.col-md-2.harryPotter").hide();
    }
    if (pickedUser === draco){
        $("div.card.col-md-2.harryPotter").hide();
    }
    if (pickedDefender === harryPotter){
        $("div#harryPotterEnemy.card.col-md-3").hide();
        $("div#harryPotterDefend.card.col-md-12").hide();
    }
    if (pickedDefender === hermione){
        $("div#hermioneEnemy.card.col-md-3").hide();
        $("div#hermioneDefend.card.col-md-12").hide();
    }
    if (pickedDefender === ron){
        $("div#ronEnemy.card.col-md-3").hide();
        $("div#ronDefend.card.col-md-12").hide();
    }
    if (pickedDefender === draco){
        $("div#dracoEnemy.card.col-md-3").hide();
        $("div#dracoDefend.card.col-md-12").hide();
    }
    if (harryPotter.Health <= 0){
        $("div.card.col-md-2.harryPotter").hide();
        $("div#harryPotterDefend.card.col-md-12").hide();
        $("div#harryPotterCharacter.card.col-md-12.char1").hide();
        $("div#harryPotterEnemy.card.col-md-3").hide();
    }
    if (hermione.Health <= 0){
        $("div.card.col-md-2.hermione").hide();
        $("div#hermioneDefend.card.col-md-12").hide();
        $("div#hermioneCharacter.card.col-md-12.char1").hide();
        $("div#hermioneEnemy.card.col-md-3").hide();

    }
    if (ron.Health <= 0){
        $("div.card.col-md-2.ron").hide();
        $("div#ronDefend.card.col-md-12").hide();
        $("div#ronCharacter.card.col-md-12.char1").hide();
        $("div#ronEnemy.card.col-md-3").hide();
    }
    if (draco.Health <= 0){
        $("div.card.col-md-2.draco").hide();
        $("div#dracoDefend.card.col-md-12").hide();
        $("div#dracoCharacter.card.col-md-12.char1").hide();
        $("div#dracoEnemy.card.col-md-3").hide();
    }

        // Win conditions
        if (defender.Health <= 0){  
            enemyDead++;
            if (defender === harryPotter && user === hermione){
                $("div#defenderPick").hide();
                $("div#enemiesPick").show();
                $("div#harrPotterDefend.card.col-d-12").hide();
                $("div#harryPotterEnemy.col-md-3").hide();
                $("div#hermioneEnemy.col-md-3").hide();
                $("div#ronEnemy.col-md-3").show();
                $("div#dracoEnemy.col-md-3").show();
                $("img#attack").hide();
            } 
            if (defender === harryPotter && user === ron){
                $("div#defenderPick").hide();
                $("div#enemiesPick").show();
                $("div#harrPotterDefend.card.col-d-12").hide();
                $("div#harryPotterEnemy.col-md-3").hide();
                $("div#hermioneEnemy.col-md-3").show();
                $("div#ronEnemy.col-md-3").hide();
                $("div#dracoEnemy.col-md-3").show();
                $("img#attack").hide();
            } 
            if (defender === harryPotter && user === draco){
                $("div#defenderPick").hide();
                $("div#enemiesPick").show();
                $("div#harrPotterDefend.card.col-d-12").hide();
                $("div#harryPotterEnemy.col-md-3").hide();
                $("div#hermioneEnemy.col-md-3").show();
                $("div#ronEnemy.col-md-3").show();
                $("div#dracoEnemy.col-md-3").hide();
                $("img#attack").hide();
            } 
            if (defender === hermione && user === harryPotter){
                $("div#defenderPick").hide();
                $("div#enemiesPick").show();
                $("div#hermioneDefend.card.col-d-12").hide();
                $("div#hermioneEnemy.col-md-3").hide();
                $("div#harryPotterEnemy.col-md-3").hide();
                $("div#ronEnemy.col-md-3").show();
                $("div#dracoEnemy.col-md-3").show();
                $("img#attack").hide();
            } 
            if (defender === hermione && user === ron){
                $("div#defenderPick").hide();
                $("div#enemiesPick").show();
                $("div#hermioneDefend.card.col-d-12").hide();
                $("div#hermioneEnemy.col-md-3").hide();
                $("div#harryPotterEnemy.col-md-3").show();
                $("div#ronEnemy.col-md-3").hide();
                $("div#dracoEnemy.col-md-3").show();
                $("img#attack").hide();
            } 
            if (defender === hermione && user === draco){
                $("div#defenderPick").hide();
                $("div#enemiesPick").show();
                $("div#hermioneDefend.card.col-d-12").hide();
                $("div#hermioneEnemy.col-md-3").hide();
                $("div#harryPotterEnemy.col-md-3").show();
                $("div#ronEnemy.col-md-3").show();
                $("div#dracoEnemy.col-md-3").hide();
                $("img#attack").hide();
            } 

            if (defender === ron && user === harryPotter){
                $("div#defenderPick").hide();
                $("div#enemiesPick").show();
                $("div#ronDefend.card.col-d-12").hide();
                $("div#ronEnemy.col-md-3").hide();
                $("div#harryPotterEnemy.col-md-3").hide();
                $("div#hermioneEnemy.col-md-3").show();
                $("div#dracoEnemy.col-md-3").show();
                $("img#attack").hide();
            }  
            if (defender === ron && user === hermione){
                $("div#defenderPick").hide();
                $("div#enemiesPick").show();
                $("div#ronDefend.card.col-d-12").hide();
                $("div#ronEnemy.col-md-3").hide();
                $("div#harryPotterEnemy.col-md-3").show();
                $("div#hermioneEnemy.col-md-3").hide();
                $("div#dracoEnemy.col-md-3").show();
                $("img#attack").hide();
            }  
            if (defender === ron && user === draco){
                $("div#defenderPick").hide();
                $("div#enemiesPick").show();
                $("div#ronDefend.card.col-d-12").hide();
                $("div#ronEnemy.col-md-3").hide();
                $("div#harryPotterEnemy.col-md-3").show();
                $("div#hermioneEnemy.col-md-3").show();
                $("div#dracoEnemy.col-md-3").hide();
                $("img#attack").hide();
            }  
            if (defender === draco && user === harryPotter){
                $("div#defenderPick").hide();
                $("div#enemiesPick").show();
                $("div#dracoDefend.card.col-d-12").hide();
                $("div#dracoEnemy.col-md-3").hide();
                $("div#harryPotterEnemy.col-md-3").hide();
                $("div#ronEnemy.col-md-3").show();
                $("div#hermioneEnemy.col-md-3").show();
                $("img#attack").hide();
            }      
            if (defender === draco && hermione){
                $("div#defenderPick").hide();
                $("div#enemiesPick").show();
                $("div#dracoDefend.card.col-d-12").hide();
                $("div#dracoEnemy.col-md-3").hide();
                $("div#harryPotterEnemy.col-md-3").show();
                $("div#ronEnemy.col-md-3").show();
                $("div#hermioneEnemy.col-md-3").hide();
                $("img#attack").hide();
            }          
            if (defender === draco && user === ron){
                $("div#defenderPick").hide();
                $("div#enemiesPick").show();
                $("div#dracoDefend.card.col-d-12").hide();
                $("div#dracoEnemy.col-md-3").hide();
                $("div#harryPotterEnemy.col-md-3").show();
                $("div#ronEnemy.col-md-3").hide();
                $("div#hermioneEnemy.col-md-3").show();
                $("img#attack").hide();
            }              
        };
        if (user.Health <= 0){
            alert("You lose, brush up your skills and try again!");
            initialize();
        };
        if (enemyDead === 3){
                alert("Congratulations you are a Duel Master!");
                initialize();
        };    
    });
        
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
        user = harryPotter;
        attk= user.Attack;
        pickedUser = true;
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
        user = hermione;
        attk= user.Attack;
        pickedUser = true;
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
        user = ron;
        attk= user.Attack;
        pickedUser = true;
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
        user = draco;
        attk= user.Attack;
        pickedUser = true;
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
    $("#harryPotterEnemy.card.col-md-3").on("click", function() {
        defender = harryPotter;
        cAttk = defender.CounterAttack;
        pickedDefender = true;
        $("div.col-sm.text-center").hide();
        $("div#enemiesPick").hide();
        $("div#harryPotterEnemy.card.col-md-3").hide();
        $("div#hermioneEnemy.card.col-md-3").hide();
        $("div#ronEnemy.card.col-md-3").hide();
        $("div#dracoEnemy.card.col-md-3").hide();
        $("div#defenderPick").show();
        $("div#harryPotterDefend.card.col-md-12").show();
        $("div.col-sm").show();
        $("div#fightPick").hide();
        $("img#attack").show();
        $("div#harryPotterEnemy.card.col-md-3").hide();
    });
    
    $("#hermioneEnemy.card.col-md-3").on("click", function() {
        defender = hermione;
        cAttk = defender.CounterAttack;
        pickedDefender = true;
        $("div.col-sm.text-center").hide();
        $("div#enemiesPick").hide();
        $("div#harryPotterEnemy.card.col-md-3").hide();
        $("div#hermioneEnemy.card.col-md-3").hide();
        $("div#ronEnemycard.col-md-3").hide();
        $("div#dracoEnemycard.col-md-3").hide();
        $("div#defenderPick").show();
        $("div#hermioneDefend.card.col-md-12").show();
        $("div.col-sm").show();
        $("div#fightPick").hide();
        $("img#attack").show();
        $("div#hermioneEnemy.card.col-md-3").hide();
    });
    
    $("#ronEnemy.card.col-md-3").on("click", function() {
        defender =ron;
        cAttk = defender.CounterAttack;
        pickedDefender = true;
        $("div.col-sm.text-center").hide();
        $("div#enemiesPick").hide();
        $("div#harryPotterEnemy.card.col-md-3").hide();
        $("div#hermioneEnemy.card.col-md-3").hide();
        $("div#ronEnemy.card.col-md-3").hide();
        $("div#dracoEnemy.card.col-md-3").hide();
        $("div#defenderPick").show();
        $("div#ronDefend.card.col-md-12").show();
        $("div.col-sm").show();
        $("div#fightPick").hide();
        $("img#attack").show();
        $("div#ronEnemy.card.col-md-3").hide();
    });
    
    $("#dracoEnemy.card.col-md-3").on("click", function() {
        defender = draco;
        cAttk = defender.CounterAttack
        pickedDefender = true;
        $("div.col-sm.text-center").hide();
        $("div#enemiesPick").hide();
        $("div#harryPotterEnemy.card.col-md-3").hide();
        $("div#hermioneEnemy.card.col-md-3").hide();
        $("div#ronEnemy.card.col-md-3").hide();
        $("div#dracoEnemy.card.col-md-3").hide();
        $("div#defenderPick").show();
        $("div#dracoDefend.card.col-md-12").show();
        $("div.col-sm").show();
        $("div#fightPick").hide();
        $("img#attack").show();
        $("div#dracoEnemy.card.col-md-3").hide();
    });
    
    //From enemiesAvaliable to defender END 
    }); //Closing tag for ready state
  