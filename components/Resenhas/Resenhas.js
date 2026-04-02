class AppResenhas extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="resenhas-bg" aria-labelledby="resenhas-titulo">
                <div class="container resenhas">
                    <div class="section-header">
                        <h2 id="resenhas-titulo">Resenhas</h2>
                        <button class="ver-mais">Ver mais</button>
                    </div>
                    <div class="resenhas-list">
                        <article class="card resenha">
                            <div class="resenha-conteudo">
                                <p>Um filme super divertido, muito engraçado e reflexivo acerca da vida e da nossa sociedade. Em sua grande maioria, apresenta críticas pontuais, bem escritas e muito inteligentes, porém, há momentos em que essas críticas se tornam repetitivas, o que foi um pequeno e praticamente único problema para mim. De resto, é tudo perfeito, as atuações estão impecáveis, Ryan Gosling e Margot Robbie estão incríveis, a direção de Greta Gerwig também é ótima. É um filme que acert...</p>
                            </div>
                            <div class="resenha-autor">
                                <p>por <strong>Hementon Renner</strong></p>
                            </div>
                            <div class="resenha-footer">
                                <span class="data">21 de julho de 2023</span>
                                <span class="nota">Nota: <strong>9/10</strong></span>
                            </div>
                        </article>
                        
                        <article class="card resenha">
                            <div class="resenha-conteudo">
                                <p>Título: Uma Celebração Encantadora e Empoderadora - "Barbie" (2023)<br><br>"Barbie" é uma adorável surpresa cinematográfica que honra o icônico ícone cultural que é a boneca Barbie. Sob a brilhante interpretação de Margot Robbie, o filme é um verdadeiro deleite, repleto de charme, humor e vulnerabilidade, o que torna Robbie uma escolha perfeita para dar vida à amada boneca...</p>
                            </div>
                            <div class="resenha-autor">
                                <p>por <strong>Achilles</strong></p>
                            </div>
                            <div class="resenha-footer">
                                <span class="data">26 de julho de 2023</span>
                                <span class="nota">Nota: <strong>10/10</strong></span>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        `;

        // JS Dinâmico: Observador de Interseção para Animação no Scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15 // Inicia quando 15% do card estiver na tela
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Remove observador após animar (ocorre apenas 1x)
                }
            });
        }, observerOptions);

        const cards = this.querySelectorAll('.card.resenha');
        cards.forEach((card, index) => {
            // Um leve delay escadinha: 0s no primeiro, 0.2s no segundo
            card.style.transitionDelay = `${index * 0.15}s`;
            observer.observe(card);
        });
    }
}
customElements.define('app-resenhas', AppResenhas);
