class AppAcessibilidade extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="acessibilidade-widget" aria-label="Menu de Acessibilidade" role="region">
                <button class="acessibilidade-btn btn-top" aria-label="Recursos Assistivos">
                    <i class="fa-solid fa-universal-access" aria-hidden="true"></i>
                    <span>Recursos Assistivos</span>
                </button>
                <div class="acessibilidade-divider"></div>
                <button class="acessibilidade-btn btn-bottom" aria-label="Acessível em Libras">
                    <i class="fa-solid fa-hands-asl-interpreting" aria-hidden="true"></i>
                    <span>Acessível em Libras</span>
                </button>
            </div>
        `;
    }
}

customElements.define('app-acessibilidade', AppAcessibilidade);
