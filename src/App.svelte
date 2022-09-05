<script>
import Navbar from "./lib/Navbar.svelte";
import Showcase from "./lib/Showcase.svelte";

let amount = 0;
</script>

<main>
  <Navbar />
  <Showcase />
  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://github.com/PaletteJack">PaletteJack</a>.
  </div>
</main>

<style>
  .attribution {
    font-size: 11px; 
    text-align: center; 
    margin: 20px 0;
  }
  .attribution a { color: hsl(228, 45%, 44%); }

  @media screen and (min-width: 1080px) {
    .attribution {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
</style>
