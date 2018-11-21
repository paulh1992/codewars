// https://www.codewars.com/kata/quidditch-scoreboard

----------------------------------------------------

function quidditchScoreboard(teams, actions) {
	//set my final result to blank
  	var result = [];

  	// set my values for each action
  	var goal = 10;
  	var foul = 30;
  	var snitch_caught = 150;

  	// set my teams and separate these removing the "vs"
  	var [team_1, team_2] = teams.split(" vs ");

  	// get my team and action and then remove the , and space from this to get just the team name, action and points
	  for (var teamAndAction of actions.split(", ")) {
		
		// remove the : and space from each team and action
		var [ team, action ] = teamAndAction.split(": ");

		// if the variable is undefined then return the result as 0
		if (result[team] === undefined) {
			result[team] = 0;
		}

		// if the action goal is met add the goal value to the teams total
		if (action.match("goal")) {
			result[team] += goal;
		}

		// if the action foul is met then deduct the foul value to the teams total
		if (action.match("foul")) {
			result[team] -= foul;
		}

		// if the action snitch caught is met then add the snitch caught value to the teams total
		if (action.match("Snitch")) {
			result[team] += snitch_caught;
			break;
		}
	}
  

	//return each team then with the result that the above determines
	return `${team_1}: ${result[team_1] || 0 }, ${team_2}: ${result[team_2] || 0}`;
}


// slightly smaller

function quidditchScoreboard(teams, actions) {
  	var result = [];
  	var goal = 10, foul = 30, snitch_caught = 150;
  	var [team_1, team_2] = teams.split(" vs ");

  	for (var teamAndAction of actions.split(", ")) {
		var [ team, action ] = teamAndAction.split(": ");

		if (result[team] === undefined) {result[team] = 0;}
		if (action.match("goal")) {result[team] += goal;}
		if (action.match("foul")) {	result[team] -= foul;}
		if (action.match("Snitch")) {result[team] += snitch_caught;break;}
	}
  	return `${team_1}: ${result[team_1] || 0 }, ${team_2}: ${result[team_2] || 0}`;
}