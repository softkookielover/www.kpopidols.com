var canvas = new fabric.Canvas("myCanvas");

// Create canvas variable
 block_y=1;
 block_x=1;
 block_width= 150 ;
block_height= 150;

block_image_width = 500;
block_image_height = 500;

var block_image_object= "";

function new_image(get_image)
{
	
		fabric.Image.fromURL(get_image, function(Img)
		{
			blockobject = Img;
			blockobject.scaleToWidth(block_width);
			blockobject.scaleToHeight(block_height);
			blockobject.set(
				{
					
				}
			);
			canvas.add(blockobject);
		});
	}

	function block_update(get_image) {
		fabric.Image.fromURL(get_image, function(Img)
		{
			blockobject = Img;
			blockobject.scaleToWidth(block_width);
			blockobject.scaleToHeight(block_height);
			blockobject.set(
				{
					top:block_y,
					left:block_x
				}
			);
			canvas.add(blockobject);
		});
	}
	
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keypressed = e.keyCode;
console.log(keypressed);

	if(keypressed == '76') // add appropriate keycode
	{
		new_image("lisa.jpg");
    console.log("L is pressed ")

	}
	if(keypressed == '73')
	{
		block_x = 180;
		block_update("iu.jpg");
        console.log("I is pressed ")

	}
	
	if(keypressed == '74')
	{
		block_x =350;
		block_update("jungkook.jpg");
        console.log("J is pressed ")

	}
	if(keypressed == '84')
	{
		block_x = 600;
		block_update("taehyung.jpg");
        console.log("T is pressed ")

	}
	if(keypressed == '75')
	{
		block_x = 800;
	    block_update("kai.jpg");
        console.log("K is pressed ")

	}
	
}

