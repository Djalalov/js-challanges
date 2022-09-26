//CHALLENGE: Rock, Paper, Scissors;

const rps = (p1, p2) => {
	//********* SOLUTION 1 ************//

	/* 	if (p1 === p2) return "Draw";
	let rules = { rock: "scissors", paper: "rock", scissors: "paper" };
	if (p2 === rules[p1]) {
		return "Player 1 won!";
	} else {
		return "Player 2 won!";
	} */
	//********* SOLUTION 2 ************//
	if (p1 === p2) return "Draw";
	if (p1 === "rocks" && p2 === "scissors") return "Player 1 won!";
	else if (p1 === "scissors" && p2 === "paper") return "Player 1 won!";
	else if (p1 === "paper" && p2 === "rock") return "Player 1 won!";
	else return "Player 2 won!";
};
