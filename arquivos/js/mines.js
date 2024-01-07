async function getMinesPositions(minecor, mines_qnts) {
var mines_cord = []
while(mines_cord.length != mines_qnts) {
i = Math.floor(Math.random() * minecor.length + 0);
if (!mines_cord.includes(minecor[i])) {
mines_cord.push(minecor[i])
}
}
return mines_cord
}

const MinesHelp = (prefix) => {
return `🗺 *MANUAL DO JOGO*
-
O jogo do campo minado consiste em um campo de minas escondidas em que o jogador deve escolher uma coordenada onde não possui mina, a cada 3 acertos o jogador tem o direito de uma dica de onde uma ou mais das minas estão localizadas. 
-
Caso ele escolha uma coordenada onde tem uma mina a sequências de acertos e suas dicas são zeradas e o jogador perde uma tentativa, ao jogador perder todas as tentativas ele perde o jogo, caso ele consiga encontra todas as coordenadas onde não possui mina ele vence o jogo.
-
⚠️ Dificuldades:
-
*1.* Easy - Possui 5 minas e 3 tentativas
*2.* Normal - Possui 8 minas e 5 chances
*3.* Hard - Possui 12 minas e 8 chances
-
⛏️ *Uso dos comandos:*
-
• *Iniciar jogo:* ${prefix}minado [dificuldade]
    As dificuldades são *easy, normal e hard*, veja acima a explicação sobre cada uma delas.
      • Exemplo: *${prefix}minado easy*
-
• *${prefix}mina [coord1, coord2]*
    Jogar em uma ou mais coordenadas.
      • Exemplo: *${prefix}mina a1 b2 c3 d4 d5*
-
• *${prefix}minatips*
    • Dá dica da localização de uma bomba em uma fileira ou coluna.
-
• *${prefix}minareset*
    • Reseta a partida atual de campo minado.`
}

module.exports =  { getMinesPositions, MinesHelp }