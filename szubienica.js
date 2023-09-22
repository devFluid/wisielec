var haslo = " lis to pies";
haslo = haslo.toLocaleUpperCase();
var dlugosc = haslo.length;
var haslo1 = "";
var ile_skuch = 0;



for(i=0; i<dlugosc; i++)
{
    if (haslo.charAt(i)==" ") haslo1 = haslo1 + " ";
    else haslo1 = haslo1 + "-";
}



function wypisz_haslo()
{
    document.getElementById("plansza").innerHTML = haslo1;
   
}
window.onload = start;

 var litery = new Array(32);
 litery[0] = "A";
 litery[1] = "Ą";
 litery[2] = "B"; 
 litery[3] = "C";
 litery[4] = "Ć";
 litery[5] = "D";
 litery[6] = "E";
 litery[7] = "Ę";
 litery[8] = "F";
 litery[9] = "G";
 litery[10] = "H";
 litery[11] = "I";
 litery[12] = "J";
 litery[13] = "K";
 litery[14] = "L";
 litery[15] = "Ł";
 litery[16] = "M";
 litery[17] = "N";
 litery[18] = "Ń";
 litery[19] = "O";
 litery[20] = "Ó";
 litery[21] = "P";
 litery[22] = "R";
 litery[23] = "S";
 litery[24] = "Ś";
 litery[25] = "T";
 litery[26] = "U";
 litery[27] = "W";
 litery[28] = "Y"; 
 litery[29] = "Z";
 litery[30] = "Ż";
 litery[31] = "Ź";







function start()
{
    var tresc_diva="";
    for(i=0; i<31; i++)
    {
        var element = "lit" + i;
        tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+litery[i]+'</div>';
        if((i + 1) % 7 == 0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>'
    }

    document.getElementById("alfabet").innerHTML = tresc_diva;


    wypisz_haslo();

}

String.prototype.ustawZnak = function(miejsce, znak)
{
    if(miejsce > this.length -1) return this.toString();
    else return this.substring(0, miejsce) + znak + this.substring(miejsce + 1);
}




function sprawdz(nr)
{
    var trafiona = false;


   for(i=0; i<dlugosc; i++)

   {
        if(haslo.charAt(i)== litery[nr])
        {
            haslo1 = haslo1.ustawZnak(i, litery[nr])
            trafiona = true;
        }
   }

   if (trafiona == true)
   {
    var element = "lit" + nr;
    
    document.getElementById(element).style.background = "#003300";
    document.getElementById(element).style.color = "#00C000";
    document.getElementById(element).style.border = "3px solid #003300";
    document.getElementById(element).style.cursor = "default";


    wypisz_haslo();
   }
   else
   {
   var element = "lit" + nr;
    document.getElementById(element).style.background = "#330000";
    document.getElementById(element).style.color = "#C00000";
    document.getElementById(element).style.border = "3px solid #C00000";
    document.getElementById(element).style.cursor = "default";
    document.getElementById(element).setAttribute("onclick",";");
    
    ile_skuch++;
    var obraz = "img/s" + ile_skuch + ".jpg";
    document.getElementById("szubienica").innerHTML = '<img src='
    document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'"alt="" />'
    
   }
   wypisz_haslo();
   if(haslo == haslo1) 
   document.getElementById("alfabet").innerHTML = "Gratulacje: " +haslo+'<br/><br/><span class="reset" onclick="location.reload()"> Jeszcze raz?</span>';
   
   
   if(ile_skuch >= 9)
   document.getElementById("alfabet").innerHTML = "Pzegrałeś błedne haslo "+'<br/><br/><span class="reset" onclick="location.reload()"> Jeszcze raz?</span>';
}