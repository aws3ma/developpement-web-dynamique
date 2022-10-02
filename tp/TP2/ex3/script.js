const affichage = () => {
    const pseudo = document.getElementById("pseudo").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if(!pseudo || !email || !password){
        alert("souvenez-vous de vos informations ?")
    }
    else{
        alert("Vous ètes connecté entant que : "+pseudo+"\nVotre mot de passe est : "+password+"\nVotre e-mail est : "+email)
    }
}
const fermer = () =>{
    close();
    
}