var time_val = 60;
var score =0;
var hitval = 0;
function makeBubble(){
    var clutter = ''
    for(let i=1;i<=105;i++){
        let rn = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${rn}</div> `
    }
    document.querySelector("#pbottom").innerHTML = clutter
}

function hit(){
    hitval = Math.floor(Math.random()*10)
    document.querySelector("#hit").textContent = hitval

}

function increaseScore(){
    score+=10;
    document.querySelector("#score").textContent = score

}
document.querySelector("#pbottom").addEventListener("click",(e)=>{
    var clickedBubble = Number(e.target.textContent)
    if(clickedBubble == hitval){
        // makeBubble();
        increaseScore()
        hit()
    }
})


function runTime(){
    var ti = setInterval(() => {
        makeBubble()
    }, 2000);
    var timer = setInterval(() => {
        if(time_val>0){
        time_val--;
        document.querySelector("#timer").textContent = time_val
        }
        else{
            document.querySelector("#pbottom").innerHTML = `<h1>GAME OVER</h1>`
            clearInterval(timer)
            clearInterval(ti)
            document.querySelector("#pbottom").addEventListener('click',()=>{
                location.reload()
            })
        }
    }, 1000);

}
let start = document.getElementById('start')
start.addEventListener('click',()=>{
    start.style.display = 'none'
    hit()
    runTime()
    makeBubble()
})
