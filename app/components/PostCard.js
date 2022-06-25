document.addEventListener('click',(e) => {
    if (!e.target.matches('.card-body a')) return false;
    //e.preventDefault();
    localStorage.setItem('postId', e.target.dataset.id);
});

export function PostCard(props) {
    let { date, slug, title, _embedded, id } = props;
    let dateFormat = new Date(date).toLocaleString(),
    urlPoster = _embedded['wp:featuredmedia'] ? _embedded['wp:featuredmedia'][0].source_url : 'https://placeimg.com/200/200/any';

    return `
        <div class="card" style="width: 18rem;">
            <img src="${urlPoster}" class="card-img-top" alt="post">
            <div class="card-body">
                <h5 class="card-title">${title.rendered}</h5>
                <p class="card-text">
                    <time datetime='${date}'> ${dateFormat} </time>
                </p>
                <a href="#/${ slug }" class="btn btn-primary" data-id="${id}">Ver Publicación</a>
            </div>
        </div>
    `;
}