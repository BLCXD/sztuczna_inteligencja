let numerZdjecia = 0;
slajder();

function slajder(){
  let obrazki = document.getElementsByClassName("zdj-galeria");
  
  for(let i = 0; i < obrazki.length; i++){
    obrazki[i].style.display = "none";
  }
  
  obrazki[numerZdjecia].style.display = "block";
  
  numerZdjecia++; //numerZdjecia = numerZdjecia + 1
  
  if(numerZdjecia == obrazki.length){
    numerZdjecia = 0;
  }
  
  setTimeout(slajder, 10000);
}