import api from '../helpers/wp_api.js';

export function Title() {
  const titulo = `
  <a class="navbar-brand" href='${api.DOMAIN}' target='_blank' rel='noopener'>
  ${api.NAME.toUpperCase()}
  </a>
  `;
  return titulo;
}
