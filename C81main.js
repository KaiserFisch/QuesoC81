canvas = document.getElementById ("myCanvas");
ctx = canvas.getContext ("2d");
color = "rgb(0, 49, 83)";

ctx.beginPath ();
ctx.strokeStyle = color ;
ctx.lineWidth = 3;
ctx.arc (435, 250, 25, 0, 2*Math.PI);
ctx.stroke ();

canvas.addEventListener ("mouseDown",my_mouseDown);
function my_mouseDown (e) {
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    console.log ("x=" + mouse_x + "y=" + mouse_y);
    circle (mouse_x, mouse_y);
}

function circle (mouse_x, mouse_y) {
    ctx.beginPath ();
ctx.strokeStyle = color ;
ctx.lineWidth = 3;
ctx.arc (mouse_x, mouse_y, 25, 0, 2*Math.PI);
ctx.stroke ();
}