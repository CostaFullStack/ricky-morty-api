import { CardEpisode } from "../Card-Episode-Location"

export const ContainerEpisode = ({episodio}) => {
  return (
    <section className="container">
      {episodio && episodio.map((element) => <CardEpisode element={element}/>)}
    </section>
  )
}