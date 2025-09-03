class StationMétéo {
    constructor() {
        this.observers = [];
    }
    enregistrerObservateur(observer) {
        this.observers.push(observer);
    }
    supprimerObservateur(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    notifierObservateurs(data) {
        this.observers.forEach(observer => observer.update());
    }
    mettreAJourConditionsMétéorologiques() {
        this.notifierObservateurs();
    }
}

// Observer Interface
class Observateur {
    update(data) {
        throw new Error('Method not implemented.');
    }
}

// Concrete Observers
class AffichageActuel extends Observateur {
    update(data) {
        console.log(`Affichage actuel : ${data}`);
    }
}

class StatistiquesMétéo extends Observateur {
    update(data) {
        console.log(`Statistiques meteo : ${data}`);
    }
}

class PrévisionsMétéo extends Observateur {
    update(data) {
        console.log(`Prévisions meteo : ${data}`);
    }
}

// Usage
const stationMétéo = new StationMétéo("Paris");
const affichageActuel = new AffichageActuel("Nuages");
const statistiquesMétéo = new StatistiquesMétéo("21C");
const prévisionsMétéo = new PrévisionsMétéo("23C");

stationMétéo.enregistrerObservateur(affichageActuel);
stationMétéo.enregistrerObservateur(statistiquesMétéo);
stationMétéo.enregistrerObservateur(prévisionsMétéo);

stationMétéo.notifierObservateurs("youpi");

console.log("Observateur :");

stationMétéo.mettreAJourConditionsMétéorologiques();