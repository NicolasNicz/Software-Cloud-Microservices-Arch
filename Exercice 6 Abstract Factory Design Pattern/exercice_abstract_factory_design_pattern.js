// les 3 classes de base des animaux
class Mamifere {
    action(){}
}

class Oiseau {
    action(){}
}

class Poisson {
    action(){}
}



// Safari
class Lion extends Mamifere {
    action(){
        console.log("Lion : Je mange des croquettes.");
    }
}

class Aigle extends Oiseau {
    action(){
        console.log("Aigle : Je mange des poissons.");
    }
}

// Aquarium
class Dauphin extends Mamifere{
    action(){
        console.log("Dauphin : Je mange des poissons.");
    }
}

class Requin extends Poisson{
    action(){
        console.log("Requin : Je mange l'eau.");
    }
}

// Volière
class Perroquet extends Oiseau{
    action(){
        console.log("Perroquet : Je mange des fruits.");
    }
}

class ZooFactory{ //Fabrique de zoo
    createMamifere(){}
    createPoisson(){}
    createOiseau(){}
}

// mise en place des types de zoos
class ZooSafari extends ZooFactory{
    createMamifere(){
        return new Lion();
    }
    createOiseau(){
        return new Aigle();
    }
    createPoisson(){
        return new Requin();
    }
}

class ZooAquarium extends ZooFactory{
    createMamifere(){
        return new Dauphin();
    }
    createPoisson(){
        return new Requin();
    }
    createOiseau(){}
    // Pas d'oiseaux dans l'aquarium
}

class ZooVoliere extends ZooFactory{
    createMamifere(){}
    createPoisson(){}
    createOiseau(){
        return new Perroquet();
    }
}

function renderZoo(zooFactory){ //fonction pour simuler le zoo
    const mamifere = zooFactory.createMamifere();
    const poisson = zooFactory.createPoisson();
    const oiseau = zooFactory.createOiseau();
    if(oiseau){
        oiseau.action();
    }
    if(mamifere){
        mamifere.action();
    }
    if(poisson){
        poisson.action();
    }
}

console.log("Zoo Safari :");
renderZoo(new ZooSafari());

console.log("\nZoo Aquarium :");
renderZoo(new ZooAquarium());

console.log("\nZoo Voliere :");
renderZoo(new ZooVoliere());