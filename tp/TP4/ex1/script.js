var timeout;
const changeParagraphColor = () =>{
    document.getElementById("paragraph").style.color="red";
}
const darkMode= () =>{
    document.getElementById("p").style.backgroundColor="black";
} 
const lightMode= () =>{
    document.getElementById("p").style.backgroundColor="white";
} 
const wait = () =>{
    timeout=setTimeout(changeImage,3000);
}
const changeImage = () =>{
    var img = document.getElementById("img");
    img.setAttribute("src","jquery.png")
}
const stopWaiting = () =>{
    clearTimeout(timeout);
}