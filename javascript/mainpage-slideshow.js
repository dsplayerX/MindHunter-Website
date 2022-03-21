let i = 0;
let images = ["images/quotes/a-mind-needs-a-book.jpg", "images/quotes/good-books-dont-give.jpg", "images/quotes/a-reader-lives-a-thousand.jpg", "images/quotes/life-is-a-book.jpg", "images/quotes/never-trust-anyone-who-hasnt.jpg", "images/quotes/sleep-good-books-better.jpg", "images/quotes/today-reader-tomorrow-leader.jpg"];

function changeImage(){
    document.slides.src = images[i];

    if (i < images.length -1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImage()", 3000);
}

window.onload = changeImage;