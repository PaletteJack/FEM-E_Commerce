<script>
import { cart } from './stores.js';

let count = 0;

const countCalc = (plusOrminus) => {
    switch (plusOrminus) {
        case '+':
            count++;
            break;
        case '-':
            count--;
            break;
    }
    if (count < 0) count = 0;
}

const buttonSubmit = (number) => {
    cart.update(n => n = count);
}

</script>

<main>
    <div class="desc-contain">
        <p id="tagline">SNEAKER COMPANY</p>
        <h1>Fall Limited Edition Sneakers</h1>
        <p id="description">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
        </p>
        <div id="price-wrapper">
            <h3 id="price">$125.00</h3> 
            <p id="discount">50%</p>
            <p id="price-old">$250.00</p>
        </div>
        <div id="btn-wrapper">
            <div class="counter">
                <span id="left" on:click={() => countCalc('-')}>-</span>
                <span id="middle">
                    <p>{count}</p>
                </span>
                <span id="right" on:click={() => countCalc('+')}>+</span>
            </div>
            <button on:click="{() => buttonSubmit(count)}"> 
            <svg id="cart-icon" width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#FFFFFF" fill-rule="nonzero"/></svg> 
            Add to cart
            </button>
        </div>
    </div>
</main>

<style>

    main {
        height: 100%;
        font-family: 'Kumbh sans', sans-serif;
    }

    .desc-contain {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 5rem;
        padding-left: 3rem;
        padding-right: 2px;
    }

    .desc-contain * {
        margin-right: auto;
    }

    h1 {
        font-size: 2.5em;
        text-align: start;
        line-height: 100%;
        margin: 0;
        margin-top: .8rem;
    }

    p {
        display: inline-block;
        text-align: start;
        margin: 0;
    }

    #tagline {
        font-size: .7rem;
        font-weight: bold;
        letter-spacing: 2px;
        color: hsl(26, 100%, 55%);
    }

    #description {
        margin-top: 1.5rem;
        line-height: 1.5;
    }

    #price {
        display: inline-block;
        font-size: 1.5rem;
        margin-bottom: .5rem;
        margin-right: .5rem;
    }

    #discount {
        display: inline-block;
        color: hsl(26, 100%, 55%);
        background-color: hsl(25, 100%, 94%);
        font-size: .8rem;
        font-weight: bold;
        vertical-align: middle;
        padding: 3px 7px;
        margin-bottom: .5rem;
        border-radius: 4px;
    }

    #price-old {
        display: block;
        color: #BBBEC5;
        text-decoration: line-through;
        font-size: .8rem;
        margin: 0;
    }

    #btn-wrapper {
        display: flex;
        margin-top: 2rem;
        gap: 20px;
    }

    button {
        color: white;
        background-color: hsl(26, 100%, 55%);
        border: none;
        padding: .9rem 5rem;
        border-radius: 7px;
        margin-left: .6rem;
        vertical-align: middle;
    }

    button:hover {
        cursor: pointer;
    }

    button:active {
        background-color: #FFAC6A;
    }

    #cart-icon {
        vertical-align: middle;
        margin-right: .5rem;
    }
    /* ------------------Counter------------------ */

    .counter {
        width: 140px;
        height: 50px;
        display: grid;
        background-color: #F7F8FD;
        border-radius: 5px;
        grid-template-columns: 1fr 1fr 1fr;
        text-align: center;
    }

    .counter span {
        color: hsl(26, 100%, 55%);
        font-size: 2rem;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -o-user-select: none;
        user-select: none;
    }

    .counter span:hover {
        cursor: pointer;
    }

    #left, #middle, #right {
        width: 100%;
    }

    .counter span p {
        font-weight: bold;
        color: black;
        font-size: 1.1rem;
    }

    /* ------------------Media Queries------------------ */

    @media screen and (max-width: 1040px) {
            .desc-contain {
            padding-top: 0;
            padding-right: 40px;
        }

        .counter {
            margin: 0 !important;
            width: 100%;
        }
        button {
         margin: 0 !important;
         font-weight: 700;
         font-size: 1.2rem;
        }
        #btn-wrapper {
            margin: 15px 0 0 0;
            width: 100%;
            flex-direction: column;
        }

        #price-wrapper {
            margin: 20px 0 0 0 !important;
            width: 100%;
        }

        #price {
            margin: 0 10px 0 0;
        }

        #discount {
            font-size: .9rem;
        }

        #price-old {
            float: right;
            font-size: 1.1rem;
            font-weight: 700;
        }
    }

    @media screen and (max-width: 480px) {
        .desc-contain {
            padding: 0;
            margin: 0 15px;
        }
    }

</style>