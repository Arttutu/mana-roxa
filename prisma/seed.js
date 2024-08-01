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
        "Jogos Indie Imperdíveis de 2024: Descubra as Verdadeiras Joias Escondidas",
      slug: "idies-2024",
      titulo2: "Hades II",
      titulo3: "Hollow Knight: Silksong",
      titulo4: "Tunic",
      titulo5: "",
      titulo6: "Axiom Verge 2",
      titulo7: "Eastward",
      titulo8: "Cult of the Lamb",
      titulo9: "Spiritfarer: Farewell Edition",
      titulo10: "Disco Elysium: The Final Cut",
      titulo11: "Unpacking",
      texto:
        "Olá, pessoal! O cenário dos jogos indie continua a crescer e a surpreender, trazendo experiências únicas e inovadoras que muitas vezes escapam do radar principal. Se você está procurando por algo novo, criativo e emocionante para jogar em 2024, confira nossa lista dos jogos indie imperdíveis deste ano. Prepare-se para se encantar com estas verdadeiras joias escondidas!",
      texto2:
        "Após o enorme sucesso de Hades, a Supergiant Games retorna com *Hades II*. Esta sequência promete mais ação frenética, uma história envolvente e personagens cativantes. Com um estilo artístico deslumbrante e mecânicas de roguelike aperfeiçoadas, este jogo é um must-play para qualquer fã de indies.",
      texto3:
        "*Hollow Knight: Silksong* é a tão esperada sequência do aclamado Hollow Knight. Acompanhe Hornet em sua nova aventura através de um reino misterioso repleto de inimigos desafiadores e segredos ocultos. Com jogabilidade refinada e uma trilha sonora encantadora, este jogo promete ser tão bom quanto o original.",
      texto4:
        "Em *Tunic*, você assume o papel de uma pequena raposa em um mundo colorido e misterioso. Combinando elementos de aventura e puzzles, este jogo oferece uma experiência envolvente e desafiadora. A arte encantadora e a trilha sonora atmosférica fazem de Tunic um título imperdível.",
      texto5: "",
      texto6:
        "*Axiom Verge 2* é a aguardada continuação do clássico metroidvania. Explore um novo mundo com uma nova protagonista, descubra segredos ocultos e enfrente inimigos formidáveis. Com gráficos retrô e uma jogabilidade envolvente, este jogo é uma homenagem aos clássicos do gênero.",
      texto7:
        "Em *Eastward*, embarque em uma jornada emocionante através de um mundo pós-apocalíptico cheio de mistérios e aventuras. Com uma narrativa cativante, gráficos em pixel art deslumbrantes e personagens memoráveis, este jogo é uma verdadeira obra-prima indie.",
      texto8:
        "Cult of the Lamb* é um jogo de gerenciamento de cultos onde você assume o papel de um cordeiro possuído que deve construir e expandir seu próprio culto. Misturando elementos de simulação e roguelike, este jogo oferece uma experiência única e sombria com um toque de humor negro.",
      texto9:
        "*Spiritfarer: Farewell Edition* é uma edição definitiva do aclamado jogo de gerenciamento onde você guia espíritos para o além. Com novas atualizações e conteúdos adicionais, esta versão aprimorada promete ainda mais emoção e beleza. Uma experiência tocante e visualmente deslumbrante.",
      texto10:
        "*Disco Elysium: The Final Cut* é a versão definitiva do premiado RPG de detetive. Com novas missões, dublagem completa e melhorias gráficas, este jogo oferece uma narrativa profunda e escolhas significativas. Uma obra-prima que qualquer fã de RPGs narrativos deve jogar.",
      texto11:
        "*Unpacking* é um jogo de quebra-cabeça relaxante onde você desembrulha e organiza objetos de uma nova casa. Com uma abordagem única e uma narrativa sutilmente contada através dos itens, este jogo oferece uma experiência meditativa e introspectiva.",
      imagem: "/assets/img/idies2024/hollow.png",
      imagem2: "/assets/img/idies2024/hades.png",
      imagem3: "/assets/img/idies2024/hollow.png",
      imagem4: "/assets/img/idies2024/tunic.png",
      imagem5: "",
      imagem6: "/assets/img/idies2024/axiom.png",
      imagem7: "/assets/img/idies2024/Eastward.png",
      imagem8: "/assets/img/idies2024/Cult.png",
      imagem9: "/assets/img/idies2024/Spiritfarer.png",
      imagem10: "/assets/img/idies2024/Disco.png",
      imagem11: "/assets/img/idies2024/Unpacking.png",
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
