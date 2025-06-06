const btnTopo = document.getElementById('btnTopo');

window.addEventListener('scroll', () => {
  if(window.scrollY > 300) {
    btnTopo.style.display = 'block';
  } else {
    btnTopo.style.display = 'none';
  }
});

btnTopo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


  // Quando a página carregar...
  document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os cards
    const cards = document.querySelectorAll(".cards-wrapper .card, .scott-wrapper .card");

    cards.forEach((card) => {
      card.addEventListener("click", function () {
        const img = card.querySelector("img").src;
        const title = card.querySelector(".card-title").textContent;
        const text = card.querySelector(".card-text").textContent;

        // Atualiza conteúdo do modal
        document.getElementById("bikeModalLabel").textContent = title;
        document.getElementById("modalImg").src = img;
        document.getElementById("modalText").textContent = text;

        // Abre o modal
        const bikeModal = new bootstrap.Modal(document.getElementById("bikeModal"));
        bikeModal.show();
      });
    });
  });



const toggleBtn = document.getElementById('toggle-theme');
if (toggleBtn) {
  const body = document.body;
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light');
    toggleBtn.textContent = '🌙';
  }

  toggleBtn.addEventListener('click', () => {
    const isLight = body.classList.toggle('light');
    toggleBtn.textContent = isLight ? '🌙' : '☀️';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
}
