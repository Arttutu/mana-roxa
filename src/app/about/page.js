import Image from 'next/image'
import React from 'react'
import arthur from "../../../public/assets/img/arthur.jpeg"
export default function about() {
  return (
    <div className='flex flex-col container gap-8'>
      <h1 className='text-xl sm:text-3xl text-botao font-font1 font-bold'>Um pouco da nossa Cronica</h1>
      <div className='flex flex-col gap-12 sm:flex sm:flex-row sm:gap-12 items-start  mt-12 sm:mt-24'>
      <div className='w-full sm:full flex flex-col gap-4'>
        <h2 className='text-xl sm:text-3xl text-botao font-font1 font-bold'>Arthur</h2>
        <p className='text-md sm:text-lg text-paragrafo leading-6  font-font2'>Olá, pessoal! Meu nome é Arthur e sou apaixonado por videogames desde que me conheço por gente. Meu primeiro console foi um clássico Mega Drive, que abriu as portas para o incrível mundo dos jogos e desde então nunca mais parei de jogar.

        Os meus gêneros favoritos são RPG e estratégia, onde posso me perder em histórias envolventes e desafiar minhas habilidades táticas. Entre todos os jogos que já joguei, "The Witcher 3" se destaca como meu favorito absoluto, graças ao seu enredo cativante, personagens memoráveis e um mundo aberto vasto e detalhado.

        Atualmente, jogo exclusivamente no PC, onde posso aproveitar a melhor qualidade gráfica e uma vasta biblioteca de jogos. Embora nunca tenha participado de torneios, minha paixão pelos jogos me levou a criar este blog, onde posso compartilhar minhas experiências, reviews e dicas.

        Meu objetivo com este blog é ajudar outros jogadores a encontrar jogos incríveis, explorar novos mundos e dominar suas mecânicas favoritas. Se você também é fã de RPGs e jogos de estratégia, está no lugar certo! Fique à vontade para explorar, comentar e compartilhar suas próprias experiências de jogo.</p>
        </div>
        <div className='w-full sm:full flex flex-col gap-4'>
        <h2 className='text-xl sm:text-3xl text-botao font-font1 font-bold'>Daniel </h2>
        <p className='text-md sm:text-lg text-paragrafo leading-6  font-font2'>Olá, pessoal! Meu nome é Arthur e sou apaixonado por videogames desde que me conheço por gente. Meu primeiro console foi um clássico Mega Drive, que abriu as portas para o incrível mundo dos jogos e desde então nunca mais parei de jogar.

        Os meus gêneros favoritos são RPG e estratégia, onde posso me perder em histórias envolventes e desafiar minhas habilidades táticas. Entre todos os jogos que já joguei, "The Witcher 3" se destaca como meu favorito absoluto, graças ao seu enredo cativante, personagens memoráveis e um mundo aberto vasto e detalhado.

        Atualmente, jogo exclusivamente no PC, onde posso aproveitar a melhor qualidade gráfica e uma vasta biblioteca de jogos. Embora nunca tenha participado de torneios, minha paixão pelos jogos me levou a criar este blog, onde posso compartilhar minhas experiências, reviews e dicas.

        Meu objetivo com este blog é ajudar outros jogadores a encontrar jogos incríveis, explorar novos mundos e dominar suas mecânicas favoritas. Se você também é fã de RPGs e jogos de estratégia, está no lugar certo! Fique à vontade para explorar, comentar e compartilhar suas próprias experiências de jogo.</p>
        </div>
      </div>
      
      
    </div>
  )
}
