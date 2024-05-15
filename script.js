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
  
  // Verificar se o menu hamburguer está ativo
  if (nav.classList.contains("active")) {
    // Adicionar classe para ocultar overflow
    document.body.classList.add('menu-active');
  } else {
    // Remover classe para restaurar o overflow padrão
    document.body.classList.remove('menu-active');
  }
});
