const info = {"version":"0.0.3", "date":"Dec 1 2023"}
const canvas = document.getElementById("waveCanvas")

var energyDecay = false

var ctx = canvas.getContext("2d");
    ctx.canvas.width  = 1200;
    ctx.canvas.height = window.innerHeight - 50;
    ctx.lineWidth = 5;

var positionX = 0
var positionY = canvas.height / 2
var timesRun = 0

function drawBg(){
    document.getElementById("oldAmp").innerText = `Original amplitude: ${amplitude}`
    
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "brown";
    
    ctx.fillRect(0, canvas.height / 4, canvas.width, canvas.height / 2);
    ctx.fillStyle = "white";
    
    numberOfHarmonics = newAmp / 60
    ctx.fillText(`Hey`, canvas.width - 50, canvas.height - 50);
    ctx.fillText(`Ver ${info.version} | ${info.date}`, canvas.width - 100, canvas.height - 25);
    ctx.fillText(`Number of harmonics: ${Math.round(numberOfHarmonics)}`, Math.round(canvas.width - 100) / 2, canvas.height - 50, 200, 20);
}
drawBg();


var speed = setInterval(function() {
    renderTheThing()
}, 16.7);

var amplitude = 600;
var newAmp = amplitude;

function renderTheThing() {   
    timesRun += 1
    
    if(positionX >= canvas.width){
        drawBg()
        positionX = 0
    }
      
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.moveTo(positionX, positionY);
    
    lengthOfHarmonic = /*Math.round(*/ canvas.width / numberOfHarmonics //)
    
    originalX = positionX
    positionX += lengthOfHarmonic
    
    oddOrEven = (timesRun | 1) === timesRun ? 'Odd' : 'Even';
    if (oddOrEven == 'Odd') {
        theHight = positionY + newAmp
    } else {
        theHight = positionY - newAmp
    }    
    ctx.quadraticCurveTo(positionX - lengthOfHarmonic, theHight, positionX, positionY, positionX, theHight);
    
    console.log(`x:${positionX} - y:${positionY} || length: ${lengthOfHarmonic} - amplitude: ${newAmp} `)
    
    ctx.stroke();
}

document.getElementById("restart").addEventListener("click", function (e) {
    this.innerText = "reloading"
    location.reload();
});

document.addEventListener("keydown", (event) => {
    console.log(event.code)
    if (event.code === "Enter")
        location.reload();
})

document.getElementById("amp").addEventListener('input', function (evt) {
    amplitude = parseInt(this.value)
    newAmp = parseInt(this.value)
    positionX = 0
    timesRun = 0
    drawBg()
});


var devtools = function() {};
        
devtools.toString = function() {
    console.warn(`
        
        ____ ____ ____  ___   ___   ___  _____   __    _    
         / /  / /  / / | |_) / / \\ | |_)  | |   / /\\  | |   
        /_/  /_/  /_/  |_|   \\\_\\\_/ |_| \\  |_|  /_/--\\ |_|__ 

    `)
    clearInterval(checkForHi)
}
        
const checkForHi = setInterval(()=>{
    // console.profile(devtools)
    console.profileEnd(devtools)
}, 1000)