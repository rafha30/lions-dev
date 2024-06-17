let numero
let numeroaleatorio
console.log ('Qual numero de lados do dado')

process.stdin.once ('data', function(data) {
   numero= parseInt(data.toString().trim())
    numeroaleatorio= Math.floor(Math.random()*numero +1)
    console.log(numeroaleatorio)
    process.exit()

    })






