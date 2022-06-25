for(let i=0;i<10;i++){
    for(let j=0;j<10;j++){
        const btn = document.createElement("button");
        btn.classList.add("tile");
        btn.innerText = " ";
        btn.style.color = "#ff0000";
        document.getElementById("tiles").appendChild(btn);
        btn.addEventListener("click",function(){
            btn.style.color = "#ff0000";
            btn.innerText = " ";
        }
        );

    }
    const breakLine = document.createElement("br");
    document.getElementById("tiles").appendChild(breakLine);
}