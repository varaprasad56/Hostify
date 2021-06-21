let result = document.querySelectorAll(".collapsible");
Array.from(result).forEach((btn) => {
  btn.addEventListener("click", function () {
    this.parentElement.parentElement.classList.toggle("collapsible--expanded");
  });
});
