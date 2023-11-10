const info = {"version":"0.0.1", "date":"Nov 3 2023"}
const canvas = document.getElementById("waveCanvas")

var ctx = canvas.getContext("2d");
    ctx.canvas.width  = 1200;
    ctx.canvas.height = window.innerHeight - 50;
    ctx.lineWidth = 5;

var positionX = 0
var positionY = canvas.height / 2
var timesRun = 0

function drawBg(){
    document.getElementById("oldAmp").innerText = `Current amplitude: ${amplitude}`
    
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "brown";
    
    ctx.fillRect(0, canvas.height / 4, canvas.width, canvas.height / 2);
    ctx.fillStyle = "white";
    
    numberOfHarmonics = newAmp / 60
    ctx.fillText(`Hey`, canvas.width - 50, canvas.height - 50);
    ctx.fillText(`Ver ${info.version} | ${info.date}`, canvas.width - 100, canvas.height - 25);
    ctx.fillText(`Numbed of harmonics: ${Math.round(numberOfHarmonics)}`, Math.round(canvas.width - 100) / 2, canvas.height - 50, 200, 20);
}
drawBg();


var speed = setInterval(function() {
    renderTheThing()
}, 16.7);

var amplitude = 1000;
var newAmp = amplitude;

function renderTheThing() {
    ctx.fillStyle = "black";
    ctx.fillStyle = "white";
    numberOfHarmonics = newAmp / 60
    timesRun+=1
    oddOrEven = (timesRun | 1) === timesRun ? 'Odd' : 'Even';
    
    if(positionX >= canvas.width){
        drawBg()
        positionX = 0
        newAmp -= Math.round(newAmp / 10)
        document.getElementById("currentAmp").innerText = `Current amplitude: ${newAmp}`
    }
    
    distance = canvas.width / numberOfHarmonics
    
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.moveTo(positionX, positionY);
    originalX = positionX
    positionX += distance
    
    
    if(oddOrEven == 'Odd' || numberOfHarmonics == 1){
        ctx.quadraticCurveTo(positionX - distance, positionY-newAmp, positionX, positionY, positionX, positionY);
    } else {
        ctx.quadraticCurveTo(positionX - distance, positionY+newAmp, positionX, positionY, positionX, positionY); 
    }
    ctx.stroke();
}
        
var devtools = function() {};
        
devtools.toString = function() {
    console.warn(`
        
        ____ ____ ____  ___   ___   ___  _____   __    _    
         / /  / /  / / | |_) / / \\ | |_)  | |   / /\\  | |   
        /_/  /_/  /_/  |_|   \\\_\\\_/ |_| \\  |_|  /_/--\\ |_|__ 
        
                    Hi Mr.Bornstein
        
    `)
    clearInterval(checkForHi)
}
        
const checkForHi = setInterval(()=>{
    // console.profile(devtools)
    console.profileEnd(devtools)
}, 1000)