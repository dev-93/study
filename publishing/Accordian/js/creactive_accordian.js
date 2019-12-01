const closeBtn = document.querySelectorAll(".close"),
  card = document.querySelectorAll(".card");

closeBtn.forEach(function (el) {
  el.addEventListener("click", closeCard);
});

card.forEach(function (el) {
  el.addEventListener("click", openCard);
});

