window.red = 0;
window.green = 0;
window.blue = 0;

var colorCoefficient = 1.3;

function ChangeRed(value)
{
    window.red = value;
    // document.getElementById("red").value = value;
    ChangeBG();
}

function ChangeGreen(value)
{
    window.green = value;
    document.getElementById("green").value = value;
    ChangeBG();
}

function ChangeBlue(value)
{
    window.blue = value;
    //document.getElementById("blue").value = value;//
    ChangeBG();
}



function ChangeBG()
{
    // if(window.green >= 165)
    // {
    //     document.getElementById("name").style.color = "rgb("+0+","+0+","+0+")";
    // }
    // else
    // {
    //     document.getElementById("name").style.color = "rgb("+255+","+255+","+255+")";
    // }
    document.body.style.backgroundColor = "rgb("+window.red+","+window.green+","+window.blue+")";
}


function ChangeBackGround(value)
{
    var blue = 0;
    var green = 0;
    var red = 0;

    if(value <= 255/3)
    {
        red = value/colorCoefficient;
        document.getElementById("first-post").style.opacity = 1;
        document.getElementById("first-post").style.color = "rgb("+255+","+255+","+255+")";
        document.getElementById("second-post").style.opacity = 0;
        document.getElementById("third-post").style.opacity = 0;
    }
    else if(value >= 255/3 && value <= (255/3)*2){
        green = value/colorCoefficient;
        document.getElementById("second-post").style.opacity = 1;
        document.getElementById("second-post").style.color = "rgb("+255+","+255+","+255+")";
        document.getElementById("first-post").style.opacity = 0;
        document.getElementById("third-post").style.opacity = 0;
    }
    else if(value >= (255/3)*2 && value <= 255){
        blue = value/colorCoefficient;
        document.getElementById("third-post").style.opacity = 1;
        document.getElementById("third-post").style.color = "rgb("+255+","+255+","+255+")";
        document.getElementById("second-post").style.opacity = 0;
        document.getElementById("first-post").style.opacity = 0;
    }

    document.body.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
}