console.log('seja bem vindo ao jogo')

const readline= require ('readline')
const rl = readline.createInterface({
input: process.stdin,
output:process.stdout

})
let numero= Math.floor(Math.random()*100)+1
solicitarPalpite()

function solicitarPalpite(){
rl.question('qual seu numero',(answer) => {
    if (answer<numero) {
    console.log ('muito baixo')
    solicitarPalpite()
    } else if(answer>numero) {
       console.log ('muito alto') 
       solicitarPalpite()
    }else{
        console.log ('Parabens')
    }
})
}
