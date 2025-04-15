var c = document.getElementById("myCanvas1");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

var c = document.getElementById("myCanvas2");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.lineWidth = 10;
ctx.strokeStyle = "red";
ctx.stroke();

var c = document.getElementById("myCanvas3");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2*Math.PI);
ctx.stroke();

var c = document.getElementById("myCanvas4");
var ctx = c.getContext("2d");
ctx.rect(10, 10, 150, 80);
ctx.stroke();

var c = document.getElementById("myCanvas5");
var ctx = c.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 80, 80);

var c = document.getElementById("myCanvas6");
var ctx = c.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(10,10, 80, 80);
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.strokeRect(10, 10, 80, 80);

var c = document.getElementById("myCanvas7");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(100, 20);
ctx.lineTo(175, 100);
ctx.lineTo(20, 100);
ctx.lineTo(20, 20);
ctx.stroke();

var c = document.getElementById("myCanvas8");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(100, 20);
ctx.lineTo(180, 100);
ctx.lineTo(20, 100);
ctx.lineTo(100, 20);
ctx.stroke();

var c = document.getElementById("myCanvas9");
var ctx = c.getContext("2d");
ctx.fillStyle = "pink";
ctx.fillRect(10, 10, 150, 100);
ctx.clearRect(60, 35, 50, 50);

var c = document.getElementById("myCanvas10");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, Math.PI);
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();

var c = document.getElementById("myCanvas11");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 0.5 * Math.PI);
ctx.stroke();

var c = document.getElementById("myCanvas12");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 0.5 * Math.PI, true);
ctx.stroke();

var c = document.getElementById("myCanvas13");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(10, 80); 
ctx.quadraticCurveTo(150, 200, 240, 20);    
ctx.stroke();


var c = document.getElementById("myCanvas14");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(20, 20);
ctx.bezierCurveTo(110,150,180,10, 210, 140);
ctx.stroke();

var c = document.getElementById("myCanvas15");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText("Hello World", 10, 50);

var c = document.getElementById("myCanvas16");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.strokeText("Hello World", 10, 50);

var c = document.getElementById("myCanvas17");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0, 0,
200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);

var c = document.getElementById("myCanvas18");
var ctx = c.getContext("2d");
var grd = ctx.createRadialGradient(75, 50,
5, 90, 60, 100);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);

var c = document.getElementById("myCanvas19");
var ctx = c.getContext("2d");
ctx.shadowColor = "lightblue";
ctx.shadowOffsetX = 10;
ctx.shadowOffsetY = 10;
ctx.fillStyle = "blue";
ctx.fillRect(20, 20, 100, 100);
ctx.lineWidth = 4;
ctx.strokeStyle = "blue";
ctx.strokeRect(170, 20, 100, 100);

var c = document.getElementById("myCanvas20");
var ctx = c.getContext("2d");
ctx.shadowColor = "lightblue";
ctx.shadowBlur = 8;
ctx.shadowOffsetX = 10;
ctx.shadowOffsetY = 10;
ctx.fillStyle = "blue";
ctx.fillRect(20, 20, 100, 100);
ctx.lineWidth = 4;
ctx.strokeStyle = "blue";
ctx.strokeRect(170, 20, 100, 100);

var c = document.getElementById('canvas');
var ctx = c.getContext('2d');
ctx.lineWidth = 5;
ctx.beginPath();
ctx.arc(320, 240, 200, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.arc(270, 175, 30, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.arc(370, 175, 30, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();
ctx.lineWidth = 5;
ctx.beginPath();
ctx.arc(320, 240, 150, 0, -1 * Math.PI);
ctx.stroke();
ctx.closePath();