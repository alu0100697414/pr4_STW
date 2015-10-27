"use strict";

var w;

if(typeof(Worker) !== "undefined"){
  if(typeof(w) == "undefined"){
    w = new Worker("temp.js");
  }
}

function initWWorker(){
  var value = document.getElementById('inicial').value;
  w.postMessage(value);
}

w.onmessage = function(event){
    document.getElementById("resultado").innerHTML = event.data;
};
