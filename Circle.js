let c = document.getElementById("myCanvas");
ctx = c.getContext("2d");
function drawCircle(x,y,d) {
    ctx.beginPath();
    ctx.arc(x,y,d,4*Math.PI,false);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.stroke();
}
drawCircle(100,100,100);