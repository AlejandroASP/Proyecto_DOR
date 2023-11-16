var stars = document.querySelectorAll('.star');
for (var i = 0; i < stars.length; i++) {
  stars[i].addEventListener('click', function() {
    var rating = this.getAttribute('data-rating');
    document.querySelector('.star-rating').setAttribute('data-rating', rating);
    for (var j = 0; j < rating; j++) {
      stars[j].setAttribute('class', 'star active');
    }
  });
}

var star5 = document.querySelector('.star-5');
star5.addEventListener('click', function() {
  for (var i = 0; i < stars.length; i++) {
    stars[i].setAttribute('class', 'star active');
  }
});