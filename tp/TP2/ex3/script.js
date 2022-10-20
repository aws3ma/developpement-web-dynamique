
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
    window.close();
    
}
const vider = () =>{
    const pseudo = document.getElementById("pseudo");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const consfirmPassword = document.getElementById("confirmPassword");
    pseudo.value=''
    email.value=''
    password.value=''
    consfirmPassword.value=''

}
swal({
    title: "Are you sure?",
    text: "You will not be able to recover this imaginary file!",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "Yes, delete it!",
    closeOnConfirm: false
  },
  function(){
    swal("Deleted!", "Your imaginary file has been deleted.", "success");
  });