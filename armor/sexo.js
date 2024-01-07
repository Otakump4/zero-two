
let missoesConcluidas = 0;

// ... código do jogo ...

// Quando o personagem concluir uma missão, você incrementa a variável "missoesConcluidas"
missoesConcluidas++;

// Verifique se o personagem atingiu a quantidade mínima de missões para avançar para a próxima classe
if (missoesConcluidas >= 20) {
    // Atualize a classe atual do personagem para a próxima classe
    classeAtual = proximaClasse(classeAtual);
    // Reinicie o contador de missões concluídas
    missoesConcluidas = 0;
}

if (resultado < 0.5) {
reply(`📜 *REALIZANDO MISSÃO* 📜

*🔰 MISSÃO: ${nomeMissao}*
*🚹 PERSONAGEM: ${personagem.nome}*
*🪙 RECOMPENSA: ${dins}*`);

  addGanhaMissao(q, Missaog)
 
} else {
  reply("Você perdeu a missão.");
}
