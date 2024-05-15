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
    // Desativar scroll na página principal quando o menu estiver ativo
    document.body.style.overflow = 'hidden';
    // Adicionar event listener para impedir o scroll na página principal
    nav.addEventListener('scroll', preventScroll);
  } else {
    // Ativar scroll na página principal quando o menu estiver fechado
    document.body.style.overflow = '';
    // Remover event listener quando o menu estiver fechado
    nav.removeEventListener('scroll', preventScroll);
  }
});

// Função para impedir o scroll na página principal quando o menu estiver ativo
function preventScroll(event) {
  event.stopPropagation();
}
