// Funcionalidad del modo oscuro
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Verificar preferencia del usuario
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Cargar preferencia guardada o usar la del sistema
if (localStorage.getItem('theme') === 'dark' || 
    (localStorage.getItem('theme') === null && prefersDarkScheme.matches)) {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
}

// Alternar modo oscuro/claro
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});