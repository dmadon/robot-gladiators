var playerName=window.prompt("What is your robot's name?");
var playerHealth=100;
var playerAttack=10;
var playerMoney=10;


var enemyNames=["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth=50;
var enemyAttack=12;


var fight=function(enemyName){
// Repeat and execute as long as the enemy robot is alive
while(playerHealth >0 && enemyHealth>0){

    // Prompt players to decide to fight or skip the round
    var promptFight=window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // Log the player's choice to fight or skip the round
    console.log(promptFight);

    // If player chooses to fight, then fight
    if (promptFight==="fight"||promptFight==="FIGHT"){
    
        // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and 
        // use that result to update the value in the 'enemyHealth' variable.
        enemyHealth=enemyHealth-playerAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(playerName+" attacked "+enemyName+". "+enemyName+" now has "+enemyHealth+" health remaining.");

        // Check enemy's health
        if(enemyHealth<=0){
            window.alert(enemyName+" has died!");
            // Award player money for winning
            playerMoney=playerMoney + 20;
            console.log("playerMoney", playerMoney)
            // Leave while() loop since enemy is dead
            break;
        }
        else{
            window.alert (enemyName+" still has "+enemyHealth+" health left.");
        }

        // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and
        // use that result to update the value in the 'playerHealth' variable.
        playerHealth=playerHealth-enemyAttack;

        // Log a resulting message to tthe console so we know that it worked.
        console.log(enemyName+" attacked "+playerName+". "+playerName+" now has "+playerHealth+" health remaining.");

        // Check player's health
        if(playerHealth<=0){
            window.alert(playerName+" has died!");
            // Leave while() loop since player is dead
            break;
        }
        else{
            window.alert(playerName+" still has "+playerHealth+" health left.");
        }
    }
    else if (promptFight==="skip"|| promptFight==="SKIP"){
        // Confirm player wants to skip
        var confirmSkip=window.confirm("Are you sure you'd like to quit?");

        // If yes (true), leave fight
        if (confirmSkip){
            window.alert(playerName+" has decided to skip this fight. Goodbye!");

            // Subtract money from playerMoney for skipping
            playerMoney=playerMoney-10;
            console.log("playerMoney", playerMoney)
            break;
        }

        // If no (false), ask question again by running fight () again
        else{
            fight();
        }
    }
    else {
        window.alert("You need to choose a valid option. Try again!")
    }
}
}

for(var i = 0; i < enemyNames.length; i++) {

    if (playerHealth > 0){
        window.alert("Welcome to Robot Gladiators! Round "+(i+1));
    }
    else{
        window.alert("You have lost your robot in battle! Game over!");
        break;
    }
    // call fight function with enemy robot
    var pickedEnemyName=enemyNames[i];
    enemyHealth=50;
    fight(pickedEnemyName);
}
