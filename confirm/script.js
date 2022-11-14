let wrapper = document.getElementById('wrapper');
let header = document.createElement('header');
let footer = document.createElement('footer')
let main = document.querySelector('main');
wrapper.appendChild(header);
wrapper.appendChild(main);
wrapper.appendChild(footer);

//header
let headerWrapper = document.createElement('div');
headerWrapper.classList.add('header-wrapper');
let headerLogo = document.createElement('a');
headerLogo.classList.add('header-logo');
header.appendChild(headerWrapper);
headerWrapper.appendChild(headerLogo);

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
gitLink.innerHTML= "<img src='../assets/icons/git.svg' height=48 width=48>"
rssLink.href="https://rs.school/";
rssLink.innerHTML= "<img src='../assets/icons/rss.svg' height=72  width=72>";
year.innerHTML="2022 ©";

checkboxLimit();

function checkboxLimit() {
    let checkboxes = document.querySelectorAll('.checkbox-input');
    let limit = 2;
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].onclick = function() {
            let count = 0;
            for (let i = 0; i < checkboxes.length; i++) {
                count += (checkboxes[i].checked) ? 1 : 0;
            }
            if (count > limit) {
                alert ('You can select maximum of 2 gifts');
                this.checked =false
            }
        }
    }
}

let nameSurname = document.querySelectorAll('.input-ns');
console.log(nameSurname);

nameSurname.forEach(el => {
    el.addEventListener('keyup', (e) => {
    e.target.value = e.target.value.split(' ').join('');
});
})
