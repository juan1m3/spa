import { ajax } from "../helpers/ajax.js";
import { getById } from "../helpers/dom.js";
import wp_api from "../helpers/wp_api.js";
import { PostCard } from "./PostCard.js";
import { PostSearch } from "./PostSearch.js";
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

        let query = localStorage.getItem('search');
        if (!query) return false;

        await ajax({
            url:wp_api.SEARCH+'/'+query,
            successCB: (searchs) => {
                let html = '';
                if (searchs) {
                    searchs.forEach(search => {
                        html += PostSearch(search);
                    });
                    
                    $post.innerHTML = html;
                }
            }
        });

    }else if(hash === '#/contacto'){

        $post.innerHTML = '<h2>Seccion Contacto</h2>';

    }else{

        await ajax({
            url:wp_api.POST+'/'+localStorage.getItem('postId'),
            successCB: (post) => {
                console.log(post);
                $post.innerHTML = PostView(post);
            }
        });


    }

    document.querySelector('.loader').style.display = 'none';
    
}