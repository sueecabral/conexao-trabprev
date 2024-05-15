// const hamburguer = document.querySelector(".hamburguer");

// const nav = document.querySelector(".nav");

// hamburguer.addEventListener("click", () => nav.classList.toggle("active"));



// const hamburguer = document.querySelector(".hamburguer");
// const nav = document.querySelector(".nav");

// hamburguer.addEventListener("click", () => {
//   nav.classList.toggle("active");
  
//   if (nav.classList.contains("active")) {
//     // Desativar scroll quando o menu estiver ativo
//     document.body.style.overflow = 'hidden';
//   } else {
//     // Ativar scroll quando o menu estiver fechado
//     document.body.style.overflow = '';
//   }
// });

const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");

hamburguer.addEventListener("click", () => {
  nav.classList.toggle("active");
  
  if (nav.classList.contains("active")) {
    // Desativar scroll quando o menu estiver ativo
    document.body.style.overflow = 'hidden';
    // Adicionar event listener para impedir o scroll na página principal
    nav.addEventListener('wheel', preventScroll, { passive: false });
  } else {
    // Ativar scroll quando o menu estiver fechado
    document.body.style.overflow = '';
    // Remover event listener quando o menu estiver fechado
    nav.removeEventListener('wheel', preventScroll);
  }
});

// Função para impedir o scroll na página principal quando o menu estiver ativo
function preventScroll(event) {
  event.preventDefault();
}
