let prova1
let prova2
let provas =[]
console.log('Primeira nota;')
process .stdin.once(`data`,function(data){
    prova1 = parseFloat(data.toString().trim())
    console.log("segunda nota: ")
    process.stdin.once('data',function(data){
        prova2 = parseFloat(data,toString().trim())
        processamento(prova1, prova2)
        process.exit()
    })
})
function processamento(prova1, prova2){
    provas.push(prova1,prova2)
    let calculo = (provas[0] + provas[1])/2
    console.log (`media das notas é : ${calculo}`)
}