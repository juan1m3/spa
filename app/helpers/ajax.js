import { crearE, getById } from './dom.js'

export async function ajax(props){
  let { url, successCB } = props;
  
  await fetch(url)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(res => successCB(res))
    .catch(err => {
      
      let message = err.statusText || 'ocurrio un error al acceder al API';
      
      mostrarError(message,err);
     
      document.querySelector('.loader').style.display = 'none';
    });
}

function mostrarError(message,err) {
  console.log(err);
  let root = getById('posts');
  let div = crearE('div');
  let p = crearE('p');
  
  div.classList.add('alert');
  div.classList.add('alert-danger');
  p.textContent = `Error ${err.status}: ${message}`;
  
  div.appendChild(p);
  root.appendChild(div);
}
