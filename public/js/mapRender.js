function initLayers(i) {
    for(l=0; l < map.layers.length; l++) {
        var layerData = map.layers[l]
        if(layerData.type == "tiled") {
        	initLayer(layerData, i);
        }
    }
}

function initLayer(layerData, i) {
	for ( var y = 0; y < layerData.data.length; y++) {
		for ( var x = 0; x < layerData.data[y].length; x++) {
			var currentTile = layerData.data[y][x];
			tileYrow = (currentTile / 16) | 0;
			tileXcol = (currentTile % 16) | 0;
			var tileSheet = new createjs.Bitmap(i[0].img);
			tileSheet.sourceRect = new createjs.Rectangle((tileXcol*32),(tileYrow*32), 32, 32);
			tileSheet.y = y * 32;
			tileSheet.x = x * 32;
			stage.addChild(tileSheet);
		}
	}
}


