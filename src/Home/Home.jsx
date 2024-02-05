import React, { useEffect, useState } from "react";
import { pedirDatosArtistas } from "../services/servicioSpotify";
import "./Home.css";
import Music from "../Music/Music";

function Home() {
  const [artistaSeleccionado, setArtistaSeleccionado] = useState({
    id: "2hejA1Dkf8v8R0koF44FvW",
    name: "geramx",
  });
  const [artista, setArtista] = useState([
    { id: "2hejA1Dkf8v8R0koF44FvW", name: "geramx" },
    { id: "19HM5j0ULGSmEoRcrSe5x3", name: "milo" },
    { id: "1bAftSH8umNcGZ0uyV7LMg", name: "duki" },
    { id: "5XJDexmWFLWOkjOEjOVX3e", name: "eladio" },
    { id: "2x7PC78TmgqpEIjaGAZ0Oz", name: "trueno" },
  ]);
  const [datos, setDatos] = useState(null);
  const [carga, setCarga] = useState(true);

  useEffect(() => {
    pedirDatosArtistas(artistaSeleccionado.id)
      .then((respuesta) => {
        setDatos(respuesta);
        setCarga(false);
      })
      .catch((respuestaError) => {
        console.log(respuestaError);
      });
  }, [artistaSeleccionado.id]);

  return (
    <>
      <header>
        {/* <Menu /> */}
      </header>
      <main>
        <select
          value={artistaSeleccionado.id}
          onChange={(e) =>
            setArtistaSeleccionado({
              id: e.target.value,
              name: artista.find((a) => a.id === e.target.value)?.name || "",
            })
          }
        >
          {artista.map((artista) => (
            <option key={artista.id} value={artista.id}>
              {artista.name}
            </option>
          ))}
        </select>
        <div className={`${artistaSeleccionado.name} banner text-white`}>
          {datos && (
            <>
              <h3 className="fuente">{datos.name}</h3>
              <h5 className="fuente">Grandes Exitos</h5>
            </>
          )}
        </div>
        <section>
          <Music idCantante={artistaSeleccionado.id} />
        </section>
      </main>
    </>
  );
}

export default Home;

