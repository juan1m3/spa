export function PostView(props) {
    let { content, date, title } = props;
    let dateFormat = new Date(date).toLocaleString();

    return `
    <div class="card mb-3">
        <!--<img src="..." class="card-img-top" alt="post">-->
        <div class="card-body">
            <h5 class="card-title">${title.rendered}</h5>
            <p class="card-text"><small class="text-muted">${dateFormat}</small></p>
            <p class="card-text">${content.rendered}</p>
        </div>
    </div>
    `;
}