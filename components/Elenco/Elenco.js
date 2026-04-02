class AppElenco extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="elenco-bg" aria-labelledby="elenco-titulo">
                <div class="container elenco">
                    <div class="section-header">
                        <h2 id="elenco-titulo">Elenco</h2>
                        <button class="ver-mais">Ver mais</button>
                    </div>
                    <div class="elenco-carousel">
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

        // O navegador controla o Touch no celular nativamente GPU-Accelerated 
        // Abaixo adicionamos um script Vanilla extremamente leve para simular o "Arrasto por Mouse" no Computador:

        const slider = this.querySelector('.elenco-carousel');
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.style.cursor = 'grab';

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.style.cursor = 'grabbing';
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
            // Desliga a trava pontual temporariamente para deixar rolar solto
            slider.style.scrollSnapType = 'none'; 
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.style.cursor = 'grab';
            slider.style.scrollSnapType = 'x mandatory'; // Religa o Imã
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.style.cursor = 'grab';
            slider.style.scrollSnapType = 'x mandatory'; // Religa o Imã
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 1.5; // Velocidade do arrasto
            slider.scrollLeft = scrollLeft - walk;
        });
    }
}
customElements.define('app-elenco', AppElenco);
