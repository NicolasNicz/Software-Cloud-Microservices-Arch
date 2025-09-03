class Boisson {
    constructor(description) {
        this.description = description;
    }
    cout() {
        return 5;
    }
}

//Décorateurs

class Lait extends Boisson {
    constructor(boisson) {
        super(boisson.description);
        this.boisson = boisson;
    }
    cout() {
        return this.boisson.cout() + 1;
    }
}

class Sucre extends Boisson {
        constructor(boisson) {
        super(boisson.description);
        this.boisson = boisson;
    }
    cout() {
        return this.boisson.cout() + 0.5;
    }
}

class Creme extends Boisson {
        constructor(boisson) {
        super(boisson.description);
        this.boisson = boisson;
    }
    cout() {
        return this.boisson.cout() + 2.5;
    }
}


//Utilisations des décorateurs

let boisson = new Boisson("Boisson de base"); //5
boisson = new Lait(boisson); //6
boisson = new Sucre(boisson); //6.5
boisson = new Creme(boisson); //9

console.log(boisson.cout());