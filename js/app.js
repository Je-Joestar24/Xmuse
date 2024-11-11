/* A class for App to make it more clean since these methods and properties belongs to the app */
class App {
    /* The app itself the whole page */
    app = document.getElementById('app');
    /* pages */
    pages = "page-1 page-2 page-3 page-4 page-5 page-6 register summary".split(" ");
    /* navigation links */
    navLinks = document.querySelectorAll("#side-nav .nav a");
    navDisplay = document.querySelectorAll('#side-nav .nav span');

    /* products, with id title sub title image counter/needed number, article then price */
    /* all necessary data needed for current logic. */
    products = [
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

    /* social media icons for hovering */
    socialIcons = [
        { defaultSrc: 'images/icon_fb_01.png', hoverSrc: 'images/icon_fb_02.png' },
        { defaultSrc: 'images/icon_twitter_01.png', hoverSrc: 'images/icon_twitter_02.png' },
        { defaultSrc: 'images/icon_gplus_01.png', hoverSrc: 'images/icon_gplus_02.png' },
        { defaultSrc: 'images/icon_instagram_01.png', hoverSrc: 'images/icon_instagram_02.png' },
        { defaultSrc: 'images/icon_pinterest_01.png', hoverSrc: 'images/icon_pinterest_02.png' },
        { defaultSrc: 'images/icon_tumblr_01.png', hoverSrc: 'images/icon_tumblr_02.png' },
        { defaultSrc: 'images/icon_vimeo_01.png', hoverSrc: 'images/icon_vimeo_02.png' }
    ];

    /* The slicker where I used the jquery template */
    loadSlickSlider() {
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

    /* Dynamic loading for products to reduce reduntant html code, plus reduced image logic, used map filtering here and convert it to string using join */
    loadProduct() {
        const result = this.products.map(product => `
            <div id="${product.id}" class="wrapper no-welcome product-page">
                <div class="page">
                    <header class="title-container">
                        <h1>${product.title}</h1>
                        <p></p>
                        <h4>${product.sub}</h4>
                    </header>
                    <div class="product-container">
                        <div class="single-item">
                            <img src="images/product_0${product.images}_preview_01.jpg" alt="Image 1 for ${product.title}" />
                            <img src="images/product_0${product.images}_preview_02.jpg" alt="Image 2 for ${product.title}" />
                            <img src="images/product_0${product.images}_preview_03.jpg" alt="Image 3 for ${product.title}" />
                        </div>
                    </div>
                    <footer>
                        <article>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
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
            </div>
        `).join("");

        const page3Element = this.app.querySelector('#page-3');

        // Insert generated HTML after element with ID 'page-3' if it exists
        if (page3Element) {
            page3Element.insertAdjacentHTML('afterend', result);
        } else {
            alert("Element with ID 'page-3' not found.");
        }
    }

    /* HOver effects to the icons */
    addIconHoverEffects() {
        // Select all social icons within the .contacts-2 container
        const iconElements = this.app.querySelectorAll('.contacts-2 img');

        iconElements.forEach((iconElement, index) => {
            const icon = this.socialIcons[index];
            if (icon) {
                // Set default image source
                iconElement.src = icon.defaultSrc;

                // Add event listeners for hover effect
                iconElement.addEventListener('mouseover', () => {
                    iconElement.src = icon.hoverSrc;
                });
                iconElement.addEventListener('mouseout', () => {
                    iconElement.src = icon.defaultSrc;
                });
            }
        });
    }

    /* Dynamic Assigning for pages */
    assignNav() {
        this.navLinks.forEach((link, index) => {
            /* Setting the href  */
            link.href = `#${this.pages[index]}`;
            /* for navitation auto scroll animation */
            link.addEventListener("click", (event) => {
                event.preventDefault();
                const targetSection = document.getElementById(this.pages[index]);
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "nearest"
                });
            });

            /* for hover and out to display the Navigation Label */
            const targetSection = this.navDisplay[index];
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

    /* flying reindeer trigger when scroll */
    /* I'll fix this to class */
    flyReindeer(scrollPosition) {
        const leftReindeer = this.app.querySelector("#page-1.wrapper > img:first-of-type");
        const rightReindeer = this.app.querySelector("#page-1.wrapper > img:last-of-type");
    
        if (scrollPosition > 100) {
            // Add classes to move reindeer when scrolled down
            leftReindeer.classList.add("move-left");
            rightReindeer.classList.add("move-right");
        } else {
            // Remove classes to reset reindeer when scrolling back up
            leftReindeer.classList.remove("move-left");
            rightReindeer.classList.remove("move-right");
        }
    }
    
    

    /* moving trees when scroll */
    moveTrees(scrollPosition) {
        const treeWrapper = document.querySelectorAll(".wrapper:nth-of-type(odd) > .tree");

        treeWrapper.forEach((wrapper, index) => {
            const offset = /* (index % 2 === 0 ? 1 : -1) * */ scrollPosition * 0.5;

            wrapper.style.backgroundPosition = `-${offset}px bottom`;
        });
    }

    /* scroll event handling */
    handleScroll() {
        document.addEventListener("scroll", () => {
            const scrollPosition = window.scrollY;
            /* for snow, I used the body since the wrapper has its own background*/
            document.body.style.backgroundPosition = `center ${scrollPosition * 0.5}px, center ${scrollPosition * 0.8}px`;
            this.flyReindeer(scrollPosition);
            this.moveTrees(scrollPosition);
        });
    }

}
/* waiting for the whole page to load first */
window.onload = () => {
    /* handle snow and tree animation */
    const app = new App();

    app.handleScroll();
    /* all product loaded */
    app.loadProduct();
    /* After loading the products load the sliders */
    app.loadSlickSlider();
    /* Add the hover effects for the images */
    app.addIconHoverEffects();
    /* After all necessary pages and id, assign teh navbar */
    app.assignNav();
    /* added additional animation for snow */
    /* stored pages */
}

