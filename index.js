const colors = ["#ff0000","#0000ff","#00ff00","#ffff00","#ff00ff","#00ffff","#000000","#ffffff"];
// red green blue yellow purple cyan white black
var selected = 0;
for(let i=0;i<10;i++){
    for(let j=0;j<10;j++){
        const btn = document.createElement("button");
        btn.classList.add("tile");
        btn.id = i*10+j;
        btn.innerText = " ";
        btn.style.backgroundColor = "#ffffff";
        document.getElementById("tiles").appendChild(btn);
        btn.addEventListener("click",function(){
            // btn.style.backgroundColor = "#ff0000";
            // btn.innerText = " ";
            //click(i,j);
            challenge(i,j);
        });
    }
    const breakLine = document.createElement("br");
    document.getElementById("tiles").appendChild(breakLine);
}
function send(i,j,c){


    // const btn = document.getElementsByClassName("tile");
    // btn[i*10+j].style.color = "#ff0000";
    // btn[i*10+j].innerText = " ";
    // coods = JSON.stringify({i:i},{j:j},{c:c});
    // console.log(coods);
    // const xhr = new XMLHttpRequest();
    // xhr.open("POST","/click",true);
    // xhr.setRequestHeader("Content-Type","application/json");
    // xhr.send(coods);
    // xhr.onreadystatechange = function(){
    //     if(xhr.readyState == 4 && xhr.status == 200){
    //         const response = JSON.parse(xhr.responseText);
    //         console.log(response);
    //         if(response.status == "success"){
    //             btn[i*10+j].style.color = "#00ff00";
    //             btn[i*10+j].innerText = " ";
    //         }
    //         else{
    //             btn[i*10+j].style.color = "#ff0000";
    //             btn[i*10+j].innerText = " ";
    //         }
    //     }
    // }

    //prototype code
    
    const btn = document.getElementById(selected);
    btn.style.backgroundColor = colors[c];
}
function challenge(i,j){
    selected = i*10+j;
    document.getElementById("prompt").removeAttribute("hidden");
    let red = document.getElementById("red-button");
    let blue = document.getElementById("blue-button");
    let green = document.getElementById("green-button");
    let yellow = document.getElementById("yellow-button");
    let purple = document.getElementById("purple-button");
    let cyan = document.getElementById("cyan-button");
    let white = document.getElementById("white-button");
    let black = document.getElementById("black-button");
    red.addEventListener("click",function(){
        send(i,j,0);
        document.getElementById("prompt").setAttribute("hidden","true");
    }
    );
    blue.addEventListener("click",function(){
        send(i,j,1);
        document.getElementById("prompt").setAttribute("hidden","true");
    }
    );
    green.addEventListener("click",function(){
        send(i,j,2);
        document.getElementById("prompt").setAttribute("hidden","true");
    }
    );
    yellow.addEventListener("click",function(){
        send(i,j,3);
        document.getElementById("prompt").setAttribute("hidden","true");
    }
    );
    purple.addEventListener("click",function(){
        send(i,j,4);
        document.getElementById("prompt").setAttribute("hidden","true");
    }
    );
    cyan.addEventListener("click",function(){
        send(i,j,5);
        document.getElementById("prompt").setAttribute("hidden","true");
    }
    );
    white.addEventListener("click",function(){
        send(i,j,6);
        document.getElementById("prompt").setAttribute("hidden","true");
    }
    );
    black.addEventListener("click",function(){
        send(i,j,7);
        document.getElementById("prompt").setAttribute("hidden","true");
    }
    );

}
function update(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET","/update",true);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            const array = response.array;
            for(let i=0;i<array.length;i++){
                const btn = document.getElementById(i);
                btn.style.backgroundColor = colors[array[i]];
            }
        }
    }
}