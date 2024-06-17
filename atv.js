let nome
let idade
const ano = 2024

console.log("Qual é o seu nome?")
process.stdin.once('data',function(data) {
    nome = data.toString().trim()
    console.log("Qual é sua idade?")
    
    process.stdin.once('data', function(data){
    idade = parseInt(data.toString().trim())
        processamento(nome, idade)
        process.exit()
     })
    })

    function processamento (nome,idade) { 
        anonascimento = ano - idade
        console.log(`Ola ${nome}, voce tem ${idade} e nasceu em ${anonascimento}`)

    
}
