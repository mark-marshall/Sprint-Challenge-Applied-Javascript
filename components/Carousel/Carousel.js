class Carousel {
 constructor(carouselElement) {
 this.carousel = carouselElement;

 this.leftButton = document.querySelector('.left-button');
 this.rightButton = document.querySelector('.right-button')

 currentIndex = 0;
 this.firstImage = document.querySelector(`.image[data-tab"0"]`);
 this.firstImage.style.display = 'block';

 this.leftButton.addEventListener('click', () => {this.decreaseIndexLeft()})
 this.rightButton.addEventListener('click', () =>  {this.increaseIndexRight()})
 }

 dereaseIndexLeft() {
 if (currentIndex = 0) {
    currentIndex = 3
 }  
 else {currentIndex = currentIndex-1}

 this.allImages = document.querySelectorAll('.image');
 this.allImages.forEach(img => img.style.display='none');

 this.activeImage = document.querySelector(`.image[data-tab"${currentIndex}"]`);
 this.activeImage.style.display ='block';

 }
 increaseIndexRight() {
 if (currentIndex = 3) {
     currentIndex = 0
 }
 else {currentIndex = currentIndex+1}
 
 this.allImages = document.querySelectorAll('.image');
 this.allImages.forEach(img => img.style.display='none');

 this.activeImage = document.querySelector(`.image[data-tab"${currentIndex}"]`);
 this.activeImage.style.display ='block';

 }
}


let carousel = document.querySelector('.carousel');

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/