import "./music.css";
import React, { useEffect, useState } from "react";
import { pedirCanciones } from "../services/servicioSpotify";

function Music({ idCantante }) {
  const [canciones, setCanciones] = useState(null);
  const [carga, setCarga] = useState(true);

  useEffect(() => {
    pedirCanciones(idCantante)
      .then(function (respuesta) {
        setCanciones(respuesta);
        setCarga(false);
      })
      .catch(function (respuestaError) {
        console.log(respuestaError);
      });
  }, [idCantante]);

  if (carga) {
    return <h3>Cargando...</h3>;
  } else {
    return (
      <>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 ">
            {canciones.tracks.map(function (cancion) {
              return (
                <div className="col" key={cancion.id}>
                  <div className="card h-100 shadow">
                    <h3>{cancion.name}</h3>
                    <img
                      src={cancion.album.images[0].url}
                      alt=""
                      className="img-fluid w-100"
                    />
                    <audio
                      src={cancion.preview_url}
                      controls
                      className="w-100 px2"
                    ></audio>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Music;

