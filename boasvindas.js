var nome = ''
console.log('Escreva Seu Nome')

process.stdin.on('data', function(data) {
    nome = data.toString()

var saudacao = "olá " + nome
    console.log(saudacao)
    process.exit()
})
