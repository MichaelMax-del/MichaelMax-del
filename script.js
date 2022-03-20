let about = document.querySelector('#btn');
let des = document.querySelector("#desc");
about = document.addEventListener("click", function(){
    if (des.style.display === "none"){
        des.style.display = "flex";
    }
    else{
        des.style.display = "none";
    }
});

