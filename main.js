
var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_height = 30;
block_image_width = 30;

var player_object= "";
var block_image_object= "";

function player_update()
{
	fabric.Image.fromURL("player.png", function(Img) {
	player_object = Img;

	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(player_object);

	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(block_image_object);

	});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80')
{
	console.log("p and shift pressed together");
	block_image_width = block_image_width + 10;
	block_image_height = block_image_height + 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;	
}
if(e.shiftKey && keyPressed == '77')
{
	console.log("m and shift pressed together");
	block_image_width = block_image_width - 10;
	block_image_height = block_image_height - 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;
}

	if(keyPressed == '38')
	{
		up();
		console.log("up");
	}
	if(keyPressed == '40')
	{
		down();
		console.log("down");
	}
	if(keyPressed == '37')
	{
		left();
		console.log("left");
	}
	if(keyPressed == '39')
	{
		right();
		console.log("right");
	}
	if(keyPressed == '87')
	{
		new_image('wall.jpg'); 
		console.log("w");
	}
	if(keyPressed == '71')
	{
		new_image('ground.png'); 
		console.log("g");
	}
	if(keyPressed == '76')
	{
		new_image('light_green.png'); 
		console.log("l");
	}
	if(keyPressed == '84')
	{
		new_image('trunk.jpg'); 
		console.log("t");
	}
	if(keyPressed == '82')
	{
		new_image('roof.jpg'); 
		console.log("r");
	}
	if(keyPressed == '89')
	{
		new_image('yellow_wall.png'); 
		console.log("y");
	}
	if(keyPressed == '68')
	{
		new_image('dark_green.png'); 
		console.log("d");
	}
	if(keyPressed == '85')
	{
		new_image('unique.png'); 
		console.log("u");
	}
	if(keyPressed == '67')
	{
		new_image('cloud.jpg'); 
		console.log("c");
	}
	
}
function up()
{
	if(player_y >=0)
	{
		player_y = player_y - block_image_height;
		console.log("block image height = " + block_image_height);
		console.log("When Up arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function down()
{
	if(player_y <=500)
	{
		player_y = player_y + block_image_height;
		console.log("block image height = " + block_image_height);
		console.log("When Down arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function left()
{
	if(player_x >0)
	{
		player_x = player_x - block_image_width;
		console.log("block image width = " + block_image_width);
		console.log("When Left arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}

function right()
{
	if(player_x <=850)
	{
		player_x = player_x + block_image_width;
		console.log("block image width = " + block_image_width);
		console.log("When Right arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}
if(keyPressed == '87')
	{
document.getElementById("key_arrow").innerHTML = "You have pressed <span>w</span> key";
	}

	if(keyPressed == '66')
	{
document.getElementById("key_arrow").innerHTML = "You have pressed <span>b</span> key";
	}
	if(keyPressed == '71')
	{
document.getElementById("key_arrow").innerHTML = "You have pressed <span>g</span> key";
	}
	if(keyPressed == '76')
	{
document.getElementById("key_arrow").innerHTML = "You have pressed <span>l</span> key";
	}
	if(keyPressed == '84')
	{
document.getElementById("key_arrow").innerHTML = "You have pressed <span>t</span> key";
	}
	if(keyPressed == '82')
	{
document.getElementById("key_arrow").innerHTML = "You have pressed <span>r</span> key";
	}
	if(keyPressed == '89')
	{
document.getElementById("key_arrow").innerHTML = "You have pressed <span>y</span> key";
	}
	if(keyPressed == '68')
	{
document.getElementById("key_arrow").innerHTML = "You have pressed <span>d</span> key";
	}
	if(keyPressed == '67')
	{
document.getElementById("key_arrow").innerHTML = "You have pressed <span>c</span> key";
	}

if(keyPressed == '38')
	{
document.getElementById("key_arrow").innerHTML = "You have pressed <span>Up</span> arrow key";
	}
	if(keyPressed == '40')
	{
document.getElementById("key_arrow").innerHTML = "You have pressed <span>Down</span> arrow key";
	}
	if(keyPressed == '37')
	{
document.getElementById("key_arrow").innerHTML = "You have pressed <span>Left</span> arrow key";
	}
	if(keyPressed == '39')
	{
document.getElementById("key_arrow").innerHTML = "You have pressed <span>Right</span> arrow key";
	}
    if(e.shiftKey == true)
    {
document.getElementById("key_arrow").innerHTML = "You have pressed <span>shift</span> key";
document.getElementById("key_value_h4").style.display = "none";
    }
    
	if(e.shiftKey == true && keyPressed == '80')
    {
document.getElementById("key_arrow").innerHTML = "<span>p</span> and <span>shift</span> pressed together  key";
document.getElementById("key_value_h4").style.display = "none";
    }
	if(e.shiftKey == true && keyPressed == '77')
    {
document.getElementById("key_arrow").innerHTML = "<span>m</span> and <span>shift</span> pressed together  key";
document.getElementById("key_value_h4").style.display = "none";
    }