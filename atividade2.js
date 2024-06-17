let numero
        console.log("digite um numero")
            process.stdin.once('data', function(data){
            numero = data.toString().trim()
            processamento(numero)
            process.exit()
        
        })

function processamento(numero){
            
     if (numero == 0){
     console.log("0 numero que vc digitou é zero.")
    } else if (numero %2 == 0) {
    console.log("o numero que vc digitou é par.")
    } else {
    console.log("O numero que vc digitou é ímpar.")
    }}
