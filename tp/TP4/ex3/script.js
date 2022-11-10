const ajoutItem = () =>{
    var item = document.getElementById("item")
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(item.value));
    var button = document.createElement("button")
    button.setAttribute("onclick","deleteItem(this)")
    button.innerHTML = "Delete"
    li.appendChild(button)
    document.getElementById("list").appendChild(li);
    item.value="";
}
const deleteItem = e =>{
    e.parentNode.parentNode.removeChild(e.parentNode);
}