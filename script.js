function showPage(pageId){

  const pages = document.querySelectorAll('.page');

  pages.forEach(page => {

    page.classList.remove('active');

  });

  document.getElementById(pageId)
  .classList.add('active');

  window.scrollTo(0,0);

}

document.getElementById("contactForm")
.addEventListener("submit", function(e){

  e.preventDefault();

  alert("Thank you for contacting SPACIO!");

  this.reset();

});