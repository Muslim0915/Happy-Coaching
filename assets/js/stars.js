"use strict";

const settings = {
    getStarsElementsContainer: document.querySelectorAll('.stars'),
    starsCount: 5,
    confirmButtonContainer: document.querySelector('.confirm-btn'),
    getStars: document.querySelectorAll('.star'),
    ratingCounter: [],
};

const stars = {
    settings,

    init() {
        this.getStars();

    },
    createStars() {

        this.settings.getStarsElementsContainer.forEach((star) => {
            star.innerHTML = '';

            star.addEventListener('click', event => this.createStarsEventHandlers(event));
            for (let i = 0; i < this.settings.starsCount; i++) {
                const stars = document.createElement('div');
                stars.className = 'fa fa-star star';
                star.appendChild(stars);
            }
            const confirmButtonContainer = document.createElement('div');
            confirmButtonContainer.classList.add('confirm-btn');

            star.appendChild(confirmButtonContainer);
            const confirmButton = document.createElement('button');
            confirmButtonContainer.appendChild(confirmButton);
            confirmButton.innerHTML = 'Confirm';
        });
    },
    getStars() {
        this.createStars();
    },

    createStarsEventHandlers(event) {
        if (!this.isCorrectClick(event)) {
            return;
        }
        this.clickStarsEventChecker(event);
        this.showConfirmBtn(event);



    },
    clickStarsEventChecker(event) {
        const clickedStar = event.target;
        const starsContainer = clickedStar.parentNode;
        const stars = Array.from(starsContainer.children);

        const clickedIndex = stars.indexOf(clickedStar);

        if (clickedStar.classList.contains('checked')) {
            for (let i = clickedIndex + 1; i < stars.length; i++) {
                stars[i].classList.remove('checked');


            }
        } else {
            for (let i = 0; i <= clickedIndex; i++) {
                stars[i].classList.add('checked');

            }
        }
    },

    showConfirmBtn(event) {
        const confirmButtonContainer = event.target.parentNode.parentNode.querySelector('.confirm-btn');
        confirmButtonContainer.classList.add('active');
        confirmButtonContainer.addEventListener('click', event => this.confirmBtnEventHandler(event));

    },
    confirmBtnEventHandler(event) {
        const confirmButton = event.target.parentNode;
        confirmButton.classList.remove('active');


        console.log(this.counterStars());
        this.removeCheckedCLasses(event);
        this.clearRatingCounter(event);
    },
    removeCheckedCLasses(event) {
      const stars = event.target.parentNode.parentNode.querySelectorAll('.star');

      stars.forEach(star  => star.classList.remove('checked') );

    },

    counterStars() {

        const stars = document.querySelectorAll('.star');
        for (let i = 0; i < stars.length; i++) {
            if (stars[i].classList.contains('checked')) {
                this.settings.ratingCounter.push(i);

            }
        }
        return this.settings.ratingCounter;
    },
    clearRatingCounter(event) {
        return this.settings.ratingCounter = [];
    },


    isCorrectClick(event) {
        return event.target.classList.contains('star');

    },


}

window.onload = () => stars.init();
