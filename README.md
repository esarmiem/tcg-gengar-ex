# TCG Gengar Ex Viewer

Este proyecto es una aplicación web para visualizar detalles de la carta Pokémon TCG Gengar ex (Temporal Forces 104) utilizando la API de Pokémon TCG.

![image](https://github.com/esarmiem/tcg-gengar-ex/assets/114357859/ede57ad9-e1e2-4355-984d-33c3c518e3aa)


## Tecnologías Utilizadas

- **Frontend**: Desarrollado con [Vite](https://vitejs.dev/) y [Svelte](https://svelte.dev/) para un entorno de desarrollo rápido y eficiente.
- **Gestor de Dependencias**: Utiliza [Bun](https://bun.sh/) para la gestión de paquetes y dependencias.
- **API**: Accede a la [Pokémon TCG API](https://dev.pokemontcg.io/) para obtener datos de las cartas (registrate y puedes obtener gratis una API key).

## Comenzando

Antes de comenzar, asegúrate de tener instalado Bun en tu sistema.

### Instalación

1. Clona el repositorio:

`
git clone https://github.com/esarmiem/tcg-gengar-ex.git
`

2. Navega al directorio del proyecto:

`
cd tcg-gengar-ex
`

3. Instala las dependencias con Bun:

`
bun install
`

4. Crea en la ruta principal del proyecto un archivo con nombre `.env.local` y ahí agrega tu api key

`
VITE_API_KEY=aquí-pegas-tu-apikey-generada
`

5. Inicia el servidor de desarrollo:

`
bun run dev
`

## Funcionalidad

La aplicación muestra detalles de la carta Gengar ex (Temporal Forces 104) y permite a los usuarios ver más información sobre la carta al hacer clic en ella, lo que redirige a la página correspondiente de Bulbapedia.

Si deseas ver otra carta simplemente debes cambiar el id de la carta por otro de la documentación [pokemon-tcg-data](https://github.com/PokemonTCG/pokemon-tcg-data)

`
const id = "sv5-104"; // Reemplaza con el ID de la carta que deseas buscar
`

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request antes de enviar cambios.

## Licencia

Este proyecto está licenciado bajo la licencia MIT - mira el archivo [LICENSE](LICENSE) para detalles.
