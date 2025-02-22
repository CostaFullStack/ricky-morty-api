import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { SelectComponent } from "../../components/Select-Character";
import { genderOp, speciesOp, statusOp } from "../../utils/opcoes";
import { ContainerCharacter } from "../../components/Container-Character";

export const Character = () => {
  const [character, setCharacter] = useState();
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [specie, setSpecie] = useState("");

  async function FilterOrSearch(url) {
    setCharacter(null);
    const { data } = await axios.get(url);
    setCharacter(data.results);
  }

  useEffect(() => {
    name || status || gender || specie
      ? FilterOrSearch(
          `https://rickandmortyapi.com/api/character?name=${name}&species=${specie}&gender=${gender}&status=${status}`
        )
      : FilterOrSearch("https://rickandmortyapi.com/api/character");
  }, [name, status, gender, specie]);

  return (
    <>
      <input
        type="text"
        name=""
        id=""
        onChange={(element) => setName(element.target.value)}
      />

      <SelectComponent
        opcoes={statusOp}
        onChange={(element) => setStatus(element.target.value)}
      />

      <SelectComponent
        opcoes={genderOp}
        onChange={(element) => setGender(element.target.value)}
      />

      <SelectComponent
        opcoes={speciesOp}
        onChange={(element) => setSpecie(element.target.value)}
      />
   
      <ContainerCharacter
        personagem={character}
      />
    </>
  );
};
