var nome = ''
console.log('escreva seu nome')

process.stdin.on('data', function(data) {
    nome = data.toString()

var saudacao = "olá " + nome
    console.log(saudacao)
    process.exit()
})
