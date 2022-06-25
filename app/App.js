import { Loader } from './components/Loader.js';
import { Header } from './components/Header.js';
import { Posts } from './components/Posts.js';
import { Router } from './components/Router.js';

export async function App(){
    const root = document.getElementById('root');
    root.innerHTML = null;
    root.classList.add('container');
    root.appendChild(Header());
    root.appendChild(Posts());
    root.appendChild(Loader());

    Router();
}

/* function separarByN(numero, arreglo) {
    let count = 1;
    var nuevoArray = [];
    var tmp = [];

    for (let i = 0; i < arreglo.length; i++) {

        tmp.push(arreglo[i]);
        if (count === numero) {
            nuevoArray.push(tmp);
            tmp = [];
            count = 1;
        }else{
            count++;
        }
        if ((arreglo.length-1) === i ) {
            if (tmp.length) nuevoArray.push(tmp);
        }

    }

    return nuevoArray;
} */