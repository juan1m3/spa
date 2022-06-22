import { crearE } from '../helpers/dom.js';

export function Loader() {
  const loader = crearE('div');
  const span12 = crearE('div');
  const span = crearE('span');

  loader.classList.add('row-fluid');
  span12.classList.add('span12');
  span12.classList.add('text-center');
  span.classList.add('loader');

  span12.appendChild(span);
  loader.appendChild(span12);

  return loader;
}
