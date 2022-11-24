window.onload = () =>{
    var div = document.createElement("div")
    div.setAttribute("id","divTP2")
    var p = document.createElement("p")
    p.innerText = "Langages basé sur ECMAScript"
    div.appendChild(p)
    var li_element = ["JavaScript","JScript","ActionScript","EX4"]
    var ul = document.createElement("ul")
    for (let i = 0; i < li_element.length; i++) {
        
        let li = document.createElement('li')
        li.innerText=li_element[i]
        ul.appendChild(li)
        
    }
    div.appendChild(ul)
    document.body.appendChild(div)
}
