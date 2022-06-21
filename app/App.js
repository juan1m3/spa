import api from './helpers/wp_api.js';
import { ajax } from './helpers/ajax.js';
import { crearE, getById } from './helpers/dom.js';
import { Title } from './components/Title.js';
import { Loader } from './components/Loader.js';

export function App(){
    const root = getById('root');
    root.classList.add('container');
    root.appendChild(Title());
    root.appendChild(Loader());
}
