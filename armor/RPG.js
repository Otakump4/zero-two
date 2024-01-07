
/*
case 'missao-f':
  if (!isRegistro) return reply('Você não está registrado. Digite *${prefix}registrar* para se cadastrar.');
  if (!q) return reply(`Digite o nome do personagem. Que Voce Início a Missão Por exemplo: *${prefix}missao-tesouro tailong*`);

  const dataxaa = fs.readFileSync('./RPG/personagem.json');
  const personagensssc = JSON.parse(dataxaa);

  mostrarPersonagedmm(q);

  function mostrarPersonagedmm(nome) {
    const personagemdzz = personagensssc.find(p => p.nome === nome);
    if (personagemdzz) {
      var missao = "Você Não Têm Missao Disponíveis";
      var missao2 = "F";
      var MisaoConcluida = personagemdzz.totalm;

      executarMissao(missao, personagemdzz);
      executarMissao(missao2, personagemdzz);
      
  

  function executarMissao(nomeMissao, personagem) {
  
    if (personagem.classi && personagem.classi === nomeMissao) {
      dins = Math.floor((Math.random() * 233) * 2);
      
      // Executar a lógica da missão aqui
            var MisaoConcluida = personagemdzz.totalm;

let missoesConcluidas = MisaoConcluida;

const resultado = Math.random(); // Gera um número aleatório entre 0 e 1
if (resultado < 0.5) {
// ... código do jogo ...
let missaoConcluida = true; 
Missaog = Math.floor((Math.random() * 2) + 2);
let missoesConcluidas = MisaoConcluida;
reply(`📜 *REALIZANDO MISSÃO* 📜

*🔰 MISSÃO: ${nomeMissao}*
*🚹 PERSONAGEM: ${personagem.nome}*
*🪙 RECOMPENSA: ${dins}*`);

  addGanhaMissao(q, Missaog)
 
} else {
  reply("Você perdeu a missão.");
  let missaoConcluida = false; 
}
// Quando o personagem concluir uma missão, você incrementa a variável "missoesConcluidas"
missoesConcluidas++;

// Verifique se o personagem atingiu a quantidade mínima de missões para avançar para a próxima classe
if (missoesConcluidas >= 20) {
    // Atualize a classe atual do personagem para a próxima classe
    //classeAtual = proximaClasse(classeAtual);
    // Reinicie o contador de missões concluídas
    addClass(q, "E")
    //missoesConcluidas = 0;
    ZerarMissao(q, 0)
    reply(`parabéns seu personagem foi para próxima classe é suas missões foram zeradas agora para iniciar a missão da classe *E* digite ${prerix}missao-e ou digite ${prefix}personagem *nome do seu personagem* para mais informações`)
      }
      
    } else {
      reply(`Esta Classe não está disponível para o personagem ${personagem.nome} Ou Voce Estar Sem Missao Digital ${prefix}*iniciar-missao*`);
    }
  }
  const sd = "Você Não Têm Missao Disponíveis";
  addMissao(q, sd, sd, sd);
      } else {
      reply('Personagem não encontrado.');
    }
    }
break;

case 'rank':
const personagensrank = require('./RPG/personagem.json');

// Função para comparar os atributos e ordenar os personagens
function compararAtributo(atributo) {
  return function(a, b) {
    return b[atributo] - a[atributo];
  }
}

// Ordenar os personagens pelo atributo de ataque em ordem decrescente
const rankingAtaque = personagensrank.sort(compararAtributo('ataque'));

// Obter os cinco primeiros do ranking de ataque
const top5Ataque = rankingAtaque.slice(0, 5);

// Imprimir o resultado do ranking de ataque
console.log("Ranking de Ataque:");

top5Ataque.forEach((personagem, index) => {
let leaderboardlvl = ' TOP 5 MAIS EVOLUÍDOS\n\n'
let nom = 0

for (let i = 0; i < 5; i++) {
nom++
leaderboardlvl += `
❤️ *HEROI: ${nom} ${personagem.nome}*
⚔️ *ATK: ${personagem.ataque}*
\n`

}
leaderboardlvl += `TOP 5 MAIS EVOLUÍDOS`
zenitsu.sendMessage(from, {text: leaderboardlvl}, {quoted: info})
});
break
*/