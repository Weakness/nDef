function imgLoader() {

    // Callaback quand tout est chargé
    var oncompleted;

    // Tableau temporaire des images à charger
    var imgToLoad = [];

    // Nombre d'image.
    var numImgToLoad=0;
    var numImgLoaded=0;

    // Tableau référence des images chargées
    var imgLoaded = [];

    // Définition d'un callback : imgLoader.setCallback(function)
    this.setCallback = function (cb) {
        oncompleted = cb;
    }

    // Ajouter une image à télécharger 
    this.addImg = function(id,url) {
        imgToLoad.push({'id' : id, 'url' : url});
    }

    // Lancer le chargement des images 
    this.loadImg = function () {
        numImgToLoad = imgToLoad.length;
        for (var i=0; i<imgToLoad.length; i++) {
            var loading = new Image();
            loading.id = imgToLoad[i].id;
            loading.onload = handlerImgLoading(loading);
            loading.onerror = handlerImgError;
            loading.src = imgToLoad[i].url;
        }
    }

    // Handler onLoad des images. Se déclenche quand une image à términé de charger
    function handlerImgLoading(l) {
        if(l.complete) {
            numImgLoaded++
            imgLoaded.push({'id' : l.id, 'img' : l});
            if(numImgLoaded == numImgToLoad) {
                numImgLoaded = 0;
                numImgToLoad = 0;
                oncompleted(imgLoaded);
            }
        }
    }

    // Handler des Erreurs au chargement des images
    function handlerImgError(e) {
        console.log('Erreur');
    }
}