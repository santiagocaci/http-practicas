import { getJoke } from "./http-provider";

const body = document.body;
let btnChiste, olList;

const crearChisteHtmk = () => {
  const html = `
    <h1 class="mt-5">Chistes</h1>
    <hr>
    <button class="btn btn-primary">Otro chiste</button>
    <ol class="mt-2 list-group"></ol>
  `;

  const divChistes = document.createElement('div');
  divChistes.innerHTML = html;

  body.append(divChistes);
}

const eventos = () => {

  olList = document.querySelector('ol');
  btnChiste = document.querySelector('button');

  btnChiste.addEventListener('click', async() => {

    btnChiste.disabled = true;
    dibujarChiste(await getJoke());
    btnChiste.disabled = false;

  });
}

// Chiste{id, value}
const dibujarChiste = (chiste) => {
  const olItem = document.createElement('li');
  olItem.innerHTML = `<b>${chiste.id}</b>: ${chiste.value}`;
  olItem.classList.add('list-group-item');
  olList.append(olItem);
}

export const init = () => {
  crearChisteHtmk();
  eventos();
}
