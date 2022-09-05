<script>
    import { cart } from './stores.js';

    let amount = 0;
    let total = 0;

    cart.subscribe(value => {
        amount = value;
        total = 125 * amount;
    })

    let clicked = false;
    let cartClick = false;

    const handleClick = () => {
        return clicked = !clicked;
    }

    const cartHandle = () => {
        return  cartClick = !cartClick;
    }

    const trashClick = () => {
        cart.update(n => n = 0);
    }

    const categories = ['Collections','Men ','Women','About','Contact'];

</script>

<div>
    <div class="overlay {clicked ? 'overlay-active' : ""}" on:click="{handleClick}"></div>
    <nav class="navbar">
        <div class="burger" on:click="{handleClick}">
            <img src="images/icon-menu.svg" alt="menu-icon">
        </div>
        <div class="logo"><img src="images/logo.svg" alt=""></div>
        <ul class="list {clicked ? 'active' : ""}">
            <div class="x-icon" on:click="{handleClick}">
                <img src="images/icon-close.svg" alt="x-icon">
            </div>
            {#each categories as cat, i}
            <li class="item">
                <a href="#!" class="link">{cat}</a>
                <div class="line-{cat}"></div>
            </li>
            {/each}
        </ul>
        <div class="user-icons">
            <div class="cart-wrap">
                {#if amount != 0}
                <div class="notification">{amount}</div>
                {/if}
                <img on:click="{cartHandle}" id="cart" src="images/icon-cart.svg" alt="cart-icon">
                <div class="cart-menu {cartClick ? "visible" : ""}">
                    <div class="menu-head">
                        <p>Cart</p>
                    </div>
                    <div class="menu-body" style="{amount != 0 ? "" : "display: flex;"}">
                        {#if amount != 0}
                            <div class="checkout">
                                <div class="summary">
                                    <div class="check-img">
                                        <img src="images/image-product-1-thumbnail.jpg" alt="sneaker-preview">
                                    </div>
                                <div class="check-desc">
                                    <p id="shoe">Autumn Limited Edition Sneakers</p>
                                    <p id='cost'>$125.00 x {amount} <strong style="color: black;">${total}.00</strong></p>
                                </div>
                                <div class="check-trash">
                                    <img src="images/icon-delete.svg" alt="trash" on:click="{trashClick}">
                                </div>
                                </div>
                                <div class="checkout-btn">
                                    <button>Checkout</button>
                                </div>
                            </div>
                        {:else}
                        <div class="empty">
                            <p>Your cart is empty.</p>
                        </div>
                        {/if}
                    </div>
                </div>
            </div>
            <img id="profile" src="images/image-avatar.png" alt="profile-pic">
        </div>
    </nav>
</div>

<style>

    /* --------------------Global classes-------------------- */
    :global(.active) {
        left: 0% !important;

    }
    :global(.overlay-active) {
        z-index: 4 !important;
        display: block !important;
    }
    :global(.visible) {
        opacity: 1 !important;
        z-index: 1 ;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    /* --------------------Black overlay-------------------- */
    .overlay {
        display: none;
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0.6;
    }

    /* --------------------Navbar styles-------------------- */
    .navbar {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        border-bottom: 2px solid rgba(211, 211, 211, 0.6);
        font-family: 'Kumbh Sans', sans-serif;
        padding-top: 15px;
        padding-bottom: 30px;
    }

    .burger {
        display: none;
        margin: 0 18px 0 20px
    }

    .burger:hover {
        cursor: pointer;
    }

    .logo img {
        width: 200px;
    }

    .list {
        display: flex;
        position: relative;
        flex-direction: row;
        padding: 0;
        list-style: none;
        width: 30vw;
        margin-left: 50px;
        transition: all .3s ease;
    }

    .x-icon {
        display: none;
    }
    .x-icon:hover {
        cursor: pointer;
    }

    .item {
        margin: 0 20px;
        position: relative;
    }

    .item div {
        position: absolute;
        right: 0;
        bottom: -52px;
        height: 4px;
        background-color: orange;
        opacity: 0;
        transition: width .5s ease;
        width: 0px;
    }

    .item:hover .line-Collections{opacity: 1;width: 80px;}
    .item:hover .line-Men{ opacity: 1; width: 40px;}
    .item:hover .line-Women{ opacity: 1; width: 60px;}
    .item:hover .line-About{ opacity: 1; width: 50px;}
    .item:hover .line-Contact{ opacity: 1; width: 60px;}

    a {
        text-decoration: none;
        color: hsl(219, 9%, 45%);
    }

    .user-icons {
        margin-left: auto;
        float: right;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    /* --------------------Cart Menu Styles-------------------- */
    .cart-wrap {
        position: relative;
    }

    .notification {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: .9rem;
        font-family: 'Kumbh sans', sans-serif;
        font-weight: 700;
        color: white;
        background-color: hsl(26, 100%, 55%);
        border-radius: 50%;
        width: 20px;
        height: 17px;
        text-align: center;
        right: 30px;
        top: -8px;
    }

    .cart-menu {
        opacity: 0;
        position: absolute;
        top: 50px;
        left: -120%;
        background-color: white;
        width: min(100vw, 340px);
        height: 240px;
        box-shadow: 0px 9px 30px 0px rgba(0, 0, 0, 0.2);
        display: grid;
        grid-template-rows: 1fr 3fr;
        border-radius: 10px;
    }

    .menu-head {
        display: flex;
        align-items: center;
        font-weight: 700;
        border-bottom: 1px solid rgba(211, 211, 211, 0.6);
    }
    .menu-head p{ margin-left: 20px;  }

    /* --------------------Checkout Bottom-------------------- */
    .checkout {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding: 20px;
    }

    .summary {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
    }

    .check-img   img { width: 50px; border-radius: 5px; }
    .check-desc  { 
        display: flex; 
        flex-direction: column; 
        gap: 0px;
    }

    .check-desc  p { 
        margin: 4px 0;
        padding: 0;
    }

    #shoe {
        width: 200px;
        color: grey;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }

    #cart {
        margin: 0 40px;
    }

    #cost {
        color: grey;
    }

    #cost strong {
        margin-left: 15px;
    }

    .check-trash img:hover{ cursor: pointer;}

    /* --------------------Checkout Button-------------------- */
    .checkout-btn {
        display: flex; 
        height: 100%;
        align-items: center;
        justify-content: center;
    }

    .checkout-btn button {
        font-family: 'Kumbh Sans', sans-serif;
        font-weight: 700;
        font-size: 1rem;
        border: none;
        background-color: hsl(26, 100%, 55%);
        color: white;
        width: 100%;
        height: 50px;
        border-radius: 10px;
    }

    /* --------------------Cart Empty-------------------- */
    .empty {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        color: hsl(219, 9%, 45%);
    }

    /* --------------------Icon styling-------------------- */
    .user-icons #profile {
        width: 60px;
        border-radius: 50%;
        border: 2px solid transparent;
        user-select: none;
        -moz-user-select: none;
    }

    #cart:hover, #profile:hover {
        cursor: pointer;
    }

    #profile:hover {
        border: 3px solid hsl(26, 100%, 55%);
    }

    /* --------------------Media Queries-------------------- */
    @media screen and (max-width: 840px) {

        .burger {
            display: block;
        }

        .x-icon {
            display: block;
            position: absolute;
            top: 25px;
            left:25px;
        }

        .notification {
            top: 16px;
            right: 90px;
        }

        .navbar {
            width: 100vw;
            padding: 15px 40px 15px 0;
            position: relative;
            border-bottom: none;
        }

        .list {
            position: fixed;
            padding-top: 80px;
            top: 0;
            left: min(-60vw, -275px);
            margin: 0;
            flex-direction: column;
            background-color: white;
            height: 100%;
            width: min(60vw, 275px);
            z-index: 5 !important;
        }

        .item {
            display: block;
            font-weight: 700;
            margin: 15px 0 15px 20px;
        }

        .item a {
            color: black;
            font-size: 1.2rem;
        }

        .item:hover {cursor: pointer;}

        .item div {
            position: absolute;
            height: 3px;
            bottom: 0;
            background-color: orange;
            opacity: 0;
            width: 0;
        }

        .logo img {
            width: auto;
        }

        #cart {
            margin: 0 20px ;
        }

        .cart-wrap {
            position: static;
        }

        .cart-menu {
            top: 75px;
            left: 50% !important;
            transform: translateX(-50%);
        }

        .user-icons #profile {
            width: 40px;
        }

        .item:hover div {opacity:1; width: 100% !important;}
    }

    @media screen and (max-width: 1080px) {
        .cart-menu {
            left: -200%;
            margin: 0;
        }
    }

</style>