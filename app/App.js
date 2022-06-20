export function App(){
    const root = document.getElementById('root');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    
    h1.textContent = "Bienvenido a SPA";
    h2.textContent = 'single page aplication';
    
    root.appendChild(h1);
    root.appendChild(h2);
}
