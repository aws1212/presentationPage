
//variable winner
let winRed = false;

//Script carGreen
const carGreen = document.getElementById("carGreen");
const carRed = document.getElementById("carRed");
const btn_carRed = document.getElementById("btn_carRed");
const register = document.getElementById("register");
const btn_Register = document.getElementById("btn_Register");
const btn_TryAgain = document.getElementById("btn_TryAgain");
const textUser = document.getElementById("textUser");
const textTime = document.getElementById('textTime');

let date = Date.now();

let timeStart = 0;
let timeFinish = 0;
let timeInit = false;
let clickNum = 1;
let range = Math.random() * (20 - 10) + 10;
let rangeAround = Math.round(range);

let time = 0;
let timeSend = 0;

//Animation car Green
carGreen.style.animation = `moveToGreen ${rangeAround}s forwards`;


//Condition cars
function funWinner(){
    if(winRed){        
        console.timeEnd('clickTime');
        timeFinish = window.performance.now();
        time = timeFinish - timeStart;
        timeSend = Math.round(time/1000);
        textTime.value = `Winner time ${timeSend} seconds`;
        register.style.display = "inline-block";
        winRed == false;
    }
}


//Script carRed
btn_carRed.addEventListener("click",()=>{
    clickNum++;
    if(!timeInit){
        console.time('clickTime');
        timeStart = window.performance.now();
        timeInit = true;
    }    
    if(carRed.style.marginLeft != "96%"){
        carRed.style.marginLeft = `${clickNum}%`;
    }
    else{
        if(!winRed){
            winRed = true;            
            funWinner();
        }
    }
})


//btn Resiter
btn_Register.addEventListener("click",(e)=>{
    e.preventDefault();
    if(textUser.value != ""){
        
        let value = textUser.value;
        //Json post
        let jsonValue = {
            "user": value,
            "time": timeSend    
        };

        try{
            fetch("http://localhost:5500/newUser",{
                method: "POST",
                body: JSON.stringify(jsonValue),
                headers: {"Content-type":"application/json"}
            }).then(res => res.json())
                .then(res => {
                    if (res[0] == 1){
                        alert("New register added")
                    }
                    else{
                        alert("Error register")
                    }
                });
        }
        catch(err){
            console.log(err);
        }

    }
    else{
        alert("Inserte su usuario");
    }
})

//btn Try again
btn_TryAgain.addEventListener("click",(e)=>{
    e.preventDefault();
    register.style.display = "none";
    this.location.reload();
})


//Time function
const interval = setInterval(()=>{
    if(!winRed){
        this.location.reload();
    }
    clearInterval(interval);    
},rangeAround * 1000)

