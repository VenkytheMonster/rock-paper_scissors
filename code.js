var x=Math.random()*3;
x=Math.floor(x)+1;
var y=Math.random()*3;
y=Math.floor(y)+1;
var p1=prompt("enter the player 1 name",p1);
var p2=prompt("enter the player 2 name",p2);
document.querySelector("h1").innerHTML="It is tie";
if(x===y)
{
    document.querySelector("h1").innerHTML="It is tie";
}
else if((x===1 && y==3) || (x===2 && y===1) || (x===3 && y===2 ))
{
    document.querySelector("h1").innerHTML="Player "+ p1+" wins";
}
else
{
    document.querySelector("h1").innerHTML="Player  "+ p2+"  wins";
}

if(x===1)
{
    document.querySelectorAll("img")[0].src="scissors.png";
}
else if(x===2)
{
    document.querySelectorAll("img")[0].src="rock.png";
}
else{
    document.querySelectorAll("img")[0].src="paper..png";
}


if(y===1)
{
    document.querySelectorAll("img")[1].src="scissors.png";
}
else if(y===2)
{
    document.querySelectorAll("img")[1].src="rock.png";
}
else{
    document.querySelectorAll("img")[1].src="paper..png";
}




document.querySelector("button")[0].addEventListener("click",alert("fdgrbg"));
