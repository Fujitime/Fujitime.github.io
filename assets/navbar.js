document.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");

  if (this.body.scrollTop > 1 || this.documentElement.scrollTop > 1) {
    navbar.classList.add("nav-scrolled", "fixed-top");
  } else {
    navbar.classList.remove("nav-scrolled", "fixed-top");
  }
});
