//global structure
let body = document.querySelector('body');
let wrapper = document.getElementById('wrapper');
let mainFrag= document.createDocumentFragment();
let header = document.createElement('header');
let main = document.createElement('main');
let footer = document.createElement('footer')
mainFrag.appendChild(header);
mainFrag.appendChild(main);
mainFrag.appendChild(footer);
wrapper.appendChild(mainFrag);
//header
let headerWrapper = document.createElement('div');
headerWrapper.classList.add('header-wrapper');
let headerLogo = document.createElement('a');
headerLogo.classList.add('header-logo');
header.appendChild(headerWrapper);
headerWrapper.appendChild(headerLogo);


//main
let mainWrapper = document.createElement('div');
mainWrapper.classList.add('main-wrapper');
let cartContainer = document.createElement('div');
cartContainer.classList.add('cart-container', 'drop-container');
let shelf = document.createElement('div');
shelf.classList.add('shelf-wrapper');
main.appendChild(mainWrapper);
mainWrapper.appendChild(shelf);
mainWrapper.appendChild(cartContainer);

//main -cart
let orderHref = "./confirm/order.html";
let cartFragment = document.createDocumentFragment();
let cartHeader = document.createElement('div');
cartHeader.classList.add('cart-header');
let cart = document.createElement('div');
cart.classList.add('cart');
let cartFooter = document.createElement('div');
cartFooter.classList.add('cart-footer');
let cartName = document.createElement('p');
cartName.innerHTML = "Shopping Cart";
cartName.classList.add('cart-name');
let confirmOrderTop = document.createElement('a');
confirmOrderTop.classList.add('confirm-order');
let confirmOrderBottom = document.createElement('a');
confirmOrderBottom.classList.add('confirm-order');
confirmOrderTop.href = orderHref;
confirmOrderBottom.href = orderHref;
let totalAmountTextTop = document.createElement('p');
let totalAmountTextBottom = document.createElement('p');
let totalCount = 0;
updateTotalAmount(totalCount);
totalAmountTextTop.classList.add('total-amount-text');
totalAmountTextBottom.classList.add('total-amount-text');
let confirmBtnTxt = 'Confirm Order <a href="#"></a>';
confirmOrderTop.innerHTML = confirmBtnTxt;
confirmOrderBottom.innerHTML = confirmBtnTxt;
cartHeader.appendChild(cartName);
cartHeader.appendChild(totalAmountTextTop);
cartHeader.appendChild(confirmOrderTop);
cartFooter.appendChild(totalAmountTextBottom);
cartFooter.appendChild(confirmOrderBottom);
cartFragment.appendChild(cartHeader);
cartFragment.appendChild(cart);
cartFragment.appendChild(cartFooter);
cartContainer.appendChild(cartFragment);

//header-logo
headerLogo.innerHTML = "<span class='logo-span'>Ju's</span> Bookstore"
headerLogo.href="https://hopelessju.github.io/book-shop/"

//footer
let footerWrapper = document.createElement ('div');
footerWrapper.classList.add('footer-wrapper');
footer.appendChild(footerWrapper);
let footerContent = document.createElement('div');
footerContent.classList.add('footer-content');
footerWrapper.appendChild(footerContent);
let gitLink = document.createElement('a');
gitLink.classList.add('git-link');
let year = document.createElement('p');
year.classList.add('year');
let rssLink = document.createElement('a');
rssLink.classList.add('rss-link');
footerContent.appendChild(gitLink);
footerContent.appendChild(year);
footerContent.appendChild(rssLink);
gitLink.href="https://github.com/HopelessJu";
gitLink.innerHTML= "<img src='./assets/icons/git.svg' height=48 width=48>"
rssLink.href="https://rs.school/";
rssLink.innerHTML= "<img src='./assets/icons/rss.svg' height=72  width=72>";
year.innerHTML="2022 © Aliaksandra Tsikhmanovich";

