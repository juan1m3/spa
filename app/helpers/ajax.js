import { crearE, getById } from './dom.js'

export function ajax(props){
  let { url, successCB } = props;
  
  fetch(url)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(res => successCB(res))
    .catch(err => {
      
      let message = err.statusText || 'ocurrio un error al acceder al API';
      
      mostrarError(message,err);
     
    });
}

function mostrarError(message,err) {
  let root = getById('root');
  let div = crearE('div');
  let p = crearE('p');
  
  div.classList.add('error');
  p.textContent = `Error ${err.status}: ${message}`;
  
  div.appendChild(p);
  root.appendChild(div);
}
