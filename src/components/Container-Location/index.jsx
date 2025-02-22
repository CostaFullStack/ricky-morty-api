import { CardLocation } from "../Card-Episode-Location";

export const ContainerLocation = ({ localizacao }) => {
  return (
    <section className="container">
      {localizacao &&
        localizacao.map((element) => <CardLocation element={element} />)}
    </section>
  );
};
