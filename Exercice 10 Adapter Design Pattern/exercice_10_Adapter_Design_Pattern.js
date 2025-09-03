//Ancien système de lecture de fichiers audio
class LecteurMP3 {
    lireFichierMP3(fichier) {
        console.log(`Lecture du fichier MP3 : ${fichier}`);
    }
}

//Nouveau système de lecture de fichiers audio
class LecteurWAV {
    lireFichierWAV(fichier) {
        console.log(`Lecture du fichier WAV : ${fichier}`);
    }
}



//le lecteur WAV doit resortir en MP3
class LecteurWAVAdapter {
    constructor() {
        this.lecteurWAV = new LecteurWAV();
    }

    lireFichierWAV(fichier) {
        this.lecteurWAV.lireFichierMP3(fichier);
    }
}

//Lecture de fichier MP3
const lecteurMP3 = new LecteurMP3();
lecteurMP3.lireFichierMP3('fichier.mp3');

const adaptateur = new LecteurWAVAdapter(lecteurMP3);
adaptateur.lireFichierWAV('fichier.wav');