export async function pedirCanciones(id_cantante) {
    const url = "https://accounts.spotify.com/api/token";
    const urlCanciones = `https://api.spotify.com/v1/artists/${id_cantante}/top-tracks?market=us`
    const grant_type = "client_credentials";
    const client_id = "179a0c8c73e2420abb7327af96814fd6";
    const client_secret = "9a1383b9d3834042a5dc466ab5362f82";

    const datos = `grant_type=${grant_type}&client_id=${client_id}&client_secret=${client_secret}`;

    const peticion = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: datos
    };

    try {
        let respuesta = await fetch(url, peticion);
        let respuestaJson = await respuesta.json();
        let token =respuestaJson.token_type+" "+respuestaJson.access_token

        //ya tengo un token debo ir por la canciones 

        const peticionCanciones={
            method:"GET",
            headers:{"Authorization":token}
        }
        let canciones = await fetch(urlCanciones, peticionCanciones)
        let cancionesJSON = canciones.json()
        return cancionesJSON
    } catch (error) {
        console.log(error);
    }
}

export async function pedirDatosArtistas(id_cantante) {
    const url = "https://accounts.spotify.com/api/token";
    const urlCnciones = `https://api.spotify.com/v1/artists/${id_cantante}`
    const grant_type = "client_credentials";
    const client_id = "179a0c8c73e2420abb7327af96814fd6";
    const client_secret = "9a1383b9d3834042a5dc466ab5362f82";

    const datos = `grant_type=${grant_type}&client_id=${client_id}&client_secret=${client_secret}`;

    const peticion = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: datos
    };

    try {
        let respuesta = await fetch(url, peticion);
        let respuestaJson = await respuesta.json();
        let token =respuestaJson.token_type+" "+respuestaJson.access_token

        //ya tengo un token debo ir por la canciones 

        const peticionCanciones={
            method:"GET",
            headers:{"Authorization":token}
        }
        let canciones = await fetch(urlCnciones, peticionCanciones)
        let cancionesJSON = canciones.json()
        return cancionesJSON
    } catch (error) {
        console.log(error);
    }
}
