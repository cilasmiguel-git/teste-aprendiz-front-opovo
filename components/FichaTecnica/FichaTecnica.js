class AppFichaTecnica extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="ficha-tecnica-bg">
                <div class="container ficha-tecnica">
                    <!-- Poster Barbie -->
                    <img src="assets/img/cartaz.png" alt="Poster Oficial do filme Barbie" class="poster" loading="lazy">
                    
                    <article class="detalhes">
                        <h2 class="filme-titulo">Barbie <span class="ano-filme">(2023)</span></h2>
                        
                        <div class="meta-row full">
                            <h3>Gênero:</h3>
                            <p>Comédia, Aventura, Fantasia</p>
                        </div>
                        
                        <div class="meta-row full">
                            <h3>Sinopse:</h3>
                            <p>No mundo mágico das Barbies, "Barbieland", uma das bonecas começa a perceber que não se encaixa como as outras. Depois de ser expulsa, ela parte para uma aventura no "mundo real", onde descobre que a beleza está no interior de cada um.</p>
                        </div>

                        <div class="meta-grid">
                            <div class="meta-item">
                                <h3>Dirigido por:</h3>
                                <p>Greta Gerwig</p>
                            </div>
                            <div class="meta-item">
                                <h3>Escrito por:</h3>
                                <p>Greta Gerwig, Noah Baumbach</p>
                            </div>
                            <div class="meta-item">
                                <h3>Situação:</h3>
                                <p>Lançado</p>
                            </div>
                            <div class="meta-item">
                                <h3>Idioma original:</h3>
                                <p>Inglês</p>
                            </div>
                            <div class="meta-item">
                                <h3>Orçamento:</h3>
                                <p>$145,000,000.00</p>
                            </div>
                            <div class="meta-item">
                                <h3>Receita:</h3>
                                <p>$1,280,313,193.00</p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        `;
    }
}
customElements.define('app-ficha-tecnica', AppFichaTecnica);
