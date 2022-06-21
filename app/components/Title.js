import { crearE } from '../helpers/dom.js';
import api from '../helpers/wp_api.js';

export function Title() {
  const h1 = crearE('h1');
  h1.innerHTML = `
  <a href='${api.DOMAIN}' target='_blank' rel='noopener'>
  ${api.NAME.toLowerCase()}
  </a>
  `;
  return h1;
}