//fragments
function library(books) {
    let bookFrag = document.createDocumentFragment();
    books.forEach(book => {
        let bookSlot = document.createElement('div');
        bookSlot.classList.add('book-slot', 'draggable');
        bookSlot.setAttribute('draggable', 'true')
        let cover = document.createElement('img');
        cover.classList.add('book-cover');
        cover.src = book.imageLink;
        let bookAbout = document.createElement('div');
        bookAbout.classList.add('book-about');
        let bookTitle = document.createElement('p');
        bookTitle.classList.add('book-title');
        let bookAuthor = document.createElement('p');
        bookAuthor.classList.add('book-author');
        let bookPrice = document.createElement('p');
        bookPrice.classList.add('book-price');
        let showMoreBtn = document.createElement('button');
        showMoreBtn.classList.add('show-more-btn');
        let addToCartBtn = document.createElement('button');
        addToCartBtn.classList.add('add-to-cart-btn');
        let btnContainer = document.createElement('div');
        btnContainer.classList.add('btn-container');
        let showMorePopup = document.createElement('div');
        showMorePopup.classList.add('show-more-popup');
        bookAuthor.innerHTML ='By' + ' ' + book.author;
        bookTitle.innerHTML = book.title;
        bookPrice.innerHTML = book.price + '$';
        bookAbout.appendChild(bookTitle);
        bookAbout.appendChild(bookAuthor);
        bookAbout.appendChild(bookPrice);
        bookSlot.appendChild(cover);
        bookSlot.appendChild(bookAbout);
        btnContainer.appendChild(showMoreBtn);
        btnContainer.appendChild(addToCartBtn);
        bookSlot.appendChild(btnContainer);
        bookFrag.appendChild(bookSlot);

        let showMoreFrag = document.createDocumentFragment();
        let showMoreContainer = document.createElement('div');
        showMoreContainer.classList.add('show-more-container');
        let showMoreTextContainer = document.createElement('div');
        showMoreTextContainer.classList.add('show-more-text-container');
        let showMoreTitle = document.createElement('p');
        showMoreTitle.classList.add('show-more-title');
        showMoreTitle.innerHTML = book.title;
        let showMoreAuthor = document.createElement('p');
        showMoreAuthor.classList.add('show-more-author');
        showMoreAuthor.innerHTML = 'by' + ' ' + book.author;
        let showMoreDescription = document.createElement('p');
        showMoreDescription.classList.add('show-more-description');
        showMoreDescription.innerHTML = book.description;
        showMoreTextContainer.appendChild(showMoreTitle);
        showMoreTextContainer.appendChild(showMoreAuthor);
        showMoreTextContainer.appendChild(showMoreDescription);
        let showMoreCloseBtn = document.createElement('button');
        showMoreCloseBtn.classList.add('show-more-close-btn');
        showMoreCloseBtn.innerText= "Close"
        showMoreContainer.appendChild(showMoreTextContainer);
        showMoreContainer.appendChild(showMoreCloseBtn);
        showMoreFrag.appendChild(showMoreContainer);
        showMorePopup.appendChild(showMoreFrag);

        bookSlot.appendChild(cover);
        bookSlot.appendChild(bookAbout);
        btnContainer.appendChild(showMoreBtn);
        btnContainer.appendChild(addToCartBtn);
        bookSlot.appendChild(btnContainer);
        bookFrag.appendChild(bookSlot);
        shelf.appendChild(bookFrag);

        showMoreBtn.addEventListener("click", () => {
            body.appendChild(showMorePopup);
            body.classList.add('hidden');
        })
        showMoreCloseBtn.addEventListener("click", () => {
            body.removeChild(showMorePopup);
            body.classList.remove('hidden');
        })
        addToCartBtn.addEventListener("click", () => addBookToCart(book));

        bookSlot.addEventListener('dragstart', () => {
            cart.classList.add('while-drag');
        });

        bookSlot.addEventListener('dragend', (e) => {
            cart.classList.remove('while-drag');
            const dragArea = document.querySelector('.drop-container').getBoundingClientRect();
            const inX = e.clientX > dragArea.x && e.clientX < dragArea.x + dragArea.width;
            const inY = e.clientY > dragArea.y && e.clientY < dragArea.y + dragArea.height;
            if (inX && inY) {
                addBookToCart(book);
            }
        })
    })
};

cartContainer.addEventListener('dragover', e => {
    e.preventDefault();
});


function addBookToCart(book) {
    let cover = document.createElement('img');
        cover.classList.add('book-cover');
        cover.src = book.imageLink;
        let bookAbout = document.createElement('div');
        bookAbout.classList.add('book-about');
        let bookTitle = document.createElement('p');
        bookTitle.classList.add('book-title');
        let bookAuthor = document.createElement('p');
        bookAuthor.classList.add('book-author');
        let bookPrice = document.createElement('p');
        bookPrice.classList.add('book-price');
        let addedBook = document.createElement('div');
        addedBook.classList.add('added-book');
        bookAuthor.innerHTML ='By' + ' ' + book.author;
        bookTitle.innerHTML = book.title;
        bookPrice.innerHTML = book.price + '$';
        let removeFromCartBtn = document.createElement('button');
        removeFromCartBtn.classList.add('remove-from-cart-btn');
        addedBook.appendChild(removeFromCartBtn);
        bookAbout.appendChild(bookTitle);
        bookAbout.appendChild(bookAuthor);
        addedBook.appendChild(cover);
        addedBook.appendChild(bookAbout);
        addedBook.appendChild(bookPrice);
        updateTotalAmount(book.price);
        cart.appendChild(addedBook);
        removeFromCartBtn.addEventListener("click", () => {
                cart.removeChild(addedBook);
                updateTotalAmount(-book.price);
    });
}

function updateTotalAmount(addValue) {
    totalCount = totalCount + addValue;
    let totalAmountSum = `Total Amount: ${totalCount} $`;
    totalAmountTextBottom.innerHTML = totalAmountSum;
    totalAmountTextTop.innerHTML = totalAmountSum;
}

// BOOKS
fetch('./books.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        library(data);
    });

