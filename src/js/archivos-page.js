import { subirImagen } from "./http-provider";

const body = document.body;
let inputFile, imgFoto;

const crearInputFile = () => {

  const html = `
  <h1 class="mt-5">Subir archivos</h1>
  <hr>

  <label>Selecciona una fotografia: </label>
  <input type="file" accept="image/png, image/jpg, image/jpeg, image/webp" />
  
  <br>
  <img id="foto" class="img-thumbnail" src="">
  `;
  const div = document.createElement('div');
  div.innerHTML = html;
  body.append(div);

  inputFile = document.querySelector('input');
  imgFoto = document.querySelector('#foto');

}

const eventos = () => {
  inputFile.addEventListener('change', (e) => {
    const file = e.target.files[0];
    // console.log(file);
    subirImagen(file).then(url =>{
      imgFoto.src = url;
    });
  });
}

export const init = () => {
  crearInputFile();
  eventos();
}
