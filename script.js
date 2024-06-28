const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");

hamburguer.addEventListener("click", () => {
  nav.classList.toggle("active");

  if (nav.classList.contains("active")) {
    // Desativar scroll quando o menu estiver ativo
    document.body.style.overflow = 'hidden';
  } else {
    // Ativar scroll quando o menu estiver fechado
    document.body.style.overflow = '';
  }
});



function toggleText() {
  const text = document.querySelector('.about-artigos p');
  const btn = document.querySelector('.btn-read-more');
  if (text.classList.contains('show')) {
    text.classList.remove('show');
    btn.textContent = 'Ler mais';
  } else {
    text.classList.add('show');
    btn.textContent = 'Ler menos';
  }
}

