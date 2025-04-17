// 1. Single Responsibility Principle (SRP)

class ArticleCreator {
    createArticle(title, content) {
    const newArticle = { title, content };
    this.articles.push(newArticle);
    console.log('Article created:', newArticle);
    }
}

class ArticleEditor {
    constructor(articles) {
    this.articles = articles;
    }

    editArticle(title, newContent) {
    const article = this.articles.find(article => article.title === title);
    article.content = newContent;
    console.log('Article updated:', article);
    }
}

class ArticleDeletor {
    constructor(articles) {
    this.articles = articles;
    }

    deleteArticle(title) {
    const index = this.articles.findIndex(article => article.title === title);
    this.articles.splice(index, 1);
    console.log('Article deleted:', title);
    }
}

class ArticlePublisher {
    constructor(articles) {
        this.articles = articles;
    }

    publishArticle(title) {
    console.log('Article published:', title);
    }
}




// 2. Open/Closed Principle (OCP)

class ArticleFormatter {
    format(){
        throw new Error('Method not implemented');
    }
}

class MarkdownFormatter extends ArticleFormatter {
    constructor(articles) {
        super();
        this.articles = articles;
    }

    format() {
        return `# ${article.title}\n${article.content}`;
    }
}

class HTMLFormatter extends ArticleFormatter {
    constructor(articles) {
        super();
        this.articles = articles;
    }
    format() {
        return `<h1>${article.title}</h1><p>${article.content}</p>`;
    }
}



// 3. Liskov Substitution Principle (LSP)

class User {
    accessContent() {
        console.log("Accès au contenu général.");
    }   
}

class PremiumUser extends User {   
    accessContent() {
        super.accessContent();
        console.log("Accès aux contenu premium.");
    }
}

function showContent(user) {
    user.accessContent();
}

const user = new User();
const premiumUser = new PremiumUser();

showContent(user); // acces au contenu général
showContent(premiumUser); // acces au contenu général, accès aux contenu premium



// 4. Interface Segregation Principle (ISP)

class ContentCreator {
    createContent(content){
        console.log(`creation du contenu : ${content}`);
    }
}

class ContentEditor {
    editContent(content){
        console.log(`édition du contenu : ${content}`);
    }
}

class ContentDeleter {
    deleteContent(content){
        console.log(`suppression du contenu : ${content}`);
    }
}

class ContentPublisher {
    publishContent(content){
        console.log(`publication du contenu : ${content}`);
    }
}


// 5. Dependency Inversion Principle (DIP)

class ArticleStorage {
    save(article) {
        console.log("Article saved in local storage:", article);
    }
}

class ArticlePublisher {
    constructor(articleStorage) {
        this.articleStorage = articleStorage;
    }

    publish(article) {
        this.articleStorage.save(article);
        console.log("Article published:", article);
    }
}

const articleStorage = new ArticleStorage();

const articlePublisher = new ArticlePublisher(articleStorage);

articlePublisher.publish({ title: "Article 1", content: "Contenu de l'article 1" });




   