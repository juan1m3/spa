import { crearE } from '../helpers/dom.js'

export function Posts(props) {
    const post = crearE('section');
    post.classList.add('grid-fluid');
    post.id = 'posts';
    return post;
}