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
    
    return form;
}