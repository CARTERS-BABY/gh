var nosex =0
var nosey = 0
var pulsodireito = 0 
var pulsoesquerdo = 0 
var diferença = 0 
function setup(){
video = createCapture(VIDEO)
video.size(550 , 500)
canvas = createCanvas (550 , 410 )
canvas.position(560 , 150 )
poseNet = ml5.poseNet(video , modelo)
poseNet.on('pose', resultado )
}
function draw(){
    background('#802be2')
    document.getElementById('quadrado').innerHTML = diferença + 'px'
    fill('#e2b222b')
 
    text('Felipe' , nosex , nosey )
    textSize(diferença)

}
function modelo(){
    console.log('carregado')
}
function resultado(resultados){
if(resultados.length>0){
  //  console.log(resultados)
    nosex = resultados[0].pose.nose.x
    nosey = resultados[0].pose.nose.y
    console.log(nosex , nosey)
    pulsodireito = resultados[0].pose.rightWrist.x
    pulsoesquerdo = resultados[0].pose.leftWrist.x
    diferença = Math.floor(pulsoesquerdo - pulsodireito)

}

}