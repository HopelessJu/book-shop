let wrapper = document.getElementById('wrapper');
let header = document.createElement('header');
let footer = document.createElement('footer')
let main = document.querySelector('main');
wrapper.appendChild(header);
wrapper.appendChild(main);
wrapper.appendChild(footer);
let body = document.querySelector('body');

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

//CHECKBOX
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

// form validation start

let nameSurname = document.querySelectorAll('.input-ns');
nameSurname.forEach(el => {
    el.addEventListener('keyup', (e) => {
    e.target.value = e.target.value.split(' ').join('');
});
})

let today = new Date();
let tomorrow = new Date();
day = today.getDate() + 1;
month = today.getMonth() + 1;
tomorrow = today.getFullYear() + "-" + month + "-" + day;

document.getElementById('date').min = tomorrow;



const flatNumber = document.getElementById('flat');

flatNumber.addEventListener('keyup', (e) => {
    if (e.target.value[0] == "-") {
      e.target.value = e.target.value.slice(1);
    } else {
        e.target.value;
    }
})
//form validatioin end

let completeOrder = document.querySelector('.complete-order');
let closeOrderPopup = document.querySelector('.close-order-popup-btn');
let DeliveryPopup = document.querySelector('.delivery-popup-container');

let form = document.querySelector('.form-name');

let orderDetails = document.querySelector('.order-details');


// btn-disable
let inputs = document.querySelectorAll('.input-common');
inputs = Array.from(inputs);
inputs.forEach(inp => {
    inp.addEventListener('keyup', () => {
      completeOrder.disabled = !inputs.every(inp => inp.validity.valid);
    })
  })
//btn-disable end



//POPUP
  completeOrder.addEventListener("click", () => {
    DeliveryPopup.style.display="initial";
    body.classList.add('hidden');
    let name = document.querySelector("#name");
    let surname = document.querySelector('#surname');
    let street = document.querySelector('#street');
    let house = document.querySelector('#house');
    let flat = document.querySelector('#flat');
    let date = document.querySelector('#date')
    // let inputsfromform = Array.from(document.querySelectorAll (".form-name input")).reduce((acc, i) => ({...acc, [i.id]: i.value}), {});
    // console.log(inputsfromform);
    orderDetails.innerHTML = `<p>Customer's name: ${name.value} ${surname.value}.</p><p>Delivery adress: ${street.value} ${house.value}/${flat.value}.</p><p>Delivery date: ${date.value}</p>`
  })

closeOrderPopup.addEventListener("click", () => {
    DeliveryPopup.style.display="none";
    body.classList.remove('hidden');
    form.reset();
    completeOrder.disabled = true;
})

  street.addEventListener ('keyup', (e) => {
    e.target.value = e.target.value.trimLeft();
  })

  flat.addEventListener ('keyup', (e) => {
    e.target.value = e.target.value.trimLeft();
  })
