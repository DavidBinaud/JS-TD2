class Equipe {

	constructor(nom) {
		this.nom = nom;
		this.classement = 0;
		this.points = 0;
		this.matchWon = 0;
		this.matchDraw = 0;
		this.matchLost = 0;
		this.goalsGiven = 0;
		this.goalsReceived = 0;
		this.evaluation = Math.random();
	}

	evaluer() {
		return this.points * 10000 + (this.goalsGiven - this.goalsReceived) * 100 + this.goalsGiven + this.evaluation;
	}

	affichage() {
		console.log(this.classement.toString() + " " + this.nom + " " + this.points.toString() + " " + this.matchWon.toString() + " " + this.matchDraw.toString() + " " + this.matchLost.toString() + " " +  this.goalsGiven.toString() + " " + this.goalsReceived.toString() + " " + (this.goalsGiven - this.goalsReceived).toString());
	} 

	mise_a_jour(bp,bc) {
		// à compléter
	}

}
