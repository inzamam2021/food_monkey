function newtab1()
{
    window.open(
        "index.html", "_self");

}

function newtab2()
{
    window.open(
        "list.html", "_self");

}

function newtab3()
{
    window.open(
        "order.html", "_self");

}

function newtab4()
{
    window.open(
        "about.html", "_self");

}

function newtab5()
{
    window.open(
        "contact.html", "_self");

}

function sendmail()
{
    var name = document.getElementById("fname");
    var email = document.getElementById("email");
    var message = document.getElementById("message")
    if(name.value=="")
    {
        window.alert("Please enter your name !!!");
    }

    else if(email.value=="")
    {
        window.alert("Please enter your email !!!");

    }

    else if(message.value=="")
    {
        window.alert("Please enter your message !!!");

    }

    
}
var khana1 =399 ;
var khana2 =499;
var khana3=999 ;
var khana4 =999;
var khana5 =999;
var khana6=999 ;


function khana1()
{

 
alert("Your item has been added");


    

}



function khana2()
{
    alert("Your item has been added");
    
    
    
}
function khana3()
{
    alert("Your item has been added");
    
    
}
function khana4()
{
    alert("Your item has been added");
    
    
    
}
function khana5()
{
    alert("Your item has been added");
    
    
}
function khana6()
{
    alert("Your item has been added");
    
    
}


function sum()
{
    var sum_tot = khana1+khana2+khana3+khana4+khana5+khana6;
    alert("Your total is " + sum_tot);
    
   


}






