class Journee {

		constructor(match1,match2,match3,match4) {
			this.match1 = match1;
			this.match2 = match2;
			this.match3 = match3;
			this.match4 = match4;
			this.played = false;
		}

		afficher() {
			let divmatch1 = document.getElementById("match1");
			let divmatch2 = document.getElementById("match2");
			let divmatch3 = document.getElementById("match3");
			let divmatch4 = document.getElementById("match4");

			if(!this.match1.played){
				divmatch1.innerHTML = this.match1.eq1.nom + " - " + this.match1.eq2.nom;
			}else{
				divmatch1.innerHTML = this.match1.eq1.nom + " " + this.match1.res1 + " - " +this.match1.res1 + " " + this.match1.eq2.nom;
			}

			if(!this.match2.played){
				divmatch2.innerHTML = this.match2.eq1.nom + " - " + this.match2.eq2.nom;
			}else{
				divmatch2.innerHTML = this.match2.eq1.nom + " " + this.match2.res1 + " - " +this.match2.res1 + " " + this.match2.eq2.nom;
			}

			if(!this.match3.played){
				divmatch3.innerHTML = this.match3.eq1.nom + " - " + this.match3.eq2.nom;
			}else{
				divmatch3.innerHTML = this.match3.eq1.nom + " " + this.match3.res1 + " - " +this.match3.res1 + " " + this.match3.eq2.nom;
			}

			if(!this.match4.played){
				divmatch4.innerHTML = this.match4.eq1.nom + " - " + this.match4.eq2.nom;
			}else{
				divmatch4.innerHTML = this.match4.eq1.nom + " " + this.match4.res1 + " - " +this.match4.res1 + " " + this.match4.eq2.nom;
			}
			

			divmatch1.style.textAlign = "center";
			divmatch2.style.textAlign = "center";
			divmatch3.style.textAlign = "center";
			divmatch4.style.textAlign = "center";
		}

		jouer() {
			if (!this.played) {
				this.match1.jouer();
				this.match2.jouer();
				this.match3.jouer();
				this.match4.jouer();
				this.afficher();
				this.played = true;
				this.match1.maj_equipes();
				this.match2.maj_equipes();
				this.match3.maj_equipes();
				this.match4.maj_equipes();
			}
		}

}
