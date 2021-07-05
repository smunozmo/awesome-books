// Mobile Menu Variables
const containerMenu = document.querySelector('.menu');
const closeMenu = document.querySelector('.menu-close');
const openMenu = document.querySelector('.menu-open');
const linkMenu = document.querySelectorAll('.menu a');

// Mobile Menu Functions
function menuOpen() {
  containerMenu.style.display = 'flex';
}
function menuClose() {
  containerMenu.style.display = 'none';
}
function toggleMenu() {
  if (window.matchMedia('(min-width: 768px)').matches) {
    containerMenu.style.display = 'flex';
  } else {
    containerMenu.style.display = 'none';
  }
}

// Mobile Menu Events
linkMenu.forEach((link) => {
  link.addEventListener('click', menuClose);
});

openMenu.addEventListener('click', menuOpen);
closeMenu.addEventListener('click', menuClose);
window.addEventListener('resize', toggleMenu);

// Featured Artists Variables

const featContent = [
  {
    pic: 'assets/img/artist1.png',
    name: 'Michael Dev',
    music: 'Indy Rock / Punk Rock',
    intro:
      'Get ready for the music of sit amet consectetur adipisicing elit. Repudiandae.',
  },
  {
    pic: 'assets/img/artist2.png',
    name: 'John Java',
    music: 'Country rock',
    intro:
      'Big band format sit amet consectetur adipisicing elit. Repudiandae harum nisi.',
  },
  {
    pic: 'assets/img/artist3.png',
    name: 'James Git',
    music: 'Punk Rock',
    intro:
      'For the first time in America amet consectetur elit. Repudiandae adipisicing.',
  },
  {
    pic: 'assets/img/artist4.png',
    name: 'Ruby Raily',
    music: 'Indy Rock / Pop',
    intro:
      'The unique voice from Canada consectetur adipisicing elit. Repudiandae harum.',
  },
  {
    pic: 'assets/img/artist5.png',
    name: 'Matt DOM',
    music: 'Acid Jazz',
    intro:
      'Best singer in 2020 amet adipisicing elit. Repudiandae harum nisi consectetur.',
  },
  {
    pic: 'assets/img/artist6.png',
    name: 'Peter Linters',
    music: 'Glam Metal',
    intro:
      'Born in Boston sit consectetur adipisicing elit. Repudiandae harum nisiamet.',
  },
];

// Featured Artists Functions

function createSection(e) {
  return `
  <div class='featured-item'>
  <div class='featured-image'>
  <img src='${featContent[e].pic}' alt='' />
  </div>
  <div class='featured-text'>
  <h3>${featContent[e].name}</h3>
  <h4>${featContent[e].music}</h4>
  <p>
  ${featContent[e].intro}
  </p>
  </div>
  </div>`;
}

const featSection = document.getElementById('featured');

if (featSection) {
  const feath2 = document.createElement('h2');
  const artist = document.createTextNode('Featured Artists');
  feath2.appendChild(artist);
  featSection.appendChild(feath2);
  const featdiv = document.createElement('div');
  featdiv.className = 'featured-wrap';
  featSection.appendChild(featdiv);

  for (let i = 0; i < featContent.length; i += 1) {
    featdiv.innerHTML += createSection(i);
  }
}
