var nGine = {
	init: function(id) {
		this.canvas = document.getElementById(id);
		this.ctx = this.canvas.getContext('2d');
		return this;
	}
};
var map = {
	stored: [],

	store: function(url) {
		var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
		// Chargement du fichier
		xhr.open("GET", 'public/js/maps/' + url, false);
		xhr.send(null);
		if(xhr.readyState != 4 || (xhr.status != 200 && xhr.status != 0)) // Code == 0 en local
			throw new Error("Impossible de charger la carte nommée \"" + nom + "\" (code HTTP : " + xhr.status + ").");
		var mapJsonData = xhr.responseText;
		this.stored.push(JSON.parse(mapJsonData));
		return this;
	}
};

var tileSet = {
	stored: [],

	store: function(url) {
		var image = new Image();
		image.src = "public/img/tilesets/" + url;
		this.stored.push(image);
		return this;
	},
	restore: function(nb) {

	},

	isLoaded: function() {
		for(var i=0; i < this.stored.length; i++) {
				if(this.stored[i].complete) {
					return true;
				}
			}
	}
};
/*
var nGine = {

		// Static vars
		tileSize: 32,
		tileSets: [],
		
		// Initialisation de l'instance du canvas via son ID dans le DOM.
		// Retourne l'objet lui même pour chainage !
		initialize: function(id) {
			this.canvas = document.getElementById(id);
			this.ctx = this.canvas.getContext('2d');
			return this;
		},
		
		// Charge l'image du tileset spécificié par "url" et le stock dans this.tileSets
		loadTileset: function(url) {
			this.tileset = new Image();
			this.tileset.ref = this;
			this.tileset.addEventListener("load", function() {
				this.ref.largeur = this.width / 32;
				this.ref.tileSets.push({'loaded': true, 'tileset': this.tileset});
			}, false);
			this.tileset.src = "public/img/tilesets/" + url;
			return this;
		},

		isLoaded: function(ts) {
			for(var i=0; i < this.tileSets.length; i++) {
				if(this.tileSets[i].loaded) {
					return this;
				}
			}
		},

		// Dessiner un tile provenant d'un tileset de l'element "tileset" 
		drawTile: function(tile,xDestination,yDestination) {
			//console.log(this.tilseSets.push(tileset))
			/*var xSourceEnTiles = tile % this.largeur;
			if(xSourceEnTiles == 0) xSourceEnTiles = this.largeur;
			var ySourceEnTiles = Math.ceil(tile / this.largeur);
			var xSource = (xSourceEnTiles - 1) * 32;
			var ySource = (ySourceEnTiles - 1) * 32;
			this.ctx.drawImage(this.tileSets[0], xSource, ySource, 32, 32, xDestination, yDestination, 32, 32);
			//console.log(this.tileset.complete);
		},

		Map: {
			load: function(url) {
				
			}
		},

		/*Ajax: {
			

			// Méthode principale AJAX
			// Paramètres de sendRequest(method, url, ValuesToSend, callbackObject)
			// Exemple : $$.AJAX.sendRequest('get','client.php',{clientId:1234, prenom:'James', nom:'Bond'}, 
			//				{success:function(){alert('oui')}, loading:function(){alert('Attendez SVP')}, 
			//				error:function(){alert('Non')}});
			sendRequest:function(m,url,valObj,callObj){

				valObj = {};
				//callObj = {};
				// Nous créons ici l'objet xhr
				var myxhr = this.getXHR();
				// Puisque nous devons envoyer les valeurs dans une chaine de caractère. 
				//   Exemple : monurl.php?parametre1=valeur1&parametre2=valeur2...
				// Nous allons créer la variable 'values' qui sauvegardera celles-ci 
				// En parcourant l'objet valObj nous récupérons son nom et sa valeur
				// Enfin nous utilisons encodeURLComponent pour échapper les caractères spéciaux 
				var values ='?';
				for(var k in valObj){
					values+= encodeURIComponent(k) + '=' + encodeURIComponent(valObj[k]) + '&';
				}
				// Si la méthode choisie est 'GET', nous ajoutons les valeurs à l'url 
				// Comme nous n'avons pas besoin d'envoyer les valeurs par le xhr.send, nous mettons à null la variable 'values'
				if(m === 'get'){
					url+=values;
					values= null;
				}
				// Ouverture de la connection AJAX

				myxhr.open(m,url,true);
			 
				// Si la méthode est 'POST'
				// Nous devons supprimer le '?' au début de la valeur de la variable 'values' 
				// Et définir l'entête requise pour la méthode 'POST'
				if(m=='post'){
					values=values.substring(1,values.length-1);
					myxhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
				}
				// Envoi de la requête avec AJAX 
				myxhr.send(values);
				// Si elle est disponible, exécute la fonction de chargement du callObj 
				if(callObj.loading){ callObj.loading();}
				// Lorsque 'readyState' vaut 4
				myxhr.onreadystatechange = function(){
					if(myxhr.readyState==4){
						switch(myxhr.status){
							// Si le status vaut 200 cela veut dire que tout s'est bien passé, 
							// on appelle la fonction success de callObj.
							case 200: if(callObj.success)callObj.success(myxhr); break;
							// Si le status vaut 403, 404 ou 503, cela signifie qu'il y a eu un problème,
							// on appelle la fonction error de callObj.
							case 403, 404, 503 :  if(callObj.error)callObj.error(myxhr); break;
							default:  callObj.error(myxhr);	
						}
					}
				}
			}    
		},
		Map: {
			load: function(map) {

			}
		},
}*/
