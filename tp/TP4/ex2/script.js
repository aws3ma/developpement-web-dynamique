const validation = () =>{
    var champ = document.getElementById("text");
    var err = document.getElementById("error");
    if(champ.value ==""){
        err.innerHTML = "Le champ ne peut etre vide";
    }else{
        err.innerHTML = "";
        alert("Le formulaire peut etre envoyer")
    }
}