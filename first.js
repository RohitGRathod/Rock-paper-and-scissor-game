let choices=document.querySelectorAll(".image");
let msg = document.querySelector(".msg");
let userscore=document.querySelector("#userscore");
let compscore=document.querySelector("#compscore");
let resetgame = document.querySelector(".reset")
let userwincount = 0;
let compwincount = 0;

const compchoicegen = () =>{
    const option = ["rock","paper","scissor"];
    const num = Math.floor(Math.random()*3);
    return option[num];
}
const showwinner=(userwon,userchoice,compchoice)=>{
    if(userwon){
        msg.innerText =`You won,${userchoice} beats ${compchoice}`;
        userwincount++;
        userscore.innerText=`${userwincount}`;
        msg.classList.add("won");
        msg.classList.remove("lost");
    }
    else{
        msg.innerText =`You Lost,${compchoice} beats ${userchoice}`;
        compwincount++;
        compscore.innerText=`${compwincount}`;
        msg.classList.remove("won");
        msg.classList.add("lost");
    }
}
const gamedraw =() =>{
    msg.innerText = "Game drawn";
    msg.classList.remove("won");
    msg.classList.remove("lost");
}

const playgame=(userchoice)=>{
    const compchoice = compchoicegen();

    if(userchoice === compchoice)
    {
        console.log("Game drawn");
        gamedraw();
    }
    else{
        let userwon = true;
        if(userchoice === "rock")
        {
            userwon = compchoice ==="paper"?false:true;
        }
        else if(userchoice === "paper")
        {
            userwon = compchoice === "scissor"?false:true;
        }
        else{
            userwon = compchoice === "rock"?false:true;
        }
        showwinner(userwon,userchoice,compchoice);
    }
}
resetgame.addEventListener("click",()=>{
    userwincount = 0;
    compwincount = 0;
    userscore.innerText = userwincount;
    compscore.innerText = compwincount;
    msg.classList.remove("won");
    msg.classList.remove("lost");
    msg.innerText = "play your move";
})

choices.forEach((choice) => {
    choice.addEventListener("click",()=>
{
    let userchoice = choice.getAttribute("id");
    playgame(userchoice);
})
});