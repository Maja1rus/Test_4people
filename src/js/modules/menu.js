export function menu(header) {
    const html = document.querySelector('html');
    const btn = header.querySelector('[data-js="menu-btn"]');
    const navItems = header.querySelectorAll('.header__nav a')

    btn.addEventListener('click', (e) => {
        header.classList.toggle('open');
        html.classList.toggle('open');
        window.addEventListener('keydown', escapeHandler);
    });

    navItems.forEach(item => {

        item.addEventListener('click', (e) => {
            if (header.classList.contains('open')) {
                header.classList.remove('open');
                html.classList.remove('open');
            }
        });
    })

    function escapeHandler(e) {
        // закрытие окна по кнопке escape
        if (e.key === 'Escape') {
            header.classList.remove('open');
            html.classList.remove('open');
        }
    }
}