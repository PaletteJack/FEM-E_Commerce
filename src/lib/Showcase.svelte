<script>
import Gallery from "./Gallery.svelte";
import Description from "./Description.svelte";

</script>

<section id="showcase">
    <div class="container">
        <div class="left">
            <Gallery />
        </div>
        <div class="right">
            <Description />
        </div>
    </div>
</section>

<style>

    .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: .25fr;
        padding: 4rem 3rem 0;
    }

    @media screen and (min-width: 1480px) {
        .container {
            padding: 4rem 9vw 0;
        }   
    }

    @media screen and (max-width: 1080px) {
        .container {
            margin: 0 auto;
            width: min(100vw, 35rem);
            justify-items: center;
            grid-template-columns: 1fr;
            grid-template-rows: auto 1fr;
            gap: 20px;
        }
    }

    @media screen and (max-width: 840px) {
        .container {
            padding: 0;
        }

        .right {
            margin-bottom: 4rem;
        }
    }

    @media screen and (max-width: 480px) {
        .left {
            height: auto;
        }
    }

</style>