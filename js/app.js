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
const navDisplay = document.querySelectorAll('#side-nav .nav span');

const app = document.getElementById('app');

function loadSlickSlider() {
    $('.single-item').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });
}

/* Dynamic loading for product, plus reduced image logic, used map filtering here and convert it to string using join */
function loadProduct() {
    let result = products.map(product => {
        return `
        <div id="${product.id}" class="wrapper no-welcome product-page">
            <div class="page">
                <header class="title-container">
                    <h1>${product.title}</h1>
                    <p></p>
                    <h4>${product.sub}</h4>
                </header>
                <div class="product-container">
                    <div class="single-item">
                        <img src="images/product_0${product.images}_preview_01.jpg" alt="" />
                        <img src="images/product_0${product.images}_preview_02.jpg" alt="" />
                        <img src="images/product_0${product.images}_preview_03.jpg" alt="" />
                    </div>
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
                <div class="tree"></div>
        </div>`
    }).join("");

    const page3Element = app.querySelector('#page-3');

    // Insert the generated HTML after the element with ID 'page-3'
    if (app && page3Element) page3Element.insertAdjacentHTML('afterend', result);
}


/* Dynamic Assigning for pages */
function assignNav() {
    navLinks.forEach((link, index) => {
        link.href = `#${pages[index]}`;
        /* for navitation */
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetSection = document.getElementById(pages[index]);
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest"
            });
        });

        /* for hover and out */

        const targetSection = navDisplay[index];
        targetSection.setAttribute('style', 'visibility: hidden;')
        link.addEventListener('mouseover', (event) => {
            event.preventDefault();
            targetSection.removeAttribute('style');
        });

        link.addEventListener('mouseout', (event) => {
            event.preventDefault();
            targetSection.setAttribute('style', 'visibility: hidden;')
        });
    });
}

/* scroll event handling */
function handleScroll() {
    document.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;
        /* for snow I used the body since the wrapper has its own background*/
        document.body.style.backgroundPosition = `center ${scrollPosition * 0.5}px, center ${scrollPosition * 0.8}px`;
        flyReinder(scrollPosition);
        moveTrees(scrollPosition);
    });
}

/* flying reindeer trigger when scroll */
function flyReinder(scrollPosition) {
    const leftReindeer = document.querySelector("#page-1.wrapper > img:first-of-type");
    const rightReindeer = document.querySelector("#page-1.wrapper > img:last-of-type");

    // Start moving reindeers away when scrolling down
    if (scrollPosition > 100) {  // Adjust this scroll threshold as needed
        leftReindeer.style.transform = "translate(-400px, -400px)"; // Matches `flyLeft` keyframe
        rightReindeer.style.transform = "translate(400px, -400px)"; // Matches `flyRight` keyframe
    } else {
        // Reset reindeers to original positions when scrolling back up
        leftReindeer.style.transform = "translateX(0)";
        rightReindeer.style.transform = "translateX(0)";
    }
}

/* moving trees when scroll */
function moveTrees(scrollPosition) {
    const treeWrapper = document.querySelectorAll(".wrapper:nth-of-type(odd) > .tree");

    treeWrapper.forEach((wrapper, index) => {
        const offset = /* (index % 2 === 0 ? 1 : -1) * */ scrollPosition * 0.5;

        wrapper.style.backgroundPosition = `${offset}px bottom`;
    });
}
/* waiting for the whole page to load first */
window.onload = () => {
    /* all product loaded */
    handleScroll();
    loadProduct();
    loadSlickSlider();
    assignNav();
    /* stored pages */
}

