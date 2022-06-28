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
            click(i,j);
        }
        );

    }
    const breakLine = document.createElement("br");
    document.getElementById("tiles").appendChild(breakLine);
}
function click(i,j){
    const btn = document.getElementsByClassName("tile");
    btn[i*10+j].style.color = "#ff0000";
    btn[i*10+j].innerText = " ";
    coods = JSON.stringify({i:i},{j:j});
    console.log(coods);
    const xhr = new XMLHttpRequest();
    xhr.open("POST","/click",true);
    xhr.setRequestHeader("Content-Type","application/json");
    xhr.send(coods);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            if(response.status == "success"){
                btn[i*10+j].style.color = "#00ff00";
                btn[i*10+j].innerText = " ";
            }
            else{
                btn[i*10+j].style.color = "#ff0000";
                btn[i*10+j].innerText = " ";
            }
        }
    }
}