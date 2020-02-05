let eq1 = new Equipe("PSG");
// eq1.G = 6;
// eq1.N = 3;
// eq1.P = 2;
// eq1.bp = 23;
// eq1.bc = 8;
// eq1.mise_a_jour(2,1);

let eq2 = new Equipe("FCN");
eq1.affichage();
eq2.affichage();

let match1 = new Match(eq1,eq2);
match1.jouer();
match1.maj_equipes();
match1.affichage();

eq1.affichage();
eq2.affichage();