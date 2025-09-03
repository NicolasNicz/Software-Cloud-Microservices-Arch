class SortingStrategy {
    sort(array) {
        throw new Error('Method not implemented.');
    }
}


class StratégieVoiture extends SortingStrategy {
    sort(array) {
        console.log('Voiture : ', array);
        return array;
    }
}

class StratégieTransportPublic extends SortingStrategy {
    sort(array) {
        console.log('Transport Public : ', array);
        return array;
    }
}

class StratégieVélo extends SortingStrategy {
    sort(array) {
        console.log('Vélo : ', array);
        return array;
    }
}


class Itineraire {
    constructor(depart, destination) {
        this.depart = depart;
        this.destination = destination;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    calculerItineraire() {
        return this.strategy.sort([this.depart, this.destination]);
    }
}


class NavigateurGPS {
    constructor() {
        this.itineraire = null;
    }

    setItineraire(itineraire) {
        this.itineraire = itineraire;
    }

    calculerItineraire() {
        return this.itineraire.calculerItineraire();
    }
}


//Utilisation

const itineraire = new Itineraire('Paris', 'Londres');
itineraire.setStrategy(new StratégieVoiture());
itineraire.calculerItineraire();

itineraire.setStrategy(new StratégieTransportPublic());
itineraire.calculerItineraire();

itineraire.setStrategy(new StratégieVélo());
itineraire.calculerItineraire();

//Utilisation de la classe NavigateurGPS

const navigateur = new NavigateurGPS();
navigateur.setItineraire(itineraire);
navigateur.calculerItineraire();

 

