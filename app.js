const sections = document.querySelectorAll('.section');
const btnSection = document.querySelectorAll('.buttons');
const btn = document.querySelectorAll('.btn');
const body = document.querySelector('.main-container');

function PageNav() {
  btn.forEach((button) => {
    button.addEventListener('click', function () {
      // Select all elements with the class 'active-btn'
      let currentBtn = document.querySelectorAll('.active-btn');
      // If there's an active button, remove its 'active-btn' class(there should ideally be only one active button at a time, this is the currently active button)
      if (currentBtn.length > 0) {
        currentBtn[0].classList.remove('active-btn');
      }
      this.classList.add('active-btn');
    });
  });
  body.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
      btn.forEach((button) => {
        button.classList.remove('active');
      });
      e.target.classList.add('active');
      sections.forEach((section) => {
        section.classList.remove('active');
      });
      const ele = document.getElementById(id);
      ele.classList.add('active');
    }
  });
}
PageNav();
