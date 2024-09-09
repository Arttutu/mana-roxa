const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const author = {
  userautor: "Arthur",
  avatar: "/assets/autor/logo_avatar.jpeg",
  email: "arthur@prisma.com",
}

async function main() {
  // Upsert do autor Arthur
  const Arthur = await prisma.user.upsert({
    where: { userautor: author.userautor },
    update: { email: "arthur@prisma.com" },
    create: author,
  })

  // Dados dos posts
  const posts = [
    {
      titulo: "Nintendo Direct 2024: As Principais Novidades",
      slug: "nintendo-direct-2024-novidades",
      titulo2: "Novo jogo da série Mario vs. Donkey Kong",
      titulo3:
        "F-Zero 99 traz de volta o clássico com um toque de battle royale",
      titulo4: "Paper Mario: The Thousand-Year Door Remake",
      titulo5: "Splatoon 3 recebe novo DLC com atualizações emocionantes",
      titulo6: "Considerações Finais",
      texto:
        "A última apresentação do Nintendo Direct 2024 trouxe muitas surpresas e jogos aguardados pelos fãs da Big N. Desde remakes até novos títulos de franquias amadas, a Nintendo não poupou esforços para agradar o público. Vamos conferir as principais novidades reveladas no evento.",
      texto2:
        "Mario vs. Donkey Kong está de volta! Este clássico jogo de puzzle e plataforma foi reimaginado para o Nintendo Switch. Nele, Mario precisa enfrentar Donkey Kong em uma série de desafios, resgatando Mini-Marios e enfrentando quebra-cabeças com mecânicas atualizadas e gráficos vibrantes.",
      texto3:
        "F-Zero, um dos jogos de corrida mais rápidos e emocionantes da Nintendo, retorna com um toque moderno. F-Zero 99 coloca 99 jogadores competindo ao mesmo tempo em uma pista cheia de ação, proporcionando uma experiência de battle royale dentro da icônica série de corridas futuristas.",
      texto4:
        "Uma das maiores surpresas foi o anúncio do remake de Paper Mario: The Thousand-Year Door. O amado RPG que originalmente foi lançado para o GameCube retorna com visuais remasterizados e melhorias de jogabilidade, prometendo trazer nostalgia e diversão para os jogadores antigos e novos.",
      texto5:
        "Splatoon 3 também ganhou destaque com o anúncio de um novo DLC. A expansão trará novas arenas, armas e eventos sazonais, garantindo que os fãs do jogo continuem a se divertir com conteúdo fresco e competitivo.",
      texto6:
        "O Nintendo Direct 2024 provou mais uma vez que a Nintendo continua inovando e encantando os fãs. Com remakes de clássicos, novas entradas em franquias amadas e atualizações emocionantes, 2024 promete ser um grande ano para os jogadores de Nintendo Switch.",
      imagem: "/assets/img/nitendo-direct-2024/mario-dk.jpg",
      imagem2: "/assets/img/nitendo-direct-2024/fzero.jpg",
      imagem3: "/assets/img/nitendo-direct-2024/paper-mario.jpg",
      imagem4: "/assets/img/nitendo-direct-2024/splatoon3.jpg",
      authorId: Arthur.id,
      tempoLeitura: "3",
      video: "",
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
