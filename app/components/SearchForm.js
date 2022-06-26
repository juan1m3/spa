import { crearE } from '../helpers/dom.js';

export function SearchForm() {
    const form = crearE('form'),
    input = crearE('input');

    form.classList.add('mt-3');
    form.classList.add('mb-3');
    input.classList.add('form-control');
    
    input.name = 'search';
    input.type = 'search';
    input.placeholder = 'Buscar...';

    form.appendChild(input);

    if (location.hash.includes('#/search')) {
        input.value = localStorage.getItem('search');
    }

    document.addEventListener('search',(e) => {
        if (!e.target.matches('input[type="search"]')) return false;
        if(!e.target.value) localStorage.removeItem('search');
    });

    document.addEventListener('submit',(e) => {
        if (!e.target.matches('form')) return false;
        e.preventDefault();
        localStorage.setItem('search', e.target.search.value);
        location.hash = `#/search?search=${e.target.search.value}`;
    });
    
    return form;
}