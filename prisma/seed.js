const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const author = {
  userautor: "Arthur",
  avatar: "/assets/autor/logo_avatar.jpeg",
  email: "arthur@prisma",
}

async function main() {
  // Upsert do autor Karen
  const Arthur = await prisma.user.upsert({
    where: { userautor: author.userautor },
    update: { email: "arthur@prisma.com" },
    create: author,
  })

  // Dados dos posts
  const posts = [
    {
      titulo: " Darksiders Está de Volta! Tudo o que Sabemos sobre o Novo Jogo",
      slug: "darksiders-esta-de-volta",
      titulo2: "Um Breve Histórico da Franquia",
      titulo3: "O Novo Jogo",
      titulo4: "",
      titulo5: "",
      titulo6: "",
      titulo7: "",
      titulo8: "",
      titulo9: "",
      titulo10: "",
      titulo11: "",
      texto:
        "E aí, gamers! Preparados para mais uma aventura épica? A THQ Nordic acaba de confirmar que a franquia Darksiders está de volta com um novo jogo! Para quem não conhece, Darksiders é uma série de ação e aventura que coloca os jogadores no papel de um dos Quatro Cavaleiros do Apocalipse, em uma jornada para restaurar o equilíbrio entre o Céu e o Inferno.",
      texto2:
        "Antes de mergulharmos nas novidades, vamos relembrar um pouco da história da franquia:/n• Darksiders: O primeiro jogo da série, lançado em 2010, apresentou War, o primeiro Cavaleiro a ser invocado antes da hora, e sua jornada para limpar seu nome. /n• Darksiders II: Em 2012, foi a vez de Death, o segundo Cavaleiro, buscar a ressurreição de seu irmão./n* Darksiders III: Lançado em 2018, o terceiro jogo trouxe Fury, a terceira Cavaleira, em uma busca para capturar os Sete Pecados Capitais./n * Darksiders Genesis: Um prequel lançado em 2019, que apresentou Strife, o quarto Cavaleiro, em uma aventura que se passa antes dos eventos do primeiro jogo.",
      texto3:
        "E o que podemos esperar do novo Darksiders? Ainda não temos muitos detalhes, mas o teaser lançado pela THQ Nordic já deixou os fãs ansiosos. No vídeo, é possível verificar a convocação dos Cavaleiros do Apocalipse pelo Charred Council, que é a entidade responsável por manter o equilíbrio do universo. /n O que sabemos até agora:/n* Confirmação: A THQ Nordic confirmou oficialmente o desenvolvimento de um novo jogo da franquia./n* Teaser: Um teaser intrigante foi lançado, gerando diversas especulações entre os fãs./n* Detalhes: A maioria dos detalhes, como a história, os personagens jogáveis e a data de lançamento, ainda são desconhecidos./nO que você acha? Qual Cavaleiro você gostaria de controlar no novo jogo? Deixe sua opinião nos comentários!",
      texto4: "",
      texto5: "",
      texto6: "",
      texto7: "",
      texto8: "",
      texto9: "",
      texto10: "",
      texto11: "",
      imagem: "/assets/img/darksiders/darksiders.jpg",
      imagem2: "",
      imagem3: "/assets/img/darksiders/darksiders2.jpg",
      imagem4: "",
      imagem5: "",
      imagem6: "",
      imagem7: "",
      imagem8: "",
      imagem9: "",
      imagem10: "",
      imagem11: "",
      video: "",
      authorId: Arthur.id, // Associar o post ao autor Karen
      tempoLeitura: "2",
      data: new Date(),
    },
  ]

  // Inserindo os posts
  for (const post of posts) {
    await prisma.post.upsert({
      where: { slug: post.slug },
      update: {},
      create: post,
    })
  }

  console.log("Seed enviada com sucesso")
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
