import { crearE } from '../helpers/dom.js';

export function Loader() {
  const span = crearE('span');
  span.classList.add('loader');
  return span;
}
