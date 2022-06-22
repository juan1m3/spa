import api from './helpers/wp_api.js';
import { ajax } from './helpers/ajax.js';

import { crearE, getById } from './helpers/dom.js';

import { Loader } from './components/Loader.js';
import { Header } from './components/Header.js';
import { Posts } from './components/Posts.js';
import { PostCard } from './components/PostCard.js';

export async function App(){
    const root = getById('root');
    root.classList.add('container');
    root.appendChild(Header());
    root.appendChild(Posts());
    root.appendChild(Loader());

    let row = crearE('div');
    row.classList.add('row');

    ajax({
        url:api.POSTS,
        successCB: (posts) => {
            mostrarPosts(posts);
            /* document.querySelector('.loader').style.display = 'none';
            getById('posts').innerHTML = html; */
            console.log(posts);
        }
    });
}

function mostrarPosts(posts) {
    let count = 0;
    let html = '';
    posts.forEach(post => {
        if (count === 3) {
            count = 0;
            html += addRow(html);
        }
        html += PostCard(post)
        count++;
    });
    console.log(html);
}

function addRow(posts) {
    let row = crearE('div');
    row.classList.add('row');
    row.innerHTML = `
    ${posts}
    `;
}