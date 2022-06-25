import { ajax } from "../helpers/ajax.js";
import { getById } from "../helpers/dom.js";
import wp_api from "../helpers/wp_api.js";
import { PostCard } from "./PostCard.js";
import { PostView } from "./PostView.js";

export async function Router() {
    const d = document,
    w = window;
    let $post = getById('posts');
    let { hash } = location;
    console.log(hash);

    $post.innerHTML = null;

    if (!hash || hash === '#/') {
        
        await ajax({
        url:wp_api.POSTS,
        successCB: (posts) => {
            let html = '';
            posts.forEach(post => {
                html += PostCard(post);
            });
            
            $post.innerHTML = html;
        }
        });
        
    }else if(hash.includes('#/search')){

        $post.innerHTML = '<h2>Seccion Search</h2>';

    }else if(hash === '#/contacto'){

        $post.innerHTML = '<h2>Seccion Contacto</h2>';

    }else if(hash === '#/post'){

        await ajax({
            url:wp_api.POST+'/'+localStorage.getItem('postId'),
            successCB: (post) => {
                console.log(post);
                let html = PostView(post);
                $post.innerHTML = html;
            }
            });

    }else{

        await ajax({
            url:wp_api.POST+'/'+localStorage.getItem('postId'),
            successCB: (post) => {
                console.log(post);
                let html = PostView();
                $post.innerHTML = html;
            }
            });

    }

    document.querySelector('.loader').style.display = 'none';
    
}