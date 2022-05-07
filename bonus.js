var dateFin = new Date("05/04/2022 20:00:00").getTime();

function comptearebours(){
    let maintenant = new Date().getTime();
    let difftempsrestant = dateFin - maintenant;

    //on va calculer les heures, les minutes et les secondes
    let jours = Math.floor(difftempsrestant/ (1000*60*60*24));
    let heures = Math.floor (difftempsrestant % (1000*60*60*24)/(1000*60*60));
    let minutes = Math.floor (difftempsrestant % (1000*60*60)/(1000*60));
    let secondes = Math.floor (difftempsrestant % (1000*60)/(1000));

    let minuteur = document.getElementById('minuteur');
    minuteur .innerHTML = "${jours} j - ${heures} h - $[minutes] m - $[secondes] s"
console.log(minuteur);
if(difftempsrestant <0){
    clearInterval(x);
    minuteur.innerHTML = " OUPS - C'est fini";
}
}

var setin = setInterval(comptearebours, 1000)
