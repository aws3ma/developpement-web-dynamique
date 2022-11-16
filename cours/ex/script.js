const defaultLogin = "admin";
const defaultPwd = "admin";
const verifLoginMp = () => {
  const login = document.getElementById("cnxLogin");
  const mp = document.getElementById("cnxPassword");
  if (!(login.value === defaultLogin && mp.value === defaultPwd)) {
    alert("Veuillez verifier votre données");
  } else {
    alert("Bienvenue");
  }
}

const verifPassword = () => {
  const pwd = document.getElementById("pwd");
  if (pwd.value.length < 6) {
    pwd.style.color = "red";
    return;
  }
  if (pwd.value.length < 10) {
    pwd.style.color = "orange";
    return;
  }
  if (pwd.value.length > 10) {
    pwd.style.color = "green";
    return;
  }
};
const verif = (i) => {
    if(!i.value){
        i.classList.add("error");
        return
    }
    i.classList.remove("error")

};
const Valider = () => {
    const inscriptionForm = document.forms["inscription"].getElementsByTagName("input");
    for (let i = 0; i < inscriptionForm.length; i++) {
        if(!inscriptionForm[i].value){
            alert("Veuillez remplir tout les champs ");
            return
        }
    }
    alert("Success")
}
