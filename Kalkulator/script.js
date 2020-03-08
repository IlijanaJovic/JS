/*
function napraviOsobu(ime, prezime, adresa){
    var osoba = {};
    osoba.ime=ime;
    osoba.prezime=prezime;
    osoba.adresa=adresa;
    osoba.pozdravi=function(){
        console.log( this.ime+ " " +this.prezime +" pozdravlja Aleksu");
    }
    return osoba;
}

var o1= napraviOsobu("Amir", "Ramic", "Azize 24");
var o2= napraviOsobu("Aleksa", "Santic", "Azize 4");

console.log(o1);
o2.pozdravi();



function Osoba(ime, prezime, adresa){
    this.ime=ime;
    this.prezime=prezime;
    this.adresa=adresa;
    this.pozdravi=function(ime){
        console.log(this.ime+" "+this.prezime+ " pozdravlja " + osoba.ime+ " ")
    }

}

var os3= new Osoba("Muhamed", "Hodzic", "Bolnicka 12");
os3.godiste= "1990-14-5";
var os4= new Osoba("Ana", "Lukic", "Bolnicka 2");

console.log(os3);
os3.pozdravi("Haris");
*/

function Kalkulator(){
    this.unos1=0;
    this.unos2=0;

    this.saberi=function(){
       return this.unos1 + this.unos2;
    }
    this.oduzmi=function(){
       return this.unos1 - this.unos2;
    }
    this.pomnozi=function(){
        return this.unos1 * this.unos2;
    }
    this.dijeli=function(){
      return this.unos1 / this.unos2;
    }
}

var k= new Kalkulator ();
 
console.log(k);

function izvrsi(operacija){
k.unos1=document.getElementById("unos1").value;
k.unos2=document.getElementById("unos2").value;


var rez;
switch (operacija){
    case "+":
        rez=k.saberi();
            break;
     case "-":
        rez=k.oduzmi();
            break;
     case "*":
        rez=k.pomnozi();
             break;
     case "/":
        rez=k.dijeli();
             break;
}
document.getElementById('konzola').value=rez ;
}
function ocisti(){
    document.getElementById('konzola').value="" ;
    document.getElementById('unos1').value="" ;
    document.getElementById('unos2').value="" ;

}