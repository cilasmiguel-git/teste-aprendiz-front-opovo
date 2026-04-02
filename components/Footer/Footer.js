class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="main-footer">
                <div class="container footer-container">
                    <div class="footer-logo">
                        <img src="assets/img/image.png" alt="Playcube Logo" class="logo-img">
                    </div>
                    <div class="footer-links">
                        <a href="#">Sobre</a>
                        <a href="#">Contato</a>
                        <a href="#">Suporte</a>
                        <a href="#">Adicione um Filme</a>
                        <a href="#">Adicione uma Série</a>
                        <a href="#">Discussões</a>
                        <a href="#">Termos de Uso</a>
                        <a href="#">Política de Privacidade</a>
                        <a href="#">Diretrizes</a>
                    </div>
                </div>
            </footer>
        `;
    }
}
customElements.define('app-footer', AppFooter);
