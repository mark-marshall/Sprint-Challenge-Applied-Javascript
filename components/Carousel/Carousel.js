class Carousel {
  constructor(carouselElement) {
    //Set the current Index to 0
    this.currentIndex = 0;
    //Set the first image on load to image[0]
    this.initialImage = document.querySelector(`.image[data-tab="0"]`).classList.add('show');
    //Grab each of the buttons in preparation for the event listener
    this.leftButton = document.querySelector('.left-button');
    this.rightButton = document.querySelector('.right-button');
    //Add event listeners
    this.leftButton.addEventListener('click', () => {this.decreaseIndexLeft();});
    this.rightButton.addEventListener('click', () => {this.increaseIndexRight();});
  }
  decreaseIndexLeft() {
    //Allow infinite looping
    if (this.currentIndex === 0) {
      this.currentIndex = 3;
    } else {
      this.currentIndex -= 1;
    }
    //Remove show class from all images
    this.allImages = document.querySelectorAll('.image');
    this.allImages.forEach(img => img.classList.remove('show'));
    this.allImages.forEach(img => img.classList.remove('show-left'));
    this.allImages.forEach(img => img.classList.remove('show-right'));
    //Grab active image and add show class
    this.activeImage = document.querySelector(`.image[data-tab="${this.currentIndex}"]`);
    this.activeImage.classList.add('show-left');
  }
  increaseIndexRight() {
    //Allow infinite looping
    if (this.currentIndex === 3) {
      this.currentIndex = 0;
    } else {
      this.currentIndex += 1;
    }
    //Remove show class from all images
    this.allImages = document.querySelectorAll('.image');
    this.allImages.forEach(img => img.classList.remove('show'));
    this.allImages.forEach(img => img.classList.remove('show-left'));
    this.allImages.forEach(img => img.classList.remove('show-right'));
    //Grab active image and add show class
    this.activeImage = document.querySelector(`.image[data-tab="${this.currentIndex}"]`);
    this.activeImage.classList.add('show-right');
  }
}

let carousel = document.querySelectorAll('.carousel').forEach(car => new Carousel(car));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
