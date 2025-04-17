class DocumentFactory {
    constructor(title, content, author){
        this.title = title;
        this.content = content;
        this.author = author;
        this.date = new Date();
    }

    generate() {
        throw new Error('generate method must be implemented');
    }
}

class Report extends DocumentFactory {
    generate() {
        console.log(`Rapport généré : ${this.title}\n
            Date : ${this.date.toString()}\n
            Contenu :\n
                ${this.content}
        `);  
    }
}

class Letter extends DocumentFactory {
    generate() {
        console.log(`Lettre écrite : ${this.title}\n
            Ecrit par : ${this.author}\n
            Date : ${this.date.toString()}\n
            Contenu :\n
            ${this.content}`
        );
    }
}

class Memo extends DocumentFactory {
    generate() {
        console.log(`Memo : ${this.title}\n
            Date : ${this.date.toString()}\n
            Contenu :\n
            ${this.content}`
        );
    }
}

function documentFactory(type, title, content, author) {
    switch (type) {
        case 'report':
            return new Report(title, content, author);
        case 'letter':
            return new Letter(title, content, author);
        case'memo':
            return new Memo(title, content, author);
        default:
            throw new Error(`Unknown document type: ${type}`);
    }
}

// utilisation du factory

const report = documentFactory('report', 'Rapport sur la réalisation du projet', '100% de métrise sur la peche aux moules', 'Jean Pierre Polnaref');
const letter = documentFactory('letter', 'Re: Rapport sur la descente aux enfers', 'On a bien creusé ! il fait même plutot chaud', 'Lapelle Delanuit');
const memo = documentFactory('memo', 'Note pour se souvenir', 'regarder deriere avant de faire marche arrière', 'moi');

report.generate();

letter.generate();

memo.generate();

// pour ajouter un nouveau type de document, il suffit de créer une nouvelle classe héritant de DocumentFactory et d'implémenter la méthode generate
// avec dans la fonction documentFactory, un cas spécifique pour cette nouvelle classe.
