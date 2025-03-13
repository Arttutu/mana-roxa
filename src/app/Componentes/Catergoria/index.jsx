import { PrismicRichText } from "@prismicio/react"

const Categoria = ({ categoria }) => {
  console.log(categoria)
  return (
    <>
      {categoria.map((item, index) => {
        return (
          <div key={index} className="rounded-lg  bg-backgroundCategoria p-2 ">
            <div className="text-xs text-textoPrincipal font-text">
              <PrismicRichText field={item.categoria} />
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Categoria
