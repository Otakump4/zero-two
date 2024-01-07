const fs = require('fs')
 
exports.garticArchives = [
{
pergunta: 'Aplicativo',
imagem: 'https://telegra.ph/file/dfa10e1cd64bfd575b26a.jpg',
letra_inicial: 'N',
contem_traços: '❌️️',
resposta: 'NETFLIX'
},
{
pergunta: 'Aplicativo',
imagem: 'https://telegra.ph/file/070fbfa1cccd65681f3fa.jpg',
letra_inicial: 'F',
contem_traços: '❌️️',
resposta: 'FACEBOOK'
},
{
pergunta: 'Desenho',
imagem: 'https://telegra.ph/file/1e344b9cde13d5a6c6095.jpg',
letra_inicial: 'TO',
contem_traços: '❌️️',
resposta: 'TOM E JERRY'
},
{
pergunta: 'Objeto',
imagem: 'https://telegra.ph/file/af0e70ea5a92cbfc71f43.jpg',
letra_inicial: 'GU',
contem_traços: '✅️️️',
resposta: 'GUARDA-CHUVA'
},
{
pergunta: 'Profissão',
imagem: 'https://telegra.ph/file/cbea80472e3d2624676a6.jpg',
letra_inicial: 'J',
contem_traços: '❌️️️️',
resposta: 'JUIZ'
},
{
pergunta: 'Aplicativo',
imagem: 'https://telegra.ph/file/b5a9a0de5e222b5084a8a.jpg',
letra_inicial: 'SN',
contem_traços: '❌️️',
resposta: 'SNAPCHAT'
},
{
pergunta: 'Países',
imagem: 'https://telegra.ph/file/5721a0cde0166bee675e5.jpg',
letra_inicial: 'E',
contem_traços: '❌️️',
resposta: 'ESPANHA'
},
{
pergunta: 'Objeto',
imagem: 'https://telegra.ph/file/bdb05184d2d6f5a7d1ecf.jpg',
letra_inicial: 'D',
contem_traços: '❌️️',
resposta: 'DARDOS'
},
{
pergunta: 'Objeto',
imagem: 'https://telegra.ph/file/317913121ec9ca6aae71b.jpg',
letra_inicial: 'D',
contem_traços: '❌️️',
resposta: 'DOMINÓ'
},
{
pergunta: 'Objeto',
imagem: 'https://telegra.ph/file/63eca8c97ed165bfecfe5.jpg',
letra_inicial: 'C',
contem_traços: '❌️️',
resposta: 'CANADÁ'
},
{
pergunta: 'Jogos',
imagem: 'https://telegra.ph/file/68ea5f4b182ae4c501a32.jpg',
letra_inicial: 'X',
contem_traços: '❌️️',
resposta: 'XADREZ'
},
{
pergunta: 'Filme',
imagem: 'https://telegra.ph/file/a29ac8b0638d9e23bdab0.jpg',
letra_inicial: 'A',
contem_traços: '❌️️',
resposta: 'A ORIGEM'
},
{
pergunta: 'Filme',
imagem: 'https://telegra.ph/file/b3e2aaca939ed0cdf7a73.jpg',
letra_inicial: 'OS',
contem_traços: '❌️️',
resposta: 'OS SETE SAMURAIS'
},
{
pergunta: 'Filme',
imagem: 'https://telegra.ph/file/ab11fa68eda5abe19562b.jpg',
letra_inicial: 'SE',
contem_traços: '❌️️',
resposta: 'SENHOR DOS ANÉIS'
},
{
pergunta: 'Filme',
imagem: 'https://telegra.ph/file/de030e592fecdc2cf0d20.jpg',
letra_inicial: 'JU',
contem_traços: '❌️️',
resposta: 'JUMANJI'
},
{
pergunta: 'Filme',
imagem: 'https://telegra.ph/file/aafcb73c2dd10aef1bd47.jpg',
letra_inicial: 'S',
contem_traços: '❌️️',
resposta: 'SONIC'
},
{
pergunta: 'Série',
imagem: 'https://telegra.ph/file/e0c905d9630bf9d36df77.jpg',
letra_inicial: 'TH',
contem_traços: '❌️️',
resposta: 'THE WALKING DEAD'
},
{
pergunta: 'Desenho',
imagem: 'https://telegra.ph/file/d30cac0c8bb2159d38192.jpg',
letra_inicial: 'SI',
contem_traços: '❌️️',
resposta: 'SIMPSONS'
},
{
pergunta: 'Série',
imagem: 'https://telegra.ph/file/c2a993a353fcca61242e4.jpg',
letra_inicial: 'ST',
contem_traços: '❌️️',
resposta: 'STRANGER THINGS'
},
{
pergunta: 'Série',
imagem: 'https://telegra.ph/file/fac611a1d9e2c2fc14957.jpg',
letra_inicial: 'PE',
contem_traços: '❌️️',
resposta: 'PEAKY BLINDERS'
},
{
pergunta: 'Série - Documentário',
imagem: 'https://telegra.ph/file/ecd17a4b75e4541bd20b8.jpg',
letra_inicial: 'CH',
contem_traços: '❌️️',
resposta: 'CHERNOBYL'
},
{
pergunta: 'Países',
imagem: 'https://telegra.ph/file/05164ea8e02880f74010b.jpg',
letra_inicial: 'C',
contem_traços: '❌️️',
resposta: 'CHINA'
},
{
pergunta: 'Países',
imagem: 'https://telegra.ph/file/24161e5698f3874c285eb.jpg',
letra_inicial: 'S',
contem_traços: '❌️️',
resposta: 'SUÍÇA'
},
{
pergunta: 'Países',
imagem: 'https://telegra.ph/file/0207859d0fcb2c7624f1b.jpg',
letra_inicial: 'S',
contem_traços: '❌️️',
resposta: 'COREIA DO SUL'
},
{
pergunta: 'Países',
imagem: 'https://telegra.ph/file/4890a8e71a7cc8d3862d0.jpg',
letra_inicial: 'AR',
contem_traços: '❌️️',
resposta: 'ARGENTINA'
},
{
pergunta: 'Países',
imagem: 'https://telegra.ph/file/dfb6e013f52a018032625.jpg',
letra_inicial: 'P',
contem_traços: '❌️️',
resposta: 'PORTUGAL'
},
{
pergunta: 'Países',
imagem: 'https://telegra.ph/file/8d238d4ffa865dd7009a7.jpg',
letra_inicial: 'F',
contem_traços: '❌️️',
resposta: 'FRANÇA'
}
]