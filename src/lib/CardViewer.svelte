<script>
  import { onMount } from "svelte";
  import { createEventDispatcher } from 'svelte';
  let cardData = null;

  const id = "sv5-104"; // Reemplaza con el ID de la carta que deseas buscar

  async function fetchCard() {
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const response = await fetch(`https://api.pokemontcg.io/v2/cards/${id}`, {
        method: "GET",
        headers: {
          "X-API-KEY": apiKey,
          "Content-Type": "application/json",
        },
      });
      cardData = await response.json();
    } catch (error) {
      console.error("Error fetching card data:", error);
    }
  }

  onMount(() => {
    fetchCard();
  });

  //card 

  const dispatch = createEventDispatcher();

let cards;
let hoverStyle;

onMount(() => {
  const cardElements = document.querySelectorAll('.card');
  const hoverElement = document.querySelector('#app.hover');

  cardElements.forEach(card => {
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('touchmove', handleTouchMove);

    card.addEventListener('mouseout', handleMouseOut);
    card.addEventListener('touchend', handleTouchEnd);
    card.addEventListener('touchcancel', handleTouchCancel);
  });

  hoverElement.innerHTML = '';
});

function handleMouseMove(e) {
  let pos = [e.clientX, e.clientY];
  if (e.type === 'touchmove') {
    pos = [e.touches[0].clientX, e.touches[0].clientY];
  }

  let card = this;
  let l = pos[0];
  let t = pos[1];
  let h = card.offsetHeight;
  let w = card.offsetWidth;
  let px = Math.abs(Math.floor(100 / w * l) - 100);
  let py = Math.abs(Math.floor(100 / h * t) - 100);
  let pa = (50 - px) + (50 - py);
  let lp = (50 + (px - 50) / 1.5);
  let tp = (50 + (py - 50) / 1.5);
  let px_spark = (50 + (px - 50) / 7);
  let py_spark = (50 + (py - 50) / 7);
  let p_opc = 20 + (Math.abs(pa) * 1.5);
  let ty = ((tp - 50) / 2) * -1;
  let tx = ((lp - 50) / 1.5) *.5;
  let grad_pos = `background-position: ${lp}% ${tp}%;`;
  let sprk_pos = `background-position: ${px_spark}% ${py_spark}%;`;
  let opc = `opacity: ${p_opc / 100};`;
  let tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg);`;

  let style = `
  .card:hover:before { background-position: ${lp}% ${tp}%; }  /* gradient */
  .card:hover:after { background-position: ${px_spark}% ${py_spark}%; opacity: ${p_opc / 100}; }   /* sparkles */ 
  `;

  card.classList.remove('active');
  card.style.transform = tf;
  hoverStyle.innerHTML = style;
}

function handleMouseOut() {
  let card = this;
  hoverStyle.innerHTML = '';
  card.removeAttribute('style');
  setTimeout(() => {
    card.classList.add('animated');
  }, 2500);
}

function handleTouchMove(e) {
  handleMouseMove(e);
}

function handleTouchEnd() {
  handleMouseOut.call(this);
}

function handleTouchCancel() {
  handleMouseOut.call(this);
}
</script>

<main id="app">
  <section class="cards">
    <div class="card pika animated">
      {#if cardData}
        <a
          href="https://www.wikidex.net/wiki/Gengar_ex_(Fuerzas_Temporales_TCG)"
          target="_blank"
          style="color: white; text-decoration: none;"
        >
          <img
            class="mb-4"
            src={cardData.data.images.small}
            alt={cardData.data.name}
          />
        </a>
      {/if}
    </div>
  </section>
</main>

<style>

</style>
