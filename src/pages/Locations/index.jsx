import axios from "axios";
import { useEffect, useState } from "react";
import { ContainerLocation } from "../../components/Container-Location";

export const Locations = () => {
  const [location, setLocation] = useState();

  async function FilterLocation() {
    const { data } = await axios.get(
      "https://rickandmortyapi.com/api/location"
    );
    setLocation(data.results);
  }

  useEffect(() => {
    FilterLocation();
  }, []);
  return <ContainerLocation localizacao={location} />;
};
