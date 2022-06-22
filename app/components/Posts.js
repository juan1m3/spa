import { crearE } from '../helpers/dom.js'

export function Posts(props) {
    const post = crearE('section');
    post.id = 'posts';
    return post;
}