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
      titulo:
        "Prepare-se para agosto! A PS Plus te presenteia com esses 3 jogaços!",
      slug: "ps-plus-agosto",
      titulo2: "LEGO Star Wars: The Skywalker Saga",
      titulo3: "Five Nights at Freddy's: Security Breach",
      titulo4: "Ender Lilies: Quietus of the Knights",
      titulo5: "Considerações Finais:",
      titulo6: "",
      titulo7: "",
      titulo8: "",
      titulo9: "",
      titulo10: "",
      titulo11: "",
      texto:
        "Galera! Preparados para mais um mês de jogos incríveis na PS Plus Essencial? Agosto chegou com tudo e a Sony não decepcionou! Para te ajudar a aproveitar ao máximo sua assinatura, separamos tudo sobre os 3 jogos que vão te fazer passar horas grudado no controle",
      texto2:
        "Que tal reviver toda a saga Star Wars de uma forma divertida e cheia de humor? Em LEGO Star Wars: The Skywalker Saga, você poderá controlar seus personagens favoritos e construir, batalhar e explorar a galáxia. Com gráficos coloridos, missões épicas e muito conteúdo desbloqueável, esse jogo é perfeito para fãs de todas as idades.  ",
      texto3:
        "Se você gosta de um bom susto, prepare-se para passar noites agitadas em Five Nights at Freddy's: Security Breach. Neste novo capítulo da franquia, você explorará uma pizzaria assustadora repleta de animatrônicos que querem te pegar. Com uma jogabilidade mais livre e uma atmosfera ainda mais intensa, este é um jogo que vai te deixar à beira do seu assento.",
      texto4:
        "Para quem busca uma experiência mais sombria e desafiadora, Ender Lilies: Quietus of the Knights é a escolha perfeita. Neste metroidvania, você controlará uma jovem que precisa purificar uma terra corrompida por uma maldição. Com gráficos belíssimos, uma trilha sonora envolvente e uma jogabilidade desafiadora, este jogo é um prato cheio para os fãs do gênero.",
      texto5:
        "Qual desses jogos você mais está ansioso para jogar? Compartilhe nos comentários e não se esqueça de seguir nosso blog para ficar por dentro das últimas novidades do mundo dos games.",
      texto6: "",
      texto7: "",
      texto8: " ",
      texto9: "",
      texto10: "",
      texto11: "",
      imagem: "/assets/img/ps-plus-agosto/psplus.png",
      imagem2: "/assets/img/ps-plus-agosto/lego.jpg",
      imagem3: "/assets/img/ps-plus-agosto/five.jpg",
      imagem4: "/assets/img/ps-plus-agosto/ender.jpg",
      imagem5: "",
      imagem6: "",
      imagem7: "",
      imagem8: "",
      imagem9: "",
      imagem10: "",
      imagem11: "",
      video: "",
      authorId: Arthur.id,
      tempoLeitura: "2",
      data: new Date(),
    },
  ]

  // Inserindo os posts
  for (const post of posts) {
    await prisma.post.upsert({
      where: { slug: post.slug },
      update: {
        titulo6: post.titulo6,
      },
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
