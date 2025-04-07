document.addEventListener("mousemove", function(e){
    let div = document.createElement("div");
    div.setAttribute("class", "dot-tails");
    div.style.left = `${e.clientX}px`;
    div.style.top =  `${e.clientY}px`;
    document.body.appendChild(div);
    let x = Math.floor(Math.random()* 255);
    let y = Math.floor(Math.random()* 255);
    let z = Math.floor(Math.random()* 255);
    div.style.backgroundColor = `rgb( ${x} , ${y}, ${z} )`;

    setTimeout(function (){
        div.remove();
    }, 5000);
});

