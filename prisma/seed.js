const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const author = {
  userautor: "Karen",
  avatar: "/assets/karen.jpeg",
}

async function main() {
  // Upsert do autor Karen
  const Karen = await prisma.user.upsert({
    where: { userautor: author.userautor },
    update: {},
    create: author,
  })

  // Dados dos posts
  const posts = [
    {
      titulo: "Resident Evil Village: Uma Análise Completa e Pessoal",
      slug: "resident-evil-village-analise",
      titulo2: "Olá, pessoal!",
      titulo3: "",
      titulo4: "Sim, é isso mesmo...",
      titulo5: "",
      titulo6: "",
      texto:
        "Resident Evil Village, lançado em 2021 pela Capcom. Muita gente conhece, muita gente já fez resenha e gameplay, mas eu ainda não tinha nenhuma plataforma para jogá-lo. Finalmente consegui um videogame e peguei esse jogo.",
      texto2:
        "Sou muito fã da franquia Resident Evil, embora eu, às vezes, esqueça a história por completo. Nesse jogo, como todos sabem, Ethan se vê em uma vila onde quatro pessoas a controlam, a mando de Mãe Miranda, que é a chefe master da vila. Ethan, já pai da pequena Rose, se vê na difícil missão de salvá-la.",
      texto3:
        "Vou falar apenas da minha percepção sobre esse jogo. A jogabilidade é boa. Houve um momento em que me perdi no mapa, pois não consegui pensar em como passar por uma parede. Como não assisti a nenhuma gameplay, não sabia nada do que acontecia na história. Achei os bosses particularmente fáceis de derrotar, especialmente Dr. Moreau e Heisenberg. Penei um pouco para matar Mãe Miranda, pois não melhorei minhas armas, mas depois consegui derrotá-la com mais facilidade, após morrer mais de quatro vezes.",
      texto4:
        "Com o nível de armamento e munições que eu tinha, consegui terminar o jogo com relativa facilidade. Enfrentei alguns desafios em algumas partes, mas depois que descobri como derrotar os monstros, o jogo se tornou mais fácil. Levei 11 horas para terminar o jogo e estou ansiosa para pegar a expansão Winters e jogar a história da Rose, filha do Ethan.",
      texto5: "Quando jogar a história dela, farei uma resenha também.",
      texto6:
        "Por agora é isso, pessoal. Bye for now. #capcom #revillage #ethanwinters #rosemarywinters #gamergirls",
      imagem: "/assets/img/resident/1.jpg",
      imagem2: "",
      imagem3: "",
      imagem4: "",
      imagem5: "",
      imagem6: "",
      video: "",
      authorId: Karen.id, // Associar o post ao autor Karen
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
