import { CardCharacter } from "../Card-Character"

export const ContainerCharacter = ({personagem}) => {
  return (
    <section className="container">
      {personagem && personagem.map((element) => (
        <CardCharacter
          element={element}
        />
      ))}
    </section>
  )
}