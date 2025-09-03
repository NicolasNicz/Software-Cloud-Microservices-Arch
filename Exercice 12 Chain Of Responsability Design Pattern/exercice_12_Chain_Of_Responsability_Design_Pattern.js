class Gestionnaire {
    constructor(level) {
        this.level = level;
        this.suivant = null;
    }

    setSuivant(gestionnaire) {
        this.suivant = gestionnaire;
        return gestionnaire;
    }

    log(commande, severete) {
        if (severete <= this.level) {
            this.traiterCommande(commande);
        }
        if (this.suivant !== null) {
            this.suivant.log(commande, severete);
        }
    }

    traiterCommande(commande) {}
}

class GestionnaireStandard extends Gestionnaire {
    constructor() {
        super(Gestionnaire.LEVEL_STANDARD);
    }
    traiterCommande(commande) {
        console.log(`Droit standard : ${commande}`);
    }
}

class GestionnaireUrgent extends Gestionnaire {
    constructor() {
        super(Gestionnaire.LEVEL_URGENT);
    }
    traiterCommande(commande) {
        console.log(`Droit urgente : ${commande}`);
    }
}

class GestionnaireInternational extends Gestionnaire {
    constructor() {
        super(Gestionnaire.LEVEL_INTERNATIONAL);
    }
    traiterCommande(commande) {
        console.log(`Droit internationale : ${commande}`);
    }
}

Gestionnaire.LEVEL_STANDARD = 1;
Gestionnaire.LEVEL_URGENT = 2;
Gestionnaire.LEVEL_INTERNATIONAL = 3;
//Chaine
const gestionnaireInternational = new GestionnaireStandard()
  .setSuivant(new GestionnaireUrgent())
  .setSuivant(new GestionnaireInternational());

//Chaine
const gestionnaireUrgent = new GestionnaireStandard()
  .setSuivant(new GestionnaireUrgent());


//Utiliser la chaine
gestionnaireInternational.log('Commande standard', Gestionnaire.LEVEL_STANDARD);
gestionnaireInternational.log('Commande urgente', Gestionnaire.LEVEL_URGENT);
gestionnaireInternational.log('Commande internationale', Gestionnaire.LEVEL_INTERNATIONAL);

//Utilisation #2
gestionnaireUrgent.log('Commande standard', Gestionnaire.LEVEL_STANDARD);
gestionnaireUrgent.log('Commande urgente', Gestionnaire.LEVEL_URGENT);




