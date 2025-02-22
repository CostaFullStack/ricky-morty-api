import "./App.css";
import "./Reset.css";
import { Layout } from "./components/Layout";
import { Character } from "./pages/Characters";
import { Episodes } from "./pages/Episodes";
import { Locations } from "./pages/Locations";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Perguntar se o corretor é cirar um card para cada component (persoangem, episodios, localziação) ou se é melhor criar dentro das pages 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Character/>}/>
          <Route path="/episodios" element={<Episodes/>} />
          <Route path="/localizacao" element={<Locations/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
