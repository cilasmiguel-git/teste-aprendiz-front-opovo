class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="main-header">
                <div class="container header-container">
                    <div class="logo">
                        <img src="assets/img/image.png" alt="Playcube Logo" class="logo-img">
                    </div>
                    
                    <button class="menu-toggle" aria-label="Abrir menu">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </button>
                    
                    <nav class="main-nav">
                        <ul>
                            <li><a href="#">Filmes</a></li>
                            <li><a href="#">Séries</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        `;
    }
}
customElements.define('app-header', AppHeader);
