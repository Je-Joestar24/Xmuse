/* all necessary data needed for current logic. */
/* products sliders */
const products = [
    {
        id: "page-4",
        title: "ABOUT PRODUCT #1",
        sub: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        images: 1,
        article: `
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum,
                sequi enim tempora consequatur laboriosam reiciendis repellendus
                similique adipisci! Sunt eligendi quos magnam soluta porro iste
                omnis dolore blanditiis quas quo. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Quidem repellat assumenda dicta
                ullam asperiores, praesentium numquam accusantium ex harum
                voluptatibus, eaque saepe deserunt nulla, ad error. Nobis
                provident cumque iure! lore`,
        price: '$59.50'
    },
    {
        id: "page-5",
        title: "ABOUT PRODUCT #2",
        sub: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        images: 2,
        article: `
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum,
                sequi enim tempora consequatur laboriosam reiciendis repellendus
                similique adipisci! Sunt eligendi quos magnam soluta porro iste
                omnis dolore blanditiis quas quo. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Quidem repellat assumenda dicta
                ullam asperiores, praesentium numquam accusantium ex harum
                voluptatibus, eaque saepe deserunt nulla, ad error. Nobis
                provident cumque iure! lore`,
        price: '$99.50'
    },
    {
        id: "page-6",
        title: "ABOUT PRODUCT #3",
        sub: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        images: 3,
        article: `
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum,
                sequi enim tempora consequatur laboriosam reiciendis repellendus
                similique adipisci! Sunt eligendi quos magnam soluta porro iste
                omnis dolore blanditiis quas quo. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Quidem repellat assumenda dicta
                ullam asperiores, praesentium numquam accusantium ex harum
                voluptatibus, eaque saepe deserunt nulla, ad error. Nobis
                provident cumque iure! lore`,
        price: '$129.50'
    }
];
/* pages */
const pages = "page-1 page-2 page-3 page-4 page-5 page-6 register summary".split(" ");
/* navigation links */
const navLinks = document.querySelectorAll("#side-nav .nav a");

const app = document.getElementById('app');

/* Dynamic loading for product, plus reduced image logic, used map filtering here and convert it to string using join */
function loadProduct() {
    let result = products.map(product => {
        return `
        <div id="${product.id}" class="wrapper no-welcome product-page">
            <header></header>
            <div class="page">
                <header class="title-container">
                    <h1>${product.title}</h1>
                    <p></p>
                    <h4>${product.sub}</h4>
                </header>
                <div class="product-container">
                    <div class="tempo">
                        <img src="images/product_0${product.images}_preview_01.jpg" alt="" />
                        <img src="images/product_0${product.images}_preview_02.jpg" alt="" />
                        <img src="images/product_0${product.images}_preview_03.jpg" alt="" />
                    </div>
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="4"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="4"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                    <form action="#">
                        <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="12" r="9" /></svg>
                        <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="12" r="9" /></svg>
                        <svg width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="12" r="9" /></svg>
                    </form>
                </div>
                <footer>
                    <article>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum,
                        sequi enim tempora consequatur laboriosam reiciendis repellendus
                        similique adipisci! Sunt eligendi quos magnam soluta porro iste
                        omnis dolore blanditiis quas quo. Lorem ipsum dolor, sit amet
                        consectetur adipisicing elit. Quidem repellat assumenda dicta
                        ullam asperiores, praesentium numquam accusantium ex harum
                        voluptatibus, eaque saepe deserunt nulla, ad error. Nobis
                        provident cumque iure! lore
                    </article>
                    <div>
                        <h3>${product.price}</h3>
                        <button>BUY NOW</button>
                    </div>
                </footer>
            </div>
        </div>`
    }).join("");

    const page3Element = app.querySelector('#page-3');

    // Insert the generated HTML after the element with ID 'page-3'
    if (app && page3Element) page3Element.insertAdjacentHTML('afterend', result);
}

function assignNav() {

    navLinks.forEach((link, index) => {
        link.href = `#${pages[index]}`;

        link.addEventListener("click", (event) => {
            event.preventDefault();

            // Find the target section by ID and scroll to it, centered vertically
            const targetSection = document.getElementById(pages[index]);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "nearest"
                });
            }
        });
    });
}

/* waiting for the whole page to load first */
window.onload = () => {

    /* all product loaded */

    loadProduct();
    assignNav();
    /* stored pages */

}

