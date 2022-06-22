import { crearE } from '../helpers/dom.js';
import { Menu } from './Menu.js';
import { SearchForm } from './SearchForm.js';
import { Title } from './Title.js';

export function Header() {
    const header = crearE('header');
    header.classList.add('header');
    header.appendChild(Menu(Title()));
    header.appendChild(SearchForm());
    return header;
}