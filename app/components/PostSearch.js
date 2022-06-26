document.addEventListener('click',(e) => {
    if (!e.target.matches('.card-body a')) return false;
    //e.preventDefault();
    localStorage.setItem('postId', e.target.dataset.id);
});

export function PostSearch(props) {
    let { title, _embedded, id } = props;
    let data = _embedded.self[0];
    let dateFormat = new Date(data.date).toLocaleString(),
    urlPoster = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.apacara.com%2Fstatic%2Fhtml%2F16x9%2Fhtml-section-tag.jpg&f=1&nofb=1';

    return `
        <div class="card" style="width: 18rem;">
            <img src="${urlPoster}" class="card-img-top" alt="post">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">
                    <time datetime='${data.date}'> ${dateFormat} </time>
                </p>
                <a href="#/${ data.slug }" class="btn btn-primary" data-id="${id}">Ver Publicación</a>
            </div>
        </div>
    `;
}