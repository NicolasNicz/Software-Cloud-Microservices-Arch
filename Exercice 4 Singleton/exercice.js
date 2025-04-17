// singleton design pattern

const AppConfig = (function () {
    let instance;

    function createConfig() {
        config = {};

        return {
            set: function (key, value) {
                config[key] = value;
            },

            get: function (key) {
                return config[key];
            },

            getAll: function () {
                return config;
            }
        };
    }

    return {
        getConfig: function () {
            if (!instance) {
                instance = createConfig();
            }
            return instance;
        }
    };
}());

const appConfig = AppConfig.getConfig();
appConfig.set('apiUrl', 'https://api.pasestiam.com');
appConfig.set('version', '1.0.0');
appConfig.set('language', 'fr');

const appConfigB = AppConfig.getConfig();
appConfigB.set('language', 'en'); //changement d'un paramètre pour les deux instances pour montrer qu'ils partage la même configuration

if (appConfig === appConfigB) {
    console.log(appConfig.getAll());
    console.log(appConfigB.getAll());
} // renvoie les mêmes objets car on utilise le singleton
