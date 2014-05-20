var stage, map;

function init() {
    stage = new createjs.Stage("c");
    map = mapParser('one.json');
    
    img = new imgLoader();
    img.setCallback(initLayers);
    for(i = 0; i < map.asset.length; i++) {
        img.addImg(map.asset[i][0],'public/img/tilesets/'+map.asset[i][1]);
    }
    img.loadImg();

    createjs.Ticker.addEventListener("tick", tick);  
}

function tick(event) {    
  stage.update();  
}


// Recupere et parse la Map. Renvoi un objet !
function mapParser(url) {
    // Objet xhr pour AJAX
    var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    // Chargement du fichier
    xhr.open("GET", 'public/js/maps/' + url, false);
    xhr.send(null);
    if(xhr.readyState != 4 || (xhr.status != 200 && xhr.status != 0)) // Code == 0 en local
        throw new Error("Impossible de charger la carte nommée \"" + nom + "\" (code HTTP : " + xhr.status + ").");
    var mapParsed = JSON.parse(xhr.responseText);
    return mapParsed;
}


function run(i) {
    /*drawMap(map,i);*/
}


/*

function startGame() {
    

    stage.addChild(mapBitmap);
    stage.update();
    var g = new createjs.Graphics();

for(var i = 1; i < trace.length; i++)
{
    var s = new createjs.Shape(g);
    s.x = 0;
    s.y = 0;

    var point1 = trace[i-1];
    var point2 = trace[i];

    s.graphics
        .setStrokeStyle(1)
        .moveTo(point1[0], point1[1])
        .beginStroke(createjs.Graphics.getRGB(255,127,241))
        .lineTo(point2[0], point2[1]);

    stage.addChild(s);
}

stage.update();
}

function tick(event) {
    var l = shape.getNumChildren();
    for (var i=0; i<l; i++) {
        var child = shape.getChildAt(i);
        child.alpha = 1;
        var pt = child.globalToLocal(stage.mouseX, stage.mouseY);
        if (stage.mouseInBounds && child.hitTest(pt.x, pt.y) && child.mouseEnabled) { child.alpha = 0.8; }

    }
    
    stage.update(event);
}*/

    /*apImg = new Image();
    mapImg.src = "public/img/maps/one.png";
    mapImg.onload = handleImgLoad;*/

    /**holder = stage.addChild(new createjs.Container());
    holder.x = 0;
    holder.y = 0;

    for (var i=0; i<map.y; i++) {
        for (var y=0; y<map.x; y++)
            switch(map.road[y][i]) {
                case 0:
                    var shape = new createjs.Shape();
                    shape.graphics.beginFill('black').drawRect(i*16,y*16,16,16);
                    shape.x = 0;
                    shape.y = 0;    
                    shape.mouseEnabled = false;
                    holder.addChild(shape); 
                    break;
                case 1:
                    var shape = new createjs.Shape();
                    shape.graphics.beginFill('green').drawRect(i*16,y*16,16,16);
                    shape.x = 0;
                    shape.y = 0;
                    shape.mouseEnabled = false;    
                    holder.addChild(shape); 
                    break;
                case 2:
                    
                    shape.graphics.beginFill('white').drawRect(i*16,y*16,16,16);
                    shape.graphics.beginFill('black').drawRect(i*16+1,y*16+1,16-2,16-2);
                    shape.x = 0;
                    shape.y = 0;
                    shape.on("click", function(evt) { console.log('clicked '+evt)});
                    shape.mouseEnabled = true;
                    holder.addChild(shape); 
                    break;
            }
            stage.update();
    }*/
    
    /*createjs.Ticker.on("tick", tick);

    var map = {
    "name": "One",
    "x" : 15,
    "y" : 25,
    "road" : [
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]
    ]
}*/