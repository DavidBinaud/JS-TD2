class Championnat {

	constructor(eq1,eq2,eq3,eq4,eq5,eq6,eq7,eq8) {
		this.tabEquipes = new Array();
		this.tabEquipes.push(eq1,eq2,eq3,eq4,eq5,eq6,eq7,eq8);
		this.numJournee = 1;
		this.journees = new Array();
		this.journees.push(new Journee(new Match(eq1,eq2),new Match(eq3,eq4),new Match(eq5,eq6),new Match(eq7,eq8))); // journée 01
		this.journees.push(new Journee(new Match(eq1,eq3),new Match(eq2,eq4),new Match(eq5,eq7),new Match(eq6,eq8))); // journée 02
		this.journees.push(new Journee(new Match(eq4,eq1),new Match(eq3,eq2),new Match(eq8,eq5),new Match(eq7,eq6))); // journée 03
		this.journees.push(new Journee(new Match(eq1,eq5),new Match(eq2,eq6),new Match(eq3,eq7),new Match(eq4,eq8))); // journée 04
		this.journees.push(new Journee(new Match(eq8,eq1),new Match(eq2,eq7),new Match(eq6,eq3),new Match(eq4,eq5))); // journée 05
		this.journees.push(new Journee(new Match(eq6,eq1),new Match(eq5,eq2),new Match(eq8,eq3),new Match(eq7,eq4))); // journée 06
		this.journees.push(new Journee(new Match(eq1,eq7),new Match(eq2,eq8),new Match(eq3,eq5),new Match(eq4,eq6))); // journée 07
		this.journees.push(new Journee(new Match(eq3,eq1),new Match(eq4,eq2),new Match(eq7,eq5),new Match(eq8,eq6))); // journée 08
		this.journees.push(new Journee(new Match(eq1,eq4),new Match(eq2,eq3),new Match(eq5,eq8),new Match(eq6,eq7))); // journée 09
		this.journees.push(new Journee(new Match(eq5,eq1),new Match(eq6,eq2),new Match(eq7,eq3),new Match(eq8,eq4))); // journée 10
		this.journees.push(new Journee(new Match(eq2,eq1),new Match(eq4,eq3),new Match(eq6,eq5),new Match(eq8,eq7))); // journée 11
		this.journees.push(new Journee(new Match(eq1,eq8),new Match(eq7,eq2),new Match(eq3,eq6),new Match(eq5,eq4))); // journée 12
		this.journees.push(new Journee(new Match(eq1,eq6),new Match(eq2,eq5),new Match(eq3,eq8),new Match(eq4,eq7))); // journée 13
		this.journees.push(new Journee(new Match(eq7,eq1),new Match(eq8,eq2),new Match(eq5,eq3),new Match(eq6,eq4))); // journée 14
	}

	jouer_journee(i) {
		if(i > 0 && i < this.journees.length){
			this.journees[i-1].jouer();
		}
	}

	afficher_journee(i) {
		if(i > 0 && i < this.journees.length){
			this.journees[i-1].afficher();
		}
	}

	afficher_classement() {
		let divTitres = document.getElementById("titres");
		divTitres.innerHTML = "<table> <tr> <td>Rang</td> <td>Nom</td> <td>Points</td> <td>G</td> <td>N</td> <td>P</td>  <td>bp</td> <td>bc</td> <td>diff</td> </tr> </table>";


		for (var i = 0; i <  this.tabEquipes.length - 1; i++) {
				let divClass = document.getElementById(i+1);
				divClass.innerHTML = "<table> <tr> <td>" + this.tabEquipes[i].classement + "<td>" + this.tabEquipes[i].nom + "</td> <td>" + this.tabEquipes[i].pts +"</td> <td>" + this.tabEquipes[i].G + "</td> <td>" + this.tabEquipes[i].N + "</td> <td>" + this.tabEquipes[i].P + "</td>  <td>" + this.tabEquipes[i].bp + "</td> <td>" + this.tabEquipes[i].bc + "</td> <td>" + (this.tabEquipes[i].bp - this.tabEquipes[i].bc) + "</td> </tr> </table>";
		}

	}

	

	classer_equipes() {
		this.tabEquipes.sort(function(a,b){return b.evaluation - a.evaluation;});

		for (var i = 0; i < this.tabEquipes.length; i++) {
			this.tabEquipes[i].classement = i+1;
		}
	}

}
