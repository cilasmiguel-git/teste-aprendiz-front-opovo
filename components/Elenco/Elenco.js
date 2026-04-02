class AppElenco extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="elenco-bg" aria-labelledby="elenco-titulo">
                <div class="container elenco">
                    <div class="section-header">
                        <h2 id="elenco-titulo">Elenco</h2>
                        <button class="ver-mais">Ver mais</button>
                    </div>
                    <div class="owl-carousel owl-theme elenco-carousel">
                        <article class="ator">
                            <img src="assets/img/actors/Margot Robbie.png" alt="Margot Robbie" loading="lazy">
                            <h3>Margot Robbie</h3>
                            <p>Barbie</p>
                        </article>
                        <article class="ator">
                            <img src="assets/img/actors/Ryan Gosling.png" alt="Ryan Gosling" loading="lazy">
                            <h3>Ryan Gosling</h3>
                            <p>Ken</p>
                        </article>
                        <article class="ator">
                            <img src="assets/img/actors/America Ferrera.jpg" alt="America Ferrera" loading="lazy">
                            <h3>America Ferrera</h3>
                            <p>Gloria</p>
                        </article>
                         <article class="ator">
                            <img src="assets/img/actors/Kate McKinnon.jpg" alt="Kate McKinnon" loading="lazy">
                            <h3>Kate McKinnon</h3>
                            <p>Barbie</p>
                        </article>
                        <article class="ator">
                            <img src="assets/img/actors/Ariana Greenblatt.jpg" alt="Ariana Greenblatt" loading="lazy">
                            <h3>Ariana Greenblatt</h3>
                            <p>Sasha</p>
                        </article>
                        <article class="ator">
                            <img src="assets/img/actors/Michael Cera.jpg" alt="Michael Cera" loading="lazy">
                            <h3>Michael Cera</h3>
                            <p>Allan</p>
                        </article>
                        <article class="ator">
                            <img src="assets/img/actors/Emma Mackey.jpg" alt="Emma Mackey" loading="lazy">
                            <h3>Emma Mackey</h3>
                            <p>Barbie Física</p>
                        </article>
                        <article class="ator">
                            <img src="assets/img/actors/Simu Liu.jpg" alt="Simu Liu" loading="lazy">
                            <h3>Simu Liu</h3>
                            <p>Ken Turista</p>
                        </article>
                    </div>
                </div>
            </section>
        `;

        if (window.$) {
            $(this).find(".elenco-carousel").owlCarousel({
                loop: false,
                margin: 20,
                nav: false,
                dots: false,
                responsive: {
                    0: { items: 1.5 },
                    768: { items: 3.5 },
                    1024: { items: 6 }
                }
            });
        }
    }
}
customElements.define('app-elenco', AppElenco);
