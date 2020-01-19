$(document).ready(function(){
    'use strict';

    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    var c;
    
    for(var x = 25; x < 400; x+= 50){
        for(var y = 25; y < 400; y += 50){
            c = Shape.Circle(x, y, 20);
            c.fillColor = "green";
        }
    }

    var tool = new Tool();

    tool.onMouseDown = function(event){
        var c = Shape.Circle(event.point, 20);
        c.fillColor = 'green';
    }

    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'red';
    text.fontSize = 20;
    text.content = 'hello world';

    paper.view.draw();
    console.log("main.js loaded");
});