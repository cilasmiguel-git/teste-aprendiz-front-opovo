class AppCookies extends HTMLElement {
    connectedCallback() {
        // Se o usuário já houver escolhido antes que fique gravado no navegador
        if (localStorage.getItem('cookieConsentBarbie')) return;

        this.innerHTML = `
            <div class="cookie-banner" role="dialog" aria-labelledby="cookie-title" aria-describedby="cookie-desc">
                <div class="cookie-header">
                    <i class="fa-solid fa-cookie-bite"></i>
                    <span id="cookie-title">Nós usamos Cookies</span>
                </div>
                <div class="cookie-content">
                    <p id="cookie-desc">Utilizamos cookies obrigatórios e tecnologias semelhantes para garantir a melhor experiência na nossa página. Ao navegar, você concorda com a <a href="#">Política de Privacidade</a>.</p>
                </div>
                <div class="cookie-buttons">
                    <button class="cookie-btn recusar">Recusar</button>
                    <button class="cookie-btn aceitar">Aceitar Todos</button>
                </div>
            </div>
        `;

        const banner = this.querySelector('.cookie-banner');
        const btnAceitar = this.querySelector('.aceitar');
        const btnRecusar = this.querySelector('.recusar');

        // Cria pequeno atraso antes do banner brotar com a animação
        setTimeout(() => {
            banner.classList.add('show');
        }, 1500);

        btnAceitar.addEventListener('click', () => {
            localStorage.setItem('cookieConsentBarbie', 'accepted');
            banner.classList.remove('show');
        });

        btnRecusar.addEventListener('click', () => {
            localStorage.setItem('cookieConsentBarbie', 'declined');
            banner.classList.remove('show');
        });
    }
}

customElements.define('app-cookies', AppCookies);
