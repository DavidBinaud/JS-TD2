class Equipe {

	constructor(nom) {
		this.nom = nom;
		this.classement = 0;
		this.pts = 0;
		this.G = 0;
		this.N = 0;
		this.P = 0;
		this.bp = 0;
		this.bc = 0;
		this.evaluation = Math.random();
	}

	evaluer() {
		return this.pts * 10000 + (this.bp - this.bc) * 100 + this.bp + this.evaluation;
	}

	affichage() {
		console.log(this.classement.toString() + " " + this.nom + " " + this.pts + " " + this.G + " " + this.N + " " + this.P + " " +  this.bp + " " + this.bc + " " + (this.bp - this.bc));
	} 

	mise_a_jour(bp,bc) {
		// à compléter
	}

}
