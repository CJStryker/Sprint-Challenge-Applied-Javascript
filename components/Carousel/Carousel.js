/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function Carousel() {
    const caro = document.createElement('div');
    const lBut = document.createElement('div');
    const rBut = document.createElement('div');
    const mImg = document.createElement('img');
    const cImg = document.createElement('img');
    const tImg = document.createElement('img');
    const ttImg = document.createElement('img');

    caro.classList.add('carousel');
    lBut.classList.add('left-button');
    rBut.classList.add('right-button');

    lBut.textContent = '◀';
    rBut.textContent = '▶';

    mImg.src = './assets/carousel/mountains.jpeg';
    cImg.src = './assets/carousel/computer.jpeg';
    tImg.src = './assets/carousel/trees.jpeg';
    ttImg.src = './assets/carousel/turntable.jpeg';


    caro.appendChild(lBut);
    caro.appendChild(mImg);
    caro.appendChild(cImg);
    caro.appendChild(tImg);
    caro.appendChild(ttImg);
    caro.appendChild(rBut);

    return caro;
}

const caroCont = document.querySelector('.carousel-container');

caroCont.appendChild(Carousel());