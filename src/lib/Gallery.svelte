<script>

const imagesMain = [
    'images/image-product-1.jpg',
    'images/image-product-2.jpg',
    'images/image-product-3.jpg',
    'images/image-product-4.jpg'
]
const imagesPrev = [
    'images/image-product-1-thumbnail.jpg',
    'images/image-product-2-thumbnail.jpg',
    'images/image-product-3-thumbnail.jpg',
    'images/image-product-4-thumbnail.jpg'
]

const navClick = (text) => {
    const currentImage = document.querySelector(".active-img");
    const currentIndex = parseInt(currentImage.getAttribute("data-index").replace('LB-', ''));

    if (text === 'next') {
        let nextPic = 0;
        if (currentIndex == 3) {
            nextPic = 0;
            currentImage.classList.remove('active-img');
            document.querySelector(`[data-index="LB-${nextPic}"]`).classList.add('active-img');
        } else {
            nextPic = currentIndex + 1;
            currentImage.classList.remove('active-img');
            document.querySelector(`[data-index="LB-${nextPic}"]`).classList.add('active-img');
        }
    }

    if (text === 'prev') {
        let nextPic = 0;
        if (currentIndex == 0) {
            nextPic = 3;
            currentImage.classList.remove('active-img');
            document.querySelector(`[data-index="LB-${nextPic}"]`).classList.add('active-img');
        } else {
            nextPic = currentIndex - 1;
            currentImage.classList.remove('active-img');
            document.querySelector(`[data-index="LB-${nextPic}"]`).classList.add('active-img');
        }
    }
}

const mainNavClick = (text) => {
    const currentImage = document.querySelector(".active");
    const currentIndex = parseInt(currentImage.getAttribute("data-index"));

    if (text === 'next') {
        let nextPic = 0;
        if (currentIndex == 3) {
            nextPic = 0;
            currentImage.classList.remove('active');
            document.querySelector(`[data-index="${nextPic}"]`).classList.add('active');
        } else {
            nextPic = currentIndex + 1;
            currentImage.classList.remove('active');
            document.querySelector(`[data-index="${nextPic}"]`).classList.add('active');
        }
    }

    if (text === 'prev') {
        let nextPic = 0;
        if (currentIndex == 0) {
            nextPic = 3;
            currentImage.classList.remove('active');
            document.querySelector(`[data-index="${nextPic}"]`).classList.add('active');
        } else {
            nextPic = currentIndex - 1;
            currentImage.classList.remove('active');
            document.querySelector(`[data-index="${nextPic}"]`).classList.add('active');
        }
    }
}

const imgClickLB =  (index) => {
    const currentImage = document.querySelector(".active-img");
    currentImage.classList.remove('active-img')
    document.querySelector(`[data-index="LB-${index}"]`).classList.add('active-img');
    
}

const imgClick =  (index) => {
    const currentImage = document.querySelector(".active");
    currentImage.classList.remove('active')
    document.querySelector(`[data-index="${index}"]`).classList.add('active');
    
}

let clicked = false;

const handleClick = () => clicked = !clicked;

</script>

