class Ordinateur{
    constructor(builder){
        this.processeur = builder.processeur;
        this.ram = builder.ram;
        this.disqueDur = builder.disqueDur;
        this.carteGraphique = builder.carteGraphique;
    }

    description(){
        console.log(`Configuration de l'ordinateur :
        Processeur : ${this.processeur}
        RAM : ${this.ram}
        Disque Dur : ${this.disqueDur}
        Carte Graphique : ${this.carteGraphique}`);
    }
}

class OrdinateurBuilder{
    constructor(){
        this.processeur = null;
        this.ram = null;
        this.disqueDur = null;
        this.carteGraphique = null;
    }

    addProcesseur(processeur){
        this.processeur = processeur;
    }

    addRAM(ram){
        this.ram = ram;
    }

    addDisqueDur(disqueDur){
        this.disqueDur = disqueDur;
    }

    addCarteGraphique(carteGraphique){
        this.carteGraphique = carteGraphique;
    }

    build(){
        return new Ordinateur(this);
    }
}

// Utilisation du builder

const ordinateurBuilder = new OrdinateurBuilder();
ordinateurBuilder.addProcesseur('Intel Core i7');
ordinateurBuilder.addRAM('16 Go');
ordinateurBuilder.addDisqueDur('500 Go');
ordinateurBuilder.addCarteGraphique('NVIDIA GeForce RTX 3060');
const ordinateur = ordinateurBuilder.build();
ordinateur.description();
