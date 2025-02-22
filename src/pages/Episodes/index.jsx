import axios from "axios";
import { useEffect, useState } from "react";
import { ContainerEpisode } from "../../components/Container-Episode";

export const Episodes = () => {
  const [episode, setEpisode] = useState();

  async function FilterEpisode() {
    const { data } = await axios.get("https://rickandmortyapi.com/api/episode");
    setEpisode(data.results);
  }

  useEffect(() => {
    FilterEpisode();
  }, []);
  return <ContainerEpisode episodio={episode} />;
};