<main>
    {#if clicked}
    <div class="overlay overlay-active" on:click="{handleClick}">
    </div>
    <div class="lightbox">
        <div class="close" on:click="{handleClick}">
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="white" fill-rule="evenodd"/></svg>
        </div>
        <div class="control prev" on:click="{() => navClick('prev')}">
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
        </div>
        <div class="control next" on:click="{() => navClick('next')}">
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
        </div>
        <img class="image-list active-img" src="{imagesMain[0]}" alt="shoes-0" data-index="LB-0">
        {#each imagesMain as img, i}
            {#if i != 0}
                <img class="image-list" src="{img}" alt="shoes-{i}" data-index="LB-{i}">
            {/if}
        {/each}
        <div class="thumb-preview">
            {#each imagesPrev as img, i}
            <div class="thumb-wrapper" on:click="{() => imgClickLB(i)}">
                <img tabindex="0" class="thumb-image" src="{img}" alt="preview-{i}" data-index="LB-{i}">
            </div>
            {/each}
        </div>
    </div>
    {/if}

    <div class="container">
        <div class="main-picture" on:click="{handleClick}">
            <img class="main-image active" src="{imagesMain[0]}" alt="main-img" data-index="0">
            {#each imagesMain as img, i}
                {#if i != 0}
                    <img class="main-image" src="{img}" data-index="{i}" alt="main-{i}">
                {/if}
            {/each}
        <div class="m-control m-prev" on:click="{() => mainNavClick('prev')}">
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
        </div>
        <div class="m-control m-next" on:click="{() => mainNavClick('next')}">
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
        </div>
        <div class="picture-previews">
            {#each imagesPrev as img, i}
            <div class="prev-wrapper">
                <img tabindex="0" class="preview-image" src="{img}" data-index="{i}" alt="preview-{i}" on:click="{() => imgClick(i)}">
            </div>
            {/each}
        </div>
    </div>
</main>

<style>
    :global(.overlay-active) {
        display: block;
        z-index: 1;
    }

    /* ------------------Lightbox------------------ */

    .overlay {
        display: none;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: black;
        opacity: 0.7;
    }

    .close {
        position: absolute;
        top: -45px;
        right: 10px;
        scale: 1.3;
        z-index: 3;
    }
    .close:hover {cursor: pointer;}
    .close:hover svg path {fill:hsl(26, 100%, 55%);}

    .lightbox {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 35rem;
        height: 35rem;
        transform: translate(-50%, -50%);
        z-index: 5;
    }

    .image-list {
        position: absolute;
        width: 35rem;
        height: 35rem;
        border-radius: 15px;
        opacity: 0;
        transition: all .2s ease;
        transition-delay: 200ms;
    }

    .active-img {
        opacity: 1;
        z-index: 2;
        user-select: none;
        -moz-user-select: none;
        transition-delay: 0ms;
    }

    .control {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 50%;
        transform: translateY(-50%);
        background-color: white;
        border-radius: 50%;
        height: 50px;
        width: 50px;
        z-index: 3;
    }

    .m-control {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 50%;
        transform: translateY(-50%);
        background-color: white;
        border-radius: 50%;
        height: 50px;
        width: 50px;
    }
    .control:hover, .m-control:hover {cursor: pointer;}
    .prev {left: -25px;}
    .next {right: -25px;}
    .prev:hover svg path, .next:hover svg path {
        stroke: hsl(26, 100%, 55%);
    }

    .thumb-preview {
        display: flex;
        position: absolute;
        bottom: -22%;
        width: 100%;
        align-items: center;
        justify-content: space-around;
    }

    .thumb-image {
        width: 90px;
        height: 90px;
        border-radius: 10px;
    }

    .thumb-wrapper:hover {
        cursor: pointer;
        position: relative;
    }

    /* ------------------Picture display------------------ */
    .container {
        display: flex;
        flex-direction: column;
        position: relative;
        max-width: 30rem;
        gap: 20px;
    }

    .main-image {
        width: min(100vw, 30rem);
        height: 30rem;
        border-radius: 15px;
        position: absolute;
        opacity: 0;
        left: 0;
        object-fit: cover;
        object-position: center;
    }

    .main-picture {
        position: relative;
    }

    .m-prev {left: 10px; display: none;}
    .m-next {right: 10px; display: none;}
    .m-prev:hover svg path, .m-next:hover svg path {
        stroke: hsl(26, 100%, 55%);
    }

    .active {
        z-index: 1;
        position: static;
        opacity: 1;
        user-select: none;
        -moz-user-select: none;
        transition-delay: 0ms;
    }

    .picture-previews {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .preview-image {
        width: 90px;
        height: 90px;
        border-radius: 10px;
    }

    .prev-wrapper:hover {
        cursor: pointer;
        position: relative;
    }

    .preview-image, .thumb-image {
        border: 3px solid transparent;
    }

    .preview-image:hover,
    .thumb-image:hover,
    .preview-image:focus,
    .thumb-image:focus {
        border: 3px solid hsl(26, 100%, 55%);
        filter: brightness(0.7);
    }

    @media screen and (max-width: 30rem) {
        .main-image {
          height: 35vh;
          border-radius: 0;
        }
    }

    @media screen and (max-width: 840px) {

        .m-prev {display: flex;}
        .m-next {display: flex;}

        .picture-previews {
          display: none;
        }

        .lightbox, .overlay {
            display: none !important;
        }
    }

</style>