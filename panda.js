const myStyle = document.querySelectorAll("h2");
for(let i=0; i<myStyle.length; i++){
    myStyle[i].style.color="lightblue";
}

document.getElementById('backpack').style.backgroundColor = "tomato";

const cardStyle = document.querySelectorAll(".card");
for(let i=0; i<cardStyle.length; i++){
    cardStyle[i].style.borderRadius="30px";
}

function buttonAdd(){
    console.log("I am clicked");
}

const buyBtnCollection = document.getElementsByClassName('btn');
for(buyBtn of buyBtnCollection){
    buyBtn.addEventListener('click', function(event){
        event.target.parentNode.removeChild(event.target);
    })
}