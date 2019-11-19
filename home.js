function xdecimal()
{
decimal = document.getElementById("decimal");
hexadecimal = document.getElementById("hexadecimal");
binaire = document.getElementById("binaire");
octal = document.getElementById("octal");
 
hexadecimal.value = (decimal.value-0).toString(16);
binaire.value = (decimal.value-0).toString(2);
octal.value=(decimal.value-0).toString(8)
}
 
function xhexadecimal()
{
decimal = document.getElementById("decimal");
hexadecimal = document.getElementById("hexadecimal");
binaire = document.getElementById("binaire");
octal = document.getElementById("octal");
 
decimal.value = parseInt(hexadecimal.value,16);
binaire.value = (parseInt(hexadecimal.value,16)).toString(2);
octal.value=(decimal.value,16).toString(8);
}
 
function xbinaire()
{
decimal = document.getElementById("decimal");
hexadecimal = document.getElementById("hexadecimal");
binaire = document.getElementById("binaire");
 octal = document.getElementById("octal");

decimal.value = parseInt(binaire.value,2);
hexadecimal.value = (parseInt(binaire.value,2)).toString(16);
octal.value=(decimal.value,2).toString(8)
}
function Octal(){
decimal = document.getElementById("decimal");
hexadecimal = document.getElementById("hexadecimal");
binaire = document.getElementById("binaire");
 octal = document.getElementById("octal");

decimal.value = parseInt(octal.value,8);
hexadecimal.value = (parseInt(octal.value,8)).toString(8);
binaire.value = (decimal.value-0).toString(2);
}