let nome
let idade
let aniversario
let resposta
const ano = 2024

console.log("Qual é o seu nome?")
process.stdin.once('data',function(data) {
    nome = data.toString().trim()
    console.log("Qual é sua idade?")
    
    process.stdin.once('data', function(data){
    idade = parseInt('data'.toString().trim())

            process.stdin.once('data',function(data){
            aniversario =data.toString().trim()
            processamento(nome,idade,aniversario)
            process.exit()
        })
    })
})
         
    function processamento(nome,idade,aniversario) {
        let diferença = ano - idade

        if(aniversario == 'sim'){
            resposta = true
        } else {
            resposta =false
        }

        if(resposta){
            console.log(`oi, ${nome}voce nasceu em ${diferença}`)
        } else {
            console.log(`oi, ${nome} voce nasceu em  ${--diferença}`)
        }
           
    }
