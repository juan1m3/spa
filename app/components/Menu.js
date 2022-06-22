import { crearE } from '../helpers/dom.js';

export function Menu(titulo) {
    const nav = crearE('nav');
    nav.classList.add('navbar');
    nav.classList.add('navbar-expand-lg');
    nav.classList.add('bg-light');
    nav.innerHTML = `
    <div class="container-fluid">
        ${titulo}
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#/">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#/search">Search</a>
                </li>
            </ul>
        </div>
    </div>
    `;
    return nav;
}