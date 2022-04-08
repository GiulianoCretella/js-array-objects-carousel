/*
1.Dai tre array contenenti:
 - una lista ordinata di 5 immagini,
 - una lista ordinata dei relativi 5 luoghi e
 - una lista di 5 news,
 creare un array di oggetti (manualmente)
2. aggiornare il codice con i nuovi valori
3. aggiungere allo slider una timing function per far partire lo slider in automatico (con un bottone per fermarlo)
4. refactoring
*/

let cardArray=[
  {
    image:"img/01.jpg",
    title:"Svezia",
    text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
  },
  {
    image:"img/02.jpg",
    title:"Svizzera",
    text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit.I",
  },
  {
    image:"img/03.jpg",
    title:"Gran Bretagna",
    text:"Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
  },
  {
    image:"img/04.jpg",
    title:"Germania",
    text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquidì.",
  },
  {
    image:"img/05.jpg",
    title:"Paradise",
    text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  }
]
let itemTemplate = "";
let thumbTemplate = "";
let currentIndexActive = 0;

for (let i = 0; i < cardArray.length; i++) {
  let classActive = "";
  if (i === currentIndexActive) {
    classActive = "active";
  }
  itemTemplate += `
  <div class="item ${classActive}">
    <img src="${cardArray[i].image}" />
      <div class="title">
        <h2>${cardArray[i].title}</h2>
        <p>${cardArray[i].text}</p>
      </div>
  </div>`;
  thumbTemplate += `
  <div class="thumb ${classActive}">
    <img src="${cardArray[i].image}" alt="" />
  </div>`;
}

const itemsContainer = document.querySelector(".items-container");
const thumbsContainer = document.querySelector(".thumbs-container");

itemsContainer.innerHTML = itemTemplate;
thumbsContainer.innerHTML += thumbTemplate;

const next = document.querySelector(" .fa-circle-chevron-down");
const prev = document.querySelector(" .fa-circle-chevron-up");
 const buttonPlay=document.querySelector('.container-play')
 buttonPlay.addEventListener('click',()=>{
  let interval = setInterval(slideDown,3000)
  console.log(interval)
  const buttonStop = document.querySelector('.container-stop');
  buttonStop.addEventListener('click', stopInterval);
  function stopInterval(){
    clearInterval(interval);
  }
})


function slideDown() {
  //prendere immagine con currentIndexActive e togliere classe active
  const imgs = document.getElementsByClassName("item");
  imgs[currentIndexActive].classList.remove("active");
  const thumbs = document.getElementsByClassName("thumb");
  thumbs[currentIndexActive].classList.remove("active");
  //console.log(imgs);
  if (currentIndexActive === 4) {
    currentIndexActive = 0;
  } else {
    currentIndexActive++;
  }
  //console.log(currentIndexActive);
  imgs[currentIndexActive].classList.add("active");
  imgs[currentIndexActive].classList.add("w3-animate-fading")
  //console.log(currentIndexActive);
  thumbs[currentIndexActive].classList.add("active");

}
function slideUp() {
  const imgs = document.getElementsByClassName("item");
  imgs[currentIndexActive].classList.remove("active");
  const thumbs = document.getElementsByClassName("thumb");
  thumbs[currentIndexActive].classList.remove("active");
  //console.log(imgs);
  if (currentIndexActive === 0) {
    currentIndexActive = cardArray.length - 1;
  } else {
    currentIndexActive--;
  }
  //console.log(currentIndexActive);
  imgs[currentIndexActive].classList.add("active");
  //console.log(currentIndexActive);
  thumbs[currentIndexActive].classList.add("active");
}

next.addEventListener("click", slideDown);
prev.addEventListener("click", slideUp);
