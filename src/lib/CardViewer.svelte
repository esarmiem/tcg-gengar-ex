<script>
  import { onMount } from "svelte";
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
</script>

<main>
  <section class="cards">
    <div class="card">
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
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .card {
    transition: 0.5s ease;
    cursor: pointer;
    object-fit: contain;
  }

  .card:hover {
    transform: scale(1.1);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.8);
  }
</style>
